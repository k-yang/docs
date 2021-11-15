"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3720],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,w=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(w,c(c({ref:t},l),{},{components:n})):r.createElement(w,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1255:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),c=["components"],i={title:"cw20-staking Spec",sidebar_position:6},s="CW20 Staking Derivates",u={unversionedId:"cw20/cw20-staking-spec",id:"cw20/cw20-staking-spec",isDocsHomePage:!1,title:"cw20-staking Spec",description:"cw20-staking source",source:"@site/cw-plus/cw20/cw20-staking-spec.md",sourceDirName:"cw20",slug:"/cw20/cw20-staking-spec",permalink:"/fr/cw-plus/0.9.0/cw20/cw20-staking-spec",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw20/cw20-staking-spec.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"cw20-staking Spec",sidebar_position:6},sidebar:"cwPlus",previous:{title:"cw20-escrow Spec",permalink:"/fr/cw-plus/0.9.0/cw20/cw20-escrow-spec"},next:{title:"cw20-atomic-swap Spec",permalink:"/fr/cw-plus/0.9.0/cw20/cw20-atomic-swap-spec"}},l=[{value:"Functionality",id:"functionality",children:[],level:2}],p={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cw20-staking-derivates"},"CW20 Staking Derivates"),(0,a.kt)("p",null,"cw20-staking source\ncode: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw20-escrow"},"https://github.com/CosmWasm/cw-plus/tree/master/contracts/cw20-escrow"),"\nThis is a sample contract that releases a minimal form of staking derivatives. This is to be used for integration tests\nand as a foundation for other to build more complex logic upon."),(0,a.kt)("h2",{id:"functionality"},"Functionality"),(0,a.kt)("p",null,'On one side, this acts as a cw20 token, holding a list of balances for multiple addresses, and exposing queries and\ntransfers (no allowances and "transfer from" to focus the logic on the staking stuff). However, it has no initial\nbalance. Instead, it mints and burns them based on delegations.'),(0,a.kt)("p",null,'For such a "bonding curve" we expose two additional message types. A "bond"\nmessage sends native staking tokens to the contract to be bonded to a validator and credits the user with the\nappropriate amount of derivative tokens. Likewise you can burn some of your derivative tokens, and the contract will\nunbond the proportional amount of stake to the user\'s account (after typical 21-day unbonding period).'),(0,a.kt)("p",null,"To show an example of charging for such a service, we allow the contract owner to take a small exit tax, thus maybe 98%\nof the tokens will be unbonded and sent to the original account, and 2% of the tokens are not unbonded, but rather\ntransferred to the owners account. (The ownership can also be transferred)."))}f.isMDXComponent=!0}}]);