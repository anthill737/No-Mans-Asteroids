var Ef=Object.defineProperty;var Af=(s,e,t)=>e in s?Ef(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var oe=(s,e,t)=>Af(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pc="165",Tf=0,nl=1,Rf=2,Xh=1,Cf=2,Vn=3,Jn=0,kt=1,Tn=2,pi=0,vs=1,il=2,sl=3,rl=4,Pf=5,Oi=100,Lf=101,If=102,Df=103,Nf=104,Uf=200,Of=201,Ff=202,Bf=203,dc=204,fc=205,zf=206,kf=207,Hf=208,Vf=209,Gf=210,Wf=211,Xf=212,qf=213,Yf=214,Jf=0,$f=1,Kf=2,_o=3,Zf=4,jf=5,Qf=6,ep=7,Lc=0,tp=1,np=2,mi=0,ip=1,sp=2,rp=3,op=4,ap=5,cp=6,lp=7,qh=300,Es=301,As=302,pc=303,mc=304,Po=306,gc=1e3,Bi=1001,_c=1002,Bt=1003,up=1004,mr=1005,pn=1006,ea=1007,zi=1008,_i=1009,hp=1010,dp=1011,xo=1012,Yh=1013,Ts=1014,Gn=1015,Lo=1016,Jh=1017,$h=1018,Rs=1020,fp=35902,pp=1021,mp=1022,Cn=1023,gp=1024,_p=1025,ys=1026,Cs=1027,Kh=1028,Zh=1029,xp=1030,jh=1031,Qh=1033,ta=33776,na=33777,ia=33778,sa=33779,ol=35840,al=35841,cl=35842,ll=35843,ul=36196,hl=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,xl=37813,vl=37814,yl=37815,Sl=37816,Ml=37817,wl=37818,bl=37819,El=37820,Al=37821,ra=36492,Tl=36494,Rl=36495,vp=36283,Cl=36284,Pl=36285,Ll=36286,yp=3200,Sp=3201,ed=0,Mp=1,ui="",En="srgb",Si="srgb-linear",Ic="display-p3",Io="display-p3-linear",vo="linear",ct="srgb",yo="rec709",So="p3",Ji=7680,Il=519,wp=512,bp=513,Ep=514,td=515,Ap=516,Tp=517,Rp=518,Cp=519,Dl=35044,Nl="300 es",Wn=2e3,Mo=2001;class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,xc=180/Math.PI;function or(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ot(s,e,t){return Math.max(e,Math.min(t,s))}function Pp(s,e){return(s%e+e)%e}function aa(s,e,t){return(1-t)*s+t*e}function Us(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let qe=class nd{constructor(e,t,n,i,r,o,c,u,h){nd.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,c,u,h)}set(e,t,n,i,r,o,c,u,h){const p=this.elements;return p[0]=e,p[1]=i,p[2]=c,p[3]=t,p[4]=r,p[5]=u,p[6]=n,p[7]=o,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],p=n[4],a=n[7],l=n[2],d=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],v=i[4],w=i[7],D=i[2],E=i[5],A=i[8];return r[0]=o*_+c*x+u*D,r[3]=o*m+c*v+u*E,r[6]=o*f+c*w+u*A,r[1]=h*_+p*x+a*D,r[4]=h*m+p*v+a*E,r[7]=h*f+p*w+a*A,r[2]=l*_+d*x+g*D,r[5]=l*m+d*v+g*E,r[8]=l*f+d*w+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],c=e[5],u=e[6],h=e[7],p=e[8];return t*o*p-t*c*h-n*r*p+n*c*u+i*r*h-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],c=e[5],u=e[6],h=e[7],p=e[8],a=p*o-c*h,l=c*u-p*r,d=h*r-o*u,g=t*a+n*l+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=a*_,e[1]=(i*h-p*n)*_,e[2]=(c*n-i*o)*_,e[3]=l*_,e[4]=(p*t-i*u)*_,e[5]=(i*r-c*t)*_,e[6]=d*_,e[7]=(n*u-h*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,c){const u=Math.cos(r),h=Math.sin(r);return this.set(n*u,n*h,-n*(u*o+h*c)+o+e,-i*h,i*u,-i*(-h*o+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ca.makeScale(e,t)),this}rotate(e){return this.premultiply(ca.makeRotation(-e)),this}translate(e,t){return this.premultiply(ca.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};const ca=new qe;function id(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Lp(){const s=wo("canvas");return s.style.display="block",s}const Ul={};function sd(s){s in Ul||(Ul[s]=!0,console.warn(s))}function Ip(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ol=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Fl=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gr={[Si]:{transfer:vo,primaries:yo,toReference:s=>s,fromReference:s=>s},[En]:{transfer:ct,primaries:yo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Io]:{transfer:vo,primaries:So,toReference:s=>s.applyMatrix3(Fl),fromReference:s=>s.applyMatrix3(Ol)},[Ic]:{transfer:ct,primaries:So,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Fl),fromReference:s=>s.applyMatrix3(Ol).convertLinearToSRGB()}},Dp=new Set([Si,Io]),it={enabled:!0,_workingColorSpace:Si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Dp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=gr[e].toReference,i=gr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return gr[s].primaries},getTransfer:function(s){return s===ui?vo:gr[s].transfer}};function Ss(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let $i;class Np{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=wo("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ss(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ss(t[n]/255)*255):t[n]=Ss(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Up=0;class rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Up++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,c=i.length;o<c;o++)i[o].isDataTexture?r.push(ua(i[o].image)):r.push(ua(i[o]))}else r=ua(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function ua(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Np.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Op=0;class Ct extends Ls{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=Bi,i=Bi,r=pn,o=zi,c=Cn,u=_i,h=Ct.DEFAULT_ANISOTROPY,p=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=or(),this.name="",this.source=new rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gc:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gc:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=qh;Ct.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,i=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const u=e.elements,h=u[0],p=u[4],a=u[8],l=u[1],d=u[5],g=u[9],_=u[2],m=u[6],f=u[10];if(Math.abs(p-l)<.01&&Math.abs(a-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(p+l)<.1&&Math.abs(a+_)<.1&&Math.abs(g+m)<.1&&Math.abs(h+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(h+1)/2,w=(d+1)/2,D=(f+1)/2,E=(p+l)/4,A=(a+_)/4,P=(g+m)/4;return v>w&&v>D?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=E/n,r=A/n):w>D?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=E/i,r=P/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=A/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(a-_)*(a-_)+(l-p)*(l-p));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(a-_)/x,this.z=(l-p)/x,this.w=Math.acos((h+d+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fp extends Ls{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let c=0;c<o;c++)this.textures[c]=r.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Fp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class od extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bp extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Gi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,c){let u=n[i+0],h=n[i+1],p=n[i+2],a=n[i+3];const l=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=p,e[t+3]=a;return}if(c===1){e[t+0]=l,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(a!==_||u!==l||h!==d||p!==g){let m=1-c;const f=u*l+h*d+p*g+a*_,x=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const D=Math.sqrt(v),E=Math.atan2(D,f*x);m=Math.sin(m*E)/D,c=Math.sin(c*E)/D}const w=c*x;if(u=u*m+l*w,h=h*m+d*w,p=p*m+g*w,a=a*m+_*w,m===1-c){const D=1/Math.sqrt(u*u+h*h+p*p+a*a);u*=D,h*=D,p*=D,a*=D}}e[t]=u,e[t+1]=h,e[t+2]=p,e[t+3]=a}static multiplyQuaternionsFlat(e,t,n,i,r,o){const c=n[i],u=n[i+1],h=n[i+2],p=n[i+3],a=r[o],l=r[o+1],d=r[o+2],g=r[o+3];return e[t]=c*g+p*a+u*d-h*l,e[t+1]=u*g+p*l+h*a-c*d,e[t+2]=h*g+p*d+c*l-u*a,e[t+3]=p*g-c*a-u*l-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,c=Math.cos,u=Math.sin,h=c(n/2),p=c(i/2),a=c(r/2),l=u(n/2),d=u(i/2),g=u(r/2);switch(o){case"XYZ":this._x=l*p*a+h*d*g,this._y=h*d*a-l*p*g,this._z=h*p*g+l*d*a,this._w=h*p*a-l*d*g;break;case"YXZ":this._x=l*p*a+h*d*g,this._y=h*d*a-l*p*g,this._z=h*p*g-l*d*a,this._w=h*p*a+l*d*g;break;case"ZXY":this._x=l*p*a-h*d*g,this._y=h*d*a+l*p*g,this._z=h*p*g+l*d*a,this._w=h*p*a-l*d*g;break;case"ZYX":this._x=l*p*a-h*d*g,this._y=h*d*a+l*p*g,this._z=h*p*g-l*d*a,this._w=h*p*a+l*d*g;break;case"YZX":this._x=l*p*a+h*d*g,this._y=h*d*a+l*p*g,this._z=h*p*g-l*d*a,this._w=h*p*a-l*d*g;break;case"XZY":this._x=l*p*a-h*d*g,this._y=h*d*a-l*p*g,this._z=h*p*g+l*d*a,this._w=h*p*a+l*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],c=t[5],u=t[9],h=t[2],p=t[6],a=t[10],l=n+c+a;if(l>0){const d=.5/Math.sqrt(l+1);this._w=.25/d,this._x=(p-u)*d,this._y=(r-h)*d,this._z=(o-i)*d}else if(n>c&&n>a){const d=2*Math.sqrt(1+n-c-a);this._w=(p-u)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+h)/d}else if(c>a){const d=2*Math.sqrt(1+c-n-a);this._w=(r-h)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(u+p)/d}else{const d=2*Math.sqrt(1+a-n-c);this._w=(o-i)/d,this._x=(r+h)/d,this._y=(u+p)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,c=t._x,u=t._y,h=t._z,p=t._w;return this._x=n*p+o*c+i*h-r*u,this._y=i*p+o*u+r*c-n*h,this._z=r*p+o*h+n*u-i*c,this._w=o*p-n*c-i*u-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let c=o*e._w+n*e._x+i*e._y+r*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const u=1-c*c;if(u<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const h=Math.sqrt(u),p=Math.atan2(h,c),a=Math.sin((1-t)*p)/h,l=Math.sin(t*p)/h;return this._w=o*a+this._w*l,this._x=n*a+this._x*l,this._y=i*a+this._y*l,this._z=r*a+this._z*l,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class ad{constructor(e=0,t=0,n=0){ad.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,c=e.z,u=e.w,h=2*(o*i-c*n),p=2*(c*t-r*i),a=2*(r*n-o*t);return this.x=t+u*h+o*a-c*p,this.y=n+u*p+c*h-r*a,this.z=i+u*a+r*p-o*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-r*c,this.y=r*o-n*u,this.z=n*c-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const ha=new I,Bl=new Gi;class Wi{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=r.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_r.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(e.matrixWorld),this.union(_r)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),xr.subVectors(this.max,Os),Ki.subVectors(e.a,Os),Zi.subVectors(e.b,Os),ji.subVectors(e.c,Os),Zn.subVectors(Zi,Ki),jn.subVectors(ji,Zi),Ei.subVectors(Ki,ji);let t=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-Ei.z,Ei.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,Ei.z,0,-Ei.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-Ei.y,Ei.x,0];return!da(t,Ki,Zi,ji,xr)||(t=[1,0,0,0,1,0,0,0,1],!da(t,Ki,Zi,ji,xr))?!1:(vr.crossVectors(Zn,jn),t=[vr.x,vr.y,vr.z],da(t,Ki,Zi,ji,xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,_r=new Wi,Ki=new I,Zi=new I,ji=new I,Zn=new I,jn=new I,Ei=new I,Os=new I,xr=new I,vr=new I,Ai=new I;function da(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ai.fromArray(s,r);const c=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),u=e.dot(Ai),h=t.dot(Ai),p=n.dot(Ai);if(Math.max(-Math.max(u,h,p),Math.min(u,h,p))>c)return!1}return!0}const zp=new Wi,Fs=new I,fa=new I;class Xi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):zp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(fa)),this.expandByPoint(Fs.copy(e.center).sub(fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new I,pa=new I,yr=new I,Qn=new I,ma=new I,Sr=new I,ga=new I;let Do=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){pa.copy(e).add(t).multiplyScalar(.5),yr.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(pa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(yr),c=Qn.dot(this.direction),u=-Qn.dot(yr),h=Qn.lengthSq(),p=Math.abs(1-o*o);let a,l,d,g;if(p>0)if(a=o*u-c,l=o*c-u,g=r*p,a>=0)if(l>=-g)if(l<=g){const _=1/p;a*=_,l*=_,d=a*(a+o*l+2*c)+l*(o*a+l+2*u)+h}else l=r,a=Math.max(0,-(o*l+c)),d=-a*a+l*(l+2*u)+h;else l=-r,a=Math.max(0,-(o*l+c)),d=-a*a+l*(l+2*u)+h;else l<=-g?(a=Math.max(0,-(-o*r+c)),l=a>0?-r:Math.min(Math.max(-r,-u),r),d=-a*a+l*(l+2*u)+h):l<=g?(a=0,l=Math.min(Math.max(-r,-u),r),d=l*(l+2*u)+h):(a=Math.max(0,-(o*r+c)),l=a>0?r:Math.min(Math.max(-r,-u),r),d=-a*a+l*(l+2*u)+h);else l=o>0?-r:r,a=Math.max(0,-(o*l+c)),d=-a*a+l*(l+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(pa).addScaledVector(yr,l),d}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),i=Un.dot(Un)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),c=n-o,u=n+o;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,c,u;const h=1/this.direction.x,p=1/this.direction.y,a=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,i=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,i=(e.min.x-l.x)*h),p>=0?(r=(e.min.y-l.y)*p,o=(e.max.y-l.y)*p):(r=(e.max.y-l.y)*p,o=(e.min.y-l.y)*p),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),a>=0?(c=(e.min.z-l.z)*a,u=(e.max.z-l.z)*a):(c=(e.max.z-l.z)*a,u=(e.min.z-l.z)*a),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,i,r){ma.subVectors(t,e),Sr.subVectors(n,e),ga.crossVectors(ma,Sr);let o=this.direction.dot(ga),c;if(o>0){if(i)return null;c=1}else if(o<0)c=-1,o=-o;else return null;Qn.subVectors(this.origin,e);const u=c*this.direction.dot(Sr.crossVectors(Qn,Sr));if(u<0)return null;const h=c*this.direction.dot(ma.cross(Qn));if(h<0||u+h>o)return null;const p=-c*Qn.dot(ga);return p<0?null:this.at(p/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class vc{constructor(e,t,n,i,r,o,c,u,h,p,a,l,d,g,_,m){vc.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,c,u,h,p,a,l,d,g,_,m)}set(e,t,n,i,r,o,c,u,h,p,a,l,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=c,f[13]=u,f[2]=h,f[6]=p,f[10]=a,f[14]=l,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),c=Math.sin(n),u=Math.cos(i),h=Math.sin(i),p=Math.cos(r),a=Math.sin(r);if(e.order==="XYZ"){const l=o*p,d=o*a,g=c*p,_=c*a;t[0]=u*p,t[4]=-u*a,t[8]=h,t[1]=d+g*h,t[5]=l-_*h,t[9]=-c*u,t[2]=_-l*h,t[6]=g+d*h,t[10]=o*u}else if(e.order==="YXZ"){const l=u*p,d=u*a,g=h*p,_=h*a;t[0]=l+_*c,t[4]=g*c-d,t[8]=o*h,t[1]=o*a,t[5]=o*p,t[9]=-c,t[2]=d*c-g,t[6]=_+l*c,t[10]=o*u}else if(e.order==="ZXY"){const l=u*p,d=u*a,g=h*p,_=h*a;t[0]=l-_*c,t[4]=-o*a,t[8]=g+d*c,t[1]=d+g*c,t[5]=o*p,t[9]=_-l*c,t[2]=-o*h,t[6]=c,t[10]=o*u}else if(e.order==="ZYX"){const l=o*p,d=o*a,g=c*p,_=c*a;t[0]=u*p,t[4]=g*h-d,t[8]=l*h+_,t[1]=u*a,t[5]=_*h+l,t[9]=d*h-g,t[2]=-h,t[6]=c*u,t[10]=o*u}else if(e.order==="YZX"){const l=o*u,d=o*h,g=c*u,_=c*h;t[0]=u*p,t[4]=_-l*a,t[8]=g*a+d,t[1]=a,t[5]=o*p,t[9]=-c*p,t[2]=-h*p,t[6]=d*a+g,t[10]=l-_*a}else if(e.order==="XZY"){const l=o*u,d=o*h,g=c*u,_=c*h;t[0]=u*p,t[4]=-a,t[8]=h*p,t[1]=l*a+_,t[5]=o*p,t[9]=d*a-g,t[2]=g*a-d,t[6]=c*p,t[10]=_*a+l}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kp,e,Hp)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),ei.crossVectors(n,Gt),ei.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),ei.crossVectors(n,Gt)),ei.normalize(),Mr.crossVectors(Gt,ei),i[0]=ei.x,i[4]=Mr.x,i[8]=Gt.x,i[1]=ei.y,i[5]=Mr.y,i[9]=Gt.y,i[2]=ei.z,i[6]=Mr.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],p=n[1],a=n[5],l=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],w=n[11],D=n[15],E=i[0],A=i[4],P=i[8],y=i[12],S=i[1],R=i[5],N=i[9],U=i[13],H=i[2],X=i[6],q=i[10],$=i[14],V=i[3],de=i[7],me=i[11],fe=i[15];return r[0]=o*E+c*S+u*H+h*V,r[4]=o*A+c*R+u*X+h*de,r[8]=o*P+c*N+u*q+h*me,r[12]=o*y+c*U+u*$+h*fe,r[1]=p*E+a*S+l*H+d*V,r[5]=p*A+a*R+l*X+d*de,r[9]=p*P+a*N+l*q+d*me,r[13]=p*y+a*U+l*$+d*fe,r[2]=g*E+_*S+m*H+f*V,r[6]=g*A+_*R+m*X+f*de,r[10]=g*P+_*N+m*q+f*me,r[14]=g*y+_*U+m*$+f*fe,r[3]=x*E+v*S+w*H+D*V,r[7]=x*A+v*R+w*X+D*de,r[11]=x*P+v*N+w*q+D*me,r[15]=x*y+v*U+w*$+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],c=e[5],u=e[9],h=e[13],p=e[2],a=e[6],l=e[10],d=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*u*a-i*h*a-r*c*l+n*h*l+i*c*d-n*u*d)+_*(+t*u*d-t*h*l+r*o*l-i*o*d+i*h*p-r*u*p)+m*(+t*h*a-t*c*d-r*o*a+n*o*d+r*c*p-n*h*p)+f*(-i*c*p-t*u*a+t*c*l+i*o*a-n*o*l+n*u*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],c=e[5],u=e[6],h=e[7],p=e[8],a=e[9],l=e[10],d=e[11],g=e[12],_=e[13],m=e[14],f=e[15],x=a*m*h-_*l*h+_*u*d-c*m*d-a*u*f+c*l*f,v=g*l*h-p*m*h-g*u*d+o*m*d+p*u*f-o*l*f,w=p*_*h-g*a*h+g*c*d-o*_*d-p*c*f+o*a*f,D=g*a*u-p*_*u-g*c*l+o*_*l+p*c*m-o*a*m,E=t*x+n*v+i*w+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=x*A,e[1]=(_*l*r-a*m*r-_*i*d+n*m*d+a*i*f-n*l*f)*A,e[2]=(c*m*r-_*u*r+_*i*h-n*m*h-c*i*f+n*u*f)*A,e[3]=(a*u*r-c*l*r-a*i*h+n*l*h+c*i*d-n*u*d)*A,e[4]=v*A,e[5]=(p*m*r-g*l*r+g*i*d-t*m*d-p*i*f+t*l*f)*A,e[6]=(g*u*r-o*m*r-g*i*h+t*m*h+o*i*f-t*u*f)*A,e[7]=(o*l*r-p*u*r+p*i*h-t*l*h-o*i*d+t*u*d)*A,e[8]=w*A,e[9]=(g*a*r-p*_*r-g*n*d+t*_*d+p*n*f-t*a*f)*A,e[10]=(o*_*r-g*c*r+g*n*h-t*_*h-o*n*f+t*c*f)*A,e[11]=(p*c*r-o*a*r-p*n*h+t*a*h+o*n*d-t*c*d)*A,e[12]=D*A,e[13]=(p*_*i-g*a*i+g*n*l-t*_*l-p*n*m+t*a*m)*A,e[14]=(g*c*i-o*_*i-g*n*u+t*_*u+o*n*m-t*c*m)*A,e[15]=(o*a*i-p*c*i+p*n*u-t*a*u-o*n*l+t*c*l)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,c=e.y,u=e.z,h=r*o,p=r*c;return this.set(h*o+n,h*c-i*u,h*u+i*c,0,h*c+i*u,p*c+n,p*u-i*o,0,h*u-i*c,p*u+i*o,r*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,c=t._z,u=t._w,h=r+r,p=o+o,a=c+c,l=r*h,d=r*p,g=r*a,_=o*p,m=o*a,f=c*a,x=u*h,v=u*p,w=u*a,D=n.x,E=n.y,A=n.z;return i[0]=(1-(_+f))*D,i[1]=(d+w)*D,i[2]=(g-v)*D,i[3]=0,i[4]=(d-w)*E,i[5]=(1-(l+f))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(g+v)*A,i[9]=(m-x)*A,i[10]=(1-(l+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Qi.set(i[0],i[1],i[2]).length();const o=Qi.set(i[4],i[5],i[6]).length(),c=Qi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],un.copy(this);const h=1/r,p=1/o,a=1/c;return un.elements[0]*=h,un.elements[1]*=h,un.elements[2]*=h,un.elements[4]*=p,un.elements[5]*=p,un.elements[6]*=p,un.elements[8]*=a,un.elements[9]*=a,un.elements[10]*=a,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=c,this}makePerspective(e,t,n,i,r,o,c=Wn){const u=this.elements,h=2*r/(t-e),p=2*r/(n-i),a=(t+e)/(t-e),l=(n+i)/(n-i);let d,g;if(c===Wn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(c===Mo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=a,u[12]=0,u[1]=0,u[5]=p,u[9]=l,u[13]=0,u[2]=0,u[6]=0,u[10]=d,u[14]=g,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,i,r,o,c=Wn){const u=this.elements,h=1/(t-e),p=1/(n-i),a=1/(o-r),l=(t+e)*h,d=(n+i)*p;let g,_;if(c===Wn)g=(o+r)*a,_=-2*a;else if(c===Mo)g=r*a,_=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*h,u[4]=0,u[8]=0,u[12]=-l,u[1]=0,u[5]=2*p,u[9]=0,u[13]=-d,u[2]=0,u[6]=0,u[10]=_,u[14]=-g,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};const Qi=new I,un=new at,kp=new I(0,0,0),Hp=new I(1,1,1),ei=new I,Mr=new I,Gt=new I,zl=new at,kl=new Gi;class an{constructor(e=0,t=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],c=i[8],u=i[1],h=i[5],p=i[9],a=i[2],l=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,d),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-a,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-a,d),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,r));break;case"ZYX":this._y=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,d),this._z=Math.atan2(u,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-a,r)):(this._x=0,this._y=Math.atan2(c,d));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(c,r)):(this._x=Math.atan2(-p,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kl.setFromEuler(this),this.setFromQuaternion(kl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vp=0;const Hl=new I,es=new Gi,On=new at,wr=new I,Bs=new I,Gp=new I,Wp=new Gi,Vl=new I(1,0,0),Gl=new I(0,1,0),Wl=new I(0,0,1),Xl={type:"added"},Xp={type:"removed"},ts={type:"childadded",child:null},_a={type:"childremoved",child:null};class wt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new I,t=new an,n=new Gi,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new at},normalMatrix:{value:new qe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Gl,e)}rotateZ(e){return this.rotateOnAxis(Wl,e)}translateOnAxis(e,t){return Hl.copy(e).applyQuaternion(this.quaternion),this.position.add(Hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Gl,e)}translateZ(e){return this.translateOnAxis(Wl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wr.copy(e):wr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Bs,wr,this.up):On.lookAt(wr,Bs,this.up),this.quaternion.setFromRotationMatrix(On),i&&(On.extractRotation(i.matrixWorld),es.setFromRotationMatrix(On),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xl),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xp),_a.child=e,this.dispatchEvent(_a),_a.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xl),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,Gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const c=i[r];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,p=u.length;h<p;h++){const a=u[h];r(e.shapes,a)}else r(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(r(e.materials,this.material[u]));i.material=c}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let c=0;c<this.children.length;c++)i.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];i.animations.push(r(e.animations,u))}}if(t){const c=o(e.geometries),u=o(e.materials),h=o(e.textures),p=o(e.images),a=o(e.shapes),l=o(e.skeletons),d=o(e.animations),g=o(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),p.length>0&&(n.images=p),a.length>0&&(n.shapes=a),l.length>0&&(n.skeletons=l),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(c){const u=[];for(const h in c){const p=c[h];delete p.metadata,u.push(p)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}wt.DEFAULT_UP=new I(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,Fn=new I,xa=new I,Bn=new I,ns=new I,is=new I,ql=new I,va=new I,ya=new I,Sa=new I;class Rn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){hn.subVectors(i,t),Fn.subVectors(n,t),xa.subVectors(e,t);const o=hn.dot(hn),c=hn.dot(Fn),u=hn.dot(xa),h=Fn.dot(Fn),p=Fn.dot(xa),a=o*h-c*c;if(a===0)return r.set(0,0,0),null;const l=1/a,d=(h*u-c*p)*l,g=(o*p-c*u)*l;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,i,r,o,c,u){return this.getBarycoord(e,t,n,i,Bn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(r,Bn.x),u.addScaledVector(o,Bn.y),u.addScaledVector(c,Bn.z),u)}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Fn.subVectors(e,t),hn.cross(Fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),hn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Rn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,c;ns.subVectors(i,n),is.subVectors(r,n),va.subVectors(e,n);const u=ns.dot(va),h=is.dot(va);if(u<=0&&h<=0)return t.copy(n);ya.subVectors(e,i);const p=ns.dot(ya),a=is.dot(ya);if(p>=0&&a<=p)return t.copy(i);const l=u*a-p*h;if(l<=0&&u>=0&&p<=0)return o=u/(u-p),t.copy(n).addScaledVector(ns,o);Sa.subVectors(e,r);const d=ns.dot(Sa),g=is.dot(Sa);if(g>=0&&d<=g)return t.copy(r);const _=d*h-u*g;if(_<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(n).addScaledVector(is,c);const m=p*g-d*a;if(m<=0&&a-p>=0&&d-g>=0)return ql.subVectors(r,i),c=(a-p)/(a-p+(d-g)),t.copy(i).addScaledVector(ql,c);const f=1/(m+_+l);return o=_*f,c=l*f,t.copy(n).addScaledVector(ns,o).addScaledVector(is,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},br={h:0,s:0,l:0};function Ma(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Me{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=it.workingColorSpace){if(e=Pp(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ma(o,r,e+1/3),this.g=Ma(o,r,e),this.b=Ma(o,r,e-1/3)}return it.toWorkingColorSpace(this,i),this}setStyle(e,t=En){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],c=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return it.fromWorkingColorSpace(Tt.copy(this),e),Math.round(Ot(Tt.r*255,0,255))*65536+Math.round(Ot(Tt.g*255,0,255))*256+Math.round(Ot(Tt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,i=Tt.g,r=Tt.b,o=Math.max(n,i,r),c=Math.min(n,i,r);let u,h;const p=(c+o)/2;if(c===o)u=0,h=0;else{const a=o-c;switch(h=p<=.5?a/(o+c):a/(2-o-c),o){case n:u=(i-r)/a+(i<r?6:0);break;case i:u=(r-n)/a+2;break;case r:u=(n-i)/a+4;break}u/=6}return e.h=u,e.s=h,e.l=p,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=En){it.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,i=Tt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(br);const n=aa(ti.h,br.h,t),i=aa(ti.s,br.s,t),r=aa(ti.l,br.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Me;Me.NAMES=cd;let qp=0;class qi extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=or(),this.name="",this.type="Material",this.blending=vs,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Il,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Il&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const c in r){const u=r[c];delete u.metadata,o.push(u)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Jt extends qi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gt=new I,Er=new We;class $t{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return sd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix3(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyMatrix4(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.applyNormalMatrix(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gt.fromBufferAttribute(this,t),gt.transformDirection(e),this.setXYZ(t,gt.x,gt.y,gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Us(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Us(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Us(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Us(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dl&&(e.usage=this.usage),e}}class ld extends $t{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ud extends $t{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class dt extends $t{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yp=0;const jt=new at,wa=new wt,ss=new I,Wt=new Wi,zs=new Wi,Mt=new I;class bt extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(id(e)?ud:ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return wa.lookAt(e),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const c=t[r];zs.setFromBufferAttribute(c),this.morphTargetsRelative?(Mt.addVectors(Wt.min,zs.min),Wt.expandByPoint(Mt),Mt.addVectors(Wt.max,zs.max),Wt.expandByPoint(Mt)):(Wt.expandByPoint(zs.min),Wt.expandByPoint(zs.max))}Wt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Mt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let r=0,o=t.length;r<o;r++){const c=t[r],u=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)Mt.fromBufferAttribute(c,h),u&&(ss.fromBufferAttribute(e,h),Mt.add(ss)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],u=[];for(let P=0;P<n.count;P++)c[P]=new I,u[P]=new I;const h=new I,p=new I,a=new I,l=new We,d=new We,g=new We,_=new I,m=new I;function f(P,y,S){h.fromBufferAttribute(n,P),p.fromBufferAttribute(n,y),a.fromBufferAttribute(n,S),l.fromBufferAttribute(r,P),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),p.sub(h),a.sub(h),d.sub(l),g.sub(l);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(p).multiplyScalar(g.y).addScaledVector(a,-d.y).multiplyScalar(R),m.copy(a).multiplyScalar(d.x).addScaledVector(p,-g.x).multiplyScalar(R),c[P].add(_),c[y].add(_),c[S].add(_),u[P].add(m),u[y].add(m),u[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,y=x.length;P<y;++P){const S=x[P],R=S.start,N=S.count;for(let U=R,H=R+N;U<H;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const v=new I,w=new I,D=new I,E=new I;function A(P){D.fromBufferAttribute(i,P),E.copy(D);const y=c[P];v.copy(y),v.sub(D.multiplyScalar(D.dot(y))).normalize(),w.crossVectors(E,y);const R=w.dot(u[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,y=x.length;P<y;++P){const S=x[P],R=S.start,N=S.count;for(let U=R,H=R+N;U<H;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let l=0,d=n.count;l<d;l++)n.setXYZ(l,0,0,0);const i=new I,r=new I,o=new I,c=new I,u=new I,h=new I,p=new I,a=new I;if(e)for(let l=0,d=e.count;l<d;l+=3){const g=e.getX(l+0),_=e.getX(l+1),m=e.getX(l+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),p.subVectors(o,r),a.subVectors(i,r),p.cross(a),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),h.fromBufferAttribute(n,m),c.add(p),u.add(p),h.add(p),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,d=t.count;l<d;l+=3)i.fromBufferAttribute(t,l+0),r.fromBufferAttribute(t,l+1),o.fromBufferAttribute(t,l+2),p.subVectors(o,r),a.subVectors(i,r),p.cross(a),n.setXYZ(l+0,p.x,p.y,p.z),n.setXYZ(l+1,p.x,p.y,p.z),n.setXYZ(l+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(c,u){const h=c.array,p=c.itemSize,a=c.normalized,l=new h.constructor(u.length*p);let d=0,g=0;for(let _=0,m=u.length;_<m;_++){c.isInterleavedBufferAttribute?d=u[_]*c.data.stride+c.offset:d=u[_]*p;for(let f=0;f<p;f++)l[g++]=h[d++]}return new $t(l,p,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const c in i){const u=i[c],h=e(u,n);t.setAttribute(c,h)}const r=this.morphAttributes;for(const c in r){const u=[],h=r[c];for(let p=0,a=h.length;p<a;p++){const l=h[p],d=e(l,n);u.push(d)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const i={};let r=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],p=[];for(let a=0,l=h.length;a<l;a++){const d=h[a];p.push(d.toJSON(e.data))}p.length>0&&(i[u]=p,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const p=i[h];this.setAttribute(h,p.clone(t))}const r=e.morphAttributes;for(const h in r){const p=[],a=r[h];for(let l=0,d=a.length;l<d;l++)p.push(a[l].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,p=o.length;h<p;h++){const a=o[h];this.addGroup(a.start,a.count,a.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yl=new at,Ti=new Do,Ar=new Xi,Jl=new I,rs=new I,os=new I,as=new I,ba=new I,Tr=new I,Rr=new We,Cr=new We,Pr=new We,$l=new I,Kl=new I,Zl=new I,Lr=new I,Ir=new I;class be extends wt{constructor(e=new bt,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const c=this.morphTargetInfluences;if(r&&c){Tr.set(0,0,0);for(let u=0,h=r.length;u<h;u++){const p=c[u],a=r[u];p!==0&&(ba.fromBufferAttribute(a,e),o?Tr.addScaledVector(ba,p):Tr.addScaledVector(ba.sub(t),p))}t.add(Tr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(Ar.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Ar,Jl)===null||Ti.origin.distanceToSquared(Jl)>(e.far-e.near)**2))&&(Yl.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Yl),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,c=r.index,u=r.attributes.position,h=r.attributes.uv,p=r.attributes.uv1,a=r.attributes.normal,l=r.groups,d=r.drawRange;if(c!==null)if(Array.isArray(o))for(let g=0,_=l.length;g<_;g++){const m=l[g],f=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let w=x,D=v;w<D;w+=3){const E=c.getX(w),A=c.getX(w+1),P=c.getX(w+2);i=Dr(this,f,e,n,h,p,a,E,A,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=c.getX(m),v=c.getX(m+1),w=c.getX(m+2);i=Dr(this,o,e,n,h,p,a,x,v,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(u!==void 0)if(Array.isArray(o))for(let g=0,_=l.length;g<_;g++){const m=l[g],f=o[m.materialIndex],x=Math.max(m.start,d.start),v=Math.min(u.count,Math.min(m.start+m.count,d.start+d.count));for(let w=x,D=v;w<D;w+=3){const E=w,A=w+1,P=w+2;i=Dr(this,f,e,n,h,p,a,E,A,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(u.count,d.start+d.count);for(let m=g,f=_;m<f;m+=3){const x=m,v=m+1,w=m+2;i=Dr(this,o,e,n,h,p,a,x,v,w),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Jp(s,e,t,n,i,r,o,c){let u;if(e.side===kt?u=n.intersectTriangle(o,r,i,!0,c):u=n.intersectTriangle(i,r,o,e.side===Jn,c),u===null)return null;Ir.copy(c),Ir.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(Ir);return h<t.near||h>t.far?null:{distance:h,point:Ir.clone(),object:s}}function Dr(s,e,t,n,i,r,o,c,u,h){s.getVertexPosition(c,rs),s.getVertexPosition(u,os),s.getVertexPosition(h,as);const p=Jp(s,e,t,n,rs,os,as,Lr);if(p){i&&(Rr.fromBufferAttribute(i,c),Cr.fromBufferAttribute(i,u),Pr.fromBufferAttribute(i,h),p.uv=Rn.getInterpolation(Lr,rs,os,as,Rr,Cr,Pr,new We)),r&&(Rr.fromBufferAttribute(r,c),Cr.fromBufferAttribute(r,u),Pr.fromBufferAttribute(r,h),p.uv1=Rn.getInterpolation(Lr,rs,os,as,Rr,Cr,Pr,new We)),o&&($l.fromBufferAttribute(o,c),Kl.fromBufferAttribute(o,u),Zl.fromBufferAttribute(o,h),p.normal=Rn.getInterpolation(Lr,rs,os,as,$l,Kl,Zl,new I),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const a={a:c,b:u,c:h,normal:new I,materialIndex:0};Rn.getNormal(rs,os,as,a.normal),p.face=a}return p}class ut extends bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const c=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const u=[],h=[],p=[],a=[];let l=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(u),this.setAttribute("position",new dt(h,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(a,2));function g(_,m,f,x,v,w,D,E,A,P,y){const S=w/A,R=D/P,N=w/2,U=D/2,H=E/2,X=A+1,q=P+1;let $=0,V=0;const de=new I;for(let me=0;me<q;me++){const fe=me*R-U;for(let Ke=0;Ke<X;Ke++){const et=Ke*S-N;de[_]=et*x,de[m]=fe*v,de[f]=H,h.push(de.x,de.y,de.z),de[_]=0,de[m]=0,de[f]=E>0?1:-1,p.push(de.x,de.y,de.z),a.push(Ke/A),a.push(1-me/P),$+=1}}for(let me=0;me<P;me++)for(let fe=0;fe<A;fe++){const Ke=l+fe+X*me,et=l+fe+X*(me+1),Y=l+(fe+1)+X*(me+1),ee=l+(fe+1)+X*me;u.push(Ke,et,ee),u.push(et,Y,ee),V+=6}c.addGroup(d,V,y),d+=V,l+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ps(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const n=Ps(s[t]);for(const i in n)e[i]=n[i]}return e}function $p(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Kp={clone:Ps,merge:Lt};var Zp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends qi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zp,this.fragmentShader=jp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=$p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new I,jl=new We,Ql=new We;class Ft extends dd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,jl,Ql),t.subVectors(Ql,jl)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;r+=o.offsetX*i/u,t-=o.offsetY*n/h,i*=o.width/u,n*=o.height/h}const c=this.filmOffset;c!==0&&(r+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,ls=1;class Qp extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ft(cs,ls,e,t);i.layers=this.layers,this.add(i);const r=new Ft(cs,ls,e,t);r.layers=this.layers,this.add(r);const o=new Ft(cs,ls,e,t);o.layers=this.layers,this.add(o);const c=new Ft(cs,ls,e,t);c.layers=this.layers,this.add(c);const u=new Ft(cs,ls,e,t);u.layers=this.layers,this.add(u);const h=new Ft(cs,ls,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,c,u]=t;for(const h of t)this.remove(h);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Mo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,c,u,h,p]=this.children,a=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,c),e.setRenderTarget(n,3,i),e.render(t,u),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,p),e.setRenderTarget(a,l,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fd extends Ct{constructor(e,t,n,i,r,o,c,u,h,p){e=e!==void 0?e:[],t=t!==void 0?t:Es,super(e,t,n,i,r,o,c,u,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class em extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ut(5,5,5),r=new xi({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:pi});r.uniforms.tEquirect.value=t;const o=new be(i,r),c=t.minFilter;return t.minFilter===zi&&(t.minFilter=pn),new Qp(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ea=new I,tm=new I,nm=new qe;class Li{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ea.subVectors(n,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||nm.getNormalMatrix(e),i=this.coplanarPoint(Ea).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Xi,Nr=new I;class Nc{constructor(e=new Li,t=new Li,n=new Li,i=new Li,r=new Li,o=new Li){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(i),c[4].copy(r),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn){const n=this.planes,i=e.elements,r=i[0],o=i[1],c=i[2],u=i[3],h=i[4],p=i[5],a=i[6],l=i[7],d=i[8],g=i[9],_=i[10],m=i[11],f=i[12],x=i[13],v=i[14],w=i[15];if(n[0].setComponents(u-r,l-h,m-d,w-f).normalize(),n[1].setComponents(u+r,l+h,m+d,w+f).normalize(),n[2].setComponents(u+o,l+p,m+g,w+x).normalize(),n[3].setComponents(u-o,l-p,m-g,w-x).normalize(),n[4].setComponents(u-c,l-a,m-_,w-v).normalize(),t===Wn)n[5].setComponents(u+c,l+a,m+_,w+v).normalize();else if(t===Mo)n[5].setComponents(c,a,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Nr.x=i.normal.x>0?e.max.x:e.min.x,Nr.y=i.normal.y>0?e.max.y:e.min.y,Nr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function im(s){const e=new WeakMap;function t(c,u){const h=c.array,p=c.usage,a=h.byteLength,l=s.createBuffer();s.bindBuffer(u,l),s.bufferData(u,h,p),c.onUploadCallback();let d;if(h instanceof Float32Array)d=s.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=s.SHORT;else if(h instanceof Uint32Array)d=s.UNSIGNED_INT;else if(h instanceof Int32Array)d=s.INT;else if(h instanceof Int8Array)d=s.BYTE;else if(h instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:l,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:a}}function n(c,u,h){const p=u.array,a=u._updateRange,l=u.updateRanges;if(s.bindBuffer(h,c),a.count===-1&&l.length===0&&s.bufferSubData(h,0,p),l.length!==0){for(let d=0,g=l.length;d<g;d++){const _=l[d];s.bufferSubData(h,_.start*p.BYTES_PER_ELEMENT,p,_.start,_.count)}u.clearUpdateRanges()}a.count!==-1&&(s.bufferSubData(h,a.offset*p.BYTES_PER_ELEMENT,p,a.offset,a.count),a.count=-1),u.onUploadCallback()}function i(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=e.get(c);u&&(s.deleteBuffer(u.buffer),e.delete(c))}function o(c,u){if(c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);if(h===void 0)e.set(c,t(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,u),h.version=c.version}}return{get:i,remove:r,update:o}}class Is extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,c=Math.floor(n),u=Math.floor(i),h=c+1,p=u+1,a=e/c,l=t/u,d=[],g=[],_=[],m=[];for(let f=0;f<p;f++){const x=f*l-o;for(let v=0;v<h;v++){const w=v*a-r;g.push(w,-x,0),_.push(0,0,1),m.push(v/c),m.push(1-f/u)}}for(let f=0;f<u;f++)for(let x=0;x<c;x++){const v=x+h*f,w=x+h*(f+1),D=x+1+h*(f+1),E=x+1+h*f;d.push(v,w,E),d.push(w,D,E)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Is(e.width,e.height,e.widthSegments,e.heightSegments)}}var sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,om=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dm=`#ifdef USE_BATCHING
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
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_m=`#ifdef USE_IRIDESCENCE
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
#endif`,xm=`#ifdef USE_BUMPMAP
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
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tm=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`
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
}`,Om=`#ifdef USE_ENVMAP
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
#endif`,Fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bm=`#ifdef USE_ENVMAP
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
#endif`,zm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ym=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tg=`PhysicalMaterial material;
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
#endif`,ng=`struct PhysicalMaterial {
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
}`,ig=`
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
#endif`,sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ag=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fg=`#if defined( USE_POINTS_UV )
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
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
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
#endif`,yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Mg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ag=`#ifdef USE_NORMALMAP
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
#endif`,Tg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ig=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ug=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vg=`float getShadowMask() {
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
}`,Gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
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
#endif`,Xg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$g=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
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
#endif`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s_=`uniform sampler2D t2D;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
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
}`,u_=`#if DEPTH_PACKING == 3200
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
}`,h_=`#define DISTANCE
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
}`,d_=`#define DISTANCE
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`uniform float scale;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,x_=`uniform vec3 diffuse;
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
}`,v_=`#define LAMBERT
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
}`,y_=`#define LAMBERT
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
}`,S_=`#define MATCAP
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
}`,M_=`#define MATCAP
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
}`,w_=`#define NORMAL
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
}`,b_=`#define NORMAL
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
}`,E_=`#define PHONG
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
}`,A_=`#define PHONG
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
}`,T_=`#define STANDARD
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
}`,R_=`#define STANDARD
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
}`,C_=`#define TOON
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
}`,P_=`#define TOON
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
}`,L_=`uniform float size;
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
}`,I_=`uniform vec3 diffuse;
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
}`,D_=`#include <common>
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
}`,N_=`uniform vec3 color;
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
}`,U_=`uniform float rotation;
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
}`,O_=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:om,alphamap_pars_fragment:am,alphatest_fragment:cm,alphatest_pars_fragment:lm,aomap_fragment:um,aomap_pars_fragment:hm,batching_pars_vertex:dm,batching_vertex:fm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:_m,bumpmap_pars_fragment:xm,clipping_planes_fragment:vm,clipping_planes_pars_fragment:ym,clipping_planes_pars_vertex:Sm,clipping_planes_vertex:Mm,color_fragment:wm,color_pars_fragment:bm,color_pars_vertex:Em,color_vertex:Am,common:Tm,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Pm,displacementmap_vertex:Lm,emissivemap_fragment:Im,emissivemap_pars_fragment:Dm,colorspace_fragment:Nm,colorspace_pars_fragment:Um,envmap_fragment:Om,envmap_common_pars_fragment:Fm,envmap_pars_fragment:Bm,envmap_pars_vertex:zm,envmap_physical_pars_fragment:Km,envmap_vertex:km,fog_vertex:Hm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:Ym,lights_lambert_pars_fragment:Jm,lights_pars_begin:$m,lights_toon_fragment:Zm,lights_toon_pars_fragment:jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:eg,lights_physical_fragment:tg,lights_physical_pars_fragment:ng,lights_fragment_begin:ig,lights_fragment_maps:sg,lights_fragment_end:rg,logdepthbuf_fragment:og,logdepthbuf_pars_fragment:ag,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:lg,map_fragment:ug,map_pars_fragment:hg,map_particle_fragment:dg,map_particle_pars_fragment:fg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:_g,morphnormal_vertex:xg,morphtarget_pars_vertex:vg,morphtarget_vertex:yg,normal_fragment_begin:Sg,normal_fragment_maps:Mg,normal_pars_fragment:wg,normal_pars_vertex:bg,normal_vertex:Eg,normalmap_pars_fragment:Ag,clearcoat_normal_fragment_begin:Tg,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Pg,opaque_fragment:Lg,packing:Ig,premultiplied_alpha_fragment:Dg,project_vertex:Ng,dithering_fragment:Ug,dithering_pars_fragment:Og,roughnessmap_fragment:Fg,roughnessmap_pars_fragment:Bg,shadowmap_pars_fragment:zg,shadowmap_pars_vertex:kg,shadowmap_vertex:Hg,shadowmask_pars_fragment:Vg,skinbase_vertex:Gg,skinning_pars_vertex:Wg,skinning_vertex:Xg,skinnormal_vertex:qg,specularmap_fragment:Yg,specularmap_pars_fragment:Jg,tonemapping_fragment:$g,tonemapping_pars_fragment:Kg,transmission_fragment:Zg,transmission_pars_fragment:jg,uv_pars_fragment:Qg,uv_pars_vertex:e_,uv_vertex:t_,worldpos_vertex:n_,background_vert:i_,background_frag:s_,backgroundCube_vert:r_,backgroundCube_frag:o_,cube_vert:a_,cube_frag:c_,depth_vert:l_,depth_frag:u_,distanceRGBA_vert:h_,distanceRGBA_frag:d_,equirect_vert:f_,equirect_frag:p_,linedashed_vert:m_,linedashed_frag:g_,meshbasic_vert:__,meshbasic_frag:x_,meshlambert_vert:v_,meshlambert_frag:y_,meshmatcap_vert:S_,meshmatcap_frag:M_,meshnormal_vert:w_,meshnormal_frag:b_,meshphong_vert:E_,meshphong_frag:A_,meshphysical_vert:T_,meshphysical_frag:R_,meshtoon_vert:C_,meshtoon_frag:P_,points_vert:L_,points_frag:I_,shadow_vert:D_,shadow_frag:N_,sprite_vert:U_,sprite_frag:O_},le={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},An={basic:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Me(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Lt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Lt([le.lights,le.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};An.physical={uniforms:Lt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ur={r:0,b:0,g:0},Ci=new an,F_=new at;function B_(s,e,t,n,i,r,o){const c=new Me(0);let u=r===!0?0:1,h,p,a=null,l=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const w=g(x);w===null?f(c,u):w&&w.isColor&&(f(w,1),v=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Po)?(p===void 0&&(p=new be(new ut(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ps(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(p)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),p.material.uniforms.envMap.value=w,p.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Ci)),p.material.toneMapped=it.getTransfer(w.colorSpace)!==ct,(a!==w||l!==w.version||d!==s.toneMapping)&&(p.material.needsUpdate=!0,a=w,l=w.version,d=s.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new be(new Is(2,2),new xi({name:"BackgroundMaterial",uniforms:Ps(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=it.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(a!==w||l!==w.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,a=w,l=w.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}function f(x,v){x.getRGB(Ur,hd(s)),n.buffers.color.setClear(Ur.r,Ur.g,Ur.b,v,o)}return{getClearColor:function(){return c},setClearColor:function(x,v=1){c.set(x),u=v,f(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(x){u=x,f(c,u)},render:_,addToRenderList:m}}function z_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=l(null);let r=i,o=!1;function c(S,R,N,U,H){let X=!1;const q=a(U,N,R);r!==q&&(r=q,h(r.object)),X=d(S,U,N,H),X&&g(S,U,N,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,w(S,R,N,U),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function u(){return s.createVertexArray()}function h(S){return s.bindVertexArray(S)}function p(S){return s.deleteVertexArray(S)}function a(S,R,N){const U=N.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let X=H[R.id];X===void 0&&(X={},H[R.id]=X);let q=X[U];return q===void 0&&(q=l(u()),X[U]=q),q}function l(S){const R=[],N=[],U=[];for(let H=0;H<t;H++)R[H]=0,N[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,R,N,U){const H=r.attributes,X=R.attributes;let q=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){const me=H[V];let fe=X[V];if(fe===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),me===void 0||me.attribute!==fe||fe&&me.data!==fe.data)return!0;q++}return r.attributesNum!==q||r.index!==U}function g(S,R,N,U){const H={},X=R.attributes;let q=0;const $=N.getAttributes();for(const V in $)if($[V].location>=0){let me=X[V];me===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const fe={};fe.attribute=me,me&&me.data&&(fe.data=me.data),H[V]=fe,q++}r.attributes=H,r.attributesNum=q,r.index=U}function _(){const S=r.newAttributes;for(let R=0,N=S.length;R<N;R++)S[R]=0}function m(S){f(S,0)}function f(S,R){const N=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;N[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),H[S]!==R&&(s.vertexAttribDivisor(S,R),H[S]=R)}function x(){const S=r.newAttributes,R=r.enabledAttributes;for(let N=0,U=R.length;N<U;N++)R[N]!==S[N]&&(s.disableVertexAttribArray(N),R[N]=0)}function v(S,R,N,U,H,X,q){q===!0?s.vertexAttribIPointer(S,R,N,H,X):s.vertexAttribPointer(S,R,N,U,H,X)}function w(S,R,N,U){_();const H=U.attributes,X=N.getAttributes(),q=R.defaultAttributeValues;for(const $ in X){const V=X[$];if(V.location>=0){let de=H[$];if(de===void 0&&($==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),$==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const me=de.normalized,fe=de.itemSize,Ke=e.get(de);if(Ke===void 0)continue;const et=Ke.buffer,Y=Ke.type,ee=Ke.bytesPerElement,ge=Y===s.INT||Y===s.UNSIGNED_INT||de.gpuType===Yh;if(de.isInterleavedBufferAttribute){const ae=de.data,Ue=ae.stride,De=de.offset;if(ae.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)f(V.location+ke,ae.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ke=0;ke<V.locationSize;ke++)m(V.location+ke);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ke=0;ke<V.locationSize;ke++)v(V.location+ke,fe/V.locationSize,Y,me,Ue*ee,(De+fe/V.locationSize*ke)*ee,ge)}else{if(de.isInstancedBufferAttribute){for(let ae=0;ae<V.locationSize;ae++)f(V.location+ae,de.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ae=0;ae<V.locationSize;ae++)m(V.location+ae);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ae=0;ae<V.locationSize;ae++)v(V.location+ae,fe/V.locationSize,Y,me,fe*ee,fe/V.locationSize*ae*ee,ge)}}else if(q!==void 0){const me=q[$];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(V.location,me);break;case 3:s.vertexAttrib3fv(V.location,me);break;case 4:s.vertexAttrib4fv(V.location,me);break;default:s.vertexAttrib1fv(V.location,me)}}}}x()}function D(){P();for(const S in n){const R=n[S];for(const N in R){const U=R[N];for(const H in U)p(U[H].object),delete U[H];delete R[N]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const N in R){const U=R[N];for(const H in U)p(U[H].object),delete U[H];delete R[N]}delete n[S.id]}function A(S){for(const R in n){const N=n[R];if(N[S.id]===void 0)continue;const U=N[S.id];for(const H in U)p(U[H].object),delete U[H];delete N[S.id]}}function P(){y(),o=!0,r!==i&&(r=i,h(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:c,reset:P,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function k_(s,e,t){let n;function i(h){n=h}function r(h,p){s.drawArrays(n,h,p),t.update(p,n,1)}function o(h,p,a){a!==0&&(s.drawArraysInstanced(n,h,p,a),t.update(p,n,a))}function c(h,p,a){if(a===0)return;const l=e.get("WEBGL_multi_draw");if(l===null)for(let d=0;d<a;d++)this.render(h[d],p[d]);else{l.multiDrawArraysWEBGL(n,h,0,p,0,a);let d=0;for(let g=0;g<a;g++)d+=p[g];t.update(d,n,1)}}function u(h,p,a,l){if(a===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h.length;g++)o(h[g],p[g],l[g]);else{d.multiDrawArraysInstancedWEBGL(n,h,0,p,0,l,0,a);let g=0;for(let _=0;_<a;_++)g+=p[_];for(let _=0;_<l.length;_++)t.update(g,n,l[_])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function H_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Cn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(E){const A=E===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==_i&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Gn&&!A)}function u(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=u(h);p!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const a=t.logarithmicDepthBuffer===!0,l=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=d>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:a,maxTextures:l,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:D}}function V_(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Li,c=new qe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(a,l){const d=a.length!==0||l||n!==0||i;return i=l,n=a.length,d},this.beginShadows=function(){r=!0,p(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(a,l){t=p(a,l,0)},this.setState=function(a,l,d){const g=a.clippingPlanes,_=a.clipIntersection,m=a.clipShadows,f=s.get(a);if(!i||g===null||g.length===0||r&&!m)r?p(null):h();else{const x=r?0:n,v=x*4;let w=f.clippingState||null;u.value=w,w=p(g,l,v,d);for(let D=0;D!==v;++D)w[D]=t[D];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(a,l,d,g){const _=a!==null?a.length:0;let m=null;if(_!==0){if(m=u.value,g!==!0||m===null){const f=d+_*4,x=l.matrixWorldInverse;c.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,w=d;v!==_;++v,w+=4)o.copy(a[v]).applyMatrix4(x,c),o.normal.toArray(m,w),m[w+3]=o.constant}u.value=m,u.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function G_(s){let e=new WeakMap;function t(o,c){return c===pc?o.mapping=Es:c===mc&&(o.mapping=As),o}function n(o){if(o&&o.isTexture){const c=o.mapping;if(c===pc||c===mc)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new em(u.height);return h.fromEquirectangularTexture(s,o),e.set(o,h),o.addEventListener("dispose",i),t(h.texture,o.mapping)}else return null}}return o}function i(o){const c=o.target;c.removeEventListener("dispose",i);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class md extends dd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,c=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,c-=p*this.view.offsetY,u=c-p*this.view.height}this.projectionMatrix.makeOrthographic(r,o,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=4,eu=[.125,.215,.35,.446,.526,.582],Fi=20,Aa=new md,tu=new Me;let Ta=null,Ra=0,Ca=0,Pa=!1;const Ii=(1+Math.sqrt(5))/2,us=1/Ii,nu=[new I(-Ii,us,0),new I(Ii,us,0),new I(-us,0,Ii),new I(us,0,Ii),new I(0,Ii,-us),new I(0,Ii,us),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ta=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Ra,Ca),this._renderer.xr.enabled=Pa,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Lo,format:Cn,colorSpace:Si,depthBuffer:!1},i=su(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=su(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W_(r)),this._blurMaterial=X_(r,e,t)}return i}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Aa)}_sceneToCubeUV(e,t,n,i){const c=new Ft(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,a=p.autoClear,l=p.toneMapping;p.getClearColor(tu),p.toneMapping=mi,p.autoClear=!1;const d=new Jt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new be(new ut,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(tu),_=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(c.up.set(0,u[f],0),c.lookAt(h[f],0,0)):x===1?(c.up.set(0,0,u[f]),c.lookAt(0,h[f],0)):(c.up.set(0,u[f],0),c.lookAt(0,0,h[f]));const v=this._cubeSize;Or(i,x*v,f>2?v:0,v,v),p.setRenderTarget(i),_&&p.render(g,c),p.render(e,c)}g.geometry.dispose(),g.material.dispose(),p.toneMapping=l,p.autoClear=a,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Es||e.mapping===As;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ru());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),c=r.uniforms;c.envMap.value=e;const u=this._cubeSize;Or(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),c=nu[(i-r-1)%nu.length];this._blur(e,r-1,r,o,c)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,c){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,a=new be(this._lodPlanes[i],h),l=h.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Fi-1),_=r/g,m=isFinite(r)?1+Math.floor(p*_):Fi;m>Fi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const f=[];let x=0;for(let A=0;A<Fi;++A){const P=A/_,y=Math.exp(-P*P/2);f.push(y),A===0?x+=y:A<m&&(x+=2*y)}for(let A=0;A<f.length;A++)f[A]=f[A]/x;l.envMap.value=e.texture,l.samples.value=m,l.weights.value=f,l.latitudinal.value=o==="latitudinal",c&&(l.poleAxis.value=c);const{_lodMax:v}=this;l.dTheta.value=g,l.mipInt.value=v-n;const w=this._sizeLods[i],D=3*w*(i>v-xs?i-v+xs:0),E=4*(this._cubeSize-w);Or(t,D,E,3*w,2*w),u.setRenderTarget(t),u.render(a,Aa)}}function W_(s){const e=[],t=[],n=[];let i=s;const r=s-xs+1+eu.length;for(let o=0;o<r;o++){const c=Math.pow(2,i);t.push(c);let u=1/c;o>s-xs?u=eu[o-s+xs-1]:o===0&&(u=0),n.push(u);const h=1/(c-2),p=-h,a=1+h,l=[p,p,a,p,a,a,p,p,a,a,p,a],d=6,g=6,_=3,m=2,f=1,x=new Float32Array(_*g*d),v=new Float32Array(m*g*d),w=new Float32Array(f*g*d);for(let E=0;E<d;E++){const A=E%3*2/3-1,P=E>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];x.set(y,_*g*E),v.set(l,m*g*E);const S=[E,E,E,E,E,E];w.set(S,f*g*E)}const D=new bt;D.setAttribute("position",new $t(x,_)),D.setAttribute("uv",new $t(v,m)),D.setAttribute("faceIndex",new $t(w,f)),e.push(D),i>xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function su(s,e,t){const n=new ki(s,e,t);return n.texture.mapping=Po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function X_(s,e,t){const n=new Float32Array(Fi),i=new I(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ru(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function ou(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function q_(s){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===pc||u===mc,p=u===Es||u===As;if(h||p){let a=e.get(c);const l=a!==void 0?a.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==l)return t===null&&(t=new iu(s)),a=h?t.fromEquirectangular(c,a):t.fromCubemap(c,a),a.texture.pmremVersion=c.pmremVersion,e.set(c,a),a.texture;if(a!==void 0)return a.texture;{const d=c.image;return h&&d&&d.height>0||p&&d&&i(d)?(t===null&&(t=new iu(s)),a=h?t.fromEquirectangular(c):t.fromCubemap(c),a.texture.pmremVersion=c.pmremVersion,e.set(c,a),c.addEventListener("dispose",r),a.texture):null}}}return c}function i(c){let u=0;const h=6;for(let p=0;p<h;p++)c[p]!==void 0&&u++;return u===h}function r(c){const u=c.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Y_(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&sd("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function J_(s,e,t,n){const i={},r=new WeakMap;function o(a){const l=a.target;l.index!==null&&e.remove(l.index);for(const g in l.attributes)e.remove(l.attributes[g]);for(const g in l.morphAttributes){const _=l.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}l.removeEventListener("dispose",o),delete i[l.id];const d=r.get(l);d&&(e.remove(d),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function c(a,l){return i[l.id]===!0||(l.addEventListener("dispose",o),i[l.id]=!0,t.memory.geometries++),l}function u(a){const l=a.attributes;for(const g in l)e.update(l[g],s.ARRAY_BUFFER);const d=a.morphAttributes;for(const g in d){const _=d[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],s.ARRAY_BUFFER)}}function h(a){const l=[],d=a.index,g=a.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let v=0,w=x.length;v<w;v+=3){const D=x[v+0],E=x[v+1],A=x[v+2];l.push(D,E,E,A,A,D)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,w=x.length/3-1;v<w;v+=3){const D=v+0,E=v+1,A=v+2;l.push(D,E,E,A,A,D)}}else return;const m=new(id(l)?ud:ld)(l,1);m.version=_;const f=r.get(a);f&&e.remove(f),r.set(a,m)}function p(a){const l=r.get(a);if(l){const d=a.index;d!==null&&l.version<d.version&&h(a)}else h(a);return r.get(a)}return{get:c,update:u,getWireframeAttribute:p}}function $_(s,e,t){let n;function i(l){n=l}let r,o;function c(l){r=l.type,o=l.bytesPerElement}function u(l,d){s.drawElements(n,d,r,l*o),t.update(d,n,1)}function h(l,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,l*o,g),t.update(d,n,g))}function p(l,d,g){if(g===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(l[m]/o,d[m]);else{_.multiDrawElementsWEBGL(n,d,0,r,l,0,g);let m=0;for(let f=0;f<g;f++)m+=d[f];t.update(m,n,1)}}function a(l,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<l.length;f++)h(l[f]/o,d[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,l,0,_,0,g);let f=0;for(let x=0;x<g;x++)f+=d[x];for(let x=0;x<_.length;x++)t.update(f,n,_[x])}}this.setMode=i,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=a}function K_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,c){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=c*(r/3);break;case s.LINES:t.lines+=c*(r/2);break;case s.LINE_STRIP:t.lines+=c*(r-1);break;case s.LINE_LOOP:t.lines+=c*r;break;case s.POINTS:t.points+=c*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Z_(s,e,t){const n=new WeakMap,i=new ht;function r(o,c,u){const h=o.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,a=p!==void 0?p.length:0;let l=n.get(c);if(l===void 0||l.count!==a){let S=function(){P.dispose(),n.delete(c),c.removeEventListener("dispose",S)};var d=S;l!==void 0&&l.texture.dispose();const g=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,m=c.morphAttributes.color!==void 0,f=c.morphAttributes.position||[],x=c.morphAttributes.normal||[],v=c.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let D=c.attributes.position.count*w,E=1;D>e.maxTextureSize&&(E=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*E*4*a),P=new od(A,D,E,a);P.type=Gn,P.needsUpdate=!0;const y=w*4;for(let R=0;R<a;R++){const N=f[R],U=x[R],H=v[R],X=D*E*4*R;for(let q=0;q<N.count;q++){const $=q*y;g===!0&&(i.fromBufferAttribute(N,q),A[X+$+0]=i.x,A[X+$+1]=i.y,A[X+$+2]=i.z,A[X+$+3]=0),_===!0&&(i.fromBufferAttribute(U,q),A[X+$+4]=i.x,A[X+$+5]=i.y,A[X+$+6]=i.z,A[X+$+7]=0),m===!0&&(i.fromBufferAttribute(H,q),A[X+$+8]=i.x,A[X+$+9]=i.y,A[X+$+10]=i.z,A[X+$+11]=H.itemSize===4?i.w:1)}}l={count:a,texture:P,size:new We(D,E)},n.set(c,l),c.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<h.length;m++)g+=h[m];const _=c.morphTargetsRelative?1:1-g;u.getUniforms().setValue(s,"morphTargetBaseInfluence",_),u.getUniforms().setValue(s,"morphTargetInfluences",h)}u.getUniforms().setValue(s,"morphTargetsTexture",l.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",l.size)}return{update:r}}function j_(s,e,t,n){let i=new WeakMap;function r(u){const h=n.render.frame,p=u.geometry,a=e.get(u,p);if(i.get(a)!==h&&(e.update(a),i.set(a,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),i.get(u)!==h&&(t.update(u.instanceMatrix,s.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,s.ARRAY_BUFFER),i.set(u,h))),u.isSkinnedMesh){const l=u.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return a}function o(){i=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}class gd extends Ct{constructor(e,t,n,i,r,o,c,u,h,p=ys){if(p!==ys&&p!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&p===ys&&(n=Ts),n===void 0&&p===Cs&&(n=Rs),super(null,i,r,o,c,u,p,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Bt,this.minFilter=u!==void 0?u:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _d=new Ct,xd=new gd(1,1);xd.compareFunction=td;const vd=new od,yd=new Bp,Sd=new fd,au=[],cu=[],lu=new Float32Array(16),uu=new Float32Array(9),hu=new Float32Array(4);function Ds(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=au[i];if(r===void 0&&(r=new Float32Array(i),au[i]=r),e!==0){n.toArray(r,0);for(let o=1,c=0;o!==e;++o)c+=t,s[o].toArray(r,c)}return r}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function vt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function No(s,e){let t=cu[e];t===void 0&&(t=new Int32Array(e),cu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Q_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function e0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),vt(t,e)}}function t0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),vt(t,e)}}function n0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),vt(t,e)}}function i0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;hu.set(n),s.uniformMatrix2fv(this.addr,!1,hu),vt(t,n)}}function s0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;uu.set(n),s.uniformMatrix3fv(this.addr,!1,uu),vt(t,n)}}function r0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;lu.set(n),s.uniformMatrix4fv(this.addr,!1,lu),vt(t,n)}}function o0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),vt(t,e)}}function c0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),vt(t,e)}}function l0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),vt(t,e)}}function u0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function h0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),vt(t,e)}}function d0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),vt(t,e)}}function f0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),vt(t,e)}}function p0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?xd:_d;t.setTexture2D(e||r,i)}function m0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yd,i)}function g0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sd,i)}function _0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vd,i)}function x0(s){switch(s){case 5126:return Q_;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return s0;case 35676:return r0;case 5124:case 35670:return o0;case 35667:case 35671:return a0;case 35668:case 35672:return c0;case 35669:case 35673:return l0;case 5125:return u0;case 36294:return h0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}function v0(s,e){s.uniform1fv(this.addr,e)}function y0(s,e){const t=Ds(e,this.size,2);s.uniform2fv(this.addr,t)}function S0(s,e){const t=Ds(e,this.size,3);s.uniform3fv(this.addr,t)}function M0(s,e){const t=Ds(e,this.size,4);s.uniform4fv(this.addr,t)}function w0(s,e){const t=Ds(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function b0(s,e){const t=Ds(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function E0(s,e){const t=Ds(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function A0(s,e){s.uniform1iv(this.addr,e)}function T0(s,e){s.uniform2iv(this.addr,e)}function R0(s,e){s.uniform3iv(this.addr,e)}function C0(s,e){s.uniform4iv(this.addr,e)}function P0(s,e){s.uniform1uiv(this.addr,e)}function L0(s,e){s.uniform2uiv(this.addr,e)}function I0(s,e){s.uniform3uiv(this.addr,e)}function D0(s,e){s.uniform4uiv(this.addr,e)}function N0(s,e,t){const n=this.cache,i=e.length,r=No(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||_d,r[o])}function U0(s,e,t){const n=this.cache,i=e.length,r=No(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||yd,r[o])}function O0(s,e,t){const n=this.cache,i=e.length,r=No(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Sd,r[o])}function F0(s,e,t){const n=this.cache,i=e.length,r=No(t,i);xt(n,r)||(s.uniform1iv(this.addr,r),vt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||vd,r[o])}function B0(s){switch(s){case 5126:return v0;case 35664:return y0;case 35665:return S0;case 35666:return M0;case 35674:return w0;case 35675:return b0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return T0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return L0;case 36295:return I0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return N0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return O0;case 36289:case 36303:case 36311:case 36292:return F0}}class z0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=x0(t.type)}}class k0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B0(t.type)}}class H0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const c=i[r];c.setValue(e,t[c.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function du(s,e){s.seq.push(e),s.map[e.id]=e}function V0(s,e,t){const n=s.name,i=n.length;for(La.lastIndex=0;;){const r=La.exec(n),o=La.lastIndex;let c=r[1];const u=r[2]==="]",h=r[3];if(u&&(c=c|0),h===void 0||h==="["&&o+2===i){du(t,h===void 0?new z0(c,s,e):new k0(c,s,e));break}else{let a=t.map[c];a===void 0&&(a=new H0(c),du(t,a)),t=a}}}class ho{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);V0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const c=t[r],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function fu(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const G0=37297;let W0=0;function X0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}function q0(s){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(s);let n;switch(e===t?n="":e===So&&t===yo?n="LinearDisplayP3ToLinearSRGB":e===yo&&t===So&&(n="LinearSRGBToLinearDisplayP3"),s){case Si:case Io:return[n,"LinearTransferOETF"];case En:case Ic:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function pu(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+X0(s.getShaderSource(e),o)}else return i}function Y0(s,e){const t=q0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function J0(s,e){let t;switch(e){case ip:t="Linear";break;case sp:t="Reinhard";break;case rp:t="OptimizedCineon";break;case op:t="ACESFilmic";break;case cp:t="AgX";break;case lp:t="Neutral";break;case ap:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function $0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tr).join(`
`)}function K0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Z0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let c=1;r.type===s.FLOAT_MAT2&&(c=2),r.type===s.FLOAT_MAT3&&(c=3),r.type===s.FLOAT_MAT4&&(c=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:c}}return t}function tr(s){return s!==""}function mu(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j0=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(s){return s.replace(j0,ex)}const Q0=new Map;function ex(s,e){let t=ze[e];if(t===void 0){const n=Q0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(s){return s.replace(tx,nx)}function nx(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function xu(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ix(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function sx(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Es:case As:e="ENVMAP_TYPE_CUBE";break;case Po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rx(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function ox(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Lc:e="ENVMAP_BLENDING_MULTIPLY";break;case tp:e="ENVMAP_BLENDING_MIX";break;case np:e="ENVMAP_BLENDING_ADD";break}return e}function ax(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function cx(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,c=t.fragmentShader;const u=ix(t),h=sx(t),p=rx(t),a=ox(t),l=ax(t),d=$0(t),g=K0(r),_=i.createProgram();let m,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tr).join(`
`),f.length>0&&(f+=`
`)):(m=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tr).join(`
`),f=[xu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+a:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ze.tonemapping_pars_fragment:"",t.toneMapping!==mi?J0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Y0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tr).join(`
`)),o=yc(o),o=mu(o,t),o=gu(o,t),c=yc(c),c=mu(c,t),c=gu(c,t),o=_u(o),c=_u(c),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=x+m+o,w=x+f+c,D=fu(i,i.VERTEX_SHADER,v),E=fu(i,i.FRAGMENT_SHADER,w);i.attachShader(_,D),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),U=i.getShaderInfoLog(D).trim(),H=i.getShaderInfoLog(E).trim();let X=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,D,E);else{const $=pu(i,D,"vertex"),V=pu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+$+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(U===""||H==="")&&(q=!1);q&&(R.diagnostics={runnable:X,programLog:N,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(D),i.deleteShader(E),P=new ho(i,_),y=Z0(i,_)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,G0)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=E,this}let lx=0;class ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hx(e),t.set(e,n)),n}}class hx{constructor(e){this.id=lx++,this.code=e,this.usedTimes=0}}function dx(s,e,t,n,i,r,o){const c=new Dc,u=new ux,h=new Set,p=[],a=i.logarithmicDepthBuffer,l=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,N,U){const H=N.fog,X=U.geometry,q=y.isMeshStandardMaterial?N.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||q),V=$&&$.mapping===Po?$.image.height:null,de=g[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fe=me!==void 0?me.length:0;let Ke=0;X.morphAttributes.position!==void 0&&(Ke=1),X.morphAttributes.normal!==void 0&&(Ke=2),X.morphAttributes.color!==void 0&&(Ke=3);let et,Y,ee,ge;if(de){const rt=An[de];et=rt.vertexShader,Y=rt.fragmentShader}else et=y.vertexShader,Y=y.fragmentShader,u.update(y),ee=u.getVertexShaderID(y),ge=u.getFragmentShaderID(y);const ae=s.getRenderTarget(),Ue=U.isInstancedMesh===!0,De=U.isBatchedMesh===!0,ke=!!y.map,L=!!y.matcap,Ye=!!$,Be=!!y.aoMap,st=!!y.lightMap,Ee=!!y.bumpMap,Ae=!!y.normalMap,He=!!y.displacementMap,Oe=!!y.emissiveMap,ft=!!y.metalnessMap,T=!!y.roughnessMap,M=y.anisotropy>0,k=y.clearcoat>0,K=y.dispersion>0,Z=y.iridescence>0,Q=y.sheen>0,Se=y.transmission>0,ue=M&&!!y.anisotropyMap,ce=k&&!!y.clearcoatMap,Fe=k&&!!y.clearcoatNormalMap,ne=k&&!!y.clearcoatRoughnessMap,ve=Z&&!!y.iridescenceMap,Xe=Z&&!!y.iridescenceThicknessMap,Pe=Q&&!!y.sheenColorMap,G=Q&&!!y.sheenRoughnessMap,j=!!y.specularMap,he=!!y.specularColorMap,xe=!!y.specularIntensityMap,C=Se&&!!y.transmissionMap,te=Se&&!!y.thicknessMap,W=!!y.gradientMap,J=!!y.alphaMap,ie=y.alphaTest>0,Ce=!!y.alphaHash,Ze=!!y.extensions;let lt=mi;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(lt=s.toneMapping);const yt={shaderID:de,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:Y,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:De,batchingColor:De&&U._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&U.instanceColor!==null,instancingMorph:Ue&&U.morphTexture!==null,supportsVertexTextures:l,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Si,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:L,envMap:Ye,envMapMode:Ye&&$.mapping,envMapCubeUVHeight:V,aoMap:Be,lightMap:st,bumpMap:Ee,normalMap:Ae,displacementMap:l&&He,emissiveMap:Oe,normalMapObjectSpace:Ae&&y.normalMapType===Mp,normalMapTangentSpace:Ae&&y.normalMapType===ed,metalnessMap:ft,roughnessMap:T,anisotropy:M,anisotropyMap:ue,clearcoat:k,clearcoatMap:ce,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ne,dispersion:K,iridescence:Z,iridescenceMap:ve,iridescenceThicknessMap:Xe,sheen:Q,sheenColorMap:Pe,sheenRoughnessMap:G,specularMap:j,specularColorMap:he,specularIntensityMap:xe,transmission:Se,transmissionMap:C,thicknessMap:te,gradientMap:W,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ie,alphaHash:Ce,combine:y.combine,mapUv:ke&&_(y.map.channel),aoMapUv:Be&&_(y.aoMap.channel),lightMapUv:st&&_(y.lightMap.channel),bumpMapUv:Ee&&_(y.bumpMap.channel),normalMapUv:Ae&&_(y.normalMap.channel),displacementMapUv:He&&_(y.displacementMap.channel),emissiveMapUv:Oe&&_(y.emissiveMap.channel),metalnessMapUv:ft&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:ue&&_(y.anisotropyMap.channel),clearcoatMapUv:ce&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(y.sheenRoughnessMap.channel),specularMapUv:j&&_(y.specularMap.channel),specularColorMapUv:he&&_(y.specularColorMap.channel),specularIntensityMapUv:xe&&_(y.specularIntensityMap.channel),transmissionMapUv:C&&_(y.transmissionMap.channel),thicknessMapUv:te&&_(y.thicknessMap.channel),alphaMapUv:J&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ae||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!X.attributes.uv&&(ke||J),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:U.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&it.getTransfer(y.map.colorSpace)===ct,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tn,flipSided:y.side===kt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ze&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return yt.vertexUv1s=h.has(1),yt.vertexUv2s=h.has(2),yt.vertexUv3s=h.has(3),h.clear(),yt}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(x(S,y),v(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function x(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function v(y,S){c.disableAll(),S.supportsVertexTextures&&c.enable(0),S.instancing&&c.enable(1),S.instancingColor&&c.enable(2),S.instancingMorph&&c.enable(3),S.matcap&&c.enable(4),S.envMap&&c.enable(5),S.normalMapObjectSpace&&c.enable(6),S.normalMapTangentSpace&&c.enable(7),S.clearcoat&&c.enable(8),S.iridescence&&c.enable(9),S.alphaTest&&c.enable(10),S.vertexColors&&c.enable(11),S.vertexAlphas&&c.enable(12),S.vertexUv1s&&c.enable(13),S.vertexUv2s&&c.enable(14),S.vertexUv3s&&c.enable(15),S.vertexTangents&&c.enable(16),S.anisotropy&&c.enable(17),S.alphaHash&&c.enable(18),S.batching&&c.enable(19),S.dispersion&&c.enable(20),S.batchingColor&&c.enable(21),y.push(c.mask),c.disableAll(),S.fog&&c.enable(0),S.useFog&&c.enable(1),S.flatShading&&c.enable(2),S.logarithmicDepthBuffer&&c.enable(3),S.skinning&&c.enable(4),S.morphTargets&&c.enable(5),S.morphNormals&&c.enable(6),S.morphColors&&c.enable(7),S.premultipliedAlpha&&c.enable(8),S.shadowMapEnabled&&c.enable(9),S.doubleSided&&c.enable(10),S.flipSided&&c.enable(11),S.useDepthPacking&&c.enable(12),S.dithering&&c.enable(13),S.transmission&&c.enable(14),S.sheen&&c.enable(15),S.opaque&&c.enable(16),S.pointsUvs&&c.enable(17),S.decodeVideoTexture&&c.enable(18),S.alphaToCoverage&&c.enable(19),y.push(c.mask)}function w(y){const S=g[y.type];let R;if(S){const N=An[S];R=Kp.clone(N.uniforms)}else R=y.uniforms;return R}function D(y,S){let R;for(let N=0,U=p.length;N<U;N++){const H=p[N];if(H.cacheKey===S){R=H,++R.usedTimes;break}}return R===void 0&&(R=new cx(s,S,y,r),p.push(R)),R}function E(y){if(--y.usedTimes===0){const S=p.indexOf(y);p[S]=p[p.length-1],p.pop(),y.destroy()}}function A(y){u.remove(y)}function P(){u.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:D,releaseProgram:E,releaseShaderCache:A,programs:p,dispose:P}}function fx(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,c){s.get(r)[o]=c}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function px(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function vu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function yu(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(a,l,d,g,_,m){let f=s[e];return f===void 0?(f={id:a.id,object:a,geometry:l,material:d,groupOrder:g,renderOrder:a.renderOrder,z:_,group:m},s[e]=f):(f.id=a.id,f.object=a,f.geometry=l,f.material=d,f.groupOrder=g,f.renderOrder=a.renderOrder,f.z=_,f.group=m),e++,f}function c(a,l,d,g,_,m){const f=o(a,l,d,g,_,m);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):t.push(f)}function u(a,l,d,g,_,m){const f=o(a,l,d,g,_,m);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):t.unshift(f)}function h(a,l){t.length>1&&t.sort(a||px),n.length>1&&n.sort(l||vu),i.length>1&&i.sort(l||vu)}function p(){for(let a=e,l=s.length;a<l;a++){const d=s[a];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:u,finish:p,sort:h}}function mx(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new yu,s.set(n,[o])):i>=r.length?(o=new yu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function gx(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Me};break;case"SpotLight":t={position:new I,direction:new I,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function _x(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let xx=0;function vx(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function yx(s){const e=new gx,t=_x(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const i=new I,r=new at,o=new at;function c(h){let p=0,a=0,l=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,f=0,x=0,v=0,w=0,D=0,E=0,A=0;h.sort(vx);for(let y=0,S=h.length;y<S;y++){const R=h[y],N=R.color,U=R.intensity,H=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)p+=N.r*U,a+=N.g*U,l+=N.b*U;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],U);A++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const $=R.shadow,V=t.get(R);V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=X,n.directionalShadowMatrix[d]=R.shadow.matrix,x++}n.directional[d]=q,d++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(N).multiplyScalar(U),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[_]=q;const $=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,$.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=$.matrix,R.castShadow){const V=t.get(R);V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,w++}_++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(N).multiplyScalar(U),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const $=R.shadow,V=t.get(R);V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(U),q.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[f]=q,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=a,n.ambient[2]=l;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==w||P.numSpotMaps!==D||P.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=w+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=w,P.numSpotMaps=D,P.numLightProbes=A,n.version=xx++)}function u(h,p){let a=0,l=0,d=0,g=0,_=0;const m=p.matrixWorldInverse;for(let f=0,x=h.length;f<x;f++){const v=h[f];if(v.isDirectionalLight){const w=n.directional[a];w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),a++}else if(v.isSpotLight){const w=n.spot[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),d++}else if(v.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const w=n.point[l];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(m),l++}else if(v.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:c,setupView:u,state:n}}function Su(s){const e=new yx(s),t=[],n=[];function i(p){h.camera=p,t.length=0,n.length=0}function r(p){t.push(p)}function o(p){n.push(p)}function c(){e.setup(t)}function u(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:h,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o}}function Sx(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let c;return o===void 0?(c=new Su(s),e.set(i,[c])):r>=o.length?(c=new Su(s),o.push(c)):c=o[r],c}function n(){e=new WeakMap}return{get:t,dispose:n}}class Mx extends qi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wx extends qi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
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
}`;function Ax(s,e,t){let n=new Nc;const i=new We,r=new We,o=new ht,c=new Mx({depthPacking:Sp}),u=new wx,h={},p=t.maxTextureSize,a={[Jn]:kt,[kt]:Jn,[Tn]:Tn},l=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:bx,fragmentShader:Ex}),d=l.clone();d.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xh;let f=this.type;this.render=function(E,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=s.getRenderTarget(),S=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),N=s.state;N.setBlending(pi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=f!==Vn&&this.type===Vn,H=f===Vn&&this.type!==Vn;for(let X=0,q=E.length;X<q;X++){const $=E[X],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const de=V.getFrameExtents();if(i.multiply(de),r.copy(V.mapSize),(i.x>p||i.y>p)&&(i.x>p&&(r.x=Math.floor(p/de.x),i.x=r.x*de.x,V.mapSize.x=r.x),i.y>p&&(r.y=Math.floor(p/de.y),i.y=r.y*de.y,V.mapSize.y=r.y)),V.map===null||U===!0||H===!0){const fe=this.type!==Vn?{minFilter:Bt,magFilter:Bt}:{};V.map!==null&&V.map.dispose(),V.map=new ki(i.x,i.y,fe),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const me=V.getViewportCount();for(let fe=0;fe<me;fe++){const Ke=V.getViewport(fe);o.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),N.viewport(o),V.updateMatrices($,fe),n=V.getFrustum(),w(A,P,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===Vn&&x(V,P),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(y,S,R)};function x(E,A){const P=e.update(_);l.defines.VSM_SAMPLES!==E.blurSamples&&(l.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,l.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ki(i.x,i.y)),l.uniforms.shadow_pass.value=E.map.texture,l.uniforms.resolution.value=E.mapSize,l.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,P,l,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,P,d,_,null)}function v(E,A,P,y){let S=null;const R=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?u:c,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=S.uuid,U=A.uuid;let H=h[N];H===void 0&&(H={},h[N]=H);let X=H[U];X===void 0&&(X=S.clone(),H[U]=X,A.addEventListener("dispose",D)),S=X}if(S.visible=A.visible,S.wireframe=A.wireframe,y===Vn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:a[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=P}return S}function w(E,A,P,y,S){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const U=e.update(E),H=E.material;if(Array.isArray(H)){const X=U.groups;for(let q=0,$=X.length;q<$;q++){const V=X[q],de=H[V.materialIndex];if(de&&de.visible){const me=v(E,de,y,S);E.onBeforeShadow(s,E,A,P,U,me,V),s.renderBufferDirect(P,null,U,me,E,V),E.onAfterShadow(s,E,A,P,U,me,V)}}}else if(H.visible){const X=v(E,H,y,S);E.onBeforeShadow(s,E,A,P,U,X,null),s.renderBufferDirect(P,null,U,X,E,null),E.onAfterShadow(s,E,A,P,U,X,null)}}const N=E.children;for(let U=0,H=N.length;U<H;U++)w(N[U],A,P,y,S)}function D(E){E.target.removeEventListener("dispose",D);for(const P in h){const y=h[P],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function Tx(s){function e(){let C=!1;const te=new ht;let W=null;const J=new ht(0,0,0,0);return{setMask:function(ie){W!==ie&&!C&&(s.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){C=ie},setClear:function(ie,Ce,Ze,lt,yt){yt===!0&&(ie*=lt,Ce*=lt,Ze*=lt),te.set(ie,Ce,Ze,lt),J.equals(te)===!1&&(s.clearColor(ie,Ce,Ze,lt),J.copy(te))},reset:function(){C=!1,W=null,J.set(-1,0,0,0)}}}function t(){let C=!1,te=null,W=null,J=null;return{setTest:function(ie){ie?ge(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(ie){te!==ie&&!C&&(s.depthMask(ie),te=ie)},setFunc:function(ie){if(W!==ie){switch(ie){case Jf:s.depthFunc(s.NEVER);break;case $f:s.depthFunc(s.ALWAYS);break;case Kf:s.depthFunc(s.LESS);break;case _o:s.depthFunc(s.LEQUAL);break;case Zf:s.depthFunc(s.EQUAL);break;case jf:s.depthFunc(s.GEQUAL);break;case Qf:s.depthFunc(s.GREATER);break;case ep:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}W=ie}},setLocked:function(ie){C=ie},setClear:function(ie){J!==ie&&(s.clearDepth(ie),J=ie)},reset:function(){C=!1,te=null,W=null,J=null}}}function n(){let C=!1,te=null,W=null,J=null,ie=null,Ce=null,Ze=null,lt=null,yt=null;return{setTest:function(rt){C||(rt?ge(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(rt){te!==rt&&!C&&(s.stencilMask(rt),te=rt)},setFunc:function(rt,yn,Sn){(W!==rt||J!==yn||ie!==Sn)&&(s.stencilFunc(rt,yn,Sn),W=rt,J=yn,ie=Sn)},setOp:function(rt,yn,Sn){(Ce!==rt||Ze!==yn||lt!==Sn)&&(s.stencilOp(rt,yn,Sn),Ce=rt,Ze=yn,lt=Sn)},setLocked:function(rt){C=rt},setClear:function(rt){yt!==rt&&(s.clearStencil(rt),yt=rt)},reset:function(){C=!1,te=null,W=null,J=null,ie=null,Ce=null,Ze=null,lt=null,yt=null}}}const i=new e,r=new t,o=new n,c=new WeakMap,u=new WeakMap;let h={},p={},a=new WeakMap,l=[],d=null,g=!1,_=null,m=null,f=null,x=null,v=null,w=null,D=null,E=new Me(0,0,0),A=0,P=!1,y=null,S=null,R=null,N=null,U=null;const H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,q=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec($)[1]),X=q>=1):$.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=q>=2);let V=null,de={};const me=s.getParameter(s.SCISSOR_BOX),fe=s.getParameter(s.VIEWPORT),Ke=new ht().fromArray(me),et=new ht().fromArray(fe);function Y(C,te,W,J){const ie=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(C,Ce),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<W;Ze++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,ie):s.texImage2D(te+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ie);return Ce}const ee={};ee[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),ee[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ee[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ge(s.DEPTH_TEST),r.setFunc(_o),Ee(!1),Ae(nl),ge(s.CULL_FACE),Be(pi);function ge(C){h[C]!==!0&&(s.enable(C),h[C]=!0)}function ae(C){h[C]!==!1&&(s.disable(C),h[C]=!1)}function Ue(C,te){return p[C]!==te?(s.bindFramebuffer(C,te),p[C]=te,C===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=te),C===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=te),!0):!1}function De(C,te){let W=l,J=!1;if(C){W=a.get(te),W===void 0&&(W=[],a.set(te,W));const ie=C.textures;if(W.length!==ie.length||W[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,Ze=ie.length;Ce<Ze;Ce++)W[Ce]=s.COLOR_ATTACHMENT0+Ce;W.length=ie.length,J=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,J=!0);J&&s.drawBuffers(W)}function ke(C){return d!==C?(s.useProgram(C),d=C,!0):!1}const L={[Oi]:s.FUNC_ADD,[Lf]:s.FUNC_SUBTRACT,[If]:s.FUNC_REVERSE_SUBTRACT};L[Df]=s.MIN,L[Nf]=s.MAX;const Ye={[Uf]:s.ZERO,[Of]:s.ONE,[Ff]:s.SRC_COLOR,[dc]:s.SRC_ALPHA,[Gf]:s.SRC_ALPHA_SATURATE,[Hf]:s.DST_COLOR,[zf]:s.DST_ALPHA,[Bf]:s.ONE_MINUS_SRC_COLOR,[fc]:s.ONE_MINUS_SRC_ALPHA,[Vf]:s.ONE_MINUS_DST_COLOR,[kf]:s.ONE_MINUS_DST_ALPHA,[Wf]:s.CONSTANT_COLOR,[Xf]:s.ONE_MINUS_CONSTANT_COLOR,[qf]:s.CONSTANT_ALPHA,[Yf]:s.ONE_MINUS_CONSTANT_ALPHA};function Be(C,te,W,J,ie,Ce,Ze,lt,yt,rt){if(C===pi){g===!0&&(ae(s.BLEND),g=!1);return}if(g===!1&&(ge(s.BLEND),g=!0),C!==Pf){if(C!==_||rt!==P){if((m!==Oi||v!==Oi)&&(s.blendEquation(s.FUNC_ADD),m=Oi,v=Oi),rt)switch(C){case vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case il:s.blendFunc(s.ONE,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case il:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case sl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case rl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}f=null,x=null,w=null,D=null,E.set(0,0,0),A=0,_=C,P=rt}return}ie=ie||te,Ce=Ce||W,Ze=Ze||J,(te!==m||ie!==v)&&(s.blendEquationSeparate(L[te],L[ie]),m=te,v=ie),(W!==f||J!==x||Ce!==w||Ze!==D)&&(s.blendFuncSeparate(Ye[W],Ye[J],Ye[Ce],Ye[Ze]),f=W,x=J,w=Ce,D=Ze),(lt.equals(E)===!1||yt!==A)&&(s.blendColor(lt.r,lt.g,lt.b,yt),E.copy(lt),A=yt),_=C,P=!1}function st(C,te){C.side===Tn?ae(s.CULL_FACE):ge(s.CULL_FACE);let W=C.side===kt;te&&(W=!W),Ee(W),C.blending===vs&&C.transparent===!1?Be(pi):Be(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),i.setMask(C.colorWrite);const J=C.stencilWrite;o.setTest(J),J&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Oe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ge(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(C){y!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),y=C)}function Ae(C){C!==Tf?(ge(s.CULL_FACE),C!==S&&(C===nl?s.cullFace(s.BACK):C===Rf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),S=C}function He(C){C!==R&&(X&&s.lineWidth(C),R=C)}function Oe(C,te,W){C?(ge(s.POLYGON_OFFSET_FILL),(N!==te||U!==W)&&(s.polygonOffset(te,W),N=te,U=W)):ae(s.POLYGON_OFFSET_FILL)}function ft(C){C?ge(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function T(C){C===void 0&&(C=s.TEXTURE0+H-1),V!==C&&(s.activeTexture(C),V=C)}function M(C,te,W){W===void 0&&(V===null?W=s.TEXTURE0+H-1:W=V);let J=de[W];J===void 0&&(J={type:void 0,texture:void 0},de[W]=J),(J.type!==C||J.texture!==te)&&(V!==W&&(s.activeTexture(W),V=W),s.bindTexture(C,te||ee[C]),J.type=C,J.texture=te)}function k(){const C=de[V];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ne(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Xe(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(C){Ke.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Ke.copy(C))}function G(C){et.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),et.copy(C))}function j(C,te){let W=u.get(te);W===void 0&&(W=new WeakMap,u.set(te,W));let J=W.get(C);J===void 0&&(J=s.getUniformBlockIndex(te,C.name),W.set(C,J))}function he(C,te){const J=u.get(te).get(C);c.get(te)!==J&&(s.uniformBlockBinding(te,J,C.__bindingPointIndex),c.set(te,J))}function xe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},V=null,de={},p={},a=new WeakMap,l=[],d=null,g=!1,_=null,m=null,f=null,x=null,v=null,w=null,D=null,E=new Me(0,0,0),A=0,P=!1,y=null,S=null,R=null,N=null,U=null,Ke.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:ge,disable:ae,bindFramebuffer:Ue,drawBuffers:De,useProgram:ke,setBlending:Be,setMaterial:st,setFlipSided:Ee,setCullFace:Ae,setLineWidth:He,setPolygonOffset:Oe,setScissorTest:ft,activeTexture:T,bindTexture:M,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:ve,texImage3D:Xe,updateUBOMapping:j,uniformBlockBinding:he,texStorage2D:Fe,texStorage3D:ne,texSubImage2D:Q,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:ce,scissor:Pe,viewport:G,reset:xe}}function Rx(s,e,t,n,i,r,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new We,p=new WeakMap;let a;const l=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,M){return d?new OffscreenCanvas(T,M):wo("canvas")}function _(T,M,k){let K=1;const Z=ft(T);if((Z.width>k||Z.height>k)&&(K=k/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Q=Math.floor(K*Z.width),Se=Math.floor(K*Z.height);a===void 0&&(a=g(Q,Se));const ue=M?g(Q,Se):a;return ue.width=Q,ue.height=Se,ue.getContext("2d").drawImage(T,0,0,Q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Q+"x"+Se+")."),ue}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps&&T.minFilter!==Bt&&T.minFilter!==pn}function f(T){s.generateMipmap(T)}function x(T,M,k,K,Z=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=M;if(M===s.RED&&(k===s.FLOAT&&(Q=s.R32F),k===s.HALF_FLOAT&&(Q=s.R16F),k===s.UNSIGNED_BYTE&&(Q=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.R8UI),k===s.UNSIGNED_SHORT&&(Q=s.R16UI),k===s.UNSIGNED_INT&&(Q=s.R32UI),k===s.BYTE&&(Q=s.R8I),k===s.SHORT&&(Q=s.R16I),k===s.INT&&(Q=s.R32I)),M===s.RG&&(k===s.FLOAT&&(Q=s.RG32F),k===s.HALF_FLOAT&&(Q=s.RG16F),k===s.UNSIGNED_BYTE&&(Q=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Q=s.RG8UI),k===s.UNSIGNED_SHORT&&(Q=s.RG16UI),k===s.UNSIGNED_INT&&(Q=s.RG32UI),k===s.BYTE&&(Q=s.RG8I),k===s.SHORT&&(Q=s.RG16I),k===s.INT&&(Q=s.RG32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),M===s.RGBA){const Se=Z?vo:it.getTransfer(K);k===s.FLOAT&&(Q=s.RGBA32F),k===s.HALF_FLOAT&&(Q=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Q=Se===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(T,M){let k;return T?M===null||M===Ts||M===Rs?k=s.DEPTH24_STENCIL8:M===Gn?k=s.DEPTH32F_STENCIL8:M===xo&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ts||M===Rs?k=s.DEPTH_COMPONENT24:M===Gn?k=s.DEPTH_COMPONENT32F:M===xo&&(k=s.DEPTH_COMPONENT16),k}function w(T,M){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bt&&T.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function D(T){const M=T.target;M.removeEventListener("dispose",D),A(M),M.isVideoTexture&&p.delete(M)}function E(T){const M=T.target;M.removeEventListener("dispose",E),y(M)}function A(T){const M=n.get(T);if(M.__webglInit===void 0)return;const k=T.source,K=l.get(k);if(K){const Z=K[M.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(T),Object.keys(K).length===0&&l.delete(k)}n.remove(T)}function P(T){const M=n.get(T);s.deleteTexture(M.__webglTexture);const k=T.source,K=l.get(k);delete K[M.__cacheKey],o.memory.textures--}function y(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let Z=0;Z<M.__webglFramebuffer[K].length;Z++)s.deleteFramebuffer(M.__webglFramebuffer[K][Z]);else s.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)s.deleteFramebuffer(M.__webglFramebuffer[K]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=T.textures;for(let K=0,Z=k.length;K<Z;K++){const Q=n.get(k[K]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[K])}n.remove(T)}let S=0;function R(){S=0}function N(){const T=S;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),S+=1,T}function U(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function H(T,M){const k=n.get(T);if(T.isVideoTexture&&He(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(k,T,M);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function X(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function q(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){et(k,T,M);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function $(T,M){const k=n.get(T);if(T.version>0&&k.__version!==T.version){Y(k,T,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const V={[gc]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[_c]:s.MIRRORED_REPEAT},de={[Bt]:s.NEAREST,[up]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[ea]:s.LINEAR_MIPMAP_NEAREST,[zi]:s.LINEAR_MIPMAP_LINEAR},me={[wp]:s.NEVER,[Cp]:s.ALWAYS,[bp]:s.LESS,[td]:s.LEQUAL,[Ep]:s.EQUAL,[Rp]:s.GEQUAL,[Ap]:s.GREATER,[Tp]:s.NOTEQUAL};function fe(T,M){if(M.type===Gn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===pn||M.magFilter===ea||M.magFilter===mr||M.magFilter===zi||M.minFilter===pn||M.minFilter===ea||M.minFilter===mr||M.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,V[M.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,V[M.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,V[M.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,de[M.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,de[M.minFilter]),M.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Bt||M.minFilter!==mr&&M.minFilter!==zi||M.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ke(T,M){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",D));const K=M.source;let Z=l.get(K);Z===void 0&&(Z={},l.set(K,Z));const Q=U(M);if(Q!==T.__cacheKey){Z[Q]===void 0&&(Z[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Z[Q].usedTimes++;const Se=Z[T.__cacheKey];Se!==void 0&&(Z[T.__cacheKey].usedTimes--,Se.usedTimes===0&&P(M)),T.__cacheKey=Q,T.__webglTexture=Z[Q].texture}return k}function et(T,M,k){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);const Z=Ke(T,M),Q=M.source;t.bindTexture(K,T.__webglTexture,s.TEXTURE0+k);const Se=n.get(Q);if(Q.version!==Se.__version||Z===!0){t.activeTexture(s.TEXTURE0+k);const ue=it.getPrimaries(it.workingColorSpace),ce=M.colorSpace===ui?null:it.getPrimaries(M.colorSpace),Fe=M.colorSpace===ui||ue===ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ne=_(M.image,!1,i.maxTextureSize);ne=Oe(M,ne);const ve=r.convert(M.format,M.colorSpace),Xe=r.convert(M.type);let Pe=x(M.internalFormat,ve,Xe,M.colorSpace,M.isVideoTexture);fe(K,M);let G;const j=M.mipmaps,he=M.isVideoTexture!==!0,xe=Se.__version===void 0||Z===!0,C=Q.dataReady,te=w(M,ne);if(M.isDepthTexture)Pe=v(M.format===Cs,M.type),xe&&(he?t.texStorage2D(s.TEXTURE_2D,1,Pe,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ve,Xe,null));else if(M.isDataTexture)if(j.length>0){he&&xe&&t.texStorage2D(s.TEXTURE_2D,te,Pe,j[0].width,j[0].height);for(let W=0,J=j.length;W<J;W++)G=j[W],he?C&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,G.width,G.height,ve,Xe,G.data):t.texImage2D(s.TEXTURE_2D,W,Pe,G.width,G.height,0,ve,Xe,G.data);M.generateMipmaps=!1}else he?(xe&&t.texStorage2D(s.TEXTURE_2D,te,Pe,ne.width,ne.height),C&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,ve,Xe,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,ne.width,ne.height,0,ve,Xe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){he&&xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,te,Pe,j[0].width,j[0].height,ne.depth);for(let W=0,J=j.length;W<J;W++)if(G=j[W],M.format!==Cn)if(ve!==null)if(he){if(C)if(M.layerUpdates.size>0){for(const ie of M.layerUpdates){const Ce=G.width*G.height;t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ie,G.width,G.height,1,ve,G.data.slice(Ce*ie,Ce*(ie+1)),0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,G.width,G.height,ne.depth,ve,G.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Pe,G.width,G.height,ne.depth,0,G.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?C&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,G.width,G.height,ne.depth,ve,Xe,G.data):t.texImage3D(s.TEXTURE_2D_ARRAY,W,Pe,G.width,G.height,ne.depth,0,ve,Xe,G.data)}else{he&&xe&&t.texStorage2D(s.TEXTURE_2D,te,Pe,j[0].width,j[0].height);for(let W=0,J=j.length;W<J;W++)G=j[W],M.format!==Cn?ve!==null?he?C&&t.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,G.width,G.height,ve,G.data):t.compressedTexImage2D(s.TEXTURE_2D,W,Pe,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?C&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,G.width,G.height,ve,Xe,G.data):t.texImage2D(s.TEXTURE_2D,W,Pe,G.width,G.height,0,ve,Xe,G.data)}else if(M.isDataArrayTexture)if(he){if(xe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,te,Pe,ne.width,ne.height,ne.depth),C)if(M.layerUpdates.size>0){let W;switch(Xe){case s.UNSIGNED_BYTE:switch(ve){case s.ALPHA:W=1;break;case s.LUMINANCE:W=1;break;case s.LUMINANCE_ALPHA:W=2;break;case s.RGB:W=3;break;case s.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${ve}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}const J=ne.width*ne.height*W;for(const ie of M.layerUpdates)t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ie,ne.width,ne.height,1,ve,Xe,ne.data.slice(J*ie,J*(ie+1)));M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ve,Xe,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ne.width,ne.height,ne.depth,0,ve,Xe,ne.data);else if(M.isData3DTexture)he?(xe&&t.texStorage3D(s.TEXTURE_3D,te,Pe,ne.width,ne.height,ne.depth),C&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ve,Xe,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,ne.width,ne.height,ne.depth,0,ve,Xe,ne.data);else if(M.isFramebufferTexture){if(xe)if(he)t.texStorage2D(s.TEXTURE_2D,te,Pe,ne.width,ne.height);else{let W=ne.width,J=ne.height;for(let ie=0;ie<te;ie++)t.texImage2D(s.TEXTURE_2D,ie,Pe,W,J,0,ve,Xe,null),W>>=1,J>>=1}}else if(j.length>0){if(he&&xe){const W=ft(j[0]);t.texStorage2D(s.TEXTURE_2D,te,Pe,W.width,W.height)}for(let W=0,J=j.length;W<J;W++)G=j[W],he?C&&t.texSubImage2D(s.TEXTURE_2D,W,0,0,ve,Xe,G):t.texImage2D(s.TEXTURE_2D,W,Pe,ve,Xe,G);M.generateMipmaps=!1}else if(he){if(xe){const W=ft(ne);t.texStorage2D(s.TEXTURE_2D,te,Pe,W.width,W.height)}C&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Xe,ne)}else t.texImage2D(s.TEXTURE_2D,0,Pe,ve,Xe,ne);m(M)&&f(K),Se.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Y(T,M,k){if(M.image.length!==6)return;const K=Ke(T,M),Z=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+k);const Q=n.get(Z);if(Z.version!==Q.__version||K===!0){t.activeTexture(s.TEXTURE0+k);const Se=it.getPrimaries(it.workingColorSpace),ue=M.colorSpace===ui?null:it.getPrimaries(M.colorSpace),ce=M.colorSpace===ui||Se===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Fe&&!ne?ve[J]=_(M.image[J],!0,i.maxCubemapSize):ve[J]=ne?M.image[J].image:M.image[J],ve[J]=Oe(M,ve[J]);const Xe=ve[0],Pe=r.convert(M.format,M.colorSpace),G=r.convert(M.type),j=x(M.internalFormat,Pe,G,M.colorSpace),he=M.isVideoTexture!==!0,xe=Q.__version===void 0||K===!0,C=Z.dataReady;let te=w(M,Xe);fe(s.TEXTURE_CUBE_MAP,M);let W;if(Fe){he&&xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,te,j,Xe.width,Xe.height);for(let J=0;J<6;J++){W=ve[J].mipmaps;for(let ie=0;ie<W.length;ie++){const Ce=W[ie];M.format!==Cn?Pe!==null?he?C&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie,j,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?C&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie,0,0,Ce.width,Ce.height,Pe,G,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie,j,Ce.width,Ce.height,0,Pe,G,Ce.data)}}}else{if(W=M.mipmaps,he&&xe){W.length>0&&te++;const J=ft(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,te,j,J.width,J.height)}for(let J=0;J<6;J++)if(ne){he?C&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Pe,G,ve[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,j,ve[J].width,ve[J].height,0,Pe,G,ve[J].data);for(let ie=0;ie<W.length;ie++){const Ze=W[ie].image[J].image;he?C&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie+1,0,0,Ze.width,Ze.height,Pe,G,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie+1,j,Ze.width,Ze.height,0,Pe,G,Ze.data)}}else{he?C&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,G,ve[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,j,Pe,G,ve[J]);for(let ie=0;ie<W.length;ie++){const Ce=W[ie];he?C&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie+1,0,0,Pe,G,Ce.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie+1,j,Pe,G,Ce.image[J])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),Q.__version=Z.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ee(T,M,k,K,Z,Q){const Se=r.convert(k.format,k.colorSpace),ue=r.convert(k.type),ce=x(k.internalFormat,Se,ue,k.colorSpace);if(!n.get(M).__hasExternalTextures){const ne=Math.max(1,M.width>>Q),ve=Math.max(1,M.height>>Q);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Q,ce,ne,ve,M.depth,0,Se,ue,null):t.texImage2D(Z,Q,ce,ne,ve,0,Se,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),Ae(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,n.get(k).__webglTexture,0,Ee(M)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,n.get(k).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ge(T,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,T),M.depthBuffer){const K=M.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Q=v(M.stencilBuffer,Z),Se=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=Ee(M);Ae(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ue,Q,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ue,Q,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Q,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,T)}else{const K=M.textures;for(let Z=0;Z<K.length;Z++){const Q=K[Z],Se=r.convert(Q.format,Q.colorSpace),ue=r.convert(Q.type),ce=x(Q.internalFormat,Se,ue,Q.colorSpace),Fe=Ee(M);k&&Ae(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,ce,M.width,M.height):Ae(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Fe,ce,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ae(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,Z=Ee(M);if(M.depthTexture.format===ys)Ae(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===Cs)Ae(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ue(T){const M=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ae(M.__webglFramebuffer,T)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=s.createRenderbuffer(),ge(M.__webglDepthbuffer[K],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),ge(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(T,M,k){const K=n.get(T);M!==void 0&&ee(K.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ue(T)}function ke(T){const M=T.texture,k=n.get(T),K=n.get(M);T.addEventListener("dispose",E);const Z=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Se=Z.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ue]=[];for(let ce=0;ce<M.mipmaps.length;ce++)k.__webglFramebuffer[ue][ce]=s.createFramebuffer()}else k.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)k.__webglFramebuffer[ue]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Se)for(let ue=0,ce=Z.length;ue<ce;ue++){const Fe=n.get(Z[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),o.memory.textures++)}if(T.samples>0&&Ae(T)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const ce=Z[ue];k.__webglColorRenderbuffer[ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ue]);const Fe=r.convert(ce.format,ce.colorSpace),ne=r.convert(ce.type),ve=x(ce.internalFormat,Fe,ne,ce.colorSpace,T.isXRRenderTarget===!0),Xe=Ee(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,ve,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,k.__webglColorRenderbuffer[ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ge(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),fe(s.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)ee(k.__webglFramebuffer[ue][ce],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ce);else ee(k.__webglFramebuffer[ue],T,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(M)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,ce=Z.length;ue<ce;ue++){const Fe=Z[ue],ne=n.get(Fe);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),fe(s.TEXTURE_2D,Fe),ee(k.__webglFramebuffer,T,Fe,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,0),m(Fe)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ue=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ue,K.__webglTexture),fe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let ce=0;ce<M.mipmaps.length;ce++)ee(k.__webglFramebuffer[ce],T,M,s.COLOR_ATTACHMENT0,ue,ce);else ee(k.__webglFramebuffer,T,M,s.COLOR_ATTACHMENT0,ue,0);m(M)&&f(ue),t.unbindTexture()}T.depthBuffer&&Ue(T)}function L(T){const M=T.textures;for(let k=0,K=M.length;k<K;k++){const Z=M[k];if(m(Z)){const Q=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Se=n.get(Z).__webglTexture;t.bindTexture(Q,Se),f(Q),t.unbindTexture()}}}const Ye=[],Be=[];function st(T){if(T.samples>0){if(Ae(T)===!1){const M=T.textures,k=T.width,K=T.height;let Z=s.COLOR_BUFFER_BIT;const Q=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(T),ue=M.length>1;if(ue)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ce]);const Fe=n.get(M[ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,Z,s.NEAREST),u===!0&&(Ye.length=0,Be.length=0,Ye.push(s.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ye.push(Q),Be.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Be)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ue)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.RENDERBUFFER,Se.__webglColorRenderbuffer[ce]);const Fe=n.get(M[ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ce,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&u){const M=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Ee(T){return Math.min(i.maxSamples,T.samples)}function Ae(T){const M=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function He(T){const M=o.render.frame;p.get(T)!==M&&(p.set(T,M),T.update())}function Oe(T,M){const k=T.colorSpace,K=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Si&&k!==ui&&(it.getTransfer(k)===ct?(K!==Cn||Z!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=R,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=$,this.rebindTextures=De,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=Ae}function Cx(s,e){function t(n,i=ui){let r;const o=it.getTransfer(i);if(n===_i)return s.UNSIGNED_BYTE;if(n===Jh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===$h)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hp)return s.BYTE;if(n===dp)return s.SHORT;if(n===xo)return s.UNSIGNED_SHORT;if(n===Yh)return s.INT;if(n===Ts)return s.UNSIGNED_INT;if(n===Gn)return s.FLOAT;if(n===Lo)return s.HALF_FLOAT;if(n===pp)return s.ALPHA;if(n===mp)return s.RGB;if(n===Cn)return s.RGBA;if(n===gp)return s.LUMINANCE;if(n===_p)return s.LUMINANCE_ALPHA;if(n===ys)return s.DEPTH_COMPONENT;if(n===Cs)return s.DEPTH_STENCIL;if(n===Kh)return s.RED;if(n===Zh)return s.RED_INTEGER;if(n===xp)return s.RG;if(n===jh)return s.RG_INTEGER;if(n===Qh)return s.RGBA_INTEGER;if(n===ta||n===na||n===ia||n===sa)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===al||n===cl||n===ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===hl||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===hl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===vl||n===yl||n===Sl||n===Ml||n===wl||n===bl||n===El||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ra||n===Tl||n===Rl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ra)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vp||n===Cl||n===Pl||n===Ll)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Px extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lx={type:"move"};class Ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(h,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const p=h.joints["index-finger-tip"],a=h.joints["thumb-tip"],l=p.position.distanceTo(a.position),d=.02,g=.005;h.inputState.pinching&&l>d+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&l<=d-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(c.matrix.fromArray(i.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,i.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(i.linearVelocity)):c.hasLinearVelocity=!1,i.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(i.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Lx)))}return c!==null&&(c.visible=i!==null),u!==null&&(u.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ix=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Dx=`
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

}`;class Nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Ct,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:Ix,fragmentShader:Dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Ux extends Ls{constructor(e,t){super();const n=this;let i=null,r=1,o=null,c="local-floor",u=1,h=null,p=null,a=null,l=null,d=null,g=null;const _=new Nx,m=t.getContextAttributes();let f=null,x=null;const v=[],w=[],D=new We;let E=null;const A=new Ft;A.layers.enable(1),A.viewport=new ht;const P=new Ft;P.layers.enable(2),P.viewport=new ht;const y=[A,P],S=new Px;S.layers.enable(1),S.layers.enable(2);let R=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ee=v[Y];return ee===void 0&&(ee=new Ia,v[Y]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Y){let ee=v[Y];return ee===void 0&&(ee=new Ia,v[Y]=ee),ee.getGripSpace()},this.getHand=function(Y){let ee=v[Y];return ee===void 0&&(ee=new Ia,v[Y]=ee),ee.getHandSpace()};function U(Y){const ee=w.indexOf(Y.inputSource);if(ee===-1)return;const ge=v[ee];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,h||o),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<v.length;Y++){const ee=w[Y];ee!==null&&(w[Y]=null,v[Y].disconnect(ee))}R=null,N=null,_.reset(),e.setRenderTarget(f),d=null,l=null,a=null,i=null,x=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){c=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return l!==null?l:d},this.getBinding=function(){return a},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",H),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ki(d.framebufferWidth,d.framebufferHeight,{format:Cn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ge=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Cs:ys,ge=m.stencil?Rs:Ts);const Ue={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};a=new XRWebGLBinding(i,t),l=a.createProjectionLayer(Ue),i.updateRenderState({layers:[l]}),e.setPixelRatio(1),e.setSize(l.textureWidth,l.textureHeight,!1),x=new ki(l.textureWidth,l.textureHeight,{format:Cn,type:_i,depthTexture:new gd(l.textureWidth,l.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:l.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await i.requestReferenceSpace(c),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(Y){for(let ee=0;ee<Y.removed.length;ee++){const ge=Y.removed[ee],ae=w.indexOf(ge);ae>=0&&(w[ae]=null,v[ae].disconnect(ge))}for(let ee=0;ee<Y.added.length;ee++){const ge=Y.added[ee];let ae=w.indexOf(ge);if(ae===-1){for(let De=0;De<v.length;De++)if(De>=w.length){w.push(ge),ae=De;break}else if(w[De]===null){w[De]=ge,ae=De;break}if(ae===-1)break}const Ue=v[ae];Ue&&Ue.connect(ge)}}const q=new I,$=new I;function V(Y,ee,ge){q.setFromMatrixPosition(ee.matrixWorld),$.setFromMatrixPosition(ge.matrixWorld);const ae=q.distanceTo($),Ue=ee.projectionMatrix.elements,De=ge.projectionMatrix.elements,ke=Ue[14]/(Ue[10]-1),L=Ue[14]/(Ue[10]+1),Ye=(Ue[9]+1)/Ue[5],Be=(Ue[9]-1)/Ue[5],st=(Ue[8]-1)/Ue[0],Ee=(De[8]+1)/De[0],Ae=ke*st,He=ke*Ee,Oe=ae/(-st+Ee),ft=Oe*-st;ee.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ft),Y.translateZ(Oe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const T=ke+Oe,M=L+Oe,k=Ae-ft,K=He+(ae-ft),Z=Ye*L/M*T,Q=Be*L/M*T;Y.projectionMatrix.makePerspective(k,K,Z,Q,T,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function de(Y,ee){ee===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ee.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),S.near=P.near=A.near=Y.near,S.far=P.far=A.far=Y.far,(R!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,N=S.far,A.near=R,A.far=N,P.near=R,P.far=N,A.updateProjectionMatrix(),P.updateProjectionMatrix(),Y.updateProjectionMatrix());const ee=Y.parent,ge=S.cameras;de(S,ee);for(let ae=0;ae<ge.length;ae++)de(ge[ae],ee);ge.length===2?V(S,A,P):S.projectionMatrix.copy(A.projectionMatrix),me(Y,S,ee)};function me(Y,ee,ge){ge===null?Y.matrix.copy(ee.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ee.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ee.projectionMatrix),Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(l===null&&d===null))return u},this.setFoveation=function(Y){u=Y,l!==null&&(l.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let fe=null;function Ke(Y,ee){if(p=ee.getViewerPose(h||o),g=ee,p!==null){const ge=p.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ae=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,ae=!0);for(let De=0;De<ge.length;De++){const ke=ge[De];let L=null;if(d!==null)L=d.getViewport(ke);else{const Be=a.getViewSubImage(l,ke);L=Be.viewport,De===0&&(e.setRenderTargetTextures(x,Be.colorTexture,l.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(x))}let Ye=y[De];Ye===void 0&&(Ye=new Ft,Ye.layers.enable(De),Ye.viewport=new ht,y[De]=Ye),Ye.matrix.fromArray(ke.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ke.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(L.x,L.y,L.width,L.height),De===0&&(S.matrix.copy(Ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ae===!0&&S.cameras.push(Ye)}const Ue=i.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const De=a.getDepthInformation(ge[0]);De&&De.isValid&&De.texture&&_.init(e,De,i.renderState)}}for(let ge=0;ge<v.length;ge++){const ae=w[ge],Ue=v[ge];ae!==null&&Ue!==void 0&&Ue.update(ae,ee,h||o)}fe&&fe(Y,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const et=new pd;et.setAnimationLoop(Ke),this.setAnimationLoop=function(Y){fe=Y},this.dispose=function(){}}}const Pi=new an,Ox=new at;function Fx(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,x,v,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),a(m,f)):f.isMeshPhongMaterial?(r(m,f),p(m,f)):f.isMeshStandardMaterial?(r(m,f),l(m,f),f.isMeshPhysicalMaterial&&d(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&c(m,f)):f.isPointsMaterial?u(m,f,x,v):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const x=e.get(f),v=x.envMap,w=x.envMapRotation;v&&(m.envMap.value=v,Pi.copy(w),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Pi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function c(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function u(m,f,x,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function p(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function a(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function l(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const x=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bx(s,e,t,n){let i={},r={},o=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function u(x,v){const w=v.program;n.uniformBlockBinding(x,w)}function h(x,v){let w=i[x.id];w===void 0&&(g(x),w=p(x),i[x.id]=w,x.addEventListener("dispose",m));const D=v.program;n.updateUBOMapping(x,D);const E=e.render.frame;r[x.id]!==E&&(l(x),r[x.id]=E)}function p(x){const v=a();x.__bindingPointIndex=v;const w=s.createBuffer(),D=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,D,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,w),w}function a(){for(let x=0;x<c;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(x){const v=i[x.id],w=x.uniforms,D=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let E=0,A=w.length;E<A;E++){const P=Array.isArray(w[E])?w[E]:[w[E]];for(let y=0,S=P.length;y<S;y++){const R=P[y];if(d(R,E,y,D)===!0){const N=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let X=0;X<U.length;X++){const q=U[X],$=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,N+H,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,H),H+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(x,v,w,D){const E=x.value,A=v+"_"+w;if(D[A]===void 0)return typeof E=="number"||typeof E=="boolean"?D[A]=E:D[A]=E.clone(),!0;{const P=D[A];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return D[A]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(x){const v=x.uniforms;let w=0;const D=16;for(let A=0,P=v.length;A<P;A++){const y=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,R=y.length;S<R;S++){const N=y[S],U=Array.isArray(N.value)?N.value:[N.value];for(let H=0,X=U.length;H<X;H++){const q=U[H],$=_(q),V=w%D;V!==0&&D-V<$.boundary&&(w+=D-V),N.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=$.storage}}}const E=w%D;return E>0&&(w+=D-E),x.__size=w,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:u,update:h,dispose:f}}class zx{constructor(e={}){const{canvas:t=Lp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:a=!1}=e;this.isWebGLRenderer=!0;let l;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=n.getContextAttributes().alpha}else l=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=mi,this.toneMappingExposure=1;const v=this;let w=!1,D=0,E=0,A=null,P=-1,y=null;const S=new ht,R=new ht;let N=null;const U=new Me(0);let H=0,X=t.width,q=t.height,$=1,V=null,de=null;const me=new ht(0,0,X,q),fe=new ht(0,0,X,q);let Ke=!1;const et=new Nc;let Y=!1,ee=!1;const ge=new at,ae=new I,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function ke(){return A===null?$:1}let L=n;function Ye(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:i,stencil:r,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:a};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",W,!1),t.addEventListener("webglcontextcreationerror",J,!1),L===null){const O="webgl2";if(L=Ye(O,b),L===null)throw Ye(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Be,st,Ee,Ae,He,Oe,ft,T,M,k,K,Z,Q,Se,ue,ce,Fe,ne,ve,Xe,Pe,G,j,he;function xe(){Be=new Y_(L),Be.init(),G=new Cx(L,Be),st=new H_(L,Be,e,G),Ee=new Tx(L),Ae=new K_(L),He=new fx,Oe=new Rx(L,Be,Ee,He,st,G,Ae),ft=new G_(v),T=new q_(v),M=new im(L),j=new z_(L,M),k=new J_(L,M,Ae,j),K=new j_(L,k,M,Ae),ve=new Z_(L,st,Oe),ce=new V_(He),Z=new dx(v,ft,T,Be,st,j,ce),Q=new Fx(v,He),Se=new mx,ue=new Sx(Be),ne=new B_(v,ft,T,Ee,K,l,u),Fe=new Ax(v,K,st),he=new Bx(L,Ae,st,Ee),Xe=new k_(L,Be,Ae),Pe=new $_(L,Be,Ae),Ae.programs=Z.programs,v.capabilities=st,v.extensions=Be,v.properties=He,v.renderLists=Se,v.shadowMap=Fe,v.state=Ee,v.info=Ae}xe();const C=new Ux(v,L);this.xr=C,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(X,q,!1))},this.getSize=function(b){return b.set(X,q)},this.setSize=function(b,O,B=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,q=O,t.width=Math.floor(b*$),t.height=Math.floor(O*$),B===!0&&(t.style.width=b+"px",t.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(X*$,q*$).floor()},this.setDrawingBufferSize=function(b,O,B){X=b,q=O,$=B,t.width=Math.floor(b*B),t.height=Math.floor(O*B),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,O,B,z){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,O,B,z),Ee.viewport(S.copy(me).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(fe)},this.setScissor=function(b,O,B,z){b.isVector4?fe.set(b.x,b.y,b.z,b.w):fe.set(b,O,B,z),Ee.scissor(R.copy(fe).multiplyScalar($).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(b){Ee.setScissorTest(Ke=b)},this.setOpaqueSort=function(b){V=b},this.setTransparentSort=function(b){de=b},this.getClearColor=function(b){return b.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(b=!0,O=!0,B=!0){let z=0;if(b){let F=!1;if(A!==null){const re=A.texture.format;F=re===Qh||re===jh||re===Zh}if(F){const re=A.texture.type,pe=re===_i||re===Ts||re===xo||re===Rs||re===Jh||re===$h,_e=ne.getClearColor(),ye=ne.getClearAlpha(),Le=_e.r,Ie=_e.g,Te=_e.b;pe?(d[0]=Le,d[1]=Ie,d[2]=Te,d[3]=ye,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=Le,g[1]=Ie,g[2]=Te,g[3]=ye,L.clearBufferiv(L.COLOR,0,g))}else z|=L.COLOR_BUFFER_BIT}O&&(z|=L.DEPTH_BUFFER_BIT),B&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",W,!1),t.removeEventListener("webglcontextcreationerror",J,!1),Se.dispose(),ue.dispose(),He.dispose(),ft.dispose(),T.dispose(),K.dispose(),j.dispose(),he.dispose(),Z.dispose(),C.dispose(),C.removeEventListener("sessionstart",yn),C.removeEventListener("sessionend",Sn),wi.stop()};function te(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=Ae.autoReset,O=Fe.enabled,B=Fe.autoUpdate,z=Fe.needsUpdate,F=Fe.type;xe(),Ae.autoReset=b,Fe.enabled=O,Fe.autoUpdate=B,Fe.needsUpdate=z,Fe.type=F}function J(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ie(b){const O=b.target;O.removeEventListener("dispose",ie),Ce(O)}function Ce(b){Ze(b),He.remove(b)}function Ze(b){const O=He.get(b).programs;O!==void 0&&(O.forEach(function(B){Z.releaseProgram(B)}),b.isShaderMaterial&&Z.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,B,z,F,re){O===null&&(O=Ue);const pe=F.isMesh&&F.matrixWorld.determinant()<0,_e=Sf(b,O,B,z,F);Ee.setMaterial(z,pe);let ye=B.index,Le=1;if(z.wireframe===!0){if(ye=k.getWireframeAttribute(B),ye===void 0)return;Le=2}const Ie=B.drawRange,Te=B.attributes.position;let tt=Ie.start*Le,pt=(Ie.start+Ie.count)*Le;re!==null&&(tt=Math.max(tt,re.start*Le),pt=Math.min(pt,(re.start+re.count)*Le)),ye!==null?(tt=Math.max(tt,0),pt=Math.min(pt,ye.count)):Te!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,Te.count));const mt=pt-tt;if(mt<0||mt===1/0)return;j.setup(F,z,_e,B,ye);let Vt,nt=Xe;if(ye!==null&&(Vt=M.get(ye),nt=Pe,nt.setIndex(Vt)),F.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*ke()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(F.isLine){let we=z.linewidth;we===void 0&&(we=1),Ee.setLineWidth(we*ke()),F.isLineSegments?nt.setMode(L.LINES):F.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else F.isPoints?nt.setMode(L.POINTS):F.isSprite&&nt.setMode(L.TRIANGLES);if(F.isBatchedMesh)F._multiDrawInstances!==null?nt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances):nt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)nt.renderInstances(tt,mt,F.count);else if(B.isInstancedBufferGeometry){const we=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Pt=Math.min(B.instanceCount,we);nt.renderInstances(tt,mt,Pt)}else nt.render(tt,mt)};function lt(b,O,B){b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=kt,b.needsUpdate=!0,fr(b,O,B),b.side=Jn,b.needsUpdate=!0,fr(b,O,B),b.side=Tn):fr(b,O,B)}this.compile=function(b,O,B=null){B===null&&(B=b),m=ue.get(B),m.init(O),x.push(m),B.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),b!==B&&b.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const z=new Set;return b.traverse(function(F){const re=F.material;if(re)if(Array.isArray(re))for(let pe=0;pe<re.length;pe++){const _e=re[pe];lt(_e,B,F),z.add(_e)}else lt(re,B,F),z.add(re)}),x.pop(),m=null,z},this.compileAsync=function(b,O,B=null){const z=this.compile(b,O,B);return new Promise(F=>{function re(){if(z.forEach(function(pe){He.get(pe).currentProgram.isReady()&&z.delete(pe)}),z.size===0){F(b);return}setTimeout(re,10)}Be.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let yt=null;function rt(b){yt&&yt(b)}function yn(){wi.stop()}function Sn(){wi.start()}const wi=new pd;wi.setAnimationLoop(rt),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(b){yt=b,C.setAnimationLoop(b),b===null?wi.stop():wi.start()},C.addEventListener("sessionstart",yn),C.addEventListener("sessionend",Sn),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(O),O=C.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,A),m=ue.get(b,x.length),m.init(O),x.push(m),ge.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),et.setFromProjectionMatrix(ge),ee=this.localClippingEnabled,Y=ce.init(this.clippingPlanes,ee),_=Se.get(b,f.length),_.init(),f.push(_),C.enabled===!0&&C.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Ko(re,O,-1/0,v.sortObjects)}Ko(b,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(V,de),De=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,De&&ne.addToRenderList(_,b),this.info.render.frame++,Y===!0&&ce.beginShadows();const B=m.state.shadowsArray;Fe.render(B,b,O),Y===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=_.opaque,F=_.transmissive;if(m.setupLights(),O.isArrayCamera){const re=O.cameras;if(F.length>0)for(let pe=0,_e=re.length;pe<_e;pe++){const ye=re[pe];Zc(z,F,b,ye)}De&&ne.render(b);for(let pe=0,_e=re.length;pe<_e;pe++){const ye=re[pe];Kc(_,b,ye,ye.viewport)}}else F.length>0&&Zc(z,F,b,O),De&&ne.render(b),Kc(_,b,O);A!==null&&(Oe.updateMultisampleRenderTarget(A),Oe.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(v,b,O),j.resetDefaultState(),P=-1,y=null,x.pop(),x.length>0?(m=x[x.length-1],Y===!0&&ce.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function Ko(b,O,B,z){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){z&&ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ge);const pe=K.update(b),_e=b.material;_e.visible&&_.push(b,pe,_e,B,ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const pe=K.update(b),_e=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ae.copy(b.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ae.copy(pe.boundingSphere.center)),ae.applyMatrix4(b.matrixWorld).applyMatrix4(ge)),Array.isArray(_e)){const ye=pe.groups;for(let Le=0,Ie=ye.length;Le<Ie;Le++){const Te=ye[Le],tt=_e[Te.materialIndex];tt&&tt.visible&&_.push(b,pe,tt,B,ae.z,Te)}}else _e.visible&&_.push(b,pe,_e,B,ae.z,null)}}const re=b.children;for(let pe=0,_e=re.length;pe<_e;pe++)Ko(re[pe],O,B,z)}function Kc(b,O,B,z){const F=b.opaque,re=b.transmissive,pe=b.transparent;m.setupLightsView(B),Y===!0&&ce.setGlobalState(v.clippingPlanes,B),z&&Ee.viewport(S.copy(z)),F.length>0&&dr(F,O,B),re.length>0&&dr(re,O,B),pe.length>0&&dr(pe,O,B),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Zc(b,O,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new ki(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Lo:_i,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const re=m.state.transmissionRenderTarget[z.id],pe=z.viewport||S;re.setSize(pe.z,pe.w);const _e=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(U),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),De?ne.render(B):v.clear();const ye=v.toneMapping;v.toneMapping=mi;const Le=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),Y===!0&&ce.setGlobalState(v.clippingPlanes,z),dr(b,B,z),Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Te=0,tt=O.length;Te<tt;Te++){const pt=O[Te],mt=pt.object,Vt=pt.geometry,nt=pt.material,we=pt.group;if(nt.side===Tn&&mt.layers.test(z.layers)){const Pt=nt.side;nt.side=kt,nt.needsUpdate=!0,jc(mt,B,z,Vt,nt,we),nt.side=Pt,nt.needsUpdate=!0,Ie=!0}}Ie===!0&&(Oe.updateMultisampleRenderTarget(re),Oe.updateRenderTargetMipmap(re))}v.setRenderTarget(_e),v.setClearColor(U,H),Le!==void 0&&(z.viewport=Le),v.toneMapping=ye}function dr(b,O,B){const z=O.isScene===!0?O.overrideMaterial:null;for(let F=0,re=b.length;F<re;F++){const pe=b[F],_e=pe.object,ye=pe.geometry,Le=z===null?pe.material:z,Ie=pe.group;_e.layers.test(B.layers)&&jc(_e,O,B,ye,Le,Ie)}}function jc(b,O,B,z,F,re){b.onBeforeRender(v,O,B,z,F,re),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,O,B,z,b,re),F.transparent===!0&&F.side===Tn&&F.forceSinglePass===!1?(F.side=kt,F.needsUpdate=!0,v.renderBufferDirect(B,O,z,F,b,re),F.side=Jn,F.needsUpdate=!0,v.renderBufferDirect(B,O,z,F,b,re),F.side=Tn):v.renderBufferDirect(B,O,z,F,b,re),b.onAfterRender(v,O,B,z,F,re)}function fr(b,O,B){O.isScene!==!0&&(O=Ue);const z=He.get(b),F=m.state.lights,re=m.state.shadowsArray,pe=F.state.version,_e=Z.getParameters(b,F.state,re,O,B),ye=Z.getProgramCacheKey(_e);let Le=z.programs;z.environment=b.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(b.isMeshStandardMaterial?T:ft).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",ie),Le=new Map,z.programs=Le);let Ie=Le.get(ye);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===pe)return el(b,_e),Ie}else _e.uniforms=Z.getUniforms(b),b.onBuild(B,_e,v),b.onBeforeCompile(_e,v),Ie=Z.acquireProgram(_e,ye),Le.set(ye,Ie),z.uniforms=_e.uniforms;const Te=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=ce.uniform),el(b,_e),z.needsLights=wf(b),z.lightsStateVersion=pe,z.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Qc(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=ho.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function el(b,O){const B=He.get(b);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.batchingColor=O.batchingColor,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function Sf(b,O,B,z,F){O.isScene!==!0&&(O=Ue),Oe.resetTextureUnits();const re=O.fog,pe=z.isMeshStandardMaterial?O.environment:null,_e=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Si,ye=(z.isMeshStandardMaterial?T:ft).get(z.envMap||pe),Le=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ie=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Te=!!B.morphAttributes.position,tt=!!B.morphAttributes.normal,pt=!!B.morphAttributes.color;let mt=mi;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(mt=v.toneMapping);const Vt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,nt=Vt!==void 0?Vt.length:0,we=He.get(z),Pt=m.state.lights;if(Y===!0&&(ee===!0||b!==y)){const Zt=b===y&&z.id===P;ce.setState(z,b,Zt)}let ot=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Pt.state.version||we.outputColorSpace!==_e||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==ye||z.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ce.numPlanes||we.numIntersection!==ce.numIntersection)||we.vertexAlphas!==Le||we.vertexTangents!==Ie||we.morphTargets!==Te||we.morphNormals!==tt||we.morphColors!==pt||we.toneMapping!==mt||we.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,we.__version=z.version);let Dn=we.currentProgram;ot===!0&&(Dn=fr(z,O,F));let pr=!1,bi=!1,Zo=!1;const St=Dn.getUniforms(),Kn=we.uniforms;if(Ee.useProgram(Dn.program)&&(pr=!0,bi=!0,Zo=!0),z.id!==P&&(P=z.id,bi=!0),pr||y!==b){St.setValue(L,"projectionMatrix",b.projectionMatrix),St.setValue(L,"viewMatrix",b.matrixWorldInverse);const Zt=St.map.cameraPosition;Zt!==void 0&&Zt.setValue(L,ae.setFromMatrixPosition(b.matrixWorld)),st.logarithmicDepthBuffer&&St.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&St.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,bi=!0,Zo=!0)}if(F.isSkinnedMesh){St.setOptional(L,F,"bindMatrix"),St.setOptional(L,F,"bindMatrixInverse");const Zt=F.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),St.setValue(L,"boneTexture",Zt.boneTexture,Oe))}F.isBatchedMesh&&(St.setOptional(L,F,"batchingTexture"),St.setValue(L,"batchingTexture",F._matricesTexture,Oe),St.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&St.setValue(L,"batchingColorTexture",F._colorsTexture,Oe));const jo=B.morphAttributes;if((jo.position!==void 0||jo.normal!==void 0||jo.color!==void 0)&&ve.update(F,B,Dn),(bi||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,St.setValue(L,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Kn.envMap.value=ye,Kn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&O.environment!==null&&(Kn.envMapIntensity.value=O.environmentIntensity),bi&&(St.setValue(L,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&Mf(Kn,Zo),re&&z.fog===!0&&Q.refreshFogUniforms(Kn,re),Q.refreshMaterialUniforms(Kn,z,$,q,m.state.transmissionRenderTarget[b.id]),ho.upload(L,Qc(we),Kn,Oe)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ho.upload(L,Qc(we),Kn,Oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&St.setValue(L,"center",F.center),St.setValue(L,"modelViewMatrix",F.modelViewMatrix),St.setValue(L,"normalMatrix",F.normalMatrix),St.setValue(L,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Zt=z.uniformsGroups;for(let Qo=0,bf=Zt.length;Qo<bf;Qo++){const tl=Zt[Qo];he.update(tl,Dn),he.bind(tl,Dn)}}return Dn}function Mf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function wf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,O,B){He.get(b.texture).__webglTexture=O,He.get(b.depthTexture).__webglTexture=B;const z=He.get(b);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const B=He.get(b);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,B=0){A=b,D=O,E=B;let z=!0,F=null,re=!1,pe=!1;if(b){const ye=He.get(b);ye.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(L.FRAMEBUFFER,null),z=!1):ye.__webglFramebuffer===void 0?Oe.setupRenderTarget(b):ye.__hasExternalTextures&&Oe.rebindTextures(b,He.get(b.texture).__webglTexture,He.get(b.depthTexture).__webglTexture);const Le=b.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(pe=!0);const Ie=He.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[O])?F=Ie[O][B]:F=Ie[O],re=!0):b.samples>0&&Oe.useMultisampledRTT(b)===!1?F=He.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?F=Ie[B]:F=Ie,S.copy(b.viewport),R.copy(b.scissor),N=b.scissorTest}else S.copy(me).multiplyScalar($).floor(),R.copy(fe).multiplyScalar($).floor(),N=Ke;if(Ee.bindFramebuffer(L.FRAMEBUFFER,F)&&z&&Ee.drawBuffers(b,F),Ee.viewport(S),Ee.scissor(R),Ee.setScissorTest(N),re){const ye=He.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,B)}else if(pe){const ye=He.get(b.texture),Le=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.__webglTexture,B||0,Le)}P=-1},this.readRenderTargetPixels=function(b,O,B,z,F,re,pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Ee.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ye=b.texture,Le=ye.format,Ie=ye.type;if(!st.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-z&&B>=0&&B<=b.height-F&&L.readPixels(O,B,z,F,G.convert(Le),G.convert(Ie),re)}finally{const ye=A!==null?He.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(b,O,B,z,F,re,pe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=He.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){Ee.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ye=b.texture,Le=ye.format,Ie=ye.type;if(!st.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-z&&B>=0&&B<=b.height-F){const Te=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(O,B,z,F,G.convert(Le),G.convert(Ie),0),L.flush();const tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Ip(L,tt,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Te),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re)}finally{L.deleteBuffer(Te),L.deleteSync(tt)}return re}}finally{const ye=A!==null?He.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,ye)}}},this.copyFramebufferToTexture=function(b,O=null,B=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const z=Math.pow(2,-B),F=Math.floor(b.image.width*z),re=Math.floor(b.image.height*z),pe=O!==null?O.x:0,_e=O!==null?O.y:0;Oe.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,B,0,0,pe,_e,F,re),Ee.unbindTexture()},this.copyTextureToTexture=function(b,O,B=null,z=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1],O=arguments[2],F=arguments[3]||0,B=null);let re,pe,_e,ye,Le,Ie;B!==null?(re=B.max.x-B.min.x,pe=B.max.y-B.min.y,_e=B.min.x,ye=B.min.y):(re=b.image.width,pe=b.image.height,_e=0,ye=0),z!==null?(Le=z.x,Ie=z.y):(Le=0,Ie=0);const Te=G.convert(O.format),tt=G.convert(O.type);Oe.setTexture2D(O,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const pt=L.getParameter(L.UNPACK_ROW_LENGTH),mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Vt=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),we=L.getParameter(L.UNPACK_SKIP_IMAGES),Pt=b.isCompressedTexture?b.mipmaps[F]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,Le,Ie,re,pe,Te,tt,Pt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,Le,Ie,Pt.width,Pt.height,Te,Pt.data):L.texSubImage2D(L.TEXTURE_2D,F,Le,Ie,Te,tt,Pt),L.pixelStorei(L.UNPACK_ROW_LENGTH,pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Vt),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,we),F===0&&O.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(b,O,B=null,z=null,F=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,b=arguments[2],O=arguments[3],F=arguments[4]||0);let re,pe,_e,ye,Le,Ie,Te,tt,pt;const mt=b.isCompressedTexture?b.mipmaps[F]:b.image;B!==null?(re=B.max.x-B.min.x,pe=B.max.y-B.min.y,_e=B.max.z-B.min.z,ye=B.min.x,Le=B.min.y,Ie=B.min.z):(re=mt.width,pe=mt.height,_e=mt.depth,ye=0,Le=0,Ie=0),z!==null?(Te=z.x,tt=z.y,pt=z.z):(Te=0,tt=0,pt=0);const Vt=G.convert(O.format),nt=G.convert(O.type);let we;if(O.isData3DTexture)Oe.setTexture3D(O,0),we=L.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)Oe.setTexture2DArray(O,0),we=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const Pt=L.getParameter(L.UNPACK_ROW_LENGTH),ot=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Dn=L.getParameter(L.UNPACK_SKIP_PIXELS),pr=L.getParameter(L.UNPACK_SKIP_ROWS),bi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ye),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ie),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(we,F,Te,tt,pt,re,pe,_e,Vt,nt,mt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(we,F,Te,tt,pt,re,pe,_e,Vt,mt.data):L.texSubImage3D(we,F,Te,tt,pt,re,pe,_e,Vt,nt,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Dn),L.pixelStorei(L.UNPACK_SKIP_ROWS,pr),L.pixelStorei(L.UNPACK_SKIP_IMAGES,bi),F===0&&O.generateMipmaps&&L.generateMipmap(we),Ee.unbindTexture()},this.initRenderTarget=function(b){He.get(b).__webglFramebuffer===void 0&&Oe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Oe.setTextureCube(b,0):b.isData3DTexture?Oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Oe.setTexture2DArray(b,0):Oe.setTexture2D(b,0),Ee.unbindTexture()},this.resetState=function(){D=0,E=0,A=null,Ee.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ic?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===Io?"display-p3":"srgb"}}class Uo{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new Uo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Md extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kx extends Ct{constructor(e=null,t=1,n=1,i,r,o,c,u,h=Bt,p=Bt,a,l){super(null,o,c,u,h,p,i,r,a,l),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mu extends $t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hs=new at,wu=new at,Fr=[],bu=new Wi,Hx=new at,ks=new be,Hs=new Xi;class Vx extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),bu.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),Hs.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Hs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let c=0;c<n.length;c++)n[c]=i[o+c]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ks.geometry=this.geometry,ks.material=this.material,ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),e.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,hs),wu.multiplyMatrices(n,hs),ks.matrixWorld=wu,ks.raycast(e,Fr);for(let o=0,c=Fr.length;o<c;o++){const u=Fr[o];u.instanceId=r,u.object=this,t.push(u)}Fr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new kx(new Float32Array(i*this.count),i,this.count,Kh,Gn));const r=this.morphTexture.source.data.data;let o=0;for(let h=0;h<n.length;h++)o+=n[h];const c=this.geometry.morphTargetsRelative?1:1-o,u=i*e;r[u]=c,r.set(n,u+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oc extends qi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bo=new I,Eo=new I,Eu=new at,Vs=new Do,Br=new Xi,Da=new I,Au=new I;class wd extends wt{constructor(e=new bt,t=new Oc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)bo.fromBufferAttribute(t,i-1),Eo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bo.distanceTo(Eo);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;Eu.copy(i).invert(),Vs.copy(e.ray).applyMatrix4(Eu);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=this.isLineSegments?2:1,p=n.index,l=n.attributes.position;if(p!==null){const d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=h){const f=p.getX(_),x=p.getX(_+1),v=zr(this,e,Vs,u,f,x);v&&t.push(v)}if(this.isLineLoop){const _=p.getX(g-1),m=p.getX(d),f=zr(this,e,Vs,u,_,m);f&&t.push(f)}}else{const d=Math.max(0,o.start),g=Math.min(l.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=h){const f=zr(this,e,Vs,u,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=zr(this,e,Vs,u,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function zr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(bo.fromBufferAttribute(o,i),Eo.fromBufferAttribute(o,r),t.distanceSqToSegment(bo,Eo,Da,Au)>n)return;Da.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(Da);if(!(u<e.near||u>e.far))return{distance:u,point:Au.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}class bd extends qi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tu=new at,Sc=new Do,kr=new Xi,Hr=new I;class Gx extends wt{constructor(e=new bt,t=new bd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(i),kr.radius+=r,e.ray.intersectsSphere(kr)===!1)return;Tu.copy(i).invert(),Sc.copy(e.ray).applyMatrix4(Tu);const c=r/((this.scale.x+this.scale.y+this.scale.z)/3),u=c*c,h=n.index,a=n.attributes.position;if(h!==null){const l=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=l,_=d;g<_;g++){const m=h.getX(g);Hr.fromBufferAttribute(a,m),Ru(Hr,m,u,i,e,t,this)}}else{const l=Math.max(0,o.start),d=Math.min(a.count,o.start+o.count);for(let g=l,_=d;g<_;g++)Hr.fromBufferAttribute(a,g),Ru(Hr,g,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const c=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=r}}}}}function Ru(s,e,t,n,i,r,o){const c=Sc.distanceSqToPoint(s);if(c<t){const u=new I;Sc.closestPointToPoint(s,u),u.applyMatrix4(n);const h=i.ray.origin.distanceTo(u);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(c),point:u,index:e,face:null,object:o})}}class Wx extends Ct{constructor(e,t,n,i,r,o,c,u,h){super(e,t,n,i,r,o,c,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fc extends bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],c=[],u=[],h=new I,p=new We;o.push(0,0,0),c.push(0,0,1),u.push(.5,.5);for(let a=0,l=3;a<=t;a++,l+=3){const d=n+a/t*i;h.x=e*Math.cos(d),h.y=e*Math.sin(d),o.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(o[l]/e+1)/2,p.y=(o[l+1]/e+1)/2,u.push(p.x,p.y)}for(let a=1;a<=t;a++)r.push(a,a+1,0);this.setIndex(r),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Mi extends bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,c=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:c,thetaLength:u};const h=this;i=Math.floor(i),r=Math.floor(r);const p=[],a=[],l=[],d=[];let g=0;const _=[],m=n/2;let f=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(p),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(d,2));function x(){const w=new I,D=new I;let E=0;const A=(t-e)/n;for(let P=0;P<=r;P++){const y=[],S=P/r,R=S*(t-e)+e;for(let N=0;N<=i;N++){const U=N/i,H=U*u+c,X=Math.sin(H),q=Math.cos(H);D.x=R*X,D.y=-S*n+m,D.z=R*q,a.push(D.x,D.y,D.z),w.set(X,A,q).normalize(),l.push(w.x,w.y,w.z),d.push(U,1-S),y.push(g++)}_.push(y)}for(let P=0;P<i;P++)for(let y=0;y<r;y++){const S=_[y][P],R=_[y+1][P],N=_[y+1][P+1],U=_[y][P+1];p.push(S,R,U),p.push(R,N,U),E+=6}h.addGroup(f,E,0),f+=E}function v(w){const D=g,E=new We,A=new I;let P=0;const y=w===!0?e:t,S=w===!0?1:-1;for(let N=1;N<=i;N++)a.push(0,m*S,0),l.push(0,S,0),d.push(.5,.5),g++;const R=g;for(let N=0;N<=i;N++){const H=N/i*u+c,X=Math.cos(H),q=Math.sin(H);A.x=y*q,A.y=m*S,A.z=y*X,a.push(A.x,A.y,A.z),l.push(0,S,0),E.x=X*.5+.5,E.y=q*.5*S+.5,d.push(E.x,E.y),g++}for(let N=0;N<i;N++){const U=D+N,H=R+N;w===!0?p.push(H,H+1,U):p.push(H+1,H,U),P+=3}h.addGroup(f,P,w===!0?1:2),f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xn extends Mi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,c=Math.PI*2){super(0,e,t,n,i,r,o,c),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:c}}static fromJSON(e){return new Xn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bc extends bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];c(i),h(n),p(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function c(x){const v=new I,w=new I,D=new I;for(let E=0;E<t.length;E+=3)d(t[E+0],v),d(t[E+1],w),d(t[E+2],D),u(v,w,D,x)}function u(x,v,w,D){const E=D+1,A=[];for(let P=0;P<=E;P++){A[P]=[];const y=x.clone().lerp(w,P/E),S=v.clone().lerp(w,P/E),R=E-P;for(let N=0;N<=R;N++)N===0&&P===E?A[P][N]=y:A[P][N]=y.clone().lerp(S,N/R)}for(let P=0;P<E;P++)for(let y=0;y<2*(E-P)-1;y++){const S=Math.floor(y/2);y%2===0?(l(A[P][S+1]),l(A[P+1][S]),l(A[P][S])):(l(A[P][S+1]),l(A[P+1][S+1]),l(A[P+1][S]))}}function h(x){const v=new I;for(let w=0;w<r.length;w+=3)v.x=r[w+0],v.y=r[w+1],v.z=r[w+2],v.normalize().multiplyScalar(x),r[w+0]=v.x,r[w+1]=v.y,r[w+2]=v.z}function p(){const x=new I;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const w=m(x)/2/Math.PI+.5,D=f(x)/Math.PI+.5;o.push(w,1-D)}g(),a()}function a(){for(let x=0;x<o.length;x+=6){const v=o[x+0],w=o[x+2],D=o[x+4],E=Math.max(v,w,D),A=Math.min(v,w,D);E>.9&&A<.1&&(v<.2&&(o[x+0]+=1),w<.2&&(o[x+2]+=1),D<.2&&(o[x+4]+=1))}}function l(x){r.push(x.x,x.y,x.z)}function d(x,v){const w=x*3;v.x=e[w+0],v.y=e[w+1],v.z=e[w+2]}function g(){const x=new I,v=new I,w=new I,D=new I,E=new We,A=new We,P=new We;for(let y=0,S=0;y<r.length;y+=9,S+=6){x.set(r[y+0],r[y+1],r[y+2]),v.set(r[y+3],r[y+4],r[y+5]),w.set(r[y+6],r[y+7],r[y+8]),E.set(o[S+0],o[S+1]),A.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),D.copy(x).add(v).add(w).divideScalar(3);const R=m(D);_(E,S+0,x,R),_(A,S+2,v,R),_(P,S+4,w,R)}}function _(x,v,w,D){D<0&&x.x===1&&(o[v]=x.x-1),w.x===0&&w.z===0&&(o[v]=D/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.vertices,e.indices,e.radius,e.details)}}class Oo extends Bc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oo(e.radius,e.detail)}}class Pn extends bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(o+c,Math.PI);let h=0;const p=[],a=new I,l=new I,d=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const x=[],v=f/n;let w=0;f===0&&o===0?w=.5/t:f===n&&u===Math.PI&&(w=-.5/t);for(let D=0;D<=t;D++){const E=D/t;a.x=-e*Math.cos(i+E*r)*Math.sin(o+v*c),a.y=e*Math.cos(o+v*c),a.z=e*Math.sin(i+E*r)*Math.sin(o+v*c),g.push(a.x,a.y,a.z),l.copy(a).normalize(),_.push(l.x,l.y,l.z),m.push(E+w,1-v),x.push(h++)}p.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const v=p[f][x+1],w=p[f][x],D=p[f+1][x],E=p[f+1][x+1];(f!==0||o>0)&&d.push(v,w,E),(f!==n-1||u<Math.PI)&&d.push(w,D,E)}this.setIndex(d),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hi extends bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],c=[],u=[],h=[],p=new I,a=new I,l=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const _=g/i*r,m=d/n*Math.PI*2;a.x=(e+t*Math.cos(m))*Math.cos(_),a.y=(e+t*Math.cos(m))*Math.sin(_),a.z=t*Math.sin(m),c.push(a.x,a.y,a.z),p.x=e*Math.cos(_),p.y=e*Math.sin(_),l.subVectors(a,p).normalize(),u.push(l.x,l.y,l.z),h.push(g/i),h.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,f=(i+1)*(d-1)+g,x=(i+1)*d+g;o.push(_,m,x),o.push(m,f,x)}this.setIndex(o),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hi(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class je extends qi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zc extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Na=new at,Cu=new I,Pu=new I;class Ed{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nc,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Cu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cu),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lu=new at,Gs=new I,Ua=new I;class Xx extends Ed{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Gs),Ua.copy(n.position),Ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ua),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu)}}class ir extends zc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qx extends Ed{constructor(){super(new md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ad extends zc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new qx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Td extends zc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Iu=new at;class Rd{constructor(e,t,n=0,i=1/0){this.ray=new Do(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return Mc(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Mc(e[i],this,n,t);return n.sort(Du),n}}function Du(s,e){return s.distance-e.distance}function Mc(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,c=r.length;o<c;o++)Mc(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pc);const Cd=["HEALTH","SHIELDS","AMMO","CREDITS","WEAPON","LOW_HEALTH_WARNING","RADAR","CONTACTS","BOOST","SPEED","SPEED_NUMERIC","SPEED_GAUGE"],Yx={health:"HEALTH",shields:"SHIELDS",ammo:"AMMO",credits:"CREDITS",weapon:"WEAPON",radar:"RADAR",boost:"BOOST",speed:"SPEED"},Pd=600,ds=.085,Nu=20,Uu=10,Jx=.25,Ou=.5,Dt=.46,Oa={laser:65535,chaingun:16746496,missile:16720452},Fu=384,Fa=48;function Ld(s,e,t){const n=t.clone().invert(),i=[];for(const r of s){const o=r.position.clone().sub(e);if(o.length()>Pd)continue;o.applyQuaternion(n);const c=Math.sqrt(o.x*o.x+o.z*o.z),u=Math.atan2(o.x,o.z),h=Math.atan2(o.y,c);i.push({position:r.position.clone(),type:"enemy",bearing:u,elevation:h})}return i}function $x(s,e,t){const n=Math.max(0,s.length()),i=Math.max(1e-4,e),r=Math.max(i,t,1e-4),o=Math.max(0,r-i),c=Math.round(n),u=o>1e-4;return{speedMps:c,readoutText:`SPEED  ${c} m/s`,currentRatio:Math.max(0,Math.min(1,n/r)),normalRatio:Math.max(0,Math.min(1,i/r)),boostZoneRatio:Math.max(0,Math.min(1,o/r)),boostFillRatio:u?Math.max(0,Math.min(1,(n-i)/o)):0,boostZoneActive:u}}function Bu(s,e,t,n,i,r,o){const c=new je({color:657930}),u=new be(new ut(i+.008,.022,.04),c);u.position.set(e,t,n),s.add(u);const h=new je({color:r,emissive:new Me(r),emissiveIntensity:.6}),p=new be(new ut(i,.016,.034),h),a=new zt;return a.position.set(e-i/2,t,n),a.userData.role=o,s.add(a),p.position.x=i/2,a.add(p),{fillMat:h,setRatio(l){const d=Math.max(0,Math.min(1,l));p.scale.x=Math.max(d,1e-4),p.position.x=i/2*d}}}function ii(s,e,t,n,i,r,o){const c=new Is(i,r);let u,h=null;if(typeof document<"u"){const l=document.createElement("canvas");l.width=Fu,l.height=Fa;const d=l.getContext("2d"),g=new Wx(l);u=new Jt({map:g,transparent:!0,depthWrite:!1,side:Jn}),h=_=>{d&&(d.clearRect(0,0,Fu,Fa),d.fillStyle="rgba(0, 230, 200, 0.92)",d.font="bold 22px monospace",d.textBaseline="middle",d.textAlign="left",d.fillText(_,6,Fa/2),g.needsUpdate=!0)}}else u=new Jt({color:59080});const p=new be(c,u);p.position.set(e,t,n),p.userData.hudReadout=o,s.add(p);function a(l){p.userData.hudReadoutText=l,h==null||h(l)}return{draw:a}}function Kx(){const s=new zt,e=new Map;function t(G){if(e.clear(),!!G)for(const j of Cd){const he=G.getObjectByName(j);he&&(he.userData.cockpitHudBound=!0,e.set(j,he))}}function n(G,j){const he=e.get(Yx[G]);he&&(he.userData.hudReadout=G,he.userData.hudReadoutText=j)}function i(G,j){const he=e.get(G);he&&Object.assign(he.userData,j)}const r=new je({color:1710638,flatShading:!0}),o=new be(new ut(1.8,.22,.38),r);o.position.set(0,-.46,-.88),s.add(o);const c=new be(new ut(.22,.42,.42),r);c.position.set(-.92,-.46,-.84),s.add(c);const u=new be(new ut(.22,.42,.42),r);u.position.set(.92,-.46,-.84),s.add(u);const h=new be(new ut(1.8,.06,.06),r);h.position.set(0,.44,-.92),s.add(h);const p=Bu(s,-.55,-.34,-.87,.35,56644,"healthPivot"),a=Bu(s,0,-.34,-.87,.35,39423,"shieldPivot"),l=new je({color:16763904,emissive:new Me(16763904),emissiveIntensity:.6}),d=new je({color:1709312}),g=[],_=.025,m=.006,f=.33;for(let G=0;G<Uu;G++){const j=new be(new ut(_,.018,.03),l);j.position.set(f+G*(_+m),-.34,-.87),s.add(j),g.push(j)}const x=ii(s,-.55,-.285,-.87,.38,.046,"health"),v=ii(s,0,-.285,-.87,.38,.046,"shields"),w=ii(s,.48,-.285,-.87,.34,.046,"ammo"),D=ii(s,-.45,-.44,-.87,.42,.046,"credits"),E=ii(s,-.92,-.245,-.84,.2,.046,"weapon"),A=ii(s,.44,-.44,-.87,.2,.046,"boost"),P=ii(s,0,-.205,-.87,.42,.046,"speed"),y={health:"",shields:"",ammo:"",credits:"",weapon:"",boost:"",speed:""},S=new je({color:16716032,emissive:new Me(16716032),emissiveIntensity:0}),R=new be(new ut(.04,.025,.025),S);R.position.set(-.76,-.34,-.87),R.userData.isWarningLight=!0,R.visible=!1,s.add(R);let N=!1,U=0;function H(G){const j=Math.max(0,Math.min(1,G)),he=j>.5?new Me(56644).lerp(new Me(14535680),(1-j)*2):new Me(14535680).lerp(new Me(16720384),(.5-j)*2);p.fillMat.color.copy(he),p.fillMat.emissive.copy(he),p.setRatio(j);const C=`HEALTH  ${Math.round(j*100)} / 100`;y.health=C,x.draw(C),N=j<Jx,n("health",C),i("HEALTH",{healthRatio:j}),i("LOW_HEALTH_WARNING",{lowHealthActive:N,visible:N}),N||(R.visible=!1,S.emissiveIntensity=0,U=0)}function X(G){a.setRatio(G);const he=`SHIELDS  ${Math.round(Math.max(0,Math.min(1,G))*100)} / 100`;y.shields=he,v.draw(he),n("shields",he),i("SHIELDS",{shieldRatio:Math.max(0,Math.min(1,G))})}function q(G,j){const he=j>0?Math.round(G/j*Uu):0;g.forEach((C,te)=>{C.material=te<he?l:d});const xe=`AMMO  ${G} / ${j}`;y.ammo=xe,w.draw(xe),n("ammo",xe),i("AMMO",{ammoCount:G,ammoMax:j,ammoRatio:j>0?Math.max(0,Math.min(1,G/j)):0})}const $=["laser","chaingun","missile"],V={laser:new je({color:13107}),chaingun:new je({color:1705984}),missile:new je({color:1703941})};for(let G=0;G<$.length;G++){const j=$[G],he=new be(new ut(.055,.032,.025),V[j]);he.position.set(-.92,-.3-G*.048,-.84),he.userData.weaponSlot=j,s.add(he)}function de(G){for(const he of $){const xe=V[he];if(he===G)xe.color.setHex(Oa[he]),xe.emissive.setHex(Oa[he]),xe.emissiveIntensity=1;else{const C=Oa[he];xe.color.setHex(C).multiplyScalar(.08),xe.emissive.setHex(0),xe.emissiveIntensity=0}}const j=`WEAPON  ${G.toUpperCase()}`;y.weapon=j,E.draw(j),n("weapon",j),i("WEAPON",{activeWeapon:G})}de("laser"),H(1),X(1);const me=new je({color:398358}),fe=new be(new ut(Dt+.01,.018,.032),me);fe.position.set(0,-.245,-.87),fe.userData.role="speedGaugeBg",s.add(fe);const Ke=new je({color:59080,emissive:new Me(59080),emissiveIntensity:.7}),et=new je({color:5582848,emissive:new Me(16742912),emissiveIntensity:.15}),Y=new je({color:16752640,emissive:new Me(16742912),emissiveIntensity:1.1}),ee=-Dt/2,ge=new zt;ge.position.set(ee,-.245,-.87),ge.userData.role="speedNormalFill",s.add(ge);const ae=new be(new ut(Dt,.012,.026),Ke);ae.position.x=Dt/2,ge.add(ae);const Ue=new be(new ut(Dt,.014,.028),et);Ue.position.set(0,-.245,-.87),Ue.userData.role="speedBoostZone",s.add(Ue);const De=new zt;De.position.set(ee,-.245,-.868),De.userData.role="speedBoostFill",s.add(De);const ke=new be(new ut(Dt,.012,.026),Y);ke.position.x=Dt/2,De.add(ke);function L(G,j,he,xe,C,te=!0){const W=Math.max(0,Math.min(Dt,he));G.visible=te&&W>1e-4,G.scale.x=Math.max(W/Dt,1e-4),G.position.set(j+W/2,xe,C)}function Ye(G,j,he){const xe=$x(G,j,he);y.speed=xe.readoutText,P.draw(xe.readoutText),n("speed",xe.readoutText),i("SPEED_NUMERIC",{hudReadout:"speed",hudReadoutText:xe.readoutText,speedMps:xe.speedMps}),i("SPEED_GAUGE",{speedMps:xe.speedMps,currentRatio:xe.currentRatio,normalRatio:xe.normalRatio,boostZoneRatio:xe.boostZoneRatio,boostFillRatio:xe.boostFillRatio,boostZoneActive:xe.boostZoneActive});const C=Dt*xe.normalRatio,te=Dt*Math.min(xe.currentRatio,xe.normalRatio),W=Dt*xe.boostZoneRatio,J=ee+C,ie=W*xe.boostFillRatio;ae.scale.x=Math.max(te/Dt,1e-4),ae.position.x=te/2,L(Ue,J,W,-.245,-.869,xe.boostZoneActive),De.position.x=J,ke.scale.x=Math.max(ie/Dt,1e-4),ke.position.x=ie/2,ke.visible=xe.boostZoneActive&&ie>1e-4,fe.userData.speedMps=xe.speedMps,fe.userData.currentRatio=xe.currentRatio,Ue.userData.boostZoneActive=xe.boostZoneActive}Ye(new I,1,1);const Be=new je({color:2363392,emissive:new Me(0),emissiveIntensity:0}),st=new be(new ut(.07,.026,.026),Be);st.position.set(.58,-.44,-.87),st.userData.isBoostIndicator=!0,s.add(st);function Ee(G){Be.color.setHex(G?16751104:2363392),Be.emissive.setHex(G?16742912:0),Be.emissiveIntensity=G?1.6:0,st.userData.boostActive=G;const j="BOOST";y.boost=j,A.draw(j),n("boost",j),i("BOOST",{boostActive:G})}Ee(!1);const Ae=new I(.92,-.23,-.82),He=new je({color:6656}),Oe=new be(new Mi(ds+.01,ds+.01,.005,24),He);Oe.position.copy(Ae),s.add(Oe);const ft=new je({color:52258,emissive:new Me(52258),emissiveIntensity:.4}),T=new be(new Hi(ds+.005,.004,8,32),ft);T.rotation.x=Math.PI/2,T.position.set(Ae.x,Ae.y+.003,Ae.z),s.add(T);const M=new je({color:34833,emissive:new Me(34833),emissiveIntensity:.25}),k=new be(new Hi(ds+.004,.0025,8,32),M);k.position.copy(Ae),s.add(k);const K=new je({color:65348,emissive:new Me(65348),emissiveIntensity:.8}),Z=new be(new Pn(.004,6,6),K);Z.position.set(Ae.x,Ae.y+.006,Ae.z),s.add(Z);const Q=new je({color:4521796,emissive:new Me(4521796),emissiveIntensity:1}),Se=new be(new Pn(.003,4,4),Q);Se.position.set(Ae.x,Ae.y+.003,Ae.z+ds+.005),Se.userData.isRadarFwdDot=!0,s.add(Se),ii(s,Ae.x,Ae.y+.115,Ae.z,.16,.032,"radar").draw("RADAR");const ce=[];for(let G=0;G<Nu;G++){const j=new be(new Pn(.006,4,4),new je({color:16720384,emissive:new Me(16720384),emissiveIntensity:.8}));j.position.copy(Ae),j.visible=!1,j.userData.isBlip=!0,s.add(j),ce.push(j)}function Fe(G,j,he){ce.forEach(te=>{te.visible=!1});const xe=ds*.88;let C=0;for(const te of he){if(C>=Nu)break;if(te.position.distanceTo(G)>Pd)continue;const W=Math.sin(te.bearing)*Math.cos(te.elevation)*xe,J=Math.sin(te.elevation)*xe,ie=Math.cos(te.bearing)*Math.cos(te.elevation)*xe,Ce=ce[C++];Ce.position.set(Ae.x+W,Ae.y+J,Ae.z+ie),Ce.visible=!0;const Ze=te.type==="enemy"?16720384:8947712,lt=Ce.material;lt.color.setHex(Ze),lt.emissive.setHex(Ze)}n("radar","RADAR"),i("RADAR",{contactCount:C}),i("CONTACTS",{contactCount:C,contacts:he.slice(0,C).map(te=>({type:te.type,bearing:te.bearing,elevation:te.elevation}))})}let ne=0;function ve(G){ne=Math.max(0,G);const j=`CREDITS  ${ne}`;y.credits=j,D.draw(j),n("credits",j),i("CREDITS",{credits:ne})}function Xe(G){return y[G]??""}function Pe(G){if(!N)return;U+=G;const j=U%Ou<Ou/2;R.visible=j,S.emissiveIntensity=j?1.5:0,i("LOW_HEALTH_WARNING",{lowHealthActive:!0,visible:j,warningPhase:U})}return{group:s,bindToCockpit:t,setHealth:H,setShield:X,setAmmo:q,setActiveWeapon:de,setCredits:ve,setBoostActive:Ee,setSpeed:Ye,update:Pe,updateRadar:Fe,getReadoutText:Xe}}function Zx(s,e){function t(){s.requestPointerLock()}function n(i){document.pointerLockElement===s&&e(i.movementX,i.movementY)}return s.addEventListener("click",t),document.addEventListener("mousemove",n),()=>{s.removeEventListener("click",t),document.removeEventListener("mousemove",n)}}const Id="spacegame_control_bindings_v1",Yi=[{id:"thrustForward",label:"Forward thrust",defaultBinding:"w"},{id:"thrustBackward",label:"Back thrust",defaultBinding:"s"},{id:"strafeLeft",label:"Strafe left",defaultBinding:"a"},{id:"strafeRight",label:"Strafe right",defaultBinding:"d"},{id:"rollLeft",label:"Roll left",defaultBinding:"q"},{id:"rollRight",label:"Roll right",defaultBinding:"e"},{id:"fireWeapon",label:"Fire weapon",defaultBinding:"mouse0"},{id:"switchWeapon1",label:"Switch weapon 1",defaultBinding:"1"},{id:"switchWeapon2",label:"Switch weapon 2",defaultBinding:"2"},{id:"switchWeapon3",label:"Switch weapon 3",defaultBinding:"3"},{id:"strongBoost",label:"Strong boost",defaultBinding:"shift"},{id:"openSettings",label:"Open settings",defaultBinding:"escape"}],jx=Yi.reduce((s,e)=>(s[e.id]=e.defaultBinding,s),{});function Qx(s){var e;return((e=Yi.find(t=>t.id===s))==null?void 0:e.label)??s}function Fo(){return{...jx}}function cn(s){const e=s.trim().toLowerCase();return e===" "||e==="spacebar"?"space":e==="esc"?"escape":e==="arrowup"?"arrowup":e==="arrowdown"?"arrowdown":e==="arrowleft"?"arrowleft":e==="arrowright"?"arrowright":e==="shiftleft"||e==="shiftright"?"shift":e.startsWith("key")&&e.length===4?e.slice(3):e.startsWith("digit")&&e.length===6?e.slice(5):e}function Dd(s){const e=cn(s.key);return e&&e!=="unidentified"?e:cn(s.code)}function ev(s){return`mouse${s}`}function Bo(s,e){return cn(s)===cn(e)}function Nd(s){const e=cn(s),t={mouse0:"Left Mouse",mouse1:"Middle Mouse",mouse2:"Right Mouse",shift:"Shift",escape:"Esc",space:"Space",arrowup:"Arrow Up",arrowdown:"Arrow Down",arrowleft:"Arrow Left",arrowright:"Arrow Right"};return t[e]?t[e]:e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1)}function Ud(s=localStorage){const e=Fo(),t=s.getItem(Id);if(t===null)return e;try{const n=JSON.parse(t),i={...e};for(const r of Yi){const o=n[r.id];typeof o=="string"&&o.trim()!==""&&(i[r.id]=cn(o))}return rv(i)?e:i}catch{return e}}function wc(s,e=localStorage){e.setItem(Id,JSON.stringify(sv(s)))}function zu(s=localStorage){const e=Fo();return wc(e,s),e}function tv(s,e,t){const n=cn(t),i=nv(s,e,n);return i?{success:!1,conflict:i}:{success:!0,bindings:{...s,[e]:n}}}function nv(s,e,t){const n=cn(t);for(const i of Yi)if(i.id!==e&&Bo(s[i.id],n))return{action:i.id,label:i.label,binding:s[i.id]};return null}function iv(s){return[...Yi.map(e=>({id:e.id,label:e.label,binding:s[e.id],remappable:!0})),{id:"mousePitchYaw",label:"Pitch / yaw",binding:"Mouse axes",remappable:!1,note:"Mouse axes are not remappable in this phase."}]}function Ms(s,e,t){return Bo(Dd(s),e[t])}function Od(s,e,t){return Bo(ev(s.button),e[t])}function Qt(s,e,t){const n=cn(e[t]);return Object.keys(s).some(i=>s[i]&&Bo(i,n))}function sv(s){const e={};for(const t of Yi)e[t.id]=cn(s[t.id]);return e}function rv(s){const e=new Set;for(const t of Yi){const n=cn(s[t.id]);if(e.has(n))return!0;e.add(n)}return!1}const Fd=20,ov=30,av=2.5,ku=1.8,Bd=1.6;function In(s=0){return ov+s}function kc(s=0){return In(s)*Bd}function cv(s=0){return(Fd+s)*Bd}function Ws(s){return cn(s)}function lv(s,e,t){s.multiplyScalar(Math.max(0,1-e*t))}function uv(s,e,t,n,i,r){if(e.lengthSq()===0)return;const o=s.length(),c=e.clone().normalize().multiplyScalar(n*r).applyQuaternion(t);s.add(c);const u=s.length();if(u>i){const h=o>i?o:i;u>h&&s.multiplyScalar(h/u)}}class hv{constructor(e=Fo()){oe(this,"velocity",new I);oe(this,"thrustBonus",0);oe(this,"speedBonus",0);oe(this,"keys",{});oe(this,"_onKeyDown");oe(this,"_onKeyUp");oe(this,"bindings");this.bindings={...e},this._onKeyDown=t=>{this.keys[Ws(t.key)]=!0,t.code&&(this.keys[Ws(t.code)]=!0)},this._onKeyUp=t=>{this.keys[Ws(t.key)]=!1,t.code&&(this.keys[Ws(t.code)]=!1)}}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}setBindings(e){this.bindings={...e}}setKey(e,t){this.keys[Ws(e)]=t}clearInput(){for(const e of Object.keys(this.keys))this.keys[e]=!1}isStrongBoostActive(e=!0){return e&&Qt(this.keys,this.bindings,"strongBoost")}getThrustInputMagnitude(){const e=(Qt(this.keys,this.bindings,"strafeRight")?1:0)-(Qt(this.keys,this.bindings,"strafeLeft")?1:0),t=(Qt(this.keys,this.bindings,"thrustBackward")?1:0)-(Qt(this.keys,this.bindings,"thrustForward")?1:0);return Math.min(1,Math.sqrt(e*e+t*t))}isStrongBoostEngaged(e=!0){return e&&Qt(this.keys,this.bindings,"thrustForward")&&this.isStrongBoostActive(!0)}reset(){this.velocity.set(0,0,0)}update(e,t,n,i={}){const r=Math.min(e,.1);Qt(this.keys,this.bindings,"rollLeft")&&(t.z+=ku*r),Qt(this.keys,this.bindings,"rollRight")&&(t.z-=ku*r);const o=new I((Qt(this.keys,this.bindings,"strafeRight")?1:0)-(Qt(this.keys,this.bindings,"strafeLeft")?1:0),0,(Qt(this.keys,this.bindings,"thrustBackward")?1:0)-(Qt(this.keys,this.bindings,"thrustForward")?1:0)),c=new Gi().setFromEuler(t),u=In(this.speedBonus),h=this.isStrongBoostEngaged(i.boostAllowed??!0),p=h?kc(this.speedBonus):u,a=h?cv(this.thrustBonus):Fd+this.thrustBonus;uv(this.velocity,o,c,a,p,r),lv(this.velocity,av,r),n.addScaledVector(this.velocity,r)}}const Hu=1.5,Vu=25;function dv(s){return Math.max(Vu,Math.round(s)*Vu)}function zd(s,e){s.userData.size=e,s.userData.health=dv(e)}function fv(s,e,t){const n=new Oo(s,0),i=new je({color:8947840,flatShading:!0}),r=new be(n,i);return r.position.copy(e),r.rotation.set(t()*Math.PI*2,t()*Math.PI*2,t()*Math.PI*2),zd(r,s),r}function pv(s,e,t,n=Math.random){const i=t*.45,r=2+Math.floor(n()*2),o=[],c=t;for(let u=0;u<r;u++){const h=new I((n()*2-1)*c,(n()*2-1)*c,(n()*2-1)*c),p=fv(i,e.clone().add(h),n);s.add(p),o.push(p)}return o}function mv(s,e){s.remove(e),e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>t.dispose()):e.material.dispose()}function bc(s,e,t,n=Math.random){mv(s,e);const i=t.filter(o=>o!==e),r=e.userData.size??Hu+1;if(r>Hu){const o=pv(s,e.position,r,n);i.push(...o)}return i}const Xs=500,Hc=15,gv=25,Gu=8,Wu=10,_v=1,xv=3;function vv(s){let e=s>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function zo(s,e=Hc){for(let t=0;t<1e3;t++){const n=(s()*2-1)*Xs,i=(s()*2-1)*Xs,r=(s()*2-1)*Xs,o=n*n+i*i+r*r,c=e*e,u=Xs*Xs;if(o>=c&&o<=u)return new I(n,i,r)}return new I(e*2,0,0)}function yv(s=Math.random){const e=new je({color:8947840,flatShading:!0}),t=[];for(let n=0;n<gv;n++){const i=1+s()*4,r=new Oo(i,0),o=new be(r,e);o.position.copy(zo(s)),o.rotation.set(s()*Math.PI*2,s()*Math.PI*2,s()*Math.PI*2),zd(o,i),t.push(o)}return t}function Sv(s=Math.random){const e=new zt,t=new je({color:0,flatShading:!0}),n=new Pn(8,16,16);e.add(new be(n,t));const i=new je({color:16737792,emissive:new Me(16724736),emissiveIntensity:.8,flatShading:!0}),r=new Hi(14,2,8,32),o=new be(r,i);return o.rotation.x=Math.PI/2,e.add(o),e.position.copy(zo(s,Hc+30)),e}function Mv(s=Math.random){const e=Math.min(Wu,Gu+Math.floor(s()*(Wu-Gu+1))),t=new je({color:13378048,flatShading:!0}),n=[];for(let i=0;i<e;i++){const r=new Xn(1.5,4,4),o=new be(r,t);o.position.copy(zo(s)),o.rotation.set(s()*Math.PI*2,s()*Math.PI*2,0),n.push(o)}return n}const Xu=[3364300,3385941,13399859,10040217,3390412];function wv(s=Math.random){const e=_v+Math.floor(s()*xv),t=[];for(let n=0;n<e;n++){const i=Xu[Math.floor(s()*Xu.length)],r=20+Math.floor(s()*20),o=new Pn(r,8,8),c=new je({color:i,flatShading:!0}),u=new be(o,c);u.position.copy(zo(s,Hc+r)),t.push(u)}return t}function ko(s,e=Math.floor(Math.random()*4294967295)){const t=vv(e),n=yv(t),i=Sv(t),r=Mv(t),o=wv(t);return n.forEach(c=>s.add(c)),s.add(i),r.forEach(c=>s.add(c)),o.forEach(c=>s.add(c)),{asteroids:n,blackHole:i,enemies:r,planets:o}}const bv=25,qu=500,Ev=5;class Av{constructor(e,t){oe(this,"_ammo");oe(this,"maxAmmo");oe(this,"raycaster",new Rd);oe(this,"scene");oe(this,"activeBeam",null);oe(this,"beamFramesLeft",0);this.scene=e,this._ammo=t,this.maxAmmo=t,this.raycaster.far=qu}get ammo(){return this._ammo}fire(e,t,n){if(this._ammo<=0)return{fired:!1,hit:!1,hitObject:null,ammoRemaining:0};this._ammo--;const i=new I(0,0,-1).applyQuaternion(t);this.raycaster.set(e,i);const r=this.raycaster.intersectObjects(n);let o=!1,c=null,u;r.length>0?(o=!0,c=r[0].object,u=r[0].point.clone(),c.userData.health===void 0&&(c.userData.health=100),c.userData.health-=bv):u=e.clone().addScaledVector(i,qu);const h=e.clone().addScaledVector(i,1.5);return this.spawnBeam(h,u),{fired:!0,hit:o,hitObject:c,ammoRemaining:this._ammo}}update(){this.beamFramesLeft>0&&(this.beamFramesLeft--,this.beamFramesLeft===0&&this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null))}addAmmo(e){this._ammo=Math.min(this._ammo+Math.max(0,e),this.maxAmmo)}reset(e){this._ammo=Math.min(Math.max(0,e),this.maxAmmo),this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null),this.beamFramesLeft=0}spawnBeam(e,t){this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null);const n=new bt().setFromPoints([e,t]),i=new Oc({color:65535});this.activeBeam=new wd(n,i),this.scene.add(this.activeBeam),this.beamFramesLeft=Ev}}const Tv=8,Yu=500,Rv=12,Cv=2;class Pv{constructor(e,t){oe(this,"_ammo");oe(this,"maxAmmo");oe(this,"fireInterval");oe(this,"accumulator");oe(this,"raycaster",new Rd);oe(this,"scene");oe(this,"activeBeam",null);oe(this,"beamFramesLeft",0);this.scene=e,this._ammo=t,this.maxAmmo=t,this.fireInterval=1/Rv,this.accumulator=this.fireInterval,this.raycaster.far=Yu}get ammo(){return this._ammo}fire(e,t,n){if(this._ammo<=0)return{fired:!1,hit:!1,hitObject:null,ammoRemaining:0};this._ammo--;const i=new I(0,0,-1).applyQuaternion(t);this.raycaster.set(e,i);const r=this.raycaster.intersectObjects(n);let o=!1,c=null,u;r.length>0?(o=!0,c=r[0].object,u=r[0].point.clone(),c.userData.health===void 0&&(c.userData.health=100),c.userData.health-=Tv):u=e.clone().addScaledVector(i,Yu);const h=e.clone().addScaledVector(i,1.5);return this.spawnBeam(h,u),{fired:!0,hit:o,hitObject:c,ammoRemaining:this._ammo}}update(e,t,n,i,r){if(this.beamFramesLeft>0&&(this.beamFramesLeft--,this.beamFramesLeft===0&&this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null)),!t)return this.accumulator=this.fireInterval,[];this.accumulator+=e;const o=[];for(;this.accumulator>=this.fireInterval;){if(this.accumulator-=this.fireInterval,this._ammo<=0){this.accumulator=0;break}o.push(this.fire(n,i,r))}return o}addAmmo(e){this._ammo=Math.min(this._ammo+Math.max(0,e),this.maxAmmo)}reset(e){this._ammo=Math.min(Math.max(0,e),this.maxAmmo),this.accumulator=this.fireInterval,this.beamFramesLeft=0,this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null)}spawnBeam(e,t){this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null);const n=new bt().setFromPoints([e,t]),i=new Oc({color:16746496});this.activeBeam=new wd(n,i),this.scene.add(this.activeBeam),this.beamFramesLeft=Cv}}function Lv(s,e,t,n,i,r,o,c){const u=s-i,h=e-r,p=t-o,a=u*u+h*h+p*p,l=n+c;return a<=l*l}const ws={laser:45,chaingun:180,missile:12},fs={laser:45,chaingun:180,missile:8},Iv=100,Dv=30,Nv=600,Uv=1;class Ov{constructor(e,t){oe(this,"_ammo");oe(this,"maxAmmo");oe(this,"scene");oe(this,"missiles",[]);this.scene=e,this._ammo=t,this.maxAmmo=t}get ammo(){return this._ammo}get missileCount(){return this.missiles.length}fire(e,t){if(this._ammo<=0)return{fired:!1,ammoRemaining:0};this._ammo--;const n=new I(0,0,-1).applyQuaternion(t),i=e.clone().addScaledVector(n,2),r=new Xn(.15,.8,6),o=new je({color:16737792,emissive:new Me(16724736),emissiveIntensity:.5}),c=new be(r,o);return c.position.copy(i),c.quaternion.setFromUnitVectors(new I(0,1,0),n),this.scene.add(c),this.missiles.push({mesh:c,direction:n.clone(),distanceTraveled:0}),{fired:!0,ammoRemaining:this._ammo}}update(e,t){var r;const n=[],i=[];for(let o=0;o<this.missiles.length;o++){const c=this.missiles[o],u=Dv*e;if(c.mesh.position.addScaledVector(c.direction,u),c.distanceTraveled+=u,c.distanceTraveled>=Nv){i.push(o);continue}let h=!1;for(const p of t){p.geometry.boundingSphere||p.geometry.computeBoundingSphere();const a=(((r=p.geometry.boundingSphere)==null?void 0:r.radius)??5)*p.scale.x,l=c.mesh.position,d=p.position;if(Lv(l.x,l.y,l.z,Uv,d.x,d.y,d.z,a)){p.userData.health===void 0&&(p.userData.health=100),p.userData.health-=Iv,n.push({hitObject:p}),h=!0;break}}h&&i.push(o)}for(let o=i.length-1;o>=0;o--){const c=i[o],u=this.missiles[c];this.scene.remove(u.mesh),u.mesh.geometry.dispose(),u.mesh.material.dispose(),this.missiles.splice(c,1)}return n}addAmmo(e){this._ammo=Math.min(this._ammo+Math.max(0,e),this.maxAmmo)}reset(e){this._ammo=Math.min(Math.max(0,e),this.maxAmmo);for(const t of this.missiles)this.scene.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.missiles.length=0}}class Fv{constructor(e,t){oe(this,"health");oe(this,"shield");oe(this,"maxHealth");oe(this,"maxShield");oe(this,"thrustBonus");oe(this,"speedBonus");oe(this,"unlockedWeapons");this.maxHealth=e,this.maxShield=t,this.health=e,this.shield=t,this.thrustBonus=0,this.speedBonus=0,this.unlockedWeapons=new Set}applyDamage(e){const t=Math.max(0,e),n=Math.min(this.shield,t),i=t-n;this.shield-=n;const r=Math.min(this.health,i);return this.health-=r,{shieldDamage:n,hullDamage:r,isDead:this.health<=0}}reset(){this.health=this.maxHealth,this.shield=this.maxShield}get isAlive(){return this.health>0}upgradeMaxHealth(e){const t=Math.max(0,e);this.maxHealth+=t,this.health=Math.min(this.health+t,this.maxHealth)}upgradeMaxShield(e){const t=Math.max(0,e);this.maxShield+=t,this.shield=Math.min(this.shield+t,this.maxShield)}upgradeEngine(e,t){this.thrustBonus+=Math.max(0,e),this.speedBonus+=Math.max(0,t)}unlockWeapon(e){this.unlockedWeapons.add(e)}}class Ju{constructor(e,t,n,i,r){this.sender=e,this.receiver=t,this.message=n,this.delay=i,this.data=r}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(e){return this.sender=e.sender,this.receiver=e.receiver,this.message=e.message,this.delay=e.delay,this.data=e.data,this}resolveReferences(e){return this.sender=e.get(this.sender),this.receiver=e.get(this.receiver),this}}class gn{static setLevel(e){Vr=e}static log(...e){Vr<=gn.LEVEL.LOG&&console.log(...e)}static warn(...e){Vr<=gn.LEVEL.WARN&&console.warn(...e)}static error(...e){Vr<=gn.LEVEL.ERROR&&console.error(...e)}}gn.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let Vr=gn.LEVEL.WARN;class Bv{constructor(){this.delayedTelegrams=new Array}deliver(e){const t=e.receiver;return t.handleMessage(e)===!1&&gn.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",t),this}dispatch(e,t,n,i,r){const o=new Ju(e,t,n,i,r);return i<=0?this.deliver(o):this.delayedTelegrams.push(o),this}dispatchDelayedMessages(e){let t=this.delayedTelegrams.length;for(;t--;){const n=this.delayedTelegrams[t];n.delay-=e,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const e={type:this.constructor.name,delayedTelegrams:new Array};for(let t=0,n=this.delayedTelegrams.length;t<n;t++){const i=this.delayedTelegrams[t];e.delayedTelegrams.push(i.toJSON())}return e}fromJSON(e){this.clear();const t=e.delayedTelegrams;for(let n=0,i=t.length;n<i;n++){const r=t[n],o=new Ju().fromJSON(r);this.delayedTelegrams.push(o)}return this}resolveReferences(e){const t=this.delayedTelegrams;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}const Et=new Array;for(let s=0;s<256;s++)Et[s]=(s<16?"0":"")+s.toString(16);class sr{static area(e,t,n){return(n.x-e.x)*(t.z-e.z)-(t.x-e.x)*(n.z-e.z)}static argmax(e){const t=Math.max(...e),n=[];for(let i=0,r=e.length;i<r;i++)e[i]===t&&n.push(i);return n}static choice(e,t=null){const n=Math.random();if(t===null)return e[Math.floor(Math.random()*e.length)];{let i=0;const r=e.map((o,c)=>(i+=t[c],i)).findIndex(o=>o>=n);return e[r]}}static clamp(e,t,n){return Math.max(t,Math.min(n,e))}static generateUUID(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[e&255]+Et[e>>8&255]+Et[e>>16&255]+Et[e>>24&255]+"-"+Et[t&255]+Et[t>>8&255]+"-"+Et[t>>16&15|64]+Et[t>>24&255]+"-"+Et[n&63|128]+Et[n>>8&255]+"-"+Et[n>>16&255]+Et[n>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toUpperCase()}static randFloat(e,t){return e+Math.random()*(t-e)}static randInt(e,t){return e+Math.floor(Math.random()*(t-e+1))}}class se{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}clone(){return new this.constructor().copy(this)}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.x/=e,this.y/=e,this.z/=e,this}divideVectors(e,t){return this.x=e.x/t.x,this.y=e.y/t.y,this.z=e.z/t.z,this}reflect(e){return this.sub(zv.copy(e).multiplyScalar(2*this.dot(e)))}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}cross(e){const t=this.x,n=this.y,i=this.z;return this.x=n*e.z-i*e.y,this.y=i*e.x-t*e.z,this.z=t*e.y-n*e.x,this}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,c=t.y,u=t.z;return this.x=i*u-r*c,this.y=r*o-n*u,this.z=n*c-i*o,this}angleTo(e){const t=Math.sqrt(this.squaredLength()*e.squaredLength());if(t===0)return 0;const n=this.dot(e)/t;return Math.acos(sr.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(e){return Math.sqrt(this.squaredDistanceTo(e))}squaredDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return Math.abs(t)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyRotation(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,c=e.z,u=e.w,h=u*t+o*i-c*n,p=u*n+c*t-r*i,a=u*i+r*n-o*t,l=-r*t-o*n-c*i;return this.x=h*u+l*-r+p*-c-a*-o,this.y=p*u+l*-o+a*-r-h*-c,this.z=a*u+l*-c+h*-o-p*-r,this}extractPositionFromMatrix(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}fromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}fromMatrix4Column(e,t){return this.fromArray(e.elements,t*4)}fromSpherical(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}}const zv=new se,$u=new se(0,1,0),Ku=new se,qs=new se,Zu=new se,ju=new se,Ba=[2,2,1],za=[1,0,0];class Vc{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,o,c,u,h){const p=this.elements;return p[0]=e,p[3]=t,p[6]=n,p[1]=i,p[4]=r,p[7]=o,p[2]=c,p[5]=u,p[8]=h,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],c=n[3],u=n[6],h=n[1],p=n[4],a=n[7],l=n[2],d=n[5],g=n[8],_=i[0],m=i[3],f=i[6],x=i[1],v=i[4],w=i[7],D=i[2],E=i[5],A=i[8];return r[0]=o*_+c*x+u*D,r[3]=o*m+c*v+u*E,r[6]=o*f+c*w+u*A,r[1]=h*_+p*x+a*D,r[4]=h*m+p*v+a*E,r[7]=h*f+p*w+a*A,r[2]=l*_+d*x+g*D,r[5]=l*m+d*v+g*E,r[8]=l*f+d*w+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}extractBasis(e,t,n){return e.fromMatrix3Column(this,0),t.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,e.y,t.y,n.y,e.z,t.z,n.z),this}lookAt(e,t,n){return Ku.crossVectors(n,e).normalize(),qs.crossVectors($u,t).normalize(),qs.squaredLength()===0&&(ju.copy(t).addScalar(Number.EPSILON),qs.crossVectors($u,ju).normalize()),Zu.crossVectors(t,qs).normalize(),ps.makeBasis(qs,Zu,t),Gr.makeBasis(Ku,n,e),this.multiplyMatrices(ps,Gr.transpose()),this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getElementIndex(e,t){return e*3+t}frobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<9;n++)t+=e[n]*e[n];return Math.sqrt(t)}offDiagonalFrobeniusNorm(){const e=this.elements;let t=0;for(let n=0;n<3;n++){const i=e[this.getElementIndex(Ba[n],za[n])];t+=2*i*i}return Math.sqrt(t)}eigenDecomposition(e){let t=0,n=0;const i=10;e.unitary.identity(),e.diagonal.copy(this);const r=e.unitary,o=e.diagonal,c=Number.EPSILON*o.frobeniusNorm();for(;n<i&&o.offDiagonalFrobeniusNorm()>c;)o.shurDecomposition(ps),Gr.copy(ps).transpose(),o.multiply(ps),o.premultiply(Gr),r.multiply(ps),++t>2&&(n++,t=0);return e}shurDecomposition(e){let t=0,n=1;const i=this.elements;for(let h=0;h<3;h++){const p=Math.abs(i[this.getElementIndex(Ba[h],za[h])]);p>t&&(t=p,n=h)}let r=1,o=0;const c=za[n],u=Ba[n];if(Math.abs(i[this.getElementIndex(u,c)])>Number.EPSILON){const h=i[this.getElementIndex(u,u)],p=i[this.getElementIndex(c,c)],a=i[this.getElementIndex(u,c)],l=(h-p)/2/a;let d;l<0?d=-1/(-l+Math.sqrt(1+l*l)):d=1/(l+Math.sqrt(1+l*l)),r=1/Math.sqrt(1+d*d),o=d*r}return e.identity(),e.elements[this.getElementIndex(c,c)]=r,e.elements[this.getElementIndex(u,u)]=r,e.elements[this.getElementIndex(u,c)]=o,e.elements[this.getElementIndex(c,u)]=-o,e}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=e.w,c=n+n,u=i+i,h=r+r,p=n*c,a=n*u,l=n*h,d=i*u,g=i*h,_=r*h,m=o*c,f=o*u,x=o*h;return t[0]=1-(d+_),t[3]=a-x,t[6]=l+f,t[1]=a+x,t[4]=1-(p+_),t[7]=g-m,t[2]=l-f,t[5]=g+m,t[8]=1-(p+d),this}fromMatrix4(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}}const ps=new Vc,Gr=new Vc,Wr=new Vc,ka=new se;class Ao{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let e=this.length();return e===0?(this.x=0,this.y=0,this.z=0,this.w=1):(e=1/e,this.x=this.x*e,this.y=this.y*e,this.z=this.z*e,this.w=this.w*e),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e.x,i=e.y,r=e.z,o=e.w,c=t.x,u=t.y,h=t.z,p=t.w;return this.x=n*p+o*c+i*h-r*u,this.y=i*p+o*u+r*c-n*h,this.z=r*p+o*h+n*u-i*c,this.w=o*p-n*c-i*u-r*h,this}angleTo(e){return 2*Math.acos(Math.abs(sr.clamp(this.dot(e),-1,1)))}rotateTo(e,t,n=1e-4){const i=this.angleTo(e);if(i<n)return!0;const r=Math.min(1,t/i);return this.slerp(e,r),!1}lookAt(e,t,n){Wr.lookAt(e,t,n),this.fromMatrix3(Wr)}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this.x,i=this.y,r=this.z,o=this.w;let c=o*e.w+n*e.x+i*e.y+r*e.z;if(c<0?(this.w=-e.w,this.x=-e.x,this.y=-e.y,this.z=-e.z,c=-c):this.copy(e),c>=1)return this.w=o,this.x=n,this.y=i,this.z=r,this;const u=Math.sqrt(1-c*c);if(Math.abs(u)<.001)return this.w=.5*(o+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(r+this.z),this;const h=Math.atan2(u,c),p=Math.sin((1-t)*h)/u,a=Math.sin(t*h)/u;return this.w=o*p+this.w*a,this.x=n*p+this.x*a,this.y=i*p+this.y*a,this.z=r*p+this.z*a,this}extractRotationFromMatrix(e){const t=Wr.elements,n=e.elements,i=1/ka.fromMatrix4Column(e,0).length(),r=1/ka.fromMatrix4Column(e,1).length(),o=1/ka.fromMatrix4Column(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=n[4]*r,t[4]=n[5]*r,t[5]=n[6]*r,t[6]=n[8]*o,t[7]=n[9]*o,t[8]=n[10]*o,this.fromMatrix3(Wr),this}fromEuler(e,t,n){const i=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),c=Math.sin(t/2),u=Math.sin(e/2),h=Math.sin(n/2);return this.w=i*r*o+c*u*h,this.x=i*u*o+c*r*h,this.y=c*r*o-i*u*h,this.z=i*r*h-c*u*o,this}toEuler(e){const t=-2*(this.y*this.z-this.x*this.w);return Math.abs(t)>.9999?(e.x=Math.PI*.5*t,e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=0):(e.x=Math.asin(t),e.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),e.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),e}fromMatrix3(e){const t=e.elements,n=t[0],i=t[3],r=t[6],o=t[1],c=t[4],u=t[7],h=t[2],p=t[5],a=t[8],l=n+c+a;if(l>0){let d=.5/Math.sqrt(l+1);this.w=.25/d,this.x=(p-u)*d,this.y=(r-h)*d,this.z=(o-i)*d}else if(n>c&&n>a){let d=2*Math.sqrt(1+n-c-a);this.w=(p-u)/d,this.x=.25*d,this.y=(i+o)/d,this.z=(r+h)/d}else if(c>a){let d=2*Math.sqrt(1+c-n-a);this.w=(r-h)/d,this.x=(i+o)/d,this.y=.25*d,this.z=(u+p)/d}else{let d=2*Math.sqrt(1+a-n-c);this.w=(o-i)/d,this.x=(r+h)/d,this.y=(u+p)/d,this.z=.25*d}return this}fromArray(e,t=0){return this.x=e[t+0],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e,t=0){return e[t+0]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}}class rr{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,o,c,u,h,p,a,l,d,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=c,f[13]=u,f[2]=h,f[6]=p,f[10]=a,f[14]=l,f[3]=d,f[7]=g,f[11]=_,f[15]=m,this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],c=n[4],u=n[8],h=n[12],p=n[1],a=n[5],l=n[9],d=n[13],g=n[2],_=n[6],m=n[10],f=n[14],x=n[3],v=n[7],w=n[11],D=n[15],E=i[0],A=i[4],P=i[8],y=i[12],S=i[1],R=i[5],N=i[9],U=i[13],H=i[2],X=i[6],q=i[10],$=i[14],V=i[3],de=i[7],me=i[11],fe=i[15];return r[0]=o*E+c*S+u*H+h*V,r[4]=o*A+c*R+u*X+h*de,r[8]=o*P+c*N+u*q+h*me,r[12]=o*y+c*U+u*$+h*fe,r[1]=p*E+a*S+l*H+d*V,r[5]=p*A+a*R+l*X+d*de,r[9]=p*P+a*N+l*q+d*me,r[13]=p*y+a*U+l*$+d*fe,r[2]=g*E+_*S+m*H+f*V,r[6]=g*A+_*R+m*X+f*de,r[10]=g*P+_*N+m*q+f*me,r[14]=g*y+_*U+m*$+f*fe,r[3]=x*E+v*S+w*H+D*V,r[7]=x*A+v*R+w*X+D*de,r[11]=x*P+v*N+w*q+D*me,r[15]=x*y+v*U+w*$+D*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}extractBasis(e,t,n){return e.fromMatrix4Column(this,0),t.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}compose(e,t,n){return this.fromQuaternion(t),this.scale(n),this.setPosition(e),this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}setPosition(e){const t=this.elements;return t[12]=e.x,t[13]=e.y,t[14]=e.z,this}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}getInverse(e){const t=this.elements,n=e.elements,i=t[0],r=t[1],o=t[2],c=t[3],u=t[4],h=t[5],p=t[6],a=t[7],l=t[8],d=t[9],g=t[10],_=t[11],m=t[12],f=t[13],x=t[14],v=t[15],w=d*x*a-f*g*a+f*p*_-h*x*_-d*p*v+h*g*v,D=m*g*a-l*x*a-m*p*_+u*x*_+l*p*v-u*g*v,E=l*f*a-m*d*a+m*h*_-u*f*_-l*h*v+u*d*v,A=m*d*p-l*f*p-m*h*g+u*f*g+l*h*x-u*d*x,P=i*w+r*D+o*E+c*A;if(P===0)return e.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const y=1/P;return n[0]=w*y,n[1]=(f*g*c-d*x*c-f*o*_+r*x*_+d*o*v-r*g*v)*y,n[2]=(h*x*c-f*p*c+f*o*a-r*x*a-h*o*v+r*p*v)*y,n[3]=(d*p*c-h*g*c-d*o*a+r*g*a+h*o*_-r*p*_)*y,n[4]=D*y,n[5]=(l*x*c-m*g*c+m*o*_-i*x*_-l*o*v+i*g*v)*y,n[6]=(m*p*c-u*x*c-m*o*a+i*x*a+u*o*v-i*p*v)*y,n[7]=(u*g*c-l*p*c+l*o*a-i*g*a-u*o*_+i*p*_)*y,n[8]=E*y,n[9]=(m*d*c-l*f*c-m*r*_+i*f*_+l*r*v-i*d*v)*y,n[10]=(u*f*c-m*h*c+m*r*a-i*f*a-u*r*v+i*h*v)*y,n[11]=(l*h*c-u*d*c-l*r*a+i*d*a+u*r*_-i*h*_)*y,n[12]=A*y,n[13]=(l*f*o-m*d*o+m*r*g-i*f*g-l*r*x+i*d*x)*y,n[14]=(m*h*o-u*f*o-m*r*p+i*f*p+u*r*x-i*h*x)*y,n[15]=(u*d*o-l*h*o+l*r*p-i*d*p-u*r*g+i*h*g)*y,e}getMaxScale(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}fromQuaternion(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=e.w,c=n+n,u=i+i,h=r+r,p=n*c,a=n*u,l=n*h,d=i*u,g=i*h,_=r*h,m=o*c,f=o*u,x=o*h;return t[0]=1-(d+_),t[4]=a-x,t[8]=l+f,t[1]=a+x,t[5]=1-(p+_),t[9]=g-m,t[2]=l-f,t[6]=g+m,t[10]=1-(p+d),t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromMatrix3(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=0,t[4]=n[3],t[5]=n[4],t[6]=n[5],t[7]=0,t[8]=n[6],t[9]=n[7],t[10]=n[8],t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}fromArray(e,t=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=e[i+t];return this}toArray(e,t=0){const n=this.elements;return e[t+0]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}}const Xr=new Ao,si=new se,qr=new se,ms=new Ao;class Gc{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new se,this.rotation=new Ao,this.scale=new se(1,1,1),this.forward=new se(0,0,1),this.up=new se(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new rr,this._worldMatrix=new rr,this._cache={position:new se,rotation:new Ao,scale:new se(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=sr.generateUUID()),this._uuid}start(){return this}update(){return this}add(e){return e.parent!==null&&e.parent.remove(e),this.children.push(e),e.parent=this,this}remove(e){const t=this.children.indexOf(e);return this.children.splice(t,1),e.parent=null,this}getDirection(e){return e.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(e){const t=this.parent;return t!==null?(this.getWorldPosition(qr),si.subVectors(e,qr).normalize(),this.rotation.lookAt(this.forward,si,this.up),ms.extractRotationFromMatrix(t.worldMatrix).inverse(),this.rotation.premultiply(ms)):(si.subVectors(e,this.position).normalize(),this.rotation.lookAt(this.forward,si,this.up)),this}rotateTo(e,t,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(qr),si.subVectors(e,qr).normalize(),Xr.lookAt(this.forward,si,this.up),ms.extractRotationFromMatrix(i.worldMatrix).inverse(),Xr.premultiply(ms)):(si.subVectors(e,this.position).normalize(),Xr.lookAt(this.forward,si,this.up)),this.rotation.rotateTo(Xr,this.maxTurnRate*t,n)}getWorldDirection(e){return ms.extractRotationFromMatrix(this.worldMatrix),e.copy(this.forward).applyRotation(ms).normalize()}getWorldPosition(e){return e.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(e,t){return this._renderComponent=e,this._renderComponentCallback=t,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(e,t,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,e,t,n,i):gn.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:Qu(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:Qu(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(e){return this.name=e.name,this.active=e.active,this.neighborhoodRadius=e.neighborhoodRadius,this.updateNeighborhood=e.updateNeighborhood,this.position.fromArray(e.position),this.rotation.fromArray(e.rotation),this.scale.fromArray(e.scale),this.forward.fromArray(e.forward),this.up.fromArray(e.up),this.boundingRadius=e.boundingRadius,this.maxTurnRate=e.maxTurnRate,this.canActivateTrigger=e.canActivateTrigger,this.children=e.children.slice(),this.neighbors=e.neighbors.slice(),this.parent=e.parent,this._localMatrix.fromArray(e._localMatrix),this._worldMatrix.fromArray(e.worldMatrix),this._cache.position.fromArray(e._cache.position),this._cache.rotation.fromArray(e._cache.rotation),this._cache.scale.fromArray(e._cache.scale),this._started=e._started,this._uuid=e.uuid,this}resolveReferences(e){const t=this.neighbors;for(let i=0,r=t.length;i<r;i++)t[i]=e.get(t[i]);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i]=e.get(n[i]);return this.parent=e.get(this.parent)||null,this}_updateMatrix(){const e=this._cache;e.position.equals(this.position)&&e.rotation.equals(this.rotation)&&e.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const e=this.parent;if(e!==null&&e._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){e===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];r._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function Qu(s){const e=new Array;for(let t=0,n=s.length;t<n;t++)e.push(s[t].uuid);return e}const eh=new se,Ha=new se;class kd extends Gc{constructor(){super(),this.velocity=new se,this.maxSpeed=1,this.updateOrientation=!0}update(e){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),eh.copy(this.velocity).multiplyScalar(e),Ha.copy(this.position).add(eh),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(Ha),this.position.copy(Ha),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const e=super.toJSON();return e.velocity=this.velocity.toArray(new Array),e.maxSpeed=this.maxSpeed,e.updateOrientation=this.updateOrientation,e}fromJSON(e){return super.fromJSON(e),this.velocity.fromArray(e.velocity),this.maxSpeed=e.maxSpeed,this.updateOrientation=e.updateOrientation,this}}class Ht{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(e){return this.active=e.active,this.weight=e.weight,this}resolveReferences(){}}const Yr=new se,Jr=new se;class kv extends Ht{constructor(){super()}calculate(e,t){Yr.set(0,0,0);const n=e.neighbors;for(let i=0,r=n.length;i<r;i++)n[i].getDirection(Jr),Yr.add(Jr);return n.length>0&&(Yr.divideScalar(n.length),e.getDirection(Jr),t.subVectors(Yr,Jr)),t}}const Va=new se,Ga=new se;class Ho extends Ht{constructor(e=new se,t=3,n=0){super(),this.target=e,this.deceleration=t,this.tolerance=n}calculate(e,t){const n=this.target,i=this.deceleration;Ga.subVectors(n,e.position);const r=Ga.length();if(r>this.tolerance){let o=r/i;o=Math.min(o,e.maxSpeed),Va.copy(Ga).multiplyScalar(o/r)}else Va.set(0,0,0);return t.subVectors(Va,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.deceleration=e.deceleration,this}}const Wa=new se;class Vo extends Ht{constructor(e=new se){super(),this.target=e}calculate(e,t){const n=this.target;return Wa.subVectors(n,e.position).normalize(),Wa.multiplyScalar(e.maxSpeed),t.subVectors(Wa,e.velocity)}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this}}const $r=new se;class Hv extends Ht{constructor(){super(),this._seek=new Vo}calculate(e,t){$r.set(0,0,0);const n=e.neighbors;for(let i=0,r=n.length;i<r;i++){const o=n[i];$r.add(o.position)}return n.length>0&&($r.divideScalar(n.length),this._seek.target=$r,this._seek.calculate(e,t),t.normalize()),t}}const Ys=new se;class Hd extends Ht{constructor(e=new se,t=10){super(),this.target=e,this.panicDistance=t}calculate(e,t){const n=this.target;return e.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(Ys.subVectors(e.position,n).normalize(),Ys.squaredLength()===0&&Ys.set(0,0,1),Ys.multiplyScalar(e.maxSpeed),t.subVectors(Ys,e.velocity)),t}toJSON(){const e=super.toJSON();return e.target=this.target.toArray(new Array),e.panicDistance=this.panicDistance,e}fromJSON(e){return super.fromJSON(e),this.target.fromArray(e.target),this.panicDistance=e.panicDistance,this}}const th=new se,nh=new se,ih=new se;class Vd extends Ht{constructor(e=null,t=10,n=1){super(),this.pursuer=e,this.panicDistance=t,this.predictionFactor=n,this._flee=new Hd}calculate(e,t){const n=this.pursuer;th.subVectors(n.position,e.position);let i=th.length()/(e.maxSpeed+n.getSpeed());return i*=this.predictionFactor,nh.copy(n.velocity).multiplyScalar(i),ih.addVectors(n.position,nh),this._flee.target=ih,this._flee.panicDistance=this.panicDistance,this._flee.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.pursuer=this.pursuer?this.pursuer.uuid:null,e.panicDistance=this.panicDistance,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.pursuer=e.pursuer,this.panicDistance=e.panicDistance,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.pursuer=e.get(this.pursuer)||null}}class Vv{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(e){return this._waypoints.push(e),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const e=this._waypoints.length-1;return this.loop===!0?!1:this._index===e}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const e={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},t=this._waypoints;for(let n=0,i=t.length;n<i;n++){const r=t[n];e._waypoints.push(r.toArray(new Array))}return e}fromJSON(e){this.loop=e.loop,this._index=e._index;const t=e._waypoints;for(let n=0,i=t.length;n<i;n++){const r=t[n];this._waypoints.push(new se().fromArray(r))}return this}}class Gv extends Ht{constructor(e=new Vv,t=1){super(),this.path=e,this.nextWaypointDistance=t,this._arrive=new Ho,this._seek=new Vo}calculate(e,t){const n=this.path;n.current().squaredDistanceTo(e.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const r=n.current();return n.finished()===!0?(this._arrive.target=r,this._arrive.calculate(e,t)):(this._seek.target=r,this._seek.calculate(e,t)),t}toJSON(){const e=super.toJSON();return e.path=this.path.toJSON(),e.nextWaypointDistance=this.nextWaypointDistance,e}fromJSON(e){return super.fromJSON(e),this.path.fromJSON(e.path),this.nextWaypointDistance=e.nextWaypointDistance,this}}const Kr=new se,Zr=new se,sh=new se,rh=new se;class Wv extends Ht{constructor(e=null,t=null,n=3){super(),this.entity1=e,this.entity2=t,this.deceleration=n,this._arrive=new Ho}calculate(e,t){const n=this.entity1,i=this.entity2;Kr.addVectors(n.position,i.position).multiplyScalar(.5);const r=e.position.distanceTo(Kr)/e.maxSpeed;return Zr.copy(n.velocity).multiplyScalar(r),sh.addVectors(n.position,Zr),Zr.copy(i.velocity).multiplyScalar(r),rh.addVectors(i.position,Zr),Kr.addVectors(sh,rh).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=Kr,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.entity1=this.entity1?this.entity1.uuid:null,e.entity2=this.entity2?this.entity2.uuid:null,e.deceleration=this.deceleration,e}fromJSON(e){return super.fromJSON(e),this.entity1=e.entity1,this.entity2=e.entity2,this.deceleration=e.deceleration,this}resolveReferences(e){this.entity1=e.get(this.entity1)||null,this.entity2=e.get(this.entity2)||null}}const en=new se,Js=new se,ri=new se,zn=[new se,new se,new se,new se,new se,new se,new se,new se];class Wc{constructor(e=new se,t=new se){this.min=e,this.max=t}set(e,t){return this.min=e,this.max=t,this}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max),t}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}expand(e){return this.min.min(e),this.max.max(e),this}getCenter(e){return e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return e.subVectors(this.max,this.min)}intersectsAABB(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsBoundingSphere(e){return this.clampPoint(e.center,en),en.squaredDistanceTo(e.center)<=e.radius*e.radius}intersectsPlane(e){const t=e.normal;this.getCenter(Js),ri.subVectors(this.max,Js);const n=ri.x*Math.abs(t.x)+ri.y*Math.abs(t.y)+ri.z*Math.abs(t.z),i=e.distanceToPoint(Js);return Math.abs(i)<=n}getNormalFromSurfacePoint(e,t){t.set(0,0,0);let n,i=1/0;return this.getCenter(Js),this.getSize(ri),en.copy(e).sub(Js),n=Math.abs(ri.x-Math.abs(en.x)),n<i&&(i=n,t.set(1*Math.sign(en.x),0,0)),n=Math.abs(ri.y-Math.abs(en.y)),n<i&&(i=n,t.set(0,1*Math.sign(en.y),0)),n=Math.abs(ri.z-Math.abs(en.z)),n<i&&t.set(0,0,1*Math.sign(en.z)),t}fromCenterAndSize(e,t){return en.copy(t).multiplyScalar(.5),this.min.copy(e).sub(en),this.max.copy(e).add(en),this}fromPoints(e){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let t=0,n=e.length;t<n;t++)this.expand(e[t]);return this}applyMatrix4(e){const t=this.min,n=this.max;return zn[0].set(t.x,t.y,t.z).applyMatrix4(e),zn[1].set(t.x,t.y,n.z).applyMatrix4(e),zn[2].set(t.x,n.y,t.z).applyMatrix4(e),zn[3].set(t.x,n.y,n.z).applyMatrix4(e),zn[4].set(n.x,t.y,t.z).applyMatrix4(e),zn[5].set(n.x,t.y,n.z).applyMatrix4(e),zn[6].set(n.x,n.y,t.z).applyMatrix4(e),zn[7].set(n.x,n.y,n.z).applyMatrix4(e),this.fromPoints(zn)}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xa=new Wc;class Go{constructor(e=new se,t=0){this.center=e,this.radius=t}set(e,t){return this.center=e,this.radius=t,this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(e,t){return t.copy(e),this.center.squaredDistanceTo(e)>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}containsPoint(e){return e.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(e){const t=this.radius+e.radius;return e.center.squaredDistanceTo(this.center)<=t*t}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(e,t){return t.subVectors(e,this.center).normalize()}fromPoints(e){return Xa.fromPoints(e),Xa.getCenter(this.center),this.radius=this.center.distanceTo(Xa.max),this}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScale(),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(e){return this.center.fromArray(e.center),this.radius=e.radius,this}}const tn=new se,qa=new se,jr=new se,Ya=new se,oh=new se,Qr=new rr,Xv=new rr,ah=new Wc;class Gd{constructor(e=new se,t=new se){this.origin=e,this.direction=t}set(e,t){return this.origin=e,this.direction=t,this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}clone(){return new this.constructor().copy(this)}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}intersectBoundingSphere(e,t){tn.subVectors(e.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),c=n-o,u=n+o;return c<0&&u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsBoundingSphere(e){const t=new se;let n;const i=t.subVectors(e.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(e.center):(t.copy(this.direction).multiplyScalar(i).add(this.origin),n=t.squaredDistanceTo(e.center)),n<=e.radius*e.radius}intersectAABB(e,t){let n,i,r,o,c,u;const h=1/this.direction.x,p=1/this.direction.y,a=1/this.direction.z,l=this.origin;return h>=0?(n=(e.min.x-l.x)*h,i=(e.max.x-l.x)*h):(n=(e.max.x-l.x)*h,i=(e.min.x-l.x)*h),p>=0?(r=(e.min.y-l.y)*p,o=(e.max.y-l.y)*p):(r=(e.max.y-l.y)*p,o=(e.min.y-l.y)*p),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),a>=0?(c=(e.min.z-l.z)*a,u=(e.max.z-l.z)*a):(c=(e.max.z-l.z)*a,u=(e.min.z-l.z)*a),n>u||c>i)||((c>n||n!==n)&&(n=c),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsAABB(e){return this.intersectAABB(e,tn)!==null}intersectPlane(e,t){let n;const i=e.normal.dot(this.direction);if(i===0)if(e.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(e.normal)+e.constant)/i;return n>=0?this.at(n,t):null}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectOBB(e,t){return e.getSize(oh),ah.fromCenterAndSize(tn.set(0,0,0),oh),Qr.fromMatrix3(e.rotation),Qr.setPosition(e.center),ch.copy(this).applyMatrix4(Qr.getInverse(Xv)),ch.intersectAABB(ah,t)?t.applyMatrix4(Qr):null}intersectsOBB(e){return this.intersectOBB(e,tn)!==null}intersectConvexHull(e,t){const n=e.faces;let i=-1/0,r=1/0;for(let o=0,c=n.length;o<c;o++){const h=n[o].plane,p=h.distanceToPoint(this.origin),a=h.normal.dot(this.direction);if(p>0&&a>=0)return null;const l=a!==0?-p/a:0;if(!(l<=0)&&(a>0?r=Math.min(l,r):i=Math.max(l,i),i>r))return null}return i!==-1/0?this.at(i,t):this.at(r,t),t}intersectsConvexHull(e){return this.intersectConvexHull(e,tn)!==null}intersectTriangle(e,t,n){const i=e.a,r=e.b,o=e.c;qa.subVectors(r,i),jr.subVectors(o,i),Ya.crossVectors(qa,jr);let c=this.direction.dot(Ya),u;if(c>0){if(t)return null;u=1}else if(c<0)u=-1,c=-c;else return null;tn.subVectors(this.origin,i);const h=u*this.direction.dot(jr.crossVectors(tn,jr));if(h<0)return null;const p=u*this.direction.dot(qa.cross(tn));if(p<0||h+p>c)return null;const a=-u*tn.dot(Ya);return a<0?null:this.at(a/c,n)}intersectBVH(e,t){return e.root.intersectRay(this,t)}intersectsBVH(e){return e.root.intersectsRay(this)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}}const ch=new Gd,lh=new rr,gs=new se,eo=new se,Ja=new se,$a=new Go,qv=new Gd(new se(0,0,0),new se(0,0,1));class Yv extends Ht{constructor(e=new Array){super(),this.obstacles=e,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(e,t){const n=this.obstacles;let i=null,r=1/0;const o=this.dBoxMinLength+e.getSpeed()/e.maxSpeed*this.dBoxMinLength;e.worldMatrix.getInverse(lh);for(let c=0,u=n.length;c<u;c++){const h=n[c];if(h!==e&&(gs.copy(h.position).applyMatrix4(lh),gs.z>0&&Math.abs(gs.z)<o)){const p=h.boundingRadius+e.boundingRadius;Math.abs(gs.x)<p&&($a.center.copy(gs),$a.radius=p,qv.intersectBoundingSphere($a,Ja),Ja.z<r&&(r=Ja.z,i=h,eo.copy(gs)))}}if(i!==null){const c=1+(o-eo.z)/o;t.x=(i.boundingRadius-eo.x)*c,t.z=(i.boundingRadius-eo.z)*this.brakingWeight,t.applyRotation(e.rotation)}return t}toJSON(){const e=super.toJSON();e.obstacles=new Array,e.brakingWeight=this.brakingWeight,e.dBoxMinLength=this.dBoxMinLength;for(let t=0,n=this.obstacles.length;t<n;t++)e.obstacles.push(this.obstacles[t].uuid);return e}fromJSON(e){return super.fromJSON(e),this.obstacles=e.obstacles,this.brakingWeight=e.brakingWeight,this.dBoxMinLength=e.dBoxMinLength,this}resolveReferences(e){const t=this.obstacles;for(let n=0,i=t.length;n<i;n++)t[n]=e.get(t[n])}}const Ka=new se,uh=new se,hh=new se,dh=new se;class Jv extends Ht{constructor(e=null,t=new se){super(),this.leader=e,this.offset=t,this._arrive=new Ho,this._arrive.deceleration=1.5}calculate(e,t){const n=this.leader,i=this.offset;Ka.copy(i).applyMatrix4(n.worldMatrix),uh.subVectors(Ka,e.position);const r=uh.length()/(e.maxSpeed+n.getSpeed());return hh.copy(n.velocity).multiplyScalar(r),dh.addVectors(Ka,hh),this._arrive.target=dh,this._arrive.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.leader=this.leader?this.leader.uuid:null,e.offset=this.offset,e}fromJSON(e){return super.fromJSON(e),this.leader=e.leader,this.offset=e.offset,this}resolveReferences(e){this.leader=e.get(this.leader)||null}}const Za=new se,ja=new se,fh=new se,ph=new se,mh=new se;class Wd extends Ht{constructor(e=null,t=1){super(),this.evader=e,this.predictionFactor=t,this._seek=new Vo}calculate(e,t){const n=this.evader;Za.subVectors(n.position,e.position),e.getDirection(ja),n.getDirection(fh);const i=Za.dot(ja)>0,r=ja.dot(fh)<-.95;if(i===!0&&r===!0)return this._seek.target=n.position,this._seek.calculate(e,t),t;let o=Za.length()/(e.maxSpeed+n.getSpeed());return o*=this.predictionFactor,ph.copy(n.velocity).multiplyScalar(o),mh.addVectors(n.position,ph),this._seek.target=mh,this._seek.calculate(e,t),t}toJSON(){const e=super.toJSON();return e.evader=this.evader?this.evader.uuid:null,e.predictionFactor=this.predictionFactor,e}fromJSON(e){return super.fromJSON(e),this.evader=e.evader,this.predictionFactor=e.predictionFactor,this}resolveReferences(e){this.evader=e.get(this.evader)||null}}const to=new se;class $v extends Ht{constructor(){super()}calculate(e,t){const n=e.neighbors;for(let i=0,r=n.length;i<r;i++){const o=n[i];to.subVectors(e.position,o.position);let c=to.length();c===0&&(c=1e-4),to.normalize().divideScalar(c),t.add(to)}return t}}const no=new se,Qa=new se;class Kv extends Ht{constructor(e=1,t=5,n=5){super(),this.radius=e,this.distance=t,this.jitter=n,this._targetLocal=new se,Zv(this.radius,this._targetLocal)}calculate(e,t,n){const i=this.jitter*n;return Qa.x=sr.randFloat(-1,1)*i,Qa.z=sr.randFloat(-1,1)*i,this._targetLocal.add(Qa),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),no.copy(this._targetLocal),no.z+=this.distance,no.applyMatrix4(e.worldMatrix),t.subVectors(no,e.position),t}toJSON(){const e=super.toJSON();return e.radius=this.radius,e.distance=this.distance,e.jitter=this.jitter,e._targetLocal=this._targetLocal.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this.distance=e.distance,this.jitter=e.jitter,this._targetLocal.fromArray(e._targetLocal),this}}function Zv(s,e){const t=Math.random()*Math.PI*2;e.x=s*Math.cos(t),e.z=s*Math.sin(t)}const io=new se;class gh{constructor(e){this.vehicle=e,this.behaviors=new Array,this._steeringForce=new se,this._typesMap=new Map}add(e){return this.behaviors.push(e),this}remove(e){const t=this.behaviors.indexOf(e);return this.behaviors.splice(t,1),this}clear(){return this.behaviors.length=0,this}calculate(e,t){return this._calculateByOrder(e),t.copy(this._steeringForce)}_accumulate(e){const t=this._steeringForce.length(),n=this.vehicle.maxForce-t;return n<=0?!1:(e.length()>n&&e.normalize().multiplyScalar(n),this._steeringForce.add(e),!0)}_calculateByOrder(e){const t=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=t.length;n<i;n++){const r=t[n];if(r.active===!0&&(io.set(0,0,0),r.calculate(this.vehicle,io,e),io.multiplyScalar(r.weight),this._accumulate(io)===!1))return}}toJSON(){const e={type:"SteeringManager",behaviors:new Array},t=this.behaviors;for(let n=0,i=t.length;n<i;n++){const r=t[n];e.behaviors.push(r.toJSON())}return e}fromJSON(e){this.clear();const t=e.behaviors;for(let n=0,i=t.length;n<i;n++){const r=t[n],o=r.type;let c;switch(o){case"SteeringBehavior":c=new Ht().fromJSON(r);break;case"AlignmentBehavior":c=new kv().fromJSON(r);break;case"ArriveBehavior":c=new Ho().fromJSON(r);break;case"CohesionBehavior":c=new Hv().fromJSON(r);break;case"EvadeBehavior":c=new Vd().fromJSON(r);break;case"FleeBehavior":c=new Hd().fromJSON(r);break;case"FollowPathBehavior":c=new Gv().fromJSON(r);break;case"InterposeBehavior":c=new Wv().fromJSON(r);break;case"ObstacleAvoidanceBehavior":c=new Yv().fromJSON(r);break;case"OffsetPursuitBehavior":c=new Jv().fromJSON(r);break;case"PursuitBehavior":c=new Wd().fromJSON(r);break;case"SeekBehavior":c=new Vo().fromJSON(r);break;case"SeparationBehavior":c=new $v().fromJSON(r);break;case"WanderBehavior":c=new Kv().fromJSON(r);break;default:const u=this._typesMap.get(o);if(u!==void 0)c=new u().fromJSON(r);else{gn.warn("YUKA.SteeringManager: Unsupported steering behavior type:",o);continue}}this.add(c)}return this}registerType(e,t){return this._typesMap.set(e,t),this}resolveReferences(e){const t=this.behaviors;for(let n=0,i=t.length;n<i;n++)t[n].resolveReferences(e);return this}}class jv{constructor(e=10){this.count=e,this._history=new Array,this._slot=0;for(let t=0;t<this.count;t++)this._history[t]=new se}calculate(e,t){t.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(e),this._slot++;for(let n=0;n<this.count;n++)t.add(this._history[n]);return t.divideScalar(this.count),t}toJSON(){const e={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},t=this._history;for(let n=0,i=t.length;n<i;n++){const r=t[n];e._history.push(r.toArray(new Array))}return e}fromJSON(e){this.count=e.count,this._slot=e._slot;const t=e._history;this._history.length=0;for(let n=0,i=t.length;n<i;n++){const r=t[n];this._history.push(new se().fromArray(r))}return this}}const _h=new se,so=new se,xh=new se,$s=new se,vh=new se;class Ec extends kd{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new gh(this),this.smoother=null}update(e){return this.steering.calculate(e,_h),xh.copy(_h).divideScalar(this.mass),this.velocity.add(xh.multiplyScalar(e)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),so.copy(this.velocity).multiplyScalar(e),$s.copy(this.position).add(so),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt($s),this.position.copy($s),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,vh),so.copy(vh).multiplyScalar(e),$s.copy(this.position).add(so),this.lookAt($s)),this}toJSON(){const e=super.toJSON();return e.mass=this.mass,e.maxForce=this.maxForce,e.steering=this.steering.toJSON(),e.smoother=this.smoother?this.smoother.toJSON():null,e}fromJSON(e){return super.fromJSON(e),this.mass=e.mass,this.maxForce=e.maxForce,this.steering=new gh(this).fromJSON(e.steering),this.smoother=e.smoother?new jv().fromJSON(e.smoother):null,this}resolveReferences(e){super.resolveReferences(e),this.steering.resolveReferences(e)}}class To{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const yh=new Go,Sh=new se;class Qv extends To{constructor(e=new se){super(),this.size=e,this._aabb=new Wc}touching(e){return yh.set(e.position,e.boundingRadius),this._aabb.intersectsBoundingSphere(yh)}update(e){return e.getWorldPosition(Sh),this._aabb.fromCenterAndSize(Sh,this.size),this}toJSON(){const e=super.toJSON();return e.size=this.size.toArray(new Array),e}fromJSON(e){return super.fromJSON(e),this.size.fromArray(e.size),this}}const ec=new Go;class ey extends To{constructor(e=0){super(),this.radius=e,this._boundingSphere=new Go}touching(e){return e.getWorldPosition(ec.center),ec.radius=e.boundingRadius,this._boundingSphere.intersectsBoundingSphere(ec)}update(e){return e.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const e=super.toJSON();return e.radius=this.radius,e}fromJSON(e){return super.fromJSON(e),this.radius=e.radius,this}}class Mh extends Gc{constructor(e=new To){super(),this.region=e,this.canActivateTrigger=!1,this._typesMap=new Map}check(e){return this.region.touching(e)===!0&&this.execute(e),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const e=super.toJSON();return e.region=this.region.toJSON(),e}fromJSON(e){super.fromJSON(e);const t=e.region;let n=t.type;switch(n){case"TriggerRegion":this.region=new To().fromJSON(t);break;case"RectangularTriggerRegion":this.region=new Qv().fromJSON(t);break;case"SphericalTriggerRegion":this.region=new ey().fromJSON(t);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(t):gn.warn("YUKA.Trigger: Unsupported trigger region type:",t.type)}return this}registerType(e,t){return this._typesMap.set(e,t),this}}const Ks=new Array;class ty{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new Bv}add(e){return this.entities.push(e),e.manager=this,this}remove(e){const t=this.entities.indexOf(e);return this.entities.splice(t,1),e.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(e){const t=this.entities;for(let n=0,i=t.length;n<i;n++){const r=t[n];if(r.name===e)return r}return null}update(e){const t=this.entities,n=this._triggers;for(let i=t.length-1;i>=0;i--){const r=t[i];this.updateEntity(r,e)}for(let i=n.length-1;i>=0;i--){const r=n[i];this.processTrigger(r)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(e),this}updateEntity(e,t){if(e.active===!0){this.updateNeighborhood(e),e._started===!1&&(e.start(),e._started=!0),e.update(t);const n=e.children;for(let o=n.length-1;o>=0;o--){const c=n[o];this.updateEntity(c,t)}if(e instanceof Mh&&this._triggers.push(e),this.spatialIndex!==null){let o=this._indexMap.get(e)||-1;o=this.spatialIndex.updateEntity(e,o),this._indexMap.set(e,o)}const i=e._renderComponent,r=e._renderComponentCallback;i!==null&&r!==null&&r(e,i)}return this}updateNeighborhood(e){if(e.updateNeighborhood===!0){e.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(e.position,e.neighborhoodRadius,Ks):(Ks.length=0,Ks.push(...this.entities));const t=e.neighborhoodRadius*e.neighborhoodRadius;for(let n=0,i=Ks.length;n<i;n++){const r=Ks[n];e!==r&&r.active===!0&&e.position.squaredDistanceTo(r.position)<=t&&e.neighbors.push(r)}}return this}processTrigger(e){e.updateRegion();const t=this.entities;for(let n=t.length-1;n>=0;n--){const i=t[n];e!==i&&i.active===!0&&i.canActivateTrigger===!0&&e.check(i)}return this}sendMessage(e,t,n,i,r){return this._messageDispatcher.dispatch(e,t,n,i,r),this}toJSON(){const e={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function t(n){e.entities.push(n.toJSON());for(let i=0,r=n.children.length;i<r;i++)t(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)t(this.entities[n]);return e}fromJSON(e){this.clear();const t=e.entities,n=e._messageDispatcher,i=new Map;for(let r=0,o=t.length;r<o;r++){const c=t[r],u=c.type;let h;switch(u){case"GameEntity":h=new Gc().fromJSON(c);break;case"MovingEntity":h=new kd().fromJSON(c);break;case"Vehicle":h=new Ec().fromJSON(c);break;case"Trigger":h=new Mh().fromJSON(c);break;default:const p=this._typesMap.get(u);if(p!==void 0)h=new p().fromJSON(c);else{gn.warn("YUKA.EntityManager: Unsupported entity type:",u);continue}}i.set(h.uuid,h),h.parent===null&&this.add(h)}for(let r of i.values())r.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(e,t){return this._typesMap.set(e,t),this}}new Array;new Array;new Array;const wh=10,ny=50;class iy{constructor(e=0){oe(this,"_balance");this._balance=Math.max(0,e)}get balance(){return this._balance}earn(e){return this._balance+=Math.max(0,e),this._balance}spend(e){return e>this._balance?{success:!1,balance:this._balance}:(this._balance-=e,{success:!0,balance:this._balance})}}const sy=8,tc=100,bh=300,ry=.3,Xd=80,Eh=4,Ah=200,Th=3,oy=Th*Th,qd=5,Rh=Xd*qd,ay=Rh*Rh,cy=Ah*Ah,ly=bh*bh,uy=12,hy=8,dy=1e4,nc=60,ro=new at,fy=new Pn(.3,4,4),py=new Jt({color:16729088});class Wo{constructor(e,t){oe(this,"slots");oe(this,"activeCount",0);oe(this,"projectileInstances");oe(this,"entries",[]);oe(this,"entityManager");oe(this,"playerVehicle");this.entityManager=new ty,this.playerVehicle=new Ec,this.slots=Array.from({length:nc},()=>({posX:0,posY:0,posZ:0,velX:0,velY:0,velZ:0,lifeRemaining:0,originX:0,originY:0,originZ:0})),this.projectileInstances=new Vx(fy,py,nc),this.projectileInstances.count=0,this.projectileInstances.frustumCulled=!1,e.add(this.projectileInstances);const n=t.length;for(let i=0;i<n;i++){const r=t[i];r.userData.health===void 0&&(r.userData.health=tc),r.userData.creditValue===void 0&&(r.userData.creditValue=wh+Math.floor(Math.random()*(ny-wh+1)));const o=new Ec;o.position.set(r.position.x,r.position.y,r.position.z),o.maxSpeed=uy,o.maxForce=hy;const c=new Wd(this.playerVehicle);c.active=!1,o.steering.add(c);const u=new Vd(this.playerVehicle);u.active=!1,u.panicDistance=dy,o.steering.add(u),this.entityManager.add(o),this.entries.push({mesh:r,vehicle:o,pursuitBehavior:c,evadeBehavior:u,fireTimer:i*Eh/Math.max(n,1)})}}get projectileCount(){return this.activeCount}update(e,t){const n=t.x,i=t.y,r=t.z;let o=0;for(;o<this.activeCount;){const c=this.slots[o];c.posX+=c.velX*e,c.posY+=c.velY*e,c.posZ+=c.velZ*e,c.lifeRemaining-=e;const u=c.posX-c.originX,h=c.posY-c.originY,p=c.posZ-c.originZ,a=u*u+h*h+p*p;if(c.lifeRemaining<=0||a>=ay){if(this.activeCount--,o<this.activeCount){const l=this.slots[this.activeCount];c.posX=l.posX,c.posY=l.posY,c.posZ=l.posZ,c.velX=l.velX,c.velY=l.velY,c.velZ=l.velZ,c.lifeRemaining=l.lifeRemaining,c.originX=l.originX,c.originY=l.originY,c.originZ=l.originZ}}else ro.makeTranslation(c.posX,c.posY,c.posZ),this.projectileInstances.setMatrixAt(o,ro),o++}this.projectileInstances.count=this.activeCount,this.projectileInstances.instanceMatrix.needsUpdate=!0,this.playerVehicle.position.set(n,i,r);for(const c of this.entries){const{mesh:u,vehicle:h,pursuitBehavior:p,evadeBehavior:a}=c,d=(u.userData.health??tc)/tc,g=h.position.x-n,_=h.position.y-i,m=h.position.z-r,f=g*g+_*_+m*m;d<ry?(p.active=!1,a.active=!0):f<=ly?(p.active=!0,a.active=!1):(p.active=!1,a.active=!1,h.velocity.multiplyScalar(.9))}this.entityManager.update(e);for(const c of this.entries){const{mesh:u,vehicle:h}=c;u.position.set(h.position.x,h.position.y,h.position.z);const p=h.velocity.x,a=h.velocity.y,l=h.velocity.z;p*p+a*a+l*l>.25&&u.lookAt(u.position.x+p,u.position.y+a,u.position.z+l);const d=u.position.x-n,g=u.position.y-i,_=u.position.z-r,m=d*d+g*g+_*_;c.fireTimer-=e,c.fireTimer<=0&&(m<=cy&&this.spawnProjectile(u.position,t),c.fireTimer=Eh)}}checkPlayerHit(e){const t=e.x,n=e.y,i=e.z;let r=0;for(;r<this.activeCount;){const o=this.slots[r],c=o.posX-t,u=o.posY-n,h=o.posZ-i;if(c*c+u*u+h*h<oy){if(this.activeCount--,r<this.activeCount){const p=this.slots[this.activeCount];o.posX=p.posX,o.posY=p.posY,o.posZ=p.posZ,o.velX=p.velX,o.velY=p.velY,o.velZ=p.velZ,o.lifeRemaining=p.lifeRemaining,o.originX=p.originX,o.originY=p.originY,o.originZ=p.originZ,ro.makeTranslation(o.posX,o.posY,o.posZ),this.projectileInstances.setMatrixAt(r,ro)}return this.projectileInstances.count=this.activeCount,this.projectileInstances.instanceMatrix.needsUpdate=!0,!0}r++}return!1}reset(){this.activeCount=0,this.projectileInstances.count=0,this.projectileInstances.instanceMatrix.needsUpdate=!0}spawnProjectile(e,t){if(this.activeCount>=nc)return;const n=t.x-e.x,i=t.y-e.y,r=t.z-e.z,o=n*n+i*i+r*r;if(o===0)return;const c=this.slots[this.activeCount];c.posX=e.x,c.posY=e.y,c.posZ=e.z,c.originX=e.x,c.originY=e.y,c.originZ=e.z;const u=Xd/Math.sqrt(o);c.velX=n*u,c.velY=i*u,c.velZ=r*u,c.lifeRemaining=qd,this.activeCount++}}function my(s){const e=document.createElement("div");e.id="game-over",Object.assign(e.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.85)",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:"100",fontFamily:"monospace"});const t=document.createElement("h1");t.textContent="SHIP DESTROYED",Object.assign(t.style,{fontSize:"3rem",margin:"0 0 1rem",letterSpacing:"0.2em",color:"#ff3300"});const n=document.createElement("p");n.textContent="Hull integrity at zero.",Object.assign(n.style,{fontSize:"1rem",color:"#888",margin:"0 0 2rem"});const i=document.createElement("button");return i.id="restart-btn",i.textContent="RESTART",Object.assign(i.style,{padding:"0.75rem 2.5rem",fontSize:"1.2rem",fontFamily:"monospace",background:"#200000",color:"#ff5500",border:"2px solid #ff3300",cursor:"pointer",letterSpacing:"0.1em"}),i.addEventListener("click",s),e.append(t,n,i),document.body.appendChild(e),document.addEventListener("keydown",r=>{e.style.display!=="none"&&(r.key==="r"||r.key==="R"||r.key==="Enter")&&s()}),{show(){e.style.display="flex",i.focus()},hide(){e.style.display="none"}}}function gy(){const s=document.createElement("div");s.style.cssText=["position:fixed","top:50%","left:50%","width:16px","height:16px","transform:translate(-50%,-50%)","pointer-events:none","z-index:10"].join(";");const e=document.createElement("div");e.style.cssText=["position:absolute","top:50%","left:0","right:0","height:1px","margin-top:-0.5px","background:rgba(255,255,255,0.85)"].join(";");const t=document.createElement("div");t.style.cssText=["position:absolute","left:50%","top:0","bottom:0","width:1px","margin-left:-0.5px","background:rgba(255,255,255,0.85)"].join(";"),s.appendChild(e),s.appendChild(t),document.body.appendChild(s)}const _y="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAIlYAAERnAAABAAgAZGF0YQAAAAA=";function xy(){return typeof AudioContext<"u"?new AudioContext:typeof globalThis.webkitAudioContext<"u"?new globalThis.webkitAudioContext:null}function kn(s,e="white"){for(let t=0;t<s.numberOfChannels;t++){const n=s.getChannelData(t);let i=0;for(let r=0;r<n.length;r++){const o=Math.random()*2-1;e==="brown"?(i=(i+.02*o)/1.02,n[r]=i*3.5):n[r]=o}}}function Hn(s,e,t,n,i,r=1){const o=e.currentTime;s.gain.setValueAtTime(0,o),s.gain.linearRampToValueAtTime(r,o+t),s.gain.setValueAtTime(r,o+t+n),s.gain.linearRampToValueAtTime(0,o+t+n+i)}const li=class li{constructor(){oe(this,"ctx");oe(this,"sfxOutput",null);oe(this,"sfxVolumeScale",1);oe(this,"lowHealthCooldown",0);oe(this,"chaingunNodeId",null);oe(this,"shieldHitLastMs",-1/0);oe(this,"hullHitLastMs",-1/0);oe(this,"lowHealthHitLastMs",-1/0);this.ctx=xy()}setSfxVolumeScale(e){this.sfxVolumeScale=Math.max(0,Math.min(1,e)),this.ctx&&this.sfxOutput&&this.sfxOutput.gain.setValueAtTime(this.sfxVolumeScale,this.ctx.currentTime)}getSfxDestination(e){return this.sfxOutput===null&&(this.sfxOutput=e.createGain(),this.sfxOutput.gain.value=this.sfxVolumeScale,this.sfxOutput.connect(e.destination)),this.sfxOutput}connectToSfxOutput(e,t){this.sfxVolumeScale===1&&this.sfxOutput===null?e.connect(t.destination):e.connect(this.getSfxDestination(t))}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}_hitCooldownAllowed(e,t,n){return t-e>=n}playLaserZap(){const e=this.ctx;if(!e)return;const t=e.createOscillator(),n=e.createGain();t.connect(n),this.connectToSfxOutput(n,e),t.type="sawtooth";const i=e.currentTime;t.frequency.setValueAtTime(880,i),t.frequency.exponentialRampToValueAtTime(110,i+.15),n.gain.setValueAtTime(.4,i),n.gain.linearRampToValueAtTime(0,i+.15),t.start(i),t.stop(i+.15)}startChaingunChatter(){!this.ctx||this.chaingunNodeId!==null||(this._fireChaingunBurst(),this.chaingunNodeId=setInterval(()=>this._fireChaingunBurst(),83))}stopChaingunChatter(){this.chaingunNodeId!==null&&(clearInterval(this.chaingunNodeId),this.chaingunNodeId=null)}playMissileWhoosh(){const e=this.ctx;if(!e)return;const t=.5,n=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate);kn(n,"brown");const i=e.createBufferSource();i.buffer=n;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(600,e.currentTime),r.frequency.linearRampToValueAtTime(2400,e.currentTime+t*.4),r.Q.value=2;const o=e.createGain();Hn(o,e,.05,.2,.25,.6),i.connect(r),r.connect(o),this.connectToSfxOutput(o,e),i.start()}playMissileExplosion(){this._playExplosion(.6)}playAsteroidHit(){const e=this.ctx;if(!e)return;const n=e.createBuffer(1,Math.floor(e.sampleRate*.18),e.sampleRate);kn(n,"brown");const i=e.createBufferSource();i.buffer=n;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const o=e.createGain();Hn(o,e,.001,.05,.13,.5),i.connect(r),r.connect(o),this.connectToSfxOutput(o,e),i.start()}playAsteroidDestroy(){const e=this.ctx;if(!e)return;const t=.4,n=e.createBuffer(1,Math.floor(e.sampleRate*t),e.sampleRate);kn(n,"brown");const i=e.createBufferSource();i.buffer=n;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1800,e.currentTime),r.frequency.exponentialRampToValueAtTime(200,e.currentTime+t);const o=e.createGain();Hn(o,e,.001,.1,.3,.7),i.connect(r),r.connect(o),this.connectToSfxOutput(o,e),i.start()}playEnemyHit(){const e=this.ctx;if(!e)return;const n=e.createBuffer(1,Math.floor(e.sampleRate*.15),e.sampleRate);kn(n);const i=e.createBufferSource();i.buffer=n;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=2200,r.Q.value=3;const o=e.createGain();Hn(o,e,.001,.04,.11,.5),i.connect(r),r.connect(o),this.connectToSfxOutput(o,e),i.start()}playEnemyDestroy(){this._playExplosion(.8)}playPlayerShieldHit(){const e=Date.now();if(!this._hitCooldownAllowed(this.shieldHitLastMs,e,li.SHIELD_HIT_COOLDOWN_MS))return;this.shieldHitLastMs=e;const t=this.ctx;if(!t)return;const i=t.createBuffer(1,Math.floor(t.sampleRate*.1),t.sampleRate);kn(i);const r=t.createBufferSource();r.buffer=i;const o=t.createBiquadFilter();o.type="highpass",o.frequency.value=2800,o.Q.value=4;const c=t.createGain();Hn(c,t,.001,.03,.07,.4),r.connect(o),o.connect(c),this.connectToSfxOutput(c,t),r.start()}playPlayerHullHit(){const e=Date.now();if(!this._hitCooldownAllowed(this.hullHitLastMs,e,li.HULL_HIT_COOLDOWN_MS))return;this.hullHitLastMs=e;const t=this.ctx;if(!t)return;const i=t.createBuffer(1,Math.floor(t.sampleRate*.22),t.sampleRate);kn(i,"brown");const r=t.createBufferSource();r.buffer=i;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=300;const c=t.createGain();Hn(c,t,.001,.08,.14,.6),r.connect(o),o.connect(c),this.connectToSfxOutput(c,t),r.start()}playPlayerLowHealthHit(){const e=Date.now();if(!this._hitCooldownAllowed(this.lowHealthHitLastMs,e,li.LOW_HEALTH_HIT_COOLDOWN_MS))return;this.lowHealthHitLastMs=e;const t=this.ctx;if(!t)return;const i=t.createBuffer(1,Math.floor(t.sampleRate*.3),t.sampleRate);kn(i,"brown");const r=t.createBufferSource();r.buffer=i;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=400;const c=t.createGain();Hn(c,t,.001,.1,.2,.7),r.connect(o),o.connect(c),this.connectToSfxOutput(c,t),r.start();const u=t.createOscillator(),h=t.createGain();u.connect(h),this.connectToSfxOutput(h,t),u.type="square";const p=t.currentTime;u.frequency.setValueAtTime(880,p),u.frequency.linearRampToValueAtTime(660,p+.15),h.gain.setValueAtTime(0,p),h.gain.linearRampToValueAtTime(.25,p+.01),h.gain.setValueAtTime(.25,p+.08),h.gain.linearRampToValueAtTime(0,p+.15),u.start(p),u.stop(p+.15)}playWarpActivation(){const e=this.ctx;if(!e)return;const t=e.createOscillator(),n=e.createGain();t.connect(n),this.connectToSfxOutput(n,e),t.type="sine";const i=e.currentTime,r=1.2;t.frequency.setValueAtTime(80,i),t.frequency.exponentialRampToValueAtTime(2400,i+r*.7),t.frequency.exponentialRampToValueAtTime(100,i+r),n.gain.setValueAtTime(0,i),n.gain.linearRampToValueAtTime(.5,i+.1),n.gain.setValueAtTime(.5,i+r*.7),n.gain.linearRampToValueAtTime(0,i+r),t.start(i),t.stop(i+r)}playUIClick(){const e=this.ctx;if(!e)return;const t=e.createOscillator(),n=e.createGain();t.connect(n),this.connectToSfxOutput(n,e),t.type="square";const i=e.currentTime;t.frequency.setValueAtTime(1200,i),t.frequency.linearRampToValueAtTime(800,i+.04),n.gain.setValueAtTime(.2,i),n.gain.linearRampToValueAtTime(0,i+.04),t.start(i),t.stop(i+.04)}playStorePurchase(){const e=this.ctx;if(!e)return;[523.25,783.99].forEach((n,i)=>{const r=e.createOscillator(),o=e.createGain();r.connect(o),this.connectToSfxOutput(o,e),r.type="sine";const c=e.currentTime+i*.12;r.frequency.setValueAtTime(n,c),o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(.35,c+.02),o.gain.setValueAtTime(.35,c+.08),o.gain.linearRampToValueAtTime(0,c+.18),r.start(c),r.stop(c+.18)})}checkLowHealth(e,t){this.lowHealthCooldown>0&&(this.lowHealthCooldown=Math.max(0,this.lowHealthCooldown-t)),e<.25&&this.lowHealthCooldown===0&&(this._playLowHealthWarning(),this.lowHealthCooldown=3)}resetLowHealthWarning(){this.lowHealthCooldown=0}_fireChaingunBurst(){const e=this.ctx;if(!e)return;const n=e.createBuffer(1,Math.floor(e.sampleRate*.06),e.sampleRate);kn(n);const i=e.createBufferSource();i.buffer=n;const r=e.createBiquadFilter();r.type="bandpass",r.frequency.value=1800,r.Q.value=1.5;const o=e.createGain();Hn(o,e,.001,.01,.05,.4),i.connect(r),r.connect(o),this.connectToSfxOutput(o,e),i.start()}_playExplosion(e){const t=this.ctx;if(!t)return;const n=.55,i=t.createBuffer(1,Math.floor(t.sampleRate*n),t.sampleRate);kn(i,"brown");const r=t.createBufferSource();r.buffer=i;const o=t.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2200,t.currentTime),o.frequency.exponentialRampToValueAtTime(80,t.currentTime+n);const c=t.createGain();Hn(c,t,.001,.05,.5,e),r.connect(o),o.connect(c),this.connectToSfxOutput(c,t),r.start()}_playLowHealthWarning(){const e=this.ctx;e&&[0,.18].forEach(t=>{const n=e.createOscillator(),i=e.createGain();n.connect(i),this.connectToSfxOutput(i,e),n.type="square";const r=e.currentTime+t;n.frequency.setValueAtTime(440,r),i.gain.setValueAtTime(0,r),i.gain.linearRampToValueAtTime(.3,r+.02),i.gain.setValueAtTime(.3,r+.1),i.gain.linearRampToValueAtTime(0,r+.15),n.start(r),n.stop(r+.15)})}};oe(li,"SHIELD_HIT_COOLDOWN_MS",100),oe(li,"HULL_HIT_COOLDOWN_MS",100),oe(li,"LOW_HEALTH_HIT_COOLDOWN_MS",200);let Ac=li;var Zs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ro={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(s){(function(){var e=function(){this.init()};e.prototype={init:function(){var a=this||t;return a._counter=1e3,a._html5AudioPool=[],a.html5PoolSize=10,a._codecs={},a._howls=[],a._muted=!1,a._volume=1,a._canPlayEvent="canplaythrough",a._navigator=typeof window<"u"&&window.navigator?window.navigator:null,a.masterGain=null,a.noAudio=!1,a.usingWebAudio=!0,a.autoSuspend=!0,a.ctx=null,a.autoUnlock=!0,a._setup(),a},volume:function(a){var l=this||t;if(a=parseFloat(a),l.ctx||p(),typeof a<"u"&&a>=0&&a<=1){if(l._volume=a,l._muted)return l;l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var g=l._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=l._howls[d]._soundById(g[_]);m&&m._node&&(m._node.volume=m._volume*a)}return l}return l._volume},mute:function(a){var l=this||t;l.ctx||p(),l._muted=a,l.usingWebAudio&&l.masterGain.gain.setValueAtTime(a?0:l._volume,t.ctx.currentTime);for(var d=0;d<l._howls.length;d++)if(!l._howls[d]._webAudio)for(var g=l._howls[d]._getSoundIds(),_=0;_<g.length;_++){var m=l._howls[d]._soundById(g[_]);m&&m._node&&(m._node.muted=a?!0:m._muted)}return l},stop:function(){for(var a=this||t,l=0;l<a._howls.length;l++)a._howls[l].stop();return a},unload:function(){for(var a=this||t,l=a._howls.length-1;l>=0;l--)a._howls[l].unload();return a.usingWebAudio&&a.ctx&&typeof a.ctx.close<"u"&&(a.ctx.close(),a.ctx=null,p()),a},codecs:function(a){return(this||t)._codecs[a.replace(/^x-/,"")]},_setup:function(){var a=this||t;if(a.state=a.ctx&&a.ctx.state||"suspended",a._autoSuspend(),!a.usingWebAudio)if(typeof Audio<"u")try{var l=new Audio;typeof l.oncanplaythrough>"u"&&(a._canPlayEvent="canplay")}catch{a.noAudio=!0}else a.noAudio=!0;try{var l=new Audio;l.muted&&(a.noAudio=!0)}catch{}return a.noAudio||a._setupCodecs(),a},_setupCodecs:function(){var a=this||t,l=null;try{l=typeof Audio<"u"?new Audio:null}catch{return a}if(!l||typeof l.canPlayType!="function")return a;var d=l.canPlayType("audio/mpeg;").replace(/^no$/,""),g=a._navigator?a._navigator.userAgent:"",_=g.match(/OPR\/(\d+)/g),m=_&&parseInt(_[0].split("/")[1],10)<33,f=g.indexOf("Safari")!==-1&&g.indexOf("Chrome")===-1,x=g.match(/Version\/(.*?) /),v=f&&x&&parseInt(x[1],10)<15;return a._codecs={mp3:!!(!m&&(d||l.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!d,opus:!!l.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!l.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(l.canPlayType('audio/wav; codecs="1"')||l.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!l.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!l.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(l.canPlayType("audio/x-m4a;")||l.canPlayType("audio/m4a;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(l.canPlayType("audio/x-m4b;")||l.canPlayType("audio/m4b;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(l.canPlayType("audio/x-mp4;")||l.canPlayType("audio/mp4;")||l.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!v&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!v&&l.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!l.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(l.canPlayType("audio/x-flac;")||l.canPlayType("audio/flac;")).replace(/^no$/,"")},a},_unlockAudio:function(){var a=this||t;if(!(a._audioUnlocked||!a.ctx)){a._audioUnlocked=!1,a.autoUnlock=!1,!a._mobileUnloaded&&a.ctx.sampleRate!==44100&&(a._mobileUnloaded=!0,a.unload()),a._scratchBuffer=a.ctx.createBuffer(1,1,22050);var l=function(d){for(;a._html5AudioPool.length<a.html5PoolSize;)try{var g=new Audio;g._unlocked=!0,a._releaseHtml5Audio(g)}catch{a.noAudio=!0;break}for(var _=0;_<a._howls.length;_++)if(!a._howls[_]._webAudio)for(var m=a._howls[_]._getSoundIds(),f=0;f<m.length;f++){var x=a._howls[_]._soundById(m[f]);x&&x._node&&!x._node._unlocked&&(x._node._unlocked=!0,x._node.load())}a._autoResume();var v=a.ctx.createBufferSource();v.buffer=a._scratchBuffer,v.connect(a.ctx.destination),typeof v.start>"u"?v.noteOn(0):v.start(0),typeof a.ctx.resume=="function"&&a.ctx.resume(),v.onended=function(){v.disconnect(0),a._audioUnlocked=!0,document.removeEventListener("touchstart",l,!0),document.removeEventListener("touchend",l,!0),document.removeEventListener("click",l,!0),document.removeEventListener("keydown",l,!0);for(var w=0;w<a._howls.length;w++)a._howls[w]._emit("unlock")}};return document.addEventListener("touchstart",l,!0),document.addEventListener("touchend",l,!0),document.addEventListener("click",l,!0),document.addEventListener("keydown",l,!0),a}},_obtainHtml5Audio:function(){var a=this||t;if(a._html5AudioPool.length)return a._html5AudioPool.pop();var l=new Audio().play();return l&&typeof Promise<"u"&&(l instanceof Promise||typeof l.then=="function")&&l.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(a){var l=this||t;return a._unlocked&&l._html5AudioPool.push(a),l},_autoSuspend:function(){var a=this;if(!(!a.autoSuspend||!a.ctx||typeof a.ctx.suspend>"u"||!t.usingWebAudio)){for(var l=0;l<a._howls.length;l++)if(a._howls[l]._webAudio){for(var d=0;d<a._howls[l]._sounds.length;d++)if(!a._howls[l]._sounds[d]._paused)return a}return a._suspendTimer&&clearTimeout(a._suspendTimer),a._suspendTimer=setTimeout(function(){if(a.autoSuspend){a._suspendTimer=null,a.state="suspending";var g=function(){a.state="suspended",a._resumeAfterSuspend&&(delete a._resumeAfterSuspend,a._autoResume())};a.ctx.suspend().then(g,g)}},3e4),a}},_autoResume:function(){var a=this;if(!(!a.ctx||typeof a.ctx.resume>"u"||!t.usingWebAudio))return a.state==="running"&&a.ctx.state!=="interrupted"&&a._suspendTimer?(clearTimeout(a._suspendTimer),a._suspendTimer=null):a.state==="suspended"||a.state==="running"&&a.ctx.state==="interrupted"?(a.ctx.resume().then(function(){a.state="running";for(var l=0;l<a._howls.length;l++)a._howls[l]._emit("resume")}),a._suspendTimer&&(clearTimeout(a._suspendTimer),a._suspendTimer=null)):a.state==="suspending"&&(a._resumeAfterSuspend=!0),a}};var t=new e,n=function(a){var l=this;if(!a.src||a.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}l.init(a)};n.prototype={init:function(a){var l=this;return t.ctx||p(),l._autoplay=a.autoplay||!1,l._format=typeof a.format!="string"?a.format:[a.format],l._html5=a.html5||!1,l._muted=a.mute||!1,l._loop=a.loop||!1,l._pool=a.pool||5,l._preload=typeof a.preload=="boolean"||a.preload==="metadata"?a.preload:!0,l._rate=a.rate||1,l._sprite=a.sprite||{},l._src=typeof a.src!="string"?a.src:[a.src],l._volume=a.volume!==void 0?a.volume:1,l._xhr={method:a.xhr&&a.xhr.method?a.xhr.method:"GET",headers:a.xhr&&a.xhr.headers?a.xhr.headers:null,withCredentials:a.xhr&&a.xhr.withCredentials?a.xhr.withCredentials:!1},l._duration=0,l._state="unloaded",l._sounds=[],l._endTimers={},l._queue=[],l._playLock=!1,l._onend=a.onend?[{fn:a.onend}]:[],l._onfade=a.onfade?[{fn:a.onfade}]:[],l._onload=a.onload?[{fn:a.onload}]:[],l._onloaderror=a.onloaderror?[{fn:a.onloaderror}]:[],l._onplayerror=a.onplayerror?[{fn:a.onplayerror}]:[],l._onpause=a.onpause?[{fn:a.onpause}]:[],l._onplay=a.onplay?[{fn:a.onplay}]:[],l._onstop=a.onstop?[{fn:a.onstop}]:[],l._onmute=a.onmute?[{fn:a.onmute}]:[],l._onvolume=a.onvolume?[{fn:a.onvolume}]:[],l._onrate=a.onrate?[{fn:a.onrate}]:[],l._onseek=a.onseek?[{fn:a.onseek}]:[],l._onunlock=a.onunlock?[{fn:a.onunlock}]:[],l._onresume=[],l._webAudio=t.usingWebAudio&&!l._html5,typeof t.ctx<"u"&&t.ctx&&t.autoUnlock&&t._unlockAudio(),t._howls.push(l),l._autoplay&&l._queue.push({event:"play",action:function(){l.play()}}),l._preload&&l._preload!=="none"&&l.load(),l},load:function(){var a=this,l=null;if(t.noAudio){a._emit("loaderror",null,"No audio support.");return}typeof a._src=="string"&&(a._src=[a._src]);for(var d=0;d<a._src.length;d++){var g,_;if(a._format&&a._format[d])g=a._format[d];else{if(_=a._src[d],typeof _!="string"){a._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}g=/^data:audio\/([^;,]+);/i.exec(_),g||(g=/\.([^.]+)$/.exec(_.split("?",1)[0])),g&&(g=g[1].toLowerCase())}if(g||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),g&&t.codecs(g)){l=a._src[d];break}}if(!l){a._emit("loaderror",null,"No codec support for selected audio sources.");return}return a._src=l,a._state="loading",window.location.protocol==="https:"&&l.slice(0,5)==="http:"&&(a._html5=!0,a._webAudio=!1),new i(a),a._webAudio&&o(a),a},play:function(a,l){var d=this,g=null;if(typeof a=="number")g=a,a=null;else{if(typeof a=="string"&&d._state==="loaded"&&!d._sprite[a])return null;if(typeof a>"u"&&(a="__default",!d._playLock)){for(var _=0,m=0;m<d._sounds.length;m++)d._sounds[m]._paused&&!d._sounds[m]._ended&&(_++,g=d._sounds[m]._id);_===1?a=null:g=null}}var f=g?d._soundById(g):d._inactiveSound();if(!f)return null;if(g&&!a&&(a=f._sprite||"__default"),d._state!=="loaded"){f._sprite=a,f._ended=!1;var x=f._id;return d._queue.push({event:"play",action:function(){d.play(x)}}),x}if(g&&!f._paused)return l||d._loadQueue("play"),f._id;d._webAudio&&t._autoResume();var v=Math.max(0,f._seek>0?f._seek:d._sprite[a][0]/1e3),w=Math.max(0,(d._sprite[a][0]+d._sprite[a][1])/1e3-v),D=w*1e3/Math.abs(f._rate),E=d._sprite[a][0]/1e3,A=(d._sprite[a][0]+d._sprite[a][1])/1e3;f._sprite=a,f._ended=!1;var P=function(){f._paused=!1,f._seek=v,f._start=E,f._stop=A,f._loop=!!(f._loop||d._sprite[a][2])};if(v>=A){d._ended(f);return}var y=f._node;if(d._webAudio){var S=function(){d._playLock=!1,P(),d._refreshBuffer(f);var H=f._muted||d._muted?0:f._volume;y.gain.setValueAtTime(H,t.ctx.currentTime),f._playStart=t.ctx.currentTime,typeof y.bufferSource.start>"u"?f._loop?y.bufferSource.noteGrainOn(0,v,86400):y.bufferSource.noteGrainOn(0,v,w):f._loop?y.bufferSource.start(0,v,86400):y.bufferSource.start(0,v,w),D!==1/0&&(d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),D)),l||setTimeout(function(){d._emit("play",f._id),d._loadQueue()},0)};t.state==="running"&&t.ctx.state!=="interrupted"?S():(d._playLock=!0,d.once("resume",S),d._clearTimer(f._id))}else{var R=function(){y.currentTime=v,y.muted=f._muted||d._muted||t._muted||y.muted,y.volume=f._volume*t.volume(),y.playbackRate=f._rate;try{var H=y.play();if(H&&typeof Promise<"u"&&(H instanceof Promise||typeof H.then=="function")?(d._playLock=!0,P(),H.then(function(){d._playLock=!1,y._unlocked=!0,l?d._loadQueue():d._emit("play",f._id)}).catch(function(){d._playLock=!1,d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),f._ended=!0,f._paused=!0})):l||(d._playLock=!1,P(),d._emit("play",f._id)),y.playbackRate=f._rate,y.paused){d._emit("playerror",f._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}a!=="__default"||f._loop?d._endTimers[f._id]=setTimeout(d._ended.bind(d,f),D):(d._endTimers[f._id]=function(){d._ended(f),y.removeEventListener("ended",d._endTimers[f._id],!1)},y.addEventListener("ended",d._endTimers[f._id],!1))}catch(X){d._emit("playerror",f._id,X)}};y.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(y.src=d._src,y.load());var N=window&&window.ejecta||!y.readyState&&t._navigator.isCocoonJS;if(y.readyState>=3||N)R();else{d._playLock=!0,d._state="loading";var U=function(){d._state="loaded",R(),y.removeEventListener(t._canPlayEvent,U,!1)};y.addEventListener(t._canPlayEvent,U,!1),d._clearTimer(f._id)}}return f._id},pause:function(a){var l=this;if(l._state!=="loaded"||l._playLock)return l._queue.push({event:"pause",action:function(){l.pause(a)}}),l;for(var d=l._getSoundIds(a),g=0;g<d.length;g++){l._clearTimer(d[g]);var _=l._soundById(d[g]);if(_&&!_._paused&&(_._seek=l.seek(d[g]),_._rateSeek=0,_._paused=!0,l._stopFade(d[g]),_._node))if(l._webAudio){if(!_._node.bufferSource)continue;typeof _._node.bufferSource.stop>"u"?_._node.bufferSource.noteOff(0):_._node.bufferSource.stop(0),l._cleanBuffer(_._node)}else(!isNaN(_._node.duration)||_._node.duration===1/0)&&_._node.pause();arguments[1]||l._emit("pause",_?_._id:null)}return l},stop:function(a,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"stop",action:function(){d.stop(a)}}),d;for(var g=d._getSoundIds(a),_=0;_<g.length;_++){d._clearTimer(g[_]);var m=d._soundById(g[_]);m&&(m._seek=m._start||0,m._rateSeek=0,m._paused=!0,m._ended=!0,d._stopFade(g[_]),m._node&&(d._webAudio?m._node.bufferSource&&(typeof m._node.bufferSource.stop>"u"?m._node.bufferSource.noteOff(0):m._node.bufferSource.stop(0),d._cleanBuffer(m._node)):(!isNaN(m._node.duration)||m._node.duration===1/0)&&(m._node.currentTime=m._start||0,m._node.pause(),m._node.duration===1/0&&d._clearSound(m._node))),l||d._emit("stop",m._id))}return d},mute:function(a,l){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"mute",action:function(){d.mute(a,l)}}),d;if(typeof l>"u")if(typeof a=="boolean")d._muted=a;else return d._muted;for(var g=d._getSoundIds(l),_=0;_<g.length;_++){var m=d._soundById(g[_]);m&&(m._muted=a,m._interval&&d._stopFade(m._id),d._webAudio&&m._node?m._node.gain.setValueAtTime(a?0:m._volume,t.ctx.currentTime):m._node&&(m._node.muted=t._muted?!0:a),d._emit("mute",m._id))}return d},volume:function(){var a=this,l=arguments,d,g;if(l.length===0)return a._volume;if(l.length===1||l.length===2&&typeof l[1]>"u"){var _=a._getSoundIds(),m=_.indexOf(l[0]);m>=0?g=parseInt(l[0],10):d=parseFloat(l[0])}else l.length>=2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));var f;if(typeof d<"u"&&d>=0&&d<=1){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"volume",action:function(){a.volume.apply(a,l)}}),a;typeof g>"u"&&(a._volume=d),g=a._getSoundIds(g);for(var x=0;x<g.length;x++)f=a._soundById(g[x]),f&&(f._volume=d,l[2]||a._stopFade(g[x]),a._webAudio&&f._node&&!f._muted?f._node.gain.setValueAtTime(d,t.ctx.currentTime):f._node&&!f._muted&&(f._node.volume=d*t.volume()),a._emit("volume",f._id))}else return f=g?a._soundById(g):a._sounds[0],f?f._volume:0;return a},fade:function(a,l,d,g){var _=this;if(_._state!=="loaded"||_._playLock)return _._queue.push({event:"fade",action:function(){_.fade(a,l,d,g)}}),_;a=Math.min(Math.max(0,parseFloat(a)),1),l=Math.min(Math.max(0,parseFloat(l)),1),d=parseFloat(d),_.volume(a,g);for(var m=_._getSoundIds(g),f=0;f<m.length;f++){var x=_._soundById(m[f]);if(x){if(g||_._stopFade(m[f]),_._webAudio&&!x._muted){var v=t.ctx.currentTime,w=v+d/1e3;x._volume=a,x._node.gain.setValueAtTime(a,v),x._node.gain.linearRampToValueAtTime(l,w)}_._startFadeInterval(x,a,l,d,m[f],typeof g>"u")}}return _},_startFadeInterval:function(a,l,d,g,_,m){var f=this,x=l,v=d-l,w=Math.abs(v/.01),D=Math.max(4,w>0?g/w:g),E=Date.now();a._fadeTo=d,a._interval=setInterval(function(){var A=(Date.now()-E)/g;E=Date.now(),x+=v*A,x=Math.round(x*100)/100,v<0?x=Math.max(d,x):x=Math.min(d,x),f._webAudio?a._volume=x:f.volume(x,a._id,!0),m&&(f._volume=x),(d<l&&x<=d||d>l&&x>=d)&&(clearInterval(a._interval),a._interval=null,a._fadeTo=null,f.volume(d,a._id),f._emit("fade",a._id))},D)},_stopFade:function(a){var l=this,d=l._soundById(a);return d&&d._interval&&(l._webAudio&&d._node.gain.cancelScheduledValues(t.ctx.currentTime),clearInterval(d._interval),d._interval=null,l.volume(d._fadeTo,a),d._fadeTo=null,l._emit("fade",a)),l},loop:function(){var a=this,l=arguments,d,g,_;if(l.length===0)return a._loop;if(l.length===1)if(typeof l[0]=="boolean")d=l[0],a._loop=d;else return _=a._soundById(parseInt(l[0],10)),_?_._loop:!1;else l.length===2&&(d=l[0],g=parseInt(l[1],10));for(var m=a._getSoundIds(g),f=0;f<m.length;f++)_=a._soundById(m[f]),_&&(_._loop=d,a._webAudio&&_._node&&_._node.bufferSource&&(_._node.bufferSource.loop=d,d&&(_._node.bufferSource.loopStart=_._start||0,_._node.bufferSource.loopEnd=_._stop,a.playing(m[f])&&(a.pause(m[f],!0),a.play(m[f],!0)))));return a},rate:function(){var a=this,l=arguments,d,g;if(l.length===0)g=a._sounds[0]._id;else if(l.length===1){var _=a._getSoundIds(),m=_.indexOf(l[0]);m>=0?g=parseInt(l[0],10):d=parseFloat(l[0])}else l.length===2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));var f;if(typeof d=="number"){if(a._state!=="loaded"||a._playLock)return a._queue.push({event:"rate",action:function(){a.rate.apply(a,l)}}),a;typeof g>"u"&&(a._rate=d),g=a._getSoundIds(g);for(var x=0;x<g.length;x++)if(f=a._soundById(g[x]),f){a.playing(g[x])&&(f._rateSeek=a.seek(g[x]),f._playStart=a._webAudio?t.ctx.currentTime:f._playStart),f._rate=d,a._webAudio&&f._node&&f._node.bufferSource?f._node.bufferSource.playbackRate.setValueAtTime(d,t.ctx.currentTime):f._node&&(f._node.playbackRate=d);var v=a.seek(g[x]),w=(a._sprite[f._sprite][0]+a._sprite[f._sprite][1])/1e3-v,D=w*1e3/Math.abs(f._rate);(a._endTimers[g[x]]||!f._paused)&&(a._clearTimer(g[x]),a._endTimers[g[x]]=setTimeout(a._ended.bind(a,f),D)),a._emit("rate",f._id)}}else return f=a._soundById(g),f?f._rate:a._rate;return a},seek:function(){var a=this,l=arguments,d,g;if(l.length===0)a._sounds.length&&(g=a._sounds[0]._id);else if(l.length===1){var _=a._getSoundIds(),m=_.indexOf(l[0]);m>=0?g=parseInt(l[0],10):a._sounds.length&&(g=a._sounds[0]._id,d=parseFloat(l[0]))}else l.length===2&&(d=parseFloat(l[0]),g=parseInt(l[1],10));if(typeof g>"u")return 0;if(typeof d=="number"&&(a._state!=="loaded"||a._playLock))return a._queue.push({event:"seek",action:function(){a.seek.apply(a,l)}}),a;var f=a._soundById(g);if(f)if(typeof d=="number"&&d>=0){var x=a.playing(g);x&&a.pause(g,!0),f._seek=d,f._ended=!1,a._clearTimer(g),!a._webAudio&&f._node&&!isNaN(f._node.duration)&&(f._node.currentTime=d);var v=function(){x&&a.play(g,!0),a._emit("seek",g)};if(x&&!a._webAudio){var w=function(){a._playLock?setTimeout(w,0):v()};setTimeout(w,0)}else v()}else if(a._webAudio){var D=a.playing(g)?t.ctx.currentTime-f._playStart:0,E=f._rateSeek?f._rateSeek-f._seek:0;return f._seek+(E+D*Math.abs(f._rate))}else return f._node.currentTime;return a},playing:function(a){var l=this;if(typeof a=="number"){var d=l._soundById(a);return d?!d._paused:!1}for(var g=0;g<l._sounds.length;g++)if(!l._sounds[g]._paused)return!0;return!1},duration:function(a){var l=this,d=l._duration,g=l._soundById(a);return g&&(d=l._sprite[g._sprite][1]/1e3),d},state:function(){return this._state},unload:function(){for(var a=this,l=a._sounds,d=0;d<l.length;d++)l[d]._paused||a.stop(l[d]._id),a._webAudio||(a._clearSound(l[d]._node),l[d]._node.removeEventListener("error",l[d]._errorFn,!1),l[d]._node.removeEventListener(t._canPlayEvent,l[d]._loadFn,!1),l[d]._node.removeEventListener("ended",l[d]._endFn,!1),t._releaseHtml5Audio(l[d]._node)),delete l[d]._node,a._clearTimer(l[d]._id);var g=t._howls.indexOf(a);g>=0&&t._howls.splice(g,1);var _=!0;for(d=0;d<t._howls.length;d++)if(t._howls[d]._src===a._src||a._src.indexOf(t._howls[d]._src)>=0){_=!1;break}return r&&_&&delete r[a._src],t.noAudio=!1,a._state="unloaded",a._sounds=[],a=null,null},on:function(a,l,d,g){var _=this,m=_["_on"+a];return typeof l=="function"&&m.push(g?{id:d,fn:l,once:g}:{id:d,fn:l}),_},off:function(a,l,d){var g=this,_=g["_on"+a],m=0;if(typeof l=="number"&&(d=l,l=null),l||d)for(m=0;m<_.length;m++){var f=d===_[m].id;if(l===_[m].fn&&f||!l&&f){_.splice(m,1);break}}else if(a)g["_on"+a]=[];else{var x=Object.keys(g);for(m=0;m<x.length;m++)x[m].indexOf("_on")===0&&Array.isArray(g[x[m]])&&(g[x[m]]=[])}return g},once:function(a,l,d){var g=this;return g.on(a,l,d,1),g},_emit:function(a,l,d){for(var g=this,_=g["_on"+a],m=_.length-1;m>=0;m--)(!_[m].id||_[m].id===l||a==="load")&&(setTimeout((function(f){f.call(this,l,d)}).bind(g,_[m].fn),0),_[m].once&&g.off(a,_[m].fn,_[m].id));return g._loadQueue(a),g},_loadQueue:function(a){var l=this;if(l._queue.length>0){var d=l._queue[0];d.event===a&&(l._queue.shift(),l._loadQueue()),a||d.action()}return l},_ended:function(a){var l=this,d=a._sprite;if(!l._webAudio&&a._node&&!a._node.paused&&!a._node.ended&&a._node.currentTime<a._stop)return setTimeout(l._ended.bind(l,a),100),l;var g=!!(a._loop||l._sprite[d][2]);if(l._emit("end",a._id),!l._webAudio&&g&&l.stop(a._id,!0).play(a._id),l._webAudio&&g){l._emit("play",a._id),a._seek=a._start||0,a._rateSeek=0,a._playStart=t.ctx.currentTime;var _=(a._stop-a._start)*1e3/Math.abs(a._rate);l._endTimers[a._id]=setTimeout(l._ended.bind(l,a),_)}return l._webAudio&&!g&&(a._paused=!0,a._ended=!0,a._seek=a._start||0,a._rateSeek=0,l._clearTimer(a._id),l._cleanBuffer(a._node),t._autoSuspend()),!l._webAudio&&!g&&l.stop(a._id,!0),l},_clearTimer:function(a){var l=this;if(l._endTimers[a]){if(typeof l._endTimers[a]!="function")clearTimeout(l._endTimers[a]);else{var d=l._soundById(a);d&&d._node&&d._node.removeEventListener("ended",l._endTimers[a],!1)}delete l._endTimers[a]}return l},_soundById:function(a){for(var l=this,d=0;d<l._sounds.length;d++)if(a===l._sounds[d]._id)return l._sounds[d];return null},_inactiveSound:function(){var a=this;a._drain();for(var l=0;l<a._sounds.length;l++)if(a._sounds[l]._ended)return a._sounds[l].reset();return new i(a)},_drain:function(){var a=this,l=a._pool,d=0,g=0;if(!(a._sounds.length<l)){for(g=0;g<a._sounds.length;g++)a._sounds[g]._ended&&d++;for(g=a._sounds.length-1;g>=0;g--){if(d<=l)return;a._sounds[g]._ended&&(a._webAudio&&a._sounds[g]._node&&a._sounds[g]._node.disconnect(0),a._sounds.splice(g,1),d--)}}},_getSoundIds:function(a){var l=this;if(typeof a>"u"){for(var d=[],g=0;g<l._sounds.length;g++)d.push(l._sounds[g]._id);return d}else return[a]},_refreshBuffer:function(a){var l=this;return a._node.bufferSource=t.ctx.createBufferSource(),a._node.bufferSource.buffer=r[l._src],a._panner?a._node.bufferSource.connect(a._panner):a._node.bufferSource.connect(a._node),a._node.bufferSource.loop=a._loop,a._loop&&(a._node.bufferSource.loopStart=a._start||0,a._node.bufferSource.loopEnd=a._stop||0),a._node.bufferSource.playbackRate.setValueAtTime(a._rate,t.ctx.currentTime),l},_cleanBuffer:function(a){var l=this,d=t._navigator&&t._navigator.vendor.indexOf("Apple")>=0;if(!a.bufferSource)return l;if(t._scratchBuffer&&a.bufferSource&&(a.bufferSource.onended=null,a.bufferSource.disconnect(0),d))try{a.bufferSource.buffer=t._scratchBuffer}catch{}return a.bufferSource=null,l},_clearSound:function(a){var l=/MSIE |Trident\//.test(t._navigator&&t._navigator.userAgent);l||(a.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(a){this._parent=a,this.init()};i.prototype={init:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,l._sounds.push(a),a.create(),a},create:function(){var a=this,l=a._parent,d=t._muted||a._muted||a._parent._muted?0:a._volume;return l._webAudio?(a._node=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),a._node.gain.setValueAtTime(d,t.ctx.currentTime),a._node.paused=!0,a._node.connect(t.masterGain)):t.noAudio||(a._node=t._obtainHtml5Audio(),a._errorFn=a._errorListener.bind(a),a._node.addEventListener("error",a._errorFn,!1),a._loadFn=a._loadListener.bind(a),a._node.addEventListener(t._canPlayEvent,a._loadFn,!1),a._endFn=a._endListener.bind(a),a._node.addEventListener("ended",a._endFn,!1),a._node.src=l._src,a._node.preload=l._preload===!0?"auto":l._preload,a._node.volume=d*t.volume(),a._node.load()),a},reset:function(){var a=this,l=a._parent;return a._muted=l._muted,a._loop=l._loop,a._volume=l._volume,a._rate=l._rate,a._seek=0,a._rateSeek=0,a._paused=!0,a._ended=!0,a._sprite="__default",a._id=++t._counter,a},_errorListener:function(){var a=this;a._parent._emit("loaderror",a._id,a._node.error?a._node.error.code:0),a._node.removeEventListener("error",a._errorFn,!1)},_loadListener:function(){var a=this,l=a._parent;l._duration=Math.ceil(a._node.duration*10)/10,Object.keys(l._sprite).length===0&&(l._sprite={__default:[0,l._duration*1e3]}),l._state!=="loaded"&&(l._state="loaded",l._emit("load"),l._loadQueue()),a._node.removeEventListener(t._canPlayEvent,a._loadFn,!1)},_endListener:function(){var a=this,l=a._parent;l._duration===1/0&&(l._duration=Math.ceil(a._node.duration*10)/10,l._sprite.__default[1]===1/0&&(l._sprite.__default[1]=l._duration*1e3),l._ended(a)),a._node.removeEventListener("ended",a._endFn,!1)}};var r={},o=function(a){var l=a._src;if(r[l]){a._duration=r[l].duration,h(a);return}if(/^data:[^;]+;base64,/.test(l)){for(var d=atob(l.split(",")[1]),g=new Uint8Array(d.length),_=0;_<d.length;++_)g[_]=d.charCodeAt(_);u(g.buffer,a)}else{var m=new XMLHttpRequest;m.open(a._xhr.method,l,!0),m.withCredentials=a._xhr.withCredentials,m.responseType="arraybuffer",a._xhr.headers&&Object.keys(a._xhr.headers).forEach(function(f){m.setRequestHeader(f,a._xhr.headers[f])}),m.onload=function(){var f=(m.status+"")[0];if(f!=="0"&&f!=="2"&&f!=="3"){a._emit("loaderror",null,"Failed loading audio file with status: "+m.status+".");return}u(m.response,a)},m.onerror=function(){a._webAudio&&(a._html5=!0,a._webAudio=!1,a._sounds=[],delete r[l],a.load())},c(m)}},c=function(a){try{a.send()}catch{a.onerror()}},u=function(a,l){var d=function(){l._emit("loaderror",null,"Decoding audio data failed.")},g=function(_){_&&l._sounds.length>0?(r[l._src]=_,h(l,_)):d()};typeof Promise<"u"&&t.ctx.decodeAudioData.length===1?t.ctx.decodeAudioData(a).then(g).catch(d):t.ctx.decodeAudioData(a,g,d)},h=function(a,l){l&&!a._duration&&(a._duration=l.duration),Object.keys(a._sprite).length===0&&(a._sprite={__default:[0,a._duration*1e3]}),a._state!=="loaded"&&(a._state="loaded",a._emit("load"),a._loadQueue())},p=function(){if(t.usingWebAudio){try{typeof AudioContext<"u"?t.ctx=new AudioContext:typeof webkitAudioContext<"u"?t.ctx=new webkitAudioContext:t.usingWebAudio=!1}catch{t.usingWebAudio=!1}t.ctx||(t.usingWebAudio=!1);var a=/iP(hone|od|ad)/.test(t._navigator&&t._navigator.platform),l=t._navigator&&t._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),d=l?parseInt(l[1],10):null;if(a&&d&&d<9){var g=/safari/.test(t._navigator&&t._navigator.userAgent.toLowerCase());t._navigator&&!g&&(t.usingWebAudio=!1)}t.usingWebAudio&&(t.masterGain=typeof t.ctx.createGain>"u"?t.ctx.createGainNode():t.ctx.createGain(),t.masterGain.gain.setValueAtTime(t._muted?0:t._volume,t.ctx.currentTime),t.masterGain.connect(t.ctx.destination)),t._setup()}};s.Howler=t,s.Howl=n,typeof Zs<"u"?(Zs.HowlerGlobal=e,Zs.Howler=t,Zs.Howl=n,Zs.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=t,window.Howl=n,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(t){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var i=n._howls.length-1;i>=0;i--)n._howls[i].stereo(t);return n},HowlerGlobal.prototype.pos=function(t,n,i){var r=this;if(!r.ctx||!r.ctx.listener)return r;if(n=typeof n!="number"?r._pos[1]:n,i=typeof i!="number"?r._pos[2]:i,typeof t=="number")r._pos=[t,n,i],typeof r.ctx.listener.positionX<"u"?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]);else return r._pos;return r},HowlerGlobal.prototype.orientation=function(t,n,i,r,o,c){var u=this;if(!u.ctx||!u.ctx.listener)return u;var h=u._orientation;if(n=typeof n!="number"?h[1]:n,i=typeof i!="number"?h[2]:i,r=typeof r!="number"?h[3]:r,o=typeof o!="number"?h[4]:o,c=typeof c!="number"?h[5]:c,typeof t=="number")u._orientation=[t,n,i,r,o,c],typeof u.ctx.listener.forwardX<"u"?(u.ctx.listener.forwardX.setTargetAtTime(t,Howler.ctx.currentTime,.1),u.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),u.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),u.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),u.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),u.ctx.listener.upZ.setTargetAtTime(c,Howler.ctx.currentTime,.1)):u.ctx.listener.setOrientation(t,n,i,r,o,c);else return h;return u},Howl.prototype.init=function(t){return function(n){var i=this;return i._orientation=n.orientation||[1,0,0],i._stereo=n.stereo||null,i._pos=n.pos||null,i._pannerAttr={coneInnerAngle:typeof n.coneInnerAngle<"u"?n.coneInnerAngle:360,coneOuterAngle:typeof n.coneOuterAngle<"u"?n.coneOuterAngle:360,coneOuterGain:typeof n.coneOuterGain<"u"?n.coneOuterGain:0,distanceModel:typeof n.distanceModel<"u"?n.distanceModel:"inverse",maxDistance:typeof n.maxDistance<"u"?n.maxDistance:1e4,panningModel:typeof n.panningModel<"u"?n.panningModel:"HRTF",refDistance:typeof n.refDistance<"u"?n.refDistance:1,rolloffFactor:typeof n.rolloffFactor<"u"?n.rolloffFactor:1},i._onstereo=n.onstereo?[{fn:n.onstereo}]:[],i._onpos=n.onpos?[{fn:n.onpos}]:[],i._onorientation=n.onorientation?[{fn:n.onorientation}]:[],t.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(t,n){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(t,n)}}),i;var r=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof n>"u")if(typeof t=="number")i._stereo=t,i._pos=[t,0,0];else return i._stereo;for(var o=i._getSoundIds(n),c=0;c<o.length;c++){var u=i._soundById(o[c]);if(u)if(typeof t=="number")u._stereo=t,u._pos=[t,0,0],u._node&&(u._pannerAttr.panningModel="equalpower",(!u._panner||!u._panner.pan)&&e(u,r),r==="spatial"?typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):u._panner.setPosition(t,0,0):u._panner.pan.setValueAtTime(t,Howler.ctx.currentTime)),i._emit("stereo",u._id);else return u._stereo}return i},Howl.prototype.pos=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(t,n,i,r)}}),o;if(n=typeof n!="number"?0:n,i=typeof i!="number"?-.5:i,typeof r>"u")if(typeof t=="number")o._pos=[t,n,i];else return o._pos;for(var c=o._getSoundIds(r),u=0;u<c.length;u++){var h=o._soundById(c[u]);if(h)if(typeof t=="number")h._pos=[t,n,i],h._node&&((!h._panner||h._panner.pan)&&e(h,"spatial"),typeof h._panner.positionX<"u"?(h._panner.positionX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.positionY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setPosition(t,n,i)),o._emit("pos",h._id);else return h._pos}return o},Howl.prototype.orientation=function(t,n,i,r){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(t,n,i,r)}}),o;if(n=typeof n!="number"?o._orientation[1]:n,i=typeof i!="number"?o._orientation[2]:i,typeof r>"u")if(typeof t=="number")o._orientation=[t,n,i];else return o._orientation;for(var c=o._getSoundIds(r),u=0;u<c.length;u++){var h=o._soundById(c[u]);if(h)if(typeof t=="number")h._orientation=[t,n,i],h._node&&(h._panner||(h._pos||(h._pos=o._pos||[0,0,-.5]),e(h,"spatial")),typeof h._panner.orientationX<"u"?(h._panner.orientationX.setValueAtTime(t,Howler.ctx.currentTime),h._panner.orientationY.setValueAtTime(n,Howler.ctx.currentTime),h._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):h._panner.setOrientation(t,n,i)),o._emit("orientation",h._id);else return h._orientation}return o},Howl.prototype.pannerAttr=function(){var t=this,n=arguments,i,r,o;if(!t._webAudio)return t;if(n.length===0)return t._pannerAttr;if(n.length===1)if(typeof n[0]=="object")i=n[0],typeof r>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),t._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:t._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:t._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:t._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:t._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:t._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:t._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:t._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:t._panningModel});else return o=t._soundById(parseInt(n[0],10)),o?o._pannerAttr:t._pannerAttr;else n.length===2&&(i=n[0],r=parseInt(n[1],10));for(var c=t._getSoundIds(r),u=0;u<c.length;u++)if(o=t._soundById(c[u]),o){var h=o._pannerAttr;h={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:h.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:h.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:h.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:h.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:h.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:h.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:h.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:h.panningModel};var p=o._panner;p||(o._pos||(o._pos=t._pos||[0,0,-.5]),e(o,"spatial"),p=o._panner),p.coneInnerAngle=h.coneInnerAngle,p.coneOuterAngle=h.coneOuterAngle,p.coneOuterGain=h.coneOuterGain,p.distanceModel=h.distanceModel,p.maxDistance=h.maxDistance,p.refDistance=h.refDistance,p.rolloffFactor=h.rolloffFactor,p.panningModel=h.panningModel}return t},Sound.prototype.init=function(t){return function(){var n=this,i=n._parent;n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,t.call(this),n._stereo?i.stereo(n._stereo):n._pos&&i.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(t){return function(){var n=this,i=n._parent;return n._orientation=i._orientation,n._stereo=i._stereo,n._pos=i._pos,n._pannerAttr=i._pannerAttr,n._stereo?i.stereo(n._stereo):n._pos?i.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,i._refreshBuffer(n)),t.call(this)}}(Sound.prototype.reset);var e=function(t,n){n=n||"spatial",n==="spatial"?(t._panner=Howler.ctx.createPanner(),t._panner.coneInnerAngle=t._pannerAttr.coneInnerAngle,t._panner.coneOuterAngle=t._pannerAttr.coneOuterAngle,t._panner.coneOuterGain=t._pannerAttr.coneOuterGain,t._panner.distanceModel=t._pannerAttr.distanceModel,t._panner.maxDistance=t._pannerAttr.maxDistance,t._panner.refDistance=t._pannerAttr.refDistance,t._panner.rolloffFactor=t._pannerAttr.rolloffFactor,t._panner.panningModel=t._pannerAttr.panningModel,typeof t._panner.positionX<"u"?(t._panner.positionX.setValueAtTime(t._pos[0],Howler.ctx.currentTime),t._panner.positionY.setValueAtTime(t._pos[1],Howler.ctx.currentTime),t._panner.positionZ.setValueAtTime(t._pos[2],Howler.ctx.currentTime)):t._panner.setPosition(t._pos[0],t._pos[1],t._pos[2]),typeof t._panner.orientationX<"u"?(t._panner.orientationX.setValueAtTime(t._orientation[0],Howler.ctx.currentTime),t._panner.orientationY.setValueAtTime(t._orientation[1],Howler.ctx.currentTime),t._panner.orientationZ.setValueAtTime(t._orientation[2],Howler.ctx.currentTime)):t._panner.setOrientation(t._orientation[0],t._orientation[1],t._orientation[2])):(t._panner=Howler.ctx.createStereoPanner(),t._panner.pan.setValueAtTime(t._stereo,Howler.ctx.currentTime)),t._panner.connect(t._node),t._paused||t._parent.pause(t._id,!0).play(t._id,!0)}})()})(Ro);const Yd="space-game:settings:engineVolume",fo=1,Ch=.24,vy=.48,yy=.6,nr=7,Ph=18,Lh=.005,ic=22050,Sy=1;function Co(s){return Math.max(0,Math.min(1,s))}function My(s){if(s===null)return null;const e=Number(s);return Number.isFinite(e)?Co(e>1?e/100:e):null}function wy(s=typeof localStorage>"u"?void 0:localStorage){if(!s)return fo;try{return My(s.getItem(Yd))??fo}catch{return fo}}function oo(s,e,t){for(let n=0;n<t.length;n++)s.setUint8(e+n,t.charCodeAt(n))}function by(s,e){if(typeof btoa>"u")return _y;const t=2,n=44+s.length*t,i=new ArrayBuffer(n),r=new DataView(i);oo(r,0,"RIFF"),r.setUint32(4,n-8,!0),oo(r,8,"WAVE"),oo(r,12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,e,!0),r.setUint32(28,e*t,!0),r.setUint16(32,t,!0),r.setUint16(34,16,!0),oo(r,36,"data"),r.setUint32(40,s.length*t,!0);let o=44;for(const h of s){const p=Math.max(-1,Math.min(1,h));r.setInt16(o,p<0?p*32768:p*32767,!0),o+=t}let c="";const u=new Uint8Array(i);for(let h=0;h<u.length;h++)c+=String.fromCharCode(u[h]);return`data:audio/wav;base64,${btoa(c)}`}function Ih(s){const e=Math.floor(ic*Sy),t=new Float32Array(e);for(let n=0;n<e;n++){const i=n/ic,r=Math.sin(2*Math.PI*(s?8:4)*i),o=s?Math.sin(2*Math.PI*95*i)*.42+Math.sin(2*Math.PI*190*i)*.24+Math.sin(2*Math.PI*285*i)*.12+Math.sin(2*Math.PI*760*i)*.05:Math.sin(2*Math.PI*55*i)*.48+Math.sin(2*Math.PI*110*i)*.22+Math.sin(2*Math.PI*165*i)*.08,c=s?.8+.2*r:.9+.1*r;t[n]=o*c*.65}return by(t,ic)}function ao(s,e,t,n=nr){const i=Math.min(1,Math.max(0,t)*n);return s+(e-s)*i}function Ey(s,e){const t=s.inSpace&&!s.onSurface&&!s.inWarp,n=Co(s.thrustMagnitude),i=t&&s.boostActive,r=typeof e=="number"?Co(e):wy(e);return{baseShouldPlay:t,boostShouldPlay:i,baseTargetVolume:t?(Ch+(vy-Ch)*n)*r:0,baseTargetRate:t?.88+.26*n:1,boostTargetVolume:i?yy*r:0,boostTargetRate:i?1.28:1}}class Ay{constructor(){oe(this,"base");oe(this,"boost");oe(this,"baseSoundId");oe(this,"boostSoundId");oe(this,"baseVolume",0);oe(this,"boostVolume",0);oe(this,"baseRate",1);oe(this,"boostRate",1);oe(this,"volumeScaleOverride",null);this.base=new Ro.Howl({src:[Ih(!1)],loop:!0,volume:0,rate:1,onloaderror:()=>{}}),this.boost=new Ro.Howl({src:[Ih(!0)],loop:!0,volume:0,rate:1,onloaderror:()=>{}})}update(e,t){const n=Ey(e,this.volumeScaleOverride??void 0);return this.updateBase(n,t),this.updateBoost(n,t),n}setVolumeScale(e){this.volumeScaleOverride=Co(e)}stopAll(){this.baseSoundId!==void 0&&this.base.stop(this.baseSoundId),this.boostSoundId!==void 0&&this.boost.stop(this.boostSoundId),this.baseSoundId=void 0,this.boostSoundId=void 0,this.baseVolume=0,this.boostVolume=0}ensureBasePlaying(){this.baseSoundId!==void 0&&this.base.playing(this.baseSoundId)||(this.baseSoundId=this.base.play(),this.base.volume(0,this.baseSoundId),this.base.rate(this.baseRate,this.baseSoundId))}ensureBoostPlaying(){this.boostSoundId!==void 0&&this.boost.playing(this.boostSoundId)||(this.boostSoundId=this.boost.play(),this.boost.volume(0,this.boostSoundId),this.boost.rate(this.boostRate,this.boostSoundId))}updateBase(e,t){e.baseShouldPlay&&this.ensureBasePlaying();const n=e.baseShouldPlay?nr:Ph;this.baseVolume=ao(this.baseVolume,e.baseTargetVolume,t,n),this.baseRate=ao(this.baseRate,e.baseTargetRate,t,nr),this.baseSoundId!==void 0&&(this.base.volume(this.baseVolume,this.baseSoundId),this.base.rate(this.baseRate,this.baseSoundId),!e.baseShouldPlay&&this.baseVolume<=Lh&&(this.base.stop(this.baseSoundId),this.baseSoundId=void 0,this.baseVolume=0))}updateBoost(e,t){e.boostShouldPlay&&this.ensureBoostPlaying();const n=e.boostShouldPlay?nr:Ph;this.boostVolume=ao(this.boostVolume,e.boostTargetVolume,t,n),this.boostRate=ao(this.boostRate,e.boostTargetRate,t,nr),this.boostSoundId!==void 0&&(this.boost.volume(this.boostVolume,this.boostSoundId),this.boost.rate(this.boostRate,this.boostSoundId),!e.boostShouldPlay&&this.boostVolume<=Lh&&(this.boost.stop(this.boostSoundId),this.boostSoundId=void 0,this.boostVolume=0))}}const Jd=30,oi=1.2,Ty=10;function Ry(s,e){var t;for(const n of e){const o=(((t=n.geometry.parameters)==null?void 0:t.radius)??20)+Jd;if(s.distanceTo(n.position)<=o)return n}return null}function Cy(s){return{enemyPositions:s.enemies.map(e=>e.position.clone()),enemyRotations:s.enemies.map(e=>e.rotation.clone()),asteroidPositions:s.asteroids.map(e=>e.position.clone()),asteroidRotations:s.asteroids.map(e=>e.rotation.clone())}}function Py(s,e){const t=Math.min(s.enemies.length,e.enemyPositions.length);for(let i=0;i<t;i++)s.enemies[i].position.copy(e.enemyPositions[i]),s.enemies[i].rotation.copy(e.enemyRotations[i]);const n=Math.min(s.asteroids.length,e.asteroidPositions.length);for(let i=0;i<n;i++)s.asteroids[i].position.copy(e.asteroidPositions[i]),s.asteroids[i].rotation.copy(e.asteroidRotations[i])}class Ly{constructor(){oe(this,"state","space");oe(this,"fadeAlpha",0);oe(this,"fadeTimer",0);oe(this,"_snapshot",null);oe(this,"postLaunchCooldown",0)}checkProximity(e,t){return this.state!=="space"||this.postLaunchCooldown>0?null:Ry(e,t)}beginLanding(e){this.state==="space"&&(this._snapshot=Cy(e),this.state="landing-fadeout",this.fadeTimer=0,this.fadeAlpha=0)}beginLaunch(e){this.state==="on-surface"&&(this._snapshot&&Py(e,this._snapshot),this.state="launch-fadeout",this.fadeTimer=0,this.fadeAlpha=0)}getSectorSnapshot(){return this._snapshot}update(e){let t=!1,n=!1,i=!1;switch(this.state){case"landing-fadeout":this.fadeTimer+=e,this.fadeAlpha=Math.min(1,this.fadeTimer/oi),this.fadeTimer>=oi&&(this.state="surface-fadein",this.fadeTimer=0,t=!0);break;case"surface-fadein":this.fadeTimer+=e,this.fadeAlpha=Math.max(0,1-this.fadeTimer/oi),this.fadeTimer>=oi&&(this.state="on-surface",this.fadeAlpha=0,i=!0);break;case"launch-fadeout":this.fadeTimer+=e,this.fadeAlpha=Math.min(1,this.fadeTimer/oi),this.fadeTimer>=oi&&(this.state="space-fadein",this.fadeTimer=0,n=!0);break;case"space-fadein":this.fadeTimer+=e,this.fadeAlpha=Math.max(0,1-this.fadeTimer/oi),this.fadeTimer>=oi&&(this.state="space",this.fadeAlpha=0,this.postLaunchCooldown=Ty);break}return this.postLaunchCooldown>0&&(this.postLaunchCooldown=Math.max(0,this.postLaunchCooldown-e)),{switchToSurface:t,switchToSpace:n,onSurface:i}}}const Mn=15,wn=-8,$d=8,Iy=[{name:"Laser Ammo Pack",desc:`+${fs.laser} laser capacitor shots.`,cost:150,category:"ammo",ammoType:"laser",ammoAmount:fs.laser},{name:"Chaingun Ammo Crate",desc:`+${fs.chaingun} high-calibre rounds.`,cost:200,category:"ammo",ammoType:"chaingun",ammoAmount:fs.chaingun},{name:"Missile Rack",desc:`+${fs.missile} proximity-fused warheads.`,cost:300,category:"ammo",ammoType:"missile",ammoAmount:fs.missile},{name:"Plasma Cannon",desc:"Experimental arc-discharge weapon.",cost:1200,category:"weapon"},{name:"Shield Array I",desc:"+25 maximum shield HP.",cost:400,category:"upgrade",upgradeType:"shields",upgradeBonus:25},{name:"Shield Array II",desc:"+50 maximum shield HP.",cost:800,category:"upgrade",upgradeType:"shields",upgradeBonus:50},{name:"Shield Array III",desc:"+75 maximum shield HP.",cost:1500,category:"upgrade",upgradeType:"shields",upgradeBonus:75},{name:"Engine Boost I",desc:"+5 thrust, +5 top speed.",cost:400,category:"upgrade",upgradeType:"engine",engineThrustBonus:5,engineSpeedBonus:5},{name:"Engine Boost II",desc:"+8 thrust, +8 top speed.",cost:800,category:"upgrade",upgradeType:"engine",engineThrustBonus:8,engineSpeedBonus:8},{name:"Engine Boost III",desc:"+12 thrust, +12 top speed.",cost:1500,category:"upgrade",upgradeType:"engine",engineThrustBonus:12,engineSpeedBonus:12},{name:"Hull Plating I",desc:"+25 maximum hull HP.",cost:400,category:"upgrade",upgradeType:"hull",upgradeBonus:25},{name:"Hull Plating II",desc:"+50 maximum hull HP.",cost:800,category:"upgrade",upgradeType:"hull",upgradeBonus:50},{name:"Hull Plating III",desc:"+75 maximum hull HP.",cost:1500,category:"upgrade",upgradeType:"hull",upgradeBonus:75}];function Dy(s,e,t){const{success:n}=e.spend(s.cost);return n?(t&&(s.category==="weapon"?t.unlockWeapon(s.name):s.category==="upgrade"&&(s.upgradeType==="shields"&&s.upgradeBonus!==void 0?t.upgradeMaxShield(s.upgradeBonus):s.upgradeType==="hull"&&s.upgradeBonus!==void 0?t.upgradeMaxHealth(s.upgradeBonus):s.upgradeType==="engine"&&t.upgradeEngine(s.engineThrustBonus??0,s.engineSpeedBonus??0))),{success:!0}):{success:!1}}function Ny(s,e=()=>0){const t=new zt,n=e(Mn,wn,s),i=new je({color:1716048,flatShading:!0}),r=new je({color:859960,flatShading:!0}),o=new Jt({color:6720}),c=new Jt({color:17595}),u=new Jt({color:61183}),h=new Jt({color:13192}),p=new ut(8,5,8),a=new be(p,i);a.position.set(Mn,n+2.5,wn),t.add(a);const l=new ut(10,.5,10),d=new be(l,r);d.position.set(Mn,n+5.25,wn),t.add(d);const g=new Mi(.3,.3,12,6),_=new be(g,o);_.position.set(Mn+5.5,n+6,wn),t.add(_);const m=new ut(4.5,1.6,.3),f=new be(m,c);f.position.set(Mn+5.5,n+12,wn),t.add(f);const x=new Pn(.55,8,6),v=new be(x,u);v.position.set(Mn+5.5,n+13.2,wn),t.add(v);const w=new Hi($d,.25,6,48),D=new be(w,h);D.rotation.x=Math.PI/2,D.position.set(Mn,n+.12,wn),t.add(D);const E=new ir(35071,25,70);E.position.set(Mn,n+8,wn),t.add(E);const A=new ir(52479,10,30);return A.position.set(Mn+5.5,n+13,wn),t.add(A),t}class Uy{constructor(e,t){oe(this,"panel");oe(this,"_isOpen",!1);this.onDismiss=e,this.onBuyAttempt=t,this.panel=this._buildPanel(),document.body.appendChild(this.panel)}get isOpen(){return this._isOpen}show(){this._isOpen=!0,this.panel.style.display="flex"}hide(){this._isOpen=!1,this.panel.style.display="none"}dismiss(){var e;this.hide(),(e=this.onDismiss)==null||e.call(this)}destroy(){this.panel.remove()}_buildPanel(){const e=document.createElement("div");Object.assign(e.style,{display:"none",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.78)",zIndex:"500",justifyContent:"center",alignItems:"center",fontFamily:"monospace"});const t=document.createElement("div");Object.assign(t.style,{background:"rgba(4,16,36,0.97)",border:"2px solid #00aaff",borderRadius:"8px",padding:"32px 36px",minWidth:"540px",maxWidth:"700px",color:"#cce4ff",boxShadow:"0 0 48px rgba(0,160,255,0.35)",position:"relative",maxHeight:"85vh",overflowY:"auto"});const n=document.createElement("button");n.textContent="✕",Object.assign(n.style,{position:"absolute",top:"12px",right:"14px",background:"transparent",border:"1px solid #004488",borderRadius:"4px",color:"#0077cc",fontSize:"16px",cursor:"pointer",fontFamily:"monospace",padding:"2px 8px",lineHeight:"1.4"}),n.title="Close (ESC)",n.addEventListener("mouseenter",()=>{n.style.color="#00ccff",n.style.borderColor="#0099ee"}),n.addEventListener("mouseleave",()=>{n.style.color="#0077cc",n.style.borderColor="#004488"}),n.addEventListener("click",()=>this.dismiss()),t.appendChild(n);const i=document.createElement("div");i.textContent="⬡  SUPPLY DEPOT",Object.assign(i.style,{fontSize:"22px",letterSpacing:"5px",color:"#00ccff",textAlign:"center",marginBottom:"6px",textShadow:"0 0 14px #0077cc"}),t.appendChild(i);const r=document.createElement("div");r.textContent="Weapons, Munitions & Ship Upgrades",Object.assign(r.style,{fontSize:"12px",color:"#336688",textAlign:"center",marginBottom:"24px",letterSpacing:"2px"}),t.appendChild(r);const o=[{label:"MUNITIONS",filter:u=>u.category==="ammo"||u.category==="weapon"},{label:"SHIP UPGRADES — SHIELDS",filter:u=>u.category==="upgrade"&&u.upgradeType==="shields"},{label:"SHIP UPGRADES — ENGINE",filter:u=>u.category==="upgrade"&&u.upgradeType==="engine"},{label:"SHIP UPGRADES — HULL",filter:u=>u.category==="upgrade"&&u.upgradeType==="hull"}];for(const u of o){const h=Iy.filter(u.filter);if(h.length===0)continue;const p=document.createElement("div");p.textContent=u.label,Object.assign(p.style,{fontSize:"11px",color:"#005577",letterSpacing:"3px",marginBottom:"8px",marginTop:"16px",borderBottom:"1px solid #002244",paddingBottom:"4px"}),t.appendChild(p);for(const a of h)t.appendChild(this._buildItemRow(a))}const c=document.createElement("div");return c.textContent="[ ESC ] or ✕ to close",Object.assign(c.style,{textAlign:"center",marginTop:"22px",fontSize:"12px",color:"#334455",letterSpacing:"1px"}),t.appendChild(c),e.appendChild(t),e}_buildItemRow(e){const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0,40,80,0.55)",border:"1px solid #003366",borderRadius:"4px",padding:"12px 14px",marginBottom:"10px",gap:"16px"});const n=document.createElement("div");n.style.flex="1";const i=document.createElement("div");i.textContent=e.name,Object.assign(i.style,{fontSize:"15px",color:"#ddeeff",marginBottom:"4px",fontWeight:"bold"});const r=document.createElement("div");r.textContent=e.desc,Object.assign(r.style,{fontSize:"12px",color:"#5588aa"}),n.appendChild(i),n.appendChild(r);const o=document.createElement("div");Object.assign(o.style,{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px",flexShrink:"0"});const c=document.createElement("div");c.textContent=`${e.cost.toLocaleString()} ₢`,Object.assign(c.style,{fontSize:"15px",color:"#ffdd44",whiteSpace:"nowrap"});const u=document.createElement("button");return u.textContent="BUY",Object.assign(u.style,{background:"rgba(0,60,100,0.85)",border:"1px solid #0055aa",borderRadius:"3px",color:"#00aaff",padding:"4px 14px",cursor:"pointer",fontFamily:"monospace",fontSize:"12px",letterSpacing:"1px",opacity:"1"}),u.addEventListener("mouseenter",()=>{u.style.background="rgba(0,80,140,0.9)",u.style.borderColor="#0088cc",u.style.color="#44ccff"}),u.addEventListener("mouseleave",()=>{u.style.background="rgba(0,60,100,0.85)",u.style.borderColor="#0055aa",u.style.color="#00aaff"}),u.addEventListener("click",()=>{(this.onBuyAttempt?this.onBuyAttempt(e):{success:!1}).success?(u.textContent="PURCHASED",u.style.color="#00ff88",u.style.borderColor="#00aa55",u.style.background="rgba(0,60,30,0.85)"):(u.textContent="NEED CREDITS",u.style.color="#ff6644",u.style.borderColor="#aa2200",u.style.background="rgba(60,10,0,0.85)"),setTimeout(()=>{u.textContent="BUY",u.style.color="#00aaff",u.style.borderColor="#0055aa",u.style.background="rgba(0,60,100,0.85)"},1500)}),o.appendChild(c),o.appendChild(u),t.appendChild(n),t.appendChild(o),t}}const Oy=["Cockpit","Wings","Hull"],Fy={HEALTH:[-.55,-.285,-.87],SHIELDS:[0,-.285,-.87],AMMO:[.48,-.285,-.87],CREDITS:[-.45,-.44,-.87],WEAPON:[-.92,-.245,-.84],LOW_HEALTH_WARNING:[-.76,-.34,-.87],RADAR:[.92,-.23,-.82],CONTACTS:[.92,-.23,-.82],BOOST:[.44,-.44,-.87],SPEED:[0,-.205,-.87],SPEED_NUMERIC:[0,-.205,-.87],SPEED_GAUGE:[0,-.245,-.87]};function Dh(s){const i=s*5.8,r=-.2,o=new Float32Array([0,.14,1.9,0,.14,-1.55,i,.14,r,0,-.14,1.9,0,-.14,-1.55,i,-.14,r]),c=s===-1?[0,2,1,3,4,5,0,1,4,0,4,3,1,2,5,1,5,4,2,0,3,2,3,5]:[0,1,2,3,5,4,0,4,1,0,3,4,1,5,2,1,4,5,2,3,0,2,5,3],u=new bt;return u.setAttribute("position",new $t(o,3)),u.setIndex(c),u.computeVertexNormals(),u}function dn(s,e,t,n,i){return{name:s,material:e,position:n,rotation:i,geometry:new ut(...t)}}function sc(s,e,t=.75){return{name:s,material:"cockpit",position:e,geometry:new Pn(t,8,6,0,Math.PI*2,0,Math.PI/2)}}function js(s,e,t,n=.45,i=.6){return{name:s,material:"engine",position:[e,1.3,t],rotation:[Math.PI/2,0,0],geometry:new Mi(n,i,2.2,8)}}function Qs(s,e,t,n=.44){return{name:s,material:"glow",position:[e,1.3,t],rotation:[-Math.PI/2,0,0],geometry:new Fc(n,8)}}function nn(s,e,t){return{name:s,material:"strut",position:[e,.8,t],geometry:new Mi(.1,.15,1,6)}}const Kd={Cockpit:[{id:"cockpit-standard",slot:"Cockpit",name:"Standard Cockpit",createMeshSpecs:()=>[sc("standard-cockpit-dome",[0,2.2,2.2])]},{id:"cockpit-razor",slot:"Cockpit",name:"Razor Canopy",createMeshSpecs:()=>[{name:"razor-forward-canopy",material:"cockpit",position:[0,2.05,2.45],rotation:[Math.PI/2,Math.PI/4,0],geometry:new Xn(.85,1.8,4)}]},{id:"cockpit-twin-bubble",slot:"Cockpit",name:"Twin Bubble Cockpit",createMeshSpecs:()=>[sc("left-bubble-canopy",[-.45,2.1,2.15],.48),sc("right-bubble-canopy",[.45,2.1,2.15],.48),dn("twin-bubble-center-spine","dark",[.18,.22,1.35],[0,2.08,2.2])]}],Wings:[{id:"wings-standard",slot:"Wings",name:"Standard Wings",createMeshSpecs:()=>[dn("standard-left-wing","dark",[5,.3,3.5],[-3.6,1.25,.5]),dn("standard-right-wing","dark",[5,.3,3.5],[3.6,1.25,.5])]},{id:"wings-delta",slot:"Wings",name:"Delta Wings",createMeshSpecs:()=>[{name:"delta-left-wing",material:"dark",position:[0,1.24,.55],geometry:Dh(-1)},{name:"delta-right-wing",material:"dark",position:[0,1.24,.55],geometry:Dh(1)}]},{id:"wings-forked",slot:"Wings",name:"Forked Wings",createMeshSpecs:()=>[dn("forked-left-forward-wing","dark",[3.4,.25,1.1],[-3.2,1.3,1.85],[0,.18,0]),dn("forked-left-rear-wing","dark",[3.7,.25,.9],[-3.3,1.2,-1.1],[0,-.2,0]),dn("forked-right-forward-wing","dark",[3.4,.25,1.1],[3.2,1.3,1.85],[0,-.18,0]),dn("forked-right-rear-wing","dark",[3.7,.25,.9],[3.3,1.2,-1.1],[0,.2,0])]}],Hull:[{id:"hull-standard",slot:"Hull",name:"Standard Hull",createMeshSpecs:()=>[{...dn("standard-fuselage","hull",[2.2,1.4,8],[0,1.5,0]),marker:!0},{name:"standard-nose-cone",material:"hull",position:[0,1.5,5.4],rotation:[Math.PI/2,0,0],geometry:new Xn(1.1,2.8,8)},js("standard-left-engine",-.75,-4.1),Qs("standard-left-engine-glow",-.75,-5.3),js("standard-right-engine",.75,-4.1),Qs("standard-right-engine-glow",.75,-5.3),nn("standard-front-left-strut",-.8,2.5),nn("standard-front-right-strut",.8,2.5),nn("standard-rear-left-strut",-.8,-2.5),nn("standard-rear-right-strut",.8,-2.5)]},{id:"hull-spear",slot:"Hull",name:"Spear Hull",createMeshSpecs:()=>[{name:"spear-fuselage",material:"hull",position:[0,1.45,-.2],rotation:[Math.PI/2,0,0],marker:!0,geometry:new Mi(.8,1.1,7.6,6)},{name:"spear-long-nose",material:"hull",position:[0,1.45,5.15],rotation:[Math.PI/2,0,0],geometry:new Xn(.85,3.4,6)},js("spear-main-engine",0,-4.3,.65,.85),Qs("spear-main-engine-glow",0,-5.5,.62),nn("spear-front-left-strut",-.55,2.1),nn("spear-front-right-strut",.55,2.1),nn("spear-rear-left-strut",-.7,-2.6),nn("spear-rear-right-strut",.7,-2.6)]},{id:"hull-twin-boom",slot:"Hull",name:"Twin Boom Hull",createMeshSpecs:()=>[{...dn("twin-boom-center-keel","hull",[1.1,1,5.6],[0,1.45,.5]),marker:!0},dn("twin-boom-left-body","hull",[.8,.9,6.7],[-1.05,1.35,-.25]),dn("twin-boom-right-body","hull",[.8,.9,6.7],[1.05,1.35,-.25]),{name:"twin-boom-arrow-nose",material:"hull",position:[0,1.45,4.75],rotation:[Math.PI/2,0,0],geometry:new Xn(1,2.4,4)},js("twin-boom-left-engine",-1.05,-4.2,.35,.5),Qs("twin-boom-left-engine-glow",-1.05,-5.35,.36),js("twin-boom-right-engine",1.05,-4.2,.35,.5),Qs("twin-boom-right-engine-glow",1.05,-5.35,.36),nn("twin-boom-front-left-strut",-1.1,2.3),nn("twin-boom-front-right-strut",1.1,2.3),nn("twin-boom-rear-left-strut",-1.1,-2.4),nn("twin-boom-rear-right-strut",1.1,-2.4)]}]},Zd=[0,3,-6.4],By={Hull:[0,0,0],Wings:[0,0,0],Cockpit:[0,0,0]},Ln={cockpit:"cockpit-standard",wings:"wings-standard",hull:"hull-standard"};function zy(){return{hull:new je({color:8952234,flatShading:!0}),dark:new je({color:4478310,flatShading:!0}),cockpit:new Jt({color:4500223}),engine:new je({color:2236979,flatShading:!0}),glow:new Jt({color:16737792}),strut:new je({color:3359829,flatShading:!0})}}function po(s,e){return Kd[s].find(t=>t.id===e)}function rc(s,e){const t=po(s,e);if(!t)throw new Error(`Unknown ${s} variant: ${e}`);return t}function Vi(s){const e=(s==null?void 0:s.cockpit)??(s==null?void 0:s.cockpitId),t=(s==null?void 0:s.wings)??(s==null?void 0:s.wingsId),n=(s==null?void 0:s.hull)??(s==null?void 0:s.hullId),i=e&&po("Cockpit",e)?e:Ln.cockpit,r=t&&po("Wings",t)?t:Ln.wings,o=n&&po("Hull",n)?n:Ln.hull;return{cockpit:i,wings:r,hull:o}}function ky(s,e,t){return s.createMeshSpecs().map(n=>{const i=new be(n.geometry,e[n.material]);return i.name=n.name,i.position.set(t.x+n.position[0],t.y+n.position[1],t.z+n.position[2]),n.rotation&&i.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2]),i.userData.shipPartSlot=s.slot,i.userData.shipPartVariantId=s.id,n.marker&&(i.userData.shipMarker=!0),i})}function oc(s,e,t){const n=new zt;n.name=`${s.slot}-mount`,n.userData.shipPartRoot=!0,n.userData.shipPartSlot=s.slot,n.userData.shipPartVariantId=s.id,n.userData.mountPoint=[...By[s.slot]];for(const i of ky(s,e,t))n.add(i);if(s.slot==="Cockpit")for(const i of Vy(e,t,s.id))n.add(i);return n}function Hy([s,e,t]){const[n,i,r]=Zd;return new I(n-s,i+e,-t+r)}function Vy(s,e,t){const n=new ut(.055,.018,.006);return Cd.map(i=>{const r=new zt;r.name=i,r.userData.cockpitReadoutNode=!0,r.userData.cockpitReadoutName=i,r.userData.shipPartVariantId=t;const o=Hy(Fy[i]).add(e);r.position.copy(o);const c=new be(n.clone(),s.glow);return c.name=`${i}-surface`,c.userData.cockpitReadoutSurface=!0,r.add(c),r})}function Gy(s){s.traverse(e=>{e instanceof be&&e.geometry.dispose()})}function Wy(s,e){const t=s.children.filter(n=>n.userData.shipPartRoot);for(const n of t)s.remove(n),e&&Gy(n)}function Xy(s,e,t,n){const i=rc("Hull",e.hull),r=rc("Wings",e.wings),o=rc("Cockpit",e.cockpit);s.add(oc(i,t,n)),s.add(oc(r,t,n)),s.add(oc(o,t,n)),s.userData.shipLoadout={...e}}let Tc=null;function Xc(s,e,t,n={}){const i=new zt;return i.name="composed-ship",i.userData.composedShip=!0,Tc=i,jd({cockpit:s,wings:e,hull:t},i,n),i}function jd(s,e=Tc,t={}){if(!e){const o=Vi(s);return Xc(o.cockpit,o.wings,o.hull,t)}const n=Vi(s),i=t.materials??zy(),r=t.origin??new I;return Wy(e,t.disposeReplacedGeometry??!0),Xy(e,n,i,r),Tc=e,e}function qy(s){let e=null;return s.traverse(t=>{!e&&t instanceof be&&t.userData.shipMarker&&(e=t)}),e}function Qd(s){const[e,t,n]=Zd;s.position.set(e,-t,n),s.rotation.set(0,Math.PI,0)}const Yy=6,ef=1.7,Di=0,Ni=-12,tf=6,_s=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],Jy=.5*(Math.sqrt(3)-1),er=(3-Math.sqrt(3))/6;let Nh=-1;const qt=new Uint8Array(512);function $y(s){if(s===Nh)return;Nh=s;let e=(s>>>0)+1;function t(){e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}for(let n=0;n<256;n++)qt[n]=n;for(let n=255;n>0;n--){const i=Math.floor(t()*(n+1))&255,r=qt[n];qt[n]=qt[i],qt[i]=r}for(let n=0;n<256;n++)qt[256+n]=qt[n]}function ac(s,e){const t=(s+e)*Jy,n=Math.floor(s+t),i=Math.floor(e+t),r=(n+i)*er,o=s-(n-r),c=e-(i-r),u=o>c?1:0,h=o>c?0:1,p=o-u+er,a=c-h+er,l=o-1+2*er,d=c-1+2*er,g=n&255,_=i&255,m=qt[g+qt[_]]%8,f=qt[g+u+qt[_+h]]%8,x=qt[g+1+qt[_+1]]%8;let v=0,w=.5-o*o-c*c;return w>0&&(w*=w,v+=w*w*(_s[m][0]*o+_s[m][1]*c)),w=.5-p*p-a*a,w>0&&(w*=w,v+=w*w*(_s[f][0]*p+_s[f][1]*a)),w=.5-l*l-d*d,w>0&&(w*=w,v+=w*w*(_s[x][0]*l+_s[x][1]*d)),70*v}function Xo(s,e,t){$y(t);const n=ac(s*.04,e*.04)*4+ac(s*.09,e*.09)*2+ac(s*.2,e*.2)*.8,i=Math.sqrt(s*s+e*e),r=i<30?0:Math.min(1,(i-30)/35);return n*r}function Ky(s){const n=new Is(500,500,50,50);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let o=0;o<i.count;o++)i.setY(o,Xo(i.getX(o),i.getZ(o),s));i.needsUpdate=!0,n.computeVertexNormals();const r=new je({color:10516552,flatShading:!0,side:Tn});return new be(n,r)}function Zy(s,e=Ln){const t=new zt,n=Xo(Di,Ni,s),i=new Jt({color:16763904}),r=new I(Di,n,Ni),o=Xc(e.cockpit,e.wings,e.hull,{origin:r});t.add(o);const c=new Hi(tf*.85,.25,6,48),u=new be(c,i);u.rotation.x=Math.PI/2,u.position.set(Di,n+.1,Ni),t.add(u);const h=new Xn(1.2,4,6),p=new be(h,new Jt({color:16729088}));p.rotation.x=Math.PI/2,p.position.set(Di,n+.3,Ni/2),t.add(p);const a=new ir(4491519,15,100);a.position.set(Di,n+6,Ni),t.add(a);const l=new ir(16733440,8,30);l.position.set(Di,n+1.3,Ni-5),t.add(l);const d=qy(o);if(!d)throw new Error("Hull variant must provide a ship marker mesh");return{marker:d,group:t}}function jy(s,e=Ln){const t=new Md,n=new Me(13928522);t.background=n,t.fog=new Uo(n,180,460);const i=new Td(7377088,1.8);t.add(i);const r=new Ad(16769152,5);r.position.set(3,5,2),t.add(r),t.add(Ky(s));const{marker:o,group:c}=Zy(s,e);return t.add(c),t.add(Ny(s,Xo)),{scene:t,shipMarker:o}}class Qy{constructor(e){oe(this,"seed");oe(this,"keys",{});oe(this,"_eLatch",!1);oe(this,"_onKeyDown");oe(this,"_onKeyUp");this.seed=e,this._onKeyDown=t=>{const n=t.key.toLowerCase();this.keys[n]=!0,n==="e"&&(this._eLatch=!0)},this._onKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1}}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.keys={},this._eLatch=!1}clearInput(){this.keys={},this._eLatch=!1}update(e,t,n){const i=Math.min(e,.1),r=Yy,o=new Gi().setFromEuler(new an(0,n.y,0,"YXZ")),c=new I(0,0,-1).applyQuaternion(o),u=new I(1,0,0).applyQuaternion(o);this.keys.w&&t.addScaledVector(c,r*i),this.keys.s&&t.addScaledVector(c,-r*i),this.keys.a&&t.addScaledVector(u,-r*i),this.keys.d&&t.addScaledVector(u,r*i);const h=Xo(t.x,t.z,this.seed);t.y=h+ef;const p=t.x-Di,a=t.z-Ni,l=Math.sqrt(p*p+a*a)<=tf,d=this._eLatch;return this._eLatch=!1,{nearShip:l,launchRequested:l&&d}}}const eS=15,Uh=.5,Oh=.5,cc=3,co=.5,tS=2,lo=["Cygnus Expanse","Orion Reach","Perseus Arm","Sagittarius Deep","Vela Corridor","Hydra Void","Centaurus Drift","Aquila Passage","Lyra Basin","Scorpius Rift","Taurus Cloud","Gemini Cluster","Andromeda Fringe","Cassiopeia Shoal","Eridanus Expanse"];function nf(s){const e=((s-1)%lo.length+lo.length)%lo.length;return`Sector ${s} — ${lo[e]}`}function nS(s,e){return s.distanceTo(e.position)<=eS}class iS{constructor(e=1){oe(this,"state","idle");oe(this,"flashAlpha",0);oe(this,"nameAlpha",0);oe(this,"sectorId");oe(this,"timer",0);oe(this,"cooldownTimer",0);this.sectorId=e}canWarp(){return this.state==="idle"&&this.cooldownTimer<=0}beginWarp(){this.canWarp()&&(this.state="warp-out",this.timer=0,this.flashAlpha=0,this.nameAlpha=0)}reset(e=1){this.sectorId=e,this.state="idle",this.timer=0,this.cooldownTimer=0,this.flashAlpha=0,this.nameAlpha=0}update(e){let t=!1;switch(this.state){case"warp-out":this.timer+=e,this.flashAlpha=Math.min(1,this.timer/Uh),this.timer>=Uh&&(t=!0,this.sectorId++,this.state="warp-in",this.timer=0,this.flashAlpha=1);break;case"warp-in":this.timer+=e,this.flashAlpha=Math.max(0,1-this.timer/Oh),this.timer>=Oh&&(this.state="showing-name",this.timer=0,this.flashAlpha=0,this.nameAlpha=0);break;case"showing-name":{this.timer+=e;const n=this.timer;n<co?this.nameAlpha=n/co:n<cc-co?this.nameAlpha=1:n<cc?this.nameAlpha=(cc-n)/co:(this.nameAlpha=0,this.state="idle",this.timer=0,this.cooldownTimer=tS);break}case"idle":this.cooldownTimer>0&&(this.cooldownTimer=Math.max(0,this.cooldownTimer-e));break}return{warpNow:t}}}const sf="spacegame_save_v1";function qo(s,e=localStorage){e.setItem(sf,JSON.stringify(s))}function rf(s=localStorage){const e=s.getItem(sf);if(e===null)return null;try{const t=JSON.parse(e);return typeof t.credits!="number"||typeof t.sectorId!="number"||typeof t.health!="number"||typeof t.shield!="number"||typeof t.shieldUpgrade!="number"||typeof t.hullUpgrade!="number"||typeof t.engineThrustBonus!="number"||typeof t.engineSpeedBonus!="number"||!Array.isArray(t.unlockedWeapons)||typeof t.laserAmmo!="number"||typeof t.chaingunAmmo!="number"||typeof t.missileAmmo!="number"?null:{...t,loadout:Vi(t.loadout??Ln)}}catch{return null}}function sS(s,e){return s.credits===e.credits&&s.sectorId===e.sectorId&&s.health===e.health&&s.shield===e.shield&&s.shieldUpgrade===e.shieldUpgrade&&s.hullUpgrade===e.hullUpgrade&&s.engineThrustBonus===e.engineThrustBonus&&s.engineSpeedBonus===e.engineSpeedBonus&&s.laserAmmo===e.laserAmmo&&s.chaingunAmmo===e.chaingunAmmo&&s.missileAmmo===e.missileAmmo&&s.loadout.cockpit===e.loadout.cockpit&&s.loadout.wings===e.loadout.wings&&s.loadout.hull===e.loadout.hull&&s.unlockedWeapons.length===e.unlockedWeapons.length&&s.unlockedWeapons.every((t,n)=>t===e.unlockedWeapons[n])}function rS(s){return()=>{var n;const e=s.getState(),t=((n=s.now)==null?void 0:n.call(s))??new Date;return qo(e,s.storage),{savedAt:t,state:e}}}function oS(s){return()=>{const e=rf(s.storage);return e===null?"missing":!sS(s.getCurrentState(),e)&&!(s.confirmLoad??(n=>window.confirm(n)))("Load last save? Unsaved progress will be lost.")?"cancelled":(s.applyState(e),"loaded")}}const of=.1,af=5e3,aS=5e3,cS=300;function lS(){return new Uo(5,cS,aS)}function uo(s,e,t,n,i,r){e==="space"?s.render(t,n):e==="surface"&&i!==null&&s.render(i,r)}const uS="Esc",hS=["Sound","Controls","Ship","Save Game"],dS="space-game:settings:masterVolume",fS="space-game:settings:sfxVolume",cf=["master","sfx","engine"],Fh={master:"Master",sfx:"SFX",engine:"Engine"},lf={master:dS,sfx:fS,engine:Yd},lc={master:100,sfx:100,engine:Math.round(fo*100)};function pS(s="Sound"){return{isOpen:!1,activeTab:s}}const mS={Cockpit:"cockpit",Wings:"wings",Hull:"hull"};function gS(s){return`settings-ship-preview--${s}`}function _S(s=Ln){const e=Vi(s),t={Cockpit:e.cockpit,Wings:e.wings,Hull:e.hull};return Oy.map(n=>({slot:n,variants:Kd[n].map(i=>({slot:n,id:i.id,name:i.name,selected:i.id===t[n],available:!0,costLabel:"Free",previewClass:gS(i.id)}))}))}function Yo(){return typeof localStorage>"u"?void 0:localStorage}function Jo(s){return Number.isFinite(s)?Math.max(0,Math.min(100,Math.round(s))):0}function xS(s){return Jo(s)/100}function vS(s){if(s===null)return null;const e=Number(s);return Number.isFinite(e)?Jo(e>=0&&e<=1?e*100:e):null}function uc(s,e=Yo()){if(!e)return lc[s];try{return vS(e.getItem(lf[s]))??lc[s]}catch{return lc[s]}}function yS(s,e,t=Yo()){const n=Jo(e);if(t)try{t.setItem(lf[s],String(n))}catch{}return n}function qc(s={}){return{setMasterVolume(e){var t;Ro.Howler.volume(e),(t=s.master)==null||t.call(s,e)},setSfxVolume(e){var t;(t=s.sfx)==null||t.call(s,e)},setEngineVolume(e){var t;(t=s.engine)==null||t.call(s,e)}}}function Bh(s,e,t=qc()){const n=Jo(e),i=xS(n);return s==="master"?t.setMasterVolume(i):s==="sfx"?t.setSfxVolume(i):t.setEngineVolume(i),n}function SS(s=Yo()){return{master:uc("master",s),sfx:uc("sfx",s),engine:uc("engine",s)}}function MS(s={}){const e=s.storage??Yo(),t=s.volumeLayer??qc(s.volumeHandlers),n=SS(e),i={get preferences(){return{...n}},getVolume(r){return n[r]},setVolume(r,o){const c=yS(r,o,e);return n[r]=c,Bh(r,c,t),c}};if(s.applyInitial!==!1)for(const r of cf)Bh(r,n[r],t);return i}function wS(s){return cf.map(e=>({category:e,label:Fh[e],value:s.getVolume(e),ariaLabel:`${Fh[e]} volume`,min:0,max:100,step:1}))}function bS(s,e){Object.assign(s.style,e)}function ES(){if(document.getElementById("settings-menu-style"))return;const s=document.createElement("style");s.id="settings-menu-style",s.textContent=`
    .settings-menu-root {
      align-items: center;
      background:
        linear-gradient(180deg, rgba(8, 12, 18, 0.72), rgba(4, 5, 8, 0.86)),
        radial-gradient(circle at 50% 20%, rgba(255, 172, 86, 0.18), transparent 38%);
      color: #e9f7ef;
      display: none;
      font-family: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
      inset: 0;
      justify-content: center;
      padding: 28px;
      position: fixed;
      z-index: 500;
    }

    .settings-menu-root.is-open {
      display: flex;
    }

    .settings-panel {
      background: linear-gradient(180deg, rgba(25, 31, 38, 0.96), rgba(12, 15, 20, 0.98));
      border: 2px solid #b78a42;
      box-shadow: 0 0 0 3px rgba(31, 41, 45, 0.9), 0 18px 60px rgba(0, 0, 0, 0.55);
      clip-path: polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px);
      max-width: 760px;
      min-height: 440px;
      width: min(760px, 100%);
    }

    .settings-header {
      align-items: center;
      border-bottom: 1px solid rgba(183, 138, 66, 0.65);
      display: flex;
      gap: 18px;
      justify-content: space-between;
      padding: 18px 20px;
    }

    .settings-title {
      color: #ffd58d;
      font-size: 22px;
      font-weight: 800;
      letter-spacing: 0;
      text-transform: uppercase;
    }

    .settings-key {
      color: #93d7c5;
      font-size: 13px;
      margin-top: 4px;
    }

    .settings-close {
      background: #2f1f1b;
      border: 1px solid #e0a15e;
      color: #ffe1b3;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      height: 36px;
      min-width: 80px;
    }

    .settings-body {
      display: grid;
      gap: 0;
      grid-template-columns: 190px 1fr;
      min-height: 360px;
    }

    .settings-tabs {
      background: rgba(6, 13, 16, 0.7);
      border-right: 1px solid rgba(183, 138, 66, 0.45);
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 18px 14px;
    }

    .settings-tab {
      background: #111d22;
      border: 1px solid rgba(112, 152, 137, 0.65);
      color: #bfe9db;
      cursor: pointer;
      font: inherit;
      height: 42px;
      text-align: left;
      padding: 0 12px;
    }

    .settings-tab.is-active {
      background: #27351f;
      border-color: #d8a54f;
      color: #ffd58d;
      box-shadow: inset 4px 0 0 #d8a54f;
    }

    .settings-content {
      padding: 24px;
    }

    .settings-content h2 {
      color: #ffd58d;
      font-size: 18px;
      letter-spacing: 0;
      margin: 0 0 14px;
      text-transform: uppercase;
    }

    .settings-content p,
    .settings-content li {
      color: #c8d8d2;
      font-size: 14px;
      line-height: 1.55;
    }

    .settings-content ul {
      margin: 0;
      padding-left: 18px;
    }

    .settings-controls-list {
      display: grid;
      gap: 8px;
    }

    .settings-control-row {
      align-items: center;
      background: rgba(8, 18, 20, 0.7);
      border: 1px solid rgba(112, 152, 137, 0.42);
      color: #d7eee6;
      display: grid;
      font: inherit;
      gap: 12px;
      grid-template-columns: minmax(150px, 1fr) 150px;
      min-height: 42px;
      padding: 8px 10px;
      text-align: left;
      width: 100%;
    }

    button.settings-control-row {
      cursor: pointer;
    }

    button.settings-control-row:hover,
    button.settings-control-row.is-waiting {
      border-color: #ffd58d;
      color: #fff4d3;
    }

    .settings-control-binding {
      color: #ffd58d;
      font-weight: 800;
      text-align: right;
      text-transform: uppercase;
    }

    .settings-control-note {
      color: #93d7c5;
      font-size: 12px;
      grid-column: 1 / -1;
    }

    .settings-controls-error {
      color: #ff9a8c;
      font-size: 13px;
      margin: 0 0 12px;
      min-height: 20px;
    }

    .settings-controls-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 16px;
    }

    .settings-reset {
      background: #2f1f1b;
      border: 1px solid #e0a15e;
      color: #ffe1b3;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      min-height: 36px;
      padding: 0 12px;
    }

    .settings-sound-panel {
      display: flex;
      flex-direction: column;
      gap: 18px;
      max-width: 430px;
    }

    .settings-volume-row {
      display: grid;
      gap: 10px;
      grid-template-columns: 92px minmax(0, 1fr) 52px;
      align-items: center;
    }

    .settings-volume-label {
      color: #dffbf0;
      font-size: 14px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .settings-volume-slider {
      accent-color: #d8a54f;
      cursor: pointer;
      width: 100%;
    }

    .settings-volume-value {
      color: #ffd58d;
      font-size: 15px;
      font-weight: 800;
      text-align: right;
    }

    .settings-save-panel {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 360px;
    }

    .settings-save-actions {
      display: grid;
      gap: 12px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .settings-action {
      background: #17282b;
      border: 1px solid rgba(147, 215, 197, 0.8);
      color: #dffbf0;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      min-height: 44px;
      padding: 0 12px;
    }

    .settings-action:hover,
    .settings-action:focus-visible {
      background: #20383a;
      border-color: #ffd58d;
      color: #ffd58d;
      outline: none;
    }

    .settings-action.is-danger {
      background: #2b1c1a;
      border-color: rgba(224, 161, 94, 0.9);
      color: #ffe1b3;
    }

    .settings-save-status {
      color: #93d7c5;
      font-size: 14px;
      min-height: 24px;
      opacity: 0;
      transition: opacity 360ms ease;
    }

    .settings-save-status.is-visible {
      opacity: 1;
    }

    .settings-save-status[data-tone="warning"] {
      color: #ffd58d;
    }

    .settings-save-status[data-tone="danger"] {
      color: #ffb3a5;
    }

    .settings-ship-panel {
      display: grid;
      gap: 14px;
    }

    .settings-ship-slots {
      display: grid;
      gap: 12px;
    }

    .settings-ship-slot {
      background: rgba(8, 18, 20, 0.58);
      border: 1px solid rgba(112, 152, 137, 0.42);
      padding: 10px;
    }

    .settings-ship-slot-title {
      color: #dffbf0;
      font-size: 13px;
      font-weight: 800;
      margin: 0 0 8px;
      text-transform: uppercase;
    }

    .settings-ship-variants {
      display: grid;
      gap: 8px;
    }

    .settings-ship-variant {
      align-items: center;
      background: #101b20;
      border: 1px solid rgba(112, 152, 137, 0.65);
      color: #d7eee6;
      cursor: pointer;
      display: grid;
      font: inherit;
      gap: 10px;
      grid-template-columns: 72px minmax(0, 1fr) 54px;
      min-height: 52px;
      padding: 6px 8px;
      text-align: left;
      width: 100%;
    }

    .settings-ship-variant:hover,
    .settings-ship-variant:focus-visible {
      border-color: #ffd58d;
      color: #fff4d3;
      outline: none;
    }

    .settings-ship-variant.is-selected {
      background: #27351f;
      border-color: #d8a54f;
      box-shadow: inset 4px 0 0 #d8a54f;
      color: #ffd58d;
    }

    .settings-ship-preview {
      background:
        linear-gradient(180deg, rgba(36, 48, 52, 0.96), rgba(10, 15, 18, 0.96));
      border: 1px solid rgba(147, 215, 197, 0.55);
      display: block;
      height: 38px;
      overflow: hidden;
      position: relative;
      width: 58px;
    }

    .settings-ship-preview span {
      background: #88a0aa;
      display: block;
      position: absolute;
    }

    .settings-ship-preview-mark-1 {
      height: 18px;
      left: 22px;
      top: 10px;
      width: 14px;
    }

    .settings-ship-preview-mark-2 {
      height: 8px;
      left: 8px;
      top: 15px;
      width: 16px;
    }

    .settings-ship-preview-mark-3 {
      height: 8px;
      right: 8px;
      top: 15px;
      width: 16px;
    }

    .settings-ship-preview-mark-4 {
      background: #ff7a2c;
      height: 5px;
      left: 25px;
      top: 29px;
      width: 8px;
    }

    .settings-ship-preview--cockpit-standard .settings-ship-preview-mark-1 {
      background: #44aaff;
      border-radius: 50% 50% 20% 20%;
      height: 22px;
      left: 19px;
      top: 8px;
      width: 20px;
    }

    .settings-ship-preview--cockpit-razor .settings-ship-preview-mark-1 {
      background: #44aaff;
      clip-path: polygon(50% 0, 100% 72%, 50% 100%, 0 72%);
      height: 26px;
      left: 17px;
      top: 6px;
      width: 24px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-1,
    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-2 {
      background: #44aaff;
      border-radius: 50%;
      height: 18px;
      top: 10px;
      width: 18px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-1 {
      left: 13px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-2 {
      left: 28px;
    }

    .settings-ship-preview--cockpit-twin-bubble .settings-ship-preview-mark-3 {
      background: #445566;
      height: 24px;
      left: 27px;
      top: 7px;
      width: 4px;
    }

    .settings-ship-preview--wings-standard .settings-ship-preview-mark-1 {
      height: 24px;
      left: 25px;
      top: 7px;
      width: 8px;
    }

    .settings-ship-preview--wings-standard .settings-ship-preview-mark-2,
    .settings-ship-preview--wings-standard .settings-ship-preview-mark-3 {
      background: #445566;
      height: 12px;
      top: 14px;
      width: 22px;
    }

    .settings-ship-preview--wings-delta .settings-ship-preview-mark-2,
    .settings-ship-preview--wings-delta .settings-ship-preview-mark-3 {
      background: #445566;
      clip-path: polygon(0 50%, 100% 0, 100% 100%);
      height: 28px;
      top: 5px;
      width: 25px;
    }

    .settings-ship-preview--wings-delta .settings-ship-preview-mark-2 {
      left: 4px;
    }

    .settings-ship-preview--wings-delta .settings-ship-preview-mark-3 {
      right: 4px;
      transform: scaleX(-1);
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-2,
    .settings-ship-preview--wings-forked .settings-ship-preview-mark-3,
    .settings-ship-preview--wings-forked .settings-ship-preview-mark-4 {
      background: #445566;
      height: 7px;
      width: 21px;
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-2 {
      left: 6px;
      top: 9px;
      transform: rotate(-12deg);
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-3 {
      right: 6px;
      top: 9px;
      transform: rotate(12deg);
    }

    .settings-ship-preview--wings-forked .settings-ship-preview-mark-4 {
      left: 19px;
      top: 23px;
      width: 20px;
    }

    .settings-ship-preview--hull-standard .settings-ship-preview-mark-1 {
      height: 25px;
      left: 24px;
      top: 7px;
      width: 10px;
    }

    .settings-ship-preview--hull-standard .settings-ship-preview-mark-2 {
      clip-path: polygon(50% 0, 100% 100%, 0 100%);
      height: 12px;
      left: 21px;
      top: 3px;
      width: 16px;
    }

    .settings-ship-preview--hull-spear .settings-ship-preview-mark-1 {
      clip-path: polygon(50% 0, 100% 28%, 72% 100%, 28% 100%, 0 28%);
      height: 31px;
      left: 22px;
      top: 4px;
      width: 14px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-1 {
      height: 28px;
      left: 26px;
      top: 5px;
      width: 6px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-2,
    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-3 {
      height: 25px;
      top: 8px;
      width: 8px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-2 {
      left: 13px;
    }

    .settings-ship-preview--hull-twin-boom .settings-ship-preview-mark-3 {
      right: 13px;
    }

    .settings-ship-name {
      overflow-wrap: anywhere;
    }

    .settings-ship-cost {
      color: #93d7c5;
      font-size: 12px;
      font-weight: 800;
      text-align: right;
      text-transform: uppercase;
    }

    .settings-ship-actions {
      display: grid;
      gap: 10px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .settings-ship-status {
      color: #93d7c5;
      font-size: 13px;
      min-height: 20px;
    }

    @media (max-width: 640px) {
      .settings-menu-root {
        padding: 14px;
      }

      .settings-body {
        grid-template-columns: 1fr;
      }

      .settings-tabs {
        border-right: 0;
        border-bottom: 1px solid rgba(183, 138, 66, 0.45);
        flex-direction: row;
        overflow-x: auto;
      }

      .settings-tab {
        min-width: 130px;
      }

      .settings-save-actions {
        grid-template-columns: 1fr;
      }

      .settings-ship-actions {
        grid-template-columns: 1fr;
      }

      .settings-volume-row {
        grid-template-columns: 1fr 52px;
      }

      .settings-volume-label {
        grid-column: 1 / -1;
      }
    }
  `,document.head.appendChild(s)}function AS(s){return`${String(s.getHours()).padStart(2,"0")}:${String(s.getMinutes()).padStart(2,"0")}`}function TS(s,e){s.innerHTML="";const t=document.createElement("div");t.className="settings-sound-panel";const n=document.createElement("h2");n.textContent="Sound",t.appendChild(n);for(const i of wS(e)){const r=document.createElement("label");r.className="settings-volume-row";const o=document.createElement("span");o.className="settings-volume-label",o.textContent=i.label;const c=document.createElement("input");c.className="settings-volume-slider",c.type="range",c.min=String(i.min),c.max=String(i.max),c.step=String(i.step),c.value=String(i.value),c.setAttribute("aria-label",i.ariaLabel);const u=document.createElement("span");u.className="settings-volume-value",u.textContent=c.value,c.addEventListener("input",()=>{const h=e.setVolume(i.category,Number(c.value));u.textContent=String(h),c.value=String(h)}),r.append(o,c,u),t.appendChild(r)}s.appendChild(t)}function RS(s,e){s.innerHTML="";const t=document.createElement("div");t.className="settings-save-panel";const n=document.createElement("h2");n.textContent="Save Game";const i=document.createElement("div");i.className="settings-save-actions";const r=document.createElement("button");r.className="settings-action",r.type="button",r.textContent="Save Now";const o=document.createElement("button");o.className="settings-action is-danger",o.type="button",o.textContent="Load Last Save";const c=document.createElement("div");c.className="settings-save-status",c.setAttribute("role","status"),c.setAttribute("aria-live","polite");let u,h;const p=(a,l="success")=>{u!==void 0&&window.clearTimeout(u),h!==void 0&&window.clearTimeout(h),c.textContent=a,c.dataset.tone=l,c.classList.add("is-visible"),u=window.setTimeout(()=>{c.classList.remove("is-visible")},2800),h=window.setTimeout(()=>{c.textContent=""},3300)};r.addEventListener("click",()=>{if(!e.onSaveNow){p("Save unavailable","warning");return}const a=e.onSaveNow();p(`Saved at ${AS(a.savedAt)}`)}),o.addEventListener("click",()=>{if(!e.onLoadLastSave){p("Load unavailable","warning");return}const a=e.onLoadLastSave(),l={loaded:{text:"Loaded last save",tone:"success"},cancelled:{text:"Load cancelled",tone:"warning"},missing:{text:"No save found",tone:"danger"}};p(l[a].text,l[a].tone)}),i.append(r,o),t.append(n,i,c),s.appendChild(t)}function CS(s,e){s.innerHTML="";const t=document.createElement("h2");t.textContent="Controls",s.appendChild(t);const n=document.createElement("div");n.className="settings-controls-error",n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.textContent=e.errorMessage,s.appendChild(n);const i=document.createElement("div");i.className="settings-controls-list";for(const c of iv(e.bindings)){const u=document.createElement(c.remappable?"button":"div");if(u.className="settings-control-row",u.setAttribute("data-control-action",c.id),c.remappable){const a=c.id,l=u;l.type="button",l.classList.toggle("is-waiting",e.waitingAction===a),l.addEventListener("click",()=>e.onStartRebind(a))}const h=document.createElement("span");h.textContent=c.label;const p=document.createElement("span");if(p.className="settings-control-binding",p.textContent=c.remappable&&e.waitingAction===c.id?"Press key":c.remappable?Nd(c.binding):c.binding,u.append(h,p),c.note){const a=document.createElement("span");a.className="settings-control-note",a.textContent=c.note,u.appendChild(a)}i.appendChild(u)}const r=document.createElement("div");r.className="settings-controls-actions";const o=document.createElement("button");o.className="settings-reset",o.type="button",o.textContent="Reset to defaults",o.addEventListener("click",e.onReset),r.appendChild(o),s.append(i,r)}function PS(s){const e=document.createElement("span");e.className=`settings-ship-preview ${s.previewClass}`,e.dataset.slot=s.slot,e.dataset.variantId=s.id,e.setAttribute("aria-hidden","true");for(let t=1;t<=4;t++){const n=document.createElement("span");n.className=`settings-ship-preview-mark-${t}`,e.appendChild(n)}return e}function LS(s,e){s.innerHTML="";const t=document.createElement("div");t.className="settings-ship-panel";const n=document.createElement("h2");n.textContent="Ship";const i=document.createElement("div");i.className="settings-ship-slots";for(const p of _S(e.pendingLoadout)){const a=document.createElement("section");a.className="settings-ship-slot";const l=document.createElement("h3");l.className="settings-ship-slot-title",l.textContent=p.slot;const d=document.createElement("div");d.className="settings-ship-variants";for(const g of p.variants){const _=document.createElement("button");_.className="settings-ship-variant",_.classList.toggle("is-selected",g.selected),_.type="button",_.dataset.shipSlot=g.slot,_.dataset.shipVariant=g.id,_.setAttribute("aria-pressed",String(g.selected)),_.addEventListener("click",()=>e.onSelectVariant(g.slot,g.id));const m=document.createElement("span");m.className="settings-ship-name",m.textContent=g.name;const f=document.createElement("span");f.className="settings-ship-cost",f.textContent=g.costLabel,_.append(PS(g),m,f),d.appendChild(_)}a.append(l,d),i.appendChild(a)}const r=document.createElement("div");r.className="settings-ship-actions";const o=document.createElement("button");o.className="settings-action",o.type="button",o.textContent="Apply",o.addEventListener("click",e.onApply);const c=document.createElement("button");c.className="settings-action is-danger",c.type="button",c.textContent="Revert",c.addEventListener("click",e.onRevert);const u=document.createElement("button");u.className="settings-action is-danger",u.type="button",u.textContent="Cancel",u.addEventListener("click",e.onCancel),r.append(o,c,u);const h=document.createElement("div");h.className="settings-ship-status",h.setAttribute("role","status"),h.setAttribute("aria-live","polite"),h.textContent=e.statusMessage,t.append(n,i,r,h),s.appendChild(t)}function IS(s,e,t,n,i,r){if(e==="Sound"){TS(s,n);return}if(e==="Controls"){CS(s,i);return}if(e==="Ship"){LS(s,r);return}if(e==="Save Game"){RS(s,t);return}const o={Sound:"",Controls:"",Ship:"","Save Game":""};s.innerHTML=o[e]}function DS(s={}){ES();const e=pS(),t=MS(s.sound),n=s.controlStorage;let i=s.controlBindings?{...s.controlBindings}:n?Ud(n):Fo(),r=null,o="",c=null,u="";const h=document.createElement("div");h.className="settings-menu-root",h.setAttribute("role","dialog"),h.setAttribute("aria-modal","true"),h.setAttribute("aria-label","Settings menu");const p=document.createElement("section");p.className="settings-panel";const a=document.createElement("header");a.className="settings-header";const l=document.createElement("div"),d=document.createElement("div");d.className="settings-title",d.textContent="Settings";const g=document.createElement("div");g.className="settings-key",g.textContent=`${uS} toggles menu. Click the canvas after closing to resume mouse flight.`,l.append(d,g);const _=document.createElement("button");_.className="settings-close",_.type="button",_.textContent="Close",a.append(l,_);const m=document.createElement("div");m.className="settings-body";const f=document.createElement("nav");f.className="settings-tabs",f.setAttribute("aria-label","Settings sections");const x=document.createElement("div");x.className="settings-content";const v=new Map;for(const N of hS){const U=document.createElement("button");U.className="settings-tab",U.type="button",U.textContent=N,U.addEventListener("click",()=>R.selectTab(N)),v.set(N,U),f.appendChild(U)}m.append(f,x),p.append(a,m),h.appendChild(p),_.addEventListener("click",()=>R.close());const w=N=>{var U;i={...N},n?wc(i,n):wc(i),(U=s.onControlBindingsChange)==null||U.call(s,i)},D=(N,U)=>`${Nd(U.binding)} is already assigned to ${U.label}; ${Qx(N)} was not changed.`,E=()=>{var N,U;return Vi(((U=(N=s.ship)==null?void 0:N.getLoadout)==null?void 0:U.call(N))??Ln)},A=()=>{c=E()},P=()=>{c=null,u=""},y=()=>{h.classList.toggle("is-open",e.isOpen),h.setAttribute("aria-hidden",String(!e.isOpen)),bS(h,{pointerEvents:e.isOpen?"auto":"none"});for(const[N,U]of v){const H=N===e.activeTab;U.classList.toggle("is-active",H),U.setAttribute("aria-selected",String(H))}IS(x,e.activeTab,s,t,{bindings:i,waitingAction:r,errorMessage:o,onStartRebind:N=>{r=N,o="",y()},onReset:()=>{var U;r=null,o="",i=n?zu(n):zu(),(U=s.onControlBindingsChange)==null||U.call(s,i),y()}},{pendingLoadout:c??E(),statusMessage:u,onSelectVariant:(N,U)=>{c={...c??E(),[mS[N]]:U},u="",y()},onApply:()=>{var H;const N=c??E();if(!((H=s.ship)!=null&&H.onApplyLoadout)){u="Ship apply unavailable",y();return}const U=s.ship.onApplyLoadout(N);c=Vi(U??N),u="Applied and saved",y()},onRevert:()=>{A(),u="Reverted",y()},onCancel:()=>{P(),R.close()}})},S=N=>{if(!r)return;N.preventDefault(),N.stopImmediatePropagation();const U=r,H=Dd(N),X=tv(i,U,H);r=null,X.success?(o="",w(X.bindings)):o=D(U,X.conflict),y()};document.addEventListener("keydown",S,!0);const R={element:h,get isOpen(){return e.isOpen},get activeTab(){return e.activeTab},open(){var N;e.isOpen||(e.activeTab==="Ship"&&A(),e.isOpen=!0,y(),(N=s.onOpen)==null||N.call(s))},close(){var N;e.isOpen&&(e.isOpen=!1,y(),e.activeTab==="Ship"&&P(),(N=s.onClose)==null||N.call(s))},toggle(){e.isOpen?this.close():this.open()},selectTab(N){var U;e.activeTab!==N&&(e.activeTab==="Ship"&&P(),e.activeTab=N,N==="Ship"&&A(),y(),(U=s.onTabChange)==null||U.call(s,N))}};return y(),document.body.appendChild(h),R}function Rc(s){return[...s.asteroids,...s.enemies]}function NS(s,e,t){if(!s.hit||!s.hitObject)return;const n=s.hitObject,i=e.enemies.includes(n);if(n.userData.health<=0){i?t.onEnemyDestroyed(n):t.onAsteroidDestroyed(n);return}i?t.onEnemyHit(n):t.onAsteroidHit(n)}const Yc=100,Jc=100,zh=4,kh=.15,US=20,$e=new Md;$e.background=new Me(5);$e.fog=lS();const OS=new Td(4478327,2.5);$e.add(OS);const uf=new Ad(16772829,2.5);uf.position.set(5,8,-3);$e.add(uf);const Je=new Ft(75,window.innerWidth/window.innerHeight,of,af),hf=new ir(16777215,1.2,3);hf.position.set(0,.3,-.6);Je.add(hf);const Ne=Kx();Je.add(Ne.group);let _n={...Ln};const bs=Xc(_n.cockpit,_n.wings,_n.hull);Qd(bs);Je.add(bs);Ne.bindToCockpit(bs);$e.add(Je);const Nt=new Ft(75,window.innerWidth/window.innerHeight,of,af);gy();const df=2e3,mo=new Float32Array(df*3);for(let s=0;s<df;s++){const e=Math.random()*Math.PI*2,t=Math.acos(2*Math.random()-1),n=800+Math.random()*200;mo[s*3]=n*Math.sin(t)*Math.cos(e),mo[s*3+1]=n*Math.sin(t)*Math.sin(e),mo[s*3+2]=n*Math.cos(t)}const ff=new bt;ff.setAttribute("position",new $t(mo,3));$e.add(new Gx(ff,new bd({color:16777215,size:1.5})));const rn=new zx({antialias:!0});rn.setSize(window.innerWidth,window.innerHeight);rn.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(rn.domElement);const ar=document.createElement("div");Object.assign(ar.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"black",opacity:"0",pointerEvents:"none",zIndex:"100",transition:"none"});document.body.appendChild(ar);const sn=document.createElement("div");Object.assign(sn.style,{position:"fixed",bottom:"10%",width:"100%",textAlign:"center",color:"#ffdd88",fontFamily:"monospace",fontSize:"18px",pointerEvents:"none",zIndex:"50",opacity:"0",textShadow:"0 0 8px #ff8800"});sn.textContent="▲ Walk to your ship ahead to launch ▲";document.body.appendChild(sn);const gi=document.createElement("div");Object.assign(gi.style,{position:"fixed",top:"20%",width:"100%",textAlign:"center",color:"#00ccff",fontFamily:"monospace",fontSize:"16px",pointerEvents:"none",zIndex:"50",opacity:"0",textShadow:"0 0 8px #0088cc",letterSpacing:"2px"});gi.textContent="⬡  SUPPLY DEPOT nearby";document.body.appendChild(gi);const cr=document.createElement("div");Object.assign(cr.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,200,255,0.15)",opacity:"0",pointerEvents:"none",zIndex:"90",transition:"none"});document.body.appendChild(cr);const lr=document.createElement("div");Object.assign(lr.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(80,140,255,0.9) 40%, rgba(0,20,80,0.95) 100%)",opacity:"0",pointerEvents:"none",zIndex:"200",transition:"none"});document.body.appendChild(lr);const vi=document.createElement("div");Object.assign(vi.style,{position:"fixed",top:"30%",width:"100%",textAlign:"center",color:"#88ccff",fontFamily:"monospace",fontSize:"28px",letterSpacing:"4px",textTransform:"uppercase",pointerEvents:"none",zIndex:"150",opacity:"0",textShadow:"0 0 20px #4488ff, 0 0 40px #2244ff"});document.body.appendChild(vi);const Ns=document.createElement("div");Object.assign(Ns.style,{position:"fixed",top:"12px",right:"16px",color:"#00ffcc",fontFamily:"monospace",fontSize:"16px",pointerEvents:"none",zIndex:"50",textShadow:"0 0 8px #00cc99",letterSpacing:"1px"});Ns.textContent="⬡ 0 CR";document.body.appendChild(Ns);const Ge=new Ac,hi=new Ay,_t=new an(0,0,0,"YXZ");let on=Ud();const Qe=new hv(on);Qe.attach();const Re=new Fv(Yc,Jc),Kt=new iy(0),vn=new Av($e,ws.laser),yi=new Pv($e,ws.chaingun),xn=new Ov($e,ws.missile);let $n="laser",qn=!1,Ve=ko($e,Math.floor(Math.random()*4294967295)),fi=new Wo($e,Ve.enemies),mn=!1;const fn=new Ly;let Yt="space",ai=null,Rt=null,Ui=null,bn=null,ci=0,di=!1;function $o(s){_n=Vi(s),jd(_n,bs),Qd(bs),Ne.bindToCockpit(bs),kS()}const Hh=window;Hh.spaceGame={...Hh.spaceGame,applyLoadout:s=>($o(s),{..._n}),getLoadout:()=>({..._n})};const Xt=new Uy(()=>{di=!0},s=>{const e=Dy(s,Kt,Re);return e.success&&(Ge.playStorePurchase(),mf(),Ne.setHealth(Re.health/Re.maxHealth),Ne.setShield(Re.shield/Re.maxShield),Qe.thrustBonus=Re.thrustBonus,Qe.speedBonus=Re.speedBonus,s.category==="ammo"&&s.ammoAmount!==void 0&&(s.ammoType==="laser"?vn.addAmmo(s.ammoAmount):s.ammoType==="chaingun"?yi.addAmmo(s.ammoAmount):s.ammoType==="missile"&&xn.addAmmo(s.ammoAmount),ur())),e}),Ut=new iS(1);function FS(s){Kt.spend(Kt.balance),Kt.earn(s)}function BS(){Ve.asteroids.forEach(s=>$e.remove(s)),$e.remove(Ve.blackHole),Ve.enemies.forEach(s=>$e.remove(s)),Ve.planets.forEach(s=>$e.remove(s)),fi.reset()}function zS(){const s=Yt==="surface";Rt&&(Rt.detach(),Rt=null),ai=null,Yt="space",s&&Qe.attach(),Xt.hide(),di=!1,gi.style.opacity="0",sn.style.opacity="0",ar.style.opacity="0",fn.state="space",fn.fadeAlpha=0,Ui=null,bn=null,ci=0,cr.style.opacity="0"}function pf(s,e=!1){zS(),$o(s.loadout),FS(s.credits),Re.maxHealth=s.hullUpgrade+Yc,Re.maxShield=s.shieldUpgrade+Jc,Re.health=Math.min(s.health,Re.maxHealth),Re.shield=Math.min(s.shield,Re.maxShield),Re.thrustBonus=s.engineThrustBonus,Re.speedBonus=s.engineSpeedBonus,Re.unlockedWeapons.clear(),s.unlockedWeapons.forEach(t=>Re.unlockedWeapons.add(t)),vn.reset(s.laserAmmo),yi.reset(s.chaingunAmmo),xn.reset(s.missileAmmo),Qe.thrustBonus=Re.thrustBonus,Qe.speedBonus=Re.speedBonus,Ut.reset(s.sectorId),BS(),Ve=ko($e,s.sectorId),fi=new Wo($e,Ve.enemies),Je.position.set(0,0,0),_t.set(0,0,0),Qe.reset(),go(),Ne.setHealth(Re.health/Re.maxHealth),Ne.setShield(Re.shield/Re.maxShield),ur(),Ne.setCredits(Kt.balance),Ne.setSpeed(Qe.velocity,In(Qe.speedBonus),In(Qe.speedBonus)),Ns.textContent=`⬡ ${Kt.balance} CR`,lr.style.opacity="0",vi.style.opacity="0",vi.textContent=nf(Ut.sectorId),e&&(mn=!1,$c.hide())}const Vh=rf();Vh!==null&&pf(Vh);Ne.setHealth(Re.health/Re.maxHealth);Ne.setShield(Re.shield/Re.maxShield);Ne.setAmmo(vn.ammo,vn.maxAmmo);Ne.setActiveWeapon("laser");Ne.setCredits(Kt.balance);Ne.setBoostActive(!1);Ne.setSpeed(Qe.velocity,In(Qe.speedBonus),In(Qe.speedBonus));Ns.textContent=`⬡ ${Kt.balance} CR`;function mf(){Ne.setCredits(Kt.balance),Ns.textContent=`⬡ ${Kt.balance} CR`}function ur(){$n==="laser"?Ne.setAmmo(vn.ammo,vn.maxAmmo):$n==="chaingun"?Ne.setAmmo(yi.ammo,yi.maxAmmo):Ne.setAmmo(xn.ammo,xn.maxAmmo)}function kS(){Ne.setHealth(Re.health/Re.maxHealth),Ne.setShield(Re.shield/Re.maxShield),ur(),Ne.setActiveWeapon($n),Ne.setCredits(Kt.balance);const s=Ut.state==="idle",e=Qe.isStrongBoostEngaged(s),t=In(Qe.speedBonus),n=e?kc(Qe.speedBonus):t;Ne.setBoostActive(e),Ne.setSpeed(Qe.velocity,t,n);const i=Ld(Ve.enemies,Je.position,Je.quaternion);Ne.updateRadar(Je.position,Je.quaternion,i)}function hr(){return{credits:Kt.balance,sectorId:Ut.sectorId,health:Re.health,shield:Re.shield,shieldUpgrade:Re.maxShield-Jc,hullUpgrade:Re.maxHealth-Yc,engineThrustBonus:Re.thrustBonus,engineSpeedBonus:Re.speedBonus,unlockedWeapons:[...Re.unlockedWeapons],laserAmmo:vn.ammo,chaingunAmmo:yi.ammo,missileAmmo:xn.ammo,loadout:{..._n}}}function HS(s){const e=s.userData.creditValue??0;Kt.earn(e),mf()}function Cc(s){HS(s),$e.remove(s),Ve.enemies=Ve.enemies.filter(e=>e!==s)}function VS(){Yn.close(),Yt==="surface"&&(Rt&&(Rt.detach(),Rt=null),ai=null,Qe.attach(),Yt="space"),Xt.hide(),di=!1,gi.style.opacity="0",Ve.asteroids.forEach(s=>$e.remove(s)),$e.remove(Ve.blackHole),Ve.enemies.forEach(s=>$e.remove(s)),Ve.planets.forEach(s=>$e.remove(s)),fi.reset(),Ve=ko($e,Math.floor(Math.random()*4294967295)),fi=new Wo($e,Ve.enemies),Re.reset(),Ne.setHealth(Re.health/Re.maxHealth),Ne.setShield(Re.shield/Re.maxShield),vn.reset(ws.laser),yi.reset(ws.chaingun),xn.reset(ws.missile),Ge.stopChaingunChatter(),hi.stopAll(),Ge.resetLowHealthWarning(),$n="laser",qn=!1,$o(Ln),ur(),Ne.setActiveWeapon("laser"),Ne.setBoostActive(!1),Ne.setSpeed(Qe.velocity,In(Qe.speedBonus),In(Qe.speedBonus)),Je.position.set(0,0,0),_t.set(0,0,0),Qe.reset(),ar.style.opacity="0",sn.style.opacity="0",sn.textContent="▲ Walk to your ship ahead to launch ▲",cr.style.opacity="0",ci=0,bn=null,Ut.reset(1),lr.style.opacity="0",vi.style.opacity="0",vi.textContent="",mn=!1,$c.hide(),rn.domElement.requestPointerLock()}const $c=my(VS);function go(){qn=!1,Qe.clearInput(),Rt==null||Rt.clearInput(),Ne.setBoostActive(!1)}const GS=rS({getState:hr}),WS=oS({getCurrentState:hr,applyState:s=>{pf(s,!0)}});let gf=1,_f=1;const Gh=()=>{Ge.setSfxVolumeScale(gf*_f)},Yn=DS({controlBindings:on,onControlBindingsChange:s=>{on=s,Qe.setBindings(on),go()},sound:{volumeLayer:qc({master:s=>{gf=s,Gh()},sfx:s=>{_f=s,Gh()},engine:s=>{hi.setVolumeScale(s)}})},ship:{getLoadout:()=>({..._n}),onApplyLoadout:s=>(Ge.playUIClick(),$o(s),qo(hr()),{..._n})},onOpen:()=>{go(),Ge.stopChaingunChatter(),hi.stopAll(),document.pointerLockElement===rn.domElement&&document.exitPointerLock(),Ge.playUIClick()},onClose:()=>{go(),Ge.playUIClick()},onTabChange:()=>{Ge.playUIClick()},onSaveNow:()=>(Ge.playUIClick(),GS()),onLoadLastSave:()=>(Ge.playUIClick(),WS())});Zx(rn.domElement,(s,e)=>{if(mn||Yn.isOpen)return;const t=fn.state;if(t==="landing-fadeout"||t==="surface-fadein")return;const n=.002;_t.y-=s*n,_t.x-=e*n,_t.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,_t.x)),Yt==="surface"&&(_t.z=0)});document.addEventListener("mousedown",()=>Ge.resume(),{once:!0});document.addEventListener("keydown",()=>Ge.resume(),{once:!0});function hc(s){$n=s,s!=="chaingun"&&Ge.stopChaingunChatter(),ur(),Ne.setActiveWeapon(s),Ge.playUIClick()}document.addEventListener("keydown",s=>{mn||Yn.isOpen||Yt==="space"&&(Ms(s,on,"switchWeapon1")?hc("laser"):Ms(s,on,"switchWeapon2")?hc("chaingun"):Ms(s,on,"switchWeapon3")&&hc("missile"))});document.addEventListener("keydown",s=>{Ms(s,on,"openSettings")&&(s.preventDefault(),Yn.isOpen?Yn.close():Xt.isOpen?(Xt.dismiss(),Ge.playUIClick()):mn||Yn.open())});document.addEventListener("keydown",s=>{Yn.isOpen||s.key==="F5"&&!mn&&(s.preventDefault(),qo(hr()))});function xf(){return!(Yn.isOpen||document.pointerLockElement!==rn.domElement||mn||Yt!=="space")}function vf(){if($n==="laser"){const s=Rc(Ve),e=vn.fire(Je.position,Je.quaternion,s);if(e.fired&&(Ge.playLaserZap(),Ne.setAmmo(e.ammoRemaining,vn.maxAmmo),e.hit&&e.hitObject)){const t=Ve.enemies.includes(e.hitObject);e.hitObject.userData.health<=0?t?(Ge.playEnemyDestroy(),Cc(e.hitObject)):(Ge.playAsteroidDestroy(),Ve.asteroids=bc($e,e.hitObject,Ve.asteroids)):t?Ge.playEnemyHit():Ge.playAsteroidHit()}}else if($n==="missile"){const s=xn.fire(Je.position,Je.quaternion);s.fired&&(Ge.playMissileWhoosh(),Ne.setAmmo(s.ammoRemaining,xn.maxAmmo))}}document.addEventListener("mousedown",s=>{Od(s,on,"fireWeapon")&&xf()&&(qn=!0,vf())});document.addEventListener("keydown",s=>{Ms(s,on,"fireWeapon")&&xf()&&(s.preventDefault(),qn=!0,s.repeat||vf())});document.addEventListener("mouseup",s=>{Od(s,on,"fireWeapon")&&(qn=!1)});document.addEventListener("keyup",s=>{Ms(s,on,"fireWeapon")&&(qn=!1)});window.addEventListener("resize",()=>{const s=window.innerWidth/window.innerHeight;Je.aspect=s,Je.updateProjectionMatrix(),Nt.aspect=s,Nt.updateProjectionMatrix(),rn.setSize(window.innerWidth,window.innerHeight)});let Wh=performance.now();function yf(){var r;requestAnimationFrame(yf);const s=performance.now(),e=Math.min((s-Wh)/1e3,.1);if(Wh=s,Yn.isOpen){Yt==="surface"&&ai?uo(rn,"surface",$e,Je,ai.scene,Nt):uo(rn,"space",$e,Je,null,Nt);return}ci>0&&(ci=Math.max(0,ci-e),cr.style.opacity=String(ci/zh*.4));const{switchToSurface:t,switchToSpace:n,onSurface:i}=fn.update(e);if(ar.style.opacity=String(fn.fadeAlpha),i&&(_t.set(kh,0,0),Nt.rotation.copy(_t)),t){const o=bn?bn.position:Ui??new I,c=Math.abs(Math.floor(o.x*100+o.z*100))%16777215||42;ai=jy(c,_n),Rt=new Qy(c),Rt.attach(),Qe.detach(),Nt.position.set(0,ef,0),_t.set(kh,0,0),Nt.rotation.copy(_t),Nt.updateMatrixWorld(!0),Yt="surface",sn.textContent="▲ Walk to your ship ahead to launch ▲",sn.style.opacity="1",Xt.hide(),di=!1,gi.style.opacity="0"}if(n){if(Rt&&(Rt.detach(),Rt=null),ai=null,Qe.attach(),Xt.hide(),di=!1,gi.style.opacity="0",bn&&Ui){const c=((r=bn.geometry.parameters)==null?void 0:r.radius)??20,u=Ui.clone().sub(bn.position).normalize(),h=c+Jd+40;Je.position.copy(bn.position).addScaledVector(u,h)}else Ui&&Je.position.copy(Ui);_t.set(0,0,0),Qe.reset(),Yt="space",sn.style.opacity="0",bn=null,ci=zh}if(Yt==="space"){if(Je.rotation.copy(_t),!mn&&fn.state==="space"){const c=fn.checkProximity(Je.position,Ve.planets);if(c)Ui=Je.position.clone(),bn=c,fn.beginLanding(Ve),Ge.stopChaingunChatter(),hi.stopAll(),qn=!1;else{const u=Ut.state==="idle";Qe.update(e,_t,Je.position,{boostAllowed:u});const h=Qe.isStrongBoostEngaged(u),p=In(Qe.speedBonus),a=h?kc(Qe.speedBonus):p;hi.update({inSpace:!mn&&Yt==="space"&&fn.state==="space",onSurface:!1,inWarp:Ut.state!=="idle",thrustMagnitude:Qe.getThrustInputMagnitude(),boostActive:h},e),Ne.setBoostActive(h),Ne.setSpeed(Qe.velocity,p,a),Je.rotation.copy(_t),vn.update();const l=qn&&$n==="chaingun",d=Rc(Ve),g=yi.update(e,l,Je.position,Je.quaternion,d);l&&g.some(f=>f.fired)?Ge.startChaingunChatter():l||Ge.stopChaingunChatter();for(const f of g)f.fired&&(Ne.setAmmo(f.ammoRemaining,yi.maxAmmo),NS(f,Ve,{onAsteroidHit:()=>Ge.playAsteroidHit(),onAsteroidDestroyed:x=>{Ge.playAsteroidDestroy(),Ve.asteroids=bc($e,x,Ve.asteroids)},onEnemyHit:()=>Ge.playEnemyHit(),onEnemyDestroyed:x=>{Ge.playEnemyDestroy(),Cc(x)}}));const _=Rc(Ve),m=xn.update(e,_);for(const f of m){Ge.playMissileExplosion();const x=Ve.enemies.includes(f.hitObject);f.hitObject.userData.health<=0?x?(Ge.playEnemyDestroy(),Cc(f.hitObject)):(Ge.playAsteroidDestroy(),Ve.asteroids=bc($e,f.hitObject,Ve.asteroids)):x?Ge.playEnemyHit():Ge.playAsteroidHit()}if($n==="missile"&&m.length>0&&Ne.setAmmo(xn.ammo,xn.maxAmmo),fi.update(e,Je.position),ci<=0&&fi.checkPlayerHit(Je.position)){const{isDead:f}=Re.applyDamage(sy);Ne.setHealth(Re.health/Re.maxHealth),Ne.setShield(Re.shield/Re.maxShield),Ge.checkLowHealth(Re.health/Re.maxHealth,e),f&&(mn=!0,Ge.stopChaingunChatter(),hi.stopAll(),$c.show(),document.exitPointerLock())}Ut.canWarp()&&nS(Je.position,Ve.blackHole)&&(Ut.beginWarp(),Ge.playWarpActivation(),Ge.stopChaingunChatter(),hi.stopAll(),Ne.setBoostActive(!1),qn=!1)}}else Ne.setBoostActive(!1);if(!mn){const{warpNow:c}=Ut.update(e);c&&(Ve.asteroids.forEach(u=>$e.remove(u)),$e.remove(Ve.blackHole),Ve.enemies.forEach(u=>$e.remove(u)),Ve.planets.forEach(u=>$e.remove(u)),fi.reset(),Ve=ko($e,Ut.sectorId),fi=new Wo($e,Ve.enemies),Je.position.set(0,0,0),_t.set(0,0,0),Qe.reset(),vi.textContent=nf(Ut.sectorId),qo(hr())),lr.style.opacity=String(Ut.flashAlpha),vi.style.opacity=String(Ut.nameAlpha)}const o=Ld(Ve.enemies,Je.position,Je.quaternion);Ne.updateRadar(Je.position,Je.quaternion,o),uo(rn,"space",$e,Je,null,Nt)}else if(Yt==="surface"&&ai&&Rt){hi.update({inSpace:!1,onSurface:!0,inWarp:!1,thrustMagnitude:0,boostActive:!1},e),_t.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,_t.x)),Nt.rotation.copy(_t);const o=Nt.position.x-Mn,c=Nt.position.z-wn,u=Math.sqrt(o*o+c*c),h=u<=$d,p=u<=US;!p&&di&&(di=!1),h&&!di&&!Xt.isOpen&&(Xt.show(),Ge.playUIClick(),document.exitPointerLock()),!h&&Xt.isOpen&&Xt.hide(),gi.style.opacity=p&&!Xt.isOpen?"1":"0";const{nearShip:a,launchRequested:l}=Rt.update(e,Nt.position,_t);Xt.isOpen?sn.style.opacity="0":(sn.textContent=a?"[ E ]  Launch":"▲ Walk to your ship to launch ▲",sn.style.opacity="1"),l&&!Xt.isOpen&&fn.state==="on-surface"&&fn.beginLaunch(Ve),uo(rn,"surface",$e,Je,ai.scene,Nt)}}yf();
