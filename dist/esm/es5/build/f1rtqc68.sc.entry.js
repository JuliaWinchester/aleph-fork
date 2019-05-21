import{h}from"../aleph.core.js";var AlUrlPicker=function(){function e(){this.urls=null,this.url=null}return e.prototype.render=function(){var e=this;return this.urls?h("form",{onSubmit:function(e){return e.preventDefault()}},h("ion-select",{value:this.url,interface:"popover",placeholder:"",onIonChange:function(r){return e.urlChanged.emit(r.detail.value)}},Array.from(this.urls).map(function(e){return h("ion-select-option",{value:e[0]},e[1])})),h("ion-input",{type:"url",size:"100",placeholder:"src",required:!0,value:this.url,ref:function(r){return e._input=r}}),h("ion-button",{size:"small",type:"submit",onClick:function(){return e.urlChanged.emit(e._input.value)}},h("ion-icon",{name:"refresh"}))):null},Object.defineProperty(e,"is",{get:function(){return"al-url-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{url:{type:String,attr:"url",mutable:!0},urls:{type:"Any",attr:"urls",mutable:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"urlChanged",method:"urlChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}();export{AlUrlPicker};