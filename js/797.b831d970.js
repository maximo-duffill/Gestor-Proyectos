"use strict";(self["webpackChunkgestion_proyectos"]=self["webpackChunkgestion_proyectos"]||[]).push([[797],{797:function(e,t,n){n.r(t),n.d(t,{default:function(){return kt}});var r=n(473);function a(e,t,n,a,o,i){const u=(0,r.up)("project"),s=(0,r.up)("project-table");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(u),(0,r.Wm)(s)])}var o=n(887),i=n(197);const u=e=>((0,r.dD)("data-v-47b4ce0f"),e=e(),(0,r.Cn)(),e),s={class:"header"},d={class:"header-buttons"},c={key:0,class:"user-info"},l={class:"user-info-text"},h=u((()=>(0,r._)("h1",null,"Project Management",-1))),m={class:"project-form"},f=u((()=>(0,r._)("h2",null,"Add Project",-1))),g={class:"form-group"},v=u((()=>(0,r._)("label",{for:"projectName"},"Project Name:",-1))),w={class:"form-group"},p=u((()=>(0,r._)("label",{for:"description"},"Description:",-1))),b={class:"form-group"},y=u((()=>(0,r._)("label",{for:"startDate"},"Starting Date:",-1))),D={class:"form-group"},T=u((()=>(0,r._)("label",{for:"endDate"},"Ending Date:",-1))),M={key:0,class:"feedback-message"},C={class:"form-group"};function k(e,t,n,a,u,k){const P=(0,r.up)("router-link"),j=(0,r.up)("el-button"),U=(0,r.up)("el-input"),S=(0,r.up)("el-date-picker"),x=(0,r.up)("el-card");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("header",s,[(0,r._)("div",d,[(0,r.Wm)(P,{to:"/",class:"brand"},{default:(0,r.w5)((()=>[(0,r.Uk)("OrganizeHub")])),_:1}),e.loggedInUser?((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",l,"Logged in as "+(0,o.zw)(e.loggedInUser.email),1),(0,r.Wm)(j,{type:"primary",onClick:k.logout},{default:(0,r.w5)((()=>[(0,r.Uk)("Logout")])),_:1},8,["onClick"])])):(0,r.kq)("",!0)]),h]),(0,r.Wm)(x,{class:"project-card"},{default:(0,r.w5)((()=>[(0,r._)("div",m,[f,(0,r._)("form",{onSubmit:t[4]||(t[4]=(0,i.iM)(((...e)=>k.addProject&&k.addProject(...e)),["prevent"])),class:"addProject"},[(0,r._)("div",g,[v,(0,r.Wm)(U,{modelValue:u.projectName,"onUpdate:modelValue":t[0]||(t[0]=e=>u.projectName=e),id:"projectName",placeholder:"Enter Project Name",required:""},null,8,["modelValue"])]),(0,r._)("div",w,[p,(0,r.Wm)(U,{modelValue:u.description,"onUpdate:modelValue":t[1]||(t[1]=e=>u.description=e),id:"description",type:"textarea",placeholder:"Enter Project Description",required:""},null,8,["modelValue"])]),(0,r._)("div",b,[y,(0,r.Wm)(S,{modelValue:u.startDate,"onUpdate:modelValue":t[2]||(t[2]=e=>u.startDate=e),id:"startDate",type:"date",placeholder:"Select Starting Date",required:""},null,8,["modelValue"])]),(0,r._)("div",D,[T,(0,r.Wm)(S,{modelValue:u.endDate,"onUpdate:modelValue":t[3]||(t[3]=e=>u.endDate=e),id:"endDate",type:"date",placeholder:"Select Ending Date",required:""},null,8,["modelValue"]),u.feedbackMessage?((0,r.wg)(),(0,r.iD)("div",M,(0,o.zw)(u.feedbackMessage),1)):(0,r.kq)("",!0)]),(0,r._)("div",C,[(0,r.Wm)(j,{type:"primary",round:"",onClick:k.addProject},{default:(0,r.w5)((()=>[(0,r.Uk)("Add")])),_:1},8,["onClick"])])],32)])])),_:1})])}var P=n(859),j=n(299),U={computed:{...(0,j.Se)(["loggedInUser"])},created(){const e=JSON.parse(localStorage.getItem("user"));e?this.$store.commit("setUser",e):this.$router.push("/")},data(){return{projectName:"",description:"",startDate:"",endDate:"",feedbackMessage:""}},methods:{async addProject(){if(""!==this.projectName.trim()){if(new Date(this.startDate)>new Date(this.endDate))return void(this.feedbackMessage="Starting date cannot be later than the ending date.");const t={name:this.projectName,description:this.description,startDate:this.startDate,endDate:this.endDate};try{const e=await P.Z.post("http://localhost:3000/projects",t);e.data.success?console.log("Project added successfully!"):console.error("Failed to add project.")}catch(e){console.error("Error adding project:",e)}finally{this.feedbackMessage=""}}},async logout(){this.$store.commit("clearUser"),this.$router.push("/")}}},S=n(312);const x=(0,S.Z)(U,[["render",k],["__scopeId","data-v-47b4ce0f"]]);var W=x;const E=e=>((0,r.dD)("data-v-095aaef8"),e=e(),(0,r.Cn)(),e),_=E((()=>(0,r._)("header",{class:"header"},[(0,r._)("h1",null,"Project List")],-1))),N={key:1};function Y(e,t,n,a,o,i){const u=(0,r.up)("el-table-column"),s=(0,r.up)("el-button"),d=(0,r.up)("el-table");return(0,r.wg)(),(0,r.iD)("div",null,[_,o.projects.length>0?((0,r.wg)(),(0,r.j4)(d,{key:0,data:o.projects,height:o.tableHeight,style:{width:"100%"}},{default:(0,r.w5)((()=>[(0,r.Wm)(u,{prop:"project_id",label:"Project id"}),(0,r.Wm)(u,{prop:"name",label:"Project Name"}),(0,r.Wm)(u,{prop:"description",label:"Description"}),(0,r.Wm)(u,{prop:"start_date",label:"Starting Date"}),(0,r.Wm)(u,{prop:"end_date",label:"Ending Date"}),(0,r.Wm)(u,{label:"Actions"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{type:"danger",onClick:t[0]||(t[0]=e=>i.removeProject(o.projects))},{default:(0,r.w5)((()=>[(0,r.Uk)("Remove")])),_:1})])),_:1})])),_:1},8,["data","height"])):((0,r.wg)(),(0,r.iD)("div",N," Loading projects... "))])}function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function q(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function H(e){return q(1,arguments),e instanceof Date||"object"===O(e)&&"[object Date]"===Object.prototype.toString.call(e)}function z(e){q(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===O(e)&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function F(e){if(q(1,arguments),!H(e)&&"number"!==typeof e)return!1;var t=z(e);return!isNaN(Number(t))}function L(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function X(e,t){q(2,arguments);var n=z(e).getTime(),r=L(t);return new Date(n+r)}function Q(e,t){q(2,arguments);var n=L(t);return X(e,-n)}var G=864e5;function A(e){q(1,arguments);var t=z(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/G)+1}function B(e){q(1,arguments);var t=1,n=z(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function V(e){q(1,arguments);var t=z(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=B(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=B(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function R(e){q(1,arguments);var t=V(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=B(n);return r}var I=6048e5;function J(e){q(1,arguments);var t=z(e),n=B(t).getTime()-R(t).getTime();return Math.round(n/I)+1}var Z={};function $(){return Z}function K(e,t){var n,r,a,o,i,u,s,d;q(1,arguments);var c=$(),l=L(null!==(n=null!==(r=null!==(a=null!==(o=null===t||void 0===t?void 0:t.weekStartsOn)&&void 0!==o?o:null===t||void 0===t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:c.weekStartsOn)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=z(e),m=h.getUTCDay(),f=(m<l?7:0)+m-l;return h.setUTCDate(h.getUTCDate()-f),h.setUTCHours(0,0,0,0),h}function ee(e,t){var n,r,a,o,i,u,s,d;q(1,arguments);var c=z(e),l=c.getUTCFullYear(),h=$(),m=L(null!==(n=null!==(r=null!==(a=null!==(o=null===t||void 0===t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null===t||void 0===t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:h.firstWeekContainsDate)&&void 0!==r?r:null===(s=h.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=new Date(0);f.setUTCFullYear(l+1,0,m),f.setUTCHours(0,0,0,0);var g=K(f,t),v=new Date(0);v.setUTCFullYear(l,0,m),v.setUTCHours(0,0,0,0);var w=K(v,t);return c.getTime()>=g.getTime()?l+1:c.getTime()>=w.getTime()?l:l-1}function te(e,t){var n,r,a,o,i,u,s,d;q(1,arguments);var c=$(),l=L(null!==(n=null!==(r=null!==(a=null!==(o=null===t||void 0===t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null===t||void 0===t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:c.firstWeekContainsDate)&&void 0!==r?r:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),h=ee(e,t),m=new Date(0);m.setUTCFullYear(h,0,l),m.setUTCHours(0,0,0,0);var f=K(m,t);return f}var ne=6048e5;function re(e,t){q(1,arguments);var n=z(e),r=K(n,t).getTime()-te(n,t).getTime();return Math.round(r/ne)+1}function ae(e,t){var n=e<0?"-":"",r=Math.abs(e).toString();while(r.length<t)r="0"+r;return n+r}var oe={y:function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return ae("yy"===t?r%100:r,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):ae(n+1,2)},d:function(e,t){return ae(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return ae(e.getUTCHours()%12||12,t.length)},H:function(e,t){return ae(e.getUTCHours(),t.length)},m:function(e,t){return ae(e.getUTCMinutes(),t.length)},s:function(e,t){return ae(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,r=e.getUTCMilliseconds(),a=Math.floor(r*Math.pow(10,n-3));return ae(a,t.length)}},ie=oe,ue={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},se={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return ie.y(e,t)},Y:function(e,t,n,r){var a=ee(e,r),o=a>0?a:1-a;if("YY"===t){var i=o%100;return ae(i,2)}return"Yo"===t?n.ordinalNumber(o,{unit:"year"}):ae(o,t.length)},R:function(e,t){var n=V(e);return ae(n,t.length)},u:function(e,t){var n=e.getUTCFullYear();return ae(n,t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return ae(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return ae(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return ie.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return ae(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=re(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):ae(a,t.length)},I:function(e,t,n){var r=J(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):ae(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):ie.d(e,t)},D:function(e,t,n){var r=A(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):ae(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return ae(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return ae(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return ae(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours(),a=r/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?ue.noon:0===a?ue.midnight:a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?ue.evening:a>=12?ue.afternoon:a>=4?ue.morning:ue.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return ie.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):ie.H(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):ae(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):ae(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):ie.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):ie.s(e,t)},S:function(e,t){return ie.S(e,t)},X:function(e,t,n,r){var a=r._originalDate||e,o=a.getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return ce(o);case"XXXX":case"XX":return le(o);case"XXXXX":case"XXX":default:return le(o,":")}},x:function(e,t,n,r){var a=r._originalDate||e,o=a.getTimezoneOffset();switch(t){case"x":return ce(o);case"xxxx":case"xx":return le(o);case"xxxxx":case"xxx":default:return le(o,":")}},O:function(e,t,n,r){var a=r._originalDate||e,o=a.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+de(o,":");case"OOOO":default:return"GMT"+le(o,":")}},z:function(e,t,n,r){var a=r._originalDate||e,o=a.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+de(o,":");case"zzzz":default:return"GMT"+le(o,":")}},t:function(e,t,n,r){var a=r._originalDate||e,o=Math.floor(a.getTime()/1e3);return ae(o,t.length)},T:function(e,t,n,r){var a=r._originalDate||e,o=a.getTime();return ae(o,t.length)}};function de(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+ae(o,2)}function ce(e,t){if(e%60===0){var n=e>0?"-":"+";return n+ae(Math.abs(e)/60,2)}return le(e,t)}function le(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e),o=ae(Math.floor(a/60),2),i=ae(a%60,2);return r+o+n+i}var he=se,me=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},fe=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},ge=function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return me(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"});break}return n.replace("{{date}}",me(a,t)).replace("{{time}}",fe(o,t))},ve={p:fe,P:ge},we=ve;function pe(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var be=["D","DD"],ye=["YY","YYYY"];function De(e){return-1!==be.indexOf(e)}function Te(e){return-1!==ye.indexOf(e)}function Me(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Ce={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ke=function(e,t,n){var r,a=Ce[e];return r="string"===typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},Pe=ke;function je(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Ue={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Se={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},xe={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},We={date:je({formats:Ue,defaultWidth:"full"}),time:je({formats:Se,defaultWidth:"full"}),dateTime:je({formats:xe,defaultWidth:"full"})},Ee=We,_e={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Ne=function(e,t,n,r){return _e[e]},Ye=Ne;function Oe(e){return function(t,n){var r,a=null!==n&&void 0!==n&&n.context?String(n.context):"standalone";if("formatting"===a&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=null!==n&&void 0!==n&&n.width?String(n.width):o;r=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,s=null!==n&&void 0!==n&&n.width?String(n.width):e.defaultWidth;r=e.values[s]||e.values[u]}var d=e.argumentCallback?e.argumentCallback(t):t;return r[d]}}var qe={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},He={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},ze={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Fe={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Le={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Xe={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Qe=function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Ge={ordinalNumber:Qe,era:Oe({values:qe,defaultWidth:"wide"}),quarter:Oe({values:He,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:Oe({values:ze,defaultWidth:"wide"}),day:Oe({values:Fe,defaultWidth:"wide"}),dayPeriod:Oe({values:Le,defaultWidth:"wide",formattingValues:Xe,defaultFormattingWidth:"wide"})},Ae=Ge;function Be(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(s)?Re(s,(function(e){return e.test(u)})):Ve(s,(function(e){return e.test(u)}));i=e.valueCallback?e.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var c=t.slice(u.length);return{value:i,rest:c}}}function Ve(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function Re(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function Ie(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var a=r[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];i=n.valueCallback?n.valueCallback(i):i;var u=t.slice(a.length);return{value:i,rest:u}}}var Je=/^(\d+)(th|st|nd|rd)?/i,Ze=/\d+/i,$e={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Ke={any:[/^b/i,/^(a|c)/i]},et={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},tt={any:[/1/i,/2/i,/3/i,/4/i]},nt={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},rt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},at={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ot={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},it={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},ut={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},st={ordinalNumber:Ie({matchPattern:Je,parsePattern:Ze,valueCallback:function(e){return parseInt(e,10)}}),era:Be({matchPatterns:$e,defaultMatchWidth:"wide",parsePatterns:Ke,defaultParseWidth:"any"}),quarter:Be({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:Be({matchPatterns:nt,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),day:Be({matchPatterns:at,defaultMatchWidth:"wide",parsePatterns:ot,defaultParseWidth:"any"}),dayPeriod:Be({matchPatterns:it,defaultMatchWidth:"any",parsePatterns:ut,defaultParseWidth:"any"})},dt=st,ct={code:"en-US",formatDistance:Pe,formatLong:Ee,formatRelative:Ye,localize:Ae,match:dt,options:{weekStartsOn:0,firstWeekContainsDate:1}},lt=ct,ht=lt,mt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ft=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,gt=/^'([^]*?)'?$/,vt=/''/g,wt=/[a-zA-Z]/;function pt(e,t,n){var r,a,o,i,u,s,d,c,l,h,m,f,g,v,w,p,b,y;q(2,arguments);var D=String(t),T=$(),M=null!==(r=null!==(a=null===n||void 0===n?void 0:n.locale)&&void 0!==a?a:T.locale)&&void 0!==r?r:ht,C=L(null!==(o=null!==(i=null!==(u=null!==(s=null===n||void 0===n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null===n||void 0===n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==u?u:T.firstWeekContainsDate)&&void 0!==i?i:null===(l=T.locale)||void 0===l||null===(h=l.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==o?o:1);if(!(C>=1&&C<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=L(null!==(m=null!==(f=null!==(g=null!==(v=null===n||void 0===n?void 0:n.weekStartsOn)&&void 0!==v?v:null===n||void 0===n||null===(w=n.locale)||void 0===w||null===(p=w.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==g?g:T.weekStartsOn)&&void 0!==f?f:null===(b=T.locale)||void 0===b||null===(y=b.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==m?m:0);if(!(k>=0&&k<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!M.localize)throw new RangeError("locale must contain localize property");if(!M.formatLong)throw new RangeError("locale must contain formatLong property");var P=z(e);if(!F(P))throw new RangeError("Invalid time value");var j=pe(P),U=Q(P,j),S={firstWeekContainsDate:C,weekStartsOn:k,locale:M,_originalDate:P},x=D.match(ft).map((function(e){var t=e[0];if("p"===t||"P"===t){var n=we[t];return n(e,M.formatLong)}return e})).join("").match(mt).map((function(r){if("''"===r)return"'";var a=r[0];if("'"===a)return bt(r);var o=he[a];if(o)return null!==n&&void 0!==n&&n.useAdditionalWeekYearTokens||!Te(r)||Me(r,t,String(e)),null!==n&&void 0!==n&&n.useAdditionalDayOfYearTokens||!De(r)||Me(r,t,String(e)),o(U,r,M.localize,S);if(a.match(wt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return r})).join("");return x}function bt(e){var t=e.match(gt);return t?t[1].replace(vt,"'"):e}var yt={data(){return{projects:[],tableHeight:"40vh"}},created(){this.fetchProjects(),setInterval(this.fetchProjects,1e4)},methods:{async fetchProjects(){try{const e=await P.Z.get("http://localhost:3000/projects");e.data.success?this.projects=e.data.projects.map((e=>({...e,start_date:this.formatDate(e.start_date),end_date:this.formatDate(e.end_date)}))):console.error("Failed to fetch projects.")}catch(e){console.error("Error fetching projects:",e)}},formatDate(e){if(!e)return"";try{const t=new Date(e);return pt(t,"dd-MM-yyyy")}catch(t){return console.error("Error parsing date:",t),"Invalid Date"}},async removeProject(e){try{const t=await P.Z.delete(`http://localhost:3000/projects/${e.project_id}`);t.data.success?this.projects=this.projects.filter((t=>t.project_id!==e.project_id)):console.error("Failed to remove project.")}catch(t){console.error("Error removing project:",t)}}}};const Dt=(0,S.Z)(yt,[["render",Y],["__scopeId","data-v-095aaef8"]]);var Tt=Dt,Mt={components:{project:W,projectTable:Tt}};const Ct=(0,S.Z)(Mt,[["render",a]]);var kt=Ct}}]);
//# sourceMappingURL=797.b831d970.js.map