"use strict";(self.webpackChunkparaluni_react=self.webpackChunkparaluni_react||[]).push([[651],{86651:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(1413),s=t(74165),i=t(93433),a=t(15861),c=t(29439),o=t(4519),u=t(447),l=t(35689),d=t(69840),m=(t(49448),t(64236)),f=t(12212),h=t(94447),p=t(45090),x=t(74985),b=t(63252),Z=t(16595);function v(e){return w.apply(this,arguments)}function w(){return(w=(0,a.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Z)({abi:"TronDevTeam",address:x.Z.DevTeamV2,method:"removeLiquidities",params:n,type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return k.apply(this,arguments)}function k(){return(k=(0,a.Z)((0,s.Z)().mark((function e(n){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Z)({abi:"FeeDistributor",address:x.Z.FeeDistributor,method:"distributeFees",params:n,type:"send"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=t(45572),y=t(55940),N=t(2556);function g(){var e=(0,f.Z)(),n=(e.setAddress,e.user,(0,d.$)().t),t=((0,y.Z)().getDaoList,(0,o.useRef)()),w=(0,h.Z)().tokenList,k=(0,o.useState)(!1),g=(0,c.Z)(k,2),F=g[0],T=g[1],L=(0,o.useState)([]),P=(0,c.Z)(L,2),D=P[0],S=P[1],q=(0,o.useState)([]),A=(0,c.Z)(q,2),R=A[0],E=A[1],X=(0,o.useState)(null),_=(0,c.Z)(X,2),z=_[0],B=_[1],I=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){var n,t,r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Z)({abi:"ParaFactory",address:x.Z.ParaFactory,method:"allPairsLength",params:[],type:"call"});case 2:return n=e.sent,t=new Array(parseInt(n)).fill(1),e.next=6,(0,Z.Z)(t.map((function(e,n){return{abi:"ParaFactory",address:x.Z.ParaFactory,method:"allPairs",params:[n]}})));case 6:r=e.sent,console.log(r,"list"),E((0,i.Z)(r.map((function(e){var n=(0,C.Y9)(e);return{address:n,showTips:(0,m.z7)(n),isChoose:!0,name:""}}))));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(w.filter((function(e){return"TRX"!==e.symbol})).map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{isChoose:!0,showTips:e.symbol})})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){T(!0),B(e)},Y=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n,t){var r,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("distributeFees"!==t){e.next=12;break}if(0==(r=n.filter((function(e){return e.isChoose&&"TRX"!=e.isChoose})).map((function(e){return e.address}))).length){e.next=9;break}return e.next=5,j([r]);case 5:e.sent&&u.Z.show("\u6267\u884c\u6210\u529f"),e.next=10;break;case 9:u.Z.show("\u672a\u9009\u62e9token");case 10:e.next=21;break;case 12:if(0==(i=n.filter((function(e){return e.isChoose})).map((function(e){return e.address}))).length){e.next=20;break}return e.next=16,v([i]);case 16:e.sent&&u.Z.show("\u6267\u884c\u6210\u529f"),e.next=21;break;case 20:u.Z.show("\u672a\u9009\u62e9token");case 21:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){I()}),[]),(0,o.useEffect)((function(){w.length&&O()}),[w.length]),(0,N.jsxs)("div",{className:"OperateAdmin",ref:t,children:[(0,N.jsxs)(p.Z,{children:[(0,N.jsxs)("div",{className:"flex-between",children:[(0,N.jsx)("div",{className:"mb-10",children:"\u6267\u884c\u5206\u914d\u8d39\u7528(distributeFees)\uff1a"}),(0,N.jsx)("div",{className:"mb-10 main-btn w45",onClick:function(){V(D)},children:"\u9009\u62e9\u8981\u6267\u884c\u7684Token"})]}),(0,N.jsxs)("div",{className:"flex-row mb-10 warp",children:[D.length?(0,N.jsx)("div",{children:"\u5df2\u9009\u62e9\uff1a"}):(0,N.jsx)("div",{children:"\u672a\u9009\u62e9"}),D.length?D.map((function(e){return e.isChoose?(0,N.jsx)("div",{className:"mr-10 mb-10",children:e.symbol},e.symbol):null})):null]}),(0,N.jsx)("div",{className:"main-btn",onClick:function(){Y(D,"distributeFees")},children:"\u6267\u884c\u65b9\u6cd5"})]}),(0,N.jsxs)(p.Z,{children:[(0,N.jsxs)("div",{className:"flex-between",children:[(0,N.jsx)("div",{className:"mb-10",children:"\u6267\u884c\u79fb\u9664\u6d41\u52a8\u8d44\u91d1(removeLiquidities)\uff1a"}),(0,N.jsx)("div",{className:"mb-10 main-btn w45",onClick:function(){V(R)},children:"\u9009\u62e9\u8981\u6267\u884c\u7684LPToken"})]}),(0,N.jsxs)("div",{className:" mb-10 warp",children:[R.length?(0,N.jsx)("div",{className:"mb-10",children:"\u5df2\u9009\u62e9\uff1a"}):(0,N.jsx)("div",{children:"\u672a\u9009\u62e9"}),R.length?R.map((function(e){return e.isChoose?(0,N.jsxs)("div",{className:"mr-10 mb-10",children:[e.address,e.name?"(".concat(e.name,")"):""]},e.address):null})):null]}),(0,N.jsx)("div",{className:"main-btn",onClick:function(){Y(R,"removeLiquidities")},children:"\u6267\u884c\u65b9\u6cd5"})]}),(0,N.jsx)(l.Z,{title:"\u9009\u62e9\u9700\u8981\u4fee\u6539\u7684\u503c",visible:F,width:"80%",mountContainer:function(){return t.current},footer:(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{className:"contentButton ml-auto",onClick:function(){T(!1)},children:n("common.submit")})}),children:z&&z.map((function(e,n){return(0,N.jsxs)("div",{className:"flex-row fl-jc-between mb-10 bb1px",onClick:function(){var e;z[e=n].isChoose=!z[e].isChoose,B((0,i.Z)(z)),E((0,i.Z)(R)),S((0,i.Z)(D))},children:[(0,N.jsxs)("div",{children:[e.showTips,e.name?"(".concat(e.name,")"):""]}),(0,N.jsx)("div",{className:e.isChoose?"font-color-green":"font-color-red",children:e.isChoose?"\u5df2\u9009\u62e9":"\u672a\u9009\u62e9"})]},n)}))})]})}}}]);