import{S as et,i as tt,s as nt,a as rt,e as B,c as at,b as W,g as me,t as F,d as _e,f as J,h as z,j as ot,o as Le,k as st,l as it,m as lt,n as Re,p as q,q as ct,r as ft,u as ut,v as Z,w as Q,x as Pe,y as x,z as ee,A as ue}from"./chunks/index-0f2f94ba.js";import{g as Ke,f as Me,s as M,a as $e,b as dt,i as pt}from"./chunks/singletons-5e0b0956.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function _t(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const gt=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const n=new URL(r);for(const s of gt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return yt(n),n}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function Et(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;se.delete(s)}return ge(r,e)};const se=new Map;function kt(r,e){const n=Qe(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&se.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return ge(r,e)}function Rt(r,e,n){if(se.size>0){const s=Qe(r,n),o=se.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);se.delete(s)}}return ge(e,n)}function Qe(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Et(e.body)}"]`),s}const St=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ot(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${$t(r).map((t,u,g)=>{const d=decodeURIComponent(t),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(_)return e.push(_[1]),n.push(_[2]),s.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(w)return e.push(w[1]),n.push(w[2]),s.push(!0),"(?:/([^/]+))?";const S=u===g.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((O,V)=>{if(V%2){const T=St.exec(O);if(!T)throw new Error(`Invalid param: ${O}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,te,Y,le,ne]=T;return e.push(le),n.push(ne),s.push(!!te),Y?"(.*?)":te?"([^/]*)?":"([^/]+?)"}return S&&O.includes(".")&&(o=!1),O.normalize().replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function Lt(r){return!/^\([^)]+\)$/.test(r)}function $t(r){return r.slice(1).split("/").filter(Lt)}function It(r,{names:e,types:n,optional:s},o){const m={};for(let t=0;t<e.length;t+=1){const u=e[t],g=n[t];let d=r[t+1];if(d||!s[t]){if(g){const _=o[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(d))return}m[u]=d!=null?d:""}}return m}function jt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([u,[g,d,_]])=>{const{pattern:w,names:S,types:G,optional:K}=Ot(u),O={id:u,exec:V=>{const T=w.exec(V);if(T)return It(T,{names:S,types:G,optional:K},s)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...d||[]].map(t),leaf:m(g)};return O.errors.length=O.layouts.length=Math.max(O.errors.length,O.layouts.length),O});function m(u){const g=u<0;return g&&(u=~u),[g,r[u]]}function t(u){return u===void 0?u:[o.has(u),r[u]]}}function At(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,u){e&&x(e,t,u),W(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&2&&(g.form=t[1]),o!==(o=t[0][0])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&ee(e,t)}}}function Pt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Nt]},$$scope:{ctx:t}}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,u){e&&x(e,t,u),W(t,n,u),s=!0},p(t,u){const g={};if(u&4&&(g.data=t[2]),u&523&&(g.$$scope={dirty:u,ctx:t}),o!==(o=t[0][0])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&ee(e,t)}}}function Nt(r){let e,n,s;var o=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Z(o,m(r))),{c(){e&&Q(e.$$.fragment),n=B()},l(t){e&&Pe(e.$$.fragment,t),n=B()},m(t,u){e&&x(e,t,u),W(t,n,u),s=!0},p(t,u){const g={};if(u&8&&(g.data=t[3]),u&2&&(g.form=t[1]),o!==(o=t[0][1])){if(e){me();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),_e()}o?(e=Z(o,m(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&J(e.$$.fragment,t),s=!0)},o(t){e&&F(e.$$.fragment,t),s=!1},d(t){t&&z(n),e&&ee(e,t)}}}function He(r){let e,n=r[5]&&We(r);return{c(){e=st("div"),n&&n.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=lt(e);n&&n.l(o),o.forEach(z),this.h()},h(){Re(e,"id","svelte-announcer"),Re(e,"aria-live","assertive"),Re(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(s,o){W(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=We(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&z(e),n&&n.d()}}}function We(r){let e;return{c(){e=ct(r[6])},l(n){e=ft(n,r[6])},m(n,s){W(n,e,s)},p(n,s){s&64&&ut(e,n[6])},d(n){n&&z(e)}}}function Ut(r){let e,n,s,o,m;const t=[Pt,At],u=[];function g(_,w){return _[0][1]?0:1}e=g(r),n=u[e]=t[e](r);let d=r[4]&&He(r);return{c(){n.c(),s=rt(),d&&d.c(),o=B()},l(_){n.l(_),s=at(_),d&&d.l(_),o=B()},m(_,w){u[e].m(_,w),W(_,s,w),d&&d.m(_,w),W(_,o,w),m=!0},p(_,[w]){let S=e;e=g(_),e===S?u[e].p(_,w):(me(),F(u[S],1,1,()=>{u[S]=null}),_e(),n=u[e],n?n.p(_,w):(n=u[e]=t[e](_),n.c()),J(n,1),n.m(s.parentNode,s)),_[4]?d?d.p(_,w):(d=He(_),d.c(),d.m(o.parentNode,o)):d&&(d.d(1),d=null)},i(_){m||(J(n),m=!0)},o(_){F(n),m=!1},d(_){u[e].d(_),_&&z(s),d&&d.d(_),_&&z(o)}}}function Tt(r,e,n){let{stores:s}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:u=null}=e,{data_1:g=null}=e;ot(s.page.notify);let d=!1,_=!1,w=null;return Le(()=>{const S=s.page.subscribe(()=>{d&&(n(5,_=!0),n(6,w=document.title||"untitled page"))});return n(4,d=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,m=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,u=S.data_0),"data_1"in S&&n(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[m,t,u,g,d,_,w,s,o]}class Dt extends et{constructor(e){super(),tt(this,e,Tt,Ut,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Vt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),qt=function(r,e){return new URL(r,e).href},Ye={},H=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(m=>{if(m=qt(m,s),m in Ye)return;Ye[m]=!0;const t=m.endsWith(".css"),u=t?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const w=o[_];if(w.href===m&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${u}`))return;const d=document.createElement("link");if(d.rel=t?"stylesheet":Vt,t||(d.as="script",d.crossOrigin=""),d.href=m,document.head.appendChild(d),t)return new Promise((_,w)=>{d.addEventListener("load",_),d.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${m}`)))})})).then(()=>e())},Ct={},we=[()=>H(()=>import("./chunks/0-16d0f061.js"),["./chunks/0-16d0f061.js","./components/pages/_layout.svelte-1e6c5a97.js","./chunks/index-0f2f94ba.js","./assets/_layout-1eb109c1.css"],import.meta.url),()=>H(()=>import("./chunks/1-4ad6b565.js"),["./chunks/1-4ad6b565.js","./components/error.svelte-bd311430.js","./chunks/index-0f2f94ba.js","./chunks/singletons-5e0b0956.js"],import.meta.url),()=>H(()=>import("./chunks/2-ca9556df.js"),["./chunks/2-ca9556df.js","./chunks/_page-0df15927.js","./components/pages/_page.svelte-e6ae7847.js","./chunks/index-0f2f94ba.js","./assets/_page-a031e564.css"],import.meta.url),()=>H(()=>import("./chunks/3-30d499f3.js"),["./chunks/3-30d499f3.js","./chunks/_page-2a465e02.js","./chunks/environment-b04a8a58.js","./components/pages/about/_page.svelte-7035434e.js","./chunks/index-0f2f94ba.js"],import.meta.url),()=>H(()=>import("./chunks/4-e4ab0e3d.js"),["./chunks/4-e4ab0e3d.js","./chunks/_page-eb1abcfe.js","./chunks/environment-b04a8a58.js","./components/pages/services/_page.svelte-0d7d942c.js","./chunks/index-0f2f94ba.js"],import.meta.url),()=>H(()=>import("./chunks/5-10323b16.js"),["./chunks/5-10323b16.js","./components/pages/sverdle/_page.svelte-5fbe01c3.js","./chunks/index-0f2f94ba.js","./chunks/singletons-5e0b0956.js","./assets/_page-2c27b08c.css"],import.meta.url),()=>H(()=>import("./chunks/6-e84228b4.js"),["./chunks/6-e84228b4.js","./chunks/_page-ed48c4a3.js","./chunks/environment-b04a8a58.js","./components/pages/sverdle/how-to-play/_page.svelte-280e2899.js","./chunks/index-0f2f94ba.js","./assets/_page-89a9e780.css"],import.meta.url)],Bt=[],Ft={"/":[2],"/about":[3],"/services":[4],"/sverdle":[-6],"/sverdle/how-to-play":[6]},Jt={handleError:({error:r})=>{console.error(r)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,n){this.status=e,this.location=n}}async function zt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Gt=-1,Kt=-2,Mt=-3,Ht=-4,Wt=-5,Yt=-6;function Xt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,m=!1){if(o===Gt)return;if(o===Mt)return NaN;if(o===Ht)return 1/0;if(o===Wt)return-1/0;if(o===Yt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const g=new Set;n[o]=g;for(let w=1;w<t.length;w+=1)g.add(s(t[w]));break;case"Map":const d=new Map;n[o]=d;for(let w=1;w<t.length;w+=2)d.set(s(t[w]),s(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[o]=_;for(let w=1;w<t.length;w+=2)_[t[w]]=s(t[w+1]);break}else{const u=new Array(t.length);n[o]=u;for(let g=0;g<t.length;g+=1){const d=t[g];d!==Kt&&(u[g]=s(d))}}else{const u={};n[o]=u;for(const g in t){const d=t[g];u[g]=s(d)}}return n[o]}return s(0)}const xe="sveltekit:scroll",C="sveltekit:index",de=jt(we,Bt,Ft,Ct),je=we[0],Ae=we[1];je();Ae();let ie={};try{ie=JSON.parse(sessionStorage[xe])}catch{}function Se(r){ie[r]=$e()}function Zt({target:r,base:e,trailing_slash:n}){var Je;const s=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,g=!1,d=!0,_=!1,w=!1,S=!1,G=!1,K,O=(Je=history.state)==null?void 0:Je[C];O||(O=Date.now(),history.replaceState({...history.state,[C]:O},"",location.href));const V=ie[O];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let T,te,Y;async function le(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=ve(a,!0);o=null,await Ue(l,a,[])}async function ne(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:i=!1,state:c={},invalidateAll:p=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),Ee({url:a,scroll:l?$e():null,keepfocus:i,redirect_chain:h,details:{state:c,replaceState:f},nav_token:v,accepted:()=>{p&&(G=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const l=ve(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Ve(l)},o.promise}async function Ue(a,l,f,i,c={},p){var v,E;te=c;let h=a&&await Ve(a);if(h||(h=await Fe(l,{id:null},oe(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,te!==c)return!1;if(h.type==="redirect")if(f.length>10||f.includes(l.pathname))h=await ce({status:500,error:oe(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ne(new URL(h.location,l).href,{},[...f,l.pathname],c),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await fe(l);if(s.length=0,G=!1,_=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[C]=O+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,g){t=h.state,h.props.page&&(h.props.page.url=l);const y=he();K.$set(h.props),y()}else Te(h);if(i){const{scroll:y,keepfocus:b}=i;if(b||Oe(),await ue(),d){const $=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):$?$.scrollIntoView():scrollTo(0,0)}}else await ue();d=!0,h.props.page&&(T=h.props.page),p&&p(),_=!1}function Te(a){var c,p;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const f=he();K=new Dt({target:r,props:{...a.props,stores:M},hydrate:!0}),f();const i={from:null,to:pe("to",{params:t.params,route:{id:(p=(c=t.route)==null?void 0:c.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(h=>h(i)),g=!0}async function re({url:a,params:l,branch:f,status:i,error:c,route:p,form:h}){var P;const v=f.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:f,error:c,route:p},props:{components:v.map(L=>L.node.component)}};h!==void 0&&(E.props.form=h);let y={},b=!T;for(let L=0;L<v.length;L+=1){const N=v[L];y={...y,...N.data},(b||!t.branch.some(U=>U===N))&&(E.props[`data_${L}`]=y,b=b||Object.keys((P=N.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(T.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==c||h!==void 0||b){E.props.page={error:c,params:l,route:p,status:i,url:a,form:h,data:b?y:T.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const L=(N,U)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function ye({loader:a,parent:l,url:f,params:i,route:c,server_data_node:p}){var y,b,$,P,L;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let N=function(...R){for(const D of R){const{href:k}=new URL(D,f);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,c.id}},params:new Proxy(i,{get:(R,D)=>(v.params.add(D),R[D])}),data:(b=p==null?void 0:p.data)!=null?b:null,url:wt(f,()=>{v.url=!0}),async fetch(R,D){let k;R instanceof Request?(k=R.url,D={body:R.method==="GET"||R.method==="HEAD"?void 0:await R.blob(),cache:R.cache,credentials:R.credentials,headers:R.headers,integrity:R.integrity,keepalive:R.keepalive,method:R.method,mode:R.mode,redirect:R.redirect,referrer:R.referrer,referrerPolicy:R.referrerPolicy,signal:R.signal,...D}):k=R;const I=new URL(k,f).href;return N(I),g?Rt(k,I,D):kt(k,D)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=($=await E.shared.load.call(null,U))!=null?$:null,h=h?await zt(h):null}return{node:E,loader:a,server:p,shared:(P=E.shared)!=null&&P.load?{type:"data",data:h,uses:v}:null,data:(L=h!=null?h:p==null?void 0:p.data)!=null?L:null}}function De(a,l,f,i,c){if(G)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&f)return!0;for(const p of i.params)if(c[p]!==t.params[p])return!0;for(const p of i.dependencies)if(s.some(h=>h(new URL(p))))return!0;return!1}function be(a,l){var f,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ve({id:a,invalidating:l,url:f,params:i,route:c}){var D;if((o==null?void 0:o.id)===a)return o.promise;const{errors:p,layouts:h,leaf:v}=c,E=[...h,v];p.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,$=t.route?a!==t.route.id:!1,P=E.reduce((k,I,A)=>{var ae;const j=t.branch[A],X=!!(I!=null&&I[0])&&((j==null?void 0:j.loader)!==I[1]||De(k.some(Boolean),$,b,(ae=j.server)==null?void 0:ae.uses,i));return k.push(X),k},[]);if(P.some(Boolean)){try{y=await Ze(f,P)}catch(k){return ce({status:500,error:oe(k,{url:f,params:i,route:{id:c.id}}),url:f,route:c})}if(y.type==="redirect")return y}const L=y==null?void 0:y.nodes;let N=!1;const U=E.map(async(k,I)=>{var ae;if(!k)return;const A=t.branch[I],j=L==null?void 0:L[I];if((!j||j.type==="skip")&&k[1]===(A==null?void 0:A.loader)&&!De(N,$,b,(ae=A.shared)==null?void 0:ae.uses,i))return A;if(N=!0,(j==null?void 0:j.type)==="error")throw j;return ye({loader:k[1],url:f,params:i,route:c,parent:async()=>{var Ge;const ze={};for(let ke=0;ke<I;ke+=1)Object.assign(ze,(Ge=await U[ke])==null?void 0:Ge.data);return ze},server_data_node:be(j===void 0&&k[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const k of U)k.catch(()=>{});const R=[];for(let k=0;k<E.length;k+=1)if(E[k])try{R.push(await U[k])}catch(I){if(I instanceof Xe)return{type:"redirect",location:I.location};let A=500,j;L!=null&&L.includes(I)?(A=(D=I.status)!=null?D:A,j=I.error):I instanceof Ie?(A=I.status,j=I.body):j=oe(I,{params:i,url:f,route:{id:c.id}});const X=await qe(k,R,p);return X?await re({url:f,params:i,branch:R.slice(0,X.idx).concat(X.node),status:A,error:j,route:c}):await Fe(f,{id:c.id},j,A)}else R.push(void 0);return await re({url:f,params:i,branch:R,status:200,error:null,route:c,form:l?void 0:null})}async function qe(a,l,f){for(;a--;)if(f[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function ce({status:a,error:l,url:f,route:i}){var y;const c={},p=await je();let h=null;if(p.server)try{const b=await Ze(f,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(y=b.nodes[0])!=null?y:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||u)&&await fe(f)}const v=await ye({loader:je,url:f,params:c,route:i,parent:()=>Promise.resolve({}),server_data_node:be(h)}),E={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await re({url:f,params:c,branch:[v,E],status:a,error:l,route:null})}function ve(a,l){if(Ce(a))return;const f=mt(a.pathname.slice(e.length)||"/");for(const i of de){const c=i.exec(f);if(c){const p=new URL(a.origin+ht(a.pathname,n)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:i,params:_t(c),url:p}}}}function Ce(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:l,intent:f,delta:i}){var v,E,y,b,$;let c=!1;const p={from:pe("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:pe("to",{params:(y=f==null?void 0:f.params)!=null?y:null,route:{id:($=(b=f==null?void 0:f.route)==null?void 0:b.id)!=null?$:null},url:a}),willUnload:!f,type:l};i!==void 0&&(p.delta=i);const h={...p,cancel:()=>{c=!0}};return w||m.before_navigate.forEach(P=>P(h)),c?null:p}async function Ee({url:a,scroll:l,keepfocus:f,redirect_chain:i,details:c,type:p,delta:h,nav_token:v,accepted:E,blocked:y}){const b=ve(a,!1),$=Be({url:a,type:p,delta:h,intent:b});if(!$){y();return}Se(O),E(),w=!0,g&&M.navigating.set($),await Ue(b,a,i,{scroll:l,keepfocus:f,details:c},v,()=>{w=!1,m.after_navigate.forEach(P=>P($)),M.navigating.set(null)})}async function Fe(a,l,f,i){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await ce({status:i,error:f,url:a,route:l}):await fe(a)}function fe(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Le(()=>(m.after_navigate.push(a),()=>{const l=m.after_navigate.indexOf(a);m.after_navigate.splice(l,1)}))},before_navigate:a=>{Le(()=>(m.before_navigate.push(a),()=>{const l=m.before_navigate.indexOf(a);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(d=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(f=>f.href===l)}return le()},invalidateAll:()=>(G=!0,le()),prefetch:async a=>{const l=new URL(a,Ke(document));await Ne(l)},prefetch_routes:async a=>{const f=(a?de.filter(i=>a.some(c=>i.exec(c))):de).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:i}=t;if(!i)return;const c=await qe(t.branch.length,f,i.errors);if(c){const p=await re({url:l,params:t.params,branch:f.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});t=p.state;const h=he();K.$set(p.props),h(),ue().then(Oe)}}else if(a.type==="redirect")ne(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},f=he();K.$set(l),f(),a.type==="success"&&ue().then(Oe)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var p,h;let c=!1;if(!w){const v={from:pe("from",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(E=>E(v))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(O);try{sessionStorage[xe]=JSON.stringify(ie)}catch{}}});const a=i=>{const{url:c,options:p,has:h}=Me(i);if(c&&p.prefetch&&!Ce(c)){if(p.reload||h.rel_external||h.target||h.download)return;Ne(c)}};let l;const f=i=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:p,options:h,has:v}=Me(i);if(!c||!p||!(c instanceof SVGAElement)&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||v.download)return;if(h.reload||v.rel_external||v.target){Be({url:p,type:"link"})||i.preventDefault(),w=!0;return}const[y,b]=p.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){S=!0,Se(O),t.url=p,M.page.set({...T,url:p}),M.page.notify();return}Ee({url:p,scroll:h.noscroll?$e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[C]===O)return;const c=i.state[C]-O;Ee({url:new URL(location.href),scroll:ie[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=i.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[C]:++O},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:i,route:c,data:p,form:h})=>{var y;u=!0;const v=new URL(location.href);let E;try{const b=f.map(async($,P)=>{const L=p[P];return ye({loader:we[$],url:v,params:i,route:c,parent:async()=>{const N={};for(let U=0;U<P;U+=1)Object.assign(N,(await b[U]).data);return N},server_data_node:be(L)})});E=await re({url:v,params:i,branch:await Promise.all(b),status:a,error:l,form:h,route:(y=de.find(({id:$})=>$===c.id))!=null?y:null})}catch(b){if(b instanceof Xe){await fe(new URL(b.location,location.href));return}E=await ce({status:b instanceof Ie?b.status:500,error:oe(b,{url:v,params:i,route:c}),url:v,route:c})}Te(E)}}}async function Ze(r,e){var m;const n=new URL(r);n.pathname=vt(r.pathname);const s=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{var u,g;(t==null?void 0:t.type)==="data"&&(t.data=Xt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function oe(r,e){var n;return r instanceof Ie?r.body:(n=Jt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(r,e){for(const n of Qt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function he(){return()=>{}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function tn({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){dt(n);const m=Zt({target:s,base:n.base,trailing_slash:o});pt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{tn as start};
