(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{40:function(e,t,a){e.exports=a(67)},45:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),i=a.n(l),o=(a(45),a(81)),c=a(82),m=a(83),s=a(84),u=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function d(){var e=u();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{position:"static"},r.a.createElement(m.a,{variant:"dense"},r.a.createElement(s.a,{variant:"h6",color:"inherit"},"High Quality Photo"))))}var h=Object(o.a)((function(e){return{root:{position:"fixed",bottom:0,width:"100%",height:"2.5rem",textAlign:"center"}}}));function p(){var e=h();return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{position:"static"},r.a.createElement(m.a,{variant:"dense"},r.a.createElement(s.a,{variant:"h6",color:"inherit"}))))}var g=a(69),E=a(31),f=a(32),v=a(34),y=a(33),b=a(35),w=a(17),x=a.n(w),O=a(85),I=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(y.a)(t).call(this,e))).state={charPoses:{exit:{y:20,opacity:0},enter:{y:0,opacity:1,transition:function(e){var t=e.charInWordIndex;return{type:"spring",delay:30*t,stiffness:500+150*t,damping:10-1*t}}}},image:"",changeimage:"",file:null,selectedFile:null},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"uploadImage",value:function(){var e=this,t=new FormData,a=document.getElementById("ex_file").files[0];null==a?alert("\uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694."):(t.append("image",a),x()({method:"POST",url:"https://api.imgur.com/3/image",timeout:0,headers:{Authorization:"Client-ID acd50197869043a"},processData:!1,mimeType:"multipart/form-data",contentType:!1,data:t}).then((function(t){e.setState({image:t.data.data.link}),(new FormData).append("imageUrl",e.state.image),x()({url:"http://localhost:8080/upload.do",headers:{"Access-Control-Allow-Origin":"*",SameSite:"None"},data:e.state.image}).then((function(e){console.log("\uc774\ubbf8\uc9c0 \ubcf4\ub0b4\uae30 \uc644\ub8cc.",JSON.stringify(e,null,2))})).catch((function(e){console.log("\uc2e4\ud328",e)}))})))}},{key:"resetInput",value:function(){document.getElementsById("ex_file").reset()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{style:{width:"100%",textAlign:"center"}},r.a.createElement("div",{style:{display:"inline-block"}},r.a.createElement("img",{src:this.state.image,alt:"",style:{width:"45%",height:"auto",marginRight:"2%"}}),r.a.createElement("img",{src:this.state.image,alt:"",style:{width:"45%",height:"auto"}}))),r.a.createElement("br",null),r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement("div",null,r.a.createElement("input",{accept:"image/*",style:{display:"none"},id:"ex_file",multiple:!0,type:"file",onChange:function(){return e.uploadImage()}}),r.a.createElement("label",{htmlFor:"ex_file"},r.a.createElement(O.a,{variant:"contained",component:"div",color:"primary"},"Upload Image")))))}}]),t}(n.Component),k=Object(o.a)((function(e){return{root:{padding:e.spacing(3,2),textAlign:"center"}}}));function j(){var e=k();return r.a.createElement("div",null,r.a.createElement(g.a,{className:e.root},r.a.createElement(s.a,{variant:"h5",component:"h3"},"\uc0ac\uc9c4 \ud654\uc9c8 \ub192\uc774\uae30."),r.a.createElement(s.a,{component:"p"},"\uc800\ud654\uc9c8\uc758 \uc0ac\uc9c4\uc744 \uace0\ud654\uc9c8\uc758 \uc0ac\uc9c4\uc73c\ub85c \ubc14\uafd4\ubcf4\uc138\uc694. \ud558\ub098\uc758 \uc0ac\uc9c4\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(I,null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null)),r.a.createElement("section",null,r.a.createElement(j,null)),r.a.createElement("footer",null,r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.18b6b995.chunk.js.map