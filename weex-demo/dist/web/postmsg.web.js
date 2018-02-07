// { "framework": "Vue"} 

!function(e){function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=31)}({0:function(e,n){e.exports=function(e,n,t,o,s){var r,a=e=e||{},i=typeof e.default;"object"!==i&&"function"!==i||(r=e,a=e.default);var l="function"==typeof a?a.options:a;n&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns),o&&(l._scopeId=o);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=d):t&&(d=t),d){var c=l.functional,u=c?l.render:l.beforeCreate;c?l.render=function(e,n){return d.call(n),u(e,n)}:l.beforeCreate=u?[].concat(u,d):[d]}return{esModule:r,exports:a,options:l}}},1:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(o[r]=!0)}for(s=0;s<n.length;s++){var a=n[s];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},19:function(e,n,t){"use strict";var o=weex.requireModule("MyMoudle"),s=weex.requireModule("modal");weex.requireModule("globalEvent").addEventListener("eventB",function(e){console.log("get eventB"+e.data),s.toast({message:"js收到了eventB "+e.data,duration:1})}),e.exports={data:{test:"duqian2010@gmail.com"},mounted:function(){console.log("mounted","mounted");var e=new BroadcastChannel("DuQian");e.onmessage=function(n){console.log(n.data),s.toast({message:"pageB received ="+n.data,duration:.8}),self.test=n.data,e.postMessage("I am DuQian.")}},created:function(){console.log("created","created")},methods:{testToast:function(){s.toast({message:"test click",duration:1})},testEvent:function(){o.printLog("myMoudle from B")},onlongpress:function(e){console.log("onlongpress:",e),o.fireNativeGlobalEvent("eventB",function(e){console.log("received From Natvie "+e.data),s.toast({message:"Get Native result=  "+e.result,duration:2})})},onappear:function(e){console.log(e,"appear"),s.toast({message:e+" appear"})},ondisappear:function(e){console.log(e,"disappear"),s.toast({message:e+" disappear"})}}}},2:function(e,n,t){function o(e){for(var n=0;n<e.length;n++){var t=e[n],o=c[t.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](t.parts[s]);for(;s<t.parts.length;s++)o.parts.push(r(t.parts[s]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{for(var a=[],s=0;s<t.parts.length;s++)a.push(r(t.parts[s]));c[t.id]={id:t.id,refs:1,parts:a}}}}function s(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function r(e){var n,t,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(g)return v;o.parentNode.removeChild(o)}if(m){var r=f++;o=p||(p=s()),n=a.bind(null,o,r,!1),t=a.bind(null,o,r,!0)}else o=s(),n=i.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}function a(e,n,t,o){var s=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=A(n,s);else{var r=document.createTextNode(s),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function i(e,n){var t=n.css,o=n.media,s=n.sourceMap;if(o&&e.setAttribute("media",o),s&&(t+="\n/*# sourceURL="+s.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=t(3),c={},u=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,g=!1,v=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){g=t;var s=d(e,n);return o(s),function(n){for(var t=[],r=0;r<s.length;r++){var a=s[r],i=c[a.id];i.refs--,t.push(i)}n?(s=d(e,n),o(s)):s=[];for(var r=0;r<t.length;r++){var i=t[r];if(0===i.refs){for(var l=0;l<i.parts.length;l++)i.parts[l]();delete c[i.id]}}}};var A=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},3:function(e,n){e.exports=function(e,n){for(var t=[],o={},s=0;s<n.length;s++){var r=n[s],a=r[0],i=r[1],l=r[2],d=r[3],c={id:e+":"+s,css:i,media:l,sourceMap:d};o[a]?o[a].parts.push(c):t.push(o[a]={id:a,parts:[c]})}return t}},31:function(e,n,t){"use strict";var o=t(8);o.el="#root",new Vue(o)},35:function(e,n,t){n=e.exports=t(1)(),n.push([e.i,"\n.wrapper {\n  align-items: center;\n  justify-content: center;\n  padding-top: 0px;\n  color: antiquewhite;\n}\n.title {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 28px;\n  align-items: center;\n  color: red;\n  line-height: 80px;\n  text-align: center;\n}\n.btn {\n  width: 300px;\n  background-color: bisque;\n  font-size: 40px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n}\n","",{version:3,sources:["/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/postmsg.vue?4643be6f"],names:[],mappings:";AA2EA;EACA,oBAAA;EACA,wBAAA;EACA,iBAAA;EACA,oBAAA;CACA;AACA;EACA,kBAAA;EACA,qBAAA;EACA,gBAAA;EACA,oBAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;CACA;AACA;EACA,aAAA;EACA,yBAAA;EACA,gBAAA;EACA,oBAAA;EACA,mBAAA;EACA,cAAA;CACA",file:"postmsg.vue",sourcesContent:['<template>\n  <div class="wrapper" @longpress="onlongpress">\n    <text class="title" @click="onlongpress"  @appear="onappear(\'B\')"\n        @disappear="ondisappear(\'B\')">点击我，page 2,  {{test}}</text>\n    <button class="btn" @click="testEvent">测试调用同一个modal</button>\n  </div>\n</template>\n\n<script>\nconst myMoudle = weex.requireModule("MyMoudle");\nvar modal = weex.requireModule("modal");\n\nvar globalEvent = weex.requireModule("globalEvent");\nglobalEvent.addEventListener("eventB", function(e) {\n  console.log("get eventB"+e.data);\n  modal.toast({\n    message: "js收到了eventB " + e.data,\n    duration: 1\n  });\n});\n\nmodule.exports = {\n  data: {\n    test: "duqian2010@gmail.com"\n  },\n  mounted() {\n    console.log("mounted", "mounted");\n    const bc = new BroadcastChannel("DuQian");\n    bc.onmessage = function(event) {\n      console.log(event.data); // send message from weex pageA\n      modal.toast({\n        message: "pageB received =" + event.data,\n        duration: 0.8\n      });\n      self.test = event.data;\n      bc.postMessage("I am DuQian.");\n    };\n  },\n  created() {\n    console.log("created", "created");\n  },\n  methods: {\n    testToast: function() {\n      modal.toast({\n        message: "test click",\n        duration: 1\n      });\n    },\n    testEvent: function() {\n      //myMoudle.sendMessage("pageB调用了native方法");\n      myMoudle.printLog("myMoudle from B");\n    },\n    onlongpress (event) {\n        console.log(\'onlongpress:\', event)\n        myMoudle.fireNativeGlobalEvent("eventB",function (event) {\n          console.log("received From Natvie "+event.data)\n           modal.toast({\n             message: \'Get Native result=  \'+event.result,\n             duration: 2\n           });\n        });\n      },\n      onappear (char) {\n        console.log(char, \'appear\')\n        modal.toast({ message: char + \' appear\' })\n      },\n      ondisappear (char) {\n        console.log(char, \'disappear\')\n        modal.toast({ message: char + \' disappear\' })\n      }\n  }\n};\n<\/script>\n\n<style>\n.wrapper {\n  align-items: center;\n  justify-content: center;\n  padding-top: 0px;\n  color: antiquewhite;\n}\n.title {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  font-size: 28px;\n  align-items: center;\n  color: red;\n  line-height: 80px;\n  text-align: center;\n}\n.btn {\n  width: 300px;\n  background-color: bisque;\n  font-size: 40px;\n  align-items: center;\n  text-align: center;\n  padding: 10px;\n}\n</style>\n'],sourceRoot:""}])},48:function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"wrapper",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{longpress:e.onlongpress}},[t("text",{staticClass:"title",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.onlongpress,appear:function(n){e.onappear("B")},disappear:function(n){e.ondisappear("B")}}},[e._v("点击我，page 2,  "+e._s(e.test))]),e._v(" "),t("button",{staticClass:"btn",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),on:{click:e.testEvent}},[e._v("测试调用同一个modal")])])},staticRenderFns:[]},e.exports.render._withStripped=!0},59:function(e,n,t){var o=t(35);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(2)("9aeecbda",o,!1)},8:function(e,n,t){function o(e){s||t(59)}var s=!1,r=t(0)(t(19),t(48),o,null,null);r.options.__file="/Users/duqian/Development/MyGitHub/weex-demo-dusan/weex-demo/src/postmsg.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] postmsg.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports}});
//# sourceMappingURL=postmsg.web.js.map