"use strict";(self["webpackChunkgestion_proyectos"]=self["webpackChunkgestion_proyectos"]||[]).push([[434],{434:function(e,a,l){l.r(a),l.d(a,{default:function(){return k}});var s=l(473),o=l(887);const r=e=>((0,s.dD)("data-v-646c8c48"),e=e(),(0,s.Cn)(),e),i={class:"header"},n=r((()=>(0,s._)("div",{class:"brand-text"},"OrganizeHub",-1))),t={class:"login-container"},d=r((()=>(0,s._)("h2",null,"Login",-1))),c={key:0,class:"feedback-message"},m={class:"signup-link"};function u(e,a,l,r,u,g){const p=(0,s.up)("router-link"),f=(0,s.up)("el-input"),h=(0,s.up)("el-form-item"),w=(0,s.up)("el-button"),k=(0,s.up)("el-form"),b=(0,s.up)("el-card");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("header",i,[(0,s.Wm)(p,{to:"/",class:"brand"},{default:(0,s.w5)((()=>[n])),_:1})]),(0,s._)("div",t,[(0,s.Wm)(b,{class:"login-card"},{default:(0,s.w5)((()=>[d,(0,s.Wm)(k,{ref:"loginForm",model:u.loginForm,"label-width":"80px"},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{label:"Email",prop:"email",error:u.emailError},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{modelValue:u.loginForm.email,"onUpdate:modelValue":a[0]||(a[0]=e=>u.loginForm.email=e),placeholder:"Enter your email",onInput:e.validateEmail},null,8,["modelValue","onInput"])])),_:1},8,["error"]),(0,s.Wm)(h,{label:"Password",prop:"password"},{default:(0,s.w5)((()=>[(0,s.Wm)(f,{type:"password",modelValue:u.loginForm.password,"onUpdate:modelValue":a[1]||(a[1]=e=>u.loginForm.password=e),placeholder:"Enter your password"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(h,null,{default:(0,s.w5)((()=>[(0,s.Wm)(w,{type:"primary",onClick:g.login},{default:(0,s.w5)((()=>[(0,s.Uk)("Login")])),_:1},8,["onClick"])])),_:1}),u.feedbackMessage?((0,s.wg)(),(0,s.iD)("div",c,(0,o.zw)(u.feedbackMessage),1)):(0,s.kq)("",!0)])),_:1},8,["model"]),(0,s._)("p",m,[(0,s.Uk)("Not signed in? "),(0,s.Wm)(p,{to:"/signin"},{default:(0,s.w5)((()=>[(0,s.Uk)("Sign in here")])),_:1})])])),_:1})])])}var g=l(859),p=l(180),f={data(){return{loginForm:{email:"",password:""},emailError:"",feedbackMessage:""}},methods:{async login(){if(this.isValidEmail(this.loginForm.email))try{const e=await g.Z.post("http://localhost:3000/login",{email:this.loginForm.email,password:this.loginForm.password});if(e.data.success){const a=e.data.user;a.verified?(this.$store.commit("setUser",{email:this.loginForm.email}),this.feedbackMessage="Login successful!",p.Z.push("/dashboard")):this.feedbackMessage="Please verify your email before logging in."}else this.feedbackMessage="Incorrect email or password. Please try again."}catch(e){console.error("Login error:",e),this.feedbackMessage="An error occurred during login."}else this.feedbackMessage="Invalid email. Please check your input."},isValidEmail(e){const a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return a.test(e)}}},h=l(312);const w=(0,h.Z)(f,[["render",u],["__scopeId","data-v-646c8c48"]]);var k=w}}]);
//# sourceMappingURL=434.871bf4b1.js.map