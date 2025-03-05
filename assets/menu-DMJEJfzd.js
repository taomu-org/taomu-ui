import{l as n,c as X,a as m}from"./mini-scrollbar-DKhO_gnw.js";import{R as p}from"./index-CZMpeKRu.js";import{u as Y,a as j}from"./use-taomu-classname-BRbG1Owv.js";import{i as z}from"./global-vars-CuQyjSF-.js";import{E as J}from"./empty-BF0Jk4JR.js";import{a as O,M as Q}from"./menu-item-BFOQJACa.js";z("common",{menuWidth:"auto",menuHeight:"auto",menuBackground:n("colorBackground"),menuPadding:4,menuRadius:n("radiusSM")});const Z=X`
  overflow-y: auto;
  height: ${n("menuHeight")};
  width: ${n("menuWidth")};
  background: ${n("menuBackground")};
  padding: ${n("menuPadding")};
  border-radius: ${n("menuRadius")};
  gap: ${n("menuGap")};

  &.disable-user-select {
    user-select: none;
  }
`;try{Empty.displayName="Empty",Empty.__docgenInfo={description:"",displayName:"Empty",props:{image:{defaultValue:null,description:"",name:"image",required:!1,type:{name:"ReactNode"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}}}}}catch{}try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"MenuItemKey"}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},label:{defaultValue:null,description:"菜单标题",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"标题基础 Props",name:"labelProps",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"鼠标悬停时展示的内容",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"自定义图标",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"是否激活状态",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"是否可见, 默认为 true",name:"visible",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"是否为分割线",name:"divider",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"超出一行显示省略号",name:"ellipsis",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:null,description:"横向 padding",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"纵向 padding",name:"paddingY",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"自定义圆角",name:"radius",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"间距",name:"gap",required:!1,type:{name:"string | number"}},meta:{defaultValue:null,description:"传递元数据",name:"meta",required:!1,type:{name:"any"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((item: MenuItemProps, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}const B=({children:e,className:t,cssVars:l,style:d,items:r,width:h,height:F,padding:A=4,gap:M=4,radius:C,bordered:I=!0,shadow:_="md",background:P,itemProps:w,disableUserSelect:k=!0,defaultIndex:N,defaultKeys:x,mode:s="none",direction:y="vertical",overflowBreak:R,styleMode:$,onMenuItemClick:c,beforeItemRender:g,...S})=>{const H=Y("menu-group","flex flex-inline p-4 bs-box",y==="vertical"?"col":"row",`shadow-${_}`,{"disable-user-select":k,"border rect-1":I,"flex-wrap":R},t),W=j({menuWidth:h,menuHeight:F,menuBackground:P,menuPadding:A,menuRadius:C,menuGap:M,...l},d),[G,E]=p.useState(),[i,b]=p.useState(ee(r,N,x));p.useEffect(()=>()=>{s==="radio"&&i.length===1&&E(i[0])},[i,s]),p.useEffect(()=>{s!=="radio"&&E(void 0)},[s]);function T(a){switch(s){case"radio":if(i[0]===a)break;b([a]);break;case"checkbox":b(u=>u!=null&&u.includes(a)?u==null?void 0:u.filter(f=>f!==a):[...u||[],a]);break}}function K(){return e||(r!=null&&r.length?r.map(({onClick:a,name:u,active:f,styleMode:L,...U},o)=>{const V={name:u,active:f||i.includes(o),styleMode:L||$,onClick:(q,D)=>{T(o),a==null||a(q,D),c==null||c(q,o,D)},...w,...U},v=m(Q,{...V},u||o);return g?g(v,V):v}):m(J,{}))}return m(O.Provider,{value:{prevIndex:G,currentIndex:i,direction:y},children:m("div",{className:H,style:W,css:Z,...S,children:K()})})};function ee(e,t,l){return typeof t=="number"?[t]:Array.isArray(t)?t:e!=null&&e.length?Array.isArray(l)?l.map(d=>e.findIndex(r=>r.name===d)):l?[e.findIndex(d=>d.name===l)]:[]:[]}try{B.displayName="Menu",B.__docgenInfo={description:"",displayName:"Menu",props:{direction:{defaultValue:{value:"vertical"},description:"排列方式",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},mode:{defaultValue:{value:"none"},description:"交互模式",name:"mode",required:!1,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"none"'},{value:'"radio"'}]}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},defaultIndex:{defaultValue:null,description:"默认选中项索引",name:"defaultIndex",required:!1,type:{name:"number | number[]"}},defaultKeys:{defaultValue:null,description:"默认选中项 key",name:"defaultKeys",required:!1,type:{name:"MenuItemKey | MenuItemKey[]"}},items:{defaultValue:null,description:"菜单配置",name:"items",required:!1,type:{name:"MenuItemProps[]"}},width:{defaultValue:null,description:"宽度 默认 auto",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"高度 默认 auto",name:"height",required:!1,type:{name:"Height<string | number>"}},padding:{defaultValue:{value:"4"},description:"group 边距",name:"padding",required:!1,type:{name:"Padding<string | number>"}},radius:{defaultValue:null,description:"group 圆角",name:"radius",required:!1,type:{name:"BorderRadius<string | number>"}},gap:{defaultValue:{value:"4"},description:"item 间距",name:"gap",required:!1,type:{name:"number"}},overflowBreak:{defaultValue:null,description:"超出换行",name:"overflowBreak",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"显示外边框",name:"bordered",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"md"},description:"显示阴影",name:"shadow",required:!1,type:{name:"any"}},background:{defaultValue:null,description:"背景色",name:"background",required:!1,type:{name:"Background<string | number>"}},itemProps:{defaultValue:null,description:"附加到 MenuItem 组件的 props",name:"itemProps",required:!1,type:{name:"MenuItemProps"}},disableUserSelect:{defaultValue:{value:"true"},description:"禁止文本选中",name:"disableUserSelect",required:!1,type:{name:"boolean"}},onMenuItemClick:{defaultValue:null,description:"处理菜单组点击事件",name:"onMenuItemClick",required:!1,type:{name:"((item: MenuItemProps, index: number, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},beforeItemRender:{defaultValue:null,description:"渲染 items 前调用",name:"beforeItemRender",required:!1,type:{name:"((node: Element, props: MenuItemProps) => ReactNode)"}}}}}catch{}export{B as M};
