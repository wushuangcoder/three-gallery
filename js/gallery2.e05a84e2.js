(self.webpackChunkthree_gallery=self.webpackChunkthree_gallery||[]).push([[156],{4817:function(e,n,t){"use strict";t.d(n,{K:function(){return u}});var i=t(2212),r=t(105),o=t(3466),a=t.n(o),d=t(3555);function u(e,n,t,o,u,l,s,c,w){var f=window.innerWidth,p=window.innerHeight,h=window.devicePixelRatio,m=200;return{initScene:function(){return e=new i.Scene},initCamera:function(){var t=f/p;return(n=new i.OrthographicCamera(-m*t,m*t,m,-m,1,1e3)).position.set(200,200,200),n.lookAt(e.position),n},initRenderer:function(e){return(t=new i.WebGLRenderer).setPixelRatio(h),t.setSize(f,p),t.setClearColor(12178431),e.appendChild(t.domElement),t},initLight:function(){(o=new i.DirectionalLight(16777215)).position.set(400,200,300),e.add(o),u=new i.AmbientLight(4473924),e.add(u)},initControls:function(){return(c=new r.Z(n,t.domElement)).draggingDampingFactor=1,c},initClock:function(){return new i.Clock},initHelpers:function(){l=new i.AxesHelper(250),e.add(l)},initStats:function(e){return(s=new(a())).showPanel(0),s.dom.style.position="absolute",s.dom.style.left="0px",s.dom.style.top="0px",e&&e.appendChild(s.dom),s},windowResize:(0,d.vA)((function(){var e=window.innerWidth,i=window.innerHeight,r=e/i;n.left=-m*r,n.right=m*r,n.top=m,n.bottom=-m,n.updateProjectionMatrix(),t.setSize(e,i)}),100)}}r.Z.install({THREE:i})},1643:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=t(5393),r={id:"three",ref:"three"};var o,a,d,u,l,s,c,w,f=t(2212),p=t(4817),h=(0,i.defineComponent)({name:"gallery2",setup:function(){var e=(0,i.ref)(document.createElement("div")),n=(0,p.K)(o,a,d,undefined,undefined,undefined,c,l,s),t=n.initScene,r=n.initCamera,h=n.initRenderer,m=n.initLight,g=n.initHelpers,v=n.initStats,C=n.windowResize,k=n.initControls,R=n.initClock;function S(){o&&d.render(o,a),c&&c.update(),l&&l.update(s.getDelta()),w=requestAnimationFrame(S)}function y(e){var n,i;o=t(),a=r(),d=h(e),c=v(e),l=k(),s=R(),m(),g(),n=new f.SphereGeometry(100,25,25),i=new f.MeshPhongMaterial({color:16711935,specular:4491502,shininess:20}),u=new f.Mesh(n,i),o.add(u),S()}return(0,i.onMounted)((function(){y(e.value),window.addEventListener("resize",C)})),(0,i.onBeforeUnmount)((function(){cancelAnimationFrame(w),l&&l.dispose(),window.removeEventListener("resize",C)})),{three:e}}});h.render=function(e,n,t,o,a,d){return(0,i.openBlock)(),(0,i.createBlock)("div",r,null,512)};var m=h}}]);