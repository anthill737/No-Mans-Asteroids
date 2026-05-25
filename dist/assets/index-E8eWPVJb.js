var ju=Object.defineProperty;var Qu=(s,t,e)=>t in s?ju(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var ft=(s,t,e)=>Qu(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="165",td=0,rc=1,ed=2,Fh=1,nd=2,Pn=3,On=0,Oe=1,gn=2,$n=0,ns=1,ac=2,oc=3,cc=4,id=5,gi=100,sd=101,rd=102,ad=103,od=104,cd=200,ld=201,hd=202,ud=203,yo=204,So=205,dd=206,fd=207,pd=208,md=209,gd=210,_d=211,xd=212,vd=213,Md=214,yd=0,Sd=1,Ed=2,zr=3,wd=4,Ad=5,Td=6,bd=7,Oo=0,Rd=1,Cd=2,Zn=0,Pd=1,Ld=2,Dd=3,Id=4,Ud=5,Nd=6,Od=7,Bh=300,as=301,os=302,Eo=303,wo=304,$r=306,Ao=1e3,vi=1001,To=1002,Ne=1003,Fd=1004,Ws=1005,sn=1006,ma=1007,Mi=1008,Qn=1009,Bd=1010,zd=1011,Hr=1012,zh=1013,cs=1014,Dn=1015,Zr=1016,Hh=1017,Vh=1018,ls=1020,Hd=35902,Vd=1021,kd=1022,xn=1023,Gd=1024,Wd=1025,is=1026,hs=1027,kh=1028,Gh=1029,Xd=1030,Wh=1031,Xh=1033,ga=33776,_a=33777,xa=33778,va=33779,lc=35840,hc=35841,uc=35842,dc=35843,fc=36196,pc=37492,mc=37496,gc=37808,_c=37809,xc=37810,vc=37811,Mc=37812,yc=37813,Sc=37814,Ec=37815,wc=37816,Ac=37817,Tc=37818,bc=37819,Rc=37820,Cc=37821,Ma=36492,Pc=36494,Lc=36495,qd=36283,Dc=36284,Ic=36285,Uc=36286,Yd=3200,Jd=3201,qh=0,Kd=1,Kn="",dn="srgb",ii="srgb-linear",Fo="display-p3",jr="display-p3-linear",Vr="linear",ae="srgb",kr="rec709",Gr="p3",Ci=7680,Nc=519,$d=512,Zd=513,jd=514,Yh=515,Qd=516,tf=517,ef=518,nf=519,Oc=35044,Fc="300 es",In=2e3,Wr=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ya=Math.PI/180,bo=180/Math.PI;function zs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}function sf(s,t){return(s%t+t)%t}function Sa(s,t,e){return(1-e)*s+e*t}function _s(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Vt=class Jh{constructor(t,e,n,i,r,a,o,c,l){Jh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],S=i[1],x=i[4],w=i[7],I=i[2],A=i[5],T=i[8];return r[0]=a*_+o*S+c*I,r[3]=a*m+o*x+c*A,r[6]=a*f+o*w+c*T,r[1]=l*_+h*S+d*I,r[4]=l*m+h*x+d*A,r[7]=l*f+h*w+d*T,r[2]=u*_+p*S+g*I,r[5]=u*m+p*x+g*A,r[8]=u*f+p*w+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ea.makeScale(t,e)),this}rotate(t){return this.premultiply(Ea.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ea.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const Ea=new Vt;function Kh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rf(){const s=Xr("canvas");return s.style.display="block",s}const Bc={};function $h(s){s in Bc||(Bc[s]=!0,console.warn(s))}function af(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const zc=new Vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hc=new Vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xs={[ii]:{transfer:Vr,primaries:kr,toReference:s=>s,fromReference:s=>s},[dn]:{transfer:ae,primaries:kr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[jr]:{transfer:Vr,primaries:Gr,toReference:s=>s.applyMatrix3(Hc),fromReference:s=>s.applyMatrix3(zc)},[Fo]:{transfer:ae,primaries:Gr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hc),fromReference:s=>s.applyMatrix3(zc).convertLinearToSRGB()}},of=new Set([ii,jr]),Qt={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!of.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Xs[t].toReference,i=Xs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Xs[s].primaries},getTransfer:function(s){return s===Kn?Vr:Xs[s].transfer}};function ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function wa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Pi;class cf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Xr("canvas")),Pi.width=t.width,Pi.height=t.height;const n=Pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lf=0;class Zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=zs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Aa(i[a].image)):r.push(Aa(i[a]))}else r=Aa(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Aa(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?cf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hf=0;class be extends ps{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=vi,i=vi,r=sn,a=Mi,o=xn,c=Qn,l=be.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=zs(),this.name="",this.source=new Zh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ao:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case To:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ao:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case To:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=Bh;be.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,w=(p+1)/2,I=(f+1)/2,A=(h+u)/4,T=(d+_)/4,L=(g+m)/4;return x>w&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=T/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=L/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=T/r,i=L/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uf extends ps{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jh extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class df extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ai=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-o;const f=c*u+l*p+h*g+d*_,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,f*S);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}const w=o*S;if(c=c*m+u*w,l=l*m+p*w,h=h*m+g*w,d=d*m+_*w,m===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class Qh{constructor(t=0,e=0,n=0){Qh.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Ta=new D,Vc=new Ai;class Ti{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,je):je.fromBufferAttribute(r,a),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Ys.subVectors(this.max,xs),Li.subVectors(t.a,xs),Di.subVectors(t.b,xs),Ii.subVectors(t.c,xs),Bn.subVectors(Di,Li),zn.subVectors(Ii,Di),oi.subVectors(Li,Ii);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-oi.z,oi.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,oi.z,0,-oi.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-oi.y,oi.x,0];return!ba(e,Li,Di,Ii,Ys)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,Li,Di,Ii,Ys))?!1:(Js.crossVectors(Bn,zn),e=[Js.x,Js.y,Js.z],ba(e,Li,Di,Ii,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new D,new D,new D,new D,new D,new D,new D,new D],je=new D,qs=new Ti,Li=new D,Di=new D,Ii=new D,Bn=new D,zn=new D,oi=new D,xs=new D,Ys=new D,Js=new D,ci=new D;function ba(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ci.fromArray(s,r);const o=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const ff=new Ti,vs=new D,Ra=new D;class bi{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ff.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Ra)),this.expandByPoint(vs.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new D,Ca=new D,Ks=new D,Hn=new D,Pa=new D,$s=new D,La=new D;let Qr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ca.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Ca);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ks),o=Hn.dot(this.direction),c=-Hn.dot(Ks),l=Hn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ca).addScaledVector(Ks,u),p}intersectSphere(t,e){En.subVectors(t.center,this.origin);const n=En.dot(this.direction),i=En.dot(En)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,i,r){Pa.subVectors(e,t),$s.subVectors(n,t),La.crossVectors(Pa,$s);let a=this.direction.dot(La),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const c=o*this.direction.dot($s.crossVectors(Hn,$s));if(c<0)return null;const l=o*this.direction.dot(Pa.cross(Hn));if(l<0||c+l>a)return null;const h=-o*Hn.dot(La);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class Ro{constructor(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){Ro.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ro().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),a=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),Vn.crossVectors(n,ze),Vn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),Vn.crossVectors(n,ze)),Vn.normalize(),Zs.crossVectors(ze,Vn),i[0]=Vn.x,i[4]=Zs.x,i[8]=ze.x,i[1]=Vn.y,i[5]=Zs.y,i[9]=ze.y,i[2]=Vn.z,i[6]=Zs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],x=n[7],w=n[11],I=n[15],A=i[0],T=i[4],L=i[8],y=i[12],v=i[1],R=i[5],O=i[9],F=i[13],H=i[2],X=i[6],G=i[10],J=i[14],k=i[3],ot=i[7],dt=i[11],gt=i[15];return r[0]=a*A+o*v+c*H+l*k,r[4]=a*T+o*R+c*X+l*ot,r[8]=a*L+o*O+c*G+l*dt,r[12]=a*y+o*F+c*J+l*gt,r[1]=h*A+d*v+u*H+p*k,r[5]=h*T+d*R+u*X+p*ot,r[9]=h*L+d*O+u*G+p*dt,r[13]=h*y+d*F+u*J+p*gt,r[2]=g*A+_*v+m*H+f*k,r[6]=g*T+_*R+m*X+f*ot,r[10]=g*L+_*O+m*G+f*dt,r[14]=g*y+_*F+m*J+f*gt,r[3]=S*A+x*v+w*H+I*k,r[7]=S*T+x*R+w*X+I*ot,r[11]=S*L+x*O+w*G+I*dt,r[15]=S*y+x*F+w*J+I*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*p-n*c*p)+_*(+e*c*p-e*l*u+r*a*u-i*a*p+i*l*h-r*c*h)+m*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+f*(-i*o*h-e*c*d+e*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],S=d*m*l-_*u*l+_*c*p-o*m*p-d*c*f+o*u*f,x=g*u*l-h*m*l-g*c*p+a*m*p+h*c*f-a*u*f,w=h*_*l-g*d*l+g*o*p-a*_*p-h*o*f+a*d*f,I=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,A=e*S+n*x+i*w+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=S*T,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*T,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*T,t[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*p-n*c*p)*T,t[4]=x*T,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*T,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*f-e*c*f)*T,t[7]=(a*u*r-h*c*r+h*i*l-e*u*l-a*i*p+e*c*p)*T,t[8]=w*T,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*T,t[12]=I*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*T,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,S=c*l,x=c*h,w=c*d,I=n.x,A=n.y,T=n.z;return i[0]=(1-(_+f))*I,i[1]=(p+w)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(p-w)*A,i[5]=(1-(u+f))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-S)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ui.set(i[0],i[1],i[2]).length();const a=Ui.set(i[4],i[5],i[6]).length(),o=Ui.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qe.copy(this);const l=1/r,h=1/a,d=1/o;return Qe.elements[0]*=l,Qe.elements[1]*=l,Qe.elements[2]*=l,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=d,Qe.elements[9]*=d,Qe.elements[10]*=d,e.setFromRotationMatrix(Qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=In){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(o===In)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=In){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*l,p=(n+i)*h;let g,_;if(o===In)g=(a+r)*d,_=-2*d;else if(o===Wr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const Ui=new D,Qe=new re,pf=new D(0,0,0),mf=new D(1,1,1),Vn=new D,Zs=new D,ze=new D,kc=new re,Gc=new Ai;class Ze{constructor(t=0,e=0,n=0,i=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class Bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gf=0;const Wc=new D,Ni=new Ai,wn=new re,js=new D,Ms=new D,_f=new D,xf=new Ai,Xc=new D(1,0,0),qc=new D(0,1,0),Yc=new D(0,0,1),Jc={type:"added"},vf={type:"removed"},Oi={type:"childadded",child:null},Da={type:"childremoved",child:null};class Se extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new Ze,n=new Ai,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Vt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(t,e){return Ni.setFromAxisAngle(t,e),this.quaternion.premultiply(Ni),this}rotateX(t){return this.rotateOnAxis(Xc,t)}rotateY(t){return this.rotateOnAxis(qc,t)}rotateZ(t){return this.rotateOnAxis(Yc,t)}translateOnAxis(t,e){return Wc.copy(t).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xc,t)}translateY(t){return this.translateOnAxis(qc,t)}translateZ(t){return this.translateOnAxis(Yc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?js.copy(t):js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ms,js,this.up):wn.lookAt(js,Ms,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Ni.setFromRotationMatrix(wn),this.quaternion.premultiply(Ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vf),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new D,An=new D,Ia=new D,Tn=new D,Fi=new D,Bi=new D,Kc=new D,Ua=new D,Na=new D,Oa=new D;class _n{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),tn.subVectors(t,e),i.cross(tn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){tn.subVectors(i,e),An.subVectors(n,e),Ia.subVectors(t,e);const a=tn.dot(tn),o=tn.dot(An),c=tn.dot(Ia),l=An.dot(An),h=An.dot(Ia),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static isFrontFacing(t,e,n,i){return tn.subVectors(n,e),An.subVectors(t,e),tn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),tn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return _n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return _n.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return _n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Fi.subVectors(i,n),Bi.subVectors(r,n),Ua.subVectors(t,n);const c=Fi.dot(Ua),l=Bi.dot(Ua);if(c<=0&&l<=0)return e.copy(n);Na.subVectors(t,i);const h=Fi.dot(Na),d=Bi.dot(Na);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Fi,a);Oa.subVectors(t,r);const p=Fi.dot(Oa),g=Bi.dot(Oa);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Bi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Kc.subVectors(r,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Kc,o);const f=1/(m+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(Fi,a).addScaledVector(Bi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Fa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Qt.workingColorSpace){if(t=sf(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fa(a,r,t+1/3),this.g=Fa(a,r,t),this.b=Fa(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,i),this}setStyle(t,e=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return Qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Ie(Te.r*255,0,255))*65536+Math.round(Ie(Te.g*255,0,255))*256+Math.round(Ie(Te.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=dn){Qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Qs);const n=Sa(kn.h,Qs.h,e),i=Sa(kn.s,Qs.s,e),r=Sa(kn.l,Qs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new At;At.NAMES=tu;let Mf=0;class Ri extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=zs(),this.name="",this.type="Material",this.blending=ns,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=So,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yo&&(n.blendSrc=this.blendSrc),this.blendDst!==So&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ge extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new D,tr=new Ht;class $e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return $h("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)tr.fromBufferAttribute(this,e),tr.applyMatrix3(t),this.setXY(e,tr.x,tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_s(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_s(e,this.array)),e}setX(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_s(e,this.array)),e}setY(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_s(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_s(e,this.array)),e}setW(t,e){return this.normalized&&(e=Pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Pe(e,this.array),n=Pe(n,this.array),i=Pe(i,this.array),r=Pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}}class eu extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nu extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yf=0;const Xe=new re,Ba=new Se,zi=new D,He=new Ti,ys=new Ti,ye=new D;class we extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=zs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?nu:eu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Ba.lookAt(t),Ba.updateMatrix(),this.applyMatrix4(Ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(He.min,ys.min),He.expandByPoint(ye),ye.addVectors(He.max,ys.max),He.expandByPoint(ye)):(He.expandByPoint(ys.min),He.expandByPoint(ys.max))}He.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(zi.fromBufferAttribute(t,l),ye.add(zi)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $e(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new D,c[L]=new D;const l=new D,h=new D,d=new D,u=new Ht,p=new Ht,g=new Ht,_=new D,m=new D;function f(L,y,v){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,L),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[L].add(_),o[y].add(_),o[v].add(_),c[L].add(m),c[y].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,y=S.length;L<y;++L){const v=S[L],R=v.start,O=v.count;for(let F=R,H=R+O;F<H;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const x=new D,w=new D,I=new D,A=new D;function T(L){I.fromBufferAttribute(i,L),A.copy(I);const y=o[L];x.copy(y),x.sub(I.multiplyScalar(I.dot(y))).normalize(),w.crossVectors(A,y);const R=w.dot(c[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,R)}for(let L=0,y=S.length;L<y;++L){const v=S[L],R=v.start,O=v.count;for(let F=R,H=R+O;F<H;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new $e(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new re,li=new Qr,er=new bi,Zc=new D,Hi=new D,Vi=new D,ki=new D,za=new D,nr=new D,ir=new Ht,sr=new Ht,rr=new Ht,jc=new D,Qc=new D,tl=new D,ar=new D,or=new D;class Et extends Se{constructor(t=new we,e=new Ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){nr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(za.fromBufferAttribute(d,t),a?nr.addScaledVector(za,h):nr.addScaledVector(za.sub(e),h))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(er.containsPoint(li.origin)===!1&&(li.intersectSphere(er,Zc)===null||li.origin.distanceToSquared(Zc)>(t.far-t.near)**2))&&($c.copy(r).invert(),li.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=S,I=x;w<I;w+=3){const A=o.getX(w),T=o.getX(w+1),L=o.getX(w+2);i=cr(this,f,t,n,l,h,d,A,T,L),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=o.getX(m),x=o.getX(m+1),w=o.getX(m+2);i=cr(this,a,t,n,l,h,d,S,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=S,I=x;w<I;w+=3){const A=w,T=w+1,L=w+2;i=cr(this,f,t,n,l,h,d,A,T,L),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const S=m,x=m+1,w=m+2;i=cr(this,a,t,n,l,h,d,S,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Sf(s,t,e,n,i,r,a,o){let c;if(t.side===Oe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===On,o),c===null)return null;or.copy(o),or.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(or);return l<e.near||l>e.far?null:{distance:l,point:or.clone(),object:s}}function cr(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Hi),s.getVertexPosition(c,Vi),s.getVertexPosition(l,ki);const h=Sf(s,t,e,n,Hi,Vi,ki,ar);if(h){i&&(ir.fromBufferAttribute(i,o),sr.fromBufferAttribute(i,c),rr.fromBufferAttribute(i,l),h.uv=_n.getInterpolation(ar,Hi,Vi,ki,ir,sr,rr,new Ht)),r&&(ir.fromBufferAttribute(r,o),sr.fromBufferAttribute(r,c),rr.fromBufferAttribute(r,l),h.uv1=_n.getInterpolation(ar,Hi,Vi,ki,ir,sr,rr,new Ht)),a&&(jc.fromBufferAttribute(a,o),Qc.fromBufferAttribute(a,c),tl.fromBufferAttribute(a,l),h.normal=_n.getInterpolation(ar,Hi,Vi,ki,jc,Qc,tl,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};_n.getNormal(Hi,Vi,ki,d.normal),h.face=d}return h}class ge extends we{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(_,m,f,S,x,w,I,A,T,L,y){const v=w/T,R=I/L,O=w/2,F=I/2,H=A/2,X=T+1,G=L+1;let J=0,k=0;const ot=new D;for(let dt=0;dt<G;dt++){const gt=dt*R-F;for(let kt=0;kt<X;kt++){const Kt=kt*v-O;ot[_]=Kt*S,ot[m]=gt*x,ot[f]=H,l.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[f]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(kt/T),d.push(1-dt/L),J+=1}}for(let dt=0;dt<L;dt++)for(let gt=0;gt<T;gt++){const kt=u+gt+X*dt,Kt=u+gt+X*(dt+1),W=u+(gt+1)+X*(dt+1),Q=u+(gt+1)+X*dt;c.push(kt,Kt,Q),c.push(Kt,W,Q),k+=6}o.addGroup(p,k,y),p+=k,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ge(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ce(s){const t={};for(let e=0;e<s.length;e++){const n=us(s[e]);for(const i in n)t[i]=n[i]}return t}function Ef(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function iu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const wf={clone:us,merge:Ce};var Af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ti extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Af,this.fragmentShader=Tf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Ef(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class su extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new D,el=new Ht,nl=new Ht;class Ue extends su{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ya*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bo*2*Math.atan(Math.tan(ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,el,nl),e.subVectors(nl,el)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ya*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Wi=1;class bf extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ue(Gi,Wi,t,e);i.layers=this.layers,this.add(i);const r=new Ue(Gi,Wi,t,e);r.layers=this.layers,this.add(r);const a=new Ue(Gi,Wi,t,e);a.layers=this.layers,this.add(a);const o=new Ue(Gi,Wi,t,e);o.layers=this.layers,this.add(o);const c=new Ue(Gi,Wi,t,e);c.layers=this.layers,this.add(c);const l=new Ue(Gi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ru extends be{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rf extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ru(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ge(5,5,5),r=new ti({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:$n});r.uniforms.tEquirect.value=e;const a=new Et(i,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=sn),new bf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const Ha=new D,Cf=new D,Pf=new Vt;class fi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ha.subVectors(n,e).cross(Cf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ha),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pf.getNormalMatrix(t),i=this.coplanarPoint(Ha).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new bi,lr=new D;class zo{constructor(t=new fi,e=new fi,n=new fi,i=new fi,r=new fi,a=new fi){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],S=i[13],x=i[14],w=i[15];if(n[0].setComponents(c-r,u-l,m-p,w-f).normalize(),n[1].setComponents(c+r,u+l,m+p,w+f).normalize(),n[2].setComponents(c+a,u+h,m+g,w+S).normalize(),n[3].setComponents(c-a,u-h,m-g,w-S).normalize(),n[4].setComponents(c-o,u-d,m-_,w-x).normalize(),e===In)n[5].setComponents(c+o,u+d,m+_,w+x).normalize();else if(e===Wr)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(lr.x=i.normal.x>0?t.max.x:t.min.x,lr.y=i.normal.y>0?t.max.y:t.min.y,lr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Lf(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c._updateRange,u=c.updateRanges;if(s.bindBuffer(l,o),d.count===-1&&u.length===0&&s.bufferSubData(l,0,h),u.length!==0){for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class ms extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const S=f*u-a;for(let x=0;x<l;x++){const w=x*d-r;g.push(w,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const x=S+l*f,w=S+l*(f+1),I=S+1+l*(f+1),A=S+1+l*f;p.push(x,w,A),p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var Df=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,ep=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,np=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ip=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cp="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_p=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Up=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,im=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,am=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$m=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ng=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ft={alphahash_fragment:Df,alphahash_pars_fragment:If,alphamap_fragment:Uf,alphamap_pars_fragment:Nf,alphatest_fragment:Of,alphatest_pars_fragment:Ff,aomap_fragment:Bf,aomap_pars_fragment:zf,batching_pars_vertex:Hf,batching_vertex:Vf,begin_vertex:kf,beginnormal_vertex:Gf,bsdfs:Wf,iridescence_fragment:Xf,bumpmap_pars_fragment:qf,clipping_planes_fragment:Yf,clipping_planes_pars_fragment:Jf,clipping_planes_pars_vertex:Kf,clipping_planes_vertex:$f,color_fragment:Zf,color_pars_fragment:jf,color_pars_vertex:Qf,color_vertex:tp,common:ep,cube_uv_reflection_fragment:np,defaultnormal_vertex:ip,displacementmap_pars_vertex:sp,displacementmap_vertex:rp,emissivemap_fragment:ap,emissivemap_pars_fragment:op,colorspace_fragment:cp,colorspace_pars_fragment:lp,envmap_fragment:hp,envmap_common_pars_fragment:up,envmap_pars_fragment:dp,envmap_pars_vertex:fp,envmap_physical_pars_fragment:wp,envmap_vertex:pp,fog_vertex:mp,fog_pars_vertex:gp,fog_fragment:_p,fog_pars_fragment:xp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:Mp,lights_lambert_fragment:yp,lights_lambert_pars_fragment:Sp,lights_pars_begin:Ep,lights_toon_fragment:Ap,lights_toon_pars_fragment:Tp,lights_phong_fragment:bp,lights_phong_pars_fragment:Rp,lights_physical_fragment:Cp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Lp,lights_fragment_maps:Dp,lights_fragment_end:Ip,logdepthbuf_fragment:Up,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Op,logdepthbuf_vertex:Fp,map_fragment:Bp,map_pars_fragment:zp,map_particle_fragment:Hp,map_particle_pars_fragment:Vp,metalnessmap_fragment:kp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Wp,morphcolor_vertex:Xp,morphnormal_vertex:qp,morphtarget_pars_vertex:Yp,morphtarget_vertex:Jp,normal_fragment_begin:Kp,normal_fragment_maps:$p,normal_pars_fragment:Zp,normal_pars_vertex:jp,normal_vertex:Qp,normalmap_pars_fragment:tm,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:nm,clearcoat_pars_fragment:im,iridescence_pars_fragment:sm,opaque_fragment:rm,packing:am,premultiplied_alpha_fragment:om,project_vertex:cm,dithering_fragment:lm,dithering_pars_fragment:hm,roughnessmap_fragment:um,roughnessmap_pars_fragment:dm,shadowmap_pars_fragment:fm,shadowmap_pars_vertex:pm,shadowmap_vertex:mm,shadowmask_pars_fragment:gm,skinbase_vertex:_m,skinning_pars_vertex:xm,skinning_vertex:vm,skinnormal_vertex:Mm,specularmap_fragment:ym,specularmap_pars_fragment:Sm,tonemapping_fragment:Em,tonemapping_pars_fragment:wm,transmission_fragment:Am,transmission_pars_fragment:Tm,uv_pars_fragment:bm,uv_pars_vertex:Rm,uv_vertex:Cm,worldpos_vertex:Pm,background_vert:Lm,background_frag:Dm,backgroundCube_vert:Im,backgroundCube_frag:Um,cube_vert:Nm,cube_frag:Om,depth_vert:Fm,depth_frag:Bm,distanceRGBA_vert:zm,distanceRGBA_frag:Hm,equirect_vert:Vm,equirect_frag:km,linedashed_vert:Gm,linedashed_frag:Wm,meshbasic_vert:Xm,meshbasic_frag:qm,meshlambert_vert:Ym,meshlambert_frag:Jm,meshmatcap_vert:Km,meshmatcap_frag:$m,meshnormal_vert:Zm,meshnormal_frag:jm,meshphong_vert:Qm,meshphong_frag:tg,meshphysical_vert:eg,meshphysical_frag:ng,meshtoon_vert:ig,meshtoon_frag:sg,points_vert:rg,points_frag:ag,shadow_vert:og,shadow_frag:cg,sprite_vert:lg,sprite_frag:hg},it={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},mn={basic:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new At(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Ce([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Ce([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Ce([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new At(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Ce([it.points,it.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Ce([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Ce([it.common,it.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Ce([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Ce([it.sprite,it.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Ce([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Ce([it.lights,it.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};mn.physical={uniforms:Ce([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const hr={r:0,b:0,g:0},ui=new Ze,ug=new re;function dg(s,t,e,n,i,r,a){const o=new At(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1;const w=g(S);w===null?f(o,c):w&&w.isColor&&(f(w,1),x=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===$r)?(h===void 0&&(h=new Et(new ge(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:us(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ui.copy(x.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ug.makeRotationFromEuler(ui)),h.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ae,(d!==w||u!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Et(new ms(2,2),new ti({name:"BackgroundMaterial",uniforms:us(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(w.colorSpace)!==ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,p=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function f(S,x){S.getRGB(hr,iu(s)),n.buffers.color.setClear(hr.r,hr.g,hr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,f(o,c)},render:_,addToRenderList:m}}function fg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(v,R,O,F,H){let X=!1;const G=d(F,O,R);r!==G&&(r=G,l(r.object)),X=p(v,F,O,H),X&&g(v,F,O,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,w(v,R,O,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function d(v,R,O){const F=O.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let X=H[R.id];X===void 0&&(X={},H[R.id]=X);let G=X[F];return G===void 0&&(G=u(c()),X[F]=G),G}function u(v){const R=[],O=[],F=[];for(let H=0;H<e;H++)R[H]=0,O[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,R,O,F){const H=r.attributes,X=R.attributes;let G=0;const J=O.getAttributes();for(const k in J)if(J[k].location>=0){const dt=H[k];let gt=X[k];if(gt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(gt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(gt=v.instanceColor)),dt===void 0||dt.attribute!==gt||gt&&dt.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function g(v,R,O,F){const H={},X=R.attributes;let G=0;const J=O.getAttributes();for(const k in J)if(J[k].location>=0){let dt=X[k];dt===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor));const gt={};gt.attribute=dt,dt&&dt.data&&(gt.data=dt.data),H[k]=gt,G++}r.attributes=H,r.attributesNum=G,r.index=F}function _(){const v=r.newAttributes;for(let R=0,O=v.length;R<O;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const O=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;O[v]=1,F[v]===0&&(s.enableVertexAttribArray(v),F[v]=1),H[v]!==R&&(s.vertexAttribDivisor(v,R),H[v]=R)}function S(){const v=r.newAttributes,R=r.enabledAttributes;for(let O=0,F=R.length;O<F;O++)R[O]!==v[O]&&(s.disableVertexAttribArray(O),R[O]=0)}function x(v,R,O,F,H,X,G){G===!0?s.vertexAttribIPointer(v,R,O,H,X):s.vertexAttribPointer(v,R,O,F,H,X)}function w(v,R,O,F){_();const H=F.attributes,X=O.getAttributes(),G=R.defaultAttributeValues;for(const J in X){const k=X[J];if(k.location>=0){let ot=H[J];if(ot===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const dt=ot.normalized,gt=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const Kt=kt.buffer,W=kt.type,Q=kt.bytesPerElement,pt=W===s.INT||W===s.UNSIGNED_INT||ot.gpuType===zh;if(ot.isInterleavedBufferAttribute){const st=ot.data,Ot=st.stride,Nt=ot.offset;if(st.isInstancedInterleavedBuffer){for(let Wt=0;Wt<k.locationSize;Wt++)f(k.location+Wt,st.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Wt=0;Wt<k.locationSize;Wt++)m(k.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let Wt=0;Wt<k.locationSize;Wt++)x(k.location+Wt,gt/k.locationSize,W,dt,Ot*Q,(Nt+gt/k.locationSize*Wt)*Q,pt)}else{if(ot.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)f(k.location+st,ot.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let st=0;st<k.locationSize;st++)m(k.location+st);s.bindBuffer(s.ARRAY_BUFFER,Kt);for(let st=0;st<k.locationSize;st++)x(k.location+st,gt/k.locationSize,W,dt,gt*Q,gt/k.locationSize*st*Q,pt)}}else if(G!==void 0){const dt=G[J];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(k.location,dt);break;case 3:s.vertexAttrib3fv(k.location,dt);break;case 4:s.vertexAttrib4fv(k.location,dt);break;default:s.vertexAttrib1fv(k.location,dt)}}}}S()}function I(){L();for(const v in n){const R=n[v];for(const O in R){const F=R[O];for(const H in F)h(F[H].object),delete F[H];delete R[O]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const O in R){const F=R[O];for(const H in F)h(F[H].object),delete F[H];delete R[O]}delete n[v.id]}function T(v){for(const R in n){const O=n[R];if(O[v.id]===void 0)continue;const F=O[v.id];for(const H in F)h(F[H].object),delete F[H];delete O[v.id]}}function L(){y(),a=!0,r!==i&&(r=i,l(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function pg(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<d;p++)this.render(l[p],h[p]);else{u.multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function mg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==xn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const T=A===Zr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Qn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Dn&&!T)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:I}}function gg(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new fi,o=new Vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,x=S*4;let w=f.clippingState||null;c.value=w,w=h(g,u,x,p);for(let I=0;I!==x;++I)w[I]=e[I];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,w=p;x!==_;++x,w+=4)a.copy(d[x]).applyMatrix4(S,o),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _g(s){let t=new WeakMap;function e(a,o){return o===Eo?a.mapping=as:o===wo&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eo||o===wo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Rf(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ou extends su{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ts=4,il=[.125,.215,.35,.446,.526,.582],_i=20,Va=new ou,sl=new At;let ka=null,Ga=0,Wa=0,Xa=!1;const pi=(1+Math.sqrt(5))/2,Xi=1/pi,rl=[new D(-pi,Xi,0),new D(pi,Xi,0),new D(-Xi,0,pi),new D(Xi,0,pi),new D(0,pi,-Xi),new D(0,pi,Xi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ka,Ga,Wa),this._renderer.xr.enabled=Xa,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ka=this._renderer.getRenderTarget(),Ga=this._renderer.getActiveCubeFace(),Wa=this._renderer.getActiveMipmapLevel(),Xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Zr,format:xn,colorSpace:ii,depthBuffer:!1},i=ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=vg(r,t,e)}return i}_compileMaterial(t){const e=new Et(this._lodPlanes[0],t);this._renderer.compile(e,Va)}_sceneToCubeUV(t,e,n,i){const o=new Ue(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(sl),h.toneMapping=Zn,h.autoClear=!1;const p=new Ge({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Et(new ge,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(sl),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):S===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;ur(i,S*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===as||t.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Va)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rl[(i-r-1)%rl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Et(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_i-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):_i;m>_i&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_i}`);const f=[];let S=0;for(let T=0;T<_i;++T){const L=T/_,y=Math.exp(-L*L/2);f.push(y),T===0?S+=y:T<m&&(S+=2*y)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const w=this._sizeLods[i],I=3*w*(i>x-ts?i-x+ts:0),A=4*(this._cubeSize-w);ur(e,I,A,3*w,2*w),c.setRenderTarget(e),c.render(d,Va)}}function xg(s){const t=[],e=[],n=[];let i=s;const r=s-ts+1+il.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ts?c=il[a-s+ts-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,S=new Float32Array(_*g*p),x=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,L=A>2?0:-1,y=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];S.set(y,_*g*A),x.set(u,m*g*A);const v=[A,A,A,A,A,A];w.set(v,f*g*A)}const I=new we;I.setAttribute("position",new $e(S,_)),I.setAttribute("uv",new $e(x,m)),I.setAttribute("faceIndex",new $e(w,f)),t.push(I),i>ts&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ol(s,t,e){const n=new Si(s,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function vg(s,t,e){const n=new Float32Array(_i),i=new D(0,1,0);return new ti({name:"SphericalGaussianBlur",defines:{n:_i,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function cl(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ll(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Mg(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Eo||c===wo,h=c===as||c===os;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new al(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new al(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&$h("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sg(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let x=0,w=S.length;x<w;x+=3){const I=S[x+0],A=S[x+1],T=S[x+2];u.push(I,A,A,T,T,I)}}else if(g!==void 0){const S=g.array;_=g.version;for(let x=0,w=S.length/3-1;x<w;x+=3){const I=x+0,A=x+1,T=x+2;u.push(I,A,A,T,T,I)}}else return;const m=new(Kh(u)?nu:eu)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Eg(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){s.drawElements(n,p,r,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(u[m]/a,p[m]);else{_.multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S];for(let S=0;S<_.length;S++)e.update(f,n,_[S])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function wg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ag(s,t,e){const n=new WeakMap,i=new oe;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let I=o.attributes.position.count*w,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const T=new Float32Array(I*A*4*d),L=new jh(T,I,A,d);L.type=Dn,L.needsUpdate=!0;const y=w*4;for(let R=0;R<d;R++){const O=f[R],F=S[R],H=x[R],X=I*A*4*R;for(let G=0;G<O.count;G++){const J=G*y;g===!0&&(i.fromBufferAttribute(O,G),T[X+J+0]=i.x,T[X+J+1]=i.y,T[X+J+2]=i.z,T[X+J+3]=0),_===!0&&(i.fromBufferAttribute(F,G),T[X+J+4]=i.x,T[X+J+5]=i.y,T[X+J+6]=i.z,T[X+J+7]=0),m===!0&&(i.fromBufferAttribute(H,G),T[X+J+8]=i.x,T[X+J+9]=i.y,T[X+J+10]=i.z,T[X+J+11]=H.itemSize===4?i.w:1)}}u={count:d,texture:L,size:new Ht(I,A)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Tg(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class cu extends be{constructor(t,e,n,i,r,a,o,c,l,h=is){if(h!==is&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===is&&(n=cs),n===void 0&&h===hs&&(n=ls),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lu=new be,hu=new cu(1,1);hu.compareFunction=Yh;const uu=new jh,du=new df,fu=new ru,hl=[],ul=[],dl=new Float32Array(16),fl=new Float32Array(9),pl=new Float32Array(4);function gs(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=hl[i];if(r===void 0&&(r=new Float32Array(i),hl[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ta(s,t){let e=ul[t];e===void 0&&(e=new Int32Array(t),ul[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function bg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),xe(e,t)}}function Cg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),xe(e,t)}}function Pg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),xe(e,t)}}function Lg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;pl.set(n),s.uniformMatrix2fv(this.addr,!1,pl),xe(e,n)}}function Dg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;fl.set(n),s.uniformMatrix3fv(this.addr,!1,fl),xe(e,n)}}function Ig(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(_e(e,n))return;dl.set(n),s.uniformMatrix4fv(this.addr,!1,dl),xe(e,n)}}function Ug(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ng(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),xe(e,t)}}function Og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),xe(e,t)}}function Fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),xe(e,t)}}function Bg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),xe(e,t)}}function Hg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),xe(e,t)}}function Vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),xe(e,t)}}function kg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?hu:lu;e.setTexture2D(t||r,i)}function Gg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||du,i)}function Wg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fu,i)}function Xg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||uu,i)}function qg(s){switch(s){case 5126:return bg;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ig;case 5124:case 35670:return Ug;case 35667:case 35671:return Ng;case 35668:case 35672:return Og;case 35669:case 35673:return Fg;case 5125:return Bg;case 36294:return zg;case 36295:return Hg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Gg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Yg(s,t){s.uniform1fv(this.addr,t)}function Jg(s,t){const e=gs(t,this.size,2);s.uniform2fv(this.addr,e)}function Kg(s,t){const e=gs(t,this.size,3);s.uniform3fv(this.addr,e)}function $g(s,t){const e=gs(t,this.size,4);s.uniform4fv(this.addr,e)}function Zg(s,t){const e=gs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jg(s,t){const e=gs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qg(s,t){const e=gs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function t_(s,t){s.uniform1iv(this.addr,t)}function e_(s,t){s.uniform2iv(this.addr,t)}function n_(s,t){s.uniform3iv(this.addr,t)}function i_(s,t){s.uniform4iv(this.addr,t)}function s_(s,t){s.uniform1uiv(this.addr,t)}function r_(s,t){s.uniform2uiv(this.addr,t)}function a_(s,t){s.uniform3uiv(this.addr,t)}function o_(s,t){s.uniform4uiv(this.addr,t)}function c_(s,t,e){const n=this.cache,i=t.length,r=ta(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||lu,r[a])}function l_(s,t,e){const n=this.cache,i=t.length,r=ta(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||du,r[a])}function h_(s,t,e){const n=this.cache,i=t.length,r=ta(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||fu,r[a])}function u_(s,t,e){const n=this.cache,i=t.length,r=ta(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),xe(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||uu,r[a])}function d_(s){switch(s){case 5126:return Yg;case 35664:return Jg;case 35665:return Kg;case 35666:return $g;case 35674:return Zg;case 35675:return jg;case 35676:return Qg;case 5124:case 35670:return t_;case 35667:case 35671:return e_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return s_;case 36294:return r_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return l_;case 35680:case 36300:case 36308:case 36293:return h_;case 36289:case 36303:case 36311:case 36292:return u_}}class f_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}}class p_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d_(e.type)}}class m_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const qa=/(\w+)(\])?(\[|\.)?/g;function ml(s,t){s.seq.push(t),s.map[t.id]=t}function g_(s,t,e){const n=s.name,i=n.length;for(qa.lastIndex=0;;){const r=qa.exec(n),a=qa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ml(e,l===void 0?new f_(o,s,t):new p_(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new m_(o),ml(e,d)),e=d}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);g_(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function gl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const __=37297;let x_=0;function v_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function M_(s){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(s);let n;switch(t===e?n="":t===Gr&&e===kr?n="LinearDisplayP3ToLinearSRGB":t===kr&&e===Gr&&(n="LinearSRGBToLinearDisplayP3"),s){case ii:case jr:return[n,"LinearTransferOETF"];case dn:case Fo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function _l(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+v_(s.getShaderSource(t),a)}else return i}function y_(s,t){const e=M_(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function S_(s,t){let e;switch(t){case Pd:e="Linear";break;case Ld:e="Reinhard";break;case Dd:e="OptimizedCineon";break;case Id:e="ACESFilmic";break;case Nd:e="AgX";break;case Od:e="Neutral";break;case Ud:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function E_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function w_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Is(s){return s!==""}function xl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const T_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Co(s){return s.replace(T_,R_)}const b_=new Map;function R_(s,t){let e=Ft[t];if(e===void 0){const n=b_.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Co(e)}const C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ml(s){return s.replace(C_,P_)}function P_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===nd?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function D_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case os:t="ENVMAP_TYPE_CUBE";break;case $r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function I_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case os:t="ENVMAP_MODE_REFRACTION";break}return t}function U_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case Rd:t="ENVMAP_BLENDING_MIX";break;case Cd:t="ENVMAP_BLENDING_ADD";break}return t}function N_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function O_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=L_(e),l=D_(e),h=I_(e),d=U_(e),u=N_(e),p=E_(e),g=w_(r),_=i.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Is).join(`
`),f.length>0&&(f+=`
`)):(m=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),f=[yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Zn?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,y_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),a=Co(a),a=xl(a,e),a=vl(a,e),o=Co(o),o=xl(o,e),o=vl(o,e),a=Ml(a),o=Ml(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=S+m+a,w=S+f+o,I=gl(i,i.VERTEX_SHADER,x),A=gl(i,i.FRAGMENT_SHADER,w);i.attachShader(_,I),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(s.debug.checkShaderErrors){const O=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(I).trim(),H=i.getShaderInfoLog(A).trim();let X=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,A);else{const J=_l(i,I,"vertex"),k=_l(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+J+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||H==="")&&(G=!1);G&&(R.diagnostics={runnable:X,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(I),i.deleteShader(A),L=new Fr(i,_),y=A_(i,_)}let L;this.getUniforms=function(){return L===void 0&&T(this),L};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,__)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let F_=0;class B_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new z_(t),e.set(t,n)),n}}class z_{constructor(t){this.id=F_++,this.code=t,this.usedTimes=0}}function H_(s,t,e,n,i,r,a){const o=new Bo,c=new B_,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,v,R,O,F){const H=O.fog,X=F.geometry,G=y.isMeshStandardMaterial?O.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),k=J&&J.mapping===$r?J.image.height:null,ot=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const dt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,gt=dt!==void 0?dt.length:0;let kt=0;X.morphAttributes.position!==void 0&&(kt=1),X.morphAttributes.normal!==void 0&&(kt=2),X.morphAttributes.color!==void 0&&(kt=3);let Kt,W,Q,pt;if(ot){const te=mn[ot];Kt=te.vertexShader,W=te.fragmentShader}else Kt=y.vertexShader,W=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),pt=c.getFragmentShaderID(y);const st=s.getRenderTarget(),Ot=F.isInstancedMesh===!0,Nt=F.isBatchedMesh===!0,Wt=!!y.map,P=!!y.matcap,mt=!!J,ct=!!y.aoMap,Lt=!!y.lightMap,_t=!!y.bumpMap,It=!!y.normalMap,Tt=!!y.displacementMap,Ut=!!y.emissiveMap,le=!!y.metalnessMap,b=!!y.roughnessMap,M=y.anisotropy>0,V=y.clearcoat>0,K=y.dispersion>0,$=y.iridescence>0,Z=y.sheen>0,St=y.transmission>0,rt=M&&!!y.anisotropyMap,at=V&&!!y.clearcoatMap,Bt=V&&!!y.clearcoatNormalMap,tt=V&&!!y.clearcoatRoughnessMap,Mt=$&&!!y.iridescenceMap,Gt=$&&!!y.iridescenceThicknessMap,Ct=Z&&!!y.sheenColorMap,lt=Z&&!!y.sheenRoughnessMap,zt=!!y.specularMap,Xt=!!y.specularColorMap,de=!!y.specularIntensityMap,C=St&&!!y.transmissionMap,ht=St&&!!y.thicknessMap,q=!!y.gradientMap,Y=!!y.alphaMap,nt=y.alphaTest>0,Pt=!!y.alphaHash,Jt=!!y.extensions;let fe=Zn;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(fe=s.toneMapping);const ve={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:Kt,fragmentShader:W,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:pt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Nt,batchingColor:Nt&&F._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&F.instanceColor!==null,instancingMorph:Ot&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ii,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:P,envMap:mt,envMapMode:mt&&J.mapping,envMapCubeUVHeight:k,aoMap:ct,lightMap:Lt,bumpMap:_t,normalMap:It,displacementMap:u&&Tt,emissiveMap:Ut,normalMapObjectSpace:It&&y.normalMapType===Kd,normalMapTangentSpace:It&&y.normalMapType===qh,metalnessMap:le,roughnessMap:b,anisotropy:M,anisotropyMap:rt,clearcoat:V,clearcoatMap:at,clearcoatNormalMap:Bt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:$,iridescenceMap:Mt,iridescenceThicknessMap:Gt,sheen:Z,sheenColorMap:Ct,sheenRoughnessMap:lt,specularMap:zt,specularColorMap:Xt,specularIntensityMap:de,transmission:St,transmissionMap:C,thicknessMap:ht,gradientMap:q,opaque:y.transparent===!1&&y.blending===ns&&y.alphaToCoverage===!1,alphaMap:Y,alphaTest:nt,alphaHash:Pt,combine:y.combine,mapUv:Wt&&_(y.map.channel),aoMapUv:ct&&_(y.aoMap.channel),lightMapUv:Lt&&_(y.lightMap.channel),bumpMapUv:_t&&_(y.bumpMap.channel),normalMapUv:It&&_(y.normalMap.channel),displacementMapUv:Tt&&_(y.displacementMap.channel),emissiveMapUv:Ut&&_(y.emissiveMap.channel),metalnessMapUv:le&&_(y.metalnessMap.channel),roughnessMapUv:b&&_(y.roughnessMap.channel),anisotropyMapUv:rt&&_(y.anisotropyMap.channel),clearcoatMapUv:at&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:lt&&_(y.sheenRoughnessMap.channel),specularMapUv:zt&&_(y.specularMap.channel),specularColorMapUv:Xt&&_(y.specularColorMap.channel),specularIntensityMapUv:de&&_(y.specularIntensityMap.channel),transmissionMapUv:C&&_(y.transmissionMap.channel),thicknessMapUv:ht&&_(y.thicknessMap.channel),alphaMapUv:Y&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(It||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Wt||Y),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:kt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gn,flipSided:y.side===Oe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Jt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Jt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function f(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)v.push(R),v.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(S(v,y),x(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function S(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function x(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),y.push(o.mask)}function w(y){const v=g[y.type];let R;if(v){const O=mn[v];R=wf.clone(O.uniforms)}else R=y.uniforms;return R}function I(y,v){let R;for(let O=0,F=h.length;O<F;O++){const H=h[O];if(H.cacheKey===v){R=H,++R.usedTimes;break}}return R===void 0&&(R=new O_(s,v,y,r),h.push(R)),R}function A(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function T(y){c.remove(y)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:I,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:L}}function V_(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function k_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function El(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||k_),n.length>1&&n.sort(u||Sl),i.length>1&&i.sort(u||Sl)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function G_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new El,s.set(n,[a])):i>=r.length?(a=new El,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function W_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new At};break;case"SpotLight":e={position:new D,direction:new D,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function X_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let q_=0;function Y_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function J_(s){const t=new W_,e=X_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new re,a=new re;function o(l){let h=0,d=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,S=0,x=0,w=0,I=0,A=0,T=0;l.sort(Y_);for(let y=0,v=l.length;y<v;y++){const R=l[y],O=R.color,F=R.intensity,H=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*F,d+=O.g*F,u+=O.b*F;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],F);T++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const J=R.shadow,k=e.get(R);k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,S++}n.directional[p]=G,p++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(O).multiplyScalar(F),G.distance=H,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[_]=G;const J=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,J.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,R.castShadow){const k=e.get(R);k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=X,w++}_++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(O).multiplyScalar(F),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const J=R.shadow,k=e.get(R);k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(F),G.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==S||L.numPointShadows!==x||L.numSpotShadows!==w||L.numSpotMaps!==I||L.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,L.directionalLength=p,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=S,L.numPointShadows=x,L.numSpotShadows=w,L.numSpotMaps=I,L.numLightProbes=T,n.version=q_++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,S=l.length;f<S;f++){const x=l[f];if(x.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),d++}else if(x.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function wl(s){const t=new J_(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function K_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new wl(s),t.set(i,[o])):r>=a.length?(o=new wl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class $_ extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Z_ extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function t0(s,t,e){let n=new zo;const i=new Ht,r=new Ht,a=new oe,o=new $_({depthPacking:Jd}),c=new Z_,l={},h=e.maxTextureSize,d={[On]:Oe,[Oe]:On,[gn]:gn},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:j_,fragmentShader:Q_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let f=this.type;this.render=function(A,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),O=s.state;O.setBlending($n),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const F=f!==Pn&&this.type===Pn,H=f===Pn&&this.type!==Pn;for(let X=0,G=A.length;X<G;X++){const J=A[X],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const ot=k.getFrameExtents();if(i.multiply(ot),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,k.mapSize.y=r.y)),k.map===null||F===!0||H===!0){const gt=this.type!==Pn?{minFilter:Ne,magFilter:Ne}:{};k.map!==null&&k.map.dispose(),k.map=new Si(i.x,i.y,gt),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const dt=k.getViewportCount();for(let gt=0;gt<dt;gt++){const kt=k.getViewport(gt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),O.viewport(a),k.updateMatrices(J,gt),n=k.getFrustum(),w(T,L,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Pn&&S(k,L),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,v,R)};function S(A,T){const L=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Si(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,L,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,L,p,_,null)}function x(A,T,L,y){let v=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=L.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const O=v.uuid,F=T.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let X=H[F];X===void 0&&(X=v.clone(),H[F]=X,T.addEventListener("dispose",I)),v=X}if(v.visible=T.visible,v.wireframe=T.wireframe,y===Pn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=s.properties.get(v);O.light=L}return v}function w(A,T,L,y,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const F=t.update(A),H=A.material;if(Array.isArray(H)){const X=F.groups;for(let G=0,J=X.length;G<J;G++){const k=X[G],ot=H[k.materialIndex];if(ot&&ot.visible){const dt=x(A,ot,y,v);A.onBeforeShadow(s,A,T,L,F,dt,k),s.renderBufferDirect(L,null,F,dt,A,k),A.onAfterShadow(s,A,T,L,F,dt,k)}}}else if(H.visible){const X=x(A,H,y,v);A.onBeforeShadow(s,A,T,L,F,X,null),s.renderBufferDirect(L,null,F,X,A,null),A.onAfterShadow(s,A,T,L,F,X,null)}}const O=A.children;for(let F=0,H=O.length;F<H;F++)w(O[F],T,L,y,v)}function I(A){A.target.removeEventListener("dispose",I);for(const L in l){const y=l[L],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function e0(s){function t(){let C=!1;const ht=new oe;let q=null;const Y=new oe(0,0,0,0);return{setMask:function(nt){q!==nt&&!C&&(s.colorMask(nt,nt,nt,nt),q=nt)},setLocked:function(nt){C=nt},setClear:function(nt,Pt,Jt,fe,ve){ve===!0&&(nt*=fe,Pt*=fe,Jt*=fe),ht.set(nt,Pt,Jt,fe),Y.equals(ht)===!1&&(s.clearColor(nt,Pt,Jt,fe),Y.copy(ht))},reset:function(){C=!1,q=null,Y.set(-1,0,0,0)}}}function e(){let C=!1,ht=null,q=null,Y=null;return{setTest:function(nt){nt?pt(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(nt){ht!==nt&&!C&&(s.depthMask(nt),ht=nt)},setFunc:function(nt){if(q!==nt){switch(nt){case yd:s.depthFunc(s.NEVER);break;case Sd:s.depthFunc(s.ALWAYS);break;case Ed:s.depthFunc(s.LESS);break;case zr:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Ad:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case bd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}q=nt}},setLocked:function(nt){C=nt},setClear:function(nt){Y!==nt&&(s.clearDepth(nt),Y=nt)},reset:function(){C=!1,ht=null,q=null,Y=null}}}function n(){let C=!1,ht=null,q=null,Y=null,nt=null,Pt=null,Jt=null,fe=null,ve=null;return{setTest:function(te){C||(te?pt(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(te){ht!==te&&!C&&(s.stencilMask(te),ht=te)},setFunc:function(te,cn,ln){(q!==te||Y!==cn||nt!==ln)&&(s.stencilFunc(te,cn,ln),q=te,Y=cn,nt=ln)},setOp:function(te,cn,ln){(Pt!==te||Jt!==cn||fe!==ln)&&(s.stencilOp(te,cn,ln),Pt=te,Jt=cn,fe=ln)},setLocked:function(te){C=te},setClear:function(te){ve!==te&&(s.clearStencil(te),ve=te)},reset:function(){C=!1,ht=null,q=null,Y=null,nt=null,Pt=null,Jt=null,fe=null,ve=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,S=null,x=null,w=null,I=null,A=new At(0,0,0),T=0,L=!1,y=null,v=null,R=null,O=null,F=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=G>=2);let k=null,ot={};const dt=s.getParameter(s.SCISSOR_BOX),gt=s.getParameter(s.VIEWPORT),kt=new oe().fromArray(dt),Kt=new oe().fromArray(gt);function W(C,ht,q,Y){const nt=new Uint8Array(4),Pt=s.createTexture();s.bindTexture(C,Pt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<q;Jt++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(ht+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return Pt}const Q={};Q[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(s.DEPTH_TEST),r.setFunc(zr),_t(!1),It(rc),pt(s.CULL_FACE),ct($n);function pt(C){l[C]!==!0&&(s.enable(C),l[C]=!0)}function st(C){l[C]!==!1&&(s.disable(C),l[C]=!1)}function Ot(C,ht){return h[C]!==ht?(s.bindFramebuffer(C,ht),h[C]=ht,C===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ht),C===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Nt(C,ht){let q=u,Y=!1;if(C){q=d.get(ht),q===void 0&&(q=[],d.set(ht,q));const nt=C.textures;if(q.length!==nt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let Pt=0,Jt=nt.length;Pt<Jt;Pt++)q[Pt]=s.COLOR_ATTACHMENT0+Pt;q.length=nt.length,Y=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,Y=!0);Y&&s.drawBuffers(q)}function Wt(C){return p!==C?(s.useProgram(C),p=C,!0):!1}const P={[gi]:s.FUNC_ADD,[sd]:s.FUNC_SUBTRACT,[rd]:s.FUNC_REVERSE_SUBTRACT};P[ad]=s.MIN,P[od]=s.MAX;const mt={[cd]:s.ZERO,[ld]:s.ONE,[hd]:s.SRC_COLOR,[yo]:s.SRC_ALPHA,[gd]:s.SRC_ALPHA_SATURATE,[pd]:s.DST_COLOR,[dd]:s.DST_ALPHA,[ud]:s.ONE_MINUS_SRC_COLOR,[So]:s.ONE_MINUS_SRC_ALPHA,[md]:s.ONE_MINUS_DST_COLOR,[fd]:s.ONE_MINUS_DST_ALPHA,[_d]:s.CONSTANT_COLOR,[xd]:s.ONE_MINUS_CONSTANT_COLOR,[vd]:s.CONSTANT_ALPHA,[Md]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(C,ht,q,Y,nt,Pt,Jt,fe,ve,te){if(C===$n){g===!0&&(st(s.BLEND),g=!1);return}if(g===!1&&(pt(s.BLEND),g=!0),C!==id){if(C!==_||te!==L){if((m!==gi||x!==gi)&&(s.blendEquation(s.FUNC_ADD),m=gi,x=gi),te)switch(C){case ns:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ac:s.blendFunc(s.ONE,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ns:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ac:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}f=null,S=null,w=null,I=null,A.set(0,0,0),T=0,_=C,L=te}return}nt=nt||ht,Pt=Pt||q,Jt=Jt||Y,(ht!==m||nt!==x)&&(s.blendEquationSeparate(P[ht],P[nt]),m=ht,x=nt),(q!==f||Y!==S||Pt!==w||Jt!==I)&&(s.blendFuncSeparate(mt[q],mt[Y],mt[Pt],mt[Jt]),f=q,S=Y,w=Pt,I=Jt),(fe.equals(A)===!1||ve!==T)&&(s.blendColor(fe.r,fe.g,fe.b,ve),A.copy(fe),T=ve),_=C,L=!1}function Lt(C,ht){C.side===gn?st(s.CULL_FACE):pt(s.CULL_FACE);let q=C.side===Oe;ht&&(q=!q),_t(q),C.blending===ns&&C.transparent===!1?ct($n):ct(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),i.setMask(C.colorWrite);const Y=C.stencilWrite;a.setTest(Y),Y&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ut(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?pt(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(C){y!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),y=C)}function It(C){C!==td?(pt(s.CULL_FACE),C!==v&&(C===rc?s.cullFace(s.BACK):C===ed?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),v=C}function Tt(C){C!==R&&(X&&s.lineWidth(C),R=C)}function Ut(C,ht,q){C?(pt(s.POLYGON_OFFSET_FILL),(O!==ht||F!==q)&&(s.polygonOffset(ht,q),O=ht,F=q)):st(s.POLYGON_OFFSET_FILL)}function le(C){C?pt(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function b(C){C===void 0&&(C=s.TEXTURE0+H-1),k!==C&&(s.activeTexture(C),k=C)}function M(C,ht,q){q===void 0&&(k===null?q=s.TEXTURE0+H-1:q=k);let Y=ot[q];Y===void 0&&(Y={type:void 0,texture:void 0},ot[q]=Y),(Y.type!==C||Y.texture!==ht)&&(k!==q&&(s.activeTexture(q),k=q),s.bindTexture(C,ht||Q[C]),Y.type=C,Y.texture=ht)}function V(){const C=ot[k];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Gt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ct(C){kt.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),kt.copy(C))}function lt(C){Kt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),Kt.copy(C))}function zt(C,ht){let q=c.get(ht);q===void 0&&(q=new WeakMap,c.set(ht,q));let Y=q.get(C);Y===void 0&&(Y=s.getUniformBlockIndex(ht,C.name),q.set(C,Y))}function Xt(C,ht){const Y=c.get(ht).get(C);o.get(ht)!==Y&&(s.uniformBlockBinding(ht,Y,C.__bindingPointIndex),o.set(ht,Y))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},k=null,ot={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,S=null,x=null,w=null,I=null,A=new At(0,0,0),T=0,L=!1,y=null,v=null,R=null,O=null,F=null,kt.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:pt,disable:st,bindFramebuffer:Ot,drawBuffers:Nt,useProgram:Wt,setBlending:ct,setMaterial:Lt,setFlipSided:_t,setCullFace:It,setLineWidth:Tt,setPolygonOffset:Ut,setScissorTest:le,activeTexture:b,bindTexture:M,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:Mt,texImage3D:Gt,updateUBOMapping:zt,uniformBlockBinding:Xt,texStorage2D:Bt,texStorage3D:tt,texSubImage2D:Z,texSubImage3D:St,compressedTexSubImage2D:rt,compressedTexSubImage3D:at,scissor:Ct,viewport:lt,reset:de}}function n0(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ht,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):Xr("canvas")}function _(b,M,V){let K=1;const $=le(b);if(($.width>V||$.height>V)&&(K=V/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Z=Math.floor(K*$.width),St=Math.floor(K*$.height);d===void 0&&(d=g(Z,St));const rt=M?g(Z,St):d;return rt.width=Z,rt.height=St,rt.getContext("2d").drawImage(b,0,0,Z,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+St+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Ne&&b.minFilter!==sn}function f(b){s.generateMipmap(b)}function S(b,M,V,K,$=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=M;if(M===s.RED&&(V===s.FLOAT&&(Z=s.R32F),V===s.HALF_FLOAT&&(Z=s.R16F),V===s.UNSIGNED_BYTE&&(Z=s.R8)),M===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.R8UI),V===s.UNSIGNED_SHORT&&(Z=s.R16UI),V===s.UNSIGNED_INT&&(Z=s.R32UI),V===s.BYTE&&(Z=s.R8I),V===s.SHORT&&(Z=s.R16I),V===s.INT&&(Z=s.R32I)),M===s.RG&&(V===s.FLOAT&&(Z=s.RG32F),V===s.HALF_FLOAT&&(Z=s.RG16F),V===s.UNSIGNED_BYTE&&(Z=s.RG8)),M===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RG8UI),V===s.UNSIGNED_SHORT&&(Z=s.RG16UI),V===s.UNSIGNED_INT&&(Z=s.RG32UI),V===s.BYTE&&(Z=s.RG8I),V===s.SHORT&&(Z=s.RG16I),V===s.INT&&(Z=s.RG32I)),M===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),M===s.RGBA){const St=$?Vr:Qt.getTransfer(K);V===s.FLOAT&&(Z=s.RGBA32F),V===s.HALF_FLOAT&&(Z=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Z=St===ae?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(b,M){let V;return b?M===null||M===cs||M===ls?V=s.DEPTH24_STENCIL8:M===Dn?V=s.DEPTH32F_STENCIL8:M===Hr&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===cs||M===ls?V=s.DEPTH_COMPONENT24:M===Dn?V=s.DEPTH_COMPONENT32F:M===Hr&&(V=s.DEPTH_COMPONENT16),V}function w(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ne&&b.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function I(b){const M=b.target;M.removeEventListener("dispose",I),T(M),M.isVideoTexture&&h.delete(M)}function A(b){const M=b.target;M.removeEventListener("dispose",A),y(M)}function T(b){const M=n.get(b);if(M.__webglInit===void 0)return;const V=b.source,K=u.get(V);if(K){const $=K[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(b),Object.keys(K).length===0&&u.delete(V)}n.remove(b)}function L(b){const M=n.get(b);s.deleteTexture(M.__webglTexture);const V=b.source,K=u.get(V);delete K[M.__cacheKey],a.memory.textures--}function y(b){const M=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let $=0;$<M.__webglFramebuffer[K].length;$++)s.deleteFramebuffer(M.__webglFramebuffer[K][$]);else s.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)s.deleteFramebuffer(M.__webglFramebuffer[K]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=b.textures;for(let K=0,$=V.length;K<$;K++){const Z=n.get(V[K]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(V[K])}n.remove(b)}let v=0;function R(){v=0}function O(){const b=v;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),v+=1,b}function F(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function H(b,M){const V=n.get(b);if(b.isVideoTexture&&Tt(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(V,b,M);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+M)}function X(b,M){const V=n.get(b);if(b.version>0&&V.__version!==b.version){Kt(V,b,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+M)}function G(b,M){const V=n.get(b);if(b.version>0&&V.__version!==b.version){Kt(V,b,M);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+M)}function J(b,M){const V=n.get(b);if(b.version>0&&V.__version!==b.version){W(V,b,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+M)}const k={[Ao]:s.REPEAT,[vi]:s.CLAMP_TO_EDGE,[To]:s.MIRRORED_REPEAT},ot={[Ne]:s.NEAREST,[Fd]:s.NEAREST_MIPMAP_NEAREST,[Ws]:s.NEAREST_MIPMAP_LINEAR,[sn]:s.LINEAR,[ma]:s.LINEAR_MIPMAP_NEAREST,[Mi]:s.LINEAR_MIPMAP_LINEAR},dt={[$d]:s.NEVER,[nf]:s.ALWAYS,[Zd]:s.LESS,[Yh]:s.LEQUAL,[jd]:s.EQUAL,[ef]:s.GEQUAL,[Qd]:s.GREATER,[tf]:s.NOTEQUAL};function gt(b,M){if(M.type===Dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===ma||M.magFilter===Ws||M.magFilter===Mi||M.minFilter===sn||M.minFilter===ma||M.minFilter===Ws||M.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,k[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,k[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,k[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,ot[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,ot[M.minFilter]),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,dt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ne||M.minFilter!==Ws&&M.minFilter!==Mi||M.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function kt(b,M){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",I));const K=M.source;let $=u.get(K);$===void 0&&($={},u.set(K,$));const Z=F(M);if(Z!==b.__cacheKey){$[Z]===void 0&&($[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),$[Z].usedTimes++;const St=$[b.__cacheKey];St!==void 0&&($[b.__cacheKey].usedTimes--,St.usedTimes===0&&L(M)),b.__cacheKey=Z,b.__webglTexture=$[Z].texture}return V}function Kt(b,M,V){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);const $=kt(b,M),Z=M.source;e.bindTexture(K,b.__webglTexture,s.TEXTURE0+V);const St=n.get(Z);if(Z.version!==St.__version||$===!0){e.activeTexture(s.TEXTURE0+V);const rt=Qt.getPrimaries(Qt.workingColorSpace),at=M.colorSpace===Kn?null:Qt.getPrimaries(M.colorSpace),Bt=M.colorSpace===Kn||rt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let tt=_(M.image,!1,i.maxTextureSize);tt=Ut(M,tt);const Mt=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let Ct=S(M.internalFormat,Mt,Gt,M.colorSpace,M.isVideoTexture);gt(K,M);let lt;const zt=M.mipmaps,Xt=M.isVideoTexture!==!0,de=St.__version===void 0||$===!0,C=Z.dataReady,ht=w(M,tt);if(M.isDepthTexture)Ct=x(M.format===hs,M.type),de&&(Xt?e.texStorage2D(s.TEXTURE_2D,1,Ct,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,Mt,Gt,null));else if(M.isDataTexture)if(zt.length>0){Xt&&de&&e.texStorage2D(s.TEXTURE_2D,ht,Ct,zt[0].width,zt[0].height);for(let q=0,Y=zt.length;q<Y;q++)lt=zt[q],Xt?C&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,lt.width,lt.height,Mt,Gt,lt.data):e.texImage2D(s.TEXTURE_2D,q,Ct,lt.width,lt.height,0,Mt,Gt,lt.data);M.generateMipmaps=!1}else Xt?(de&&e.texStorage2D(s.TEXTURE_2D,ht,Ct,tt.width,tt.height),C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,Mt,Gt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Ct,tt.width,tt.height,0,Mt,Gt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Ct,zt[0].width,zt[0].height,tt.depth);for(let q=0,Y=zt.length;q<Y;q++)if(lt=zt[q],M.format!==xn)if(Mt!==null)if(Xt){if(C)if(M.layerUpdates.size>0){for(const nt of M.layerUpdates){const Pt=lt.width*lt.height;e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,nt,lt.width,lt.height,1,Mt,lt.data.slice(Pt*nt,Pt*(nt+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,lt.width,lt.height,tt.depth,Mt,lt.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ct,lt.width,lt.height,tt.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?C&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,lt.width,lt.height,tt.depth,Mt,Gt,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ct,lt.width,lt.height,tt.depth,0,Mt,Gt,lt.data)}else{Xt&&de&&e.texStorage2D(s.TEXTURE_2D,ht,Ct,zt[0].width,zt[0].height);for(let q=0,Y=zt.length;q<Y;q++)lt=zt[q],M.format!==xn?Mt!==null?Xt?C&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,lt.width,lt.height,Mt,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ct,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?C&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,lt.width,lt.height,Mt,Gt,lt.data):e.texImage2D(s.TEXTURE_2D,q,Ct,lt.width,lt.height,0,Mt,Gt,lt.data)}else if(M.isDataArrayTexture)if(Xt){if(de&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Ct,tt.width,tt.height,tt.depth),C)if(M.layerUpdates.size>0){let q;switch(Gt){case s.UNSIGNED_BYTE:switch(Mt){case s.ALPHA:q=1;break;case s.LUMINANCE:q=1;break;case s.LUMINANCE_ALPHA:q=2;break;case s.RGB:q=3;break;case s.RGBA:q=4;break;default:throw new Error(`Unknown texel size for format ${Mt}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:q=1;break;default:throw new Error(`Unknown texel size for type ${Gt}.`)}const Y=tt.width*tt.height*q;for(const nt of M.layerUpdates)e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,tt.width,tt.height,1,Mt,Gt,tt.data.slice(Y*nt,Y*(nt+1)));M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Mt,Gt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ct,tt.width,tt.height,tt.depth,0,Mt,Gt,tt.data);else if(M.isData3DTexture)Xt?(de&&e.texStorage3D(s.TEXTURE_3D,ht,Ct,tt.width,tt.height,tt.depth),C&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Mt,Gt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Ct,tt.width,tt.height,tt.depth,0,Mt,Gt,tt.data);else if(M.isFramebufferTexture){if(de)if(Xt)e.texStorage2D(s.TEXTURE_2D,ht,Ct,tt.width,tt.height);else{let q=tt.width,Y=tt.height;for(let nt=0;nt<ht;nt++)e.texImage2D(s.TEXTURE_2D,nt,Ct,q,Y,0,Mt,Gt,null),q>>=1,Y>>=1}}else if(zt.length>0){if(Xt&&de){const q=le(zt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Ct,q.width,q.height)}for(let q=0,Y=zt.length;q<Y;q++)lt=zt[q],Xt?C&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,Mt,Gt,lt):e.texImage2D(s.TEXTURE_2D,q,Ct,Mt,Gt,lt);M.generateMipmaps=!1}else if(Xt){if(de){const q=le(tt);e.texStorage2D(s.TEXTURE_2D,ht,Ct,q.width,q.height)}C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Gt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Ct,Mt,Gt,tt);m(M)&&f(K),St.__version=Z.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function W(b,M,V){if(M.image.length!==6)return;const K=kt(b,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+V);const Z=n.get($);if($.version!==Z.__version||K===!0){e.activeTexture(s.TEXTURE0+V);const St=Qt.getPrimaries(Qt.workingColorSpace),rt=M.colorSpace===Kn?null:Qt.getPrimaries(M.colorSpace),at=M.colorSpace===Kn||St===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Bt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let Y=0;Y<6;Y++)!Bt&&!tt?Mt[Y]=_(M.image[Y],!0,i.maxCubemapSize):Mt[Y]=tt?M.image[Y].image:M.image[Y],Mt[Y]=Ut(M,Mt[Y]);const Gt=Mt[0],Ct=r.convert(M.format,M.colorSpace),lt=r.convert(M.type),zt=S(M.internalFormat,Ct,lt,M.colorSpace),Xt=M.isVideoTexture!==!0,de=Z.__version===void 0||K===!0,C=$.dataReady;let ht=w(M,Gt);gt(s.TEXTURE_CUBE_MAP,M);let q;if(Bt){Xt&&de&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,Gt.width,Gt.height);for(let Y=0;Y<6;Y++){q=Mt[Y].mipmaps;for(let nt=0;nt<q.length;nt++){const Pt=q[nt];M.format!==xn?Ct!==null?Xt?C&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,0,0,Pt.width,Pt.height,Ct,Pt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,zt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,0,0,Pt.width,Pt.height,Ct,lt,Pt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt,zt,Pt.width,Pt.height,0,Ct,lt,Pt.data)}}}else{if(q=M.mipmaps,Xt&&de){q.length>0&&ht++;const Y=le(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,zt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tt){Xt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Mt[Y].width,Mt[Y].height,Ct,lt,Mt[Y].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,zt,Mt[Y].width,Mt[Y].height,0,Ct,lt,Mt[Y].data);for(let nt=0;nt<q.length;nt++){const Jt=q[nt].image[Y].image;Xt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,0,0,Jt.width,Jt.height,Ct,lt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,zt,Jt.width,Jt.height,0,Ct,lt,Jt.data)}}else{Xt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ct,lt,Mt[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,zt,Ct,lt,Mt[Y]);for(let nt=0;nt<q.length;nt++){const Pt=q[nt];Xt?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,0,0,Ct,lt,Pt.image[Y]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,nt+1,zt,Ct,lt,Pt.image[Y])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),Z.__version=$.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Q(b,M,V,K,$,Z){const St=r.convert(V.format,V.colorSpace),rt=r.convert(V.type),at=S(V.internalFormat,St,rt,V.colorSpace);if(!n.get(M).__hasExternalTextures){const tt=Math.max(1,M.width>>Z),Mt=Math.max(1,M.height>>Z);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,Z,at,tt,Mt,M.depth,0,St,rt,null):e.texImage2D($,Z,at,tt,Mt,0,St,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),It(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,n.get(V).__webglTexture,0,_t(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,n.get(V).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function pt(b,M,V){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer){const K=M.depthTexture,$=K&&K.isDepthTexture?K.type:null,Z=x(M.stencilBuffer,$),St=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=_t(M);It(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,Z,M.width,M.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Z,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Z,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,b)}else{const K=M.textures;for(let $=0;$<K.length;$++){const Z=K[$],St=r.convert(Z.format,Z.colorSpace),rt=r.convert(Z.type),at=S(Z.internalFormat,St,rt,Z.colorSpace),Bt=_t(M);V&&It(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,at,M.width,M.height):It(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Bt,at,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,at,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,$=_t(M);if(M.depthTexture.format===is)It(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===hs)It(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ot(b){const M=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");st(M.__webglFramebuffer,b)}else if(V){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=s.createRenderbuffer(),pt(M.__webglDepthbuffer[K],b,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),pt(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(b,M,V){const K=n.get(b);M!==void 0&&Q(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Ot(b)}function Wt(b){const M=b.texture,V=n.get(b),K=n.get(M);b.addEventListener("dispose",A);const $=b.textures,Z=b.isWebGLCubeRenderTarget===!0,St=$.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,a.memory.textures++),Z){V.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[rt]=[];for(let at=0;at<M.mipmaps.length;at++)V.__webglFramebuffer[rt][at]=s.createFramebuffer()}else V.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)V.__webglFramebuffer[rt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(St)for(let rt=0,at=$.length;rt<at;rt++){const Bt=n.get($[rt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&It(b)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){const at=$[rt];V.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[rt]);const Bt=r.convert(at.format,at.colorSpace),tt=r.convert(at.type),Mt=S(at.internalFormat,Bt,tt,at.colorSpace,b.isXRRenderTarget===!0),Gt=_t(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,Mt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,V.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),pt(V.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),gt(s.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let at=0;at<M.mipmaps.length;at++)Q(V.__webglFramebuffer[rt][at],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else Q(V.__webglFramebuffer[rt],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(M)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let rt=0,at=$.length;rt<at;rt++){const Bt=$[rt],tt=n.get(Bt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),gt(s.TEXTURE_2D,Bt),Q(V.__webglFramebuffer,b,Bt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(Bt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),gt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let at=0;at<M.mipmaps.length;at++)Q(V.__webglFramebuffer[at],b,M,s.COLOR_ATTACHMENT0,rt,at);else Q(V.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,rt,0);m(M)&&f(rt),e.unbindTexture()}b.depthBuffer&&Ot(b)}function P(b){const M=b.textures;for(let V=0,K=M.length;V<K;V++){const $=M[V];if(m($)){const Z=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,St=n.get($).__webglTexture;e.bindTexture(Z,St),f(Z),e.unbindTexture()}}}const mt=[],ct=[];function Lt(b){if(b.samples>0){if(It(b)===!1){const M=b.textures,V=b.width,K=b.height;let $=s.COLOR_BUFFER_BIT;const Z=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=n.get(b),rt=M.length>1;if(rt)for(let at=0;at<M.length;at++)e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let at=0;at<M.length;at++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[at]);const Bt=n.get(M[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Bt,0)}s.blitFramebuffer(0,0,V,K,0,0,V,K,$,s.NEAREST),c===!0&&(mt.length=0,ct.length=0,mt.push(s.COLOR_ATTACHMENT0+at),b.depthBuffer&&b.resolveDepthBuffer===!1&&(mt.push(Z),ct.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ct)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let at=0;at<M.length;at++){e.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,St.__webglColorRenderbuffer[at]);const Bt=n.get(M[at]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,Bt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function _t(b){return Math.min(i.maxSamples,b.samples)}function It(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(b){const M=a.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Ut(b,M){const V=b.colorSpace,K=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||V!==ii&&V!==Kn&&(Qt.getTransfer(V)===ae?(K!==xn||$!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=R,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Nt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=It}function i0(s,t){function e(n,i=Kn){let r;const a=Qt.getTransfer(i);if(n===Qn)return s.UNSIGNED_BYTE;if(n===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Hd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bd)return s.BYTE;if(n===zd)return s.SHORT;if(n===Hr)return s.UNSIGNED_SHORT;if(n===zh)return s.INT;if(n===cs)return s.UNSIGNED_INT;if(n===Dn)return s.FLOAT;if(n===Zr)return s.HALF_FLOAT;if(n===Vd)return s.ALPHA;if(n===kd)return s.RGB;if(n===xn)return s.RGBA;if(n===Gd)return s.LUMINANCE;if(n===Wd)return s.LUMINANCE_ALPHA;if(n===is)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===kh)return s.RED;if(n===Gh)return s.RED_INTEGER;if(n===Xd)return s.RG;if(n===Wh)return s.RG_INTEGER;if(n===Xh)return s.RGBA_INTEGER;if(n===ga||n===_a||n===xa||n===va)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lc||n===hc||n===uc||n===dc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===pc||n===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fc||n===pc)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gc||n===_c||n===xc||n===vc||n===Mc||n===yc||n===Sc||n===Ec||n===wc||n===Ac||n===Tc||n===bc||n===Rc||n===Cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_c)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ec)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ma||n===Pc||n===Lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ma)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qd||n===Dc||n===Ic||n===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ma)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ls?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class s0 extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Un extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class Ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const a0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new be,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ti({vertexShader:a0,fragmentShader:o0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new ms(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class l0 extends ps{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=new c0,m=e.getContextAttributes();let f=null,S=null;const x=[],w=[],I=new Ht;let A=null;const T=new Ue;T.layers.enable(1),T.viewport=new oe;const L=new Ue;L.layers.enable(2),L.viewport=new oe;const y=[T,L],v=new s0;v.layers.enable(1),v.layers.enable(2);let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=x[W];return Q===void 0&&(Q=new Ya,x[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=x[W];return Q===void 0&&(Q=new Ya,x[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=x[W];return Q===void 0&&(Q=new Ya,x[W]=Q),Q.getHandSpace()};function F(W){const Q=w.indexOf(W.inputSource);if(Q===-1)return;const pt=x[Q];pt!==void 0&&(pt.update(W.inputSource,W.frame,l||a),pt.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let W=0;W<x.length;W++){const Q=w[W];Q!==null&&(w[W]=null,x[W].disconnect(Q))}R=null,O=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,S=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Si(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,pt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?hs:is,pt=m.stencil?ls:cs);const Ot={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Ot),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Si(u.textureWidth,u.textureHeight,{format:xn,type:Qn,depthTexture:new cu(u.textureWidth,u.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(W){for(let Q=0;Q<W.removed.length;Q++){const pt=W.removed[Q],st=w.indexOf(pt);st>=0&&(w[st]=null,x[st].disconnect(pt))}for(let Q=0;Q<W.added.length;Q++){const pt=W.added[Q];let st=w.indexOf(pt);if(st===-1){for(let Nt=0;Nt<x.length;Nt++)if(Nt>=w.length){w.push(pt),st=Nt;break}else if(w[Nt]===null){w[Nt]=pt,st=Nt;break}if(st===-1)break}const Ot=x[st];Ot&&Ot.connect(pt)}}const G=new D,J=new D;function k(W,Q,pt){G.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(pt.matrixWorld);const st=G.distanceTo(J),Ot=Q.projectionMatrix.elements,Nt=pt.projectionMatrix.elements,Wt=Ot[14]/(Ot[10]-1),P=Ot[14]/(Ot[10]+1),mt=(Ot[9]+1)/Ot[5],ct=(Ot[9]-1)/Ot[5],Lt=(Ot[8]-1)/Ot[0],_t=(Nt[8]+1)/Nt[0],It=Wt*Lt,Tt=Wt*_t,Ut=st/(-Lt+_t),le=Ut*-Lt;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(le),W.translateZ(Ut),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const b=Wt+Ut,M=P+Ut,V=It-le,K=Tt+(st-le),$=mt*P/M*b,Z=ct*P/M*b;W.projectionMatrix.makePerspective(V,K,$,Z,b,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ot(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),v.near=L.near=T.near=W.near,v.far=L.far=T.far=W.far,(R!==v.near||O!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,O=v.far,T.near=R,T.far=O,L.near=R,L.far=O,T.updateProjectionMatrix(),L.updateProjectionMatrix(),W.updateProjectionMatrix());const Q=W.parent,pt=v.cameras;ot(v,Q);for(let st=0;st<pt.length;st++)ot(pt[st],Q);pt.length===2?k(v,T,L):v.projectionMatrix.copy(T.projectionMatrix),dt(W,v,Q)};function dt(W,Q,pt){pt===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(pt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=bo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let gt=null;function kt(W,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const pt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let st=!1;pt.length!==v.cameras.length&&(v.cameras.length=0,st=!0);for(let Nt=0;Nt<pt.length;Nt++){const Wt=pt[Nt];let P=null;if(p!==null)P=p.getViewport(Wt);else{const ct=d.getViewSubImage(u,Wt);P=ct.viewport,Nt===0&&(t.setRenderTargetTextures(S,ct.colorTexture,u.ignoreDepthValues?void 0:ct.depthStencilTexture),t.setRenderTarget(S))}let mt=y[Nt];mt===void 0&&(mt=new Ue,mt.layers.enable(Nt),mt.viewport=new oe,y[Nt]=mt),mt.matrix.fromArray(Wt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Wt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(P.x,P.y,P.width,P.height),Nt===0&&(v.matrix.copy(mt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),st===!0&&v.cameras.push(mt)}const Ot=i.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Nt=d.getDepthInformation(pt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,i.renderState)}}for(let pt=0;pt<x.length;pt++){const st=w[pt],Ot=x[pt];st!==null&&Ot!==void 0&&Ot.update(st,Q,l||a)}gt&&gt(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Kt=new au;Kt.setAnimationLoop(kt),this.setAnimationLoop=function(W){gt=W},this.dispose=function(){}}}const di=new Ze,h0=new re;function u0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,iu(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,S,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),x=S.envMap,w=S.envMapRotation;x&&(m.envMap.value=x,di.copy(w),di.x*=-1,di.y*=-1,di.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(h0.makeRotationFromEuler(di)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,S,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function d0(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const w=x.program;n.uniformBlockBinding(S,w)}function l(S,x){let w=i[S.id];w===void 0&&(g(S),w=h(S),i[S.id]=w,S.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(S,I);const A=t.render.frame;r[S.id]!==A&&(u(S),r[S.id]=A)}function h(S){const x=d();S.__bindingPointIndex=x;const w=s.createBuffer(),I=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const x=i[S.id],w=S.uniforms,I=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,T=w.length;A<T;A++){const L=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,v=L.length;y<v;y++){const R=L[y];if(p(R,A,y,I)===!0){const O=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let X=0;X<F.length;X++){const G=F[X],J=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,O+H,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,x,w,I){const A=S.value,T=x+"_"+w;if(I[T]===void 0)return typeof A=="number"||typeof A=="boolean"?I[T]=A:I[T]=A.clone(),!0;{const L=I[T];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return I[T]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(S){const x=S.uniforms;let w=0;const I=16;for(let T=0,L=x.length;T<L;T++){const y=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,R=y.length;v<R;v++){const O=y[v],F=Array.isArray(O.value)?O.value:[O.value];for(let H=0,X=F.length;H<X;H++){const G=F[H],J=_(G),k=w%I;k!==0&&I-k<J.boundary&&(w+=I-k),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=J.storage}}}const A=w%I;return A>0&&(w+=I-A),S.__size=w,S.__cache={},this}function _(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class f0{constructor(t={}){const{canvas:e=rf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dn,this.toneMapping=Zn,this.toneMappingExposure=1;const x=this;let w=!1,I=0,A=0,T=null,L=-1,y=null;const v=new oe,R=new oe;let O=null;const F=new At(0);let H=0,X=e.width,G=e.height,J=1,k=null,ot=null;const dt=new oe(0,0,X,G),gt=new oe(0,0,X,G);let kt=!1;const Kt=new zo;let W=!1,Q=!1;const pt=new re,st=new D,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Wt(){return T===null?J:1}let P=n;function mt(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${No}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",q,!1),e.addEventListener("webglcontextcreationerror",Y,!1),P===null){const U="webgl2";if(P=mt(U,E),P===null)throw mt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ct,Lt,_t,It,Tt,Ut,le,b,M,V,K,$,Z,St,rt,at,Bt,tt,Mt,Gt,Ct,lt,zt,Xt;function de(){ct=new yg(P),ct.init(),lt=new i0(P,ct),Lt=new mg(P,ct,t,lt),_t=new e0(P),It=new wg(P),Tt=new V_,Ut=new n0(P,ct,_t,Tt,Lt,lt,It),le=new _g(x),b=new Mg(x),M=new Lf(P),zt=new fg(P,M),V=new Sg(P,M,It,zt),K=new Tg(P,V,M,It),Mt=new Ag(P,Lt,Ut),at=new gg(Tt),$=new H_(x,le,b,ct,Lt,zt,at),Z=new u0(x,Tt),St=new G_,rt=new K_(ct),tt=new dg(x,le,b,_t,K,u,c),Bt=new t0(x,K,Lt),Xt=new d0(P,It,Lt,_t),Gt=new pg(P,ct,It),Ct=new Eg(P,ct,It),It.programs=$.programs,x.capabilities=Lt,x.extensions=ct,x.properties=Tt,x.renderLists=St,x.shadowMap=Bt,x.state=_t,x.info=It}de();const C=new l0(x,P);this.xr=C,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(X,G,!1))},this.getSize=function(E){return E.set(X,G)},this.setSize=function(E,U,B=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,G=U,e.width=Math.floor(E*J),e.height=Math.floor(U*J),B===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(X*J,G*J).floor()},this.setDrawingBufferSize=function(E,U,B){X=E,G=U,J=B,e.width=Math.floor(E*B),e.height=Math.floor(U*B),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,U,B,z){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,U,B,z),_t.viewport(v.copy(dt).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(gt)},this.setScissor=function(E,U,B,z){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,U,B,z),_t.scissor(R.copy(gt).multiplyScalar(J).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(E){_t.setScissorTest(kt=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){ot=E},this.getClearColor=function(E){return E.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(E=!0,U=!0,B=!0){let z=0;if(E){let N=!1;if(T!==null){const et=T.texture.format;N=et===Xh||et===Wh||et===Gh}if(N){const et=T.texture.type,ut=et===Qn||et===cs||et===Hr||et===ls||et===Hh||et===Vh,xt=tt.getClearColor(),vt=tt.getClearAlpha(),bt=xt.r,Rt=xt.g,wt=xt.b;ut?(p[0]=bt,p[1]=Rt,p[2]=wt,p[3]=vt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=bt,g[1]=Rt,g[2]=wt,g[3]=vt,P.clearBufferiv(P.COLOR,0,g))}else z|=P.COLOR_BUFFER_BIT}U&&(z|=P.DEPTH_BUFFER_BIT),B&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",q,!1),e.removeEventListener("webglcontextcreationerror",Y,!1),St.dispose(),rt.dispose(),Tt.dispose(),le.dispose(),b.dispose(),K.dispose(),zt.dispose(),Xt.dispose(),$.dispose(),C.dispose(),C.removeEventListener("sessionstart",cn),C.removeEventListener("sessionend",ln),ri.stop()};function ht(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=It.autoReset,U=Bt.enabled,B=Bt.autoUpdate,z=Bt.needsUpdate,N=Bt.type;de(),It.autoReset=E,Bt.enabled=U,Bt.autoUpdate=B,Bt.needsUpdate=z,Bt.type=N}function Y(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const U=E.target;U.removeEventListener("dispose",nt),Pt(U)}function Pt(E){Jt(E),Tt.remove(E)}function Jt(E){const U=Tt.get(E).programs;U!==void 0&&(U.forEach(function(B){$.releaseProgram(B)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,B,z,N,et){U===null&&(U=Ot);const ut=N.isMesh&&N.matrixWorld.determinant()<0,xt=Ju(E,U,B,z,N);_t.setMaterial(z,ut);let vt=B.index,bt=1;if(z.wireframe===!0){if(vt=V.getWireframeAttribute(B),vt===void 0)return;bt=2}const Rt=B.drawRange,wt=B.attributes.position;let $t=Rt.start*bt,he=(Rt.start+Rt.count)*bt;et!==null&&($t=Math.max($t,et.start*bt),he=Math.min(he,(et.start+et.count)*bt)),vt!==null?($t=Math.max($t,0),he=Math.min(he,vt.count)):wt!=null&&($t=Math.max($t,0),he=Math.min(he,wt.count));const ue=he-$t;if(ue<0||ue===1/0)return;zt.setup(N,z,xt,B,vt);let Be,Zt=Gt;if(vt!==null&&(Be=M.get(vt),Zt=Ct,Zt.setIndex(Be)),N.isMesh)z.wireframe===!0?(_t.setLineWidth(z.wireframeLinewidth*Wt()),Zt.setMode(P.LINES)):Zt.setMode(P.TRIANGLES);else if(N.isLine){let yt=z.linewidth;yt===void 0&&(yt=1),_t.setLineWidth(yt*Wt()),N.isLineSegments?Zt.setMode(P.LINES):N.isLineLoop?Zt.setMode(P.LINE_LOOP):Zt.setMode(P.LINE_STRIP)}else N.isPoints?Zt.setMode(P.POINTS):N.isSprite&&Zt.setMode(P.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Zt.renderInstances($t,ue,N.count);else if(B.isInstancedBufferGeometry){const yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Re=Math.min(B.instanceCount,yt);Zt.renderInstances($t,ue,Re)}else Zt.render($t,ue)};function fe(E,U,B){E.transparent===!0&&E.side===gn&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,ks(E,U,B),E.side=On,E.needsUpdate=!0,ks(E,U,B),E.side=gn):ks(E,U,B)}this.compile=function(E,U,B=null){B===null&&(B=E),m=rt.get(B),m.init(U),S.push(m),B.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==B&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const z=new Set;return E.traverse(function(N){const et=N.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const xt=et[ut];fe(xt,B,N),z.add(xt)}else fe(et,B,N),z.add(et)}),S.pop(),m=null,z},this.compileAsync=function(E,U,B=null){const z=this.compile(E,U,B);return new Promise(N=>{function et(){if(z.forEach(function(ut){Tt.get(ut).currentProgram.isReady()&&z.delete(ut)}),z.size===0){N(E);return}setTimeout(et,10)}ct.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let ve=null;function te(E){ve&&ve(E)}function cn(){ri.stop()}function ln(){ri.start()}const ri=new au;ri.setAnimationLoop(te),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){ve=E,C.setAnimationLoop(E),E===null?ri.stop():ri.start()},C.addEventListener("sessionstart",cn),C.addEventListener("sessionend",ln),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(U),U=C.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,T),m=rt.get(E,S.length),m.init(U),S.push(m),pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Kt.setFromProjectionMatrix(pt),Q=this.localClippingEnabled,W=at.init(this.clippingPlanes,Q),_=St.get(E,f.length),_.init(),f.push(_),C.enabled===!0&&C.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&ua(et,U,-1/0,x.sortObjects)}ua(E,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,ot),Nt=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Nt&&tt.addToRenderList(_,E),this.info.render.frame++,W===!0&&at.beginShadows();const B=m.state.shadowsArray;Bt.render(B,E,U),W===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let ut=0,xt=et.length;ut<xt;ut++){const vt=et[ut];tc(z,N,E,vt)}Nt&&tt.render(E);for(let ut=0,xt=et.length;ut<xt;ut++){const vt=et[ut];Qo(_,E,vt,vt.viewport)}}else N.length>0&&tc(z,N,E,U),Nt&&tt.render(E),Qo(_,E,U);T!==null&&(Ut.updateMultisampleRenderTarget(T),Ut.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,U),zt.resetDefaultState(),L=-1,y=null,S.pop(),S.length>0?(m=S[S.length-1],W===!0&&at.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ua(E,U,B,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)B=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Kt.intersectsSprite(E)){z&&st.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pt);const ut=K.update(E),xt=E.material;xt.visible&&_.push(E,ut,xt,B,st.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Kt.intersectsObject(E))){const ut=K.update(E),xt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),st.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),st.copy(ut.boundingSphere.center)),st.applyMatrix4(E.matrixWorld).applyMatrix4(pt)),Array.isArray(xt)){const vt=ut.groups;for(let bt=0,Rt=vt.length;bt<Rt;bt++){const wt=vt[bt],$t=xt[wt.materialIndex];$t&&$t.visible&&_.push(E,ut,$t,B,st.z,wt)}}else xt.visible&&_.push(E,ut,xt,B,st.z,null)}}const et=E.children;for(let ut=0,xt=et.length;ut<xt;ut++)ua(et[ut],U,B,z)}function Qo(E,U,B,z){const N=E.opaque,et=E.transmissive,ut=E.transparent;m.setupLightsView(B),W===!0&&at.setGlobalState(x.clippingPlanes,B),z&&_t.viewport(v.copy(z)),N.length>0&&Vs(N,U,B),et.length>0&&Vs(et,U,B),ut.length>0&&Vs(ut,U,B),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function tc(E,U,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Si(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Zr:Qn,minFilter:Mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const et=m.state.transmissionRenderTarget[z.id],ut=z.viewport||v;et.setSize(ut.z,ut.w);const xt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(F),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),Nt?tt.render(B):x.clear();const vt=x.toneMapping;x.toneMapping=Zn;const bt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),W===!0&&at.setGlobalState(x.clippingPlanes,z),Vs(E,B,z),Ut.updateMultisampleRenderTarget(et),Ut.updateRenderTargetMipmap(et),ct.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let wt=0,$t=U.length;wt<$t;wt++){const he=U[wt],ue=he.object,Be=he.geometry,Zt=he.material,yt=he.group;if(Zt.side===gn&&ue.layers.test(z.layers)){const Re=Zt.side;Zt.side=Oe,Zt.needsUpdate=!0,ec(ue,B,z,Be,Zt,yt),Zt.side=Re,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Ut.updateMultisampleRenderTarget(et),Ut.updateRenderTargetMipmap(et))}x.setRenderTarget(xt),x.setClearColor(F,H),bt!==void 0&&(z.viewport=bt),x.toneMapping=vt}function Vs(E,U,B){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=E.length;N<et;N++){const ut=E[N],xt=ut.object,vt=ut.geometry,bt=z===null?ut.material:z,Rt=ut.group;xt.layers.test(B.layers)&&ec(xt,U,B,vt,bt,Rt)}}function ec(E,U,B,z,N,et){E.onBeforeRender(x,U,B,z,N,et),E.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,B,z,E,et),N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=Oe,N.needsUpdate=!0,x.renderBufferDirect(B,U,z,N,E,et),N.side=On,N.needsUpdate=!0,x.renderBufferDirect(B,U,z,N,E,et),N.side=gn):x.renderBufferDirect(B,U,z,N,E,et),E.onAfterRender(x,U,B,z,N,et)}function ks(E,U,B){U.isScene!==!0&&(U=Ot);const z=Tt.get(E),N=m.state.lights,et=m.state.shadowsArray,ut=N.state.version,xt=$.getParameters(E,N.state,et,U,B),vt=$.getProgramCacheKey(xt);let bt=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?b:le).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,bt===void 0&&(E.addEventListener("dispose",nt),bt=new Map,z.programs=bt);let Rt=bt.get(vt);if(Rt!==void 0){if(z.currentProgram===Rt&&z.lightsStateVersion===ut)return ic(E,xt),Rt}else xt.uniforms=$.getUniforms(E),E.onBuild(B,xt,x),E.onBeforeCompile(xt,x),Rt=$.acquireProgram(xt,vt),bt.set(vt,Rt),z.uniforms=xt.uniforms;const wt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=at.uniform),ic(E,xt),z.needsLights=$u(E),z.lightsStateVersion=ut,z.needsLights&&(wt.ambientLightColor.value=N.state.ambient,wt.lightProbe.value=N.state.probe,wt.directionalLights.value=N.state.directional,wt.directionalLightShadows.value=N.state.directionalShadow,wt.spotLights.value=N.state.spot,wt.spotLightShadows.value=N.state.spotShadow,wt.rectAreaLights.value=N.state.rectArea,wt.ltc_1.value=N.state.rectAreaLTC1,wt.ltc_2.value=N.state.rectAreaLTC2,wt.pointLights.value=N.state.point,wt.pointLightShadows.value=N.state.pointShadow,wt.hemisphereLights.value=N.state.hemi,wt.directionalShadowMap.value=N.state.directionalShadowMap,wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,wt.spotShadowMap.value=N.state.spotShadowMap,wt.spotLightMatrix.value=N.state.spotLightMatrix,wt.spotLightMap.value=N.state.spotLightMap,wt.pointShadowMap.value=N.state.pointShadowMap,wt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Rt,z.uniformsList=null,Rt}function nc(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function ic(E,U){const B=Tt.get(E);B.outputColorSpace=U.outputColorSpace,B.batching=U.batching,B.batchingColor=U.batchingColor,B.instancing=U.instancing,B.instancingColor=U.instancingColor,B.instancingMorph=U.instancingMorph,B.skinning=U.skinning,B.morphTargets=U.morphTargets,B.morphNormals=U.morphNormals,B.morphColors=U.morphColors,B.morphTargetsCount=U.morphTargetsCount,B.numClippingPlanes=U.numClippingPlanes,B.numIntersection=U.numClipIntersection,B.vertexAlphas=U.vertexAlphas,B.vertexTangents=U.vertexTangents,B.toneMapping=U.toneMapping}function Ju(E,U,B,z,N){U.isScene!==!0&&(U=Ot),Ut.resetTextureUnits();const et=U.fog,ut=z.isMeshStandardMaterial?U.environment:null,xt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ii,vt=(z.isMeshStandardMaterial?b:le).get(z.envMap||ut),bt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Rt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),wt=!!B.morphAttributes.position,$t=!!B.morphAttributes.normal,he=!!B.morphAttributes.color;let ue=Zn;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ue=x.toneMapping);const Be=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Zt=Be!==void 0?Be.length:0,yt=Tt.get(z),Re=m.state.lights;if(W===!0&&(Q===!0||E!==y)){const We=E===y&&z.id===L;at.setState(z,E,We)}let ee=!1;z.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Re.state.version||yt.outputColorSpace!==xt||N.isBatchedMesh&&yt.batching===!1||!N.isBatchedMesh&&yt.batching===!0||N.isBatchedMesh&&yt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&yt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&yt.instancing===!1||!N.isInstancedMesh&&yt.instancing===!0||N.isSkinnedMesh&&yt.skinning===!1||!N.isSkinnedMesh&&yt.skinning===!0||N.isInstancedMesh&&yt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&yt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&yt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&yt.instancingMorph===!1&&N.morphTexture!==null||yt.envMap!==vt||z.fog===!0&&yt.fog!==et||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==at.numPlanes||yt.numIntersection!==at.numIntersection)||yt.vertexAlphas!==bt||yt.vertexTangents!==Rt||yt.morphTargets!==wt||yt.morphNormals!==$t||yt.morphColors!==he||yt.toneMapping!==ue||yt.morphTargetsCount!==Zt)&&(ee=!0):(ee=!0,yt.__version=z.version);let yn=yt.currentProgram;ee===!0&&(yn=ks(z,U,N));let Gs=!1,ai=!1,da=!1;const Me=yn.getUniforms(),Fn=yt.uniforms;if(_t.useProgram(yn.program)&&(Gs=!0,ai=!0,da=!0),z.id!==L&&(L=z.id,ai=!0),Gs||y!==E){Me.setValue(P,"projectionMatrix",E.projectionMatrix),Me.setValue(P,"viewMatrix",E.matrixWorldInverse);const We=Me.map.cameraPosition;We!==void 0&&We.setValue(P,st.setFromMatrixPosition(E.matrixWorld)),Lt.logarithmicDepthBuffer&&Me.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Me.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ai=!0,da=!0)}if(N.isSkinnedMesh){Me.setOptional(P,N,"bindMatrix"),Me.setOptional(P,N,"bindMatrixInverse");const We=N.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Me.setValue(P,"boneTexture",We.boneTexture,Ut))}N.isBatchedMesh&&(Me.setOptional(P,N,"batchingTexture"),Me.setValue(P,"batchingTexture",N._matricesTexture,Ut),Me.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&Me.setValue(P,"batchingColorTexture",N._colorsTexture,Ut));const fa=B.morphAttributes;if((fa.position!==void 0||fa.normal!==void 0||fa.color!==void 0)&&Mt.update(N,B,yn),(ai||yt.receiveShadow!==N.receiveShadow)&&(yt.receiveShadow=N.receiveShadow,Me.setValue(P,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Fn.envMap.value=vt,Fn.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(Fn.envMapIntensity.value=U.environmentIntensity),ai&&(Me.setValue(P,"toneMappingExposure",x.toneMappingExposure),yt.needsLights&&Ku(Fn,da),et&&z.fog===!0&&Z.refreshFogUniforms(Fn,et),Z.refreshMaterialUniforms(Fn,z,J,G,m.state.transmissionRenderTarget[E.id]),Fr.upload(P,nc(yt),Fn,Ut)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Fr.upload(P,nc(yt),Fn,Ut),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Me.setValue(P,"center",N.center),Me.setValue(P,"modelViewMatrix",N.modelViewMatrix),Me.setValue(P,"normalMatrix",N.normalMatrix),Me.setValue(P,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const We=z.uniformsGroups;for(let pa=0,Zu=We.length;pa<Zu;pa++){const sc=We[pa];Xt.update(sc,yn),Xt.bind(sc,yn)}}return yn}function Ku(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function $u(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,B){Tt.get(E.texture).__webglTexture=U,Tt.get(E.depthTexture).__webglTexture=B;const z=Tt.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const B=Tt.get(E);B.__webglFramebuffer=U,B.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,B=0){T=E,I=U,A=B;let z=!0,N=null,et=!1,ut=!1;if(E){const vt=Tt.get(E);vt.__useDefaultFramebuffer!==void 0?(_t.bindFramebuffer(P.FRAMEBUFFER,null),z=!1):vt.__webglFramebuffer===void 0?Ut.setupRenderTarget(E):vt.__hasExternalTextures&&Ut.rebindTextures(E,Tt.get(E.texture).__webglTexture,Tt.get(E.depthTexture).__webglTexture);const bt=E.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ut=!0);const Rt=Tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?N=Rt[U][B]:N=Rt[U],et=!0):E.samples>0&&Ut.useMultisampledRTT(E)===!1?N=Tt.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?N=Rt[B]:N=Rt,v.copy(E.viewport),R.copy(E.scissor),O=E.scissorTest}else v.copy(dt).multiplyScalar(J).floor(),R.copy(gt).multiplyScalar(J).floor(),O=kt;if(_t.bindFramebuffer(P.FRAMEBUFFER,N)&&z&&_t.drawBuffers(E,N),_t.viewport(v),_t.scissor(R),_t.setScissorTest(O),et){const vt=Tt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,vt.__webglTexture,B)}else if(ut){const vt=Tt.get(E.texture),bt=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.__webglTexture,B||0,bt)}L=-1},this.readRenderTargetPixels=function(E,U,B,z,N,et,ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){_t.bindFramebuffer(P.FRAMEBUFFER,xt);try{const vt=E.texture,bt=vt.format,Rt=vt.type;if(!Lt.textureFormatReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&B>=0&&B<=E.height-N&&P.readPixels(U,B,z,N,lt.convert(bt),lt.convert(Rt),et)}finally{const vt=T!==null?Tt.get(T).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.readRenderTargetPixelsAsync=async function(E,U,B,z,N,et,ut){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=Tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(xt=xt[ut]),xt){_t.bindFramebuffer(P.FRAMEBUFFER,xt);try{const vt=E.texture,bt=vt.format,Rt=vt.type;if(!Lt.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-z&&B>=0&&B<=E.height-N){const wt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.bufferData(P.PIXEL_PACK_BUFFER,et.byteLength,P.STREAM_READ),P.readPixels(U,B,z,N,lt.convert(bt),lt.convert(Rt),0),P.flush();const $t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await af(P,$t,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,wt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,et)}finally{P.deleteBuffer(wt),P.deleteSync($t)}return et}}finally{const vt=T!==null?Tt.get(T).__webglFramebuffer:null;_t.bindFramebuffer(P.FRAMEBUFFER,vt)}}},this.copyFramebufferToTexture=function(E,U=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-B),N=Math.floor(E.image.width*z),et=Math.floor(E.image.height*z),ut=U!==null?U.x:0,xt=U!==null?U.y:0;Ut.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,B,0,0,ut,xt,N,et),_t.unbindTexture()},this.copyTextureToTexture=function(E,U,B=null,z=null,N=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,B=null);let et,ut,xt,vt,bt,Rt;B!==null?(et=B.max.x-B.min.x,ut=B.max.y-B.min.y,xt=B.min.x,vt=B.min.y):(et=E.image.width,ut=E.image.height,xt=0,vt=0),z!==null?(bt=z.x,Rt=z.y):(bt=0,Rt=0);const wt=lt.convert(U.format),$t=lt.convert(U.type);Ut.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const he=P.getParameter(P.UNPACK_ROW_LENGTH),ue=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Be=P.getParameter(P.UNPACK_SKIP_PIXELS),Zt=P.getParameter(P.UNPACK_SKIP_ROWS),yt=P.getParameter(P.UNPACK_SKIP_IMAGES),Re=E.isCompressedTexture?E.mipmaps[N]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xt),P.pixelStorei(P.UNPACK_SKIP_ROWS,vt),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,bt,Rt,et,ut,wt,$t,Re.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,bt,Rt,Re.width,Re.height,wt,Re.data):P.texSubImage2D(P.TEXTURE_2D,N,bt,Rt,wt,$t,Re),P.pixelStorei(P.UNPACK_ROW_LENGTH,he),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Zt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yt),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),_t.unbindTexture()},this.copyTextureToTexture3D=function(E,U,B=null,z=null,N=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let et,ut,xt,vt,bt,Rt,wt,$t,he;const ue=E.isCompressedTexture?E.mipmaps[N]:E.image;B!==null?(et=B.max.x-B.min.x,ut=B.max.y-B.min.y,xt=B.max.z-B.min.z,vt=B.min.x,bt=B.min.y,Rt=B.min.z):(et=ue.width,ut=ue.height,xt=ue.depth,vt=0,bt=0,Rt=0),z!==null?(wt=z.x,$t=z.y,he=z.z):(wt=0,$t=0,he=0);const Be=lt.convert(U.format),Zt=lt.convert(U.type);let yt;if(U.isData3DTexture)Ut.setTexture3D(U,0),yt=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ut.setTexture2DArray(U,0),yt=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Re=P.getParameter(P.UNPACK_ROW_LENGTH),ee=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),Gs=P.getParameter(P.UNPACK_SKIP_ROWS),ai=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ue.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ue.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,vt),P.pixelStorei(P.UNPACK_SKIP_ROWS,bt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Rt),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(yt,N,wt,$t,he,et,ut,xt,Be,Zt,ue.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(yt,N,wt,$t,he,et,ut,xt,Be,ue.data):P.texSubImage3D(yt,N,wt,$t,he,et,ut,xt,Be,Zt,ue),P.pixelStorei(P.UNPACK_ROW_LENGTH,Re),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ee),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Gs),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ai),N===0&&U.generateMipmaps&&P.generateMipmap(yt),_t.unbindTexture()},this.initRenderTarget=function(E){Tt.get(E).__webglFramebuffer===void 0&&Ut.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ut.setTextureCube(E,0):E.isData3DTexture?Ut.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ut.setTexture2DArray(E,0):Ut.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){I=0,A=0,T=null,_t.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Fo?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===jr?"display-p3":"srgb"}}class ea{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=n}clone(){return new ea(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pu extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class p0 extends be{constructor(t=null,e=1,n=1,i,r,a,o,c,l=Ne,h=Ne,d,u){super(null,a,o,c,l,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al extends $e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const qi=new re,Tl=new re,dr=[],bl=new Ti,m0=new re,Ss=new Et,Es=new bi;class g0 extends Et{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,m0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ti),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),bl.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(bl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Es.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qi),Tl.multiplyMatrices(n,qi),Ss.matrixWorld=Tl,Ss.raycast(t,dr);for(let a=0,o=dr.length;a<o;a++){const c=dr[a];c.instanceId=r,c.object=this,e.push(c)}dr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Al(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new p0(new Float32Array(i*this.count),i,this.count,kh,Dn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Vo extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qr=new D,Yr=new D,Rl=new re,ws=new Qr,fr=new bi,Ja=new D,Cl=new D;class mu extends Se{constructor(t=new we,e=new Vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)qr.fromBufferAttribute(e,i-1),Yr.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=qr.distanceTo(Yr);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(i),fr.radius+=r,t.ray.intersectsSphere(fr)===!1)return;Rl.copy(i).invert(),ws.copy(t.ray).applyMatrix4(Rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),S=h.getX(_+1),x=pr(this,t,ws,c,f,S);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=pr(this,t,ws,c,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=pr(this,t,ws,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=pr(this,t,ws,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pr(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(qr.fromBufferAttribute(a,i),Yr.fromBufferAttribute(a,r),e.distanceSqToSegment(qr,Yr,Ja,Cl)>n)return;Ja.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ja);if(!(c<t.near||c>t.far))return{distance:c,point:Cl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}class gu extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pl=new re,Po=new Qr,mr=new bi,gr=new D;class _0 extends Se{constructor(t=new we,e=new gu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(i),mr.radius+=r,t.ray.intersectsSphere(mr)===!1)return;Pl.copy(i).invert(),Po.copy(t.ray).applyMatrix4(Pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,_=p;g<_;g++){const m=l.getX(g);gr.fromBufferAttribute(d,m),Ll(gr,m,c,i,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,_=p;g<_;g++)gr.fromBufferAttribute(d,g),Ll(gr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ll(s,t,e,n,i,r,a){const o=Po.distanceSqToPoint(s);if(o<e){const c=new D;Po.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class x0 extends be{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ko extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new D,h=new Ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ei extends we{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2));function S(){const w=new D,I=new D;let A=0;const T=(e-t)/n;for(let L=0;L<=r;L++){const y=[],v=L/r,R=v*(e-t)+t;for(let O=0;O<=i;O++){const F=O/i,H=F*c+o,X=Math.sin(H),G=Math.cos(H);I.x=R*X,I.y=-v*n+m,I.z=R*G,d.push(I.x,I.y,I.z),w.set(X,T,G).normalize(),u.push(w.x,w.y,w.z),p.push(F,1-v),y.push(g++)}_.push(y)}for(let L=0;L<i;L++)for(let y=0;y<r;y++){const v=_[y][L],R=_[y+1][L],O=_[y+1][L+1],F=_[y][L+1];h.push(v,R,F),h.push(R,O,F),A+=6}l.addGroup(f,A,0),f+=A}function x(w){const I=g,A=new Ht,T=new D;let L=0;const y=w===!0?t:e,v=w===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,m*v,0),u.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let O=0;O<=i;O++){const H=O/i*c+o,X=Math.cos(H),G=Math.sin(H);T.x=y*G,T.y=m*v,T.z=y*X,d.push(T.x,T.y,T.z),u.push(0,v,0),A.x=X*.5+.5,A.y=G*.5*v+.5,p.push(A.x,A.y),g++}for(let O=0;O<i;O++){const F=I+O,H=R+O;w===!0?h.push(H,H+1,F):h.push(H+1,H,F),L+=3}l.addGroup(f,L,w===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends Ei{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Go extends we{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const x=new D,w=new D,I=new D;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],w),p(e[A+2],I),c(x,w,I,S)}function c(S,x,w,I){const A=I+1,T=[];for(let L=0;L<=A;L++){T[L]=[];const y=S.clone().lerp(w,L/A),v=x.clone().lerp(w,L/A),R=A-L;for(let O=0;O<=R;O++)O===0&&L===A?T[L][O]=y:T[L][O]=y.clone().lerp(v,O/R)}for(let L=0;L<A;L++)for(let y=0;y<2*(A-L)-1;y++){const v=Math.floor(y/2);y%2===0?(u(T[L][v+1]),u(T[L+1][v]),u(T[L][v])):(u(T[L][v+1]),u(T[L+1][v+1]),u(T[L+1][v]))}}function l(S){const x=new D;for(let w=0;w<r.length;w+=3)x.x=r[w+0],x.y=r[w+1],x.z=r[w+2],x.normalize().multiplyScalar(S),r[w+0]=x.x,r[w+1]=x.y,r[w+2]=x.z}function h(){const S=new D;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const w=m(S)/2/Math.PI+.5,I=f(S)/Math.PI+.5;a.push(w,1-I)}g(),d()}function d(){for(let S=0;S<a.length;S+=6){const x=a[S+0],w=a[S+2],I=a[S+4],A=Math.max(x,w,I),T=Math.min(x,w,I);A>.9&&T<.1&&(x<.2&&(a[S+0]+=1),w<.2&&(a[S+2]+=1),I<.2&&(a[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function p(S,x){const w=S*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){const S=new D,x=new D,w=new D,I=new D,A=new Ht,T=new Ht,L=new Ht;for(let y=0,v=0;y<r.length;y+=9,v+=6){S.set(r[y+0],r[y+1],r[y+2]),x.set(r[y+3],r[y+4],r[y+5]),w.set(r[y+6],r[y+7],r[y+8]),A.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),L.set(a[v+4],a[v+5]),I.copy(S).add(x).add(w).divideScalar(3);const R=m(I);_(A,v+0,S,R),_(T,v+2,x,R),_(L,v+4,w,R)}}function _(S,x,w,I){I<0&&S.x===1&&(a[x]=S.x-1),w.x===0&&w.z===0&&(a[x]=I/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.vertices,t.indices,t.radius,t.details)}}class na extends Go{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new na(t.radius,t.detail)}}class vn extends we{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new D,u=new D,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const S=[],x=f/n;let w=0;f===0&&a===0?w=.5/e:f===n&&c===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){const A=I/e;d.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+w,1-x),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const x=h[f][S+1],w=h[f][S],I=h[f+1][S],A=h[f+1][S+1];(f!==0||a>0)&&p.push(x,w,A),(f!==n-1||c<Math.PI)&&p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wi extends we{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,S=(i+1)*p+g;a.push(_,m,S),a.push(m,f,S)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class jt extends Ri{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wo extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ka=new re,Dl=new D,Il=new D;class _u{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dl),Il.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Il),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ul=new re,As=new D,$a=new D;class v0 extends _u{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),As.setFromMatrixPosition(t.matrixWorld),n.position.copy(As),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),i.makeTranslation(-As.x,-As.y,-As.z),Ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class Os extends Wo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new v0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class M0 extends _u{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xu extends Wo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new M0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vu extends Wo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nl=new re;class Mu{constructor(t,e,n=0,i=1/0){this.ray=new Qr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nl),this}intersectObject(t,e=!0,n=[]){return Lo(t,this,n,e),n.sort(Ol),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Lo(t[i],this,n,e);return n.sort(Ol),n}}function Ol(s,t){return s.distance-t.distance}function Lo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Lo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);const yu=600,Yi=.085,Fl=20,Bl=10,y0=.25,zl=.5,Za={laser:65535,chaingun:16746496,missile:16720452},Hl=384,ja=48;function S0(s,t,e){const n=e.clone().invert(),i=[];for(const r of s){const a=r.position.clone().sub(t);if(a.length()>yu)continue;a.applyQuaternion(n);const o=Math.sqrt(a.x*a.x+a.z*a.z),c=Math.atan2(a.x,a.z),l=Math.atan2(a.y,o);i.push({position:r.position.clone(),type:"enemy",bearing:c,elevation:l})}return i}function Vl(s,t,e,n,i,r,a){const o=new jt({color:657930}),c=new Et(new ge(i+.008,.022,.04),o);c.position.set(t,e,n),s.add(c);const l=new jt({color:r,emissive:new At(r),emissiveIntensity:.6}),h=new Et(new ge(i,.016,.034),l),d=new Un;return d.position.set(t-i/2,e,n),d.userData.role=a,s.add(d),h.position.x=i/2,d.add(h),{fillMat:l,setRatio(u){const p=Math.max(0,Math.min(1,u));h.scale.x=Math.max(p,1e-4),h.position.x=i/2*p}}}function Ji(s,t,e,n,i,r,a){const o=new ms(i,r);let c,l=null;if(typeof document<"u"){const u=document.createElement("canvas");u.width=Hl,u.height=ja;const p=u.getContext("2d"),g=new x0(u);c=new Ge({map:g,transparent:!0,depthWrite:!1,side:On}),l=_=>{p&&(p.clearRect(0,0,Hl,ja),p.fillStyle="rgba(0, 230, 200, 0.92)",p.font="bold 22px monospace",p.textBaseline="middle",p.textAlign="left",p.fillText(_,6,ja/2),g.needsUpdate=!0)}}else c=new Ge({color:59080});const h=new Et(o,c);h.position.set(t,e,n),h.userData.hudReadout=a,s.add(h);function d(u){h.userData.hudReadoutText=u,l==null||l(u)}return{draw:d}}function E0(){const s=new Un,t=new jt({color:1710638,flatShading:!0}),e=new Et(new ge(1.8,.22,.38),t);e.position.set(0,-.46,-.88),s.add(e);const n=new Et(new ge(.22,.42,.42),t);n.position.set(-.92,-.46,-.84),s.add(n);const i=new Et(new ge(.22,.42,.42),t);i.position.set(.92,-.46,-.84),s.add(i);const r=new Et(new ge(1.8,.06,.06),t);r.position.set(0,.44,-.92),s.add(r);const a=Vl(s,-.55,-.34,-.87,.35,56644,"healthPivot"),o=Vl(s,0,-.34,-.87,.35,39423,"shieldPivot"),c=new jt({color:16763904,emissive:new At(16763904),emissiveIntensity:.6}),l=new jt({color:1709312}),h=[],d=.025,u=.006,p=.33;for(let mt=0;mt<Bl;mt++){const ct=new Et(new ge(d,.018,.03),c);ct.position.set(p+mt*(d+u),-.34,-.87),s.add(ct),h.push(ct)}const g=Ji(s,-.55,-.285,-.87,.38,.046,"health"),_=Ji(s,0,-.285,-.87,.38,.046,"shields"),m=Ji(s,.48,-.285,-.87,.34,.046,"ammo"),f=Ji(s,-.45,-.44,-.87,.42,.046,"credits"),S=Ji(s,-.92,-.245,-.84,.2,.046,"weapon"),x={health:"",shields:"",ammo:"",credits:"",weapon:""},w=new jt({color:16716032,emissive:new At(16716032),emissiveIntensity:0}),I=new Et(new ge(.04,.025,.025),w);I.position.set(-.76,-.34,-.87),I.userData.isWarningLight=!0,I.visible=!1,s.add(I);let A=!1,T=0;function L(mt){const ct=Math.max(0,Math.min(1,mt)),Lt=ct>.5?new At(56644).lerp(new At(14535680),(1-ct)*2):new At(14535680).lerp(new At(16720384),(.5-ct)*2);a.fillMat.color.copy(Lt),a.fillMat.emissive.copy(Lt),a.setRatio(ct);const It=`HEALTH  ${Math.round(ct*100)} / 100`;x.health=It,g.draw(It),A=ct<y0,A||(I.visible=!1,w.emissiveIntensity=0,T=0)}function y(mt){o.setRatio(mt);const Lt=`SHIELDS  ${Math.round(Math.max(0,Math.min(1,mt))*100)} / 100`;x.shields=Lt,_.draw(Lt)}function v(mt,ct){const Lt=ct>0?Math.round(mt/ct*Bl):0;h.forEach((It,Tt)=>{It.material=Tt<Lt?c:l});const _t=`AMMO  ${mt} / ${ct}`;x.ammo=_t,m.draw(_t)}const R=["laser","chaingun","missile"],O={laser:new jt({color:13107}),chaingun:new jt({color:1705984}),missile:new jt({color:1703941})};for(let mt=0;mt<R.length;mt++){const ct=R[mt],Lt=new Et(new ge(.055,.032,.025),O[ct]);Lt.position.set(-.92,-.3-mt*.048,-.84),Lt.userData.weaponSlot=ct,s.add(Lt)}function F(mt){for(const Lt of R){const _t=O[Lt];if(Lt===mt)_t.color.setHex(Za[Lt]),_t.emissive.setHex(Za[Lt]),_t.emissiveIntensity=1;else{const It=Za[Lt];_t.color.setHex(It).multiplyScalar(.08),_t.emissive.setHex(0),_t.emissiveIntensity=0}}const ct=`WEAPON  ${mt.toUpperCase()}`;x.weapon=ct,S.draw(ct)}F("laser"),L(1),y(1);const H=new D(.92,-.23,-.82),X=new jt({color:6656}),G=new Et(new Ei(Yi+.01,Yi+.01,.005,24),X);G.position.copy(H),s.add(G);const J=new jt({color:52258,emissive:new At(52258),emissiveIntensity:.4}),k=new Et(new wi(Yi+.005,.004,8,32),J);k.rotation.x=Math.PI/2,k.position.set(H.x,H.y+.003,H.z),s.add(k);const ot=new jt({color:34833,emissive:new At(34833),emissiveIntensity:.25}),dt=new Et(new wi(Yi+.004,.0025,8,32),ot);dt.position.copy(H),s.add(dt);const gt=new jt({color:65348,emissive:new At(65348),emissiveIntensity:.8}),kt=new Et(new vn(.004,6,6),gt);kt.position.set(H.x,H.y+.006,H.z),s.add(kt);const Kt=new jt({color:4521796,emissive:new At(4521796),emissiveIntensity:1}),W=new Et(new vn(.003,4,4),Kt);W.position.set(H.x,H.y+.003,H.z+Yi+.005),W.userData.isRadarFwdDot=!0,s.add(W),Ji(s,H.x,H.y+.115,H.z,.16,.032,"radar").draw("RADAR");const pt=[];for(let mt=0;mt<Fl;mt++){const ct=new Et(new vn(.006,4,4),new jt({color:16720384,emissive:new At(16720384),emissiveIntensity:.8}));ct.position.copy(H),ct.visible=!1,ct.userData.isBlip=!0,s.add(ct),pt.push(ct)}function st(mt,ct,Lt){pt.forEach(Tt=>{Tt.visible=!1});const _t=Yi*.88;let It=0;for(const Tt of Lt){if(It>=Fl)break;if(Tt.position.distanceTo(mt)>yu)continue;const Ut=Math.sin(Tt.bearing)*Math.cos(Tt.elevation)*_t,le=Math.sin(Tt.elevation)*_t,b=Math.cos(Tt.bearing)*Math.cos(Tt.elevation)*_t,M=pt[It++];M.position.set(H.x+Ut,H.y+le,H.z+b),M.visible=!0;const V=Tt.type==="enemy"?16720384:8947712,K=M.material;K.color.setHex(V),K.emissive.setHex(V)}}let Ot=0;function Nt(mt){Ot=Math.max(0,mt);const ct=`CREDITS  ${Ot}`;x.credits=ct,f.draw(ct)}function Wt(mt){return x[mt]??""}function P(mt){if(!A)return;T+=mt;const ct=T%zl<zl/2;I.visible=ct,w.emissiveIntensity=ct?1.5:0}return{group:s,setHealth:L,setShield:y,setAmmo:v,setActiveWeapon:F,setCredits:Nt,update:P,updateRadar:st,getReadoutText:Wt}}function w0(s,t){function e(){s.requestPointerLock()}function n(i){document.pointerLockElement===s&&t(i.movementX,i.movementY)}return s.addEventListener("click",e),document.addEventListener("mousemove",n),()=>{s.removeEventListener("click",e),document.removeEventListener("mousemove",n)}}const A0=20,T0=30,b0=2.5,kl=1.8;function R0(s,t,e){s.multiplyScalar(Math.max(0,1-t*e))}function C0(s,t,e,n,i,r){if(t.lengthSq()===0)return;const a=t.clone().normalize().multiplyScalar(n*r).applyQuaternion(e);s.add(a);const o=s.length();o>i&&s.multiplyScalar(i/o)}class P0{constructor(){ft(this,"velocity",new D);ft(this,"thrustBonus",0);ft(this,"speedBonus",0);ft(this,"keys",{});ft(this,"_onKeyDown");ft(this,"_onKeyUp");this._onKeyDown=t=>{this.keys[t.key.toLowerCase()]=!0},this._onKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1}}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}setKey(t,e){this.keys[t]=e}reset(){this.velocity.set(0,0,0)}update(t,e,n){const i=Math.min(t,.1);this.keys.q&&(e.z+=kl*i),this.keys.e&&(e.z-=kl*i);const r=new D((this.keys.d?1:0)-(this.keys.a?1:0),0,(this.keys.s?1:0)-(this.keys.w?1:0)),a=new Ai().setFromEuler(e);C0(this.velocity,r,a,A0+this.thrustBonus,T0+this.speedBonus,i),R0(this.velocity,b0,i),n.addScaledVector(this.velocity,i)}}const Gl=1.5,Wl=25;function L0(s){return Math.max(Wl,Math.round(s)*Wl)}function Su(s,t){s.userData.size=t,s.userData.health=L0(t)}function D0(s,t,e){const n=new na(s,0),i=new jt({color:8947840,flatShading:!0}),r=new Et(n,i);return r.position.copy(t),r.rotation.set(e()*Math.PI*2,e()*Math.PI*2,e()*Math.PI*2),Su(r,s),r}function I0(s,t,e,n=Math.random){const i=e*.45,r=2+Math.floor(n()*2),a=[],o=e;for(let c=0;c<r;c++){const l=new D((n()*2-1)*o,(n()*2-1)*o,(n()*2-1)*o),h=D0(i,t.clone().add(l),n);s.add(h),a.push(h)}return a}function U0(s,t){s.remove(t),t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()}function Do(s,t,e,n=Math.random){U0(s,t);const i=e.filter(a=>a!==t),r=t.userData.size??Gl+1;if(r>Gl){const a=I0(s,t.position,r,n);i.push(...a)}return i}const Ts=500,Xo=15,N0=25,Xl=8,ql=10,O0=1,F0=3;function B0(s){let t=s>>>0;return()=>{t+=1831565813;let e=Math.imul(t^t>>>15,1|t);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}function ia(s,t=Xo){for(let e=0;e<1e3;e++){const n=(s()*2-1)*Ts,i=(s()*2-1)*Ts,r=(s()*2-1)*Ts,a=n*n+i*i+r*r,o=t*t,c=Ts*Ts;if(a>=o&&a<=c)return new D(n,i,r)}return new D(t*2,0,0)}function z0(s=Math.random){const t=new jt({color:8947840,flatShading:!0}),e=[];for(let n=0;n<N0;n++){const i=1+s()*4,r=new na(i,0),a=new Et(r,t);a.position.copy(ia(s)),a.rotation.set(s()*Math.PI*2,s()*Math.PI*2,s()*Math.PI*2),Su(a,i),e.push(a)}return e}function H0(s=Math.random){const t=new Un,e=new jt({color:0,flatShading:!0}),n=new vn(8,16,16);t.add(new Et(n,e));const i=new jt({color:16737792,emissive:new At(16724736),emissiveIntensity:.8,flatShading:!0}),r=new wi(14,2,8,32),a=new Et(r,i);return a.rotation.x=Math.PI/2,t.add(a),t.position.copy(ia(s,Xo+30)),t}function V0(s=Math.random){const t=Math.min(ql,Xl+Math.floor(s()*(ql-Xl+1))),e=new jt({color:13378048,flatShading:!0}),n=[];for(let i=0;i<t;i++){const r=new ds(1.5,4,4),a=new Et(r,e);a.position.copy(ia(s)),a.rotation.set(s()*Math.PI*2,s()*Math.PI*2,0),n.push(a)}return n}const Yl=[3364300,3385941,13399859,10040217,3390412];function k0(s=Math.random){const t=O0+Math.floor(s()*F0),e=[];for(let n=0;n<t;n++){const i=Yl[Math.floor(s()*Yl.length)],r=20+Math.floor(s()*20),a=new vn(r,8,8),o=new jt({color:i,flatShading:!0}),c=new Et(a,o);c.position.copy(ia(s,Xo+r)),e.push(c)}return e}function qo(s,t=Math.floor(Math.random()*4294967295)){const e=B0(t),n=z0(e),i=H0(e),r=V0(e),a=k0(e);return n.forEach(o=>s.add(o)),s.add(i),r.forEach(o=>s.add(o)),a.forEach(o=>s.add(o)),{asteroids:n,blackHole:i,enemies:r,planets:a}}const G0=25,Jl=500,W0=5;class X0{constructor(t,e){ft(this,"_ammo");ft(this,"maxAmmo");ft(this,"raycaster",new Mu);ft(this,"scene");ft(this,"activeBeam",null);ft(this,"beamFramesLeft",0);this.scene=t,this._ammo=e,this.maxAmmo=e,this.raycaster.far=Jl}get ammo(){return this._ammo}fire(t,e,n){if(this._ammo<=0)return{fired:!1,hit:!1,hitObject:null,ammoRemaining:0};this._ammo--;const i=new D(0,0,-1).applyQuaternion(e);this.raycaster.set(t,i);const r=this.raycaster.intersectObjects(n);let a=!1,o=null,c;r.length>0?(a=!0,o=r[0].object,c=r[0].point.clone(),o.userData.health===void 0&&(o.userData.health=100),o.userData.health-=G0):c=t.clone().addScaledVector(i,Jl);const l=t.clone().addScaledVector(i,1.5);return this.spawnBeam(l,c),{fired:!0,hit:a,hitObject:o,ammoRemaining:this._ammo}}update(){this.beamFramesLeft>0&&(this.beamFramesLeft--,this.beamFramesLeft===0&&this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null))}addAmmo(t){this._ammo=Math.min(this._ammo+Math.max(0,t),this.maxAmmo)}reset(t){this._ammo=Math.min(Math.max(0,t),this.maxAmmo),this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null),this.beamFramesLeft=0}spawnBeam(t,e){this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null);const n=new we().setFromPoints([t,e]),i=new Vo({color:65535});this.activeBeam=new mu(n,i),this.scene.add(this.activeBeam),this.beamFramesLeft=W0}}const q0=8,Kl=500,Y0=12,J0=2;class K0{constructor(t,e){ft(this,"_ammo");ft(this,"maxAmmo");ft(this,"fireInterval");ft(this,"accumulator");ft(this,"raycaster",new Mu);ft(this,"scene");ft(this,"activeBeam",null);ft(this,"beamFramesLeft",0);this.scene=t,this._ammo=e,this.maxAmmo=e,this.fireInterval=1/Y0,this.accumulator=this.fireInterval,this.raycaster.far=Kl}get ammo(){return this._ammo}fire(t,e,n){if(this._ammo<=0)return{fired:!1,hit:!1,hitObject:null,ammoRemaining:0};this._ammo--;const i=new D(0,0,-1).applyQuaternion(e);this.raycaster.set(t,i);const r=this.raycaster.intersectObjects(n);let a=!1,o=null,c;r.length>0?(a=!0,o=r[0].object,c=r[0].point.clone(),o.userData.health===void 0&&(o.userData.health=100),o.userData.health-=q0):c=t.clone().addScaledVector(i,Kl);const l=t.clone().addScaledVector(i,1.5);return this.spawnBeam(l,c),{fired:!0,hit:a,hitObject:o,ammoRemaining:this._ammo}}update(t,e,n,i,r){if(this.beamFramesLeft>0&&(this.beamFramesLeft--,this.beamFramesLeft===0&&this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null)),!e)return this.accumulator=this.fireInterval,[];this.accumulator+=t;const a=[];for(;this.accumulator>=this.fireInterval;){if(this.accumulator-=this.fireInterval,this._ammo<=0){this.accumulator=0;break}a.push(this.fire(n,i,r))}return a}addAmmo(t){this._ammo=Math.min(this._ammo+Math.max(0,t),this.maxAmmo)}reset(t){this._ammo=Math.min(Math.max(0,t),this.maxAmmo),this.accumulator=this.fireInterval,this.beamFramesLeft=0,this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null)}spawnBeam(t,e){this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null);const n=new we().setFromPoints([t,e]),i=new Vo({color:16746496});this.activeBeam=new mu(n,i),this.scene.add(this.activeBeam),this.beamFramesLeft=J0}}function $0(s,t,e,n,i,r,a,o){const c=s-i,l=t-r,h=e-a,d=c*c+l*l+h*h,u=n+o;return d<=u*u}const Z0=100,j0=30,Q0=600,tx=1,Eu=8;class ex{constructor(t,e){ft(this,"_ammo");ft(this,"maxAmmo");ft(this,"scene");ft(this,"missiles",[]);this.scene=t,this._ammo=e,this.maxAmmo=e}get ammo(){return this._ammo}get missileCount(){return this.missiles.length}fire(t,e){if(this._ammo<=0)return{fired:!1,ammoRemaining:0};this._ammo--;const n=new D(0,0,-1).applyQuaternion(e),i=t.clone().addScaledVector(n,2),r=new ds(.15,.8,6),a=new jt({color:16737792,emissive:new At(16724736),emissiveIntensity:.5}),o=new Et(r,a);return o.position.copy(i),o.quaternion.setFromUnitVectors(new D(0,1,0),n),this.scene.add(o),this.missiles.push({mesh:o,direction:n.clone(),distanceTraveled:0}),{fired:!0,ammoRemaining:this._ammo}}update(t,e){var r;const n=[],i=[];for(let a=0;a<this.missiles.length;a++){const o=this.missiles[a],c=j0*t;if(o.mesh.position.addScaledVector(o.direction,c),o.distanceTraveled+=c,o.distanceTraveled>=Q0){i.push(a);continue}let l=!1;for(const h of e){h.geometry.boundingSphere||h.geometry.computeBoundingSphere();const d=(((r=h.geometry.boundingSphere)==null?void 0:r.radius)??5)*h.scale.x,u=o.mesh.position,p=h.position;if($0(u.x,u.y,u.z,tx,p.x,p.y,p.z,d)){h.userData.health===void 0&&(h.userData.health=100),h.userData.health-=Z0,n.push({hitObject:h}),l=!0;break}}l&&i.push(a)}for(let a=i.length-1;a>=0;a--){const o=i[a],c=this.missiles[o];this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh.material.dispose(),this.missiles.splice(o,1)}return n}addAmmo(t){this._ammo=Math.min(this._ammo+Math.max(0,t),this.maxAmmo)}reset(t){this._ammo=Math.min(Math.max(0,t),this.maxAmmo);for(const e of this.missiles)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.missiles.length=0}}class nx{constructor(t,e){ft(this,"health");ft(this,"shield");ft(this,"maxHealth");ft(this,"maxShield");ft(this,"thrustBonus");ft(this,"speedBonus");ft(this,"unlockedWeapons");this.maxHealth=t,this.maxShield=e,this.health=t,this.shield=e,this.thrustBonus=0,this.speedBonus=0,this.unlockedWeapons=new Set}applyDamage(t){const e=Math.max(0,t),n=Math.min(this.shield,e),i=e-n;this.shield-=n;const r=Math.min(this.health,i);return this.health-=r,{shieldDamage:n,hullDamage:r,isDead:this.health<=0}}reset(){this.health=this.maxHealth,this.shield=this.maxShield}get isAlive(){return this.health>0}upgradeMaxHealth(t){const e=Math.max(0,t);this.maxHealth+=e,this.health=Math.min(this.health+e,this.maxHealth)}upgradeMaxShield(t){const e=Math.max(0,t);this.maxShield+=e,this.shield=Math.min(this.shield+e,this.maxShield)}upgradeEngine(t,e){this.thrustBonus+=Math.max(0,t),this.speedBonus+=Math.max(0,e)}unlockWeapon(t){this.unlockedWeapons.add(t)}}class $l{constructor(t,e,n,i,r){this.sender=t,this.receiver=e,this.message=n,this.delay=i,this.data=r}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(t){return this.sender=t.sender,this.receiver=t.receiver,this.message=t.message,this.delay=t.delay,this.data=t.data,this}resolveReferences(t){return this.sender=t.get(this.sender),this.receiver=t.get(this.receiver),this}}class rn{static setLevel(t){_r=t}static log(...t){_r<=rn.LEVEL.LOG&&console.log(...t)}static warn(...t){_r<=rn.LEVEL.WARN&&console.warn(...t)}static error(...t){_r<=rn.LEVEL.ERROR&&console.error(...t)}}rn.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let _r=rn.LEVEL.WARN;class ix{constructor(){this.delayedTelegrams=new Array}deliver(t){const e=t.receiver;return e.handleMessage(t)===!1&&rn.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",e),this}dispatch(t,e,n,i,r){const a=new $l(t,e,n,i,r);return i<=0?this.deliver(a):this.delayedTelegrams.push(a),this}dispatchDelayedMessages(t){let e=this.delayedTelegrams.length;for(;e--;){const n=this.delayedTelegrams[e];n.delay-=t,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const t={type:this.constructor.name,delayedTelegrams:new Array};for(let e=0,n=this.delayedTelegrams.length;e<n;e++){const i=this.delayedTelegrams[e];t.delayedTelegrams.push(i.toJSON())}return t}fromJSON(t){this.clear();const e=t.delayedTelegrams;for(let n=0,i=e.length;n<i;n++){const r=e[n],a=new $l().fromJSON(r);this.delayedTelegrams.push(a)}return this}resolveReferences(t){const e=this.delayedTelegrams;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}const Ee=new Array;for(let s=0;s<256;s++)Ee[s]=(s<16?"0":"")+s.toString(16);class Fs{static area(t,e,n){return(n.x-t.x)*(e.z-t.z)-(e.x-t.x)*(n.z-t.z)}static argmax(t){const e=Math.max(...t),n=[];for(let i=0,r=t.length;i<r;i++)t[i]===e&&n.push(i);return n}static choice(t,e=null){const n=Math.random();if(e===null)return t[Math.floor(Math.random()*t.length)];{let i=0;const r=t.map((a,o)=>(i+=e[o],i)).findIndex(a=>a>=n);return t[r]}}static clamp(t,e,n){return Math.max(e,Math.min(n,t))}static generateUUID(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[t&255]+Ee[t>>8&255]+Ee[t>>16&255]+Ee[t>>24&255]+"-"+Ee[e&255]+Ee[e>>8&255]+"-"+Ee[e>>16&15|64]+Ee[e>>24&255]+"-"+Ee[n&63|128]+Ee[n>>8&255]+"-"+Ee[n>>16&255]+Ee[n>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toUpperCase()}static randFloat(t,e){return t+Math.random()*(e-t)}static randInt(t,e){return t+Math.floor(Math.random()*(e-t+1))}}class j{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}clone(){return new this.constructor().copy(this)}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.x/=t,this.y/=t,this.z/=t,this}divideVectors(t,e){return this.x=t.x/e.x,this.y=t.y/e.y,this.z=t.z/e.z,this}reflect(t){return this.sub(sx.copy(t).multiplyScalar(2*this.dot(t)))}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){const e=this.x,n=this.y,i=this.z;return this.x=n*t.z-i*t.y,this.y=i*t.x-e*t.z,this.z=e*t.y-n*t.x,this}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}angleTo(t){const e=Math.sqrt(this.squaredLength()*t.squaredLength());if(e===0)return 0;const n=this.dot(t)/e;return Math.acos(Fs.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(t){return Math.sqrt(this.squaredDistanceTo(t))}squaredDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return Math.abs(e)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyRotation(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=c*e+a*i-o*n,h=c*n+o*e-r*i,d=c*i+r*n-a*e,u=-r*e-a*n-o*i;return this.x=l*c+u*-r+h*-o-d*-a,this.y=h*c+u*-a+d*-r-l*-o,this.z=d*c+u*-o+l*-a-h*-r,this}extractPositionFromMatrix(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}fromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}fromMatrix4Column(t,e){return this.fromArray(t.elements,e*4)}fromSpherical(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}}const sx=new j,Zl=new j(0,1,0),jl=new j,bs=new j,Ql=new j,th=new j,Qa=[2,2,1],to=[1,0,0];class Yo{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[3]=e,h[6]=n,h[1]=i,h[4]=r,h[7]=a,h[2]=o,h[5]=c,h[8]=l,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],S=i[1],x=i[4],w=i[7],I=i[2],A=i[5],T=i[8];return r[0]=a*_+o*S+c*I,r[3]=a*m+o*x+c*A,r[6]=a*f+o*w+c*T,r[1]=l*_+h*S+d*I,r[4]=l*m+h*x+d*A,r[7]=l*f+h*w+d*T,r[2]=u*_+p*S+g*I,r[5]=u*m+p*x+g*A,r[8]=u*f+p*w+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}extractBasis(t,e,n){return t.fromMatrix3Column(this,0),e.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,t.y,e.y,n.y,t.z,e.z,n.z),this}lookAt(t,e,n){return jl.crossVectors(n,t).normalize(),bs.crossVectors(Zl,e).normalize(),bs.squaredLength()===0&&(th.copy(e).addScalar(Number.EPSILON),bs.crossVectors(Zl,th).normalize()),Ql.crossVectors(e,bs).normalize(),Ki.makeBasis(bs,Ql,e),xr.makeBasis(jl,n,t),this.multiplyMatrices(Ki,xr.transpose()),this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getElementIndex(t,e){return t*3+e}frobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<9;n++)e+=t[n]*t[n];return Math.sqrt(e)}offDiagonalFrobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<3;n++){const i=t[this.getElementIndex(Qa[n],to[n])];e+=2*i*i}return Math.sqrt(e)}eigenDecomposition(t){let e=0,n=0;const i=10;t.unitary.identity(),t.diagonal.copy(this);const r=t.unitary,a=t.diagonal,o=Number.EPSILON*a.frobeniusNorm();for(;n<i&&a.offDiagonalFrobeniusNorm()>o;)a.shurDecomposition(Ki),xr.copy(Ki).transpose(),a.multiply(Ki),a.premultiply(xr),r.multiply(Ki),++e>2&&(n++,e=0);return t}shurDecomposition(t){let e=0,n=1;const i=this.elements;for(let l=0;l<3;l++){const h=Math.abs(i[this.getElementIndex(Qa[l],to[l])]);h>e&&(e=h,n=l)}let r=1,a=0;const o=to[n],c=Qa[n];if(Math.abs(i[this.getElementIndex(c,o)])>Number.EPSILON){const l=i[this.getElementIndex(c,c)],h=i[this.getElementIndex(o,o)],d=i[this.getElementIndex(c,o)],u=(l-h)/2/d;let p;u<0?p=-1/(-u+Math.sqrt(1+u*u)):p=1/(u+Math.sqrt(1+u*u)),r=1/Math.sqrt(1+p*p),a=p*r}return t.identity(),t.elements[this.getElementIndex(o,o)]=r,t.elements[this.getElementIndex(c,c)]=r,t.elements[this.getElementIndex(c,o)]=a,t.elements[this.getElementIndex(o,c)]=-a,t}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=t.w,o=n+n,c=i+i,l=r+r,h=n*o,d=n*c,u=n*l,p=i*c,g=i*l,_=r*l,m=a*o,f=a*c,S=a*l;return e[0]=1-(p+_),e[3]=d-S,e[6]=u+f,e[1]=d+S,e[4]=1-(h+_),e[7]=g-m,e[2]=u-f,e[5]=g+m,e[8]=1-(h+p),this}fromMatrix4(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[4],e[4]=n[5],e[5]=n[6],e[6]=n[8],e[7]=n[9],e[8]=n[10],this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}}const Ki=new Yo,xr=new Yo,vr=new Yo,eo=new j;class Jr{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let t=this.length();return t===0?(this.x=0,this.y=0,this.z=0,this.w=1):(t=1/t,this.x=this.x*t,this.y=this.y*t,this.z=this.z*t,this.w=this.w*t),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t.x,i=t.y,r=t.z,a=t.w,o=e.x,c=e.y,l=e.z,h=e.w;return this.x=n*h+a*o+i*l-r*c,this.y=i*h+a*c+r*o-n*l,this.z=r*h+a*l+n*c-i*o,this.w=a*h-n*o-i*c-r*l,this}angleTo(t){return 2*Math.acos(Math.abs(Fs.clamp(this.dot(t),-1,1)))}rotateTo(t,e,n=1e-4){const i=this.angleTo(t);if(i<n)return!0;const r=Math.min(1,e/i);return this.slerp(t,r),!1}lookAt(t,e,n){vr.lookAt(t,e,n),this.fromMatrix3(vr)}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this.x,i=this.y,r=this.z,a=this.w;let o=a*t.w+n*t.x+i*t.y+r*t.z;if(o<0?(this.w=-t.w,this.x=-t.x,this.y=-t.y,this.z=-t.z,o=-o):this.copy(t),o>=1)return this.w=a,this.x=n,this.y=i,this.z=r,this;const c=Math.sqrt(1-o*o);if(Math.abs(c)<.001)return this.w=.5*(a+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(r+this.z),this;const l=Math.atan2(c,o),h=Math.sin((1-e)*l)/c,d=Math.sin(e*l)/c;return this.w=a*h+this.w*d,this.x=n*h+this.x*d,this.y=i*h+this.y*d,this.z=r*h+this.z*d,this}extractRotationFromMatrix(t){const e=vr.elements,n=t.elements,i=1/eo.fromMatrix4Column(t,0).length(),r=1/eo.fromMatrix4Column(t,1).length(),a=1/eo.fromMatrix4Column(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[4]*r,e[4]=n[5]*r,e[5]=n[6]*r,e[6]=n[8]*a,e[7]=n[9]*a,e[8]=n[10]*a,this.fromMatrix3(vr),this}fromEuler(t,e,n){const i=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),o=Math.sin(e/2),c=Math.sin(t/2),l=Math.sin(n/2);return this.w=i*r*a+o*c*l,this.x=i*c*a+o*r*l,this.y=o*r*a-i*c*l,this.z=i*r*l-o*c*a,this}toEuler(t){const e=-2*(this.y*this.z-this.x*this.w);return Math.abs(e)>.9999?(t.x=Math.PI*.5*e,t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=0):(t.x=Math.asin(e),t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),t}fromMatrix3(t){const e=t.elements,n=e[0],i=e[3],r=e[6],a=e[1],o=e[4],c=e[7],l=e[2],h=e[5],d=e[8],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this.w=.25/p,this.x=(h-c)*p,this.y=(r-l)*p,this.z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this.w=(h-c)/p,this.x=.25*p,this.y=(i+a)/p,this.z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this.w=(r-l)/p,this.x=(i+a)/p,this.y=.25*p,this.z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this.w=(a-i)/p,this.x=(r+l)/p,this.y=(c+h)/p,this.z=.25*p}return this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}}class Bs{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],S=n[3],x=n[7],w=n[11],I=n[15],A=i[0],T=i[4],L=i[8],y=i[12],v=i[1],R=i[5],O=i[9],F=i[13],H=i[2],X=i[6],G=i[10],J=i[14],k=i[3],ot=i[7],dt=i[11],gt=i[15];return r[0]=a*A+o*v+c*H+l*k,r[4]=a*T+o*R+c*X+l*ot,r[8]=a*L+o*O+c*G+l*dt,r[12]=a*y+o*F+c*J+l*gt,r[1]=h*A+d*v+u*H+p*k,r[5]=h*T+d*R+u*X+p*ot,r[9]=h*L+d*O+u*G+p*dt,r[13]=h*y+d*F+u*J+p*gt,r[2]=g*A+_*v+m*H+f*k,r[6]=g*T+_*R+m*X+f*ot,r[10]=g*L+_*O+m*G+f*dt,r[14]=g*y+_*F+m*J+f*gt,r[3]=S*A+x*v+w*H+I*k,r[7]=S*T+x*R+w*X+I*ot,r[11]=S*L+x*O+w*G+I*dt,r[15]=S*y+x*F+w*J+I*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}extractBasis(t,e,n){return t.fromMatrix4Column(this,0),e.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}compose(t,e,n){return this.fromQuaternion(e),this.scale(n),this.setPosition(t),this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}setPosition(t){const e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}getInverse(t){const e=this.elements,n=t.elements,i=e[0],r=e[1],a=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],u=e[8],p=e[9],g=e[10],_=e[11],m=e[12],f=e[13],S=e[14],x=e[15],w=p*S*d-f*g*d+f*h*_-l*S*_-p*h*x+l*g*x,I=m*g*d-u*S*d-m*h*_+c*S*_+u*h*x-c*g*x,A=u*f*d-m*p*d+m*l*_-c*f*_-u*l*x+c*p*x,T=m*p*h-u*f*h-m*l*g+c*f*g+u*l*S-c*p*S,L=i*w+r*I+a*A+o*T;if(L===0)return t.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/L;return n[0]=w*y,n[1]=(f*g*o-p*S*o-f*a*_+r*S*_+p*a*x-r*g*x)*y,n[2]=(l*S*o-f*h*o+f*a*d-r*S*d-l*a*x+r*h*x)*y,n[3]=(p*h*o-l*g*o-p*a*d+r*g*d+l*a*_-r*h*_)*y,n[4]=I*y,n[5]=(u*S*o-m*g*o+m*a*_-i*S*_-u*a*x+i*g*x)*y,n[6]=(m*h*o-c*S*o-m*a*d+i*S*d+c*a*x-i*h*x)*y,n[7]=(c*g*o-u*h*o+u*a*d-i*g*d-c*a*_+i*h*_)*y,n[8]=A*y,n[9]=(m*p*o-u*f*o-m*r*_+i*f*_+u*r*x-i*p*x)*y,n[10]=(c*f*o-m*l*o+m*r*d-i*f*d-c*r*x+i*l*x)*y,n[11]=(u*l*o-c*p*o-u*r*d+i*p*d+c*r*_-i*l*_)*y,n[12]=T*y,n[13]=(u*f*a-m*p*a+m*r*g-i*f*g-u*r*S+i*p*S)*y,n[14]=(m*l*a-c*f*a-m*r*h+i*f*h+c*r*S-i*l*S)*y,n[15]=(c*p*a-u*l*a+u*r*h-i*p*h-c*r*g+i*l*g)*y,t}getMaxScale(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=t.w,o=n+n,c=i+i,l=r+r,h=n*o,d=n*c,u=n*l,p=i*c,g=i*l,_=r*l,m=a*o,f=a*c,S=a*l;return e[0]=1-(p+_),e[4]=d-S,e[8]=u+f,e[1]=d+S,e[5]=1-(h+_),e[9]=g-m,e[2]=u-f,e[6]=g+m,e[10]=1-(h+p),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromMatrix3(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=0,e[4]=n[3],e[5]=n[4],e[6]=n[5],e[7]=0,e[8]=n[6],e[9]=n[7],e[10]=n[8],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}}const Mr=new Jr,Wn=new j,yr=new j,$i=new Jr;class Jo{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new j,this.rotation=new Jr,this.scale=new j(1,1,1),this.forward=new j(0,0,1),this.up=new j(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new Bs,this._worldMatrix=new Bs,this._cache={position:new j,rotation:new Jr,scale:new j(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=Fs.generateUUID()),this._uuid}start(){return this}update(){return this}add(t){return t.parent!==null&&t.parent.remove(t),this.children.push(t),t.parent=this,this}remove(t){const e=this.children.indexOf(t);return this.children.splice(e,1),t.parent=null,this}getDirection(t){return t.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(t){const e=this.parent;return e!==null?(this.getWorldPosition(yr),Wn.subVectors(t,yr).normalize(),this.rotation.lookAt(this.forward,Wn,this.up),$i.extractRotationFromMatrix(e.worldMatrix).inverse(),this.rotation.premultiply($i)):(Wn.subVectors(t,this.position).normalize(),this.rotation.lookAt(this.forward,Wn,this.up)),this}rotateTo(t,e,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(yr),Wn.subVectors(t,yr).normalize(),Mr.lookAt(this.forward,Wn,this.up),$i.extractRotationFromMatrix(i.worldMatrix).inverse(),Mr.premultiply($i)):(Wn.subVectors(t,this.position).normalize(),Mr.lookAt(this.forward,Wn,this.up)),this.rotation.rotateTo(Mr,this.maxTurnRate*e,n)}getWorldDirection(t){return $i.extractRotationFromMatrix(this.worldMatrix),t.copy(this.forward).applyRotation($i).normalize()}getWorldPosition(t){return t.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(t,e){return this._renderComponent=t,this._renderComponentCallback=e,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(t,e,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,t,e,n,i):rn.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:eh(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:eh(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(t){return this.name=t.name,this.active=t.active,this.neighborhoodRadius=t.neighborhoodRadius,this.updateNeighborhood=t.updateNeighborhood,this.position.fromArray(t.position),this.rotation.fromArray(t.rotation),this.scale.fromArray(t.scale),this.forward.fromArray(t.forward),this.up.fromArray(t.up),this.boundingRadius=t.boundingRadius,this.maxTurnRate=t.maxTurnRate,this.canActivateTrigger=t.canActivateTrigger,this.children=t.children.slice(),this.neighbors=t.neighbors.slice(),this.parent=t.parent,this._localMatrix.fromArray(t._localMatrix),this._worldMatrix.fromArray(t.worldMatrix),this._cache.position.fromArray(t._cache.position),this._cache.rotation.fromArray(t._cache.rotation),this._cache.scale.fromArray(t._cache.scale),this._started=t._started,this._uuid=t.uuid,this}resolveReferences(t){const e=this.neighbors;for(let i=0,r=e.length;i<r;i++)e[i]=t.get(e[i]);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i]=t.get(n[i]);return this.parent=t.get(this.parent)||null,this}_updateMatrix(){const t=this._cache;t.position.equals(this.position)&&t.rotation.equals(this.rotation)&&t.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),t.position.copy(this.position),t.rotation.copy(this.rotation),t.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const t=this.parent;if(t!==null&&t._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){t===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];r._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function eh(s){const t=new Array;for(let e=0,n=s.length;e<n;e++)t.push(s[e].uuid);return t}const nh=new j,no=new j;class wu extends Jo{constructor(){super(),this.velocity=new j,this.maxSpeed=1,this.updateOrientation=!0}update(t){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),nh.copy(this.velocity).multiplyScalar(t),no.copy(this.position).add(nh),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(no),this.position.copy(no),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const t=super.toJSON();return t.velocity=this.velocity.toArray(new Array),t.maxSpeed=this.maxSpeed,t.updateOrientation=this.updateOrientation,t}fromJSON(t){return super.fromJSON(t),this.velocity.fromArray(t.velocity),this.maxSpeed=t.maxSpeed,this.updateOrientation=t.updateOrientation,this}}class Fe{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(t){return this.active=t.active,this.weight=t.weight,this}resolveReferences(){}}const Sr=new j,Er=new j;class rx extends Fe{constructor(){super()}calculate(t,e){Sr.set(0,0,0);const n=t.neighbors;for(let i=0,r=n.length;i<r;i++)n[i].getDirection(Er),Sr.add(Er);return n.length>0&&(Sr.divideScalar(n.length),t.getDirection(Er),e.subVectors(Sr,Er)),e}}const io=new j,so=new j;class sa extends Fe{constructor(t=new j,e=3,n=0){super(),this.target=t,this.deceleration=e,this.tolerance=n}calculate(t,e){const n=this.target,i=this.deceleration;so.subVectors(n,t.position);const r=so.length();if(r>this.tolerance){let a=r/i;a=Math.min(a,t.maxSpeed),io.copy(so).multiplyScalar(a/r)}else io.set(0,0,0);return e.subVectors(io,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.deceleration=t.deceleration,this}}const ro=new j;class ra extends Fe{constructor(t=new j){super(),this.target=t}calculate(t,e){const n=this.target;return ro.subVectors(n,t.position).normalize(),ro.multiplyScalar(t.maxSpeed),e.subVectors(ro,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this}}const wr=new j;class ax extends Fe{constructor(){super(),this._seek=new ra}calculate(t,e){wr.set(0,0,0);const n=t.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];wr.add(a.position)}return n.length>0&&(wr.divideScalar(n.length),this._seek.target=wr,this._seek.calculate(t,e),e.normalize()),e}}const Rs=new j;class Au extends Fe{constructor(t=new j,e=10){super(),this.target=t,this.panicDistance=e}calculate(t,e){const n=this.target;return t.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(Rs.subVectors(t.position,n).normalize(),Rs.squaredLength()===0&&Rs.set(0,0,1),Rs.multiplyScalar(t.maxSpeed),e.subVectors(Rs,t.velocity)),e}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.panicDistance=this.panicDistance,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.panicDistance=t.panicDistance,this}}const ih=new j,sh=new j,rh=new j;class Tu extends Fe{constructor(t=null,e=10,n=1){super(),this.pursuer=t,this.panicDistance=e,this.predictionFactor=n,this._flee=new Au}calculate(t,e){const n=this.pursuer;ih.subVectors(n.position,t.position);let i=ih.length()/(t.maxSpeed+n.getSpeed());return i*=this.predictionFactor,sh.copy(n.velocity).multiplyScalar(i),rh.addVectors(n.position,sh),this._flee.target=rh,this._flee.panicDistance=this.panicDistance,this._flee.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.pursuer=this.pursuer?this.pursuer.uuid:null,t.panicDistance=this.panicDistance,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.pursuer=t.pursuer,this.panicDistance=t.panicDistance,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.pursuer=t.get(this.pursuer)||null}}class ox{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(t){return this._waypoints.push(t),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const t=this._waypoints.length-1;return this.loop===!0?!1:this._index===t}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const t={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},e=this._waypoints;for(let n=0,i=e.length;n<i;n++){const r=e[n];t._waypoints.push(r.toArray(new Array))}return t}fromJSON(t){this.loop=t.loop,this._index=t._index;const e=t._waypoints;for(let n=0,i=e.length;n<i;n++){const r=e[n];this._waypoints.push(new j().fromArray(r))}return this}}class cx extends Fe{constructor(t=new ox,e=1){super(),this.path=t,this.nextWaypointDistance=e,this._arrive=new sa,this._seek=new ra}calculate(t,e){const n=this.path;n.current().squaredDistanceTo(t.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const r=n.current();return n.finished()===!0?(this._arrive.target=r,this._arrive.calculate(t,e)):(this._seek.target=r,this._seek.calculate(t,e)),e}toJSON(){const t=super.toJSON();return t.path=this.path.toJSON(),t.nextWaypointDistance=this.nextWaypointDistance,t}fromJSON(t){return super.fromJSON(t),this.path.fromJSON(t.path),this.nextWaypointDistance=t.nextWaypointDistance,this}}const Ar=new j,Tr=new j,ah=new j,oh=new j;class lx extends Fe{constructor(t=null,e=null,n=3){super(),this.entity1=t,this.entity2=e,this.deceleration=n,this._arrive=new sa}calculate(t,e){const n=this.entity1,i=this.entity2;Ar.addVectors(n.position,i.position).multiplyScalar(.5);const r=t.position.distanceTo(Ar)/t.maxSpeed;return Tr.copy(n.velocity).multiplyScalar(r),ah.addVectors(n.position,Tr),Tr.copy(i.velocity).multiplyScalar(r),oh.addVectors(i.position,Tr),Ar.addVectors(ah,oh).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=Ar,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.entity1=this.entity1?this.entity1.uuid:null,t.entity2=this.entity2?this.entity2.uuid:null,t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.entity1=t.entity1,this.entity2=t.entity2,this.deceleration=t.deceleration,this}resolveReferences(t){this.entity1=t.get(this.entity1)||null,this.entity2=t.get(this.entity2)||null}}const qe=new j,Cs=new j,Xn=new j,bn=[new j,new j,new j,new j,new j,new j,new j,new j];class Ko{constructor(t=new j,e=new j){this.min=t,this.max=e}set(t,e){return this.min=t,this.max=e,this}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max),e}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}expand(t){return this.min.min(t),this.max.max(t),this}getCenter(t){return t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t.subVectors(this.max,this.min)}intersectsAABB(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsBoundingSphere(t){return this.clampPoint(t.center,qe),qe.squaredDistanceTo(t.center)<=t.radius*t.radius}intersectsPlane(t){const e=t.normal;this.getCenter(Cs),Xn.subVectors(this.max,Cs);const n=Xn.x*Math.abs(e.x)+Xn.y*Math.abs(e.y)+Xn.z*Math.abs(e.z),i=t.distanceToPoint(Cs);return Math.abs(i)<=n}getNormalFromSurfacePoint(t,e){e.set(0,0,0);let n,i=1/0;return this.getCenter(Cs),this.getSize(Xn),qe.copy(t).sub(Cs),n=Math.abs(Xn.x-Math.abs(qe.x)),n<i&&(i=n,e.set(1*Math.sign(qe.x),0,0)),n=Math.abs(Xn.y-Math.abs(qe.y)),n<i&&(i=n,e.set(0,1*Math.sign(qe.y),0)),n=Math.abs(Xn.z-Math.abs(qe.z)),n<i&&e.set(0,0,1*Math.sign(qe.z)),e}fromCenterAndSize(t,e){return qe.copy(e).multiplyScalar(.5),this.min.copy(t).sub(qe),this.max.copy(t).add(qe),this}fromPoints(t){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let e=0,n=t.length;e<n;e++)this.expand(t[e]);return this}applyMatrix4(t){const e=this.min,n=this.max;return bn[0].set(e.x,e.y,e.z).applyMatrix4(t),bn[1].set(e.x,e.y,n.z).applyMatrix4(t),bn[2].set(e.x,n.y,e.z).applyMatrix4(t),bn[3].set(e.x,n.y,n.z).applyMatrix4(t),bn[4].set(n.x,e.y,e.z).applyMatrix4(t),bn[5].set(n.x,e.y,n.z).applyMatrix4(t),bn[6].set(n.x,n.y,e.z).applyMatrix4(t),bn[7].set(n.x,n.y,n.z).applyMatrix4(t),this.fromPoints(bn)}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ao=new Ko;class aa{constructor(t=new j,e=0){this.center=t,this.radius=e}set(t,e){return this.center=t,this.radius=e,this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t),this.center.squaredDistanceTo(t)>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}containsPoint(t){return t.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(t){const e=this.radius+t.radius;return t.center.squaredDistanceTo(this.center)<=e*e}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(t,e){return e.subVectors(t,this.center).normalize()}fromPoints(t){return ao.fromPoints(t),ao.getCenter(this.center),this.radius=this.center.distanceTo(ao.max),this}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScale(),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(t){return this.center.fromArray(t.center),this.radius=t.radius,this}}const Ye=new j,oo=new j,br=new j,co=new j,ch=new j,Rr=new Bs,hx=new Bs,lh=new Ko;class bu{constructor(t=new j,e=new j){this.origin=t,this.direction=e}set(t,e){return this.origin=t,this.direction=e,this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}clone(){return new this.constructor().copy(this)}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}intersectBoundingSphere(t,e){Ye.subVectors(t.center,this.origin);const n=Ye.dot(this.direction),i=Ye.dot(Ye)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsBoundingSphere(t){const e=new j;let n;const i=e.subVectors(t.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(t.center):(e.copy(this.direction).multiplyScalar(i).add(this.origin),n=e.squaredDistanceTo(t.center)),n<=t.radius*t.radius}intersectAABB(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsAABB(t){return this.intersectAABB(t,Ye)!==null}intersectPlane(t,e){let n;const i=t.normal.dot(this.direction);if(i===0)if(t.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?this.at(n,e):null}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectOBB(t,e){return t.getSize(ch),lh.fromCenterAndSize(Ye.set(0,0,0),ch),Rr.fromMatrix3(t.rotation),Rr.setPosition(t.center),hh.copy(this).applyMatrix4(Rr.getInverse(hx)),hh.intersectAABB(lh,e)?e.applyMatrix4(Rr):null}intersectsOBB(t){return this.intersectOBB(t,Ye)!==null}intersectConvexHull(t,e){const n=t.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a].plane,h=l.distanceToPoint(this.origin),d=l.normal.dot(this.direction);if(h>0&&d>=0)return null;const u=d!==0?-h/d:0;if(!(u<=0)&&(d>0?r=Math.min(u,r):i=Math.max(u,i),i>r))return null}return i!==-1/0?this.at(i,e):this.at(r,e),e}intersectsConvexHull(t){return this.intersectConvexHull(t,Ye)!==null}intersectTriangle(t,e,n){const i=t.a,r=t.b,a=t.c;oo.subVectors(r,i),br.subVectors(a,i),co.crossVectors(oo,br);let o=this.direction.dot(co),c;if(o>0){if(e)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Ye.subVectors(this.origin,i);const l=c*this.direction.dot(br.crossVectors(Ye,br));if(l<0)return null;const h=c*this.direction.dot(oo.cross(Ye));if(h<0||l+h>o)return null;const d=-c*Ye.dot(co);return d<0?null:this.at(d/o,n)}intersectBVH(t,e){return t.root.intersectRay(this,e)}intersectsBVH(t){return t.root.intersectsRay(this)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}const hh=new bu,uh=new Bs,Zi=new j,Cr=new j,lo=new j,ho=new aa,ux=new bu(new j(0,0,0),new j(0,0,1));class dx extends Fe{constructor(t=new Array){super(),this.obstacles=t,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(t,e){const n=this.obstacles;let i=null,r=1/0;const a=this.dBoxMinLength+t.getSpeed()/t.maxSpeed*this.dBoxMinLength;t.worldMatrix.getInverse(uh);for(let o=0,c=n.length;o<c;o++){const l=n[o];if(l!==t&&(Zi.copy(l.position).applyMatrix4(uh),Zi.z>0&&Math.abs(Zi.z)<a)){const h=l.boundingRadius+t.boundingRadius;Math.abs(Zi.x)<h&&(ho.center.copy(Zi),ho.radius=h,ux.intersectBoundingSphere(ho,lo),lo.z<r&&(r=lo.z,i=l,Cr.copy(Zi)))}}if(i!==null){const o=1+(a-Cr.z)/a;e.x=(i.boundingRadius-Cr.x)*o,e.z=(i.boundingRadius-Cr.z)*this.brakingWeight,e.applyRotation(t.rotation)}return e}toJSON(){const t=super.toJSON();t.obstacles=new Array,t.brakingWeight=this.brakingWeight,t.dBoxMinLength=this.dBoxMinLength;for(let e=0,n=this.obstacles.length;e<n;e++)t.obstacles.push(this.obstacles[e].uuid);return t}fromJSON(t){return super.fromJSON(t),this.obstacles=t.obstacles,this.brakingWeight=t.brakingWeight,this.dBoxMinLength=t.dBoxMinLength,this}resolveReferences(t){const e=this.obstacles;for(let n=0,i=e.length;n<i;n++)e[n]=t.get(e[n])}}const uo=new j,dh=new j,fh=new j,ph=new j;class fx extends Fe{constructor(t=null,e=new j){super(),this.leader=t,this.offset=e,this._arrive=new sa,this._arrive.deceleration=1.5}calculate(t,e){const n=this.leader,i=this.offset;uo.copy(i).applyMatrix4(n.worldMatrix),dh.subVectors(uo,t.position);const r=dh.length()/(t.maxSpeed+n.getSpeed());return fh.copy(n.velocity).multiplyScalar(r),ph.addVectors(uo,fh),this._arrive.target=ph,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.leader=this.leader?this.leader.uuid:null,t.offset=this.offset,t}fromJSON(t){return super.fromJSON(t),this.leader=t.leader,this.offset=t.offset,this}resolveReferences(t){this.leader=t.get(this.leader)||null}}const fo=new j,po=new j,mh=new j,gh=new j,_h=new j;class Ru extends Fe{constructor(t=null,e=1){super(),this.evader=t,this.predictionFactor=e,this._seek=new ra}calculate(t,e){const n=this.evader;fo.subVectors(n.position,t.position),t.getDirection(po),n.getDirection(mh);const i=fo.dot(po)>0,r=po.dot(mh)<-.95;if(i===!0&&r===!0)return this._seek.target=n.position,this._seek.calculate(t,e),e;let a=fo.length()/(t.maxSpeed+n.getSpeed());return a*=this.predictionFactor,gh.copy(n.velocity).multiplyScalar(a),_h.addVectors(n.position,gh),this._seek.target=_h,this._seek.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.evader=this.evader?this.evader.uuid:null,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.evader=t.evader,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.evader=t.get(this.evader)||null}}const Pr=new j;class px extends Fe{constructor(){super()}calculate(t,e){const n=t.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];Pr.subVectors(t.position,a.position);let o=Pr.length();o===0&&(o=1e-4),Pr.normalize().divideScalar(o),e.add(Pr)}return e}}const Lr=new j,mo=new j;class mx extends Fe{constructor(t=1,e=5,n=5){super(),this.radius=t,this.distance=e,this.jitter=n,this._targetLocal=new j,gx(this.radius,this._targetLocal)}calculate(t,e,n){const i=this.jitter*n;return mo.x=Fs.randFloat(-1,1)*i,mo.z=Fs.randFloat(-1,1)*i,this._targetLocal.add(mo),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),Lr.copy(this._targetLocal),Lr.z+=this.distance,Lr.applyMatrix4(t.worldMatrix),e.subVectors(Lr,t.position),e}toJSON(){const t=super.toJSON();return t.radius=this.radius,t.distance=this.distance,t.jitter=this.jitter,t._targetLocal=this._targetLocal.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this.distance=t.distance,this.jitter=t.jitter,this._targetLocal.fromArray(t._targetLocal),this}}function gx(s,t){const e=Math.random()*Math.PI*2;t.x=s*Math.cos(e),t.z=s*Math.sin(e)}const Dr=new j;class xh{constructor(t){this.vehicle=t,this.behaviors=new Array,this._steeringForce=new j,this._typesMap=new Map}add(t){return this.behaviors.push(t),this}remove(t){const e=this.behaviors.indexOf(t);return this.behaviors.splice(e,1),this}clear(){return this.behaviors.length=0,this}calculate(t,e){return this._calculateByOrder(t),e.copy(this._steeringForce)}_accumulate(t){const e=this._steeringForce.length(),n=this.vehicle.maxForce-e;return n<=0?!1:(t.length()>n&&t.normalize().multiplyScalar(n),this._steeringForce.add(t),!0)}_calculateByOrder(t){const e=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=e.length;n<i;n++){const r=e[n];if(r.active===!0&&(Dr.set(0,0,0),r.calculate(this.vehicle,Dr,t),Dr.multiplyScalar(r.weight),this._accumulate(Dr)===!1))return}}toJSON(){const t={type:"SteeringManager",behaviors:new Array},e=this.behaviors;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.behaviors.push(r.toJSON())}return t}fromJSON(t){this.clear();const e=t.behaviors;for(let n=0,i=e.length;n<i;n++){const r=e[n],a=r.type;let o;switch(a){case"SteeringBehavior":o=new Fe().fromJSON(r);break;case"AlignmentBehavior":o=new rx().fromJSON(r);break;case"ArriveBehavior":o=new sa().fromJSON(r);break;case"CohesionBehavior":o=new ax().fromJSON(r);break;case"EvadeBehavior":o=new Tu().fromJSON(r);break;case"FleeBehavior":o=new Au().fromJSON(r);break;case"FollowPathBehavior":o=new cx().fromJSON(r);break;case"InterposeBehavior":o=new lx().fromJSON(r);break;case"ObstacleAvoidanceBehavior":o=new dx().fromJSON(r);break;case"OffsetPursuitBehavior":o=new fx().fromJSON(r);break;case"PursuitBehavior":o=new Ru().fromJSON(r);break;case"SeekBehavior":o=new ra().fromJSON(r);break;case"SeparationBehavior":o=new px().fromJSON(r);break;case"WanderBehavior":o=new mx().fromJSON(r);break;default:const c=this._typesMap.get(a);if(c!==void 0)o=new c().fromJSON(r);else{rn.warn("YUKA.SteeringManager: Unsupported steering behavior type:",a);continue}}this.add(o)}return this}registerType(t,e){return this._typesMap.set(t,e),this}resolveReferences(t){const e=this.behaviors;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}class _x{constructor(t=10){this.count=t,this._history=new Array,this._slot=0;for(let e=0;e<this.count;e++)this._history[e]=new j}calculate(t,e){e.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(t),this._slot++;for(let n=0;n<this.count;n++)e.add(this._history[n]);return e.divideScalar(this.count),e}toJSON(){const t={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},e=this._history;for(let n=0,i=e.length;n<i;n++){const r=e[n];t._history.push(r.toArray(new Array))}return t}fromJSON(t){this.count=t.count,this._slot=t._slot;const e=t._history;this._history.length=0;for(let n=0,i=e.length;n<i;n++){const r=e[n];this._history.push(new j().fromArray(r))}return this}}const vh=new j,Ir=new j,Mh=new j,Ps=new j,yh=new j;class Io extends wu{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new xh(this),this.smoother=null}update(t){return this.steering.calculate(t,vh),Mh.copy(vh).divideScalar(this.mass),this.velocity.add(Mh.multiplyScalar(t)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),Ir.copy(this.velocity).multiplyScalar(t),Ps.copy(this.position).add(Ir),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt(Ps),this.position.copy(Ps),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,yh),Ir.copy(yh).multiplyScalar(t),Ps.copy(this.position).add(Ir),this.lookAt(Ps)),this}toJSON(){const t=super.toJSON();return t.mass=this.mass,t.maxForce=this.maxForce,t.steering=this.steering.toJSON(),t.smoother=this.smoother?this.smoother.toJSON():null,t}fromJSON(t){return super.fromJSON(t),this.mass=t.mass,this.maxForce=t.maxForce,this.steering=new xh(this).fromJSON(t.steering),this.smoother=t.smoother?new _x().fromJSON(t.smoother):null,this}resolveReferences(t){super.resolveReferences(t),this.steering.resolveReferences(t)}}class Kr{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const Sh=new aa,Eh=new j;class xx extends Kr{constructor(t=new j){super(),this.size=t,this._aabb=new Ko}touching(t){return Sh.set(t.position,t.boundingRadius),this._aabb.intersectsBoundingSphere(Sh)}update(t){return t.getWorldPosition(Eh),this._aabb.fromCenterAndSize(Eh,this.size),this}toJSON(){const t=super.toJSON();return t.size=this.size.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.size.fromArray(t.size),this}}const go=new aa;class vx extends Kr{constructor(t=0){super(),this.radius=t,this._boundingSphere=new aa}touching(t){return t.getWorldPosition(go.center),go.radius=t.boundingRadius,this._boundingSphere.intersectsBoundingSphere(go)}update(t){return t.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const t=super.toJSON();return t.radius=this.radius,t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this}}class wh extends Jo{constructor(t=new Kr){super(),this.region=t,this.canActivateTrigger=!1,this._typesMap=new Map}check(t){return this.region.touching(t)===!0&&this.execute(t),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const t=super.toJSON();return t.region=this.region.toJSON(),t}fromJSON(t){super.fromJSON(t);const e=t.region;let n=e.type;switch(n){case"TriggerRegion":this.region=new Kr().fromJSON(e);break;case"RectangularTriggerRegion":this.region=new xx().fromJSON(e);break;case"SphericalTriggerRegion":this.region=new vx().fromJSON(e);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(e):rn.warn("YUKA.Trigger: Unsupported trigger region type:",e.type)}return this}registerType(t,e){return this._typesMap.set(t,e),this}}const Ls=new Array;class Mx{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new ix}add(t){return this.entities.push(t),t.manager=this,this}remove(t){const e=this.entities.indexOf(t);return this.entities.splice(e,1),t.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(t){const e=this.entities;for(let n=0,i=e.length;n<i;n++){const r=e[n];if(r.name===t)return r}return null}update(t){const e=this.entities,n=this._triggers;for(let i=e.length-1;i>=0;i--){const r=e[i];this.updateEntity(r,t)}for(let i=n.length-1;i>=0;i--){const r=n[i];this.processTrigger(r)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(t),this}updateEntity(t,e){if(t.active===!0){this.updateNeighborhood(t),t._started===!1&&(t.start(),t._started=!0),t.update(e);const n=t.children;for(let a=n.length-1;a>=0;a--){const o=n[a];this.updateEntity(o,e)}if(t instanceof wh&&this._triggers.push(t),this.spatialIndex!==null){let a=this._indexMap.get(t)||-1;a=this.spatialIndex.updateEntity(t,a),this._indexMap.set(t,a)}const i=t._renderComponent,r=t._renderComponentCallback;i!==null&&r!==null&&r(t,i)}return this}updateNeighborhood(t){if(t.updateNeighborhood===!0){t.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(t.position,t.neighborhoodRadius,Ls):(Ls.length=0,Ls.push(...this.entities));const e=t.neighborhoodRadius*t.neighborhoodRadius;for(let n=0,i=Ls.length;n<i;n++){const r=Ls[n];t!==r&&r.active===!0&&t.position.squaredDistanceTo(r.position)<=e&&t.neighbors.push(r)}}return this}processTrigger(t){t.updateRegion();const e=this.entities;for(let n=e.length-1;n>=0;n--){const i=e[n];t!==i&&i.active===!0&&i.canActivateTrigger===!0&&t.check(i)}return this}sendMessage(t,e,n,i,r){return this._messageDispatcher.dispatch(t,e,n,i,r),this}toJSON(){const t={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function e(n){t.entities.push(n.toJSON());for(let i=0,r=n.children.length;i<r;i++)e(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)e(this.entities[n]);return t}fromJSON(t){this.clear();const e=t.entities,n=t._messageDispatcher,i=new Map;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=o.type;let l;switch(c){case"GameEntity":l=new Jo().fromJSON(o);break;case"MovingEntity":l=new wu().fromJSON(o);break;case"Vehicle":l=new Io().fromJSON(o);break;case"Trigger":l=new wh().fromJSON(o);break;default:const h=this._typesMap.get(c);if(h!==void 0)l=new h().fromJSON(o);else{rn.warn("YUKA.EntityManager: Unsupported entity type:",c);continue}}i.set(l.uuid,l),l.parent===null&&this.add(l)}for(let r of i.values())r.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(t,e){return this._typesMap.set(t,e),this}}new Array;new Array;new Array;const Ah=10,yx=50;class Sx{constructor(t=0){ft(this,"_balance");this._balance=Math.max(0,t)}get balance(){return this._balance}earn(t){return this._balance+=Math.max(0,t),this._balance}spend(t){return t>this._balance?{success:!1,balance:this._balance}:(this._balance-=t,{success:!0,balance:this._balance})}}const Ex=8,_o=100,Th=300,wx=.3,Cu=80,bh=4,Rh=200,Ch=3,Ax=Ch*Ch,Pu=5,Ph=Cu*Pu,Tx=Ph*Ph,bx=Rh*Rh,Rx=Th*Th,Cx=12,Px=8,Lx=1e4,xo=60,Ur=new re,Dx=new vn(.3,4,4),Ix=new Ge({color:16729088});class $o{constructor(t,e){ft(this,"slots");ft(this,"activeCount",0);ft(this,"projectileInstances");ft(this,"entries",[]);ft(this,"entityManager");ft(this,"playerVehicle");this.entityManager=new Mx,this.playerVehicle=new Io,this.slots=Array.from({length:xo},()=>({posX:0,posY:0,posZ:0,velX:0,velY:0,velZ:0,lifeRemaining:0,originX:0,originY:0,originZ:0})),this.projectileInstances=new g0(Dx,Ix,xo),this.projectileInstances.count=0,this.projectileInstances.frustumCulled=!1,t.add(this.projectileInstances);const n=e.length;for(let i=0;i<n;i++){const r=e[i];r.userData.health===void 0&&(r.userData.health=_o),r.userData.creditValue===void 0&&(r.userData.creditValue=Ah+Math.floor(Math.random()*(yx-Ah+1)));const a=new Io;a.position.set(r.position.x,r.position.y,r.position.z),a.maxSpeed=Cx,a.maxForce=Px;const o=new Ru(this.playerVehicle);o.active=!1,a.steering.add(o);const c=new Tu(this.playerVehicle);c.active=!1,c.panicDistance=Lx,a.steering.add(c),this.entityManager.add(a),this.entries.push({mesh:r,vehicle:a,pursuitBehavior:o,evadeBehavior:c,fireTimer:i*bh/Math.max(n,1)})}}get projectileCount(){return this.activeCount}update(t,e){const n=e.x,i=e.y,r=e.z;let a=0;for(;a<this.activeCount;){const o=this.slots[a];o.posX+=o.velX*t,o.posY+=o.velY*t,o.posZ+=o.velZ*t,o.lifeRemaining-=t;const c=o.posX-o.originX,l=o.posY-o.originY,h=o.posZ-o.originZ,d=c*c+l*l+h*h;if(o.lifeRemaining<=0||d>=Tx){if(this.activeCount--,a<this.activeCount){const u=this.slots[this.activeCount];o.posX=u.posX,o.posY=u.posY,o.posZ=u.posZ,o.velX=u.velX,o.velY=u.velY,o.velZ=u.velZ,o.lifeRemaining=u.lifeRemaining,o.originX=u.originX,o.originY=u.originY,o.originZ=u.originZ}}else Ur.makeTranslation(o.posX,o.posY,o.posZ),this.projectileInstances.setMatrixAt(a,Ur),a++}this.projectileInstances.count=this.activeCount,this.projectileInstances.instanceMatrix.needsUpdate=!0,this.playerVehicle.position.set(n,i,r);for(const o of this.entries){const{mesh:c,vehicle:l,pursuitBehavior:h,evadeBehavior:d}=o,p=(c.userData.health??_o)/_o,g=l.position.x-n,_=l.position.y-i,m=l.position.z-r,f=g*g+_*_+m*m;p<wx?(h.active=!1,d.active=!0):f<=Rx?(h.active=!0,d.active=!1):(h.active=!1,d.active=!1,l.velocity.multiplyScalar(.9))}this.entityManager.update(t);for(const o of this.entries){const{mesh:c,vehicle:l}=o;c.position.set(l.position.x,l.position.y,l.position.z);const h=l.velocity.x,d=l.velocity.y,u=l.velocity.z;h*h+d*d+u*u>.25&&c.lookAt(c.position.x+h,c.position.y+d,c.position.z+u);const p=c.position.x-n,g=c.position.y-i,_=c.position.z-r,m=p*p+g*g+_*_;o.fireTimer-=t,o.fireTimer<=0&&(m<=bx&&this.spawnProjectile(c.position,e),o.fireTimer=bh)}}checkPlayerHit(t){const e=t.x,n=t.y,i=t.z;let r=0;for(;r<this.activeCount;){const a=this.slots[r],o=a.posX-e,c=a.posY-n,l=a.posZ-i;if(o*o+c*c+l*l<Ax){if(this.activeCount--,r<this.activeCount){const h=this.slots[this.activeCount];a.posX=h.posX,a.posY=h.posY,a.posZ=h.posZ,a.velX=h.velX,a.velY=h.velY,a.velZ=h.velZ,a.lifeRemaining=h.lifeRemaining,a.originX=h.originX,a.originY=h.originY,a.originZ=h.originZ,Ur.makeTranslation(a.posX,a.posY,a.posZ),this.projectileInstances.setMatrixAt(r,Ur)}return this.projectileInstances.count=this.activeCount,this.projectileInstances.instanceMatrix.needsUpdate=!0,!0}r++}return!1}reset(){this.activeCount=0,this.projectileInstances.count=0,this.projectileInstances.instanceMatrix.needsUpdate=!0}spawnProjectile(t,e){if(this.activeCount>=xo)return;const n=e.x-t.x,i=e.y-t.y,r=e.z-t.z,a=n*n+i*i+r*r;if(a===0)return;const o=this.slots[this.activeCount];o.posX=t.x,o.posY=t.y,o.posZ=t.z,o.originX=t.x,o.originY=t.y,o.originZ=t.z;const c=Cu/Math.sqrt(a);o.velX=n*c,o.velY=i*c,o.velZ=r*c,o.lifeRemaining=Pu,this.activeCount++}}function Ux(s){const t=document.createElement("div");t.id="game-over",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.85)",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:"100",fontFamily:"monospace"});const e=document.createElement("h1");e.textContent="SHIP DESTROYED",Object.assign(e.style,{fontSize:"3rem",margin:"0 0 1rem",letterSpacing:"0.2em",color:"#ff3300"});const n=document.createElement("p");n.textContent="Hull integrity at zero.",Object.assign(n.style,{fontSize:"1rem",color:"#888",margin:"0 0 2rem"});const i=document.createElement("button");return i.id="restart-btn",i.textContent="RESTART",Object.assign(i.style,{padding:"0.75rem 2.5rem",fontSize:"1.2rem",fontFamily:"monospace",background:"#200000",color:"#ff5500",border:"2px solid #ff3300",cursor:"pointer",letterSpacing:"0.1em"}),i.addEventListener("click",s),t.append(e,n,i),document.body.appendChild(t),document.addEventListener("keydown",r=>{t.style.display!=="none"&&(r.key==="r"||r.key==="R"||r.key==="Enter")&&s()}),{show(){t.style.display="flex",i.focus()},hide(){t.style.display="none"}}}function Nx(){const s=document.createElement("div");s.style.cssText=["position:fixed","top:50%","left:50%","width:16px","height:16px","transform:translate(-50%,-50%)","pointer-events:none","z-index:10"].join(";");const t=document.createElement("div");t.style.cssText=["position:absolute","top:50%","left:0","right:0","height:1px","margin-top:-0.5px","background:rgba(255,255,255,0.85)"].join(";");const e=document.createElement("div");e.style.cssText=["position:absolute","left:50%","top:0","bottom:0","width:1px","margin-left:-0.5px","background:rgba(255,255,255,0.85)"].join(";"),s.appendChild(t),s.appendChild(e),document.body.appendChild(s)}function Ox(){return typeof AudioContext<"u"?new AudioContext:typeof globalThis.webkitAudioContext<"u"?new globalThis.webkitAudioContext:null}function Rn(s,t="white"){for(let e=0;e<s.numberOfChannels;e++){const n=s.getChannelData(e);let i=0;for(let r=0;r<n.length;r++){const a=Math.random()*2-1;t==="brown"?(i=(i+.02*a)/1.02,n[r]=i*3.5):n[r]=a}}}function Cn(s,t,e,n,i,r=1){const a=t.currentTime;s.gain.setValueAtTime(0,a),s.gain.linearRampToValueAtTime(r,a+e),s.gain.setValueAtTime(r,a+e+n),s.gain.linearRampToValueAtTime(0,a+e+n+i)}const Jn=class Jn{constructor(){ft(this,"ctx");ft(this,"lowHealthCooldown",0);ft(this,"chaingunNodeId",null);ft(this,"shieldHitLastMs",-1/0);ft(this,"hullHitLastMs",-1/0);ft(this,"lowHealthHitLastMs",-1/0);this.ctx=Ox()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_hitCooldownAllowed(t,e,n){return e-t>=n}playLaserZap(){const t=this.ctx;if(!t)return;const e=t.createOscillator(),n=t.createGain();e.connect(n),n.connect(t.destination),e.type="sawtooth";const i=t.currentTime;e.frequency.setValueAtTime(880,i),e.frequency.exponentialRampToValueAtTime(110,i+.15),n.gain.setValueAtTime(.4,i),n.gain.linearRampToValueAtTime(0,i+.15),e.start(i),e.stop(i+.15)}startChaingunChatter(){!this.ctx||this.chaingunNodeId!==null||(this._fireChaingunBurst(),this.chaingunNodeId=setInterval(()=>this._fireChaingunBurst(),83))}stopChaingunChatter(){this.chaingunNodeId!==null&&(clearInterval(this.chaingunNodeId),this.chaingunNodeId=null)}playMissileWhoosh(){const t=this.ctx;if(!t)return;const e=.5,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate);Rn(n,"brown");const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(600,t.currentTime),r.frequency.linearRampToValueAtTime(2400,t.currentTime+e*.4),r.Q.value=2;const a=t.createGain();Cn(a,t,.05,.2,.25,.6),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playMissileExplosion(){this._playExplosion(.6)}playAsteroidHit(){const t=this.ctx;if(!t)return;const n=t.createBuffer(1,Math.floor(t.sampleRate*.18),t.sampleRate);Rn(n,"brown");const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const a=t.createGain();Cn(a,t,.001,.05,.13,.5),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playAsteroidDestroy(){const t=this.ctx;if(!t)return;const e=.4,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate);Rn(n,"brown");const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1800,t.currentTime),r.frequency.exponentialRampToValueAtTime(200,t.currentTime+e);const a=t.createGain();Cn(a,t,.001,.1,.3,.7),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playEnemyHit(){const t=this.ctx;if(!t)return;const n=t.createBuffer(1,Math.floor(t.sampleRate*.15),t.sampleRate);Rn(n);const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=2200,r.Q.value=3;const a=t.createGain();Cn(a,t,.001,.04,.11,.5),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playEnemyDestroy(){this._playExplosion(.8)}playPlayerShieldHit(){const t=Date.now();if(!this._hitCooldownAllowed(this.shieldHitLastMs,t,Jn.SHIELD_HIT_COOLDOWN_MS))return;this.shieldHitLastMs=t;const e=this.ctx;if(!e)return;const i=e.createBuffer(1,Math.floor(e.sampleRate*.1),e.sampleRate);Rn(i);const r=e.createBufferSource();r.buffer=i;const a=e.createBiquadFilter();a.type="highpass",a.frequency.value=2800,a.Q.value=4;const o=e.createGain();Cn(o,e,.001,.03,.07,.4),r.connect(a),a.connect(o),o.connect(e.destination),r.start()}playPlayerHullHit(){const t=Date.now();if(!this._hitCooldownAllowed(this.hullHitLastMs,t,Jn.HULL_HIT_COOLDOWN_MS))return;this.hullHitLastMs=t;const e=this.ctx;if(!e)return;const i=e.createBuffer(1,Math.floor(e.sampleRate*.22),e.sampleRate);Rn(i,"brown");const r=e.createBufferSource();r.buffer=i;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=300;const o=e.createGain();Cn(o,e,.001,.08,.14,.6),r.connect(a),a.connect(o),o.connect(e.destination),r.start()}playPlayerLowHealthHit(){const t=Date.now();if(!this._hitCooldownAllowed(this.lowHealthHitLastMs,t,Jn.LOW_HEALTH_HIT_COOLDOWN_MS))return;this.lowHealthHitLastMs=t;const e=this.ctx;if(!e)return;const i=e.createBuffer(1,Math.floor(e.sampleRate*.3),e.sampleRate);Rn(i,"brown");const r=e.createBufferSource();r.buffer=i;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.value=400;const o=e.createGain();Cn(o,e,.001,.1,.2,.7),r.connect(a),a.connect(o),o.connect(e.destination),r.start();const c=e.createOscillator(),l=e.createGain();c.connect(l),l.connect(e.destination),c.type="square";const h=e.currentTime;c.frequency.setValueAtTime(880,h),c.frequency.linearRampToValueAtTime(660,h+.15),l.gain.setValueAtTime(0,h),l.gain.linearRampToValueAtTime(.25,h+.01),l.gain.setValueAtTime(.25,h+.08),l.gain.linearRampToValueAtTime(0,h+.15),c.start(h),c.stop(h+.15)}playWarpActivation(){const t=this.ctx;if(!t)return;const e=t.createOscillator(),n=t.createGain();e.connect(n),n.connect(t.destination),e.type="sine";const i=t.currentTime,r=1.2;e.frequency.setValueAtTime(80,i),e.frequency.exponentialRampToValueAtTime(2400,i+r*.7),e.frequency.exponentialRampToValueAtTime(100,i+r),n.gain.setValueAtTime(0,i),n.gain.linearRampToValueAtTime(.5,i+.1),n.gain.setValueAtTime(.5,i+r*.7),n.gain.linearRampToValueAtTime(0,i+r),e.start(i),e.stop(i+r)}playUIClick(){const t=this.ctx;if(!t)return;const e=t.createOscillator(),n=t.createGain();e.connect(n),n.connect(t.destination),e.type="square";const i=t.currentTime;e.frequency.setValueAtTime(1200,i),e.frequency.linearRampToValueAtTime(800,i+.04),n.gain.setValueAtTime(.2,i),n.gain.linearRampToValueAtTime(0,i+.04),e.start(i),e.stop(i+.04)}playStorePurchase(){const t=this.ctx;if(!t)return;[523.25,783.99].forEach((n,i)=>{const r=t.createOscillator(),a=t.createGain();r.connect(a),a.connect(t.destination),r.type="sine";const o=t.currentTime+i*.12;r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.35,o+.02),a.gain.setValueAtTime(.35,o+.08),a.gain.linearRampToValueAtTime(0,o+.18),r.start(o),r.stop(o+.18)})}checkLowHealth(t,e){this.lowHealthCooldown>0&&(this.lowHealthCooldown=Math.max(0,this.lowHealthCooldown-e)),t<.25&&this.lowHealthCooldown===0&&(this._playLowHealthWarning(),this.lowHealthCooldown=3)}resetLowHealthWarning(){this.lowHealthCooldown=0}_fireChaingunBurst(){const t=this.ctx;if(!t)return;const n=t.createBuffer(1,Math.floor(t.sampleRate*.06),t.sampleRate);Rn(n);const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1800,r.Q.value=1.5;const a=t.createGain();Cn(a,t,.001,.01,.05,.4),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}_playExplosion(t){const e=this.ctx;if(!e)return;const n=.55,i=e.createBuffer(1,Math.floor(e.sampleRate*n),e.sampleRate);Rn(i,"brown");const r=e.createBufferSource();r.buffer=i;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(2200,e.currentTime),a.frequency.exponentialRampToValueAtTime(80,e.currentTime+n);const o=e.createGain();Cn(o,e,.001,.05,.5,t),r.connect(a),a.connect(o),o.connect(e.destination),r.start()}_playLowHealthWarning(){const t=this.ctx;t&&[0,.18].forEach(e=>{const n=t.createOscillator(),i=t.createGain();n.connect(i),i.connect(t.destination),n.type="square";const r=t.currentTime+e;n.frequency.setValueAtTime(440,r),i.gain.setValueAtTime(0,r),i.gain.linearRampToValueAtTime(.3,r+.02),i.gain.setValueAtTime(.3,r+.1),i.gain.linearRampToValueAtTime(0,r+.15),n.start(r),n.stop(r+.15)})}};ft(Jn,"SHIELD_HIT_COOLDOWN_MS",100),ft(Jn,"HULL_HIT_COOLDOWN_MS",100),ft(Jn,"LOW_HEALTH_HIT_COOLDOWN_MS",200);let Uo=Jn;const Fx=.25;function Bx(s,t,e){return t>0?e<Fx?"playPlayerLowHealthHit":"playPlayerHullHit":s>0?"playPlayerShieldHit":null}const Lu=30,qn=1.2,zx=10;function Hx(s,t){var e;for(const n of t){const a=(((e=n.geometry.parameters)==null?void 0:e.radius)??20)+Lu;if(s.distanceTo(n.position)<=a)return n}return null}function Vx(s){return{enemyPositions:s.enemies.map(t=>t.position.clone()),enemyRotations:s.enemies.map(t=>t.rotation.clone()),asteroidPositions:s.asteroids.map(t=>t.position.clone()),asteroidRotations:s.asteroids.map(t=>t.rotation.clone())}}function kx(s,t){const e=Math.min(s.enemies.length,t.enemyPositions.length);for(let i=0;i<e;i++)s.enemies[i].position.copy(t.enemyPositions[i]),s.enemies[i].rotation.copy(t.enemyRotations[i]);const n=Math.min(s.asteroids.length,t.asteroidPositions.length);for(let i=0;i<n;i++)s.asteroids[i].position.copy(t.asteroidPositions[i]),s.asteroids[i].rotation.copy(t.asteroidRotations[i])}class Gx{constructor(){ft(this,"state","space");ft(this,"fadeAlpha",0);ft(this,"fadeTimer",0);ft(this,"_snapshot",null);ft(this,"postLaunchCooldown",0)}checkProximity(t,e){return this.state!=="space"||this.postLaunchCooldown>0?null:Hx(t,e)}beginLanding(t){this.state==="space"&&(this._snapshot=Vx(t),this.state="landing-fadeout",this.fadeTimer=0,this.fadeAlpha=0)}beginLaunch(t){this.state==="on-surface"&&(this._snapshot&&kx(t,this._snapshot),this.state="launch-fadeout",this.fadeTimer=0,this.fadeAlpha=0)}getSectorSnapshot(){return this._snapshot}update(t){let e=!1,n=!1,i=!1;switch(this.state){case"landing-fadeout":this.fadeTimer+=t,this.fadeAlpha=Math.min(1,this.fadeTimer/qn),this.fadeTimer>=qn&&(this.state="surface-fadein",this.fadeTimer=0,e=!0);break;case"surface-fadein":this.fadeTimer+=t,this.fadeAlpha=Math.max(0,1-this.fadeTimer/qn),this.fadeTimer>=qn&&(this.state="on-surface",this.fadeAlpha=0,i=!0);break;case"launch-fadeout":this.fadeTimer+=t,this.fadeAlpha=Math.min(1,this.fadeTimer/qn),this.fadeTimer>=qn&&(this.state="space-fadein",this.fadeTimer=0,n=!0);break;case"space-fadein":this.fadeTimer+=t,this.fadeAlpha=Math.max(0,1-this.fadeTimer/qn),this.fadeTimer>=qn&&(this.state="space",this.fadeAlpha=0,this.postLaunchCooldown=zx);break}return this.postLaunchCooldown>0&&(this.postLaunchCooldown=Math.max(0,this.postLaunchCooldown-t)),{switchToSurface:e,switchToSpace:n,onSurface:i}}}const hn=15,un=-8,Du=8,Wx=[{name:"Laser Ammo Pack",desc:"+30 laser capacitor shots.",cost:150,category:"ammo",ammoType:"laser",ammoAmount:30},{name:"Chaingun Ammo Crate",desc:"+120 high-calibre rounds.",cost:200,category:"ammo",ammoType:"chaingun",ammoAmount:120},{name:"Missile Rack",desc:"+5 proximity-fused warheads.",cost:300,category:"ammo",ammoType:"missile",ammoAmount:5},{name:"Plasma Cannon",desc:"Experimental arc-discharge weapon.",cost:1200,category:"weapon"},{name:"Shield Array I",desc:"+25 maximum shield HP.",cost:400,category:"upgrade",upgradeType:"shields",upgradeBonus:25},{name:"Shield Array II",desc:"+50 maximum shield HP.",cost:800,category:"upgrade",upgradeType:"shields",upgradeBonus:50},{name:"Shield Array III",desc:"+75 maximum shield HP.",cost:1500,category:"upgrade",upgradeType:"shields",upgradeBonus:75},{name:"Engine Boost I",desc:"+5 thrust, +5 top speed.",cost:400,category:"upgrade",upgradeType:"engine",engineThrustBonus:5,engineSpeedBonus:5},{name:"Engine Boost II",desc:"+8 thrust, +8 top speed.",cost:800,category:"upgrade",upgradeType:"engine",engineThrustBonus:8,engineSpeedBonus:8},{name:"Engine Boost III",desc:"+12 thrust, +12 top speed.",cost:1500,category:"upgrade",upgradeType:"engine",engineThrustBonus:12,engineSpeedBonus:12},{name:"Hull Plating I",desc:"+25 maximum hull HP.",cost:400,category:"upgrade",upgradeType:"hull",upgradeBonus:25},{name:"Hull Plating II",desc:"+50 maximum hull HP.",cost:800,category:"upgrade",upgradeType:"hull",upgradeBonus:50},{name:"Hull Plating III",desc:"+75 maximum hull HP.",cost:1500,category:"upgrade",upgradeType:"hull",upgradeBonus:75}];function Xx(s,t,e){const{success:n}=t.spend(s.cost);return n?(e&&(s.category==="weapon"?e.unlockWeapon(s.name):s.category==="upgrade"&&(s.upgradeType==="shields"&&s.upgradeBonus!==void 0?e.upgradeMaxShield(s.upgradeBonus):s.upgradeType==="hull"&&s.upgradeBonus!==void 0?e.upgradeMaxHealth(s.upgradeBonus):s.upgradeType==="engine"&&e.upgradeEngine(s.engineThrustBonus??0,s.engineSpeedBonus??0))),{success:!0}):{success:!1}}function qx(s,t=()=>0){const e=new Un,n=t(hn,un,s),i=new jt({color:1716048,flatShading:!0}),r=new jt({color:859960,flatShading:!0}),a=new Ge({color:6720}),o=new Ge({color:17595}),c=new Ge({color:61183}),l=new Ge({color:13192}),h=new ge(8,5,8),d=new Et(h,i);d.position.set(hn,n+2.5,un),e.add(d);const u=new ge(10,.5,10),p=new Et(u,r);p.position.set(hn,n+5.25,un),e.add(p);const g=new Ei(.3,.3,12,6),_=new Et(g,a);_.position.set(hn+5.5,n+6,un),e.add(_);const m=new ge(4.5,1.6,.3),f=new Et(m,o);f.position.set(hn+5.5,n+12,un),e.add(f);const S=new vn(.55,8,6),x=new Et(S,c);x.position.set(hn+5.5,n+13.2,un),e.add(x);const w=new wi(Du,.25,6,48),I=new Et(w,l);I.rotation.x=Math.PI/2,I.position.set(hn,n+.12,un),e.add(I);const A=new Os(35071,25,70);A.position.set(hn,n+8,un),e.add(A);const T=new Os(52479,10,30);return T.position.set(hn+5.5,n+13,un),e.add(T),e}class Yx{constructor(t,e){ft(this,"panel");ft(this,"_isOpen",!1);this.onDismiss=t,this.onBuyAttempt=e,this.panel=this._buildPanel(),document.body.appendChild(this.panel)}get isOpen(){return this._isOpen}show(){this._isOpen=!0,this.panel.style.display="flex"}hide(){this._isOpen=!1,this.panel.style.display="none"}dismiss(){var t;this.hide(),(t=this.onDismiss)==null||t.call(this)}destroy(){this.panel.remove()}_buildPanel(){const t=document.createElement("div");Object.assign(t.style,{display:"none",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.78)",zIndex:"500",justifyContent:"center",alignItems:"center",fontFamily:"monospace"});const e=document.createElement("div");Object.assign(e.style,{background:"rgba(4,16,36,0.97)",border:"2px solid #00aaff",borderRadius:"8px",padding:"32px 36px",minWidth:"540px",maxWidth:"700px",color:"#cce4ff",boxShadow:"0 0 48px rgba(0,160,255,0.35)",position:"relative",maxHeight:"85vh",overflowY:"auto"});const n=document.createElement("button");n.textContent="✕",Object.assign(n.style,{position:"absolute",top:"12px",right:"14px",background:"transparent",border:"1px solid #004488",borderRadius:"4px",color:"#0077cc",fontSize:"16px",cursor:"pointer",fontFamily:"monospace",padding:"2px 8px",lineHeight:"1.4"}),n.title="Close (ESC)",n.addEventListener("mouseenter",()=>{n.style.color="#00ccff",n.style.borderColor="#0099ee"}),n.addEventListener("mouseleave",()=>{n.style.color="#0077cc",n.style.borderColor="#004488"}),n.addEventListener("click",()=>this.dismiss()),e.appendChild(n);const i=document.createElement("div");i.textContent="⬡  SUPPLY DEPOT",Object.assign(i.style,{fontSize:"22px",letterSpacing:"5px",color:"#00ccff",textAlign:"center",marginBottom:"6px",textShadow:"0 0 14px #0077cc"}),e.appendChild(i);const r=document.createElement("div");r.textContent="Weapons, Munitions & Ship Upgrades",Object.assign(r.style,{fontSize:"12px",color:"#336688",textAlign:"center",marginBottom:"24px",letterSpacing:"2px"}),e.appendChild(r);const a=[{label:"MUNITIONS",filter:c=>c.category==="ammo"||c.category==="weapon"},{label:"SHIP UPGRADES — SHIELDS",filter:c=>c.category==="upgrade"&&c.upgradeType==="shields"},{label:"SHIP UPGRADES — ENGINE",filter:c=>c.category==="upgrade"&&c.upgradeType==="engine"},{label:"SHIP UPGRADES — HULL",filter:c=>c.category==="upgrade"&&c.upgradeType==="hull"}];for(const c of a){const l=Wx.filter(c.filter);if(l.length===0)continue;const h=document.createElement("div");h.textContent=c.label,Object.assign(h.style,{fontSize:"11px",color:"#005577",letterSpacing:"3px",marginBottom:"8px",marginTop:"16px",borderBottom:"1px solid #002244",paddingBottom:"4px"}),e.appendChild(h);for(const d of l)e.appendChild(this._buildItemRow(d))}const o=document.createElement("div");return o.textContent="[ ESC ] or ✕ to close",Object.assign(o.style,{textAlign:"center",marginTop:"22px",fontSize:"12px",color:"#334455",letterSpacing:"1px"}),e.appendChild(o),t.appendChild(e),t}_buildItemRow(t){const e=document.createElement("div");Object.assign(e.style,{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0,40,80,0.55)",border:"1px solid #003366",borderRadius:"4px",padding:"12px 14px",marginBottom:"10px",gap:"16px"});const n=document.createElement("div");n.style.flex="1";const i=document.createElement("div");i.textContent=t.name,Object.assign(i.style,{fontSize:"15px",color:"#ddeeff",marginBottom:"4px",fontWeight:"bold"});const r=document.createElement("div");r.textContent=t.desc,Object.assign(r.style,{fontSize:"12px",color:"#5588aa"}),n.appendChild(i),n.appendChild(r);const a=document.createElement("div");Object.assign(a.style,{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px",flexShrink:"0"});const o=document.createElement("div");o.textContent=`${t.cost.toLocaleString()} ₢`,Object.assign(o.style,{fontSize:"15px",color:"#ffdd44",whiteSpace:"nowrap"});const c=document.createElement("button");return c.textContent="BUY",Object.assign(c.style,{background:"rgba(0,60,100,0.85)",border:"1px solid #0055aa",borderRadius:"3px",color:"#00aaff",padding:"4px 14px",cursor:"pointer",fontFamily:"monospace",fontSize:"12px",letterSpacing:"1px",opacity:"1"}),c.addEventListener("mouseenter",()=>{c.style.background="rgba(0,80,140,0.9)",c.style.borderColor="#0088cc",c.style.color="#44ccff"}),c.addEventListener("mouseleave",()=>{c.style.background="rgba(0,60,100,0.85)",c.style.borderColor="#0055aa",c.style.color="#00aaff"}),c.addEventListener("click",()=>{(this.onBuyAttempt?this.onBuyAttempt(t):{success:!1}).success?(c.textContent="PURCHASED",c.style.color="#00ff88",c.style.borderColor="#00aa55",c.style.background="rgba(0,60,30,0.85)"):(c.textContent="NEED CREDITS",c.style.color="#ff6644",c.style.borderColor="#aa2200",c.style.background="rgba(60,10,0,0.85)"),setTimeout(()=>{c.textContent="BUY",c.style.color="#00aaff",c.style.borderColor="#0055aa",c.style.background="rgba(0,60,100,0.85)"},1500)}),a.appendChild(o),a.appendChild(c),e.appendChild(n),e.appendChild(a),e}}const Jx=6,Iu=1.7,Le=0,De=-12,Uu=6,ji=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Kx=.5*(Math.sqrt(3)-1),Ds=(3-Math.sqrt(3))/6;let Lh=-1;const ke=new Uint8Array(512);function $x(s){if(s===Lh)return;Lh=s;let t=(s>>>0)+1;function e(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}for(let n=0;n<256;n++)ke[n]=n;for(let n=255;n>0;n--){const i=Math.floor(e()*(n+1))&255,r=ke[n];ke[n]=ke[i],ke[i]=r}for(let n=0;n<256;n++)ke[256+n]=ke[n]}function vo(s,t){const e=(s+t)*Kx,n=Math.floor(s+e),i=Math.floor(t+e),r=(n+i)*Ds,a=s-(n-r),o=t-(i-r),c=a>o?1:0,l=a>o?0:1,h=a-c+Ds,d=o-l+Ds,u=a-1+2*Ds,p=o-1+2*Ds,g=n&255,_=i&255,m=ke[g+ke[_]]%8,f=ke[g+c+ke[_+l]]%8,S=ke[g+1+ke[_+1]]%8;let x=0,w=.5-a*a-o*o;return w>0&&(w*=w,x+=w*w*(ji[m][0]*a+ji[m][1]*o)),w=.5-h*h-d*d,w>0&&(w*=w,x+=w*w*(ji[f][0]*h+ji[f][1]*d)),w=.5-u*u-p*p,w>0&&(w*=w,x+=w*w*(ji[S][0]*u+ji[S][1]*p)),70*x}function oa(s,t,e){$x(e);const n=vo(s*.04,t*.04)*4+vo(s*.09,t*.09)*2+vo(s*.2,t*.2)*.8,i=Math.sqrt(s*s+t*t),r=i<30?0:Math.min(1,(i-30)/35);return n*r}function Zx(s){const n=new ms(500,500,50,50);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let a=0;a<i.count;a++)i.setY(a,oa(i.getX(a),i.getZ(a),s));i.needsUpdate=!0,n.computeVertexNormals();const r=new jt({color:10516552,flatShading:!0,side:gn});return new Et(n,r)}function jx(s){const t=new Un,e=oa(Le,De,s),n=new jt({color:8952234,flatShading:!0}),i=new jt({color:4478310,flatShading:!0}),r=new Ge({color:4500223}),a=new jt({color:2236979,flatShading:!0}),o=new Ge({color:16737792}),c=new jt({color:3359829,flatShading:!0}),l=new Ge({color:16763904}),h=new ge(2.2,1.4,8),d=new Et(h,n);d.position.set(Le,e+1.5,De),t.add(d);const u=new ge(5,.3,3.5),p=new Et(u,i);p.position.set(Le-3.6,e+1.25,De+.5),t.add(p);const g=new Et(u,i);g.position.set(Le+3.6,e+1.25,De+.5),t.add(g);const _=new ds(1.1,2.8,8),m=new Et(_,n);m.rotation.x=Math.PI/2,m.position.set(Le,e+1.5,De+5.4),t.add(m);const f=new vn(.75,8,6,0,Math.PI*2,0,Math.PI/2),S=new Et(f,r);S.position.set(Le,e+2.2,De+2.2),t.add(S);const x=new Ei(.45,.6,2.2,8);for(const R of[-.75,.75]){const O=new Et(x,a);O.rotation.x=Math.PI/2,O.position.set(Le+R,e+1.3,De-4.1),t.add(O);const F=new ko(.44,8),H=new Et(F,o);H.rotation.x=-Math.PI/2,H.position.set(Le+R,e+1.3,De-5.3),t.add(H)}const w=new Ei(.1,.15,1,6);for(const[R,O]of[[-.8,2.5],[.8,2.5],[-.8,-2.5],[.8,-2.5]]){const F=new Et(w,c);F.position.set(Le+R,e+.8,De+O),t.add(F)}const I=new wi(Uu*.85,.25,6,48),A=new Et(I,l);A.rotation.x=Math.PI/2,A.position.set(Le,e+.1,De),t.add(A);const T=new ds(1.2,4,6),L=new Et(T,new Ge({color:16729088}));L.rotation.x=Math.PI/2,L.position.set(Le,e+.3,De/2),t.add(L);const y=new Os(4491519,15,100);y.position.set(Le,e+6,De),t.add(y);const v=new Os(16733440,8,30);return v.position.set(Le,e+1.3,De-5),t.add(v),{marker:d,group:t}}function Qx(s){const t=new pu,e=new At(13928522);t.background=e,t.fog=new ea(e,180,460);const n=new vu(7377088,1.8);t.add(n);const i=new xu(16769152,5);i.position.set(3,5,2),t.add(i),t.add(Zx(s));const{marker:r,group:a}=jx(s);return t.add(a),t.add(qx(s,oa)),{scene:t,shipMarker:r}}class tv{constructor(t){ft(this,"seed");ft(this,"keys",{});ft(this,"_eLatch",!1);ft(this,"_onKeyDown");ft(this,"_onKeyUp");this.seed=t,this._onKeyDown=e=>{const n=e.key.toLowerCase();this.keys[n]=!0,n==="e"&&(this._eLatch=!0)},this._onKeyUp=e=>{this.keys[e.key.toLowerCase()]=!1}}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.keys={},this._eLatch=!1}update(t,e,n){const i=Math.min(t,.1),r=Jx,a=new Ai().setFromEuler(new Ze(0,n.y,0,"YXZ")),o=new D(0,0,-1).applyQuaternion(a),c=new D(1,0,0).applyQuaternion(a);this.keys.w&&e.addScaledVector(o,r*i),this.keys.s&&e.addScaledVector(o,-r*i),this.keys.a&&e.addScaledVector(c,-r*i),this.keys.d&&e.addScaledVector(c,r*i);const l=oa(e.x,e.z,this.seed);e.y=l+Iu;const h=e.x-Le,d=e.z-De,u=Math.sqrt(h*h+d*d)<=Uu,p=this._eLatch;return this._eLatch=!1,{nearShip:u,launchRequested:u&&p}}}const ev=15,Dh=.5,Ih=.5,Mo=3,Nr=.5,nv=2,Or=["Cygnus Expanse","Orion Reach","Perseus Arm","Sagittarius Deep","Vela Corridor","Hydra Void","Centaurus Drift","Aquila Passage","Lyra Basin","Scorpius Rift","Taurus Cloud","Gemini Cluster","Andromeda Fringe","Cassiopeia Shoal","Eridanus Expanse"];function iv(s){const t=((s-1)%Or.length+Or.length)%Or.length;return`Sector ${s} — ${Or[t]}`}function sv(s,t){return s.distanceTo(t.position)<=ev}class rv{constructor(t=1){ft(this,"state","idle");ft(this,"flashAlpha",0);ft(this,"nameAlpha",0);ft(this,"sectorId");ft(this,"timer",0);ft(this,"cooldownTimer",0);this.sectorId=t}canWarp(){return this.state==="idle"&&this.cooldownTimer<=0}beginWarp(){this.canWarp()&&(this.state="warp-out",this.timer=0,this.flashAlpha=0,this.nameAlpha=0)}reset(t=1){this.sectorId=t,this.state="idle",this.timer=0,this.cooldownTimer=0,this.flashAlpha=0,this.nameAlpha=0}update(t){let e=!1;switch(this.state){case"warp-out":this.timer+=t,this.flashAlpha=Math.min(1,this.timer/Dh),this.timer>=Dh&&(e=!0,this.sectorId++,this.state="warp-in",this.timer=0,this.flashAlpha=1);break;case"warp-in":this.timer+=t,this.flashAlpha=Math.max(0,1-this.timer/Ih),this.timer>=Ih&&(this.state="showing-name",this.timer=0,this.flashAlpha=0,this.nameAlpha=0);break;case"showing-name":{this.timer+=t;const n=this.timer;n<Nr?this.nameAlpha=n/Nr:n<Mo-Nr?this.nameAlpha=1:n<Mo?this.nameAlpha=(Mo-n)/Nr:(this.nameAlpha=0,this.state="idle",this.timer=0,this.cooldownTimer=nv);break}case"idle":this.cooldownTimer>0&&(this.cooldownTimer=Math.max(0,this.cooldownTimer-t));break}return{warpNow:e}}}const Nu="spacegame_save_v1";function Ou(s,t=localStorage){t.setItem(Nu,JSON.stringify(s))}function av(s=localStorage){const t=s.getItem(Nu);if(t===null)return null;try{const e=JSON.parse(t);return typeof e.credits!="number"||typeof e.sectorId!="number"||typeof e.health!="number"||typeof e.shield!="number"||typeof e.shieldUpgrade!="number"||typeof e.hullUpgrade!="number"||typeof e.engineThrustBonus!="number"||typeof e.engineSpeedBonus!="number"||!Array.isArray(e.unlockedWeapons)||typeof e.laserAmmo!="number"||typeof e.chaingunAmmo!="number"||typeof e.missileAmmo!="number"?null:e}catch{return null}}const ov=5e3,cv=5e3,lv=300,Zo=100,jo=100,Fu=30,Bu=120,Uh=4,Nh=.15,hv=20,ie=new pu;ie.background=new At(5);ie.fog=new ea(5,lv,cv);const uv=new vu(4478327,2.5);ie.add(uv);const zu=new xu(16772829,2.5);zu.position.set(5,8,-3);ie.add(zu);const ne=new Ue(75,window.innerWidth/window.innerHeight,.1,ov),Hu=new Os(16777215,1.2,3);Hu.position.set(0,.3,-.6);ne.add(Hu);const se=E0();ne.add(se.group);ie.add(ne);const en=new Ue(75,window.innerWidth/window.innerHeight,.1,2e3);Nx();const Vu=2e3,Br=new Float32Array(Vu*3);for(let s=0;s<Vu;s++){const t=Math.random()*Math.PI*2,e=Math.acos(2*Math.random()-1),n=800+Math.random()*200;Br[s*3]=n*Math.sin(e)*Math.cos(t),Br[s*3+1]=n*Math.sin(e)*Math.sin(t),Br[s*3+2]=n*Math.cos(e)}const ku=new we;ku.setAttribute("position",new $e(Br,3));ie.add(new _0(ku,new gu({color:16777215,size:1.5})));const si=new f0({antialias:!0});si.setSize(window.innerWidth,window.innerHeight);si.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(si.domElement);const ca=document.createElement("div");Object.assign(ca.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"black",opacity:"0",pointerEvents:"none",zIndex:"100",transition:"none"});document.body.appendChild(ca);const nn=document.createElement("div");Object.assign(nn.style,{position:"fixed",bottom:"10%",width:"100%",textAlign:"center",color:"#ffdd88",fontFamily:"monospace",fontSize:"18px",pointerEvents:"none",zIndex:"50",opacity:"0",textShadow:"0 0 8px #ff8800"});nn.textContent="▲ Walk to your ship ahead to launch ▲";document.body.appendChild(nn);const yi=document.createElement("div");Object.assign(yi.style,{position:"fixed",top:"20%",width:"100%",textAlign:"center",color:"#00ccff",fontFamily:"monospace",fontSize:"16px",pointerEvents:"none",zIndex:"50",opacity:"0",textShadow:"0 0 8px #0088cc",letterSpacing:"2px"});yi.textContent="⬡  SUPPLY DEPOT nearby";document.body.appendChild(yi);const la=document.createElement("div");Object.assign(la.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,200,255,0.15)",opacity:"0",pointerEvents:"none",zIndex:"90",transition:"none"});document.body.appendChild(la);const ha=document.createElement("div");Object.assign(ha.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(80,140,255,0.9) 40%, rgba(0,20,80,0.95) 100%)",opacity:"0",pointerEvents:"none",zIndex:"200",transition:"none"});document.body.appendChild(ha);const fs=document.createElement("div");Object.assign(fs.style,{position:"fixed",top:"30%",width:"100%",textAlign:"center",color:"#88ccff",fontFamily:"monospace",fontSize:"28px",letterSpacing:"4px",textTransform:"uppercase",pointerEvents:"none",zIndex:"150",opacity:"0",textShadow:"0 0 20px #4488ff, 0 0 40px #2244ff"});document.body.appendChild(fs);const Hs=document.createElement("div");Object.assign(Hs.style,{position:"fixed",top:"12px",right:"16px",color:"#00ffcc",fontFamily:"monospace",fontSize:"16px",pointerEvents:"none",zIndex:"50",textShadow:"0 0 8px #00cc99",letterSpacing:"1px"});Hs.textContent="⬡ 0 CR";document.body.appendChild(Hs);const Yt=new Uo,me=new Ze(0,0,0,"YXZ"),Ke=new P0;Ke.attach();const Dt=new nx(Zo,jo),ei=new Sx(0),on=new X0(ie,Fu),ni=new K0(ie,Bu),an=new ex(ie,Eu);let Mn="laser",rs=!1,qt=qo(ie,Math.floor(Math.random()*4294967295)),es=new $o(ie,qt.enemies),jn=!1;const Yn=new Gx;let Nn="space",Us=null,fn=null,Qi=null,Ln=null,mi=0,xi=!1;const Je=new Yx(()=>{xi=!0},s=>{const t=Xx(s,ei,Dt);return t.success&&(Yt.playStorePurchase(),Gu(),se.setHealth(Dt.health/Dt.maxHealth),se.setShield(Dt.shield/Dt.maxShield),Ke.thrustBonus=Dt.thrustBonus,Ke.speedBonus=Dt.speedBonus,s.category==="ammo"&&s.ammoAmount!==void 0&&(s.ammoType==="laser"?on.addAmmo(s.ammoAmount):s.ammoType==="chaingun"?ni.addAmmo(s.ammoAmount):s.ammoType==="missile"&&an.addAmmo(s.ammoAmount),Ns())),t}),pn=new rv(1),Ve=av();Ve!==null&&(ei.earn(Ve.credits),Dt.maxHealth=Ve.hullUpgrade+Zo,Dt.maxShield=Ve.shieldUpgrade+jo,Dt.health=Math.min(Ve.health,Dt.maxHealth),Dt.shield=Math.min(Ve.shield,Dt.maxShield),Dt.thrustBonus=Ve.engineThrustBonus,Dt.speedBonus=Ve.engineSpeedBonus,Ve.unlockedWeapons.forEach(s=>Dt.unlockedWeapons.add(s)),on.reset(Ve.laserAmmo),ni.reset(Ve.chaingunAmmo),an.reset(Ve.missileAmmo),Ke.thrustBonus=Dt.thrustBonus,Ke.speedBonus=Dt.speedBonus,pn.reset(Ve.sectorId));se.setHealth(Dt.health/Dt.maxHealth);se.setShield(Dt.shield/Dt.maxShield);se.setAmmo(on.ammo,on.maxAmmo);se.setActiveWeapon("laser");se.setCredits(ei.balance);Hs.textContent=`⬡ ${ei.balance} CR`;function Gu(){se.setCredits(ei.balance),Hs.textContent=`⬡ ${ei.balance} CR`}function Ns(){Mn==="laser"?se.setAmmo(on.ammo,on.maxAmmo):Mn==="chaingun"?se.setAmmo(ni.ammo,ni.maxAmmo):se.setAmmo(an.ammo,an.maxAmmo)}function Wu(){return{credits:ei.balance,sectorId:pn.sectorId,health:Dt.health,shield:Dt.shield,shieldUpgrade:Dt.maxShield-jo,hullUpgrade:Dt.maxHealth-Zo,engineThrustBonus:Dt.thrustBonus,engineSpeedBonus:Dt.speedBonus,unlockedWeapons:[...Dt.unlockedWeapons],laserAmmo:on.ammo,chaingunAmmo:ni.ammo,missileAmmo:an.ammo}}function dv(s){const t=s.userData.creditValue??0;ei.earn(t),Gu()}function Xu(s){dv(s),ie.remove(s),qt.enemies=qt.enemies.filter(t=>t!==s)}function fv(){Nn==="surface"&&(fn&&(fn.detach(),fn=null),Us=null,Ke.attach(),Nn="space"),Je.hide(),xi=!1,yi.style.opacity="0",qt.asteroids.forEach(s=>ie.remove(s)),ie.remove(qt.blackHole),qt.enemies.forEach(s=>ie.remove(s)),qt.planets.forEach(s=>ie.remove(s)),es.reset(),qt=qo(ie,Math.floor(Math.random()*4294967295)),es=new $o(ie,qt.enemies),Dt.reset(),se.setHealth(Dt.health/Dt.maxHealth),se.setShield(Dt.shield/Dt.maxShield),on.reset(Fu),ni.reset(Bu),an.reset(Eu),Yt.stopChaingunChatter(),Yt.resetLowHealthWarning(),Mn="laser",rs=!1,Ns(),se.setActiveWeapon("laser"),ne.position.set(0,0,0),me.set(0,0,0),Ke.reset(),ca.style.opacity="0",nn.style.opacity="0",nn.textContent="▲ Walk to your ship ahead to launch ▲",la.style.opacity="0",mi=0,Ln=null,pn.reset(1),ha.style.opacity="0",fs.style.opacity="0",fs.textContent="",jn=!1,qu.hide(),si.domElement.requestPointerLock()}const qu=Ux(fv);w0(si.domElement,(s,t)=>{if(jn)return;const e=Yn.state;if(e==="landing-fadeout"||e==="surface-fadein")return;const n=.002;me.y-=s*n,me.x-=t*n,me.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,me.x)),Nn==="surface"&&(me.z=0)});document.addEventListener("mousedown",()=>Yt.resume(),{once:!0});document.addEventListener("keydown",()=>Yt.resume(),{once:!0});document.addEventListener("keydown",s=>{jn||Nn==="space"&&(s.key==="1"?(Mn="laser",Yt.stopChaingunChatter(),Ns(),se.setActiveWeapon("laser"),Yt.playUIClick()):s.key==="2"?(Mn="chaingun",Ns(),se.setActiveWeapon("chaingun"),Yt.playUIClick()):s.key==="3"&&(Mn="missile",Yt.stopChaingunChatter(),Ns(),se.setActiveWeapon("missile"),Yt.playUIClick()))});document.addEventListener("keydown",s=>{s.key==="Escape"&&Je.isOpen&&(Je.dismiss(),Yt.playUIClick())});document.addEventListener("keydown",s=>{s.key==="F5"&&!jn&&(s.preventDefault(),Ou(Wu()))});document.addEventListener("mousedown",s=>{if(document.pointerLockElement===si.domElement&&s.button===0&&!jn&&Nn==="space"){if(rs=!0,Mn==="laser"){const t=[...qt.asteroids,...qt.enemies],e=on.fire(ne.position,ne.quaternion,t);if(e.fired&&(Yt.playLaserZap(),se.setAmmo(e.ammoRemaining,on.maxAmmo),e.hit&&e.hitObject)){const n=qt.enemies.includes(e.hitObject);e.hitObject.userData.health<=0?n?(Yt.playEnemyDestroy(),Xu(e.hitObject)):(Yt.playAsteroidDestroy(),qt.asteroids=Do(ie,e.hitObject,qt.asteroids)):n?Yt.playEnemyHit():Yt.playAsteroidHit()}}else if(Mn==="missile"){const t=an.fire(ne.position,ne.quaternion);t.fired&&(Yt.playMissileWhoosh(),se.setAmmo(t.ammoRemaining,an.maxAmmo))}}});document.addEventListener("mouseup",s=>{s.button===0&&(rs=!1)});window.addEventListener("resize",()=>{const s=window.innerWidth/window.innerHeight;ne.aspect=s,ne.updateProjectionMatrix(),en.aspect=s,en.updateProjectionMatrix(),si.setSize(window.innerWidth,window.innerHeight)});let Oh=performance.now();function Yu(){var r;requestAnimationFrame(Yu);const s=performance.now(),t=Math.min((s-Oh)/1e3,.1);Oh=s,mi>0&&(mi=Math.max(0,mi-t),la.style.opacity=String(mi/Uh*.4));const{switchToSurface:e,switchToSpace:n,onSurface:i}=Yn.update(t);if(ca.style.opacity=String(Yn.fadeAlpha),i&&(me.set(Nh,0,0),en.rotation.copy(me)),e){const a=Ln?Ln.position:Qi??new D,o=Math.abs(Math.floor(a.x*100+a.z*100))%16777215||42;Us=Qx(o),fn=new tv(o),fn.attach(),Ke.detach(),en.position.set(0,Iu,0),me.set(Nh,0,0),en.rotation.copy(me),en.updateMatrixWorld(!0),Nn="surface",nn.textContent="▲ Walk to your ship ahead to launch ▲",nn.style.opacity="1",Je.hide(),xi=!1,yi.style.opacity="0"}if(n){if(fn&&(fn.detach(),fn=null),Us=null,Ke.attach(),Je.hide(),xi=!1,yi.style.opacity="0",Ln&&Qi){const o=((r=Ln.geometry.parameters)==null?void 0:r.radius)??20,c=Qi.clone().sub(Ln.position).normalize(),l=o+Lu+40;ne.position.copy(Ln.position).addScaledVector(c,l)}else Qi&&ne.position.copy(Qi);me.set(0,0,0),Ke.reset(),Nn="space",nn.style.opacity="0",Ln=null,mi=Uh}if(Nn==="space"){if(ne.rotation.copy(me),!jn&&Yn.state==="space"){const o=Yn.checkProximity(ne.position,qt.planets);if(o)Qi=ne.position.clone(),Ln=o,Yn.beginLanding(qt),Yt.stopChaingunChatter(),rs=!1;else{Ke.update(t,me,ne.position),ne.rotation.copy(me),on.update();const c=rs&&Mn==="chaingun",l=ni.update(t,c,ne.position,ne.quaternion,qt.asteroids);c&&l.some(u=>u.fired)?Yt.startChaingunChatter():c||Yt.stopChaingunChatter();for(const u of l)u.fired&&(se.setAmmo(u.ammoRemaining,ni.maxAmmo),u.hit&&u.hitObject&&(u.hitObject.userData.health<=0?(Yt.playAsteroidDestroy(),qt.asteroids=Do(ie,u.hitObject,qt.asteroids)):Yt.playAsteroidHit()));const h=[...qt.asteroids,...qt.enemies],d=an.update(t,h);for(const u of d){Yt.playMissileExplosion();const p=qt.enemies.includes(u.hitObject);u.hitObject.userData.health<=0?p?(Yt.playEnemyDestroy(),Xu(u.hitObject)):(Yt.playAsteroidDestroy(),qt.asteroids=Do(ie,u.hitObject,qt.asteroids)):p?Yt.playEnemyHit():Yt.playAsteroidHit()}if(Mn==="missile"&&d.length>0&&se.setAmmo(an.ammo,an.maxAmmo),es.update(t,ne.position),mi<=0&&es.checkPlayerHit(ne.position)){const{isDead:u,shieldDamage:p,hullDamage:g}=Dt.applyDamage(Ex);se.setHealth(Dt.health/Dt.maxHealth),se.setShield(Dt.shield/Dt.maxShield),Yt.checkLowHealth(Dt.health/Dt.maxHealth,t);const _=Bx(p,g,Dt.health/Dt.maxHealth);_&&Yt[_](),u&&(jn=!0,Yt.stopChaingunChatter(),qu.show(),document.exitPointerLock())}pn.canWarp()&&sv(ne.position,qt.blackHole)&&(pn.beginWarp(),Yt.playWarpActivation(),Yt.stopChaingunChatter(),rs=!1)}}if(!jn){const{warpNow:o}=pn.update(t);o&&(qt.asteroids.forEach(c=>ie.remove(c)),ie.remove(qt.blackHole),qt.enemies.forEach(c=>ie.remove(c)),qt.planets.forEach(c=>ie.remove(c)),es.reset(),qt=qo(ie,pn.sectorId),es=new $o(ie,qt.enemies),ne.position.set(0,0,0),me.set(0,0,0),Ke.reset(),fs.textContent=iv(pn.sectorId),Ou(Wu())),ha.style.opacity=String(pn.flashAlpha),fs.style.opacity=String(pn.nameAlpha)}const a=[...qt.asteroids.map(o=>({position:o.position,type:"asteroid",bearing:0,elevation:0})),...S0(qt.enemies,ne.position,ne.quaternion)];se.updateRadar(ne.position,ne.quaternion,a),se.update(t)}else if(Nn==="surface"&&Us&&fn){me.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,me.x)),en.rotation.copy(me);const a=en.position.x-hn,o=en.position.z-un,c=Math.sqrt(a*a+o*o),l=c<=Du,h=c<=hv;!h&&xi&&(xi=!1),l&&!xi&&!Je.isOpen&&(Je.show(),Yt.playUIClick(),document.exitPointerLock()),!l&&Je.isOpen&&Je.hide(),yi.style.opacity=h&&!Je.isOpen?"1":"0";const{nearShip:d,launchRequested:u}=fn.update(t,en.position,me);Je.isOpen?nn.style.opacity="0":(nn.textContent=d?"[ E ]  Launch":"▲ Walk to your ship to launch ▲",nn.style.opacity="1"),u&&!Je.isOpen&&Yn.state==="on-surface"&&Yn.beginLaunch(qt),si.render(Us.scene,en)}}Yu();
