import{j as o}from"./jsx-runtime.391947bd.js";import{r as l}from"./index.ed373d49.js";import{S as I}from"./spinner.6a5ba5e9.js";import{a as E,T as v}from"./jwt.f0e0aa9c.js";import{a as w}from"./http.82ebf0f1.js";const G={src:"/_astro/github.ab5c33e4.svg",width:98,height:96,format:"svg"},m="githubRedirectAt",g="githubLastPage";function U(R){const[n,e]=l.useState(!1),[d,r]=l.useState(""),f=n?I:G;l.useEffect(()=>{const t=new URLSearchParams(window.location.search),a=t.get("code"),i=t.get("state"),S=t.get("provider");!a||!i||S!=="github"||(e(!0),w(`https://api.roadmap.sh/v1-github-callback${window.location.search}`).then(({response:s,error:x})=>{if(!s?.token){const c=x?.message||"Something went wrong.";r(c),e(!1);return}let h="/";const u=localStorage.getItem(m),p=localStorage.getItem(g);if(u&&p){const c=parseInt(u,10);Date.now()-c<30*1e3&&(h=p)}localStorage.removeItem(m),localStorage.removeItem(g),E.set(v,s.token,{path:"/",expires:30,domain:".roadmap.sh"}),window.location.href=h}).catch(s=>{r("Something went wrong. Please try again later."),e(!1)}))},[]);const b=async()=>{e(!0);const{response:t,error:a}=await w("https://api.roadmap.sh/v1-github-login");if(a||!t?.loginUrl){r(a?.message||"Something went wrong. Please try again later."),e(!1);return}if(!["/login","/signup"].includes(window.location.pathname)){const i=["/respond-invite","/befriend"].includes(window.location.pathname)?window.location.pathname+window.location.search:window.location.pathname;localStorage.setItem(m,Date.now().toString()),localStorage.setItem(g,i)}window.location.href=t.loginUrl};return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:n,onClick:b,children:[o.jsx("img",{src:f.src,alt:"GitHub",className:`h-[18px] w-[18px] ${n?"animate-spin":""}`}),"Continue with GitHub"]}),d&&o.jsx("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:d})]})}export{U as GitHubButton};
