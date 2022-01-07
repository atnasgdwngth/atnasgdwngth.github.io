"use strict";(self.webpackChunkreact_ssr_webpack_plugin_doc=self.webpackChunkreact_ssr_webpack_plugin_doc||[]).push([[162],{530:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return h},toc:function(){return g}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(6396),s=n(8215),o=n(9055),d=n.p+"assets/images/response-9a319f0bcb9555c6702910c024c4517c.png",p=["components"],c={sidebar_position:1},u="Getting started",h={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"1. Install",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/react-ssr-webpack-plugin/docs/getting-started",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"app",permalink:"/react-ssr-webpack-plugin/docs/examples/app"}},g=[{value:"1. Install",id:"1-install",children:[],level:2},{value:"2. Configure ReactSSRWebpackPlugin",id:"2-configure-reactssrwebpackplugin",children:[],level:2},{value:"3a. Prepare node entry",id:"3a-prepare-node-entry",children:[],level:2},{value:"3b. Prepare web entry",id:"3b-prepare-web-entry",children:[],level:2},{value:"4. Configure ReactSSRMiddleware",id:"4-configure-reactssrmiddleware",children:[],level:2},{value:"5. Check the output",id:"5-check-the-output",children:[],level:2}],m={toc:g};function k(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("h2",{id:"1-install"},"1. Install"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm install --save-dev react-ssr-webpack-plugin")),(0,i.kt)(s.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-bash",mdxType:"CodeBlock"},"yarn add -D react-ssr-webpack-plugin"))),(0,i.kt)("h2",{id:"2-configure-reactssrwebpackplugin"},"2. Configure ReactSSRWebpackPlugin"),(0,i.kt)("p",null,"In order to output SSR chunks together with CSR chunks, you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactSSRWebpackPlugin"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="webpack.config.js"',title:'"webpack.config.js"'},'const {ReactSSRWebpackPlugin} = require("react-ssr-webpack-plugin");\n\nmodule.exports = {\n  ...\n  "plugins": [\n    new ReactSSRWebpackPlugin({\n      "entry": {\n        "a.node": path.resolve(__dirname, "a.node")\n      },\n    })\n  ]\n  ...\n}\n')),(0,i.kt)("h2",{id:"3a-prepare-node-entry"},"3a. Prepare node entry"),(0,i.kt)("p",null,"Here is an example of a entry for SSR. You can use JSX for ",(0,i.kt)("inlineCode",{parentName:"p"},"<head>")," tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="a.node.js"',title:'"a.node.js"'},'import {renderToStaticMarkup, renderToString} from "react-dom/server";\nimport {App} from "./App";\n\n// highlight-start\nexport default async (props = {}) => { // this needs to be a default and async export\n// highlight-end\n  const root = renderToString(<App {...props} />)\n  const body = "<!DOCTYPE html>" + renderToStaticMarkup(<html>\n    <head>\n      <meta charSet="utf-8" />\n      <meta name="viewport" content="width=device-width,initial-scale=1" />\n      <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="></link>\n      // highlight-start\n      <script dangerouslySetInnerHTML={{"__html": `globalThis.props = ${JSON.stringify(props).replace(/</g, "\\\\u003c")}`}} />\n      <script dangerouslySetInnerHTML={{"__html": __SOURCES__["a.web.js"]}} />\n      // highlight-end\n    </head>\n    <body>\n      // highlight-start\n      <div id="root" dangerouslySetInnerHTML={{"__html": root}} />\n      <script integrity={__DIGESTS__["vendors.js"]} src={`${__webpack_public_path__}/${__FILES__["vendors.js"]}`} crossOrigin="anonymous" />\n      // highlight-end\n    </body>\n  </html>);\n\n  return {\n    body,\n    "statusCode": 200,\n  };\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__DIGESTS__"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"__FILES__")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"__SOURCES__")," are ",(0,i.kt)("inlineCode",{parentName:"li"},"react-ssr-webpack-plugin")," specific tokens and they will get replaced at build time.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__DIGESTS__")," is for ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity"},"subresource integrity")," purpose."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__FILES__")," is for getting the hashed filename."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"__SOURCES__")," is for inlining the chunk to the page.")))))),(0,i.kt)("h2",{id:"3b-prepare-web-entry"},"3b. Prepare web entry"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="a.web.js"',title:'"a.web.js"'},'import {App} from "./App";\nimport ReactDOM from "react-dom";\n\nReactDOM.hydrateRoot(\n  document.getElementById("root"),\n  <App {...globalThis.props} />\n);\n')),(0,i.kt)("h2",{id:"4-configure-reactssrmiddleware"},"4. Configure ReactSSRMiddleware"),(0,i.kt)("p",null,"In order to simulate SSR, you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"ReactSSRMiddleware")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server"),". With ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-dev-server")," you can enjoy the live reload when not only the client code but also the server code is change."),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"webpack-dev-server < 4.7.0",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-js",title:"webpack.config.js",mdxType:"CodeBlock"},'{\n  // highlight-start\n  "devServer": {\n    "onAfterSetupMiddleware": (devServer) => {\n      // highlight-end\n      devServer.app.get("*", ReactSSRMiddleware(\n        devServer.compiler,\n        {\n          "reqToProps": (req) => ({"url": url.parse(req.originalUrl, true)})\n        }\n      ));\n    },\n  },\n}')),(0,i.kt)(s.Z,{value:"webpack-dev-server >= 4.7.0",mdxType:"TabItem"},(0,i.kt)(o.Z,{className:"language-js",title:"webpack.config.js",mdxType:"CodeBlock"},'{\n  // highlight-start\n  "devServer": {\n    "setupMiddlewares": (middlewares, devServer) => ([\n    // highlight-end\n    ...middlewares,\n      { // this needs to be at the end of middlewares\n        "name": "ReactSSRWebpackPlugin",\n        "path": "*",\n        "middleware": ReactSSRMiddleware(\n          devServer.compiler,\n          {\n            "reqToProps": (req) => ({"url": url.parse(req.originalUrl, true)})\n          }\n        ),\n      },\n    ]),\n  },\n}'))),(0,i.kt)("h2",{id:"5-check-the-output"},"5. Check the output"),(0,i.kt)("div",{class:"text--center"},(0,i.kt)("img",{src:d})),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charSet="utf-8"/>\n    <meta name="viewport" content="width=device-width,initial-scale=1"/>\n    <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="/>\n    // highlight-start\n    <script>\n      globalThis.props = {\n        "url": {\n          "protocol": null,\n          "slashes": null,\n          "auth": null,\n          "host": null,\n          "port": null,\n          "hostname": null,\n          "hash": null,\n          "search": null,\n          "query": {},\n          "pathname": "/a.node",\n          "path": "/a.node",\n          "href": "/a.node"\n        },\n        "__VERSION__": "2.0.development"\n      }\n    <\/script>\n    <script>\n      /******/\n      (()=>{\n        // webpackBootstrap ...\n      )();\n    <\/script>\n    // highlight-end\n  </head>\n  <body>\n    // highlight-start\n    <div id="root">\n      <div class="common__DivWrapper-sc-1o9hep8-0 App__DivWrapperA-sc-lq4rwr-0 jbWOMA izvJxW">\n        ...\n      </div>\n    </div>\n    <script integrity="sha256-Yx4g0nYq75xTOA78jk1GNpDSxEXPGApmhIhok8luDPM=" src="vendors.26771103e691bfcf006c.js" crossorigin="anonymous"><\/script>\n    // highlight-end\n  </body>\n</html>\n')))}k.isMDXComponent=!0}}]);