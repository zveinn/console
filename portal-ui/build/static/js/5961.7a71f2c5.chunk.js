"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[5961],{50280:function(e,n,s){var t=s(18489),a=s(50390),l=s(25594),i=s(86509),r=s(4285),c=s(72462),o=s(62559);n.Z=(0,r.Z)((function(e){return(0,i.Z)((0,t.Z)({},c.xx))}))((function(e){var n=e.classes,s=e.label,t=void 0===s?"":s,i=e.content,r=e.multiLine,c=void 0!==r&&r;return(0,o.jsx)(a.Fragment,{children:(0,o.jsxs)(l.ZP,{className:n.prefinedContainer,children:[""!==t&&(0,o.jsx)(l.ZP,{item:!0,xs:12,className:n.predefinedTitle,children:t}),(0,o.jsx)(l.ZP,{item:!0,xs:12,className:n.predefinedList,children:(0,o.jsx)(l.ZP,{item:!0,xs:12,className:c?n.innerContentMultiline:n.innerContent,children:i})})]})})}))},35961:function(e,n,s){s.r(n);var t=s(23430),a=s(18489),l=s(50390),i=s(34424),r=s(25594),c=s(98247),o=s(49044),u=s(81378),d=s(66946),x=s(86509),m=s(4285),h=s(72462),Z=s(44149),f=s(30324),p=s(92620),j=s(51002),b=s(66964),v=s(92440),g=s(50280),y=s(59176),P=s(4795),C=s(86362),S=s(62559),k={setModalErrorSnackMessage:Z.zb},N=(0,i.$j)(null,k);n.default=(0,m.Z)((function(e){return(0,x.Z)((0,a.Z)((0,a.Z)((0,a.Z)({tabsHeader:{marginBottom:"1rem"}},h.ID),h.DF),h.bK))}))(N((function(e){var n=e.classes,s=e.closeModalAndRefresh,a=e.selectedUser,i=e.open,x=e.setModalErrorSnackMessage,m=(0,l.useState)(!1),h=(0,t.Z)(m,2),Z=h[0],k=h[1],N=(0,l.useState)(""),w=(0,t.Z)(N,2),E=w[0],K=w[1],F=(0,l.useState)(""),M=(0,t.Z)(F,2),U=M[0],G=M[1],O=(0,l.useState)(!1),R=(0,t.Z)(O,2),T=R[0],D=R[1],I=(0,l.useState)([]),B=(0,t.Z)(I,2),L=B[0],_=B[1],A=(0,l.useState)([]),H=(0,t.Z)(A,2),z=H[0],V=H[1],$=(0,l.useState)([]),q=(0,t.Z)($,2),J=q[0],Q=q[1],W=(0,l.useState)(0),X=(0,t.Z)(W,2),Y=X[0],ee=X[1],ne=(0,l.useCallback)((function(){if(!a)return null;f.Z.invoke("GET","/api/v1/user?name=".concat(encodeURI(a.accessKey))).then((function(e){k(!1),K(e.accessKey),_(e.memberOf||[]),Q(e.memberOf||[]),D("enabled"===e.status)})).catch((function(e){k(!1),x(e)}))}),[a,x]);(0,l.useEffect)((function(){null===a?(K(""),G(""),_([])):ne()}),[a,ne]);var se=""!==E.trim()&&(""!==U.trim()&&null===a||null!==a);return(0,S.jsxs)(j.Z,{onClose:function(){s()},modalOpen:i,title:null!==a?"Edit User":"Create User",titleIcon:(0,S.jsx)(C.P3,{}),children:[null!==a&&(0,S.jsx)("div",{className:n.floatingEnabled,children:(0,S.jsx)(v.Z,{indicatorLabels:["Enabled","Disabled"],checked:T,value:"user_enabled",id:"user-status",name:"user-status",onChange:function(e){D(e.target.checked)},switchOnly:!0})}),(0,S.jsx)(l.Fragment,{children:(0,S.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){if(e.preventDefault(),U.length<8)return x({errorMessage:"Passwords must be at least 8 characters long",detailedError:""}),void k(!1);Z||(k(!0),null!==a?f.Z.invoke("PUT","/api/v1/user?name=".concat(encodeURI(a.accessKey)),{status:T?"enabled":"disabled",groups:L,policies:z}).then((function(e){k(!1),s()})).catch((function(e){k(!1),x(e)})):f.Z.invoke("POST","/api/v1/users",{accessKey:E,secretKey:U,groups:L,policies:z}).then((function(e){k(!1),s()})).catch((function(e){k(!1),x(e)})))}(e)},children:(0,S.jsxs)(r.ZP,{container:!0,children:[(0,S.jsxs)(r.ZP,{item:!0,xs:12,children:[(0,S.jsx)("div",{className:n.formFieldRow,children:(0,S.jsx)(b.Z,{id:"accesskey-input",name:"accesskey-input",label:"Access Key",value:E,autoFocus:!0,onChange:function(e){K(e.target.value)},disabled:null!==a})}),null!==a?(0,S.jsx)(g.Z,{label:"Current Groups",content:J.join(", ")}):(0,S.jsx)("div",{className:n.formFieldRow,children:(0,S.jsx)(b.Z,{id:"standard-multiline-static",name:"standard-multiline-static",label:"Secret Key",type:"password",value:U,onChange:function(e){G(e.target.value)},autoComplete:"current-password"})}),(0,S.jsx)(r.ZP,{item:!0,xs:12,className:n.tabsHeader,children:(0,S.jsxs)(c.Z,{value:Y,onChange:function(e,n){ee(n)},children:[(0,S.jsx)(o.Z,{label:"Policies"}),(0,S.jsx)(o.Z,{label:"Groups"})]})}),(0,S.jsx)(P.x,{value:Y,index:0,children:(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)(y.Z,{selectedPolicy:z,setSelectedPolicy:V})})}),(0,S.jsx)(P.x,{value:Y,index:1,children:(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)(p.Z,{selectedGroups:L,setSelectedGroups:function(e){_(e)}})})}),Z&&(0,S.jsx)(r.ZP,{item:!0,xs:12,children:(0,S.jsx)(u.Z,{})})]}),(0,S.jsxs)(r.ZP,{item:!0,xs:12,className:n.modalButtonBar,children:[(0,S.jsx)(d.Z,{type:"button",variant:"outlined",color:"primary",onClick:function(){null===a?(K(""),G(""),_([])):_([])},children:"Clear"}),(0,S.jsx)(d.Z,{type:"submit",variant:"contained",color:"primary",disabled:Z||!se,children:"Save"})]})]})})})]})})))},4795:function(e,n,s){s.d(n,{x:function(){return c}});var t=s(18489),a=s(83738),l=s(50390),i=s(62559),r=["children","value","index"],c=function(e){var n=e.children,s=e.value,c=e.index,o=(0,a.Z)(e,r);return(0,i.jsx)("div",(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:s!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c),style:{marginTop:"5px"}},o),{},{children:s===c&&(0,i.jsx)(l.Fragment,{children:n})}))}}}]);
//# sourceMappingURL=5961.7a71f2c5.chunk.js.map