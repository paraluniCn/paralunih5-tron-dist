"use strict";(self.webpackChunkparaluni_react=self.webpackChunkparaluni_react||[]).push([[47],{60047:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(74165),s=t(1413),a=t(15861),c=t(29439),i=t(4519),u=t(447),o=t(69840),l=t(49448),d=t(64236),p=t(12212),f=t(94447),v=t(45090),m=t(93433),h=t(63252),Z=t(74985),x=t(2556);function b(){var e=(0,p.Z)(),n=e.setAddress,t=e.user,b=(0,o.$)().t,k=(0,f.Z)().tokenList,w=(0,i.useState)(!1),g=(0,c.Z)(w,2),y=(g[0],g[1]),j=(0,i.useState)([]),_=(0,c.Z)(j,2),N=_[0],S=_[1],M=(0,i.useState)(!0),P=(0,c.Z)(M,2),C=(P[0],P[1]),A=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N[t].isSelect=!N[t].isSelect,S((0,m.Z)(N));case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),V=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.f1)(n,null===t||void 0===t?void 0:t.address);case 2:return a=e.sent,e.abrupt("return",a.map((function(e,t){return(0,s.Z)((0,s.Z)({},n[t]),{},{stayPriceNum:(0,d.eK)(e,n[t].symbol).toFixed(0)||0,stayPrice:(0,d.Rx)((0,d.eK)(e,n[t].symbol).toNumber()||0)})})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(k);case 2:n=e.sent,S(n),C(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=N.filter((function(e){return e.isSelect})).map((function(e){return e.address})),console.log(n,"paramList"),0==n.length?(t=[],s="claim()"):1==n.length?(t=n,s="claim(address)"):(t=[n],s="claim(address[])"),e.next=6,(0,h.Z)({abi:"TronDevTeam",address:Z.Z.DevTeamV2,method:s,params:t,type:"send"});case 6:e.sent&&(K(),u.Z.show(b("page.Mine.mine_get_success"))),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),u.Z.show(b("page.Mine.mine_get_fail"));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.address){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,l.oE)(null===t||void 0===t?void 0:t.address);case 4:n=e.sent,y(n),n&&K();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){null!==t&&void 0!==t&&t.address&&k.length?E():n()}),[null===t||void 0===t?void 0:t.address,k]),(0,x.jsx)("div",{className:"V42GetAward",children:(0,x.jsx)(v.Z,{children:(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"back-btn",onClick:T,children:N.some((function(e){return e.isSelect}))?b("page.Mine.mine_get"):b("page.Mine.mine_one_click_get")}),null!==N&&void 0!==N&&N.length?N.map((function(e,n){return(0,x.jsxs)("div",{className:"back-item",children:[(0,x.jsx)("div",{className:"back-item-label",children:e.symbol}),(0,x.jsx)("div",{className:"back-item-value",children:e.stayPrice}),(0,x.jsx)("div",{onClick:function(){A(e,n)},children:e.isSelect?"\u5df2\u9009\u62e9":"\u9009\u62e9"})]},n)})):(0,x.jsx)("div",{className:"back-none",children:b("page.Mine.mine_no_bonus")})]})})})}var k=t(77245);function w(){var e=(0,p.Z)(),n=e.setAddress,t=e.user,m=(0,o.$)().t,h=(0,f.Z)().tokenList,Z=(0,i.useState)(!1),w=(0,c.Z)(Z,2),g=w[0],y=w[1],j=(0,i.useState)([]),_=(0,c.Z)(j,2),N=_[0],S=_[1],M=(0,i.useState)(!0),P=(0,c.Z)(M,2),C=P[0],A=P[1],V=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.sz)(n,null===t||void 0===t?void 0:t.address);case 2:return a=e.sent,e.abrupt("return",a.map((function(e,t){return(0,s.Z)((0,s.Z)({},n[t]),{},{stayPriceNum:(0,d.eK)(e,n[t].symbol).toFixed(0)||0,stayPrice:(0,d.Rx)((0,d.eK)(e,n[t].symbol).toNumber()||0)})})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),K=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(h);case 2:n=e.sent,S(n),A(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!N.some((function(e){return e.stayPriceNum>0}))){e.next=9;break}return e.next=5,(0,l.IT)();case 5:e.sent&&(K(),u.Z.show(m("page.Mine.mine_get_success"))),e.next=10;break;case 9:u.Z.show(m("\u6ca1\u6709\u53ef\u9886\u53d6\u7684\u5956\u52b1"));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),u.Z.show(m("page.Mine.mine_get_fail"));case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.address){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,l.oV)(null===t||void 0===t?void 0:t.address);case 4:n=e.sent,y(n),n&&K();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){null!==t&&void 0!==t&&t.address&&h.length?E():n()}),[null===t||void 0===t?void 0:t.address,h]),(0,x.jsx)("div",{className:"V42GetAward",children:g&&!C?(0,x.jsx)(k.Z,{tabs:[{title:m("\u5206\u7ea2\u65b0\u7248"),node:(0,x.jsx)(b,{})},{title:m("\u5206\u7ea2\u8001\u7248"),node:(0,x.jsx)("div",{className:"V42GetAward",children:(0,x.jsx)(v.Z,{children:(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"back-btn",onClick:T,children:m("page.Mine.mine_one_click_get")}),null!==N&&void 0!==N&&N.length?N.map((function(e,n){return(0,x.jsxs)("div",{className:"back-item",children:[(0,x.jsx)("div",{className:"back-item-label",children:e.symbol}),(0,x.jsx)("div",{className:"back-item-value",children:e.stayPrice})]},n)})):(0,x.jsx)("div",{className:"back-none",children:m("page.Mine.mine_no_bonus")})]})})})}]}):(0,x.jsx)("div",{className:"nocontenttext",children:"NO Content"})})}}}]);