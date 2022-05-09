!function(){var e=document.createElement("style");e.innerHTML=".login-box[data-v-27f7e92c]{display:flex;width:100vw;height:100vh;padding-top:240px;background:url(/vite-vue3-admin/assets/login.dbbe1096.svg);background-size:100%;flex-direction:column;align-items:center}.login-box .login-logo[data-v-27f7e92c]{display:flex;margin-bottom:30px;align-items:center}.login-box .login-logo .svg-icon[data-v-27f7e92c]{font-size:48px}.login-box[data-v-27f7e92c] .ant-form{width:400px}.login-box[data-v-27f7e92c] .ant-form .ant-col{width:100%}.login-box[data-v-27f7e92c] .ant-form .ant-form-item-label{padding-right:6px}\n",document.head.appendChild(e),System.register(["./index-legacy.7f0fae95.js","./logo-legacy.a52a7c1b.js"],(function(e){"use strict";var t,a,n,o,l,r,i,c,s,d,u,f,m,g,p,v,b,h,y,x,w,I,O,_;return{setters:[function(e){t=e.c,a=e.A,n=e.J,o=e.d,l=e.r,r=e.a0,i=e.a1,c=e.ap,s=e.Y,d=e.N,u=e.O,f=e.a7,m=e.$,g=e.b1,p=e.aO,v=e.U,b=e.aa,h=e.V,y=e.W,x=e.a8,w=e.b2,I=e.ai,O=e.aQ},function(e){_=e._}],execute:function(){var z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attrs:{d:"M378.4 475.1a35.91 35.91 0 00-50.9 0 35.91 35.91 0 000 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0048.1 0L730.6 434a33.98 33.98 0 000-48.1l-2.8-2.8a33.98 33.98 0 00-48.1 0L483 579.7 378.4 475.1z"}}]},name:"safety",theme:"outlined"};function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){S(e,t,a[t])}))}return e}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C=function(e,n){var o=j({},e,n.attrs);return t(a,j({},o,{icon:z}),null)};C.displayName="SafetyOutlined",C.inheritAttrs=!1;var k=C;const L={class:"login-box"},A=(e=>(h("data-v-27f7e92c"),e=e(),y(),e))((()=>v("div",{class:"login-logo"},[v("img",{src:_,width:"45"}),v("h1",{class:"mb-0 ml-2 text-3xl font-bold"},"Antd Admin")],-1))),P=["src"],U=x(" 登录 ");e("default",n(o({setup(e){const a=l({loading:!1,captcha:"",formInline:{username:"",password:"",verifyCode:"",captchaId:""}}),n=r(),o=i(),h=c(),y=async()=>{const{id:e,img:t}=await w({width:100,height:50});a.captcha=t,a.formInline.captchaId=e};y();const x=async()=>{const{username:e,password:t,verifyCode:l}=a.formInline;if(""==e.trim()||""==t.trim())return I.warning("用户名或密码不能为空！");if(!l)return I.warning("请输入验证码！");I.loading("登录中...",0),a.loading=!0,console.log(a.formInline);try{await h.login(a.formInline).finally((()=>{a.loading=!1,I.destroy()})),I.success("登录成功！"),setTimeout((()=>{var e;return o.replace(null!==(e=n.query.redirect)&&void 0!==e?e:"/")}))}catch(r){O.error({title:()=>"提示",content:()=>r.message}),y()}};return(e,n)=>{const o=s("a-input"),l=s("a-form-item"),r=s("a-button"),i=s("a-form");return d(),u("div",L,[A,t(i,{layout:"horizontal",model:m(a).formInline,onSubmit:b(x,["prevent"])},{default:f((()=>[t(l,null,{default:f((()=>[t(o,{value:m(a).formInline.username,"onUpdate:value":n[0]||(n[0]=e=>m(a).formInline.username=e),size:"large",placeholder:"rootadmin"},{prefix:f((()=>[t(m(g),{type:"user"})])),_:1},8,["value"])])),_:1}),t(l,null,{default:f((()=>[t(o,{value:m(a).formInline.password,"onUpdate:value":n[1]||(n[1]=e=>m(a).formInline.password=e),size:"large",type:"password",placeholder:"123456",autocomplete:"new-password"},{prefix:f((()=>[t(m(p),{type:"user"})])),_:1},8,["value"])])),_:1}),t(l,null,{default:f((()=>[t(o,{value:m(a).formInline.verifyCode,"onUpdate:value":n[2]||(n[2]=e=>m(a).formInline.verifyCode=e),placeholder:"验证码",maxlength:4,size:"large"},{prefix:f((()=>[t(m(k))])),suffix:f((()=>[v("img",{src:m(a).captcha,class:"absolute right-0 h-full cursor-pointer",onClick:y},null,8,P)])),_:1},8,["value"])])),_:1}),t(l,null,{default:f((()=>[t(r,{type:"primary","html-type":"submit",size:"large",loading:m(a).loading,block:""},{default:f((()=>[U])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","onSubmit"])])}}}),[["__scopeId","data-v-27f7e92c"]]))}}}))}();
