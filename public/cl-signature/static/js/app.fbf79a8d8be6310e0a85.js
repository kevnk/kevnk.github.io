webpackJsonp([0],{"/S0L":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"signature-creator"},[i("h1",[t._v("Classy Llama Email Signature Creator")]),t._v(" "),t._m(0),t._v(" "),i("br"),t._v(" "),i("form",{staticClass:"form",on:{submit:function(e){e.preventDefault(),t.copy(e)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{name:"name",type:"text"},domProps:{value:t.name},on:{focus:t.reset,input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{name:"title",type:"text"},domProps:{value:t.title},on:{focus:t.reset,input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"ext"}},[t._v("Phone Ext")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.ext,expression:"ext"}],attrs:{name:"ext",type:"number"},domProps:{value:t.ext},on:{focus:t.reset,input:function(e){e.target.composing||(t.ext=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"email"}},[t._v("Email")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{name:"email",type:"email"},domProps:{value:t.email},on:{focus:t.reset,input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"twitter"}},[t._v("Twitter")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.twitter,expression:"twitter"}],attrs:{name:"twitter",type:"text"},domProps:{value:t.twitter},on:{focus:t.reset,input:function(e){e.target.composing||(t.twitter=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"linkedin"}},[t._v("Linkedin")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.linkedin,expression:"linkedin"}],attrs:{name:"linkedin",type:"text"},domProps:{value:t.linkedin},on:{focus:t.reset,input:function(e){e.target.composing||(t.linkedin=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"github"}},[t._v("Github")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.github,expression:"github"}],attrs:{name:"github",type:"text"},domProps:{value:t.github},on:{focus:t.reset,input:function(e){e.target.composing||(t.github=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group"},[i("button",{attrs:{type:"submit"},on:{click:t.copy}},[t._v("Copy Now")]),t._v(" "),t.successful?i("span",{staticClass:"success"},[t._v("Copied to your clipboard!")]):t._e(),t._v(" "),t.errorMsg?i("span",{staticClass:"error"},[t._v(t._s(t.errorMsg))]):t._e()])]),t._v(" "),i("p",{staticClass:"small-label"},[t._v("Signature Preview:")]),t._v(" "),i("div",{staticClass:"signature-wrapper",attrs:{contenteditable:t.selecting},on:{click:t.noClick}},[i("br",{staticClass:"float-center",attrs:{align:"center"}}),i("br",{staticClass:"float-center",attrs:{align:"center"}}),i("br",{staticClass:"float-center",attrs:{align:"center"}}),i("table",{staticClass:"row signature-page",style:t.tableStyle},[i("tbody",[i("tr",{staticStyle:{padding:"0","text-align":"left","vertical-align":"top"}},[t.shouldChangeMobile?t._e():i("th",{staticClass:"small-4 large-4 columns first",staticStyle:{Margin:"0 auto",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"16px","font-weight":"400","line-height":"1.3",margin:"0 auto",padding:"0","padding-bottom":"16px","padding-left":"0","padding-right":"16px","text-align":"left",width:"177px"},attrs:{valign:"middle"}},[t._m(1)]),i("th",{staticClass:"small-8 large-8 columns last",style:t.thStyle},[i("table",{staticStyle:{"border-collapse":"collapse","border-spacing":"0",padding:"0","text-align":"left","vertical-align":"top",width:"100%"}},[i("tr",{staticStyle:{padding:"0","text-align":"left","vertical-align":"top"}},[i("th",{staticStyle:{Margin:"0",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"16px","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left"}},[i("p",{staticClass:"lead",staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#333","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"21px","font-weight":"800","line-height":"24px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[t._v(t._s(t.name))]),i("p",{staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"15px","font-weight":"400","line-height":"24px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[t._v(t._s(t.title)+", Classy Llama")]),i("p",{staticClass:"small",staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"12px","font-weight":"400","line-height":"16px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[t._v(" ")]),t.ext?i("p",{staticClass:"small",staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"12px","font-weight":"400","line-height":"16px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[t._m(2),t._v("ext "+t._s(t.ext))]):t._e(),t.email?i("p",{staticClass:"small",staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"12px","font-weight":"400","line-height":"16px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[i("a",{staticStyle:{Margin:"0",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left","text-decoration":"none"},attrs:{target:"_blank",rel:"noopener",href:t.mailto}},[i("img",{staticStyle:{"-ms-interpolation-mode":"bicubic",border:"none",clear:"both",display:"inline","max-width":"100%",outline:"0","text-decoration":"none","vertical-align":"text-bottom",width:"auto"},attrs:{src:"https://files.classyllama.com/bc9abf9a/mail2x.png",alt:"",width:"16",height:"16"}}),t._v(" "+t._s(t.email))])]):t._e(),t.linkedin?i("p",{staticClass:"small",staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"12px","font-weight":"400","line-height":"16px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[i("a",{staticStyle:{Margin:"0",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left","text-decoration":"none"},attrs:{target:"_blank",rel:"noopener",href:t.linkedinHref}},[i("img",{staticStyle:{"-ms-interpolation-mode":"bicubic",border:"none",clear:"both",display:"inline","max-width":"100%",outline:"0","text-decoration":"none","vertical-align":"text-bottom",width:"auto"},attrs:{src:"https://files.classyllama.com/bc9abf9a/linkedin2x.png",alt:"",width:"16",height:"16"}}),t._v(" "+t._s(t.linkedin))])]):t._e(),t.twitter?i("p",{staticClass:"small",staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"12px","font-weight":"400","line-height":"16px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[i("a",{staticStyle:{Margin:"0",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left","text-decoration":"none"},attrs:{target:"_blank",rel:"noopener",href:t.twitterHref}},[i("img",{staticStyle:{"-ms-interpolation-mode":"bicubic",border:"none",clear:"both",display:"inline","max-width":"100%",outline:"0","text-decoration":"none","vertical-align":"text-bottom",width:"auto"},attrs:{src:"https://files.classyllama.com/bc9abf9a/twitter2x.png",alt:"",width:"16",height:"16"}}),t._v(" "+t._s(t.twitter))])]):t._e(),t.github?i("p",{staticClass:"small",staticStyle:{Margin:"0","Margin-bottom":"10px",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"12px","font-weight":"400","line-height":"16px",margin:"0","margin-bottom":"0",padding:"0","text-align":"left"}},[i("a",{staticStyle:{Margin:"0",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left","text-decoration":"none"},attrs:{target:"_blank",rel:"noopener",href:t.githubHref}},[i("img",{staticStyle:{"-ms-interpolation-mode":"bicubic",border:"none",clear:"both",display:"inline","max-width":"100%",outline:"0","text-decoration":"none","vertical-align":"text-bottom",width:"auto"},attrs:{src:"https://files.classyllama.com/bc9abf9a/github2x.png",alt:"",width:"16",height:"16"}}),t._v(" "+t._s(t.github))])]):t._e()])])])])])])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[i("b",[t._v("Instructions:")]),t._v(" Fill out with your information, click COPY NOW, and paste into your email client signature settings. (Visit on your phone to get version you can use for mobile signatures)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",{staticStyle:{"border-collapse":"collapse","border-spacing":"0",padding:"0","text-align":"left","vertical-align":"top",width:"100%"}},[i("tr",{staticStyle:{padding:"0","text-align":"left","vertical-align":"top"}},[i("th",{staticStyle:{Margin:"0",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-size":"16px","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left"}},[i("a",{staticStyle:{Margin:"0",background:"#fff",color:"#777",display:"block","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left","text-decoration":"none"},attrs:{target:"_blank",rel:"noopener",href:"https://www.classyllama.com/"}},[i("img",{staticStyle:{"-ms-interpolation-mode":"bicubic",border:"none",clear:"both",display:"block","max-width":"100%",outline:"0","text-decoration":"none",width:"auto"},attrs:{src:"https://files.classyllama.com/bc9abf9a/CL_Logo_Square_-_Light1.67x.png",alt:"Classy Llama",width:"120",height:"120",align:"right"}})])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticStyle:{Margin:"0",background:"#fff",color:"#777","font-family":"'Open Sans',Helvetica,Arial,sans-serif","font-weight":"400","line-height":"1.3",margin:"0",padding:"0","text-align":"left","text-decoration":"none"},attrs:{target:"_blank",rel:"noopener",href:"tel:14178668887"}},[i("img",{staticStyle:{"-ms-interpolation-mode":"bicubic",border:"none",clear:"both",display:"inline","max-width":"100%",outline:"0","text-decoration":"none","vertical-align":"text-bottom",width:"auto"},attrs:{src:"https://files.classyllama.com/bc9abf9a/phone2x.png",alt:"",width:"16",height:"16"}}),t._v(" (417) 866-8887 ")])}],o={render:a,staticRenderFns:n};e.a=o},AQql:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"},on:{focus:t.checkFont}},[t.hasFont?i("SignatureCreator",{attrs:{isMobile:t.isMobile}}):t._e(),t._v(" "),t.hasFont?t._e():i("div",[i("p",[t._v("Before creating your email signature, you must install the Open Sans font:")]),t._v(" "),t._m(0)])],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[i("a",{attrs:{href:"https://files.classyllama.com/bc9abf9a/Open_Sans.zip",download:"",target:"_blank",rel:"noopener"}},[t._v("Download")]),t._v(" the Open Sans font")]),t._v(" "),i("li",[t._v("Unzip ​the ​files.")]),t._v(" "),i("li",[t._v("Open ​the ​“Open_Sans” folder ​now ​unzipped")]),t._v(" "),i("li",[t._v("Select ​all ​the ​“.ttf” ​files")]),t._v(" "),i("li",[t._v("Right ​click ​on ​the ​selected ​files ​and ​choose ​“Open”")]),t._v(" "),i("li",[t._v("When ​opened, click ​“Install ​Font”")])])}],o={render:a,staticRenderFns:n};e.a=o},GdVS:function(t,e){},I4gL:function(t,e,i){"use strict";e.a={name:"SignatureCreator",props:["isMobile"],data:function(){return{name:"Your Name",title:"Your Title",ext:"",email:"firstname.lastname@classyllama.com",twitter:"",linkedin:"",github:"",selecting:!1,successful:null,errorMsg:null,changeForMobile:!1}},computed:{shouldChangeMobile:function(){return this.changeForMobile&&this.isMobile},tableStyle:function(){var t=this.shouldChangeMobile?271:500;return"Margin:0;border-collapse:collapse;border-spacing:0;float:none;margin:0;max-width:"+t+"px;padding:0;position:relative;text-align:center;vertical-align:top;width:"+t+"px"},thStyle:function(){var t=this.shouldChangeMobile?0:1,e=this.shouldChangeMobile?0:24;return"Margin:0 auto;background:#fff;border-left:"+t+"px solid #d8d8d8;color:#777;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:1.3;margin:0 auto;padding:0;padding-bottom:8px;padding-left:"+e+"px;padding-right:"+e+"px;padding-top:8px;text-align:left;width:370.67px"},mailto:function(){return"mailto:"+this.email},twitterHref:function(){return"https://twitter.com/"+this.twitter},linkedinHref:function(){return"https://www.linkedin.com/in/"+this.linkedin},githubHref:function(){return"https://github.com/"+this.github}},methods:{copy:function(){this.selecting=!0;var t=document.querySelector(".signature-wrapper"),e=document.createRange();e.selectNodeContents(t);var i=window.getSelection();i.removeAllRanges(),i.addRange(e);try{this.successful=document.execCommand("copy"),this.errorMsg=null}catch(t){this.successful=!1,this.errorMsg=t}i.removeAllRanges(),this.selecting=!1},reset:function(){this.successful=null,this.errorMsg=null},noClick:function(){this.errorMsg="Click COPY NOW when you're ready to copy."}}}},M93x:function(t,e,i){"use strict";function a(t){i("mwtY")}var n=i("xJD8"),o=i("AQql"),l=i("VU/8"),r=a,s=l(n.a,o.a,!1,r,null,null);e.a=s.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("M93x");i("zbie"),a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:n.a}})},UJ8i:function(t,e,i){"use strict";function a(t){i("GdVS")}var n=i("I4gL"),o=i("/S0L"),l=i("VU/8"),r=a,s=l(n.a,o.a,!1,r,"data-v-ba137f98",null);e.a=s.exports},mwtY:function(t,e){},xJD8:function(t,e,i){"use strict";var a=i("UJ8i");e.a={name:"app",data:function(){return{hasFont:this.checkFont()}},components:{SignatureCreator:a.a},created:function(){this.hasFont||setInterval(this.checkFont.bind(this),1e3)},computed:{isMobile:function(){var t,e={webOS:function(){return/webOS/i.test(navigator.userAgent)},Android:function(){return/Android/i.test(navigator.userAgent)},BlackBerry:function(){return/BlackBerry/i.test(navigator.userAgent)},iOS:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)},Opera:function(){return/Opera Mini/i.test(navigator.userAgent)},Windows:function(){return/IEMobile/i.test(navigator.userAgent)}};t=!1;for(var i in e){if(!0===(0,e[i])()){t=i;break}}return t}},methods:{checkFont:function(){return console.log("%c checking for font...","color:#F80"),this.hasFont=isFontAvailable("Open Sas")||this.isMobile,this.hasFont}}}},zbie:function(t,e){!function(t){function e(t){return n.style.fontFamily=t,a.appendChild(n),i=n.clientWidth,a.removeChild(n),i}var i,a=t.body,n=t.createElement("span");n.innerHTML=Array(100).join("wi"),n.style.cssText=["position:absolute","width:auto","font-size:128px","left:-99999px"].join(" !important;");var o=e("monospace"),l=e("serif"),r=e("sans-serif");window.isFontAvailable=function(t){return o!==e(t+",monospace")||r!==e(t+",sans-serif")||l!==e(t+",serif")}}(document)}},["NHnr"]);
//# sourceMappingURL=app.fbf79a8d8be6310e0a85.js.map