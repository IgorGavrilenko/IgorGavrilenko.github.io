    /*!
    * jQuery Cookie Plugin v1.4.1
    * https://github.com/carhartl/jquery-cookie
    *
    * Copyright 2006, 2014 Klaus Hartl
    * Released under the MIT license
    */
    !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}((function(e){var n=/\+/g;function o(e){return c.raw?e:encodeURIComponent(e)}function i(e){return c.raw?e:decodeURIComponent(e)}function r(e){return o(c.json?JSON.stringify(e):String(e))}function t(o,i){var r=c.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),c.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(i)?i(r):r}var c=e.cookie=function(n,u,s){if(arguments.length>1&&!e.isFunction(u)){if("number"==typeof(s=e.extend({},c.defaults,s)).expires){var a=s.expires,d=s.expires=new Date;d.setMilliseconds(d.getMilliseconds()+864e5*a)}return document.cookie=[o(n),"=",r(u),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}for(var f=n?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;l<m;l++){var x=p[l].split("="),g=i(x.shift()),v=x.join("=");if(n===g){f=t(v,u);break}n||void 0===(v=t(v))||(f[g]=v)}return f};c.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}}));
