"use strict";(self.webpackChunkreact_ssr_webpack_plugin_doc=self.webpackChunkreact_ssr_webpack_plugin_doc||[]).push([[16],{5172:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return m},default:function(){return A},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return u}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),s=t(6396),l=t(8215),o=t(9055),c=t.p+"assets/images/relay-ssr-true-97d811449cefd64bbf50d5e17e933c2d.png",h=t.p+"assets/images/relay-ssr-false-449a3c97ce7e94d34fee23528830d2cc.png",p=["components"],d={title:"relay",sidebar_position:2},m="[relay](https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/relay)",g={unversionedId:"examples/relay",id:"examples/relay",title:"relay",description:"* This example shows:",source:"@site/docs/examples/relay.md",sourceDirName:"examples",slug:"/examples/relay",permalink:"/react-ssr-webpack-plugin/docs/examples/relay",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/examples/relay.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"relay",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"app",permalink:"/react-ssr-webpack-plugin/docs/examples/app"},next:{title:"shell",permalink:"/react-ssr-webpack-plugin/docs/examples/shell"}},u=[{value:"1. Check webpack.config.js",id:"1-check-webpackconfigjs",children:[],level:3},{value:"2. Check index.node.jsx",id:"2-check-indexnodejsx",children:[],level:3},{value:"3. Build and run it",id:"3-build-and-run-it",children:[],level:3},{value:"4a. Inspect http://127.0.0.1:8080/index",id:"4a-inspect-http1270018080index",children:[],level:3},{value:"4b. Inspect http://127.0.0.1:8080/index?ssr=false",id:"4b-inspect-http1270018080indexssrfalse",children:[],level:3}],k={toc:u};function A(e){var n=e.components,t=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"relay"},(0,r.kt)("a",{parentName:"h1",href:"https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/relay"},"relay")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This example shows:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"how the data fetching and store initialization logic look like"),(0,r.kt)("li",{parentName:"ul"},"how ",(0,r.kt)("inlineCode",{parentName:"li"},"/graphql")," middleware can be included in the ",(0,r.kt)("inlineCode",{parentName:"li"},"webpack.config.js")),(0,r.kt)("li",{parentName:"ul"},"how the app can switch to client side rendering with a querystring ",(0,r.kt)("inlineCode",{parentName:"li"},"?ssr=false"))))),(0,r.kt)("h3",{id:"1-check-webpackconfigjs"},"1. Check ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/relay/webpack.config.js"},(0,r.kt)("inlineCode",{parentName:"a"},"webpack.config.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="examples/relay/webpack.config.js"',title:'"examples/relay/webpack.config.js"'},'...\nconst graphql = require("./graphql");\n...\n\nmodule.exports = (env, argv) => {\n  const PROD = argv.mode === "production";\n  const version = `manifest.${argv.mode}`;\n\n  return {\n    "devServer": {\n      ...\n      "setupMiddlewares": (middlewares, devServer) => {\n        // highlight-start\n        graphql(devServer); // check examples/relay/graphql/index.js\n        // highlight-end\n\n        return [\n          ...middlewares,\n          {\n            "name": "ReactSSRWebpackPlugin",\n            "path": "*",\n            "middleware": ReactSSRMiddleware(\n              devServer.compiler,\n              {\n                "reqToProps": (req) => ({\n                  "port": req.socket.localPort, // for relay.test.js\n                  "host": req.socket.localAddress, // for relay.test.js\n                  "url": url.parse(req.originalUrl, true),\n                }),\n                version,\n                "patchGlobal": (global) => {\n                  global.fetch = require("node-fetch");\n                },\n              }\n            ),\n          },\n        ];\n      },\n    },\n    ...\n  }\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"graphql endpoint can be registered inside ",(0,r.kt)("inlineCode",{parentName:"p"},"webpack.config.js")))),(0,r.kt)("h3",{id:"2-check-indexnodejsx"},"2. Check ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/relay/src/index.node.jsx"},(0,r.kt)("inlineCode",{parentName:"a"},"index.node.jsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'export default async (props) => {\n  const sheet = new ServerStyleSheet();\n\n  // highlight-start\n  const ssr = props.url.query.ssr !== "false"; // this allows clients to perform client side rendering with ?ssr=false without a rebuild\n  // highlight-end\n  const graphqlUrl = `http://${props.host}:${props.port}/graphql`;\n  const network = new RelayNetworkLayer([\n    urlMiddleware({\n      "url": graphqlUrl,\n    }),\n  ]);\n  const environment = createEnvironment({\n    "isServer": true,\n    network,\n  });\n  const variables = {\n    "id": props.id || "3j881qym",\n  };\n\n  // highlight-start\n  ssr && (await fetchQuery(environment, rootQuery, variables).toPromise()); // this performs the data fetching\n  // highlight-end\n  const __html = ssr ? renderToString(sheet.collectStyles(<App environment={environment} variables={variables} />)) : "";\n  const body = "<!DOCTYPE html>" + renderToStaticMarkup(<html>\n    <head>\n      <meta charSet="utf-8" />\n      <meta name="viewport" content="width=device-width,initial-scale=1" />\n      <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="></link>\n\n      <script dangerouslySetInnerHTML={{"__html": [\n        // highlight-start\n        `globalThis.__RELAY_STORE__ = ${JSON.stringify(ssr ? environment.getStore().getSource().toJSON() : {}).replace(/</g, "\\\\u003c")};`, // this performs the store initialization for hydration\n        // highlight-end\n        `globalThis.__PROPS__ = ${JSON.stringify({...props, variables, "hydrate": ssr}).replace(/</g, "\\\\u003c")};`,\n        `globalThis.__GRAPHQL_URL__ = ${JSON.stringify(graphqlUrl)};`,\n      ].join("")}} />\n\n      <script dangerouslySetInnerHTML={{"__html": __SOURCES__["index.js"]}} />\n      {ssr ? sheet.getStyleElement() : ""}\n    </head>\n    <body>\n      <div id="root" dangerouslySetInnerHTML={{"__html": __html}}></div>\n      <script integrity={__DIGESTS__["vendors.js"]} src={`${__webpack_public_path__}${__FILES__["vendors.js"]}`} crossOrigin="anonymous" />\n    </body>\n  </html>);\n\n  return {\n    body,\n    "statusCode": 200,\n  };\n};\n')),(0,r.kt)("h3",{id:"3-build-and-run-it"},"3. Build and run it"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm run relay-compiler\nnpm run relay:start")),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},"yarn relay-compiler\nyarn relay:start"))),(0,r.kt)("h3",{id:"4a-inspect-http1270018080index"},"4a. Inspect ",(0,r.kt)("a",{parentName:"h3",href:"http://127.0.0.1:8080/index"},"http://127.0.0.1:8080/index")),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:c})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charSet="utf-8"/>\n    <meta name="viewport" content="width=device-width,initial-scale=1"/>\n    <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="/>\n    <script>\n      // highlight-start\n      // the store initialization --\x3e\n      globalThis.__RELAY_STORE__ = {\n        "client:root": {\n          "__id": "client:root",\n          "__typename": "__Root",\n          "config(id:\\"3j881qym\\")": {\n            "__ref": "3j881qym"\n          }\n        },\n        ...\n      };\n      // highlight-end\n      ...\n      // highlight-start\n      // both client and server are using the same graphql endpoint\n      globalThis.__GRAPHQL_URL__ = "http://127.0.0.1:8080/graphql";\n      // highlight-end\n    <\/script>\n    ...\n  </head>\n  <body>\n    <div id="root">\n      \x3c!--$--\x3e\n      // highlight-start\n      \x3c!-- the body rendered by the server --\x3e\n      <div class="Navigation__Div-sc-3tl8bl-0 iQCpPf">\n        <a href="//apple.com/mac" class="NavigationItem__A-sc-n3rxo5-0 gjLZxB">Mac</a>\n        <a href="//apple.com/ipad" class="NavigationItem__A-sc-n3rxo5-0 gjLZxB">iPad</a>\n        <a href="//apple.com/iphone" class="NavigationItem__A-sc-n3rxo5-0 gjLZxB">iPhone</a>\n        <a href="//apple.com/watch" class="NavigationItem__A-sc-n3rxo5-0 gjLZxB">Watch</a>\n      </div>\n      // highlight-end\n      \x3c!--/$--\x3e\n    </div>\n    <script integrity="sha256-H7F+964gzVOFQxAasYdtLpN0sfT+3p7hFGiFE28kfNs=" src="vendors.8927c448274b07aaf1ee.js" crossorigin="anonymous"><\/script>\n  </body>\n</html>\n')),(0,r.kt)("h3",{id:"4b-inspect-http1270018080indexssrfalse"},"4b. Inspect ",(0,r.kt)("a",{parentName:"h3",href:"http://127.0.0.1:8080/index?ssr=false"},"http://127.0.0.1:8080/index?ssr=false")),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("img",{src:h})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charSet="utf-8"/>\n    <meta name="viewport" content="width=device-width,initial-scale=1"/>\n    <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="/>\n    <script>\n      // highlight-start\n      // as this is client side rendering, the store is empty --\x3e\n      globalThis.__RELAY_STORE__ = {};\n      // highlight-end\n      ...\n      globalThis.__GRAPHQL_URL__ = "http://127.0.0.1:8080/graphql";\n    <\/script>\n    ...\n  </head>\n  <body>\n    // highlight-start\n    \x3c!-- as the store is empty, the body is empty as well --\x3e\n    <div id="root"></div>\n    // highlight-end\n    <script integrity="sha256-H7F+964gzVOFQxAasYdtLpN0sfT+3p7hFGiFE28kfNs=" src="vendors.8927c448274b07aaf1ee.js" crossorigin="anonymous"><\/script>\n  </body>\n</html>\n\n')))}A.isMDXComponent=!0}}]);