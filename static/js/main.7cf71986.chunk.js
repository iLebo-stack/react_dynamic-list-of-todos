(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var s=c(5),n=c.n(s),r=c(2),i=c(1),o=(c(10),c(11),c(4)),l=c.n(o);c(12);var a=c(0),d=function(e){var t=e.handleSetSelectedUserId,c=e.selectedUserId,s=Object(i.useState)([]),n=Object(r.a)(s,2),o=n[0],d=n[1],u=Object(i.useState)(""),j=Object(r.a)(u,2),b=j[0],h=j[1],O=Object(i.useState)("all"),p=Object(r.a)(O,2),m=p[0],x=p[1];Object(i.useEffect)((function(){fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()})).then((function(e){d(e)}))}),[]);var f=function(){switch(m){case"active":return o.filter((function(e){var t=e.title,c=e.completed;return t.toLowerCase().includes(b.toLowerCase())&&!1===c}));case"completed":return o.filter((function(e){var t=e.title,c=e.completed;return t.toLowerCase().includes(b.toLowerCase())&&c}));default:return o.filter((function(e){return e.title.toLowerCase().includes(b.toLowerCase())}))}}();return Object(a.jsxs)("div",{className:"TodoList",children:[Object(a.jsx)("h2",{children:"Todos:"}),Object(a.jsx)("input",{type:"text",placeholder:"filter",className:"input is-primary",value:b,onChange:function(e){h(e.target.value)}}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"select is-primary",children:Object(a.jsxs)("select",{value:m,onChange:function(e){x(e.target.value)},children:[Object(a.jsx)("option",{value:"all",children:"All todos"}),Object(a.jsx)("option",{value:"active",children:"Active todos"}),Object(a.jsx)("option",{value:"completed",children:"Completed todos"})]})}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"TodoList__list-container",children:Object(a.jsx)("ul",{className:"TodoList__list",children:f.map((function(e){var s=e.id,n=e.title,r=e.userId;return e.completed?Object(a.jsxs)("li",{className:"TodoList__item TodoList__item--checked",children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",checked:!0,readOnly:!0}),Object(a.jsx)("p",{children:n})]}),Object(a.jsxs)("button",{className:l()("TodoList__user-button button",{"TodoList__user-button--selected":c===r}),type:"button",onClick:function(){t(r)},children:["User\xa0#",r]})]},s):Object(a.jsxs)("li",{className:"TodoList__item TodoList__item--unchecked",children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",readOnly:!0}),Object(a.jsx)("p",{children:n})]}),Object(a.jsxs)("button",{className:l()("TodoList__user-button button",{"TodoList__user-button--selected":c===r}),type:"button",onClick:function(){t(r)},children:["User\xa0#",r]})]},s)}))})})]})},u=(c(14),function(e){var t=e.userId,c=e.handleSetSelectedUserId,s=Object(i.useState)(null),n=Object(r.a)(s,2),o=n[0],l=n[1];return Object(i.useEffect)((function(){(function(e){return fetch("https://mate.academy/students-api/users/".concat(e)).then((function(e){return e.json()})).catch((function(e){return"Error - ".concat(e)}))})(t).then((function(e){l(e)}))}),[t]),Object(a.jsxs)("div",{className:"CurrentUser",children:[null!==o&&void 0!==o&&o.id?Object(a.jsx)("h2",{className:"CurrentUser__title",children:Object(a.jsx)("span",{children:"Selected user: ".concat(null===o||void 0===o?void 0:o.id)})}):Object(a.jsx)("h2",{children:"User was not found"}),Object(a.jsx)("h3",{className:"CurrentUser__name",children:null===o||void 0===o?void 0:o.name}),Object(a.jsx)("p",{className:"CurrentUser__email",children:null===o||void 0===o?void 0:o.email}),Object(a.jsx)("p",{className:"CurrentUser__phone",children:null===o||void 0===o?void 0:o.phone}),Object(a.jsx)("button",{type:"button",className:"button",onClick:function(){return c(0)},children:"Clear"})]})}),j=(c(15),function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"App__sidebar",children:Object(a.jsx)(d,{handleSetSelectedUserId:s,selectedUserId:c})}),Object(a.jsx)("div",{className:"App__content",children:Object(a.jsx)("div",{className:"App__content-container",children:c?Object(a.jsx)(u,{userId:c,handleSetSelectedUserId:s}):"No user selected"})})]})});n.a.render(Object(a.jsx)(j,{}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.7cf71986.chunk.js.map