import{a as c}from"./mini-scrollbar-CZ8eNCm3.js";import{R as s}from"./index-CZMpeKRu.js";import{u as k}from"./use-taomu-classname-CGrN28Ws.js";import{C as x}from"./checkbox-Bae1i7y3.js";const i=s.forwardRef(({className:o,options:l,value:a=[],name:m,onChange:u,...d},p)=>{const t=s.useRef({target:{value:a,name:m},focus:()=>{}}),f=k("checkbox-group flex gap-8",o);s.useImperativeHandle(p,()=>t.current);const n=s.useMemo(()=>{t.current.target.value=a;const r={};return a==null||a.forEach(e=>{r[e]=!0}),r},[a]);function y(r){r.target.checked?n[r.target.name]=!0:delete n[r.target.name];const e=Object.keys(n);t.current.target.value=e,u==null||u(t.current,e)}return c("div",{className:f,...d,children:l==null?void 0:l.map(({key:r,value:e,name:g,...C},h)=>c(x,{name:g||(e==null?void 0:e.toString()),...C,value:n[e]||!1,onChange:y},r||e||h))})});try{i.displayName="CheckboxGroup",i.__docgenInfo={description:"",displayName:"CheckboxGroup",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CheckboxGroupItemType[]"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:"[]"},description:"",name:"value",required:!1,type:{name:"StringAndNumber[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((ref: CheckboxGroupRef, value: string[]) => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"ClassValue"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<Element>"}}}}}catch{}export{i as C};
