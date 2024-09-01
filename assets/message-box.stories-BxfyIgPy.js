import{j as p,a as e}from"./emotion-react-jsx-runtime.browser.esm-BmIFEm2U.js";import"./index-Ct6AoaM2.js";import{l as s}from"./mini-scrollbar-DUVypj3v.js";import{D as v}from"./dialog.portal-DtF177Ek.js";import{H as N,C as z,A as O,a as T}from"./help-circle-ODUp_3Dz.js";import{X as q}from"./x-circle-BdzjYyNm.js";import{B as r}from"./button-DXEHRL-y.js";import"./jsx-runtime-DWbWqHZ-.js";import"./index-l2PZgWEW.js";import"./index-B888oYOY.js";import"./popup-trigger-BnUp-N6y.js";import"./use-taomu-classname-BHBGss1S.js";import"./index-6lph7OXq.js";import"./popup.store-CruYBn8Q.js";import"./dialog-41DE-mic.js";import"./index-CE9T9n2a.js";function y(o){switch(o){case"info":return e(T,{size:36,color:s("colorInfo")});case"warning":return e(O,{size:36,color:s("colorWarning")});case"success":return e(z,{size:36,color:s("colorSuccess")});case"error":return e(q,{size:36,color:s("colorError")});case"question":return e(N,{size:36,color:s("colorWarning")});default:return null}}function c(o,{type:n,title:m=" ",icon:d,autoOpen:f=!0,...g}={}){const t=new v(()=>{const l=d||y(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:o})]})},{title:m,splitBorder:!1,showCancelButton:!1,noContentWrapper:!0,...g});return f&&t.open(),t}function W(o,n){return c(o,{type:"info",...n})}function j(o,n){return c(o,{type:"warning",...n})}function A(o,n){return c(o,{type:"success",...n})}function D(o,n){return c(o,{type:"error",...n})}function i(o,{type:n="question",title:m=" ",icon:d,autoOpen:f=!0,...g}={}){const t=new v(()=>{const l=d||y(n);return p("div",{className:"pt-8 px-24 flex gap-12 center-v",children:[l?e("div",{children:l}):null,e("div",{children:o})]})},{title:m,splitBorder:!1,noContentWrapper:!0,...g});return f&&t.open(),t}const R={title:"Components/Dialog/messageBox",component:()=>null,tags:["autodocs"],argTypes:{}},a={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(r,{onClick:()=>c("hello",{title:"Title"}),children:"open"}),e(r,{onClick:()=>W("hello"),children:"info"}),e(r,{onClick:()=>A("hello"),children:"success"}),e(r,{onClick:()=>j("hello"),children:"warning"}),e(r,{onClick:()=>D("hello"),children:"error"})]})},u={render:()=>p("div",{className:"flex gap-12 flex-wrap",children:[e(r,{onClick:()=>i("Question",{onOk:()=>console.log("onOk"),onCancel:()=>console.log("onCancel")}),children:"question"}),e(r,{onClick:()=>i("hello",{type:"info"}),children:"info"}),e(r,{onClick:()=>i("hello",{type:"success"}),children:"success"}),e(r,{onClick:()=>i("hello",{type:"warning"}),children:"warning"}),e(r,{onClick:()=>i("hello",{type:"error"}),children:"error"})]})};var h,C,B;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-12 flex-wrap">
        <Button onClick={() => messageBox.open('hello', {
        title: 'Title'
      })}>open</Button>
        <Button onClick={() => messageBox.info('hello')}>info</Button>
        <Button onClick={() => messageBox.success('hello')}>success</Button>
        <Button onClick={() => messageBox.warning('hello')}>warning</Button>
        <Button onClick={() => messageBox.error('hello')}>error</Button>
      </div>;
  }
}`,...(B=(C=a.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var x,k,w;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex gap-12 flex-wrap">
        <Button onClick={() => messageBox.confirm('Question', {
        onOk: () => console.log('onOk'),
        onCancel: () => console.log('onCancel')
      })}>
          question
        </Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'info'
      })}>info</Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'success'
      })}>success</Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'warning'
      })}>warning</Button>
        <Button onClick={() => messageBox.confirm('hello', {
        type: 'error'
      })}>error</Button>
      </div>;
  }
}`,...(w=(k=u.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const U=["基础示例","Confirm"];export{u as Confirm,U as __namedExportsOrder,R as default,a as 基础示例};
