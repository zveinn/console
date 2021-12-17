/*! For license information please see 97.5169517e.chunk.js.LICENSE.txt */
(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[97],{390:function(e,t,n){"use strict";var a=n(1),i=n(2),c=n.n(i),o=n(415),r=n(436),l=n(809),s=n(376),d=n(378),u=n(300),b=n(369),j=n(310),p=n(120),f=n(121),m=n(0),h=Object(b.a)((function(e){return Object(u.a)(Object(a.a)({},p.n))}));function O(e){var t=h();return Object(m.jsx)(o.a,Object(a.a)({InputProps:{classes:t}},e))}t.a=Object(j.a)((function(e){return Object(u.a)(Object(a.a)(Object(a.a)(Object(a.a)({},p.i),p.D),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,n=e.onChange,i=e.value,o=e.id,u=e.name,b=e.type,j=void 0===b?"text":b,p=e.autoComplete,h=void 0===p?"off":p,x=e.disabled,v=void 0!==x&&x,g=e.multiline,y=void 0!==g&&g,C=e.tooltip,w=void 0===C?"":C,N=e.index,F=void 0===N?0:N,k=e.error,L=void 0===k?"":k,$=e.required,E=void 0!==$&&$,S=e.placeholder,B=void 0===S?"":S,A=e.min,I=e.max,P=e.overlayIcon,R=void 0===P?null:P,M=e.overlayObject,W=void 0===M?null:M,z=e.extraInputProps,T=void 0===z?{}:z,_=e.overlayAction,D=e.noLabelMinWidth,V=void 0!==D&&D,q=e.classes,G=Object(a.a)({"data-index":F},T);return"number"===j&&A&&(G.min=A),"number"===j&&I&&(G.max=I),Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)(r.a,{container:!0,className:" ".concat(""!==L?q.errorInField:q.inputBoxContainer),children:[""!==t&&Object(m.jsxs)(l.a,{htmlFor:o,className:V?q.noMinWidthLabel:q.inputLabel,children:[Object(m.jsxs)("span",{children:[t,E?"*":""]}),""!==w&&Object(m.jsx)("div",{className:q.tooltipContainer,children:Object(m.jsx)(s.a,{title:w,placement:"top-start",children:Object(m.jsx)("div",{className:q.tooltip,children:Object(m.jsx)(f.a,{})})})})]}),Object(m.jsxs)("div",{className:q.textBoxContainer,children:[Object(m.jsx)(O,{id:o,name:u,fullWidth:!0,value:i,disabled:v,onChange:n,type:j,multiline:y,autoComplete:h,inputProps:G,error:""!==L,helperText:L,placeholder:B,className:q.inputRebase}),R&&Object(m.jsx)("div",{className:"".concat(q.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(m.jsx)(d.a,{onClick:_?function(){_()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:R})}),W&&Object(m.jsx)("div",{className:"".concat(q.overlayAction," ").concat(""!==t?"withLabel":""),children:W})]})]})})}))},400:function(e,t,n){"use strict";var a=n(6),i=n(1),c=n(2),o=n.n(c),r=n(300),l=n(310),s=n(477),d=n(809),u=n(376),b=n(95),j=n(436),p=n(120),f=n(121),m=n(7),h=n(0),O=Object(l.a)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(s.a);t.a=Object(l.a)((function(e){return Object(r.a)(Object(i.a)(Object(i.a)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},p.a),p.i))}))((function(e){var t=e.label,n=void 0===t?"":t,i=e.onChange,c=e.value,r=e.id,l=e.name,s=e.checked,p=void 0!==s&&s,x=e.disabled,v=void 0!==x&&x,g=e.switchOnly,y=void 0!==g&&g,C=e.tooltip,w=void 0===C?"":C,N=e.description,F=void 0===N?"":N,k=e.classes,L=e.indicatorLabels,$=Object(h.jsxs)(o.a.Fragment,{children:[!y&&Object(h.jsx)("span",{className:Object(m.a)(k.indicatorLabel,Object(a.a)({},k.indicatorLabelOn,!p)),children:L&&L.length>1?L[1]:"OFF"}),Object(h.jsx)(O,{checked:p,onChange:i,color:"primary",name:l,inputProps:{"aria-label":"primary checkbox"},disabled:v,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:c}),!y&&Object(h.jsx)("span",{className:Object(m.a)(k.indicatorLabel,Object(a.a)({},k.indicatorLabelOn,p)),children:L?L[0]:"ON"})]});return y?$:Object(h.jsx)("div",{className:k.divContainer,children:Object(h.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(h.jsx)(j.a,{item:!0,xs:!0,children:Object(h.jsxs)(j.a,{container:!0,children:[Object(h.jsx)(j.a,{item:!0,xs:12,sm:4,md:3,children:""!==n&&Object(h.jsxs)(d.a,{htmlFor:r,className:k.inputLabel,children:[Object(h.jsx)("span",{children:n}),""!==w&&Object(h.jsx)("div",{className:k.tooltipContainer,children:Object(h.jsx)(u.a,{title:w,placement:"top-start",children:Object(h.jsx)("div",{className:k.tooltip,children:Object(h.jsx)(f.a,{})})})})]})}),Object(h.jsx)(j.a,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==F&&Object(h.jsx)(b.a,{component:"p",className:k.fieldDescription,children:F})})]})}),Object(h.jsx)(j.a,{item:!0,xs:12,sm:2,textAlign:"right",className:k.switchContainer,children:$})]})})}))},401:function(e,t,n){"use strict";var a=60103,i=60106,c=60107,o=60108,r=60114,l=60109,s=60110,d=60112,u=60113,b=60120,j=60115,p=60116,f=60121,m=60122,h=60117,O=60129,x=60131;if("function"===typeof Symbol&&Symbol.for){var v=Symbol.for;a=v("react.element"),i=v("react.portal"),c=v("react.fragment"),o=v("react.strict_mode"),r=v("react.profiler"),l=v("react.provider"),s=v("react.context"),d=v("react.forward_ref"),u=v("react.suspense"),b=v("react.suspense_list"),j=v("react.memo"),p=v("react.lazy"),f=v("react.block"),m=v("react.server.block"),h=v("react.fundamental"),O=v("react.debug_trace_mode"),x=v("react.legacy_hidden")}function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case c:case r:case o:case u:case b:return e;default:switch(e=e&&e.$$typeof){case s:case d:case p:case j:case l:return e;default:return t}}case i:return t}}}var y=l,C=a,w=d,N=c,F=p,k=j,L=i,$=r,E=o,S=u;t.ContextConsumer=s,t.ContextProvider=y,t.Element=C,t.ForwardRef=w,t.Fragment=N,t.Lazy=F,t.Memo=k,t.Portal=L,t.Profiler=$,t.StrictMode=E,t.Suspense=S,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return g(e)===s},t.isContextProvider=function(e){return g(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return g(e)===d},t.isFragment=function(e){return g(e)===c},t.isLazy=function(e){return g(e)===p},t.isMemo=function(e){return g(e)===j},t.isPortal=function(e){return g(e)===i},t.isProfiler=function(e){return g(e)===r},t.isStrictMode=function(e){return g(e)===o},t.isSuspense=function(e){return g(e)===u},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===r||e===O||e===o||e===u||e===b||e===x||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===j||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===h||e.$$typeof===f||e[0]===m)},t.typeOf=g},434:function(e,t,n){"use strict";e.exports=n(401)},643:function(e,t,n){"use strict";var a=n(1),i=n(2),c=n.n(i),o=n(436),r=n(809),l=n(376),s=n(415),d=n(300),u=n(310),b=n(120),j=n(121),p=n(0);t.a=Object(u.a)((function(e){return Object(d.a)(Object(a.a)(Object(a.a)(Object(a.a)({},b.i),b.D),{},{inputLabel:Object(a.a)(Object(a.a)({},b.i.inputLabel),{},{marginBottom:16,fontSize:14}),textBoxContainer:{flexGrow:1,position:"relative"},cssOutlinedInput:{borderColor:"#EAEAEA",padding:16},rootContainer:{"& .MuiOutlinedInput-inputMultiline":Object(a.a)(Object(a.a)({},b.i.inputLabel),{},{fontSize:13,minHeight:150}),"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1},"& textarea":{color:"#07193E",fontSize:13,fontWeight:600,"&:placeholder":{color:"#393939",opacity:1}}}}))}))((function(e){var t=e.label,n=e.onChange,a=e.value,i=e.id,d=e.name,u=e.disabled,b=void 0!==u&&u,f=e.tooltip,m=void 0===f?"":f,h=e.index,O=void 0===h?0:h,x=e.error,v=void 0===x?"":x,g=e.required,y=void 0!==g&&g,C=e.placeholder,w=void 0===C?"":C,N=e.classes,F={"data-index":O};return Object(p.jsx)(c.a.Fragment,{children:Object(p.jsxs)(o.a,{item:!0,xs:12,className:"".concat(N.fieldContainer," ").concat(""!==v?N.errorInField:""),children:[""!==t&&Object(p.jsxs)(r.a,{htmlFor:i,className:N.inputLabel,children:[Object(p.jsxs)("span",{children:[t,y?"*":""]}),""!==m&&Object(p.jsx)("div",{className:N.tooltipContainer,children:Object(p.jsx)(l.a,{title:m,placement:"top-start",children:Object(p.jsx)("div",{className:N.tooltip,children:Object(p.jsx)(j.a,{})})})})]}),Object(p.jsx)("div",{className:N.textBoxContainer,children:Object(p.jsx)(s.a,{id:i,name:d,fullWidth:!0,value:a,disabled:b,onChange:n,multiline:!0,rows:5,inputProps:F,error:""!==v,helperText:v,placeholder:w,InputLabelProps:{shrink:!0},InputProps:{classes:{notchedOutline:N.cssOutlinedInput,root:N.rootContainer}},variant:"outlined"})})]})})}))},784:function(e,t,n){"use strict";n.r(t),n.d(t,"valueDef",(function(){return N}));var a=n(14),i=n(15),c=n(1),o=n(2),r=n.n(o),l=n(300),s=n(310),d=n(436),u=n(120),b=n(390),j=n(46),p=n.n(j),f=n(458),m=n.n(f),h=n(809),O=n(376),x=n(121),v=n(135),g=n(0),y=Object(s.a)((function(e){return Object(l.a)(Object(c.a)(Object(c.a)(Object(c.a)({},u.i),u.D),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},inputBoxSpacer:{marginBottom:7}}))}))((function(e){var t=e.elements,n=e.name,c=e.label,l=e.tooltip,s=void 0===l?"":l,u=e.commonPlaceholder,j=void 0===u?"":u,f=e.onChange,y=e.withBorder,C=void 0!==y&&y,w=e.classes,N=Object(o.useState)([""]),F=Object(i.a)(N,2),k=F[0],L=F[1],$=Object(o.createRef)();Object(o.useEffect)((function(){if(1===k.length&&""===k[0]&&t&&""!==t){var e=t.split(",");e.push(""),L(e)}}),[t,k]),Object(o.useEffect)((function(){if(k.length>1){var e=$.current;e&&e.scrollIntoView(!1)}}),[k,$]);var E=Object(o.useRef)(!0);Object(o.useLayoutEffect)((function(){E.current?E.current=!1:B()}),[k]);var S=function(e){e.persist();var t=Object(a.a)(k);t[p()(e.target,"dataset.index",0)]=e.target.value,L(t)},B=m()((function(){var e=k.filter((function(e){return""!==e.trim()})).join(",");f(e)}),500),A=k.map((function(e,t){return Object(g.jsx)("div",{className:w.inputBoxSpacer,children:Object(g.jsx)(b.a,{id:"".concat(n,"-").concat(t.toString()),label:"",name:"".concat(n,"-").concat(t.toString()),value:k[t],onChange:S,index:t,placeholder:j,overlayIcon:t===k.length-1?Object(g.jsx)(v.a,{}):null,overlayAction:function(){!function(e){if(""!==e[e.length-1].trim()){var t=Object(a.a)(e);t.push(""),L(t)}}(k)}},"csv-".concat(n,"-").concat(t.toString()))})}));return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsxs)(d.a,{item:!0,xs:12,className:w.fieldContainer,children:[Object(g.jsxs)(h.a,{className:w.inputLabel,children:[Object(g.jsx)("span",{children:c}),""!==s&&Object(g.jsx)("div",{className:w.tooltipContainer,children:Object(g.jsx)(O.a,{title:s,placement:"top-start",children:Object(g.jsx)("div",{className:w.tooltip,children:Object(g.jsx)(x.a,{})})})})]}),Object(g.jsxs)(d.a,{item:!0,xs:12,className:"".concat(C?w.inputWithBorder:""),children:[A,Object(g.jsx)("div",{ref:$})]})]})})})),C=n(643),w=n(400),N=function(e,t,n){var a="on|off"===t?"false":"";if(n.length>0){var i=n.find((function(t){return t.key===e}));i&&(a=i.value)}return a};t.default=Object(s.a)((function(e){return Object(l.a)(Object(c.a)(Object(c.a)({},u.k),{},{formFieldRow:Object(c.a)({},u.k.formFieldRow)},u.p))}))((function(e){var t=e.onChange,n=e.fields,c=e.defaultVals,r=e.classes,l=Object(o.useState)([]),s=Object(i.a)(l,2),u=s[0],j=s[1],p=n||[],f=c||[];Object(o.useEffect)((function(){var e=[];n.forEach((function(t){var n={key:t.name,value:N(t.name,t.type,f)};e.push(n)})),j(e)}),[n,c]),Object(o.useEffect)((function(){t(u)}),[u]);var m=function(e,t,n){var i=Object(a.a)(u);i[n]={key:e,value:t},j(i)},h=function(e,t){switch(e.type){case"on|off":var n=u[t]?u[t].value:"false";return Object(g.jsx)(w.a,{onChange:function(n){var a=n.target.checked?"true":"false";m(e.name,a,t)},id:e.name,name:e.name,label:e.label,value:"switch_on",tooltip:e.tooltip,checked:"true"===n});case"csv":return Object(g.jsx)(y,{elements:u[t]?u[t].value:"",label:e.label,name:e.name,onChange:function(n){return m(e.name,n,t)},tooltip:e.tooltip,commonPlaceholder:e.placeholder,withBorder:!0});case"comment":return Object(g.jsx)(C.a,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:u[t]?u[t].value:"",onChange:function(n){return m(e.name,n.target.value,t)},placeholder:e.placeholder});default:return Object(g.jsx)(b.a,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:u[t]?u[t].value:"",onChange:function(n){return m(e.name,n.target.value,t)},multiline:!!e.multiline,placeholder:e.placeholder})}};return Object(g.jsx)(d.a,{container:!0,children:Object(g.jsx)(d.a,{xs:12,item:!0,className:r.fieldBox,children:p.map((function(e,t){return Object(g.jsx)(d.a,{item:!0,xs:12,className:r.formFieldRow,children:h(e,t)},e.name)}))})})}))}}]);
//# sourceMappingURL=97.5169517e.chunk.js.map