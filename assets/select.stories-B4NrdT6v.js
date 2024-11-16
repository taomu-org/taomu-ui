import{j as m,a as r}from"./mini-scrollbar-BRbUwqmL.js";import{R as g}from"./index-DRjF_FHU.js";import"./index-B1pybB_d.js";import{S as a}from"./select-BoOz_bfE.js";import{B as q}from"./button-9XEQia8c.js";import"./jsx-runtime-DR9Q75dM.js";import"./use-taomu-classname-DvhRoCTO.js";import"./input.styled-sT3znOwy.js";import"./global-style-QoB4c899.js";import"./dropdown-CH2f0y3G.js";import"./index-DooJlp1X.js";import"./popup-trigger-kY5N0Z_u.js";import"./index-rX-Bn4lm.js";import"./index-BpBZeYWD.js";import"./popup.store-CEPolm7I.js";import"./menu-B5O7DHdV.js";import"./empty-Bz8b51HP.js";import"./index-Dw6WB_A6.js";import"./menu-item-CAh3YJAo.js";import"./index-DUskeos7.js";import"./loading-B3JByMQH.js";const ne={title:"Components/Select",component:a,tags:["autodocs"],argTypes:{}},o={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},n={args:{placeholder:"请选择",openOnFocus:!0,options:[{label:"选项1",value:1},{label:"选项2",value:2}]},render:e=>m("div",{className:"grid col-3 gap-12",children:[r(a,{...e}),r(a,{...e}),r(a,{...e}),r(a,{...e}),r(a,{...e}),r(a,{...e})]})},t={args:{placeholder:"请选择",showSearch:!0,options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"},{label:"选项3",value:"3"},{label:"选项4",value:"4"},{label:"选项5",value:"5"},{label:"选项6",value:"6"}]}},s={args:{placeholder:"请选择",options:[]}},c={args:{placeholder:"请选择"},render:e=>{const[l,i]=g.useState([]);return g.useEffect(()=>{let d=0;const T=setInterval(()=>{i([{label:`选项1-${d}`,value:1},{label:`选项2-${d}`,value:2}]),d++},1e3);return()=>clearInterval(T)},[]),r(a,{...e,options:l})}},p={args:{placeholder:"请选择",options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},render:e=>{const[l,i]=g.useState(!0);return m("div",{className:"flex col gap-12",children:[m(q,{onClick:()=>i(!l),children:["loading: ",l+""]}),r(a,{...e,loading:l})]})}},u={args:{placeholder:"请选择",value:"1",options:[{label:"选项1, value 固定为1",value:"1"},{label:"选项2",value:"2"}]}};var v,b,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    options: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  }
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var h,f,O;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    openOnFocus: true,
    options: [{
      label: '选项1',
      value: 1
    }, {
      label: '选项2',
      value: 2
    }]
  },
  render: args => {
    return <div className="grid col-3 gap-12">
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
        <Select {...args} />
      </div>;
  }
}`,...(O=(f=n.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var x,I,R;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    showSearch: true,
    options: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }, {
      label: '选项3',
      value: '3'
    }, {
      label: '选项4',
      value: '4'
    }, {
      label: '选项5',
      value: '5'
    }, {
      label: '选项6',
      value: '6'
    }]
  }
}`,...(R=(I=t.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var B,N,$;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    options: []
  }
}`,...($=(N=s.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var j,C,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择'
  },
  render: args => {
    const [options, setOptions] = React.useState<SelectOptionItem[]>([]);
    React.useEffect(() => {
      let count = 0;
      const timer = setInterval(() => {
        setOptions([{
          label: \`选项1-\${count}\`,
          value: 1
        }, {
          label: \`选项2-\${count}\`,
          value: 2
        }]);
        count++;
      }, 1000);
      return () => clearInterval(timer);
    }, []);
    return <Select {...args} options={options} />;
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var L,k,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    options: [{
      label: '选项1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  },
  render: args => {
    const [loading, setLoading] = React.useState(true);
    return <div className="flex col gap-12">
        <Button onClick={() => setLoading(!loading)}>loading: {loading + ''}</Button>
        <Select {...args} loading={loading} />
      </div>;
  }
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var F,_,y;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择',
    value: '1',
    options: [{
      label: '选项1, value 固定为1',
      value: '1'
    }, {
      label: '选项2',
      value: '2'
    }]
  }
}`,...(y=(_=u.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const te=["基础示例","聚焦自动打开","支持搜索","空选项","数据刷新","加载中","受控组件"];export{te as __namedExportsOrder,ne as default,p as 加载中,u as 受控组件,o as 基础示例,t as 支持搜索,c as 数据刷新,s as 空选项,n as 聚焦自动打开};
