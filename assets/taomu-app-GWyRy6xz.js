import{t as _,a as n,F as y,h,j as g,G as S}from"./mini-scrollbar-1dk_y2Qh.js";import{R as o}from"./index-D4lIrffr.js";import{g as l,u as d}from"./use-custom-event-BYXfsBOj.js";import{g as i}from"./global-style-CvBFrXCB.js";import{p as T}from"./popup.store-CZruyQcO.js";function b(){const{theme:e,systemTheme:t}=_.useStore(["theme","systemTheme"]),[a,s]=o.useState(t||"dark");return o.useEffect(()=>{s(e==="system"?t||"dark":e)},[e,t]),{theme:a}}const c=()=>{const{popupsMap:e,updateCount:t}=T.useStore(["popupsMap","updateCount"]),a=o.useMemo(()=>{const s=[];for(const[m,[p,u]]of e)s.push(p.render(u));return s},[e,t]);return n(y,{children:a})};try{c.displayName="PopupService",c.__docgenInfo={description:"",displayName:"PopupService",props:{}}}catch{}let r="";const f=({children:e})=>{const t=o.useRef(h()),{theme:a}=b(),[s,m]=o.useState(l()),[p,u]=o.useState(i());return d("taomu://update-global-css-vars",()=>{m(l())}),d("taomu://update-global-style",()=>{u(i())}),o.useEffect(()=>{document.documentElement.dataset.theme=a},[a]),o.useEffect(()=>(r?console.error("TaomuApp only support one instance"):r=t.current,()=>{r=""}),[]),g(y,{children:[(!r||r===t.current)&&n(c,{}),n(S,{styles:[s,p]}),e]})};try{f.displayName="TaomuApp",f.__docgenInfo={description:`初始化 TaomuApp

包裹根节点

请确保全局只有一个 TaomuApp`,displayName:"TaomuApp",props:{}}}catch{}export{f as T};
