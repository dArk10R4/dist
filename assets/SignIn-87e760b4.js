import{_ as S,u as b,e as M,z as x,g,o as d,c,a as s,t as n,w as I,j as i,i as h,v,b as m,k as f,A as w,l as V,p as B,d as C}from"./index-a881bc94.js";const N="/assets/v-invest-795bb8a7.png";const k={setup(){const e=b();return M(()=>{e.initializeLocale()}),{translate:r=>V(()=>e.translate(r)).value}},data(){return{username:"",password:"",errorMessages:{username:"",password:""}}},methods:{async login(){const e=x(),o={username:this.username,password:this.password};try{await e.login(o)}catch(r){console.log(r),r.response.status===422&&(this.errorMessages=r.response.data)}}}},y=e=>(B("data-v-90d542d5"),e=e(),C(),e),z={class:"login"},A={class:"text"},D=y(()=>s("div",{class:"image"},[s("img",{src:N,alt:""})],-1)),L={class:"about"},U={class:"login-form"},j={class:"input-field"},E={for:"username"},F={class:"input"},T=["placeholder"],q={key:0,class:"error"},G={class:"input-field"},H={for:"password"},J={class:"input"},K=["placeholder"],O={key:0,class:"error"},P={class:"register"},Q={class:"link"},R=y(()=>s("span",{class:"link"},"Forget password?",-1));function W(e,o,r,t,a,_){const p=g("ion-icon"),u=g("router-link");return d(),c("main",null,[s("div",z,[s("div",A,[D,s("div",L,[s("p",null,n(t.translate("login").value[0]),1)])]),s("div",U,[s("h2",null,n(t.translate("login").value[1]),1),s("form",{onSubmit:o[2]||(o[2]=I((...l)=>_.login&&_.login(...l),["prevent"]))},[s("div",j,[s("label",E,[s("span",null,n(t.translate("login").value[2]),1)]),s("div",F,[i(p,{name:"person-outline"}),h(s("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=l=>a.username=l),placeholder:t.translate("login").value[4]},null,8,T),[[v,a.username]]),a.errorMessages.password?(d(),c("p",q,n(a.errorMessages.password),1)):m("",!0)])]),s("div",G,[s("label",H,[s("span",null,n(t.translate("login").value[3]),1)]),s("div",J,[i(p,{name:"key-outline"}),h(s("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=l=>a.password=l),placeholder:t.translate("login").value[5]},null,8,K),[[v,a.password]]),a.errorMessages.password?(d(),c("p",O,n(a.errorMessages.password),1)):m("",!0)])]),s("button",null,n(t.translate("login").value[6]),1),s("div",P,[s("span",null,n(t.translate("login").value[7]),1),i(u,{to:"/auth/signup"},{default:f(()=>[s("span",Q,n(t.translate("login").value[8]),1)]),_:1})]),i(u,{to:"/auth/forgetpassword"},{default:f(()=>[R]),_:1})],32)])])])}typeof w=="function"&&w(k);const Y=S(k,[["render",W],["__scopeId","data-v-90d542d5"]]);export{Y as default};
