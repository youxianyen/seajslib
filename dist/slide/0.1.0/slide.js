/* 2013-04-11 */
(function(t){var r={picArr:"#photo li",txtArr:"#title li",navArr:"#nav span",current:"current",timeout:2e3,speed:500,box:"#photo",playtype:"display"},n=function(n){this.config=o=t.extend({},r,n),this.current=0,this.photoArr=t(o.picArr),this.navArr=t(o.navArr),this.titleArr=t(o.txtArr),this.count=this.photoArr.size(),this.zindex=this.count+2,this.width=this.photoArr.width(),this.height=this.photoArr.height(),this.InterVal=null,this.init(o)};n.prototype={init:function(){for(var r=this,n=r.config,e="",i=1;r.count>=i;i++){var o=1==i?'class="'+n.current+'"':"";e+="<span "+o+">"+i+"</span>"}"sideslip"==n.playtype&&r.photoArr.each(function(n){t(r.photoArr[n]).css("z-index",r.count-1-n).show()}),r.navArr.html(e),r.photoArr.hover(function(){clearInterval(r.InterVal)},function(){r.InterVal=setInterval(function(){r.play(n.playtype)},n.timeout)}),r.navArr.find("span").hover(function(){r.current=t(this).index()-1,r.play(n.playtype),clearInterval(r.InterVal)},function(){r.InterVal=setInterval(function(){r.play(n.playtype)},n.timeout)}),r.InterVal=setInterval(function(){r.play(n.playtype)},n.timeout)},play:function(t){this[t]||(t="display"),this[t]()},display:function(){var t=this,r=t.config;t.current++,t.current==t.count&&(t.current=0),t.photoArr.hide().eq(t.current).show(),t.navArr.find("span").removeClass(r.current).eq(t.current).addClass(r.current),t.titleArr.hide().eq(t.current).show()},slide:function(){var r=this,n=r.config;r.photoArr.outerWidth(),r.photoArr.outerHeight(),r.current++,r.current==r.count&&(r.current=0),"top"==n.direction?t(n.box).animate({scrollTop:r.current*r.height},n.speed):t(n.box).animate({scrollLeft:r.current*r.width},n.speed),r.navArr.find("span").removeClass(n.current).eq(r.current).addClass(n.current),"top"==n.direction?t(r.photoArr.parent()).height(r.count*r.height):t(r.photoArr.parent()).width(r.count*r.width)},shadow:function(){var r=this,n=r.config;r.photoArr.each(function(n){t(r.photoArr[n]).css("z-index",r.count-n).show()}),t(r.photoArr[r.current]).css("z-index",r.zindex).fadeOut(n.speed),r.current++,r.current==r.count&&(r.current=0),t(r.photoArr[r.current]).css("z-index",r.zindex-1).show(),r.navArr.find("span").removeClass(n.current).eq(r.current).addClass(n.current),r.zindex=r.zindex+1},sideslip:function(){var r=this,n=r.config;r.photoArr.css({position:"absolute",top:0,left:0,overflow:"hidden",width:r.width,height:r.height}),r.resetIndex(r.current),t(r.photoArr[r.current]).animate({left:-r.width},r.timeout),r.current++,r.current==r.count&&(r.current=0),t(r.photoArr[r.current]).animate({zIndex:r.count-2},r.timeout),r.navArr.find("span").removeClass(n.current).eq(r.current).addClass(n.current),r.zindex=r.zindex+1},resetIndex:function(r){var n=this,e=n.count-1;t(n.photoArr).each(function(i){e--,r>i&&(e=n.current-1-i),i==r&&(e=n.count-1),t(n.photoArr[i]).css("z-index",e)})}},t.fn.slide=function(){var r=t(this),e=r.data();e.picArr=r.find("li").size()?r.find("li"):r.find(".item"),e.box=r.find(".box"),e.navArr=r.find(".nav"),config=e||{},new n(config)}})(jQuery),define("slide/0.1.0/slide",[],function(){return $});