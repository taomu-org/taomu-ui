import{j as O,a as n}from"./mini-scrollbar-Bq2Cewqh.js";import{R as S}from"./index-l2PZgWEW.js";import"./_getTag-Dgi2y9Uc.js";import"./index-lbEMpsy5.js";import"./index-CP3qstbJ.js";import{D as l}from"./dialog-DVl1Ysre.js";import{C as bn}from"./checkbox-DWEE05yV.js";import{D as a}from"./dialog.portal-DIPj85U9.js";import{B as r}from"./button-PSsLmA4n.js";import"./index-BQis2MRJ.js";import"./popup-trigger-DAfQrFfm.js";import"./use-taomu-classname-Bo7IX2bY.js";import"./index-BtTJd_qj.js";import"./popup.store-CTuOgDEi.js";import"./index-zbzXvoZu.js";import"./index-CE9T9n2a.js";async function b(e){return new Promise(o=>setTimeout(o,e))}function P(e,{destroyOnUnmount:o=!0,...t}={},i){const s=S.useRef(new a(e,t,i));return S.useEffect(()=>()=>{o&&s.current.destroy()},[]),s.current}const Mn={title:"Components/Dialog",component:l,tags:["autodocs"],argTypes:{}},c={args:{title:"Title",children:"Content"}},d={args:{children:"Content"}},g={args:{children:"Content",footer:!1}},u={args:{title:"Title",children:"Content",footerAlign:"center"}},p={args:{title:"Title",children:"Content",showCloseIcon:!1}},m={args:{title:"Title",children:"Content",outerBorder:!1}},h={args:{title:"Title",children:"Content",splitBorder:!1}},C={args:{title:"Title",children:"Content"},render:e=>O("div",{className:"flex col gap-12",children:[n(l,{...e,shadow:!1,children:"无"}),n(l,{...e,shadow:"xs",children:"xs"}),n(l,{...e,shadow:"sm",children:"sm"}),n(l,{...e,children:"Default"}),n(l,{...e,shadow:"md",children:"md"}),n(l,{...e,shadow:"lg",children:"lg"}),n(l,{...e,shadow:"xl",children:"xl"})]})},f={args:{title:"Title",children:"Content",width:600,beforeFooterNodes:[n(bn,{children:"checkbox"},"checkbox"),n("div",{className:"flex-1"},"full"),n(r,{type:"warning",glass:!0,children:"Btn Left"},"btn-left")],afterFooterNodes:[n(r,{type:"primary",glass:!0,children:"Btn Right"},"btn-right")]}},T={args:{title:"Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title",children:"Content"}},k={render(){function e(){new a(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}}).open()}return n("div",{children:n(r,{onClick:e,children:"open一个"})})}},v={render(){function e(){new a(()=>n("div",{children:"dialog content"}),{title:"Title"},{overlay:!1,backgroundEvent:!0}).open()}return n("div",{children:n(r,{onClick:e,children:"open一个"})})}},D={render(){function e(){new a(()=>n("div",{children:"dialog content"}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:async()=>{await b(1e3),console.log("onOk")},onCancel:async()=>{await b(1e3),console.log("onCancel")}}).open()}return n("div",{children:n(r,{onClick:e,children:"open一个"})})}},w={render(){async function e(){return new a(({dialogPortalInstance:t,defineOnOk:i,defineOnCancel:s})=>(S.useEffect(()=>{console.log(t)},[]),i(async()=>(await b(1e3),"ok result")),s(async()=>"cancel result"),n("div",{children:"dialog content"})),{title:"Title",children:"Content"},{clickToClose:!0}).open().then(t=>{console.log(t)}).catch(t=>{console.log(t)})}return n("div",{children:n(r,{onClick:e,children:"open一个"})})}},y={render(){const e=P(({dialogPortalInstance:t})=>O("div",{children:["dialog content"," ",n(r,{onClick:()=>{t.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}});function o(){e.open()}return n("div",{children:n(r,{onClick:o,children:"open一个"})})}},B={render(){const e=P(({dialogPortalInstance:t})=>O("div",{children:["dialog content"," ",n(r,{onClick:()=>{t.close()},children:"内部关闭"})]}),{title:"Title",onClose:()=>{console.log("onClose")},onOk:()=>{console.log("onOk")},onCancel:()=>{console.log("onCancel")}},{contentAnimationConfig:!1,overlayAnimationConfig:!1});function o(){e.open()}return n("div",{children:n(r,{onClick:o,children:"open一个"})})}},x={render(){const e=P(()=>n("div",{children:Array.from({length:100}).map((t,i)=>O("div",{children:["item ",i]},i))}),{title:"100 items",stickyFrame:!0});function o(){e.open()}return n("div",{children:n(r,{onClick:o,children:"open一个"})})}};var I,A,N;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  }
}`,...(N=(A=c.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var R,E,F;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'Content'
  }
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var j,_,H;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Content',
    footer: false
  }
}`,...(H=(_=g.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var L,q,z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    footerAlign: 'center'
  }
}`,...(z=(q=u.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    showCloseIcon: false
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    outerBorder: false
  }
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    splitBorder: false
  }
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content'
  },
  render: args => {
    return <div className="flex col gap-12">
        <Dialog {...args} shadow={false}>
          无
        </Dialog>
        <Dialog {...args} shadow="xs">
          xs
        </Dialog>
        <Dialog {...args} shadow="sm">
          sm
        </Dialog>
        <Dialog {...args}>Default</Dialog>
        <Dialog {...args} shadow="md">
          md
        </Dialog>
        <Dialog {...args} shadow="lg">
          lg
        </Dialog>
        <Dialog {...args} shadow="xl">
          xl
        </Dialog>
      </div>;
  }
}`,...($=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var nn,en,on;f.parameters={...f.parameters,docs:{...(nn=f.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    children: 'Content',
    width: 600,
    beforeFooterNodes: [<Checkbox key="checkbox">checkbox</Checkbox>, <div key="full" className="flex-1"></div>, <Button key="btn-left" type="warning" glass>
        Btn Left
      </Button>],
    afterFooterNodes: [<Button key="btn-right" type="primary" glass>
        Btn Right
      </Button>]
  }
}`,...(on=(en=f.parameters)==null?void 0:en.docs)==null?void 0:on.source}}};var tn,rn,ln;T.parameters={...T.parameters,docs:{...(tn=T.parameters)==null?void 0:tn.docs,source:{originalSource:`{
  args: {
    title: 'Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title Title',
    children: 'Content'
  }
}`,...(ln=(rn=T.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var an,sn,cn;k.parameters={...k.parameters,docs:{...(an=k.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render() {
    function openDialog() {
      const dialog = new DialogPortal(() => {
        return <div>dialog content</div>;
      }, {
        title: 'Title',
        onClose: () => {
          console.log('onClose');
        },
        onOk: () => {
          console.log('onOk');
        },
        onCancel: () => {
          console.log('onCancel');
        }
      });
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(cn=(sn=k.parameters)==null?void 0:sn.docs)==null?void 0:cn.source}}};var dn,gn,un;v.parameters={...v.parameters,docs:{...(dn=v.parameters)==null?void 0:dn.docs,source:{originalSource:`{
  render() {
    function openDialog() {
      const dialog = new DialogPortal(() => {
        return <div>dialog content</div>;
      }, {
        title: 'Title'
      }, {
        overlay: false,
        backgroundEvent: true
      });
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(un=(gn=v.parameters)==null?void 0:gn.docs)==null?void 0:un.source}}};var pn,mn,hn;D.parameters={...D.parameters,docs:{...(pn=D.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  render() {
    function openDialog() {
      const dialog = new DialogPortal(() => {
        return <div>dialog content</div>;
      }, {
        title: 'Title',
        onClose: () => {
          console.log('onClose');
        },
        onOk: async () => {
          await sleep(1000);
          console.log('onOk');
        },
        onCancel: async () => {
          await sleep(1000);
          console.log('onCancel');
          // return Promise.reject() // 中断关闭动作
        }
      });
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(hn=(mn=D.parameters)==null?void 0:mn.docs)==null?void 0:hn.source}}};var Cn,fn,Tn;w.parameters={...w.parameters,docs:{...(Cn=w.parameters)==null?void 0:Cn.docs,source:{originalSource:`{
  render() {
    async function openDialog() {
      const dialog = new DialogPortal(({
        dialogPortalInstance,
        defineOnOk,
        defineOnCancel
      }) => {
        React.useEffect(() => {
          console.log(dialogPortalInstance);
        }, []);
        defineOnOk(async () => {
          await sleep(1000);
          return 'ok result';
        });
        defineOnCancel(async () => {
          return 'cancel result';
        });
        return <div>dialog content</div>;
      }, {
        title: 'Title',
        children: 'Content'
      }, {
        clickToClose: true
      });
      return dialog.open().then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(Tn=(fn=w.parameters)==null?void 0:fn.docs)==null?void 0:Tn.source}}};var kn,vn,Dn;y.parameters={...y.parameters,docs:{...(kn=y.parameters)==null?void 0:kn.docs,source:{originalSource:`{
  render() {
    const dialog = useDialog(({
      dialogPortalInstance
    }) => {
      return <div>
            dialog content{' '}
            <Button onClick={() => {
          dialogPortalInstance.close();
        }}>
              内部关闭
            </Button>
          </div>;
    }, {
      title: 'Title',
      onClose: () => {
        console.log('onClose');
      },
      onOk: () => {
        console.log('onOk');
      },
      onCancel: () => {
        console.log('onCancel');
      }
    });
    function openDialog() {
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(Dn=(vn=y.parameters)==null?void 0:vn.docs)==null?void 0:Dn.source}}};var wn,yn,Bn;B.parameters={...B.parameters,docs:{...(wn=B.parameters)==null?void 0:wn.docs,source:{originalSource:`{
  render() {
    const dialog = useDialog(({
      dialogPortalInstance
    }) => {
      return <div>
            dialog content{' '}
            <Button onClick={() => {
          dialogPortalInstance.close();
        }}>
              内部关闭
            </Button>
          </div>;
    }, {
      title: 'Title',
      onClose: () => {
        console.log('onClose');
      },
      onOk: () => {
        console.log('onOk');
      },
      onCancel: () => {
        console.log('onCancel');
      }
    }, {
      contentAnimationConfig: false,
      overlayAnimationConfig: false
    });
    function openDialog() {
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(Bn=(yn=B.parameters)==null?void 0:yn.docs)==null?void 0:Bn.source}}};var xn,On,Sn;x.parameters={...x.parameters,docs:{...(xn=x.parameters)==null?void 0:xn.docs,source:{originalSource:`{
  render() {
    const dialog = useDialog(() => {
      return <div>
            {Array.from({
          length: 100
        }).map((_, index) => {
          return <div key={index}>item {index}</div>;
        })}
          </div>;
    }, {
      title: '100 items',
      stickyFrame: true
    });
    function openDialog() {
      dialog.open();
    }
    return <div>
        <Button onClick={openDialog}>open一个</Button>
      </div>;
  }
}`,...(Sn=(On=x.parameters)==null?void 0:On.docs)==null?void 0:Sn.source}}};const Qn=["基础示例","无头","无脚","按钮居中","无关闭icon","无外边框","无分割线","阴影","底部元素扩展","长标题","函数打开","事件穿透","异步关闭","内部定义回调","Hooks调用","无动画","超出屏幕滚动"];export{y as Hooks调用,Qn as __namedExportsOrder,Mn as default,v as 事件穿透,w as 内部定义回调,k as 函数打开,c as 基础示例,f as 底部元素扩展,D as 异步关闭,u as 按钮居中,p as 无关闭icon,h as 无分割线,B as 无动画,m as 无外边框,d as 无头,g as 无脚,x as 超出屏幕滚动,T as 长标题,C as 阴影};
