const API="https://knowledge-center-updates.bolekpadjelvan.workers.dev";
const feed=document.querySelector("[data-chapter-id]");
function addText(parent,tag,text,className){const el=document.createElement(tag);el.textContent=text;if(className)el.className=className;parent.append(el);return el;}
function formatDate(value){if(!value)return "Not yet checked";return new Intl.DateTimeFormat("en-MY",{dateStyle:"medium",timeStyle:"short",timeZone:"Asia/Kuala_Lumpur"}).format(new Date(value));}
if(feed){const status=feed.querySelector(".feed-status"),results=feed.querySelector(".feed-results");
 try{
  const response=await fetch(API+"/v1/chapters/"+encodeURIComponent(feed.dataset.chapterId),{signal:AbortSignal.timeout(10000),credentials:"omit"});
  if(!response.ok)throw Error("Update service unavailable");
  const record=await response.json();
  if(record.status==="pending"){status.textContent="Awaiting the first scheduled source check. Daily schedule: 08:00–08:25 Malaysia time; each chapter has its own minute.";}
  else{
   const age=Date.now()-Date.parse(record.checkedAt);
   status.textContent="Last attempted check: "+formatDate(record.checkedAt)+". "+(age>36*3600000?"Result is stale; inspect the scheduled Worker. ":record.status==="checked"?"All mapped sources were checked. ":"Some sources could not be checked. ")+"Last fully successful chapter check: "+formatDate(record.lastSuccessfulCheckAt)+".";
   status.classList.toggle("feed-stale",age>36*3600000||record.status!=="checked");
  }
  const labels={pending:"Awaiting first check",baseline:"Initial source baseline",unchanged:"No outline change detected",outline_changed:"Source outline changed — review needed",check_failed:"Source check failed"};
  for(const source of record.sources||[]){const card=addText(results,"article","", "source-update");const anchor=document.createElement("a");const target=new URL(source.url);if(target.protocol!=="https:")continue;anchor.href=target.href;anchor.target="_blank";anchor.rel="noopener noreferrer";anchor.textContent=source.title||target.hostname;card.append(anchor);
   addText(card,"p",labels[source.status]||"Unknown source state","source-state");
   addText(card,"p",target.href,"source-url");
   if(source.checkedAt)addText(card,"p","Attempt: "+formatDate(source.checkedAt)+" · Successful check: "+formatDate(source.lastSuccessAt),"source-time");
   if(source.lastChangeAt)addText(card,"p","Last detected outline change: "+formatDate(source.lastChangeAt));
   if(source.error)addText(card,"p","Check result: "+source.error+". Previously successful data is retained when available.");
   if(source.truncated)addText(card,"p","Comparison used a bounded document prefix, not the entire page.");
  }
 }catch{status.textContent="Live source updates could not load. The complete chapter and static references remain available; retry later.";}
}
