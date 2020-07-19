(this["webpackJsonpreact-starter-template"]=this["webpackJsonpreact-starter-template"]||[]).push([[0],{207:function(e,a,t){},216:function(e,a,t){e.exports={skipLink:"navbar_skipLink__3TdC_"}},228:function(e,a,t){e.exports=t(424)},233:function(e,a,t){},386:function(e,a,t){},424:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),o=t.n(l),c=t(28),s=(t(233),t(216)),i=t.n(s),m=t(20),d=t(7),E=t(47),u=t(427);var b=()=>{const e=Object(m.useFirebase)(),a=Object(c.f)(),t=Object(E.b)(e=>!e.firebase.auth.isEmpty);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:i.a.skipLink},r.a.createElement("a",{href:"#mainContent"},"Skip to Main Content")),r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light border-bottom justify-content-between"},r.a.createElement(d.b,{className:"navbar-brand",to:"/"},"react_starter_template"),r.a.createElement("div",{className:"navbar-nav"},r.a.createElement(d.b,{to:"/home",className:"nav-item nav-link active"},"Home"),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,{to:"/admin",className:"nav-item nav-link "},"Account"),r.a.createElement(u.a,{variant:"outline-secondary",className:"nav-item nav-link ",onClick:()=>{e.auth().signOut().then((function(){console.log("signed out"),a.push("/sign-in")})).catch((function(e){console.log(e)}))}},"Logout")):r.a.createElement(d.b,{to:"/sign-in"},"Sign In"))))};var p=()=>r.a.createElement("main",{id:"mainContent"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center mt-5 p-0"},r.a.createElement("h3",null,"Home")))),f=t(15),h=t(225);var g=function(e){let a=e.role,t=e.children,l=Object(h.a)(e,["role","children"]);const o=Object(E.b)(e=>e.firebase.auth),s=Object(n.useState)(!0),i=Object(f.a)(s,2),m=i[0],d=i[1];return void 0===a&&(a=!1),r.a.createElement(c.a,Object.assign({},l,{render:e=>o.isEmpty?m?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"alert alert-danger login-alert",role:"alert"},"Please login first!",r.a.createElement("button",{className:"btn-success alert-close-btn",onClick:()=>d(!1)},"X"))):r.a.createElement(p,e):t}))},v=t(429),_=t(428);var A=({heading:e,body:a,type:t,small:l,variant:o,confirmButtonText:c,handleConfirm:s,style:i})=>{const m=Object(n.useState)(!0),d=Object(f.a)(m,2),E=d[0],b=d[1];return E&&("alert"===t?r.a.createElement(v.a,{variant:o,onClose:()=>b(!1),style:i,dismissible:!0},r.a.createElement(v.a.Heading,null,e),r.a.createElement("p",null,a),c&&r.a.createElement(u.a,{variant:"outline-danger",onClick:s},c," ")):"toast"===t&&r.a.createElement(_.a,{onClose:()=>b(!1),style:i},r.a.createElement(_.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},e.toUpperCase()),r.a.createElement("small",null,l)),r.a.createElement(_.a.Body,null,a)))};t(207);var N=()=>{const e=Object(m.useFirebase)(),a=Object(c.f)(),t=Object(n.useState)(""),l=Object(f.a)(t,2),o=l[0],s=l[1],i=Object(n.useState)(""),E=Object(f.a)(i,2),u=E[0],b=E[1],p=Object(n.useState)([]),h=Object(f.a)(p,2),g=h[0],v=h[1],_=t=>{let n=o.length>=1?o:"",r=u.length>=1?u:"";e.login({provider:"email"===t?null:t,type:"popup",email:n,password:r}).then(()=>{a.push("/admin")}).catch(e=>{e.code.includes("account-exists")&&v([...g,"Account Exists"])})};return r.a.createElement("div",{className:"login__page"},g.length>=1&&r.a.createElement(A,{type:"alert",variant:"danger",heading:"Error",body:g.map((e,a)=>r.a.createElement("div",{key:a},e))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-4 col-md-offset-4"},r.a.createElement("div",{className:"login__card"},r.a.createElement("div",{className:"card-block"},r.a.createElement("form",{name:"userform",method:"post"},r.a.createElement("h3",null,"Log In "),r.a.createElement(d.b,{to:"sign-up"},"Sign up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email",name:"email",required:!0,onChange:e=>s(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",required:!0,onChange:e=>b(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-primary btn-block",onClick:e=>{e.preventDefault(),_("email")}},"Login with Email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("facebook")}},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),"Login with Facebook"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("twitter")}},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),"Login with Twitter"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("github")}},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}),"Login with Github"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("google")}},r.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"}),"Login with Google")))))))))};var w=()=>{const e=Object(m.useFirebase)(),a=Object(c.f)(),t=Object(n.useState)(""),l=Object(f.a)(t,2),o=l[0],s=l[1],i=Object(n.useState)(""),E=Object(f.a)(i,2),u=E[0],b=E[1],p=Object(n.useState)([]),h=Object(f.a)(p,2),g=h[0],v=h[1],_=t=>{let n=o.length>=1?o:"",r=u.length>=1?u:"";"email"===t?e.createUser({email:o,password:u}).then(()=>{a.push("/home")}).catch(e=>{e.code.includes("account-exists")&&v([...g,"Account Exists"])}):e.login({provider:"email"===t?null:t,type:"popup",email:n,password:r}).then(()=>{a.push("/home")}).catch(e=>{e.code.includes("account-exists")&&v([...g,"Account Exists"])})};return r.a.createElement("div",{className:"login__page"},g.length>=1&&r.a.createElement(A,{type:"alert",variant:"danger",heading:"Error",body:g.map((e,a)=>r.a.createElement("div",{key:a},e))}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card col-md-4 col-md-offset-4"},r.a.createElement("div",{className:"login__card"},r.a.createElement("div",{className:"card-block"},r.a.createElement("form",{name:"userform",method:"post"},r.a.createElement("h3",null,"Sign up "),r.a.createElement(d.b,{to:"sign-in"},"Log In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1",placeholder:"Email",name:"email",required:!0,onChange:e=>s(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",required:!0,onChange:e=>b(e.target.value)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-primary btn-block",onClick:e=>{e.preventDefault(),_("email")}},"Login with Email")),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"buton",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("facebook")}},r.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}),"Login with Facebook"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("twitter")}},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}),"Login with Twitter"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("github")}},r.a.createElement("i",{className:"fa fa-github","aria-hidden":"true"}),"Login with Github"),r.a.createElement("button",{type:"button",className:"btn btn-block",onClick:e=>{e.preventDefault(),_("google")}},r.a.createElement("i",{className:"fa fa-google","aria-hidden":"true"}),"Login with Google")))))))))};var k=()=>r.a.createElement("div",{className:""},"Admin");var P=()=>r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(c.c,null,r.a.createElement(g,{exact:!0,path:"/admin"},r.a.createElement(k,null)),r.a.createElement(c.a,{path:"/home",component:p}),r.a.createElement(c.a,{path:"/sign-in",component:N}),r.a.createElement(c.a,{path:"/sign-up",component:w})));const S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const a=e.installing;a.onstatechange=()=>{"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(e=>{console.error("Error during service worker registration:",e)})}t(386);var O=()=>r.a.createElement("div",{id:"notfound"},r.a.createElement("div",{className:"notfound"},r.a.createElement("div",{className:"notfound-404"},r.a.createElement("h1",null,"404")),r.a.createElement("h2",null,"Oops, The Page you are looking for can't be found!"),r.a.createElement(d.b,{to:"/"},r.a.createElement("span",{className:"arrow"}),"Return To Homepage")));class R extends r.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,a){}render(){return this.state.hasError?r.a.createElement(O,null):this.props.children}}var I=Object(c.g)(R),T=t(89),y=t(27),j=t(221);const D={};var F=Object(y.c)({errors:function(e=D,a){switch(a.type){case"GET_ERRORS":return a.payload;default:return e}},firebase:m.firebaseReducer,firestore:T.firestoreReducer}),B=t(222);const L=Object(B.createLogger)(),x=[j.a,L];var G=Object(y.e)(F,{},Object(y.d)(Object(y.a)(...x))),U=(t(418),t(37)),H=t.n(U),K=(t(425),t(419),t(421),{apiKey:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",authDomain:"date-me-3d9bd.firebaseapp.com",databaseURL:"https://date-me-3d9bd.firebaseio.com",projectId:"date-me-3d9bd",storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/react-starter-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",REACT_APP_FIREBASE_AUTH_DOMAIN:"date-me-3d9bd.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://date-me-3d9bd.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"date-me-3d9bd",REACT_APP_FIREBASE_STORAGE_BUCKET:"date-me-3d9bd.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"152433085453",REACT_APP_FIREBASE_APP_ID:"1:152433085453:web:2f1f5f60c0e996addbd944"}).REACT_APP_FIREBASE_REACT_APP_STORAGE_BUCKET,messagingSenderId:"152433085453",appId:"1:152433085453:web:2f1f5f60c0e996addbd944",measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/react-starter-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_FIREBASE_API_KEY:"AIzaSyAGaNeswxDzd4b4dGfjGfpcckeHkqXMehk",REACT_APP_FIREBASE_AUTH_DOMAIN:"date-me-3d9bd.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://date-me-3d9bd.firebaseio.com",REACT_APP_FIREBASE_PROJECT_ID:"date-me-3d9bd",REACT_APP_FIREBASE_STORAGE_BUCKET:"date-me-3d9bd.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"152433085453",REACT_APP_FIREBASE_APP_ID:"1:152433085453:web:2f1f5f60c0e996addbd944"}).REACT_APP_FIREBASE_MEASUREMENT_ID});H.a.initializeApp(K);H.a.auth(),H.a.firestore(),H.a.storage();const M={firebase:H.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:G.dispatch,createFirestoreInstance:T.createFirestoreInstance};o.a.render(r.a.createElement(E.a,{store:G},r.a.createElement(m.ReactReduxFirebaseProvider,M,r.a.createElement(d.a,{basename:"react-starter-template"},r.a.createElement(I,null,r.a.createElement(P,null))))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/react-starter-template",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="".concat("/react-starter-template","/service-worker.js");S?function(e){fetch(e).then(a=>{404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):C(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(e):C(e)})}}()}},[[228,1,2]]]);
//# sourceMappingURL=main.c3a0e4b8.chunk.js.map