"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2266],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),l=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?s.createElement(f,a(a({ref:t},m),{},{components:n})):s.createElement(f,a({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6419:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var s=n(3117),o=n(102),r=(n(7294),n(3905)),a=["components"],i={sidebar_position:2},c="Les bases de Cosmos SDK et CosmWasm",l={unversionedId:"basics/cosmos-sdk-cw",id:"basics/cosmos-sdk-cw",title:"Les bases de Cosmos SDK et CosmWasm",description:"Le Cosmos SDK",source:"@site/i18n/fr/docusaurus-plugin-content-docs-dev-academy/current/basics/03-cosmos-sdk-cw.md",sourceDirName:"basics",slug:"/basics/cosmos-sdk-cw",permalink:"/fr/dev-academy/basics/cosmos-sdk-cw",editUrl:"https://crowdin.com/project/cosmwasm-docs/fr",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"Infrastructure de la cha\xeene de blocs",permalink:"/fr/dev-academy/basics/infra"},next:{title:"Configuration de l'environnement",permalink:"/fr/dev-academy/basics/environment"}},m={},u=[{value:"Le Cosmos SDK",id:"cosmos-sdk",level:2},{value:"How do the Cosmos SDK, CosmWasm, and Tendermint fit together?",id:"how-do-the-cosmos-sdk-cosmwasm-and-tendermint-fit-together",level:2}],d={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"les-bases-de-cosmos-sdk-et-cosmwasm"},"Les bases de Cosmos SDK et CosmWasm"),(0,r.kt)("h2",{id:"cosmos-sdk"},"Le Cosmos SDK"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"From ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.44/intro/overview.html"},"Cosmos SDK docs"))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Qu'est-ce que le SDK ? Le Cosmos-SDK est un framework open-source permettant de construire des blockchains publiques de type PoS (Proof-of-Stake) multi-actifs, comme le Cosmos Hub, ainsi que des blockchains de type PoA (Proof-Of-Authority) autoris\xe9es. Les blockchains construites avec le kit SDK Cosmos sont g\xe9n\xe9ralement appel\xe9es blockchains sp\xe9cifiques \xe0 une application (application-specific). L'objectif du SDK Cosmos est de permettre aux d\xe9veloppeurs de cr\xe9er facilement des blockchains personnalis\xe9es \xe0 partir de z\xe9ro, qui peuvent nativement interagir avec d'autres blockchains. Nous envisageons le SDK comme un framework semblable \xe0 npm afin de construire des applications blockchain s\xe9curis\xe9es au-dessus de Tendermint. Les blockchains bas\xe9es sur un SDK sont construites \xe0 partir de modules composables, dont la plupart sont open source et facilement accessibles \xe0 tout d\xe9veloppeur. Tout le monde peut cr\xe9er un module pour le Cosmos-SDK, et l'int\xe9gration de modules d\xe9j\xe0 construits est aussi simple que leur importation dans votre application blockchain. De plus, le SDK Cosmos est un syst\xe8me bas\xe9 sur les capacit\xe9s, ce qui permet aux d\xe9veloppeurs de mieux raisonner sur la s\xe9curit\xe9 des interactions entre les modules. ::: :::")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"En r\xe9sum\xe9, Cosmos SDK est un framework pour le d\xe9veloppement blockchain facile \xe0 utiliser qui permet aux d\xe9veloppeurs de cr\xe9er des blockchains sp\xe9cifiques \xe0 une application sans se plonger dans les d\xe9tails de mise en \u0153uvre de l'infrastructure de blockchain de bas niveau (comme la tol\xe9rance aux erreurs byzantines)."),(0,r.kt)("p",{parentName:"div"},"Vous pouvez lire la documentation de pr\xe9sentation du SDK Cosmos pour plus d'informations :"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.44/intro"},"Cosmos SDK Intro")," gives a great introduction to the framework."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.44/basics"},"Cosmos SDK Basics")," covers basic concepts of cosmos sdk that is required for developing on cosmwasm without much cosmos-sdk knowledge.")),(0,r.kt)("h2",{parentName:"div",id:"cosmwasm"},"CosmWasm"))),(0,r.kt)("p",null,"En bref, CosmWasm est un module de contrat intelligent (smart contract) qui peut \xeatre utilis\xe9 avec Cosmos SDK. Il ex\xe9cute la machine virtuelle ",(0,r.kt)("a",{parentName:"p",href:"https://webassembly.org/"},"Web Assembly")," (ou Wasm), permettant aux d\xe9veloppeurs de cr\xe9er des contrats intelligents dans diff\xe9rents langages. Actuellement, il prend en charge les contrats intelligents \xe9crits en Rust."),(0,r.kt)("h2",{id:"how-do-the-cosmos-sdk-cosmwasm-and-tendermint-fit-together"},"How do the Cosmos SDK, CosmWasm, and Tendermint fit together?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n                ^  +-------------------------------+  ^\n                |  |                               |  |\n                |  |  State-machine = Application  |  |\n                |  |                               |  |   Built with Cosmos SDK\n                |  |            ^      +           |  |\n                |  +----------- | ABCI | ----------+  v\n                |  |            +      v           |  ^\n                |  |                               |  |\nBlockchain Node |  |           Consensus           |  |\n                |  |                               |  |\n                |  +-------------------------------+  |   Tendermint Core\n                |  |                               |  |\n                |  |           Networking          |  |\n                |  |                               |  |\n                v  +-------------------------------+  v\n\n")),(0,r.kt)("p",null,"The Cosmos SDK is built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/"},"Tendermint Core"),', which handles the low-level infrastructure of maintaining a blockchain (e.g., transacting, consensus). Il interagit avec le Cosmos SDK via l\'ABCI, ou Application BlockChain Interface. Les n\u0153uds complets de la blockchain ex\xe9cutent toute cette "stack" de Cosmos SDK et Tendermint pour r\xe9pliquer la blockchain et valider les transactions.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n                                      +\n                                      |\n                                      |  Transaction relayed from the full-node's\n                                      |  Tendermint engine to the node's application\n                                      |  via DeliverTx\n                                      |\n                                      |\n                +---------------------v--------------------------+\n                |                 APPLICATION                    |\n                |                                                |\n                |     Using baseapp's methods: Decode the Tx,    |\n                |     extract and route the message(s)           |\n                |                                                |\n                +---------------------+--------------------------+\n                                      |\n                                      |\n                                      |\n                                      +---------------------------+\n                                                                  |\n                                                                  |\n                                                                  |  Message routed to\n                                                                  |  the correct module\n                                                                  |  to be processed\n                                                                  |\n                                                                  |\n+----------------+  +---------------+  +----------------+  +------v----------+\n|                |  |               |  |                |  |                 |\n|  AUTH MODULE   |  |  BANK MODULE  |  | STAKING MODULE |  |   CosmWasm      |\n|                |  |               |  |                |  |                 |\n|                |  |               |  |                |  | Executes smart  |\n|                |  |               |  |                |  | contract code   |\n|                |  |               |  |                |  |                 |\n+----------------+  +---------------+  +----------------+  +------+----------+\n                                                                  |\n                                                                  |\n                                                                  |\n                                                                  |\n                                       +--------------------------+\n                                       |\n                                       | Return result to Tendermint\n                                       | (0=Ok, 1=Err)\n                                       v\n\n\n")),(0,r.kt)("p",null,"Les transactions sont transmises de l'ABCI \xe0 l'application, qui les achemine \xe0 son tour vers des ",(0,r.kt)("em",{parentName:"p"},"modules")," charg\xe9s d'ex\xe9cuter la logique applicative. CosmWasm est un module qui ex\xe9cute la machine virtuelle WebAssembly."),(0,r.kt)("p",null,"Par rapport aux contrats intelligents CosmWasm, les modules natifs de Cosmos SDK sont l\xe9g\xe8rement plus rapides en raison de l'absence de virtualisation. Cependant, la virtualisation comporte ses avantages propres. Smart contracts can be swapped when the chain is running, whereas restarts are required for native modules. De plus, gr\xe2ce \xe0 la machine virtuelle flexible Wasm, les contrats CosmWasm peuvent \xeatre \xe9crits en Rust (et un jour d'autres langages \xe9galement)."))}p.isMDXComponent=!0}}]);