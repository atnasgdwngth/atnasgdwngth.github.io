!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(){return(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,r){var n=r(22),o=n(r(30)),c=n(r(36)),i=r(24),u=n(r(79)),a=n(r(0)),s=n(r(93)),l=n(r(94)),h=this,f="/Users/wood/Desktop/t2/packages/app/index.web.js";function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var d=function(e){var t=new URLSearchParams(self.location.search).get("dir"),r=(0,i.useWindowDimensions)();return a.default.createElement(a.default.StrictMode,{__self:h,__source:{fileName:f,lineNumber:11}},a.default.createElement(u.default,(0,o.default)({},function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,c.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{window:r},t&&{dir:t}),{sketch:{w:s.default},__self:h,__source:{fileName:f,lineNumber:12}})))};i.AppRegistry.registerComponent("App",(function(){return d})),i.AppRegistry.runApplication("App",{initialProps:l.default,rootTag:document.getElementById("root")})},79:function(e,t,r){var n=r(22),o=r(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){u.I18nManager.forceRTL("rtl"===e.dir);var t=(0,a.useState)(0),r=(0,i.default)(t,2),n=r[0],o=r[1],l=(0,a.useState)(["2","7","0","3"]),w=(0,i.default)(l,2),d=w[0],p=w[1],m=(0,a.useRef)(null),g=(0,a.useCallback)((function(e){o(e.nativeEvent.contentOffset.y)}),[]),v=(0,a.useCallback)((function(){p([].concat((0,c.default)(d),[["3","5","6"][Math.floor(2*Math.random())]]))}),[d]),b=e.window,_=b.height,y=b.width;return a.default.createElement(u.ScrollView,{ref:m,style:u.StyleSheet.compose({overflow:"scroll"}),bounces:!0,onScroll:g,scrollEventThrottle:1,__self:this,__source:{fileName:h,lineNumber:40}},a.default.createElement(s.default,{contentOffsetY:n,Component:f,gap:24,height:163,index:0,overscan:0,marginBottom:0,marginTop:24,parentHeight:_,parentWidth:y,scrollViewRef:m,sketch:e.sketch.w,tiles:["0","3"],width:300,__self:this,__source:{fileName:h,lineNumber:49}}),a.default.createElement(s.default,{contentOffsetY:n,Component:f,gap:24,height:163,index:13,overscan:0,marginBottom:24,marginTop:24,parentHeight:_,parentWidth:y,scrollViewRef:m,sketch:e.sketch.w,tiles:d,width:300,onEndReached:v,__self:this,__source:{fileName:h,lineNumber:66}}))};var c=n(r(38)),i=n(r(39)),u=r(24),a=o(r(0)),s=n(r(87)),l=this,h="/Users/wood/Desktop/t2/packages/app/src/index.jsx",f=function(e){return a.default.createElement(u.View,{style:{backgroundColor:"#333",height:"100%",width:"100%"},__self:l,__source:{fileName:h,lineNumber:12}},a.default.createElement(u.Button,{title:e.text,__self:l,__source:{fileName:h,lineNumber:20}}))}},87:function(e,t,r){var n=r(22),o=r(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(r(30)),i=n(r(36)),u=n(r(39)),a=n(r(38)),s=o(r(0)),l=r(88),h=r(89),f=r(90),w=r(91),d=r(24),p=n(r(92)),m="/Users/wood/Desktop/t2/packages/core/src/Wall.jsx";function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=e.forms,o=e.spans.length;return t.reduce((function(e,t){for(var r=[],c=e[e.length-1],i=c?c.from+n[c.type].s[0].length:0,u=0;u<o;u++){var a=c?n[c.type].r[u][0]+c.spans[u].row:0;r.push({range:[a+n[t].r[u][0],a+n[t].r[u][1]],row:a})}return e.push({from:i,spans:r,type:t}),e}),(0,a.default)(r))}function _(e){var t=this,r=e.contentOffsetY,n=e.gap,o=e.height,i=e.overscan,a=e.sketch,f=e.width,g=e.parentHeight,_=(0,s.useRef)(0),y=function(e){var t=e.sketch,r=e.tiles,n=(0,s.useState)(b(t,r)),o=(0,u.default)(n,2),c=o[0],i=o[1];return(0,s.useEffect)((function(){i(b(t,r))}),[t]),(0,s.useEffect)((function(){for(var e=0;e<r.length&&e<c.length&&r[e]===c[e].type;)e++;e===c.length&&c.length<r.length?i(b(t,r.slice(e),c)):c.length>r.length&&i(c.slice(0,e))}),[r]),c}(e),O=(0,s.useMemo)((function(){return(0,l.sortedLastIndex)(a.spans,e.parentWidth,(function(e){return e[1]*(f+n)-n}))}),[n,e.parentWidth,a,f]),j=(0,s.useMemo)((function(){return y.length?y[y.length-1].spans[O].range[1]*(o+n)-n:0}),[o,n,O,y]),x=(0,s.useMemo)((function(){return a.spans[O][0]*(f+n)-n}),[n,a,O,f]),E=(0,s.useMemo)((function(){return a.spans[0][0]*(f+n)-n}),[n,a,f]),N=(0,s.useRef)(null),P=(0,s.useMemo)((function(){return(0,l.sortedIndex)(y,r-_.current-g*i,(function(e){return e.spans[O].range[1]*(o+n)}))}),[r,n,o,O,i,g,y]),k=(0,s.useMemo)((function(){return(0,l.sortedIndex)(y,r-_.current+g*(i+1),(function(e){return e.spans[O].row*(o+n)-n}))}),[r,n,o,O,i,g,y]),M=(0,s.useMemo)((function(){return r>=_.current-e.marginTop&&r<_.current+j?(0,l.sortedLastIndex)(y,r-_.current,(function(e){return e.spans[O].range[1]*(o+n)})):-1}),[r,n,o,O,e.marginTop,y,j]),S=(0,s.useCallback)((function(e){_.current=e.nativeEvent.layout.y}),[]),C=(0,w.usePrevious)(M);(0,s.useEffect)((function(){N.current.measure((function(t,r){C>-1&&e.scrollViewRef.current.scrollTo({animated:!1,x:0,y:0===C?r-e.marginTop:y[Math.max(C-1,0)].spans[O].range[1]*(o+n)+r})}))}),[O]),(0,s.useEffect)((function(){r-_.current+g*(i+1)>(y.length?y[y.length-1].spans[O].range[0]*(o+n)-n:0)&&e.onEndReached()}));var R=(0,s.useCallback)((function(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(0,h.range)(P,k).map((function(i){var u=y[i],l=u.spans[O].row,h=u.type,w=u.from;return a.forms[h].s[O].map((function(u,a){var d=v({Component:e.Component,children:e.children&&s.Children.toArray(e.children)[e.index+w+a],height:(o+n)*u.h-n,key:e.index+w+a,text:i+"."+h+"."+(e.index+w+a),top:(u.r+l)*(o+n)},!r&&{start:u.c*(f+n),width:Math.min((f+n)*u.w-n,x)});return r^u.b?null:s.default.createElement(p.default,(0,c.default)({},d,{__self:t,__source:{fileName:m,lineNumber:169}}))})).flat()})).flat()}),[P,k,y,O,a.forms,e.Component,e.children,e.index,o,n,f,x]);return(0,s.useMemo)((function(){return s.default.createElement(d.View,{ref:N,onLayout:S,style:{height:j,marginBottom:e.marginBottom,marginTop:e.marginTop,minWidth:E,width:"100%"},__self:t,__source:{fileName:m,lineNumber:190}},s.default.createElement(d.View,{style:{height:"100%",marginEnd:"auto",marginStart:"auto",width:x},__self:t,__source:{fileName:m,lineNumber:201}},R(!1)),R(!0))}),[R,S,e.marginBottom,e.marginTop,j,E,x])}var y=(0,s.memo)(_);t.default=y,_.defaultProps={Component:s.default.createElement(s.default.Fragment,null),index:0,onEndReached:f.noop,overscan:0,scrollTo:f.noop,tiles:[]}},88:function(e,t){function r(e,t,r,n){for(var o=0,c=null===e?o:e.length;o<c;){var i=o+c>>>1;(n?r(e[i])<=t:r(e[i])<t)?o=i+1:c=i}return c}Object.defineProperty(t,"__esModule",{value:!0}),t.sortedIndex=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return r(e,t,n,!1)},t.sortedLastIndex=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return r(e,t,n,!0)}},89:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.range=function(){for(var e=0,t=0,r=1,n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];1===o.length?t=o[0]:2===o.length?(e=o[0],t=o[1]):(e=o[0],t=o[1],r=o[2]);o.length<3&&e>t&&(r=-r);e=+e,t=+t,isNaN(e)&&(e=0);isNaN(t)&&(t=0);var i=Array(Math.max(Math.ceil((t-e)/(r||1)),0)).fill(e).map((function(e,t){return e+t*r}));i.length&&(i[0]=e);return i}},90:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.noop=void 0;t.noop=function(){}},91:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.usePrevious=function(e){var t=(0,n.useRef)();return(0,n.useEffect)((function(){t.current=e})),t.current};var n=r(0)},92:function(e,t,r){var n=r(22),o=r(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(r(30)),i=o(r(0)),u=r(24),a="/Users/wood/Desktop/t2/packages/core/src/internals/Slot.jsx";var s=(0,i.memo)((function(e){var t={height:e.height,index:e.index,text:e.text,width:e.width},r=e.children?(0,i.cloneElement)(e.children,t):i.default.createElement(e.Component,(0,c.default)({},t,{__self:this,__source:{fileName:a,lineNumber:16}}));return i.default.createElement(u.View,{style:{height:e.height,pointerEvents:"auto",position:"absolute",start:e.start||0,top:e.top,width:e.width||"100%"},__self:this,__source:{fileName:a,lineNumber:18}},r)}));t.default=s},93:function(e,t,r){"use strict";r.r(t),t.default={forms:{0:{h:"0",r:[[8,9],[5,6],[4,5]],s:[[{r:0,c:0,h:2,w:2},{r:2,c:1,h:2,w:1},{r:4,c:1,h:3,w:1},{r:2,c:0,h:2,w:1},{r:4,c:0,h:2,w:1},{r:6,c:0,h:2,w:1},{r:7,c:1,h:2,w:1}],[{r:0,c:0,h:2,w:2},{r:0,c:2,h:2,w:1},{r:2,c:0,h:3,w:1},{r:2,c:1,h:2,w:1},{r:4,c:1,h:2,w:1},{r:3,c:2,h:2,w:1},{r:2,c:2,h:1,w:1}],[{r:0,c:0,h:2,w:2},{r:0,c:3,h:2,w:1},{r:2,c:1,h:3,w:1},{r:2,c:0,h:2,w:1},{r:0,c:2,h:2,w:1},{r:2,c:2,h:2,w:1},{r:2,c:3,h:3,w:1}]],t:"0|1:0|1|0:0|1|0|1"},1:{h:"0|1:0|1|0:0|1|0|1",r:[[2,2],[1,1],[1,1]],s:[[{r:0,c:0,h:2,w:1},{r:1,c:1,h:1,w:1}],[{r:0,c:0,h:1,w:1},{r:0,c:2,h:1,w:1}],[{r:0,c:0,h:1,w:1},{r:0,c:2,h:1,w:1}]],t:"0"},2:{h:"0",r:[[3,3],[3,3],[3,3]],s:[[{r:0,h:3,b:!0}],[{r:0,h:3,b:!0}],[{r:0,h:3,b:!0}]],t:"0"},3:{h:"0|1:0|1|0:0|1|0|1",r:[[4,5],[3,4],[2,3]],s:[[{r:0,c:0,h:2,w:1},{r:1,c:1,h:2,w:1},{r:2,c:0,h:2,w:1},{r:3,c:1,h:2,w:1}],[{r:0,c:0,h:3,w:1},{r:0,c:2,h:3,w:1},{r:1,c:1,h:1,w:1},{r:2,c:1,h:2,w:1}],[{r:0,c:0,h:2,w:1},{r:0,c:2,h:2,w:1},{r:1,c:1,h:2,w:1},{r:1,c:3,h:2,w:1}]],t:"0|1:0|1|0:0|1|0|1"},4:{h:"0|1:0|1|0:0|1|0|1",r:[[4,5],[2,2],[2,3]],s:[[{r:0,c:0,h:2,w:1},{r:1,c:1,h:2,w:1},{r:2,c:0,h:2,w:1},{r:3,c:1,h:2,w:1}],[{r:0,c:0,h:2,w:1},{r:0,c:2,h:2,w:1},{r:1,c:1,h:1,w:1},null],[{r:0,c:0,h:2,w:1},{r:0,c:2,h:2,w:1},{r:1,c:1,h:2,w:1},{r:1,c:3,h:2,w:1}]],t:"0|1:0:0|1|0|1"},5:{h:"0|1:0|1|0:0|1|0|1",r:[[7,8],[4,5],[3,4]],s:[[{r:0,c:0,h:2,w:1},{r:1,c:1,h:1,w:1},{r:2,c:0,h:2,w:2},{r:4,c:0,h:3,w:1},{r:4,c:1,h:2,w:1},{r:6,c:1,h:2,w:1}],[{r:0,c:0,h:2,w:1},{r:0,c:2,h:1,w:1},{r:1,c:1,h:2,w:2},{r:2,c:0,h:2,w:1},{r:3,c:1,h:2,w:1},{r:3,c:2,h:1,w:1}],[{r:0,c:0,h:2,w:1},{r:0,c:2,h:1,w:1},{r:1,c:2,h:2,w:2},{r:1,c:1,h:3,w:1},{r:3,c:3,h:1,w:1},{r:2,c:0,h:1,w:1}]],t:"0|1:0|1|0:0|1|0|1"},6:{h:"0|1:0|1|0:0|1|0|1",r:[[7,8],[5,6],[3,4]],s:[[{r:0,c:0,h:1,w:1},{r:1,c:0,h:2,w:2},{r:3,c:1,h:3,w:1},{r:3,c:0,h:2,w:1},{r:5,c:0,h:2,w:1},{r:6,c:1,h:2,w:1}],[{r:0,c:0,h:1,w:1},{r:1,c:0,h:2,w:2},{r:2,c:2,h:3,w:1},{r:0,c:2,h:2,w:1},{r:3,c:1,h:3,w:1},{r:3,c:0,h:2,w:1}],[{r:0,c:0,h:1,w:1},{r:1,c:0,h:2,w:2},{r:1,c:3,h:3,w:1},{r:0,c:2,h:2,w:1},{r:2,c:2,h:1,w:1},{r:3,c:1,h:1,w:1}]],t:"0|1:0|1|0:0|1|0|1"},7:{h:"0",r:[[3,3],[3,3],[3,3]],s:[[{r:0,c:0,h:3,w:2}],[{r:0,c:0,h:3,w:3}],[{r:0,c:0,h:3,w:4}]],t:"0"}},spans:[[2,3],[3,4],[4,9007199254740991]]}},94:function(e,t){e.exports={dir:"ltr",window:{height:1080,width:1920}}}},[[58,1]]])}));