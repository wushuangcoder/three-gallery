(self.webpackChunkthree_gallery=self.webpackChunkthree_gallery||[]).push([[499],{4817:function(e,n,t){"use strict";t.d(n,{K:function(){return s}});var i=t(2212),r=t(105),o=t(3466),a=t.n(o),d=t(3555);function s(e,n,t,o,s,u,c,l,p){var w=window.innerWidth,f=window.innerHeight,h=window.devicePixelRatio,m=200;return{initScene:function(){return e=new i.Scene},initCamera:function(){var t=w/f;return(n=new i.OrthographicCamera(-m*t,m*t,m,-m,1,1e3)).position.set(200,200,200),n.lookAt(e.position),n},initRenderer:function(e){return(t=new i.WebGLRenderer).setPixelRatio(h),t.setSize(w,f),t.setClearColor(12178431),e.appendChild(t.domElement),t},initLight:function(){(o=new i.DirectionalLight(16777215)).position.set(400,200,300),e.add(o),s=new i.AmbientLight(4473924),e.add(s)},initControls:function(){return(l=new r.Z(n,t.domElement)).draggingDampingFactor=1,l},initClock:function(){return new i.Clock},initHelpers:function(){u=new i.AxesHelper(250),e.add(u)},initStats:function(e){return(c=new(a())).showPanel(0),c.dom.style.position="absolute",c.dom.style.left="0px",c.dom.style.top="0px",e&&e.appendChild(c.dom),c},windowResize:(0,d.vA)((function(){var e=window.innerWidth,i=window.innerHeight,r=e/i;n.left=-m*r,n.right=m*r,n.top=m,n.bottom=-m,n.updateProjectionMatrix(),t.setSize(e,i)}),100)}}r.Z.install({THREE:i})},9614:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=t(5393),r={id:"three",ref:"three"};t(2481);var o,a,d,s,u,c,l,p,w=t(2212),f=t(4817),h=(0,i.aZ)({name:"gallery3",setup:function(){var e=(0,i.iH)(document.createElement("div")),n=(0,f.K)(o,a,d,undefined,undefined,undefined,c,s,u),t=n.initScene,r=n.initCamera,h=n.initRenderer,m=n.initLight,g=n.initHelpers,v=n.initStats,C=n.windowResize,R=n.initControls,x=n.initClock;function y(){o&&d.render(o,a),c&&c.update(),s&&s.update(u.getDelta()),l=requestAnimationFrame(y),p.offset.x-=.06}function b(e){o=t(),(a=r()).position.set(200,300,200),(d=h(e))&&d.setClearColor(0),c=v(e),s=R(),u=x(),m(),g(),function(){var e=new w.TextureLoader;(p=e.load("https://cache-1256738511.cos.ap-chengdu.myqcloud.com/images/run.jpg")).wrapS=w.RepeatWrapping,p.wrapT=w.RepeatWrapping,p.repeat.x=20;var n=new w.MeshPhongMaterial({map:p,transparent:!0}),t=new w.CatmullRomCurve3([new w.Vector3(-80,-40,0),new w.Vector3(-70,40,0),new w.Vector3(70,40,0),new w.Vector3(80,-40,0)]),i=new w.TubeGeometry(t,100,.6,50,!1),r=new w.Mesh(i,n);o.add(r);var a=new w.TubeGeometry(t,100,2,50,!1),d=new w.MeshPhongMaterial({color:4491519,transparent:!0,opacity:.3}),s=new w.Mesh(a,d);o.add(s);var u=new w.BoxGeometry(20,50,30),c=new w.MeshPhongMaterial({color:255}),l=new w.Mesh(u,c);o.add(l),l.position.set(-80,-50,0);var f=l.clone();o.add(f),f.position.set(80,-50,0)}(),y()}return(0,i.bv)((function(){b(e.value),window.addEventListener("resize",C)})),(0,i.Jd)((function(){cancelAnimationFrame(l),s&&s.dispose(),window.removeEventListener("resize",C)})),{three:e}}});h.render=function(e,n,t,o,a,d){return(0,i.wg)(),(0,i.j4)("div",r,null,512)};var m=h},8415:function(e,n,t){"use strict";var i=t(9958),r=t(4488);e.exports="".repeat||function(e){var n=String(r(this)),t="",o=i(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(t+=n);return t}},2481:function(e,n,t){t(2109)({target:"String",proto:!0},{repeat:t(8415)})}}]);