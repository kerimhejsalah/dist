(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/Uh7":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n("HDdC"),r=n("eIep"),a=n("8Y7J"),i=n("IheW");let s=(()=>{class e{constructor(e){this.httpClient=e}getData(e){return this.httpClient.get(e,{responseType:"blob"}).pipe(Object(r.a)(e=>this.readFile(e)))}readFile(e){return o.a.create(t=>{const n=new FileReader;return n.onerror=e=>t.error(e),n.onabort=e=>t.error(e),n.onload=()=>t.next(n.result),n.onloadend=()=>t.complete(),n.readAsDataURL(e)})}download(e){const t=e,n=t.substr(t.lastIndexOf("/")+1);this.httpClient.get(t,{responseType:"blob"}).subscribe(e=>{const t=new Blob([e],{type:e.type});if(window.navigator&&window.navigator.msSaveOrOpenBlob)return void window.navigator.msSaveOrOpenBlob(t);const o=window.URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=n,r.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),setTimeout(()=>{window.URL.revokeObjectURL(o),r.remove()},100)})}}return e.\u0275fac=function(t){return new(t||e)(a.ic(i.b))},e.\u0275prov=a.Rb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);