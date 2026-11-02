const $ = selector => document.querySelector(selector);
const announce = message => { const status=$("#copy-status"); if(status)status.textContent=message; };
async function copyText(value,button){
  let copied=false;
  try{if(navigator.clipboard&&isSecureContext){await navigator.clipboard.writeText(value);copied=true;}}catch{}
  if(!copied){const field=document.createElement("textarea");field.value=value;field.style.cssText="position:fixed;opacity:0";document.body.append(field);field.select();try{copied=document.execCommand("copy");}finally{field.remove();}}
  if(!copied)throw Error("Clipboard unavailable");
  announce("Copied to clipboard");
  const label=button.textContent;button.textContent="Copied";
  setTimeout(()=>{button.textContent=label;},1600);
}
function bindCopy(button,value){button.addEventListener("click",async()=>{try{await copyText(value(),button);}catch{announce("Copy unavailable. Select the visible text manually.");}});}
function articleText(){
  const clone=$("article").cloneNode(true);
  clone.querySelectorAll("button,.mermaid,.mermaid-preview,.chapter-toc").forEach(node=>node.remove());
  clone.querySelectorAll("details").forEach(node=>node.open=true);
  clone.style.cssText="position:fixed;left:-100000px;width:900px;white-space:normal";
  clone.setAttribute("aria-hidden","true");document.body.append(clone);
  try{return clone.innerText;}finally{clone.remove();}
}
document.querySelectorAll("[data-copy-code]").forEach(button=>{
  const source=button.closest(".code-block")?.querySelector("code");
  if(source)bindCopy(button,()=>source.textContent);
});
if($("[data-copy-page]"))bindCopy($("[data-copy-page]"),articleText);
if($("[data-copy-link]"))bindCopy($("[data-copy-link]"),()=>location.href);
document.querySelectorAll(".code-block").forEach(block=>{
  const label=block.querySelector(".code-label");if(!label)return;
  const wrap=document.createElement("button");wrap.type="button";wrap.textContent="Wrap code";wrap.setAttribute("aria-pressed","false");
  wrap.addEventListener("click",()=>{const enabled=block.classList.toggle("wrap-code");wrap.setAttribute("aria-pressed",String(enabled));wrap.textContent=enabled?"Scroll code":"Wrap code";});
  label.append(wrap);
});
try{const theme=localStorage.getItem("knowledge-theme");document.body.classList.toggle("dark",theme==="dark");document.body.classList.toggle("light",theme!=="dark");}catch{}
const themeButton=$("[data-theme-toggle]");
function syncTheme(){const light=!document.body.classList.contains("dark");themeButton?.setAttribute("aria-pressed",String(light));if(themeButton)themeButton.textContent=light?"Dark theme":"Light theme";}
syncTheme();
themeButton?.addEventListener("click",()=>{document.body.classList.toggle("dark");document.body.classList.toggle("light",!document.body.classList.contains("dark"));syncTheme();try{localStorage.setItem("knowledge-theme",document.body.classList.contains("dark")?"dark":"light");}catch{}});
$("[data-print]")?.addEventListener("click",()=>window.print());
document.body.classList.add("enhanced");
const menu=$(".mobile-nav-toggle");
menu?.addEventListener("click",()=>{const open=document.body.classList.toggle("nav-open");menu.setAttribute("aria-expanded",String(open));});
const links=[...document.querySelectorAll("#chapter-navigation a")];
$("#chapter-filter")?.addEventListener("input",event=>{
  const query=event.target.value.toLowerCase().trim();let count=0;
  links.forEach(link=>{const show=link.textContent.toLowerCase().includes(query);link.hidden=!show;if(show)count++;});
  $("#filter-status").textContent=count+" chapters found";
  if(query){document.body.classList.add("nav-open");menu?.setAttribute("aria-expanded","true");}
});
let progressQueued=false;
function updateProgress(){const total=document.documentElement.scrollHeight-innerHeight;const fraction=total>0?Math.min(1,Math.max(0,scrollY/total)):1;$(".reading-progress span").style.transform="scaleX("+fraction+")";progressQueued=false;}
addEventListener("scroll",()=>{if(!progressQueued){progressQueued=true;requestAnimationFrame(updateProgress);}},{passive:true});
addEventListener("resize",updateProgress);updateProgress();
const dialog=$("#knowledge-search"),query=$("#knowledge-query"),results=$("#search-results"),searchStatus=$("#search-status");
let searchData,searchLoad,searchSequence=0,opener;
async function loadSearch(){if(searchData)return searchData;if(!searchLoad)searchLoad=fetch("./assets/search-index.json").then(async response=>{if(!response.ok)throw Error("Search index unavailable");const data=await response.json();if(!Array.isArray(data.chapters))throw Error("Invalid search index");searchData=data.chapters;return searchData;}).catch(error=>{searchLoad=null;throw error;});return searchLoad;}
function openSearch(){opener=document.activeElement;dialog.showModal();query.focus();loadSearch().catch(()=>{searchStatus.textContent="Search could not load. Use the chapter navigation to browse.";});}
$("[data-search-open]")?.addEventListener("click",openSearch);
$("[data-search-close]")?.addEventListener("click",()=>dialog.close());
dialog?.addEventListener("close",()=>opener?.focus());
dialog?.addEventListener("click",event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
query?.addEventListener("input",async()=>{
  const sequence=++searchSequence,term=query.value.trim().toLowerCase();results.replaceChildren();
  if(term.length<2){searchStatus.textContent="Enter at least two characters.";return;}
  searchStatus.textContent="Searching…";
  try{
    const data=await loadSearch();if(sequence!==searchSequence)return;
    const terms=term.split(/\s+/);
    const matches=data.map(chapter=>{const title=chapter.title.toLowerCase(),text=chapter.text.toLowerCase();return {chapter,score:terms.reduce((score,t)=>score+(title.includes(t)?10:0)+(text.includes(t)?1:0),0),matches:terms.every(t=>title.includes(t)||text.includes(t))};}).filter(x=>x.matches).sort((a,b)=>b.score-a.score).slice(0,20);
    for(const {chapter}of matches){const li=document.createElement("li"),a=document.createElement("a"),p=document.createElement("p");a.href=chapter.url+(chapter.url.includes('?')?'&':'?')+'q='+encodeURIComponent(term);a.textContent=chapter.title;let position=chapter.text.toLowerCase().indexOf(terms[0]);position=Math.max(0,position-70);p.textContent=(position?"…":"")+chapter.text.slice(position,position+230)+"…";li.append(a,p);results.append(li);}
    searchStatus.textContent=matches.length?matches.length+" matching chapters":"No matches. Try a shorter term.";
  }catch{searchStatus.textContent="Search unavailable. Browse chapter titles in the navigation.";}
});
document.addEventListener("keydown",event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){event.preventDefault();if(!dialog.open)openSearch();}if(event.key==="Escape"&&document.body.classList.contains("nav-open")){document.body.classList.remove("nav-open");menu?.setAttribute("aria-expanded","false");}});
async function renderDiagrams(){
  const nodes=[...document.querySelectorAll("pre.mermaid")];if(!nodes.length)return;
  try{
    const {default:mermaid}=await import("https://cdn.jsdelivr.net/npm/mermaid@12.2.0/dist/mermaid.esm.min.mjs");
    mermaid.initialize({startOnLoad:false,securityLevel:"strict",theme:"neutral",flowchart:{htmlLabels:false}});
    for(let i=0;i<nodes.length;i++){const node=nodes[i],source=node.textContent;try{const {svg}=await mermaid.render("knowledge-diagram-"+i,source);const preview=document.createElement("div");preview.className="mermaid-preview";preview.setAttribute("role","img");preview.setAttribute("aria-label",node.closest("figure")?.querySelector("figcaption")?.textContent||"Architecture diagram");preview.innerHTML=svg;node.replaceWith(preview);}catch{const message=document.createElement("p");message.className="diagram-warning";message.textContent="This diagram could not render. Read or copy its source below.";node.before(message);}}
  }catch{announce("Diagram previews unavailable; complete Mermaid source remains visible.");}
}
renderDiagrams();


