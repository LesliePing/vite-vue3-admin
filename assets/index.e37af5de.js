var k=Object.defineProperty,w=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var d=(a,e,t)=>e in a?k(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,i=(a,e)=>{for(var t in e||(e={}))K.call(e,t)&&d(a,t,e[t]);if(m)for(var t of m(e))D.call(e,t)&&d(a,t,e[t]);return a},p=(a,e)=>w(a,C(e));import{d as F,a1 as h,a0 as x,k as B,l as N,Y as R,N as n,O as _,c as u,a7 as v,ab as T,ac as g,$ as f,ad as E,Z as b,af as A,ae as L}from"./index.fdec921d.js";const O={name:"demos-nested-routes"},V=F(p(i({},O),{setup(a){const e=h(),t=x(),r=[{title:"\u8DEF\u7531\u4E00",name:"demos-nested-routes-one"},{title:"\u8DEF\u7531\u4E8C",name:"demos-nested-routes-two"},{title:"\u8DEF\u7531\u4E09",name:"demos-nested-routes-three"}],o=B(t.name||r[0].name);return N(o,l=>{e.push({name:l})}),(l,c)=>{const y=R("router-view");return n(),_("div",null,[u(f(E),{activeKey:o.value,"onUpdate:activeKey":c[0]||(c[0]=s=>o.value=s)},{default:v(()=>[(n(),_(T,null,g(r,s=>u(f(E).TabPane,{key:s.name,tab:s.title},null,8,["tab"])),64))]),_:1},8,["activeKey"]),u(y,null,{default:v(({Component:s})=>[(n(),b(L,null,[(n(),b(A(s)))],1024))]),_:1})])}}}));export{V as default};
