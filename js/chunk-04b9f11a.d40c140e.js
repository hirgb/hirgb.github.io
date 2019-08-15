(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04b9f11a"],{1605:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todoapp"},[o("header",{staticClass:"header"},[o("h1",{staticStyle:{"user-select":"none"}},[t._v("todos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"new-todo",attrs:{autofocus:"",autocomplete:"off",placeholder:"What needs to be done?"},domProps:{value:t.newTodo},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}})]),o("footer",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",[t._v(t._s(t.remaining))]),t._v(" "+t._s(t._f("pluralize")(t.remaining))+" left\n            ")]),o("ul",{staticClass:"filters"},[o("li",[o("a",{class:{pointer:!0,selected:"all"==t.visibility},on:{click:function(e){t.visibility="all"}}},[t._v("All")])]),o("li",[o("a",{class:{pointer:!0,selected:"active"==t.visibility},on:{click:function(e){t.visibility="active"}}},[t._v("Active")])]),o("li",[o("a",{class:{pointer:!0,selected:"completed"==t.visibility},on:{click:function(e){t.visibility="completed"}}},[t._v("Completed")])])]),o("button",{directives:[{name:"show",rawName:"v-show",value:t.todos.length>t.remaining,expression:"todos.length > remaining"}],staticClass:"clear-completed",on:{click:t.removeCompleted}},[t._v("\n                Clear completed\n            ")])]),o("section",{directives:[{name:"show",rawName:"v-show",value:t.todos.length,expression:"todos.length"}],staticClass:"main"},[o("ul",{staticClass:"todo-list"},t._l(t.filteredTodos,function(e){return o("li",{key:e.id,staticClass:"todo",class:{completed:e.completed,editing:e==t.editedTodo}},[o("div",{staticClass:"view"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"todo.completed"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.completed)?t._i(e.completed,null)>-1:e.completed},on:{change:function(o){var i=e.completed,n=o.target,s=!!n.checked;if(Array.isArray(i)){var c=null,l=t._i(i,c);n.checked?l<0&&t.$set(e,"completed",i.concat([c])):l>-1&&t.$set(e,"completed",i.slice(0,l).concat(i.slice(l+1)))}else t.$set(e,"completed",s)}}}),o("label",{on:{dblclick:function(o){t.editTodo(e)}}},[t._v(t._s(e.title))]),o("button",{staticClass:"destroy",on:{click:function(o){t.removeTodo(e)}}})]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"todo.title"},{name:"todo-focus",rawName:"v-todo-focus",value:e==t.editedTodo,expression:"todo == editedTodo"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:e.title},on:{blur:function(o){t.doneEdit(e)},keyup:[function(o){if(!("button"in o)&&t._k(o.keyCode,"enter",13,o.key,"Enter"))return null;t.doneEdit(e)},function(o){if(!("button"in o)&&t._k(o.keyCode,"esc",27,o.key,["Esc","Escape"]))return null;t.cancelEdit(e)}],input:function(o){o.target.composing||t.$set(e,"title",o.target.value)}}})])}),0)])])},n=[],s=(o("6762"),o("2fdb"),o("ac6a"),o("cadf"),o("551c"),o("097d"),"todo"),c={all:function(t){return t},active:function(t){return t.filter(function(t){return!t.completed})},completed:function(t){return t.filter(function(t){return t.completed})}},l={data:function(){return{todos:[],newTodo:"",editedTodo:null,visibility:"all"}},watch:{todos:{handler:function(t){this.saveTodos(t)},deep:!0}},computed:{filteredTodos:function(){return c[this.visibility](this.todos)},remaining:function(){return c.active(this.todos).length},allDone:{get:function(){return 0===this.remaining},set:function(t){this.todos.forEach(function(e){e.completed=t})}}},filters:{pluralize:function(t){return 1===t?"item":"items"}},mounted:function(){this.getTodos()},methods:{getTodos:function(){var t=this;this.$vlf.keys().then(function(e){if(e.includes(s))t.$vlf.getItem(s).then(function(e){e.forEach(function(t,e){t.id=e}),t.todos=e});else{var o=[];t.$vlf.setItem(s,o).then(function(e){t.todos=o})}})},saveTodos:function(t){t.forEach(function(t,e){t.id=e}),this.$vlf.setItem(s,t)},addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.todos.push({id:todoStorage.uid++,title:t,completed:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},editTodo:function(t){this.beforeEditCache=t.title,this.editedTodo=t},doneEdit:function(t){this.editedTodo&&(this.editedTodo=null,t.title=t.title.trim(),t.title||this.removeTodo(t))},cancelEdit:function(t){this.editedTodo=null,t.title=this.beforeEditCache},removeCompleted:function(){this.todos=c.active(this.todos)}},directives:{"todo-focus":function(t,e){e.value&&t.focus()}}},r=l,a=(o("2a3e"),o("2877")),d=Object(a["a"])(r,i,n,!1,null,"a4b5302e",null);d.options.__file="Todo.vue";e["default"]=d.exports},"2a3e":function(t,e,o){"use strict";var i=o("74f5"),n=o.n(i);n.a},"2fdb":function(t,e,o){"use strict";var i=o("5ca1"),n=o("d2c8"),s="includes";i(i.P+i.F*o("5147")(s),"String",{includes:function(t){return!!~n(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},5147:function(t,e,o){var i=o("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(o){try{return e[i]=!1,!"/./"[t](e)}catch(n){}}return!0}},6762:function(t,e,o){"use strict";var i=o("5ca1"),n=o("c366")(!0);i(i.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},"74f5":function(t,e,o){},aae3:function(t,e,o){var i=o("d3f4"),n=o("2d95"),s=o("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},ac6a:function(t,e,o){for(var i=o("cadf"),n=o("0d58"),s=o("2aba"),c=o("7726"),l=o("32e9"),r=o("84f2"),a=o("2b4c"),d=a("iterator"),u=a("toStringTag"),f=r.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=n(p),h=0;h<m.length;h++){var v,g=m[h],T=p[g],y=c[g],b=y&&y.prototype;if(b&&(b[d]||l(b,d,f),b[u]||l(b,u,g),r[g]=f,T))for(v in i)b[v]||s(b,v,i[v],!0)}},d2c8:function(t,e,o){var i=o("aae3"),n=o("be13");t.exports=function(t,e,o){if(i(e))throw TypeError("String#"+o+" doesn't accept regex!");return String(n(t))}}}]);