(this["webpackJsonptodo-app-react"]=this["webpackJsonptodo-app-react"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(7),s=n.n(o),i=(n(12),n(13),n(2)),r=n(4),u=n(0),d=function(e){var t=e.addedTasks,n=e.setAddedTasks,a=Object(c.useState)({}),o=Object(r.a)(a,2),s=o[0],d=o[1],l=function(e){e.preventDefault(),t[e.target.name].checked=!t[e.target.name].checked,n((function(e){return Object(i.a)(e)}))},j=function(e){e.preventDefault(),t[e.target.name].edited=!0,n((function(e){return Object(i.a)(e)}))},b=function(e){e.preventDefault(),d({name:e.target.value,checked:!1,edited:!1})},f=function(e){e.preventDefault(),t.splice(e.target.name,1,s),n((function(e){return Object(i.a)(e)})),d({})},O=function(e){e.preventDefault(),t[e.target.name].edited=!1,n((function(e){return Object(i.a)(e)}))},m=function(e){e.preventDefault(),t.splice(e.target.name,1),n((function(e){return Object(i.a)(e)}))};return Object(u.jsx)("div",{className:"toDoOuterBlock",children:t.map((function(e,t){return Object(u.jsxs)("div",{className:"toDoBlock",children:[Object(u.jsx)("button",{className:"toDoButton checkButton",name:t,onClick:l,children:" V "}),e.edited?Object(u.jsx)("input",{type:"text",className:"editToDoBar",name:t,placeholder:e.name,onChange:b}):Object(u.jsx)("h3",{className:e.checked?"isChecked":"notChecked",children:e.name}),Object(u.jsx)("button",{className:"toDoButton deleteButton",name:t,onClick:m,children:" X "}),e.edited?Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"doneButton",name:t,onClick:f,children:"Done"}),Object(u.jsx)("button",{className:"cancelButton",name:t,onClick:O,children:"Cancel"})]}):Object(u.jsx)("button",{className:"toDoButton editButton",name:t,onClick:j,children:"Edit"})]})}))})},l=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),s=Object(r.a)(o,2),l=s[0],j=s[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("toDoLists"));e&&j(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("toDoLists",JSON.stringify(l))}),[l]);return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{children:[Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),""!==n&&j((function(e){return[].concat(Object(i.a)(e),[{name:n,checked:!1,edited:!1}])})),a("")},className:"addButton",children:" + "}),Object(u.jsx)("input",{value:n,onChange:function(e){a(e.target.value)},type:"text",className:"addToDoBar",placeholder:"Add To-Do"}),Object(u.jsx)(d,{addedTasks:l,setAddedTasks:j})]})})};var j=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"appTitle",children:"To-Do List"}),Object(u.jsx)(l,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),o(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.42ae516d.chunk.js.map