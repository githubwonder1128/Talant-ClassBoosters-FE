"use strict";(self.webpackChunkfuse_react_app=self.webpackChunkfuse_react_app||[]).push([[655],{93655:function(e,r,n){n.r(r),n.d(r,{default:function(){return Ce}});var t=n(23132),a=n(47313),s=n(22408),i=n(58970),l=n(53996),o=n(93701),c=n(9038),d=n(4942),m=n(74165),x=n(15861),u=n(80827),f=n(33711),h=(0,u.hg)("financeDashboardApp/widgets/getWidgets",(0,x.Z)((0,m.Z)().mark((function e(){var r,n;return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("/api/dashboards/finance/widgets");case 2:return r=e.sent,e.next=5,r.data;case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))),v=(0,u.oM)({name:"financeDashboardApp/widgets",initialState:null,reducers:{},extraReducers:(0,d.Z)({},h.fulfilled,(function(e,r){return r.payload}))}),g=function(e){return e.financeDashboardApp.widgets},j=v.reducer,p=(0,c.UY)({widgets:j}),N=n(61113),b=n(24193),y=n(56993),Z=n(46417);var w=function(e){return(0,Z.jsx)("div",{className:"flex w-full container",children:(0,Z.jsxs)("div",{className:"flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0",children:[(0,Z.jsxs)("div",{className:"flex flex-col flex-auto",children:[(0,Z.jsx)(N.Z,{className:"text-3xl font-semibold tracking-tight leading-8",children:"Finance dashboard"}),(0,Z.jsx)(N.Z,{className:"font-medium tracking-tight",color:"text.secondary",children:"Keep track of your financial status"})]}),(0,Z.jsxs)("div",{className:"flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12",children:[(0,Z.jsx)(b.Z,{className:"whitespace-nowrap",startIcon:(0,Z.jsx)(y.Z,{size:20,children:"heroicons-solid:document-report"}),children:"Reports"}),(0,Z.jsx)(b.Z,{className:"whitespace-nowrap",startIcon:(0,Z.jsx)(y.Z,{size:20,children:"heroicons-solid:cog"}),children:"Settings"}),(0,Z.jsx)(b.Z,{className:"whitespace-nowrap",variant:"contained",color:"secondary",startIcon:(0,Z.jsx)(y.Z,{size:20,children:"heroicons-solid:save"}),children:"Export"})]})]})})},S=n(47131),k=n(70501);function C(){var e=(0,s.v9)(g),r=null===e||void 0===e?void 0:e.previousStatement,n=r.status,t=r.date,a=r.limit,i=r.spent,l=r.minimum;return(0,Z.jsxs)(k.Z,{className:"relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden",children:[(0,Z.jsxs)("div",{className:"flex items-center justify-between",children:[(0,Z.jsxs)("div",{className:"flex flex-col",children:[(0,Z.jsx)(N.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Previous Statement"}),"paid"===n&&(0,Z.jsxs)(N.Z,{className:"text-green-600 font-medium text-sm",children:["Paid on ",t]}),"pending"===n&&(0,Z.jsxs)(N.Z,{className:"text-red-600 font-medium text-sm",children:["Must be paid before ",t]})]}),(0,Z.jsx)("div",{className:"-mt-8",children:(0,Z.jsx)(S.Z,{"aria-label":"more",size:"large",children:(0,Z.jsx)(y.Z,{children:"heroicons-outline:dots-vertical"})})})]}),(0,Z.jsxs)("div",{className:"flex flex-row flex-wrap mt-16 -mx-24",children:[(0,Z.jsxs)("div",{className:"flex flex-col mx-24 my-12",children:[(0,Z.jsx)(N.Z,{color:"text.secondary",className:"text-sm font-medium leading-none",children:"Card Limit"}),(0,Z.jsx)(N.Z,{className:"mt-8 font-medium text-3xl leading-none",children:a.toLocaleString("en-US",{style:"currency",currency:"USD"})})]}),(0,Z.jsxs)("div",{className:"flex flex-col mx-24 my-12",children:[(0,Z.jsx)(N.Z,{color:"text.secondary",className:"text-sm font-medium leading-none",children:"Spent"}),(0,Z.jsx)(N.Z,{className:"mt-8 font-medium text-3xl leading-none",children:i.toLocaleString("en-US",{style:"currency",currency:"USD"})})]}),(0,Z.jsxs)("div",{className:"flex flex-col mx-24 my-12",children:[(0,Z.jsx)(N.Z,{color:"text.secondary",className:"text-sm font-medium leading-none",children:"Minimum"}),(0,Z.jsx)(N.Z,{className:"mt-8 font-medium text-3xl leading-none",children:l.toLocaleString("en-US",{style:"currency",currency:"USD"})})]})]}),(0,Z.jsxs)("div",{className:"absolute bottom-0 ltr:right-0 rtl:left-0 w-96 h-96 -m-24",children:["paid"===n&&(0,Z.jsx)(y.Z,{size:96,className:"opacity-25 text-green-500 dark:text-green-400",children:"heroicons-outline:check-circle"}),"pending"===n&&(0,Z.jsx)(y.Z,{size:96,className:"opacity-25 text-red-500 dark:text-red-400",children:"heroicons-outline:exclamation-circle"})]})]})}var L=(0,a.memo)(C);function M(){var e=(0,s.v9)(g),r=null===e||void 0===e?void 0:e.currentStatement,n=r.status,t=r.date,a=r.limit,i=r.spent,l=r.minimum;return(0,Z.jsxs)(k.Z,{className:"relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden",children:[(0,Z.jsxs)("div",{className:"flex items-center justify-between",children:[(0,Z.jsxs)("div",{className:"flex flex-col",children:[(0,Z.jsx)(N.Z,{className:"text-lg font-medium tracking-tight leading-6 truncate",children:"Current Statement"}),"paid"===n&&(0,Z.jsxs)(N.Z,{className:"text-green-600 font-medium text-sm",children:["Paid on ",t]}),"pending"===n&&(0,Z.jsxs)(N.Z,{className:"text-red-600 font-medium text-sm",children:["Must be paid before ",t]})]}),(0,Z.jsx)("div",{className:"-mt-8",children:(0,Z.jsx)(S.Z,{"aria-label":"more",size:"large",children:(0,Z.jsx)(y.Z,{children:"heroicons-outline:dots-vertical"})})})]}),(0,Z.jsxs)("div",{className:"flex flex-row flex-wrap mt-16 -mx-24",children:[(0,Z.jsxs)("div",{className:"flex flex-col mx-24 my-12",children:[(0,Z.jsx)(N.Z,{color:"text.secondary",className:"text-sm font-medium leading-none",children:"Card Limit"}),(0,Z.jsx)(N.Z,{className:"mt-8 font-medium text-3xl leading-none",children:a.toLocaleString("en-US",{style:"currency",currency:"USD"})})]}),(0,Z.jsxs)("div",{className:"flex flex-col mx-24 my-12",children:[(0,Z.jsx)(N.Z,{color:"text.secondary",className:"text-sm font-medium leading-none",children:"Spent"}),(0,Z.jsx)(N.Z,{className:"mt-8 font-medium text-3xl leading-none",children:i.toLocaleString("en-US",{style:"currency",currency:"USD"})})]}),(0,Z.jsxs)("div",{className:"flex flex-col mx-24 my-12",children:[(0,Z.jsx)(N.Z,{color:"text.secondary",className:"text-sm font-medium leading-none",children:"Minimum"}),(0,Z.jsx)(N.Z,{className:"mt-8 font-medium text-3xl leading-none",children:l.toLocaleString("en-US",{style:"currency",currency:"USD"})})]})]}),(0,Z.jsxs)("div",{className:"absolute bottom-0 ltr:right-0 rtl:left-0 w-96 h-96 -m-24",children:["paid"===n&&(0,Z.jsx)(y.Z,{size:96,className:"opacity-25 text-green-500 dark:text-green-400",children:"heroicons-outline:check-circle"}),"pending"===n&&(0,Z.jsx)(y.Z,{size:96,className:"opacity-25 text-red-500 dark:text-red-400",children:"heroicons-outline:exclamation-circle"})]})]})}var U=(0,a.memo)(M),D=n(19860),z=n(66212),P=n(58446);var B=function(e){var r=(0,D.Z)(),n=(0,s.v9)(g),t=null===n||void 0===n?void 0:n.accountBalance,a=t.series,i=t.growRate,l=t.ami,o={chart:{animations:{speed:400,animateGradually:{enabled:!1}},fontFamily:"inherit",foreColor:"inherit",width:"100%",height:"100%",type:"area",sparkline:{enabled:!0}},colors:[r.palette.secondary.light,r.palette.secondary.light],fill:{colors:[r.palette.secondary.dark,r.palette.secondary.light],opacity:.5},series:a,stroke:{curve:"straight",width:2},tooltip:{followCursor:!0,theme:"dark",x:{format:"MMM dd, yyyy"},y:{formatter:function(e){return"".concat(e,"%")}}},xaxis:{type:"datetime"}};return(0,Z.jsxs)(k.Z,{className:"flex flex-col flex-auto shadow rounded-2xl overflow-hidden",children:[(0,Z.jsxs)("div",{className:"flex flex-col p-24 pb-16",children:[(0,Z.jsxs)("div",{className:"flex items-start justify-between",children:[(0,Z.jsxs)("div",{className:"flex flex-col",children:[(0,Z.jsx)(N.Z,{className:"mr-16 text-lg font-medium tracking-tight leading-6 truncate",children:"Account Balance"}),(0,Z.jsx)(N.Z,{className:"font-medium",color:"text.secondary",children:"Monthly balance growth and avg. monthly income"})]}),(0,Z.jsx)("div",{className:"",children:(0,Z.jsx)(z.Z,{size:"small",className:"font-medium text-sm",label:"12 months"})})]}),(0,Z.jsxs)("div",{className:"flex items-start mt-24 mr-8",children:[(0,Z.jsxs)("div",{className:"flex flex-col",children:[(0,Z.jsxs)(N.Z,{className:"font-semibold text-3xl md:text-5xl tracking-tighter",children:[i,"%"]}),(0,Z.jsx)(N.Z,{className:"font-medium text-sm leading-none",color:"text.secondary",children:"Average Monthly Growth"})]}),(0,Z.jsxs)("div",{className:"flex flex-col ml-32 md:ml-64",children:[(0,Z.jsx)(N.Z,{className:"font-semibold text-3xl md:text-5xl tracking-tighter",children:l.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,Z.jsx)(N.Z,{className:"font-medium text-sm leading-none",color:"text.secondary",children:"Average Monthly Income"})]})]})]}),(0,Z.jsx)("div",{className:"flex flex-col flex-auto",children:(0,Z.jsx)(P.Z,{className:"flex-auto w-full h-full",options:o,series:a,type:o.chart.type,height:o.chart.height})})]})},I=n(29439),E=n(66835),R=n(57861),q=n(67478),A=n(23477),F=n(24076),_=n(89600),G=n(83061);function O(e){var r=(0,s.v9)(g),n=null===r||void 0===r?void 0:r.recentTransactions,t=n.columns,a=n.rows;return(0,Z.jsxs)(k.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[(0,Z.jsxs)("div",{className:"",children:[(0,Z.jsx)(N.Z,{className:"mr-16 text-lg font-medium tracking-tight leading-6 truncate",children:"Recent transactions"}),(0,Z.jsx)(N.Z,{className:"font-medium",color:"text.secondary",children:"1 pending, 4 completed"})]}),(0,Z.jsxs)("div",{className:"table-responsive mt-24",children:[(0,Z.jsxs)(E.Z,{className:"simple w-full min-w-full",children:[(0,Z.jsx)(A.Z,{children:(0,Z.jsx)(F.Z,{children:t.map((function(e,r){return(0,Z.jsx)(q.Z,{children:(0,Z.jsx)(N.Z,{color:"text.secondary",className:"font-semibold text-12 whitespace-nowrap",children:e})},r)}))})}),(0,Z.jsx)(R.Z,{children:a.map((function(e,r){return(0,Z.jsx)(F.Z,{children:Object.entries(e).map((function(e){var r=(0,I.Z)(e,2),n=r[0],t=r[1];switch(n){case"id":return(0,Z.jsx)(q.Z,{component:"th",scope:"row",children:(0,Z.jsx)(N.Z,{className:"",color:"text.secondary",children:t})},n);case"date":return(0,Z.jsx)(q.Z,{component:"th",scope:"row",children:(0,Z.jsx)(N.Z,{className:"",children:(0,_.Z)(new Date(t),"MMM dd, y")})},n);case"amount":return(0,Z.jsx)(q.Z,{component:"th",scope:"row",children:(0,Z.jsx)(N.Z,{className:"",children:t.toLocaleString("en-US",{style:"currency",currency:"USD"})})},n);case"status":return(0,Z.jsx)(q.Z,{component:"th",scope:"row",children:(0,Z.jsx)(N.Z,{className:(0,G.Z)("inline-flex items-center font-bold text-10 px-10 py-2 rounded-full tracking-wide uppercase","pending"===t&&"bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50","completed"===t&&"bg-green-50 text-green-800 dark:bg-green-600 dark:text-green-50"),children:t})},n);default:return(0,Z.jsx)(q.Z,{component:"th",scope:"row",children:(0,Z.jsx)(N.Z,{className:"",children:t})},n)}}))},r)}))})]}),(0,Z.jsx)("div",{className:"pt-24",children:(0,Z.jsx)(b.Z,{variant:"outlined",children:"See all transactions"})})]})]})}var T=(0,a.memo)(O),X=n(30168),K=n(63366),W=n(87462),Y=n(21921),$=n(30686),H=n(17551),J=n(91615),Q=n(88564),V=n(77342),ee=n(77430),re=n(32298);function ne(e){return(0,re.Z)("MuiLinearProgress",e)}(0,ee.Z)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var te,ae,se,ie,le,oe,ce,de,me,xe,ue,fe,he=["className","color","value","valueBuffer","variant"],ve=(0,$.F4)(ce||(ce=te||(te=(0,X.Z)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"])))),ge=(0,$.F4)(de||(de=ae||(ae=(0,X.Z)(["\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n"])))),je=(0,$.F4)(me||(me=se||(se=(0,X.Z)(["\n  0% {\n    opacity: 1;\n    background-position: 0 -23px;\n  }\n\n  60% {\n    opacity: 0;\n    background-position: 0 -23px;\n  }\n\n  100% {\n    opacity: 1;\n    background-position: -200px -23px;\n  }\n"])))),pe=function(e,r){return"inherit"===r?"currentColor":e.vars?e.vars.palette.LinearProgress["".concat(r,"Bg")]:"light"===e.palette.mode?(0,H.$n)(e.palette[r].main,.62):(0,H._j)(e.palette[r].main,.5)},Ne=(0,Q.ZP)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,r["color".concat((0,J.Z)(n.color))],r[n.variant]]}})((function(e){var r=e.ownerState,n=e.theme;return(0,W.Z)({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},backgroundColor:pe(n,r.color)},"inherit"===r.color&&"buffer"!==r.variant&&{backgroundColor:"none","&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}},"buffer"===r.variant&&{backgroundColor:"transparent"},"query"===r.variant&&{transform:"rotate(180deg)"})})),be=(0,Q.ZP)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:function(e,r){var n=e.ownerState;return[r.dashed,r["dashedColor".concat((0,J.Z)(n.color))]]}})((function(e){var r=e.ownerState,n=e.theme,t=pe(n,r.color);return(0,W.Z)({position:"absolute",marginTop:0,height:"100%",width:"100%"},"inherit"===r.color&&{opacity:.3},{backgroundImage:"radial-gradient(".concat(t," 0%, ").concat(t," 16%, transparent 42%)"),backgroundSize:"10px 10px",backgroundPosition:"0 -23px"})}),(0,$.iv)(xe||(xe=ie||(ie=(0,X.Z)(["\n    animation: "," 3s infinite linear;\n  "]))),je)),ye=(0,Q.ZP)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:function(e,r){var n=e.ownerState;return[r.bar,r["barColor".concat((0,J.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&r.bar1Indeterminate,"determinate"===n.variant&&r.bar1Determinate,"buffer"===n.variant&&r.bar1Buffer]}})((function(e){var r=e.ownerState,n=e.theme;return(0,W.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",backgroundColor:"inherit"===r.color?"currentColor":(n.vars||n).palette[r.color].main},"determinate"===r.variant&&{transition:"transform .".concat(4,"s linear")},"buffer"===r.variant&&{zIndex:1,transition:"transform .".concat(4,"s linear")})}),(function(e){var r=e.ownerState;return("indeterminate"===r.variant||"query"===r.variant)&&(0,$.iv)(ue||(ue=le||(le=(0,X.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    "]))),ve)})),Ze=(0,Q.ZP)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:function(e,r){var n=e.ownerState;return[r.bar,r["barColor".concat((0,J.Z)(n.color))],("indeterminate"===n.variant||"query"===n.variant)&&r.bar2Indeterminate,"buffer"===n.variant&&r.bar2Buffer]}})((function(e){var r=e.ownerState,n=e.theme;return(0,W.Z)({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left"},"buffer"!==r.variant&&{backgroundColor:"inherit"===r.color?"currentColor":(n.vars||n).palette[r.color].main},"inherit"===r.color&&{opacity:.3},"buffer"===r.variant&&{backgroundColor:pe(n,r.color),transition:"transform .".concat(4,"s linear")})}),(function(e){var r=e.ownerState;return("indeterminate"===r.variant||"query"===r.variant)&&(0,$.iv)(fe||(fe=oe||(oe=(0,X.Z)(["\n      width: auto;\n      animation: "," 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;\n    "]))),ge)})),we=a.forwardRef((function(e,r){var n=(0,V.Z)({props:e,name:"MuiLinearProgress"}),t=n.className,a=n.color,s=void 0===a?"primary":a,i=n.value,l=n.valueBuffer,o=n.variant,c=void 0===o?"indeterminate":o,d=(0,K.Z)(n,he),m=(0,W.Z)({},n,{color:s,variant:c}),x=function(e){var r=e.classes,n=e.variant,t=e.color,a={root:["root","color".concat((0,J.Z)(t)),n],dashed:["dashed","dashedColor".concat((0,J.Z)(t))],bar1:["bar","barColor".concat((0,J.Z)(t)),("indeterminate"===n||"query"===n)&&"bar1Indeterminate","determinate"===n&&"bar1Determinate","buffer"===n&&"bar1Buffer"],bar2:["bar","buffer"!==n&&"barColor".concat((0,J.Z)(t)),"buffer"===n&&"color".concat((0,J.Z)(t)),("indeterminate"===n||"query"===n)&&"bar2Indeterminate","buffer"===n&&"bar2Buffer"]};return(0,Y.Z)(a,ne,r)}(m),u=(0,D.Z)(),f={},h={bar1:{},bar2:{}};if("determinate"===c||"buffer"===c)if(void 0!==i){f["aria-valuenow"]=Math.round(i),f["aria-valuemin"]=0,f["aria-valuemax"]=100;var v=i-100;"rtl"===u.direction&&(v=-v),h.bar1.transform="translateX(".concat(v,"%)")}else 0;if("buffer"===c)if(void 0!==l){var g=(l||0)-100;"rtl"===u.direction&&(g=-g),h.bar2.transform="translateX(".concat(g,"%)")}else 0;return(0,Z.jsxs)(Ne,(0,W.Z)({className:(0,G.Z)(x.root,t),ownerState:m,role:"progressbar"},f,{ref:r},d,{children:["buffer"===c?(0,Z.jsx)(be,{className:x.dashed,ownerState:m}):null,(0,Z.jsx)(ye,{className:x.bar1,ownerState:m,style:h.bar1}),"determinate"===c?null:(0,Z.jsx)(Ze,{className:x.bar2,ownerState:m,style:h.bar2})]}))}));function Se(e){var r=(0,s.v9)(g),n=null===r||void 0===r?void 0:r.budget,t=n.expenses,a=n.expensesLimit,i=n.savings,l=n.savingsGoal,o=n.bills,c=n.billsLimit;function d(e,r){var n=100*e/r;return n>100?100:n}return(0,Z.jsxs)(k.Z,{className:"flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden",children:[(0,Z.jsxs)("div",{className:"flex items-center justify-between",children:[(0,Z.jsxs)("div",{className:"flex flex-col",children:[(0,Z.jsx)(N.Z,{className:"mr-16 text-lg font-medium tracking-tight leading-6 truncate",children:"Budget"}),(0,Z.jsx)(N.Z,{className:"font-medium",color:"text.secondary",children:"Monthly budget summary"})]}),(0,Z.jsx)("div",{className:"-mt-8",children:(0,Z.jsx)(S.Z,{"aria-label":"more",size:"large",children:(0,Z.jsx)(y.Z,{children:"heroicons-outline:dots-vertical"})})})]}),(0,Z.jsxs)(N.Z,{className:"mt-24",children:["Last month; you had ",(0,Z.jsx)("strong",{children:"223"})," expense transactions, ",(0,Z.jsx)("strong",{children:"12"})," savings entries and ",(0,Z.jsx)("strong",{children:"4"})," bills."]}),(0,Z.jsxs)("div",{className:"my-32 space-y-32",children:[(0,Z.jsx)("div",{className:"flex flex-col",children:(0,Z.jsxs)("div",{className:"flex items-center space-x-16",children:[(0,Z.jsx)("div",{className:"flex items-center justify-center w-56 h-56 rounded bg-red-100 text-red-800 dark:bg-red-600 dark:text-red-50",children:(0,Z.jsx)(y.Z,{className:"text-current",children:"heroicons-outline:credit-card"})}),(0,Z.jsxs)("div",{className:"flex-auto leading-none",children:[(0,Z.jsx)(N.Z,{className:"text-12 font-medium",color:"text.secondary",children:"Expenses"}),(0,Z.jsx)(N.Z,{className:"font-medium text-20",children:t.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,Z.jsx)(we,{variant:"determinate",className:"mt-4",color:"warning",value:d(t,a)})]}),(0,Z.jsxs)("div",{className:"flex items-end justify-end min-w-72 mt-auto ml-24",children:[(0,Z.jsx)("div",{className:"text-lg leading-none",children:"2.6%"}),(0,Z.jsx)(y.Z,{size:16,className:"text-green-600",children:"heroicons-solid:arrow-narrow-down"})]})]})}),(0,Z.jsx)("div",{className:"flex flex-col",children:(0,Z.jsxs)("div",{className:"flex items-center space-x-16",children:[(0,Z.jsx)("div",{className:"flex items-center justify-center w-56 h-56 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-600 dark:text-indigo-50",children:(0,Z.jsx)(y.Z,{className:"text-current",children:"heroicons-outline:cash"})}),(0,Z.jsxs)("div",{className:"flex-auto leading-none",children:[(0,Z.jsx)(N.Z,{className:"text-12 font-medium",color:"text.secondary",children:"Savings"}),(0,Z.jsx)(N.Z,{className:"font-medium text-20",children:i.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,Z.jsx)(we,{variant:"determinate",className:"mt-4",color:"primary",value:d(i,l)})]}),(0,Z.jsxs)("div",{className:"flex items-end justify-end min-w-72 mt-auto",children:[(0,Z.jsx)("div",{className:"text-lg leading-none",children:"12.7%"}),(0,Z.jsx)(y.Z,{size:16,className:"text-red-600 ml-4",children:"heroicons-solid:arrow-narrow-up"})]})]})}),(0,Z.jsxs)("div",{className:"flex flex-col",children:[(0,Z.jsxs)("div",{className:"flex items-center space-x-16",children:[(0,Z.jsx)("div",{className:"flex items-center justify-center w-56 h-56 rounded bg-teal-100 text-teal-800 dark:bg-teal-600 dark:text-teal-50",children:(0,Z.jsx)(y.Z,{className:"text-current",children:"heroicons-outline:light-bulb"})}),(0,Z.jsxs)("div",{className:"flex-auto leading-none",children:[(0,Z.jsx)(N.Z,{className:"text-12 font-medium",color:"text.secondary",children:"Bills"}),(0,Z.jsx)(N.Z,{className:"font-medium text-20",children:o.toLocaleString("en-US",{style:"currency",currency:"USD"})}),(0,Z.jsx)(we,{variant:"determinate",className:"mt-4",color:"secondary",value:d(o,c)})]}),(0,Z.jsxs)("div",{className:"flex items-end justify-end min-w-72 mt-auto",children:[(0,Z.jsx)("div",{className:"text-lg leading-none",children:"105.7%"}),(0,Z.jsx)(y.Z,{size:16,className:"text-red-600 ml-4",children:"heroicons-solid:arrow-narrow-up"})]})]}),(0,Z.jsx)(N.Z,{className:"mt-12 text-md",color:"text.secondary",children:"Exceeded your personal limit! Be careful next month."})]})]}),(0,Z.jsx)("div",{className:"",children:(0,Z.jsx)(b.Z,{variant:"outlined",children:"Download Summary"})})]})}var ke=(0,a.memo)(Se);var Ce=(0,t.Z)("financeDashboardApp",p)((function(){var e=(0,s.I0)(),r=(0,s.v9)(g);return(0,a.useEffect)((function(){e(h())}),[e]),(0,Z.jsx)(l.Z,{header:(0,Z.jsx)(w,{}),content:(0,Z.jsx)("div",{className:"w-full px-24 md:px-32 pb-24",children:(0,a.useMemo)((function(){var e={hidden:{opacity:0,y:20},show:{opacity:1,y:0}};return!i.Z.isEmpty(r)&&(0,Z.jsxs)(o.E.div,{className:"w-full",variants:{show:{transition:{staggerChildren:.06}}},initial:"hidden",animate:"show",children:[(0,Z.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-32 w-full mt-32",children:[(0,Z.jsxs)("div",{className:"grid gap-32 sm:grid-flow-col xl:grid-flow-row",children:[(0,Z.jsx)(o.E.div,{variants:e,className:"flex flex-col flex-auto",children:(0,Z.jsx)(L,{})}),(0,Z.jsx)(o.E.div,{variants:e,className:"flex flex-col flex-auto",children:(0,Z.jsx)(U,{})})]}),(0,Z.jsx)(o.E.div,{variants:e,className:"flex flex-col flex-auto",children:(0,Z.jsx)(B,{})})]}),(0,Z.jsxs)("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-32 w-full mt-32",children:[(0,Z.jsx)(o.E.div,{variants:e,className:"xl:col-span-2 flex flex-col flex-auto",children:(0,Z.jsx)(T,{})}),(0,Z.jsx)(o.E.div,{variants:e,className:"flex flex-col flex-auto",children:(0,Z.jsx)(ke,{})})]})]})}),[r])})})}))}}]);