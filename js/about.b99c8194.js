(self.webpackChunkthree_gallery=self.webpackChunkthree_gallery||[]).push([[443],{6071:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});n(8309);var c=n(5393),r={class:"about"},o=(0,c.createVNode)("h1",null,"This is an about page",-1);var a=(0,c.defineComponent)({name:"about",setup:function(e,t){var n=function(){var e=(0,c.reactive)([{name:"1"},{name:"2"},{name:"3"},{name:"4"}]);return{list:e,toggleList:function(t,n){e[n].active=!e[n].active}}}(),r=n.list,o=n.toggleList,a=function(){var e=(0,c.reactive)({name:"2222",title:222});return{obj:e,processObject:function(){e.active=!e.active}}}();return{list:r,obj:a.obj,toggleList:o,processObject:a.processObject}}});a.render=function(e,t,n,a,i,l){return(0,c.openBlock)(),(0,c.createBlock)("div",r,[o,(0,c.createVNode)("ul",null,[((0,c.openBlock)(!0),(0,c.createBlock)(c.Fragment,null,(0,c.renderList)(e.list,(function(t,n){return(0,c.openBlock)(),(0,c.createBlock)("li",{key:n,class:t.active?"active":"",onClick:function(c){return e.toggleList(t,n)}},(0,c.toDisplayString)(t.name),11,["onClick"])})),128))]),(0,c.createVNode)("button",{onClick:t[1]||(t[1]=function(){return e.processObject&&e.processObject.apply(e,arguments)})},"对象处理")])};var i=a},8309:function(e,t,n){var c=n(9781),r=n(3070).f,o=Function.prototype,a=o.toString,i=/^\s*function ([^ (]*)/,l="name";c&&!(l in o)&&r(o,l,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(e){return""}}})}}]);