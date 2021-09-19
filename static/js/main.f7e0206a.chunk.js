(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),l=a.n(s),r=a(2),o=(a(9),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:e.aboutText})})]}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsxs)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ","light"===e.mode?"dark":"light"," mode"]})]})]})]})})}function b(e){var t=Object(c.useState)("Enter text here"),a=Object(r.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){s(e.target.value)},id:"myBox",rows:"6"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toUpperCase();s(t),e.showAlert("Text changed to uppercase!","success")},children:"Convert to UpperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=n.toLowerCase();s(t),e.showAlert("Text changed to lowercase!","success")},children:"Convert to LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){s(""),e.showAlert("Text cleared!","success")},children:"Clear text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(o.jsx)("h1",{children:"Your text summary"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters."]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length," minutes to read "]}),Object(o.jsx)("h3",{children:"Preview"}),Object(o.jsx)("p",{children:n})]})]})}function d(e){return e.alert&&Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})}i.defaultProps={title:"Set title here",aboutText:"About Us"};var h=function(){var e=Object(c.useState)("light"),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(null),l=Object(r.a)(s,2),h=l[0],j=l[1],m=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="#3e3a61",m("Dark mode has been enabled!","success"),document.title="TextUtils - Dark Mode"):(n("light"),document.body.style.backgroundColor="#fcfbf7",m("Light mode has been enabled!","success"),document.title="TextUtils - Light Mode")}}),Object(o.jsx)(d,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter your text to analyze",mode:a,showAlert:m})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,12)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.f7e0206a.chunk.js.map