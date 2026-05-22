var bu=Object.defineProperty;var Ru=(s,t,e)=>t in s?bu(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var mt=(s,t,e)=>Ru(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="165",Cu=0,Jo=1,Pu=2,_h=1,Lu=2,En=3,Jn=0,Ue=1,un=2,qn=0,qi=1,Ko=2,$o=3,jo=4,Du=5,li=100,Iu=101,Uu=102,Nu=103,Ou=104,Fu=200,Bu=201,zu=202,Hu=203,ho=204,uo=205,Vu=206,ku=207,Gu=208,Wu=209,Xu=210,qu=211,Yu=212,Ju=213,Ku=214,$u=0,ju=1,Zu=2,Pr=3,Qu=4,td=5,ed=6,nd=7,Ao=0,id=1,sd=2,Yn=0,rd=1,ad=2,od=3,cd=4,ld=5,hd=6,ud=7,xh=300,$i=301,ji=302,fo=303,po=304,Vr=306,mo=1e3,di=1001,go=1002,qe=1003,dd=1004,Fs=1005,Qe=1006,aa=1007,fi=1008,Kn=1009,fd=1010,pd=1011,Lr=1012,vh=1013,Zi=1014,Xn=1015,kr=1016,Mh=1017,yh=1018,Qi=1020,md=35902,gd=1021,_d=1022,pn=1023,xd=1024,vd=1025,Yi=1026,ts=1027,Md=1028,Sh=1029,yd=1030,Eh=1031,wh=1033,oa=33776,ca=33777,la=33778,ha=33779,Zo=35840,Qo=35841,tc=35842,ec=35843,nc=36196,ic=37492,sc=37496,rc=37808,ac=37809,oc=37810,cc=37811,lc=37812,hc=37813,uc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,_c=37820,xc=37821,ua=36492,vc=36494,Mc=36495,Sd=36283,yc=36284,Sc=36285,Ec=36286,Ed=3200,wd=3201,Ah=0,Ad=1,Wn="",cn="srgb",jn="srgb-linear",To="display-p3",Gr="display-p3-linear",Dr="linear",ne="srgb",Ir="rec709",Ur="p3",Mi=7680,wc=519,Td=512,bd=513,Rd=514,Th=515,Cd=516,Pd=517,Ld=518,Dd=519,Ac=35044,Tc="300 es",An=2e3,Nr=2001;class rs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],da=Math.PI/180,_o=180/Math.PI;function Ps(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[s&255]+Ae[s>>8&255]+Ae[s>>16&255]+Ae[s>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function De(s,t,e){return Math.max(t,Math.min(e,s))}function Id(s,t){return(s%t+t)%t}function fa(s,t,e){return(1-e)*s+e*t}function cs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ut=class bh{constructor(t,e,n,i,r,a,o,c,l){bh.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],x=i[4],w=i[7],I=i[2],A=i[5],T=i[8];return r[0]=a*_+o*y+c*I,r[3]=a*m+o*x+c*A,r[6]=a*f+o*w+c*T,r[1]=l*_+h*y+d*I,r[4]=l*m+h*x+d*A,r[7]=l*f+h*w+d*T,r[2]=u*_+p*y+g*I,r[5]=u*m+p*x+g*A,r[8]=u*f+p*w+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=u*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(pa.makeScale(t,e)),this}rotate(t){return this.premultiply(pa.makeRotation(-t)),this}translate(t,e){return this.premultiply(pa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};const pa=new Ut;function Rh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Or(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ud(){const s=Or("canvas");return s.style.display="block",s}const bc={};function Ch(s){s in bc||(bc[s]=!0,console.warn(s))}function Nd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Rc=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cc=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bs={[jn]:{transfer:Dr,primaries:Ir,toReference:s=>s,fromReference:s=>s},[cn]:{transfer:ne,primaries:Ir,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Gr]:{transfer:Dr,primaries:Ur,toReference:s=>s.applyMatrix3(Cc),fromReference:s=>s.applyMatrix3(Rc)},[To]:{transfer:ne,primaries:Ur,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Cc),fromReference:s=>s.applyMatrix3(Rc).convertLinearToSRGB()}},Od=new Set([jn,Gr]),$t={enabled:!0,_workingColorSpace:jn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Od.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Bs[t].toReference,i=Bs[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Bs[s].primaries},getTransfer:function(s){return s===Wn?Dr:Bs[s].transfer}};function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ma(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let yi;class Fd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{yi===void 0&&(yi=Or("canvas")),yi.width=t.width,yi.height=t.height;const n=yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Bd=0;class Ph{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ps(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ga(i[a].image)):r.push(ga(i[a]))}else r=ga(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ga(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Fd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zd=0;class Ne extends rs{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=di,i=di,r=Qe,a=fi,o=pn,c=Kn,l=Ne.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ps(),this.name="",this.source=new Ph(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case mo:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case mo:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=xh;Ne.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,w=(p+1)/2,I=(f+1)/2,A=(h+u)/4,T=(d+_)/4,P=(g+m)/4;return x>w&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=T/n):w>I?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=A/i,r=P/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=T/r,i=P/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-_)/y,this.z=(u-h)/y,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hd extends rs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ne(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ph(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Hd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Lh extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vd extends Ne{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let xi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==u||l!==p||h!==g){let m=1-o;const f=c*u+l*p+h*g+d*_,y=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,f*y);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}const w=o*y;if(c=c*m+u*w,l=l*m+p*w,h=h*m+g*w,d=d*m+_*w,m===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*p-l*u,t[e+1]=c*g+h*u+l*d-o*p,t[e+2]=l*g+h*p+o*u-c*d,t[e+3]=h*g-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),p=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d+u*p*g;break;case"YZX":this._x=u*h*d+l*p*g,this._y=l*p*d+u*h*g,this._z=l*h*g-u*p*d,this._w=l*h*d-u*p*g;break;case"XZY":this._x=u*h*d-l*p*g,this._y=l*p*d-u*h*g,this._z=l*h*g+u*p*d,this._w=l*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class Dh{constructor(t=0,e=0,n=0){Dh.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _a.copy(this).projectOnVector(t),this.sub(_a)}reflect(t){return this.sub(_a.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const _a=new D,Pc=new xi;class Ls{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(r,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zs.copy(n.boundingBox)),zs.applyMatrix4(t.matrixWorld),this.union(zs)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Hs.subVectors(this.max,ls),Si.subVectors(t.a,ls),Ei.subVectors(t.b,ls),wi.subVectors(t.c,ls),In.subVectors(Ei,Si),Un.subVectors(wi,Ei),ti.subVectors(Si,wi);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-ti.z,ti.y,In.z,0,-In.x,Un.z,0,-Un.x,ti.z,0,-ti.x,-In.y,In.x,0,-Un.y,Un.x,0,-ti.y,ti.x,0];return!xa(e,Si,Ei,wi,Hs)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Si,Ei,wi,Hs))?!1:(Vs.crossVectors(In,Un),e=[Vs.x,Vs.y,Vs.z],xa(e,Si,Ei,wi,Hs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new D,new D,new D,new D,new D,new D,new D,new D],Je=new D,zs=new Ls,Si=new D,Ei=new D,wi=new D,In=new D,Un=new D,ti=new D,ls=new D,Hs=new D,Vs=new D,ei=new D;function xa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ei.fromArray(s,r);const o=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),c=t.dot(ei),l=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const kd=new Ls,hs=new D,va=new D;class Ds{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(va.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(va)),this.expandByPoint(hs.copy(t.center).sub(va))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xn=new D,Ma=new D,ks=new D,Nn=new D,ya=new D,Gs=new D,Sa=new D;let Wr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ma.copy(t).add(e).multiplyScalar(.5),ks.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(Ma);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ks),o=Nn.dot(this.direction),c=-Nn.dot(ks),l=Nn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ma).addScaledVector(ks,u),p}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const n=xn.dot(this.direction),i=xn.dot(xn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,n,i,r){ya.subVectors(e,t),Gs.subVectors(n,t),Sa.crossVectors(ya,Gs);let a=this.direction.dot(Sa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,t);const c=o*this.direction.dot(Gs.crossVectors(Nn,Gs));if(c<0)return null;const l=o*this.direction.dot(ya.cross(Nn));if(l<0||c+l>a)return null;const h=-o*Nn.dot(Sa);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class xo{constructor(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){xo.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m)}set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xo().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ai.setFromMatrixColumn(t,0).length(),r=1/Ai.setFromMatrixColumn(t,1).length(),a=1/Ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=u-_*l,e[9]=-o*c,e[2]=_-u*l,e[6]=g+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,g=l*h,_=l*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-p,e[8]=u*l+_,e[1]=c*d,e[5]=_*l+u,e[9]=p*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-u*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*c,p=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+_,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Wd)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),On.crossVectors(n,Be),On.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),On.crossVectors(n,Be)),On.normalize(),Ws.crossVectors(Be,On),i[0]=On.x,i[4]=Ws.x,i[8]=Be.x,i[1]=On.y,i[5]=Ws.y,i[9]=Be.y,i[2]=On.z,i[6]=Ws.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],w=n[11],I=n[15],A=i[0],T=i[4],P=i[8],S=i[12],v=i[1],R=i[5],F=i[9],O=i[13],W=i[2],V=i[6],B=i[10],X=i[14],G=i[3],st=i[7],lt=i[11],dt=i[15];return r[0]=a*A+o*v+c*W+l*G,r[4]=a*T+o*R+c*V+l*st,r[8]=a*P+o*F+c*B+l*lt,r[12]=a*S+o*O+c*X+l*dt,r[1]=h*A+d*v+u*W+p*G,r[5]=h*T+d*R+u*V+p*st,r[9]=h*P+d*F+u*B+p*lt,r[13]=h*S+d*O+u*X+p*dt,r[2]=g*A+_*v+m*W+f*G,r[6]=g*T+_*R+m*V+f*st,r[10]=g*P+_*F+m*B+f*lt,r[14]=g*S+_*O+m*X+f*dt,r[3]=y*A+x*v+w*W+I*G,r[7]=y*T+x*R+w*V+I*st,r[11]=y*P+x*F+w*B+I*lt,r[15]=y*S+x*O+w*X+I*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*p-n*c*p)+_*(+e*c*p-e*l*u+r*a*u-i*a*p+i*l*h-r*c*h)+m*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+f*(-i*o*h-e*c*d+e*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=d*m*l-_*u*l+_*c*p-o*m*p-d*c*f+o*u*f,x=g*u*l-h*m*l-g*c*p+a*m*p+h*c*f-a*u*f,w=h*_*l-g*d*l+g*o*p-a*_*p-h*o*f+a*d*f,I=g*d*c-h*_*c-g*o*u+a*_*u+h*o*m-a*d*m,A=e*y+n*x+i*w+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=y*T,t[1]=(_*u*r-d*m*r-_*i*p+n*m*p+d*i*f-n*u*f)*T,t[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*f+n*c*f)*T,t[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*p-n*c*p)*T,t[4]=x*T,t[5]=(h*m*r-g*u*r+g*i*p-e*m*p-h*i*f+e*u*f)*T,t[6]=(g*c*r-a*m*r-g*i*l+e*m*l+a*i*f-e*c*f)*T,t[7]=(a*u*r-h*c*r+h*i*l-e*u*l-a*i*p+e*c*p)*T,t[8]=w*T,t[9]=(g*d*r-h*_*r-g*n*p+e*_*p+h*n*f-e*d*f)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*T,t[12]=I*T,t[13]=(h*_*i-g*d*i+g*n*u-e*_*u-h*n*m+e*d*m)*T,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*m-e*o*m)*T,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*u+e*o*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,g=r*d,_=a*h,m=a*d,f=o*d,y=c*l,x=c*h,w=c*d,I=n.x,A=n.y,T=n.z;return i[0]=(1-(_+f))*I,i[1]=(p+w)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(p-w)*A,i[5]=(1-(u+f))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(u+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ai.set(i[0],i[1],i[2]).length();const a=Ai.set(i[4],i[5],i[6]).length(),o=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ke.copy(this);const l=1/r,h=1/a,d=1/o;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=d,Ke.elements[9]*=d,Ke.elements[10]*=d,e.setFromRotationMatrix(Ke),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=An){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(o===An)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Nr)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=An){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*l,p=(n+i)*h;let g,_;if(o===An)g=(a+r)*d,_=-2*d;else if(o===Nr)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};const Ai=new D,Ke=new he,Gd=new D(0,0,0),Wd=new D(1,1,1),On=new D,Ws=new D,Be=new D,Lc=new he,Dc=new xi;class Ye{constructor(t=0,e=0,n=0,i=Ye.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(De(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dc.setFromEuler(this),this.setFromQuaternion(Dc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ye.DEFAULT_ORDER="XYZ";class bo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xd=0;const Ic=new D,Ti=new xi,vn=new he,Xs=new D,us=new D,qd=new D,Yd=new xi,Uc=new D(1,0,0),Nc=new D(0,1,0),Oc=new D(0,0,1),Fc={type:"added"},Jd={type:"removed"},bi={type:"childadded",child:null},Ea={type:"childremoved",child:null};class Se extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new Ye,n=new xi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new Ut}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Uc,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Oc,t)}translateOnAxis(t,e){return Ic.copy(t).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uc,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(us,Xs,this.up):vn.lookAt(Xs,us,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),Ti.setFromRotationMatrix(vn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fc),bi.child=t,this.dispatchEvent(bi),bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jd),Ea.child=t,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fc),bi.child=t,this.dispatchEvent(bi),bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new D,Mn=new D,wa=new D,yn=new D,Ri=new D,Ci=new D,Bc=new D,Aa=new D,Ta=new D,ba=new D;class dn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),Mn.subVectors(n,e),wa.subVectors(t,e);const a=$e.dot($e),o=$e.dot(Mn),c=$e.dot(wa),l=Mn.dot(Mn),h=Mn.dot(wa),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,yn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yn.x),c.addScaledVector(a,yn.y),c.addScaledVector(o,yn.z),c)}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),Mn.subVectors(t,e),$e.cross(Mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),$e.cross(Mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Ri.subVectors(i,n),Ci.subVectors(r,n),Aa.subVectors(t,n);const c=Ri.dot(Aa),l=Ci.dot(Aa);if(c<=0&&l<=0)return e.copy(n);Ta.subVectors(t,i);const h=Ri.dot(Ta),d=Ci.dot(Ta);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ri,a);ba.subVectors(t,r);const p=Ri.dot(ba),g=Ci.dot(ba);if(g>=0&&p<=g)return e.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Ci,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Bc.subVectors(r,i),o=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Bc,o);const f=1/(m+_+u);return a=_*f,o=u*f,e.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},qs={h:0,s:0,l:0};function Ra(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=$t.workingColorSpace){if(t=Id(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ra(a,r,t+1/3),this.g=Ra(a,r,t),this.b=Ra(a,r,t-1/3)}return $t.toWorkingColorSpace(this,i),this}setStyle(t,e=cn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=ma(t.r),this.g=ma(t.g),this.b=ma(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return $t.fromWorkingColorSpace(Te.copy(this),t),Math.round(De(Te.r*255,0,255))*65536+Math.round(De(Te.g*255,0,255))*256+Math.round(De(Te.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=cn){$t.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(qs);const n=fa(Fn.h,qs.h,e),i=fa(Fn.s,qs.s,e),r=fa(Fn.l,qs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new St;St.NAMES=Ih;let Kd=0;class vi extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=qi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Pr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class tn extends vi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new D,Ys=new It;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ac,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ch("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ys.fromBufferAttribute(this,e),Ys.applyMatrix3(t),this.setXY(e,Ys.x,Ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),n=Ce(n,this.array),i=Ce(i,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ac&&(t.usage=this.usage),t}}class Uh extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nh extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $d=0;const ke=new he,Ca=new Se,Pi=new D,ze=new Ls,ds=new Ls,Me=new D;class we extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rh(t)?Nh:Uh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pi).negate(),this.translate(Pi.x,Pi.y,Pi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Me.addVectors(ze.min,ds.min),ze.expandByPoint(Me),Me.addVectors(ze.max,ds.max),ze.expandByPoint(Me)):(ze.expandByPoint(ds.min),ze.expandByPoint(ds.max))}ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Me.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Me));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Me.fromBufferAttribute(o,l),c&&(Pi.fromBufferAttribute(t,l),Me.add(Pi)),i=Math.max(i,n.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;const l=new D,h=new D,d=new D,u=new It,p=new It,g=new It,_=new D,m=new D;function f(P,S,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,v),h.sub(l),d.sub(l),p.sub(u),g.sub(u);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[P].add(_),o[S].add(_),o[v].add(_),c[P].add(m),c[S].add(m),c[v].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,S=y.length;P<S;++P){const v=y[P],R=v.start,F=v.count;for(let O=R,W=R+F;O<W;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const x=new D,w=new D,I=new D,A=new D;function T(P){I.fromBufferAttribute(i,P),A.copy(I);const S=o[P];x.copy(S),x.sub(I.multiplyScalar(I.dot(S))).normalize(),w.crossVectors(A,S);const R=w.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,R)}for(let P=0,S=y.length;P<S;++P){const v=y[P],R=v.start,F=v.count;for(let O=R,W=R+F;O<W;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*h;for(let f=0;f<h;f++)u[g++]=l[p++]}return new en(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zc=new he,ni=new Wr,Js=new Ds,Hc=new D,Li=new D,Di=new D,Ii=new D,Pa=new D,Ks=new D,$s=new It,js=new It,Zs=new It,Vc=new D,kc=new D,Gc=new D,Qs=new D,tr=new D;class At extends Se{constructor(t=new we,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Pa.fromBufferAttribute(d,t),a?Ks.addScaledVector(Pa,h):Ks.addScaledVector(Pa.sub(e),h))}e.add(Ks)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Js.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Js,Hc)===null||ni.origin.distanceToSquared(Hc)>(t.far-t.near)**2))&&(zc.copy(r).invert(),ni.copy(t.ray).applyMatrix4(zc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,I=x;w<I;w+=3){const A=o.getX(w),T=o.getX(w+1),P=o.getX(w+2);i=er(this,f,t,n,l,h,d,A,T,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),x=o.getX(m+1),w=o.getX(m+2);i=er(this,a,t,n,l,h,d,y,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const m=u[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=y,I=x;w<I;w+=3){const A=w,T=w+1,P=w+2;i=er(this,f,t,n,l,h,d,A,T,P),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,x=m+1,w=m+2;i=er(this,a,t,n,l,h,d,y,x,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jd(s,t,e,n,i,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Jn,o),c===null)return null;tr.copy(o),tr.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(tr);return l<e.near||l>e.far?null:{distance:l,point:tr.clone(),object:s}}function er(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Li),s.getVertexPosition(c,Di),s.getVertexPosition(l,Ii);const h=jd(s,t,e,n,Li,Di,Ii,Qs);if(h){i&&($s.fromBufferAttribute(i,o),js.fromBufferAttribute(i,c),Zs.fromBufferAttribute(i,l),h.uv=dn.getInterpolation(Qs,Li,Di,Ii,$s,js,Zs,new It)),r&&($s.fromBufferAttribute(r,o),js.fromBufferAttribute(r,c),Zs.fromBufferAttribute(r,l),h.uv1=dn.getInterpolation(Qs,Li,Di,Ii,$s,js,Zs,new It)),a&&(Vc.fromBufferAttribute(a,o),kc.fromBufferAttribute(a,c),Gc.fromBufferAttribute(a,l),h.normal=dn.getInterpolation(Qs,Li,Di,Ii,Vc,kc,Gc,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};dn.getNormal(Li,Di,Ii,d.normal),h.face=d}return h}class ye extends we{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function g(_,m,f,y,x,w,I,A,T,P,S){const v=w/T,R=I/P,F=w/2,O=I/2,W=A/2,V=T+1,B=P+1;let X=0,G=0;const st=new D;for(let lt=0;lt<B;lt++){const dt=lt*R-O;for(let Ft=0;Ft<V;Ft++){const Yt=Ft*v-F;st[_]=Yt*y,st[m]=dt*x,st[f]=W,l.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[f]=A>0?1:-1,h.push(st.x,st.y,st.z),d.push(Ft/T),d.push(1-lt/P),X+=1}}for(let lt=0;lt<P;lt++)for(let dt=0;dt<T;dt++){const Ft=u+dt+V*lt,Yt=u+dt+V*(lt+1),q=u+(dt+1)+V*(lt+1),Z=u+(dt+1)+V*lt;c.push(Ft,Yt,Z),c.push(Yt,q,Z),G+=6}o.addGroup(p,G,S),p+=G,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Re(s){const t={};for(let e=0;e<s.length;e++){const n=es(s[e]);for(const i in n)t[i]=n[i]}return t}function Zd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Oh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}const Qd={clone:es,merge:Re};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends vi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Zd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fh extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new D,Wc=new It,Xc=new It;class Ie extends Fh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_o*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Wc,Xc),e.subVectors(Xc,Wc)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(da*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ui=-90,Ni=1;class nf extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ie(Ui,Ni,t,e);i.layers=this.layers,this.add(i);const r=new Ie(Ui,Ni,t,e);r.layers=this.layers,this.add(r);const a=new Ie(Ui,Ni,t,e);a.layers=this.layers,this.add(a);const o=new Ie(Ui,Ni,t,e);o.layers=this.layers,this.add(o);const c=new Ie(Ui,Ni,t,e);c.layers=this.layers,this.add(c);const l=new Ie(Ui,Ni,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bh extends Ne{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sf extends gi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Bh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ye(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:qn});r.uniforms.tEquirect.value=e;const a=new At(i,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=Qe),new nf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const La=new D,rf=new D,af=new Ut;class ai{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=La.subVectors(n,e).cross(rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||af.getNormalMatrix(t),i=this.coplanarPoint(La).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ii=new Ds,nr=new D;class Ro{constructor(t=new ai,e=new ai,n=new ai,i=new ai,r=new ai,a=new ai){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],x=i[14],w=i[15];if(n[0].setComponents(c-r,u-l,m-p,w-f).normalize(),n[1].setComponents(c+r,u+l,m+p,w+f).normalize(),n[2].setComponents(c+a,u+h,m+g,w+y).normalize(),n[3].setComponents(c-a,u-h,m-g,w-y).normalize(),n[4].setComponents(c-o,u-d,m-_,w-x).normalize(),e===An)n[5].setComponents(c+o,u+d,m+_,w+x).normalize();else if(e===Nr)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(nr.x=i.normal.x>0?t.max.x:t.min.x,nr.y=i.normal.y>0?t.max.y:t.min.y,nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function of(s){const t=new WeakMap;function e(o,c){const l=o.array,h=o.usage,d=l.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=s.SHORT;else if(l instanceof Uint32Array)p=s.UNSIGNED_INT;else if(l instanceof Int32Array)p=s.INT;else if(l instanceof Int8Array)p=s.BYTE;else if(l instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c._updateRange,u=c.updateRanges;if(s.bindBuffer(l,o),d.count===-1&&u.length===0&&s.bufferSubData(l,0,h),u.length!==0){for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Is extends we{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*u-a;for(let x=0;x<l;x++){const w=x*d-r;g.push(w,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const x=y+l*f,w=y+l*(f+1),I=y+1+l*(f+1),A=y+1+l*f;p.push(x,w,A),p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Is(t.width,t.height,t.widthSegments,t.heightSegments)}}var cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
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
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
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
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yf=`#ifdef USE_IRIDESCENCE
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
#endif`,Sf=`#ifdef USE_BUMPMAP
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
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lf=`#define PI 3.141592653589793
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
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`
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
}`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
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
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
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
#endif`,ap=`struct PhysicalMaterial {
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
}`,op=`
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,up=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_p=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qp=`float getShadowMask() {
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
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
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
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
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
#endif`,nm=`#ifdef USE_TRANSMISSION
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const om=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
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
}`,pm=`#if DEPTH_PACKING == 3200
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
}`,mm=`#define DISTANCE
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
}`,gm=`#define DISTANCE
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
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Tm=`#define MATCAP
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
}`,bm=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Cm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Lm=`#define STANDARD
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
}`,Dm=`#define STANDARD
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
}`,Im=`#define TOON
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
}`,Um=`#define TOON
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
}`,Nm=`uniform float size;
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
}`,Om=`uniform vec3 diffuse;
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
}`,Fm=`#include <common>
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
}`,Bm=`uniform vec3 color;
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
}`,zm=`uniform float rotation;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:cf,alphahash_pars_fragment:lf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:xf,beginnormal_vertex:vf,bsdfs:Mf,iridescence_fragment:yf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Tf,color_fragment:bf,color_pars_fragment:Rf,color_pars_vertex:Cf,color_vertex:Pf,common:Lf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:If,displacementmap_pars_vertex:Uf,displacementmap_vertex:Nf,emissivemap_fragment:Of,emissivemap_pars_fragment:Ff,colorspace_fragment:Bf,colorspace_pars_fragment:zf,envmap_fragment:Hf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:kf,envmap_pars_vertex:Gf,envmap_physical_pars_fragment:tp,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:qf,fog_fragment:Yf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Kf,lightmap_pars_fragment:$f,lights_lambert_fragment:jf,lights_lambert_pars_fragment:Zf,lights_pars_begin:Qf,lights_toon_fragment:ep,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:cp,lights_fragment_end:lp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:up,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:xp,metalnessmap_pars_fragment:vp,morphinstance_vertex:Mp,morphcolor_vertex:yp,morphnormal_vertex:Sp,morphtarget_pars_vertex:Ep,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Tp,normal_pars_fragment:bp,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Dp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Up,opaque_fragment:Np,packing:Op,premultiplied_alpha_fragment:Fp,project_vertex:Bp,dithering_fragment:zp,dithering_pars_fragment:Hp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Gp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:qp,skinbase_vertex:Yp,skinning_pars_vertex:Jp,skinning_vertex:Kp,skinnormal_vertex:$p,specularmap_fragment:jp,specularmap_pars_fragment:Zp,tonemapping_fragment:Qp,tonemapping_pars_fragment:tm,transmission_fragment:em,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:sm,uv_vertex:rm,worldpos_vertex:am,background_vert:om,background_frag:cm,backgroundCube_vert:lm,backgroundCube_frag:hm,cube_vert:um,cube_frag:dm,depth_vert:fm,depth_frag:pm,distanceRGBA_vert:mm,distanceRGBA_frag:gm,equirect_vert:_m,equirect_frag:xm,linedashed_vert:vm,linedashed_frag:Mm,meshbasic_vert:ym,meshbasic_frag:Sm,meshlambert_vert:Em,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Tm,meshnormal_vert:bm,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Lm,meshphysical_frag:Dm,meshtoon_vert:Im,meshtoon_frag:Um,points_vert:Nm,points_frag:Om,shadow_vert:Fm,shadow_frag:Bm,sprite_vert:zm,sprite_frag:Hm},it={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},hn={basic:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Re([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Re([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Re([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new St(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Re([it.points,it.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Re([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Re([it.common,it.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Re([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Re([it.sprite,it.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:Re([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:Re([it.lights,it.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};hn.physical={uniforms:Re([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const ir={r:0,b:0,g:0},si=new Ye,Vm=new he;function km(s,t,e,n,i,r,a){const o=new St(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const w=g(y);w===null?f(o,c):w&&w.isColor&&(f(w,1),x=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(y,x){const w=g(x);w&&(w.isCubeTexture||w.mapping===Vr)?(h===void 0&&(h=new At(new ye(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:es(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),si.copy(x.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vm.makeRotationFromEuler(si)),h.material.toneMapped=$t.getTransfer(w.colorSpace)!==ne,(d!==w||u!==w.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new At(new Is(2,2),new $n({name:"BackgroundMaterial",uniforms:es(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=$t.getTransfer(w.colorSpace)!==ne,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=w,u=w.version,p=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function f(y,x){y.getRGB(ir,Oh(s)),n.buffers.color.setClear(ir.r,ir.g,ir.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,f(o,c)},render:_,addToRenderList:m}}function Gm(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(v,R,F,O,W){let V=!1;const B=d(O,F,R);r!==B&&(r=B,l(r.object)),V=p(v,O,F,W),V&&g(v,O,F,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,w(v,R,F,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function d(v,R,F){const O=F.wireframe===!0;let W=n[v.id];W===void 0&&(W={},n[v.id]=W);let V=W[R.id];V===void 0&&(V={},W[R.id]=V);let B=V[O];return B===void 0&&(B=u(c()),V[O]=B),B}function u(v){const R=[],F=[],O=[];for(let W=0;W<e;W++)R[W]=0,F[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:O,object:v,attributes:{},index:null}}function p(v,R,F,O){const W=r.attributes,V=R.attributes;let B=0;const X=F.getAttributes();for(const G in X)if(X[G].location>=0){const lt=W[G];let dt=V[G];if(dt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),lt===void 0||lt.attribute!==dt||dt&&lt.data!==dt.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function g(v,R,F,O){const W={},V=R.attributes;let B=0;const X=F.getAttributes();for(const G in X)if(X[G].location>=0){let lt=V[G];lt===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(lt=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(lt=v.instanceColor));const dt={};dt.attribute=lt,lt&&lt.data&&(dt.data=lt.data),W[G]=dt,B++}r.attributes=W,r.attributesNum=B,r.index=O}function _(){const v=r.newAttributes;for(let R=0,F=v.length;R<F;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const F=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;F[v]=1,O[v]===0&&(s.enableVertexAttribArray(v),O[v]=1),W[v]!==R&&(s.vertexAttribDivisor(v,R),W[v]=R)}function y(){const v=r.newAttributes,R=r.enabledAttributes;for(let F=0,O=R.length;F<O;F++)R[F]!==v[F]&&(s.disableVertexAttribArray(F),R[F]=0)}function x(v,R,F,O,W,V,B){B===!0?s.vertexAttribIPointer(v,R,F,W,V):s.vertexAttribPointer(v,R,F,O,W,V)}function w(v,R,F,O){_();const W=O.attributes,V=F.getAttributes(),B=R.defaultAttributeValues;for(const X in V){const G=V[X];if(G.location>=0){let st=W[X];if(st===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const lt=st.normalized,dt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const Yt=Ft.buffer,q=Ft.type,Z=Ft.bytesPerElement,ft=q===s.INT||q===s.UNSIGNED_INT||st.gpuType===vh;if(st.isInterleavedBufferAttribute){const ot=st.data,Nt=ot.stride,Pt=st.offset;if(ot.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)f(G.location+Gt,ot.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)m(G.location+Gt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Gt=0;Gt<G.locationSize;Gt++)x(G.location+Gt,dt/G.locationSize,q,lt,Nt*Z,(Pt+dt/G.locationSize*Gt)*Z,ft)}else{if(st.isInstancedBufferAttribute){for(let ot=0;ot<G.locationSize;ot++)f(G.location+ot,st.meshPerAttribute);v.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ot=0;ot<G.locationSize;ot++)m(G.location+ot);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let ot=0;ot<G.locationSize;ot++)x(G.location+ot,dt/G.locationSize,q,lt,dt*Z,dt/G.locationSize*ot*Z,ft)}}else if(B!==void 0){const lt=B[X];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(G.location,lt);break;case 3:s.vertexAttrib3fv(G.location,lt);break;case 4:s.vertexAttrib4fv(G.location,lt);break;default:s.vertexAttrib1fv(G.location,lt)}}}}y()}function I(){P();for(const v in n){const R=n[v];for(const F in R){const O=R[F];for(const W in O)h(O[W].object),delete O[W];delete R[F]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const F in R){const O=R[F];for(const W in O)h(O[W].object),delete O[W];delete R[F]}delete n[v.id]}function T(v){for(const R in n){const F=n[R];if(F[v.id]===void 0)continue;const O=F[v.id];for(const W in O)h(O[W].object),delete O[W];delete F[v.id]}}function P(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Wm(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,d){d!==0&&(s.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function o(l,h,d){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<d;p++)this.render(l[p],h[p]);else{u.multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}}function c(l,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xm(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==pn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const T=A===kr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Kn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Xn&&!T)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=p>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:w,maxSamples:I}}function qm(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new ai,o=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,x=y*4;let w=f.clippingState||null;c.value=w,w=h(g,u,x,p);for(let I=0;I!==x;++I)w[I]=e[I];f.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,w=p;x!==_;++x,w+=4)a.copy(d[x]).applyMatrix4(y,o),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Ym(s){let t=new WeakMap;function e(a,o){return o===fo?a.mapping=$i:o===po&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fo||o===po)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new sf(c.height);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Hh extends Fh{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Wi=4,qc=[.125,.215,.35,.446,.526,.582],hi=20,Da=new Hh,Yc=new St;let Ia=null,Ua=0,Na=0,Oa=!1;const oi=(1+Math.sqrt(5))/2,Oi=1/oi,Jc=[new D(-oi,Oi,0),new D(oi,Oi,0),new D(-Oi,0,oi),new D(Oi,0,oi),new D(0,oi,-Oi),new D(0,oi,Oi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia,Ua,Na),this._renderer.xr.enabled=Oa,t.scissorTest=!1,sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget(),Ua=this._renderer.getActiveCubeFace(),Na=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:kr,format:pn,colorSpace:jn,depthBuffer:!1},i=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=Km(r,t,e)}return i}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,i){const o=new Ie(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Yc),h.toneMapping=Yn,h.autoClear=!1;const p=new tn({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new At(new ye,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Yc),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;sr(i,y*x,f>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$i||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jc());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;sr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Da)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jc[(i-r-1)%Jc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new At(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*hi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):hi;m>hi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let y=0;for(let T=0;T<hi;++T){const P=T/_,S=Math.exp(-P*P/2);f.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const w=this._sizeLods[i],I=3*w*(i>x-Wi?i-x+Wi:0),A=4*(this._cubeSize-w);sr(e,I,A,3*w,2*w),c.setRenderTarget(e),c.render(d,Da)}}function Jm(s){const t=[],e=[],n=[];let i=s;const r=s-Wi+1+qc.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-Wi?c=qc[a-s+Wi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,S=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(S,_*g*A),x.set(u,m*g*A);const v=[A,A,A,A,A,A];w.set(v,f*g*A)}const I=new we;I.setAttribute("position",new en(y,_)),I.setAttribute("uv",new en(x,m)),I.setAttribute("faceIndex",new en(w,f)),t.push(I),i>Wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(s,t,e){const n=new gi(s,t,e);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function sr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Km(s,t,e){const n=new Float32Array(hi),i=new D(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Co(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function jc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Zc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Co(){return`

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
	`}function $m(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===fo||c===po,h=c===$i||c===ji;if(l||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Kc(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Kc(s)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function jm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ch("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zm(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)t.remove(_[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,w=y.length;x<w;x+=3){const I=y[x+0],A=y[x+1],T=y[x+2];u.push(I,A,A,T,T,I)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,w=y.length/3-1;x<w;x+=3){const I=x+0,A=x+1,T=x+2;u.push(I,A,A,T,T,I)}}else return;const m=new(Rh(u)?Nh:Uh)(u,1);m.version=_;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function Qm(s,t,e){let n;function i(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,p){s.drawElements(n,p,r,u*a),e.update(p,n,1)}function l(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,u*a,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<g;m++)this.render(u[m]/a,p[m]);else{_.multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}}function d(u,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)l(u[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y];for(let y=0;y<_.length;y++)e.update(f,n,_[y])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function tg(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function eg(s,t,e){const n=new WeakMap,i=new se;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let v=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var p=v;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),_===!0&&(w=2),m===!0&&(w=3);let I=o.attributes.position.count*w,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const T=new Float32Array(I*A*4*d),P=new Lh(T,I,A,d);P.type=Xn,P.needsUpdate=!0;const S=w*4;for(let R=0;R<d;R++){const F=f[R],O=y[R],W=x[R],V=I*A*4*R;for(let B=0;B<F.count;B++){const X=B*S;g===!0&&(i.fromBufferAttribute(F,B),T[V+X+0]=i.x,T[V+X+1]=i.y,T[V+X+2]=i.z,T[V+X+3]=0),_===!0&&(i.fromBufferAttribute(O,B),T[V+X+4]=i.x,T[V+X+5]=i.y,T[V+X+6]=i.z,T[V+X+7]=0),m===!0&&(i.fromBufferAttribute(W,B),T[V+X+8]=i.x,T[V+X+9]=i.y,T[V+X+10]=i.z,T[V+X+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new It(I,A)},n.set(o,u),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function ng(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Vh extends Ne{constructor(t,e,n,i,r,a,o,c,l,h=Yi){if(h!==Yi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Yi&&(n=Zi),n===void 0&&h===ts&&(n=Qi),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kh=new Ne,Gh=new Vh(1,1);Gh.compareFunction=Th;const Wh=new Lh,Xh=new Vd,qh=new Bh,Qc=[],tl=[],el=new Float32Array(16),nl=new Float32Array(9),il=new Float32Array(4);function as(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Qc[i];if(r===void 0&&(r=new Float32Array(i),Qc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function _e(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Xr(s,t){let e=tl[t];e===void 0&&(e=new Int32Array(t),tl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ig(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function sg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2fv(this.addr,t),_e(e,t)}}function rg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;s.uniform3fv(this.addr,t),_e(e,t)}}function ag(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4fv(this.addr,t),_e(e,t)}}function og(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;il.set(n),s.uniformMatrix2fv(this.addr,!1,il),_e(e,n)}}function cg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;nl.set(n),s.uniformMatrix3fv(this.addr,!1,nl),_e(e,n)}}function lg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;el.set(n),s.uniformMatrix4fv(this.addr,!1,el),_e(e,n)}}function hg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2iv(this.addr,t),_e(e,t)}}function dg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3iv(this.addr,t),_e(e,t)}}function fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4iv(this.addr,t),_e(e,t)}}function pg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function mg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;s.uniform2uiv(this.addr,t),_e(e,t)}}function gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;s.uniform3uiv(this.addr,t),_e(e,t)}}function _g(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;s.uniform4uiv(this.addr,t),_e(e,t)}}function xg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Gh:kh;e.setTexture2D(t||r,i)}function vg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xh,i)}function Mg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||qh,i)}function yg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wh,i)}function Sg(s){switch(s){case 5126:return ig;case 35664:return sg;case 35665:return rg;case 35666:return ag;case 35674:return og;case 35675:return cg;case 35676:return lg;case 5124:case 35670:return hg;case 35667:case 35671:return ug;case 35668:case 35672:return dg;case 35669:case 35673:return fg;case 5125:return pg;case 36294:return mg;case 36295:return gg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return yg}}function Eg(s,t){s.uniform1fv(this.addr,t)}function wg(s,t){const e=as(t,this.size,2);s.uniform2fv(this.addr,e)}function Ag(s,t){const e=as(t,this.size,3);s.uniform3fv(this.addr,e)}function Tg(s,t){const e=as(t,this.size,4);s.uniform4fv(this.addr,e)}function bg(s,t){const e=as(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rg(s,t){const e=as(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cg(s,t){const e=as(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Pg(s,t){s.uniform1iv(this.addr,t)}function Lg(s,t){s.uniform2iv(this.addr,t)}function Dg(s,t){s.uniform3iv(this.addr,t)}function Ig(s,t){s.uniform4iv(this.addr,t)}function Ug(s,t){s.uniform1uiv(this.addr,t)}function Ng(s,t){s.uniform2uiv(this.addr,t)}function Og(s,t){s.uniform3uiv(this.addr,t)}function Fg(s,t){s.uniform4uiv(this.addr,t)}function Bg(s,t,e){const n=this.cache,i=t.length,r=Xr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||kh,r[a])}function zg(s,t,e){const n=this.cache,i=t.length,r=Xr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Xh,r[a])}function Hg(s,t,e){const n=this.cache,i=t.length,r=Xr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||qh,r[a])}function Vg(s,t,e){const n=this.cache,i=t.length,r=Xr(e,i);ge(n,r)||(s.uniform1iv(this.addr,r),_e(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Wh,r[a])}function kg(s){switch(s){case 5126:return Eg;case 35664:return wg;case 35665:return Ag;case 35666:return Tg;case 35674:return bg;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Lg;case 35668:case 35672:return Dg;case 35669:case 35673:return Ig;case 5125:return Ug;case 36294:return Ng;case 36295:return Og;case 36296:return Fg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sg(e.type)}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}}class Xg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Fa=/(\w+)(\])?(\[|\.)?/g;function sl(s,t){s.seq.push(t),s.map[t.id]=t}function qg(s,t,e){const n=s.name,i=n.length;for(Fa.lastIndex=0;;){const r=Fa.exec(n),a=Fa.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){sl(e,l===void 0?new Gg(o,s,t):new Wg(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Xg(o),sl(e,d)),e=d}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);qg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function rl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Yg=37297;let Jg=0;function Kg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function $g(s){const t=$t.getPrimaries($t.workingColorSpace),e=$t.getPrimaries(s);let n;switch(t===e?n="":t===Ur&&e===Ir?n="LinearDisplayP3ToLinearSRGB":t===Ir&&e===Ur&&(n="LinearSRGBToLinearDisplayP3"),s){case jn:case Gr:return[n,"LinearTransferOETF"];case cn:case To:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function al(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Kg(s.getShaderSource(t),a)}else return i}function jg(s,t){const e=$g(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zg(s,t){let e;switch(t){case rd:e="Linear";break;case ad:e="Reinhard";break;case od:e="OptimizedCineon";break;case cd:e="ACESFilmic";break;case hd:e="AgX";break;case ud:e="Neutral";break;case ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Qg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function t_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Es(s){return s!==""}function ol(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n_=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(s){return s.replace(n_,s_)}const i_=new Map;function s_(s,t){let e=Ct[t];if(e===void 0){const n=i_.get(t);if(n!==void 0)e=Ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vo(e)}const r_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(s){return s.replace(r_,a_)}function a_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function hl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function o_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_h?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Lu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function c_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case ji:t="ENVMAP_TYPE_CUBE";break;case Vr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function l_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function h_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ao:t="ENVMAP_BLENDING_MULTIPLY";break;case id:t="ENVMAP_BLENDING_MIX";break;case sd:t="ENVMAP_BLENDING_ADD";break}return t}function u_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function d_(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=o_(e),l=c_(e),h=l_(e),d=h_(e),u=u_(e),p=Qg(e),g=t_(r),_=i.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Es).join(`
`),f.length>0&&(f+=`
`)):(m=[hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),f=[hl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,jg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Es).join(`
`)),a=vo(a),a=ol(a,e),a=cl(a,e),o=vo(o),o=ol(o,e),o=cl(o,e),a=ll(a),o=ll(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=y+m+a,w=y+f+o,I=rl(i,i.VERTEX_SHADER,x),A=rl(i,i.FRAGMENT_SHADER,w);i.attachShader(_,I),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(R){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(A).trim();let V=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,A);else{const X=al(i,I,"vertex"),G=al(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+X+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||W==="")&&(B=!1);B&&(R.diagnostics={runnable:V,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(I),i.deleteShader(A),P=new Rr(i,_),S=e_(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Yg)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let f_=0;class p_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m_(t),e.set(t,n)),n}}class m_{constructor(t){this.id=f_++,this.code=t,this.usedTimes=0}}function g_(s,t,e,n,i,r,a){const o=new bo,c=new p_,l=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,R,F,O){const W=F.fog,V=O.geometry,B=S.isMeshStandardMaterial?F.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),G=X&&X.mapping===Vr?X.image.height:null,st=g[S.type];S.precision!==null&&(p=i.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=lt!==void 0?lt.length:0;let Ft=0;V.morphAttributes.position!==void 0&&(Ft=1),V.morphAttributes.normal!==void 0&&(Ft=2),V.morphAttributes.color!==void 0&&(Ft=3);let Yt,q,Z,ft;if(st){const jt=hn[st];Yt=jt.vertexShader,q=jt.fragmentShader}else Yt=S.vertexShader,q=S.fragmentShader,c.update(S),Z=c.getVertexShaderID(S),ft=c.getFragmentShaderID(S);const ot=s.getRenderTarget(),Nt=O.isInstancedMesh===!0,Pt=O.isBatchedMesh===!0,Gt=!!S.map,L=!!S.matcap,Vt=!!X,zt=!!S.aoMap,re=!!S.lightMap,yt=!!S.bumpMap,Wt=!!S.normalMap,Ot=!!S.displacementMap,Rt=!!S.emissiveMap,fe=!!S.metalnessMap,b=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,K=S.dispersion>0,$=S.iridescence>0,j=S.sheen>0,vt=S.transmission>0,rt=M&&!!S.anisotropyMap,at=k&&!!S.clearcoatMap,Lt=k&&!!S.clearcoatNormalMap,tt=k&&!!S.clearcoatRoughnessMap,_t=$&&!!S.iridescenceMap,Bt=$&&!!S.iridescenceThicknessMap,Tt=j&&!!S.sheenColorMap,ct=j&&!!S.sheenRoughnessMap,Dt=!!S.specularMap,Ht=!!S.specularColorMap,ue=!!S.specularIntensityMap,C=vt&&!!S.transmissionMap,ht=vt&&!!S.thicknessMap,Y=!!S.gradientMap,J=!!S.alphaMap,nt=S.alphaTest>0,bt=!!S.alphaHash,qt=!!S.extensions;let de=Yn;S.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(de=s.toneMapping);const xe={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:Yt,fragmentShader:q,defines:S.defines,customVertexShaderID:Z,customFragmentShaderID:ft,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Pt,batchingColor:Pt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:jn,alphaToCoverage:!!S.alphaToCoverage,map:Gt,matcap:L,envMap:Vt,envMapMode:Vt&&X.mapping,envMapCubeUVHeight:G,aoMap:zt,lightMap:re,bumpMap:yt,normalMap:Wt,displacementMap:u&&Ot,emissiveMap:Rt,normalMapObjectSpace:Wt&&S.normalMapType===Ad,normalMapTangentSpace:Wt&&S.normalMapType===Ah,metalnessMap:fe,roughnessMap:b,anisotropy:M,anisotropyMap:rt,clearcoat:k,clearcoatMap:at,clearcoatNormalMap:Lt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:$,iridescenceMap:_t,iridescenceThicknessMap:Bt,sheen:j,sheenColorMap:Tt,sheenRoughnessMap:ct,specularMap:Dt,specularColorMap:Ht,specularIntensityMap:ue,transmission:vt,transmissionMap:C,thicknessMap:ht,gradientMap:Y,opaque:S.transparent===!1&&S.blending===qi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:nt,alphaHash:bt,combine:S.combine,mapUv:Gt&&_(S.map.channel),aoMapUv:zt&&_(S.aoMap.channel),lightMapUv:re&&_(S.lightMap.channel),bumpMapUv:yt&&_(S.bumpMap.channel),normalMapUv:Wt&&_(S.normalMap.channel),displacementMapUv:Ot&&_(S.displacementMap.channel),emissiveMapUv:Rt&&_(S.emissiveMap.channel),metalnessMapUv:fe&&_(S.metalnessMap.channel),roughnessMapUv:b&&_(S.roughnessMap.channel),anisotropyMapUv:rt&&_(S.anisotropyMap.channel),clearcoatMapUv:at&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(S.sheenRoughnessMap.channel),specularMapUv:Dt&&_(S.specularMap.channel),specularColorMapUv:Ht&&_(S.specularColorMap.channel),specularIntensityMapUv:ue&&_(S.specularIntensityMap.channel),transmissionMapUv:C&&_(S.transmissionMap.channel),thicknessMapUv:ht&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Wt||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(Gt||J),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ft,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:de,decodeVideoTexture:Gt&&S.map.isVideoTexture===!0&&$t.getTransfer(S.map.colorSpace)===ne,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===un,flipSided:S.side===Ue,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:qt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:qt&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function f(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(y(v,S),x(v,S),v.push(s.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function y(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function x(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.doubleSided&&o.enable(10),v.flipSided&&o.enable(11),v.useDepthPacking&&o.enable(12),v.dithering&&o.enable(13),v.transmission&&o.enable(14),v.sheen&&o.enable(15),v.opaque&&o.enable(16),v.pointsUvs&&o.enable(17),v.decodeVideoTexture&&o.enable(18),v.alphaToCoverage&&o.enable(19),S.push(o.mask)}function w(S){const v=g[S.type];let R;if(v){const F=hn[v];R=Qd.clone(F.uniforms)}else R=S.uniforms;return R}function I(S,v){let R;for(let F=0,O=h.length;F<O;F++){const W=h[F];if(W.cacheKey===v){R=W,++R.usedTimes;break}}return R===void 0&&(R=new d_(s,v,S,r),h.push(R)),R}function A(S){if(--S.usedTimes===0){const v=h.indexOf(S);h[v]=h[h.length-1],h.pop(),S.destroy()}}function T(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:w,acquireProgram:I,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function __(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function x_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ul(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function dl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,p,g,_,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),t++,f}function o(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,g,_,m){const f=a(d,u,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||x_),n.length>1&&n.sort(u||ul),i.length>1&&i.sort(u||ul)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function v_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new dl,s.set(n,[a])):i>=r.length?(a=new dl,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function M_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new St};break;case"SpotLight":e={position:new D,direction:new D,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function y_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let S_=0;function E_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function w_(s){const t=new M_,e=y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const i=new D,r=new he,a=new he;function o(l){let h=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,x=0,w=0,I=0,A=0,T=0;l.sort(E_);for(let S=0,v=l.length;S<v;S++){const R=l[S],F=R.color,O=R.intensity,W=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*O,d+=F.g*O,u+=F.b*O;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],O);T++}else if(R.isDirectionalLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,G=e.get(R);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=R.shadow.matrix,y++}n.directional[p]=B,p++}else if(R.isSpotLight){const B=t.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(F).multiplyScalar(O),B.distance=W,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[_]=B;const X=R.shadow;if(R.map&&(n.spotLightMap[I]=R.map,I++,X.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=X.matrix,R.castShadow){const G=e.get(R);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=V,w++}_++}else if(R.isRectAreaLight){const B=t.get(R);B.color.copy(F).multiplyScalar(O),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=B,m++}else if(R.isPointLight){const B=t.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const X=R.shadow,G=e.get(R);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=R.shadow.matrix,x++}n.point[g]=B,g++}else if(R.isHemisphereLight){const B=t.get(R);B.skyColor.copy(R.color).multiplyScalar(O),B.groundColor.copy(R.groundColor).multiplyScalar(O),n.hemi[f]=B,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==w||P.numSpotMaps!==I||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=w+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=w,P.numSpotMaps=I,P.numLightProbes=T,n.version=S_++)}function c(l,h){let d=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const x=l[f];if(x.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),d++}else if(x.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(x.width*.5,0,0),w.halfHeight.set(0,x.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(x.matrixWorld),w.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(x.matrixWorld),w.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function fl(s){const t=new w_(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function A_(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new fl(s),t.set(i,[o])):r>=a.length?(o=new fl(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class T_ extends vi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class b_ extends vi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(s,t,e){let n=new Ro;const i=new It,r=new It,a=new se,o=new T_({depthPacking:wd}),c=new b_,l={},h=e.maxTextureSize,d={[Jn]:Ue,[Ue]:Jn,[un]:un},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new At(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_h;let f=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(qn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const O=f!==En&&this.type===En,W=f===En&&this.type!==En;for(let V=0,B=A.length;V<B;V++){const X=A[V],G=X.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const st=G.getFrameExtents();if(i.multiply(st),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||O===!0||W===!0){const dt=this.type!==En?{minFilter:qe,magFilter:qe}:{};G.map!==null&&G.map.dispose(),G.map=new gi(i.x,i.y,dt),G.map.texture.name=X.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const lt=G.getViewportCount();for(let dt=0;dt<lt;dt++){const Ft=G.getViewport(dt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),F.viewport(a),G.updateMatrices(X,dt),n=G.getFrustum(),w(T,P,G.camera,X,this.type)}G.isPointLightShadow!==!0&&this.type===En&&y(G,P),G.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,v,R)};function y(A,T){const P=t.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gi(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,P,u,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,P,p,_,null)}function x(A,T,P,S){let v=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)v=R;else if(v=P.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=v.uuid,O=T.uuid;let W=l[F];W===void 0&&(W={},l[F]=W);let V=W[O];V===void 0&&(V=v.clone(),W[O]=V,T.addEventListener("dispose",I)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,S===En?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:d[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=s.properties.get(v);F.light=P}return v}function w(A,T,P,S,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=t.update(A),W=A.material;if(Array.isArray(W)){const V=O.groups;for(let B=0,X=V.length;B<X;B++){const G=V[B],st=W[G.materialIndex];if(st&&st.visible){const lt=x(A,st,S,v);A.onBeforeShadow(s,A,T,P,O,lt,G),s.renderBufferDirect(P,null,O,lt,A,G),A.onAfterShadow(s,A,T,P,O,lt,G)}}}else if(W.visible){const V=x(A,W,S,v);A.onBeforeShadow(s,A,T,P,O,V,null),s.renderBufferDirect(P,null,O,V,A,null),A.onAfterShadow(s,A,T,P,O,V,null)}}const F=A.children;for(let O=0,W=F.length;O<W;O++)w(F[O],T,P,S,v)}function I(A){A.target.removeEventListener("dispose",I);for(const P in l){const S=l[P],v=A.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}function L_(s){function t(){let C=!1;const ht=new se;let Y=null;const J=new se(0,0,0,0);return{setMask:function(nt){Y!==nt&&!C&&(s.colorMask(nt,nt,nt,nt),Y=nt)},setLocked:function(nt){C=nt},setClear:function(nt,bt,qt,de,xe){xe===!0&&(nt*=de,bt*=de,qt*=de),ht.set(nt,bt,qt,de),J.equals(ht)===!1&&(s.clearColor(nt,bt,qt,de),J.copy(ht))},reset:function(){C=!1,Y=null,J.set(-1,0,0,0)}}}function e(){let C=!1,ht=null,Y=null,J=null;return{setTest:function(nt){nt?ft(s.DEPTH_TEST):ot(s.DEPTH_TEST)},setMask:function(nt){ht!==nt&&!C&&(s.depthMask(nt),ht=nt)},setFunc:function(nt){if(Y!==nt){switch(nt){case $u:s.depthFunc(s.NEVER);break;case ju:s.depthFunc(s.ALWAYS);break;case Zu:s.depthFunc(s.LESS);break;case Pr:s.depthFunc(s.LEQUAL);break;case Qu:s.depthFunc(s.EQUAL);break;case td:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case nd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=nt}},setLocked:function(nt){C=nt},setClear:function(nt){J!==nt&&(s.clearDepth(nt),J=nt)},reset:function(){C=!1,ht=null,Y=null,J=null}}}function n(){let C=!1,ht=null,Y=null,J=null,nt=null,bt=null,qt=null,de=null,xe=null;return{setTest:function(jt){C||(jt?ft(s.STENCIL_TEST):ot(s.STENCIL_TEST))},setMask:function(jt){ht!==jt&&!C&&(s.stencilMask(jt),ht=jt)},setFunc:function(jt,sn,rn){(Y!==jt||J!==sn||nt!==rn)&&(s.stencilFunc(jt,sn,rn),Y=jt,J=sn,nt=rn)},setOp:function(jt,sn,rn){(bt!==jt||qt!==sn||de!==rn)&&(s.stencilOp(jt,sn,rn),bt=jt,qt=sn,de=rn)},setLocked:function(jt){C=jt},setClear:function(jt){xe!==jt&&(s.clearStencil(jt),xe=jt)},reset:function(){C=!1,ht=null,Y=null,J=null,nt=null,bt=null,qt=null,de=null,xe=null}}}const i=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,y=null,x=null,w=null,I=null,A=new St(0,0,0),T=0,P=!1,S=null,v=null,R=null,F=null,O=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=B>=1):X.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=B>=2);let G=null,st={};const lt=s.getParameter(s.SCISSOR_BOX),dt=s.getParameter(s.VIEWPORT),Ft=new se().fromArray(lt),Yt=new se().fromArray(dt);function q(C,ht,Y,J){const nt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(C,bt),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qt=0;qt<Y;qt++)C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,nt):s.texImage2D(ht+qt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,nt);return bt}const Z={};Z[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),Z[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Z[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(s.DEPTH_TEST),r.setFunc(Pr),yt(!1),Wt(Jo),ft(s.CULL_FACE),zt(qn);function ft(C){l[C]!==!0&&(s.enable(C),l[C]=!0)}function ot(C){l[C]!==!1&&(s.disable(C),l[C]=!1)}function Nt(C,ht){return h[C]!==ht?(s.bindFramebuffer(C,ht),h[C]=ht,C===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ht),C===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Pt(C,ht){let Y=u,J=!1;if(C){Y=d.get(ht),Y===void 0&&(Y=[],d.set(ht,Y));const nt=C.textures;if(Y.length!==nt.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,qt=nt.length;bt<qt;bt++)Y[bt]=s.COLOR_ATTACHMENT0+bt;Y.length=nt.length,J=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,J=!0);J&&s.drawBuffers(Y)}function Gt(C){return p!==C?(s.useProgram(C),p=C,!0):!1}const L={[li]:s.FUNC_ADD,[Iu]:s.FUNC_SUBTRACT,[Uu]:s.FUNC_REVERSE_SUBTRACT};L[Nu]=s.MIN,L[Ou]=s.MAX;const Vt={[Fu]:s.ZERO,[Bu]:s.ONE,[zu]:s.SRC_COLOR,[ho]:s.SRC_ALPHA,[Xu]:s.SRC_ALPHA_SATURATE,[Gu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[Hu]:s.ONE_MINUS_SRC_COLOR,[uo]:s.ONE_MINUS_SRC_ALPHA,[Wu]:s.ONE_MINUS_DST_COLOR,[ku]:s.ONE_MINUS_DST_ALPHA,[qu]:s.CONSTANT_COLOR,[Yu]:s.ONE_MINUS_CONSTANT_COLOR,[Ju]:s.CONSTANT_ALPHA,[Ku]:s.ONE_MINUS_CONSTANT_ALPHA};function zt(C,ht,Y,J,nt,bt,qt,de,xe,jt){if(C===qn){g===!0&&(ot(s.BLEND),g=!1);return}if(g===!1&&(ft(s.BLEND),g=!0),C!==Du){if(C!==_||jt!==P){if((m!==li||x!==li)&&(s.blendEquation(s.FUNC_ADD),m=li,x=li),jt)switch(C){case qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ko:s.blendFunc(s.ONE,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ko:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $o:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}f=null,y=null,w=null,I=null,A.set(0,0,0),T=0,_=C,P=jt}return}nt=nt||ht,bt=bt||Y,qt=qt||J,(ht!==m||nt!==x)&&(s.blendEquationSeparate(L[ht],L[nt]),m=ht,x=nt),(Y!==f||J!==y||bt!==w||qt!==I)&&(s.blendFuncSeparate(Vt[Y],Vt[J],Vt[bt],Vt[qt]),f=Y,y=J,w=bt,I=qt),(de.equals(A)===!1||xe!==T)&&(s.blendColor(de.r,de.g,de.b,xe),A.copy(de),T=xe),_=C,P=!1}function re(C,ht){C.side===un?ot(s.CULL_FACE):ft(s.CULL_FACE);let Y=C.side===Ue;ht&&(Y=!Y),yt(Y),C.blending===qi&&C.transparent===!1?zt(qn):zt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),r.setFunc(C.depthFunc),r.setTest(C.depthTest),r.setMask(C.depthWrite),i.setMask(C.colorWrite);const J=C.stencilWrite;a.setTest(J),J&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Rt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?ft(s.SAMPLE_ALPHA_TO_COVERAGE):ot(s.SAMPLE_ALPHA_TO_COVERAGE)}function yt(C){S!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),S=C)}function Wt(C){C!==Cu?(ft(s.CULL_FACE),C!==v&&(C===Jo?s.cullFace(s.BACK):C===Pu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ot(s.CULL_FACE),v=C}function Ot(C){C!==R&&(V&&s.lineWidth(C),R=C)}function Rt(C,ht,Y){C?(ft(s.POLYGON_OFFSET_FILL),(F!==ht||O!==Y)&&(s.polygonOffset(ht,Y),F=ht,O=Y)):ot(s.POLYGON_OFFSET_FILL)}function fe(C){C?ft(s.SCISSOR_TEST):ot(s.SCISSOR_TEST)}function b(C){C===void 0&&(C=s.TEXTURE0+W-1),G!==C&&(s.activeTexture(C),G=C)}function M(C,ht,Y){Y===void 0&&(G===null?Y=s.TEXTURE0+W-1:Y=G);let J=st[Y];J===void 0&&(J={type:void 0,texture:void 0},st[Y]=J),(J.type!==C||J.texture!==ht)&&(G!==Y&&(s.activeTexture(Y),G=Y),s.bindTexture(C,ht||Z[C]),J.type=C,J.texture=ht)}function k(){const C=st[G];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function rt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function at(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Lt(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Bt(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Tt(C){Ft.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),Ft.copy(C))}function ct(C){Yt.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),Yt.copy(C))}function Dt(C,ht){let Y=c.get(ht);Y===void 0&&(Y=new WeakMap,c.set(ht,Y));let J=Y.get(C);J===void 0&&(J=s.getUniformBlockIndex(ht,C.name),Y.set(C,J))}function Ht(C,ht){const J=c.get(ht).get(C);o.get(ht)!==J&&(s.uniformBlockBinding(ht,J,C.__bindingPointIndex),o.set(ht,J))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},G=null,st={},h={},d=new WeakMap,u=[],p=null,g=!1,_=null,m=null,f=null,y=null,x=null,w=null,I=null,A=new St(0,0,0),T=0,P=!1,S=null,v=null,R=null,F=null,O=null,Ft.set(0,0,s.canvas.width,s.canvas.height),Yt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ft,disable:ot,bindFramebuffer:Nt,drawBuffers:Pt,useProgram:Gt,setBlending:zt,setMaterial:re,setFlipSided:yt,setCullFace:Wt,setLineWidth:Ot,setPolygonOffset:Rt,setScissorTest:fe,activeTexture:b,bindTexture:M,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:_t,texImage3D:Bt,updateUBOMapping:Dt,uniformBlockBinding:Ht,texStorage2D:Lt,texStorage3D:tt,texSubImage2D:j,texSubImage3D:vt,compressedTexSubImage2D:rt,compressedTexSubImage3D:at,scissor:Tt,viewport:ct,reset:ue}}function D_(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new It,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return p?new OffscreenCanvas(b,M):Or("canvas")}function _(b,M,k){let K=1;const $=fe(b);if(($.width>k||$.height>k)&&(K=k/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(K*$.width),vt=Math.floor(K*$.height);d===void 0&&(d=g(j,vt));const rt=M?g(j,vt):d;return rt.width=j,rt.height=vt,rt.getContext("2d").drawImage(b,0,0,j,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+j+"x"+vt+")."),rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==qe&&b.minFilter!==Qe}function f(b){s.generateMipmap(b)}function y(b,M,k,K,$=!1){if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=M;if(M===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8)),M===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),M===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8)),M===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),M===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),M===s.RGBA){const vt=$?Dr:$t.getTransfer(K);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=vt===ne?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(b,M){let k;return b?M===null||M===Zi||M===Qi?k=s.DEPTH24_STENCIL8:M===Xn?k=s.DEPTH32F_STENCIL8:M===Lr&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Zi||M===Qi?k=s.DEPTH_COMPONENT24:M===Xn?k=s.DEPTH_COMPONENT32F:M===Lr&&(k=s.DEPTH_COMPONENT16),k}function w(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==qe&&b.minFilter!==Qe?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function I(b){const M=b.target;M.removeEventListener("dispose",I),T(M),M.isVideoTexture&&h.delete(M)}function A(b){const M=b.target;M.removeEventListener("dispose",A),S(M)}function T(b){const M=n.get(b);if(M.__webglInit===void 0)return;const k=b.source,K=u.get(k);if(K){const $=K[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&P(b),Object.keys(K).length===0&&u.delete(k)}n.remove(b)}function P(b){const M=n.get(b);s.deleteTexture(M.__webglTexture);const k=b.source,K=u.get(k);delete K[M.__cacheKey],a.memory.textures--}function S(b){const M=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let $=0;$<M.__webglFramebuffer[K].length;$++)s.deleteFramebuffer(M.__webglFramebuffer[K][$]);else s.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)s.deleteFramebuffer(M.__webglFramebuffer[K]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=b.textures;for(let K=0,$=k.length;K<$;K++){const j=n.get(k[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(b)}let v=0;function R(){v=0}function F(){const b=v;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),v+=1,b}function O(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function W(b,M){const k=n.get(b);if(b.isVideoTexture&&Ot(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Yt(k,b,M);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+M)}function V(b,M){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Yt(k,b,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+M)}function B(b,M){const k=n.get(b);if(b.version>0&&k.__version!==b.version){Yt(k,b,M);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+M)}function X(b,M){const k=n.get(b);if(b.version>0&&k.__version!==b.version){q(k,b,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+M)}const G={[mo]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[go]:s.MIRRORED_REPEAT},st={[qe]:s.NEAREST,[dd]:s.NEAREST_MIPMAP_NEAREST,[Fs]:s.NEAREST_MIPMAP_LINEAR,[Qe]:s.LINEAR,[aa]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},lt={[Td]:s.NEVER,[Dd]:s.ALWAYS,[bd]:s.LESS,[Th]:s.LEQUAL,[Rd]:s.EQUAL,[Ld]:s.GEQUAL,[Cd]:s.GREATER,[Pd]:s.NOTEQUAL};function dt(b,M){if(M.type===Xn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Qe||M.magFilter===aa||M.magFilter===Fs||M.magFilter===fi||M.minFilter===Qe||M.minFilter===aa||M.minFilter===Fs||M.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,G[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,G[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,G[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,st[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,st[M.minFilter]),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qe||M.minFilter!==Fs&&M.minFilter!==fi||M.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ft(b,M){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",I));const K=M.source;let $=u.get(K);$===void 0&&($={},u.set(K,$));const j=O(M);if(j!==b.__cacheKey){$[j]===void 0&&($[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[j].usedTimes++;const vt=$[b.__cacheKey];vt!==void 0&&($[b.__cacheKey].usedTimes--,vt.usedTimes===0&&P(M)),b.__cacheKey=j,b.__webglTexture=$[j].texture}return k}function Yt(b,M,k){let K=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=s.TEXTURE_3D);const $=Ft(b,M),j=M.source;e.bindTexture(K,b.__webglTexture,s.TEXTURE0+k);const vt=n.get(j);if(j.version!==vt.__version||$===!0){e.activeTexture(s.TEXTURE0+k);const rt=$t.getPrimaries($t.workingColorSpace),at=M.colorSpace===Wn?null:$t.getPrimaries(M.colorSpace),Lt=M.colorSpace===Wn||rt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let tt=_(M.image,!1,i.maxTextureSize);tt=Rt(M,tt);const _t=r.convert(M.format,M.colorSpace),Bt=r.convert(M.type);let Tt=y(M.internalFormat,_t,Bt,M.colorSpace,M.isVideoTexture);dt(K,M);let ct;const Dt=M.mipmaps,Ht=M.isVideoTexture!==!0,ue=vt.__version===void 0||$===!0,C=j.dataReady,ht=w(M,tt);if(M.isDepthTexture)Tt=x(M.format===ts,M.type),ue&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Tt,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,_t,Bt,null));else if(M.isDataTexture)if(Dt.length>0){Ht&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Tt,Dt[0].width,Dt[0].height);for(let Y=0,J=Dt.length;Y<J;Y++)ct=Dt[Y],Ht?C&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ct.width,ct.height,_t,Bt,ct.data):e.texImage2D(s.TEXTURE_2D,Y,Tt,ct.width,ct.height,0,_t,Bt,ct.data);M.generateMipmaps=!1}else Ht?(ue&&e.texStorage2D(s.TEXTURE_2D,ht,Tt,tt.width,tt.height),C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,_t,Bt,tt.data)):e.texImage2D(s.TEXTURE_2D,0,Tt,tt.width,tt.height,0,_t,Bt,tt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ht&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Tt,Dt[0].width,Dt[0].height,tt.depth);for(let Y=0,J=Dt.length;Y<J;Y++)if(ct=Dt[Y],M.format!==pn)if(_t!==null)if(Ht){if(C)if(M.layerUpdates.size>0){for(const nt of M.layerUpdates){const bt=ct.width*ct.height;e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,nt,ct.width,ct.height,1,_t,ct.data.slice(bt*nt,bt*(nt+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ct.width,ct.height,tt.depth,_t,ct.data,0,0)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,Tt,ct.width,ct.height,tt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?C&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,ct.width,ct.height,tt.depth,_t,Bt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,Tt,ct.width,ct.height,tt.depth,0,_t,Bt,ct.data)}else{Ht&&ue&&e.texStorage2D(s.TEXTURE_2D,ht,Tt,Dt[0].width,Dt[0].height);for(let Y=0,J=Dt.length;Y<J;Y++)ct=Dt[Y],M.format!==pn?_t!==null?Ht?C&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,ct.width,ct.height,_t,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,Tt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?C&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,ct.width,ct.height,_t,Bt,ct.data):e.texImage2D(s.TEXTURE_2D,Y,Tt,ct.width,ct.height,0,_t,Bt,ct.data)}else if(M.isDataArrayTexture)if(Ht){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,Tt,tt.width,tt.height,tt.depth),C)if(M.layerUpdates.size>0){let Y;switch(Bt){case s.UNSIGNED_BYTE:switch(_t){case s.ALPHA:Y=1;break;case s.LUMINANCE:Y=1;break;case s.LUMINANCE_ALPHA:Y=2;break;case s.RGB:Y=3;break;case s.RGBA:Y=4;break;default:throw new Error(`Unknown texel size for format ${_t}.`)}break;case s.UNSIGNED_SHORT_4_4_4_4:case s.UNSIGNED_SHORT_5_5_5_1:case s.UNSIGNED_SHORT_5_6_5:Y=1;break;default:throw new Error(`Unknown texel size for type ${Bt}.`)}const J=tt.width*tt.height*Y;for(const nt of M.layerUpdates)e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,tt.width,tt.height,1,_t,Bt,tt.data.slice(J*nt,J*(nt+1)));M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,_t,Bt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Tt,tt.width,tt.height,tt.depth,0,_t,Bt,tt.data);else if(M.isData3DTexture)Ht?(ue&&e.texStorage3D(s.TEXTURE_3D,ht,Tt,tt.width,tt.height,tt.depth),C&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,_t,Bt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,Tt,tt.width,tt.height,tt.depth,0,_t,Bt,tt.data);else if(M.isFramebufferTexture){if(ue)if(Ht)e.texStorage2D(s.TEXTURE_2D,ht,Tt,tt.width,tt.height);else{let Y=tt.width,J=tt.height;for(let nt=0;nt<ht;nt++)e.texImage2D(s.TEXTURE_2D,nt,Tt,Y,J,0,_t,Bt,null),Y>>=1,J>>=1}}else if(Dt.length>0){if(Ht&&ue){const Y=fe(Dt[0]);e.texStorage2D(s.TEXTURE_2D,ht,Tt,Y.width,Y.height)}for(let Y=0,J=Dt.length;Y<J;Y++)ct=Dt[Y],Ht?C&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,_t,Bt,ct):e.texImage2D(s.TEXTURE_2D,Y,Tt,_t,Bt,ct);M.generateMipmaps=!1}else if(Ht){if(ue){const Y=fe(tt);e.texStorage2D(s.TEXTURE_2D,ht,Tt,Y.width,Y.height)}C&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Bt,tt)}else e.texImage2D(s.TEXTURE_2D,0,Tt,_t,Bt,tt);m(M)&&f(K),vt.__version=j.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function q(b,M,k){if(M.image.length!==6)return;const K=Ft(b,M),$=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+k);const j=n.get($);if($.version!==j.__version||K===!0){e.activeTexture(s.TEXTURE0+k);const vt=$t.getPrimaries($t.workingColorSpace),rt=M.colorSpace===Wn?null:$t.getPrimaries(M.colorSpace),at=M.colorSpace===Wn||vt===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Lt=M.isCompressedTexture||M.image[0].isCompressedTexture,tt=M.image[0]&&M.image[0].isDataTexture,_t=[];for(let J=0;J<6;J++)!Lt&&!tt?_t[J]=_(M.image[J],!0,i.maxCubemapSize):_t[J]=tt?M.image[J].image:M.image[J],_t[J]=Rt(M,_t[J]);const Bt=_t[0],Tt=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),Dt=y(M.internalFormat,Tt,ct,M.colorSpace),Ht=M.isVideoTexture!==!0,ue=j.__version===void 0||K===!0,C=$.dataReady;let ht=w(M,Bt);dt(s.TEXTURE_CUBE_MAP,M);let Y;if(Lt){Ht&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Dt,Bt.width,Bt.height);for(let J=0;J<6;J++){Y=_t[J].mipmaps;for(let nt=0;nt<Y.length;nt++){const bt=Y[nt];M.format!==pn?Tt!==null?Ht?C&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt,Dt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt,0,0,bt.width,bt.height,Tt,ct,bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt,Dt,bt.width,bt.height,0,Tt,ct,bt.data)}}}else{if(Y=M.mipmaps,Ht&&ue){Y.length>0&&ht++;const J=fe(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ht,Dt,J.width,J.height)}for(let J=0;J<6;J++)if(tt){Ht?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,_t[J].width,_t[J].height,Tt,ct,_t[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Dt,_t[J].width,_t[J].height,0,Tt,ct,_t[J].data);for(let nt=0;nt<Y.length;nt++){const qt=Y[nt].image[J].image;Ht?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt+1,0,0,qt.width,qt.height,Tt,ct,qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt+1,Dt,qt.width,qt.height,0,Tt,ct,qt.data)}}else{Ht?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Tt,ct,_t[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Dt,Tt,ct,_t[J]);for(let nt=0;nt<Y.length;nt++){const bt=Y[nt];Ht?C&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt+1,0,0,Tt,ct,bt.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,nt+1,Dt,Tt,ct,bt.image[J])}}}m(M)&&f(s.TEXTURE_CUBE_MAP),j.__version=$.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Z(b,M,k,K,$,j){const vt=r.convert(k.format,k.colorSpace),rt=r.convert(k.type),at=y(k.internalFormat,vt,rt,k.colorSpace);if(!n.get(M).__hasExternalTextures){const tt=Math.max(1,M.width>>j),_t=Math.max(1,M.height>>j);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?e.texImage3D($,j,at,tt,_t,M.depth,0,vt,rt,null):e.texImage2D($,j,at,tt,_t,0,vt,rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Wt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,n.get(k).__webglTexture,0,yt(M)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,n.get(k).__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(b,M,k){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer){const K=M.depthTexture,$=K&&K.isDepthTexture?K.type:null,j=x(M.stencilBuffer,$),vt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=yt(M);Wt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,j,M.width,M.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,j,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,j,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,vt,s.RENDERBUFFER,b)}else{const K=M.textures;for(let $=0;$<K.length;$++){const j=K[$],vt=r.convert(j.format,j.colorSpace),rt=r.convert(j.type),at=y(j.internalFormat,vt,rt,j.colorSpace),Lt=yt(M);k&&Wt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,at,M.width,M.height):Wt(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Lt,at,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,at,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ot(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,$=yt(M);if(M.depthTexture.format===Yi)Wt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(M.depthTexture.format===ts)Wt(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Nt(b){const M=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");ot(M.__webglFramebuffer,b)}else if(k){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=s.createRenderbuffer(),ft(M.__webglDepthbuffer[K],b,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),ft(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(b,M,k){const K=n.get(b);M!==void 0&&Z(K.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Nt(b)}function Gt(b){const M=b.texture,k=n.get(b),K=n.get(M);b.addEventListener("dispose",A);const $=b.textures,j=b.isWebGLCubeRenderTarget===!0,vt=$.length>1;if(vt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=M.version,a.memory.textures++),j){k.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[rt]=[];for(let at=0;at<M.mipmaps.length;at++)k.__webglFramebuffer[rt][at]=s.createFramebuffer()}else k.__webglFramebuffer[rt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)k.__webglFramebuffer[rt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(vt)for(let rt=0,at=$.length;rt<at;rt++){const Lt=n.get($[rt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&Wt(b)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let rt=0;rt<$.length;rt++){const at=$[rt];k.__webglColorRenderbuffer[rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[rt]);const Lt=r.convert(at.format,at.colorSpace),tt=r.convert(at.type),_t=y(at.internalFormat,Lt,tt,at.colorSpace,b.isXRRenderTarget===!0),Bt=yt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Bt,_t,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,k.__webglColorRenderbuffer[rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ft(k.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),dt(s.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let at=0;at<M.mipmaps.length;at++)Z(k.__webglFramebuffer[rt][at],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,at);else Z(k.__webglFramebuffer[rt],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(M)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let rt=0,at=$.length;rt<at;rt++){const Lt=$[rt],tt=n.get(Lt);e.bindTexture(s.TEXTURE_2D,tt.__webglTexture),dt(s.TEXTURE_2D,Lt),Z(k.__webglFramebuffer,b,Lt,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,0),m(Lt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let rt=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),dt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let at=0;at<M.mipmaps.length;at++)Z(k.__webglFramebuffer[at],b,M,s.COLOR_ATTACHMENT0,rt,at);else Z(k.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,rt,0);m(M)&&f(rt),e.unbindTexture()}b.depthBuffer&&Nt(b)}function L(b){const M=b.textures;for(let k=0,K=M.length;k<K;k++){const $=M[k];if(m($)){const j=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get($).__webglTexture;e.bindTexture(j,vt),f(j),e.unbindTexture()}}}const Vt=[],zt=[];function re(b){if(b.samples>0){if(Wt(b)===!1){const M=b.textures,k=b.width,K=b.height;let $=s.COLOR_BUFFER_BIT;const j=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(b),rt=M.length>1;if(rt)for(let at=0;at<M.length;at++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let at=0;at<M.length;at++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[at]);const Lt=n.get(M[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Lt,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,$,s.NEAREST),c===!0&&(Vt.length=0,zt.length=0,Vt.push(s.COLOR_ATTACHMENT0+at),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Vt.push(j),zt.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,zt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),rt)for(let at=0;at<M.length;at++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,vt.__webglColorRenderbuffer[at]);const Lt=n.get(M[at]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const M=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function yt(b){return Math.min(i.maxSamples,b.samples)}function Wt(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ot(b){const M=a.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function Rt(b,M){const k=b.colorSpace,K=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==jn&&k!==Wn&&($t.getTransfer(k)===ne?(K!==pn||$!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function fe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=Pt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=Wt}function I_(s,t){function e(n,i=Wn){let r;const a=$t.getTransfer(i);if(n===Kn)return s.UNSIGNED_BYTE;if(n===Mh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===yh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===md)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===fd)return s.BYTE;if(n===pd)return s.SHORT;if(n===Lr)return s.UNSIGNED_SHORT;if(n===vh)return s.INT;if(n===Zi)return s.UNSIGNED_INT;if(n===Xn)return s.FLOAT;if(n===kr)return s.HALF_FLOAT;if(n===gd)return s.ALPHA;if(n===_d)return s.RGB;if(n===pn)return s.RGBA;if(n===xd)return s.LUMINANCE;if(n===vd)return s.LUMINANCE_ALPHA;if(n===Yi)return s.DEPTH_COMPONENT;if(n===ts)return s.DEPTH_STENCIL;if(n===Md)return s.RED;if(n===Sh)return s.RED_INTEGER;if(n===yd)return s.RG;if(n===Eh)return s.RG_INTEGER;if(n===wh)return s.RGBA_INTEGER;if(n===oa||n===ca||n===la||n===ha)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ha)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===Qo||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===ac||n===oc||n===cc||n===lc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_c)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ua||n===vc||n===Mc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ua)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sd||n===yc||n===Sc||n===Ec)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class U_ extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tn extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const N_={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&u>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(N_)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ne,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $n({vertexShader:O_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class z_ extends rs{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,g=null;const _=new B_,m=e.getContextAttributes();let f=null,y=null;const x=[],w=[],I=new It;let A=null;const T=new Ie;T.layers.enable(1),T.viewport=new se;const P=new Ie;P.layers.enable(2),P.viewport=new se;const S=[T,P],v=new U_;v.layers.enable(1),v.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Z=x[q];return Z===void 0&&(Z=new Ba,x[q]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(q){let Z=x[q];return Z===void 0&&(Z=new Ba,x[q]=Z),Z.getGripSpace()},this.getHand=function(q){let Z=x[q];return Z===void 0&&(Z=new Ba,x[q]=Z),Z.getHandSpace()};function O(q){const Z=w.indexOf(q.inputSource);if(Z===-1)return;const ft=x[Z];ft!==void 0&&(ft.update(q.inputSource,q.frame,l||a),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",V);for(let q=0;q<x.length;q++){const Z=w[q];Z!==null&&(w[q]=null,x[q].disconnect(Z))}R=null,F=null,_.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,y=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new gi(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,ft=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=m.stencil?ts:Yi,ft=m.stencil?Qi:Zi);const Nt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Nt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new gi(u.textureWidth,u.textureHeight,{format:pn,type:Kn,depthTexture:new Vh(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(q){for(let Z=0;Z<q.removed.length;Z++){const ft=q.removed[Z],ot=w.indexOf(ft);ot>=0&&(w[ot]=null,x[ot].disconnect(ft))}for(let Z=0;Z<q.added.length;Z++){const ft=q.added[Z];let ot=w.indexOf(ft);if(ot===-1){for(let Pt=0;Pt<x.length;Pt++)if(Pt>=w.length){w.push(ft),ot=Pt;break}else if(w[Pt]===null){w[Pt]=ft,ot=Pt;break}if(ot===-1)break}const Nt=x[ot];Nt&&Nt.connect(ft)}}const B=new D,X=new D;function G(q,Z,ft){B.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(ft.matrixWorld);const ot=B.distanceTo(X),Nt=Z.projectionMatrix.elements,Pt=ft.projectionMatrix.elements,Gt=Nt[14]/(Nt[10]-1),L=Nt[14]/(Nt[10]+1),Vt=(Nt[9]+1)/Nt[5],zt=(Nt[9]-1)/Nt[5],re=(Nt[8]-1)/Nt[0],yt=(Pt[8]+1)/Pt[0],Wt=Gt*re,Ot=Gt*yt,Rt=ot/(-re+yt),fe=Rt*-re;Z.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(fe),q.translateZ(Rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const b=Gt+Rt,M=L+Rt,k=Wt-fe,K=Ot+(ot-fe),$=Vt*L/M*b,j=zt*L/M*b;q.projectionMatrix.makePerspective(k,K,$,j,b,M),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function st(q,Z){Z===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Z.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;_.texture!==null&&(q.near=_.depthNear,q.far=_.depthFar),v.near=P.near=T.near=q.near,v.far=P.far=T.far=q.far,(R!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,F=v.far,T.near=R,T.far=F,P.near=R,P.far=F,T.updateProjectionMatrix(),P.updateProjectionMatrix(),q.updateProjectionMatrix());const Z=q.parent,ft=v.cameras;st(v,Z);for(let ot=0;ot<ft.length;ot++)st(ft[ot],Z);ft.length===2?G(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),lt(q,v,Z)};function lt(q,Z,ft){ft===null?q.matrix.copy(Z.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(Z.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Z.projectionMatrix),q.projectionMatrixInverse.copy(Z.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_o*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(q){c=q,u!==null&&(u.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let dt=null;function Ft(q,Z){if(h=Z.getViewerPose(l||a),g=Z,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let ot=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,ot=!0);for(let Pt=0;Pt<ft.length;Pt++){const Gt=ft[Pt];let L=null;if(p!==null)L=p.getViewport(Gt);else{const zt=d.getViewSubImage(u,Gt);L=zt.viewport,Pt===0&&(t.setRenderTargetTextures(y,zt.colorTexture,u.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(y))}let Vt=S[Pt];Vt===void 0&&(Vt=new Ie,Vt.layers.enable(Pt),Vt.viewport=new se,S[Pt]=Vt),Vt.matrix.fromArray(Gt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Gt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(L.x,L.y,L.width,L.height),Pt===0&&(v.matrix.copy(Vt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ot===!0&&v.cameras.push(Vt)}const Nt=i.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Pt=d.getDepthInformation(ft[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,i.renderState)}}for(let ft=0;ft<x.length;ft++){const ot=w[ft],Nt=x[ft];ot!==null&&Nt!==void 0&&Nt.update(ot,Z,l||a)}dt&&dt(q,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Yt=new zh;Yt.setAnimationLoop(Ft),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}}const ri=new Ye,H_=new he;function V_(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Oh(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ue&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ue&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),x=y.envMap,w=y.envMapRotation;x&&(m.envMap.value=x,ri.copy(w),ri.x*=-1,ri.y*=-1,ri.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(ri)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=x*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ue&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k_(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const w=x.program;n.uniformBlockBinding(y,w)}function l(y,x){let w=i[y.id];w===void 0&&(g(y),w=h(y),i[y.id]=w,y.addEventListener("dispose",m));const I=x.program;n.updateUBOMapping(y,I);const A=t.render.frame;r[y.id]!==A&&(u(y),r[y.id]=A)}function h(y){const x=d();y.__bindingPointIndex=x;const w=s.createBuffer(),I=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const x=i[y.id],w=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,T=w.length;A<T;A++){const P=Array.isArray(w[A])?w[A]:[w[A]];for(let S=0,v=P.length;S<v;S++){const R=P[S];if(p(R,A,S,I)===!0){const F=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let V=0;V<O.length;V++){const B=O[V],X=_(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,F+W,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,x,w,I){const A=y.value,T=x+"_"+w;if(I[T]===void 0)return typeof A=="number"||typeof A=="boolean"?I[T]=A:I[T]=A.clone(),!0;{const P=I[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return I[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(y){const x=y.uniforms;let w=0;const I=16;for(let T=0,P=x.length;T<P;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,R=S.length;v<R;v++){const F=S[v],O=Array.isArray(F.value)?F.value:[F.value];for(let W=0,V=O.length;W<V;W++){const B=O[W],X=_(B),G=w%I;G!==0&&I-G<X.boundary&&(w+=I-G),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=X.storage}}}const A=w%I;return A>0&&(w+=I-A),y.__size=w,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class G_{constructor(t={}){const{canvas:e=Ud(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Yn,this.toneMappingExposure=1;const x=this;let w=!1,I=0,A=0,T=null,P=-1,S=null;const v=new se,R=new se;let F=null;const O=new St(0);let W=0,V=e.width,B=e.height,X=1,G=null,st=null;const lt=new se(0,0,V,B),dt=new se(0,0,V,B);let Ft=!1;const Yt=new Ro;let q=!1,Z=!1;const ft=new he,ot=new D,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Gt(){return T===null?X:1}let L=n;function Vt(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wo}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",J,!1),L===null){const U="webgl2";if(L=Vt(U,E),L===null)throw Vt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,re,yt,Wt,Ot,Rt,fe,b,M,k,K,$,j,vt,rt,at,Lt,tt,_t,Bt,Tt,ct,Dt,Ht;function ue(){zt=new jm(L),zt.init(),ct=new I_(L,zt),re=new Xm(L,zt,t,ct),yt=new L_(L),Wt=new tg(L),Ot=new __,Rt=new D_(L,zt,yt,Ot,re,ct,Wt),fe=new Ym(x),b=new $m(x),M=new of(L),Dt=new Gm(L,M),k=new Zm(L,M,Wt,Dt),K=new ng(L,k,M,Wt),_t=new eg(L,re,Rt),at=new qm(Ot),$=new g_(x,fe,b,zt,re,Dt,at),j=new V_(x,Ot),vt=new v_,rt=new A_(zt),tt=new km(x,fe,b,yt,K,u,c),Lt=new P_(x,K,re),Ht=new k_(L,Wt,re,yt),Bt=new Wm(L,zt,Wt),Tt=new Qm(L,zt,Wt),Wt.programs=$.programs,x.capabilities=re,x.extensions=zt,x.properties=Ot,x.renderLists=vt,x.shadowMap=Lt,x.state=yt,x.info=Wt}ue();const C=new z_(x,L);this.xr=C,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(V,B,!1))},this.getSize=function(E){return E.set(V,B)},this.setSize=function(E,U,z=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=E,B=U,e.width=Math.floor(E*X),e.height=Math.floor(U*X),z===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(V*X,B*X).floor()},this.setDrawingBufferSize=function(E,U,z){V=E,B=U,X=z,e.width=Math.floor(E*z),e.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(v)},this.getViewport=function(E){return E.copy(lt)},this.setViewport=function(E,U,z,H){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,U,z,H),yt.viewport(v.copy(lt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(dt)},this.setScissor=function(E,U,z,H){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,U,z,H),yt.scissor(R.copy(dt).multiplyScalar(X).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(E){yt.setScissorTest(Ft=E)},this.setOpaqueSort=function(E){G=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(E=!0,U=!0,z=!0){let H=0;if(E){let N=!1;if(T!==null){const et=T.texture.format;N=et===wh||et===Eh||et===Sh}if(N){const et=T.texture.type,ut=et===Kn||et===Zi||et===Lr||et===Qi||et===Mh||et===yh,pt=tt.getClearColor(),gt=tt.getClearAlpha(),Et=pt.r,wt=pt.g,Mt=pt.b;ut?(p[0]=Et,p[1]=wt,p[2]=Mt,p[3]=gt,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Et,g[1]=wt,g[2]=Mt,g[3]=gt,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),z&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",J,!1),vt.dispose(),rt.dispose(),Ot.dispose(),fe.dispose(),b.dispose(),K.dispose(),Dt.dispose(),Ht.dispose(),$.dispose(),C.dispose(),C.removeEventListener("sessionstart",sn),C.removeEventListener("sessionend",rn),Zn.stop()};function ht(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=Wt.autoReset,U=Lt.enabled,z=Lt.autoUpdate,H=Lt.needsUpdate,N=Lt.type;ue(),Wt.autoReset=E,Lt.enabled=U,Lt.autoUpdate=z,Lt.needsUpdate=H,Lt.type=N}function J(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){const U=E.target;U.removeEventListener("dispose",nt),bt(U)}function bt(E){qt(E),Ot.remove(E)}function qt(E){const U=Ot.get(E).programs;U!==void 0&&(U.forEach(function(z){$.releaseProgram(z)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,H,N,et){U===null&&(U=Nt);const ut=N.isMesh&&N.matrixWorld.determinant()<0,pt=Eu(E,U,z,H,N);yt.setMaterial(H,ut);let gt=z.index,Et=1;if(H.wireframe===!0){if(gt=k.getWireframeAttribute(z),gt===void 0)return;Et=2}const wt=z.drawRange,Mt=z.attributes.position;let Jt=wt.start*Et,ce=(wt.start+wt.count)*Et;et!==null&&(Jt=Math.max(Jt,et.start*Et),ce=Math.min(ce,(et.start+et.count)*Et)),gt!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,gt.count)):Mt!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Mt.count));const le=ce-Jt;if(le<0||le===1/0)return;Dt.setup(N,H,pt,z,gt);let Fe,Kt=Bt;if(gt!==null&&(Fe=M.get(gt),Kt=Tt,Kt.setIndex(Fe)),N.isMesh)H.wireframe===!0?(yt.setLineWidth(H.wireframeLinewidth*Gt()),Kt.setMode(L.LINES)):Kt.setMode(L.TRIANGLES);else if(N.isLine){let xt=H.linewidth;xt===void 0&&(xt=1),yt.setLineWidth(xt*Gt()),N.isLineSegments?Kt.setMode(L.LINES):N.isLineLoop?Kt.setMode(L.LINE_LOOP):Kt.setMode(L.LINE_STRIP)}else N.isPoints?Kt.setMode(L.POINTS):N.isSprite&&Kt.setMode(L.TRIANGLES);if(N.isBatchedMesh)N._multiDrawInstances!==null?Kt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances):Kt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Kt.renderInstances(Jt,le,N.count);else if(z.isInstancedBufferGeometry){const xt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,be=Math.min(z.instanceCount,xt);Kt.renderInstances(Jt,le,be)}else Kt.render(Jt,le)};function de(E,U,z){E.transparent===!0&&E.side===un&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,Ns(E,U,z),E.side=Jn,E.needsUpdate=!0,Ns(E,U,z),E.side=un):Ns(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),m=rt.get(z),m.init(U),y.push(m),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),E!==z&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights();const H=new Set;return E.traverse(function(N){const et=N.material;if(et)if(Array.isArray(et))for(let ut=0;ut<et.length;ut++){const pt=et[ut];de(pt,z,N),H.add(pt)}else de(et,z,N),H.add(et)}),y.pop(),m=null,H},this.compileAsync=function(E,U,z=null){const H=this.compile(E,U,z);return new Promise(N=>{function et(){if(H.forEach(function(ut){Ot.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){N(E);return}setTimeout(et,10)}zt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let xe=null;function jt(E){xe&&xe(E)}function sn(){Zn.stop()}function rn(){Zn.start()}const Zn=new zh;Zn.setAnimationLoop(jt),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(E){xe=E,C.setAnimationLoop(E),E===null?Zn.stop():Zn.start()},C.addEventListener("sessionstart",sn),C.addEventListener("sessionend",rn),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(U),U=C.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,T),m=rt.get(E,y.length),m.init(U),y.push(m),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Yt.setFromProjectionMatrix(ft),Z=this.localClippingEnabled,q=at.init(this.clippingPlanes,Z),_=vt.get(E,f.length),_.init(),f.push(_),C.enabled===!0&&C.isPresenting===!0){const et=x.xr.getDepthSensingMesh();et!==null&&na(et,U,-1/0,x.sortObjects)}na(E,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(G,st),Pt=C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1,Pt&&tt.addToRenderList(_,E),this.info.render.frame++,q===!0&&at.beginShadows();const z=m.state.shadowsArray;Lt.render(z,E,U),q===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,N=_.transmissive;if(m.setupLights(),U.isArrayCamera){const et=U.cameras;if(N.length>0)for(let ut=0,pt=et.length;ut<pt;ut++){const gt=et[ut];Go(H,N,E,gt)}Pt&&tt.render(E);for(let ut=0,pt=et.length;ut<pt;ut++){const gt=et[ut];ko(_,E,gt,gt.viewport)}}else N.length>0&&Go(H,N,E,U),Pt&&tt.render(E),ko(_,E,U);T!==null&&(Rt.updateMultisampleRenderTarget(T),Rt.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,U),Dt.resetDefaultState(),P=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],q===!0&&at.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function na(E,U,z,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Yt.intersectsSprite(E)){H&&ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ft);const ut=K.update(E),pt=E.material;pt.visible&&_.push(E,ut,pt,z,ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Yt.intersectsObject(E))){const ut=K.update(E),pt=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ot.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),ot.copy(ut.boundingSphere.center)),ot.applyMatrix4(E.matrixWorld).applyMatrix4(ft)),Array.isArray(pt)){const gt=ut.groups;for(let Et=0,wt=gt.length;Et<wt;Et++){const Mt=gt[Et],Jt=pt[Mt.materialIndex];Jt&&Jt.visible&&_.push(E,ut,Jt,z,ot.z,Mt)}}else pt.visible&&_.push(E,ut,pt,z,ot.z,null)}}const et=E.children;for(let ut=0,pt=et.length;ut<pt;ut++)na(et[ut],U,z,H)}function ko(E,U,z,H){const N=E.opaque,et=E.transmissive,ut=E.transparent;m.setupLightsView(z),q===!0&&at.setGlobalState(x.clippingPlanes,z),H&&yt.viewport(v.copy(H)),N.length>0&&Us(N,U,z),et.length>0&&Us(et,U,z),ut.length>0&&Us(ut,U,z),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Go(E,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[H.id]===void 0&&(m.state.transmissionRenderTarget[H.id]=new gi(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?kr:Kn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));const et=m.state.transmissionRenderTarget[H.id],ut=H.viewport||v;et.setSize(ut.z,ut.w);const pt=x.getRenderTarget();x.setRenderTarget(et),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),Pt?tt.render(z):x.clear();const gt=x.toneMapping;x.toneMapping=Yn;const Et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),q===!0&&at.setGlobalState(x.clippingPlanes,H),Us(E,z,H),Rt.updateMultisampleRenderTarget(et),Rt.updateRenderTargetMipmap(et),zt.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Mt=0,Jt=U.length;Mt<Jt;Mt++){const ce=U[Mt],le=ce.object,Fe=ce.geometry,Kt=ce.material,xt=ce.group;if(Kt.side===un&&le.layers.test(H.layers)){const be=Kt.side;Kt.side=Ue,Kt.needsUpdate=!0,Wo(le,z,H,Fe,Kt,xt),Kt.side=be,Kt.needsUpdate=!0,wt=!0}}wt===!0&&(Rt.updateMultisampleRenderTarget(et),Rt.updateRenderTargetMipmap(et))}x.setRenderTarget(pt),x.setClearColor(O,W),Et!==void 0&&(H.viewport=Et),x.toneMapping=gt}function Us(E,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,et=E.length;N<et;N++){const ut=E[N],pt=ut.object,gt=ut.geometry,Et=H===null?ut.material:H,wt=ut.group;pt.layers.test(z.layers)&&Wo(pt,U,z,gt,Et,wt)}}function Wo(E,U,z,H,N,et){E.onBeforeRender(x,U,z,H,N,et),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,U,z,H,E,et),N.transparent===!0&&N.side===un&&N.forceSinglePass===!1?(N.side=Ue,N.needsUpdate=!0,x.renderBufferDirect(z,U,H,N,E,et),N.side=Jn,N.needsUpdate=!0,x.renderBufferDirect(z,U,H,N,E,et),N.side=un):x.renderBufferDirect(z,U,H,N,E,et),E.onAfterRender(x,U,z,H,N,et)}function Ns(E,U,z){U.isScene!==!0&&(U=Nt);const H=Ot.get(E),N=m.state.lights,et=m.state.shadowsArray,ut=N.state.version,pt=$.getParameters(E,N.state,et,U,z),gt=$.getProgramCacheKey(pt);let Et=H.programs;H.environment=E.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(E.isMeshStandardMaterial?b:fe).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Et===void 0&&(E.addEventListener("dispose",nt),Et=new Map,H.programs=Et);let wt=Et.get(gt);if(wt!==void 0){if(H.currentProgram===wt&&H.lightsStateVersion===ut)return qo(E,pt),wt}else pt.uniforms=$.getUniforms(E),E.onBuild(z,pt,x),E.onBeforeCompile(pt,x),wt=$.acquireProgram(pt,gt),Et.set(gt,wt),H.uniforms=pt.uniforms;const Mt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=at.uniform),qo(E,pt),H.needsLights=Au(E),H.lightsStateVersion=ut,H.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=wt,H.uniformsList=null,wt}function Xo(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Rr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function qo(E,U){const z=Ot.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function Eu(E,U,z,H,N){U.isScene!==!0&&(U=Nt),Rt.resetTextureUnits();const et=U.fog,ut=H.isMeshStandardMaterial?U.environment:null,pt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:jn,gt=(H.isMeshStandardMaterial?b:fe).get(H.envMap||ut),Et=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,wt=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!z.morphAttributes.position,Jt=!!z.morphAttributes.normal,ce=!!z.morphAttributes.color;let le=Yn;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(le=x.toneMapping);const Fe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Kt=Fe!==void 0?Fe.length:0,xt=Ot.get(H),be=m.state.lights;if(q===!0&&(Z===!0||E!==S)){const Ve=E===S&&H.id===P;at.setState(H,E,Ve)}let Zt=!1;H.version===xt.__version?(xt.needsLights&&xt.lightsStateVersion!==be.state.version||xt.outputColorSpace!==pt||N.isBatchedMesh&&xt.batching===!1||!N.isBatchedMesh&&xt.batching===!0||N.isBatchedMesh&&xt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&xt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&xt.instancing===!1||!N.isInstancedMesh&&xt.instancing===!0||N.isSkinnedMesh&&xt.skinning===!1||!N.isSkinnedMesh&&xt.skinning===!0||N.isInstancedMesh&&xt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&xt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&xt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&xt.instancingMorph===!1&&N.morphTexture!==null||xt.envMap!==gt||H.fog===!0&&xt.fog!==et||xt.numClippingPlanes!==void 0&&(xt.numClippingPlanes!==at.numPlanes||xt.numIntersection!==at.numIntersection)||xt.vertexAlphas!==Et||xt.vertexTangents!==wt||xt.morphTargets!==Mt||xt.morphNormals!==Jt||xt.morphColors!==ce||xt.toneMapping!==le||xt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,xt.__version=H.version);let gn=xt.currentProgram;Zt===!0&&(gn=Ns(H,U,N));let Os=!1,Qn=!1,ia=!1;const ve=gn.getUniforms(),Dn=xt.uniforms;if(yt.useProgram(gn.program)&&(Os=!0,Qn=!0,ia=!0),H.id!==P&&(P=H.id,Qn=!0),Os||S!==E){ve.setValue(L,"projectionMatrix",E.projectionMatrix),ve.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ve=ve.map.cameraPosition;Ve!==void 0&&Ve.setValue(L,ot.setFromMatrixPosition(E.matrixWorld)),re.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,Qn=!0,ia=!0)}if(N.isSkinnedMesh){ve.setOptional(L,N,"bindMatrix"),ve.setOptional(L,N,"bindMatrixInverse");const Ve=N.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ve.setValue(L,"boneTexture",Ve.boneTexture,Rt))}N.isBatchedMesh&&(ve.setOptional(L,N,"batchingTexture"),ve.setValue(L,"batchingTexture",N._matricesTexture,Rt),ve.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",N._colorsTexture,Rt));const sa=z.morphAttributes;if((sa.position!==void 0||sa.normal!==void 0||sa.color!==void 0)&&_t.update(N,z,gn),(Qn||xt.receiveShadow!==N.receiveShadow)&&(xt.receiveShadow=N.receiveShadow,ve.setValue(L,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Dn.envMap.value=gt,Dn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Dn.envMapIntensity.value=U.environmentIntensity),Qn&&(ve.setValue(L,"toneMappingExposure",x.toneMappingExposure),xt.needsLights&&wu(Dn,ia),et&&H.fog===!0&&j.refreshFogUniforms(Dn,et),j.refreshMaterialUniforms(Dn,H,X,B,m.state.transmissionRenderTarget[E.id]),Rr.upload(L,Xo(xt),Dn,Rt)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Rr.upload(L,Xo(xt),Dn,Rt),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(L,"center",N.center),ve.setValue(L,"modelViewMatrix",N.modelViewMatrix),ve.setValue(L,"normalMatrix",N.normalMatrix),ve.setValue(L,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ve=H.uniformsGroups;for(let ra=0,Tu=Ve.length;ra<Tu;ra++){const Yo=Ve[ra];Ht.update(Yo,gn),Ht.bind(Yo,gn)}}return gn}function wu(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Au(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,U,z){Ot.get(E.texture).__webglTexture=U,Ot.get(E.depthTexture).__webglTexture=z;const H=Ot.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=z===void 0,H.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=Ot.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){T=E,I=U,A=z;let H=!0,N=null,et=!1,ut=!1;if(E){const gt=Ot.get(E);gt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):gt.__webglFramebuffer===void 0?Rt.setupRenderTarget(E):gt.__hasExternalTextures&&Rt.rebindTextures(E,Ot.get(E.texture).__webglTexture,Ot.get(E.depthTexture).__webglTexture);const Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(ut=!0);const wt=Ot.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(wt[U])?N=wt[U][z]:N=wt[U],et=!0):E.samples>0&&Rt.useMultisampledRTT(E)===!1?N=Ot.get(E).__webglMultisampledFramebuffer:Array.isArray(wt)?N=wt[z]:N=wt,v.copy(E.viewport),R.copy(E.scissor),F=E.scissorTest}else v.copy(lt).multiplyScalar(X).floor(),R.copy(dt).multiplyScalar(X).floor(),F=Ft;if(yt.bindFramebuffer(L.FRAMEBUFFER,N)&&H&&yt.drawBuffers(E,N),yt.viewport(v),yt.scissor(R),yt.setScissorTest(F),et){const gt=Ot.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,z)}else if(ut){const gt=Ot.get(E.texture),Et=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,gt.__webglTexture,z||0,Et)}P=-1},this.readRenderTargetPixels=function(E,U,z,H,N,et,ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pt=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt){yt.bindFramebuffer(L.FRAMEBUFFER,pt);try{const gt=E.texture,Et=gt.format,wt=gt.type;if(!re.textureFormatReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&z>=0&&z<=E.height-N&&L.readPixels(U,z,H,N,ct.convert(Et),ct.convert(wt),et)}finally{const gt=T!==null?Ot.get(T).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,H,N,et,ut){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pt=Ot.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(pt=pt[ut]),pt){yt.bindFramebuffer(L.FRAMEBUFFER,pt);try{const gt=E.texture,Et=gt.format,wt=gt.type;if(!re.textureFormatReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-H&&z>=0&&z<=E.height-N){const Mt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.bufferData(L.PIXEL_PACK_BUFFER,et.byteLength,L.STREAM_READ),L.readPixels(U,z,H,N,ct.convert(Et),ct.convert(wt),0),L.flush();const Jt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await Nd(L,Jt,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Mt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,et)}finally{L.deleteBuffer(Mt),L.deleteSync(Jt)}return et}}finally{const gt=T!==null?Ot.get(T).__webglFramebuffer:null;yt.bindFramebuffer(L.FRAMEBUFFER,gt)}}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const H=Math.pow(2,-z),N=Math.floor(E.image.width*H),et=Math.floor(E.image.height*H),ut=U!==null?U.x:0,pt=U!==null?U.y:0;Rt.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ut,pt,N,et),yt.unbindTexture()},this.copyTextureToTexture=function(E,U,z=null,H=null,N=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let et,ut,pt,gt,Et,wt;z!==null?(et=z.max.x-z.min.x,ut=z.max.y-z.min.y,pt=z.min.x,gt=z.min.y):(et=E.image.width,ut=E.image.height,pt=0,gt=0),H!==null?(Et=H.x,wt=H.y):(Et=0,wt=0);const Mt=ct.convert(U.format),Jt=ct.convert(U.type);Rt.setTexture2D(U,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const ce=L.getParameter(L.UNPACK_ROW_LENGTH),le=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Fe=L.getParameter(L.UNPACK_SKIP_PIXELS),Kt=L.getParameter(L.UNPACK_SKIP_ROWS),xt=L.getParameter(L.UNPACK_SKIP_IMAGES),be=E.isCompressedTexture?E.mipmaps[N]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,be.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,be.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,pt),L.pixelStorei(L.UNPACK_SKIP_ROWS,gt),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Et,wt,et,ut,Mt,Jt,be.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Et,wt,be.width,be.height,Mt,be.data):L.texSubImage2D(L.TEXTURE_2D,N,Et,wt,Mt,Jt,be),L.pixelStorei(L.UNPACK_ROW_LENGTH,ce),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Fe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xt),N===0&&U.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,H=null,N=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,H=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0);let et,ut,pt,gt,Et,wt,Mt,Jt,ce;const le=E.isCompressedTexture?E.mipmaps[N]:E.image;z!==null?(et=z.max.x-z.min.x,ut=z.max.y-z.min.y,pt=z.max.z-z.min.z,gt=z.min.x,Et=z.min.y,wt=z.min.z):(et=le.width,ut=le.height,pt=le.depth,gt=0,Et=0,wt=0),H!==null?(Mt=H.x,Jt=H.y,ce=H.z):(Mt=0,Jt=0,ce=0);const Fe=ct.convert(U.format),Kt=ct.convert(U.type);let xt;if(U.isData3DTexture)Rt.setTexture3D(U,0),xt=L.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Rt.setTexture2DArray(U,0),xt=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const be=L.getParameter(L.UNPACK_ROW_LENGTH),Zt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),gn=L.getParameter(L.UNPACK_SKIP_PIXELS),Os=L.getParameter(L.UNPACK_SKIP_ROWS),Qn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,le.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,le.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Et),L.pixelStorei(L.UNPACK_SKIP_IMAGES,wt),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(xt,N,Mt,Jt,ce,et,ut,pt,Fe,Kt,le.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(xt,N,Mt,Jt,ce,et,ut,pt,Fe,le.data):L.texSubImage3D(xt,N,Mt,Jt,ce,et,ut,pt,Fe,Kt,le),L.pixelStorei(L.UNPACK_ROW_LENGTH,be),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Zt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,gn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Os),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Qn),N===0&&U.generateMipmaps&&L.generateMipmap(xt),yt.unbindTexture()},this.initRenderTarget=function(E){Ot.get(E).__webglFramebuffer===void 0&&Rt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Rt.setTextureCube(E,0):E.isData3DTexture?Rt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Rt.setTexture2DArray(E,0):Rt.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){I=0,A=0,T=null,yt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===To?"display-p3":"srgb",e.unpackColorSpace=$t.workingColorSpace===Gr?"display-p3":"srgb"}}class Po{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new Po(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lo{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new Lo(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Yh extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ye,this.environmentIntensity=1,this.environmentRotation=new Ye,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Do extends vi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fr=new D,Br=new D,pl=new he,fs=new Wr,rr=new Ds,za=new D,ml=new D;class Jh extends Se{constructor(t=new we,e=new Do){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Fr.fromBufferAttribute(e,i-1),Br.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Fr.distanceTo(Br);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(i),rr.radius+=r,t.ray.intersectsSphere(rr)===!1)return;pl.copy(i).invert(),fs.copy(t.ray).applyMatrix4(pl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=h.getX(_),y=h.getX(_+1),x=ar(this,t,fs,c,f,y);x&&e.push(x)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ar(this,t,fs,c,_,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=l){const f=ar(this,t,fs,c,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=ar(this,t,fs,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ar(s,t,e,n,i,r){const a=s.geometry.attributes.position;if(Fr.fromBufferAttribute(a,i),Br.fromBufferAttribute(a,r),e.distanceSqToSegment(Fr,Br,za,ml)>n)return;za.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(za);if(!(c<t.near||c>t.far))return{distance:c,point:ml.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}class Kh extends vi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const gl=new he,Mo=new Wr,or=new Ds,cr=new D;class W_ extends Se{constructor(t=new we,e=new Kh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(i),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;gl.copy(i).invert(),Mo.copy(t.ray).applyMatrix4(gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=u,_=p;g<_;g++){const m=l.getX(g);cr.fromBufferAttribute(d,m),_l(cr,m,c,i,t,e,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=u,_=p;g<_;g++)cr.fromBufferAttribute(d,g),_l(cr,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _l(s,t,e,n,i,r,a){const o=Mo.distanceSqToPoint(s);if(o<e){const c=new D;Mo.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class Io extends we{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new D,h=new It;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _i extends we{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(p,2));function y(){const w=new D,I=new D;let A=0;const T=(e-t)/n;for(let P=0;P<=r;P++){const S=[],v=P/r,R=v*(e-t)+t;for(let F=0;F<=i;F++){const O=F/i,W=O*c+o,V=Math.sin(W),B=Math.cos(W);I.x=R*V,I.y=-v*n+m,I.z=R*B,d.push(I.x,I.y,I.z),w.set(V,T,B).normalize(),u.push(w.x,w.y,w.z),p.push(O,1-v),S.push(g++)}_.push(S)}for(let P=0;P<i;P++)for(let S=0;S<r;S++){const v=_[S][P],R=_[S+1][P],F=_[S+1][P+1],O=_[S][P+1];h.push(v,R,O),h.push(R,F,O),A+=6}l.addGroup(f,A,0),f+=A}function x(w){const I=g,A=new It,T=new D;let P=0;const S=w===!0?t:e,v=w===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*v,0),u.push(0,v,0),p.push(.5,.5),g++;const R=g;for(let F=0;F<=i;F++){const W=F/i*c+o,V=Math.cos(W),B=Math.sin(W);T.x=S*B,T.y=m*v,T.z=S*V,d.push(T.x,T.y,T.z),u.push(0,v,0),A.x=V*.5+.5,A.y=B*.5*v+.5,p.push(A.x,A.y),g++}for(let F=0;F<i;F++){const O=I+F,W=R+F;w===!0?h.push(W,W+1,O):h.push(W+1,W,O),P+=3}l.addGroup(f,P,w===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ns extends _i{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ns(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Uo extends we{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new D,w=new D,I=new D;for(let A=0;A<e.length;A+=3)p(e[A+0],x),p(e[A+1],w),p(e[A+2],I),c(x,w,I,y)}function c(y,x,w,I){const A=I+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const S=y.clone().lerp(w,P/A),v=x.clone().lerp(w,P/A),R=A-P;for(let F=0;F<=R;F++)F===0&&P===A?T[P][F]=S:T[P][F]=S.clone().lerp(v,F/R)}for(let P=0;P<A;P++)for(let S=0;S<2*(A-P)-1;S++){const v=Math.floor(S/2);S%2===0?(u(T[P][v+1]),u(T[P+1][v]),u(T[P][v])):(u(T[P][v+1]),u(T[P+1][v+1]),u(T[P+1][v]))}}function l(y){const x=new D;for(let w=0;w<r.length;w+=3)x.x=r[w+0],x.y=r[w+1],x.z=r[w+2],x.normalize().multiplyScalar(y),r[w+0]=x.x,r[w+1]=x.y,r[w+2]=x.z}function h(){const y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const w=m(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;a.push(w,1-I)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const x=a[y+0],w=a[y+2],I=a[y+4],A=Math.max(x,w,I),T=Math.min(x,w,I);A>.9&&T<.1&&(x<.2&&(a[y+0]+=1),w<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,x){const w=y*3;x.x=t[w+0],x.y=t[w+1],x.z=t[w+2]}function g(){const y=new D,x=new D,w=new D,I=new D,A=new It,T=new It,P=new It;for(let S=0,v=0;S<r.length;S+=9,v+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),w.set(r[S+6],r[S+7],r[S+8]),A.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),P.set(a[v+4],a[v+5]),I.copy(y).add(x).add(w).divideScalar(3);const R=m(I);_(A,v+0,y,R),_(T,v+2,x,R),_(P,v+4,w,R)}}function _(y,x,w,I){I<0&&y.x===1&&(a[x]=y.x-1),w.x===0&&w.z===0&&(a[x]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.vertices,t.indices,t.radius,t.details)}}class qr extends Uo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qr(t.radius,t.detail)}}class Cn extends we{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new D,u=new D,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],x=f/n;let w=0;f===0&&a===0?w=.5/e:f===n&&c===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){const A=I/e;d.x=-t*Math.cos(i+A*r)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(i+A*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+w,1-x),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const x=h[f][y+1],w=h[f][y],I=h[f+1][y],A=h[f+1][y+1];(f!==0||a>0)&&p.push(x,w,A),(f!==n-1||c<Math.PI)&&p.push(w,I,A)}this.setIndex(p),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class os extends we{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;a.push(_,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ee extends vi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ye,this.combine=Ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class No extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ha=new he,xl=new D,vl=new D;class $h{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ro,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(xl),vl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vl),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ml=new he,ps=new D,Va=new D;class X_ extends $h{constructor(){super(new Ie(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),Va.copy(n.position),Va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Va),n.updateMatrixWorld(),i.makeTranslation(-ps.x,-ps.y,-ps.z),Ml.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml)}}class Ts extends No{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new X_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class q_ extends $h{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jh extends No{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new q_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zh extends No{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const yl=new he;class Qh{constructor(t,e,n=0,i=1/0){this.ray=new Wr(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new bo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yl),this}intersectObject(t,e=!0,n=[]){return yo(t,this,n,e),n.sort(Sl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)yo(t[i],this,n,e);return n.sort(Sl),n}}function Sl(s,t){return s.distance-t.distance}function yo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)yo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const ka=200,ms=.085,El=20,wl=10,Ga={laser:65535,chaingun:16746496,missile:16720452};function Al(s,t,e,n,i,r,a){const o=new ee({color:657930}),c=new At(new ye(i+.008,.022,.04),o);c.position.set(t,e,n),s.add(c);const l=new ee({color:r,emissive:new St(r),emissiveIntensity:.6}),h=new At(new ye(i,.016,.034),l),d=new Tn;return d.position.set(t-i/2,e,n),d.userData.role=a,s.add(d),h.position.x=i/2,d.add(h),{fillMat:l,setRatio(u){const p=Math.max(0,Math.min(1,u));h.scale.x=Math.max(p,1e-4),h.position.x=i/2*p}}}function Y_(){const s=new Tn,t=new ee({color:1710638,flatShading:!0}),e=new At(new ye(1.8,.22,.38),t);e.position.set(0,-.46,-.88),s.add(e);const n=new At(new ye(.22,.42,.42),t);n.position.set(-.92,-.46,-.84),s.add(n);const i=new At(new ye(.22,.42,.42),t);i.position.set(.92,-.46,-.84),s.add(i);const r=new At(new ye(1.8,.06,.06),t);r.position.set(0,.44,-.92),s.add(r);const a=Al(s,-.55,-.34,-.87,.35,56644,"healthPivot");function o(V){const B=Math.max(0,Math.min(1,V)),X=B>.5?new St(56644).lerp(new St(14535680),(1-B)*2):new St(14535680).lerp(new St(16720384),(.5-B)*2);a.fillMat.color.copy(X),a.fillMat.emissive.copy(X),a.setRatio(B)}const c=Al(s,0,-.34,-.87,.35,39423,"shieldPivot");function l(V){c.setRatio(V)}const h=new ee({color:16763904,emissive:new St(16763904),emissiveIntensity:.6}),d=new ee({color:1709312}),u=[],p=.025,g=.006,_=.33;for(let V=0;V<wl;V++){const B=new At(new ye(p,.018,.03),h);B.position.set(_+V*(p+g),-.34,-.87),s.add(B),u.push(B)}function m(V,B){const X=B>0?Math.round(V/B*wl):0;u.forEach((G,st)=>{G.material=st<X?h:d})}const f=["laser","chaingun","missile"],y={laser:new ee({color:13107}),chaingun:new ee({color:1705984}),missile:new ee({color:1703941})};for(let V=0;V<f.length;V++){const B=f[V],X=new At(new ye(.055,.032,.025),y[B]);X.position.set(-.92,-.3-V*.048,-.84),X.userData.weaponSlot=B,s.add(X)}function x(V){for(const B of f){const X=y[B];if(B===V)X.color.setHex(Ga[B]),X.emissive.setHex(Ga[B]),X.emissiveIntensity=1;else{const G=Ga[B];X.color.setHex(G).multiplyScalar(.08),X.emissive.setHex(0),X.emissiveIntensity=0}}}x("laser");const w=new D(.92,-.23,-.82),I=new ee({color:6656}),A=new At(new _i(ms+.01,ms+.01,.005,24),I);A.position.copy(w),s.add(A);const T=new ee({color:52258,emissive:new St(52258),emissiveIntensity:.4}),P=new At(new os(ms+.005,.004,8,32),T);P.rotation.x=Math.PI/2,P.position.set(w.x,w.y+.003,w.z),s.add(P);const S=new ee({color:65348,emissive:new St(65348),emissiveIntensity:.8}),v=new At(new Cn(.004,6,6),S);v.position.set(w.x,w.y+.006,w.z),s.add(v);const R=[];for(let V=0;V<El;V++){const B=new At(new Cn(.006,4,4),new ee({color:16720384,emissive:new St(16720384),emissiveIntensity:.8}));B.position.copy(w),B.visible=!1,B.userData.isBlip=!0,s.add(B),R.push(B)}function F(V,B,X){R.forEach(lt=>{lt.visible=!1});const G=B.clone().invert();let st=0;for(const lt of X){if(st>=El)break;const dt=lt.position.clone().sub(V);if(dt.length()>ka)continue;dt.applyQuaternion(G);const Ft=dt.x/ka*ms,Yt=dt.z/ka*ms,q=R[st++];q.position.set(w.x+Ft,w.y+.007,w.z+Yt),q.visible=!0;const Z=lt.type==="enemy"?16720384:8947712,ft=q.material;ft.color.setHex(Z),ft.emissive.setHex(Z)}}let O=0;function W(V){O=Math.max(0,V)}return Object.defineProperty(W,"current",{get:()=>O}),{group:s,setHealth:o,setShield:l,setAmmo:m,setActiveWeapon:x,setCredits:W,updateRadar:F}}function J_(s,t){function e(){s.requestPointerLock()}function n(i){document.pointerLockElement===s&&t(i.movementX,i.movementY)}return s.addEventListener("click",e),document.addEventListener("mousemove",n),()=>{s.removeEventListener("click",e),document.removeEventListener("mousemove",n)}}const K_=20,$_=30,j_=2.5,Tl=1.8;function Z_(s,t,e){s.multiplyScalar(Math.max(0,1-t*e))}function Q_(s,t,e,n,i,r){if(t.lengthSq()===0)return;const a=t.clone().normalize().multiplyScalar(n*r).applyQuaternion(e);s.add(a);const o=s.length();o>i&&s.multiplyScalar(i/o)}class t0{constructor(){mt(this,"velocity",new D);mt(this,"thrustBonus",0);mt(this,"speedBonus",0);mt(this,"keys",{});mt(this,"_onKeyDown");mt(this,"_onKeyUp");this._onKeyDown=t=>{this.keys[t.key.toLowerCase()]=!0},this._onKeyUp=t=>{this.keys[t.key.toLowerCase()]=!1}}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}setKey(t,e){this.keys[t]=e}reset(){this.velocity.set(0,0,0)}update(t,e,n){const i=Math.min(t,.1);this.keys.q&&(e.z+=Tl*i),this.keys.e&&(e.z-=Tl*i);const r=new D((this.keys.d?1:0)-(this.keys.a?1:0),0,(this.keys.s?1:0)-(this.keys.w?1:0)),a=new xi().setFromEuler(e);Q_(this.velocity,r,a,K_+this.thrustBonus,$_+this.speedBonus,i),Z_(this.velocity,j_,i),n.addScaledVector(this.velocity,i)}}const bl=1.5,Rl=25;function e0(s){return Math.max(Rl,Math.round(s)*Rl)}function tu(s,t){s.userData.size=t,s.userData.health=e0(t)}function n0(s,t,e){const n=new qr(s,0),i=new ee({color:8947840,flatShading:!0}),r=new At(n,i);return r.position.copy(t),r.rotation.set(e()*Math.PI*2,e()*Math.PI*2,e()*Math.PI*2),tu(r,s),r}function i0(s,t,e,n=Math.random){const i=e*.45,r=2+Math.floor(n()*2),a=[],o=e;for(let c=0;c<r;c++){const l=new D((n()*2-1)*o,(n()*2-1)*o,(n()*2-1)*o),h=n0(i,t.clone().add(l),n);s.add(h),a.push(h)}return a}function s0(s,t){s.remove(t),t.geometry.dispose(),Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose()}function So(s,t,e,n=Math.random){s0(s,t);const i=e.filter(a=>a!==t),r=t.userData.size??bl+1;if(r>bl){const a=i0(s,t.position,r,n);i.push(...a)}return i}const gs=500,Oo=15,r0=25,Cl=3,Pl=5,a0=1,o0=3;function c0(s){let t=s>>>0;return()=>{t+=1831565813;let e=Math.imul(t^t>>>15,1|t);return e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296}}function Yr(s,t=Oo){for(let e=0;e<1e3;e++){const n=(s()*2-1)*gs,i=(s()*2-1)*gs,r=(s()*2-1)*gs,a=n*n+i*i+r*r,o=t*t,c=gs*gs;if(a>=o&&a<=c)return new D(n,i,r)}return new D(t*2,0,0)}function l0(s=Math.random){const t=new ee({color:8947840,flatShading:!0}),e=[];for(let n=0;n<r0;n++){const i=1+s()*4,r=new qr(i,0),a=new At(r,t);a.position.copy(Yr(s)),a.rotation.set(s()*Math.PI*2,s()*Math.PI*2,s()*Math.PI*2),tu(a,i),e.push(a)}return e}function h0(s=Math.random){const t=new Tn,e=new ee({color:0,flatShading:!0}),n=new Cn(8,16,16);t.add(new At(n,e));const i=new ee({color:16737792,emissive:new St(16724736),emissiveIntensity:.8,flatShading:!0}),r=new os(14,2,8,32),a=new At(r,i);return a.rotation.x=Math.PI/2,t.add(a),t.position.copy(Yr(s,Oo+30)),t}function u0(s=Math.random){const t=Math.min(Pl,Cl+Math.floor(s()*(Pl-Cl+1))),e=new ee({color:13378048,flatShading:!0}),n=[];for(let i=0;i<t;i++){const r=new ns(1.5,4,4),a=new At(r,e);a.position.copy(Yr(s)),a.rotation.set(s()*Math.PI*2,s()*Math.PI*2,0),n.push(a)}return n}const Ll=[3364300,3385941,13399859,10040217,3390412];function d0(s=Math.random){const t=a0+Math.floor(s()*o0),e=[];for(let n=0;n<t;n++){const i=Ll[Math.floor(s()*Ll.length)],r=20+Math.floor(s()*20),a=new Cn(r,8,8),o=new ee({color:i,flatShading:!0}),c=new At(a,o);c.position.copy(Yr(s,Oo+r)),e.push(c)}return e}function Fo(s,t=Math.floor(Math.random()*4294967295)){const e=c0(t),n=l0(e),i=h0(e),r=u0(e),a=d0(e);return n.forEach(o=>s.add(o)),s.add(i),r.forEach(o=>s.add(o)),a.forEach(o=>s.add(o)),{asteroids:n,blackHole:i,enemies:r,planets:a}}const f0=25,Dl=500,p0=5;class m0{constructor(t,e){mt(this,"_ammo");mt(this,"maxAmmo");mt(this,"raycaster",new Qh);mt(this,"scene");mt(this,"activeBeam",null);mt(this,"beamFramesLeft",0);this.scene=t,this._ammo=e,this.maxAmmo=e,this.raycaster.far=Dl}get ammo(){return this._ammo}fire(t,e,n){if(this._ammo<=0)return{fired:!1,hit:!1,hitObject:null,ammoRemaining:0};this._ammo--;const i=new D(0,0,-1).applyQuaternion(e);this.raycaster.set(t,i);const r=this.raycaster.intersectObjects(n);let a=!1,o=null,c;r.length>0?(a=!0,o=r[0].object,c=r[0].point.clone(),o.userData.health===void 0&&(o.userData.health=100),o.userData.health-=f0):c=t.clone().addScaledVector(i,Dl);const l=t.clone().addScaledVector(i,1.5);return this.spawnBeam(l,c),{fired:!0,hit:a,hitObject:o,ammoRemaining:this._ammo}}update(){this.beamFramesLeft>0&&(this.beamFramesLeft--,this.beamFramesLeft===0&&this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null))}addAmmo(t){this._ammo=Math.min(this._ammo+Math.max(0,t),this.maxAmmo)}reset(t){this._ammo=Math.min(Math.max(0,t),this.maxAmmo),this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null),this.beamFramesLeft=0}spawnBeam(t,e){this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null);const n=new we().setFromPoints([t,e]),i=new Do({color:65535});this.activeBeam=new Jh(n,i),this.scene.add(this.activeBeam),this.beamFramesLeft=p0}}const g0=8,Il=500,_0=12,x0=2;class v0{constructor(t,e){mt(this,"_ammo");mt(this,"maxAmmo");mt(this,"fireInterval");mt(this,"accumulator");mt(this,"raycaster",new Qh);mt(this,"scene");mt(this,"activeBeam",null);mt(this,"beamFramesLeft",0);this.scene=t,this._ammo=e,this.maxAmmo=e,this.fireInterval=1/_0,this.accumulator=this.fireInterval,this.raycaster.far=Il}get ammo(){return this._ammo}fire(t,e,n){if(this._ammo<=0)return{fired:!1,hit:!1,hitObject:null,ammoRemaining:0};this._ammo--;const i=new D(0,0,-1).applyQuaternion(e);this.raycaster.set(t,i);const r=this.raycaster.intersectObjects(n);let a=!1,o=null,c;r.length>0?(a=!0,o=r[0].object,c=r[0].point.clone(),o.userData.health===void 0&&(o.userData.health=100),o.userData.health-=g0):c=t.clone().addScaledVector(i,Il);const l=t.clone().addScaledVector(i,1.5);return this.spawnBeam(l,c),{fired:!0,hit:a,hitObject:o,ammoRemaining:this._ammo}}update(t,e,n,i,r){if(this.beamFramesLeft>0&&(this.beamFramesLeft--,this.beamFramesLeft===0&&this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null)),!e)return this.accumulator=this.fireInterval,[];this.accumulator+=t;const a=[];for(;this.accumulator>=this.fireInterval;){if(this.accumulator-=this.fireInterval,this._ammo<=0){this.accumulator=0;break}a.push(this.fire(n,i,r))}return a}addAmmo(t){this._ammo=Math.min(this._ammo+Math.max(0,t),this.maxAmmo)}reset(t){this._ammo=Math.min(Math.max(0,t),this.maxAmmo),this.accumulator=this.fireInterval,this.beamFramesLeft=0,this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null)}spawnBeam(t,e){this.activeBeam&&(this.scene.remove(this.activeBeam),this.activeBeam.material.dispose(),this.activeBeam.geometry.dispose(),this.activeBeam=null);const n=new we().setFromPoints([t,e]),i=new Do({color:16746496});this.activeBeam=new Jh(n,i),this.scene.add(this.activeBeam),this.beamFramesLeft=x0}}function M0(s,t,e,n,i,r,a,o){const c=s-i,l=t-r,h=e-a,d=c*c+l*l+h*h,u=n+o;return d<=u*u}const y0=100,S0=30,E0=600,w0=1,eu=8;class A0{constructor(t,e){mt(this,"_ammo");mt(this,"maxAmmo");mt(this,"scene");mt(this,"missiles",[]);this.scene=t,this._ammo=e,this.maxAmmo=e}get ammo(){return this._ammo}get missileCount(){return this.missiles.length}fire(t,e){if(this._ammo<=0)return{fired:!1,ammoRemaining:0};this._ammo--;const n=new D(0,0,-1).applyQuaternion(e),i=t.clone().addScaledVector(n,2),r=new ns(.15,.8,6),a=new ee({color:16737792,emissive:new St(16724736),emissiveIntensity:.5}),o=new At(r,a);return o.position.copy(i),o.quaternion.setFromUnitVectors(new D(0,1,0),n),this.scene.add(o),this.missiles.push({mesh:o,direction:n.clone(),distanceTraveled:0}),{fired:!0,ammoRemaining:this._ammo}}update(t,e){var r;const n=[],i=[];for(let a=0;a<this.missiles.length;a++){const o=this.missiles[a],c=S0*t;if(o.mesh.position.addScaledVector(o.direction,c),o.distanceTraveled+=c,o.distanceTraveled>=E0){i.push(a);continue}let l=!1;for(const h of e){h.geometry.boundingSphere||h.geometry.computeBoundingSphere();const d=(((r=h.geometry.boundingSphere)==null?void 0:r.radius)??5)*h.scale.x,u=o.mesh.position,p=h.position;if(M0(u.x,u.y,u.z,w0,p.x,p.y,p.z,d)){h.userData.health===void 0&&(h.userData.health=100),h.userData.health-=y0,n.push({hitObject:h}),l=!0;break}}l&&i.push(a)}for(let a=i.length-1;a>=0;a--){const o=i[a],c=this.missiles[o];this.scene.remove(c.mesh),c.mesh.geometry.dispose(),c.mesh.material.dispose(),this.missiles.splice(o,1)}return n}addAmmo(t){this._ammo=Math.min(this._ammo+Math.max(0,t),this.maxAmmo)}reset(t){this._ammo=Math.min(Math.max(0,t),this.maxAmmo);for(const e of this.missiles)this.scene.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose();this.missiles.length=0}}class T0{constructor(t,e){mt(this,"health");mt(this,"shield");mt(this,"maxHealth");mt(this,"maxShield");mt(this,"thrustBonus");mt(this,"speedBonus");mt(this,"unlockedWeapons");this.maxHealth=t,this.maxShield=e,this.health=t,this.shield=e,this.thrustBonus=0,this.speedBonus=0,this.unlockedWeapons=new Set}applyDamage(t){const e=Math.max(0,t),n=Math.min(this.shield,e),i=e-n;this.shield-=n;const r=Math.min(this.health,i);return this.health-=r,{shieldDamage:n,hullDamage:r,isDead:this.health<=0}}reset(){this.health=this.maxHealth,this.shield=this.maxShield}get isAlive(){return this.health>0}upgradeMaxHealth(t){const e=Math.max(0,t);this.maxHealth+=e,this.health=Math.min(this.health+e,this.maxHealth)}upgradeMaxShield(t){const e=Math.max(0,t);this.maxShield+=e,this.shield=Math.min(this.shield+e,this.maxShield)}upgradeEngine(t,e){this.thrustBonus+=Math.max(0,t),this.speedBonus+=Math.max(0,e)}unlockWeapon(t){this.unlockedWeapons.add(t)}}class Ul{constructor(t,e,n,i,r){this.sender=t,this.receiver=e,this.message=n,this.delay=i,this.data=r}toJSON(){return{type:this.constructor.name,sender:this.sender.uuid,receiver:this.receiver.uuid,message:this.message,delay:this.delay,data:this.data}}fromJSON(t){return this.sender=t.sender,this.receiver=t.receiver,this.message=t.message,this.delay=t.delay,this.data=t.data,this}resolveReferences(t){return this.sender=t.get(this.sender),this.receiver=t.get(this.receiver),this}}class nn{static setLevel(t){lr=t}static log(...t){lr<=nn.LEVEL.LOG&&console.log(...t)}static warn(...t){lr<=nn.LEVEL.WARN&&console.warn(...t)}static error(...t){lr<=nn.LEVEL.ERROR&&console.error(...t)}}nn.LEVEL=Object.freeze({LOG:0,WARN:1,ERROR:2,SILENT:3});let lr=nn.LEVEL.WARN;class b0{constructor(){this.delayedTelegrams=new Array}deliver(t){const e=t.receiver;return e.handleMessage(t)===!1&&nn.warn("YUKA.MessageDispatcher: Message not handled by receiver: %o",e),this}dispatch(t,e,n,i,r){const a=new Ul(t,e,n,i,r);return i<=0?this.deliver(a):this.delayedTelegrams.push(a),this}dispatchDelayedMessages(t){let e=this.delayedTelegrams.length;for(;e--;){const n=this.delayedTelegrams[e];n.delay-=t,n.delay<=0&&(this.deliver(n),this.delayedTelegrams.pop())}return this}clear(){return this.delayedTelegrams.length=0,this}toJSON(){const t={type:this.constructor.name,delayedTelegrams:new Array};for(let e=0,n=this.delayedTelegrams.length;e<n;e++){const i=this.delayedTelegrams[e];t.delayedTelegrams.push(i.toJSON())}return t}fromJSON(t){this.clear();const e=t.delayedTelegrams;for(let n=0,i=e.length;n<i;n++){const r=e[n],a=new Ul().fromJSON(r);this.delayedTelegrams.push(a)}return this}resolveReferences(t){const e=this.delayedTelegrams;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}const Ee=new Array;for(let s=0;s<256;s++)Ee[s]=(s<16?"0":"")+s.toString(16);class bs{static area(t,e,n){return(n.x-t.x)*(e.z-t.z)-(e.x-t.x)*(n.z-t.z)}static argmax(t){const e=Math.max(...t),n=[];for(let i=0,r=t.length;i<r;i++)t[i]===e&&n.push(i);return n}static choice(t,e=null){const n=Math.random();if(e===null)return t[Math.floor(Math.random()*t.length)];{let i=0;const r=t.map((a,o)=>(i+=e[o],i)).findIndex(a=>a>=n);return t[r]}}static clamp(t,e,n){return Math.max(e,Math.min(n,t))}static generateUUID(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[t&255]+Ee[t>>8&255]+Ee[t>>16&255]+Ee[t>>24&255]+"-"+Ee[e&255]+Ee[e>>8&255]+"-"+Ee[e>>16&15|64]+Ee[e>>24&255]+"-"+Ee[n&63|128]+Ee[n>>8&255]+"-"+Ee[n>>16&255]+Ee[n>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toUpperCase()}static randFloat(t,e){return t+Math.random()*(e-t)}static randInt(t,e){return t+Math.floor(Math.random()*(e-t+1))}}class Q{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}clone(){return new this.constructor().copy(this)}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.x/=t,this.y/=t,this.z/=t,this}divideVectors(t,e){return this.x=t.x/e.x,this.y=t.y/e.y,this.z=t.z/e.z,this}reflect(t){return this.sub(R0.copy(t).multiplyScalar(2*this.dot(t)))}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}cross(t){const e=this.x,n=this.y,i=this.z;return this.x=n*t.z-i*t.y,this.y=i*t.x-e*t.z,this.z=e*t.y-n*t.x,this}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}angleTo(t){const e=Math.sqrt(this.squaredLength()*t.squaredLength());if(e===0)return 0;const n=this.dot(t)/e;return Math.acos(bs.clamp(n,-1,1))}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}distanceTo(t){return Math.sqrt(this.squaredDistanceTo(t))}squaredDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return Math.abs(e)+Math.abs(n)+Math.abs(i)}normalize(){return this.divideScalar(this.length()||1)}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyRotation(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=c*e+a*i-o*n,h=c*n+o*e-r*i,d=c*i+r*n-a*e,u=-r*e-a*n-o*i;return this.x=l*c+u*-r+h*-o-d*-a,this.y=h*c+u*-a+d*-r-l*-o,this.z=d*c+u*-o+l*-a-h*-r,this}extractPositionFromMatrix(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}fromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}fromMatrix4Column(t,e){return this.fromArray(t.elements,e*4)}fromSpherical(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}}const R0=new Q,Nl=new Q(0,1,0),Ol=new Q,_s=new Q,Fl=new Q,Bl=new Q,Wa=[2,2,1],Xa=[1,0,0];class Bo{constructor(){this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[3]=e,h[6]=n,h[1]=i,h[4]=r,h[7]=a,h[2]=o,h[5]=c,h[8]=l,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],x=i[4],w=i[7],I=i[2],A=i[5],T=i[8];return r[0]=a*_+o*y+c*I,r[3]=a*m+o*x+c*A,r[6]=a*f+o*w+c*T,r[1]=l*_+h*y+d*I,r[4]=l*m+h*x+d*A,r[7]=l*f+h*w+d*T,r[2]=u*_+p*y+g*I,r[5]=u*m+p*x+g*A,r[8]=u*f+p*w+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}extractBasis(t,e,n){return t.fromMatrix3Column(this,0),e.fromMatrix3Column(this,1),n.fromMatrix3Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,t.y,e.y,n.y,t.z,e.z,n.z),this}lookAt(t,e,n){return Ol.crossVectors(n,t).normalize(),_s.crossVectors(Nl,e).normalize(),_s.squaredLength()===0&&(Bl.copy(e).addScalar(Number.EPSILON),_s.crossVectors(Nl,Bl).normalize()),Fl.crossVectors(e,_s).normalize(),Fi.makeBasis(_s,Fl,e),hr.makeBasis(Ol,n,t),this.multiplyMatrices(Fi,hr.transpose()),this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getElementIndex(t,e){return t*3+e}frobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<9;n++)e+=t[n]*t[n];return Math.sqrt(e)}offDiagonalFrobeniusNorm(){const t=this.elements;let e=0;for(let n=0;n<3;n++){const i=t[this.getElementIndex(Wa[n],Xa[n])];e+=2*i*i}return Math.sqrt(e)}eigenDecomposition(t){let e=0,n=0;const i=10;t.unitary.identity(),t.diagonal.copy(this);const r=t.unitary,a=t.diagonal,o=Number.EPSILON*a.frobeniusNorm();for(;n<i&&a.offDiagonalFrobeniusNorm()>o;)a.shurDecomposition(Fi),hr.copy(Fi).transpose(),a.multiply(Fi),a.premultiply(hr),r.multiply(Fi),++e>2&&(n++,e=0);return t}shurDecomposition(t){let e=0,n=1;const i=this.elements;for(let l=0;l<3;l++){const h=Math.abs(i[this.getElementIndex(Wa[l],Xa[l])]);h>e&&(e=h,n=l)}let r=1,a=0;const o=Xa[n],c=Wa[n];if(Math.abs(i[this.getElementIndex(c,o)])>Number.EPSILON){const l=i[this.getElementIndex(c,c)],h=i[this.getElementIndex(o,o)],d=i[this.getElementIndex(c,o)],u=(l-h)/2/d;let p;u<0?p=-1/(-u+Math.sqrt(1+u*u)):p=1/(u+Math.sqrt(1+u*u)),r=1/Math.sqrt(1+p*p),a=p*r}return t.identity(),t.elements[this.getElementIndex(o,o)]=r,t.elements[this.getElementIndex(c,c)]=r,t.elements[this.getElementIndex(c,o)]=a,t.elements[this.getElementIndex(o,c)]=-a,t}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=t.w,o=n+n,c=i+i,l=r+r,h=n*o,d=n*c,u=n*l,p=i*c,g=i*l,_=r*l,m=a*o,f=a*c,y=a*l;return e[0]=1-(p+_),e[3]=d-y,e[6]=u+f,e[1]=d+y,e[4]=1-(h+_),e[7]=g-m,e[2]=u-f,e[5]=g+m,e[8]=1-(h+p),this}fromMatrix4(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[4],e[4]=n[5],e[5]=n[6],e[6]=n[8],e[7]=n[9],e[8]=n[10],this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<9;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}}const Fi=new Bo,hr=new Bo,ur=new Bo,qa=new Q;class zr{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}clone(){return new this.constructor().copy(this)}inverse(){return this.conjugate().normalize()}conjugate(){return this.x*=-1,this.y*=-1,this.z*=-1,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}length(){return Math.sqrt(this.squaredLength())}squaredLength(){return this.dot(this)}normalize(){let t=this.length();return t===0?(this.x=0,this.y=0,this.z=0,this.w=1):(t=1/t,this.x=this.x*t,this.y=this.y*t,this.z=this.z*t,this.w=this.w*t),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t.x,i=t.y,r=t.z,a=t.w,o=e.x,c=e.y,l=e.z,h=e.w;return this.x=n*h+a*o+i*l-r*c,this.y=i*h+a*c+r*o-n*l,this.z=r*h+a*l+n*c-i*o,this.w=a*h-n*o-i*c-r*l,this}angleTo(t){return 2*Math.acos(Math.abs(bs.clamp(this.dot(t),-1,1)))}rotateTo(t,e,n=1e-4){const i=this.angleTo(t);if(i<n)return!0;const r=Math.min(1,e/i);return this.slerp(t,r),!1}lookAt(t,e,n){ur.lookAt(t,e,n),this.fromMatrix3(ur)}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this.x,i=this.y,r=this.z,a=this.w;let o=a*t.w+n*t.x+i*t.y+r*t.z;if(o<0?(this.w=-t.w,this.x=-t.x,this.y=-t.y,this.z=-t.z,o=-o):this.copy(t),o>=1)return this.w=a,this.x=n,this.y=i,this.z=r,this;const c=Math.sqrt(1-o*o);if(Math.abs(c)<.001)return this.w=.5*(a+this.w),this.x=.5*(n+this.x),this.y=.5*(i+this.y),this.z=.5*(r+this.z),this;const l=Math.atan2(c,o),h=Math.sin((1-e)*l)/c,d=Math.sin(e*l)/c;return this.w=a*h+this.w*d,this.x=n*h+this.x*d,this.y=i*h+this.y*d,this.z=r*h+this.z*d,this}extractRotationFromMatrix(t){const e=ur.elements,n=t.elements,i=1/qa.fromMatrix4Column(t,0).length(),r=1/qa.fromMatrix4Column(t,1).length(),a=1/qa.fromMatrix4Column(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=n[4]*r,e[4]=n[5]*r,e[5]=n[6]*r,e[6]=n[8]*a,e[7]=n[9]*a,e[8]=n[10]*a,this.fromMatrix3(ur),this}fromEuler(t,e,n){const i=Math.cos(e/2),r=Math.cos(t/2),a=Math.cos(n/2),o=Math.sin(e/2),c=Math.sin(t/2),l=Math.sin(n/2);return this.w=i*r*a+o*c*l,this.x=i*c*a+o*r*l,this.y=o*r*a-i*c*l,this.z=i*r*l-o*c*a,this}toEuler(t){const e=-2*(this.y*this.z-this.x*this.w);return Math.abs(e)>.9999?(t.x=Math.PI*.5*e,t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=0):(t.x=Math.asin(e),t.y=Math.atan2(this.x*this.z+this.w*this.y,.5-this.x*this.x-this.y*this.y),t.z=Math.atan2(this.x*this.y+this.w*this.z,.5-this.x*this.x-this.z*this.z)),t}fromMatrix3(t){const e=t.elements,n=e[0],i=e[3],r=e[6],a=e[1],o=e[4],c=e[7],l=e[2],h=e[5],d=e[8],u=n+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this.w=.25/p,this.x=(h-c)*p,this.y=(r-l)*p,this.z=(a-i)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this.w=(h-c)/p,this.x=.25*p,this.y=(i+a)/p,this.z=(r+l)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this.w=(r-l)/p,this.x=(i+a)/p,this.y=.25*p,this.z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this.w=(a-i)/p,this.x=(r+l)/p,this.y=(c+h)/p,this.z=.25*p}return this}fromArray(t,e=0){return this.x=t[e+0],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t,e=0){return t[e+0]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}}class Rs{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,o,c,l,h,d,u,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}clone(){return new this.constructor().copy(this)}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],x=n[7],w=n[11],I=n[15],A=i[0],T=i[4],P=i[8],S=i[12],v=i[1],R=i[5],F=i[9],O=i[13],W=i[2],V=i[6],B=i[10],X=i[14],G=i[3],st=i[7],lt=i[11],dt=i[15];return r[0]=a*A+o*v+c*W+l*G,r[4]=a*T+o*R+c*V+l*st,r[8]=a*P+o*F+c*B+l*lt,r[12]=a*S+o*O+c*X+l*dt,r[1]=h*A+d*v+u*W+p*G,r[5]=h*T+d*R+u*V+p*st,r[9]=h*P+d*F+u*B+p*lt,r[13]=h*S+d*O+u*X+p*dt,r[2]=g*A+_*v+m*W+f*G,r[6]=g*T+_*R+m*V+f*st,r[10]=g*P+_*F+m*B+f*lt,r[14]=g*S+_*O+m*X+f*dt,r[3]=y*A+x*v+w*W+I*G,r[7]=y*T+x*R+w*V+I*st,r[11]=y*P+x*F+w*B+I*lt,r[15]=y*S+x*O+w*X+I*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}extractBasis(t,e,n){return t.fromMatrix4Column(this,0),e.fromMatrix4Column(this,1),n.fromMatrix4Column(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}compose(t,e,n){return this.fromQuaternion(e),this.scale(n),this.setPosition(t),this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}setPosition(t){const e=this.elements;return e[12]=t.x,e[13]=t.y,e[14]=t.z,this}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}getInverse(t){const e=this.elements,n=t.elements,i=e[0],r=e[1],a=e[2],o=e[3],c=e[4],l=e[5],h=e[6],d=e[7],u=e[8],p=e[9],g=e[10],_=e[11],m=e[12],f=e[13],y=e[14],x=e[15],w=p*y*d-f*g*d+f*h*_-l*y*_-p*h*x+l*g*x,I=m*g*d-u*y*d-m*h*_+c*y*_+u*h*x-c*g*x,A=u*f*d-m*p*d+m*l*_-c*f*_-u*l*x+c*p*x,T=m*p*h-u*f*h-m*l*g+c*f*g+u*l*y-c*p*y,P=i*w+r*I+a*A+o*T;if(P===0)return t.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/P;return n[0]=w*S,n[1]=(f*g*o-p*y*o-f*a*_+r*y*_+p*a*x-r*g*x)*S,n[2]=(l*y*o-f*h*o+f*a*d-r*y*d-l*a*x+r*h*x)*S,n[3]=(p*h*o-l*g*o-p*a*d+r*g*d+l*a*_-r*h*_)*S,n[4]=I*S,n[5]=(u*y*o-m*g*o+m*a*_-i*y*_-u*a*x+i*g*x)*S,n[6]=(m*h*o-c*y*o-m*a*d+i*y*d+c*a*x-i*h*x)*S,n[7]=(c*g*o-u*h*o+u*a*d-i*g*d-c*a*_+i*h*_)*S,n[8]=A*S,n[9]=(m*p*o-u*f*o-m*r*_+i*f*_+u*r*x-i*p*x)*S,n[10]=(c*f*o-m*l*o+m*r*d-i*f*d-c*r*x+i*l*x)*S,n[11]=(u*l*o-c*p*o-u*r*d+i*p*d+c*r*_-i*l*_)*S,n[12]=T*S,n[13]=(u*f*a-m*p*a+m*r*g-i*f*g-u*r*y+i*p*y)*S,n[14]=(m*l*a-c*f*a-m*r*h+i*f*h+c*r*y-i*l*y)*S,n[15]=(c*p*a-u*l*a+u*r*h-i*p*h-c*r*g+i*l*g)*S,t}getMaxScale(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}fromQuaternion(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=t.w,o=n+n,c=i+i,l=r+r,h=n*o,d=n*c,u=n*l,p=i*c,g=i*l,_=r*l,m=a*o,f=a*c,y=a*l;return e[0]=1-(p+_),e[4]=d-y,e[8]=u+f,e[1]=d+y,e[5]=1-(h+_),e[9]=g-m,e[2]=u-f,e[6]=g+m,e[10]=1-(h+p),e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromMatrix3(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=0,e[4]=n[3],e[5]=n[4],e[6]=n[5],e[7]=0,e[8]=n[6],e[9]=n[7],e[10]=n[8],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}fromArray(t,e=0){const n=this.elements;for(let i=0;i<16;i++)n[i]=t[i+e];return this}toArray(t,e=0){const n=this.elements;return t[e+0]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}}const dr=new zr,zn=new Q,fr=new Q,Bi=new zr;class zo{constructor(){this.name="",this.active=!0,this.children=new Array,this.parent=null,this.neighbors=new Array,this.neighborhoodRadius=1,this.updateNeighborhood=!1,this.position=new Q,this.rotation=new zr,this.scale=new Q(1,1,1),this.forward=new Q(0,0,1),this.up=new Q(0,1,0),this.boundingRadius=0,this.maxTurnRate=Math.PI,this.canActivateTrigger=!0,this.manager=null,this._localMatrix=new Rs,this._worldMatrix=new Rs,this._cache={position:new Q,rotation:new zr,scale:new Q(1,1,1)},this._renderComponent=null,this._renderComponentCallback=null,this._started=!1,this._uuid=null,this._worldMatrixDirty=!1}get worldMatrix(){return this._updateWorldMatrix(),this._worldMatrix}get uuid(){return this._uuid===null&&(this._uuid=bs.generateUUID()),this._uuid}start(){return this}update(){return this}add(t){return t.parent!==null&&t.parent.remove(t),this.children.push(t),t.parent=this,this}remove(t){const e=this.children.indexOf(t);return this.children.splice(e,1),t.parent=null,this}getDirection(t){return t.copy(this.forward).applyRotation(this.rotation).normalize()}lookAt(t){const e=this.parent;return e!==null?(this.getWorldPosition(fr),zn.subVectors(t,fr).normalize(),this.rotation.lookAt(this.forward,zn,this.up),Bi.extractRotationFromMatrix(e.worldMatrix).inverse(),this.rotation.premultiply(Bi)):(zn.subVectors(t,this.position).normalize(),this.rotation.lookAt(this.forward,zn,this.up)),this}rotateTo(t,e,n=1e-4){const i=this.parent;return i!==null?(this.getWorldPosition(fr),zn.subVectors(t,fr).normalize(),dr.lookAt(this.forward,zn,this.up),Bi.extractRotationFromMatrix(i.worldMatrix).inverse(),dr.premultiply(Bi)):(zn.subVectors(t,this.position).normalize(),dr.lookAt(this.forward,zn,this.up)),this.rotation.rotateTo(dr,this.maxTurnRate*e,n)}getWorldDirection(t){return Bi.extractRotationFromMatrix(this.worldMatrix),t.copy(this.forward).applyRotation(Bi).normalize()}getWorldPosition(t){return t.extractPositionFromMatrix(this.worldMatrix)}setRenderComponent(t,e){return this._renderComponent=t,this._renderComponentCallback=e,this}handleMessage(){return!1}lineOfSightTest(){return null}sendMessage(t,e,n=0,i=null){return this.manager!==null?this.manager.sendMessage(this,t,e,n,i):nn.error("YUKA.GameEntity: The game entity must be added to a manager in order to send a message."),this}toJSON(){return{type:this.constructor.name,uuid:this.uuid,name:this.name,active:this.active,children:zl(this.children),parent:this.parent!==null?this.parent.uuid:null,neighbors:zl(this.neighbors),neighborhoodRadius:this.neighborhoodRadius,updateNeighborhood:this.updateNeighborhood,position:this.position.toArray(new Array),rotation:this.rotation.toArray(new Array),scale:this.scale.toArray(new Array),forward:this.forward.toArray(new Array),up:this.up.toArray(new Array),boundingRadius:this.boundingRadius,maxTurnRate:this.maxTurnRate,canActivateTrigger:this.canActivateTrigger,worldMatrix:this.worldMatrix.toArray(new Array),_localMatrix:this._localMatrix.toArray(new Array),_cache:{position:this._cache.position.toArray(new Array),rotation:this._cache.rotation.toArray(new Array),scale:this._cache.scale.toArray(new Array)},_started:this._started}}fromJSON(t){return this.name=t.name,this.active=t.active,this.neighborhoodRadius=t.neighborhoodRadius,this.updateNeighborhood=t.updateNeighborhood,this.position.fromArray(t.position),this.rotation.fromArray(t.rotation),this.scale.fromArray(t.scale),this.forward.fromArray(t.forward),this.up.fromArray(t.up),this.boundingRadius=t.boundingRadius,this.maxTurnRate=t.maxTurnRate,this.canActivateTrigger=t.canActivateTrigger,this.children=t.children.slice(),this.neighbors=t.neighbors.slice(),this.parent=t.parent,this._localMatrix.fromArray(t._localMatrix),this._worldMatrix.fromArray(t.worldMatrix),this._cache.position.fromArray(t._cache.position),this._cache.rotation.fromArray(t._cache.rotation),this._cache.scale.fromArray(t._cache.scale),this._started=t._started,this._uuid=t.uuid,this}resolveReferences(t){const e=this.neighbors;for(let i=0,r=e.length;i<r;i++)e[i]=t.get(e[i]);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i]=t.get(n[i]);return this.parent=t.get(this.parent)||null,this}_updateMatrix(){const t=this._cache;t.position.equals(this.position)&&t.rotation.equals(this.rotation)&&t.scale.equals(this.scale)||(this._localMatrix.compose(this.position,this.rotation,this.scale),t.position.copy(this.position),t.rotation.copy(this.rotation),t.scale.copy(this.scale),this._worldMatrixDirty=!0)}_updateWorldMatrix(){const t=this.parent;if(t!==null&&t._updateWorldMatrix(),this._updateMatrix(),this._worldMatrixDirty===!0){t===null?this._worldMatrix.copy(this._localMatrix):this._worldMatrix.multiplyMatrices(this.parent._worldMatrix,this._localMatrix),this._worldMatrixDirty=!1;const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];r._worldMatrixDirty=!0}}}updateWorldMatrix(){return console.warn("GameEntity: .updateWorldMatrix() has been removed. World matrices are automatically updated on access."),this}}function zl(s){const t=new Array;for(let e=0,n=s.length;e<n;e++)t.push(s[e].uuid);return t}const Hl=new Q,Ya=new Q;class nu extends zo{constructor(){super(),this.velocity=new Q,this.maxSpeed=1,this.updateOrientation=!0}update(t){return this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),Hl.copy(this.velocity).multiplyScalar(t),Ya.copy(this.position).add(Hl),this.updateOrientation&&this.getSpeedSquared()>1e-8&&this.lookAt(Ya),this.position.copy(Ya),this}getSpeed(){return this.velocity.length()}getSpeedSquared(){return this.velocity.squaredLength()}toJSON(){const t=super.toJSON();return t.velocity=this.velocity.toArray(new Array),t.maxSpeed=this.maxSpeed,t.updateOrientation=this.updateOrientation,t}fromJSON(t){return super.fromJSON(t),this.velocity.fromArray(t.velocity),this.maxSpeed=t.maxSpeed,this.updateOrientation=t.updateOrientation,this}}class Oe{constructor(){this.active=!0,this.weight=1}calculate(){}toJSON(){return{type:this.constructor.name,active:this.active,weight:this.weight}}fromJSON(t){return this.active=t.active,this.weight=t.weight,this}resolveReferences(){}}const pr=new Q,mr=new Q;class C0 extends Oe{constructor(){super()}calculate(t,e){pr.set(0,0,0);const n=t.neighbors;for(let i=0,r=n.length;i<r;i++)n[i].getDirection(mr),pr.add(mr);return n.length>0&&(pr.divideScalar(n.length),t.getDirection(mr),e.subVectors(pr,mr)),e}}const Ja=new Q,Ka=new Q;class Jr extends Oe{constructor(t=new Q,e=3,n=0){super(),this.target=t,this.deceleration=e,this.tolerance=n}calculate(t,e){const n=this.target,i=this.deceleration;Ka.subVectors(n,t.position);const r=Ka.length();if(r>this.tolerance){let a=r/i;a=Math.min(a,t.maxSpeed),Ja.copy(Ka).multiplyScalar(a/r)}else Ja.set(0,0,0);return e.subVectors(Ja,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.deceleration=t.deceleration,this}}const $a=new Q;class Kr extends Oe{constructor(t=new Q){super(),this.target=t}calculate(t,e){const n=this.target;return $a.subVectors(n,t.position).normalize(),$a.multiplyScalar(t.maxSpeed),e.subVectors($a,t.velocity)}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this}}const gr=new Q;class P0 extends Oe{constructor(){super(),this._seek=new Kr}calculate(t,e){gr.set(0,0,0);const n=t.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];gr.add(a.position)}return n.length>0&&(gr.divideScalar(n.length),this._seek.target=gr,this._seek.calculate(t,e),e.normalize()),e}}const xs=new Q;class iu extends Oe{constructor(t=new Q,e=10){super(),this.target=t,this.panicDistance=e}calculate(t,e){const n=this.target;return t.position.squaredDistanceTo(n)<=this.panicDistance*this.panicDistance&&(xs.subVectors(t.position,n).normalize(),xs.squaredLength()===0&&xs.set(0,0,1),xs.multiplyScalar(t.maxSpeed),e.subVectors(xs,t.velocity)),e}toJSON(){const t=super.toJSON();return t.target=this.target.toArray(new Array),t.panicDistance=this.panicDistance,t}fromJSON(t){return super.fromJSON(t),this.target.fromArray(t.target),this.panicDistance=t.panicDistance,this}}const Vl=new Q,kl=new Q,Gl=new Q;class su extends Oe{constructor(t=null,e=10,n=1){super(),this.pursuer=t,this.panicDistance=e,this.predictionFactor=n,this._flee=new iu}calculate(t,e){const n=this.pursuer;Vl.subVectors(n.position,t.position);let i=Vl.length()/(t.maxSpeed+n.getSpeed());return i*=this.predictionFactor,kl.copy(n.velocity).multiplyScalar(i),Gl.addVectors(n.position,kl),this._flee.target=Gl,this._flee.panicDistance=this.panicDistance,this._flee.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.pursuer=this.pursuer?this.pursuer.uuid:null,t.panicDistance=this.panicDistance,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.pursuer=t.pursuer,this.panicDistance=t.panicDistance,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.pursuer=t.get(this.pursuer)||null}}class L0{constructor(){this.loop=!1,this._waypoints=new Array,this._index=0}add(t){return this._waypoints.push(t),this}clear(){return this._waypoints.length=0,this._index=0,this}current(){return this._waypoints[this._index]}finished(){const t=this._waypoints.length-1;return this.loop===!0?!1:this._index===t}advance(){return this._index++,this._index===this._waypoints.length&&(this.loop===!0?this._index=0:this._index--),this}toJSON(){const t={type:this.constructor.name,loop:this.loop,_waypoints:new Array,_index:this._index},e=this._waypoints;for(let n=0,i=e.length;n<i;n++){const r=e[n];t._waypoints.push(r.toArray(new Array))}return t}fromJSON(t){this.loop=t.loop,this._index=t._index;const e=t._waypoints;for(let n=0,i=e.length;n<i;n++){const r=e[n];this._waypoints.push(new Q().fromArray(r))}return this}}class D0 extends Oe{constructor(t=new L0,e=1){super(),this.path=t,this.nextWaypointDistance=e,this._arrive=new Jr,this._seek=new Kr}calculate(t,e){const n=this.path;n.current().squaredDistanceTo(t.position)<this.nextWaypointDistance*this.nextWaypointDistance&&n.advance();const r=n.current();return n.finished()===!0?(this._arrive.target=r,this._arrive.calculate(t,e)):(this._seek.target=r,this._seek.calculate(t,e)),e}toJSON(){const t=super.toJSON();return t.path=this.path.toJSON(),t.nextWaypointDistance=this.nextWaypointDistance,t}fromJSON(t){return super.fromJSON(t),this.path.fromJSON(t.path),this.nextWaypointDistance=t.nextWaypointDistance,this}}const _r=new Q,xr=new Q,Wl=new Q,Xl=new Q;class I0 extends Oe{constructor(t=null,e=null,n=3){super(),this.entity1=t,this.entity2=e,this.deceleration=n,this._arrive=new Jr}calculate(t,e){const n=this.entity1,i=this.entity2;_r.addVectors(n.position,i.position).multiplyScalar(.5);const r=t.position.distanceTo(_r)/t.maxSpeed;return xr.copy(n.velocity).multiplyScalar(r),Wl.addVectors(n.position,xr),xr.copy(i.velocity).multiplyScalar(r),Xl.addVectors(i.position,xr),_r.addVectors(Wl,Xl).multiplyScalar(.5),this._arrive.deceleration=this.deceleration,this._arrive.target=_r,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.entity1=this.entity1?this.entity1.uuid:null,t.entity2=this.entity2?this.entity2.uuid:null,t.deceleration=this.deceleration,t}fromJSON(t){return super.fromJSON(t),this.entity1=t.entity1,this.entity2=t.entity2,this.deceleration=t.deceleration,this}resolveReferences(t){this.entity1=t.get(this.entity1)||null,this.entity2=t.get(this.entity2)||null}}const Ge=new Q,vs=new Q,Hn=new Q,Sn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q];class Ho{constructor(t=new Q,e=new Q){this.min=t,this.max=e}set(t,e){return this.min=t,this.max=e,this}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max),e}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}expand(t){return this.min.min(t),this.max.max(t),this}getCenter(t){return t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return t.subVectors(this.max,this.min)}intersectsAABB(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsBoundingSphere(t){return this.clampPoint(t.center,Ge),Ge.squaredDistanceTo(t.center)<=t.radius*t.radius}intersectsPlane(t){const e=t.normal;this.getCenter(vs),Hn.subVectors(this.max,vs);const n=Hn.x*Math.abs(e.x)+Hn.y*Math.abs(e.y)+Hn.z*Math.abs(e.z),i=t.distanceToPoint(vs);return Math.abs(i)<=n}getNormalFromSurfacePoint(t,e){e.set(0,0,0);let n,i=1/0;return this.getCenter(vs),this.getSize(Hn),Ge.copy(t).sub(vs),n=Math.abs(Hn.x-Math.abs(Ge.x)),n<i&&(i=n,e.set(1*Math.sign(Ge.x),0,0)),n=Math.abs(Hn.y-Math.abs(Ge.y)),n<i&&(i=n,e.set(0,1*Math.sign(Ge.y),0)),n=Math.abs(Hn.z-Math.abs(Ge.z)),n<i&&e.set(0,0,1*Math.sign(Ge.z)),e}fromCenterAndSize(t,e){return Ge.copy(e).multiplyScalar(.5),this.min.copy(t).sub(Ge),this.max.copy(t).add(Ge),this}fromPoints(t){this.min.set(1/0,1/0,1/0),this.max.set(-1/0,-1/0,-1/0);for(let e=0,n=t.length;e<n;e++)this.expand(t[e]);return this}applyMatrix4(t){const e=this.min,n=this.max;return Sn[0].set(e.x,e.y,e.z).applyMatrix4(t),Sn[1].set(e.x,e.y,n.z).applyMatrix4(t),Sn[2].set(e.x,n.y,e.z).applyMatrix4(t),Sn[3].set(e.x,n.y,n.z).applyMatrix4(t),Sn[4].set(n.x,e.y,e.z).applyMatrix4(t),Sn[5].set(n.x,e.y,n.z).applyMatrix4(t),Sn[6].set(n.x,n.y,e.z).applyMatrix4(t),Sn[7].set(n.x,n.y,n.z).applyMatrix4(t),this.fromPoints(Sn)}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{type:this.constructor.name,min:this.min.toArray(new Array),max:this.max.toArray(new Array)}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ja=new Ho;class $r{constructor(t=new Q,e=0){this.center=t,this.radius=e}set(t,e){return this.center=t,this.radius=e,this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}clone(){return new this.constructor().copy(this)}clampPoint(t,e){return e.copy(t),this.center.squaredDistanceTo(t)>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}containsPoint(t){return t.squaredDistanceTo(this.center)<=this.radius*this.radius}intersectsBoundingSphere(t){const e=this.radius+t.radius;return t.center.squaredDistanceTo(this.center)<=e*e}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}getNormalFromSurfacePoint(t,e){return e.subVectors(t,this.center).normalize()}fromPoints(t){return ja.fromPoints(t),ja.getCenter(this.center),this.radius=this.center.distanceTo(ja.max),this}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScale(),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}toJSON(){return{type:this.constructor.name,center:this.center.toArray(new Array),radius:this.radius}}fromJSON(t){return this.center.fromArray(t.center),this.radius=t.radius,this}}const We=new Q,Za=new Q,vr=new Q,Qa=new Q,ql=new Q,Mr=new Rs,U0=new Rs,Yl=new Ho;class ru{constructor(t=new Q,e=new Q){this.origin=t,this.direction=e}set(t,e){return this.origin=t,this.direction=e,this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}clone(){return new this.constructor().copy(this)}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}intersectBoundingSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),i=We.dot(We)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return o<0&&c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsBoundingSphere(t){const e=new Q;let n;const i=e.subVectors(t.center,this.origin).dot(this.direction);return i<0?n=this.origin.squaredDistanceTo(t.center):(e.copy(this.direction).multiplyScalar(i).add(this.origin),n=e.squaredDistanceTo(t.center)),n<=t.radius*t.radius}intersectAABB(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||n!==n)&&(n=r),(a<i||i!==i)&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsAABB(t){return this.intersectAABB(t,We)!==null}intersectPlane(t,e){let n;const i=t.normal.dot(this.direction);if(i===0)if(t.distanceToPoint(this.origin)===0)n=0;else return null;else n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?this.at(n,e):null}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectOBB(t,e){return t.getSize(ql),Yl.fromCenterAndSize(We.set(0,0,0),ql),Mr.fromMatrix3(t.rotation),Mr.setPosition(t.center),Jl.copy(this).applyMatrix4(Mr.getInverse(U0)),Jl.intersectAABB(Yl,e)?e.applyMatrix4(Mr):null}intersectsOBB(t){return this.intersectOBB(t,We)!==null}intersectConvexHull(t,e){const n=t.faces;let i=-1/0,r=1/0;for(let a=0,o=n.length;a<o;a++){const l=n[a].plane,h=l.distanceToPoint(this.origin),d=l.normal.dot(this.direction);if(h>0&&d>=0)return null;const u=d!==0?-h/d:0;if(!(u<=0)&&(d>0?r=Math.min(u,r):i=Math.max(u,i),i>r))return null}return i!==-1/0?this.at(i,e):this.at(r,e),e}intersectsConvexHull(t){return this.intersectConvexHull(t,We)!==null}intersectTriangle(t,e,n){const i=t.a,r=t.b,a=t.c;Za.subVectors(r,i),vr.subVectors(a,i),Qa.crossVectors(Za,vr);let o=this.direction.dot(Qa),c;if(o>0){if(e)return null;c=1}else if(o<0)c=-1,o=-o;else return null;We.subVectors(this.origin,i);const l=c*this.direction.dot(vr.crossVectors(We,vr));if(l<0)return null;const h=c*this.direction.dot(Za.cross(We));if(h<0||l+h>o)return null;const d=-c*We.dot(Qa);return d<0?null:this.at(d/o,n)}intersectBVH(t,e){return t.root.intersectRay(this,e)}intersectsBVH(t){return t.root.intersectsRay(this)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}}const Jl=new ru,Kl=new Rs,zi=new Q,yr=new Q,to=new Q,eo=new $r,N0=new ru(new Q(0,0,0),new Q(0,0,1));class O0 extends Oe{constructor(t=new Array){super(),this.obstacles=t,this.brakingWeight=.2,this.dBoxMinLength=4}calculate(t,e){const n=this.obstacles;let i=null,r=1/0;const a=this.dBoxMinLength+t.getSpeed()/t.maxSpeed*this.dBoxMinLength;t.worldMatrix.getInverse(Kl);for(let o=0,c=n.length;o<c;o++){const l=n[o];if(l!==t&&(zi.copy(l.position).applyMatrix4(Kl),zi.z>0&&Math.abs(zi.z)<a)){const h=l.boundingRadius+t.boundingRadius;Math.abs(zi.x)<h&&(eo.center.copy(zi),eo.radius=h,N0.intersectBoundingSphere(eo,to),to.z<r&&(r=to.z,i=l,yr.copy(zi)))}}if(i!==null){const o=1+(a-yr.z)/a;e.x=(i.boundingRadius-yr.x)*o,e.z=(i.boundingRadius-yr.z)*this.brakingWeight,e.applyRotation(t.rotation)}return e}toJSON(){const t=super.toJSON();t.obstacles=new Array,t.brakingWeight=this.brakingWeight,t.dBoxMinLength=this.dBoxMinLength;for(let e=0,n=this.obstacles.length;e<n;e++)t.obstacles.push(this.obstacles[e].uuid);return t}fromJSON(t){return super.fromJSON(t),this.obstacles=t.obstacles,this.brakingWeight=t.brakingWeight,this.dBoxMinLength=t.dBoxMinLength,this}resolveReferences(t){const e=this.obstacles;for(let n=0,i=e.length;n<i;n++)e[n]=t.get(e[n])}}const no=new Q,$l=new Q,jl=new Q,Zl=new Q;class F0 extends Oe{constructor(t=null,e=new Q){super(),this.leader=t,this.offset=e,this._arrive=new Jr,this._arrive.deceleration=1.5}calculate(t,e){const n=this.leader,i=this.offset;no.copy(i).applyMatrix4(n.worldMatrix),$l.subVectors(no,t.position);const r=$l.length()/(t.maxSpeed+n.getSpeed());return jl.copy(n.velocity).multiplyScalar(r),Zl.addVectors(no,jl),this._arrive.target=Zl,this._arrive.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.leader=this.leader?this.leader.uuid:null,t.offset=this.offset,t}fromJSON(t){return super.fromJSON(t),this.leader=t.leader,this.offset=t.offset,this}resolveReferences(t){this.leader=t.get(this.leader)||null}}const io=new Q,so=new Q,Ql=new Q,th=new Q,eh=new Q;class au extends Oe{constructor(t=null,e=1){super(),this.evader=t,this.predictionFactor=e,this._seek=new Kr}calculate(t,e){const n=this.evader;io.subVectors(n.position,t.position),t.getDirection(so),n.getDirection(Ql);const i=io.dot(so)>0,r=so.dot(Ql)<-.95;if(i===!0&&r===!0)return this._seek.target=n.position,this._seek.calculate(t,e),e;let a=io.length()/(t.maxSpeed+n.getSpeed());return a*=this.predictionFactor,th.copy(n.velocity).multiplyScalar(a),eh.addVectors(n.position,th),this._seek.target=eh,this._seek.calculate(t,e),e}toJSON(){const t=super.toJSON();return t.evader=this.evader?this.evader.uuid:null,t.predictionFactor=this.predictionFactor,t}fromJSON(t){return super.fromJSON(t),this.evader=t.evader,this.predictionFactor=t.predictionFactor,this}resolveReferences(t){this.evader=t.get(this.evader)||null}}const Sr=new Q;class B0 extends Oe{constructor(){super()}calculate(t,e){const n=t.neighbors;for(let i=0,r=n.length;i<r;i++){const a=n[i];Sr.subVectors(t.position,a.position);let o=Sr.length();o===0&&(o=1e-4),Sr.normalize().divideScalar(o),e.add(Sr)}return e}}const Er=new Q,ro=new Q;class z0 extends Oe{constructor(t=1,e=5,n=5){super(),this.radius=t,this.distance=e,this.jitter=n,this._targetLocal=new Q,H0(this.radius,this._targetLocal)}calculate(t,e,n){const i=this.jitter*n;return ro.x=bs.randFloat(-1,1)*i,ro.z=bs.randFloat(-1,1)*i,this._targetLocal.add(ro),this._targetLocal.normalize(),this._targetLocal.multiplyScalar(this.radius),Er.copy(this._targetLocal),Er.z+=this.distance,Er.applyMatrix4(t.worldMatrix),e.subVectors(Er,t.position),e}toJSON(){const t=super.toJSON();return t.radius=this.radius,t.distance=this.distance,t.jitter=this.jitter,t._targetLocal=this._targetLocal.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this.distance=t.distance,this.jitter=t.jitter,this._targetLocal.fromArray(t._targetLocal),this}}function H0(s,t){const e=Math.random()*Math.PI*2;t.x=s*Math.cos(e),t.z=s*Math.sin(e)}const wr=new Q;class nh{constructor(t){this.vehicle=t,this.behaviors=new Array,this._steeringForce=new Q,this._typesMap=new Map}add(t){return this.behaviors.push(t),this}remove(t){const e=this.behaviors.indexOf(t);return this.behaviors.splice(e,1),this}clear(){return this.behaviors.length=0,this}calculate(t,e){return this._calculateByOrder(t),e.copy(this._steeringForce)}_accumulate(t){const e=this._steeringForce.length(),n=this.vehicle.maxForce-e;return n<=0?!1:(t.length()>n&&t.normalize().multiplyScalar(n),this._steeringForce.add(t),!0)}_calculateByOrder(t){const e=this.behaviors;this._steeringForce.set(0,0,0);for(let n=0,i=e.length;n<i;n++){const r=e[n];if(r.active===!0&&(wr.set(0,0,0),r.calculate(this.vehicle,wr,t),wr.multiplyScalar(r.weight),this._accumulate(wr)===!1))return}}toJSON(){const t={type:"SteeringManager",behaviors:new Array},e=this.behaviors;for(let n=0,i=e.length;n<i;n++){const r=e[n];t.behaviors.push(r.toJSON())}return t}fromJSON(t){this.clear();const e=t.behaviors;for(let n=0,i=e.length;n<i;n++){const r=e[n],a=r.type;let o;switch(a){case"SteeringBehavior":o=new Oe().fromJSON(r);break;case"AlignmentBehavior":o=new C0().fromJSON(r);break;case"ArriveBehavior":o=new Jr().fromJSON(r);break;case"CohesionBehavior":o=new P0().fromJSON(r);break;case"EvadeBehavior":o=new su().fromJSON(r);break;case"FleeBehavior":o=new iu().fromJSON(r);break;case"FollowPathBehavior":o=new D0().fromJSON(r);break;case"InterposeBehavior":o=new I0().fromJSON(r);break;case"ObstacleAvoidanceBehavior":o=new O0().fromJSON(r);break;case"OffsetPursuitBehavior":o=new F0().fromJSON(r);break;case"PursuitBehavior":o=new au().fromJSON(r);break;case"SeekBehavior":o=new Kr().fromJSON(r);break;case"SeparationBehavior":o=new B0().fromJSON(r);break;case"WanderBehavior":o=new z0().fromJSON(r);break;default:const c=this._typesMap.get(a);if(c!==void 0)o=new c().fromJSON(r);else{nn.warn("YUKA.SteeringManager: Unsupported steering behavior type:",a);continue}}this.add(o)}return this}registerType(t,e){return this._typesMap.set(t,e),this}resolveReferences(t){const e=this.behaviors;for(let n=0,i=e.length;n<i;n++)e[n].resolveReferences(t);return this}}class V0{constructor(t=10){this.count=t,this._history=new Array,this._slot=0;for(let e=0;e<this.count;e++)this._history[e]=new Q}calculate(t,e){e.set(0,0,0),this._slot===this.count&&(this._slot=0),this._history[this._slot].copy(t),this._slot++;for(let n=0;n<this.count;n++)e.add(this._history[n]);return e.divideScalar(this.count),e}toJSON(){const t={type:this.constructor.name,count:this.count,_history:new Array,_slot:this._slot},e=this._history;for(let n=0,i=e.length;n<i;n++){const r=e[n];t._history.push(r.toArray(new Array))}return t}fromJSON(t){this.count=t.count,this._slot=t._slot;const e=t._history;this._history.length=0;for(let n=0,i=e.length;n<i;n++){const r=e[n];this._history.push(new Q().fromArray(r))}return this}}const ih=new Q,Ar=new Q,sh=new Q,Ms=new Q,rh=new Q;class Eo extends nu{constructor(){super(),this.mass=1,this.maxForce=100,this.steering=new nh(this),this.smoother=null}update(t){return this.steering.calculate(t,ih),sh.copy(ih).divideScalar(this.mass),this.velocity.add(sh.multiplyScalar(t)),this.getSpeedSquared()>this.maxSpeed*this.maxSpeed&&(this.velocity.normalize(),this.velocity.multiplyScalar(this.maxSpeed)),Ar.copy(this.velocity).multiplyScalar(t),Ms.copy(this.position).add(Ar),this.updateOrientation===!0&&this.smoother===null&&this.getSpeedSquared()>1e-8&&this.lookAt(Ms),this.position.copy(Ms),this.updateOrientation===!0&&this.smoother!==null&&(this.smoother.calculate(this.velocity,rh),Ar.copy(rh).multiplyScalar(t),Ms.copy(this.position).add(Ar),this.lookAt(Ms)),this}toJSON(){const t=super.toJSON();return t.mass=this.mass,t.maxForce=this.maxForce,t.steering=this.steering.toJSON(),t.smoother=this.smoother?this.smoother.toJSON():null,t}fromJSON(t){return super.fromJSON(t),this.mass=t.mass,this.maxForce=t.maxForce,this.steering=new nh(this).fromJSON(t.steering),this.smoother=t.smoother?new V0().fromJSON(t.smoother):null,this}resolveReferences(t){super.resolveReferences(t),this.steering.resolveReferences(t)}}class Hr{touching(){return!1}update(){return this}toJSON(){return{type:this.constructor.name}}fromJSON(){return this}}const ah=new $r,oh=new Q;class k0 extends Hr{constructor(t=new Q){super(),this.size=t,this._aabb=new Ho}touching(t){return ah.set(t.position,t.boundingRadius),this._aabb.intersectsBoundingSphere(ah)}update(t){return t.getWorldPosition(oh),this._aabb.fromCenterAndSize(oh,this.size),this}toJSON(){const t=super.toJSON();return t.size=this.size.toArray(new Array),t}fromJSON(t){return super.fromJSON(t),this.size.fromArray(t.size),this}}const ao=new $r;class G0 extends Hr{constructor(t=0){super(),this.radius=t,this._boundingSphere=new $r}touching(t){return t.getWorldPosition(ao.center),ao.radius=t.boundingRadius,this._boundingSphere.intersectsBoundingSphere(ao)}update(t){return t.getWorldPosition(this._boundingSphere.center),this._boundingSphere.radius=this.radius,this}toJSON(){const t=super.toJSON();return t.radius=this.radius,t}fromJSON(t){return super.fromJSON(t),this.radius=t.radius,this}}class ch extends zo{constructor(t=new Hr){super(),this.region=t,this.canActivateTrigger=!1,this._typesMap=new Map}check(t){return this.region.touching(t)===!0&&this.execute(t),this}execute(){}updateRegion(){return this.region.update(this),this}toJSON(){const t=super.toJSON();return t.region=this.region.toJSON(),t}fromJSON(t){super.fromJSON(t);const e=t.region;let n=e.type;switch(n){case"TriggerRegion":this.region=new Hr().fromJSON(e);break;case"RectangularTriggerRegion":this.region=new k0().fromJSON(e);break;case"SphericalTriggerRegion":this.region=new G0().fromJSON(e);break;default:const i=this._typesMap.get(n);i!==void 0?this.region=new i().fromJSON(e):nn.warn("YUKA.Trigger: Unsupported trigger region type:",e.type)}return this}registerType(t,e){return this._typesMap.set(t,e),this}}const ys=new Array;class W0{constructor(){this.entities=new Array,this.spatialIndex=null,this._triggers=new Array,this._indexMap=new Map,this._typesMap=new Map,this._messageDispatcher=new b0}add(t){return this.entities.push(t),t.manager=this,this}remove(t){const e=this.entities.indexOf(t);return this.entities.splice(e,1),t.manager=null,this}clear(){return this.entities.length=0,this._messageDispatcher.clear(),this}getEntityByName(t){const e=this.entities;for(let n=0,i=e.length;n<i;n++){const r=e[n];if(r.name===t)return r}return null}update(t){const e=this.entities,n=this._triggers;for(let i=e.length-1;i>=0;i--){const r=e[i];this.updateEntity(r,t)}for(let i=n.length-1;i>=0;i--){const r=n[i];this.processTrigger(r)}return this._triggers.length=0,this._messageDispatcher.dispatchDelayedMessages(t),this}updateEntity(t,e){if(t.active===!0){this.updateNeighborhood(t),t._started===!1&&(t.start(),t._started=!0),t.update(e);const n=t.children;for(let a=n.length-1;a>=0;a--){const o=n[a];this.updateEntity(o,e)}if(t instanceof ch&&this._triggers.push(t),this.spatialIndex!==null){let a=this._indexMap.get(t)||-1;a=this.spatialIndex.updateEntity(t,a),this._indexMap.set(t,a)}const i=t._renderComponent,r=t._renderComponentCallback;i!==null&&r!==null&&r(t,i)}return this}updateNeighborhood(t){if(t.updateNeighborhood===!0){t.neighbors.length=0,this.spatialIndex!==null?this.spatialIndex.query(t.position,t.neighborhoodRadius,ys):(ys.length=0,ys.push(...this.entities));const e=t.neighborhoodRadius*t.neighborhoodRadius;for(let n=0,i=ys.length;n<i;n++){const r=ys[n];t!==r&&r.active===!0&&t.position.squaredDistanceTo(r.position)<=e&&t.neighbors.push(r)}}return this}processTrigger(t){t.updateRegion();const e=this.entities;for(let n=e.length-1;n>=0;n--){const i=e[n];t!==i&&i.active===!0&&i.canActivateTrigger===!0&&t.check(i)}return this}sendMessage(t,e,n,i,r){return this._messageDispatcher.dispatch(t,e,n,i,r),this}toJSON(){const t={type:this.constructor.name,entities:new Array,_messageDispatcher:this._messageDispatcher.toJSON()};function e(n){t.entities.push(n.toJSON());for(let i=0,r=n.children.length;i<r;i++)e(n.children[i])}for(let n=0,i=this.entities.length;n<i;n++)e(this.entities[n]);return t}fromJSON(t){this.clear();const e=t.entities,n=t._messageDispatcher,i=new Map;for(let r=0,a=e.length;r<a;r++){const o=e[r],c=o.type;let l;switch(c){case"GameEntity":l=new zo().fromJSON(o);break;case"MovingEntity":l=new nu().fromJSON(o);break;case"Vehicle":l=new Eo().fromJSON(o);break;case"Trigger":l=new ch().fromJSON(o);break;default:const h=this._typesMap.get(c);if(h!==void 0)l=new h().fromJSON(o);else{nn.warn("YUKA.EntityManager: Unsupported entity type:",c);continue}}i.set(l.uuid,l),l.parent===null&&this.add(l)}for(let r of i.values())r.resolveReferences(i);return this._messageDispatcher.fromJSON(n),this}registerType(t,e){return this._typesMap.set(t,e),this}}new Array;new Array;new Array;const lh=10,X0=50;class q0{constructor(t=0){mt(this,"_balance");this._balance=Math.max(0,t)}get balance(){return this._balance}earn(t){return this._balance+=Math.max(0,t),this._balance}spend(t){return t>this._balance?{success:!1,balance:this._balance}:(this._balance-=t,{success:!0,balance:this._balance})}}const Y0=8,oo=100,J0=300,K0=.3,ou=80,hh=4,$0=200,j0=3,cu=5,Z0=ou*cu,Q0=12,tx=8,ex=1e4,nx=new Cn(.3,4,4),ix=new tn({color:16729088});class Vo{constructor(t,e){mt(this,"projectiles",[]);mt(this,"entries",[]);mt(this,"scene");mt(this,"entityManager");mt(this,"playerVehicle");this.scene=t,this.entityManager=new W0,this.playerVehicle=new Eo;const n=e.length;for(let i=0;i<n;i++){const r=e[i];r.userData.health===void 0&&(r.userData.health=oo),r.userData.creditValue===void 0&&(r.userData.creditValue=lh+Math.floor(Math.random()*(X0-lh+1)));const a=new Eo;a.position.set(r.position.x,r.position.y,r.position.z),a.maxSpeed=Q0,a.maxForce=tx;const o=new au(this.playerVehicle);o.active=!1,a.steering.add(o);const c=new su(this.playerVehicle);c.active=!1,c.panicDistance=ex,a.steering.add(c),this.entityManager.add(a),this.entries.push({mesh:r,vehicle:a,pursuitBehavior:o,evadeBehavior:c,fireTimer:i*hh/Math.max(n,1)})}}update(t,e){for(let n=this.projectiles.length-1;n>=0;n--){const i=this.projectiles[n];i.mesh.position.addScaledVector(i.velocity,t),i.lifeRemaining-=t;const r=i.mesh.position.distanceTo(i.origin);(i.lifeRemaining<=0||r>=Z0)&&(this.scene.remove(i.mesh),this.projectiles.splice(n,1))}this.playerVehicle.position.set(e.x,e.y,e.z);for(const n of this.entries){const{mesh:i,vehicle:r,pursuitBehavior:a,evadeBehavior:o}=n,l=(i.userData.health??oo)/oo,h=r.position.x-e.x,d=r.position.y-e.y,u=r.position.z-e.z,p=Math.sqrt(h*h+d*d+u*u);l<K0?(a.active=!1,o.active=!0):p<=J0?(a.active=!0,o.active=!1):(a.active=!1,o.active=!1,r.velocity.multiplyScalar(.9))}this.entityManager.update(t);for(const n of this.entries){const{mesh:i,vehicle:r}=n;i.position.set(r.position.x,r.position.y,r.position.z);const a=r.velocity.x,o=r.velocity.y,c=r.velocity.z;Math.sqrt(a*a+o*o+c*c)>.5&&i.lookAt(i.position.x+a,i.position.y+o,i.position.z+c);const h=i.position.x-e.x,d=i.position.y-e.y,u=i.position.z-e.z,p=Math.sqrt(h*h+d*d+u*u);n.fireTimer-=t,n.fireTimer<=0&&(p<=$0&&this.spawnProjectile(i.position,e),n.fireTimer=hh)}}checkPlayerHit(t){for(let e=this.projectiles.length-1;e>=0;e--)if(this.projectiles[e].mesh.position.distanceTo(t)<j0)return this.scene.remove(this.projectiles[e].mesh),this.projectiles.splice(e,1),!0;return!1}reset(){for(const t of this.projectiles)this.scene.remove(t.mesh);this.projectiles=[]}spawnProjectile(t,e){const n=new At(nx,ix);n.position.copy(t);const i=e.clone().sub(t).normalize().multiplyScalar(ou);this.scene.add(n),this.projectiles.push({mesh:n,velocity:i,lifeRemaining:cu,origin:t.clone()})}}function sx(s){const t=document.createElement("div");t.id="game-over",Object.assign(t.style,{position:"fixed",inset:"0",background:"rgba(0,0,0,0.85)",display:"none",flexDirection:"column",alignItems:"center",justifyContent:"center",zIndex:"100",fontFamily:"monospace"});const e=document.createElement("h1");e.textContent="SHIP DESTROYED",Object.assign(e.style,{fontSize:"3rem",margin:"0 0 1rem",letterSpacing:"0.2em",color:"#ff3300"});const n=document.createElement("p");n.textContent="Hull integrity at zero.",Object.assign(n.style,{fontSize:"1rem",color:"#888",margin:"0 0 2rem"});const i=document.createElement("button");return i.id="restart-btn",i.textContent="RESTART",Object.assign(i.style,{padding:"0.75rem 2.5rem",fontSize:"1.2rem",fontFamily:"monospace",background:"#200000",color:"#ff5500",border:"2px solid #ff3300",cursor:"pointer",letterSpacing:"0.1em"}),i.addEventListener("click",s),t.append(e,n,i),document.body.appendChild(t),document.addEventListener("keydown",r=>{t.style.display!=="none"&&(r.key==="r"||r.key==="R"||r.key==="Enter")&&s()}),{show(){t.style.display="flex",i.focus()},hide(){t.style.display="none"}}}function rx(){const s=document.createElement("div");s.style.cssText=["position:fixed","top:50%","left:50%","width:16px","height:16px","transform:translate(-50%,-50%)","pointer-events:none","z-index:10"].join(";");const t=document.createElement("div");t.style.cssText=["position:absolute","top:50%","left:0","right:0","height:1px","margin-top:-0.5px","background:rgba(255,255,255,0.85)"].join(";");const e=document.createElement("div");e.style.cssText=["position:absolute","left:50%","top:0","bottom:0","width:1px","margin-left:-0.5px","background:rgba(255,255,255,0.85)"].join(";"),s.appendChild(t),s.appendChild(e),document.body.appendChild(s)}function ax(){return typeof AudioContext<"u"?new AudioContext:typeof globalThis.webkitAudioContext<"u"?new globalThis.webkitAudioContext:null}function Hi(s,t="white"){for(let e=0;e<s.numberOfChannels;e++){const n=s.getChannelData(e);let i=0;for(let r=0;r<n.length;r++){const a=Math.random()*2-1;t==="brown"?(i=(i+.02*a)/1.02,n[r]=i*3.5):n[r]=a}}}function Vi(s,t,e,n,i,r=1){const a=t.currentTime;s.gain.setValueAtTime(0,a),s.gain.linearRampToValueAtTime(r,a+e),s.gain.setValueAtTime(r,a+e+n),s.gain.linearRampToValueAtTime(0,a+e+n+i)}class ox{constructor(){mt(this,"ctx");mt(this,"lowHealthCooldown",0);mt(this,"chaingunNodeId",null);mt(this,"chaingunGain",null);this.ctx=ax()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}playLaserZap(){const t=this.ctx;if(!t)return;const e=t.createOscillator(),n=t.createGain();e.connect(n),n.connect(t.destination),e.type="sawtooth";const i=t.currentTime;e.frequency.setValueAtTime(880,i),e.frequency.exponentialRampToValueAtTime(110,i+.15),n.gain.setValueAtTime(.4,i),n.gain.linearRampToValueAtTime(0,i+.15),e.start(i),e.stop(i+.15)}startChaingunChatter(){!this.ctx||this.chaingunNodeId!==null||(this._fireChaingunBurst(),this.chaingunNodeId=setInterval(()=>this._fireChaingunBurst(),83))}stopChaingunChatter(){this.chaingunNodeId!==null&&(clearInterval(this.chaingunNodeId),this.chaingunNodeId=null)}playMissileWhoosh(){const t=this.ctx;if(!t)return;const e=.5,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate);Hi(n,"brown");const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.setValueAtTime(600,t.currentTime),r.frequency.linearRampToValueAtTime(2400,t.currentTime+e*.4),r.Q.value=2;const a=t.createGain();Vi(a,t,.05,.2,.25,.6),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playMissileExplosion(){this._playExplosion(.6)}playAsteroidHit(){const t=this.ctx;if(!t)return;const n=t.createBuffer(1,Math.floor(t.sampleRate*.18),t.sampleRate);Hi(n,"brown");const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=900;const a=t.createGain();Vi(a,t,.001,.05,.13,.5),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playAsteroidDestroy(){const t=this.ctx;if(!t)return;const e=.4,n=t.createBuffer(1,Math.floor(t.sampleRate*e),t.sampleRate);Hi(n,"brown");const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1800,t.currentTime),r.frequency.exponentialRampToValueAtTime(200,t.currentTime+e);const a=t.createGain();Vi(a,t,.001,.1,.3,.7),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playEnemyHit(){const t=this.ctx;if(!t)return;const n=t.createBuffer(1,Math.floor(t.sampleRate*.15),t.sampleRate);Hi(n);const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=2200,r.Q.value=3;const a=t.createGain();Vi(a,t,.001,.04,.11,.5),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}playEnemyDestroy(){this._playExplosion(.8)}playWarpActivation(){const t=this.ctx;if(!t)return;const e=t.createOscillator(),n=t.createGain();e.connect(n),n.connect(t.destination),e.type="sine";const i=t.currentTime,r=1.2;e.frequency.setValueAtTime(80,i),e.frequency.exponentialRampToValueAtTime(2400,i+r*.7),e.frequency.exponentialRampToValueAtTime(100,i+r),n.gain.setValueAtTime(0,i),n.gain.linearRampToValueAtTime(.5,i+.1),n.gain.setValueAtTime(.5,i+r*.7),n.gain.linearRampToValueAtTime(0,i+r),e.start(i),e.stop(i+r)}playUIClick(){const t=this.ctx;if(!t)return;const e=t.createOscillator(),n=t.createGain();e.connect(n),n.connect(t.destination),e.type="square";const i=t.currentTime;e.frequency.setValueAtTime(1200,i),e.frequency.linearRampToValueAtTime(800,i+.04),n.gain.setValueAtTime(.2,i),n.gain.linearRampToValueAtTime(0,i+.04),e.start(i),e.stop(i+.04)}playStorePurchase(){const t=this.ctx;if(!t)return;[523.25,783.99].forEach((n,i)=>{const r=t.createOscillator(),a=t.createGain();r.connect(a),a.connect(t.destination),r.type="sine";const o=t.currentTime+i*.12;r.frequency.setValueAtTime(n,o),a.gain.setValueAtTime(0,o),a.gain.linearRampToValueAtTime(.35,o+.02),a.gain.setValueAtTime(.35,o+.08),a.gain.linearRampToValueAtTime(0,o+.18),r.start(o),r.stop(o+.18)})}checkLowHealth(t,e){this.lowHealthCooldown>0&&(this.lowHealthCooldown=Math.max(0,this.lowHealthCooldown-e)),t<.25&&this.lowHealthCooldown===0&&(this._playLowHealthWarning(),this.lowHealthCooldown=3)}resetLowHealthWarning(){this.lowHealthCooldown=0}_fireChaingunBurst(){const t=this.ctx;if(!t)return;const n=t.createBuffer(1,Math.floor(t.sampleRate*.06),t.sampleRate);Hi(n);const i=t.createBufferSource();i.buffer=n;const r=t.createBiquadFilter();r.type="bandpass",r.frequency.value=1800,r.Q.value=1.5;const a=t.createGain();Vi(a,t,.001,.01,.05,.4),i.connect(r),r.connect(a),a.connect(t.destination),i.start()}_playExplosion(t){const e=this.ctx;if(!e)return;const n=.55,i=e.createBuffer(1,Math.floor(e.sampleRate*n),e.sampleRate);Hi(i,"brown");const r=e.createBufferSource();r.buffer=i;const a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(2200,e.currentTime),a.frequency.exponentialRampToValueAtTime(80,e.currentTime+n);const o=e.createGain();Vi(o,e,.001,.05,.5,t),r.connect(a),a.connect(o),o.connect(e.destination),r.start()}_playLowHealthWarning(){const t=this.ctx;t&&[0,.18].forEach(e=>{const n=t.createOscillator(),i=t.createGain();n.connect(i),i.connect(t.destination),n.type="square";const r=t.currentTime+e;n.frequency.setValueAtTime(440,r),i.gain.setValueAtTime(0,r),i.gain.linearRampToValueAtTime(.3,r+.02),i.gain.setValueAtTime(.3,r+.1),i.gain.linearRampToValueAtTime(0,r+.15),n.start(r),n.stop(r+.15)})}}const lu=30,Vn=1.2,cx=10;function lx(s,t){var e;for(const n of t){const a=(((e=n.geometry.parameters)==null?void 0:e.radius)??20)+lu;if(s.distanceTo(n.position)<=a)return n}return null}function hx(s){return{enemyPositions:s.enemies.map(t=>t.position.clone()),enemyRotations:s.enemies.map(t=>t.rotation.clone()),asteroidPositions:s.asteroids.map(t=>t.position.clone()),asteroidRotations:s.asteroids.map(t=>t.rotation.clone())}}function ux(s,t){const e=Math.min(s.enemies.length,t.enemyPositions.length);for(let i=0;i<e;i++)s.enemies[i].position.copy(t.enemyPositions[i]),s.enemies[i].rotation.copy(t.enemyRotations[i]);const n=Math.min(s.asteroids.length,t.asteroidPositions.length);for(let i=0;i<n;i++)s.asteroids[i].position.copy(t.asteroidPositions[i]),s.asteroids[i].rotation.copy(t.asteroidRotations[i])}class dx{constructor(){mt(this,"state","space");mt(this,"fadeAlpha",0);mt(this,"fadeTimer",0);mt(this,"_snapshot",null);mt(this,"postLaunchCooldown",0)}checkProximity(t,e){return this.state!=="space"||this.postLaunchCooldown>0?null:lx(t,e)}beginLanding(t){this.state==="space"&&(this._snapshot=hx(t),this.state="landing-fadeout",this.fadeTimer=0,this.fadeAlpha=0)}beginLaunch(t){this.state==="on-surface"&&(this._snapshot&&ux(t,this._snapshot),this.state="launch-fadeout",this.fadeTimer=0,this.fadeAlpha=0)}getSectorSnapshot(){return this._snapshot}update(t){let e=!1,n=!1,i=!1;switch(this.state){case"landing-fadeout":this.fadeTimer+=t,this.fadeAlpha=Math.min(1,this.fadeTimer/Vn),this.fadeTimer>=Vn&&(this.state="surface-fadein",this.fadeTimer=0,e=!0);break;case"surface-fadein":this.fadeTimer+=t,this.fadeAlpha=Math.max(0,1-this.fadeTimer/Vn),this.fadeTimer>=Vn&&(this.state="on-surface",this.fadeAlpha=0,i=!0);break;case"launch-fadeout":this.fadeTimer+=t,this.fadeAlpha=Math.min(1,this.fadeTimer/Vn),this.fadeTimer>=Vn&&(this.state="space-fadein",this.fadeTimer=0,n=!0);break;case"space-fadein":this.fadeTimer+=t,this.fadeAlpha=Math.max(0,1-this.fadeTimer/Vn),this.fadeTimer>=Vn&&(this.state="space",this.fadeAlpha=0,this.postLaunchCooldown=cx);break}return this.postLaunchCooldown>0&&(this.postLaunchCooldown=Math.max(0,this.postLaunchCooldown-t)),{switchToSurface:e,switchToSpace:n,onSurface:i}}}const an=15,on=-8,hu=8,fx=[{name:"Laser Ammo Pack",desc:"+30 laser capacitor shots.",cost:150,category:"ammo",ammoType:"laser",ammoAmount:30},{name:"Chaingun Ammo Crate",desc:"+120 high-calibre rounds.",cost:200,category:"ammo",ammoType:"chaingun",ammoAmount:120},{name:"Missile Rack",desc:"+5 proximity-fused warheads.",cost:300,category:"ammo",ammoType:"missile",ammoAmount:5},{name:"Plasma Cannon",desc:"Experimental arc-discharge weapon.",cost:1200,category:"weapon"},{name:"Shield Array I",desc:"+25 maximum shield HP.",cost:400,category:"upgrade",upgradeType:"shields",upgradeBonus:25},{name:"Shield Array II",desc:"+50 maximum shield HP.",cost:800,category:"upgrade",upgradeType:"shields",upgradeBonus:50},{name:"Shield Array III",desc:"+75 maximum shield HP.",cost:1500,category:"upgrade",upgradeType:"shields",upgradeBonus:75},{name:"Engine Boost I",desc:"+5 thrust, +5 top speed.",cost:400,category:"upgrade",upgradeType:"engine",engineThrustBonus:5,engineSpeedBonus:5},{name:"Engine Boost II",desc:"+8 thrust, +8 top speed.",cost:800,category:"upgrade",upgradeType:"engine",engineThrustBonus:8,engineSpeedBonus:8},{name:"Engine Boost III",desc:"+12 thrust, +12 top speed.",cost:1500,category:"upgrade",upgradeType:"engine",engineThrustBonus:12,engineSpeedBonus:12},{name:"Hull Plating I",desc:"+25 maximum hull HP.",cost:400,category:"upgrade",upgradeType:"hull",upgradeBonus:25},{name:"Hull Plating II",desc:"+50 maximum hull HP.",cost:800,category:"upgrade",upgradeType:"hull",upgradeBonus:50},{name:"Hull Plating III",desc:"+75 maximum hull HP.",cost:1500,category:"upgrade",upgradeType:"hull",upgradeBonus:75}];function px(s,t,e){const{success:n}=t.spend(s.cost);return n?(e&&(s.category==="weapon"?e.unlockWeapon(s.name):s.category==="upgrade"&&(s.upgradeType==="shields"&&s.upgradeBonus!==void 0?e.upgradeMaxShield(s.upgradeBonus):s.upgradeType==="hull"&&s.upgradeBonus!==void 0?e.upgradeMaxHealth(s.upgradeBonus):s.upgradeType==="engine"&&e.upgradeEngine(s.engineThrustBonus??0,s.engineSpeedBonus??0))),{success:!0}):{success:!1}}function mx(s,t=()=>0){const e=new Tn,n=t(an,on,s),i=new ee({color:1716048,flatShading:!0}),r=new ee({color:859960,flatShading:!0}),a=new tn({color:6720}),o=new tn({color:17595}),c=new tn({color:61183}),l=new tn({color:13192}),h=new ye(8,5,8),d=new At(h,i);d.position.set(an,n+2.5,on),e.add(d);const u=new ye(10,.5,10),p=new At(u,r);p.position.set(an,n+5.25,on),e.add(p);const g=new _i(.3,.3,12,6),_=new At(g,a);_.position.set(an+5.5,n+6,on),e.add(_);const m=new ye(4.5,1.6,.3),f=new At(m,o);f.position.set(an+5.5,n+12,on),e.add(f);const y=new Cn(.55,8,6),x=new At(y,c);x.position.set(an+5.5,n+13.2,on),e.add(x);const w=new os(hu,.25,6,48),I=new At(w,l);I.rotation.x=Math.PI/2,I.position.set(an,n+.12,on),e.add(I);const A=new Ts(35071,25,70);A.position.set(an,n+8,on),e.add(A);const T=new Ts(52479,10,30);return T.position.set(an+5.5,n+13,on),e.add(T),e}class gx{constructor(t,e){mt(this,"panel");mt(this,"_isOpen",!1);this.onDismiss=t,this.onBuyAttempt=e,this.panel=this._buildPanel(),document.body.appendChild(this.panel)}get isOpen(){return this._isOpen}show(){this._isOpen=!0,this.panel.style.display="flex"}hide(){this._isOpen=!1,this.panel.style.display="none"}dismiss(){var t;this.hide(),(t=this.onDismiss)==null||t.call(this)}destroy(){this.panel.remove()}_buildPanel(){const t=document.createElement("div");Object.assign(t.style,{display:"none",position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.78)",zIndex:"500",justifyContent:"center",alignItems:"center",fontFamily:"monospace"});const e=document.createElement("div");Object.assign(e.style,{background:"rgba(4,16,36,0.97)",border:"2px solid #00aaff",borderRadius:"8px",padding:"32px 36px",minWidth:"540px",maxWidth:"700px",color:"#cce4ff",boxShadow:"0 0 48px rgba(0,160,255,0.35)",position:"relative",maxHeight:"85vh",overflowY:"auto"});const n=document.createElement("button");n.textContent="✕",Object.assign(n.style,{position:"absolute",top:"12px",right:"14px",background:"transparent",border:"1px solid #004488",borderRadius:"4px",color:"#0077cc",fontSize:"16px",cursor:"pointer",fontFamily:"monospace",padding:"2px 8px",lineHeight:"1.4"}),n.title="Close (ESC)",n.addEventListener("mouseenter",()=>{n.style.color="#00ccff",n.style.borderColor="#0099ee"}),n.addEventListener("mouseleave",()=>{n.style.color="#0077cc",n.style.borderColor="#004488"}),n.addEventListener("click",()=>this.dismiss()),e.appendChild(n);const i=document.createElement("div");i.textContent="⬡  SUPPLY DEPOT",Object.assign(i.style,{fontSize:"22px",letterSpacing:"5px",color:"#00ccff",textAlign:"center",marginBottom:"6px",textShadow:"0 0 14px #0077cc"}),e.appendChild(i);const r=document.createElement("div");r.textContent="Weapons, Munitions & Ship Upgrades",Object.assign(r.style,{fontSize:"12px",color:"#336688",textAlign:"center",marginBottom:"24px",letterSpacing:"2px"}),e.appendChild(r);const a=[{label:"MUNITIONS",filter:c=>c.category==="ammo"||c.category==="weapon"},{label:"SHIP UPGRADES — SHIELDS",filter:c=>c.category==="upgrade"&&c.upgradeType==="shields"},{label:"SHIP UPGRADES — ENGINE",filter:c=>c.category==="upgrade"&&c.upgradeType==="engine"},{label:"SHIP UPGRADES — HULL",filter:c=>c.category==="upgrade"&&c.upgradeType==="hull"}];for(const c of a){const l=fx.filter(c.filter);if(l.length===0)continue;const h=document.createElement("div");h.textContent=c.label,Object.assign(h.style,{fontSize:"11px",color:"#005577",letterSpacing:"3px",marginBottom:"8px",marginTop:"16px",borderBottom:"1px solid #002244",paddingBottom:"4px"}),e.appendChild(h);for(const d of l)e.appendChild(this._buildItemRow(d))}const o=document.createElement("div");return o.textContent="[ ESC ] or ✕ to close",Object.assign(o.style,{textAlign:"center",marginTop:"22px",fontSize:"12px",color:"#334455",letterSpacing:"1px"}),e.appendChild(o),t.appendChild(e),t}_buildItemRow(t){const e=document.createElement("div");Object.assign(e.style,{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0,40,80,0.55)",border:"1px solid #003366",borderRadius:"4px",padding:"12px 14px",marginBottom:"10px",gap:"16px"});const n=document.createElement("div");n.style.flex="1";const i=document.createElement("div");i.textContent=t.name,Object.assign(i.style,{fontSize:"15px",color:"#ddeeff",marginBottom:"4px",fontWeight:"bold"});const r=document.createElement("div");r.textContent=t.desc,Object.assign(r.style,{fontSize:"12px",color:"#5588aa"}),n.appendChild(i),n.appendChild(r);const a=document.createElement("div");Object.assign(a.style,{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"6px",flexShrink:"0"});const o=document.createElement("div");o.textContent=`${t.cost.toLocaleString()} ₢`,Object.assign(o.style,{fontSize:"15px",color:"#ffdd44",whiteSpace:"nowrap"});const c=document.createElement("button");return c.textContent="BUY",Object.assign(c.style,{background:"rgba(0,60,100,0.85)",border:"1px solid #0055aa",borderRadius:"3px",color:"#00aaff",padding:"4px 14px",cursor:"pointer",fontFamily:"monospace",fontSize:"12px",letterSpacing:"1px",opacity:"1"}),c.addEventListener("mouseenter",()=>{c.style.background="rgba(0,80,140,0.9)",c.style.borderColor="#0088cc",c.style.color="#44ccff"}),c.addEventListener("mouseleave",()=>{c.style.background="rgba(0,60,100,0.85)",c.style.borderColor="#0055aa",c.style.color="#00aaff"}),c.addEventListener("click",()=>{(this.onBuyAttempt?this.onBuyAttempt(t):{success:!1}).success?(c.textContent="PURCHASED",c.style.color="#00ff88",c.style.borderColor="#00aa55",c.style.background="rgba(0,60,30,0.85)"):(c.textContent="NEED CREDITS",c.style.color="#ff6644",c.style.borderColor="#aa2200",c.style.background="rgba(60,10,0,0.85)"),setTimeout(()=>{c.textContent="BUY",c.style.color="#00aaff",c.style.borderColor="#0055aa",c.style.background="rgba(0,60,100,0.85)"},1500)}),a.appendChild(o),a.appendChild(c),e.appendChild(n),e.appendChild(a),e}}const _x=6,uu=1.7,Pe=0,Le=-12,du=6,ki=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],xx=.5*(Math.sqrt(3)-1),Ss=(3-Math.sqrt(3))/6;let uh=-1;const He=new Uint8Array(512);function vx(s){if(s===uh)return;uh=s;let t=(s>>>0)+1;function e(){t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}for(let n=0;n<256;n++)He[n]=n;for(let n=255;n>0;n--){const i=Math.floor(e()*(n+1))&255,r=He[n];He[n]=He[i],He[i]=r}for(let n=0;n<256;n++)He[256+n]=He[n]}function co(s,t){const e=(s+t)*xx,n=Math.floor(s+e),i=Math.floor(t+e),r=(n+i)*Ss,a=s-(n-r),o=t-(i-r),c=a>o?1:0,l=a>o?0:1,h=a-c+Ss,d=o-l+Ss,u=a-1+2*Ss,p=o-1+2*Ss,g=n&255,_=i&255,m=He[g+He[_]]%8,f=He[g+c+He[_+l]]%8,y=He[g+1+He[_+1]]%8;let x=0,w=.5-a*a-o*o;return w>0&&(w*=w,x+=w*w*(ki[m][0]*a+ki[m][1]*o)),w=.5-h*h-d*d,w>0&&(w*=w,x+=w*w*(ki[f][0]*h+ki[f][1]*d)),w=.5-u*u-p*p,w>0&&(w*=w,x+=w*w*(ki[y][0]*u+ki[y][1]*p)),70*x}function jr(s,t,e){vx(e);const n=co(s*.04,t*.04)*4+co(s*.09,t*.09)*2+co(s*.2,t*.2)*.8,i=Math.sqrt(s*s+t*t),r=i<30?0:Math.min(1,(i-30)/35);return n*r}function Mx(s){const n=new Is(500,500,50,50);n.rotateX(-Math.PI/2);const i=n.attributes.position;for(let a=0;a<i.count;a++)i.setY(a,jr(i.getX(a),i.getZ(a),s));i.needsUpdate=!0,n.computeVertexNormals();const r=new ee({color:10516552,flatShading:!0,side:un});return new At(n,r)}function yx(s){const t=new Tn,e=jr(Pe,Le,s),n=new ee({color:8952234,flatShading:!0}),i=new ee({color:4478310,flatShading:!0}),r=new tn({color:4500223}),a=new ee({color:2236979,flatShading:!0}),o=new tn({color:16737792}),c=new ee({color:3359829,flatShading:!0}),l=new tn({color:16763904}),h=new ye(2.2,1.4,8),d=new At(h,n);d.position.set(Pe,e+1.5,Le),t.add(d);const u=new ye(5,.3,3.5),p=new At(u,i);p.position.set(Pe-3.6,e+1.25,Le+.5),t.add(p);const g=new At(u,i);g.position.set(Pe+3.6,e+1.25,Le+.5),t.add(g);const _=new ns(1.1,2.8,8),m=new At(_,n);m.rotation.x=Math.PI/2,m.position.set(Pe,e+1.5,Le+5.4),t.add(m);const f=new Cn(.75,8,6,0,Math.PI*2,0,Math.PI/2),y=new At(f,r);y.position.set(Pe,e+2.2,Le+2.2),t.add(y);const x=new _i(.45,.6,2.2,8);for(const R of[-.75,.75]){const F=new At(x,a);F.rotation.x=Math.PI/2,F.position.set(Pe+R,e+1.3,Le-4.1),t.add(F);const O=new Io(.44,8),W=new At(O,o);W.rotation.x=-Math.PI/2,W.position.set(Pe+R,e+1.3,Le-5.3),t.add(W)}const w=new _i(.1,.15,1,6);for(const[R,F]of[[-.8,2.5],[.8,2.5],[-.8,-2.5],[.8,-2.5]]){const O=new At(w,c);O.position.set(Pe+R,e+.8,Le+F),t.add(O)}const I=new os(du*.85,.25,6,48),A=new At(I,l);A.rotation.x=Math.PI/2,A.position.set(Pe,e+.1,Le),t.add(A);const T=new ns(1.2,4,6),P=new At(T,new tn({color:16729088}));P.rotation.x=Math.PI/2,P.position.set(Pe,e+.3,Le/2),t.add(P);const S=new Ts(4491519,15,100);S.position.set(Pe,e+6,Le),t.add(S);const v=new Ts(16733440,8,30);return v.position.set(Pe,e+1.3,Le-5),t.add(v),{marker:d,group:t}}function Sx(s){const t=new Yh,e=new St(13928522);t.background=e,t.fog=new Lo(e,180,460);const n=new Zh(7377088,1.8);t.add(n);const i=new jh(16769152,5);i.position.set(3,5,2),t.add(i),t.add(Mx(s));const{marker:r,group:a}=yx(s);return t.add(a),t.add(mx(s,jr)),{scene:t,shipMarker:r}}class Ex{constructor(t){mt(this,"seed");mt(this,"keys",{});mt(this,"_eLatch",!1);mt(this,"_onKeyDown");mt(this,"_onKeyUp");this.seed=t,this._onKeyDown=e=>{const n=e.key.toLowerCase();this.keys[n]=!0,n==="e"&&(this._eLatch=!0)},this._onKeyUp=e=>{this.keys[e.key.toLowerCase()]=!1}}attach(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.keys={},this._eLatch=!1}update(t,e,n){const i=Math.min(t,.1),r=_x,a=new xi().setFromEuler(new Ye(0,n.y,0,"YXZ")),o=new D(0,0,-1).applyQuaternion(a),c=new D(1,0,0).applyQuaternion(a);this.keys.w&&e.addScaledVector(o,r*i),this.keys.s&&e.addScaledVector(o,-r*i),this.keys.a&&e.addScaledVector(c,-r*i),this.keys.d&&e.addScaledVector(c,r*i);const l=jr(e.x,e.z,this.seed);e.y=l+uu;const h=e.x-Pe,d=e.z-Le,u=Math.sqrt(h*h+d*d)<=du,p=this._eLatch;return this._eLatch=!1,{nearShip:u,launchRequested:u&&p}}}const wx=15,dh=.5,fh=.5,lo=3,Tr=.5,Ax=2,br=["Cygnus Expanse","Orion Reach","Perseus Arm","Sagittarius Deep","Vela Corridor","Hydra Void","Centaurus Drift","Aquila Passage","Lyra Basin","Scorpius Rift","Taurus Cloud","Gemini Cluster","Andromeda Fringe","Cassiopeia Shoal","Eridanus Expanse"];function Tx(s){const t=((s-1)%br.length+br.length)%br.length;return`Sector ${s} — ${br[t]}`}function bx(s,t){return s.distanceTo(t.position)<=wx}class Rx{constructor(t=1){mt(this,"state","idle");mt(this,"flashAlpha",0);mt(this,"nameAlpha",0);mt(this,"sectorId");mt(this,"timer",0);mt(this,"cooldownTimer",0);this.sectorId=t}canWarp(){return this.state==="idle"&&this.cooldownTimer<=0}beginWarp(){this.canWarp()&&(this.state="warp-out",this.timer=0,this.flashAlpha=0,this.nameAlpha=0)}reset(t=1){this.sectorId=t,this.state="idle",this.timer=0,this.cooldownTimer=0,this.flashAlpha=0,this.nameAlpha=0}update(t){let e=!1;switch(this.state){case"warp-out":this.timer+=t,this.flashAlpha=Math.min(1,this.timer/dh),this.timer>=dh&&(e=!0,this.sectorId++,this.state="warp-in",this.timer=0,this.flashAlpha=1);break;case"warp-in":this.timer+=t,this.flashAlpha=Math.max(0,1-this.timer/fh),this.timer>=fh&&(this.state="showing-name",this.timer=0,this.flashAlpha=0,this.nameAlpha=0);break;case"showing-name":{this.timer+=t;const n=this.timer;n<Tr?this.nameAlpha=n/Tr:n<lo-Tr?this.nameAlpha=1:n<lo?this.nameAlpha=(lo-n)/Tr:(this.nameAlpha=0,this.state="idle",this.timer=0,this.cooldownTimer=Ax);break}case"idle":this.cooldownTimer>0&&(this.cooldownTimer=Math.max(0,this.cooldownTimer-t));break}return{warpNow:e}}}const Cx=100,Px=100,fu=30,pu=120,ph=4,mh=.15,Lx=20,Qt=new Yh;Qt.background=new St(5);Qt.fog=new Po(5,.005);const Dx=new Zh(4478327,2.5);Qt.add(Dx);const mu=new jh(16772829,2.5);mu.position.set(5,8,-3);Qt.add(mu);const te=new Ie(75,window.innerWidth/window.innerHeight,.1,2e3),gu=new Ts(16777215,1.2,3);gu.position.set(0,.3,-.6);te.add(gu);const ie=Y_();te.add(ie.group);Qt.add(te);const je=new Ie(75,window.innerWidth/window.innerHeight,.1,2e3);rx();const _u=2e3,Cr=new Float32Array(_u*3);for(let s=0;s<_u;s++){const t=Math.random()*Math.PI*2,e=Math.acos(2*Math.random()-1),n=800+Math.random()*200;Cr[s*3]=n*Math.sin(e)*Math.cos(t),Cr[s*3+1]=n*Math.sin(e)*Math.sin(t),Cr[s*3+2]=n*Math.cos(e)}const xu=new we;xu.setAttribute("position",new en(Cr,3));Qt.add(new W_(xu,new Kh({color:16777215,size:1.5})));const Pn=new G_({antialias:!0});Pn.setSize(window.innerWidth,window.innerHeight);Pn.setPixelRatio(Math.min(window.devicePixelRatio,2));document.body.appendChild(Pn.domElement);const Zr=document.createElement("div");Object.assign(Zr.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"black",opacity:"0",pointerEvents:"none",zIndex:"100",transition:"none"});document.body.appendChild(Zr);const Ze=document.createElement("div");Object.assign(Ze.style,{position:"fixed",bottom:"10%",width:"100%",textAlign:"center",color:"#ffdd88",fontFamily:"monospace",fontSize:"18px",pointerEvents:"none",zIndex:"50",opacity:"0",textShadow:"0 0 8px #ff8800"});Ze.textContent="▲ Walk to your ship ahead to launch ▲";document.body.appendChild(Ze);const pi=document.createElement("div");Object.assign(pi.style,{position:"fixed",top:"20%",width:"100%",textAlign:"center",color:"#00ccff",fontFamily:"monospace",fontSize:"16px",pointerEvents:"none",zIndex:"50",opacity:"0",textShadow:"0 0 8px #0088cc",letterSpacing:"2px"});pi.textContent="⬡  SUPPLY DEPOT nearby";document.body.appendChild(pi);const Qr=document.createElement("div");Object.assign(Qr.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,200,255,0.15)",opacity:"0",pointerEvents:"none",zIndex:"90",transition:"none"});document.body.appendChild(Qr);const ta=document.createElement("div");Object.assign(ta.style,{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background:"radial-gradient(ellipse at center, rgba(255,255,255,1) 0%, rgba(80,140,255,0.9) 40%, rgba(0,20,80,0.95) 100%)",opacity:"0",pointerEvents:"none",zIndex:"200",transition:"none"});document.body.appendChild(ta);const is=document.createElement("div");Object.assign(is.style,{position:"fixed",top:"30%",width:"100%",textAlign:"center",color:"#88ccff",fontFamily:"monospace",fontSize:"28px",letterSpacing:"4px",textTransform:"uppercase",pointerEvents:"none",zIndex:"150",opacity:"0",textShadow:"0 0 20px #4488ff, 0 0 40px #2244ff"});document.body.appendChild(is);const ea=document.createElement("div");Object.assign(ea.style,{position:"fixed",top:"12px",right:"16px",color:"#00ffcc",fontFamily:"monospace",fontSize:"16px",pointerEvents:"none",zIndex:"50",textShadow:"0 0 8px #00cc99",letterSpacing:"1px"});ea.textContent="⬡ 0 CR";document.body.appendChild(ea);const Xt=new ox,me=new Ye(0,0,0,"YXZ"),fn=new t0;fn.attach();const ae=new T0(Cx,Px),Cs=new q0(0),Ln=new m0(Qt,fu),ss=new v0(Qt,pu),Rn=new A0(Qt,eu);let mn="laser",Ki=!1,kt=Fo(Qt,Math.floor(Math.random()*4294967295)),Xi=new Vo(Qt,kt.enemies),mi=!1;const kn=new dx;let bn="space",ws=null,ln=null,Gi=null,wn=null,ci=0,ui=!1;const Xe=new gx(()=>{ui=!0},s=>{const t=px(s,Cs,ae);return t.success&&(Xt.playStorePurchase(),vu(),ie.setHealth(ae.health/ae.maxHealth),ie.setShield(ae.shield/ae.maxShield),fn.thrustBonus=ae.thrustBonus,fn.speedBonus=ae.speedBonus,s.category==="ammo"&&s.ammoAmount!==void 0&&(s.ammoType==="laser"?Ln.addAmmo(s.ammoAmount):s.ammoType==="chaingun"?ss.addAmmo(s.ammoAmount):s.ammoType==="missile"&&Rn.addAmmo(s.ammoAmount),As())),t}),Gn=new Rx(1);ie.setHealth(ae.health/ae.maxHealth);ie.setShield(ae.shield/ae.maxShield);ie.setAmmo(Ln.ammo,Ln.maxAmmo);ie.setActiveWeapon("laser");ie.setCredits(Cs.balance);function vu(){ie.setCredits(Cs.balance),ea.textContent=`⬡ ${Cs.balance} CR`}function As(){mn==="laser"?ie.setAmmo(Ln.ammo,Ln.maxAmmo):mn==="chaingun"?ie.setAmmo(ss.ammo,ss.maxAmmo):ie.setAmmo(Rn.ammo,Rn.maxAmmo)}function Ix(s){const t=s.userData.creditValue??0;Cs.earn(t),vu()}function Mu(s){Ix(s),Qt.remove(s),kt.enemies=kt.enemies.filter(t=>t!==s)}function Ux(){bn==="surface"&&(ln&&(ln.detach(),ln=null),ws=null,fn.attach(),bn="space"),Xe.hide(),ui=!1,pi.style.opacity="0",kt.asteroids.forEach(s=>Qt.remove(s)),Qt.remove(kt.blackHole),kt.enemies.forEach(s=>Qt.remove(s)),kt.planets.forEach(s=>Qt.remove(s)),Xi.reset(),kt=Fo(Qt,Math.floor(Math.random()*4294967295)),Xi=new Vo(Qt,kt.enemies),ae.reset(),ie.setHealth(ae.health/ae.maxHealth),ie.setShield(ae.shield/ae.maxShield),Ln.reset(fu),ss.reset(pu),Rn.reset(eu),Xt.stopChaingunChatter(),Xt.resetLowHealthWarning(),mn="laser",Ki=!1,As(),ie.setActiveWeapon("laser"),te.position.set(0,0,0),me.set(0,0,0),fn.reset(),Zr.style.opacity="0",Ze.style.opacity="0",Ze.textContent="▲ Walk to your ship ahead to launch ▲",Qr.style.opacity="0",ci=0,wn=null,Gn.reset(1),ta.style.opacity="0",is.style.opacity="0",is.textContent="",mi=!1,yu.hide(),Pn.domElement.requestPointerLock()}const yu=sx(Ux);J_(Pn.domElement,(s,t)=>{if(mi)return;const e=kn.state;if(e==="landing-fadeout"||e==="surface-fadein")return;const n=.002;me.y-=s*n,me.x-=t*n,me.x=Math.max(-Math.PI/2.2,Math.min(Math.PI/2.2,me.x)),bn==="surface"&&(me.z=0)});document.addEventListener("mousedown",()=>Xt.resume(),{once:!0});document.addEventListener("keydown",()=>Xt.resume(),{once:!0});document.addEventListener("keydown",s=>{mi||bn==="space"&&(s.key==="1"?(mn="laser",Xt.stopChaingunChatter(),As(),ie.setActiveWeapon("laser"),Xt.playUIClick()):s.key==="2"?(mn="chaingun",As(),ie.setActiveWeapon("chaingun"),Xt.playUIClick()):s.key==="3"&&(mn="missile",Xt.stopChaingunChatter(),As(),ie.setActiveWeapon("missile"),Xt.playUIClick()))});document.addEventListener("keydown",s=>{s.key==="Escape"&&Xe.isOpen&&(Xe.dismiss(),Xt.playUIClick())});document.addEventListener("mousedown",s=>{if(document.pointerLockElement===Pn.domElement&&s.button===0&&!mi&&bn==="space"){if(Ki=!0,mn==="laser"){const t=[...kt.asteroids,...kt.enemies],e=Ln.fire(te.position,te.quaternion,t);if(e.fired&&(Xt.playLaserZap(),ie.setAmmo(e.ammoRemaining,Ln.maxAmmo),e.hit&&e.hitObject)){const n=kt.enemies.includes(e.hitObject);e.hitObject.userData.health<=0?n?(Xt.playEnemyDestroy(),Mu(e.hitObject)):(Xt.playAsteroidDestroy(),kt.asteroids=So(Qt,e.hitObject,kt.asteroids)):n?Xt.playEnemyHit():Xt.playAsteroidHit()}}else if(mn==="missile"){const t=Rn.fire(te.position,te.quaternion);t.fired&&(Xt.playMissileWhoosh(),ie.setAmmo(t.ammoRemaining,Rn.maxAmmo))}}});document.addEventListener("mouseup",s=>{s.button===0&&(Ki=!1)});window.addEventListener("resize",()=>{const s=window.innerWidth/window.innerHeight;te.aspect=s,te.updateProjectionMatrix(),je.aspect=s,je.updateProjectionMatrix(),Pn.setSize(window.innerWidth,window.innerHeight)});let gh=performance.now();function Su(){var r;requestAnimationFrame(Su);const s=performance.now(),t=Math.min((s-gh)/1e3,.1);gh=s,ci>0&&(ci=Math.max(0,ci-t),Qr.style.opacity=String(ci/ph*.4));const{switchToSurface:e,switchToSpace:n,onSurface:i}=kn.update(t);if(Zr.style.opacity=String(kn.fadeAlpha),i&&(me.set(mh,0,0),je.rotation.copy(me)),e){const a=wn?wn.position:Gi??new D,o=Math.abs(Math.floor(a.x*100+a.z*100))%16777215||42;ws=Sx(o),ln=new Ex(o),ln.attach(),fn.detach(),je.position.set(0,uu,0),me.set(mh,0,0),je.rotation.copy(me),je.updateMatrixWorld(!0),bn="surface",Ze.textContent="▲ Walk to your ship ahead to launch ▲",Ze.style.opacity="1",Xe.hide(),ui=!1,pi.style.opacity="0"}if(n){if(ln&&(ln.detach(),ln=null),ws=null,fn.attach(),Xe.hide(),ui=!1,pi.style.opacity="0",wn&&Gi){const o=((r=wn.geometry.parameters)==null?void 0:r.radius)??20,c=Gi.clone().sub(wn.position).normalize(),l=o+lu+40;te.position.copy(wn.position).addScaledVector(c,l)}else Gi&&te.position.copy(Gi);me.set(0,0,0),fn.reset(),bn="space",Ze.style.opacity="0",wn=null,ci=ph}if(bn==="space"){if(te.rotation.copy(me),!mi&&kn.state==="space"){const o=kn.checkProximity(te.position,kt.planets);if(o)Gi=te.position.clone(),wn=o,kn.beginLanding(kt),Xt.stopChaingunChatter(),Ki=!1;else{fn.update(t,me,te.position),te.rotation.copy(me),Ln.update();const c=Ki&&mn==="chaingun",l=ss.update(t,c,te.position,te.quaternion,kt.asteroids);c&&l.some(u=>u.fired)?Xt.startChaingunChatter():c||Xt.stopChaingunChatter();for(const u of l)u.fired&&(ie.setAmmo(u.ammoRemaining,ss.maxAmmo),u.hit&&u.hitObject&&(u.hitObject.userData.health<=0?(Xt.playAsteroidDestroy(),kt.asteroids=So(Qt,u.hitObject,kt.asteroids)):Xt.playAsteroidHit()));const h=[...kt.asteroids,...kt.enemies],d=Rn.update(t,h);for(const u of d){Xt.playMissileExplosion();const p=kt.enemies.includes(u.hitObject);u.hitObject.userData.health<=0?p?(Xt.playEnemyDestroy(),Mu(u.hitObject)):(Xt.playAsteroidDestroy(),kt.asteroids=So(Qt,u.hitObject,kt.asteroids)):p?Xt.playEnemyHit():Xt.playAsteroidHit()}if(mn==="missile"&&d.length>0&&ie.setAmmo(Rn.ammo,Rn.maxAmmo),Xi.update(t,te.position),ci<=0&&Xi.checkPlayerHit(te.position)){const{isDead:u}=ae.applyDamage(Y0);ie.setHealth(ae.health/ae.maxHealth),ie.setShield(ae.shield/ae.maxShield),Xt.checkLowHealth(ae.health/ae.maxHealth,t),u&&(mi=!0,Xt.stopChaingunChatter(),yu.show(),document.exitPointerLock())}Gn.canWarp()&&bx(te.position,kt.blackHole)&&(Gn.beginWarp(),Xt.playWarpActivation(),Xt.stopChaingunChatter(),Ki=!1)}}if(!mi){const{warpNow:o}=Gn.update(t);o&&(kt.asteroids.forEach(c=>Qt.remove(c)),Qt.remove(kt.blackHole),kt.enemies.forEach(c=>Qt.remove(c)),kt.planets.forEach(c=>Qt.remove(c)),Xi.reset(),kt=Fo(Qt,Gn.sectorId),Xi=new Vo(Qt,kt.enemies),te.position.set(0,0,0),me.set(0,0,0),fn.reset(),is.textContent=Tx(Gn.sectorId)),ta.style.opacity=String(Gn.flashAlpha),is.style.opacity=String(Gn.nameAlpha)}const a=[...kt.asteroids.map(o=>({position:o.position,type:"asteroid"})),...kt.enemies.map(o=>({position:o.position,type:"enemy"}))];ie.updateRadar(te.position,te.quaternion,a),Pn.render(Qt,te)}else if(bn==="surface"&&ws&&ln){me.x=Math.max(-Math.PI/3,Math.min(Math.PI/3,me.x)),je.rotation.copy(me);const a=je.position.x-an,o=je.position.z-on,c=Math.sqrt(a*a+o*o),l=c<=hu,h=c<=Lx;!h&&ui&&(ui=!1),l&&!ui&&!Xe.isOpen&&(Xe.show(),Xt.playUIClick(),document.exitPointerLock()),!l&&Xe.isOpen&&Xe.hide(),pi.style.opacity=h&&!Xe.isOpen?"1":"0";const{nearShip:d,launchRequested:u}=ln.update(t,je.position,me);Xe.isOpen?Ze.style.opacity="0":(Ze.textContent=d?"[ E ]  Launch":"▲ Walk to your ship to launch ▲",Ze.style.opacity="1"),u&&!Xe.isOpen&&kn.state==="on-surface"&&kn.beginLaunch(kt),Pn.render(ws.scene,je)}}Su();
