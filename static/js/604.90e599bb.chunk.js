"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[604],{83312:function(e,l,t){t.r(l),t.d(l,{default:function(){return ie}});var r=t(93433),n=t(29439),i=t(47313),s=t(85554),o=t(36059),a=t(80654),c=t(39874),d=t(44874),u=t(90495),q=t(59629),p=t(37982),h=t(53805),m=t(95352),x=t(16157),b=t(73477),f=t(27487),v=t(13280),g=[{id:"name",label:"Name",align:"left",width:"10%"},{id:"code",label:"Code",align:"left",width:"10%"},{id:"level",label:"Level",align:"left",width:"10%"},{id:"university",label:"University",align:"left",width:"10%"},{id:"department",label:"Department",align:"left",width:"10%"},{id:"state",label:"Status",align:"left",width:"5%"},{id:"path",label:"Path",align:"left",width:"35%"},{id:"action",label:"Action",align:"left",width:"10%"}],j=[{label:"Graduate",key:"graduate"},{label:"Masters",key:"masters"},{label:"PhD",key:"phd"}],k=t(12843),Z=t(29024),y=t(10126),w=t(82937),C=t(40686),N=t(29266),P=t(99234),S=t(81962),_=t(22449),I=t(46417);var A=function(e){var l=e.handleAdd,t=e.searchText,r=e.setSearchText,n=e.searchUniversity,i=e.setSearchUniversity,o=e.searchDepartment,c=e.setSearchDepartment,d=(0,s.v9)((function(e){return e.universitys})).universitys,u=(0,s.v9)((function(e){return e.departments})).departments;return(0,I.jsx)("div",{className:"container flex w-full",children:(0,I.jsxs)(w.ZP,{container:!0,spacing:2,mt:5,px:2,mb:1,children:[(0,I.jsx)(w.ZP,{item:!0,xs:6,children:(0,I.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:4,children:(0,I.jsxs)(C.Z,{fullWidth:!0,size:"small",children:[(0,I.jsx)(N.Z,{children:"University"}),(0,I.jsxs)(P.Z,{value:n,label:"University",onChange:function(e){return i(e.target.value)},fullWidth:!0,disableUnderline:!0,children:[(0,I.jsx)(S.Z,{value:0,children:"All"},0),d.map((function(e){return(0,I.jsx)(S.Z,{value:e._id,children:e.name},e._id)}))]})]})}),(0,I.jsx)(w.ZP,{item:!0,xs:4,children:(0,I.jsxs)(C.Z,{fullWidth:!0,size:"small",children:[(0,I.jsx)(N.Z,{children:"Department"}),(0,I.jsx)(P.Z,{value:o,label:"Department",onChange:function(e){return c(e.target.value)},fullWidth:!0,children:u.filter((function(e){return e.university._id===n})).map((function(e){return(0,I.jsx)(S.Z,{value:e._id,children:e.department},e._id)}))})]})}),(0,I.jsx)(w.ZP,{item:!0,xs:4,children:(0,I.jsx)(a.Z,{className:"flex items-center w-full h-40 p-4 px-16 py-4 rounded-full shadow-none border-1",children:(0,I.jsx)(_.Z,{placeholder:"Search Course",className:"flex flex-1 px-8",fullWidth:!0,disableUnderline:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){r(e.target.value)}})})})]})}),(0,I.jsx)(w.ZP,{item:!0,xs:6,sx:{textAlign:"right"},children:(0,I.jsx)(b.Z,{className:"whitespace-nowrap",variant:"contained",color:"secondary",onClick:l,children:"Add New"})})]})})},D=t(1413),U=t(68634),H=t(42669),R=t(36368),W=t(45987),L=t(99080);t(91896);L.Z.configure({languages:["javascript","jsx","sh","bash","html","scss","css","json"]}),"undefined"!==typeof window&&(window.hljs=L.Z);var F=t(16),T=t.n(F),E=t(64164),O=t(17551),z=(0,E.ZP)(x.Z)((function(e){var l=e.theme;return{overflow:"hidden",position:"relative",borderRadius:l.shape.borderRadius,border:"solid 1px ".concat((0,O.Fq)(l.palette.grey[500],.32)),"& .ql-container.ql-snow":(0,D.Z)((0,D.Z)({borderColor:"transparent"},l.typography.body1),{},{fontFamily:l.typography.fontFamily}),"& .ql-editor":{minHeight:200,maxHeight:640,"&.ql-blank::before":{fontStyle:"normal",color:l.palette.text.disabled},"& pre.ql-syntax":(0,D.Z)((0,D.Z)({},l.typography.body2),{},{padding:l.spacing(2),borderRadius:l.shape.borderRadius,backgroundColor:l.palette.grey[900]})}}})),M=(0,E.ZP)("div")((function(e){var l=e.theme,t="rtl"===l.direction;return{"& .ql-snow.ql-toolbar button:hover .ql-fill, .ql-snow .ql-toolbar button:hover .ql-fill, .ql-snow.ql-toolbar button:focus .ql-fill, .ql-snow .ql-toolbar button:focus .ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill, .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill, .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill":{fill:l.palette.primary.main},"& .ql-snow.ql-toolbar button:hover, .ql-snow .ql-toolbar button:hover, .ql-snow.ql-toolbar button:focus, .ql-snow .ql-toolbar button:focus, .ql-snow.ql-toolbar button.ql-active, .ql-snow .ql-toolbar button.ql-active, .ql-snow.ql-toolbar .ql-picker-label:hover, .ql-snow .ql-toolbar .ql-picker-label:hover, .ql-snow.ql-toolbar .ql-picker-label.ql-active, .ql-snow .ql-toolbar .ql-picker-label.ql-active, .ql-snow.ql-toolbar .ql-picker-item:hover, .ql-snow .ql-toolbar .ql-picker-item:hover, .ql-snow.ql-toolbar .ql-picker-item.ql-selected, .ql-snow .ql-toolbar .ql-picker-item.ql-selected":{color:l.palette.primary.main},"& .ql-snow.ql-toolbar button:hover .ql-stroke, .ql-snow .ql-toolbar button:hover .ql-stroke, .ql-snow.ql-toolbar button:focus .ql-stroke, .ql-snow .ql-toolbar button:focus .ql-stroke, .ql-snow.ql-toolbar button.ql-active .ql-stroke, .ql-snow .ql-toolbar button.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke, .ql-snow.ql-toolbar button:hover .ql-stroke-miter, .ql-snow .ql-toolbar button:hover .ql-stroke-miter, .ql-snow.ql-toolbar button:focus .ql-stroke-miter, .ql-snow .ql-toolbar button:focus .ql-stroke-miter, .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter, .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter, .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter":{stroke:l.palette.primary.main},"& .ql-stroke":{stroke:l.palette.text.primary},"& .ql-fill, .ql-stroke.ql-fill":{fill:l.palette.text.primary},"& .ql-picker, .ql-picker-options, .ql-picker-item, .ql-picker-label, button":{"&:focus":{outline:"none"}},"& .ql-toolbar.ql-snow":{border:"none",borderBottom:"solid 1px ".concat((0,O.Fq)(l.palette.grey[500],.32)),"& .ql-formats":{"&:not(:last-of-type)":{marginRight:l.spacing(2)}},"& button":{padding:0,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4,color:l.palette.text.primary},"& button svg, span svg":{width:20,height:20},"& .ql-picker-label":(0,D.Z)((0,D.Z)({},l.typography.subtitle2),{},{color:l.palette.text.primary,"& .ql-stroke":{stroke:l.palette.text.primary}}),"& .ql-picker-label svg":(0,D.Z)({},t&&{right:"0 !important",left:"auto !important"}),"& .ql-color,& .ql-background,& .ql-align ":{"& .ql-picker-label":{padding:0,display:"flex",alignItems:"center",justifyContent:"center"}},"& .ql-expanded":{"& .ql-picker-label":{borderRadius:4,color:l.palette.text.disabled,borderColor:"transparent !important",backgroundColor:l.palette.action.focus,"& .ql-stroke":{stroke:l.palette.text.disabled}},"& .ql-picker-options":{padding:0,marginTop:4,border:"none",maxHeight:200,overflow:"auto",boxShadow:l.customShadows.z20,borderRadius:l.shape.borderRadius,backgroundColor:l.palette.background.paper},"& .ql-picker-item":{color:l.palette.text.primary},"&.ql-align":{"& .ql-picker-options":{padding:0,display:"flex"},"& .ql-picker-item":{width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"}},"&.ql-color, &.ql-background":{"& .ql-picker-options":{padding:8},"& .ql-picker-item":{margin:3,borderRadius:4,"&.ql-selected":{border:"solid 1px black"}}},"&.ql-font, &.ql-size, &.ql-header":{"& .ql-picker-options":{padding:l.spacing(1,0)},"& .ql-picker-item":{padding:l.spacing(.5,1.5)}}}}}})),B=["id","isSimple"],Y=["Heading 1","Heading 2","Heading 3","Heading 4","Heading 5","Heading 6"],V=["align","background","blockquote","bold","bullet","code","code-block","color","direction","font","formula","header","image","indent","italic","link","list","script","size","strike","table","underline","video"];function G(e){var l=e.id,t=e.isSimple,r=(0,W.Z)(e,B);return(0,I.jsx)(M,(0,D.Z)((0,D.Z)({},r),{},{children:(0,I.jsxs)("div",{id:l,children:[(0,I.jsx)("div",{className:"ql-formats",children:(0,I.jsxs)("select",{className:"ql-header",defaultValue:"",children:[Y.map((function(e,l){return(0,I.jsx)("option",{value:l+1,children:e},e)})),(0,I.jsx)("option",{value:"",children:"Normal"})]})}),(0,I.jsxs)("div",{className:"ql-formats",children:[(0,I.jsx)("button",{type:"button",className:"ql-bold"}),(0,I.jsx)("button",{type:"button",className:"ql-italic"}),(0,I.jsx)("button",{type:"button",className:"ql-underline"}),(0,I.jsx)("button",{type:"button",className:"ql-strike"})]}),!t&&(0,I.jsxs)("div",{className:"ql-formats",children:[(0,I.jsx)("select",{className:"ql-color"}),(0,I.jsx)("select",{className:"ql-background"})]}),(0,I.jsxs)("div",{className:"ql-formats",children:[(0,I.jsx)("button",{type:"button",className:"ql-list",value:"ordered"}),(0,I.jsx)("button",{type:"button",className:"ql-list",value:"bullet"}),!t&&(0,I.jsx)("button",{type:"button",className:"ql-indent",value:"-1"}),!t&&(0,I.jsx)("button",{type:"button",className:"ql-indent",value:"+1"})]}),!t&&(0,I.jsxs)("div",{className:"ql-formats",children:[(0,I.jsx)("button",{type:"button",className:"ql-script",value:"super"}),(0,I.jsx)("button",{type:"button",className:"ql-script",value:"sub"})]}),!t&&(0,I.jsxs)("div",{className:"ql-formats",children:[(0,I.jsx)("button",{type:"button",className:"ql-code-block"}),(0,I.jsx)("button",{type:"button",className:"ql-blockquote"})]}),(0,I.jsxs)("div",{className:"ql-formats",children:[(0,I.jsx)("button",{type:"button",className:"ql-direction",value:"rtl"}),(0,I.jsx)("select",{className:"ql-align"})]}),(0,I.jsxs)("div",{className:"ql-formats",children:[(0,I.jsx)("button",{type:"button",className:"ql-link"}),(0,I.jsx)("button",{type:"button",className:"ql-image"}),(0,I.jsx)("button",{type:"button",className:"ql-video"})]}),(0,I.jsxs)("div",{className:"ql-formats",children:[!t&&(0,I.jsx)("button",{type:"button",className:"ql-formula"}),(0,I.jsx)("button",{type:"button",className:"ql-clean"})]})]})}))}var J=["id","error","value","onChange","simple","helperText","sx"];function K(e){var l=e.id,t=void 0===l?"minimal-quill":l,r=e.error,n=e.value,i=e.onChange,s=e.simple,o=void 0!==s&&s,a=e.helperText,c=e.sx,d=(0,W.Z)(e,J),u={toolbar:{container:"#".concat(t)},history:{delay:500,maxStack:100,userOnly:!0},syntax:!0,clipboard:{matchVisual:!1}};return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(z,{sx:(0,D.Z)((0,D.Z)({},r&&{border:function(e){return"solid 1px ".concat(e.palette.error.main)}}),c),children:[(0,I.jsx)(G,{id:t,isSimple:o}),(0,I.jsx)(T(),(0,D.Z)({value:n,onChange:i,modules:u,formats:V,placeholder:"Write something awesome..."},d))]}),a&&a]})}var Q={position:"absolute",top:"80px",left:"10%",width:"80%",maxHeight:"90%",overflowY:"auto",bgcolor:"background.paper",border:"1px solid #d8dbe0",boxShadow:24,borderRadius:"10px"};function X(e){var l=(0,i.useState)(""),t=(0,n.Z)(l,2),r=(t[0],t[1],e.isModal),a=e.setIsModal,c=e.id,d=e.searchUniversity,u=e.searchDepartment,q=(0,s.I0)(),p=(0,s.v9)((function(e){return e.universitys})).universitys,h=(0,s.v9)((function(e){return e.departments})).departments,f=(0,s.v9)((function(e){return e.courses})).courses,v=function(){return a(!1)},g=(0,i.useState)(""),Z=(0,n.Z)(g,2),y=Z[0],_=Z[1],A=(0,i.useState)({name:"",code:"",description:"",level:"",university:"",department:"",status:!1}),W=(0,n.Z)(A,2),L=W[0],F=W[1];return(0,i.useEffect)((function(){if(c&&f.length>0){var e=f.filter((function(e){return e._id===c}))[0],l=e.name,t=e.code,r=e.description,n=e.level,i=e.university,s=e.department,o=e.status,a={name:l,code:t,level:n,university:i._id,department:s._id,status:o};_(r),F(a)}else{F({name:"",code:"",level:"",university:d,department:u,status:!1})}}),[c,f]),console.log(L,h),(0,I.jsx)("div",{children:(0,I.jsx)(U.Z,{open:r,onClose:v,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,I.jsxs)(x.Z,{sx:Q,children:[(0,I.jsxs)(H.Z,{variant:"h6",component:"h2",color:"#65748B",borderBottom:"1px solid #d8dbe0",px:4,py:2,children:[c?"Update":"Add New","\xa0Course"]}),(0,I.jsxs)(x.Z,{m:2,p:2,border:"1px solid #d8dbe0",borderRadius:"5px",children:[(0,I.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:3,sx:{display:"flex",alignItems:"center",textAlign:"right",justifyContent:"flex-end"},children:(0,I.jsx)(H.Z,{className:"cursor-pointer",variant:"h6",children:"Course Name : "})}),(0,I.jsx)(w.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"left"},children:(0,I.jsx)(R.Z,{required:!0,label:"Course Name",type:"text",fullWidth:!0,value:L.name,onChange:function(e){return F((0,D.Z)((0,D.Z)({},L),{},{name:e.target.value}))},sx:{my:1}})})]}),(0,I.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:3,sx:{display:"flex",alignItems:"center",textAlign:"right",justifyContent:"flex-end"},children:(0,I.jsx)(H.Z,{className:"cursor-pointer",variant:"h6",children:"Course Code : "})}),(0,I.jsx)(w.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"left"},children:(0,I.jsx)(R.Z,{required:!0,label:"Course Code",type:"text",fullWidth:!0,value:L.code,onChange:function(e){return F((0,D.Z)((0,D.Z)({},L),{},{code:e.target.value}))},sx:{my:1}})})]}),(0,I.jsxs)(w.ZP,{container:!0,spacing:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:3,sx:{display:"flex",alignItems:"center",textAlign:"right",justifyContent:"flex-end"},children:(0,I.jsx)(H.Z,{className:"cursor-pointer",variant:"h6",children:"Course Description : "})}),(0,I.jsx)(w.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"left"},children:(0,I.jsx)(K,{simple:!0,id:"simple-editor",value:y,sx:{width:"100%"},onChange:function(e){return _(e)}})})]}),(0,I.jsxs)(w.ZP,{container:!0,spacing:2,mt:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:3,sx:{display:"flex",alignItems:"center",textAlign:"right",justifyContent:"flex-end"},children:(0,I.jsx)(H.Z,{className:"cursor-pointer",variant:"h6",children:"Course Level : "})}),(0,I.jsx)(w.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"left"},children:(0,I.jsxs)(C.Z,{fullWidth:!0,children:[(0,I.jsx)(N.Z,{children:"Course Level"}),(0,I.jsx)(P.Z,{value:L.level,label:"Level",onChange:function(e){return F((0,D.Z)((0,D.Z)({},L),{},{level:e.target.value}))},children:j.map((function(e){return(0,I.jsx)(S.Z,{value:e.key,children:e.label},e.key)}))})]})})]}),(0,I.jsxs)(w.ZP,{container:!0,spacing:2,mt:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:3,sx:{display:"flex",alignItems:"center",textAlign:"right",justifyContent:"flex-end"},children:(0,I.jsx)(H.Z,{className:"cursor-pointer",variant:"h6",children:"Status : "})}),(0,I.jsx)(w.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"left"},children:(0,I.jsx)(m.Z,{checked:L.status,onChange:function(e){return F((0,D.Z)((0,D.Z)({},L),{},{status:e.target.checked}))}})})]}),(0,I.jsxs)(w.ZP,{container:!0,spacing:2,mt:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:3,sx:{display:"flex",alignItems:"center",textAlign:"right",justifyContent:"flex-end"},children:(0,I.jsx)(H.Z,{className:"cursor-pointer",variant:"h6",children:"University : "})}),(0,I.jsx)(w.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"left"},children:(0,I.jsxs)(C.Z,{fullWidth:!0,children:[(0,I.jsx)(N.Z,{children:"University"}),(0,I.jsx)(P.Z,{value:L.university,label:"University",onChange:function(e){return F((0,D.Z)((0,D.Z)({},L),{},{university:e.target.value}))},children:p.map((function(e){return(0,I.jsx)(S.Z,{value:e._id,children:e.name},e._id)}))})]})})]}),(0,I.jsxs)(w.ZP,{container:!0,spacing:2,mt:2,children:[(0,I.jsx)(w.ZP,{item:!0,xs:3,sx:{display:"flex",alignItems:"center",textAlign:"right",justifyContent:"flex-end"},children:(0,I.jsx)(H.Z,{className:"cursor-pointer",variant:"h6",children:"Department : "})}),(0,I.jsx)(w.ZP,{item:!0,xs:8,sx:{display:"flex",alignItems:"left"},children:(0,I.jsxs)(C.Z,{fullWidth:!0,children:[(0,I.jsx)(N.Z,{children:"Department"}),(0,I.jsx)(P.Z,{value:L.department,label:"Department",onChange:function(e){return F((0,D.Z)((0,D.Z)({},L),{},{department:e.target.value}))},placeholder:"Please select university.",children:h.filter((function(e){return e.university._id===L.university})).map((function(e){return(0,I.jsx)(S.Z,{value:e._id,children:e.department},e._id)}))})]})})]}),(0,I.jsxs)(x.Z,{mt:1,display:"flex",justifyContent:"end",children:[(0,I.jsx)(b.Z,{variant:"outlined",sx:{mx:1},onClick:v,children:"Cancel"}),(0,I.jsx)(b.Z,{variant:"contained",onClick:function(){if(L.name||L.code||L.description||L.level||L.university||L.department){var e=(0,D.Z)((0,D.Z)({},L),{},{description:y,id:c});q((0,k.e3)(e)),v()}else o.ZP.error("You should input the Department name or select the University")},children:c?"Update":"Add"})]})]})]})})})}var $=t(2517),ee=t(66382),le=t(71235),te=t(54634),re=t(5448);function ne(e){var l=e.open,t=e.setOpen,r=e.content,n=e.title,i=e.agree,s=function(){t(!1)};return(0,I.jsx)("div",{children:(0,I.jsxs)($.Z,{open:l,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,I.jsx)(re.Z,{id:"alert-dialog-title",children:n}),(0,I.jsx)(le.Z,{children:(0,I.jsx)(te.Z,{id:"alert-dialog-description",children:r})}),(0,I.jsxs)(ee.Z,{children:[(0,I.jsx)(b.Z,{onClick:s,children:"No"}),(0,I.jsx)(b.Z,{onClick:i,autoFocus:!0,children:"Yes"})]})]})})}var ie=function(){var e=(0,s.I0)(),l=(0,i.useState)(0),t=(0,n.Z)(l,2),w=t[0],C=t[1],N=(0,i.useState)(10),P=(0,n.Z)(N,2),S=P[0],_=P[1],D=(0,i.useState)(!1),U=(0,n.Z)(D,2),H=U[0],R=U[1],W=(0,i.useState)(!1),L=(0,n.Z)(W,2),F=L[0],T=L[1],E=(0,i.useState)(""),O=(0,n.Z)(E,2),z=O[0],M=O[1],B=((0,s.v9)((function(e){return e.universitys})).universitys,(0,s.v9)((function(e){return e.departments})).departments,(0,s.v9)((function(e){return e.courses}))),Y=B.courses,V=B.message,G=(0,i.useState)(""),J=(0,n.Z)(G,2),K=J[0],Q=J[1],$=(0,i.useState)(Y),ee=(0,n.Z)($,2),le=ee[0],te=ee[1],re=(0,i.useState)(""),ie=(0,n.Z)(re,2),se=ie[0],oe=ie[1],ae=(0,i.useState)(""),ce=(0,n.Z)(ae,2),de=ce[0],ue=ce[1];return(0,i.useEffect)((function(){e((0,Z.Sb)()),e((0,y.Ps)()),e((0,k.Ho)())}),[e]),(0,i.useEffect)((function(){o.Am.success(V)}),[V]),(0,i.useEffect)((function(){te(Y)}),[Y]),(0,i.useEffect)((function(){var e=(0,r.Z)(Y);K&&(e=e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(K.toLowerCase())||-1!==e.code.toLowerCase().indexOf(K.toLowerCase())}))),se&&(e=e.filter((function(e){return e.university._id===se}))),de&&(e=e.filter((function(e){return e.department._id===de}))),te(e)}),[K,se,de,Y]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)("div",{className:"grid w-full grid-cols-1 gap-32 mt-32 xl:grid-cols-1",children:(0,I.jsx)(A,{handleAdd:function(){M(""),R(!0)},searchText:K,setSearchText:Q,searchUniversity:se,setSearchUniversity:oe,searchDepartment:de,setSearchDepartment:ue})}),(0,I.jsx)("div",{className:"grid w-full grid-cols-1 gap-32 mt-32 xl:grid-cols-1",children:(0,I.jsxs)(a.Z,{sx:{width:"100%",overflow:"hidden"},children:[(0,I.jsx)(c.Z,{children:(0,I.jsx)(v.Z,{sx:{maxHeight:500},children:(0,I.jsxs)(d.Z,{stickyHeader:!0,"aria-label":"sticky table",children:[(0,I.jsx)(u.Z,{children:(0,I.jsx)(q.Z,{children:g.map((function(e){return(0,I.jsx)(p.Z,{align:e.align,style:{width:e.width},children:e.label},e.id)}))})}),(0,I.jsx)(h.Z,{children:le.slice(w*S,w*S+S).map((function(e,l){var t,r;return(0,I.jsxs)(q.Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[(0,I.jsx)(p.Z,{align:"left",children:e.name},"name"),(0,I.jsx)(p.Z,{align:"left",children:e.code},"code"),(0,I.jsx)(p.Z,{align:"left",children:null===(t=j.filter((function(l){return l.key===e.level}))[0])||void 0===t?void 0:t.label},"level"),(0,I.jsx)(p.Z,{align:"left",children:e.university.name},"university"),(0,I.jsx)(p.Z,{align:"left",children:e.department.department},"department"),(0,I.jsx)(p.Z,{align:"left",children:(0,I.jsx)(m.Z,{checked:e.status})},"status"),(0,I.jsxs)(d.Z,{align:"left",children:["".concat(e.university.folder_name,"-").concat(e.university._id,"/"),"".concat(e.department.folder_name,"-").concat(null===(r=e.department)||void 0===r?void 0:r._id,"/"),"".concat(e.folder_name,"-").concat(e._id,"/")]},"path"),(0,I.jsx)(p.Z,{align:"center",children:(0,I.jsxs)(x.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,I.jsx)(b.Z,{className:"whitespace-nowrap",variant:"contained",color:"secondary",onClick:function(){return l=e._id,M(l),void R(!0);var l},children:"Edit"}),(0,I.jsx)(b.Z,{className:"whitespace-nowrap",variant:"contained",color:"secondary",onClick:function(){return l=e._id,M(l),void T(!0);var l},children:"Delete"})]})},"action")]},l)}))})]})})}),(0,I.jsx)(f.Z,{rowsPerPageOptions:[10,25,100],component:"div",count:le.length,rowsPerPage:S,page:w,onPageChange:function(e,l){C(l)},onRowsPerPageChange:function(e){_(+e.target.value),C(0)}})]})}),H&&(0,I.jsx)(X,{searchUniversity:se,searchDepartment:de,isModal:H,setIsModal:R,id:z}),F&&(0,I.jsx)(ne,{open:F,setOpen:T,title:"Confirm",content:"Do you want to delete the course from the database?",agree:function(){e((0,k.A)(z)),T(!1)}})]})}}}]);