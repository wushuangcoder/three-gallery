(self.webpackChunkthree_gallery=self.webpackChunkthree_gallery||[]).push([[77],{477:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var r=t(5393),a=(0,r.HX)("data-v-0391ad28");(0,r.dD)("data-v-0391ad28");var o={id:"three",ref:"three"};(0,r.Cn)();var i,c,u,s,d,l,p,f,m,h=a((function(e,n,t,a,i,c){return(0,r.wg)(),(0,r.j4)("div",o,null,512)})),v=(t(1249),t(2212)),g=t(8840),w=t(4817),y=(0,r.aZ)({name:"gallery8",setup:function(){var e=(0,r.iH)(document.createElement("div")),n=(0,w.K)(i,c,u,undefined,s,undefined,d,l,p),t=n.initScene,a=n.initCamera,o=n.initRenderer,h=n.initHelpers,y=n.initStats,C=n.windowResize,A=n.initControls,x=n.initClock;function L(){i&&u.render(i,c),d&&d.update(),l&&l.update(p.getDelta()),m&&m.rotateY(.01),f=requestAnimationFrame(L)}function S(e){i=t(),c=a(),(u=o(e)).setClearColor(0),d=y(e),l=A(),p=x(),function(){var e=new v.PointLight(16777215,.3);e.position.set(400,200,300),i.add(e),s=new v.AmbientLight(16777215,.8),i.add(s);var n=new v.DirectionalLight(16777215,.5);n.position.set(400,200,300),i.add(n);var t=new v.DirectionalLight(16777215,.5);t.position.set(-400,-200,-300),i.add(t)}(),h(),(new g.L).load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/model.obj",(function(e){i.add(e),(m=e.children[0]).scale.set(10,10,10);var n=new v.TextureLoader;m.material.map=n.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/color.png"),m.material.normalMap=n.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/normal.png"),m.material.normalScale.set(1.5,1.5),m.material.specularMap=n.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/heart/specular.png"),m.material.specular.set(16777215),m.material.shininess=100;var t="https://cache-1256738511.cos.ap-chengdu.myqcloud.com/models/14.6/env/",r=".jpg",a=[t+"px"+r,t+"nx"+r,t+"py"+r,t+"ny"+r,t+"pz"+r,t+"nz"+r];m.material.envMap=(new v.CubeTextureLoader).load(a)})),L()}return(0,r.bv)((function(){S(e.value),window.addEventListener("resize",C)})),(0,r.Jd)((function(){cancelAnimationFrame(f),l&&l.dispose(),window.removeEventListener("resize",C)})),{three:e}}});y.render=h,y.__scopeId="data-v-0391ad28";var C=y},2092:function(e,n,t){var r=t(9974),a=t(8361),o=t(7908),i=t(7466),c=t(5417),u=[].push,s=function(e){var n=1==e,t=2==e,s=3==e,d=4==e,l=6==e,p=7==e,f=5==e||l;return function(m,h,v,g){for(var w,y,C=o(m),A=a(C),x=r(h,v,3),L=i(A.length),S=0,b=g||c,q=n?b(m,L):t||p?b(m,0):void 0;L>S;S++)if((f||S in A)&&(y=x(w=A[S],S,C),e))if(n)q[S]=y;else if(y)switch(e){case 3:return!0;case 5:return w;case 6:return S;case 2:u.call(q,w)}else switch(e){case 4:return!1;case 7:u.call(q,w)}return l?-1:s||d?d:q}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},1194:function(e,n,t){var r=t(7293),a=t(5112),o=t(7392),i=a("species");e.exports=function(e){return o>=51||!r((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[e](Boolean).foo}))}},9207:function(e,n,t){var r=t(9781),a=t(7293),o=t(6656),i=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,n){if(o(c,e))return c[e];n||(n={});var t=[][e],s=!!o(n,"ACCESSORS")&&n.ACCESSORS,d=o(n,0)?n[0]:u,l=o(n,1)?n[1]:void 0;return c[e]=!!t&&!a((function(){if(s&&!r)return!0;var e={length:-1};s?i(e,1,{enumerable:!0,get:u}):e[1]=1,t.call(e,d,l)}))}},5417:function(e,n,t){var r=t(111),a=t(3157),o=t(5112)("species");e.exports=function(e,n){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)?r(t)&&null===(t=t[o])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===n?0:n)}},3157:function(e,n,t){var r=t(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},1249:function(e,n,t){"use strict";var r=t(2109),a=t(2092).map,o=t(1194),i=t(9207),c=o("map"),u=i("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);