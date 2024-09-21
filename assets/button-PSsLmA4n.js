import{s,l as e,m as o,c as S,p as r,j as H,a as t,i as L}from"./mini-scrollbar-Bq2Cewqh.js";import{R as q}from"./index-l2PZgWEW.js";import"./_getTag-Dgi2y9Uc.js";import{u as _,a as P,c as O}from"./use-taomu-classname-Bo7IX2bY.js";import{T as I}from"./index-zbzXvoZu.js";s("common",{btnWidth:"auto",btnColorHover:e("colorTextDefault"),btnOutlineColor:o("colorFrontRgb",.3),btnBorderColor:e("colorBorder"),btnRadius:e("radiusSM"),btnHeight:30,btnPaddingX:14,btnFontSize:14});s("light",{btnColor:e("colorTextDefault"),btnBackground:"#fff",btnBackgroundHover:"#fafafa",btnOutlineColor:o("colorFrontRgb",.05)});s("dark",{btnColor:e("colorTextGray"),btnBackground:o("colorFrontRgb",.1),btnBackgroundHover:o("colorFrontRgb",.25)});const X=S`
  user-select: none;
  transition: all 0.25s;
  outline: transparent solid 0;
  overflow: hidden;
  position: relative;

  width: ${e("btnWidth")};
  height: ${e("btnHeight")};
  background-color: ${e("btnBackground")};
  border-radius: ${e("btnRadius")};
  border: 1px solid ${e("btnBorderColor")};
  padding: 0 ${e("btnPaddingX")};
  color: ${e("btnColor")};
  font-size: ${e("btnFontSize")};

  &[disabled]:not(.is-loading) {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.is-loading {
    cursor: progress;
  }

  &:hover:not([disabled]) {
    background-color: ${e("btnBackgroundHover")};
    color: ${e("btnColorHover")};
  }

  &.show-outline:not([disabled]) {
    outline-offset: 0px;
    &:active,
    &:focus {
      outline-offset: 0;
      outline: ${e("btnOutlineColor")} solid 3px;
    }
  }

  &.btn-primary {
    ${r("btnBackground",e("colorPrimaryDark"))};
    ${r("btnOutlineColor",o("colorPrimaryDarkRgb",.3))};
    ${r("btnBackgroundHover",o("colorPrimaryDarkRgb",.75))};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-warning {
    ${r("btnBackground",e("colorWarning"))};
    ${r("btnOutlineColor",o("colorWarningRgb",.3))};
    ${r("btnBackgroundHover",`color-mix(in srgb, ${e("btnBackground")}, #000 15%)`)};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-danger {
    ${r("btnBackground",e("colorError"))};
    ${r("btnOutlineColor",o("colorErrorRgb",.3))};
    ${r("btnBackgroundHover",`color-mix(in srgb, ${e("btnBackground")}, #000 15%)`)};
    ${r("btnColor","#fff")};
    ${r("btnColorHover","#fff")};
  }

  &.btn-link {
    ${r("btnBackground","transparent")};
    ${r("btnBackgroundHover","transparent")};
    ${r("btnOutlineColor","transparent")};
    ${r("btnBorderColor","transparent")};
    ${r("btnColor",e("colorTextLink"))};
    ${r("btnColorHover",e("colorTextLinkHover"))};
    &:hover {
      text-shadow: 0 0 24px ${e("colorTextLinkHover")};
    }
  }

  &.btn-ghost:not(.btn-default):not(.btn-link) {
    background-color: transparent;
    ${r("btnBorderColor",e("btnBackground"))};
    ${r("btnColor",e("btnBackground"))};

    &:not([disabled]) {
      &:hover,
      &:active {
        background-color: transparent;
        box-shadow: 0 0 12px 0px color-mix(in srgb, ${e("btnBackground")}, transparent 70%);
        ${r("btnBorderColor",e("btnBackgroundHover"))};
        ${r("btnColorHover",e("btnBackground"))};
      }
    }
  }

  &.btn-glass {
    backdrop-filter: blur(5px);
    &:not(.btn-default):not(.btn-link) {
      color: ${e("btnBackground")};
      border-color: ${e("btnBackground")};

      &.btn-primary {
        background-color: ${o("colorPrimaryRgb",.15)};
      }
      &.btn-warning {
        background-color: ${o("colorWarningRgb",.15)};
      }
      &.btn-danger {
        background-color: ${o("colorErrorRgb",.15)};
      }

      &:not([disabled]) {
        &:hover,
        &:active {
          box-shadow: 0 0 12px 0px color-mix(in srgb, ${e("btnBackground")}, transparent 70%);
          ${r("btnColorHover",e("btnBackground"))};
        }
      }
    }
  }

  .btn-loader-wrap {
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  &.btn-default,
  &.btn-primary,
  &.btn-warning,
  &.btn-danger {
    --btn-progress-bar-bg-color: rgba(225, 225, 225, 0.75);
    .progress-bar.striped {
      background-image: linear-gradient(
        var(--progress-bar-striped-angle),
        var(--btn-progress-bar-bg-color) 25%,
        transparent 25%,
        transparent 50%,
        var(--btn-progress-bar-bg-color) 50%,
        var(--btn-progress-bar-bg-color) 75%,
        transparent 75%,
        transparent
      );
    }

    &.btn-glass,
    &.btn-ghost {
      --btn-progress-bar-bg-color: ${o("colorBackgroundRgb",.5)};
    }
  }

  &.btn-default {
    --btn-progress-bar-bg-color: ${o("colorFrontRgb",.35)};

    .progress-bar {
      ${r("progressColor",o("colorPrimaryRgb",.4))};
    }
  }

  &.btn-link {
    .progress-bar {
      ${r("progressColor",o("colorInfoRgb",.45))};
    }
  }

  &.btn-primary {
    .progress-bar {
      ${r("progressColor",`color-mix(in srgb, ${e("btnBackground")}, #000 20%)`)};
    }
  }

  &.btn-warning {
    .progress-bar {
      ${r("progressColor",`color-mix(in srgb, ${e("btnBackground")}, #000 12%)`)};
    }
  }

  &.btn-danger {
    .progress-bar {
      ${r("progressColor",`color-mix(in srgb, ${e("btnBackground")}, #000 16%)`)};
    }
  }
`;s("common",{progressWidth:"100%",progressHeight:18,progressRadius:e("radiusSM"),progressBarRadius:e("progressRadius"),progressStripedSize:"1.6em",progressSpeed:"0.6s",progressColor:e("colorPrimary"),progressBackgroundMixinColor:"transparent"});const M=S`
  --progress-bar-striped-angle: 45deg;
  --progress-bar-animation-proportion: -1;

  border-radius: ${e("progressRadius")};
  width: ${e("progressWidth")};
  height: ${e("progressHeight")};
  background-color: color-mix(in srgb, ${e("progressColor")}, ${e("progressBackgroundMixinColor")} 75%);
  overflow: hidden;
  position: relative;
  color: #fff;

  &.progress-info {
    ${r("progressColor",e("colorInfo"))};
  }

  &.progress-success {
    ${r("progressColor",e("colorSuccess"))};
  }

  &.progress-warning {
    ${r("progressColor",e("colorWarning"))};
  }

  &.progress-error {
    ${r("progressColor",e("colorError"))};
  }

  &.progress-gray {
    ${r("progressColor",e("colorTextLight"))};
  }

  &.striped-reverse {
    --progress-bar-striped-angle: -45deg;
  }

  &.striped-animation-reverse {
    --progress-bar-animation-proportion: 1;
  }

  &.progress-transition {
    .progress-bar {
      transition: width 0.3s;
    }
  }

  .progress-bar {
    width: ${e("progressWidth")};
    height: inherit;
    background-color: ${e("progressColor")};
    border-radius: ${e("progressBarRadius")};
    position: absolute;
    left: 0;
    top: 0;

    &.striped {
      background-image: linear-gradient(
        var(--progress-bar-striped-angle),
        rgba(${e("colorFrontRgb")}, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(${e("colorFrontRgb")}, 0.15) 50%,
        rgba(${e("colorFrontRgb")}, 0.15) 75%,
        transparent 75%,
        transparent
      );
      background-size: ${e("progressStripedSize")} ${e("progressStripedSize")};

      &.animated {
        animation: ${e("progressSpeed")} linear infinite progress-bar-stripes;
      }
    }

    @keyframes progress-bar-stripes {
      0% {
        background-position-x: calc(var(--progress-bar-animation-proportion) * ${e("progressStripedSize")});
      }
    }
  }
`,E=({children:a,className:l,cssVars:i,style:d,width:p="100%",height:g=18,radius:b,color:c,striped:u,stripedReverse:m,stripedAnimationReverse:f,animated:B=!0,transition:v=!0,progress:y=0,type:$="primary",...h})=>{const n=_("progress",`progress-${$}`,{"striped-reverse":m,"striped-animation-reverse":f,"progress-transition":v},l),C=P({progressWidth:p,progressHeight:g,progressRadius:b,progressColor:c,...i},d);return H("div",{className:n,style:C,css:M,...h,children:[t("div",{className:O("progress-bar",{striped:u,animated:u&&B}),style:{width:`${y}%`}}),a&&t("div",{className:"relative flex center fs-12 full-screen",children:a})]})};try{E.displayName="Progress",E.__docgenInfo={description:"进度条",displayName:"Progress",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"gray"'}]}},progress:{defaultValue:{value:"0"},description:"进度百分比，0 - 100",name:"progress",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100%"},description:"进度条宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"18"},description:"进度条高度",name:"height",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"进度条圆角",name:"radius",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"进度条颜色",name:"color",required:!1,type:{name:"string"}},striped:{defaultValue:null,description:"带条纹",name:"striped",required:!1,type:{name:"boolean"}},stripedReverse:{defaultValue:null,description:"条纹是否反转",name:"stripedReverse",required:!1,type:{name:"boolean"}},stripedAnimationReverse:{defaultValue:null,description:"条纹动画反转",name:"stripedAnimationReverse",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"条纹动画, 默认开启，仅在 striped 为 true 时生效",name:"animated",required:!1,type:{name:"boolean"}},transition:{defaultValue:{value:"true"},description:"启用过渡动画",name:"transition",required:!1,type:{name:"boolean"}}}}}catch{}try{Progress.displayName="Progress",Progress.__docgenInfo={description:"进度条",displayName:"Progress",props:{type:{defaultValue:{value:"primary"},description:"类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"info"'},{value:'"success"'},{value:'"error"'},{value:'"gray"'}]}},progress:{defaultValue:{value:"0"},description:"进度百分比，0 - 100",name:"progress",required:!1,type:{name:"number"}},width:{defaultValue:{value:"100%"},description:"进度条宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:{value:"18"},description:"进度条高度",name:"height",required:!1,type:{name:"string | number"}},radius:{defaultValue:null,description:"进度条圆角",name:"radius",required:!1,type:{name:"string | number"}},color:{defaultValue:null,description:"进度条颜色",name:"color",required:!1,type:{name:"string"}},striped:{defaultValue:null,description:"带条纹",name:"striped",required:!1,type:{name:"boolean"}},stripedReverse:{defaultValue:null,description:"条纹是否反转",name:"stripedReverse",required:!1,type:{name:"boolean"}},stripedAnimationReverse:{defaultValue:null,description:"条纹动画反转",name:"stripedAnimationReverse",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"条纹动画, 默认开启，仅在 striped 为 true 时生效",name:"animated",required:!1,type:{name:"boolean"}},transition:{defaultValue:{value:"true"},description:"启用过渡动画",name:"transition",required:!1,type:{name:"boolean"}}}}}catch{}const w=({children:a,className:l,cssVars:i,style:d,type:p="default",width:g,height:b,paddingX:c,fontSize:u,showOutline:m=!0,ghost:f,glass:B,loading:v,disabled:y,autoLoading:$=!0,autoFocus:h=!0,onClick:n,...C})=>{const k=q.useRef(null),[N,A]=q.useState(!1),F=v||N;let D=y||F;const T=_("btn","flex flex-inline center flex-none",`btn-${p}`,{"show-outline":m,"btn-ghost":f,"btn-glass":B,"is-loading":F},l),z=P({btnWidth:g,btnHeight:b,btnPaddingX:c,btnFontSize:u,...i},d);function W(x){if(D){x.preventDefault();return}const R=n==null?void 0:n(x);$&&L(R)&&(A(!0),R.finally(()=>{A(!1),h&&setTimeout(()=>{var V;(V=k.current)==null||V.focus()},0)}))}return H("button",{ref:k,css:X,className:T,style:z,disabled:D,onClick:W,...C,children:[a,t(I,{show:F,animationConfig:"throughRightFade",children:t("div",{className:"btn-loader-wrap",children:t(E,{className:"btn-loader",height:3,striped:!0,progress:100,cssVars:{progressSpeed:"0.35s"}})})})]})};try{w.displayName="Button",w.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:{value:"default"},description:"按钮类型",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"default"'},{value:'"warning"'},{value:'"danger"'},{value:'"link"'}]}},width:{defaultValue:null,description:"按钮宽度",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"按钮高度",name:"height",required:!1,type:{name:"string | number"}},paddingX:{defaultValue:null,description:"按钮横向间距",name:"paddingX",required:!1,type:{name:"string | number"}},block:{defaultValue:null,description:"使用 flex 替换 inline-flex",name:"block",required:!1,type:{name:"boolean"}},fontSize:{defaultValue:null,description:"字体大小",name:"fontSize",required:!1,type:{name:"string | number"}},ghost:{defaultValue:null,description:"幽灵按钮",name:"ghost",required:!1,type:{name:"boolean"}},glass:{defaultValue:null,description:"半透明 + 毛玻璃效果",name:"glass",required:!1,type:{name:"boolean"}},htmlType:{defaultValue:null,description:"原生按钮类型",name:"htmlType",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},disabled:{defaultValue:null,description:"是否禁用",name:"disabled",required:!1,type:{name:"boolean"}},showOutline:{defaultValue:{value:"true"},description:"显示外轮廓",name:"showOutline",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"加载状态",name:"loading",required:!1,type:{name:"boolean"}},autoLoading:{defaultValue:{value:"true"},description:"如果 onClick 返回一个 promise, 则自动添加按钮 loading",name:"autoLoading",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:{value:"true"},description:"在 loading 结束后，自动聚焦",name:"autoFocus",required:!1,type:{name:"boolean"}}}}}catch{}export{w as B,E as P};
