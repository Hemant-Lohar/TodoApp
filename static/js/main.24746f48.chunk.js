(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{15:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(8),i=c.n(a),n=(c(7),c(9)),r=c(6),l=c(2),o=c(0);var x=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(s.useState)(function(){var e=localStorage.getItem("TodoList");return e?JSON.parse(e):[]}()),x=Object(l.a)(i,2),d=x[0],m=x[1],b=Object(s.useState)(""),j=Object(l.a)(b,2),f=j[0],u=j[1],h=Object(s.useState)(!1),p=Object(l.a)(h,2),g=p[0],O=p[1],w=Object(s.useState)(!1),v=Object(l.a)(w,2),y=v[0],N=v[1],k=function(){if(c)if(c&&g)m(d.map((function(e){return e.id===f?Object(r.a)(Object(r.a)({},e),{},{name:c}):e}))),a(""),u(null),O(!1);else{var e={id:(new Date).getTime().toString(),name:c};m([].concat(Object(n.a)(d),[e])),a("")}else alert("Pls Enter ToDo First !")};return Object(s.useEffect)((function(){d.length?N(!0):N(!1)})),Object(s.useEffect)((function(){localStorage.setItem("TodoList",JSON.stringify(d))}),[d]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"container flex flex-col text-center  max-w-screen md:max-h-full h-screen bg-red-50 ",children:[Object(o.jsxs)("div",{className:"title filter drop-shadow-md bg-white",children:[Object(o.jsx)("div",{className:"w-32 p-3 mx-auto filter drop-shadow-md",children:Object(o.jsx)("img",{src:"images/to-do-logo.png",alt:"ToDo Logo",className:"mt-4"})}),Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"text-pink-800 text-3xl pb-8 font-extrabold",children:"ToDo List \u270c"})})]}),Object(o.jsxs)("div",{className:"main bg-red-50 pt-2 flex flex-col",children:[Object(o.jsxs)("div",{className:"rounded-full bg-white py-2 px-2 my-6 flex max-w-xs mx-auto justify-between filter drop-shadow-md focus-within:ringColor-red focus:ring-2 overflow-ellipsis overflow-hidden",children:[Object(o.jsx)("input",{type:"text",placeholder:"\u270d  Add ToDo Here",className:"text-lg text-left ml-4 text-black focus:outline-none focus:bg-purple-600 focus:bg-opacity-5",value:c,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("div",{className:"rounded-full hover:bg-purple-600  bg-purple-600  bg-opacity-20  h-8 w-8 flex items-center justify-center ",children:g?Object(o.jsx)("i",{className:"fas fa-edit text-purple-900 hover:text-white text-lg ",onClick:k}):Object(o.jsx)("i",{className:"fas fa-plus text-purple-900 hover:text-white text-lg ",onClick:k})})]}),Object(o.jsx)("div",{className:"showitems mb-4",children:d.map((function(e){return Object(o.jsxs)("div",{className:"todoitem  rounded-md bg-white py-2 px-4 flex max-w-xs mx-auto my-4 justify-between hover:bg-gray-100 filter drop-shadow-md",children:[Object(o.jsx)("h3",{className:"flex font-semibold text-gray-800 break-all",children:e.name}),Object(o.jsxs)("div",{className:"flex items-center",children:[Object(o.jsx)("i",{className:"fas fa-edit  ml-4 text-purple-900 hover:text-green-500",onClick:function(){!function(e){var t=d.find((function(t){return t.id===e}));a(t.name),u(e),O(!0)}(e.id)}}),Object(o.jsx)("i",{className:"fas fa-trash ml-4 text-purple-900 hover:text-red-600",onClick:function(){!function(e){var t=d.filter((function(t){return t.id!==e}));m(t)}(e.id)}})]})]},e.id)}))}),Object(o.jsx)("div",{className:"checkitems mb-4",children:!!y&&Object(o.jsx)("button",{className:"bg-purple-800 bg-opacity-85 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 pt-2 pb-2 px-4 rounded-md font-semibold text-white mb-5",onClick:function(){m([])},children:"Check List"})})]}),Object(o.jsx)("footer",{className:"mt-auto py-4 text-xs bg-gray-700 text-gray-600 ",children:Object(o.jsxs)("div",{className:"flex justify-center items-center min-w-min",children:[Object(o.jsx)("p",{className:"text-center text-gray-200  mx-4",children:"\xa9Hemamt Lohar 2021 "}),Object(o.jsx)("a",{href:"https://github.com/Hemant-Lohar",children:Object(o.jsx)("i",{class:"fab fa-github text-gray-400 hover:text-white mx-4 text-xl"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/hemant-lohar-216b911a0/",children:Object(o.jsx)("i",{class:"fab fa-linkedin text-gray-400 hover:text-white mx-4 text-xl"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/the_hemant___/",children:Object(o.jsx)("i",{class:"fab fa-instagram text-gray-400 hover:text-white mx-4 text-xl"})})]})})]})})};i.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.24746f48.chunk.js.map