/* Knowledge Center interactive engineering tools — documentation only, no remote code execution. */
(function(){
  const keyPrefix="kc-check-v1:"+location.pathname+":";
  const article=document.querySelector("article");
  if(!article)return;
  // Per-chapter checklists generated from actual verification matrix rows.
  const acceptance=article.querySelector("#acceptance");
  if(acceptance){
    const rows=[...acceptance.querySelectorAll("tbody tr")].slice(0,18);
    if(rows.length){
      const field=document.createElement("section");field.className="audit-checklist";field.setAttribute("aria-label","Interactive verification checklist");
      const title=document.createElement("h3");title.textContent="Interactive verification checklist (this browser only)";
      const note=document.createElement("p");note.textContent="Progress is saved locally to this browser. Checking an item is not proof of production compliance or deployment approval.";
      const counter=document.createElement("p");counter.setAttribute("role","status");counter.className="audit-count";
      const list=document.createElement("div");list.className="audit-items";
      const boxes=rows.map((tr,i)=>{const label=document.createElement("label"),box=document.createElement("input"),span=document.createElement("span");box.type="checkbox";box.checked=(()=>{try{return localStorage.getItem(keyPrefix+i)==="1"}catch{return false}})();span.textContent=(tr.cells[0]?.textContent||"Verification "+(i+1)).trim();label.append(box,span);list.append(label);box.addEventListener("change",()=>{try{localStorage.setItem(keyPrefix+i,box.checked?"1":"0")}catch{};update()});return box});
      function update(){counter.textContent=boxes.filter(b=>b.checked).length+" / "+boxes.length+" items marked reviewed"}
      update();field.append(title,note,counter,list);acceptance.append(field);
    }
  }
  // Code selectors preserve the original snippet; additional language formats are only shown when present.
  article.querySelectorAll(".code-block").forEach((block,i)=>{
    const code=block.querySelector("pre code");if(!code||block.closest("#diagram"))return;
    const source=code.textContent.trim();if(source.length<25)return;
    const label=block.querySelector(".code-label");
    const language=/\bwrangler\.toml\b|\[\[d1_databases\]\]|\[vars\]/i.test(source)?"Wrangler TOML":/\bFROM\s+\w+|\bRUN\s+apt-get/m.test(source)?"Docker":/^\s*(\$ |npm |npx |curl |wrangler |git |pnpm )/m.test(source)?"Bash":/\b(const|interface|type|export|async|await)\b/.test(source)?"TypeScript":"Code";
    const tabs=document.createElement("div");tabs.className="code-switcher";tabs.setAttribute("role","tablist");tabs.setAttribute("aria-label","Available code formats");
    const button=document.createElement("button");button.type="button";button.setAttribute("role","tab");button.setAttribute("aria-selected","true");button.textContent=language;tabs.append(button);
    // Only expose a second tab when a validated paired snippet exists in this section.
    const section=block.closest("section");const others=section?[...section.querySelectorAll(".code-block")].filter(b=>b!==block):[];
    for(const other of others.slice(0,3)){const peer=other.querySelector("pre code");if(!peer||peer.textContent.trim().length<25)continue;const tag=document.createElement("button");tag.type="button";tag.setAttribute("role","tab");tag.setAttribute("aria-selected","false");tag.textContent=(other.querySelector(".code-label")?.firstChild?.textContent||"Related snippet").trim().slice(0,28)||"Related snippet";tag.onclick=()=>{peer.closest(".code-block").scrollIntoView({behavior:"smooth",block:"center"})};tabs.append(tag)}
    const verify=document.createElement("button");verify.type="button";verify.textContent="Check snippet";verify.title="Checks for empty content and obvious placeholders; does not run code";verify.onclick=()=>{const placeholders=/\b(TODO|FIXME|YOUR_API_KEY|replace-me|changeme)\b/i.test(source);announce(placeholders?"Review snippet: placeholders found.":"Snippet is nonempty; execution and syntax are not verified.")};tabs.append(verify);
    block.before(tabs);
  });
  // Use explicit user-initiated zoom, without executing SVG scripts.
  function zoom(svg,label){
    const dlg=document.createElement("dialog");dlg.className="mermaid-zoom";dlg.setAttribute("aria-label",label||"Architecture diagram");
    const bar=document.createElement("div");bar.className="zoom-tools";
    const close=document.createElement("button");close.textContent="Close";close.onclick=()=>dlg.close();
    const minus=document.createElement("button");minus.textContent="−";const plus=document.createElement("button");plus.textContent="+";
    const viewport=document.createElement("div");viewport.className="zoom-viewport";const content=document.createElement("div");content.className="zoom-inner";
    const copy=svg.cloneNode(true);copy.removeAttribute("id");content.append(copy);viewport.append(content);
    let factor=1;function scale(v){factor=Math.max(.5,Math.min(4,v));content.style.transform="scale("+factor+")"}
    plus.onclick=()=>scale(factor+.25);minus.onclick=()=>scale(factor-.25);
    bar.append(minus,plus,close);dlg.append(bar,viewport);document.body.append(dlg);
    dlg.addEventListener("close",()=>dlg.remove());dlg.showModal();
  }
  const observer=new MutationObserver(()=>{article.querySelectorAll(".mermaid-preview:not([data-zoom-ready])").forEach(preview=>{
    preview.dataset.zoomReady="yes";const btn=document.createElement("button");btn.type="button";btn.className="diagram-zoom-button";btn.textContent="Zoom diagram";btn.onclick=()=>{const svg=preview.querySelector("svg");if(svg)zoom(svg,preview.getAttribute("aria-label"))};preview.before(btn);
  })});
  observer.observe(article,{childList:true,subtree:true});
  article.querySelectorAll(".mermaid-preview").forEach(preview=>{if(!preview.dataset.zoomReady){const btn=document.createElement("button");btn.textContent="Zoom diagram";btn.onclick=()=>zoom(preview.querySelector("svg"),"Architecture");preview.before(btn);preview.dataset.zoomReady="yes"}});
  // Status is intentionally not inferred from repository commits or doc availability.
  const sidebar=document.querySelector(".sidebar");
  if(sidebar){const box=document.createElement("div");box.className="deploy-status";box.innerHTML='<strong>Repository status</strong><p role="status">Checking latest GitHub Actions run…</p><small>Workflow result is not proof that the site is live.</small>';sidebar.append(box);
    fetch("https://api.github.com/repos/DevJel/knowledge-center-system/actions/runs?per_page=1",{headers:{Accept:"application/vnd.github+json"}}).then(async res=>{if(!res.ok)throw Error("unavailable");const json=await res.json();const run=json.workflow_runs?.[0];if(!run)throw Error("no runs");box.querySelector("p").textContent="Latest workflow: "+(run.conclusion||run.status||"unknown");const a=document.createElement("a");a.href=run.html_url;a.target="_blank";a.rel="noopener noreferrer";a.textContent="View workflow evidence";box.append(a)}).catch(()=>{box.querySelector("p").textContent="Workflow status: unavailable / not verified"});
  }
  // Deep-link to matching term within actual headings, paragraphs and code blocks.
  const term=new URLSearchParams(location.search).get("q");
  if(term&&term.length>=2&&term.length<=100){
    const normalized=term.toLocaleLowerCase();const targets=[...article.querySelectorAll("h1,h2,h3,h4,p,li,pre code")];
    const matched=targets.find(el=>el.textContent.toLocaleLowerCase().includes(normalized));if(matched){matched.classList.add("search-target");requestAnimationFrame(()=>matched.scrollIntoView({block:"center"}))}
  }
  document.querySelector("#knowledge-query")?.addEventListener("input",()=>{document.querySelectorAll("#search-results a").forEach(a=>{const q=document.querySelector("#knowledge-query")?.value.trim();if(q&&a.getAttribute("href")?.startsWith("./")){const u=new URL(a.href);u.searchParams.set("q",q);a.href=u.href}})});
})();


