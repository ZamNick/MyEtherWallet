(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8cb56e12"],{"1ff2":function(a,t,e){"use strict";var s=e("3750"),r=e.n(s);r.a},"27b7":function(a,t,e){"use strict";var s=e("640df"),r=e.n(s);r.a},3750:function(a,t,e){},4652:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"about-your-dapp mb-5 mt-5"},[e("b-form",{attrs:{onsubmit:"return false;"}},[e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.name")))]),e("div",{staticClass:"dapp-input"},[e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappName",name:"name",type:"text"},on:{update:a.updateName},model:{value:a.form.dappName,callback:function(t){a.$set(a.form,"dappName",t)},expression:"form.dappName"}}),e("span",[a._v("*")])],1),a.errors.has("name")?e("p",{staticClass:"error"},[a._v(" "+a._s(a.errors.first("name"))+" ")]):a._e()]),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.category")))]),e("div",{staticClass:"dapp-input"},[e("label",{staticClass:"dapp-select-label"},[e("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappCategory",options:a.dappCategories,name:"category"},on:{change:a.updateCategory},model:{value:a.form.category,callback:function(t){a.$set(a.form,"category",t)},expression:"form.category"}})],1),e("span",[a._v("*")])]),a.errors.has("category")?e("p",{staticClass:"error"},[a._v(" "+a._s(a.errors.first("category"))+" ")]):a._e()]),e("b-form-group",{staticClass:"input-tags-group tags-form-group"},[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.tags-title"))+" "),e("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.about-your-dapp.tags")}})],1),e("div",{staticClass:"input-tags-container"},[e("div",{staticClass:"tag-wrapper"},[e("div",{ref:"tagHolder",staticClass:"tag-holder"},a._l(a.displayTags,(function(t,s){return e("tag-component",{key:t+s,ref:"tagContainer",refInFor:!0,attrs:{name:t,"delete-func":a.deleteTag,idx:s}})})),1),e("div",{staticClass:"dapp-input"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.tagInput,expression:"tagInput"}],ref:"dappTagsInput",staticClass:"dapp-tags-input",attrs:{id:"dappTags",type:"text"},domProps:{value:a.tagInput},on:{keyup:a.onKeyDown,input:function(t){t.target.composing||(a.tagInput=t.target.value)}}})])]),e("span",[a._v("*")])]),a.dappTagsError?e("p",{staticClass:"error"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.tags-required"))+" ")]):a._e()]),e("div",{staticClass:"suggested-tags-container mb-3"},[e("p",{staticClass:"title"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.suggested-tags"))+" ")]),e("p",{staticClass:"tags"},[e("span",{on:{click:function(t){return a.addTags("games")}}},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.games")))]),e("span",{on:{click:function(t){return a.addTags("defi lending")}}},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.defi")))]),e("span",{on:{click:function(t){return a.addTags("social")}}},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.social")))]),e("span",{on:{click:function(t){return a.addTags("finance")}}},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.finance")))]),e("span",{on:{click:function(t){return a.addTags("wallet")}}},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.wallet")))])])]),e("b-form-group",{attrs:{id:"form-group-description"}},[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.description")))]),e("b-form-invalid-feedback",{attrs:{id:"form-group-description"}},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.required-field"))+". ")]),e("div",{staticClass:"dapp-input"},[e("b-form-textarea",{attrs:{placeholder:a.$t("dappsSubmission.about-your-dapp.description-placeholder"),name:"description",rows:"7",size:"lg"},on:{update:a.updateDescription,change:function(t){return a.updateDisableBtn(a.errors)}},model:{value:a.form.description,callback:function(t){a.$set(a.form,"description",t)},expression:"form.description"}}),e("span",[a._v("*")])],1),a.errors.has("description")?e("p",{staticClass:"error"},[a._v(" "+a._s(a.errors.first("description"))+" ")]):a._e()],1),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.dapp-us")))]),e("div",{staticClass:"dapp-input"},[e("label",{staticClass:"dapp-select-label"},[e("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappUsMarket",options:a.dappUsMarketOptions,name:"field"},on:{change:a.updateUsMarket},model:{value:a.form.usMarket,callback:function(t){a.$set(a.form,"usMarket",t)},expression:"form.usMarket"}})],1),e("span",[a._v("*")])]),a.errors.has("field")?e("p",{staticClass:"error"},[a._v(" "+a._s(a.errors.first("field"))+" ")]):a._e()]),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.dapp-status")))]),e("div",{staticClass:"dapp-input"},[e("label",{staticClass:"dapp-select-label"},[e("b-form-select",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"dappStatus",options:a.dappStatusOptions,name:"status"},on:{change:a.updateDappStatus},model:{value:a.form.dappStatus,callback:function(t){a.$set(a.form,"dappStatus",t)},expression:"form.dappStatus"}})],1),e("span",[a._v("*")])]),a.errors.has("status")?e("p",{staticClass:"error"},[a._v(" "+a._s(a.errors.first("status"))+" ")]):a._e()]),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.mock-flow-title"))+" "),e("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.about-your-dapp.mock-user-flow")}})],1),e("p",{staticClass:"dapp-text-info mb-3"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.mock-requirements"))+" ")]),e("div",{staticClass:"dapp-input"},[e("label",{staticClass:"upload-btn-wrapper",attrs:{for:"customUpload"}},[e("div",{staticClass:"fake-input"},[e("p",{staticClass:"file-name"},[a._v(a._s(a.form.mockFlowFile.name))])]),e("button",{staticClass:"upload-btn"},[a._v(" "+a._s(a.$t("dappsSubmission.upload"))+" ")])]),e("input",{ref:"mockUserFlow",staticClass:"mock-user-flow-input",attrs:{id:"customUpload",type:"file"},on:{change:a.onMockFileChange}}),e("span",[a._v("*")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:a.mockFileError,expression:"mockFileError"}],staticClass:"error"},[a._v(a._s(a.mockFileError))])]),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.contract-address-title"))+" "),e("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.about-your-dapp.contract-address")}})],1),e("div",{staticClass:"dapp-input"},[e("b-form-input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{id:"contractAddress",name:"address",type:"text"},on:{update:a.onContractAddressChange},model:{value:a.form.contractAddress,callback:function(t){a.$set(a.form,"contractAddress",t)},expression:"form.contractAddress"}}),e("span",[a._v("*")])],1),a.errors.has("address")?e("p",{staticClass:"error"},[a._v(" "+a._s(a.errors.first("address"))+" ")]):a._e(),a.contractAddressErr?e("p",{staticClass:"error"},[a._v(" "+a._s(a.contractAddressErr)+" ")]):a._e()]),e("b-form-group",[e("label",{staticClass:"dapp-label"},[e("span",{staticClass:"dapp-icon-label"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.dapp-icon-title"))+" ")]),e("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.about-your-dapp.dapp-icon")}}),a.form.dappIconUrl?e("label",{staticClass:"replace-label",attrs:{for:"dappIcon"}},[a._v(a._s(a.$t("dappsSubmission.replace")))]):a._e()],1),e("div",{staticClass:"image-wrapper"},[e("div",{staticClass:"image-container",class:a.form.dappIconUrl?"dapp-icon-uploaded ":""},[e("label",{staticClass:"image-label",attrs:{for:"dappIcon"}},[e("div",{staticClass:"image-placeholder"},[a.form.dappIconUrl?a._e():e("i",{staticClass:"fa fa-cloud-upload"}),e("h4",{staticClass:"image-text"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.icon-text"))+" ")]),e("p",{staticClass:"image-requirements"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.icon-requirements"))+" ")])]),a.form.dappIconUrl?e("img",{staticClass:"dapp-icon-img",attrs:{src:a.form.dappIconUrl}}):a._e(),e("b-form-file",{attrs:{id:"dappIcon","drop-placeholder":a.$t("dappsSubmission.about-your-dapp.dapp-icon-placeholder"),type:"file"},on:{change:a.onDappIconChange}})],1)]),e("span",{staticClass:"required-icon",class:a.form.dappIconUrl?"uploaded-required-icon":""},[a._v("*")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:a.dappIconError,expression:"dappIconError"}],staticClass:"error"},[a._v(a._s(a.dappIconError))])]),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.banner-title"))+" "),e("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.about-your-dapp.banner")}}),a.form.bannerUrl?e("label",{staticClass:"replace-label",attrs:{for:"bannerImage"}},[a._v(a._s(a.$t("dappsSubmission.replace")))]):a._e()],1),e("div",{staticClass:"image-wrapper"},[e("div",{staticClass:"image-container",class:a.form.bannerUrl?"banner-uploaded ":""},[e("label",{staticClass:"image-label",attrs:{for:"bannerImage"}},[e("div",{staticClass:"image-placeholder"},[a.form.bannerUrl?a._e():e("i",{staticClass:"fa fa-cloud-upload"}),e("h4",{staticClass:"image-text"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.image-text"))+" ")]),e("p",{staticClass:"image-requirements"},[a._v(" "+a._s(a.$t("dappsSubmission.about-your-dapp.banner-requirements"))+" ")])]),a.form.bannerUrl?e("img",{staticClass:"banner-img",attrs:{src:a.form.bannerUrl}}):a._e(),e("b-form-file",{attrs:{id:"bannerImage","drop-placeholder":a.$t("dappsSubmission.about-your-dapp.banner-placeholder"),accept:"image/*",type:"file"},on:{change:a.onBannerChange}})],1)]),e("span",{staticClass:"required-icon",class:a.form.bannerUrl?"uploaded-required-icon":""},[a._v("*")])]),e("p",{directives:[{name:"show",rawName:"v-show",value:a.bannerError,expression:"bannerError"}],staticClass:"error"},[a._v(a._s(a.bannerError))])]),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.dapp-website")))]),e("b-form-input",{attrs:{id:"dappWebsite",placeholder:a.$t("dappsSubmission.url-placeholder"),name:"website",type:"text"},on:{change:function(t){return a.updateDisableBtn(a.errors)}},model:{value:a.form.dappWebsite,callback:function(t){a.$set(a.form,"dappWebsite",t)},expression:"form.dappWebsite"}}),a.errors.has("website")?e("p",{staticClass:"error"},[a._v(" "+a._s(a.errors.first("website"))+" ")]):a._e()],1),e("b-form-group",[e("label",{staticClass:"dapp-label"},[a._v(a._s(a.$t("dappsSubmission.about-your-dapp.contract-audit-title"))+" "),e("popover",{staticClass:"dapp-popover",attrs:{popcontent:a.$t("dappsSubmission.about-your-dapp.contract-audit")}})],1),e("label",{staticClass:"dapp-select-label"},[e("b-form-select",{attrs:{id:"dappContract",options:a.dappContractOptions},model:{value:a.form.contractAudit,callback:function(t){a.$set(a.form,"contractAudit",t)},expression:"form.contractAudit"}})],1)])],1)],1)},r=[],o=(e("a434"),e("d3b7"),e("ac1f"),e("25f0"),e("3ca3"),e("5319"),e("ddb0"),e("2b3d"),function(a,t){var e=t._c;return e("div",{ref:"tagContainer",staticClass:"tag-container"},[t._v(" "+t._s(t.props.name)+" "),e("span",{on:{click:function(a){return t.props.deleteFunc(t.props.idx)}}},[e("i",{staticClass:"fa fa-times"})])])}),p=[],n=(e("a9e3"),{props:{deleteFunc:{type:Function,default:function(){}},name:{type:String,default:""},idx:{type:Number,default:0}}}),i=n,l=(e("27b7"),e("2877")),d=Object(l["a"])(i,o,p,!0,null,"0943ce32",null),u=d.exports,c=e("19b5"),m=e("b7d3"),f={components:{"tag-component":u,popover:c["a"]},props:{updateName:{type:Function,default:function(){}},updateCategory:{type:Function,default:function(){}},updateTags:{type:Function,default:function(){}},updateDescription:{type:Function,default:function(){}},updateDisableBtn:{type:Function,default:function(){}},updateUsMarket:{type:Function,default:function(){}},updateDappStatus:{type:Function,default:function(){}},updateMockFlow:{type:Function,default:function(){}},updateContractAddress:{type:Function,default:function(){}},updateDappIcon:{type:Function,default:function(){}},updateBanner:{type:Function,default:function(){}},form:{type:Object,default:function(){return{}}}},data:function(){return{tag:"",tags:[],dappCategories:[{value:null,text:"Please select"},{value:"Games",text:"Games"},{value:"Social",text:"Social"},{value:"Finance",text:"Finance"},{value:"Infrastructure",text:"Infrastructure"},{value:"Exchanges",text:"Exchanges"},{value:"Development",text:"Development"},{value:"Media",text:"Media"},{value:"Wallet",text:"Wallet"},{value:"Security",text:"Security"},{value:"Property",text:"Property"},{value:"Marketplaces",text:"Marketplaces"},{value:"Governance",text:"Governance"},{value:"Storage",text:"Storage"},{value:"Identity",text:"Identity"},{value:"Energy",text:"Energy"},{value:"Insurance",text:"Insurance"},{value:"Health",text:"Health"},{value:"Other",text:"Other"}],dappUsMarketOptions:[{value:null,text:"Please select"},{value:"Yes",text:"Yes"},{value:"No",text:"No"}],dappStatusOptions:[{value:null,text:"Please select"},{value:"Live",text:"Live"},{value:"Beta",text:"Beta"},{value:"Prototype",text:"Prototype"},{value:"Work in progress",text:"Work in progress"},{value:"Concept",text:"Concept"},{value:"Stealth",text:"Stealth"}],dappContractOptions:[{value:null,text:"Please select"},{value:"None in Process",text:"None in Process"},{value:"In Process",text:"In Process"},{value:"Completed",text:"Completed"}],tagInput:"",displayTags:this.form.tags,mockFileError:null,dappIconError:null,bannerError:null,mockFlowImgName:"",dappTagsError:!1,contractAddressErr:null,spacePressCount:0}},methods:{pushTag:function(){var a=this;this.displayTags.push(this.tagInput),this.tagInput="",setTimeout((function(){return a.updateWidth()}))},onKeyDown:function(a){var t=this;if(32===a.keyCode&&this.spacePressCount++,13===a.keyCode||32===a.keyCode&&2===this.spacePressCount)this.tagInput=this.tagInput.replace(/\s+/g,""),this.tagInput.length>0&&this.pushTag(),this.spacePressCount=0;else if(8===a.keyCode){if(this.tagInput.length<=0){var e=this.displayTags.splice(this.displayTags.length-1,1);setTimeout((function(){t.updateWidth(),t.tagInput=e.toString()}))}this.spacePressCount=0}this.dappTagsError=0===this.displayTags.length,this.updateTags(this.displayTags)},deleteTag:function(a){var t=this;this.displayTags.splice(a,1),this.updateTags(this.displayTags),this.dappTagsError=0===this.displayTags.length,setTimeout((function(){return t.updateWidth()}))},updateWidth:function(){this.$refs.dappTagsInput.style.paddingLeft=this.$refs.tagHolder.offsetWidth>0?"".concat(this.$refs.tagHolder.offsetWidth+25,"px"):"25px"},onMockFileChange:function(a){var t=a.target.files[0],e=new Image,s=URL.createObjectURL(t),r=this;this.form.mockFlowFile="",this.form.mockFlowUrl="",s||this.onMockFileChangeError("uploadError"),"application/pdf"===t.type?t.size>5e6?this.onMockFileChangeError("exceededSize"):this.onMockFileChangeSuccess(t,s):(e.src=s,e.onload=function(){e.width>1200||e.height>630?r.onMockFileChangeError("exceededSize"):r.onMockFileChangeSuccess(t,s)},e.onerror=function(){r.onMockFileChangeError("uploadError")})},onMockFileChangeSuccess:function(a,t){this.mockFileError=null,this.form.mockFlowFile=a,this.form.mockFlowUrl=t,this.updateMockFlow(!1)},onMockFileChangeError:function(a){this.mockFileError="exceededSize"===a?"The image dimensions are too big. Dimensions must be 1200px width by 630px height and less than 5MB.":"Upload error. Please try a different file.",this.updateMockFlow(!0)},onDappIconChange:function(a){var t="drop"===a.type?a.dataTransfer.files[0]:a.target.files[0],e=new Image,s=URL.createObjectURL(t),r=this;e.src=s,r.form.dappIconFile="",r.form.dappIconUrl="",e.onload=function(){e.height>192||e.width>192?(r.dappIconError="The image dimensions are too big. Dimensions must be 192px by 192px.",r.updateDappIcon(!0)):(r.dappIconError=null,r.form.dappIconFile=t,r.form.dappIconUrl=s,r.updateDappIcon(!1))},e.onerror=function(){r.dappIconError="Upload error. Please try a different file.",r.updateDappIcon(!0)}},onBannerChange:function(a){var t="drop"===a.type?a.dataTransfer.files[0]:a.target.files[0],e=new Image,s=URL.createObjectURL(t),r=this;r.form.bannerFile="",r.form.bannerUrl="",e.src=s,e.onload=function(){e.width<1200||e.height<206?(r.bannerError="The image dimensions are too small. Dimensions must be at least 1200px* 206px.",r.updateBanner(!0)):(r.bannerError=null,r.form.bannerFile=t,r.form.bannerUrl=s,r.updateBanner(!1))},e.onerror=function(){r.bannerError="Upload error. Please try a different file.",r.updateBanner(!0)}},onContractAddressChange:function(a){Object(m["a"])(a)?(this.contractAddressErr=null,this.updateMockFlow(!1)):(this.contractAddressErr="Please enter a valid address",this.updateMockFlow(!0))},addTags:function(a){this.tagInput=a,this.pushTag()}}},b=f,v=(e("1ff2"),e("bcd2"),Object(l["a"])(b,s,r,!1,null,"01897d24",null)),g=v.exports;e.d(t,"default",(function(){return g}))},"640df":function(a,t,e){},b27c:function(a,t,e){},bcd2:function(a,t,e){"use strict";var s=e("b27c"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-8cb56e12.2f8a2b7e.js.map