if(!self.define){let e,i={};const r=(r,l)=>(r=new URL(r+".js",l).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,n)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let u={};const o=e=>r(e,s),p={module:{uri:s},exports:u,require:o};i[s]=Promise.all(l.map((e=>p[e]||o(e)))).then((e=>(n(...e),u)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sedmi"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.1f55b2ac.css",revision:null},{url:"img/Logo.9fbd9b78.png",revision:null},{url:"img/pr-1.caf9958c.jpg",revision:null},{url:"img/pr-10.72036808.jpg",revision:null},{url:"img/pr-11.b0ba3187.jpg",revision:null},{url:"img/pr-12.88300446.jpg",revision:null},{url:"img/pr-13.cb6d9770.jpg",revision:null},{url:"img/pr-2.89e589d9.jpg",revision:null},{url:"img/pr-3.455147e0.jpg",revision:null},{url:"img/pr-4.aaf2a931.jpg",revision:null},{url:"img/pr-5.6078e5c4.jpg",revision:null},{url:"img/pr-6.c683d094.jpg",revision:null},{url:"img/pr-7.42372836.jpg",revision:null},{url:"img/pr-8.243573f7.jpg",revision:null},{url:"img/pr-9.79d3e7e1.jpg",revision:null},{url:"index.html",revision:"b16bb4d063f6dae408b7e6e770e2e0ce"},{url:"js/app.cf62a16f.js",revision:null},{url:"js/chunk-vendors.55160b30.js",revision:null},{url:"manifest.json",revision:"2cef97c1e51fd51565a3ff6bd730ed12"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