/* Accessible format switching for explicitly authored, paired code examples. */
document.querySelectorAll("[data-example-switcher]").forEach(root=>{
 const buttons=[...root.querySelectorAll("[data-example-tab]")],panels=[...root.querySelectorAll("[data-example-panel]")],status=root.querySelector("[data-example-status]");
 let active=0;
 function select(index){active=index;buttons.forEach((b,i)=>{b.setAttribute("aria-selected",String(i===index));b.tabIndex=i===index?0:-1});panels.forEach((p,i)=>p.hidden=i!==index);status.textContent=buttons[index].textContent+" selected."}
 buttons.forEach((button,i)=>{button.onclick=()=>select(i);button.onkeydown=e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();const next=(i+(e.key==="ArrowRight"?1:-1)+buttons.length)%buttons.length;select(next);buttons[next].focus()}}});
 root.querySelector("[data-example-copy]")?.addEventListener("click",async()=>{try{await copyText(panels[active].querySelector("code").textContent,root.querySelector("[data-example-copy]"))}catch{status.textContent="Copy unavailable; select the visible snippet."}});
 root.querySelector("[data-example-validate]")?.addEventListener("click",()=>{const code=panels[active].querySelector("code").textContent;status.textContent=/REPLACE_|YOUR_|TODO|FIXME/.test(code)?"Review required: example contains placeholder values.":"No obvious placeholders found. Syntax and deployment have NOT been tested."});
 select(0);
});
