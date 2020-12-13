(this["webpackJsonpreact-mobx-todo"]=this["webpackJsonpreact-mobx-todo"]||[]).push([[0],{172:function(t,e,n){"use strict";n.r(e);var r=n(4),c=n(0),a=n.n(c),i=n(24),o=n.n(i),s=n(10),u=n(6),d=n.n(u),l=n(13),f=n(35),b=n(36),j=n(37),h=n(74),p=n(72),O=n(9),v=n(189),x=function(){function t(){Object(f.a)(this,t),this.toaster=v.a}return Object(b.a)(t,[{key:"info",value:function(t){this.toaster.notify(t)}},{key:"success",value:function(t){this.toaster.success(t)}},{key:"warning",value:function(t){this.toaster.warning(t)}},{key:"danger",value:function(t){this.toaster.danger(t)}}]),t}(),g=n(68),m={all:"/todos?userId=1",id:function(t){return"/todos/".concat(t)}},y=1,k=!1,w=n.n(g).a.create({baseURL:"https://jsonplaceholder.typicode.com",timeout:1e4,headers:{"Content-Type":"application/json"}}),T=function(){var t=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get(m.all);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.post(m.all,{title:e,userId:y,completed:k});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(){var t=Object(l.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.patch(m.id(e),{title:n});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),S=function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.delete(m.id(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;return Object(f.a)(this,n),(t=e.call(this)).todos=[],t.fetching=!1,Object(O.e)(Object(j.a)(t),{todos:O.f,fetching:O.f,fetchTodos:O.b,createTodo:O.b,updateTodo:O.b,deleteTodo:O.b}),t}return Object(b.a)(n,[{key:"fetchTodos",value:function(){var t=Object(l.a)(d.a.mark((function t(){var e,n,r=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.toggleFetching(),t.next=3,T();case 3:e=t.sent,n=e.data,Object(O.g)((function(){r.todos=n})),this.toggleFetching();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"createTodo",value:function(){var t=Object(l.a)(d.a.mark((function t(e){var n,r,c=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(e);case 3:n=t.sent,r=n.data,Object(O.g)((function(){c.todos=[].concat(Object(s.a)(c.todos),[r])})),this.success("Item added successfully!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),this.danger("Error while adding item!");case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},{key:"updateTodo",value:function(){var t=Object(l.a)(d.a.mark((function t(e,n){var r,c,a=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e,n);case 3:r=t.sent,c=r.data,Object(O.g)((function(){a.todos=a.todos.map((function(t){return t.id===c.id?c:t}))})),this.success("Item updated successfully!"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),this.danger("Error while updating item!");case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));return function(e,n){return t.apply(this,arguments)}}()},{key:"deleteTodo",value:function(){var t=Object(l.a)(d.a.mark((function t(e){var n,r=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S(e);case 3:n=this.todos.find((function(t){return t.id===e})),Object(O.g)((function(){r.todos=r.todos.filter((function(t){return t.id!==n.id}))})),this.success("Item deleted successfully!"),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),this.danger("Error while deleting item!");case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},{key:"toggleFetching",value:function(){var t=this;Object(O.g)((function(){t.fetching=!t.fetching}))}}]),n}(x),E=Object(c.createContext)({}),B=new z,M=function(t){var e=t.children;return Object(r.jsx)(E.Provider,{value:{store:B},children:e})},L=n(18),F=n(19);function J(){var t=Object(L.a)(["\n  * {\n      box-sizing: border-box;\n  }\n\n  html {\n    font-size: 16px;\n  }\n\n  body {\n    margin: 0;\n    padding: 1rem;\n    min-height: 100vh;\n    background-color: #fafafa;\n  }\n"]);return J=function(){return t},t}var R=Object(F.a)(J()),q=n(190),A=n(44),N=n(183),P=n(73),U=n(185),V=n(67);function X(){var t=Object(L.a)(["\n  width: 100%;\n"]);return X=function(){return t},t}var D=F.b.form(X()),G=function(t){var e=t.disabled,n=t.onSubmit,a=Object(P.a)({defaultValues:{title:""}}),i=a.register,o=a.handleSubmit,s=a.reset,u=Object(c.useCallback)((function(t){var e=t.title;n({title:e}),s({title:""})}),[n,s]);return Object(r.jsx)(D,{onSubmit:o(u),children:Object(r.jsxs)(A.a,{display:"flex",width:"100%",marginBottom:8,children:[Object(r.jsx)(U.a,{name:"title",placeholder:"Enter the task name...",size:400,height:32,width:"100%",disabled:e,ref:i({required:!0})}),Object(r.jsx)(V.a,{type:"submit",marginLeft:8,appearance:"primary",disabled:e,children:"Add"})]})})},H=n(22),K=n(47),Q=n(186),W=n(184),Y=n(187),Z=n(188),$=function(t){var e=t.data,n=t.updateTodo,a=t.deleteTodo,i=Object(c.useState)(e.title),o=Object(H.a)(i,2),s=o[0],u=o[1],d=Object(c.useState)(!1),l=Object(H.a)(d,2),f=l[0],b=l[1],j=Object(c.useMemo)((function(){return Object(r.jsx)(K.a,{size:400,children:s})}),[s]),h=Object(c.useMemo)((function(){return Object(r.jsx)(U.a,{value:s,spellCheck:!0,width:"100%",onChange:function(t){u(t.target.value)}})}),[s]),p=Object(c.useMemo)((function(){return f?h:j}),[f,h,j]);return Object(r.jsxs)(Q.a,{display:"flex",alignItems:"center","justify-content":"space-between",border:"default",padding:8,marginBottom:8,children:[Object(r.jsx)(A.a,{display:"flex",flex:"1",children:p}),Object(r.jsxs)(A.a,{display:"flex",marginLeft:8,children:[Object(r.jsx)(W.a,{icon:Y.a,height:24,marginRight:8,onClick:function(){f&&n({id:e.id,title:s}),b((function(t){return!t}))}}),Object(r.jsx)(W.a,{icon:Z.a,height:24,intent:"danger",onClick:function(){a({id:e.id})}})]})]})};function _(){var t=Object(L.a)(["\n  list-style: none;\n"]);return _=function(){return t},t}function tt(){var t=Object(L.a)(["\n  margin: 0;\n  padding: 0;\n"]);return tt=function(){return t},t}var et=F.b.ul(tt()),nt=F.b.li(_()),rt=function(t){var e=t.data,n=t.updateTodo,c=t.deleteTodo;return Object(r.jsx)(et,{children:e.map((function(t){return Object(r.jsx)(nt,{children:Object(r.jsx)($,{data:t,updateTodo:n,deleteTodo:c})},t.title)}))})},ct=n(173),at=function(){return Object(r.jsx)(ct.a,{size:32,marginX:"auto"})};function it(){var t=Object(L.a)(["\n  width: 100%;\n  max-width: 500px;\n  margin-top: 50px;\n"]);return it=function(){return t},t}var ot=F.b.section(it()),st=Object(q.a)((function(){var t=Object(c.useContext)(E).store;Object(c.useEffect)((function(){Object(O.c)((function(){t.fetchTodos()}))}),[t]);var e=Object(c.useCallback)((function(e){var n=e.title,r=void 0===n?"":n;t.createTodo(r)}),[t]),n=Object(c.useCallback)((function(e){var n=e.id,r=void 0===n?0:n,c=e.title,a=void 0===c?"":c;t.updateTodo(r,a)}),[t]),a=Object(c.useCallback)((function(e){var n=e.id,r=void 0===n?0:n;t.deleteTodo(r)}),[t]),i=Object(c.useMemo)((function(){return t.fetching?Object(r.jsx)(at,{}):Object(r.jsx)(rt,{data:t.todos,updateTodo:n,deleteTodo:a})}),[t.fetching,t.todos,n,a]);return Object(r.jsx)(ot,{children:Object(r.jsxs)(A.a,{elevation:1,padding:16,background:"white",children:[Object(r.jsx)(A.a,{marginBottom:16,children:Object(r.jsx)(N.a,{size:800,children:"Todo List"})}),Object(r.jsx)(A.a,{marginBottom:16,children:Object(r.jsx)(G,{disabled:t.fetching,onSubmit:e})}),Object(r.jsx)(A.a,{children:i})]})})}));function ut(){var t=Object(L.a)(["\n  display: flex;\n  justify-content: center;\n"]);return ut=function(){return t},t}var dt=F.b.div(ut()),lt=function(){return Object(r.jsxs)(dt,{className:"app",children:[Object(r.jsx)(R,{}),Object(r.jsx)(st,{})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(M,{children:Object(r.jsx)(lt,{})})}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.c121c745.chunk.js.map