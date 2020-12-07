!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(((t="undefined"!=typeof globalThis?globalThis:t||self).google=t.google||{},t.google.maps=t.google.maps||{},t.google.maps.plugins=t.google.maps.plugins||{},t.google.maps.plugins.loader={}))}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=function(t){return t&&t.Math==Math&&t},o=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||function(){return this}()||Function("return this")(),i=function(t){try{return!!t()}catch(t){return!0}},c=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),a={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,s={f:u&&!a.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:a},f=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},l={}.toString,h=function(t){return l.call(t).slice(8,-1)},p="".split,d=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?p.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},g=function(t){return d(v(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,S=function(t,e){return b.call(t,e)},w=o.document,j=y(w)&&y(w.createElement),E=function(t){return j?w.createElement(t):{}},O=!c&&!i((function(){return 7!=Object.defineProperty(E("div"),"a",{get:function(){return 7}}).a})),T=Object.getOwnPropertyDescriptor,k={f:c?T:function(t,e){if(t=g(t),e=m(e,!0),O)try{return T(t,e)}catch(t){}if(S(t,e))return f(!s.f.call(t,e),t[e])}},L=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,M={f:c?P:function(t,e,n){if(L(t),e=m(e,!0),L(n),O)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},x=c?function(t,e,n){return M.f(t,e,f(1,n))}:function(t,e,n){return t[e]=n,t},C=function(t,e){try{x(o,t,e)}catch(n){o[t]=e}return e},A="__core-js_shared__",I=o[A]||C(A,{}),_=Function.toString;"function"!=typeof I.inspectSource&&(I.inspectSource=function(t){return _.call(t)});var R,N,D,F,G=I.inspectSource,K=o.WeakMap,V="function"==typeof K&&/native code/.test(G(K)),B=n((function(t){(t.exports=function(t,e){return I[t]||(I[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.1",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,z=Math.random(),H=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++U+z).toString(36)},q=B("keys"),J={},W=o.WeakMap;if(V){var Y=I.state||(I.state=new W),Q=Y.get,X=Y.has,Z=Y.set;R=function(t,e){return e.facade=t,Z.call(Y,t,e),e},N=function(t){return Q.call(Y,t)||{}},D=function(t){return X.call(Y,t)}}else{var $=q[F="state"]||(q[F]=H(F));J[$]=!0,R=function(t,e){return e.facade=t,x(t,$,e),e},N=function(t){return S(t,$)?t[$]:{}},D=function(t){return S(t,$)}}var tt,et,nt={set:R,get:N,has:D,enforce:function(t){return D(t)?N(t):R(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=N(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},rt=n((function(t){var e=nt.get,n=nt.enforce,r=String(String).split("String");(t.exports=function(t,e,i,c){var a,u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||S(i,"name")||x(i,"name",e),(a=n(i)).source||(a.source=r.join("string"==typeof e?e:""))),t!==o?(u?!f&&t[e]&&(s=!0):delete t[e],s?t[e]=i:x(t,e,i)):s?t[e]=i:C(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||G(this)}))})),ot=o,it=function(t){return"function"==typeof t?t:void 0},ct=function(t,e){return arguments.length<2?it(ot[t])||it(o[t]):ot[t]&&ot[t][e]||o[t]&&o[t][e]},at=Math.ceil,ut=Math.floor,st=function(t){return isNaN(t=+t)?0:(t>0?ut:at)(t)},ft=Math.min,lt=function(t){return t>0?ft(st(t),9007199254740991):0},ht=Math.max,pt=Math.min,dt=function(t){return function(e,n,r){var o,i=g(e),c=lt(i.length),a=function(t,e){var n=st(t);return n<0?ht(n+e,0):pt(n,e)}(r,c);if(t&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((t||a in i)&&i[a]===n)return t||a||0;return!t&&-1}},vt={includes:dt(!0),indexOf:dt(!1)}.indexOf,gt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype"),yt={f:Object.getOwnPropertyNames||function(t){return function(t,e){var n,r=g(t),o=0,i=[];for(n in r)!S(J,n)&&S(r,n)&&i.push(n);for(;e.length>o;)S(r,n=e[o++])&&(~vt(i,n)||i.push(n));return i}(t,gt)}},mt={f:Object.getOwnPropertySymbols},bt=ct("Reflect","ownKeys")||function(t){var e=yt.f(L(t)),n=mt.f;return n?e.concat(n(t)):e},St=function(t,e){for(var n=bt(e),r=M.f,o=k.f,i=0;i<n.length;i++){var c=n[i];S(t,c)||r(t,c,o(e,c))}},wt=/#|\.prototype\./,jt=function(t,e){var n=Ot[Et(t)];return n==kt||n!=Tt&&("function"==typeof e?i(e):!!e)},Et=jt.normalize=function(t){return String(t).replace(wt,".").toLowerCase()},Ot=jt.data={},Tt=jt.NATIVE="N",kt=jt.POLYFILL="P",Lt=jt,Pt=k.f,Mt=function(t,e){var n,r,i,c,a,u=t.target,s=t.global,f=t.stat;if(n=s?o:f?o[u]||C(u,{}):(o[u]||{}).prototype)for(r in e){if(c=e[r],i=t.noTargetGet?(a=Pt(n,r))&&a.value:n[r],!Lt(s?r:u+(f?".":"#")+r,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;St(c,i)}(t.sham||i&&i.sham)&&x(c,"sham",!0),rt(n,r,c,t)}},xt=Array.isArray||function(t){return"Array"==h(t)},Ct=function(t){return Object(v(t))},At=function(t,e,n){var r=m(e);r in t?M.f(t,r,f(0,n)):t[r]=n},It=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())})),_t=It&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Rt=B("wks"),Nt=o.Symbol,Dt=_t?Nt:Nt&&Nt.withoutSetter||H,Ft=function(t){return S(Rt,t)||(It&&S(Nt,t)?Rt[t]=Nt[t]:Rt[t]=Dt("Symbol."+t)),Rt[t]},Gt=Ft("species"),Kt=function(t,e){var n;return xt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!xt(n.prototype)?y(n)&&null===(n=n[Gt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},Vt=ct("navigator","userAgent")||"",Bt=o.process,Ut=Bt&&Bt.versions,zt=Ut&&Ut.v8;zt?et=(tt=zt.split("."))[0]+tt[1]:Vt&&(!(tt=Vt.match(/Edge\/(\d+)/))||tt[1]>=74)&&(tt=Vt.match(/Chrome\/(\d+)/))&&(et=tt[1]);var Ht,qt=et&&+et,Jt=Ft("species"),Wt=Ft("isConcatSpreadable"),Yt=9007199254740991,Qt="Maximum allowed index exceeded",Xt=qt>=51||!i((function(){var t=[];return t[Wt]=!1,t.concat()[0]!==t})),Zt=(Ht="concat",qt>=51||!i((function(){var t=[];return(t.constructor={})[Jt]=function(){return{foo:1}},1!==t[Ht](Boolean).foo}))),$t=function(t){if(!y(t))return!1;var e=t[Wt];return void 0!==e?!!e:xt(t)};Mt({target:"Array",proto:!0,forced:!Xt||!Zt},{concat:function(t){var e,n,r,o,i,c=Ct(this),a=Kt(c,0),u=0;for(e=-1,r=arguments.length;e<r;e++)if($t(i=-1===e?c:arguments[e])){if(u+(o=lt(i.length))>Yt)throw TypeError(Qt);for(n=0;n<o;n++,u++)n in i&&At(a,u,i[n])}else{if(u>=Yt)throw TypeError(Qt);At(a,u++,i)}return a.length=u,a}});var te=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},ee=function(t,e,n){if(te(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},ne=[].push,re=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=7==t,a=5==t||i;return function(u,s,f,l){for(var h,p,v=Ct(u),g=d(v),y=ee(s,f,3),m=lt(g.length),b=0,S=l||Kt,w=e?S(u,m):n||c?S(u,0):void 0;m>b;b++)if((a||b in g)&&(p=y(h=g[b],b,v),t))if(e)w[b]=p;else if(p)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:ne.call(w,h)}else switch(t){case 4:return!1;case 7:ne.call(w,h)}return i?-1:r||o?o:w}},oe={forEach:re(0),map:re(1),filter:re(2),some:re(3),every:re(4),find:re(5),findIndex:re(6),filterOut:re(7)},ie=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))},ce=Object.defineProperty,ae={},ue=function(t){throw t},se=oe.forEach,fe=ie("forEach"),le=function(t,e){if(S(ae,t))return ae[t];e||(e={});var n=[][t],r=!!S(e,"ACCESSORS")&&e.ACCESSORS,o=S(e,0)?e[0]:ue,a=S(e,1)?e[1]:void 0;return ae[t]=!!n&&!i((function(){if(r&&!c)return!0;var t={length:-1};r?ce(t,1,{enumerable:!0,get:ue}):t[1]=1,n.call(t,o,a)}))}("forEach"),he=fe&&le?[].forEach:function(t){return se(this,t,arguments.length>1?arguments[1]:void 0)};Mt({target:"Array",proto:!0,forced:[].forEach!=he},{forEach:he});var pe=[].join,de=d!=Object,ve=ie("join",",");Mt({target:"Array",proto:!0,forced:de||!ve},{join:function(t){return pe.call(g(this),void 0===t?",":t)}});var ge={};ge[Ft("toStringTag")]="z";var ye="[object z]"===String(ge),me=Ft("toStringTag"),be="Arguments"==h(function(){return arguments}()),Se=ye?h:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),me))?n:be?h(e):"Object"==(r=h(e))&&"function"==typeof e.callee?"Arguments":r},we=ye?{}.toString:function(){return"[object "+Se(this)+"]"};ye||rt(Object.prototype,"toString",we,{unsafe:!0});var je=o.Promise,Ee=M.f,Oe=Ft("toStringTag"),Te=Ft("species"),ke={},Le=Ft("iterator"),Pe=Array.prototype,Me=Ft("iterator"),xe=function(t){var e=t.return;if(void 0!==e)return L(e.call(t)).value},Ce=function(t,e){this.stopped=t,this.result=e},Ae=function(t,e,n){var r,o,i,c,a,u,s,f,l=n&&n.that,h=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),d=!(!n||!n.INTERRUPTED),v=ee(e,l,1+h+d),g=function(t){return r&&xe(r),new Ce(!0,t)},y=function(t){return h?(L(t),d?v(t[0],t[1],g):v(t[0],t[1])):d?v(t,g):v(t)};if(p)r=t;else{if("function"!=typeof(o=function(t){if(null!=t)return t[Me]||t["@@iterator"]||ke[Se(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(f=o)&&(ke.Array===f||Pe[Le]===f)){for(i=0,c=lt(t.length);c>i;i++)if((a=y(t[i]))&&a instanceof Ce)return a;return new Ce(!1)}r=o.call(t)}for(u=r.next;!(s=u.call(r)).done;){try{a=y(s.value)}catch(t){throw xe(r),t}if("object"==typeof a&&a&&a instanceof Ce)return a}return new Ce(!1)},Ie=Ft("iterator"),_e=!1;try{var Re=0,Ne={next:function(){return{done:!!Re++}},return:function(){_e=!0}};Ne[Ie]=function(){return this},Array.from(Ne,(function(){throw 2}))}catch(t){}var De,Fe,Ge,Ke=Ft("species"),Ve=ct("document","documentElement"),Be=/(iphone|ipod|ipad).*applewebkit/i.test(Vt),Ue="process"==h(o.process),ze=o.location,He=o.setImmediate,qe=o.clearImmediate,Je=o.process,We=o.MessageChannel,Ye=o.Dispatch,Qe=0,Xe={},Ze="onreadystatechange",$e=function(t){if(Xe.hasOwnProperty(t)){var e=Xe[t];delete Xe[t],e()}},tn=function(t){return function(){$e(t)}},en=function(t){$e(t.data)},nn=function(t){o.postMessage(t+"",ze.protocol+"//"+ze.host)};He&&qe||(He=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Xe[++Qe]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},De(Qe),Qe},qe=function(t){delete Xe[t]},Ue?De=function(t){Je.nextTick(tn(t))}:Ye&&Ye.now?De=function(t){Ye.now(tn(t))}:We&&!Be?(Ge=(Fe=new We).port2,Fe.port1.onmessage=en,De=ee(Ge.postMessage,Ge,1)):o.addEventListener&&"function"==typeof postMessage&&!o.importScripts&&ze&&"file:"!==ze.protocol&&!i(nn)?(De=nn,o.addEventListener("message",en,!1)):De=Ze in E("script")?function(t){Ve.appendChild(E("script")).onreadystatechange=function(){Ve.removeChild(this),$e(t)}}:function(t){setTimeout(tn(t),0)});var rn,on,cn,an,un,sn,fn,ln,hn={set:He,clear:qe},pn=k.f,dn=hn.set,vn=o.MutationObserver||o.WebKitMutationObserver,gn=o.document,yn=o.process,mn=o.Promise,bn=pn(o,"queueMicrotask"),Sn=bn&&bn.value;Sn||(rn=function(){var t,e;for(Ue&&(t=yn.domain)&&t.exit();on;){e=on.fn,on=on.next;try{e()}catch(t){throw on?an():cn=void 0,t}}cn=void 0,t&&t.enter()},!Be&&!Ue&&vn&&gn?(un=!0,sn=gn.createTextNode(""),new vn(rn).observe(sn,{characterData:!0}),an=function(){sn.data=un=!un}):mn&&mn.resolve?(fn=mn.resolve(void 0),ln=fn.then,an=function(){ln.call(fn,rn)}):an=Ue?function(){yn.nextTick(rn)}:function(){dn.call(o,rn)});var wn,jn,En,On,Tn,kn,Ln,Pn=Sn||function(t){var e={fn:t,next:void 0};cn&&(cn.next=e),on||(on=e,an()),cn=e},Mn=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=te(e),this.reject=te(n)},xn={f:function(t){return new Mn(t)}},Cn=function(t,e){if(L(t),y(e)&&e.constructor===t)return e;var n=xn.f(t);return(0,n.resolve)(e),n.promise},An=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},In=hn.set,_n=Ft("species"),Rn="Promise",Nn=nt.get,Dn=nt.set,Fn=nt.getterFor(Rn),Gn=je,Kn=o.TypeError,Vn=o.document,Bn=o.process,Un=ct("fetch"),zn=xn.f,Hn=zn,qn=!!(Vn&&Vn.createEvent&&o.dispatchEvent),Jn="function"==typeof PromiseRejectionEvent,Wn="unhandledrejection",Yn=Lt(Rn,(function(){if(!(G(Gn)!==String(Gn))){if(66===qt)return!0;if(!Ue&&!Jn)return!0}if(qt>=51&&/native code/.test(Gn))return!1;var t=Gn.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[_n]=e,!(t.then((function(){}))instanceof e)})),Qn=Yn||!function(t,e){if(!e&&!_e)return!1;var n=!1;try{var r={};r[Ie]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){Gn.all(t).catch((function(){}))})),Xn=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Zn=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;Pn((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var c,a,u,s=n[i++],f=o?s.ok:s.fail,l=s.resolve,h=s.reject,p=s.domain;try{f?(o||(2===t.rejection&&nr(t),t.rejection=1),!0===f?c=r:(p&&p.enter(),c=f(r),p&&(p.exit(),u=!0)),c===s.promise?h(Kn("Promise-chain cycle")):(a=Xn(c))?a.call(c,l,h):l(c)):h(r)}catch(t){p&&!u&&p.exit(),h(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&tr(t)}))}},$n=function(t,e,n){var r,i;qn?((r=Vn.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),o.dispatchEvent(r)):r={promise:e,reason:n},!Jn&&(i=o["on"+t])?i(r):t===Wn&&function(t,e){var n=o.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},tr=function(t){In.call(o,(function(){var e,n=t.facade,r=t.value;if(er(t)&&(e=An((function(){Ue?Bn.emit("unhandledRejection",r,n):$n(Wn,n,r)})),t.rejection=Ue||er(t)?2:1,e.error))throw e.value}))},er=function(t){return 1!==t.rejection&&!t.parent},nr=function(t){In.call(o,(function(){var e=t.facade;Ue?Bn.emit("rejectionHandled",e):$n("rejectionhandled",e,t.value)}))},rr=function(t,e,n){return function(r){t(e,r,n)}},or=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,Zn(t,!0))},ir=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw Kn("Promise can't be resolved itself");var r=Xn(e);r?Pn((function(){var n={done:!1};try{r.call(e,rr(ir,n,t),rr(or,n,t))}catch(e){or(n,e,t)}})):(t.value=e,t.state=1,Zn(t,!1))}catch(e){or({done:!1},e,t)}}};Yn&&(Gn=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,Gn,Rn),te(t),wn.call(this);var e=Nn(this);try{t(rr(ir,e),rr(or,e))}catch(t){or(e,t)}},(wn=function(t){Dn(this,{type:Rn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)rt(t,r,e[r],n);return t}(Gn.prototype,{then:function(t,e){var n,r,o,i=Fn(this),c=zn((n=Gn,void 0===(o=L(this).constructor)||null==(r=L(o)[Ke])?n:te(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=Ue?Bn.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&Zn(i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),jn=function(){var t=new wn,e=Nn(t);this.promise=t,this.resolve=rr(ir,e),this.reject=rr(or,e)},xn.f=zn=function(t){return t===Gn||t===En?new jn(t):Hn(t)},"function"==typeof je&&(On=je.prototype.then,rt(je.prototype,"then",(function(t,e){var n=this;return new Gn((function(t,e){On.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof Un&&Mt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return Cn(Gn,Un.apply(o,arguments))}}))),Mt({global:!0,wrap:!0,forced:Yn},{Promise:Gn}),kn=Rn,Ln=!1,(Tn=Gn)&&!S(Tn=Ln?Tn:Tn.prototype,Oe)&&Ee(Tn,Oe,{configurable:!0,value:kn}),function(t){var e=ct(t),n=M.f;c&&e&&!e[Te]&&n(e,Te,{configurable:!0,get:function(){return this}})}(Rn),En=ct(Rn),Mt({target:Rn,stat:!0,forced:Yn},{reject:function(t){var e=zn(this);return e.reject.call(void 0,t),e.promise}}),Mt({target:Rn,stat:!0,forced:Yn},{resolve:function(t){return Cn(this,t)}}),Mt({target:Rn,stat:!0,forced:Qn},{all:function(t){var e=this,n=zn(e),r=n.resolve,o=n.reject,i=An((function(){var n=te(e.resolve),i=[],c=0,a=1;Ae(t,(function(t){var u=c++,s=!1;i.push(void 0),a++,n.call(e,t).then((function(t){s||(s=!0,i[u]=t,--a||r(i))}),o)})),--a||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=zn(e),r=n.reject,o=An((function(){var o=te(e.resolve);Ae(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});for(var cr in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var ar=o[cr],ur=ar&&ar.prototype;if(ur&&ur.forEach!==he)try{x(ur,"forEach",he)}catch(t){ur.forEach=he}}function sr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var fr="__googleMapsScriptId",lr=function(){function t(e){var n=e.apiKey,r=e.channel,o=e.client,i=e.id,c=void 0===i?fr:i,a=e.libraries,u=void 0===a?[]:a,s=e.language,f=e.region,l=e.version,h=e.mapIds,p=e.nonce,d=e.retries,v=void 0===d?3:d,g=e.url,y=void 0===g?"https://maps.googleapis.com/maps/api/js":g;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=l,this.apiKey=n,this.channel=r,this.client=o,this.id=c||fr,this.libraries=u,this.language=s,this.region=f,this.mapIds=h,this.nonce=p,this.retries=v,this.url=y,t.instance){if(!function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(e)){if((r=e.length)!=n.length)return!1;for(o=r;0!=o--;)if(!t(e[o],n[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((r=(i=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var c=i[o];if(!t(e[c],n[c]))return!1}return!0}return e!=e&&n!=n}(this.options,t.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(t.instance.options)));return t.instance}t.instance=this}var e,n,r;return e=t,(n=[{key:"createUrl",value:function(){var t=this.url;return t+="?callback=".concat(this.CALLBACK),this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),t}},{key:"load",value:function(){return this.loadPromise()}},{key:"loadPromise",value:function(){var t=this;return new Promise((function(e,n){t.loadCallback((function(t){t?n(t):e()}))}))}},{key:"loadCallback",value:function(t){this.callbacks.push(t),this.execute()}},{key:"setScript",value:function(){if(document.getElementById(this.id))this.callback();else{var t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}}},{key:"deleteScript",value:function(){var t=document.getElementById(this.id);t&&t.remove()}},{key:"resetIfRetryingFailed",value:function(){var t=this.retries+1;this.done&&!this.loading&&this.errors.length>=t&&(this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[])}},{key:"loadErrorCallback",value:function(t){var e=this;if(this.errors.push(t),this.errors.length<=this.retries){var n=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Google Maps script, retrying in ".concat(n," ms.")),setTimeout((function(){e.deleteScript(),e.setScript()}),n)}else this.onerrorEvent=t,this.callback()}},{key:"setCallback",value:function(){window.__googleMapsCallback=this.callback.bind(this)}},{key:"callback",value:function(){var t=this;this.done=!0,this.loading=!1,this.callbacks.forEach((function(e){e(t.onerrorEvent)})),this.callbacks=[]}},{key:"execute",value:function(){window.google&&window.google.maps&&window.google.maps.version&&(console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.This may result in undesirable behavior as script parameters may not match."),this.callback()),this.resetIfRetryingFailed(),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}},{key:"options",get:function(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}}])&&sr(e.prototype,n),r&&sr(e,r),t}();t.DEFAULT_ID=fr,t.Loader=lr,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.umd.js.map
