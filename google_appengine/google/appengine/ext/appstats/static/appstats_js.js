/* Copyright 2008-9 Google Inc. All Rights Reserved. */ (function(){function e(a){throw a;}var h=true,i=null,k=false,aa=Object,l=Error,ba=undefined,ca=parseInt,da=document;function ea(a,b){return a.currentTarget=b}function fa(a,b){return a.keyCode=b}function ga(a,b){return a.type=b}function ha(a,b){return a.length=b}function ia(a,b){return a.className=b}function ja(a,b){return a.target=b}
var ka="appendChild",m="push",la="relatedTarget",ma="slice",n="replace",na="nodeType",oa="preventDefault",q="indexOf",s="dispatchEvent",pa="capture",qa="nodeName",ra="charCode",t="keyCode",u="firstChild",sa="setAttribute",ta="handleEvent",w="type",ua="nextSibling",va="setActive",wa="toString",x="length",xa="propertyIsEnumerable",y="prototype",z="split",ya="stopPropagation",za="style",Aa="body",Ba="removeChild",A="target",B="call",C="apply",Ca="navigator",D="parentNode",Da="join",Ea="nodeValue",E,
F=this,Fa=function(a,b,c){a=a[z](".");c=c||F;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a[x]&&(d=a.shift());)if(!a[x]&&b!==ba)c[d]=b;else c=c[d]?c[d]:(c[d]={})},Ga=function(a,b){a=a[z](".");b=b||F;for(var c;c=a.shift();)if(b[c])b=b[c];else return i;return b},Ha=function(){},Ia=function(a){a.T=function(){return a.Vb||(a.Vb=new a)}},Ja=function(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof aa)&&aa[y][wa][B](a)=="[object Array]"||typeof a[x]=="number"&&
typeof a.splice!="undefined"&&typeof a[xa]!="undefined"&&!a[xa]("splice"))return"array";if(!(a instanceof aa)&&(aa[y][wa][B](a)=="[object Function]"||typeof a[B]!="undefined"&&typeof a[xa]!="undefined"&&!a[xa]("call")))return"function"}else return"null";else if(b=="function"&&typeof a[B]=="undefined")return"object";return b},Ka=function(a){return Ja(a)=="array"},La=function(a){var b=Ja(a);return b=="array"||b=="object"&&typeof a[x]=="number"},I=function(a){return typeof a=="string"},J=function(a){return Ja(a)==
"function"},Ma=function(a){a=Ja(a);return a=="object"||a=="array"||a=="function"},K=function(a){if(a.hasOwnProperty&&a.hasOwnProperty(Na))return a[Na];a[Na]||(a[Na]=++Oa);return a[Na]},Na="closure_hashCode_"+Math.floor(Math.random()*2147483648)[wa](36),Oa=0,Pa=function(a){var b=Ja(a);if(b=="object"||b=="array"){if(a.Db)return a.Db[B](a);b=b=="array"?[]:{};for(var c in a)b[c]=Pa(a[c]);return b}return a},Qa=function(a){var b=Array[y][ma][B](arguments,1);return function(){var c=Array[y][ma][B](arguments);
c.unshift[C](c,b);return a[C](this,c)}},L=function(a,b){function c(){}c.prototype=b[y];a.d=b[y];a.prototype=new c;a[y].constructor=a};var M=Array[y],Ra=M[q]?function(a,b,c){return M[q][B](a,b,c)}:function(a,b,c){c=c==i?0:c<0?Math.max(0,a[x]+c):c;if(I(a)){if(!I(b)||b[x]!=1)return-1;return a[q](b,c)}for(c=c;c<a[x];c++)if(c in a&&a[c]===b)return c;return-1},Sa=M.forEach?function(a,b,c){M.forEach[B](a,b,c)}:function(a,b,c){for(var d=a[x],f=I(a)?a[z](""):a,g=0;g<d;g++)g in f&&b[B](c,f[g],g,a)},Ta=M.every?function(a,b,c){return M.every[B](a,b,c)}:function(a,b,c){for(var d=a[x],f=I(a)?a[z](""):a,g=0;g<d;g++)if(g in f&&!b[B](c,f[g],g,a))return k;
return h},Ua=function(a,b){return Ra(a,b)>=0},Va=function(a,b){b=Ra(a,b);var c;if(c=b>=0)M.splice[B](a,b,1)[x]==1;return c},Wa=function(){return M.concat[C](M,arguments)},Xa=function(a){if(Ka(a))return Wa(a);else{for(var b=[],c=0,d=a[x];c<d;c++)b[c]=a[c];return b}},Za=function(a){return M.splice[C](a,Ya(arguments,1))},Ya=function(a,b,c){return arguments[x]<=2?M[ma][B](a,b):M[ma][B](a,b,c)};var $a=function(a,b,c){for(var d in a)b[B](c,a[d],d,a)},ab=function(a,b){var c;if(c=b in a)delete a[b];return c},bb=function(a,b,c){if(b in a)e(l('The object already contains the key "'+b+'"'));a[b]=c},cb=function(a,b,c){if(b in a)return a[b];return c},db=function(a){var b={};for(var c in a)b[a[c]]=c;return b},eb=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],fb=function(a){for(var b,c,d=1;d<arguments[x];d++){c=arguments[d];for(b in c)a[b]=
c[b];for(var f=0;f<eb[x];f++){b=eb[f];if(aa[y].hasOwnProperty[B](c,b))a[b]=c[b]}}},gb=function(){var a=arguments[x];if(a==1&&Ka(arguments[0]))return gb[C](i,arguments[0]);if(a%2)e(l("Uneven number of arguments"));for(var b={},c=0;c<a;c+=2)b[arguments[c]]=arguments[c+1];return b};var hb=function(a){return a[n](/^[\s\xa0]+|[\s\xa0]+$/g,"")},nb=function(a,b){if(b)return a[n](ib,"&amp;")[n](jb,"&lt;")[n](kb,"&gt;")[n](lb,"&quot;");else{if(!mb.test(a))return a;if(a[q]("&")!=-1)a=a[n](ib,"&amp;");if(a[q]("<")!=-1)a=a[n](jb,"&lt;");if(a[q](">")!=-1)a=a[n](kb,"&gt;");if(a[q]('"')!=-1)a=a[n](lb,"&quot;");return a}},ib=/&/g,jb=/</g,kb=/>/g,lb=/\"/g,mb=/[&<>\"]/,pb=function(a,b){var c=0;a=hb(String(a))[z](".");b=hb(String(b))[z](".");for(var d=Math.max(a[x],b[x]),f=0;c==0&&f<d;f++){var g=
a[f]||"",j=b[f]||"",o=new RegExp("(\\d*)(\\D*)","g"),p=new RegExp("(\\d*)(\\D*)","g");do{var r=o.exec(g)||["","",""],v=p.exec(j)||["","",""];if(r[0][x]==0&&v[0][x]==0)break;c=ob(r[1][x]==0?0:ca(r[1],10),v[1][x]==0?0:ca(v[1],10))||ob(r[2][x]==0,v[2][x]==0)||ob(r[2],v[2])}while(c==0)}return c},ob=function(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};(Date.now||function(){return+new Date})();var qb,rb,sb,tb,ub=function(){return F[Ca]?F[Ca].userAgent:i};tb=sb=rb=qb=k;var vb;if(vb=ub()){var wb=F[Ca];qb=vb[q]("Opera")==0;rb=!qb&&vb[q]("MSIE")!=-1;sb=!qb&&vb[q]("WebKit")!=-1;tb=!qb&&!sb&&wb.product=="Gecko"}var xb=qb,N=rb,O=tb,yb=sb,zb=F[Ca],Ab=(zb&&zb.platform||"")[q]("Mac")!=-1,Bb="",Cb;
if(xb&&F.opera){var Db=F.opera.version;Bb=typeof Db=="function"?Db():Db}else{if(O)Cb=/rv\:([^\);]+)(\)|;)/;else if(N)Cb=/MSIE\s+([^\);]+)(\)|;)/;else if(yb)Cb=/WebKit\/(\S+)/;if(Cb){var Eb=Cb.exec(ub());Bb=Eb?Eb[1]:""}}var Fb=Bb,Gb={},Hb=function(a){return Gb[a]||(Gb[a]=pb(Fb,a)>=0)};var Ib,Jb=function(a){return(a=a.className)&&typeof a[z]=="function"?a[z](/\s+/):[]},Kb=function(a){var b=Jb(a),c;c=Ya(arguments,1);for(var d=0,f=0;f<c[x];f++)if(!Ua(b,c[f])){b[m](c[f]);d++}c=d==c[x];ia(a,b[Da](" "));return c},Lb=function(a){var b=Jb(a),c;c=Ya(arguments,1);for(var d=0,f=0;f<b[x];f++)if(Ua(c,b[f])){Za(b,f--,1);d++}c=d==c[x];ia(a,b[Da](" "));return c};var Ob=function(a){return a?new Mb(Nb(a)):Ib||(Ib=new Mb)},Pb=function(a){return I(a)?da.getElementById(a):a},Qb=function(a,b,c,d){d=d||a;b=b&&b!="*"?b.toUpperCase():"";if(d.querySelectorAll&&(b||c)&&(!yb||a.compatMode=="CSS1Compat"||Hb("528")))return d.querySelectorAll(b+(c?"."+c:""));if(c&&d.getElementsByClassName){a=d.getElementsByClassName(c);if(b){d={};for(var f=0,g=0,j;j=a[g];g++)if(b==j[qa])d[f++]=j;ha(d,f);return d}else return a}a=d.getElementsByTagName(b||"*");if(c){d={};for(g=f=0;j=a[g];g++){b=
j.className;if(typeof b[z]=="function"&&Ua(b[z](/\s+/),c))d[f++]=j}ha(d,f);return d}else return a},Sb=function(a,b){$a(b,function(c,d){if(d=="style")a[za].cssText=c;else if(d=="class")ia(a,c);else if(d=="for")a.htmlFor=c;else if(d in Rb)a[sa](Rb[d],c);else a[d]=c})},Rb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",height:"height",width:"width",usemap:"useMap",frameborder:"frameBorder",type:"type"},Ub=function(){return Tb(da,arguments)},Tb=
function(a,b){var c=b[0],d=b[1];if(N&&d&&(d.name||d[w])){c=["<",c];d.name&&c[m](' name="',nb(d.name),'"');if(d[w]){c[m](' type="',nb(d[w]),'"');d=Pa(d);delete d[w]}c[m](">");c=c[Da]("")}var f=a.createElement(c);if(d)if(I(d))ia(f,d);else Sb(f,d);if(b[x]>2){d=function(j){if(j)f[ka](I(j)?a.createTextNode(j):j)};for(c=2;c<b[x];c++){var g=b[c];La(g)&&!(Ma(g)&&g[na]>0)?Sa(Vb(g)?Xa(g):g,d):d(g)}}return f},Wb=function(a){return a&&a[D]?a[D][Ba](a):i},Xb=function(a,b){if(a.contains&&b[na]==1)return a==b||
a.contains(b);if(typeof a.compareDocumentPosition!="undefined")return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b[D];return b==a},Nb=function(a){return a[na]==9?a:a.ownerDocument||a.document},Yb=function(a,b){if("textContent"in a)a.textContent=b;else if(a[u]&&a[u][na]==3){for(;a.lastChild!=a[u];)a[Ba](a.lastChild);a[u].data=b}else{for(var c;c=a[u];)a[Ba](c);a[ka](Nb(a).createTextNode(b))}},Zb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},$b={IMG:" ",BR:"\n"},ac=function(a){var b=
a.getAttributeNode("tabindex");if(b&&b.specified){a=a.tabIndex;return typeof a=="number"&&a>=0}return k},bc=function(a,b){if(b)a.tabIndex=0;else a.removeAttribute("tabIndex")},cc=function(a,b,c){if(!(a[qa]in Zb))if(a[na]==3)c?b[m](String(a[Ea])[n](/(\r\n|\r|\n)/g,"")):b[m](a[Ea]);else if(a[qa]in $b)b[m]($b[a[qa]]);else for(a=a[u];a;){cc(a,b,c);a=a[ua]}},Vb=function(a){if(a&&typeof a[x]=="number")if(Ma(a))return typeof a.item=="function"||typeof a.item=="string";else if(J(a))return typeof a.item==
"function";return k},Mb=function(a){this.H=a||F.document||da};E=Mb[y];E.Ga=Ob;E.c=function(a){return I(a)?this.H.getElementById(a):a};E.n=function(){return Tb(this.H,arguments)};E.createElement=function(a){return this.H.createElement(a)};E.createTextNode=function(a){return this.H.createTextNode(a)};E.appendChild=function(a,b){a[ka](b)};E.contains=Xb;var dc=function(){};dc[y].Ra=k;dc[y].Wb=function(){return this.Ra};dc[y].L=function(){if(!this.Ra){this.Ra=h;this.g()}};dc[y].g=function(){};var P=function(a,b){ga(this,a);ja(this,b);ea(this,this[A])};L(P,dc);E=P[y];E.g=function(){delete this[w];delete this[A];delete this.currentTarget};E.X=k;E.la=h;E.stopPropagation=function(){this.X=h};E.preventDefault=function(){this.la=k};var ec=function(a,b){a&&this.ta(a,b)};L(ec,P);var fc=[1,4,2];E=ec[y];ja(E,i);E.relatedTarget=i;E.offsetX=0;E.offsetY=0;E.clientX=0;E.clientY=0;E.screenX=0;E.screenY=0;E.button=0;fa(E,0);E.charCode=0;E.ctrlKey=k;E.altKey=k;E.shiftKey=k;E.metaKey=k;E.N=i;
E.ta=function(a,b){var c=ga(this,a[w]);ja(this,a[A]||a.srcElement);ea(this,b);if(b=a[la]){if(O)try{b=b[qa]&&b}catch(d){b=i}}else if(c=="mouseover")b=a.fromElement;else if(c=="mouseout")b=a.toElement;this.relatedTarget=b;this.offsetX=a.offsetX!==ba?a.offsetX:a.layerX;this.offsetY=a.offsetY!==ba?a.offsetY:a.layerY;this.clientX=a.clientX!==ba?a.clientX:a.pageX;this.clientY=a.clientY!==ba?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;fa(this,a[t]||0);this.charCode=
a[ra]||(c=="keypress"?a[t]:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.N=a;delete this.la;delete this.X};var gc=function(a,b){return N?a[w]=="click"?b==0:!!(a.N.button&fc[b]):a.N.button==b};ec[y].stopPropagation=function(){this.X=h;if(this.N[ya])this.N[ya]();else this.N.cancelBubble=h};var hc=N&&!Hb("8");
ec[y].preventDefault=function(){this.la=k;var a=this.N;if(a[oa])a[oa]();else{a.returnValue=k;if(hc)try{if(a.ctrlKey||a[t]>=112&&a[t]<=123)fa(a,-1)}catch(b){}}};ec[y].g=function(){ec.d.g[B](this);this.N=i;ja(this,i);ea(this,i);this.relatedTarget=i};var Q=function(a,b){this.rb=b;this.ba=[];if(a>this.rb)e(l("[goog.structs.SimplePool] Initial cannot be greater than max"));for(b=0;b<a;b++)this.ba[m](this.J?this.J():{})};L(Q,dc);Q[y].J=i;Q[y].kb=i;var ic=function(a){if(a.ba[x])return a.ba.pop();return a.J?a.J():{}},kc=function(a,b){a.ba[x]<a.rb?a.ba[m](b):jc(a,b)},jc=function(a,b){if(a.kb)a.kb(b);else if(J(b.L))b.L();else for(var c in b)delete b[c]};Q[y].g=function(){Q.d.g[B](this);for(var a=this.ba;a[x];)jc(this,a.pop());delete this.ba};var lc;var mc=(lc="ScriptEngine"in F&&F.ScriptEngine()=="JScript")?F.ScriptEngineMajorVersion()+"."+F.ScriptEngineMinorVersion()+"."+F.ScriptEngineBuildVersion():"0";var nc=function(){},oc=0;E=nc[y];E.key=0;E.ka=k;E.hb=k;E.ta=function(a,b,c,d,f,g){if(J(a))this.pb=h;else if(a&&a[ta]&&J(a[ta]))this.pb=k;else e(l("Invalid listener argument"));this.ia=a;this.tb=b;this.src=c;ga(this,d);this.capture=!!f;this.Ia=g;this.hb=k;this.key=++oc;this.ka=k};E.handleEvent=function(a){if(this.pb)return this.ia[B](this.Ia||this.src,a);return this.ia[ta][B](this.ia,a)};var pc,qc,rc,sc,tc,uc,vc,wc,xc,yc,zc;
(function(){function a(){return{G:0,B:0}}function b(){return[]}function c(){var G=function(Td){return j[B](G.src,G.key,Td)};return G}function d(){return new nc}function f(){return new ec}var g=lc&&!(pb(mc,"5.7")>=0),j;uc=function(G){j=G};if(g){pc=function(){return ic(o)};qc=function(G){kc(o,G)};rc=function(){return ic(p)};sc=function(G){kc(p,G)};tc=function(){return ic(r)};vc=function(){kc(r,c())};wc=function(){return ic(v)};xc=function(G){kc(v,G)};yc=function(){return ic(H)};zc=function(G){kc(H,
G)};var o=new Q(0,600);o.J=a;var p=new Q(0,600);p.J=b;var r=new Q(0,600);r.J=c;var v=new Q(0,600);v.J=d;var H=new Q(0,600);H.J=f}else{pc=a;qc=Ha;rc=b;sc=Ha;tc=c;vc=Ha;wc=d;xc=Ha;yc=f;zc=Ha}})();var Ac={},R={},Bc={},Cc={},S=function(a,b,c,d,f){if(b)if(Ka(b)){for(var g=0;g<b[x];g++)S(a,b[g],c,d,f);return i}else{d=!!d;var j=R;b in j||(j[b]=pc());j=j[b];if(!(d in j)){j[d]=pc();j.G++}j=j[d];var o=K(a),p;j.B++;if(j[o]){p=j[o];for(g=0;g<p[x];g++){j=p[g];if(j.ia==c&&j.Ia==f){if(j.ka)break;return p[g].key}}}else{p=j[o]=rc();j.G++}g=tc();g.src=a;j=wc();j.ta(c,g,a,b,d,f);c=j.key;g.key=c;p[m](j);Ac[c]=j;Bc[o]||(Bc[o]=rc());Bc[o][m](j);if(a.addEventListener){if(a==F||!a.jb)a.addEventListener(b,g,d)}else a.attachEvent(Dc(b),
g);return c}else e(l("Invalid event type"))},Ec=function(a,b,c,d,f){if(Ka(b)){for(var g=0;g<b[x];g++)Ec(a,b[g],c,d,f);return i}d=!!d;a=Fc(a,b,d);if(!a)return k;for(g=0;g<a[x];g++)if(a[g].ia==c&&a[g][pa]==d&&a[g].Ia==f)return T(a[g].key);return k},T=function(a){if(!Ac[a])return k;var b=Ac[a];if(b.ka)return k;var c=b.src,d=b[w],f=b.tb,g=b[pa];if(c.removeEventListener){if(c==F||!c.jb)c.removeEventListener(d,f,g)}else c.detachEvent&&c.detachEvent(Dc(d),f);c=K(c);f=R[d][g][c];if(Bc[c]){var j=Bc[c];Va(j,
b);j[x]==0&&delete Bc[c]}b.ka=h;f.sb=h;Gc(d,g,c,f);delete Ac[a];return h},Gc=function(a,b,c,d){if(!d.La)if(d.sb){for(var f=0,g=0;f<d[x];f++)if(d[f].ka){var j=d[f].tb;j.src=i;vc(j);xc(d[f])}else{if(f!=g)d[g]=d[f];g++}ha(d,g);d.sb=k;if(g==0){sc(d);delete R[a][b][c];R[a][b].G--;if(R[a][b].G==0){qc(R[a][b]);delete R[a][b];R[a].G--}if(R[a].G==0){qc(R[a]);delete R[a]}}}},Hc=function(a,b,c){var d=0,f=a==i,g=b==i,j=c==i;c=!!c;if(f)$a(Bc,function(p){for(var r=p[x]-1;r>=0;r--){var v=p[r];if((g||b==v[w])&&(j||
c==v[pa])){T(v.key);d++}}});else{a=K(a);if(Bc[a]){a=Bc[a];for(f=a[x]-1;f>=0;f--){var o=a[f];if((g||b==o[w])&&(j||c==o[pa])){T(o.key);d++}}}}return d},Fc=function(a,b,c){var d=R;if(b in d){d=d[b];if(c in d){d=d[c];a=K(a);if(d[a])return d[a]}}return i},Dc=function(a){if(a in Cc)return Cc[a];return Cc[a]="on"+a},Jc=function(a,b,c,d,f){var g=1;b=K(b);if(a[b]){a.B--;a=a[b];if(a.La)a.La++;else a.La=1;try{for(var j=a[x],o=0;o<j;o++){var p=a[o];if(p&&!p.ka)g&=Ic(p,f)!==k}}finally{a.La--;Gc(c,d,b,a)}}return Boolean(g)},
Ic=function(a,b){b=a[ta](b);a.hb&&T(a.key);return b};
uc(function(a,b){if(!Ac[a])return h;a=Ac[a];var c=a[w],d=R;if(!(c in d))return h;d=d[c];var f,g;if(N){f=b||Ga("window.event");b=h in d;var j=k in d;if(b){if(f[t]<0||f.returnValue!=ba)return h;a:{var o=k;if(f[t]==0)try{fa(f,-1);break a}catch(p){o=h}if(o||f.returnValue==ba)f.returnValue=h}}o=yc();o.ta(f,this);f=h;try{if(b){for(var r=rc(),v=o.currentTarget;v;v=v[D])r[m](v);g=d[h];g.B=g.G;for(var H=r[x]-1;!o.X&&H>=0&&g.B;H--){ea(o,r[H]);f&=Jc(g,r[H],c,h,o)}if(j){g=d[k];g.B=g.G;for(H=0;!o.X&&H<r[x]&&g.B;H++){ea(o,
r[H]);f&=Jc(g,r[H],c,k,o)}}}else f=Ic(a,o)}finally{if(r){ha(r,0);sc(r)}o.L();zc(o)}return f}g=new ec(b,this);try{f=Ic(a,g)}finally{g.L()}return f});var Kc=function(a){this.ob=a};L(Kc,dc);var Lc=new Q(0,100);Kc[y].f=function(a,b,c,d,f){if(Ka(b))for(var g=0;g<b[x];g++)this.f(a,b[g],c,d,f);else{a=S(a,b,c||this,d||k,f||this.ob||this);if(this.u)this.u[a]=h;else if(this.V){this.u=ic(Lc);this.u[this.V]=h;this.V=i;this.u[a]=h}else this.V=a}return this};
Kc[y].Q=function(a,b,c,d,f){if(this.V||this.u)if(Ka(b))for(var g=0;g<b[x];g++)this.Q(a,b[g],c,d,f);else{a:{c=c||this;f=f||this.ob||this;d=!!(d||k);if(a=Fc(a,b,d))for(b=0;b<a[x];b++)if(a[b].ia==c&&a[b][pa]==d&&a[b].Ia==f){a=a[b];break a}a=i}if(a){a=a.key;T(a);if(this.u)ab(this.u,a);else if(this.V==a)this.V=i}}return this};var Mc=function(a){if(a.u){for(var b in a.u){T(b);delete a.u[b]}kc(Lc,a.u);a.u=i}else a.V&&T(a.V)};Kc[y].g=function(){Kc.d.g[B](this);Mc(this)};Kc[y].handleEvent=function(){e(l("EventHandler.handleEvent not implemented"))};var Nc=function(){};L(Nc,dc);E=Nc[y];E.jb=h;E.Ma=i;E.db=function(a){this.Ma=a};E.addEventListener=function(a,b,c,d){S(this,a,b,c,d)};E.removeEventListener=function(a,b,c,d){Ec(this,a,b,c,d)};
E.dispatchEvent=function(a){a=a;if(I(a))a=new P(a,this);else if(a instanceof P)ja(a,a[A]||this);else{var b=a;a=new P(a[w],this);fb(a,b)}b=1;var c,d=a[w],f=R;if(d in f){f=f[d];d=h in f;var g;if(d){c=[];for(g=this;g;g=g.Ma)c[m](g);g=f[h];g.B=g.G;for(var j=c[x]-1;!a.X&&j>=0&&g.B;j--){ea(a,c[j]);b&=Jc(g,c[j],a[w],h,a)&&a.la!=k}}if(k in f){g=f[k];g.B=g.G;if(d)for(j=0;!a.X&&j<c[x]&&g.B;j++){ea(a,c[j]);b&=Jc(g,c[j],a[w],k,a)&&a.la!=k}else for(c=this;!a.X&&c&&g.B;c=c.Ma){ea(a,c);b&=Jc(g,c,a[w],k,a)&&a.la!=
k}}a=Boolean(b)}else a=h;return a};E.g=function(){Nc.d.g[B](this);Hc(this);this.Ma=i};var Oc=function(a,b){var c=Nb(a);if(c.defaultView&&c.defaultView.getComputedStyle)if(a=c.defaultView.getComputedStyle(a,""))return a[b];return i},Pc=function(a,b){a[za].display=b?"":"none"},Qc=O?"MozUserSelect":yb?"WebkitUserSelect":i,Rc=function(a,b,c){c=!c?a.getElementsByTagName("*"):i;if(Qc){b=b?"none":"";a[za][Qc]=b;if(c){a=0;for(var d;d=c[a];a++)d[za][Qc]=b}}else if(N||xb){b=b?"on":"";a[sa]("unselectable",b);if(c)for(a=0;d=c[a];a++)d[sa]("unselectable",b)}};var Sc=function(){};Ia(Sc);Sc[y].$b=0;Sc.T();var U=function(a){this.z=a||Ob();this.va=Tc};L(U,Nc);U[y].Ub=Sc.T();var Tc=i,Uc=function(a,b){switch(a){case 1:return b?"disable":"enable";case 2:return b?"highlight":"unhighlight";case 4:return b?"activate":"deactivate";case 8:return b?"select":"unselect";case 16:return b?"check":"uncheck";case 32:return b?"focus":"blur";case 64:return b?"open":"close";default:}e(l("Invalid component state"))};E=U[y];E.ga=i;E.z=i;E.e=k;E.b=i;E.va=i;E.Zb=i;E.k=i;E.q=i;E.w=i;E.xb=k;
var Vc=function(a){return a.ga||(a.ga=":"+(a.Ub.$b++)[wa](36))},Wc=function(a,b){if(a.k&&a.k.w){ab(a.k.w,a.ga);bb(a.k.w,b,a)}a.ga=b};U[y].c=function(){return this.b};var Xc=function(a){return a.fa||(a.fa=new Kc(a))},Yc=function(a,b){if(a==b)e(l("Unable to set parent component"));if(b&&a.k&&a.ga&&a.k.lb(a.ga)&&a.k!=b)e(l("Unable to set parent component"));a.k=b;U.d.db[B](a,b)};E=U[y];E.db=function(a){if(this.k&&this.k!=a)e(l("Method not supported"));U.d.db[B](this,a)};E.Ga=function(){return this.z};
E.n=function(){this.b=this.z.createElement("div")};E.K=function(a){if(this.e)e(l("Component already rendered"));else if(a&&this.Z(a)){this.xb=h;if(!this.z||this.z.H!=Nb(a))this.z=Ob(a);this.Qa(a);this.I()}else e(l("Invalid element to decorate"))};E.Z=function(){return h};E.Qa=function(a){this.b=a};E.I=function(){this.e=h;Zc(this,function(a){!a.e&&a.c()&&a.I()})};E.aa=function(){Zc(this,function(a){a.e&&a.aa()});this.fa&&Mc(this.fa);this.e=k};
E.g=function(){U.d.g[B](this);this.e&&this.aa();if(this.fa){this.fa.L();delete this.fa}Zc(this,function(a){a.L()});!this.xb&&this.b&&Wb(this.b);this.k=this.Zb=this.b=this.w=this.q=i};E.Ba=function(a,b){this.Pa(a,$c(this),b)};
E.Pa=function(a,b,c){if(a.e&&(c||!this.e))e(l("Component already rendered"));if(b<0||b>$c(this))e(l("Child component index out of bounds"));if(!this.w||!this.q){this.w={};this.q=[]}if(a.k==this){this.w[Vc(a)]=a;Va(this.q,a)}else bb(this.w,Vc(a),a);Yc(a,this);Za(this.q,b,0,a);if(a.e&&this.e&&a.k==this){c=this.O();c.insertBefore(a.c(),c.childNodes[b+1]||i)}else if(c){this.b||this.n();c=this.s(b+1);b=this.O();c=c?c.b:i;if(a.e)e(l("Component already rendered"));a.b||a.n();b?b.insertBefore(a.b,c||i):a.z.H[Aa][ka](a.b);
if(!a.k||a.k.e)a.I()}else this.e&&!a.e&&a.b&&a.I()};E.O=function(){return this.b};var ad=function(a){if(a.va==i)a.va="rtl"==(Oc(a.e?a.b:a.z.H[Aa],"direction")||((a.e?a.b:a.z.H[Aa]).currentStyle?(a.e?a.b:a.z.H[Aa]).currentStyle.direction:i)||(a.e?a.b:a.z.H[Aa])[za].direction);return a.va};U[y].ya=function(a){if(this.e)e(l("Component already rendered"));this.va=a};var $c=function(a){return a.q?a.q[x]:0};U[y].lb=function(a){return this.w&&a?cb(this.w,a)||i:i};
U[y].s=function(a){return this.q?this.q[a]||i:i};var Zc=function(a,b,c){a.q&&Sa(a.q,b,c)},bd=function(a,b){return a.q&&b?Ra(a.q,b):-1};U[y].removeChild=function(a,b){if(a){var c=I(a)?a:Vc(a);a=this.lb(c);if(c&&a){ab(this.w,c);Va(this.q,a);if(b){a.aa();a.b&&Wb(a.b)}Yc(a,i)}}if(!a)e(l("Child is not in parent component"));return a};var cd=function(a,b){if(O){a[sa]("role",b);a.fc=b}},dd=function(a,b,c){O&&a[sa]("aria-"+b,c)};var fd=function(a,b,c,d,f){if(!N&&!(yb&&Hb("525")))return h;if(Ab&&f)return ed(a);if(f&&!d)return k;if(N&&!c&&(b==17||b==18))return k;if(N&&d&&b==a)return k;switch(a){case 13:return h;case 27:return!yb}return ed(a)},ed=function(a){if(a>=48&&a<=57)return h;if(a>=96&&a<=106)return h;if(a>=65&&a<=90)return h;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return h;default:return k}};var V=function(a){a&&gd(this,a)};L(V,Nc);E=V[y];E.b=i;E.Ja=i;E.$a=i;E.Ka=i;E.ua=-1;E.ha=-1;
var hd={"3":13,"12":144,"63232":38,"63233":40,"63234":37,"63235":39,"63236":112,"63237":113,"63238":114,"63239":115,"63240":116,"63241":117,"63242":118,"63243":119,"63244":120,"63245":121,"63246":122,"63247":123,"63248":44,"63272":46,"63273":36,"63275":35,"63276":33,"63277":34,"63289":144,"63302":45},id={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},jd={61:187,
59:186},kd=N||yb&&Hb("525");V[y].Mb=function(a){if(kd&&!fd(a[t],this.ua,a.shiftKey,a.ctrlKey,a.altKey))this[ta](a);else this.ha=O&&a[t]in jd?jd[a[t]]:a[t]};V[y].Nb=function(){this.ha=this.ua=-1};
V[y].handleEvent=function(a){var b=a.N,c,d;if(N&&a[w]=="keypress"){c=this.ha;d=c!=13&&c!=27?b[t]:0}else if(yb&&a[w]=="keypress"){c=this.ha;d=b[ra]>=0&&b[ra]<63232&&ed(c)?b[ra]:0}else if(xb){c=this.ha;d=ed(c)?b[t]:0}else{c=b[t]||this.ha;d=b[ra]||0;if(Ab&&d==63&&!c)c=191}var f=c,g=b.keyIdentifier;if(c)if(c>=63232&&c in hd)f=hd[c];else{if(c==25&&a.shiftKey)f=9}else if(g&&g in id)f=id[g];a=f==this.ua;this.ua=f;b=new ld(f,d,a,b);try{this[s](b)}finally{b.L()}};V[y].c=function(){return this.b};
var gd=function(a,b){a.Ka&&a.detach();a.b=b;a.Ja=S(a.b,"keypress",a);a.$a=S(a.b,"keydown",a.Mb,k,a);a.Ka=S(a.b,"keyup",a.Nb,k,a)};V[y].detach=function(){if(this.Ja){T(this.Ja);T(this.$a);T(this.Ka);this.Ka=this.$a=this.Ja=i}this.b=i;this.ua=-1};V[y].g=function(){V.d.g[B](this);this.detach()};var ld=function(a,b,c,d){d&&this.ta(d,void 0);ga(this,"key");fa(this,a);this.charCode=b;this.repeat=c};L(ld,ec);var nd=function(a){for(var b;a;){b=K(a);if(b=md[b])break;a=a.d?a.d.constructor:i}if(b)return J(b.T)?b.T():new b;return i},pd=function(a,b){if(!a)e(l("Invalid class name "+a));if(!J(b))e(l("Invalid decorator function "+b));od[a]=b},md={},od={};var qd=function(){},rd;Ia(qd);E=qd[y];E.ea=function(){};E.n=function(a){return a.Ga().n("div",this.oa(a)[Da](" "),a.Fa)};E.O=function(a){return a};E.na=function(a,b,c){if(a=a.c?a.c():a)if(N&&!Hb("7")){var d=sd(this,Jb(a),b);d[m](b);Qa(c?Kb:Lb,a)[C](i,d)}else c?Kb(a,b):Lb(a,b)};E.Z=function(){return h};
E.K=function(a,b){b.id&&Wc(a,b.id);var c=this.O(b);c&&c[u]?td(a,c[u][ua]?Xa(c.childNodes):c[u]):td(a,i);var d=0,f=this.p(),g=this.p(),j=k,o=k;c=k;var p=Jb(b);Sa(p,function(v){if(!j&&v==f){j=h;if(g==f)o=h}else if(!o&&v==g)o=h;else d|=ud(this,v)},this);a.m=d;if(!j){p[m](f);if(g==f)o=h}o||p[m](g);(a=a.A)&&p[m][C](p,a);if(N&&!Hb("7")){var r=sd(this,p);if(r[x]>0){p[m][C](p,r);c=h}}if(!j||!o||a||c)ia(b,p[Da](" "));return b};E.Za=function(a){ad(a)&&this.ya(a.c(),h);a.j()&&this.xa(a,a.P())};
E.Na=function(a,b){Rc(a,!b,!N&&!xb)};E.ya=function(a,b){this.na(a,this.p()+"-rtl",b)};E.ca=function(a){var b;if(a.v&32&&(b=a.o()))return ac(b);return k};E.xa=function(a,b){var c;if(a.v&32&&(c=a.o())){if(!b&&a.m&32){try{c.blur()}catch(d){}a.m&32&&a.pa(i)}ac(c)!=b&&bc(c,b)}};E.za=function(a,b){Pc(a,b)};E.F=function(a,b,c){var d=a.c();if(d){var f=vd(this,b);f&&this.na(a,f,c);if(O){rd||(rd=gb(1,"disabled",4,"pressed",8,"selected",16,"checked",64,"expanded"));(a=rd[b])&&dd(d,a,c)}}};E.o=function(a){return a.c()};
E.p=function(){return"goog-control"};E.oa=function(a){var b=this.p(),c=[b],d=this.p();d!=b&&c[m](d);b=a.m;for(d=[];b;){var f=b&-b;d[m](vd(this,f));b&=~f}c[m][C](c,d);(a=a.A)&&c[m][C](c,a);N&&!Hb("7")&&c[m][C](c,sd(this,c));return c};
var sd=function(a,b,c){var d=[];if(c)b=b.concat([c]);Sa([],function(f){if(Ta(f,Qa(Ua,b))&&(!c||Ua(f,c)))d[m](f[Da]("_"))});return d},vd=function(a,b){a.Ea||wd(a);return a.Ea[b]},ud=function(a,b){a.ub||xd(a);a=ca(a.ub[b],10);return isNaN(a)?0:a},wd=function(a){var b=a.p();a.Ea=gb(1,b+"-disabled",2,b+"-hover",4,b+"-active",8,b+"-selected",16,b+"-checked",32,b+"-focused",64,b+"-open")},xd=function(a){a.Ea||wd(a);a.ub=db(a.Ea)};var W=function(a,b,c){U[B](this,c);this.a=b||nd(this.constructor);this.Fa=a};L(W,U);E=W[y];E.Fa=i;E.m=0;E.v=39;E.Bb=255;E.Oa=0;E.r=h;E.A=i;E.sa=h;E.Ca=k;E.o=function(){return this.a.o(this)};E.Ha=function(){return this.t||(this.t=new V)};E.mb=function(){return this.a};var yd=function(a,b){if(b){if(a.A)Ua(a.A,b)||a.A[m](b);else a.A=[b];a.a.na(a,b,h)}},zd=function(a,b){if(b&&a.A){Va(a.A,b);if(a.A[x]==0)a.A=i;a.a.na(a,b,k)}};E=W[y];E.na=function(a,b){b?yd(this,a):zd(this,a)};
E.n=function(){var a=this.a.n(this);this.b=a;if(O){var b=this.a.ea();b&&cd(a,b)}this.Ca||this.a.Na(a,k);this.P()||this.a.za(a,k)};E.O=function(){return this.a.O(this.c())};E.Z=function(a){return this.a.Z(a)};E.Qa=function(a){this.b=a=this.a.K(this,a);if(O){var b=this.a.ea();b&&cd(a,b)}this.Ca||this.a.Na(a,k);this.r=a[za].display!="none"};
E.I=function(){W.d.I[B](this);this.a.Za(this);if(this.v&-2){this.sa&&Ad(this,h);if(this.v&32){var a=this.o();if(a){var b=this.Ha();gd(b,a);Xc(this).f(b,"key",this.U).f(a,"focus",this.qa).f(a,"blur",this.pa)}}}};var Ad=function(a,b){var c=Xc(a),d=a.c();if(b){c.f(d,"mouseover",a.Xa).f(d,"mousedown",a.ra).f(d,"mouseup",a.Ya).f(d,"mouseout",a.Wa);N&&c.f(d,"dblclick",a.nb)}else{c.Q(d,"mouseover",a.Xa).Q(d,"mousedown",a.ra).Q(d,"mouseup",a.Ya).Q(d,"mouseout",a.Wa);N&&c.Q(d,"dblclick",a.nb)}};
W[y].aa=function(){W.d.aa[B](this);this.t&&this.t.detach();this.P()&&this.j()&&this.a.xa(this,k)};W[y].g=function(){W.d.g[B](this);if(this.t){this.t.L();delete this.t}delete this.a;this.A=this.Fa=i};var td=function(a,b){a.Fa=b};E=W[y];E.ya=function(a){W.d.ya[B](this,a);var b=this.c();b&&this.a.ya(b,a)};E.Na=function(a){this.Ca=a;var b=this.c();b&&this.a.Na(b,a)};E.P=function(){return this.r};
E.za=function(a,b){if(b||this.r!=a&&this[s](a?"show":"hide")){(b=this.c())&&this.a.za(b,a);this.j()&&this.a.xa(this,a);this.r=a;return h}return k};E.j=function(){return!!!(this.m&1)};E.wa=function(a){var b=this.k;if(!(b&&typeof b.j=="function"&&!b.j())&&Bd(this,1,!a)){if(!a){this[va](k);this.D(k)}this.P()&&this.a.xa(this,a);this.F(1,!a)}};E.D=function(a){Bd(this,2,a)&&this.F(2,a)};E.setActive=function(a){Bd(this,4,a)&&this.F(4,a)};
var Cd=function(a,b){Bd(a,8,b)&&a.F(8,b)},Dd=function(a,b){Bd(a,16,b)&&a.F(16,b)},Ed=function(a,b){Bd(a,32,b)&&a.F(32,b)},Fd=function(a,b){Bd(a,64,b)&&a.F(64,b)};W[y].F=function(a,b){if(this.v&a&&b!=!!(this.m&a)){this.a.F(this,a,b);this.m=b?this.m|a:this.m&~a}};
var Gd=function(a,b,c){if(a.e&&a.m&b&&!c)e(l("Component already rendered"));!c&&a.m&b&&a.F(b,k);a.v=c?a.v|b:a.v&~b},X=function(a,b){return!!(a.Bb&b)&&!!(a.v&b)},Bd=function(a,b,c){return!!(a.v&b)&&!!(a.m&b)!=c&&(!(a.Oa&b)||a[s](Uc(b,c)))&&!a.Wb()};E=W[y];E.Xa=function(a){a[la]&&!Xb(this.c(),a[la])&&this[s]("enter")&&this.j()&&X(this,2)&&this.D(h)};E.Wa=function(a){if(a[la]&&!Xb(this.c(),a[la])&&this[s]("leave")){X(this,4)&&this[va](k);X(this,2)&&this.D(k)}};
E.ra=function(a){if(this.j()){X(this,2)&&this.D(h);if(gc(a,0)){X(this,4)&&this[va](h);this.a.ca(this)&&this.o().focus()}}!this.Ca&&gc(a,0)&&a[oa]()};E.Ya=function(a){if(this.j()){X(this,2)&&this.D(h);this.m&4&&Hd(this,a)&&X(this,4)&&this[va](k)}};E.nb=function(a){this.j()&&Hd(this,a)};var Hd=function(a,b){X(a,16)&&Dd(a,!!!(a.m&16));X(a,8)&&Cd(a,h);X(a,64)&&Fd(a,!!!(a.m&64));var c=new P("action",a);if(b)for(var d=["altKey","ctrlKey","metaKey","shiftKey"],f,g=0;f=d[g];g++)c[f]=b[f];return a[s](c)};
W[y].qa=function(){X(this,32)&&Ed(this,h)};W[y].pa=function(){X(this,4)&&this[va](k);X(this,32)&&Ed(this,k)};W[y].U=function(a){if(this.P()&&this.j()&&this.Va(a)){a[oa]();a[ya]();return h}return k};W[y].Va=function(a){return a[t]==13&&Hd(this,a)};if(!J(W))e(l("Invalid component class "+W));if(!J(qd))e(l("Invalid renderer class "+qd));var Id=K(W);md[Id]=qd;pd("goog-control",function(){return new W(i)});var Jd=function(){};L(Jd,qd);Ia(Jd);Jd[y].n=function(a){return a.Ga().n("div",this.p())};Jd[y].K=function(a,b){if(b.tagName=="HR"){var c=b;b=this.n(a);c[D]&&c[D].insertBefore(b,c);Wb(c)}else Kb(b,this.p());return b};Jd[y].p=function(){return"goog-menuseparator"};var Kd=function(a,b){W[B](this,i,a||Jd.T(),b);Gd(this,1,k);Gd(this,2,k);Gd(this,4,k);Gd(this,32,k);this.m=1};L(Kd,W);Kd[y].I=function(){Kd.d.I[B](this);cd(this.c(),"separator")};pd("goog-menuseparator",function(){return new Kd});var Ld=function(){};Ia(Ld);Ld[y].ea=function(){};var Md=function(a,b,c){if(b)b.tabIndex=c?0:-1};E=Ld[y];E.n=function(a){return a.Ga().n("div",this.oa(a)[Da](" "))};E.O=function(a){return a};E.Z=function(a){return a.tagName=="DIV"};E.K=function(a,b){b.id&&Wc(a,b.id);var c=this.p(),d=k,f=Jb(b);f&&Sa(f,function(g){if(g==c)d=h;else g&&this.eb(a,g,c)},this);d||Kb(b,c);Nd(this,a,b);return b};
E.eb=function(a,b,c){if(b==c+"-disabled")a.wa(k);else if(b==c+"-horizontal")Od(a,"horizontal");else b==c+"-vertical"&&Od(a,"vertical")};var Nd=function(a,b,c){if(c){a=c[u];for(var d;a&&a[D]==c;){d=a[ua];if(a[na]==1){var f;a:{f=void 0;for(var g=Jb(a),j=0,o=g[x];j<o;j++)if(f=g[j]in od?od[g[j]]():i){f=f;break a}f=i}if(f){f.b=a;b.j()||f.wa(k);b.Ba(f);f.K(a)}}else if(!a[Ea]||hb(a[Ea])=="")c[Ba](a);a=d}}};Ld[y].Za=function(a){a=a.c();Rc(a,h,O);if(N)a.hideFocus=h;var b=this.ea();b&&cd(a,b)};Ld[y].o=function(a){return a.c()};
Ld[y].p=function(){return"goog-container"};Ld[y].oa=function(a){var b=this.p(),c=[b,a.W=="horizontal"?b+"-horizontal":b+"-vertical"];a.j()||c[m](b+"-disabled");return c};var Y=function(a,b,c){U[B](this,c);this.a=b||Ld.T();this.W=a||"vertical"};L(Y,U);E=Y[y];E.Xb=i;E.t=i;E.a=i;E.W=i;E.r=h;E.$=h;E.Ta=h;E.l=-1;E.h=i;E.ja=k;E.zb=k;E.R=i;E.o=function(){return this.Xb||this.a.o(this)};E.Ha=function(){return this.t||(this.t=new V(this.o()))};E.mb=function(){return this.a};E.n=function(){this.b=this.a.n(this)};E.O=function(){return this.a.O(this.c())};E.Z=function(a){return this.a.Z(a)};E.Qa=function(a){this.b=this.a.K(this,a);if(a[za].display=="none")this.r=k};
E.I=function(){Y.d.I[B](this);Zc(this,function(b){b.e&&Pd(this,b)},this);var a=this.c();this.a.Za(this);this.za(this.r,h);Xc(this).f(this,"enter",this.Kb).f(this,"highlight",this.Lb).f(this,"unhighlight",this.Tb).f(this,"open",this.Ob).f(this,"close",this.Ib).f(a,"mousedown",this.ra).f(Nb(a),"mouseup",this.Jb).f(a,["mousedown","mouseup","mouseover","mouseout"],this.Hb);this.ca()&&Qd(this,h)};
var Qd=function(a,b){var c=Xc(a),d=a.o();b?c.f(d,"focus",a.qa).f(d,"blur",a.pa).f(a.Ha(),"key",a.U):c.Q(d,"focus",a.qa).Q(d,"blur",a.pa).Q(a.Ha(),"key",a.U)};E=Y[y];E.aa=function(){Rd(this,-1);this.h&&Fd(this.h,k);this.ja=k;Y.d.aa[B](this)};E.g=function(){Y.d.g[B](this);if(this.t){this.t.L();this.t=i}this.a=this.h=this.R=i};E.Kb=function(){return h};
E.Lb=function(a){var b=bd(this,a[A]);if(b>-1&&b!=this.l){var c=this.s(this.l);c&&c.D(k);this.l=b;c=this.s(this.l);this.ja&&c[va](h);if(this.h&&c!=this.h)c.v&64?Fd(c,h):Fd(this.h,k)}dd(this.c(),"activedescendant",a[A].c().id)};E.Tb=function(a){if(a[A]==this.s(this.l))this.l=-1;dd(this.c(),"activedescendant","")};E.Ob=function(a){if((a=a[A])&&a!=this.h&&a.k==this){this.h&&Fd(this.h,k);this.h=a}};E.Ib=function(a){if(a[A]==this.h)this.h=i};
E.ra=function(a){this.$&&Sd(this,h);var b=this.o(),c;a:{if(b)if((c=b.getAttributeNode("tabindex"))&&c.specified){c=b.tabIndex;c=typeof c=="number"&&c>=0;break a}c=k}c?b.focus():a[oa]()};E.Jb=function(){this.ja=k};E.Hb=function(a){var b;a:{b=a[A];if(this.R)for(var c=this.c();b&&b[D]&&b!=c;){var d=b.id;if(d in this.R){b=this.R[d];break a}b=b[D]}b=i}if(b)switch(a[w]){case "mousedown":b.ra(a);break;case "mouseup":b.Ya(a);break;case "mouseover":b.Xa(a);break;case "mouseout":b.Wa(a);break}};E.qa=function(){};
E.pa=function(){Rd(this,-1);this.ja=k;this.h&&Fd(this.h,k)};E.U=function(a){if(this.j()&&$c(this)!=0&&this.Va(a)){a[oa]();a[ya]();return h}return k};
E.Va=function(a){var b=this.s(this.l);if(b&&typeof b.U=="function"&&b.U(a))return h;if(this.h&&this.h!=b&&typeof this.h.U=="function"&&this.h.U(a))return h;switch(a[t]){case 27:if(this.ca())this.o().blur();else return k;break;case 36:Ud(this);break;case 35:Vd(this);break;case 38:if(this.W=="vertical")Wd(this);else return k;break;case 37:if(this.W=="horizontal")ad(this)?Xd(this):Wd(this);else return k;break;case 40:if(this.W=="vertical")Xd(this);else return k;break;case 39:if(this.W=="horizontal")ad(this)?
Wd(this):Xd(this);else return k;break;default:return k}return h};var Pd=function(a,b){var c=b.c();c=c.id||(c.id=Vc(b));if(!a.R)a.R={};a.R[c]=b};Y[y].Ba=function(a,b){Y.d.Ba[B](this,a,b)};Y[y].Pa=function(a,b,c){a.Oa|=2;a.Oa|=64;if(this.ca()||!this.zb)Gd(a,32,k);a.e&&k!=a.sa&&Ad(a,k);a.sa=k;Y.d.Pa[B](this,a,b,c);c&&this.e&&Pd(this,a);b<=this.l&&this.l++};
Y[y].removeChild=function(a,b){var c=bd(this,a);if(c!=-1)if(c==this.l)a.D(k);else c<this.l&&this.l--;(c=a.c())&&c.id&&ab(this.R,c.id);b=a=Y.d[Ba][B](this,a,b);b.e&&h!=b.sa&&Ad(b,h);b.sa=h;return a};var Od=function(a,b){if(a.c())e(l("Component already rendered"));a.W=b};E=Y[y];E.P=function(){return this.r};E.za=function(a,b){if(b||this.r!=a&&this[s](a?"show":"hide")){this.r=a;var c=this.c();if(c){Pc(c,a);this.ca()&&Md(this.a,this.o(),this.$&&this.r);this.r&&!b&&this[s]("aftershow")}return h}return k};
E.j=function(){return this.$};E.wa=function(a){if(this.$!=a&&this[s](a?"enable":"disable")){if(a){this.$=h;Zc(this,function(b){if(b.yb)delete b.yb;else b.wa(h)})}else{Zc(this,function(b){if(b.j())b.wa(k);else b.yb=h});this.ja=this.$=k}this.ca()&&Md(this.a,this.o(),a&&this.r)}};E.ca=function(){return this.Ta};E.xa=function(a){a!=this.Ta&&this.e&&Qd(this,a);this.Ta=a;this.$&&this.r&&Md(this.a,this.o(),a)};var Rd=function(a,b){if(b=a.s(b))b.D(h);else a.l>-1&&a.s(a.l).D(k)};
Y[y].D=function(a){Rd(this,bd(this,a))};var Ud=function(a){Yd(a,function(b,c){return(b+1)%c},$c(a)-1)},Vd=function(a){Yd(a,function(b,c){b--;return b<0?c-1:b},0)},Xd=function(a){Yd(a,function(b,c){return(b+1)%c},a.l)},Wd=function(a){Yd(a,function(b,c){b--;return b<0?c-1:b},a.l)},Yd=function(a,b,c){c=c<0?bd(a,a.h):c;var d=$c(a);c=b(c,d);for(var f=0;f<=d;){var g=a.s(c);if(g&&g.P()&&g.j()&&g.v&2){a.cb(c);return h}f++;c=b(c,d)}return k};Y[y].cb=function(a){Rd(this,a)};var Sd=function(a,b){a.ja=b};var Zd=function(){};L(Zd,qd);Ia(Zd);E=Zd[y];E.p=function(){return"goog-tab"};E.ea=function(){return"tab"};E.n=function(a){var b=Zd.d.n[B](this,a);(a=a.Ua())&&this.fb(b,a);return b};E.K=function(a,b){b=Zd.d.K[B](this,a,b);var c=this.Ua(b);c&&$d(a,c);if(a.m&8)if((c=a.k)&&J(c.da)){a.F(8,k);c.da(a)}return b};E.Ua=function(a){return a.title||""};E.fb=function(a,b){if(a)a.title=b||""};var be=function(a,b,c){W[B](this,a,b||Zd.T(),c);Gd(this,8,h);this.Oa|=9};L(be,W);be[y].Ua=function(){return this.wb};be[y].fb=function(a){this.mb().fb(this.c(),a);this.wb=a};var $d=function(a,b){a.wb=b};pd("goog-tab",function(){return new be(i)});var ce=function(){};L(ce,Ld);Ia(ce);ce[y].p=function(){return"goog-tab-bar"};ce[y].ea=function(){return"tablist"};ce[y].eb=function(a,b,c){this.qb||de(this);var d=this.qb[b];d?ee(a,d):ce.d.eb[B](this,a,b,c)};ce[y].oa=function(a){var b=ce.d.oa[B](this,a);this.Da||fe(this);b[m](this.Da[a.Yb]);return b};var fe=function(a){var b=a.p();a.Da=gb("top",b+"-top","bottom",b+"-bottom","start",b+"-start","end",b+"-end")},de=function(a){a.Da||fe(a);a.qb=db(a.Da)};var Z=function(a,b,c){ee(this,a||"top");Y[B](this,this.W,b||ce.T(),c);a=Xc(this);a.f(this,"select",this.Rb);a.f(this,"unselect",this.Sb);a.f(this,"disable",this.Pb);a.f(this,"hide",this.Qb)};L(Z,Y);Z[y].Ab=h;Z[y].C=i;Z[y].g=function(){Z.d.g[B](this);this.C=i};Z[y].removeChild=function(a,b){ge(this,a);return Z.d[Ba][B](this,a,b)};var ee=function(a,b){Od(a,b=="start"||b=="end"?"vertical":"horizontal");a.Yb=b};Z[y].cb=function(a){Z.d.cb[B](this,a);this.Ab&&he(this,a)};
Z[y].da=function(a){if(a)Cd(a,h);else this.C&&Cd(this.C,k)};var he=function(a,b){a.da(a.s(b))},ge=function(a,b){if(b&&b==a.C){for(var c=bd(a,b),d=c-1;b=a.s(d);d--)if(b.P()&&b.j()){a.da(b);return}for(c=c+1;b=a.s(c);c++)if(b.P()&&b.j()){a.da(b);return}a.da(i)}};E=Z[y];E.Rb=function(a){this.C&&this.C!=a[A]&&Cd(this.C,k);this.C=a[A]};E.Sb=function(a){if(a[A]==this.C)this.C=i};E.Pb=function(a){ge(this,a[A])};E.Qb=function(a){ge(this,a[A])};E.qa=function(){this.s(this.l)||this.D(this.C||this.s(0))};
pd("goog-tab-bar",function(){return new Z});var $=function(a,b,c,d){function f(j){if(j){j.tabIndex=0;S(j,"click",g.ac,k,g);S(j,"keydown",g.bc,k,g)}}this.M=Pb(a)||i;this.ma=Pb(d||i);this.Sa=(this.ab=J(b)?b:i)||!b?i:Pb(b);this.i=c==h;var g=this;f(this.M);f(this.ma);this.Y(this.i)};L($,Nc);$[y].g=function(){this.M&&Hc(this.M);this.ma&&Hc(this.ma);$.d.g[B](this)};
$[y].Y=function(a){if(this.Sa)Pc(this.Sa,a);else if(a&&this.ab)this.Sa=this.ab();if(this.ma){Pc(this.M,!a);Pc(this.ma,a)}else if(this.M)if(a){Lb(this.M,"goog-zippy-collapsed");Kb(this.M,"goog-zippy-expanded")}else{Lb(this.M,"goog-zippy-expanded");Kb(this.M,"goog-zippy-collapsed")}this.i=a;this[s](new ie("toggle",this,this.i))};$[y].bc=function(a){if(a[t]==13||a[t]==32){this.Y(!this.i);a[oa]();a[ya]()}};$[y].ac=function(){this.Y(!this.i)};var ie=function(a,b,c){P[B](this,a,b);this.ec=c};L(ie,P);var ke=function(a,b){this.gb=[];a=Pb(a);a=Qb(da,"span","ae-zippy",a);for(var c=0,d;d=a[c];c++){for(var f=d[D][D][D][ua];f&&f[na]!=1;)f=f[ua];this.gb[m](new $(d,f,k))}this.Eb=new je(this.gb,Pb(b))};ke[y].Fb=function(){return this.Eb};ke[y].Gb=function(){return this.gb};
var je=function(a,b){this.Aa=a;if(this.Aa[x]){a=0;for(var c;c=this.Aa[a];a++)S(c,"toggle",this.dc,k,this)}this.bb=0;this.i=k;a="ae-toggle ae-plus ae-action";this.Aa[x]||(a+=" ae-disabled");this.S=Ub("span",{className:a},"Expand All");S(this.S,"click",this.Cb,k,this);b[ka](this.S)};je[y].Cb=function(){this.Aa[x]&&this.Y(!this.i)};je[y].dc=function(a){a=a.currentTarget;if(a.i)this.bb+=1;else this.bb-=1;if(a.i!=this.i)if(a.i){this.i=h;le(this,h)}else if(this.bb==0){this.i=k;le(this,k)}};
je[y].Y=function(a){this.i=a;a=0;for(var b;b=this.Aa[a];a++)b.i!=this.i&&b.Y(this.i);le(this)};
var le=function(a,b){if(b!==ba?b:a.i){Lb(a.S,"ae-plus");Kb(a.S,"ae-minus");Yb(a.S,"Collapse All")}else{Lb(a.S,"ae-minus");Kb(a.S,"ae-plus");Yb(a.S,"Expand All")}},me=function(a){this.cc=a;this.vb={};var b,c=Ub("div",{},b=Ub("div",{id:"ae-stats-details-tabs",className:"goog-tab-bar goog-tab-bar-top"}),Ub("div",{className:"goog-tab-bar-clear"}),a=Ub("div",{id:"ae-stats-details-tabs-content",className:"goog-tab-content"})),d=new Z;d.K(b);S(d,"select",this.ib,k,this);S(d,"unselect",this.ib,k,this);b=
0;for(var f;f=this.cc[b];b++)if(f=Pb("ae-stats-details-"+f)){var g=Qb(da,"h2",i,f)[0],j;j=void 0;if(N&&"innerText"in g)j=g.innerText[n](/(\r\n|\r|\n)/g,"\n");else{j=[];cc(g,j,h);j=j[Da]("")}j=j[n](/\xAD/g,"");j=j[n](/ +/g," ");if(j!=" ")j=j[n](/^\s*/,"");j=j;Wb(g);g=new be(j);this.vb[K(g)]=f;d.Ba(g,h);a[ka](f);b==0?d.da(g):Pc(f,k)}Pb("bd")[ka](c)};me[y].ib=function(a){var b=this.vb[K(a[A])];Pc(b,a[w]=="select")};Fa("ae.Stats.Details.Tabs",me,void 0);Fa("goog.ui.Zippy",$,void 0);$[y].setExpanded=$[y].Y;
Fa("ae.Stats.MakeZippys",ke,void 0);ke[y].getExpandCollapse=ke[y].Fb;ke[y].getZippys=ke[y].Gb;je[y].setExpanded=je[y].Y;})();