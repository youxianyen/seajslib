/* 2013-05-22 */
define("fixed/0.3.0/fixed",[],function(t,e){function o(){return document.documentElement.scrollTop||document.body.scrollTop}function n(){return document.documentElement.scrollLeft||document.body.scrollLeft}function i(){if(a&&"fixed"!==document.body.currentStyle.backgroundAttachment){var t=s("html")[0].style;t.backgroundImage="url(about:blank)",t.backgroundAttachment="fixed"}}var s=jQuery,a=window.VBArray&&!window.XMLHttpRequest,r={type:"onright",offset:0,right:0,top:"auto",bottom:0,trigger:"auto"},c=[];i(),s.fn.fixed=function(){return this.each(function(t,e){var o=s(e),n=o.data();n=s.extend({},r,n),n.element=e,n._css={position:o.css("position")||"static",left:o.css("left")||"auto",right:o.css("right")||"auto",top:o.css("top")||"auto",marginLeft:o.css("marginLeft")||"0",offsetTop:o.offset().top},n.type=n.type.toLowerCase(),c.push(n),u.fixed(n)}),this};var u={fixed:a?function(t){var e=t.element,o=e.style,n=0;f[t.type]&&("auto"===t.trigger?(this.absolute(e),n=f[t.type](t),o.setExpression("top","eval(document.documentElement.scrollTop+"+n+')+"px"')):(n=f[t.type](t),t._top=n,t._isFlow&&(o.removeExpression("top"),o.setExpression("top","eval(document.documentElement.scrollTop+"+n+')+"px"'))))}:function(t){var e=t.element,o=s(e),i={position:"fixed"};switch(t.type){case"ontop":i.top=0;break;case"onbottom":i.bottom=0;break;case"onright":i.right=o.data("right")||0,i.top="auto",i.bottom=o.data("bottom")||0;break;case"oncenter":i.top=o.data("top")||"auto","auto"===i.top&&(i.bottom=o.data("bottom")||0),i.left="50%";var a=s(window).width(),r=s(document).width(),c=o.data("offset")||0;r-a>25&&(c+=Math.round((r-a)/2),c+=4),c-=n(),i.marginLeft=c,t.offset=c;break;default:}t.css=i,"auto"===t.trigger?o.css(i):t._isFlow&&o.css(i)},absolute:a?function(t){var e=t.style;e.position="absolute",e.removeExpression("top"),e.removeExpression("left")}:function(t){t.style.position="absolute"}},f={onright:function(t){var e=t.element,o=s(e),n=o.height(),i=s(window).height(),a=o.data("right-ie6")||o.data("right")||0,r=o.data("bottom-ie6")||o.data("bottom")||0;if("auto"===t.trigger||t._isFlow){var c=s(window).width()-a-o.outerWidth();e.style.removeExpression("left"),e.style.setExpression("left","eval(document.documentElement.scrollLeft+"+c+')+"px"')}return i-r-n},oncenter:function(t){var e=t.element,o=s(e),n=o.height(),i=s(window).height(),a=s(window).width(),r=s(document).width(),c=o.data("offset-ie6")||o.data("offset")||0,u=o.data("top-ie6")||o.data("top")||"auto",f=o.data("bottom-ie6")||o.data("bottom")||0;return r-a>25&&(c+=(r-a)/2),("auto"===t.trigger||t._isFlow)&&o.css({right:"auto",left:"50%","margin-left":c}),"auto"===u?i-f-n:u},ontop:function(){return 0},onbottom:function(t){return s(window).height()-s(t.element).outerHeight()}};e.fixed=function(){s("[data-toggle=fixed]").fixed()},setTimeout(function(){e.fixed()},0),setTimeout(function(){function t(){s.each(c,function(t,e){var n=s(e.element),i=e.element.style;"auto"!==e.trigger&&(o()+e.top>=e._css.offsetTop?e._isFlow||(a?(i.position="absolute",i.removeExpression("top"),i.setExpression("top","eval(document.documentElement.scrollTop+"+e._top+')+"px"')):n.css(e.css),e._isFlow=!0):(a&&i.removeExpression("top"),n.css(e._css),e._isFlow=!1,e._css.offsetTop=n.offset().top))})}var e=0,i=0;s(window).bind("scroll.fixed",function(){t(),clearTimeout(i),i=setTimeout(function(){var t=n();t!==e&&(e=n(),s.each(c,function(e,o){if("oncenter"===o.type){var n=s(o.element);o.css.marginLeft=o.offset-t,n.css(o.css)}}))},200)});var r=0;s(window).bind("resize.fixed",function(){a?(clearTimeout(r),r=setTimeout(function(){s.each(c,function(t,e){u.fixed(e)})},0)):s.each(c,function(t,e){u.fixed(e)})}),t()},100)});