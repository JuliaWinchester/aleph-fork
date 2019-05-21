import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../aleph.core.js";var Tabs=function(){function t(){this.transitioning=!1,this.tabs=[]}return t.prototype.componentWillLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return this.tabs=Array.from(this.el.querySelectorAll("ion-tab")),this.ionNavWillLoad.emit(),this.componentWillUpdate(),[2]})})},t.prototype.componentDidLoad=function(){this.initSelect()},t.prototype.componentDidUnload=function(){this.tabs.length=0,this.selectedTab=this.leavingTab=void 0},t.prototype.componentWillUpdate=function(){var t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.onTabClicked=function(t){var e=t.detail.tab,n=this.tabs.find(function(t){return t.tab===e});n&&this.select(n)},t.prototype.select=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(n){switch(n.label){case 0:return[4,this.getTab(t)];case 1:return e=n.sent(),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 2:return n.sent(),this.tabSwitch(),[2,!0]}})})},t.prototype.getTab=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){var e;return tslib_1.__generator(this,function(n){return(e="string"==typeof t?this.tabs.find(function(e){return e.tab===t}):t)||console.error('tab with id: "'+e+'" does not exist'),[2,e]})})},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.initSelect=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){switch(t.label){case 0:return[4,Promise.all(this.tabs.map(function(t){return t.componentOnReady()}))];case 1:return t.sent(),[4,this.select(this.tabs[0])];case 2:return t.sent(),[2]}})})},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.setActive())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))},t.prototype.shouldSwitch=function(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning},t.prototype.render=function(){return[h("slot",{name:"top"}),h("div",{class:"tabs-inner"},h("slot",null)),h("slot",{name:"bottom"})]},Object.defineProperty(t,"is",{get:function(){return"al-tabs"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{doc:{context:"document"},el:{elementRef:!0},getSelected:{method:!0},getTab:{method:!0},select:{method:!0},selectedTab:{state:!0},tabs:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionTabsWillChange",method:"ionTabsWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionTabsDidChange",method:"ionTabsDidChange",bubbles:!1,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionTabButtonClick",method:"onTabClicked"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{z-index:var(--z-index-page-container)}.tabs-inner{position:relative}"},enumerable:!0,configurable:!0}),t}();export{Tabs as AlTabs};