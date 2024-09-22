import{a as c}from"./mini-scrollbar-BFxqz1iK.js";import{R as i}from"./index-l2PZgWEW.js";import"./index-CLdgtgz-.js";import{M as q}from"./menu-Xf2em5zv.js";import{a as V}from"./popup-trigger-SmdkQmAN.js";try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{direction:{defaultValue:{value:"vertical"},description:"排列方式",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},mode:{defaultValue:{value:"none"},description:"交互模式",name:"mode",required:!1,type:{name:"enum",value:[{value:'"radio"'},{value:'"checkbox"'},{value:'"none"'}]}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},defaultIndex:{defaultValue:null,description:"默认选中项索引",name:"defaultIndex",required:!1,type:{name:"number | number[]"}},items:{defaultValue:null,description:"菜单配置",name:"items",required:!1,type:{name:"MenuItemProps[]"}},width:{defaultValue:null,description:"宽度 默认 auto",name:"width",required:!1,type:{name:"Width<string | number>"}},height:{defaultValue:null,description:"高度 默认 auto",name:"height",required:!1,type:{name:"Height<string | number>"}},padding:{defaultValue:{value:"4"},description:"group 边距",name:"padding",required:!1,type:{name:"Padding<string | number>"}},radius:{defaultValue:null,description:"group 圆角",name:"radius",required:!1,type:{name:"BorderRadius<string | number>"}},gap:{defaultValue:{value:"4"},description:"item 间距",name:"gap",required:!1,type:{name:"number"}},overflowBreak:{defaultValue:null,description:"超出换行",name:"overflowBreak",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"显示外边框",name:"bordered",required:!1,type:{name:"boolean"}},shadow:{defaultValue:{value:"md"},description:"显示阴影",name:"shadow",required:!1,type:{name:"any"}},background:{defaultValue:null,description:"背景色",name:"background",required:!1,type:{name:"Background<string | number>"}},itemProps:{defaultValue:null,description:"附加到 MenuItem 组件的 props",name:"itemProps",required:!1,type:{name:"MenuItemProps"}},disableUserSelect:{defaultValue:{value:"true"},description:"禁止文本选中",name:"disableUserSelect",required:!1,type:{name:"boolean"}},onMenuItemClick:{defaultValue:null,description:"处理菜单组点击事件",name:"onMenuItemClick",required:!1,type:{name:"((item: MenuItemProps, index: number, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}try{MenuItem.displayName="MenuItem",MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"MenuItemKey"}},styleMode:{defaultValue:null,description:"菜单风格",name:"styleMode",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"windows"'}]}},label:{defaultValue:null,description:"菜单标题",name:"label",required:!1,type:{name:"ReactNode"}},labelProps:{defaultValue:null,description:"标题基础 Props",name:"labelProps",required:!1,type:{name:"any"}},title:{defaultValue:null,description:"鼠标悬停时展示的内容",name:"title",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"自定义图标",name:"icon",required:!1,type:{name:"ReactNode"}},active:{defaultValue:null,description:"是否激活状态",name:"active",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"是否可见, 默认为 true",name:"visible",required:!1,type:{name:"boolean"}},divider:{defaultValue:null,description:"是否为分割线",name:"divider",required:!1,type:{name:"boolean"}},ellipsis:{defaultValue:null,description:"超出一行显示省略号",name:"ellipsis",required:!1,type:{name:"boolean"}},paddingX:{defaultValue:null,description:"横向 padding",name:"paddingX",required:!1,type:{name:"string | number"}},paddingY:{defaultValue:null,description:"纵向 padding",name:"paddingY",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"自定义圆角",name:"radius",required:!1,type:{name:"string | number"}},gap:{defaultValue:null,description:"间距",name:"gap",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:"点击事件",name:"onClick",required:!1,type:{name:"((item: MenuItemProps, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}}}}}catch{}const D=(e,u)=>{if(u)switch(e){case"top-left":case"top-right":return l("bottom");case"bottom-left":case"bottom-right":return l("top")}switch(e){case"bottom":case"center-bottom":case"bottom-center":return l("top");case"left":case"left-center":case"left-bottom":case"left-top":case"top-left":case"bottom-left":return l("right");case"right":case"right-center":case"right-bottom":case"right-top":case"top-right":case"bottom-right":return l("left");default:return l("bottom")}};function l(e){let u="",t="",a="",n="";switch(e){case"top":u="0, -8px, 0",t="0, 0, 0",a="0, 0, 0",n="0, -8px, 0";break;case"right":u="8px, 0, 0",t="0, 0, 0",a="0, 0, 0",n="8px, 0, 0";break;case"bottom":u="0, 8px, 0",t="0, 0, 0",a="0, 0, 0",n="0, 8px, 0";break;case"left":u="-8px, 0, 0",t="0, 0, 0",a="0, 0, 0",n="-8px, 0, 0";break}return{options:{duration:300,easing:"ease-out"},enter:{keyframes:[{transform:`translate3d(${u})`,opacity:0},{transform:`translate3d(${t})`,opacity:1}]},leave:{keyframes:[{transform:`translate3d(${a})`,opacity:1},{transform:`translate3d(${n})`,opacity:0}]}}}const f=i.forwardRef(({children:e,menus:u,menuProps:t={},portalOptions:a={},equalWidth:n,trigger:p="click",contentProps:o={},onMenuItemClick:v,...d},y)=>{const r=i.useRef(null);return i.useImperativeHandle(y,()=>r.current||void 0),i.useEffect(()=>()=>{r.current&&r.current.closePopup()},[]),d.content===void 0&&(d.content=g=>{const{onMenuItemClick:s,...b}=g;return c(q,{onMenuItemClick:(E,F,h)=>{var m;s==null||s(E,F,h),(m=r.current)==null||m.closePopup()},...b})}),o.items=u||t.items,o.onMenuItemClick=v,c(V,{ref:r,trigger:p,contentProps:o,portalOptions:{equalWidth:n,edgeOffset:8,popupAnimationConfigBuilder:D,...a},...d,children:e})});try{f.displayName="Dropdown",f.__docgenInfo={description:"",displayName:"Dropdown",props:{menus:{defaultValue:null,description:"",name:"menus",required:!1,type:{name:"MenuItemProps[]"}},menuProps:{defaultValue:{value:"{}"},description:"",name:"menuProps",required:!1,type:{name:"MenuProps"}},equalWidth:{defaultValue:null,description:"",name:"equalWidth",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"equal"'},{value:'"min-width"'},{value:'"max-width"'}]}},onMenuItemClick:{defaultValue:null,description:"",name:"onMenuItemClick",required:!1,type:{name:"((item: MenuItemProps, index: number, event: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"MenuProps"}},trigger:{defaultValue:{value:"click"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"click"'},{value:'"hover"'}]}},position:{defaultValue:null,description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"left-left"'},{value:'"left-center"'},{value:'"left-right"'},{value:'"left-bottom"'},{value:'"left-top"'},{value:'"center-left"'},{value:'"center-center"'},{value:'"center-right"'},{value:'"center-bottom"'},{value:'"center-top"'},{value:'"right-left"'},{value:'"right-center"'},{value:'"right-right"'},{value:'"right-bottom"'},{value:'"right-top"'},{value:'"bottom-left"'},{value:'"bottom-center"'},{value:'"bottom-right"'},{value:'"bottom-bottom"'},{value:'"bottom-top"'},{value:'"top-left"'},{value:'"top-center"'},{value:'"top-right"'},{value:'"top-bottom"'},{value:'"top-top"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:{value:"{}"},description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:null,description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}}}}}catch{}export{f as D};
