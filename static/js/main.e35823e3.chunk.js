(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],[,,function(e,a,t){e.exports={resultValue:"ResultValue_resultValue__qSgxy",maxValue:"ResultValue_maxValue__3befK"}},function(e,a,t){e.exports={resultValue:"ResultValue_resultValue__1ctfp",maxValue:"ResultValue_maxValue__2cUoB"}},,,function(e,a,t){e.exports={button:"Button_button__638sD"}},function(e,a,t){e.exports={input:"Input_input__3UJAQ"}},function(e,a,t){e.exports={button1:"Button_button1__3312D"}},function(e,a,t){e.exports={input1:"Input_input1__3x86V"}},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),u=t(5),c=t.n(u),r=(t(15),t(1)),i=(t(16),t(2)),o=t.n(i),s=function(e){return l.a.createElement("div",{className:e.value>=e.maxValue?o.a.maxValue:o.a.resultValue},e.value)},m=t(6),v=t.n(m),f=function(e){return l.a.createElement("div",null,l.a.createElement("button",{className:v.a.button,onClick:function(){e.onClick()},disabled:e.value>=e.maxValue&&"inc"===e.name||e.value===e.minValue&&"reset"===e.name},e.name))},V=t(7),E=t.n(V),d=function(e){var a=function(){e.addValue(e.value)};return l.a.createElement("div",null,l.a.createElement("input",{className:E.a.input,type:"number",value:e.value,onChange:function(a){+a.currentTarget.value<0||e.addValue(+a.currentTarget.value)},onBlur:function(){a()},onKeyPress:function(e){"Enter"===e.key&&a()}}))},b=(t(17),t(3)),g=t.n(b),N=function(e){return l.a.createElement("div",{className:e.value>=e.maxValue?g.a.maxValue:g.a.resultValue},e.value)},O=t(8),S=t.n(O),p=function(e){return l.a.createElement("div",null,l.a.createElement("button",{className:S.a.button1,onClick:function(){e.onClick()},disabled:e.value>=e.maxValue&&"inc"===e.name||e.value===e.minValue&&"reset"===e.name},e.name))},x=t(9),j=t.n(x),_=function(e){var a=function(){e.addValue(e.value)};return l.a.createElement("div",null,l.a.createElement("input",{className:j.a.input1,type:"number",value:e.value,onChange:function(a){+a.currentTarget.value<0||e.addValue(+a.currentTarget.value)},onBlur:function(){a()},onKeyPress:function(e){"Enter"===e.key&&a()}}))};var I=function(){var e=Object(n.useState)(0),a=Object(r.a)(e,2),t=a[0],u=a[1],c=Object(n.useState)(5),i=Object(r.a)(c,2),o=i[0],s=i[1],m=Object(n.useState)(0),v=Object(r.a)(m,2),f=v[0],V=v[1],E=Object(n.useState)(""),d=Object(r.a)(E,2),b=d[0],g=d[1],O=Object(n.useState)(!1),S=Object(r.a)(O,2),x=S[0],j=S[1];Object(n.useEffect)((function(){var e=localStorage.getItem("counterValue1");if(e){var a=JSON.parse(e);u(a)}var t=localStorage.getItem("maxValue1");if(t){var n=JSON.parse(t);s(n)}var l=localStorage.getItem("minValue1");if(l){var c=JSON.parse(l);V(c)}var r=localStorage.getItem("error1");if(r){var i=JSON.parse(r);g(i)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("counterValue",JSON.stringify(t))}),[t]),Object(n.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(o))}),[o]),Object(n.useEffect)((function(){localStorage.setItem("minValue",JSON.stringify(f))}),[f]),Object(n.useEffect)((function(){localStorage.setItem("error",JSON.stringify(b))}),[b]);var I=function(){j(!x)};return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"counter1"},l.a.createElement("div",{className:x?"noneStyle1":""},l.a.createElement("div",{className:"resultValue1"},l.a.createElement(N,{value:t,maxValue:o})),l.a.createElement("div",{className:"buttons1"},l.a.createElement(p,{name:"inc",onClick:function(){u(t+1)},value:t,maxValue:o,minValue:f}),l.a.createElement(p,{name:"set",onClick:I,value:t,maxValue:o,minValue:f}),l.a.createElement(p,{name:"reset",onClick:function(){u(f)},value:t,maxValue:o,minValue:f})))),l.a.createElement("div",{className:x?"inputsMenu1":"noneStyle1"},l.a.createElement("div",{className:"message1"},"Enter a value:"),l.a.createElement("div",{className:"minMaxValue1"},"MinValue"),l.a.createElement("div",{className:"input1"},l.a.createElement(_,{name:"minValue",addValue:function(e){g(e>=o?"Incorrect value!!!":""),u(e),V(e)},value:f})),l.a.createElement("div",{className:"minMaxValue"},"MaxValue"),l.a.createElement("div",{className:"input"},l.a.createElement(_,{name:"maxValue",addValue:function(e){g(e<=f?"Incorrect value!!!":""),s(e)},value:o})),l.a.createElement("div",{className:"error1"},b),l.a.createElement(p,{name:"set",onClick:I,value:t,maxValue:o,minValue:f})))};var y=function(){var e=Object(n.useState)(0),a=Object(r.a)(e,2),t=a[0],u=a[1],c=Object(n.useState)(5),i=Object(r.a)(c,2),o=i[0],m=i[1],v=Object(n.useState)(0),V=Object(r.a)(v,2),E=V[0],b=V[1],g=Object(n.useState)(""),N=Object(r.a)(g,2),O=N[0],S=N[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("counterValue");if(e){var a=JSON.parse(e);u(a)}var t=localStorage.getItem("maxValue");if(t){var n=JSON.parse(t);m(n)}var l=localStorage.getItem("minValue");if(l){var c=JSON.parse(l);b(c)}var r=localStorage.getItem("error");if(r){var i=JSON.parse(r);S(i)}}),[]),Object(n.useEffect)((function(){localStorage.setItem("counterValue",JSON.stringify(t))}),[t]),Object(n.useEffect)((function(){localStorage.setItem("maxValue",JSON.stringify(o))}),[o]),Object(n.useEffect)((function(){localStorage.setItem("minValue",JSON.stringify(E))}),[E]),Object(n.useEffect)((function(){localStorage.setItem("error",JSON.stringify(O))}),[O]),l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"counter"},l.a.createElement("div",{className:"resultValue"},l.a.createElement(s,{value:t,maxValue:o})),l.a.createElement("div",{className:"buttons"},l.a.createElement(f,{name:"inc",onClick:function(){u(t+1)},value:t,maxValue:o,minValue:E}),l.a.createElement(f,{name:"reset",onClick:function(){u(E)},value:t,maxValue:o,minValue:E}))),l.a.createElement("div",{className:"inputsMenu"},l.a.createElement("div",{className:"message"},"Enter a value: "),l.a.createElement("div",{className:"minMaxValue"},"MinValue"),l.a.createElement("div",{className:"input"},l.a.createElement(d,{name:"minValue",addValue:function(e){S(e>=o?"Incorrect value!!!":""),u(e),b(e)},value:E})),l.a.createElement("div",{className:"minMaxValue"},"MaxValue"),l.a.createElement("div",{className:"input"},l.a.createElement(d,{name:"maxValue",addValue:function(e){S(e<=E?"Incorrect value!!!":""),m(e)},value:o})),l.a.createElement("div",{className:"error"},O)),l.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.e35823e3.chunk.js.map