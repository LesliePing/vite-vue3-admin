System.register(["./index-legacy.7f0fae95.js","./dynamic-table-legacy.0fdc63c8.js","./index-legacy.71e60e49.js","./VerticalRightOutlined-legacy.63372f8f.js","./schema-form-legacy.cc2bdb3d.js","./index-legacy.4860ff97.js"],(function(e){"use strict";var t,n,a,i,c,l;return{setters:[function(e){t=e.d,n=e.N,a=e.Z,i=e.$},function(e){c=e.u},function(e){l=e.a},function(){},function(){},function(){}],execute:function(){e("default",t({name:"SystemMonitorLoginLog",setup(e){const[t]=c(),r=async({page:e,limit:t})=>await l({page:e,limit:t}),s=[{title:"用户名",dataIndex:"username",width:280,align:"center"},{title:"登录IP",dataIndex:"ip",width:150,align:"center"},{title:"登录时间",dataIndex:"time",align:"center",formItemProps:{component:"DatePicker",componentProps:{class:"w-full"}}},{title:"操作系统",dataIndex:"os",align:"center"},{title:"浏览器",dataIndex:"browser",align:"center"}];return(e,c)=>(n(),a(i(t),{"header-title":"登录日志","data-request":r,columns:s}))}}))}}}));
