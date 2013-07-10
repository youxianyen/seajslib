/* 2013-04-11 */
define("qunit/1.11.0/qunit",[],function(e){return e.async("./qunit.css"),QUnit}),function(e){function t(e){p(this,e),this.assertions=[],this.testNumber=++t.count}function n(){x.autorun=!0,x.currentModule&&y("moduleDone",E,{name:x.currentModule,failed:x.moduleStats.bad,passed:x.moduleStats.all-x.moduleStats.bad,total:x.moduleStats.all});var t,n,r=v("qunit-banner"),s=v("qunit-tests"),o=+new M-x.started,i=x.stats.all-x.stats.bad,a=["Tests completed in ",o," milliseconds.<br/>","<span class='passed'>",i,"</span> assertions of <span class='total'>",x.stats.all,"</span> passed, <span class='failed'>",x.stats.bad,"</span> failed."].join("");if(r&&(r.className=x.stats.bad?"qunit-fail":"qunit-pass"),s&&(v("qunit-testresult").innerHTML=a),x.altertitle&&"undefined"!=typeof document&&document.title&&(document.title=[x.stats.bad?"✖":"✔",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),x.reorder&&L.sessionStorage&&0===x.stats.bad)for(t=0;sessionStorage.length>t;t++)n=sessionStorage.key(t++),0===n.indexOf("qunit-test-")&&sessionStorage.removeItem(n);e.scrollTo&&e.scrollTo(0,0),y("done",E,{failed:x.stats.bad,passed:i,total:x.stats.all,runtime:o})}function r(e){var t,n=x.filter&&x.filter.toLowerCase(),s=x.module&&x.module.toLowerCase(),o=(e.module+": "+e.testName).toLowerCase();return e.callback&&e.callback.validTest===r?(delete e.callback.validTest,!0):x.testNumber?e.testNumber===x.testNumber:!s||e.module&&e.module.toLowerCase()===s?n?(t="!"!==n.charAt(0),t||(n=n.slice(1)),-1!==o.indexOf(n)?t:!t):!0:!1}function s(e,t){t=void 0===t?3:t;var n,r,s;if(e.stacktrace)return e.stacktrace.split("\n")[t+3];if(e.stack){if(n=e.stack.split("\n"),/^error$/i.test(n[0])&&n.shift(),S){for(r=[],s=t;n.length>s&&-1===n[s].indexOf(S);s++)r.push(n[s]);if(r.length)return r.join("\n")}return n[t]}if(e.sourceURL){if(/qunit.js$/.test(e.sourceURL))return;return e.sourceURL+":"+e.line}}function o(e){try{throw Error()}catch(t){return s(t,e)}}function i(e){return e?(e+="",e.replace(/['"<>&]/g,function(e){switch(e){case"'":return"&#039;";case'"':return"&quot;";case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;"}})):""}function a(e,t){x.queue.push(e),x.autorun&&!x.blocking&&u(t)}function u(t){function r(){u(t)}var s=(new M).getTime();for(x.depth=x.depth?x.depth+1:1;x.queue.length&&!x.blocking;){if(!(!L.setTimeout||0>=x.updateRate||(new M).getTime()-s<x.updateRate)){e.setTimeout(r,13);break}x.queue.shift()()}x.depth--,!t||x.blocking||x.queue.length||0!==x.depth||n()}function l(){if(x.pollution=[],x.noglobals)for(var t in e)C.call(e,t)&&!/^qunit-test-output/.test(t)&&x.pollution.push(t)}function c(){var e,t,n=x.pollution;l(),e=d(x.pollution,n),e.length>0&&E.pushFailure("Introduced global variable(s): "+e.join(", ")),t=d(n,x.pollution),t.length>0&&E.pushFailure("Deleted global variable(s): "+t.join(", "))}function d(e,t){var n,r,s=e.slice();for(n=0;s.length>n;n++)for(r=0;t.length>r;r++)if(s[n]===t[r]){s.splice(n,1),n--;break}return s}function p(t,n){for(var r in n)void 0===n[r]?delete t[r]:("constructor"!==r||t!==e)&&(t[r]=n[r]);return t}function m(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)}function h(e,t,n){for(var r=e.length;r--;)m(e[r],t,n)}function f(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1}function g(e,t){f(e,t)||(e.className+=(e.className?" ":"")+t)}function b(t,n){for(var r=" "+t.className+" ";r.indexOf(" "+n+" ")>-1;)r=r.replace(" "+n+" "," ");t.className=e.jQuery?jQuery.trim(r):r.trim?r.trim():r}function v(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function w(e){return function(t){x[e].push(t)}}function y(e,t,n){var r,s;if(E.hasOwnProperty(e))E[e].call(t,n);else for(s=x[e],r=0;s.length>r;r++)s[r].call(t,n)}function q(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}var E,T,x,k,N=0,S=(o(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,""),j=Object.prototype.toString,C=Object.prototype.hasOwnProperty,M=e.Date,L={setTimeout:e.setTimeout!==void 0,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()},D=function(e){var t,n,r=""+e;return"[object"===r.substring(0,7)?(t=e.name?""+e.name:"Error",n=e.message?""+e.message:"",t&&n?t+": "+n:t?t:n?n:"Error"):r},H=function(e){var t,n,r=E.is("array",e)?[]:{};for(t in e)C.call(e,t)&&(n=e[t],r[t]=n===Object(n)?H(n):n);return r};t.count=0,t.prototype={init:function(){var e,t,n,r=v("qunit-tests");r&&(t=document.createElement("strong"),t.innerHTML=this.nameHtml,e=document.createElement("a"),e.innerHTML="Rerun",e.href=E.url({testNumber:this.testNumber}),n=document.createElement("li"),n.appendChild(t),n.appendChild(e),n.className="running",n.id=this.id="qunit-test-output"+N++,r.appendChild(n))},setup:function(){if(this.module!==x.previousModule?(x.previousModule&&y("moduleDone",E,{name:x.previousModule,failed:x.moduleStats.bad,passed:x.moduleStats.all-x.moduleStats.bad,total:x.moduleStats.all}),x.previousModule=this.module,x.moduleStats={all:0,bad:0},y("moduleStart",E,{name:this.module})):x.autorun&&y("moduleStart",E,{name:this.module}),x.current=this,this.testEnvironment=p({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),this.started=+new M,y("testStart",E,{name:this.testName,module:this.module}),E.current_testEnvironment=this.testEnvironment,x.pollution||l(),x.notrycatch)return this.testEnvironment.setup.call(this.testEnvironment),void 0;try{this.testEnvironment.setup.call(this.testEnvironment)}catch(e){E.pushFailure("Setup failed on "+this.testName+": "+(e.message||e),s(e,1))}},run:function(){x.current=this;var e=v("qunit-testresult");if(e&&(e.innerHTML="Running: <br/>"+this.nameHtml),this.async&&E.stop(),this.callbackStarted=+new M,x.notrycatch)return this.callback.call(this.testEnvironment,E.assert),this.callbackRuntime=+new M-this.callbackStarted,void 0;try{this.callback.call(this.testEnvironment,E.assert),this.callbackRuntime=+new M-this.callbackStarted}catch(t){this.callbackRuntime=+new M-this.callbackStarted,E.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+(t.message||t),s(t,0)),l(),x.blocking&&E.start()}},teardown:function(){if(x.current=this,x.notrycatch)return this.callbackRuntime===void 0&&(this.callbackRuntime=+new M-this.callbackStarted),this.testEnvironment.teardown.call(this.testEnvironment),void 0;try{this.testEnvironment.teardown.call(this.testEnvironment)}catch(e){E.pushFailure("Teardown failed on "+this.testName+": "+(e.message||e),s(e,1))}c()},finish:function(){x.current=this,x.requireExpects&&null===this.expected?E.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?E.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||E.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack);var t,n,r,s,o,i,a,u=this,l=0,c=0,d=v("qunit-tests");if(this.runtime=+new M-this.started,x.stats.all+=this.assertions.length,x.moduleStats.all+=this.assertions.length,d){for(a=document.createElement("ol"),a.className="qunit-assert-list",t=0;this.assertions.length>t;t++)n=this.assertions[t],i=document.createElement("li"),i.className=n.result?"pass":"fail",i.innerHTML=n.message||(n.result?"okay":"failed"),a.appendChild(i),n.result?l++:(c++,x.stats.bad++,x.moduleStats.bad++);E.config.reorder&&L.sessionStorage&&(c?sessionStorage.setItem("qunit-test-"+this.module+"-"+this.testName,c):sessionStorage.removeItem("qunit-test-"+this.module+"-"+this.testName)),0===c&&g(a,"qunit-collapsed"),s=document.createElement("strong"),s.innerHTML=this.nameHtml+" <b class='counts'>(<b class='failed'>"+c+"</b>, <b class='passed'>"+l+"</b>, "+this.assertions.length+")</b>",m(s,"click",function(){var e=s.parentNode.lastChild,t=f(e,"qunit-collapsed");(t?b:g)(e,"qunit-collapsed")}),m(s,"dblclick",function(t){var n=t&&t.target?t.target:e.event.srcElement;("span"===n.nodeName.toLowerCase()||"b"===n.nodeName.toLowerCase())&&(n=n.parentNode),e.location&&"strong"===n.nodeName.toLowerCase()&&(e.location=E.url({testNumber:u.testNumber}))}),o=document.createElement("span"),o.className="runtime",o.innerHTML=this.runtime+" ms",i=v(this.id),i.className=c?"fail":"pass",i.removeChild(i.firstChild),r=i.firstChild,i.appendChild(s),i.appendChild(r),i.appendChild(o),i.appendChild(a)}else for(t=0;this.assertions.length>t;t++)this.assertions[t].result||(c++,x.stats.bad++,x.moduleStats.bad++);y("testDone",E,{name:this.testName,module:this.module,failed:c,passed:this.assertions.length-c,total:this.assertions.length,duration:this.runtime}),E.reset(),x.current=void 0},queue:function(){function e(){a(function(){n.setup()}),a(function(){n.run()}),a(function(){n.teardown()}),a(function(){n.finish()})}var t,n=this;a(function(){n.init()}),t=E.config.reorder&&L.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module+"-"+this.testName),t?e():a(e,!0)}},E={module:function(e,t){x.currentModule=e,x.currentModuleTestEnvironment=t,x.modules[e]=!0},asyncTest:function(e,t,n){2===arguments.length&&(n=t,t=null),E.test(e,t,n,!0)},test:function(e,n,s,a){var u,l="<span class='test-name'>"+i(e)+"</span>";2===arguments.length&&(s=n,n=null),x.currentModule&&(l="<span class='module-name'>"+i(x.currentModule)+"</span>: "+l),u=new t({nameHtml:l,testName:e,expected:n,async:a,callback:s,module:x.currentModule,moduleTestEnvironment:x.currentModuleTestEnvironment,stack:o(2)}),r(u)&&u.queue()},expect:function(e){return 1!==arguments.length?x.current.expected:(x.current.expected=e,void 0)},start:function(t){return void 0===x.semaphore?(E.begin(function(){setTimeout(function(){E.start(t)})}),void 0):(x.semaphore-=t||1,x.semaphore>0?void 0:0>x.semaphore?(x.semaphore=0,E.pushFailure("Called start() while already started (QUnit.config.semaphore was 0 already)",null,o(2)),void 0):(L.setTimeout?e.setTimeout(function(){x.semaphore>0||(x.timeout&&clearTimeout(x.timeout),x.blocking=!1,u(!0))},13):(x.blocking=!1,u(!0)),void 0))},stop:function(t){x.semaphore+=t||1,x.blocking=!0,x.testTimeout&&L.setTimeout&&(clearTimeout(x.timeout),x.timeout=e.setTimeout(function(){E.ok(!1,"Test timed out"),x.semaphore=1,E.start()},x.testTimeout))}},T={ok:function(e,t){if(!x.current)throw Error("ok() assertion outside test context, was "+o(2));e=!!e;var n,r={module:x.current.module,name:x.current.testName,result:e,message:t};t=i(t||(e?"okay":"failed")),t="<span class='test-message'>"+t+"</span>",e||(n=o(2),n&&(r.source=n,t+="<table><tr class='test-source'><th>Source: </th><td><pre>"+i(n)+"</pre></td></tr></table>")),y("log",E,r),x.current.assertions.push({result:e,message:t})},equal:function(e,t,n){E.push(t==e,e,t,n)},notEqual:function(e,t,n){E.push(t!=e,e,t,n)},propEqual:function(e,t,n){e=H(e),t=H(t),E.push(E.equiv(e,t),e,t,n)},notPropEqual:function(e,t,n){e=H(e),t=H(t),E.push(!E.equiv(e,t),e,t,n)},deepEqual:function(e,t,n){E.push(E.equiv(e,t),e,t,n)},notDeepEqual:function(e,t,n){E.push(!E.equiv(e,t),e,t,n)},strictEqual:function(e,t,n){E.push(t===e,e,t,n)},notStrictEqual:function(e,t,n){E.push(t!==e,e,t,n)},"throws":function(e,t,n){var r,s=t,o=!1;"string"==typeof t&&(n=t,t=null),x.current.ignoreGlobalErrors=!0;try{e.call(x.current.testEnvironment)}catch(i){r=i}x.current.ignoreGlobalErrors=!1,r?(t?"regexp"===E.objectType(t)?o=t.test(D(r)):r instanceof t?o=!0:t.call({},r)===!0&&(s=null,o=!0):(o=!0,s=null),E.push(o,r,s,n)):E.pushFailure(n,null,"No exception was thrown.")}},p(E,T),E.raises=T["throws"],E.equals=function(){E.push(!1,!1,!1,"QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead")},E.same=function(){E.push(!1,!1,!1,"QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead")},function(){function e(){}e.prototype=E,E=new e,E.constructor=e}(),x={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,requireExpects:!1,urlConfig:[{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}],modules:{},begin:[],done:[],log:[],testStart:[],testDone:[],moduleStart:[],moduleDone:[]},"undefined"==typeof exports&&(p(e,E),e.QUnit=E),function(){var t,n,r=e.location||{search:"",protocol:"file:"},s=r.search.slice(1).split("&"),o=s.length,i={};if(s[0])for(t=0;o>t;t++)n=s[t].split("="),n[0]=decodeURIComponent(n[0]),n[1]=n[1]?decodeURIComponent(n[1]):!0,i[n[0]]=n[1];E.urlParams=i,x.filter=i.filter,x.module=i.module,x.testNumber=parseInt(i.testNumber,10)||null,E.isLocal="file:"===r.protocol}(),p(E,{assert:T,config:x,init:function(){p(x,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new M,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:1});var e,t,n,r=v("qunit");r&&(r.innerHTML="<h1 id='qunit-header'>"+i(document.title)+"</h1>"+"<h2 id='qunit-banner'></h2>"+"<div id='qunit-testrunner-toolbar'></div>"+"<h2 id='qunit-userAgent'></h2>"+"<ol id='qunit-tests'></ol>"),e=v("qunit-tests"),t=v("qunit-banner"),n=v("qunit-testresult"),e&&(e.innerHTML=""),t&&(t.className=""),n&&n.parentNode.removeChild(n),e&&(n=document.createElement("p"),n.id="qunit-testresult",n.className="result",e.parentNode.insertBefore(n,e),n.innerHTML="Running...<br/>&nbsp;")},reset:function(){var e=v("qunit-fixture");e&&(e.innerHTML=x.fixture)},triggerEvent:function(e,t,n){document.createEvent?(n=document.createEvent("MouseEvents"),n.initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,t){return E.objectType(t)===e},objectType:function(e){if(e===void 0)return"undefined";if(null===e)return"null";var t=j.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]||"";switch(n){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return n.toLowerCase()}return"object"==typeof e?"object":void 0},push:function(e,t,n,r){if(!x.current)throw Error("assertion outside test context, was "+o());var s,a,u={module:x.current.module,name:x.current.testName,result:e,message:r,actual:t,expected:n};r=i(r)||(e?"okay":"failed"),r="<span class='test-message'>"+r+"</span>",s=r,e||(n=i(E.jsDump.parse(n)),t=i(E.jsDump.parse(t)),s+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+n+"</pre></td></tr>",t!==n&&(s+="<tr class='test-actual'><th>Result: </th><td><pre>"+t+"</pre></td></tr>",s+="<tr class='test-diff'><th>Diff: </th><td><pre>"+E.diff(n,t)+"</pre></td></tr>"),a=o(),a&&(u.source=a,s+="<tr class='test-source'><th>Source: </th><td><pre>"+i(a)+"</pre></td></tr>"),s+="</table>"),y("log",E,u),x.current.assertions.push({result:!!e,message:s})},pushFailure:function(e,t,n){if(!x.current)throw Error("pushFailure() assertion outside test context, was "+o(2));var r,s={module:x.current.module,name:x.current.testName,result:!1,message:e};e=i(e)||"error",e="<span class='test-message'>"+e+"</span>",r=e,r+="<table>",n&&(r+="<tr class='test-actual'><th>Result: </th><td><pre>"+i(n)+"</pre></td></tr>"),t&&(s.source=t,r+="<tr class='test-source'><th>Source: </th><td><pre>"+i(t)+"</pre></td></tr>"),r+="</table>",y("log",E,s),x.current.assertions.push({result:!1,message:r})},url:function(t){t=p(p({},E.urlParams),t);var n,r="?";for(n in t)C.call(t,n)&&(r+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&");return e.location.protocol+"//"+e.location.host+e.location.pathname+r.slice(0,-1)},extend:p,id:v,addEvent:m}),p(E.constructor.prototype,{begin:w("begin"),done:w("done"),log:w("log"),testStart:w("testStart"),testDone:w("testDone"),moduleStart:w("moduleStart"),moduleDone:w("moduleDone")}),("undefined"==typeof document||"complete"===document.readyState)&&(x.autorun=!0),E.load=function(){y("begin",E,{});var t,n,r,s,o,a,u,l,c,d,f,g,b,w=0,q="",T="",k=p({},x);for(E.init(),p(x,k),x.blocking=!1,o=x.urlConfig.length,r=0;o>r;r++)d=x.urlConfig[r],"string"==typeof d&&(d={id:d,label:d,tooltip:"[no tooltip available]"}),x[d.id]=E.urlParams[d.id],T+="<input id='qunit-urlconfig-"+i(d.id)+"' name='"+i(d.id)+"' type='checkbox'"+(x[d.id]?" checked='checked'":"")+" title='"+i(d.tooltip)+"'><label for='qunit-urlconfig-"+i(d.id)+"' title='"+i(d.tooltip)+"'>"+d.label+"</label>";q+="<label for='qunit-modulefilter'>Module: </label><select id='qunit-modulefilter' name='modulefilter'><option value='' "+(void 0===x.module?"selected='selected'":"")+">< All Modules ></option>";for(r in x.modules)x.modules.hasOwnProperty(r)&&(w+=1,q+="<option value='"+i(encodeURIComponent(r))+"' "+(x.module===r?"selected='selected'":"")+">"+i(r)+"</option>");q+="</select>",c=v("qunit-userAgent"),c&&(c.innerHTML=navigator.userAgent),t=v("qunit-header"),t&&(t.innerHTML="<a href='"+E.url({filter:void 0,module:void 0,testNumber:void 0})+"'>"+t.innerHTML+"</a> "),l=v("qunit-testrunner-toolbar"),l&&(n=document.createElement("input"),n.type="checkbox",n.id="qunit-filter-pass",m(n,"click",function(){var e,t=document.getElementById("qunit-tests");n.checked?t.className=t.className+" hidepass":(e=" "+t.className.replace(/[\n\t\r]/g," ")+" ",t.className=e.replace(/ hidepass /," ")),L.sessionStorage&&(n.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))}),(x.hidepassed||L.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests"))&&(n.checked=!0,u=document.getElementById("qunit-tests"),u.className=u.className+" hidepass"),l.appendChild(n),s=document.createElement("label"),s.setAttribute("for","qunit-filter-pass"),s.setAttribute("title","Only show tests and assertons that fail. Stored in sessionStorage."),s.innerHTML="Hide passed tests",l.appendChild(s),f=document.createElement("span"),f.innerHTML=T,g=f.getElementsByTagName("input"),h(g,"click",function(t){var n={},r=t.target||t.srcElement;n[r.name]=r.checked?!0:void 0,e.location=E.url(n)}),l.appendChild(f),w>1&&(b=document.createElement("span"),b.setAttribute("id","qunit-modulefilter-container"),b.innerHTML=q,m(b.lastChild,"change",function(){var t=b.getElementsByTagName("select")[0],n=decodeURIComponent(t.options[t.selectedIndex].value);e.location=E.url({module:""===n?void 0:n})}),l.appendChild(b))),a=v("qunit-fixture"),a&&(x.fixture=a.innerHTML),x.autostart&&E.start()},m(e,"load",E.load),k=e.onerror,e.onerror=function(e,t,n){var s=!1;if(k&&(s=k(e,t,n)),s!==!0){if(E.config.current){if(E.config.current.ignoreGlobalErrors)return!0;E.pushFailure(e,t+":"+n)}else E.test("global failure",p(function(){E.pushFailure(e,t+":"+n)},{validTest:r}));return!1}return s},E.equiv=function(){function e(e,t,n){var r=E.objectType(e);return r?"function"===E.objectType(t[r])?t[r].apply(t,n):t[r]:void 0}var t,n=[],r=[],s=Object.getPrototypeOf||function(e){return e.__proto__},o=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===E.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===E.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.sticky===e.sticky},"function":function(){var e=n[n.length-1];return e!==Object&&e!==void 0},array:function(e,n){var s,o,i,a;if("array"!==E.objectType(e))return!1;if(i=n.length,i!==e.length)return!1;for(r.push(n),s=0;i>s;s++){for(a=!1,o=0;r.length>o;o++)r[o]===n[s]&&(a=!0);if(!a&&!t(n[s],e[s]))return r.pop(),!1}return r.pop(),!0},object:function(e,o){var i,a,u,l=!0,c=[],d=[];if(o.constructor!==e.constructor&&!(null===s(o)&&s(e)===Object.prototype||null===s(e)&&s(o)===Object.prototype))return!1;n.push(o.constructor),r.push(o);for(i in o){for(u=!1,a=0;r.length>a;a++)r[a]===o[i]&&(u=!0);if(c.push(i),!u&&!t(o[i],e[i])){l=!1;break}}n.pop(),r.pop();for(i in e)d.push(i);return l&&t(c.sort(),d.sort())}}}();return t=function(){var t=[].slice.apply(arguments);return 2>t.length?!0:function(t,n){return t===n?!0:null===t||null===n||t===void 0||n===void 0||E.objectType(t)!==E.objectType(n)?!1:e(t,o,[n,t])}(t[0],t[1])&&arguments.callee.apply(this,t.splice(1,t.length-1))}}(),E.jsDump=function(){function e(e){return'"'+(""+e).replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),s=o.indent(),i=o.indent(1);return t.join&&(t=t.join(","+r+i)),t?[e,i+t,s+n].join(r):e+n}function r(e,t){var r=e.length,s=Array(r);for(this.up();r--;)s[r]=this.parse(e[r],void 0,t);return this.down(),n("[",s,"]")}var s=/^function (\w+)/,o={parse:function(e,t,n){n=n||[];var r,s,o=this.parsers[t||this.typeOf(e)];return t=typeof o,r=q(e,n),-1!==r?"recursion("+(r-n.length)+")":"function"===t?(n.push(e),s=o.call(this,e,n),n.pop(),s):"string"===t?o:this.parsers.error},typeOf:function(e){var t;return t=null===e?"null":e===void 0?"undefined":E.is("regexp",e)?"regexp":E.is("date",e)?"date":E.is("function",e)?"function":void 0!==typeof e.setInterval&&e.document!==void 0&&e.nodeType===void 0?"window":9===e.nodeType?"document":e.nodeType?"node":"[object Array]"===j.call(e)||"number"==typeof e.length&&e.item!==void 0&&(e.length?e.item(0)===e[0]:null===e.item(0)&&e[0]===void 0)?"array":e.constructor===Error.prototype.constructor?"error":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",r="name"in e?e.name:(s.exec(e)||[])[1];return r&&(t+=" "+r),t+="( ",t=[t,E.jsDump.parse(e,"functionArgs"),"){"].join(""),n(t,E.jsDump.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r,s,o,i,a=[];E.jsDump.up(),r=[];for(s in e)r.push(s);for(r.sort(),i=0;r.length>i;i++)s=r[i],o=e[s],a.push(E.jsDump.parse(s,"key")+": "+E.jsDump.parse(o,void 0,t));return E.jsDump.down(),n("{",a,"}")},node:function(e){var t,n,r,s=E.jsDump.HTML?"&lt;":"<",o=E.jsDump.HTML?"&gt;":">",i=e.nodeName.toLowerCase(),a=s+i,u=e.attributes;if(u)for(n=0,t=u.length;t>n;n++)r=u[n].nodeValue,r&&"inherit"!==r&&(a+=" "+u[n].nodeName+"="+E.jsDump.parse(r,"attribute"));return a+=o,(3===e.nodeType||4===e.nodeType)&&(a+=e.nodeValue),a+s+"/"+i+o},functionArgs:function(e){var t,n=e.length;if(!n)return"";for(t=Array(n);n--;)t[n]=String.fromCharCode(97+n);return" "+t.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},HTML:!1,indentChar:"  ",multiline:!0};return o}(),E.diff=function(){function e(e,t){var n,r={},s={};for(n=0;t.length>n;n++)C.call(r,t[n])||(r[t[n]]={rows:[],o:null}),r[t[n]].rows.push(n);for(n=0;e.length>n;n++)C.call(s,e[n])||(s[e[n]]={rows:[],n:null}),s[e[n]].rows.push(n);for(n in r)C.call(r,n)&&1===r[n].rows.length&&C.call(s,n)&&1===s[n].rows.length&&(t[r[n].rows[0]]={text:t[r[n].rows[0]],row:s[n].rows[0]},e[s[n].rows[0]]={text:e[s[n].rows[0]],row:r[n].rows[0]});for(n=0;t.length-1>n;n++)null!=t[n].text&&null==t[n+1].text&&t[n].row+1<e.length&&null==e[t[n].row+1].text&&t[n+1]==e[t[n].row+1]&&(t[n+1]={text:t[n+1],row:t[n].row+1},e[t[n].row+1]={text:e[t[n].row+1],row:n+1});for(n=t.length-1;n>0;n--)null!=t[n].text&&null==t[n-1].text&&t[n].row>0&&null==e[t[n].row-1].text&&t[n-1]==e[t[n].row-1]&&(t[n-1]={text:t[n-1],row:t[n].row-1},e[t[n].row-1]={text:e[t[n].row-1],row:n-1});return{o:e,n:t}}return function(t,n){t=t.replace(/\s+$/,""),n=n.replace(/\s+$/,"");var r,s,o="",i=e(""===t?[]:t.split(/\s+/),""===n?[]:n.split(/\s+/)),a=t.match(/\s+/g),u=n.match(/\s+/g);if(null==a?a=[" "]:a.push(" "),null==u?u=[" "]:u.push(" "),0===i.n.length)for(r=0;i.o.length>r;r++)o+="<del>"+i.o[r]+a[r]+"</del>";else{if(null==i.n[0].text)for(n=0;i.o.length>n&&null==i.o[n].text;n++)o+="<del>"+i.o[n]+a[n]+"</del>";for(r=0;i.n.length>r;r++)if(null==i.n[r].text)o+="<ins>"+i.n[r]+u[r]+"</ins>";else{for(s="",n=i.n[r].row+1;i.o.length>n&&null==i.o[n].text;n++)s+="<del>"+i.o[n]+a[n]+"</del>";o+=" "+i.n[r].text+u[r]+s}}return o}}(),"undefined"!=typeof exports&&p(exports,E)}(function(){return this}.call());