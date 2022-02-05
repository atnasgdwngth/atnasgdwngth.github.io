"use strict";(self.webpackChunkreact_ssr_webpack_plugin_doc=self.webpackChunkreact_ssr_webpack_plugin_doc||[]).push([[738],{4660:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return m},metadata:function(){return c},toc:function(){return h},default:function(){return k}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),p=n(6396),l=n(8215),s=n(9055),o=["components"],d={title:"app",sidebar_position:1},m="[app](https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/app)",c={unversionedId:"examples/app",id:"examples/app",title:"app",description:"* app",source:"@site/docs/examples/app.md",sourceDirName:"examples",slug:"/examples/app",permalink:"/react-ssr-webpack-plugin/docs/examples/app",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/examples/app.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"app",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/react-ssr-webpack-plugin/docs/getting-started"},next:{title:"relay",permalink:"/react-ssr-webpack-plugin/docs/examples/relay"}},h=[{value:"Basic and single entry app:1.0",id:"basic-and-single-entry-app10",children:[{value:"1. Build and run it",id:"1-build-and-run-it",children:[],level:3},{value:"2. Check 1.0.development.js",id:"2-check-10developmentjs",children:[],level:3},{value:"3. Generate HTML",id:"3-generate-html",children:[],level:3}],level:2},{value:"Intermediate and multi entries app:2.0",id:"intermediate-and-multi-entries-app20",children:[{value:"1. Build and run it",id:"1-build-and-run-it-1",children:[],level:3},{value:"2. Check 2.0.development.js",id:"2-check-20developmentjs",children:[],level:3}],level:2},{value:"Advanced and single entry with react-router app:3.0",id:"advanced-and-single-entry-with-react-router-app30",children:[{value:"1. Build and run it",id:"1-build-and-run-it-2",children:[],level:3},{value:"2. Check 3.0.development.js",id:"2-check-30developmentjs",children:[],level:3}],level:2}],u={toc:h};function k(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app"},(0,r.kt)("a",{parentName:"h1",href:"https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/app"},"app")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic-and-single-entry-app10"},"app:1.0")," does:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"print the information of request parameters"),(0,r.kt)("li",{parentName:"ul"},"demonstrate how CSS modules works when dealing with SSR"),(0,r.kt)("li",{parentName:"ul"},"show which manifest and entry are used to perform SSR"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#intermediate-and-multi-entries-app20"},"app:2.0"),"  does:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"demonstrate how routes and entries work together"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#advanced-and-single-entry-with-react-router-app30"},"app:3.0"),"  does:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"show an alternative to ",(0,r.kt)("a",{parentName:"li",href:"https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback"},"historyApiFallback")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"react-router")," for all kinds of urls")))),(0,r.kt)("h2",{id:"basic-and-single-entry-app10"},"Basic and single entry ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/app/1.0"},"app:1.0")),(0,r.kt)("h3",{id:"1-build-and-run-it"},"1. Build and run it"),(0,r.kt)(p.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm run app:1.0:start")),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"yarn app:1.0:start"))),(0,r.kt)("h3",{id:"2-check-10developmentjs"},"2. Check ",(0,r.kt)("a",{parentName:"h3",href:"http://127.0.0.1:8080/1.0.development.js"},(0,r.kt)("inlineCode",{parentName:"a"},"1.0.development.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  __VERSION__: "1.0.development",\n  __ENTRIES__: { "a.node.js": "a.node.<hash>.js" },\n  __ROUTES__: [\n    {\n      pattern: "/a.node",\n      entry: () => "a.node",\n    },\n  ],\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1.0.development.js")," lets you locate the server chunks via a stable name. You will need this to generate a static HTML."),(0,r.kt)("li",{parentName:"ul"},"If the incoming request url is in ",(0,r.kt)("inlineCode",{parentName:"li"},"/a.node"),", then use the entry ",(0,r.kt)("inlineCode",{parentName:"li"},"a.node.js")," to perform SSR.")),(0,r.kt)("h3",{id:"3-generate-html"},"3. Generate HTML"),(0,r.kt)("p",null,"Assume you want to generate a static page with this url ",(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8080/a.node"},"http://127.0.0.1:8080/a.node"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/app/dist\nnode -e \"require('./' + require('./1.0.development')['__ENTRIES__']['a.node.js']).default({'url': { 'href': '/a.node'}, '__VERSION__': '1.0.development'}).then((result) => console.log(result.body))\" > index.html\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To get this command working, you need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn app:1.0"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn app:1.0:start")," will write the server chunks to memory file system."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Now you can gernerate all static pages with different input parameters and you do not need to start a web server."))),(0,r.kt)("h2",{id:"intermediate-and-multi-entries-app20"},"Intermediate and multi entries ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/app/2.0"},"app:2.0")),(0,r.kt)("h3",{id:"1-build-and-run-it-1"},"1. Build and run it"),(0,r.kt)(p.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm run app:2.0:start")),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"yarn app:2.0:start"))),(0,r.kt)("h3",{id:"2-check-20developmentjs"},"2. Check ",(0,r.kt)("a",{parentName:"h3",href:"http://127.0.0.1:8080/2.0.development.js"},(0,r.kt)("inlineCode",{parentName:"a"},"2.0.development.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  __VERSION__: "2.0.development",\n  __ENTRIES__: {\n    "a.node.js": "a.node.<hash>.js",\n    "b.node.js": "b.node.<hash>.js",\n  },\n  __ROUTES__: [\n    {\n      pattern: "/:entry",\n      entry: ({ params }) => params.entry,\n    },\n  ],\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"2.0.development.js")," shows it will handle two routes, ",(0,r.kt)("inlineCode",{parentName:"p"},"/a.node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/b.node"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/a.node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/b.node")," use ",(0,r.kt)("inlineCode",{parentName:"p"},"a.node.js")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"b.node.js")," respectively to handle the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you hit ",(0,r.kt)("inlineCode",{parentName:"p"},"/c.node"),", it will return HTTP 404."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"404 is handled by webpack-dev-server"))))),(0,r.kt)("h2",{id:"advanced-and-single-entry-with-react-router-app30"},"Advanced and single entry with react-router ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/wood1986/react-ssr-webpack-plugin/tree/main/examples/app/3.0"},"app:3.0")),(0,r.kt)("h3",{id:"1-build-and-run-it-2"},"1. Build and run it"),(0,r.kt)(p.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm run app:3.0:start")),(0,r.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"yarn app:3.0:start"))),(0,r.kt)("h3",{id:"2-check-30developmentjs"},"2. Check ",(0,r.kt)("a",{parentName:"h3",href:"http://127.0.0.1:8080/3.0.development.js"},(0,r.kt)("inlineCode",{parentName:"a"},"3.0.development.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  __VERSION__: "3.0.development",\n  __ENTRIES__: { "index.node.js": "index.node.<hash>.js" },\n  __ROUTES__: [\n    {\n      pattern: "/(.*)",\n      entry: () => "index.node",\n    },\n  ],\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"3.0.development.js")," shows it will handle all kinds of urls.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/a.node"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/b.node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/c.node")," use the same entry ",(0,r.kt)("inlineCode",{parentName:"p"},"index.node.js")," to handle the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you hit ",(0,r.kt)("inlineCode",{parentName:"p"},"/c.node"),", it will return HTTP 404."),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"404 is handled by app logic. See the followings"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="examples/app/3.0/App.jsx"',title:'"examples/app/3.0/App.jsx"'},'export function App(props) {\n  return <StrictMode>\n    <GlobalStyle />\n    <Routes>\n      <Route path="a.node" element={\n        <DivWrapper flexDirection="column" color="#d63384" align={"center"}>\n          <Suspense fallback={<div>loading...</div>}>\n            <Img />\n          </Suspense>\n          <Code {...props} to={"b.node"} />\n        </DivWrapper>\n      }/>\n      <Route path="b.node" element={\n        <DivWrapper flexDirection="row">\n          <img src={svg} />\n          <Code {...props} to={"a.node"} />\n        </DivWrapper>\n      }/>\n      // highlight-start\n      <Route path="/*" element={\n        <NotFound />\n      }/>\n      // highlight-end\n    </Routes>\n  </StrictMode>;\n}\n')),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="examples/app/3.0/common.jsx"',title:'"examples/app/3.0/common.jsx"'},"export function NotFound() {\n  const statusCode = useContext(StatusCodeContext);\n  const location = useLocation();\n  // highlight-start\n  statusCode.current = 404;\n  // highlight-end\n  return <Pre>\n    Cannot GET {`${location.pathname}${location.search}`}\n  </Pre>;\n}\n")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="examples/app/3.0/index.node.js"',title:'"examples/app/3.0/index.node.js"'},'export default async (props = {}) => {\n  const sheet = new ServerStyleSheet();\n  // highlight-start\n  const statusCode = createRef();\n  statusCode.current = 200;\n  // highlight-end\n\n  const div = renderToString(\n    sheet.collectStyles(\n      // highlight-start\n      <StatusCodeContext.Provider value={statusCode}>\n      // highlight-end\n        <StaticRouter location={props.url.path}>\n          <App {...props} />\n        </StaticRouter>\n      </StatusCodeContext.Provider>\n    )\n  );\n\n  // there is no point to dynamicially change the head at runtime\n  // when users share a link, crawler will hit that link again\n  const body = "<!DOCTYPE html>" + renderToStaticMarkup(<html>\n    <head>\n      <meta charSet="utf-8" />\n      <meta name="viewport" content="width=device-width,initial-scale=1" />\n      <link rel="icon" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="></link>\n      <style dangerouslySetInnerHTML={{"__html": __SOURCES__["index.web.css"]}}></style>\n      <script dangerouslySetInnerHTML={{"__html": `globalThis.props = ${JSON.stringify(props).replace(/</g, "\\\\u003c")}`}} />\n      <script dangerouslySetInnerHTML={{"__html": __SOURCES__["index.web.js"]}} />\n      {sheet.getStyleElement()}\n    </head>\n    <body>\n      <div id="root" dangerouslySetInnerHTML={{"__html": div}} />\n      <script integrity={__DIGESTS__["vendors.js"]} src={`${__webpack_public_path__}${__FILES__["vendors.js"]}`} crossOrigin="anonymous" />\n    </body>\n  </html>);\n\n  return {\n    body,\n    // highlight-start\n    "statusCode": statusCode.current,\n    // highlight-end\n  };\n};\n')))))))}k.isMDXComponent=!0}}]);