(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5901)}])},5901:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return m}});var r=i(5893),t=i(952),s=i.n(t),a=i(9008),c=i.n(a);i(5675);var o=i(7294),l=i(529),d=i(3748),h=i(765),p=i(1016),u=i(6366),x=i(9211),j=i(9854),w=i.n(j);function m(){let[n,e]=(0,u.Z)(),[i,t]=(0,x.Z)(!1),[a,j]=(0,o.useState)(null),[m,f]=(0,o.useState)(""),_=async n=>{if(!n){l.ZP.error("请输入视频链接或口令");return}t(!0);try{let{data:e}=await fetch("/api/parser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({keyword:n})}).then(n=>n.json());console.log("data",e),e&&j(e)}catch(n){console.log("err",n)}t(!1)};return(0,o.useEffect)(()=>{(null==a?void 0:a.source)&&(window.handleDownload=()=>{window.open("javascript:window.name;",'<script>location.replace("'+a.source+'")</script>')})},[a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"短视频解析"}),(0,r.jsx)("meta",{name:"description",content:"短视频解析"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:"".concat(w().main," ").concat(s().className),children:[(0,r.jsxs)(d.Z.Compact,{style:{width:"100%",marginBottom:"20px"},children:[(0,r.jsx)(h.ZP,{type:"primary",onClick:()=>{navigator.clipboard.readText().then(n=>{n&&(f(n),_(n))})},children:"粘贴"}),(0,r.jsx)(p.Z,{allowClear:!0,disabled:i,value:m,onChange:n=>f(n.target.value),onPressEnter:_}),(0,r.jsx)(h.ZP,{onClick:_,type:"primary",loading:i,children:"搜索"})]}),!a&&(0,r.jsxs)("div",{className:w().description,children:[(0,r.jsx)("p",{children:"【使用提示】"}),(0,r.jsx)("p",{children:"系统功能：去除视频水印。"}),(0,r.jsx)("p",{children:"打开APP，点开某个视频，点击右下角分享按钮，在分享弹框中点击复制链接或通过分享到微信QQ等获取分享链接"}),(0,r.jsx)("p",{children:"将刚才复制的链接粘贴到上方输入框位置【只保留链接，删掉介绍等文字】，就可以提取了"}),(0,r.jsx)("p",{children:"提取到mp4外链地址后使用浏览器自带下载器或者用其它下载器下载mp4视频文件即可"})]}),a&&(0,r.jsxs)("div",{children:[(0,r.jsx)("img",{src:a.cover,style:{margin:"0 auto",display:"block"}}),(0,r.jsx)("p",{children:a.desc}),(0,r.jsxs)("div",{children:[(0,r.jsx)(h.ZP,{type:"link",onClick:n=>window.handleDownload&&window.handleDownload(),children:(0,r.jsx)("a",{href:a.source,target:"_blank",download:"download",children:"新窗口打开"})}),(0,r.jsx)(h.ZP,{type:"link",onClick:()=>{e(a.source)},children:"复制链接"})]}),(0,r.jsx)("p",{children:"(建议复制以下链接到浏览器自带下载器下载。如果下载文件打不开，重命名下载的文件，后缀自行添加.mp4)"}),(0,r.jsx)(p.Z.TextArea,{value:a.source})]})]})]})}},9854:function(n){n.exports={main:"Home_main__EtNt2"}}},function(n){n.O(0,[213,774,888,179],function(){return n(n.s=5557)}),_N_E=n.O()}]);