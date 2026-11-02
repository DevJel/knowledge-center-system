export const CHAPTERS = [{"id":"overview","group":"Foundations","title":"Overview & Vision","order":0,"related":["phase1","phase2","llm-selection"],"references":["https://developers.openai.com/api/docs/models","https://opentelemetry.io/docs/concepts/"]},{"id":"phase1","group":"Foundations","title":"Discovery & Scoping","order":1,"related":["overview","phase3","phase5"],"references":["https://docs.github.com/en/issues","https://www.w3.org/WAI/WCAG22/quickref/"]},{"id":"phase2","group":"Foundations","title":"System Architecture","order":2,"related":["databases","sessions","infrastructure","chapter-01-production-ai-architecture"],"references":["https://developers.cloudflare.com/workers/runtime-apis/bindings/","https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"]},{"id":"phase3","group":"Foundations","title":"Data & Prototyping","order":3,"related":["phase1","quality","ai-security"],"references":["https://developers.openai.com/api/docs/guides/evals","https://developers.openai.com/api/docs/models"]},{"id":"phase4","group":"Foundations","title":"Agent Development","order":4,"related":["model-routing","ai-security","apis","queues"],"references":["https://developers.openai.com/api/docs/guides/function-calling","https://platform.claude.com/docs/en/models/overview"]},{"id":"phase5","group":"Foundations","title":"Client Review & Feedback","order":5,"related":["sessions","quality","operations"],"references":["https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html","https://docs.github.com/en/issues"]},{"id":"phase6","group":"Foundations","title":"Deployment","order":6,"related":["infrastructure","databases","quality","operations"],"references":["https://developers.cloudflare.com/workers/wrangler/configuration/","https://docs.github.com/en/pages"]},{"id":"phase7","group":"Foundations","title":"Post-Launch & Scale","order":7,"related":["queues","model-routing","operations"],"references":["https://opentelemetry.io/docs/concepts/signals/","https://developers.cloudflare.com/workers/platform/limits/"]},{"id":"appendices","group":"Foundations","title":"Glossary & Reference Templates","order":8,"related":["mermaid-diagrams","ai-updates","phase2"],"references":["https://docs.github.com/en/get-started/writing-on-github","https://mermaid.js.org/syntax/flowchart.html"]},{"id":"databases","group":"Application Platform","title":"Databases & Storage","order":9,"related":["phase2","sessions","queues","operations"],"references":["https://developers.cloudflare.com/d1/","https://developers.cloudflare.com/d1/reference/migrations/","https://www.postgresql.org/docs/current/ddl-constraints.html"]},{"id":"authentication","group":"Application Platform","title":"Authentication & SSO","order":10,"related":["sessions","otp","email"],"references":["https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html","https://openid.net/specs/openid-connect-core-1_0.html"]},{"id":"sessions","group":"Application Platform","title":"Sessions & Authorization","order":11,"related":["authentication","databases","apis"],"references":["https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html","https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"]},{"id":"otp","group":"Application Platform","title":"Email OTP & Recovery","order":12,"related":["authentication","email","databases","queues"],"references":["https://cheatsheetseries.owasp.org/cheatsheets/Forgot_Password_Cheat_Sheet.html","https://developers.cloudflare.com/turnstile/get-started/server-side-validation/"]},{"id":"email","group":"Application Platform","title":"Email Delivery","order":13,"related":["otp","queues","infrastructure","operations"],"references":["https://docs.aws.amazon.com/ses/latest/dg/send-email-smtp.html","https://docs.aws.amazon.com/ses/latest/dg/smtp-connect.html","https://docs.aws.amazon.com/ses/latest/dg/request-production-access.html"]},{"id":"apis","group":"Application Platform","title":"APIs & Webhooks","order":14,"related":["sessions","queues","quality"],"references":["https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html","https://developers.cloudflare.com/workers/runtime-apis/request/"]},{"id":"infrastructure","group":"Application Platform","title":"Cloud, DNS & Secrets","order":15,"related":["phase6","databases","email","operations"],"references":["https://developers.cloudflare.com/workers/configuration/secrets/","https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site"]},{"id":"queues","group":"Application Platform","title":"Queues & Reliability","order":16,"related":["databases","email","operations","apis"],"references":["https://developers.cloudflare.com/queues/","https://developers.cloudflare.com/queues/configuration/delivery-delays/"]},{"id":"ai-security","group":"AI Engineering","title":"AI, RAG & Tool Security","order":17,"related":["databases","sessions","phase4","quality"],"references":["https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html","https://developers.openai.com/api/docs/guides/retrieval"]},{"id":"quality","group":"Operations & Quality","title":"Testing & Accessibility","order":18,"related":["phase3","sessions","otp","phase6"],"references":["https://www.w3.org/WAI/WCAG22/quickref/","https://docs.github.com/en/actions"]},{"id":"operations","group":"Operations & Quality","title":"Monitoring & Recovery","order":19,"related":["queues","databases","email","phase7"],"references":["https://opentelemetry.io/docs/concepts/signals/","https://developers.cloudflare.com/workers/observability/"]},{"id":"llm-selection","group":"AI Engineering","title":"LLMs by Task","order":20,"related":["ai-updates","model-routing","quality","ai-security"],"references":["https://developers.openai.com/api/docs/models","https://platform.claude.com/docs/en/models/overview","https://ai.google.dev/gemini-api/docs/models"]},{"id":"ai-updates","group":"AI Engineering","title":"AI Research & Updates","order":21,"related":["llm-selection","model-routing","quality"],"references":["https://developers.openai.com/api/docs/deprecations","https://platform.claude.com/docs/en/models/overview","https://ai.google.dev/gemini-api/docs/models"]},{"id":"model-routing","group":"AI Engineering","title":"Model Routing & Evaluation","order":22,"related":["llm-selection","phase3","chapter-01-production-ai-architecture"],"references":["https://developers.openai.com/api/reference/resources/responses/methods/create","https://developers.openai.com/api/docs/models"]},{"id":"mermaid-diagrams","group":"Operations & Quality","title":"Mermaid Diagram Library","order":23,"related":["phase2","databases","otp","model-routing"],"references":["https://mermaid.js.org/syntax/flowchart.html","https://mermaid.js.org/syntax/sequenceDiagram.html","https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-diagrams"]},{"id":"chapter-01-production-ai-architecture","group":"Implementation Chapters","title":"Production AI Architecture","order":24,"related":["phase2","authentication","model-routing","databases","operations"],"references":["https://developers.openai.com/api/reference/resources/responses/methods/create","https://developers.cloudflare.com/workers/runtime-apis/bindings/","https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"]},{"id":"worker-implementation","group":"Implementation Chapters","title":"Worker Architecture & Implementation","order":25,"related":["infrastructure","queues","apis","operations","ai-updates"],"references":["https://developers.cloudflare.com/workers/configuration/cron-triggers/","https://developers.cloudflare.com/workers/runtime-apis/handlers/scheduled/","https://developers.cloudflare.com/kv/"]},{"id":"web-application-engineering","group":"Application Engineering","title":"Web Application Engineering — End-to-End Blueprint","order":26,"related":["phase1","phase2","authentication","sessions","otp","email","apis","databases","infrastructure","queues","worker-implementation","quality","operations"],"references":["https://developers.cloudflare.com/workers/","https://duo.com/docs/duoweb","https://owasp.org/projects/top-ten?lang=en"]}];
const ALLOWED_HOSTS = new Set(CHAPTERS.flatMap(c=>c.references).map(url=>new URL(url).hostname));
const MAX_BYTES=262144;
const TIMEOUT_MS=8000;
function allowed(url){const u=new URL(url);return u.protocol==="https:"&&ALLOWED_HOSTS.has(u.hostname)&&!u.username&&!u.password&&u.port==="";}
function clean(text){return text.replace(/<[^>]*>/g," ").replace(/&(?:amp|lt|gt|quot|#39|nbsp);/g," ").replace(/\s+/g," ").trim().slice(0,160);}
export function inspectOutline(html){
  const title=clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||"");
  const main=html.match(/<main\b[^>]*>([\s\S]*)/i)?.[1]||"";
  const headings=[...main.matchAll(/<h[123]\b[^>]*>([\s\S]*?)<\/h[123]>/gi)].slice(0,5).map(match=>clean(match[1])).filter(Boolean);
  return {title,headings};
}
async function digest(value){
 const bytes=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(JSON.stringify(value)));
 return [...new Uint8Array(bytes)].map(b=>b.toString(16).padStart(2,"0")).join("");
}
async function readPrefix(response){
 if(!response.body)return {text:"",truncated:false};
 const reader=response.body.getReader(),decoder=new TextDecoder();let bytes=0,text="",truncated=false;
 try{while(true){const item=await reader.read();if(item.done)break;const room=MAX_BYTES-bytes;if(item.value.byteLength>room){text+=decoder.decode(item.value.slice(0,room),{stream:true});truncated=true;await reader.cancel();break;}bytes+=item.value.byteLength;text+=decoder.decode(item.value,{stream:true});if(bytes>=MAX_BYTES){truncated=true;await reader.cancel();break;}}text+=decoder.decode();return {text,truncated};}finally{reader.releaseLock();}
}
export async function inspectSource(url,previous,checkedAt,fetcher=fetch){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),TIMEOUT_MS);
 try{
  if(!allowed(url))throw Error("source_not_allowed");
  const headers={"User-Agent":"MASTER-AI-Knowledge-Reference-Checker/1.0","Accept":"text/html,text/plain;q=0.8"};
  if(previous?.etag)headers["If-None-Match"]=previous.etag;
  if(previous?.lastModified)headers["If-Modified-Since"]=previous.lastModified;
  let current=url,response;
  for(let redirect=0;redirect<=2;redirect++){
   response=await fetcher(current,{headers,redirect:"manual",signal:controller.signal});
   if(![301,302,303,307,308].includes(response.status))break;
   const location=response.headers.get("location");await response.body?.cancel();
   if(!location||redirect===2)throw Error("redirect_limit");
   current=new URL(location,current).href;if(!allowed(current))throw Error("redirect_not_allowed");
  }
  if(response.status===304&&previous?.digest){return {...previous,url,resolvedUrl:current,checkedAt,status:"unchanged",httpStatus:304,error:null,lastSuccessAt:checkedAt};}
  if(!response.ok){await response.body?.cancel();throw Error("http_"+response.status);}
  const type=response.headers.get("content-type")||"";
  if(!/text\/html|text\/plain|application\/xhtml\+xml/i.test(type)){await response.body?.cancel();throw Error("unsupported_content_type");}
  const prefix=await readPrefix(response),outline=inspectOutline(prefix.text);
  if(!outline.title&&!outline.headings.length)throw Error("outline_not_available");
  const signature=await digest(outline),changed=Boolean(previous?.digest&&previous.digest!==signature);
  return {url,resolvedUrl:current,status:previous?.digest?(changed?"outline_changed":"unchanged"):"baseline",checkedAt,lastSuccessAt:checkedAt,lastChangeAt:changed?checkedAt:(previous?.lastChangeAt||null),title:outline.title,headings:outline.headings,digest:signature,etag:response.headers.get("etag"),lastModified:response.headers.get("last-modified"),httpStatus:response.status,truncated:prefix.truncated,comparisonScope:"title_and_first_five_main_headings",error:null};
 }catch(error){
  const message=controller.signal.aborted?"timeout":String(error.message||"source_check_failed");
  return {...(previous||{}),url,status:"check_failed",checkedAt,error:message,lastSuccessAt:previous?.lastSuccessAt||null};
 }finally{clearTimeout(timer);}
}
export async function refreshChapter(chapter,env,now=new Date(),fetcher=fetch,options={}){
 const key="chapter:"+chapter.id,checkedAt=now.toISOString();
 const old=await env.UPDATE_STATE.get(key,"json");
 if(!options.force&&old?.checkedAt?.slice(0,10)===checkedAt.slice(0,10)&&old.sources?.every(source=>source.status!=="check_failed"))return old;
 const sources=[];
 // Sequential fetches keep the maximum outgoing connection count bounded.
 for(const url of chapter.references){
  const previous=old?.sources?.find(source=>source.url===url);
  sources.push(await inspectSource(url,previous,checkedAt,fetcher));
 }
 const failures=sources.filter(s=>s.status==="check_failed").length;
 const record={chapterId:chapter.id,title:chapter.title,checkedAt,lastSuccessfulCheckAt:failures===0?checkedAt:old?.lastSuccessfulCheckAt||null,status:failures===0?"checked":failures===sources.length?"failed":"partial",sources,history:[{checkedAt,failed:failures,changed:sources.filter(s=>s.status==="outline_changed").length},...(old?.history||[])].slice(0,7),editorialReviewRequired:true};
 await env.UPDATE_STATE.put(key,JSON.stringify(record));
 const reviewSignals=sources.filter(source=>source.status==="outline_changed"||source.status==="check_failed").map(source=>({url:source.url,status:source.status,title:source.title||null,headings:source.headings||[],error:source.error||null,lastSuccessAt:source.lastSuccessAt||null}));
 if(reviewSignals.length){
  const review={chapterId:chapter.id,title:chapter.title,detectedAt:checkedAt,status:"needs_editorial_review",reason:"reference_outline_change_or_source_failure",signals:reviewSignals,previousSuccessfulCheckAt:old?.lastSuccessfulCheckAt||null,reviewedAt:null,reviewer:null};
  await env.UPDATE_STATE.put("review:"+chapter.id+":"+checkedAt.slice(0,10),JSON.stringify(review));
 }
 console.log(JSON.stringify({chapterId:chapter.id,status:record.status,sources:sources.length,failed:failures,reviewSignals:reviewSignals.length}));
 return record;
}
async function constantTimeTokenMatch(provided,expected){
 if(typeof provided!=="string"||typeof expected!=="string"||!expected)return false;
 const encode=value=>new TextEncoder().encode(value);
 const [a,b]=await Promise.all([crypto.subtle.digest("SHA-256",encode(provided)),crypto.subtle.digest("SHA-256",encode(expected))]);
 const aa=new Uint8Array(a),bb=new Uint8Array(b);let diff=0;for(let i=0;i<aa.length;i++)diff|=aa[i]^bb[i];return diff===0;
}
function json(value,status=200,origin=null){
 const headers={"Content-Type":"application/json; charset=utf-8","Cache-Control":"public, max-age=300","X-Content-Type-Options":"nosniff","Vary":"Origin"};
 if(origin)headers["Access-Control-Allow-Origin"]=origin;
 return new Response(JSON.stringify(value),{status,headers});
}
export default {
 async scheduled(controller,env){
  const date=new Date(controller.scheduledTime);
  if(date.getUTCHours()!==0)return;
  const chapter=CHAPTERS[date.getUTCMinutes()];if(!chapter)return;
  await refreshChapter(chapter,env,date);
 },
 async fetch(request,env){
  const url=new URL(request.url),origin=request.headers.get("Origin");
  const origins=new Set(["https://app-bible.jelvan.pro","https://devjel.github.io"]);
  if(origin&&!origins.has(origin))return json({error:"origin_not_allowed"},403);
  if(request.method==="OPTIONS")return new Response(null,{status:204,headers:{"Access-Control-Allow-Origin":origin||"https://app-bible.jelvan.pro","Access-Control-Allow-Methods":"GET, HEAD, POST, OPTIONS","Access-Control-Allow-Headers":"Authorization, Content-Type","Vary":"Origin"}});
  if(request.method==="POST"){
   if(!url.pathname.startsWith("/v1/refresh/"))return json({error:"method_not_allowed"},405,origin);
   if(!env.UPDATE_TRIGGER_TOKEN)return json({error:"manual_refresh_not_configured"},503,origin);
   const supplied=(request.headers.get("Authorization")||"").replace(/^Bearer\\s+/i,"");
   if(!await constantTimeTokenMatch(supplied,env.UPDATE_TRIGGER_TOKEN))return json({error:"unauthorized"},401,origin);
   const id=url.pathname.slice("/v1/refresh/".length);
   const chapter=CHAPTERS.find(item=>item.id===id);
   if(!chapter)return json({error:"not_found"},404,origin);
   const record=await refreshChapter(chapter,env,new Date(),fetch,{force:true});
   return json({ ...record, trigger:"manual", editorialReviewRequired:true },200,origin);
  }
  if(!["GET","HEAD"].includes(request.method))return json({error:"method_not_allowed"},405,origin);
  if(url.pathname==="/health")return json({service:"knowledge-center-updates",version:"1.1.0",schedule:"0-26 0 * * *",timezone:"Asia/Kuala_Lumpur",localWindow:"08:00–08:26 daily",chapters:CHAPTERS.length,mode:"daily_and_manual_reference_checks",manualRefresh:true,editorialRewrite:false},200,origin);
  if(url.pathname==="/v1/chapters")return json({chapters:CHAPTERS.map(({id,title,group,order})=>({id,title,group,minute:order}))},200,origin);
  const reviewMatch=url.pathname.match(/^\\/v1\\/reviews\\/([a-z0-9-]+)$/);
  if(reviewMatch){
   const chapter=CHAPTERS.find(item=>item.id===reviewMatch[1]);
   if(!chapter)return json({error:"not_found"},404,origin);
   const keys=await env.UPDATE_STATE.list({prefix:"review:"+chapter.id+":"});
   const reviews=[];
   for(const item of keys.keys){const review=await env.UPDATE_STATE.get(item.name,"json");if(review)reviews.push(review);}
   reviews.sort((a,b)=>b.detectedAt.localeCompare(a.detectedAt));
   return json({chapterId:chapter.id,reviews:reviews.slice(0,10)},200,origin);
  }
  const match=url.pathname.match(/^\/v1\/chapters\/([a-z0-9-]+)$/);
  const chapter=CHAPTERS.find(c=>c.id===match?.[1]);
  if(!chapter)return json({error:"not_found"},404,origin);
  const record=await env.UPDATE_STATE.get("chapter:"+chapter.id,"json");
  return json(record||{chapterId:chapter.id,title:chapter.title,status:"pending",checkedAt:null,editorialReviewRequired:true,sources:chapter.references.map(source=>({url:source,status:"pending"}))},200,origin);
 }
};
