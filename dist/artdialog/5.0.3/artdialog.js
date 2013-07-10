/* 2013-04-11 */
(function(t,e,i){function s(t){var e=h.focus;e&&e._isLock&&!e.dom.wrap[0].contains(t.target)&&(t.stopPropagation(),e.focus())}if("BackCompat"===document.compatMode)throw Error("artDialog: Document types require more than xhtml1.0");var o,n=0,l=document.activeElement,d=(t(document.getElementsByTagName("html")[0]),"artDialog"+ +new Date),a=e.VBArray&&!e.XMLHttpRequest,c="createTouch"in document&&!("onmousemove"in document)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),r=!a&&!c,h=function(t,e,s){t=t||{},("string"==typeof t||1===t.nodeType)&&(t={content:t,fixed:!c});var a,u=h.defaults,f=t.follow=1===this.nodeType&&this||t.follow;for(var m in u)t[m]===i&&(t[m]=u[m]);return t.id=f&&f[d+"follow"]||t.id||d+n,(a=h.list[t.id])?(f&&a.follow(f),a.zIndex().focus(),l=document.activeElement,a):(r||(t.fixed=!1),t.button&&t.button.push||(t.button=[]),e!==i&&(t.ok=e),t.ok&&t.button.push({id:"ok",value:t.okValue,callback:t.ok,focus:!0}),s!==i&&(t.cancel=s),t.cancel&&t.button.push({id:"cancel",value:t.cancelValue,callback:t.cancel}),h.defaults.zIndex=t.zIndex,n++,h.list[t.id]=o?o.constructor(t):new h.fn.constructor(t))};h.version="5.0.3",h.fn=h.prototype={constructor:function(t){var e;return l=document.activeElement,this.closed=!1,this.config=t,this.dom=e=this.dom||this._innerHTML(t),t.skin&&e.wrap.addClass(t.skin),e.wrap.css("position",t.fixed?"fixed":"absolute"),e.close[t.cancel===!1?"hide":"show"](),e.content.css("padding",t.padding),this.button.apply(this,t.button),this.title(t.title).content(t.content).size(t.width,t.height).time(t.time),this._reset(),this.zIndex(),t.lock&&this.lock(),this._addEvent(),this[t.visible?"visible":"hidden"]().focus(),o=null,t.initialize&&t.initialize.call(this),this},content:function(e){var i,s,o,n,l=this,d=this.dom.content,a=d[0];return this._elemBack&&(this._elemBack(),delete this._elemBack),"string"==typeof e?d.html(e):e&&1===e.nodeType&&(n=e.style.display,i=e.previousSibling,s=e.nextSibling,o=e.parentNode,this._elemBack=function(){i&&i.parentNode?i.parentNode.insertBefore(e,i.nextSibling):s&&s.parentNode?s.parentNode.insertBefore(e,s):o&&o.appendChild(e),e.style.display=n,l._elemBack=null},d.html(""),a.appendChild(e),t(e).show()),this._reset(),this},title:function(t){var e=this.dom,i=e.outer,s=e.title,o="d-state-noTitle";return t===!1?(s.hide().html(""),i.addClass(o)):(s.show().html(t),i.removeClass(o)),this},position:function(){var t=this.dom,e=t.wrap[0],i=t.window,s=t.document,o=this.config.fixed,n=o?0:s.scrollLeft(),l=o?0:s.scrollTop(),a=i.width(),c=i.height(),r=e.offsetWidth,h=e.offsetHeight,u=(a-r)/2+n,f=382*(c-h)/1e3+l,m=e.style;return m.left=Math.max(parseInt(u),n)+"px",m.top=Math.max(parseInt(f),l)+"px",this._follow&&(this._follow.removeAttribute(d+"follow"),this._follow=null),this},size:function(t,e){var i=this.dom.main[0].style;return"number"==typeof t&&(t+="px"),"number"==typeof e&&(e+="px"),i.width=t,i.height=e,this},follow:function(e){var i=t(e),s=this.config;if(!e||!e.offsetWidth&&!e.offsetHeight)return this.position(this._left,this._top);var o=s.fixed,n=d+"follow",l=this.dom,a=l.window,c=l.document,r=a.width(),h=a.height(),u=c.scrollLeft(),f=c.scrollTop(),m=i.offset(),p=e.offsetWidth,v=e.offsetHeight,b=o?m.left-u:m.left,k=o?m.top-f:m.top,g=this.dom.wrap[0],w=g.style,_=g.offsetWidth,y=g.offsetHeight,x=b-(_-p)/2,z=k+v,C=o?0:u,I=o?0:f;return x=C>x?b:x+_>r&&b-_>C?b-_+p:x,z=z+y>h+I&&k-y>I?k-y:z,w.left=parseInt(x)+"px",w.top=parseInt(z)+"px",this._follow&&this._follow.removeAttribute(n),this._follow=e,e[n]=s.id,this},button:function(){for(var e,i,s,o,n,l=this.dom,a=l.buttons,c=a[0],r="d-state-highlight",h=this._listeners=this._listeners||{},u=[].slice.call(arguments),f=0;u.length>f;f++)e=u[f],i=e.value,s=e.id||i,o=!h[s],n=o?document.createElement("input"):h[s].elem,n.type="button",n.className="d-button",h[s]||(h[s]={}),i&&(n.value=i),e.width&&(n.style.width=e.width),e.callback&&(h[s].callback=e.callback),e.focus&&(this._focus&&this._focus.removeClass(r),this._focus=t(n).addClass(r),this.focus()),n[d+"callback"]=s,n.disabled=!!e.disabled,o&&(h[s].elem=n,c.appendChild(n));return a[0].style.display=u.length?"":"none",this},visible:function(){return this.dom.wrap.css("visibility","visible"),this.dom.outer.addClass("d-state-visible"),this._isLock&&this._lockMask.show(),this},hidden:function(){return this.dom.wrap.css("visibility","hidden"),this.dom.outer.removeClass("d-state-visible"),this._isLock&&this._lockMask.hide(),this},close:function(){if(this.closed)return this;var t=this.dom,e=t.wrap,i=h.list,s=this.config.beforeunload;if(s&&s.call(this)===!1)return this;if(h.focus===this&&(h.focus=null),this._follow&&this._follow.removeAttribute(d+"follow"),this._elemBack&&this._elemBack(),this.time(),this.unlock(),this._removeEvent(),delete i[this.config.id],o)e.remove();else{o=this,t.title.html(""),t.content.html(""),t.buttons.html(""),e[0].className=e[0].style.cssText="",t.outer[0].className="d-outer",e.css({left:0,top:0,position:r?"fixed":"absolute"});for(var n in this)this.hasOwnProperty(n)&&"dom"!==n&&delete this[n];this.hidden()}return l&&l.focus(),this.closed=!0,this},time:function(t){var e=this,i=this._timer;return i&&clearTimeout(i),t&&(this._timer=setTimeout(function(){e._click("cancel")},t)),this},focus:function(){if(this.config.focus)try{var t=this._focus&&this._focus[0]||this.dom.close[0];t&&t.focus()}catch(e){}return this},zIndex:function(){var t=this.dom,e=h.focus,i=h.defaults.zIndex++;return t.wrap.css("zIndex",i),this._lockMask&&this._lockMask.css("zIndex",i-1),e&&e.dom.outer.removeClass("d-state-focus"),h.focus=this,t.outer.addClass("d-state-focus"),this},lock:function(){if(this._isLock)return this;var i=this,s=(this.config,this.dom),o=document.createElement("div"),n=t(o),l=h.defaults.zIndex-1;return this.zIndex(),s.outer.addClass("d-state-lock"),n.css({zIndex:l,position:"fixed",left:0,top:0,width:"100%",height:"100%",overflow:"hidden"}).addClass("d-mask"),r||n.css({position:"absolute",width:t(e).width()+"px",height:t(document).height()+"px"}),n.bind("dblclick",function(){i._click("cancel")}),document.body.appendChild(o),this._lockMask=n,this._isLock=!0,this},unlock:function(){return this._isLock?(this._lockMask.unbind(),this._lockMask.hide(),this._lockMask.remove(),this.dom.outer.removeClass("d-state-lock"),this._isLock=!1,this):this},_innerHTML:function(i){var s=document.body;if(!s)throw Error('artDialog: "documents.body" not ready');var o=document.createElement("div");o.style.cssText="position:absolute;left:0;top:0",o.innerHTML=h._templates.replace(/{([^}]+)}/g,function(t,e){var s=i[e];return"string"==typeof s?s:""}),s.insertBefore(o,s.firstChild);for(var n,l=0,d={},a=o.getElementsByTagName("*"),c=a.length;c>l;l++)n=a[l].className.split("d-")[1],n&&(d[n]=t(a[l]));return d.window=t(e),d.document=t(document),d.wrap=t(o),d},_click:function(t){var e=this._listeners[t]&&this._listeners[t].callback;return"function"!=typeof e||e.call(this)!==!1?this.close():this},_reset:function(){var t=this.config.follow||this._follow;t?this.follow(t):this.position()},_addEvent:function(){var t=this,e=this.dom;e.wrap.bind("click",function(s){var o,n=s.target;return n.disabled?!1:n===e.close[0]?(t._click("cancel"),!1):(o=n[d+"callback"],o&&t._click(o),i)}).bind("mousedown",function(){t.zIndex()})},_removeEvent:function(){this.dom.wrap.unbind()}},h.fn.constructor.prototype=h.fn,t.fn.dialog=t.fn.artDialog=function(){var t=arguments;return this[this.live?"live":"bind"]("click",function(){return h.apply(this,t),!1}),this},h.focus=null,h.get=function(t){return t===i?h.list:h.list[t]},h.list={},t(document).bind("keydown",function(t){var e=t.target,i=e.nodeName,s=/^input|textarea$/i,o=h.focus,n=t.keyCode;!o||!o.config.esc||s.test(i)&&"button"!==e.type||27===n&&o._click("cancel")}),t.fn.live&&t("body").live("focus",s),t(e).bind("resize",function(){var t=h.list;for(var e in t)t[e]._reset()}),h._templates='<div class="d-outer" role="dialog" tabindex="-1" aria-labelledby="d-title-{id}" aria-describedby="d-content-{id}"><table class="d-border"><tbody><tr><td class="d-nw"></td><td class="d-n"></td><td class="d-ne"></td></tr><tr><td class="d-w"></td><td class="d-c"><div class="d-inner"><table class="d-dialog"><tbody><tr><td class="d-header"><div class="d-titleBar"><div id="d-title-{id}" class="d-title"></div><a class="d-close" href="javascript:;">×</a></div></td></tr><tr><td class="d-main"><div id="d-content-{id}" class="d-content"></div></td></tr><tr><td class="d-footer"><div class="d-buttons"></div></td></tr></tbody></table></div></td><td class="d-e"></td></tr><tr><td class="d-sw"></td><td class="d-s"></td><td class="d-se"></td></tr></tbody></table></div>',h.defaults={content:'<div class="d-loading"><span>loading..</span></div>',title:"message",button:null,ok:null,cancel:null,initialize:null,beforeunload:null,okValue:"ok",cancelValue:"cancel",width:"auto",height:"auto",padding:"20px 25px",skin:null,time:null,esc:!0,focus:!0,visible:!0,follow:null,lock:!1,fixed:!1,zIndex:1987},t.artDialog=h,t(document).delegate("a[data-toggle=artdialog]","click.artdialog",function(){var e=t(this),i=e.data(),s=e.attr("href"),o={id:"__ajax",title:e.attr("title")||"提示",lock:i.lock,width:i.width||400,height:i.height||200,skin:i.skin||"green",content:"loading..."};return i.zindex&&(o.zIndex=i.zindex),s.indexOf("#")>-1?(s="#"+s.split("#")[1],o.content=t(s).html()||t(s).data("htmltpl"),t(s).empty().data("htmltpl",o.content)):o.initialize=function(){var e=this;t.get(s,function(t){e.content(t)})},h(o),!1}),define("artdialog/5.0.3/artdialog",[],function(t){return t.async("./skins/"+(a?"default":"green")+".css"),jQuery.artDialog})})(this.art||this.jQuery,this);