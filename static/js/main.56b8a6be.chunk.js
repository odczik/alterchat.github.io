(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,a){},111:function(e,a,t){},112:function(e,a,t){},113:function(e,a,t){},159:function(e,a,t){},160:function(e,a,t){},161:function(e,a,t){},163:function(e,a,t){"use strict";t.r(a);var n,c,l,s,r=t(0),m=t.n(r),o=t(62),i=t.n(o),u=t(17),E=t(1),d=function(){return m.a.createElement("div",null,m.a.createElement("section",{className:"hero is-light"},m.a.createElement("div",{className:"hero-body"},m.a.createElement("div",{className:"container"},m.a.createElement("h1",{className:"title"},"Chat"),m.a.createElement("h2",{className:"subtitle"},"Build for ",m.a.createElement("b",null,"Developers")," by ",m.a.createElement("b",null,"Developers"),"...")))))},f=function(){return m.a.createElement("div",null,m.a.createElement("section",{className:"hero is-light"},m.a.createElement("div",{className:"hero-body"},m.a.createElement("div",{className:"container"},m.a.createElement("h1",{className:"title"},"About"),m.a.createElement("h2",{className:"subtitle"},"Simple chatting app.")))))},v=function(){return m.a.createElement("div",null,m.a.createElement("section",{className:"hero is-light"},m.a.createElement("div",{className:"hero-body"},m.a.createElement("div",{className:"container"},m.a.createElement("h1",{className:"title"},"Contact"),m.a.createElement("h2",{className:"subtitle"},"You can contact me on ",m.a.createElement("b",null,"shorchat@gmail.com"))))))},b=t(2),N=(t(73),function(){var e=Object(r.useState)(""),a=Object(b.a)(e,2),t=a[0],n=a[1],c=Object(r.useState)(""),l=Object(b.a)(c,2),s=l[0],o=l[1];Object(r.useEffect)((function(){o("Room 1")}),[]);return m.a.createElement("div",{className:"container mt-6 mb-6"},m.a.createElement("div",{className:"box"},m.a.createElement("h1",{className:"title is-1"},"Join"),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"label"},"Username"),m.a.createElement("div",{className:"control has-icons-left"},m.a.createElement("input",{placeholder:"Name",className:"joinInput input",type:"text",onChange:function(e){return n(e.target.value)}}),m.a.createElement("span",{className:"icon is-small is-left"},m.a.createElement("i",{className:"fas fa-user"})))),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"label"},"Room"),m.a.createElement("div",{className:"control has-icons-left"},m.a.createElement("div",{className:"select"},m.a.createElement("select",{onChange:function(e){o(e.target.value)}},m.a.createElement("option",{value:"Room 1"},"Room 1"),m.a.createElement("option",{value:"Room 2"},"Room 2"),m.a.createElement("option",{value:"Room 3"},"Room 3"),m.a.createElement("option",{value:"Room 4"},"Room 4"),m.a.createElement("option",{value:"Room 5"},"Room 5"))),m.a.createElement("span",{className:"icon is-left"},m.a.createElement("i",{className:"fa fa-door-open"})))),m.a.createElement(u.b,{onClick:function(e){return t&&s?null:e.preventDefault()},to:"./chat?name=".concat(t,"&room=").concat(s)},m.a.createElement("button",{className:"button is-success",type:"submit"},"Join"))))}),h=t(67),p=t(64),g=t.n(p),k=t(12),j=t.n(k),x=(t(111),t(112),function(e){var a=e.room;return m.a.createElement("nav",{className:"infoBar navbar is-info"},m.a.createElement("div",{className:"navbar-brand"},m.a.createElement("h1",{className:"title is-1"},"Chat")),m.a.createElement("div",{className:"navbar-start"},m.a.createElement("div",{className:"navbar-item"},m.a.createElement("h3",{className:"title is-3"},a))),m.a.createElement("div",{className:"navbar-end"},m.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},m.a.createElement("button",{className:"navbar-link"},"Account"),m.a.createElement("div",{className:"navbar-dropdown"},m.a.createElement("a",{href:"/edit",className:"navbar-item"},"Edit"),m.a.createElement("a",{href:"/settings",className:"navbar-item"},"Settings"),m.a.createElement("hr",{className:"navbar-divider"}),m.a.createElement("a",{href:"/logout",className:"navbar-item"},"Log Out"))),m.a.createElement("div",{className:"navbar-item"},m.a.createElement("div",{className:"buttons"},m.a.createElement("div",null,m.a.createElement("a",{href:"/",className:"button is-danger"},"Leave"))))))}),O=(t(113),function(e){var a=e.setMessage,t=e.sendMessage,n=e.message;return m.a.createElement("form",{className:"form block control"},m.a.createElement("div",{className:"field has-addons"},m.a.createElement("div",{className:"control is-expanded inputDiv"},m.a.createElement("input",{className:"input",type:"text",placeholder:"Type a message...",value:n,onChange:function(e){var t=e.target.value;return a(t)},onKeyPress:function(e){return"Enter"===e.key?t(e):null}})),m.a.createElement("div",{className:"control"},m.a.createElement("button",{className:"sendButton button is-success",onClick:function(e){return t(e)}},"Send"))))}),y=t(65),C=t.n(y),w=t(36),S=t.n(w),R=function(e){var a=e.message,t=a.user,n=a.text,c=!1,l=e.name;return t===l&&(c=!0),c?m.a.createElement("div",{className:"content notification mt-1"},m.a.createElement("article",{className:"media"},m.a.createElement("figure",{className:"media-left"},m.a.createElement("p",{className:"image is-64x64"},m.a.createElement("img",{alt:"",src:"https://bulma.io/images/placeholders/128x128.png"}))),m.a.createElement("div",{className:"media-content"},m.a.createElement("div",{className:"content"},m.a.createElement("p",null,m.a.createElement("strong",null,l),m.a.createElement("br",null),S.a.emojify(n)))))):m.a.createElement("div",{className:"content notification mt-1"},m.a.createElement("article",{className:"media"},m.a.createElement("figure",{className:"media-left"},m.a.createElement("p",{className:"image is-64x64"},m.a.createElement("img",{alt:"",src:"https://bulma.io/images/placeholders/128x128.png"}))),m.a.createElement("div",{className:"media-content"},m.a.createElement("div",{className:"content"},m.a.createElement("p",null,m.a.createElement("strong",null,t),m.a.createElement("br",null),S.a.emojify(n))))))},B=(t(159),function(e){var a=e.messages,t=e.name;return m.a.createElement(C.a,{className:"messages"},a.map((function(e,a){return m.a.createElement("div",{key:a},m.a.createElement(R,{message:e,name:t}))})))}),D=(t(160),function(e){var a=e.users;return m.a.createElement("div",{className:"usersContainer"},a?m.a.createElement("div",null,m.a.createElement("h1",{className:"notification title is-4"},m.a.createElement("b",null,"Users Online:")),m.a.createElement("div",{className:"activeContainer"},m.a.createElement("h2",null,a.map((function(e){var a=e.name;return m.a.createElement("div",{className:"notification subtitle is-4",key:a},a)}))))):null)}),A=function(e){var a=e.location,t=Object(r.useState)(""),c=Object(b.a)(t,2),l=c[0],s=c[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],d=i[1],f=Object(r.useState)(""),v=Object(b.a)(f,2),N=v[0],p=v[1],k=Object(r.useState)([]),y=Object(b.a)(k,2),C=y[0],w=y[1],S=Object(r.useState)([]),R=Object(b.a)(S,2),A=R[0],L=R[1],P="https://shorchatserver.herokuapp.com/socket.io/socket.io.js";Object(r.useEffect)((function(){var e=g.a.parse(a.search),t=e.name,c=e.room;return n=j()(P),s(t),d(c),n.emit("join",{name:t,room:c},(function(e){e&&(alert(e),document.location="/")})),function(){n.emit("disconnect"),n.off()}}),[P,a.search]),Object(r.useEffect)((function(){n.on("message",(function(e){L([].concat(Object(h.a)(A),[e]))})),n.on("roomData",(function(e){var a=e.users;p(a)}))}),[A]);return m.a.createElement("div",null,u||l?m.a.createElement("div",{className:"chatContainer"},m.a.createElement("div",null,m.a.createElement("div",{className:"InfoBar"},m.a.createElement(x,{room:u})),m.a.createElement("div",{className:"UsersOnline"},m.a.createElement(D,{users:N})),m.a.createElement("div",{className:"container messagesContainer"},m.a.createElement("div",null,m.a.createElement(B,{messages:A,name:l})),m.a.createElement(O,{message:C,setMessage:w,sendMessage:function(e){if(!C||void 0===C||null===C)return alert("You cannot send blank messages!");e.preventDefault(),n.emit("sendMessage",C,(function(){return w("")}))}})))):m.a.createElement(E.a,{to:"/"}))},L=(t(161),function(){return m.a.createElement("div",{className:"has-background-info has-text-white bottom myFooter"},m.a.createElement("div",{className:"container is-fluid"},m.a.createElement("div",{className:"columns"},m.a.createElement("div",{className:"column"},m.a.createElement("p",null,"\xa9 Copyright | odczik")),m.a.createElement("div",{className:"column has-text-right"},m.a.createElement("a",{className:"copyrighted-badge",title:"Copyrighted.com Registered & Protected",target:"_blank",rel:"noopener noreferrer",href:"https://www.copyrighted.com/website/OeNVDjOLOKRF3F2f"},m.a.createElement("img",{alt:"Copyrighted.com Registered & Protected",border:"0",width:"125",height:"25",srcSet:"https://static.copyrighted.com/badges/125x25/01_2_2x.png 2x",src:"https://static.copyrighted.com/badges/125x25/01_2.png"}))))))}),P=t(7),U=t.n(P),T=function(e){var a=e.setUsername,t=e.setEmail,n=e.setPass,c=e.Register;return m.a.createElement("div",{className:"container mt-6 mb-6"},m.a.createElement("div",{className:"box"},m.a.createElement("h1",{className:"title is-1"},"Register"),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"label"},"Username"),m.a.createElement("div",{className:"control has-icons-left"},m.a.createElement("input",{onChange:function(e){return a(e.target.value)},type:"text",placeholder:"Username",className:"input"}),m.a.createElement("span",{className:"icon is-small is-left"},m.a.createElement("i",{className:"fas fa-user"})))),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"label"},"Email"),m.a.createElement("div",{className:"control has-icons-left"},m.a.createElement("input",{onChange:function(e){return t(e.target.value)},type:"email",placeholder:"Email",className:"input"}),m.a.createElement("span",{className:"icon is-small is-left"},m.a.createElement("i",{className:"fas fa-envelope"})))),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"label"},"Password"),m.a.createElement("div",{className:"control has-icons-left"},m.a.createElement("input",{onChange:function(e){return n(e.target.value)},type:"password",placeholder:"Password",className:"input"}),m.a.createElement("span",{className:"icon is-small is-left"},m.a.createElement("i",{className:"fas fa-lock"})))),m.a.createElement("button",{onClick:c,className:"button is-success"},"Register")))},I=function(e){var a=e.history,t=Object(r.useState)(""),n=Object(b.a)(t,2),l=n[0],s=n[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],E=i[1],d=Object(r.useState)(""),f=Object(b.a)(d,2),v=f[0],N=f[1],h=Object(r.useState)({}),p=Object(b.a)(h,2),g=p[0],k=p[1],x="https://shorchatserver.herokuapp.com/socket.io/socket.io.js";Object(r.useEffect)((function(){return(c=j()(x)).on("confirm-email",(function(e){k(e)})),c.on("successfully-registered",(function(){U.a.fire({icon:"success",title:"Success!",text:"Successfully registered!"}),a.push("/login")})),c.on("errorAlert",(function(e){U.a.fire({icon:"error",title:"Error",text:e})})),function(){c.off()}}),[x]),Object(r.useEffect)((function(){void 0!==g.email&&U.a.fire({icon:"info",title:"Confirmation Token",html:"Your confirmation token has been sent to <b>".concat(g.email,"</b>"),input:"text"}).then((function(e){e.value===g.confToken?c.emit("email-confirmed",g):e.value&&U.a.fire({icon:"error",title:"Error",text:"Invalid confirmation token."})}))}),[g]);return m.a.createElement("div",null,m.a.createElement(T,{setUsername:s,setEmail:E,setPass:N,Register:function(e){e.preventDefault();var a={name:l,email:u,pass:v};c.emit("register",a)}}))},Y=t(37),M=t.n(Y),J=t(66),_=t(4),F=t.n(_),K=function(e){var a=e.history,t=Object(r.useState)(""),n=Object(b.a)(t,2),c=n[0],s=n[1],o=Object(r.useState)(""),i=Object(b.a)(o,2),u=i[0],E=i[1],d=Object(r.useState)(""),f=Object(b.a)(d,2),v=f[0],N=f[1],h="https://shorchatserver.herokuapp.com/socket.io/socket.io.js";Object(r.useEffect)((function(){return(l=j()(h)).on("success",function(){var e=Object(J.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("on"!==v){e.next=7;break}return e.next=3,F.a.set("token",t.token,{expires:30});case 3:return e.next=5,F.a.set("name",t.name,{expires:30});case 5:e.next=11;break;case 7:return e.next=9,F.a.set("token",t.token,{expires:1});case 9:return e.next=11,F.a.set("name",t.name,{expires:1});case 11:a.push("/join");case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()),l.on("failed",(function(e){U.a.fire({icon:"error",title:"Error",text:e})})),function(){l.off()}}),[h]);return m.a.createElement("div",null,m.a.createElement("div",{className:"container mt-6 mb-6"},m.a.createElement("div",{className:"box"},m.a.createElement("h1",{className:"title is-1"},"Login"),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"label"},"Username"),m.a.createElement("div",{className:"control has-icons-left"},m.a.createElement("input",{onChange:function(e){return s(e.target.value)},placeholder:"Username",className:"input"}),m.a.createElement("span",{className:"icon is-small is-left"},m.a.createElement("i",{className:"fas fa-user"})))),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"label"},"Password"),m.a.createElement("div",{className:"control has-icons-left"},m.a.createElement("input",{onChange:function(e){return E(e.target.value)},type:"password",placeholder:"Password",className:"input"}),m.a.createElement("span",{className:"icon is-small is-left"},m.a.createElement("i",{className:"fas fa-lock"})))),m.a.createElement("div",{className:"field"},m.a.createElement("label",{className:"checkbox"},m.a.createElement("input",{onChange:function(e){return N(e.target.value)},type:"checkbox"}),"\xa0Remember me")),m.a.createElement("button",{onClick:function(e){var a={name:c,pass:u};l.emit("login",a)},className:"button is-success"},"Login"))))},z=function(e){var a=e.history,t=F.a.get("token");return m.a.createElement("div",null,m.a.createElement("nav",{className:"navbar is-light"},m.a.createElement("div",{className:"navbar-brand"},m.a.createElement("h1",{className:"title is-1"},"Shor Chat")),m.a.createElement("div",{className:"navbar-start"},m.a.createElement("a",{href:"/",className:"navbar-item"},"Home"),m.a.createElement("a",{href:"/about",className:"navbar-item"},"About"),m.a.createElement("a",{href:"/contact",className:"navbar-item"},"Contact")),m.a.createElement("div",{className:"navbar-end"},void 0===t?m.a.createElement("div",{className:"navbar-item"},m.a.createElement("div",{className:"buttons"},m.a.createElement("a",{href:"/login",className:"button is-light"},"Log in"),m.a.createElement("a",{href:"/register",className:"button is-info"},m.a.createElement("strong",null,"Sign up")))):m.a.createElement("div",{className:"navbar-item"},m.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},m.a.createElement("a",{href:"/account",className:"navbar-link"},"Account"),m.a.createElement("div",{className:"navbar-dropdown"},m.a.createElement("a",{href:"/account/edit",className:"navbar-item"},"Edit"),m.a.createElement("a",{href:"/account/report",className:"navbar-item"},"Report an issue"),m.a.createElement("a",{href:"/account/support",className:"navbar-item"},"Support"),m.a.createElement("hr",{className:"navbar-divider"}),m.a.createElement("a",{href:"/",onClick:function(){F.a.remove("token"),F.a.remove("name"),a.push("/")},className:"navbar-item"},"Log out"))),m.a.createElement("div",{className:"buttons"},m.a.createElement("a",{href:"/join",className:"button is-light"},"Join"))))))},H=function(e){var a=e.history,t=Object(r.useState)({}),n=Object(b.a)(t,2),c=n[0],l=n[1],o="https://shorchatserver.herokuapp.com/socket.io/socket.io.js",i=function(){F.a.remove("token"),F.a.remove("name"),a.push("/")};return Object(r.useEffect)((function(){return(s=j()(o)).emit("get-account-data",F.a.get("token")),s.on("account-data",(function(e){l(e)})),s.on("confirm-delete",(function(e){U.a.fire({icon:"info",title:"Confirmation",html:"Confirmation token has been sent to <b>".concat(e.email,"</b>"),input:"text",showCancelButton:!0,confirmButtonText:"Yes",confirmButtonColor:"#d33",cancelButtonColor:"#05A600"}).then((function(a){a.value===e.confToken?s.emit("delete-account-confirmed",F.a.get("token")):a.value&&U.a.fire({icon:"error",title:"Error",text:"Invalid token!"})}))})),s.on("account-deleted",(function(){U.a.fire({icon:"success",title:"Deleted!",text:"Your account has been successfully deleted!"}),i()})),function(){s.off()}}),[o]),m.a.createElement("div",{className:"container mt-6 mb-6"},null!==c?m.a.createElement("div",{className:"box"},m.a.createElement("h1",{className:"title is-1"},"Account Information"),m.a.createElement("div",{className:"block"},m.a.createElement("div",{className:"title"},"Username:"),m.a.createElement("div",{className:"box"},m.a.createElement("h4",{className:"subtitle is-4"}," ",c.name))),m.a.createElement("div",{className:"block"},m.a.createElement("div",{className:"title"},"Email:"),m.a.createElement("div",{className:"box"},m.a.createElement("h4",{className:"subtitle is-4"}," ",c.email))),m.a.createElement("div",{className:"block"},m.a.createElement("div",{className:"title"},"Date Created:"),m.a.createElement("div",{className:"box"},m.a.createElement("h4",{className:"subtitle is-4"},c.dateCreated))),m.a.createElement("div",{className:"block"},m.a.createElement("div",{className:"title"},"ID:"),m.a.createElement("div",{className:"box"},m.a.createElement("h4",{className:"subtitle is-4"}," ",c.id))),m.a.createElement("div",{className:"buttons"},m.a.createElement("button",{onClick:i,className:"button is-danger"},"Log out"),m.a.createElement("button",{onClick:function(){U.a.fire({icon:"warning",title:"Are you sure?",html:"Are you sure you want to <b>PERMANENTLY DELETE</b> your account?",showCancelButton:!0,confirmButtonText:"Yes",confirmButtonColor:"#d33",cancelButtonColor:"#05A600"}).then((function(e){e.isConfirmed&&s.emit("delete-account",F.a.get("token"))}))},className:"button is-danger"},"Delete Account"))):m.a.createElement(E.a,{to:"/"}))};var V=function(){return m.a.createElement("div",null,m.a.createElement(z,null),m.a.createElement(u.a,null,m.a.createElement(E.b,{path:"/",exact:!0,component:d}),m.a.createElement(E.b,{path:"/account",exact:!0,component:H}),m.a.createElement(E.b,{path:"/about",component:f}),m.a.createElement(E.b,{path:"/contact",component:v}),m.a.createElement(E.b,{path:"/join",component:N}),m.a.createElement(E.b,{path:"/register",exact:!0,component:I}),m.a.createElement(E.b,{path:"/login",exact:!0,component:K}),m.a.createElement(E.b,{path:"/chat",component:A})),m.a.createElement(L,null))};i.a.render(m.a.createElement(V,null),document.getElementById("root"))},68:function(e,a,t){e.exports=t(163)},73:function(e,a,t){}},[[68,1,2]]]);
//# sourceMappingURL=main.56b8a6be.chunk.js.map