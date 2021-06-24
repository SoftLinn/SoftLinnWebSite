!function(r){"use strict";var n={initialize:function(){this.event(),this.hoverDropdown(),this.navbarSticky(),this.navbarScrollspy()},event:function(){var a,n,o,s,e,t,i,l=r("nav.navbar.bootsnav");l.hasClass("navbar-sticky")&&l.wrap("<div class='wrap-sticky'></div>"),l.hasClass("brand-center")&&(a=new Array,n=(i=r("nav.brand-center")).find("ul.navbar-nav"),i.prepend("<span class='storage-name' style='display:none;'></span>"),i.find("ul.navbar-nav > li").each(function(){var n;r(this).hasClass("active")&&(n=r("a",this).eq(0).text(),r(".storage-name").html(n)),a.push(r(this).html())}),o=a.splice(0,Math.round(a.length/2)),s=a,e="",(t=function(n){e="";for(var a=0;a<n.length;a++)e+="<li>"+n[a]+"</li>"})(o),n.html(e),i.find("ul.nav").first().addClass("navbar-left"),t(s),n.after('<ul class="nav navbar-nav"></ul>').next().html(e),i.find("ul.nav").last().addClass("navbar-right"),i.find("ul.nav.navbar-left").wrap("<div class='col-half left'></div>"),i.find("ul.nav.navbar-right").wrap("<div class='col-half right'></div>"),i.find("ul.navbar-nav > li").each(function(){var n=r("ul.dropdown-menu",this),a=r("ul.megamenu-content",this);n.closest("li").addClass("dropdown"),a.closest("li").addClass("megamenu-fw")}),""==!(i=r(".storage-name").html())&&r("ul.navbar-nav > li:contains('"+i+"')").addClass("active")),l.hasClass("navbar-sidebar")?(r("body").addClass("wrap-nav-sidebar"),l.wrapInner("<div class='scroller'></div>")):r(".bootsnav").addClass("on"),l.find("ul.nav").hasClass("navbar-center")&&l.addClass("menu-center"),l.hasClass("navbar-full")?(r("nav.navbar.bootsnav").find("ul.nav").wrap("<div class='wrap-full-menu'></div>"),r(".wrap-full-menu").wrap("<div class='nav-full'></div>"),r("ul.nav.navbar-nav").prepend("<li class='close-full-menu'><a href='#'><i class='fa fa-times'></i></a></li>")):l.hasClass("navbar-mobile")?l.removeClass("no-full"):l.addClass("no-full"),l.hasClass("navbar-mobile")&&(r(".navbar-collapse").on("shown.bs.collapse",function(){r("body").addClass("side-right")}),r(".navbar-collapse").on("hide.bs.collapse",function(){r("body").removeClass("side-right")}),r(window).on("resize",function(){r("body").removeClass("side-right")})),l.hasClass("no-background")&&r(window).on("scroll",function(){34<r(window).scrollTop()?r(".navbar-fixed").removeClass("no-background"):r(".navbar-fixed").addClass("no-background")}),l.hasClass("navbar-transparent")&&r(window).on("scroll",function(){34<r(window).scrollTop()?r(".navbar-fixed").removeClass("navbar-transparent"):r(".navbar-fixed").addClass("navbar-transparent")}),r(".btn-cart").on("click",function(n){n.stopPropagation()}),r("nav.navbar.bootsnav .attr-nav").each(function(){r("li.search > a",this).on("click",function(n){n.preventDefault(),r(".top-search").slideToggle()})}),r(".input-group-addon.close-search").on("click",function(){r(".top-search").slideUp()}),r("nav.navbar.bootsnav .attr-nav").each(function(){r("li.side-menu > a",this).on("click",function(n){n.preventDefault(),r("nav.navbar.bootsnav > .side").toggleClass("on"),r("body").toggleClass("on-side")})}),r(".side .close-side").on("click",function(n){n.preventDefault(),r("nav.navbar.bootsnav > .side").removeClass("on"),r("body").removeClass("on-side")}),r("body").wrapInner("<div class='wrapper'></div>")},hoverDropdown:function(){var n,a=r("nav.navbar.bootsnav"),o=r(window).width(),s=r(window).height(),e=a.find("ul.nav").data("in"),t=a.find("ul.nav").data("out");o<991?(r(".scroller").css("height","auto"),r("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseenter"),r("nav.navbar.bootsnav ul.nav").find("li.dropdown").off("mouseleave"),r("nav.navbar.bootsnav ul.nav").find(".title").off("mouseenter"),r("nav.navbar.bootsnav ul.nav").off("mouseleave"),r("nav.navbar.bootsnav ul.nav").each(function(){r(".dropdown-menu",this).removeClass(t),r("a.dropdown-toggle",this).off("click"),r("a.dropdown-toggle",this).on("click",function(n){return n.stopPropagation(),r(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle().toggleClass(e),r(this).closest("li.dropdown").first().toggleClass("on"),!1}),r("li.dropdown",this).each(function(){return r(this).find(".dropdown-menu").stop().fadeOut(),r(this).on("hidden.bs.dropdown",function(){r(this).find(".dropdown-menu").stop().fadeOut()}),!1}),r(".megamenu-fw",this).each(function(){r(".col-menu",this).each(function(){r(".content",this).stop().fadeOut(),r(".title",this).off("click"),r(".title",this).on("click",function(){return r(this).closest(".col-menu").find(".content").stop().fadeToggle().addClass(e),r(this).closest(".col-menu").toggleClass("on"),!1}),r(".content",this).on("click",function(n){n.stopPropagation()})})})}),n=function(){r("li.dropdown",this).removeClass("on"),r(".dropdown-menu",this).stop().fadeOut(),r(".dropdown-menu",this).removeClass(e),r(".col-menu",this).removeClass("on"),r(".col-menu .content",this).stop().fadeOut(),r(".col-menu .content",this).removeClass(e)},r("nav.navbar.bootsnav").on("mouseleave",function(){n()}),r("nav.navbar.bootsnav .attr-nav").each(function(){r("li.dropdown",this).off("mouseenter"),r("li.dropdown",this).off("mouseleave"),r("a.dropdown-toggle",this).off("click"),r("a.dropdown-toggle",this).on("click",function(n){n.stopPropagation(),r(this).closest("li.dropdown").find(".dropdown-menu").first().stop().fadeToggle(),r(".navbar-toggle").each(function(){r(".fa",this).removeClass("fa-times"),r(".fa",this).addClass("fa-bars"),r(".navbar-collapse").removeClass("in"),r(".navbar-collapse").removeClass("on")})}),r(this).on("mouseleave",function(){return r(".dropdown-menu",this).stop().fadeOut(),r("li.dropdown",this).removeClass("on"),!1})}),r(".navbar-toggle").each(function(){r(this).off("click"),r(this).on("click",function(){r(".fa",this).toggleClass("fa-bars"),r(".fa",this).toggleClass("fa-times"),n()})})):991<o&&(r(".scroller").css("height",s+"px"),a.hasClass("navbar-sidebar")?r("nav.navbar.bootsnav ul.nav").each(function(){r("a.dropdown-toggle",this).off("click"),r("a.dropdown-toggle",this).on("click",function(n){n.stopPropagation()}),r("li.dropdown",this).on("mouseenter",function(){return r(".dropdown-menu",this).eq(0).removeClass(t),r(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(e),r(this).addClass("on"),!1}),r(".col-menu").each(function(){r(".title",this).on("mouseenter",function(){return r(this).closest(".col-menu").find(".content").stop().fadeIn().addClass(e),r(this).closest(".col-menu").addClass("on"),!1})}),r(this).on("mouseleave",function(){return r(".dropdown-menu",this).stop().removeClass(e),r(".dropdown-menu",this).stop().addClass(t).fadeOut(),r(".col-menu",this).find(".content").stop().fadeOut().removeClass(e),r(".col-menu",this).removeClass("on"),r("li.dropdown",this).removeClass("on"),!1})}):r("nav.navbar.bootsnav ul.nav").each(function(){r("a.dropdown-toggle",this).off("click"),r("a.dropdown-toggle",this).on("click",function(n){n.stopPropagation()}),r(".megamenu-fw",this).each(function(){r(".title",this).off("click"),r("a.dropdown-toggle",this).off("click")}),r("li.dropdown",this).on("mouseenter",function(){return r(".dropdown-menu",this).eq(0).removeClass(t),r(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(e),r(this).addClass("on"),!1}),r("li.dropdown",this).on("mouseleave",function(){r(".dropdown-menu",this).eq(0).removeClass(e),r(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(t),r(this).removeClass("on")}),r(this).on("mouseleave",function(){return r(".dropdown-menu",this).removeClass(e),r(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(t),r("li.dropdown",this).removeClass("on"),!1})}),r("nav.navbar.bootsnav .attr-nav").each(function(){r("a.dropdown-toggle",this).off("click"),r("a.dropdown-toggle",this).on("click",function(n){n.stopPropagation()}),r("li.dropdown",this).on("mouseenter",function(){return r(".dropdown-menu",this).eq(0).removeClass(t),r(".dropdown-menu",this).eq(0).stop().fadeIn().addClass(e),r(this).addClass("on"),!1}),r("li.dropdown",this).on("mouseleave",function(){r(".dropdown-menu",this).eq(0).removeClass(e),r(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(t),r(this).removeClass("on")}),r(this).on("mouseleave",function(){return r(".dropdown-menu",this).removeClass(e),r(".dropdown-menu",this).eq(0).stop().fadeOut().addClass(t),r("li.dropdown",this).removeClass("on"),!1})})),a.hasClass("navbar-full")&&(s=r(window).height(),a=r(window).width(),r(".nav-full").css("height",s+"px"),r(".wrap-full-menu").css("height",s+"px"),r(".wrap-full-menu").css("width",a+"px"),r(".navbar-toggle").each(function(){var a=r(this).data("target");r(this).off("click"),r(this).on("click",function(n){return n.preventDefault(),r(a).removeClass(t),r(a).addClass("in"),r(a).addClass(e),!1}),r("li.close-full-menu").on("click",function(n){return n.preventDefault(),r(a).addClass(t),setTimeout(function(){r(a).removeClass("in"),r(a).removeClass(e)},500),!1})}))},navbarSticky:function(){var n,a,o=r("nav.navbar.bootsnav");o.hasClass("navbar-sticky")&&(n=o.height(),r(".wrap-sticky").height(n),a=r(".wrap-sticky").offset().top,r(window).on("scroll",function(){var n=r(window).scrollTop();a<n?o.addClass("sticked"):o.removeClass("sticked")}))},navbarScrollspy:function(){var n,a=r(".navbar-scrollspy"),o=r("body"),t=r("nav.navbar.bootsnav"),s=t.outerHeight();a.length&&(o.scrollspy({target:".navbar",offset:s}),r(".scroll").on("click",function(n){n.preventDefault(),r(".scroll").removeClass("active"),r(this).addClass("active"),r(".navbar-collapse").removeClass("in"),r(".navbar-toggle").each(function(){r(".fa",this).removeClass("fa-times"),r(".fa",this).addClass("fa-bars")});r(window).scrollTop();var a=r(this).find("a"),o=r(a.attr("href")).offset().top,s=r(window).width(),e=t.data("minus-value-desktop"),n=t.data("minus-value-mobile"),a=t.data("speed");n=992<s?o-e:o-n,r("html, body").stop().animate({scrollTop:n},a)}),n=function(){var n=o.data("bs.scrollspy");n&&(s=t.outerHeight(),n.options.offset=s,o.data("bs.scrollspy",n),o.scrollspy("refresh"))},r(window).on("resize",function(){clearTimeout(void 0);setTimeout(n,200)}))}};r(document).ready(function(){n.initialize()}),r(window).on("resize",function(){n.hoverDropdown(),setTimeout(function(){n.navbarSticky()},500),r(".navbar-toggle").each(function(){r(".fa",this).removeClass("fa-times"),r(".fa",this).addClass("fa-bars"),r(this).removeClass("fixed")}),r(".navbar-collapse").removeClass("in"),r(".navbar-collapse").removeClass("on"),r(".navbar-collapse").removeClass("bounceIn")})}(jQuery);