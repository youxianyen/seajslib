/* 2013-04-11 */
(function(e,t){function n(e,t,n){return[parseInt(e[0],10)*(m.test(e[0])?t/100:1),parseInt(e[1],10)*(m.test(e[1])?n/100:1)]}function o(t,n){return parseInt(e.css(t,n),10)||0}function i(t){var n=t[0];return 9===n.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var a,s=Math.max,c=Math.abs,l=Math.round,r=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+%?/,p=/^\w+/,m=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(a!==t)return a;var n,o,i=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),s=i.children()[0];return e("body").append(i),n=s.offsetWidth,i.css("overflow","scroll"),o=s.offsetWidth,n===o&&(o=i[0].clientWidth),i.remove(),a=n-o},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),o=t.isWindow?"":t.element.css("overflow-y"),i="scroll"===n||"auto"===n&&t.width<t.element[0].scrollWidth,a="scroll"===o||"auto"===o&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:a?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),o=e.isWindow(n[0]);return{element:n,isWindow:o,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:o?n.width():n.outerWidth(),height:o?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return f.apply(this,arguments);t=e.extend({},t);var a,m,h,g,x,v,b=e(t.of),y=e.position.getWithinInfo(t.within),$=e.position.getScrollInfo(y),k=(t.collision||"flip").split(" "),M={};return v=i(b),b[0].preventDefault&&(t.at="left top"),m=v.width,h=v.height,g=v.offset,x=e.extend({},g),e.each(["my","at"],function(){var e,n,o=(t[this]||"").split(" ");1===o.length&&(o=r.test(o[0])?o.concat(["center"]):u.test(o[0])?["center"].concat(o):["center","center"]),o[0]=r.test(o[0])?o[0]:"center",o[1]=u.test(o[1])?o[1]:"center",e=d.exec(o[0]),n=d.exec(o[1]),M[this]=[e?e[0]:0,n?n[0]:0],t[this]=[p.exec(o[0])[0],p.exec(o[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===t.at[0]?x.left+=m:"center"===t.at[0]&&(x.left+=m/2),"bottom"===t.at[1]?x.top+=h:"center"===t.at[1]&&(x.top+=h/2),a=n(M.at,m,h),x.left+=a[0],x.top+=a[1],this.each(function(){var i,r,u=e(this),d=u.outerWidth(),p=u.outerHeight(),f=o(this,"marginLeft"),v=o(this,"marginTop"),w=d+f+o(this,"marginRight")+$.width,C=p+v+o(this,"marginBottom")+$.height,I=e.extend({},x),T=n(M.my,u.outerWidth(),u.outerHeight());"right"===t.my[0]?I.left-=d:"center"===t.my[0]&&(I.left-=d/2),"bottom"===t.my[1]?I.top-=p:"center"===t.my[1]&&(I.top-=p/2),I.left+=T[0],I.top+=T[1],e.support.offsetFractions||(I.left=l(I.left),I.top=l(I.top)),i={marginLeft:f,marginTop:v},e.each(["left","top"],function(n,o){e.ui.position[k[n]]&&e.ui.position[k[n]][o](I,{targetWidth:m,targetHeight:h,elemWidth:d,elemHeight:p,collisionPosition:i,collisionWidth:w,collisionHeight:C,offset:[a[0]+T[0],a[1]+T[1]],my:t.my,at:t.at,within:y,elem:u})}),t.using&&(r=function(e){var n=g.left-I.left,o=n+m-d,i=g.top-I.top,a=i+h-p,l={target:{element:b,left:g.left,top:g.top,width:m,height:h},element:{element:u,left:I.left,top:I.top,width:d,height:p},horizontal:0>o?"left":n>0?"right":"center",vertical:0>a?"top":i>0?"bottom":"middle"};d>m&&m>c(n+o)&&(l.horizontal="center"),p>h&&h>c(i+a)&&(l.vertical="middle"),l.important=s(c(n),c(o))>s(c(i),c(a))?"horizontal":"vertical",t.using.call(this,e,l)}),u.offset(e.extend(I,{using:r}))})},e.ui.position={fit:{left:function(e,t){var n,o=t.within,i=o.isWindow?o.scrollLeft:o.offset.left,a=o.width,c=e.left-t.collisionPosition.marginLeft,l=i-c,r=c+t.collisionWidth-a-i;t.collisionWidth>a?l>0&&0>=r?(n=e.left+l+t.collisionWidth-a-i,e.left+=l-n):e.left=r>0&&0>=l?i:l>r?i+a-t.collisionWidth:i:l>0?e.left+=l:r>0?e.left-=r:e.left=s(e.left-c,e.left)},top:function(e,t){var n,o=t.within,i=o.isWindow?o.scrollTop:o.offset.top,a=t.within.height,c=e.top-t.collisionPosition.marginTop,l=i-c,r=c+t.collisionHeight-a-i;t.collisionHeight>a?l>0&&0>=r?(n=e.top+l+t.collisionHeight-a-i,e.top+=l-n):e.top=r>0&&0>=l?i:l>r?i+a-t.collisionHeight:i:l>0?e.top+=l:r>0?e.top-=r:e.top=s(e.top-c,e.top)}},flip:{left:function(e,t){var n,o,i=t.within,a=i.offset.left+i.scrollLeft,s=i.width,l=i.isWindow?i.scrollLeft:i.offset.left,r=e.left-t.collisionPosition.marginLeft,u=r-l,d=r+t.collisionWidth-s-l,p="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,m="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(n=e.left+p+m+f+t.collisionWidth-s-a,(0>n||c(u)>n)&&(e.left+=p+m+f)):d>0&&(o=e.left-t.collisionPosition.marginLeft+p+m+f-l,(o>0||d>c(o))&&(e.left+=p+m+f))},top:function(e,t){var n,o,i=t.within,a=i.offset.top+i.scrollTop,s=i.height,l=i.isWindow?i.scrollTop:i.offset.top,r=e.top-t.collisionPosition.marginTop,u=r-l,d=r+t.collisionHeight-s-l,p="top"===t.my[1],m=p?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,h=-2*t.offset[1];0>u?(o=e.top+m+f+h+t.collisionHeight-s-a,e.top+m+f+h>u&&(0>o||c(u)>o)&&(e.top+=m+f+h)):d>0&&(n=e.top-t.collisionPosition.marginTop+m+f+h-l,e.top+m+f+h>d&&(n>0||d>c(n))&&(e.top+=m+f+h))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,o,i,a,s=document.getElementsByTagName("body")[0],c=document.createElement("div");t=document.createElement(s?"div":"body"),o={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},s&&e.extend(o,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in o)t.style[a]=o[a];t.appendChild(c),n=s||document.documentElement,n.insertBefore(t,n.firstChild),c.style.cssText="position: absolute; left: 10.7432222px;",i=e(c).offset().left,e.support.offsetFractions=i>10&&11>i,t.innerHTML="",n.removeChild(t)}()})(jQuery),function(e,t){function n(e){for(var t,n=e.split(/\s+/),o=[],i=0;t=n[i];i++)t=t[0].toUpperCase(),o.push(t);return o}function o(t){return t.id&&e('label[for="'+t.id+'"]').val()||t.name}function i(n,a,s){return s||(s=0),a.each(function(){var a,c,l=e(this),r=this,u=this.nodeName.toLowerCase();switch("label"==u&&l.find("input, textarea, select").length&&(a=l.text(),l=l.children().first(),r=l.get(0),u=r.nodeName.toLowerCase()),u){case"menu":c={name:l.attr("label"),items:{}},s=i(c.items,l.children(),s);break;case"a":case"button":c={name:l.text(),disabled:!!l.attr("disabled"),callback:function(){return function(){l.click()}}()};break;case"menuitem":case"command":switch(l.attr("type")){case t:case"command":case"menuitem":c={name:l.attr("label"),disabled:!!l.attr("disabled"),callback:function(){return function(){l.click()}}()};break;case"checkbox":c={type:"checkbox",disabled:!!l.attr("disabled"),name:l.attr("label"),selected:!!l.attr("checked")};break;case"radio":c={type:"radio",disabled:!!l.attr("disabled"),name:l.attr("label"),radio:l.attr("radiogroup"),value:l.attr("id"),selected:!!l.attr("checked")};break;default:c=t}break;case"hr":c="-------";break;case"input":switch(l.attr("type")){case"text":c={type:"text",name:a||o(r),disabled:!!l.attr("disabled"),value:l.val()};break;case"checkbox":c={type:"checkbox",name:a||o(r),disabled:!!l.attr("disabled"),selected:!!l.attr("checked")};break;case"radio":c={type:"radio",name:a||o(r),disabled:!!l.attr("disabled"),radio:!!l.attr("name"),value:l.val(),selected:!!l.attr("checked")};break;default:c=t}break;case"select":c={type:"select",name:a||o(r),disabled:!!l.attr("disabled"),selected:l.val(),options:{}},l.children().each(function(){c.options[this.value]=e(this).text()});break;case"textarea":c={type:"textarea",name:a||o(r),disabled:!!l.attr("disabled"),value:l.val()};break;case"label":break;default:c={type:"html",html:l.clone(!0)}}c&&(s++,n["key"+s]=c)}),s}if(e.support.htmlMenuitem="HTMLMenuItemElement"in window,e.support.htmlCommand="HTMLCommandElement"in window,e.support.eventSelectstart="onselectstart"in document.documentElement,!e.ui||!e.ui.widget){var a=e.cleanData;e.cleanData=function(t){for(var n,o=0;null!=(n=t[o]);o++)try{e(n).triggerHandler("remove")}catch(i){}a(t)}}var s=null,c=!1,l=e(window),r=0,u={},d={},p={},m={selector:null,appendTo:null,trigger:"right",autoHide:!1,delay:200,reposition:!0,determinePosition:function(t){if(e.ui&&e.ui.position)t.css("display","block").position({my:"center top",at:"center bottom",of:this,offset:"0 5",collision:"fit"}).css("display","none");else{var n=this.offset();n.top+=this.outerHeight(),n.left+=this.outerWidth()/2-t.outerWidth()/2,t.css(n)}},position:function(e,n,o){var i;if(!n&&!o)return e.determinePosition.call(this,e.$menu),t;i="maintain"===n&&"maintain"===o?e.$menu.position():{top:o,left:n};var a=l.scrollTop()+l.height(),s=l.scrollLeft()+l.width(),c=e.$menu.height(),r=e.$menu.width();i.top+c>a&&(i.top-=c),i.left+r>s&&(i.left-=r),e.$menu.css(i)},positionSubmenu:function(t){if(e.ui&&e.ui.position)t.css("display","block").position({my:"left top",at:"right top",of:this,collision:"flipfit fit"}).css("display","");else{var n={top:0,left:this.outerWidth()};t.css(n)}},zIndex:1,animation:{duration:50,show:"slideDown",hide:"slideUp"},events:{show:e.noop,hide:e.noop},callback:null,items:{}},f={timer:null,pageX:null,pageY:null},h=function(e){for(var t=0,n=e;;)if(t=Math.max(t,parseInt(n.css("z-index"),10)||0),n=n.parent(),!n||!n.length||"html body".indexOf(n.prop("nodeName").toLowerCase())>-1)break;return t},g={abortevent:function(e){e.preventDefault(),e.stopImmediatePropagation()},contextmenu:function(t){var n=e(this);if(t.preventDefault(),t.stopImmediatePropagation(),!("right"!=t.data.trigger&&t.originalEvent||n.hasClass("context-menu-active")||n.hasClass("context-menu-disabled"))){if(s=n,t.data.build){var o=t.data.build(s,t);if(o===!1)return;if(t.data=e.extend(!0,{},m,t.data,o||{}),!t.data.items||e.isEmptyObject(t.data.items))throw window.console&&(console.error||console.log)("No items specified to show in contextMenu"),Error("No Items sepcified");t.data.$trigger=s,x.create(t.data)}x.show.call(n,t.data,t.pageX,t.pageY)}},click:function(t){t.preventDefault(),t.stopImmediatePropagation(),e(this).trigger(e.Event("contextmenu",{data:t.data,pageX:t.pageX,pageY:t.pageY}))},mousedown:function(t){var n=e(this);s&&s.length&&!s.is(n)&&s.data("contextMenu").$menu.trigger("contextmenu:hide"),2==t.button&&(s=n.data("contextMenuActive",!0))},mouseup:function(t){var n=e(this);n.data("contextMenuActive")&&s&&s.length&&s.is(n)&&!n.hasClass("context-menu-disabled")&&(t.preventDefault(),t.stopImmediatePropagation(),s=n,n.trigger(e.Event("contextmenu",{data:t.data,pageX:t.pageX,pageY:t.pageY}))),n.removeData("contextMenuActive")},mouseenter:function(t){var n=e(this),o=e(t.relatedTarget),i=e(document);o.is(".context-menu-list")||o.closest(".context-menu-list").length||s&&s.length||(f.pageX=t.pageX,f.pageY=t.pageY,f.data=t.data,i.on("mousemove.contextMenuShow",g.mousemove),f.timer=setTimeout(function(){f.timer=null,i.off("mousemove.contextMenuShow"),s=n,n.trigger(e.Event("contextmenu",{data:f.data,pageX:f.pageX,pageY:f.pageY}))},t.data.delay))},mousemove:function(e){f.pageX=e.pageX,f.pageY=e.pageY},mouseleave:function(t){var n=e(t.relatedTarget);if(!n.is(".context-menu-list")&&!n.closest(".context-menu-list").length){try{clearTimeout(f.timer)}catch(t){}f.timer=null}},layerClick:function(n){var o,i,a=e(this),s=a.data("contextMenuRoot"),c=n.button,r=n.pageX,u=n.pageY;n.preventDefault(),n.stopImmediatePropagation(),setTimeout(function(){var a,d="left"==s.trigger&&0===c||"right"==s.trigger&&2===c;if(document.elementFromPoint&&(s.$layer.hide(),o=document.elementFromPoint(r-l.scrollLeft(),u-l.scrollTop()),s.$layer.show()),s.reposition&&d)if(document.elementFromPoint){if(s.$trigger.is(o)||s.$trigger.has(o).length)return s.position.call(s.$trigger,s,r,u),t}else if(i=s.$trigger.offset(),a=e(window),i.top+=a.scrollTop(),i.top<=n.pageY&&(i.left+=a.scrollLeft(),i.left<=n.pageX&&(i.bottom=i.top+s.$trigger.outerHeight(),i.bottom>=n.pageY&&(i.right=i.left+s.$trigger.outerWidth(),i.right>=n.pageX))))return s.position.call(s.$trigger,s,r,u),t;o&&d&&s.$trigger.one("contextmenu:hidden",function(){e(o).contextMenu({x:r,y:u})}),s.$menu.trigger("contextmenu:hide")},50)},keyStop:function(e,t){t.isInput||e.preventDefault(),e.stopPropagation()},key:function(e){var n=s.data("contextMenu")||{};switch(e.keyCode){case 9:case 38:if(g.keyStop(e,n),n.isInput){if(9==e.keyCode&&e.shiftKey)return e.preventDefault(),n.$selected&&n.$selected.find("input, textarea, select").blur(),n.$menu.trigger("prevcommand"),t;if(38==e.keyCode&&"checkbox"==n.$selected.find("input, textarea, select").prop("type"))return e.preventDefault(),t}else if(9!=e.keyCode||e.shiftKey)return n.$menu.trigger("prevcommand"),t;case 40:if(g.keyStop(e,n),!n.isInput)return n.$menu.trigger("nextcommand"),t;if(9==e.keyCode)return e.preventDefault(),n.$selected&&n.$selected.find("input, textarea, select").blur(),n.$menu.trigger("nextcommand"),t;if(40==e.keyCode&&"checkbox"==n.$selected.find("input, textarea, select").prop("type"))return e.preventDefault(),t;break;case 37:if(g.keyStop(e,n),n.isInput||!n.$selected||!n.$selected.length)break;if(!n.$selected.parent().hasClass("context-menu-root")){var o=n.$selected.parent().parent();return n.$selected.trigger("contextmenu:blur"),n.$selected=o,t}break;case 39:if(g.keyStop(e,n),n.isInput||!n.$selected||!n.$selected.length)break;var i=n.$selected.data("contextMenu")||{};if(i.$menu&&n.$selected.hasClass("context-menu-submenu"))return n.$selected=null,i.$selected=null,i.$menu.trigger("nextcommand"),t;break;case 35:case 36:return n.$selected&&n.$selected.find("input, textarea, select").length?t:((n.$selected&&n.$selected.parent()||n.$menu).children(":not(.disabled, .not-selectable)")[36==e.keyCode?"first":"last"]().trigger("contextmenu:focus"),e.preventDefault(),t);case 13:if(g.keyStop(e,n),n.isInput){if(n.$selected&&!n.$selected.is("textarea, select"))return e.preventDefault(),t;break}return n.$selected&&n.$selected.trigger("mouseup"),t;case 32:case 33:case 34:return g.keyStop(e,n),t;case 27:return g.keyStop(e,n),n.$menu.trigger("contextmenu:hide"),t;default:var a=String.fromCharCode(e.keyCode).toUpperCase();if(n.accesskeys[a])return n.accesskeys[a].$node.trigger(n.accesskeys[a].$menu?"contextmenu:focus":"mouseup"),t}e.stopPropagation(),n.$selected&&n.$selected.trigger(e)},prevItem:function(t){t.stopPropagation();var n=e(this).data("contextMenu")||{};if(n.$selected){var o=n.$selected;n=n.$selected.parent().data("contextMenu")||{},n.$selected=o}for(var i=n.$menu.children(),a=n.$selected&&n.$selected.prev().length?n.$selected.prev():i.last(),s=a;a.hasClass("disabled")||a.hasClass("not-selectable");)if(a=a.prev().length?a.prev():i.last(),a.is(s))return;n.$selected&&g.itemMouseleave.call(n.$selected.get(0),t),g.itemMouseenter.call(a.get(0),t);var c=a.find("input, textarea, select");c.length&&c.focus()},nextItem:function(t){t.stopPropagation();var n=e(this).data("contextMenu")||{};if(n.$selected){var o=n.$selected;n=n.$selected.parent().data("contextMenu")||{},n.$selected=o}for(var i=n.$menu.children(),a=n.$selected&&n.$selected.next().length?n.$selected.next():i.first(),s=a;a.hasClass("disabled")||a.hasClass("not-selectable");)if(a=a.next().length?a.next():i.first(),a.is(s))return;n.$selected&&g.itemMouseleave.call(n.$selected.get(0),t),g.itemMouseenter.call(a.get(0),t);var c=a.find("input, textarea, select");c.length&&c.focus()},focusInput:function(){var t=e(this).closest(".context-menu-item"),n=t.data(),o=n.contextMenu,i=n.contextMenuRoot;i.$selected=o.$selected=t,i.isInput=o.isInput=!0},blurInput:function(){var t=e(this).closest(".context-menu-item"),n=t.data(),o=n.contextMenu,i=n.contextMenuRoot;i.isInput=o.isInput=!1},menuMouseenter:function(){var t=e(this).data().contextMenuRoot;t.hovering=!0},menuMouseleave:function(t){var n=e(this).data().contextMenuRoot;n.$layer&&n.$layer.is(t.relatedTarget)&&(n.hovering=!1)},itemMouseenter:function(n){var o=e(this),i=o.data(),a=i.contextMenu,s=i.contextMenuRoot;return s.hovering=!0,n&&s.$layer&&s.$layer.is(n.relatedTarget)&&(n.preventDefault(),n.stopImmediatePropagation()),(a.$menu?a:s).$menu.children(".hover").trigger("contextmenu:blur"),o.hasClass("disabled")||o.hasClass("not-selectable")?(a.$selected=null,t):(o.trigger("contextmenu:focus"),t)},itemMouseleave:function(n){var o=e(this),i=o.data(),a=i.contextMenu,s=i.contextMenuRoot;return s!==a&&s.$layer&&s.$layer.is(n.relatedTarget)?(s.$selected&&s.$selected.trigger("contextmenu:blur"),n.preventDefault(),n.stopImmediatePropagation(),s.$selected=a.$selected=a.$node,t):(o.trigger("contextmenu:blur"),t)},itemClick:function(t){var n,o=e(this),i=o.data(),a=i.contextMenu,s=i.contextMenuRoot,c=i.contextMenuKey;if(a.items[c]&&!o.is(".disabled, .context-menu-submenu, .context-menu-separator, .not-selectable")){if(t.preventDefault(),t.stopImmediatePropagation(),e.isFunction(s.callbacks[c])&&Object.prototype.hasOwnProperty.call(s.callbacks,c))n=s.callbacks[c];else{if(!e.isFunction(s.callback))return;n=s.callback}n.call(s.$trigger,c,s)!==!1?s.$menu.trigger("contextmenu:hide"):s.$menu.parent().length&&x.update.call(s.$trigger,s)}},inputClick:function(e){e.stopImmediatePropagation()},hideMenu:function(t,n){var o=e(this).data("contextMenuRoot");x.hide.call(o.$trigger,o,n&&n.force)},focusItem:function(t){t.stopPropagation();var n=e(this),o=n.data(),i=o.contextMenu,a=o.contextMenuRoot;n.addClass("hover").siblings(".hover").trigger("contextmenu:blur"),i.$selected=a.$selected=n,i.$node&&a.positionSubmenu.call(i.$node,i.$menu)},blurItem:function(t){t.stopPropagation();var n=e(this),o=n.data(),i=o.contextMenu;o.contextMenuRoot,n.removeClass("hover"),i.$selected=null}},x={show:function(n,o,i){var a=e(this),c={};return e("#context-menu-layer").trigger("mousedown"),n.$trigger=a,n.events.show.call(a,n)===!1?(s=null,t):(x.update.call(a,n),n.position.call(a,n,o,i),n.zIndex&&(c.zIndex=h(a)+n.zIndex),x.layer.call(n.$menu,n,c.zIndex),n.$menu.find("ul").css("zIndex",c.zIndex+1),n.$menu.css(c)[n.animation.show](n.animation.duration,function(){a.trigger("contextmenu:visible")}),a.data("contextMenu",n).addClass("context-menu-active"),e(document).off("keydown.contextMenu").on("keydown.contextMenu",g.key),n.autoHide&&e(document).on("mousemove.contextMenuAutoHide",function(e){var t=a.offset();t.right=t.left+a.outerWidth(),t.bottom=t.top+a.outerHeight(),!n.$layer||n.hovering||e.pageX>=t.left&&e.pageX<=t.right&&e.pageY>=t.top&&e.pageY<=t.bottom||n.$menu.trigger("contextmenu:hide")}),t)},hide:function(n,o){var i=e(this);if(n||(n=i.data("contextMenu")||{}),o||!n.events||n.events.hide.call(i,n)!==!1){if(i.removeData("contextMenu").removeClass("context-menu-active"),n.$layer){setTimeout(function(e){return function(){e.remove()}}(n.$layer),10);try{delete n.$layer}catch(a){n.$layer=null}}s=null,n.$menu.find(".hover").trigger("contextmenu:blur"),n.$selected=null,e(document).off(".contextMenuAutoHide").off("keydown.contextMenu"),n.$menu&&n.$menu[n.animation.hide](n.animation.duration,function(){n.build&&(n.$menu.remove(),e.each(n,function(e){switch(e){case"ns":case"selector":case"build":case"trigger":return!0;default:n[e]=t;try{delete n[e]}catch(o){}return!0}})),setTimeout(function(){i.trigger("contextmenu:hidden")},10)})}},create:function(o,i){i===t&&(i=o),o.$menu=e('<ul class="context-menu-list"></ul>').addClass(o.className||"").data({contextMenu:o,contextMenuRoot:i}),e.each(["callbacks","commands","inputs"],function(e,t){o[t]={},i[t]||(i[t]={})}),i.accesskeys||(i.accesskeys={}),e.each(o.items,function(t,a){var s=e('<li class="context-menu-item"></li>').addClass(a.className||""),c=null,l=null;if(s.on("click",e.noop),a.$node=s.data({contextMenu:o,contextMenuRoot:i,contextMenuKey:t}),a.accesskey)for(var r,u=n(a.accesskey),d=0;r=u[d];d++)if(!i.accesskeys[r]){i.accesskeys[r]=a,a._name=a.name.replace(RegExp("("+r+")","i"),'<span class="context-menu-accesskey">$1</span>');break}if("string"==typeof a)s.addClass("context-menu-separator not-selectable");else if(a.type&&p[a.type])p[a.type].call(s,a,o,i),e.each([o,i],function(n,o){o.commands[t]=a,e.isFunction(a.callback)&&(o.callbacks[t]=a.callback)});else{switch("html"==a.type?s.addClass("context-menu-html not-selectable"):a.type?(c=e("<label></label>").appendTo(s),e("<span></span>").html(a._name||a.name).appendTo(c),s.addClass("context-menu-input"),o.hasTypes=!0,e.each([o,i],function(e,n){n.commands[t]=a,n.inputs[t]=a})):a.items&&(a.type="sub"),a.type){case"text":l=e('<input type="text" value="1" name="" value="">').attr("name","context-menu-input-"+t).val(a.value||"").appendTo(c);break;case"textarea":l=e('<textarea name=""></textarea>').attr("name","context-menu-input-"+t).val(a.value||"").appendTo(c),a.height&&l.height(a.height);break;case"checkbox":l=e('<input type="checkbox" value="1" name="" value="">').attr("name","context-menu-input-"+t).val(a.value||"").prop("checked",!!a.selected).prependTo(c);break;case"radio":l=e('<input type="radio" value="1" name="" value="">').attr("name","context-menu-input-"+a.radio).val(a.value||"").prop("checked",!!a.selected).prependTo(c);break;case"select":l=e('<select name="">').attr("name","context-menu-input-"+t).appendTo(c),a.options&&(e.each(a.options,function(t,n){e("<option></option>").val(t).text(n).appendTo(l)}),l.val(a.selected));break;case"sub":e("<span></span>").html(a._name||a.name).appendTo(s),a.appendTo=a.$node,x.create(a,i),s.data("contextMenu",a).addClass("context-menu-submenu"),a.callback=null;break;case"html":e(a.html).appendTo(s);break;default:e.each([o,i],function(n,o){o.commands[t]=a,e.isFunction(a.callback)&&(o.callbacks[t]=a.callback)}),e("<span></span>").html(a._name||a.name||"").appendTo(s)}a.type&&"sub"!=a.type&&"html"!=a.type&&(l.on("focus",g.focusInput).on("blur",g.blurInput),a.events&&l.on(a.events,o)),a.icon&&s.addClass("icon icon-"+a.icon)}a.$input=l,a.$label=c,s.appendTo(o.$menu),!o.hasTypes&&e.support.eventSelectstart&&s.on("selectstart.disableTextSelect",g.abortevent)}),o.$node||o.$menu.css("display","none").addClass("context-menu-root"),o.$menu.appendTo(o.appendTo||document.body)},resize:function(t,n){t.css({position:"absolute",display:"block"}),t.data("width",Math.ceil(t.width())+1),t.css({position:"static",minWidth:"0px",maxWidth:"100000px"}),t.find("> li > ul").each(function(){x.resize(e(this),!0)}),n||t.find("ul").andSelf().css({position:"",display:"",minWidth:"",maxWidth:""}).width(function(){return e(this).data("width")})},update:function(n,o){var i=this;o===t&&(o=n,x.resize(n.$menu)),n.$menu.children().each(function(){var t=e(this),a=t.data("contextMenuKey"),s=n.items[a],c=e.isFunction(s.disabled)&&s.disabled.call(i,a,o)||s.disabled===!0;if(t[c?"addClass":"removeClass"]("disabled"),s.type)switch(t.find("input, select, textarea").prop("disabled",c),s.type){case"text":case"textarea":s.$input.val(s.value||"");break;case"checkbox":case"radio":s.$input.val(s.value||"").prop("checked",!!s.selected);break;case"select":s.$input.val(s.selected||"")}s.$menu&&x.update.call(i,s,o)})},layer:function(t,n){var o=t.$layer=e('<div id="context-menu-layer" style="position:fixed; z-index:'+n+'; top:0; left:0; opacity: 0; filter: alpha(opacity=0); background-color: #000;"></div>').css({height:l.height(),width:l.width(),display:"block"}).data("contextMenuRoot",t).insertBefore(this).on("contextmenu",g.abortevent).on("mousedown",g.layerClick);return e.support.fixedPosition||o.css({position:"absolute",height:e(document).height()}),o}};e.fn.contextMenu=function(n){if(n===t)this.first().trigger("contextmenu");else if(n.x&&n.y)this.first().trigger(e.Event("contextmenu",{pageX:n.x,pageY:n.y}));else if("hide"===n){var o=this.data("contextMenu").$menu;o&&o.trigger("contextmenu:hide")}else"destroy"===n?e.contextMenu("destroy",{context:this}):e.isPlainObject(n)?(n.context=this,e.contextMenu("create",n)):n?this.removeClass("context-menu-disabled"):n||this.addClass("context-menu-disabled");return this},e.contextMenu=function(n,o){"string"!=typeof n&&(o=n,n="create"),"string"==typeof o?o={selector:o}:o===t&&(o={});var i=e.extend(!0,{},m,o||{}),a=e(document),s=a,l=!1;switch(i.context&&i.context.length?(s=e(i.context).first(),i.context=s.get(0),l=i.context!==document):i.context=document,n){case"create":if(!i.selector)throw Error("No selector specified");if(i.selector.match(/.context-menu-(list|item|input)($|\s)/))throw Error('Cannot bind to selector "'+i.selector+'" as it contains a reserved className');if(!i.build&&(!i.items||e.isEmptyObject(i.items)))throw Error("No Items sepcified");switch(r++,i.ns=".contextMenu"+r,l||(u[i.selector]=i.ns),d[i.ns]=i,i.trigger||(i.trigger="right"),c||(a.on({"contextmenu:hide.contextMenu":g.hideMenu,"prevcommand.contextMenu":g.prevItem,"nextcommand.contextMenu":g.nextItem,"contextmenu.contextMenu":g.abortevent,"mouseenter.contextMenu":g.menuMouseenter,"mouseleave.contextMenu":g.menuMouseleave},".context-menu-list").on("mouseup.contextMenu",".context-menu-input",g.inputClick).on({"mouseup.contextMenu":g.itemClick,"contextmenu:focus.contextMenu":g.focusItem,"contextmenu:blur.contextMenu":g.blurItem,"contextmenu.contextMenu":g.abortevent,"mouseenter.contextMenu":g.itemMouseenter,"mouseleave.contextMenu":g.itemMouseleave},".context-menu-item"),c=!0),s.on("contextmenu"+i.ns,i.selector,i,g.contextmenu),l&&s.on("remove"+i.ns,function(){e(this).contextMenu("destroy")}),i.trigger){case"hover":s.on("mouseenter"+i.ns,i.selector,i,g.mouseenter).on("mouseleave"+i.ns,i.selector,i,g.mouseleave);break;case"left":s.on("click"+i.ns,i.selector,i,g.click)}i.build||x.create(i);break;case"destroy":var p;if(l){var f=i.context;e.each(d,function(t,n){if(n.context!==f)return!0;p=e(".context-menu-list").filter(":visible"),p.length&&p.data().contextMenuRoot.$trigger.is(e(n.context).find(n.selector))&&p.trigger("contextmenu:hide",{force:!0});try{d[n.ns].$menu&&d[n.ns].$menu.remove(),delete d[n.ns]}catch(o){d[n.ns]=null}return e(n.context).off(n.ns),!0})}else if(i.selector){if(u[i.selector]){p=e(".context-menu-list").filter(":visible"),p.length&&p.data().contextMenuRoot.$trigger.is(i.selector)&&p.trigger("contextmenu:hide",{force:!0});try{d[u[i.selector]].$menu&&d[u[i.selector]].$menu.remove(),delete d[u[i.selector]]}catch(h){d[u[i.selector]]=null}a.off(u[i.selector])}}else a.off(".contextMenu .contextMenuAutoHide"),e.each(d,function(t,n){e(n.context).off(n.ns)}),u={},d={},r=0,c=!1,e("#context-menu-layer, .context-menu-list").remove();break;case"html5":(!e.support.htmlCommand&&!e.support.htmlMenuitem||"boolean"==typeof o&&o)&&e('menu[type="context"]').each(function(){this.id&&e.contextMenu({selector:"[contextmenu="+this.id+"]",items:e.contextMenu.fromMenu(this)})}).css("display","none");break;default:throw Error('Unknown operation "'+n+'"')}return this},e.contextMenu.setInputValues=function(n,o){o===t&&(o={}),e.each(n.inputs,function(e,t){switch(t.type){case"text":case"textarea":t.value=o[e]||"";break;case"checkbox":t.selected=o[e]?!0:!1;break;case"radio":t.selected=(o[t.radio]||"")==t.value?!0:!1;break;case"select":t.selected=o[e]||""}})},e.contextMenu.getInputValues=function(n,o){return o===t&&(o={}),e.each(n.inputs,function(e,t){switch(t.type){case"text":case"textarea":case"select":o[e]=t.$input.val();break;case"checkbox":o[e]=t.$input.prop("checked");break;case"radio":t.$input.prop("checked")&&(o[t.radio]=t.value)}}),o},e.contextMenu.fromMenu=function(t){var n=e(t),o={};return i(o,n.children()),o},e.contextMenu.defaults=m,e.contextMenu.types=p,e.contextMenu.handle=g,e.contextMenu.op=x,e.contextMenu.menus=d}(jQuery),define("contextmenu/0.1.0/contextmenu",[],function(){return $});