import"./popup-trigger-BnUp-N6y.js";import"./index-l2PZgWEW.js";import"./mini-scrollbar-DUVypj3v.js";import"./jsx-runtime-DWbWqHZ-.js";try{PopupTrigger.displayName="PopupTrigger",PopupTrigger.__docgenInfo={description:"",displayName:"PopupTrigger",props:{children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"hover"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'},{value:'"none"'}]}},position:{defaultValue:{value:"bottom-left"},description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:null,description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:{value:"150"},description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}}}}}catch{}try{Popup.displayName="Popup",Popup.__docgenInfo={description:"",displayName:"Popup",props:{popupId:{defaultValue:{value:"uuid(POPUP_ID_TEMPLATE)"},description:"",name:"popupId",required:!1,type:{name:"string"}},show:{defaultValue:null,description:"显示状态",name:"show",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"层级",name:"zIndex",required:!1,type:{name:"number"}},backgroundEvent:{defaultValue:null,description:"背景事件穿透",name:"backgroundEvent",required:!1,type:{name:"boolean"}},overlay:{defaultValue:{value:"false"},description:"显示遮罩层",name:"overlay",required:!1,type:{name:"boolean"}},overlayProps:{defaultValue:{value:"{}"},description:"遮罩层 props",name:"overlayProps",required:!1,type:{name:"any"}},overlayAnimationConfig:{defaultValue:null,description:"遮罩层内置动画类型",name:"overlayAnimationConfig",required:!1,type:{name:"AnimationConfig"}},overlayTransitionOptions:{defaultValue:null,description:"遮罩层动画函数配置",name:"overlayTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},contentWrapperProps:{defaultValue:{value:"{}"},description:"contentWrapperProps",name:"contentWrapperProps",required:!1,type:{name:"any"}},contentAnimationConfig:{defaultValue:null,description:"弹层内容内置动画类型",name:"contentAnimationConfig",required:!1,type:{name:"AnimationConfig"}},contentTransitionOptions:{defaultValue:null,description:"弹层内容动画函数配置",name:"contentTransitionOptions",required:!1,type:{name:"KeyframeEffectOptions"}},lockScroll:{defaultValue:null,description:"是否锁定滚动",name:"lockScroll",required:!1,type:{name:"boolean"}},escToClose:{defaultValue:{value:"true"},description:"按下 esc 关闭",name:"escToClose",required:!1,type:{name:"boolean"}},clickToClose:{defaultValue:{value:"true"},description:"点击蒙层关闭",name:"clickToClose",required:!1,type:{name:"boolean"}},rect:{defaultValue:null,description:"自定义坐标及尺寸",name:"rect",required:!1,type:{name:"PopupRectType"}},equalWidth:{defaultValue:null,description:"弹出层与目标元素等宽类型，默认 auto",name:"equalWidth",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"equal"'},{value:'"min-width"'},{value:'"max-width"'}]}},positionTargetElement:{defaultValue:null,description:"自动定位目标元素",name:"positionTargetElement",required:!1,type:{name:"HTMLElement | null"}},positionType:{defaultValue:null,description:"自动定位类型",name:"positionType",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"dialog-center"'}]}},autoFixPosition:{defaultValue:{value:"true"},description:"动态位置修正，默认开启，仅在 positionTargetElement 存在时生效",name:"autoFixPosition",required:!1,type:{name:"boolean"}},edgeOffset:{defaultValue:null,description:"弹出内容边缘偏移量",name:"edgeOffset",required:!1,type:{name:"number"}},popupAnimationConfigBuilder:{defaultValue:{value:`(positionType, isTargetRelative) => {
  if (isTargetRelative) {
    switch (positionType) {
      case 'top-left':
      case 'top-right':
        return 'moveTop'

      case 'bottom-left':
      case 'bottom-right':
        return 'moveBottom'
    }
  }

  switch (positionType) {
    case 'bottom':
    case 'center-bottom':
    case 'bottom-center':
      return 'moveBottom'

    case 'left':
    case 'left-center':
    case 'left-bottom':
    case 'left-top':
    case 'top-left':
    case 'bottom-left':
      return 'moveLeft'

    case 'right':
    case 'right-center':
    case 'right-bottom':
    case 'right-top':
    case 'top-right':
    case 'bottom-right':
      return 'moveRight'

    default:
      return 'moveTop'
  }
}`},description:"动态动画类型处理函数",name:"popupAnimationConfigBuilder",required:!1,type:{name:"PopupAnimationConfigBuilder"}},onBeforeEnter:{defaultValue:null,description:"",name:"onBeforeEnter",required:!1,type:{name:"((el?: HTMLElement | null) => void)"}},onEnter:{defaultValue:null,description:"",name:"onEnter",required:!1,type:{name:"((el: HTMLElement) => void)"}},onBeforeLeave:{defaultValue:null,description:"",name:"onBeforeLeave",required:!1,type:{name:"((el: HTMLElement) => void)"}},onLeave:{defaultValue:null,description:"",name:"onLeave",required:!1,type:{name:"(() => void)"}},onBackgroundClickClose:{defaultValue:null,description:"",name:"onBackgroundClickClose",required:!1,type:{name:"(() => void)"}},onEscClose:{defaultValue:null,description:"",name:"onEscClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{PopupPortalBase.displayName="PopupPortalBase",PopupPortalBase.__docgenInfo={description:"Popup 传送门",displayName:"PopupPortalBase",props:{}}}catch{}try{PopupPortal.displayName="PopupPortal",PopupPortal.__docgenInfo={description:"Popup 传送门",displayName:"PopupPortal",props:{}}}catch{}try{PopupTrigger.displayName="PopupTrigger",PopupTrigger.__docgenInfo={description:"",displayName:"PopupTrigger",props:{children:{defaultValue:null,description:"触发元素",name:"children",required:!0,type:{name:"Element"}},content:{defaultValue:null,description:"弹出内容",name:"content",required:!1,type:{name:"ComponentType<any>"}},contentProps:{defaultValue:{value:"{}"},description:"弹出内容 props 用于更新弹层内部数据",name:"contentProps",required:!1,type:{name:"any"}},trigger:{defaultValue:{value:"hover"},description:"触发条件，默认: click",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'},{value:'"none"'}]}},position:{defaultValue:{value:"bottom-left"},description:"弹出位置, 默认为 'bottom-left'",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"center"'},{value:'"left-left"'},{value:'"left-right"'},{value:'"left-top"'},{value:'"left-bottom"'},{value:'"left-center"'},{value:'"right-left"'},{value:'"right-right"'},{value:'"right-top"'},{value:'"right-bottom"'},{value:'"right-center"'},{value:'"top-left"'},{value:'"top-right"'},{value:'"top-top"'},{value:'"top-bottom"'},{value:'"top-center"'},{value:'"bottom-left"'},{value:'"bottom-right"'},{value:'"bottom-top"'},{value:'"bottom-bottom"'},{value:'"bottom-center"'},{value:'"center-left"'},{value:'"center-right"'},{value:'"center-top"'},{value:'"center-bottom"'},{value:'"center-center"'},{value:'"dialog-center"'}]}},portalOptions:{defaultValue:null,description:"传送门选项",name:"portalOptions",required:!1,type:{name:"PopupPortalOptions"}},debounceTime:{defaultValue:{value:"150"},description:"防抖时间, 只在 trigger 为 hover 时生效",name:"debounceTime",required:!1,type:{name:"number"}}}}}catch{}
