var de, ee, Nf, Of, $q;
!(function(t) {
    "use strict";
    "function" == typeof define && define.amd ?
        define(["jquery"], t) :
        "undefined" != typeof exports ?
        (module.exports = t(require("jquery"))) :
        t(jQuery);
})(function(d) {
    "use strict";
    var o,
        r = window.Slick || {};
    (((o = 0),
        (r = function(t, e) {
            var i,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: d(t),
                appendDots: d(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, e) {
                    return d('<button type="button" />').text(e + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
            (n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1,
            }),
            d.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = d(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (i = d(t).data("slick") || {}),
                (n.options = d.extend({}, n.defaults, e, i)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden ?
                ((n.hidden = "mozHidden"),
                    (n.visibilityChange = "mozvisibilitychange")) :
                void 0 !== document.webkitHidden &&
                ((n.hidden = "webkitHidden"),
                    (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = d.proxy(n.autoPlay, n)),
                (n.autoPlayClear = d.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = d.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = d.proxy(n.changeSlide, n)),
                (n.clickHandler = d.proxy(n.clickHandler, n)),
                (n.selectHandler = d.proxy(n.selectHandler, n)),
                (n.setPosition = d.proxy(n.setPosition, n)),
                (n.swipeHandler = d.proxy(n.swipeHandler, n)),
                (n.dragHandler = d.proxy(n.dragHandler, n)),
                (n.keyHandler = d.proxy(n.keyHandler, n)),
                (n.instanceUid = o++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        })).prototype.activateADA = function() {
        this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
    }),
    (r.prototype.addSlide = r.prototype.slickAdd =
        function(t, e, i) {
            var n = this;
            if ("boolean" == typeof e)(i = e), (e = null);
            else if (e < 0 || e >= n.slideCount) return !1;
            n.unload(),
                "number" == typeof e ?
                0 === e && 0 === n.$slides.length ?
                d(t).appendTo(n.$slideTrack) :
                i ?
                d(t).insertBefore(n.$slides.eq(e)) :
                d(t).insertAfter(n.$slides.eq(e)) :
                !0 === i ?
                d(t).prependTo(n.$slideTrack) :
                d(t).appendTo(n.$slideTrack),
                (n.$slides = n.$slideTrack.children(this.options.slide)),
                n.$slideTrack.children(this.options.slide).detach(),
                n.$slideTrack.append(n.$slides),
                n.$slides.each(function(t, e) {
                    d(e).attr("data-slick-index", t);
                }),
                (n.$slidesCache = n.$slides),
                n.reinit();
        }),
    (r.prototype.animateHeight = function() {
        var t = this;
        if (
            1 === t.options.slidesToShow &&
            !0 === t.options.adaptiveHeight &&
            !1 === t.options.vertical
        ) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({ height: e }, t.options.speed);
        }
    }),
    (r.prototype.animateSlide = function(t, e) {
        var i = {},
            n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ?
            !1 === n.options.vertical ?
            n.$slideTrack.animate({ left: t },
                n.options.speed,
                n.options.easing,
                e
            ) :
            n.$slideTrack.animate({ top: t },
                n.options.speed,
                n.options.easing,
                e
            ) :
            !1 === n.cssTransitions ?
            (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
                d({ animStart: n.currentLeft }).animate({ animStart: t }, {
                    duration: n.options.speed,
                    easing: n.options.easing,
                    step: function(t) {
                        (t = Math.ceil(t)), !1 === n.options.vertical ?
                            (i[n.animType] = "translate(" + t + "px, 0px)") :
                            (i[n.animType] = "translate(0px," + t + "px)"),
                            n.$slideTrack.css(i);
                    },
                    complete: function() {
                        e && e.call();
                    },
                })) :
            (n.applyTransition(),
                (t = Math.ceil(t)), !1 === n.options.vertical ?
                (i[n.animType] = "translate3d(" + t + "px, 0px, 0px)") :
                (i[n.animType] = "translate3d(0px," + t + "px, 0px)"),
                n.$slideTrack.css(i),
                e &&
                setTimeout(function() {
                    n.disableTransition(), e.call();
                }, n.options.speed));
    }),
    (r.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = d(t).not(this.$slider)), t;
    }),
    (r.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t &&
            "object" == typeof t &&
            t.each(function() {
                var t = d(this).slick("getSlick");
                t.unslicked || t.slideHandler(e, !0);
            });
    }),
    (r.prototype.applyTransition = function(t) {
        var e = this,
            i = {};
        !1 === e.options.fade ?
            (i[e.transitionType] =
                e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) :
            (i[e.transitionType] =
                "opacity " + e.options.speed + "ms " + e.options.cssEase), !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
    }),
    (r.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayClear(),
            t.slideCount > t.options.slidesToShow &&
            (t.autoPlayTimer = setInterval(
                t.autoPlayIterator,
                t.options.autoplaySpeed
            ));
    }),
    (r.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (r.prototype.autoPlayIterator = function() {
        var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
        t.paused ||
            t.interrupted ||
            t.focussed ||
            (!1 === t.options.infinite &&
                (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ?
                    (t.direction = 0) :
                    0 === t.direction &&
                    ((e = t.currentSlide - t.options.slidesToScroll),
                        t.currentSlide - 1 == 0 && (t.direction = 1))),
                t.slideHandler(e));
    }),
    (r.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows &&
            ((t.$prevArrow = d(t.options.prevArrow).addClass("slick-arrow")),
                (t.$nextArrow = d(t.options.nextArrow).addClass("slick-arrow")),
                t.slideCount > t.options.slidesToShow ?
                (t.$prevArrow
                    .removeClass("slick-hidden")
                    .removeAttr("aria-hidden tabindex"),
                    t.$nextArrow
                    .removeClass("slick-hidden")
                    .removeAttr("aria-hidden tabindex"),
                    t.htmlExpr.test(t.options.prevArrow) &&
                    t.$prevArrow.prependTo(t.options.appendArrows),
                    t.htmlExpr.test(t.options.nextArrow) &&
                    t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite &&
                    t.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true")) :
                t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (r.prototype.buildDots = function() {
        var t,
            e,
            i = this;
        if (!0 === i.options.dots) {
            for (
                i.$slider.addClass("slick-dotted"),
                e = d("<ul />").addClass(i.options.dotsClass),
                t = 0; t <= i.getDotCount(); t += 1
            )
                e.append(d("<li />").append(i.options.customPaging.call(this, i, t)));
            (i.$dots = e.appendTo(i.options.appendDots)),
            i.$dots.find("li").first().addClass("slick-active");
        }
    }),
    (r.prototype.buildOut = function() {
        var t = this;
        (t.$slides = t.$slider
            .children(t.options.slide + ":not(.slick-cloned)")
            .addClass("slick-slide")),
        (t.slideCount = t.$slides.length),
        t.$slides.each(function(t, e) {
                d(e)
                    .attr("data-slick-index", t)
                    .data("originalStyling", d(e).attr("style") || "");
            }),
            t.$slider.addClass("slick-slider"),
            (t.$slideTrack =
                0 === t.slideCount ?
                d('<div class="slick-track"/>').appendTo(t.$slider) :
                t.$slides.wrapAll('<div class="slick-track"/>').parent()),
            (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
            t.$slideTrack.css("opacity", 0),
            (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
            d("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
            t.setupInfinite(),
            t.buildArrows(),
            t.buildDots(),
            t.updateDots(),
            t.setSlideClasses(
                "number" == typeof t.currentSlide ? t.currentSlide : 0
            ), !0 === t.options.draggable && t.$list.addClass("draggable");
    }),
    (r.prototype.buildRows = function() {
        var t,
            e,
            i,
            n,
            o,
            s,
            r,
            a = this;
        if (
            ((n = document.createDocumentFragment()),
                (s = a.$slider.children()),
                1 < a.options.rows)
        ) {
            for (
                r = a.options.slidesPerRow * a.options.rows,
                o = Math.ceil(s.length / r),
                t = 0; t < o; t++
            ) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var c = t * r + (e * a.options.slidesPerRow + i);
                        s.get(c) && d.appendChild(s.get(c));
                    }
                    l.appendChild(d);
                }
                n.appendChild(l);
            }
            a.$slider.empty().append(n),
                a.$slider
                .children()
                .children()
                .children()
                .css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block",
                });
        }
    }),
    (r.prototype.checkResponsive = function(t, e) {
        var i,
            n,
            o,
            s = this,
            r = !1,
            a = s.$slider.width(),
            l = window.innerWidth || d(window).width();
        if (
            ("window" === s.respondTo ?
                (o = l) :
                "slider" === s.respondTo ?
                (o = a) :
                "min" === s.respondTo && (o = Math.min(l, a)),
                s.options.responsive &&
                s.options.responsive.length &&
                null !== s.options.responsive)
        ) {
            for (i in ((n = null), s.breakpoints))
                s.breakpoints.hasOwnProperty(i) &&
                (!1 === s.originalSettings.mobileFirst ?
                    o < s.breakpoints[i] && (n = s.breakpoints[i]) :
                    o > s.breakpoints[i] && (n = s.breakpoints[i]));
            null !== n ?
                null !== s.activeBreakpoint ?
                (n !== s.activeBreakpoint || e) &&
                ((s.activeBreakpoint = n),
                    "unslick" === s.breakpointSettings[n] ?
                    s.unslick(n) :
                    ((s.options = d.extend({},
                            s.originalSettings,
                            s.breakpointSettings[n]
                        )), !0 === t && (s.currentSlide = s.options.initialSlide),
                        s.refresh(t)),
                    (r = n)) :
                ((s.activeBreakpoint = n),
                    "unslick" === s.breakpointSettings[n] ?
                    s.unslick(n) :
                    ((s.options = d.extend({},
                            s.originalSettings,
                            s.breakpointSettings[n]
                        )), !0 === t && (s.currentSlide = s.options.initialSlide),
                        s.refresh(t)),
                    (r = n)) :
                null !== s.activeBreakpoint &&
                ((s.activeBreakpoint = null),
                    (s.options = s.originalSettings), !0 === t && (s.currentSlide = s.options.initialSlide),
                    s.refresh(t),
                    (r = n)),
                t || !1 === r || s.$slider.trigger("breakpoint", [s, r]);
        }
    }),
    (r.prototype.changeSlide = function(t, e) {
        var i,
            n,
            o = this,
            s = d(t.currentTarget);
        switch (
            (s.is("a") && t.preventDefault(),
                s.is("li") || (s = s.closest("li")),
                (i =
                    o.slideCount % o.options.slidesToScroll != 0 ?
                    0 :
                    (o.slideCount - o.currentSlide) % o.options.slidesToScroll),
                t.data.message)
        ) {
            case "previous":
                (n = 0 === i ? o.options.slidesToScroll : o.options.slidesToShow - i),
                o.slideCount > o.options.slidesToShow &&
                    o.slideHandler(o.currentSlide - n, !1, e);
                break;
            case "next":
                (n = 0 === i ? o.options.slidesToScroll : i),
                o.slideCount > o.options.slidesToShow &&
                    o.slideHandler(o.currentSlide + n, !1, e);
                break;
            case "index":
                var r =
                    0 === t.data.index ?
                    0 :
                    t.data.index || s.index() * o.options.slidesToScroll;
                o.slideHandler(o.checkNavigable(r), !1, e),
                    s.children().trigger("focus");
                break;
            default:
                return;
        }
    }),
    (r.prototype.checkNavigable = function(t) {
        var e, i;
        if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1]))
            t = e[e.length - 1];
        else
            for (var n in e) {
                if (t < e[n]) {
                    t = i;
                    break;
                }
                i = e[n];
            }
        return t;
    }),
    (r.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots &&
            null !== t.$dots &&
            (d("li", t.$dots)
                .off("click.slick", t.changeSlide)
                .off("mouseenter.slick", d.proxy(t.interrupt, t, !0))
                .off("mouseleave.slick", d.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility &&
                t.$dots.off("keydown.slick", t.keyHandler)),
            t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility &&
                (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
                    t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
            t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
            t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
            t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
            t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
            t.$list.off("click.slick", t.clickHandler),
            d(document).off(t.visibilityChange, t.visibility),
            t.cleanUpSlideEvents(), !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect &&
            d(t.$slideTrack).children().off("click.slick", t.selectHandler),
            d(window).off(
                "orientationchange.slick.slick-" + t.instanceUid,
                t.orientationChange
            ),
            d(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
            d("[draggable!=true]", t.$slideTrack).off(
                "dragstart",
                t.preventDefault
            ),
            d(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
    }),
    (r.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", d.proxy(t.interrupt, t, !0)),
            t.$list.off("mouseleave.slick", d.proxy(t.interrupt, t, !1));
    }),
    (r.prototype.cleanUpRows = function() {
        var t;
        1 < this.options.rows &&
            ((t = this.$slides.children().children()).removeAttr("style"),
                this.$slider.empty().append(t));
    }),
    (r.prototype.clickHandler = function(t) {
        !1 === this.shouldClick &&
            (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
    }),
    (r.prototype.destroy = function(t) {
        var e = this;
        e.autoPlayClear(),
            (e.touchObject = {}),
            e.cleanUpEvents(),
            d(".slick-cloned", e.$slider).detach(),
            e.$dots && e.$dots.remove(),
            e.$prevArrow &&
            e.$prevArrow.length &&
            (e.$prevArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
                e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()),
            e.$nextArrow &&
            e.$nextArrow.length &&
            (e.$nextArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
                e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()),
            e.$slides &&
            (e.$slides
                .removeClass(
                    "slick-slide slick-active slick-center slick-visible slick-current"
                )
                .removeAttr("aria-hidden")
                .removeAttr("data-slick-index")
                .each(function() {
                    d(this).attr("style", d(this).data("originalStyling"));
                }),
                e.$slideTrack.children(this.options.slide).detach(),
                e.$slideTrack.detach(),
                e.$list.detach(),
                e.$slider.append(e.$slides)),
            e.cleanUpRows(),
            e.$slider.removeClass("slick-slider"),
            e.$slider.removeClass("slick-initialized"),
            e.$slider.removeClass("slick-dotted"),
            (e.unslicked = !0),
            t || e.$slider.trigger("destroy", [e]);
    }),
    (r.prototype.disableTransition = function(t) {
        var e = {};
        (e[this.transitionType] = ""), !1 === this.options.fade ?
            this.$slideTrack.css(e) :
            this.$slides.eq(t).css(e);
    }),
    (r.prototype.fadeSlide = function(t, e) {
        var i = this;
        !1 === i.cssTransitions ?
            (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
                i.$slides
                .eq(t)
                .animate({ opacity: 1 }, i.options.speed, i.options.easing, e)) :
            (i.applyTransition(t),
                i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                e &&
                setTimeout(function() {
                    i.disableTransition(t), e.call();
                }, i.options.speed));
    }),
    (r.prototype.fadeSlideOut = function(t) {
        var e = this;
        !1 === e.cssTransitions ?
            e.$slides
            .eq(t)
            .animate({ opacity: 0, zIndex: e.options.zIndex - 2 },
                e.options.speed,
                e.options.easing
            ) :
            (e.applyTransition(t),
                e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (r.prototype.filterSlides = r.prototype.slickFilter =
        function(t) {
            var e = this;
            null !== t &&
                ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(t).appendTo(e.$slideTrack),
                    e.reinit());
        }),
    (r.prototype.focusHandler = function() {
        var i = this;
        i.$slider
            .off("focus.slick blur.slick")
            .on("focus.slick blur.slick", "*", function(t) {
                t.stopImmediatePropagation();
                var e = d(this);
                setTimeout(function() {
                    i.options.pauseOnFocus &&
                        ((i.focussed = e.is(":focus")), i.autoPlay());
                }, 0);
            });
    }),
    (r.prototype.getCurrent = r.prototype.slickCurrentSlide =
        function() {
            return this.currentSlide;
        }),
    (r.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            i = 0,
            n = 0;
        if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++n;
            else
                for (; e < t.slideCount;)
                    ++n,
                    (e = i + t.options.slidesToScroll),
                    (i +=
                        t.options.slidesToScroll <= t.options.slidesToShow ?
                        t.options.slidesToScroll :
                        t.options.slidesToShow);
        else if (!0 === t.options.centerMode) n = t.slideCount;
        else if (t.options.asNavFor)
            for (; e < t.slideCount;)
                ++n,
                (e = i + t.options.slidesToScroll),
                (i +=
                    t.options.slidesToScroll <= t.options.slidesToShow ?
                    t.options.slidesToScroll :
                    t.options.slidesToShow);
        else
            n =
            1 +
            Math.ceil(
                (t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll
            );
        return n - 1;
    }),
    (r.prototype.getLeft = function(t) {
        var e,
            i,
            n,
            o,
            s = this,
            r = 0;
        return (
            (s.slideOffset = 0),
            (i = s.$slides.first().outerHeight(!0)), !0 === s.options.infinite ?
            (s.slideCount > s.options.slidesToShow &&
                ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                    (o = -1), !0 === s.options.vertical &&
                    !0 === s.options.centerMode &&
                    (2 === s.options.slidesToShow ?
                        (o = -1.5) :
                        1 === s.options.slidesToShow && (o = -2)),
                    (r = i * s.options.slidesToShow * o)),
                s.slideCount % s.options.slidesToScroll != 0 &&
                t + s.options.slidesToScroll > s.slideCount &&
                s.slideCount > s.options.slidesToShow &&
                (r =
                    t > s.slideCount ?
                    ((s.slideOffset =
                            (s.options.slidesToShow - (t - s.slideCount)) *
                            s.slideWidth *
                            -1),
                        (s.options.slidesToShow - (t - s.slideCount)) * i * -1) :
                    ((s.slideOffset =
                            (s.slideCount % s.options.slidesToScroll) *
                            s.slideWidth *
                            -1),
                        (s.slideCount % s.options.slidesToScroll) * i * -1))) :
            t + s.options.slidesToShow > s.slideCount &&
            ((s.slideOffset =
                    (t + s.options.slidesToShow - s.slideCount) * s.slideWidth),
                (r = (t + s.options.slidesToShow - s.slideCount) * i)),
            s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ?
            (s.slideOffset =
                (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 -
                (s.slideWidth * s.slideCount) / 2) :
            !0 === s.options.centerMode && !0 === s.options.infinite ?
            (s.slideOffset +=
                s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
                s.slideWidth) :
            !0 === s.options.centerMode &&
            ((s.slideOffset = 0),
                (s.slideOffset +=
                    s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
            (e = !1 === s.options.vertical ?
                t * s.slideWidth * -1 + s.slideOffset :
                t * i * -1 + r), !0 === s.options.variableWidth &&
            ((n =
                    s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ?
                    s.$slideTrack.children(".slick-slide").eq(t) :
                    s.$slideTrack
                    .children(".slick-slide")
                    .eq(t + s.options.slidesToShow)),
                (e = !0 === s.options.rtl ?
                    n[0] ?
                    -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) :
                    0 :
                    n[0] ?
                    -1 * n[0].offsetLeft :
                    0), !0 === s.options.centerMode &&
                ((n =
                        s.slideCount <= s.options.slidesToShow ||
                        !1 === s.options.infinite ?
                        s.$slideTrack.children(".slick-slide").eq(t) :
                        s.$slideTrack
                        .children(".slick-slide")
                        .eq(t + s.options.slidesToShow + 1)),
                    (e = !0 === s.options.rtl ?
                        n[0] ?
                        -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) :
                        0 :
                        n[0] ?
                        -1 * n[0].offsetLeft :
                        0),
                    (e += (s.$list.width() - n.outerWidth()) / 2))),
            e
        );
    }),
    (r.prototype.getOption = r.prototype.slickGetOption =
        function(t) {
            return this.options[t];
        }),
    (r.prototype.getNavigableIndexes = function() {
        var t,
            e = this,
            i = 0,
            n = 0,
            o = [];
        for (
            t = !1 === e.options.infinite ?
            e.slideCount :
            ((i = -1 * e.options.slidesToScroll),
                (n = -1 * e.options.slidesToScroll),
                2 * e.slideCount); i < t;

        )
            o.push(i),
            (i = n + e.options.slidesToScroll),
            (n +=
                e.options.slidesToScroll <= e.options.slidesToShow ?
                e.options.slidesToScroll :
                e.options.slidesToShow);
        return o;
    }),
    (r.prototype.getSlick = function() {
        return this;
    }),
    (r.prototype.getSlideCount = function() {
        var i,
            n,
            o = this;
        return (
            (n = !0 === o.options.centerMode ?
                o.slideWidth * Math.floor(o.options.slidesToShow / 2) :
                0), !0 === o.options.swipeToSlide ?
            (o.$slideTrack.find(".slick-slide").each(function(t, e) {
                    if (e.offsetLeft - n + d(e).outerWidth() / 2 > -1 * o.swipeLeft)
                        return (i = e), !1;
                }),
                Math.abs(d(i).attr("data-slick-index") - o.currentSlide) || 1) :
            o.options.slidesToScroll
        );
    }),
    (r.prototype.goTo = r.prototype.slickGoTo =
        function(t, e) {
            this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
        }),
    (r.prototype.init = function(t) {
        var e = this;
        d(e.$slider).hasClass("slick-initialized") ||
            (d(e.$slider).addClass("slick-initialized"),
                e.buildRows(),
                e.buildOut(),
                e.setProps(),
                e.startLoad(),
                e.loadSlider(),
                e.initializeEvents(),
                e.updateArrows(),
                e.updateDots(),
                e.checkResponsive(!0),
                e.focusHandler()),
            t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(),
            e.options.autoplay && ((e.paused = !1), e.autoPlay());
    }),
    (r.prototype.initADA = function() {
        var i = this,
            n = Math.ceil(i.slideCount / i.options.slidesToShow),
            o = i.getNavigableIndexes().filter(function(t) {
                return 0 <= t && t < i.slideCount;
            });
        i.$slides
            .add(i.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" }),
            null !== i.$dots &&
            (i.$slides
                .not(i.$slideTrack.find(".slick-cloned"))
                .each(function(t) {
                    var e = o.indexOf(t);
                    d(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + i.instanceUid + t,
                            tabindex: -1,
                        }), -1 !== e &&
                        d(this).attr({
                            "aria-describedby": "slick-slide-control" + i.instanceUid + e,
                        });
                }),
                i.$dots
                .attr("role", "tablist")
                .find("li")
                .each(function(t) {
                    var e = o[t];
                    d(this).attr({ role: "presentation" }),
                        d(this)
                        .find("button")
                        .first()
                        .attr({
                            role: "tab",
                            id: "slick-slide-control" + i.instanceUid + t,
                            "aria-controls": "slick-slide" + i.instanceUid + e,
                            "aria-label": t + 1 + " of " + n,
                            "aria-selected": null,
                            tabindex: "-1",
                        });
                })
                .eq(i.currentSlide)
                .find("button")
                .attr({ "aria-selected": "true", tabindex: "0" })
                .end());
        for (var t = i.currentSlide, e = t + i.options.slidesToShow; t < e; t++)
            i.$slides.eq(t).attr("tabindex", 0);
        i.activateADA();
    }),
    (r.prototype.initArrowEvents = function() {
        var t = this;
        !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow
                .off("click.slick")
                .on("click.slick", { message: "previous" }, t.changeSlide),
                t.$nextArrow
                .off("click.slick")
                .on("click.slick", { message: "next" }, t.changeSlide), !0 === t.options.accessibility &&
                (t.$prevArrow.on("keydown.slick", t.keyHandler),
                    t.$nextArrow.on("keydown.slick", t.keyHandler)));
    }),
    (r.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots &&
            (d("li", t.$dots).on(
                    "click.slick", { message: "index" },
                    t.changeSlide
                ), !0 === t.options.accessibility &&
                t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            d("li", t.$dots)
            .on("mouseenter.slick", d.proxy(t.interrupt, t, !0))
            .on("mouseleave.slick", d.proxy(t.interrupt, t, !1));
    }),
    (r.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover &&
            (t.$list.on("mouseenter.slick", d.proxy(t.interrupt, t, !0)),
                t.$list.on("mouseleave.slick", d.proxy(t.interrupt, t, !1)));
    }),
    (r.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(),
            t.initDotEvents(),
            t.initSlideEvents(),
            t.$list.on(
                "touchstart.slick mousedown.slick", { action: "start" },
                t.swipeHandler
            ),
            t.$list.on(
                "touchmove.slick mousemove.slick", { action: "move" },
                t.swipeHandler
            ),
            t.$list.on(
                "touchend.slick mouseup.slick", { action: "end" },
                t.swipeHandler
            ),
            t.$list.on(
                "touchcancel.slick mouseleave.slick", { action: "end" },
                t.swipeHandler
            ),
            t.$list.on("click.slick", t.clickHandler),
            d(document).on(t.visibilityChange, d.proxy(t.visibility, t)), !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect &&
            d(t.$slideTrack).children().on("click.slick", t.selectHandler),
            d(window).on(
                "orientationchange.slick.slick-" + t.instanceUid,
                d.proxy(t.orientationChange, t)
            ),
            d(window).on(
                "resize.slick.slick-" + t.instanceUid,
                d.proxy(t.resize, t)
            ),
            d("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
            d(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
            d(t.setPosition);
    }),
    (r.prototype.initUI = function() {
        var t = this;
        !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.show();
    }),
    (r.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
            (37 === t.keyCode && !0 === e.options.accessibility ?
                e.changeSlide({
                    data: { message: !0 === e.options.rtl ? "next" : "previous" },
                }) :
                39 === t.keyCode &&
                !0 === e.options.accessibility &&
                e.changeSlide({
                    data: { message: !0 === e.options.rtl ? "previous" : "next" },
                }));
    }),
    (r.prototype.lazyLoad = function() {
        function t(t) {
            d("img[data-lazy]", t).each(function() {
                var t = d(this),
                    e = d(this).attr("data-lazy"),
                    i = d(this).attr("data-srcset"),
                    n = d(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    o = document.createElement("img");
                (o.onload = function() {
                    t.animate({ opacity: 0 }, 100, function() {
                        i && (t.attr("srcset", i), n && t.attr("sizes", n)),
                            t.attr("src", e).animate({ opacity: 1 }, 200, function() {
                                t.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                                    "slick-loading"
                                );
                            }),
                            s.$slider.trigger("lazyLoaded", [s, t, e]);
                    });
                }),
                (o.onerror = function() {
                    t
                        .removeAttr("data-lazy")
                        .removeClass("slick-loading")
                        .addClass("slick-lazyload-error"),
                        s.$slider.trigger("lazyLoadError", [s, t, e]);
                }),
                (o.src = e);
            });
        }
        var e,
            i,
            n,
            s = this;
        if (
            (!0 === s.options.centerMode ?
                (n = !0 === s.options.infinite ?
                    (i = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                    s.options.slidesToShow +
                    2 :
                    ((i = Math.max(
                            0,
                            s.currentSlide - (s.options.slidesToShow / 2 + 1)
                        )),
                        s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide)) :
                ((i = s.options.infinite ?
                        s.options.slidesToShow + s.currentSlide :
                        s.currentSlide),
                    (n = Math.ceil(i + s.options.slidesToShow)), !0 === s.options.fade && (0 < i && i--, n <= s.slideCount && n++)),
                (e = s.$slider.find(".slick-slide").slice(i, n)),
                "anticipated" === s.options.lazyLoad)
        )
            for (
                var o = i - 1, r = n, a = s.$slider.find(".slick-slide"), l = 0; l < s.options.slidesToScroll; l++
            )
                o < 0 && (o = s.slideCount - 1),
                (e = (e = e.add(a.eq(o))).add(a.eq(r))),
                o--,
                r++;
        t(e),
            s.slideCount <= s.options.slidesToShow ?
            t(s.$slider.find(".slick-slide")) :
            s.currentSlide >= s.slideCount - s.options.slidesToShow ?
            t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) :
            0 === s.currentSlide &&
            t(
                s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow)
            );
    }),
    (r.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
            t.$slideTrack.css({ opacity: 1 }),
            t.$slider.removeClass("slick-loading"),
            t.initUI(),
            "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
    }),
    (r.prototype.next = r.prototype.slickNext =
        function() {
            this.changeSlide({ data: { message: "next" } });
        }),
    (r.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition();
    }),
    (r.prototype.pause = r.prototype.slickPause =
        function() {
            this.autoPlayClear(), (this.paused = !0);
        }),
    (r.prototype.play = r.prototype.slickPlay =
        function() {
            var t = this;
            t.autoPlay(),
                (t.options.autoplay = !0),
                (t.paused = !1),
                (t.focussed = !1),
                (t.interrupted = !1);
        }),
    (r.prototype.postSlide = function(t) {
        var e = this;
        e.unslicked ||
            (e.$slider.trigger("afterChange", [e, t]),
                (e.animating = !1),
                e.slideCount > e.options.slidesToShow && e.setPosition(),
                (e.swipeLeft = null),
                e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility &&
                (e.initADA(),
                    e.options.focusOnChange &&
                    d(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (r.prototype.prev = r.prototype.slickPrev =
        function() {
            this.changeSlide({ data: { message: "previous" } });
        }),
    (r.prototype.preventDefault = function(t) {
        t.preventDefault();
    }),
    (r.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var e,
            i,
            n,
            o,
            s,
            r = this,
            a = d("img[data-lazy]", r.$slider);
        a.length ?
            ((e = a.first()),
                (i = e.attr("data-lazy")),
                (n = e.attr("data-srcset")),
                (o = e.attr("data-sizes") || r.$slider.attr("data-sizes")),
                ((s = document.createElement("img")).onload = function() {
                    n && (e.attr("srcset", n), o && e.attr("sizes", o)),
                        e
                        .attr("src", i)
                        .removeAttr("data-lazy data-srcset data-sizes")
                        .removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(),
                        r.$slider.trigger("lazyLoaded", [r, e, i]),
                        r.progressiveLazyLoad();
                }),
                (s.onerror = function() {
                    t < 3 ?
                        setTimeout(function() {
                            r.progressiveLazyLoad(t + 1);
                        }, 500) :
                        (e
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            r.$slider.trigger("lazyLoadError", [r, e, i]),
                            r.progressiveLazyLoad());
                }),
                (s.src = i)) :
            r.$slider.trigger("allImagesLoaded", [r]);
    }),
    (r.prototype.refresh = function(t) {
        var e,
            i,
            n = this;
        (i = n.slideCount - n.options.slidesToShow), !n.options.infinite && n.currentSlide > i && (n.currentSlide = i),
            n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0),
            (e = n.currentSlide),
            n.destroy(!0),
            d.extend(n, n.initials, { currentSlide: e }),
            n.init(),
            t || n.changeSlide({ data: { message: "index", index: e } }, !1);
    }),
    (r.prototype.registerBreakpoints = function() {
        var t,
            e,
            i,
            n = this,
            o = n.options.responsive || null;
        if ("array" === d.type(o) && o.length) {
            for (t in ((n.respondTo = n.options.respondTo || "window"), o))
                if (((i = n.breakpoints.length - 1), o.hasOwnProperty(t))) {
                    for (e = o[t].breakpoint; 0 <= i;)
                        n.breakpoints[i] &&
                        n.breakpoints[i] === e &&
                        n.breakpoints.splice(i, 1),
                        i--;
                    n.breakpoints.push(e), (n.breakpointSettings[e] = o[t].settings);
                }
            n.breakpoints.sort(function(t, e) {
                return n.options.mobileFirst ? t - e : e - t;
            });
        }
    }),
    (r.prototype.reinit = function() {
        var t = this;
        (t.$slides = t.$slideTrack
            .children(t.options.slide)
            .addClass("slick-slide")),
        (t.slideCount = t.$slides.length),
        t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
            t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
            t.registerBreakpoints(),
            t.setProps(),
            t.setupInfinite(),
            t.buildArrows(),
            t.updateArrows(),
            t.initArrowEvents(),
            t.buildDots(),
            t.updateDots(),
            t.initDotEvents(),
            t.cleanUpSlideEvents(),
            t.initSlideEvents(),
            t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect &&
            d(t.$slideTrack).children().on("click.slick", t.selectHandler),
            t.setSlideClasses(
                "number" == typeof t.currentSlide ? t.currentSlide : 0
            ),
            t.setPosition(),
            t.focusHandler(),
            (t.paused = !t.options.autoplay),
            t.autoPlay(),
            t.$slider.trigger("reInit", [t]);
    }),
    (r.prototype.resize = function() {
        var t = this;
        d(window).width() !== t.windowWidth &&
            (clearTimeout(t.windowDelay),
                (t.windowDelay = window.setTimeout(function() {
                    (t.windowWidth = d(window).width()),
                    t.checkResponsive(),
                        t.unslicked || t.setPosition();
                }, 50)));
    }),
    (r.prototype.removeSlide = r.prototype.slickRemove =
        function(t, e, i) {
            var n = this;
            if (
                ((t =
                        "boolean" == typeof t ?
                        !0 === (e = t) ?
                        0 :
                        n.slideCount - 1 :
                        !0 === e ?
                        --t :
                        t),
                    n.slideCount < 1 || t < 0 || t > n.slideCount - 1)
            )
                return !1;
            n.unload(), !0 === i ?
                n.$slideTrack.children().remove() :
                n.$slideTrack.children(this.options.slide).eq(t).remove(),
                (n.$slides = n.$slideTrack.children(this.options.slide)),
                n.$slideTrack.children(this.options.slide).detach(),
                n.$slideTrack.append(n.$slides),
                (n.$slidesCache = n.$slides),
                n.reinit();
        }),
    (r.prototype.setCSS = function(t) {
        var e,
            i,
            n = this,
            o = {};
        !0 === n.options.rtl && (t = -t),
            (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
            (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
            (o[n.positionProp] = t), !1 === n.transformsEnabled ||
            (!(o = {}) === n.cssTransitions ?
                (o[n.animType] = "translate(" + e + ", " + i + ")") :
                (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)")),
            n.$slideTrack.css(o);
    }),
    (r.prototype.setDimensions = function() {
        var t = this;
        !1 === t.options.vertical ?
            !0 === t.options.centerMode &&
            t.$list.css({ padding: "0px " + t.options.centerPadding }) :
            (t.$list.height(
                    t.$slides.first().outerHeight(!0) * t.options.slidesToShow
                ), !0 === t.options.centerMode &&
                t.$list.css({ padding: t.options.centerPadding + " 0px" })),
            (t.listWidth = t.$list.width()),
            (t.listHeight = t.$list.height()), !1 === t.options.vertical && !1 === t.options.variableWidth ?
            ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)),
                t.$slideTrack.width(
                    Math.ceil(
                        t.slideWidth * t.$slideTrack.children(".slick-slide").length
                    )
                )) :
            !0 === t.options.variableWidth ?
            t.$slideTrack.width(5e3 * t.slideCount) :
            ((t.slideWidth = Math.ceil(t.listWidth)),
                t.$slideTrack.height(
                    Math.ceil(
                        t.$slides.first().outerHeight(!0) *
                        t.$slideTrack.children(".slick-slide").length
                    )
                ));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth &&
            t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
    }),
    (r.prototype.setFade = function() {
        var i,
            n = this;
        n.$slides.each(function(t, e) {
                (i = n.slideWidth * t * -1), !0 === n.options.rtl ?
                    d(e).css({
                        position: "relative",
                        right: i,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0,
                    }) :
                    d(e).css({
                        position: "relative",
                        left: i,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0,
                    });
            }),
            n.$slides
            .eq(n.currentSlide)
            .css({ zIndex: n.options.zIndex - 1, opacity: 1 });
    }),
    (r.prototype.setHeight = function() {
        var t = this;
        if (
            1 === t.options.slidesToShow &&
            !0 === t.options.adaptiveHeight &&
            !1 === t.options.vertical
        ) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e);
        }
    }),
    (r.prototype.setOption = r.prototype.slickSetOption =
        function() {
            var t,
                e,
                i,
                n,
                o,
                s = this,
                r = !1;
            if (
                ("object" === d.type(arguments[0]) ?
                    ((i = arguments[0]), (r = arguments[1]), (o = "multiple")) :
                    "string" === d.type(arguments[0]) &&
                    ((i = arguments[0]),
                        (n = arguments[1]),
                        (r = arguments[2]),
                        "responsive" === arguments[0] && "array" === d.type(arguments[1]) ?
                        (o = "responsive") :
                        void 0 !== arguments[1] && (o = "single")),
                    "single" === o)
            )
                s.options[i] = n;
            else if ("multiple" === o)
                d.each(i, function(t, e) {
                    s.options[t] = e;
                });
            else if ("responsive" === o)
                for (e in n)
                    if ("array" !== d.type(s.options.responsive))
                        s.options.responsive = [n[e]];
                    else {
                        for (t = s.options.responsive.length - 1; 0 <= t;)
                            s.options.responsive[t].breakpoint === n[e].breakpoint &&
                            s.options.responsive.splice(t, 1),
                            t--;
                        s.options.responsive.push(n[e]);
                    }
            r && (s.unload(), s.reinit());
        }),
    (r.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
            t.setHeight(), !1 === t.options.fade ?
            t.setCSS(t.getLeft(t.currentSlide)) :
            t.setFade(),
            t.$slider.trigger("setPosition", [t]);
    }),
    (r.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
        "top" === t.positionProp ?
            t.$slider.addClass("slick-vertical") :
            t.$slider.removeClass("slick-vertical"),
            (void 0 === e.WebkitTransition &&
                void 0 === e.MozTransition &&
                void 0 === e.msTransition) ||
            (!0 === t.options.useCSS && (t.cssTransitions = !0)),
            t.options.fade &&
            ("number" == typeof t.options.zIndex ?
                t.options.zIndex < 3 && (t.options.zIndex = 3) :
                (t.options.zIndex = t.defaults.zIndex)),
            void 0 !== e.OTransform &&
            ((t.animType = "OTransform"),
                (t.transformType = "-o-transform"),
                (t.transitionType = "OTransition"),
                void 0 === e.perspectiveProperty &&
                void 0 === e.webkitPerspective &&
                (t.animType = !1)),
            void 0 !== e.MozTransform &&
            ((t.animType = "MozTransform"),
                (t.transformType = "-moz-transform"),
                (t.transitionType = "MozTransition"),
                void 0 === e.perspectiveProperty &&
                void 0 === e.MozPerspective &&
                (t.animType = !1)),
            void 0 !== e.webkitTransform &&
            ((t.animType = "webkitTransform"),
                (t.transformType = "-webkit-transform"),
                (t.transitionType = "webkitTransition"),
                void 0 === e.perspectiveProperty &&
                void 0 === e.webkitPerspective &&
                (t.animType = !1)),
            void 0 !== e.msTransform &&
            ((t.animType = "msTransform"),
                (t.transformType = "-ms-transform"),
                (t.transitionType = "msTransition"),
                void 0 === e.msTransform && (t.animType = !1)),
            void 0 !== e.transform &&
            !1 !== t.animType &&
            ((t.animType = "transform"),
                (t.transformType = "transform"),
                (t.transitionType = "transition")),
            (t.transformsEnabled =
                t.options.useTransform && null !== t.animType && !1 !== t.animType);
    }),
    (r.prototype.setSlideClasses = function(t) {
        var e,
            i,
            n,
            o,
            s = this;
        if (
            ((i = s.$slider
                    .find(".slick-slide")
                    .removeClass("slick-active slick-center slick-current")
                    .attr("aria-hidden", "true")),
                s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode)
        ) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            (e = Math.floor(s.options.slidesToShow / 2)), !0 === s.options.infinite &&
                (e <= t && t <= s.slideCount - 1 - e ?
                    s.$slides
                    .slice(t - e + r, t + e + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false") :
                    ((n = s.options.slidesToShow + t),
                        i
                        .slice(n - e + 1 + r, n + e + 2)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false")),
                    0 === t ?
                    i
                    .eq(i.length - 1 - s.options.slidesToShow)
                    .addClass("slick-center") :
                    t === s.slideCount - 1 &&
                    i.eq(s.options.slidesToShow).addClass("slick-center")),
                s.$slides.eq(t).addClass("slick-center");
        } else
            0 <= t && t <= s.slideCount - s.options.slidesToShow ?
            s.$slides
            .slice(t, t + s.options.slidesToShow)
            .addClass("slick-active")
            .attr("aria-hidden", "false") :
            i.length <= s.options.slidesToShow ?
            i.addClass("slick-active").attr("aria-hidden", "false") :
            ((o = s.slideCount % s.options.slidesToShow),
                (n = !0 === s.options.infinite ? s.options.slidesToShow + t : t),
                s.options.slidesToShow == s.options.slidesToScroll &&
                s.slideCount - t < s.options.slidesToShow ?
                i
                .slice(n - (s.options.slidesToShow - o), n + o)
                .addClass("slick-active")
                .attr("aria-hidden", "false") :
                i
                .slice(n, n + s.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false"));
        ("ondemand" !== s.options.lazyLoad &&
            "anticipated" !== s.options.lazyLoad) ||
        s.lazyLoad();
    }),
    (r.prototype.setupInfinite = function() {
        var t,
            e,
            i,
            n = this;
        if (
            (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite &&
                !1 === n.options.fade &&
                ((e = null), n.slideCount > n.options.slidesToShow))
        ) {
            for (
                i = !0 === n.options.centerMode ?
                n.options.slidesToShow + 1 :
                n.options.slidesToShow,
                t = n.slideCount; t > n.slideCount - i; t -= 1
            )
                (e = t - 1),
                d(n.$slides[e])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", e - n.slideCount)
                .prependTo(n.$slideTrack)
                .addClass("slick-cloned");
            for (t = 0; t < i + n.slideCount; t += 1)
                (e = t),
                d(n.$slides[e])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", e + n.slideCount)
                .appendTo(n.$slideTrack)
                .addClass("slick-cloned");
            n.$slideTrack
                .find(".slick-cloned")
                .find("[id]")
                .each(function() {
                    d(this).attr("id", "");
                });
        }
    }),
    (r.prototype.interrupt = function(t) {
        t || this.autoPlay(), (this.interrupted = t);
    }),
    (r.prototype.selectHandler = function(t) {
        var e = d(t.target).is(".slick-slide") ?
            d(t.target) :
            d(t.target).parents(".slick-slide"),
            i = parseInt(e.attr("data-slick-index"));
        i || (i = 0),
            this.slideCount <= this.options.slidesToShow ?
            this.slideHandler(i, !1, !0) :
            this.slideHandler(i);
    }),
    (r.prototype.slideHandler = function(t, e, i) {
        var n,
            o,
            s,
            r,
            a,
            l = null,
            d = this;
        if (
            ((e = e || !1), !(
                (!0 === d.animating && !0 === d.options.waitForAnimate) ||
                (!0 === d.options.fade && d.currentSlide === t)
            ))
        )
            if (
                (!1 === e && d.asNavFor(t),
                    (n = t),
                    (l = d.getLeft(n)),
                    (r = d.getLeft(d.currentSlide)),
                    (d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft), !1 === d.options.infinite &&
                    !1 === d.options.centerMode &&
                    (t < 0 || t > d.getDotCount() * d.options.slidesToScroll))
            )
                !1 === d.options.fade &&
                ((n = d.currentSlide), !0 !== i ?
                    d.animateSlide(r, function() {
                        d.postSlide(n);
                    }) :
                    d.postSlide(n));
            else if (!1 === d.options.infinite &&
            !0 === d.options.centerMode &&
            (t < 0 || t > d.slideCount - d.options.slidesToScroll)
        )
            !1 === d.options.fade &&
            ((n = d.currentSlide), !0 !== i ?
                d.animateSlide(r, function() {
                    d.postSlide(n);
                }) :
                d.postSlide(n));
        else {
            if (
                (d.options.autoplay && clearInterval(d.autoPlayTimer),
                    (o =
                        n < 0 ?
                        d.slideCount % d.options.slidesToScroll != 0 ?
                        d.slideCount - (d.slideCount % d.options.slidesToScroll) :
                        d.slideCount + n :
                        n >= d.slideCount ?
                        d.slideCount % d.options.slidesToScroll != 0 ?
                        0 :
                        n - d.slideCount :
                        n),
                    (d.animating = !0),
                    d.$slider.trigger("beforeChange", [d, d.currentSlide, o]),
                    (s = d.currentSlide),
                    (d.currentSlide = o),
                    d.setSlideClasses(d.currentSlide),
                    d.options.asNavFor &&
                    (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <=
                    a.options.slidesToShow &&
                    a.setSlideClasses(d.currentSlide),
                    d.updateDots(),
                    d.updateArrows(), !0 === d.options.fade)
            )
                return (!0 !== i ?
                    (d.fadeSlideOut(s),
                        d.fadeSlide(o, function() {
                            d.postSlide(o);
                        })) :
                    d.postSlide(o),
                    void d.animateHeight()
                );
            !0 !== i ?
                d.animateSlide(l, function() {
                    d.postSlide(o);
                }) :
                d.postSlide(o);
        }
    }),
    (r.prototype.startLoad = function() {
        var t = this;
        !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots &&
            t.slideCount > t.options.slidesToShow &&
            t.$dots.hide(),
            t.$slider.addClass("slick-loading");
    }),
    (r.prototype.swipeDirection = function() {
        var t,
            e,
            i,
            n,
            o = this;
        return (
            (t = o.touchObject.startX - o.touchObject.curX),
            (e = o.touchObject.startY - o.touchObject.curY),
            (i = Math.atan2(e, t)),
            (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
            n <= 45 && 0 <= n ?
            !1 === o.options.rtl ?
            "left" :
            "right" :
            n <= 360 && 315 <= n ?
            !1 === o.options.rtl ?
            "left" :
            "right" :
            135 <= n && n <= 225 ?
            !1 === o.options.rtl ?
            "right" :
            "left" :
            !0 === o.options.verticalSwiping ?
            35 <= n && n <= 135 ?
            "down" :
            "up" :
            "vertical"
        );
    }),
    (r.prototype.swipeEnd = function(t) {
        var e,
            i,
            n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
            return (n.scrolling = !1);
        if (
            ((n.interrupted = !1),
                (n.shouldClick = !(10 < n.touchObject.swipeLength)),
                void 0 === n.touchObject.curX)
        )
            return !1;
        if (
            (!0 === n.touchObject.edgeHit &&
                n.$slider.trigger("edge", [n, n.swipeDirection()]),
                n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
            switch ((i = n.swipeDirection())) {
                case "left":
                case "down":
                    (e = n.options.swipeToSlide ?
                        n.checkNavigable(n.currentSlide + n.getSlideCount()) :
                        n.currentSlide + n.getSlideCount()),
                    (n.currentDirection = 0);
                    break;
                case "right":
                case "up":
                    (e = n.options.swipeToSlide ?
                        n.checkNavigable(n.currentSlide - n.getSlideCount()) :
                        n.currentSlide - n.getSlideCount()),
                    (n.currentDirection = 1);
            }
            "vertical" != i &&
                (n.slideHandler(e),
                    (n.touchObject = {}),
                    n.$slider.trigger("swipe", [n, i]));
        } else
            n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
    }),
    (r.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(!1 === e.options.swipe ||
                ("ontouchend" in document && !1 === e.options.swipe) ||
                (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
            ))
            switch (
                ((e.touchObject.fingerCount =
                        t.originalEvent && void 0 !== t.originalEvent.touches ?
                        t.originalEvent.touches.length :
                        1),
                    (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold), !0 === e.options.verticalSwiping &&
                    (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                    t.data.action)
            ) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t);
            }
    }),
    (r.prototype.swipeMove = function(t) {
        var e,
            i,
            n,
            o,
            s,
            r,
            a = this;
        return (
            (s = void 0 !== t.originalEvent ? t.originalEvent.touches : null), !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
            ((e = a.getLeft(a.currentSlide)),
                (a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX),
                (a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY),
                (a.touchObject.swipeLength = Math.round(
                    Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
                )),
                (r = Math.round(
                    Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
                )), !a.options.verticalSwiping && !a.swiping && 4 < r ?
                !(a.scrolling = !0) :
                (!0 === a.options.verticalSwiping &&
                    (a.touchObject.swipeLength = r),
                    (i = a.swipeDirection()),
                    void 0 !== t.originalEvent &&
                    4 < a.touchObject.swipeLength &&
                    ((a.swiping = !0), t.preventDefault()),
                    (o =
                        (!1 === a.options.rtl ? 1 : -1) *
                        (a.touchObject.curX > a.touchObject.startX ? 1 : -1)), !0 === a.options.verticalSwiping &&
                    (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                    (n = a.touchObject.swipeLength),
                    (a.touchObject.edgeHit = !1) === a.options.infinite &&
                    ((0 === a.currentSlide && "right" === i) ||
                        (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                    ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                        (a.touchObject.edgeHit = !0)), !1 === a.options.vertical ?
                    (a.swipeLeft = e + n * o) :
                    (a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o), !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade &&
                    !1 !== a.options.touchMove &&
                    (!0 === a.animating ?
                        ((a.swipeLeft = null), !1) :
                        void a.setCSS(a.swipeLeft))))
        );
    }),
    (r.prototype.swipeStart = function(t) {
        var e,
            i = this;
        if (
            ((i.interrupted = !0),
                1 !== i.touchObject.fingerCount ||
                i.slideCount <= i.options.slidesToShow)
        )
            return !(i.touchObject = {});
        void 0 !== t.originalEvent &&
            void 0 !== t.originalEvent.touches &&
            (e = t.originalEvent.touches[0]),
            (i.touchObject.startX = i.touchObject.curX =
                void 0 !== e ? e.pageX : t.clientX),
            (i.touchObject.startY = i.touchObject.curY =
                void 0 !== e ? e.pageY : t.clientY),
            (i.dragging = !0);
    }),
    (r.prototype.unfilterSlides = r.prototype.slickUnfilter =
        function() {
            var t = this;
            null !== t.$slidesCache &&
                (t.unload(),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slidesCache.appendTo(t.$slideTrack),
                    t.reinit());
        }),
    (r.prototype.unload = function() {
        var t = this;
        d(".slick-cloned", t.$slider).remove(),
            t.$dots && t.$dots.remove(),
            t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
            t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
            t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
    }),
    (r.prototype.unslick = function(t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy();
    }),
    (r.prototype.updateArrows = function() {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
                t.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
                0 === t.currentSlide ?
                (t.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                    t.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false")) :
                t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                !1 === t.options.centerMode ?
                (t.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                    t.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false")) :
                t.currentSlide >= t.slideCount - 1 &&
                !0 === t.options.centerMode &&
                (t.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                    t.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false")));
    }),
    (r.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots &&
            (t.$dots.find("li").removeClass("slick-active").end(),
                t.$dots
                .find("li")
                .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                .addClass("slick-active"));
    }),
    (r.prototype.visibility = function() {
        this.options.autoplay &&
            (document[this.hidden] ?
                (this.interrupted = !0) :
                (this.interrupted = !1));
    }),
    (d.fn.slick = function() {
        var t,
            e,
            i = this,
            n = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (t = 0; t < s; t++)
            if (
                ("object" == typeof n || void 0 === n ?
                    (i[t].slick = new r(i[t], n)) :
                    (e = i[t].slick[n].apply(i[t].slick, o)),
                    void 0 !== e)
            )
                return e;
        return i;
    });
}),
(de = "undefined" != typeof window ? window : this),
(ee = function() {
    function t() {}
    var e = t.prototype;
    return (
        (e.on = function(t, e) {
            if (t && e) {
                var i = (this._events = this._events || {}),
                    n = (i[t] = i[t] || []);
                return -1 == n.indexOf(e) && n.push(e), this;
            }
        }),
        (e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = (this._onceEvents = this._onceEvents || {});
                return ((i[t] = i[t] || {})[e] = !0), this;
            }
        }),
        (e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this;
            }
        }),
        (e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                (i = i.slice(0)), (e = e || []);
                for (
                    var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++
                ) {
                    var s = i[o];
                    n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
                }
                return this;
            }
        }),
        (e.allOff = function() {
            delete this._events, delete this._onceEvents;
        }),
        t
    );
}),
"function" == typeof define && define.amd ?
    define("ev-emitter/ev-emitter", ee) :
    "object" == typeof module && module.exports ?
    (module.exports = ee()) :
    (de.EvEmitter = ee()),
    (function(e, i) {
        "use strict";
        "function" == typeof define && define.amd ?
            define(["ev-emitter/ev-emitter"], function(t) {
                return i(e, t);
            }) :
            "object" == typeof module && module.exports ?
            (module.exports = i(e, require("ev-emitter"))) :
            (e.imagesLoaded = i(e, e.EvEmitter));
    })("undefined" != typeof window ? window : this, function(e, t) {
        function s(t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }

        function r(t, e, i) {
            if (!(this instanceof r)) return new r(t, e, i);
            var n,
                o = t;
            return (
                "string" == typeof t && (o = document.querySelectorAll(t)),
                o ?
                ((this.elements =
                        ((n = o),
                            Array.isArray(n) ?
                            n :
                            "object" == typeof n && "number" == typeof n.length ?
                            d.call(n) : [n])),
                    (this.options = s({}, this.options)),
                    "function" == typeof e ? (i = e) : s(this.options, e),
                    i && this.on("always", i),
                    this.getImages(),
                    a && (this.jqDeferred = new a.Deferred()),
                    void setTimeout(this.check.bind(this))) :
                void l.error("Bad element for imagesLoaded " + (o || t))
            );
        }

        function i(t) {
            this.img = t;
        }

        function n(t, e) {
            (this.url = t), (this.element = e), (this.img = new Image());
        }
        var a = e.jQuery,
            l = e.console,
            d = Array.prototype.slice;
        ((r.prototype = Object.create(t.prototype)).options = {}),
        (r.prototype.getImages = function() {
            (this.images = []), this.elements.forEach(this.addElementImages, this);
        }),
        (r.prototype.addElementImages = function(t) {
            "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o);
                }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (n = 0; n < s.length; n++) {
                        var r = s[n];
                        this.addElementBackgroundImages(r);
                    }
                }
            }
        });
        var c = { 1: !0, 9: !0, 11: !0 };
        return (
            (r.prototype.addElementBackgroundImages = function(t) {
                var e = getComputedStyle(t);
                if (e)
                    for (
                        var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;

                    ) {
                        var o = n && n[2];
                        o && this.addBackground(o, t), (n = i.exec(e.backgroundImage));
                    }
            }),
            (r.prototype.addImage = function(t) {
                var e = new i(t);
                this.images.push(e);
            }),
            (r.prototype.addBackground = function(t, e) {
                var i = new n(t, e);
                this.images.push(i);
            }),
            (r.prototype.check = function() {
                function e(t, e, i) {
                    setTimeout(function() {
                        n.progress(t, e, i);
                    });
                }
                var n = this;
                return (
                    (this.progressedCount = 0),
                    (this.hasAnyBroken = !1),
                    this.images.length ?
                    void this.images.forEach(function(t) {
                        t.once("progress", e), t.check();
                    }) :
                    void this.complete()
                );
            }),
            (r.prototype.progress = function(t, e, i) {
                this.progressedCount++,
                    (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
                    this.emitEvent("progress", [this, t, e]),
                    this.jqDeferred &&
                    this.jqDeferred.notify &&
                    this.jqDeferred.notify(this, t),
                    this.progressedCount == this.images.length && this.complete(),
                    this.options.debug && l && l.log("progress: " + i, t, e);
            }),
            (r.prototype.complete = function() {
                var t = this.hasAnyBroken ? "fail" : "done";
                if (
                    ((this.isComplete = !0),
                        this.emitEvent(t, [this]),
                        this.emitEvent("always", [this]),
                        this.jqDeferred)
                ) {
                    var e = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[e](this);
                }
            }),
            ((i.prototype = Object.create(t.prototype)).check = function() {
                return this.getIsImageComplete() ?
                    void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") :
                    ((this.proxyImage = new Image()),
                        this.proxyImage.addEventListener("load", this),
                        this.proxyImage.addEventListener("error", this),
                        this.img.addEventListener("load", this),
                        this.img.addEventListener("error", this),
                        void(this.proxyImage.src = this.img.src));
            }),
            (i.prototype.getIsImageComplete = function() {
                return this.img.complete && this.img.naturalWidth;
            }),
            (i.prototype.confirm = function(t, e) {
                (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
            }),
            (i.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindEvents();
            }),
            (i.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }),
            (i.prototype.unbindEvents = function() {
                this.proxyImage.removeEventListener("load", this),
                    this.proxyImage.removeEventListener("error", this),
                    this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            ((n.prototype = Object.create(i.prototype)).check = function() {
                this.img.addEventListener("load", this),
                    this.img.addEventListener("error", this),
                    (this.img.src = this.url),
                    this.getIsImageComplete() &&
                    (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
                        this.unbindEvents());
            }),
            (n.prototype.unbindEvents = function() {
                this.img.removeEventListener("load", this),
                    this.img.removeEventListener("error", this);
            }),
            (n.prototype.confirm = function(t, e) {
                (this.isLoaded = t),
                this.emitEvent("progress", [this, this.element, e]);
            }),
            (r.makeJQueryPlugin = function(t) {
                (t = t || e.jQuery) &&
                ((a = t).fn.imagesLoaded = function(t, e) {
                    return new r(this, t, e).jqDeferred.promise(a(this));
                });
            }),
            r.makeJQueryPlugin(),
            r
        );
    }),
    (Nf = this),
    (Of = function(t, e, c) {
        "use strict";

        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
            }
        }

        function r(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t;
        }

        function h() {
            return (h =
                Object.assign ||
                function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var n in i)
                            Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
                    }
                    return t;
                }).apply(this, arguments);
        }
        (e = e && e.hasOwnProperty("default") ? e.default : e),
        (c = c && c.hasOwnProperty("default") ? c.default : c);
        var o,
            i,
            s,
            a,
            l,
            d,
            u,
            p,
            f,
            m,
            g,
            v,
            w,
            y,
            b,
            _,
            C,
            T,
            k,
            S,
            x,
            z,
            E,
            I,
            W,
            L,
            A,
            O,
            D,
            $,
            P,
            F,
            H,
            j,
            M,
            R,
            Y,
            N,
            Q,
            B,
            q,
            X,
            U,
            Z,
            K,
            V,
            G,
            J,
            tt,
            et,
            it,
            nt,
            ot,
            st,
            rt,
            at,
            lt,
            dt,
            ct,
            ht,
            ut,
            pt,
            ft,
            mt,
            gt,
            vt,
            wt,
            yt,
            bt,
            _t,
            Ct,
            Tt,
            kt,
            St,
            xt,
            zt,
            Et,
            It,
            Wt,
            Lt,
            At,
            Ot,
            Dt,
            $t,
            Pt,
            Ft,
            Ht,
            jt,
            Mt,
            Rt,
            Yt,
            Nt,
            Qt,
            Bt,
            qt,
            Xt,
            Ut,
            Zt,
            Kt,
            Vt,
            Gt,
            Jt,
            te,
            ee,
            ie,
            ne,
            oe,
            se,
            re,
            ae,
            le,
            de,
            ce,
            he,
            ue,
            pe,
            fe,
            me,
            ge,
            ve,
            we,
            ye,
            be,
            _e,
            Ce,
            Te,
            ke,
            Se,
            xe,
            ze,
            Ee,
            Ie,
            We,
            Le,
            Ae,
            Oe,
            De,
            $e,
            Pe,
            Fe,
            He,
            je,
            Me =
            ((Fe = e),
                (He = !1),
                (je = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        for (;
                            (t += ~~(1e6 * Math.random())), document.getElementById(t);

                        );
                        return t;
                    },
                    getSelectorFromElement: function(t) {
                        var e,
                            i = t.getAttribute("data-target");
                        (i && "#" !== i) || (i = t.getAttribute("href") || ""),
                        "#" === i.charAt(0) &&
                            ((e = i),
                                (i = e =
                                    "function" == typeof Fe.escapeSelector ?
                                    Fe.escapeSelector(e).substr(1) :
                                    e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")));
                        try {
                            return 0 < Fe(document).find(i).length ? i : null;
                        } catch (t) {
                            return null;
                        }
                    },
                    reflow: function(t) {
                        return t.offsetHeight;
                    },
                    triggerTransitionEnd: function(t) {
                        Fe(t).trigger(He.end);
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(He);
                    },
                    isElement: function(t) {
                        return (t[0] || t).nodeType;
                    },
                    typeCheckConfig: function(t, e, i) {
                        for (var n in i)
                            if (Object.prototype.hasOwnProperty.call(i, n)) {
                                var o = i[n],
                                    s = e[n],
                                    r =
                                    s && je.isElement(s) ?
                                    "element" :
                                    ((a = s), {}.toString
                                        .call(a)
                                        .match(/\s([a-zA-Z]+)/)[1]
                                        .toLowerCase());
                                if (!new RegExp(o).test(r))
                                    throw new Error(
                                        t.toUpperCase() +
                                        ': Option "' +
                                        n +
                                        '" provided type "' +
                                        r +
                                        '" but expected type "' +
                                        o +
                                        '".'
                                    );
                            }
                        var a;
                    },
                }),
                (He = ("undefined" == typeof window || !window.QUnit) && {
                    end: "transitionend",
                }),
                (Fe.fn.emulateTransitionEnd = function(t) {
                    var e = this,
                        i = !1;
                    return (
                        Fe(this).one(je.TRANSITION_END, function() {
                            i = !0;
                        }),
                        setTimeout(function() {
                            i || je.triggerTransitionEnd(e);
                        }, t),
                        this
                    );
                }),
                je.supportsTransitionEnd() &&
                (Fe.event.special[je.TRANSITION_END] = {
                    bindType: He.end,
                    delegateType: He.end,
                    handle: function(t) {
                        if (Fe(t.target).is(this))
                            return t.handleObj.handler.apply(this, arguments);
                    },
                }),
                je),
            Re =
            ((i = "alert"),
                (a = "." + (s = "bs.alert")),
                (l = (o = e).fn[i]),
                (d = {
                    CLOSE: "close" + a,
                    CLOSED: "closed" + a,
                    CLICK_DATA_API: "click" + a + ".data-api",
                }),
                "alert",
                "fade",
                "show",
                (u = (function() {
                    function n(t) {
                        this._element = t;
                    }
                    var t = n.prototype;
                    return (
                        (t.close = function(t) {
                            t = t || this._element;
                            var e = this._getRootElement(t);
                            this._triggerCloseEvent(e).isDefaultPrevented() ||
                                this._removeElement(e);
                        }),
                        (t.dispose = function() {
                            o.removeData(this._element, s), (this._element = null);
                        }),
                        (t._getRootElement = function(t) {
                            var e = Me.getSelectorFromElement(t),
                                i = !1;
                            return (
                                e && (i = o(e)[0]), i || (i = o(t).closest(".alert")[0]), i
                            );
                        }),
                        (t._triggerCloseEvent = function(t) {
                            var e = o.Event(d.CLOSE);
                            return o(t).trigger(e), e;
                        }),
                        (t._removeElement = function(e) {
                            var i = this;
                            o(e).removeClass("show"),
                                Me.supportsTransitionEnd() && o(e).hasClass("fade") ?
                                o(e)
                                .one(Me.TRANSITION_END, function(t) {
                                    return i._destroyElement(e, t);
                                })
                                .emulateTransitionEnd(150) :
                                this._destroyElement(e);
                        }),
                        (t._destroyElement = function(t) {
                            o(t).detach().trigger(d.CLOSED).remove();
                        }),
                        (n._jQueryInterface = function(i) {
                            return this.each(function() {
                                var t = o(this),
                                    e = t.data(s);
                                e || ((e = new n(this)), t.data(s, e)),
                                    "close" === i && e[i](this);
                            });
                        }),
                        (n._handleDismiss = function(e) {
                            return function(t) {
                                t && t.preventDefault(), e.close(this);
                            };
                        }),
                        r(n, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0";
                            },
                        }, ]),
                        n
                    );
                })()),
                o(document).on(
                    d.CLICK_DATA_API,
                    '[data-dismiss="alert"]',
                    u._handleDismiss(new u())
                ),
                (o.fn[i] = u._jQueryInterface),
                (o.fn[i].Constructor = u),
                (o.fn[i].noConflict = function() {
                    return (o.fn[i] = l), u._jQueryInterface;
                }),
                u),
            Ye =
            ((f = "button"),
                (g = "." + (m = "bs.button")),
                (v = ".data-api"),
                (w = (p = e).fn[f]),
                (y = "active"),
                "btn",
                (b = '[data-toggle^="button"]'),
                '[data-toggle="buttons"]',
                "input",
                ".active",
                ".btn",
                (_ = {
                    CLICK_DATA_API: "click" + g + v,
                    FOCUS_BLUR_DATA_API: "focus" + g + v + " blur" + g + v,
                }),
                (C = (function() {
                    function i(t) {
                        this._element = t;
                    }
                    var t = i.prototype;
                    return (
                        (t.toggle = function() {
                            var t = !0,
                                e = !0,
                                i = p(this._element).closest('[data-toggle="buttons"]')[0];
                            if (i) {
                                var n = p(this._element).find("input")[0];
                                if (n) {
                                    if ("radio" === n.type)
                                        if (n.checked && p(this._element).hasClass(y)) t = !1;
                                        else {
                                            var o = p(i).find(".active")[0];
                                            o && p(o).removeClass(y);
                                        }
                                    if (t) {
                                        if (
                                            n.hasAttribute("disabled") ||
                                            i.hasAttribute("disabled") ||
                                            n.classList.contains("disabled") ||
                                            i.classList.contains("disabled")
                                        )
                                            return;
                                        (n.checked = !p(this._element).hasClass(y)),
                                        p(n).trigger("change");
                                    }
                                    n.focus(), (e = !1);
                                }
                            }
                            e &&
                                this._element.setAttribute(
                                    "aria-pressed", !p(this._element).hasClass(y)
                                ),
                                t && p(this._element).toggleClass(y);
                        }),
                        (t.dispose = function() {
                            p.removeData(this._element, m), (this._element = null);
                        }),
                        (i._jQueryInterface = function(e) {
                            return this.each(function() {
                                var t = p(this).data(m);
                                t || ((t = new i(this)), p(this).data(m, t)),
                                    "toggle" === e && t[e]();
                            });
                        }),
                        r(i, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0";
                            },
                        }, ]),
                        i
                    );
                })()),
                p(document)
                .on(_.CLICK_DATA_API, b, function(t) {
                    t.preventDefault();
                    var e = t.target;
                    p(e).hasClass("btn") || (e = p(e).closest(".btn")),
                        C._jQueryInterface.call(p(e), "toggle");
                })
                .on(_.FOCUS_BLUR_DATA_API, b, function(t) {
                    var e = p(t.target).closest(".btn")[0];
                    p(e).toggleClass("focus", /^focus(in)?$/.test(t.type));
                }),
                (p.fn[f] = C._jQueryInterface),
                (p.fn[f].Constructor = C),
                (p.fn[f].noConflict = function() {
                    return (p.fn[f] = w), C._jQueryInterface;
                }),
                C),
            Ne =
            ((ye = "carousel"),
                (_e = "." + (be = "bs.carousel")),
                (Ce = (we = e).fn[ye]),
                (Te = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0,
                }),
                (ke = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean",
                }),
                (Se = "next"),
                (xe = "prev"),
                (ze = {
                    SLIDE: "slide" + _e,
                    SLID: "slid" + _e,
                    KEYDOWN: "keydown" + _e,
                    MOUSEENTER: "mouseenter" + _e,
                    MOUSELEAVE: "mouseleave" + _e,
                    TOUCHEND: "touchend" + _e,
                    LOAD_DATA_API: "load" + _e + ".data-api",
                    CLICK_DATA_API: "click" + _e + ".data-api",
                }),
                (Ee = "active"),
                (Ie = ".active"),
                (We = ".active.carousel-item"),
                (Le = ".carousel-item"),
                (Ae = ".carousel-item-next, .carousel-item-prev"),
                (Oe = ".carousel-indicators"),
                (De = "[data-slide], [data-slide-to]"),
                ($e = '[data-ride="carousel"]'),
                (Pe = (function() {
                    function s(t, e) {
                        (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this._config = this._getConfig(e)),
                        (this._element = we(t)[0]),
                        (this._indicatorsElement = we(this._element).find(Oe)[0]),
                        this._addEventListeners();
                    }
                    var t = s.prototype;
                    return (
                        (t.next = function() {
                            this._isSliding || this._slide(Se);
                        }),
                        (t.nextWhenVisible = function() {
                            !document.hidden &&
                                we(this._element).is(":visible") &&
                                "hidden" !== we(this._element).css("visibility") &&
                                this.next();
                        }),
                        (t.prev = function() {
                            this._isSliding || this._slide(xe);
                        }),
                        (t.pause = function(t) {
                            t || (this._isPaused = !0),
                                we(this._element).find(Ae)[0] &&
                                Me.supportsTransitionEnd() &&
                                (Me.triggerTransitionEnd(this._element), this.cycle(!0)),
                                clearInterval(this._interval),
                                (this._interval = null);
                        }),
                        (t.cycle = function(t) {
                            t || (this._isPaused = !1),
                                this._interval &&
                                (clearInterval(this._interval), (this._interval = null)),
                                this._config.interval &&
                                !this._isPaused &&
                                (this._interval = setInterval(
                                    (document.visibilityState ?
                                        this.nextWhenVisible :
                                        this.next
                                    ).bind(this),
                                    this._config.interval
                                ));
                        }),
                        (t.to = function(t) {
                            var e = this;
                            this._activeElement = we(this._element).find(We)[0];
                            var i = this._getItemIndex(this._activeElement);
                            if (!(t > this._items.length - 1 || t < 0))
                                if (this._isSliding)
                                    we(this._element).one(ze.SLID, function() {
                                        return e.to(t);
                                    });
                                else {
                                    if (i === t) return this.pause(), void this.cycle();
                                    var n = i < t ? Se : xe;
                                    this._slide(n, this._items[t]);
                                }
                        }),
                        (t.dispose = function() {
                            we(this._element).off(_e),
                                we.removeData(this._element, be),
                                (this._items = null),
                                (this._config = null),
                                (this._element = null),
                                (this._interval = null),
                                (this._isPaused = null),
                                (this._isSliding = null),
                                (this._activeElement = null),
                                (this._indicatorsElement = null);
                        }),
                        (t._getConfig = function(t) {
                            return (t = h({}, Te, t)), Me.typeCheckConfig(ye, t, ke), t;
                        }),
                        (t._addEventListeners = function() {
                            var e = this;
                            this._config.keyboard &&
                                we(this._element).on(ze.KEYDOWN, function(t) {
                                    return e._keydown(t);
                                }),
                                "hover" === this._config.pause &&
                                (we(this._element)
                                    .on(ze.MOUSEENTER, function(t) {
                                        return e.pause(t);
                                    })
                                    .on(ze.MOUSELEAVE, function(t) {
                                        return e.cycle(t);
                                    }),
                                    "ontouchstart" in document.documentElement &&
                                    we(this._element).on(ze.TOUCHEND, function() {
                                        e.pause(),
                                            e.touchTimeout && clearTimeout(e.touchTimeout),
                                            (e.touchTimeout = setTimeout(function(t) {
                                                return e.cycle(t);
                                            }, 500 + e._config.interval));
                                    }));
                        }),
                        (t._keydown = function(t) {
                            if (!/input|textarea/i.test(t.target.tagName))
                                switch (t.which) {
                                    case 37:
                                        t.preventDefault(), this.prev();
                                        break;
                                    case 39:
                                        t.preventDefault(), this.next();
                                }
                        }),
                        (t._getItemIndex = function(t) {
                            return (
                                (this._items = we.makeArray(we(t).parent().find(Le))),
                                this._items.indexOf(t)
                            );
                        }),
                        (t._getItemByDirection = function(t, e) {
                            var i = t === Se,
                                n = t === xe,
                                o = this._getItemIndex(e),
                                s = this._items.length - 1;
                            if (((n && 0 === o) || (i && o === s)) && !this._config.wrap)
                                return e;
                            var r = (o + (t === xe ? -1 : 1)) % this._items.length;
                            return -1 === r ?
                                this._items[this._items.length - 1] :
                                this._items[r];
                        }),
                        (t._triggerSlideEvent = function(t, e) {
                            var i = this._getItemIndex(t),
                                n = this._getItemIndex(we(this._element).find(We)[0]),
                                o = we.Event(ze.SLIDE, {
                                    relatedTarget: t,
                                    direction: e,
                                    from: n,
                                    to: i,
                                });
                            return we(this._element).trigger(o), o;
                        }),
                        (t._setActiveIndicatorElement = function(t) {
                            if (this._indicatorsElement) {
                                we(this._indicatorsElement).find(Ie).removeClass(Ee);
                                var e = this._indicatorsElement.children[this._getItemIndex(t)];
                                e && we(e).addClass(Ee);
                            }
                        }),
                        (t._slide = function(t, e) {
                            var i,
                                n,
                                o,
                                s = this,
                                r = we(this._element).find(We)[0],
                                a = this._getItemIndex(r),
                                l = e || (r && this._getItemByDirection(t, r)),
                                d = this._getItemIndex(l),
                                c = Boolean(this._interval);
                            if (
                                ((o =
                                        t === Se ?
                                        ((i = "carousel-item-left"),
                                            (n = "carousel-item-next"),
                                            "left") :
                                        ((i = "carousel-item-right"),
                                            (n = "carousel-item-prev"),
                                            "right")),
                                    l && we(l).hasClass(Ee))
                            )
                                this._isSliding = !1;
                            else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() &&
                                r &&
                                l
                            ) {
                                (this._isSliding = !0),
                                c && this.pause(),
                                    this._setActiveIndicatorElement(l);
                                var h = we.Event(ze.SLID, {
                                    relatedTarget: l,
                                    direction: o,
                                    from: a,
                                    to: d,
                                });
                                Me.supportsTransitionEnd() &&
                                    we(this._element).hasClass("slide") ?
                                    (we(l).addClass(n),
                                        Me.reflow(l),
                                        we(r).addClass(i),
                                        we(l).addClass(i),
                                        we(r)
                                        .one(Me.TRANSITION_END, function() {
                                            we(l)
                                                .removeClass(i + " " + n)
                                                .addClass(Ee),
                                                we(r).removeClass(Ee + " " + n + " " + i),
                                                (s._isSliding = !1),
                                                setTimeout(function() {
                                                    return we(s._element).trigger(h);
                                                }, 0);
                                        })
                                        .emulateTransitionEnd(600)) :
                                    (we(r).removeClass(Ee),
                                        we(l).addClass(Ee),
                                        (this._isSliding = !1),
                                        we(this._element).trigger(h)),
                                    c && this.cycle();
                            }
                        }),
                        (s._jQueryInterface = function(n) {
                            return this.each(function() {
                                var t = we(this).data(be),
                                    e = h({}, Te, we(this).data());
                                "object" == typeof n && (e = h({}, e, n));
                                var i = "string" == typeof n ? n : e.slide;
                                if (
                                    (t || ((t = new s(this, e)), we(this).data(be, t)),
                                        "number" == typeof n)
                                )
                                    t.to(n);
                                else if ("string" == typeof i) {
                                    if (void 0 === t[i])
                                        throw new TypeError('No method named "' + i + '"');
                                    t[i]();
                                } else e.interval && (t.pause(), t.cycle());
                            });
                        }),
                        (s._dataApiClickHandler = function(t) {
                            var e = Me.getSelectorFromElement(this);
                            if (e) {
                                var i = we(e)[0];
                                if (i && we(i).hasClass("carousel")) {
                                    var n = h({}, we(i).data(), we(this).data()),
                                        o = this.getAttribute("data-slide-to");
                                    o && (n.interval = !1),
                                        s._jQueryInterface.call(we(i), n),
                                        o && we(i).data(be).to(o),
                                        t.preventDefault();
                                }
                            }
                        }),
                        r(s, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return Te;
                                },
                            },
                        ]),
                        s
                    );
                })()),
                we(document).on(ze.CLICK_DATA_API, De, Pe._dataApiClickHandler),
                we(window).on(ze.LOAD_DATA_API, function() {
                    we($e).each(function() {
                        var t = we(this);
                        Pe._jQueryInterface.call(t, t.data());
                    });
                }),
                (we.fn[ye] = Pe._jQueryInterface),
                (we.fn[ye].Constructor = Pe),
                (we.fn[ye].noConflict = function() {
                    return (we.fn[ye] = Ce), Pe._jQueryInterface;
                }),
                Pe),
            Qe =
            ((oe = "collapse"),
                (re = "." + (se = "bs.collapse")),
                (ae = (ne = e).fn[oe]),
                (le = { toggle: !0, parent: "" }),
                (de = { toggle: "boolean", parent: "(string|element)" }),
                (ce = {
                    SHOW: "show" + re,
                    SHOWN: "shown" + re,
                    HIDE: "hide" + re,
                    HIDDEN: "hidden" + re,
                    CLICK_DATA_API: "click" + re + ".data-api",
                }),
                (he = "show"),
                (ue = "collapse"),
                (pe = "collapsing"),
                (fe = "collapsed"),
                (me = ".show, .collapsing"),
                (ge = '[data-toggle="collapse"]'),
                (ve = (function() {
                    function a(t, e) {
                        (this._isTransitioning = !1),
                        (this._element = t),
                        (this._config = this._getConfig(e)),
                        (this._triggerArray = ne.makeArray(
                            ne(
                                '[data-toggle="collapse"][href="#' +
                                t.id +
                                '"],[data-toggle="collapse"][data-target="#' +
                                t.id +
                                '"]'
                            )
                        ));
                        for (var i = ne(ge), n = 0; n < i.length; n++) {
                            var o = i[n],
                                s = Me.getSelectorFromElement(o);
                            null !== s &&
                                0 < ne(s).filter(t).length &&
                                ((this._selector = s), this._triggerArray.push(o));
                        }
                        (this._parent = this._config.parent ? this._getParent() : null),
                        this._config.parent ||
                            this._addAriaAndCollapsedClass(
                                this._element,
                                this._triggerArray
                            ),
                            this._config.toggle && this.toggle();
                    }
                    var t = a.prototype;
                    return (
                        (t.toggle = function() {
                            ne(this._element).hasClass(he) ? this.hide() : this.show();
                        }),
                        (t.show = function() {
                            var t,
                                e,
                                i = this;
                            if (!(
                                    this._isTransitioning ||
                                    ne(this._element).hasClass(he) ||
                                    (this._parent &&
                                        0 ===
                                        (t = ne.makeArray(
                                            ne(this._parent)
                                            .find(me)
                                            .filter('[data-parent="' + this._config.parent + '"]')
                                        )).length &&
                                        (t = null),
                                        t &&
                                        (e = ne(t).not(this._selector).data(se)) &&
                                        e._isTransitioning)
                                )) {
                                var n = ne.Event(ce.SHOW);
                                if ((ne(this._element).trigger(n), !n.isDefaultPrevented())) {
                                    t &&
                                        (a._jQueryInterface.call(ne(t).not(this._selector), "hide"),
                                            e || ne(t).data(se, null));
                                    var o = this._getDimension();
                                    ne(this._element).removeClass(ue).addClass(pe),
                                        (this._element.style[o] = 0) < this._triggerArray.length &&
                                        ne(this._triggerArray)
                                        .removeClass(fe)
                                        .attr("aria-expanded", !0),
                                        this.setTransitioning(!0);
                                    var s = function() {
                                        ne(i._element).removeClass(pe).addClass(ue).addClass(he),
                                            (i._element.style[o] = ""),
                                            i.setTransitioning(!1),
                                            ne(i._element).trigger(ce.SHOWN);
                                    };
                                    if (Me.supportsTransitionEnd()) {
                                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1));
                                        ne(this._element)
                                            .one(Me.TRANSITION_END, s)
                                            .emulateTransitionEnd(600),
                                            (this._element.style[o] = this._element[r] + "px");
                                    } else s();
                                }
                            }
                        }),
                        (t.hide = function() {
                            var t = this;
                            if (!this._isTransitioning && ne(this._element).hasClass(he)) {
                                var e = ne.Event(ce.HIDE);
                                if ((ne(this._element).trigger(e), !e.isDefaultPrevented())) {
                                    var i = this._getDimension();
                                    if (
                                        ((this._element.style[i] =
                                                this._element.getBoundingClientRect()[i] + "px"),
                                            Me.reflow(this._element),
                                            ne(this._element)
                                            .addClass(pe)
                                            .removeClass(ue)
                                            .removeClass(he),
                                            0 < this._triggerArray.length)
                                    )
                                        for (var n = 0; n < this._triggerArray.length; n++) {
                                            var o = this._triggerArray[n],
                                                s = Me.getSelectorFromElement(o);
                                            null !== s &&
                                                (ne(s).hasClass(he) ||
                                                    ne(o).addClass(fe).attr("aria-expanded", !1));
                                        }
                                    this.setTransitioning(!0);
                                    var r = function() {
                                        t.setTransitioning(!1),
                                            ne(t._element)
                                            .removeClass(pe)
                                            .addClass(ue)
                                            .trigger(ce.HIDDEN);
                                    };
                                    (this._element.style[i] = ""),
                                    Me.supportsTransitionEnd() ?
                                        ne(this._element)
                                        .one(Me.TRANSITION_END, r)
                                        .emulateTransitionEnd(600) :
                                        r();
                                }
                            }
                        }),
                        (t.setTransitioning = function(t) {
                            this._isTransitioning = t;
                        }),
                        (t.dispose = function() {
                            ne.removeData(this._element, se),
                                (this._config = null),
                                (this._parent = null),
                                (this._element = null),
                                (this._triggerArray = null),
                                (this._isTransitioning = null);
                        }),
                        (t._getConfig = function(t) {
                            return (
                                ((t = h({}, le, t)).toggle = Boolean(t.toggle)),
                                Me.typeCheckConfig(oe, t, de),
                                t
                            );
                        }),
                        (t._getDimension = function() {
                            return ne(this._element).hasClass("width") ? "width" : "height";
                        }),
                        (t._getParent = function() {
                            var i = this,
                                t = null;
                            Me.isElement(this._config.parent) ?
                                ((t = this._config.parent),
                                    void 0 !== this._config.parent.jquery &&
                                    (t = this._config.parent[0])) :
                                (t = ne(this._config.parent)[0]);
                            var e =
                                '[data-toggle="collapse"][data-parent="' +
                                this._config.parent +
                                '"]';
                            return (
                                ne(t)
                                .find(e)
                                .each(function(t, e) {
                                    i._addAriaAndCollapsedClass(a._getTargetFromElement(e), [
                                        e,
                                    ]);
                                }),
                                t
                            );
                        }),
                        (t._addAriaAndCollapsedClass = function(t, e) {
                            if (t) {
                                var i = ne(t).hasClass(he);
                                0 < e.length &&
                                    ne(e).toggleClass(fe, !i).attr("aria-expanded", i);
                            }
                        }),
                        (a._getTargetFromElement = function(t) {
                            var e = Me.getSelectorFromElement(t);
                            return e ? ne(e)[0] : null;
                        }),
                        (a._jQueryInterface = function(n) {
                            return this.each(function() {
                                var t = ne(this),
                                    e = t.data(se),
                                    i = h({}, le, t.data(), "object" == typeof n && n);
                                if (
                                    (!e && i.toggle && /show|hide/.test(n) && (i.toggle = !1),
                                        e || ((e = new a(this, i)), t.data(se, e)),
                                        "string" == typeof n)
                                ) {
                                    if (void 0 === e[n])
                                        throw new TypeError('No method named "' + n + '"');
                                    e[n]();
                                }
                            });
                        }),
                        r(a, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return le;
                                },
                            },
                        ]),
                        a
                    );
                })()),
                ne(document).on(ce.CLICK_DATA_API, ge, function(t) {
                    "A" === t.currentTarget.tagName && t.preventDefault();
                    var i = ne(this),
                        e = Me.getSelectorFromElement(this);
                    ne(e).each(function() {
                        var t = ne(this),
                            e = t.data(se) ? "toggle" : i.data();
                        ve._jQueryInterface.call(t, e);
                    });
                }),
                (ne.fn[oe] = ve._jQueryInterface),
                (ne.fn[oe].Constructor = ve),
                (ne.fn[oe].noConflict = function() {
                    return (ne.fn[oe] = ae), ve._jQueryInterface;
                }),
                ve),
            Be =
            ((Yt = "dropdown"),
                (Qt = "." + (Nt = "bs.dropdown")),
                (Bt = ".data-api"),
                (qt = (Rt = e).fn[Yt]),
                (Xt = new RegExp("38|40|27")),
                (Ut = {
                    HIDE: "hide" + Qt,
                    HIDDEN: "hidden" + Qt,
                    SHOW: "show" + Qt,
                    SHOWN: "shown" + Qt,
                    CLICK: "click" + Qt,
                    CLICK_DATA_API: "click" + Qt + Bt,
                    KEYDOWN_DATA_API: "keydown" + Qt + Bt,
                    KEYUP_DATA_API: "keyup" + Qt + Bt,
                }),
                (Zt = "disabled"),
                (Kt = "show"),
                (Vt = "dropdown-menu-right"),
                (Gt = '[data-toggle="dropdown"]'),
                (Jt = ".dropdown-menu"),
                (te = { offset: 0, flip: !0, boundary: "scrollParent" }),
                (ee = {
                    offset: "(number|string|function)",
                    flip: "boolean",
                    boundary: "(string|element)",
                }),
                (ie = (function() {
                    function l(t, e) {
                        (this._element = t),
                        (this._popper = null),
                        (this._config = this._getConfig(e)),
                        (this._menu = this._getMenuElement()),
                        (this._inNavbar = this._detectNavbar()),
                        this._addEventListeners();
                    }
                    var t = l.prototype;
                    return (
                        (t.toggle = function() {
                            if (!this._element.disabled && !Rt(this._element).hasClass(Zt)) {
                                var t = l._getParentFromElement(this._element),
                                    e = Rt(this._menu).hasClass(Kt);
                                if ((l._clearMenus(), !e)) {
                                    var i = { relatedTarget: this._element },
                                        n = Rt.Event(Ut.SHOW, i);
                                    if ((Rt(t).trigger(n), !n.isDefaultPrevented())) {
                                        if (!this._inNavbar) {
                                            if (void 0 === c)
                                                throw new TypeError(
                                                    "Bootstrap dropdown require Popper.js (https://popper.js.org)"
                                                );
                                            var o = this._element;
                                            Rt(t).hasClass("dropup") &&
                                                (Rt(this._menu).hasClass("dropdown-menu-left") ||
                                                    Rt(this._menu).hasClass(Vt)) &&
                                                (o = t),
                                                "scrollParent" !== this._config.boundary &&
                                                Rt(t).addClass("position-static"),
                                                (this._popper = new c(
                                                    o,
                                                    this._menu,
                                                    this._getPopperConfig()
                                                ));
                                        }
                                        "ontouchstart" in document.documentElement &&
                                            0 === Rt(t).closest(".navbar-nav").length &&
                                            Rt("body").children().on("mouseover", null, Rt.noop),
                                            this._element.focus(),
                                            this._element.setAttribute("aria-expanded", !0),
                                            Rt(this._menu).toggleClass(Kt),
                                            Rt(t).toggleClass(Kt).trigger(Rt.Event(Ut.SHOWN, i));
                                    }
                                }
                            }
                        }),
                        (t.dispose = function() {
                            Rt.removeData(this._element, Nt),
                                Rt(this._element).off(Qt),
                                (this._element = null),
                                (this._menu = null) !== this._popper &&
                                (this._popper.destroy(), (this._popper = null));
                        }),
                        (t.update = function() {
                            (this._inNavbar = this._detectNavbar()),
                            null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (t._addEventListeners = function() {
                            var e = this;
                            Rt(this._element).on(Ut.CLICK, function(t) {
                                t.preventDefault(), t.stopPropagation(), e.toggle();
                            });
                        }),
                        (t._getConfig = function(t) {
                            return (
                                (t = h({},
                                    this.constructor.Default,
                                    Rt(this._element).data(),
                                    t
                                )),
                                Me.typeCheckConfig(Yt, t, this.constructor.DefaultType),
                                t
                            );
                        }),
                        (t._getMenuElement = function() {
                            if (!this._menu) {
                                var t = l._getParentFromElement(this._element);
                                this._menu = Rt(t).find(Jt)[0];
                            }
                            return this._menu;
                        }),
                        (t._getPlacement = function() {
                            var t = Rt(this._element).parent(),
                                e = "bottom-start";
                            return (
                                t.hasClass("dropup") ?
                                ((e = "top-start"),
                                    Rt(this._menu).hasClass(Vt) && (e = "top-end")) :
                                t.hasClass("dropright") ?
                                (e = "right-start") :
                                t.hasClass("dropleft") ?
                                (e = "left-start") :
                                Rt(this._menu).hasClass(Vt) && (e = "bottom-end"),
                                e
                            );
                        }),
                        (t._detectNavbar = function() {
                            return 0 < Rt(this._element).closest(".navbar").length;
                        }),
                        (t._getPopperConfig = function() {
                            var e = this,
                                t = {};
                            return (
                                "function" == typeof this._config.offset ?
                                (t.fn = function(t) {
                                    return (
                                        (t.offsets = h({},
                                            t.offsets,
                                            e._config.offset(t.offsets) || {}
                                        )),
                                        t
                                    );
                                }) :
                                (t.offset = this._config.offset), {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: t,
                                        flip: { enabled: this._config.flip },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary,
                                        },
                                    },
                                }
                            );
                        }),
                        (l._jQueryInterface = function(e) {
                            return this.each(function() {
                                var t = Rt(this).data(Nt);
                                if (
                                    (t ||
                                        ((t = new l(this, "object" == typeof e ? e : null)),
                                            Rt(this).data(Nt, t)),
                                        "string" == typeof e)
                                ) {
                                    if (void 0 === t[e])
                                        throw new TypeError('No method named "' + e + '"');
                                    t[e]();
                                }
                            });
                        }),
                        (l._clearMenus = function(t) {
                            if (!t ||
                                (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            )
                                for (var e = Rt.makeArray(Rt(Gt)), i = 0; i < e.length; i++) {
                                    var n = l._getParentFromElement(e[i]),
                                        o = Rt(e[i]).data(Nt),
                                        s = { relatedTarget: e[i] };
                                    if (o) {
                                        var r = o._menu;
                                        if (
                                            Rt(n).hasClass(Kt) &&
                                            !(
                                                t &&
                                                (("click" === t.type &&
                                                        /input|textarea/i.test(t.target.tagName)) ||
                                                    ("keyup" === t.type && 9 === t.which)) &&
                                                Rt.contains(n, t.target)
                                            )
                                        ) {
                                            var a = Rt.Event(Ut.HIDE, s);
                                            Rt(n).trigger(a),
                                                a.isDefaultPrevented() ||
                                                ("ontouchstart" in document.documentElement &&
                                                    Rt("body")
                                                    .children()
                                                    .off("mouseover", null, Rt.noop),
                                                    e[i].setAttribute("aria-expanded", "false"),
                                                    Rt(r).removeClass(Kt),
                                                    Rt(n)
                                                    .removeClass(Kt)
                                                    .trigger(Rt.Event(Ut.HIDDEN, s)));
                                        }
                                    }
                                }
                        }),
                        (l._getParentFromElement = function(t) {
                            var e,
                                i = Me.getSelectorFromElement(t);
                            return i && (e = Rt(i)[0]), e || t.parentNode;
                        }),
                        (l._dataApiKeydownHandler = function(t) {
                            if (
                                (/input|textarea/i.test(t.target.tagName) ?
                                    !(
                                        32 === t.which ||
                                        (27 !== t.which &&
                                            ((40 !== t.which && 38 !== t.which) ||
                                                Rt(t.target).closest(Jt).length))
                                    ) :
                                    Xt.test(t.which)) &&
                                (t.preventDefault(),
                                    t.stopPropagation(), !this.disabled && !Rt(this).hasClass(Zt))
                            ) {
                                var e = l._getParentFromElement(this),
                                    i = Rt(e).hasClass(Kt);
                                if (
                                    (i || (27 === t.which && 32 === t.which)) &&
                                    (!i || (27 !== t.which && 32 !== t.which))
                                ) {
                                    var n = Rt(e)
                                        .find(".dropdown-menu .dropdown-item:not(.disabled)")
                                        .get();
                                    if (0 !== n.length) {
                                        var o = n.indexOf(t.target);
                                        38 === t.which && 0 < o && o--,
                                            40 === t.which && o < n.length - 1 && o++,
                                            o < 0 && (o = 0),
                                            n[o].focus();
                                    }
                                } else {
                                    if (27 === t.which) {
                                        var s = Rt(e).find(Gt)[0];
                                        Rt(s).trigger("focus");
                                    }
                                    Rt(this).trigger("click");
                                }
                            }
                        }),
                        r(l, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return te;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function() {
                                    return ee;
                                },
                            },
                        ]),
                        l
                    );
                })()),
                Rt(document)
                .on(Ut.KEYDOWN_DATA_API, Gt, ie._dataApiKeydownHandler)
                .on(Ut.KEYDOWN_DATA_API, Jt, ie._dataApiKeydownHandler)
                .on(Ut.CLICK_DATA_API + " " + Ut.KEYUP_DATA_API, ie._clearMenus)
                .on(Ut.CLICK_DATA_API, Gt, function(t) {
                    t.preventDefault(),
                        t.stopPropagation(),
                        ie._jQueryInterface.call(Rt(this), "toggle");
                })
                .on(Ut.CLICK_DATA_API, ".dropdown form", function(t) {
                    t.stopPropagation();
                }),
                (Rt.fn[Yt] = ie._jQueryInterface),
                (Rt.fn[Yt].Constructor = ie),
                (Rt.fn[Yt].noConflict = function() {
                    return (Rt.fn[Yt] = qt), ie._jQueryInterface;
                }),
                ie),
            qe =
            ((xt = "." + (St = "bs.modal")),
                (zt = (kt = e).fn.modal),
                (Et = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
                (It = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean",
                }),
                (Wt = {
                    HIDE: "hide" + xt,
                    HIDDEN: "hidden" + xt,
                    SHOW: "show" + xt,
                    SHOWN: "shown" + xt,
                    FOCUSIN: "focusin" + xt,
                    RESIZE: "resize" + xt,
                    CLICK_DISMISS: "click.dismiss" + xt,
                    KEYDOWN_DISMISS: "keydown.dismiss" + xt,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + xt,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + xt,
                    CLICK_DATA_API: "click" + xt + ".data-api",
                }),
                (Lt = "modal-open"),
                (At = "fade"),
                (Ot = "show"),
                (Dt = ".modal-dialog"),
                ($t = '[data-toggle="modal"]'),
                (Pt = '[data-dismiss="modal"]'),
                (Ft = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"),
                (Ht = ".sticky-top"),
                (jt = ".navbar-toggler"),
                (Mt = (function() {
                    function o(t, e) {
                        (this._config = this._getConfig(e)),
                        (this._element = t),
                        (this._dialog = kt(t).find(Dt)[0]),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._originalBodyPadding = 0),
                        (this._scrollbarWidth = 0);
                    }
                    var t = o.prototype;
                    return (
                        (t.toggle = function(t) {
                            return this._isShown ? this.hide() : this.show(t);
                        }),
                        (t.show = function(t) {
                            var e = this;
                            if (!this._isTransitioning && !this._isShown) {
                                Me.supportsTransitionEnd() &&
                                    kt(this._element).hasClass(At) &&
                                    (this._isTransitioning = !0);
                                var i = kt.Event(Wt.SHOW, { relatedTarget: t });
                                kt(this._element).trigger(i),
                                    this._isShown ||
                                    i.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                        this._checkScrollbar(),
                                        this._setScrollbar(),
                                        this._adjustDialog(),
                                        kt(document.body).addClass(Lt),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        kt(this._element).on(Wt.CLICK_DISMISS, Pt, function(t) {
                                            return e.hide(t);
                                        }),
                                        kt(this._dialog).on(Wt.MOUSEDOWN_DISMISS, function() {
                                            kt(e._element).one(Wt.MOUSEUP_DISMISS, function(t) {
                                                kt(t.target).is(e._element) &&
                                                    (e._ignoreBackdropClick = !0);
                                            });
                                        }),
                                        this._showBackdrop(function() {
                                            return e._showElement(t);
                                        }));
                            }
                        }),
                        (t.hide = function(t) {
                            var e = this;
                            if (
                                (t && t.preventDefault(), !this._isTransitioning && this._isShown)
                            ) {
                                var i = kt.Event(Wt.HIDE);
                                if (
                                    (kt(this._element).trigger(i),
                                        this._isShown && !i.isDefaultPrevented())
                                ) {
                                    this._isShown = !1;
                                    var n =
                                        Me.supportsTransitionEnd() &&
                                        kt(this._element).hasClass(At);
                                    n && (this._isTransitioning = !0),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        kt(document).off(Wt.FOCUSIN),
                                        kt(this._element).removeClass(Ot),
                                        kt(this._element).off(Wt.CLICK_DISMISS),
                                        kt(this._dialog).off(Wt.MOUSEDOWN_DISMISS),
                                        n ?
                                        kt(this._element)
                                        .one(Me.TRANSITION_END, function(t) {
                                            return e._hideModal(t);
                                        })
                                        .emulateTransitionEnd(300) :
                                        this._hideModal();
                                }
                            }
                        }),
                        (t.dispose = function() {
                            kt.removeData(this._element, St),
                                kt(window, document, this._element, this._backdrop).off(xt),
                                (this._config = null),
                                (this._element = null),
                                (this._dialog = null),
                                (this._backdrop = null),
                                (this._isShown = null),
                                (this._isBodyOverflowing = null),
                                (this._ignoreBackdropClick = null),
                                (this._scrollbarWidth = null);
                        }),
                        (t.handleUpdate = function() {
                            this._adjustDialog();
                        }),
                        (t._getConfig = function(t) {
                            return (t = h({}, Et, t)), Me.typeCheckConfig("modal", t, It), t;
                        }),
                        (t._showElement = function(t) {
                            var e = this,
                                i =
                                Me.supportsTransitionEnd() && kt(this._element).hasClass(At);
                            (this._element.parentNode &&
                                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                            document.body.appendChild(this._element),
                                (this._element.style.display = "block"),
                                this._element.removeAttribute("aria-hidden"),
                                (this._element.scrollTop = 0),
                                i && Me.reflow(this._element),
                                kt(this._element).addClass(Ot),
                                this._config.focus && this._enforceFocus();
                            var n = kt.Event(Wt.SHOWN, { relatedTarget: t }),
                                o = function() {
                                    e._config.focus && e._element.focus(),
                                        (e._isTransitioning = !1),
                                        kt(e._element).trigger(n);
                                };
                            i
                                ?
                                kt(this._dialog)
                                .one(Me.TRANSITION_END, o)
                                .emulateTransitionEnd(300) :
                                o();
                        }),
                        (t._enforceFocus = function() {
                            var e = this;
                            kt(document)
                                .off(Wt.FOCUSIN)
                                .on(Wt.FOCUSIN, function(t) {
                                    document !== t.target &&
                                        e._element !== t.target &&
                                        0 === kt(e._element).has(t.target).length &&
                                        e._element.focus();
                                });
                        }),
                        (t._setEscapeEvent = function() {
                            var e = this;
                            this._isShown && this._config.keyboard ?
                                kt(this._element).on(Wt.KEYDOWN_DISMISS, function(t) {
                                    27 === t.which && (t.preventDefault(), e.hide());
                                }) :
                                this._isShown || kt(this._element).off(Wt.KEYDOWN_DISMISS);
                        }),
                        (t._setResizeEvent = function() {
                            var e = this;
                            this._isShown ?
                                kt(window).on(Wt.RESIZE, function(t) {
                                    return e.handleUpdate(t);
                                }) :
                                kt(window).off(Wt.RESIZE);
                        }),
                        (t._hideModal = function() {
                            var t = this;
                            (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                                (this._isTransitioning = !1),
                                this._showBackdrop(function() {
                                    kt(document.body).removeClass(Lt),
                                        t._resetAdjustments(),
                                        t._resetScrollbar(),
                                        kt(t._element).trigger(Wt.HIDDEN);
                                });
                        }),
                        (t._removeBackdrop = function() {
                            this._backdrop &&
                                (kt(this._backdrop).remove(), (this._backdrop = null));
                        }),
                        (t._showBackdrop = function(t) {
                            var e = this,
                                i = kt(this._element).hasClass(At) ? At : "";
                            if (this._isShown && this._config.backdrop) {
                                var n = Me.supportsTransitionEnd() && i;
                                if (
                                    ((this._backdrop = document.createElement("div")),
                                        (this._backdrop.className = "modal-backdrop"),
                                        i && kt(this._backdrop).addClass(i),
                                        kt(this._backdrop).appendTo(document.body),
                                        kt(this._element).on(Wt.CLICK_DISMISS, function(t) {
                                            e._ignoreBackdropClick ?
                                                (e._ignoreBackdropClick = !1) :
                                                t.target === t.currentTarget &&
                                                ("static" === e._config.backdrop ?
                                                    e._element.focus() :
                                                    e.hide());
                                        }),
                                        n && Me.reflow(this._backdrop),
                                        kt(this._backdrop).addClass(Ot), !t)
                                )
                                    return;
                                if (!n) return void t();
                                kt(this._backdrop)
                                    .one(Me.TRANSITION_END, t)
                                    .emulateTransitionEnd(150);
                            } else if (!this._isShown && this._backdrop) {
                                kt(this._backdrop).removeClass(Ot);
                                var o = function() {
                                    e._removeBackdrop(), t && t();
                                };
                                Me.supportsTransitionEnd() && kt(this._element).hasClass(At) ?
                                    kt(this._backdrop)
                                    .one(Me.TRANSITION_END, o)
                                    .emulateTransitionEnd(150) :
                                    o();
                            } else t && t();
                        }),
                        (t._adjustDialog = function() {
                            var t =
                                this._element.scrollHeight >
                                document.documentElement.clientHeight;
                            !this._isBodyOverflowing &&
                                t &&
                                (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                                this._isBodyOverflowing &&
                                !t &&
                                (this._element.style.paddingRight =
                                    this._scrollbarWidth + "px");
                        }),
                        (t._resetAdjustments = function() {
                            (this._element.style.paddingLeft = ""),
                            (this._element.style.paddingRight = "");
                        }),
                        (t._checkScrollbar = function() {
                            var t = document.body.getBoundingClientRect();
                            (this._isBodyOverflowing = t.left + t.right < window.innerWidth),
                            (this._scrollbarWidth = this._getScrollbarWidth());
                        }),
                        (t._setScrollbar = function() {
                            var o = this;
                            if (this._isBodyOverflowing) {
                                kt(Ft).each(function(t, e) {
                                        var i = kt(e)[0].style.paddingRight,
                                            n = kt(e).css("padding-right");
                                        kt(e)
                                            .data("padding-right", i)
                                            .css(
                                                "padding-right",
                                                parseFloat(n) + o._scrollbarWidth + "px"
                                            );
                                    }),
                                    kt(Ht).each(function(t, e) {
                                        var i = kt(e)[0].style.marginRight,
                                            n = kt(e).css("margin-right");
                                        kt(e)
                                            .data("margin-right", i)
                                            .css(
                                                "margin-right",
                                                parseFloat(n) - o._scrollbarWidth + "px"
                                            );
                                    }),
                                    kt(jt).each(function(t, e) {
                                        var i = kt(e)[0].style.marginRight,
                                            n = kt(e).css("margin-right");
                                        kt(e)
                                            .data("margin-right", i)
                                            .css(
                                                "margin-right",
                                                parseFloat(n) + o._scrollbarWidth + "px"
                                            );
                                    });
                                var t = document.body.style.paddingRight,
                                    e = kt("body").css("padding-right");
                                kt("body")
                                    .data("padding-right", t)
                                    .css(
                                        "padding-right",
                                        parseFloat(e) + this._scrollbarWidth + "px"
                                    );
                            }
                        }),
                        (t._resetScrollbar = function() {
                            kt(Ft).each(function(t, e) {
                                    var i = kt(e).data("padding-right");
                                    void 0 !== i &&
                                        kt(e).css("padding-right", i).removeData("padding-right");
                                }),
                                kt(Ht + ", " + jt).each(function(t, e) {
                                    var i = kt(e).data("margin-right");
                                    void 0 !== i &&
                                        kt(e).css("margin-right", i).removeData("margin-right");
                                });
                            var t = kt("body").data("padding-right");
                            void 0 !== t &&
                                kt("body").css("padding-right", t).removeData("padding-right");
                        }),
                        (t._getScrollbarWidth = function() {
                            var t = document.createElement("div");
                            (t.className = "modal-scrollbar-measure"),
                            document.body.appendChild(t);
                            var e = t.getBoundingClientRect().width - t.clientWidth;
                            return document.body.removeChild(t), e;
                        }),
                        (o._jQueryInterface = function(i, n) {
                            return this.each(function() {
                                var t = kt(this).data(St),
                                    e = h({},
                                        o.Default,
                                        kt(this).data(),
                                        "object" == typeof i && i
                                    );
                                if (
                                    (t || ((t = new o(this, e)), kt(this).data(St, t)),
                                        "string" == typeof i)
                                ) {
                                    if (void 0 === t[i])
                                        throw new TypeError('No method named "' + i + '"');
                                    t[i](n);
                                } else e.show && t.show(n);
                            });
                        }),
                        r(o, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return Et;
                                },
                            },
                        ]),
                        o
                    );
                })()),
                kt(document).on(Wt.CLICK_DATA_API, $t, function(t) {
                    var e,
                        i = this,
                        n = Me.getSelectorFromElement(this);
                    n && (e = kt(n)[0]);
                    var o = kt(e).data(St) ?
                        "toggle" :
                        h({}, kt(e).data(), kt(this).data());
                    ("A" !== this.tagName && "AREA" !== this.tagName) ||
                    t.preventDefault();
                    var s = kt(e).one(Wt.SHOW, function(t) {
                        t.isDefaultPrevented() ||
                            s.one(Wt.HIDDEN, function() {
                                kt(i).is(":visible") && i.focus();
                            });
                    });
                    Mt._jQueryInterface.call(kt(e), o, this);
                }),
                (kt.fn.modal = Mt._jQueryInterface),
                (kt.fn.modal.Constructor = Mt),
                (kt.fn.modal.noConflict = function() {
                    return (kt.fn.modal = zt), Mt._jQueryInterface;
                }),
                Mt),
            Xe =
            ((dt = "tooltip"),
                (ht = "." + (ct = "bs.tooltip")),
                (ut = (lt = e).fn[dt]),
                (pt = new RegExp("(^|\\s)bs-tooltip\\S+", "g")),
                (gt = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !(mt = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: "right",
                        BOTTOM: "bottom",
                        LEFT: "left",
                    }),
                    selector: !(ft = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)",
                    }),
                    placement: "top",
                    offset: 0,
                    container: !1,
                    fallbackPlacement: "flip",
                    boundary: "scrollParent",
                }),
                (wt = {
                    HIDE: "hide" + ht,
                    HIDDEN: "hidden" + ht,
                    SHOW: (vt = "show") + ht,
                    SHOWN: "shown" + ht,
                    INSERTED: "inserted" + ht,
                    CLICK: "click" + ht,
                    FOCUSIN: "focusin" + ht,
                    FOCUSOUT: "focusout" + ht,
                    MOUSEENTER: "mouseenter" + ht,
                    MOUSELEAVE: "mouseleave" + ht,
                }),
                (yt = "fade"),
                (bt = "show"),
                (_t = "hover"),
                (Ct = "focus"),
                (Tt = (function() {
                    function d(t, e) {
                        if (void 0 === c)
                            throw new TypeError(
                                "Bootstrap tooltips require Popper.js (https://popper.js.org)"
                            );
                        (this._isEnabled = !0),
                        (this._timeout = 0),
                        (this._hoverState = ""),
                        (this._activeTrigger = {}),
                        (this._popper = null),
                        (this.element = t),
                        (this.config = this._getConfig(e)),
                        (this.tip = null),
                        this._setListeners();
                    }
                    var t = d.prototype;
                    return (
                        (t.enable = function() {
                            this._isEnabled = !0;
                        }),
                        (t.disable = function() {
                            this._isEnabled = !1;
                        }),
                        (t.toggleEnabled = function() {
                            this._isEnabled = !this._isEnabled;
                        }),
                        (t.toggle = function(t) {
                            if (this._isEnabled)
                                if (t) {
                                    var e = this.constructor.DATA_KEY,
                                        i = lt(t.currentTarget).data(e);
                                    i ||
                                        ((i = new this.constructor(
                                                t.currentTarget,
                                                this._getDelegateConfig()
                                            )),
                                            lt(t.currentTarget).data(e, i)),
                                        (i._activeTrigger.click = !i._activeTrigger.click),
                                        i._isWithActiveTrigger() ?
                                        i._enter(null, i) :
                                        i._leave(null, i);
                                } else {
                                    if (lt(this.getTipElement()).hasClass(bt))
                                        return void this._leave(null, this);
                                    this._enter(null, this);
                                }
                        }),
                        (t.dispose = function() {
                            clearTimeout(this._timeout),
                                lt.removeData(this.element, this.constructor.DATA_KEY),
                                lt(this.element).off(this.constructor.EVENT_KEY),
                                lt(this.element).closest(".modal").off("hide.bs.modal"),
                                this.tip && lt(this.tip).remove(),
                                (this._isEnabled = null),
                                (this._timeout = null),
                                (this._hoverState = null),
                                (this._activeTrigger = null) !== this._popper &&
                                this._popper.destroy(),
                                (this._popper = null),
                                (this.element = null),
                                (this.config = null),
                                (this.tip = null);
                        }),
                        (t.show = function() {
                            var e = this;
                            if ("none" === lt(this.element).css("display"))
                                throw new Error("Please use show on visible elements");
                            var t = lt.Event(this.constructor.Event.SHOW);
                            if (this.isWithContent() && this._isEnabled) {
                                lt(this.element).trigger(t);
                                var i = lt.contains(
                                    this.element.ownerDocument.documentElement,
                                    this.element
                                );
                                if (t.isDefaultPrevented() || !i) return;
                                var n = this.getTipElement(),
                                    o = Me.getUID(this.constructor.NAME);
                                n.setAttribute("id", o),
                                    this.element.setAttribute("aria-describedby", o),
                                    this.setContent(),
                                    this.config.animation && lt(n).addClass(yt);
                                var s =
                                    "function" == typeof this.config.placement ?
                                    this.config.placement.call(this, n, this.element) :
                                    this.config.placement,
                                    r = this._getAttachment(s);
                                this.addAttachmentClass(r);
                                var a = !1 === this.config.container ?
                                    document.body :
                                    lt(this.config.container);
                                lt(n).data(this.constructor.DATA_KEY, this),
                                    lt.contains(
                                        this.element.ownerDocument.documentElement,
                                        this.tip
                                    ) || lt(n).appendTo(a),
                                    lt(this.element).trigger(this.constructor.Event.INSERTED),
                                    (this._popper = new c(this.element, n, {
                                        placement: r,
                                        modifiers: {
                                            offset: { offset: this.config.offset },
                                            flip: { behavior: this.config.fallbackPlacement },
                                            arrow: { element: ".arrow" },
                                            preventOverflow: {
                                                boundariesElement: this.config.boundary,
                                            },
                                        },
                                        onCreate: function(t) {
                                            t.originalPlacement !== t.placement &&
                                                e._handlePopperPlacementChange(t);
                                        },
                                        onUpdate: function(t) {
                                            e._handlePopperPlacementChange(t);
                                        },
                                    })),
                                    lt(n).addClass(bt),
                                    "ontouchstart" in document.documentElement &&
                                    lt("body").children().on("mouseover", null, lt.noop);
                                var l = function() {
                                    e.config.animation && e._fixTransition();
                                    var t = e._hoverState;
                                    (e._hoverState = null),
                                    lt(e.element).trigger(e.constructor.Event.SHOWN),
                                        "out" === t && e._leave(null, e);
                                };
                                Me.supportsTransitionEnd() && lt(this.tip).hasClass(yt) ?
                                    lt(this.tip)
                                    .one(Me.TRANSITION_END, l)
                                    .emulateTransitionEnd(d._TRANSITION_DURATION) :
                                    l();
                            }
                        }),
                        (t.hide = function(t) {
                            var e = this,
                                i = this.getTipElement(),
                                n = lt.Event(this.constructor.Event.HIDE),
                                o = function() {
                                    e._hoverState !== vt &&
                                        i.parentNode &&
                                        i.parentNode.removeChild(i),
                                        e._cleanTipClass(),
                                        e.element.removeAttribute("aria-describedby"),
                                        lt(e.element).trigger(e.constructor.Event.HIDDEN),
                                        null !== e._popper && e._popper.destroy(),
                                        t && t();
                                };
                            lt(this.element).trigger(n),
                                n.isDefaultPrevented() ||
                                (lt(i).removeClass(bt),
                                    "ontouchstart" in document.documentElement &&
                                    lt("body").children().off("mouseover", null, lt.noop),
                                    (this._activeTrigger.click = !1),
                                    (this._activeTrigger[Ct] = !1),
                                    (this._activeTrigger[_t] = !1),
                                    Me.supportsTransitionEnd() && lt(this.tip).hasClass(yt) ?
                                    lt(i).one(Me.TRANSITION_END, o).emulateTransitionEnd(150) :
                                    o(),
                                    (this._hoverState = ""));
                        }),
                        (t.update = function() {
                            null !== this._popper && this._popper.scheduleUpdate();
                        }),
                        (t.isWithContent = function() {
                            return Boolean(this.getTitle());
                        }),
                        (t.addAttachmentClass = function(t) {
                            lt(this.getTipElement()).addClass("bs-tooltip-" + t);
                        }),
                        (t.getTipElement = function() {
                            return (
                                (this.tip = this.tip || lt(this.config.template)[0]), this.tip
                            );
                        }),
                        (t.setContent = function() {
                            var t = lt(this.getTipElement());
                            this.setElementContent(t.find(".tooltip-inner"), this.getTitle()),
                                t.removeClass(yt + " " + bt);
                        }),
                        (t.setElementContent = function(t, e) {
                            var i = this.config.html;
                            "object" == typeof e && (e.nodeType || e.jquery) ?
                                i ?
                                lt(e).parent().is(t) || t.empty().append(e) :
                                t.text(lt(e).text()) :
                                t[i ? "html" : "text"](e);
                        }),
                        (t.getTitle = function() {
                            var t = this.element.getAttribute("data-original-title");
                            return (
                                t ||
                                (t =
                                    "function" == typeof this.config.title ?
                                    this.config.title.call(this.element) :
                                    this.config.title),
                                t
                            );
                        }),
                        (t._getAttachment = function(t) {
                            return mt[t.toUpperCase()];
                        }),
                        (t._setListeners = function() {
                            var n = this;
                            this.config.trigger.split(" ").forEach(function(t) {
                                    if ("click" === t)
                                        lt(n.element).on(
                                            n.constructor.Event.CLICK,
                                            n.config.selector,
                                            function(t) {
                                                return n.toggle(t);
                                            }
                                        );
                                    else if ("manual" !== t) {
                                        var e =
                                            t === _t ?
                                            n.constructor.Event.MOUSEENTER :
                                            n.constructor.Event.FOCUSIN,
                                            i =
                                            t === _t ?
                                            n.constructor.Event.MOUSELEAVE :
                                            n.constructor.Event.FOCUSOUT;
                                        lt(n.element)
                                            .on(e, n.config.selector, function(t) {
                                                return n._enter(t);
                                            })
                                            .on(i, n.config.selector, function(t) {
                                                return n._leave(t);
                                            });
                                    }
                                    lt(n.element)
                                        .closest(".modal")
                                        .on("hide.bs.modal", function() {
                                            return n.hide();
                                        });
                                }),
                                this.config.selector ?
                                (this.config = h({}, this.config, {
                                    trigger: "manual",
                                    selector: "",
                                })) :
                                this._fixTitle();
                        }),
                        (t._fixTitle = function() {
                            var t = typeof this.element.getAttribute("data-original-title");
                            (this.element.getAttribute("title") || "string" !== t) &&
                            (this.element.setAttribute(
                                    "data-original-title",
                                    this.element.getAttribute("title") || ""
                                ),
                                this.element.setAttribute("title", ""));
                        }),
                        (t._enter = function(t, e) {
                            var i = this.constructor.DATA_KEY;
                            (e = e || lt(t.currentTarget).data(i)) ||
                            ((e = new this.constructor(
                                    t.currentTarget,
                                    this._getDelegateConfig()
                                )),
                                lt(t.currentTarget).data(i, e)),
                            t && (e._activeTrigger["focusin" === t.type ? Ct : _t] = !0),
                                lt(e.getTipElement()).hasClass(bt) || e._hoverState === vt ?
                                (e._hoverState = vt) :
                                (clearTimeout(e._timeout),
                                    (e._hoverState = vt),
                                    e.config.delay && e.config.delay.show ?
                                    (e._timeout = setTimeout(function() {
                                        e._hoverState === vt && e.show();
                                    }, e.config.delay.show)) :
                                    e.show());
                        }),
                        (t._leave = function(t, e) {
                            var i = this.constructor.DATA_KEY;
                            (e = e || lt(t.currentTarget).data(i)) ||
                            ((e = new this.constructor(
                                    t.currentTarget,
                                    this._getDelegateConfig()
                                )),
                                lt(t.currentTarget).data(i, e)),
                            t && (e._activeTrigger["focusout" === t.type ? Ct : _t] = !1),
                                e._isWithActiveTrigger() ||
                                (clearTimeout(e._timeout),
                                    (e._hoverState = "out"),
                                    e.config.delay && e.config.delay.hide ?
                                    (e._timeout = setTimeout(function() {
                                        "out" === e._hoverState && e.hide();
                                    }, e.config.delay.hide)) :
                                    e.hide());
                        }),
                        (t._isWithActiveTrigger = function() {
                            for (var t in this._activeTrigger)
                                if (this._activeTrigger[t]) return !0;
                            return !1;
                        }),
                        (t._getConfig = function(t) {
                            return (
                                "number" ==
                                typeof(t = h({},
                                    this.constructor.Default,
                                    lt(this.element).data(),
                                    t
                                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
                                "number" == typeof t.title && (t.title = t.title.toString()),
                                "number" == typeof t.content &&
                                (t.content = t.content.toString()),
                                Me.typeCheckConfig(dt, t, this.constructor.DefaultType),
                                t
                            );
                        }),
                        (t._getDelegateConfig = function() {
                            var t = {};
                            if (this.config)
                                for (var e in this.config)
                                    this.constructor.Default[e] !== this.config[e] &&
                                    (t[e] = this.config[e]);
                            return t;
                        }),
                        (t._cleanTipClass = function() {
                            var t = lt(this.getTipElement()),
                                e = t.attr("class").match(pt);
                            null !== e && 0 < e.length && t.removeClass(e.join(""));
                        }),
                        (t._handlePopperPlacementChange = function(t) {
                            this._cleanTipClass(),
                                this.addAttachmentClass(this._getAttachment(t.placement));
                        }),
                        (t._fixTransition = function() {
                            var t = this.getTipElement(),
                                e = this.config.animation;
                            null === t.getAttribute("x-placement") &&
                                (lt(t).removeClass(yt),
                                    (this.config.animation = !1),
                                    this.hide(),
                                    this.show(),
                                    (this.config.animation = e));
                        }),
                        (d._jQueryInterface = function(i) {
                            return this.each(function() {
                                var t = lt(this).data(ct),
                                    e = "object" == typeof i && i;
                                if (
                                    (t || !/dispose|hide/.test(i)) &&
                                    (t || ((t = new d(this, e)), lt(this).data(ct, t)),
                                        "string" == typeof i)
                                ) {
                                    if (void 0 === t[i])
                                        throw new TypeError('No method named "' + i + '"');
                                    t[i]();
                                }
                            });
                        }),
                        r(d, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return gt;
                                },
                            },
                            {
                                key: "NAME",
                                get: function() {
                                    return dt;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function() {
                                    return ct;
                                },
                            },
                            {
                                key: "Event",
                                get: function() {
                                    return wt;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function() {
                                    return ht;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function() {
                                    return ft;
                                },
                            },
                        ]),
                        d
                    );
                })()),
                (lt.fn[dt] = Tt._jQueryInterface),
                (lt.fn[dt].Constructor = Tt),
                (lt.fn[dt].noConflict = function() {
                    return (lt.fn[dt] = ut), Tt._jQueryInterface;
                }),
                Tt),
            Ue =
            ((J = "popover"),
                (et = "." + (tt = "bs.popover")),
                (it = (G = e).fn[J]),
                (nt = new RegExp("(^|\\s)bs-popover\\S+", "g")),
                (ot = h({}, Xe.Default, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                })),
                (st = h({}, Xe.DefaultType, { content: "(string|element|function)" })),
                (rt = {
                    HIDE: "hide" + et,
                    HIDDEN: "hidden" + et,
                    SHOW: "show" + et,
                    SHOWN: "shown" + et,
                    INSERTED: "inserted" + et,
                    CLICK: "click" + et,
                    FOCUSIN: "focusin" + et,
                    FOCUSOUT: "focusout" + et,
                    MOUSEENTER: "mouseenter" + et,
                    MOUSELEAVE: "mouseleave" + et,
                }),
                (at = (function(t) {
                    var e, i;

                    function n() {
                        return t.apply(this, arguments) || this;
                    }
                    (i = t),
                    ((e = n).prototype = Object.create(i.prototype)),
                    ((e.prototype.constructor = e).__proto__ = i);
                    var o = n.prototype;
                    return (
                        (o.isWithContent = function() {
                            return this.getTitle() || this._getContent();
                        }),
                        (o.addAttachmentClass = function(t) {
                            G(this.getTipElement()).addClass("bs-popover-" + t);
                        }),
                        (o.getTipElement = function() {
                            return (
                                (this.tip = this.tip || G(this.config.template)[0]), this.tip
                            );
                        }),
                        (o.setContent = function() {
                            var t = G(this.getTipElement());
                            this.setElementContent(
                                t.find(".popover-header"),
                                this.getTitle()
                            );
                            var e = this._getContent();
                            "function" == typeof e && (e = e.call(this.element)),
                                this.setElementContent(t.find(".popover-body"), e),
                                t.removeClass("fade show");
                        }),
                        (o._getContent = function() {
                            return (
                                this.element.getAttribute("data-content") || this.config.content
                            );
                        }),
                        (o._cleanTipClass = function() {
                            var t = G(this.getTipElement()),
                                e = t.attr("class").match(nt);
                            null !== e && 0 < e.length && t.removeClass(e.join(""));
                        }),
                        (n._jQueryInterface = function(i) {
                            return this.each(function() {
                                var t = G(this).data(tt),
                                    e = "object" == typeof i ? i : null;
                                if (
                                    (t || !/destroy|hide/.test(i)) &&
                                    (t || ((t = new n(this, e)), G(this).data(tt, t)),
                                        "string" == typeof i)
                                ) {
                                    if (void 0 === t[i])
                                        throw new TypeError('No method named "' + i + '"');
                                    t[i]();
                                }
                            });
                        }),
                        r(n, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return ot;
                                },
                            },
                            {
                                key: "NAME",
                                get: function() {
                                    return J;
                                },
                            },
                            {
                                key: "DATA_KEY",
                                get: function() {
                                    return tt;
                                },
                            },
                            {
                                key: "Event",
                                get: function() {
                                    return rt;
                                },
                            },
                            {
                                key: "EVENT_KEY",
                                get: function() {
                                    return et;
                                },
                            },
                            {
                                key: "DefaultType",
                                get: function() {
                                    return st;
                                },
                            },
                        ]),
                        n
                    );
                })(Xe)),
                (G.fn[J] = at._jQueryInterface),
                (G.fn[J].Constructor = at),
                (G.fn[J].noConflict = function() {
                    return (G.fn[J] = it), at._jQueryInterface;
                }),
                at),
            Ze =
            ((O = "scrollspy"),
                ($ = "." + (D = "bs.scrollspy")),
                (P = (A = e).fn[O]),
                (F = { offset: 10, method: "auto", target: "" }),
                (H = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)",
                }),
                (j = {
                    ACTIVATE: "activate" + $,
                    SCROLL: "scroll" + $,
                    LOAD_DATA_API: "load" + $ + ".data-api",
                }),
                (M = "active"),
                (R = '[data-spy="scroll"]'),
                (Y = ".active"),
                (N = ".nav, .list-group"),
                (Q = ".nav-link"),
                (B = ".nav-item"),
                (q = ".list-group-item"),
                (X = ".dropdown"),
                (U = ".dropdown-item"),
                (Z = ".dropdown-toggle"),
                (K = "position"),
                (V = (function() {
                    function i(t, e) {
                        var i = this;
                        (this._element = t),
                        (this._scrollElement = "BODY" === t.tagName ? window : t),
                        (this._config = this._getConfig(e)),
                        (this._selector =
                            this._config.target +
                            " " +
                            Q +
                            "," +
                            this._config.target +
                            " " +
                            q +
                            "," +
                            this._config.target +
                            " " +
                            U),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        A(this._scrollElement).on(j.SCROLL, function(t) {
                                return i._process(t);
                            }),
                            this.refresh(),
                            this._process();
                    }
                    var t = i.prototype;
                    return (
                        (t.refresh = function() {
                            var e = this,
                                t =
                                this._scrollElement === this._scrollElement.window ?
                                "offset" :
                                K,
                                o = "auto" === this._config.method ? t : this._config.method,
                                s = o === K ? this._getScrollTop() : 0;
                            (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            A.makeArray(A(this._selector))
                                .map(function(t) {
                                    var e,
                                        i = Me.getSelectorFromElement(t);
                                    if ((i && (e = A(i)[0]), e)) {
                                        var n = e.getBoundingClientRect();
                                        if (n.width || n.height) return [A(e)[o]().top + s, i];
                                    }
                                    return null;
                                })
                                .filter(function(t) {
                                    return t;
                                })
                                .sort(function(t, e) {
                                    return t[0] - e[0];
                                })
                                .forEach(function(t) {
                                    e._offsets.push(t[0]), e._targets.push(t[1]);
                                });
                        }),
                        (t.dispose = function() {
                            A.removeData(this._element, D),
                                A(this._scrollElement).off($),
                                (this._element = null),
                                (this._scrollElement = null),
                                (this._config = null),
                                (this._selector = null),
                                (this._offsets = null),
                                (this._targets = null),
                                (this._activeTarget = null),
                                (this._scrollHeight = null);
                        }),
                        (t._getConfig = function(t) {
                            if ("string" != typeof(t = h({}, F, t)).target) {
                                var e = A(t.target).attr("id");
                                e || ((e = Me.getUID(O)), A(t.target).attr("id", e)),
                                    (t.target = "#" + e);
                            }
                            return Me.typeCheckConfig(O, t, H), t;
                        }),
                        (t._getScrollTop = function() {
                            return this._scrollElement === window ?
                                this._scrollElement.pageYOffset :
                                this._scrollElement.scrollTop;
                        }),
                        (t._getScrollHeight = function() {
                            return (
                                this._scrollElement.scrollHeight ||
                                Math.max(
                                    document.body.scrollHeight,
                                    document.documentElement.scrollHeight
                                )
                            );
                        }),
                        (t._getOffsetHeight = function() {
                            return this._scrollElement === window ?
                                window.innerHeight :
                                this._scrollElement.getBoundingClientRect().height;
                        }),
                        (t._process = function() {
                            var t = this._getScrollTop() + this._config.offset,
                                e = this._getScrollHeight(),
                                i = this._config.offset + e - this._getOffsetHeight();
                            if ((this._scrollHeight !== e && this.refresh(), i <= t)) {
                                var n = this._targets[this._targets.length - 1];
                                this._activeTarget !== n && this._activate(n);
                            } else {
                                if (
                                    this._activeTarget &&
                                    t < this._offsets[0] &&
                                    0 < this._offsets[0]
                                )
                                    return (this._activeTarget = null), void this._clear();
                                for (var o = this._offsets.length; o--;)
                                    this._activeTarget !== this._targets[o] &&
                                    t >= this._offsets[o] &&
                                    (void 0 === this._offsets[o + 1] ||
                                        t < this._offsets[o + 1]) &&
                                    this._activate(this._targets[o]);
                            }
                        }),
                        (t._activate = function(e) {
                            (this._activeTarget = e), this._clear();
                            var t = this._selector.split(",");
                            t = t.map(function(t) {
                                return (
                                    t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                                );
                            });
                            var i = A(t.join(","));
                            i.hasClass("dropdown-item") ?
                                (i.closest(X).find(Z).addClass(M), i.addClass(M)) :
                                (i.addClass(M),
                                    i
                                    .parents(N)
                                    .prev(Q + ", " + q)
                                    .addClass(M),
                                    i.parents(N).prev(B).children(Q).addClass(M)),
                                A(this._scrollElement).trigger(j.ACTIVATE, {
                                    relatedTarget: e,
                                });
                        }),
                        (t._clear = function() {
                            A(this._selector).filter(Y).removeClass(M);
                        }),
                        (i._jQueryInterface = function(e) {
                            return this.each(function() {
                                var t = A(this).data(D);
                                if (
                                    (t ||
                                        ((t = new i(this, "object" == typeof e && e)),
                                            A(this).data(D, t)),
                                        "string" == typeof e)
                                ) {
                                    if (void 0 === t[e])
                                        throw new TypeError('No method named "' + e + '"');
                                    t[e]();
                                }
                            });
                        }),
                        r(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.0.0";
                                },
                            },
                            {
                                key: "Default",
                                get: function() {
                                    return F;
                                },
                            },
                        ]),
                        i
                    );
                })()),
                A(window).on(j.LOAD_DATA_API, function() {
                    for (var t = A.makeArray(A(R)), e = t.length; e--;) {
                        var i = A(t[e]);
                        V._jQueryInterface.call(i, i.data());
                    }
                }),
                (A.fn[O] = V._jQueryInterface),
                (A.fn[O].Constructor = V),
                (A.fn[O].noConflict = function() {
                    return (A.fn[O] = P), V._jQueryInterface;
                }),
                V),
            Ke =
            ((S = "." + (k = "bs.tab")),
                (x = (T = e).fn.tab),
                (z = {
                    HIDE: "hide" + S,
                    HIDDEN: "hidden" + S,
                    SHOW: "show" + S,
                    SHOWN: "shown" + S,
                    CLICK_DATA_API: "click.bs.tab.data-api",
                }),
                (E = "active"),
                (I = ".active"),
                (W = "> li > .active"),
                (L = (function() {
                    function n(t) {
                        this._element = t;
                    }
                    var t = n.prototype;
                    return (
                        (t.show = function() {
                            var i = this;
                            if (!(
                                    (this._element.parentNode &&
                                        this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                                        T(this._element).hasClass(E)) ||
                                    T(this._element).hasClass("disabled")
                                )) {
                                var t,
                                    n,
                                    e = T(this._element).closest(".nav, .list-group")[0],
                                    o = Me.getSelectorFromElement(this._element);
                                if (e) {
                                    var s = "UL" === e.nodeName ? W : I;
                                    n = (n = T.makeArray(T(e).find(s)))[n.length - 1];
                                }
                                var r = T.Event(z.HIDE, { relatedTarget: this._element }),
                                    a = T.Event(z.SHOW, { relatedTarget: n });
                                if (
                                    (n && T(n).trigger(r),
                                        T(this._element).trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented())
                                ) {
                                    o && (t = T(o)[0]), this._activate(this._element, e);
                                    var l = function() {
                                        var t = T.Event(z.HIDDEN, { relatedTarget: i._element }),
                                            e = T.Event(z.SHOWN, { relatedTarget: n });
                                        T(n).trigger(t), T(i._element).trigger(e);
                                    };
                                    t ? this._activate(t, t.parentNode, l) : l();
                                }
                            }
                        }),
                        (t.dispose = function() {
                            T.removeData(this._element, k), (this._element = null);
                        }),
                        (t._activate = function(t, e, i) {
                            var n = this,
                                o = ("UL" === e.nodeName ? T(e).find(W) : T(e).children(I))[0],
                                s =
                                i && Me.supportsTransitionEnd() && o && T(o).hasClass("fade"),
                                r = function() {
                                    return n._transitionComplete(t, o, i);
                                };
                            o && s ?
                                T(o).one(Me.TRANSITION_END, r).emulateTransitionEnd(150) :
                                r();
                        }),
                        (t._transitionComplete = function(t, e, i) {
                            if (e) {
                                T(e).removeClass("show " + E);
                                var n = T(e.parentNode).find("> .dropdown-menu .active")[0];
                                n && T(n).removeClass(E),
                                    "tab" === e.getAttribute("role") &&
                                    e.setAttribute("aria-selected", !1);
                            }
                            if (
                                (T(t).addClass(E),
                                    "tab" === t.getAttribute("role") &&
                                    t.setAttribute("aria-selected", !0),
                                    Me.reflow(t),
                                    T(t).addClass("show"),
                                    t.parentNode && T(t.parentNode).hasClass("dropdown-menu"))
                            ) {
                                var o = T(t).closest(".dropdown")[0];
                                o && T(o).find(".dropdown-toggle").addClass(E),
                                    t.setAttribute("aria-expanded", !0);
                            }
                            i && i();
                        }),
                        (n._jQueryInterface = function(i) {
                            return this.each(function() {
                                var t = T(this),
                                    e = t.data(k);
                                if (
                                    (e || ((e = new n(this)), t.data(k, e)), "string" == typeof i)
                                ) {
                                    if (void 0 === e[i])
                                        throw new TypeError('No method named "' + i + '"');
                                    e[i]();
                                }
                            });
                        }),
                        r(n, null, [{
                            key: "VERSION",
                            get: function() {
                                return "4.0.0";
                            },
                        }, ]),
                        n
                    );
                })()),
                T(document).on(
                    z.CLICK_DATA_API,
                    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    function(t) {
                        t.preventDefault(), L._jQueryInterface.call(T(this), "show");
                    }
                ),
                (T.fn.tab = L._jQueryInterface),
                (T.fn.tab.Constructor = L),
                (T.fn.tab.noConflict = function() {
                    return (T.fn.tab = x), L._jQueryInterface;
                }),
                L);
        !(function(t) {
            if (void 0 === t)
                throw new TypeError(
                    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                );
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (
                (e[0] < 2 && e[1] < 9) ||
                (1 === e[0] && 9 === e[1] && e[2] < 1) ||
                4 <= e[0]
            )
                throw new Error(
                    "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                );
        })(e),
        (t.Util = Me),
        (t.Alert = Re),
        (t.Button = Ye),
        (t.Carousel = Ne),
        (t.Collapse = Qe),
        (t.Dropdown = Be),
        (t.Modal = qe),
        (t.Popover = Ue),
        (t.Scrollspy = Ze),
        (t.Tab = Ke),
        (t.Tooltip = Xe),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    "object" == typeof exports && "undefined" != typeof module ?
    Of(exports, require("jquery"), require("popper.js")) :
    "function" == typeof define && define.amd ?
    define(["exports", "jquery", "popper.js"], Of) :
    Of((Nf.bootstrap = {}), Nf.jQuery, Nf.Popper),
    ($q = !1),
    (window.JQClass = function() {}),
    (JQClass.classes = {}),
    (JQClass.extend = function t(e) {
        function i() {
            !$q && this._init && this._init.apply(this, arguments);
        }
        var o = this.prototype;
        $q = !0;
        var n = new this();
        for (var s in (($q = !1), e))
            n[s] =
            "function" == typeof e[s] && "function" == typeof o[s] ?
            (function(i, n) {
                return function() {
                    var t = this._super;
                    this._super = function(t) {
                        return o[i].apply(this, t);
                    };
                    var e = n.apply(this, arguments);
                    return (this._super = t), e;
                };
            })(s, e[s]) :
            e[s];
        return (((i.prototype = n).constructor = i).extend = t), i;
    }),
    (function($) {
        function camelCase(t) {
            return t.replace(/-([a-z])/g, function(t, e) {
                return e.toUpperCase();
            });
        }
        (JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            _getters: [],
            _getMarker: function() {
                return "is-" + this.name;
            },
            _init: function() {
                $.extend(
                    this.defaultOptions,
                    (this.regionalOptions && this.regionalOptions[""]) || {}
                );
                var i = camelCase(this.name);
                ($[i] = this),
                ($.fn[i] = function(t) {
                    var e = Array.prototype.slice.call(arguments, 1);
                    return $[i]._isNotChained(t, e) ?
                        $[i][t].apply($[i], [this[0]].concat(e)) :
                        this.each(function() {
                            if ("string" == typeof t) {
                                if ("_" === t[0] || !$[i][t]) throw "Unknown method: " + t;
                                $[i][t].apply($[i], [this].concat(e));
                            } else $[i]._attach(this, t);
                        });
                });
            },
            setDefaults: function(t) {
                $.extend(this.defaultOptions, t || {});
            },
            _isNotChained: function(t, e) {
                return (
                    ("option" === t &&
                        (0 === e.length || (1 === e.length && "string" == typeof e[0]))) ||
                    -1 < $.inArray(t, this._getters)
                );
            },
            _attach: function(t, e) {
                if (!(t = $(t)).hasClass(this._getMarker())) {
                    t.addClass(this._getMarker()),
                        (e = $.extend({},
                            this.defaultOptions,
                            this._getMetadata(t),
                            e || {}
                        ));
                    var i = $.extend({ name: this.name, elem: t, options: e },
                        this._instSettings(t, e)
                    );
                    t.data(this.name, i), this._postAttach(t, i), this.option(t, e);
                }
            },
            _instSettings: function() {
                return {};
            },
            _postAttach: function() {},
            _getMetadata: function(elem) {
                try {
                    var data = elem.data(this.name.toLowerCase()) || "";
                    for (var name in ((data = data.replace(/'/g, '"')),
                            (data = data.replace(/([a-zA-Z0-9]+):/g, function(t, e, i) {
                                var n = data.substring(0, i).match(/"/g);
                                return n && n.length % 2 != 0 ? e + ":" : '"' + e + '":';
                            })),
                            (data = $.parseJSON("{" + data + "}")),
                            data)) {
                        var value = data[name];
                        "string" == typeof value &&
                            value.match(/^new Date\((.*)\)$/) &&
                            (data[name] = eval(value));
                    }
                    return data;
                } catch (t) {
                    return {};
                }
            },
            _getInst: function(t) {
                return $(t).data(this.name) || {};
            },
            option: function(t, e, i) {
                var n = (t = $(t)).data(this.name);
                if (!e || ("string" == typeof e && null == i))
                    return (o = (n || {}).options) && e ? o[e] : o;
                if (t.hasClass(this._getMarker())) {
                    var o = e || {};
                    "string" == typeof e && ((o = {})[e] = i),
                        this._optionsChanged(t, n, o),
                        $.extend(n.options, o);
                }
            },
            _optionsChanged: function() {},
            destroy: function(t) {
                (t = $(t)).hasClass(this._getMarker()) &&
                    (this._preDestroy(t, this._getInst(t)),
                        t.removeData(this.name).removeClass(this._getMarker()));
            },
            _preDestroy: function() {},
        })),
        ($.JQPlugin = {
            createPlugin: function(t, e) {
                "object" == typeof t && ((e = t), (t = "JQPlugin")),
                    (t = camelCase(t));
                var i = camelCase(e.name);
                (JQClass.classes[i] = JQClass.classes[t].extend(e)),
                new JQClass.classes[i]();
            },
        });
    })(jQuery),
    (function(t) {
        "use strict";
        "function" == typeof define && define.amd ?
            define(["jquery"], t) :
            t(jQuery);
    })(function(o) {
        "use strict";
        var s = [],
            e = [],
            n = { precision: 100, elapse: !1, defer: !1 };
        e.push(/^[0-9]*$/.source),
            e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
            e.push(
                /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
            ),
            (e = new RegExp(e.join("|")));
        var g = {
                Y: "years",
                m: "months",
                n: "daysToMonth",
                d: "daysToWeek",
                w: "weeks",
                W: "weeksToMonth",
                H: "hours",
                M: "minutes",
                S: "seconds",
                D: "totalDays",
                I: "totalHours",
                N: "totalMinutes",
                T: "totalSeconds",
            },
            r = function(t, e, i) {
                (this.el = t),
                (this.$el = o(t)),
                (this.interval = null),
                (this.offset = {}),
                (this.options = o.extend({}, n)),
                (this.instanceNumber = s.length),
                s.push(this),
                    this.$el.data("countdown-instance", this.instanceNumber),
                    i &&
                    ("function" == typeof i ?
                        (this.$el.on("update.countdown", i),
                            this.$el.on("stoped.countdown", i),
                            this.$el.on("finish.countdown", i)) :
                        (this.options = o.extend({}, n, i))),
                    this.setFinalDate(e), !1 === this.options.defer && this.start();
            };
        o.extend(r.prototype, {
                start: function() {
                    null !== this.interval && clearInterval(this.interval);
                    var t = this;
                    this.update(),
                        (this.interval = setInterval(function() {
                            t.update.call(t);
                        }, this.options.precision));
                },
                stop: function() {
                    clearInterval(this.interval),
                        (this.interval = null),
                        this.dispatchEvent("stoped");
                },
                toggle: function() {
                    this.interval ? this.stop() : this.start();
                },
                pause: function() {
                    this.stop();
                },
                resume: function() {
                    this.start();
                },
                remove: function() {
                    this.stop.call(this),
                        (s[this.instanceNumber] = null),
                        delete this.$el.data().countdownInstance;
                },
                setFinalDate: function(t) {
                    this.finalDate = (function(t) {
                        if (t instanceof Date) return t;
                        if (String(t).match(e))
                            return (
                                String(t).match(/^[0-9]*$/) && (t = Number(t)),
                                String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")),
                                new Date(t)
                            );
                        throw new Error("Couldn't cast `" + t + "` to a date object.");
                    })(t);
                },
                update: function() {
                    if (0 !== this.$el.closest("html").length) {
                        var t,
                            e = void 0 !== o._data(this.el, "events"),
                            i = new Date();
                        (t = this.finalDate.getTime() - i.getTime()),
                        (t = Math.ceil(t / 1e3)),
                        (t = !this.options.elapse && t < 0 ? 0 : Math.abs(t)),
                        this.totalSecsLeft !== t &&
                            e &&
                            ((this.totalSecsLeft = t),
                                (this.elapsed = i >= this.finalDate),
                                (this.offset = {
                                    seconds: this.totalSecsLeft % 60,
                                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                                    daysToMonth: Math.floor(
                                        (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
                                    ),
                                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                                    weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                                    years: Math.abs(this.finalDate.getFullYear() - i.getFullYear()),
                                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                                    totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                                    totalMinutes: Math.floor(this.totalSecsLeft / 60),
                                    totalSeconds: this.totalSecsLeft,
                                }),
                                this.options.elapse || 0 !== this.totalSecsLeft ?
                                this.dispatchEvent("update") :
                                (this.stop(), this.dispatchEvent("finish")));
                    } else this.remove();
                },
                dispatchEvent: function(t) {
                    var m,
                        e = o.Event(t + ".countdown");
                    (e.finalDate = this.finalDate),
                    (e.elapsed = this.elapsed),
                    (e.offset = o.extend({}, this.offset)),
                    (e.strftime =
                        ((m = this.offset),
                            function(t) {
                                var e,
                                    i,
                                    n,
                                    o,
                                    s,
                                    r,
                                    a = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                                if (a)
                                    for (var l = 0, d = a.length; l < d; ++l) {
                                        var c = a[l].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                                            h =
                                            ((s = c[0]),
                                                (r = s
                                                    .toString()
                                                    .replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")),
                                                new RegExp(r)),
                                            u = c[1] || "",
                                            p = c[3] || "",
                                            f = null;
                                        (c = c[2]),
                                        g.hasOwnProperty(c) && ((f = g[c]), (f = Number(m[f]))),
                                            null !== f &&
                                            ("!" === u &&
                                                ((i = f),
                                                    (o = n = void 0),
                                                    (n = "s"),
                                                    (o = ""),
                                                    (e = p) &&
                                                    ((e = e.replace(/(:|;|\s)/gi, "").split(/\,/)),
                                                        (n = 1 === e.length ? e[0] : ((o = e[0]), e[1]))),
                                                    (f = 1 < Math.abs(i) ? n : o)),
                                                "" === u && f < 10 && (f = "0" + f.toString()),
                                                (t = t.replace(h, f.toString())));
                                    }
                                return t.replace(/%%/, "%");
                            })),
                    this.$el.trigger(e);
                },
            }),
            (o.fn.countdown = function() {
                var n = Array.prototype.slice.call(arguments, 0);
                return this.each(function() {
                    var t = o(this).data("countdown-instance");
                    if (void 0 !== t) {
                        var e = s[t],
                            i = n[0];
                        r.prototype.hasOwnProperty(i) ?
                            e[i].apply(e, n.slice(1)) :
                            null === String(i).match(/^[$A-Z_][0-9A-Z_$]*$/i) ?
                            (e.setFinalDate.call(e, i), e.start()) :
                            o.error(
                                "Method %s does not exist on jQuery.countdown".replace(
                                    /\%s/gi,
                                    i
                                )
                            );
                    } else new r(this, n[0], n[1]);
                });
            });
    });
var delay_tab = 300,
    delay_show_mm = 300,
    delay_hide_mm = 300,
    mt,
    nt,
    ot;

function mm_destroy(t, e) {
    e.remember_state ||
        (t
            .find(".mmpanel")
            .toggleClass("mmsubopened mmcurrent mmopened", !1)
            .addClass("mmhidden"),
            t
            .find("#mm0")
            .addClass("mmopened")
            .addClass("mmcurrent")
            .removeClass("mmhidden")),
        t.toggleClass("mmhide mmitemopen", !1).hide(),
        $("body").removeClass("mm-open");
}

function get_mm_parent() {
    return '<div class="mmpanels"></div>';
}

function get_mm_block() {
    return '<div class="mmpanel mmhidden">';
}

function getButtonBack(t, e) {
    return (
        '<li><a href="#" data-target="#" class="mm-prev-level">' +
        (t = null == t ? e : t) +
        "</a></li>"
    );
}

function getButtonClose(t, e) {
    return (
        '<li class="mm-close-parent"><a href="#close" data-target="#close" class="mm-close">' +
        (t = null == t ? e : t) +
        "</a></li>"
    );
}

function getFullscreenBg() {
    return '<div class="mm-fullscreen-bg"></div>';
}

function getExternalContainer() {
    return '<li id="entrypoint-objects"></li>';
}
$("body").append(getFullscreenBg()),
    ($.fn.initMM = function() {
        var n = {
            $mobilemenu: $(".panel-menu"),
            external_con: "externaf",
            mm_close_button: "Close",
            mm_back_button: "Back",
            mm_breakpoint: 768,
            mm_enable_breakpoint: !1,
            mm_mobile_button: !1,
            remember_state: !1,
            second_button: !1,
            init: function(t, e) {
                var i = this;
                if (!i.$mobilemenu.length)
                    return (
                        console.log(
                            'You not have <nav class="panel-menu mobile-main-menu">menu</nav>. See Documentation'
                        ), !1
                    );
                null != e && i.parse_arguments(e),
                    i.$mobilemenu.parse_mm(n),
                    i.$mobilemenu.init_mm(n),
                    i.mm_enable_breakpoint && i.$mobilemenu.check_resolution_mm(n),
                    t.mm_handler(n);
            },
            parse_arguments: function(t) {
                var i = this;
                Object(t).hasOwnProperty("menu_class") &&
                    (i.$mobilemenu = $("." + t.menu_class)),
                    $.each(t, function(t, e) {
                        switch (t) {
                            case "right":
                                e && i.$mobilemenu.addClass("mm-right");
                                break;
                            case "close_button_name":
                                i.mm_close_button = e;
                                break;
                            case "back_button_name":
                                i.mm_back_button = e;
                                break;
                            case "width":
                                i.$mobilemenu.css("width", e);
                                break;
                            case "breakpoint":
                                i.mm_breakpoint = e;
                                break;
                            case "enable_breakpoint":
                                i.mm_enable_breakpoint = e;
                                break;
                            case "mobile_button":
                                i.mm_mobile_button = e;
                                break;
                            case "remember_state":
                                i.remember_state = e;
                                break;
                            case "second_button":
                                i.second_button = e;
                                break;
                            case "external_container":
                                e && i.$mobilemenu.addClass(i.external_con);
                        }
                    });
            },
            show_button_in_mobile: function(t) {
                var e = this;
                e.mm_mobile_button &&
                    (window.innerWidth > e.mm_breakpoint ? t.hide() : t.show(),
                        $(window).resize(function() {
                            window.innerWidth > e.mm_breakpoint ? t.hide() : t.show();
                        }));
            },
        };
        n.init($(this), arguments[0]), n.show_button_in_mobile($(this));
    }),
    ($.fn.check_resolution_mm = function(t) {
        var e = $(this);
        $(window).resize(function() {
            if (!$("body").hasClass("mm-open") || !e.hasClass("mmitemopen"))
                return !1;
            window.innerWidth > t.mm_breakpoint && e.closemm(t);
        });
    }),
    ($.fn.mm_handler = function(e) {
        $(this).click(function(t) {
                t.preventDefault(), e.$mobilemenu.openmm();
            }),
            0 != e.second_button &&
            $(e.second_button).click(function(t) {
                t.preventDefault(), e.$mobilemenu.openmm();
            });
    }),
    ($.fn.parse_mm = function(e) {
        var t,
            i = $(this).clone(),
            n = $(get_mm_parent()),
            o = !1,
            s = 0,
            r = !1,
            a = !1;
        $(this).empty(),
            i.find("a").each(function() {
                (r = $(this)),
                (t = r.parent().find("ul").first()).length &&
                    (s++,
                        t
                        .prepend("<li></li>")
                        .find("li")
                        .first()
                        .append(r.clone().addClass("mm-original-link")),
                        r
                        .attr("href", "#mm" + s)
                        .attr("data-target", "#mm" + s)
                        .addClass("mm-next-level"));
            }),
            i.find("ul").each(function(t) {
                (a = !1),
                (o = $(get_mm_block())
                    .attr("id", "mm" + t)
                    .append($(this))),
                0 == t ?
                    (o
                        .addClass("mmopened")
                        .addClass("mmcurrent")
                        .removeClass("mmhidden"),
                        (a = getButtonClose(
                            i.find(".mm-closebtn").html(),
                            e.mm_close_button
                        )),
                        e.$mobilemenu.hasClass(e.external_con) &&
                        o.find("ul").first().append(getExternalContainer())) :
                    (a = getButtonBack(
                        i.find(".mm-backbtn").html(),
                        e.mm_back_button
                    )),
                    o.find("ul").first().prepend(a),
                    n.append(o);
            }),
            $(this).append(n);
    }),
    ($.fn.init_mm = function(o) {
        var s = $(this);
        s.find("a").each(function() {
                $(this).click(function(t) {
                    var e = $(this),
                        i = !1,
                        n = "";
                    return e.hasClass("mm-next-level") ?
                        (t.preventDefault(),
                            (n = e.attr("href")),
                            (i = s.find(".mmcurrent"))
                            .addClass("mmsubopened")
                            .removeClass("mmcurrent"),
                            s.find(n).removeClass("mmhidden"),
                            setTimeout(function() {
                                s.find(n).scrollTop(0).addClass("mmcurrent").addClass("mmopened");
                            }, 0),
                            setTimeout(function() {
                                i.addClass("mmhidden");
                            }, delay_tab), !1) :
                        e.hasClass("mm-prev-level") ?
                        (t.preventDefault(),
                            (n = e.attr("href")),
                            (i = s.find(".mmcurrent"))
                            .removeClass("mmcurrent")
                            .removeClass("mmopened"),
                            s
                            .find(".mmsubopened")
                            .last()
                            .removeClass("mmhidden")
                            .scrollTop(0)
                            .removeClass("mmsubopened")
                            .addClass("mmcurrent"),
                            setTimeout(function() {
                                i.addClass("mmhidden");
                            }, delay_tab), !1) :
                        e.hasClass("mm-close") ?
                        (s.closemm(o), !1) :
                        void 0;
                });
            }),
            $(".mm-fullscreen-bg").click(function(t) {
                t.preventDefault(), s.closemm(o);
            });
    }),
    ($.fn.openmm = function() {
        var t = $(this);
        t.show(),
            setTimeout(function() {
                $("body").addClass("mm-open"),
                    t.addClass("mmitemopen"),
                    $(".mm-fullscreen-bg").fadeIn(delay_show_mm);
            }, 0);
    }),
    ($.fn.closemm = function(t) {
        var e = $(this);
        e.addClass("mmhide"),
            $(".mm-fullscreen-bg").fadeOut(delay_hide_mm),
            setTimeout(function() {
                mm_destroy(e, t);
            }, delay_hide_mm);
    }),
    (mt = jQuery),
    (nt = {
        host: "https://www.instagram.com/",
        username: "",
        tag: "",
        container: "",
        display_profile: !0,
        display_biography: !0,
        display_gallery: !0,
        display_igtv: !1,
        get_data: !1,
        callback: null,
        styling: !0,
        items: 8,
        items_per_row: 4,
        margin: 0.5,
        image_size: 640,
    }),
    (ot = { 150: 0, 240: 1, 320: 2, 480: 3, 640: 4 }),
    (mt.instagramFeed = function(t) {
        var c = mt.fn.extend({}, nt, t);
        if ("" == c.username && "" == c.tag)
            return (
                console.error("Instagram Feed: Error, no username or tag found."), !1
            );
        if (
            (void 0 !== c.get_raw_json &&
                (console.warn(
                        "Instagram Feed: get_raw_json is deprecated. See use get_data instead"
                    ),
                    (c.get_data = c.get_raw_json)), !c.get_data && "" == c.container)
        )
            return console.error("Instagram Feed: Error, no container found."), !1;
        if (c.get_data && null == c.callback)
            return (
                console.error(
                    "Instagram Feed: Error, no callback defined to get the raw json"
                ), !1
            );
        var h = "" == c.username;
        return (
            mt
            .get(
                h ? c.host + "explore/tags/" + c.tag : c.host + c.username,
                function(t) {
                    if (
                        ((t = t.split("window._sharedData = ")[1].split("</script>")[0]),
                            (t =
                                (t =
                                    (t = JSON.parse(t.substr(0, t.length - 1))).entry_data
                                    .ProfilePage || t.entry_data.TagPage)[0].graphql.user ||
                                t[0].graphql.hashtag),
                            c.get_data)
                    )
                        c.callback(t);
                    else {
                        var e = "",
                            i = "",
                            n = "",
                            o = "",
                            s = "";
                        c.styling &&
                            ((e = " style='text-align:center;'"),
                                (i =
                                    " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'"),
                                (n = " style='font-size:1.2em;'"),
                                (o = " style='font-size:1em;'"),
                                (s =
                                    " style='margin:" +
                                    c.margin +
                                    "% " +
                                    c.margin +
                                    "%;width:" +
                                    (100 - 2 * c.margin * c.items_per_row) / c.items_per_row +
                                    "%;float:left;'"));
                        var r = "";
                        if (
                            (c.display_profile &&
                                ((r =
                                        r +
                                        "<div class='instagram_profile'" +
                                        e +
                                        ">\t<img class='instagram_profile_image' src='" +
                                        t.profile_pic_url +
                                        "' alt='" +
                                        t.name +
                                        " profile pic'" +
                                        i +
                                        " />"),
                                    (r = h ?
                                        r +
                                        "\t<p class='instagram_tag'" +
                                        n +
                                        "><a href='https://www.instagram.com/explore/tags/" +
                                        c.tag +
                                        "' rel='noopener' target='_blank'>#" +
                                        c.tag +
                                        "</a></p>" :
                                        r +
                                        "\t<p class='instagram_username'" +
                                        n +
                                        ">@" +
                                        t.full_name +
                                        " (<a href='https://www.instagram.com/" +
                                        c.username +
                                        "' rel='noopener' target='_blank'>@" +
                                        c.username +
                                        "</a>)</p>"), !h &&
                                    c.display_biography &&
                                    (r +=
                                        "\t<p class='instagram_biography'" +
                                        o +
                                        ">" +
                                        t.biography +
                                        "</p>"),
                                    (r += "</div>")),
                                (n = void 0 !== ot[c.image_size] ? ot[c.image_size] : ot[640]),
                                c.display_gallery)
                        )
                            if (void 0 !== t.is_private && !0 === t.is_private)
                                r +=
                                "<p class='instagram_private'><strong>This profile is private</strong></p>";
                            else {
                                for (
                                    i =
                                    (o = (
                                        t.edge_owner_to_timeline_media ||
                                        t.edge_hashtag_to_media
                                    ).edges).length > c.items ?
                                    c.items :
                                    o.length,
                                    r += "<div class='instagram_gallery'>",
                                    e = 0; e < i; e++
                                ) {
                                    var a =
                                        "https://www.instagram.com/p/" + o[e].node.shortcode;
                                    switch (o[e].node.__typename) {
                                        case "GraphSidecar":
                                            var l = "sidecar",
                                                d = o[e].node.thumbnail_resources[n].src;
                                            break;
                                        case "GraphVideo":
                                            (l = "video"), (d = o[e].node.thumbnail_src);
                                            break;
                                        default:
                                            (l = "image"),
                                            (d = o[e].node.thumbnail_resources[n].src);
                                    }
                                    (r +=
                                        "\t<a href='" +
                                        a +
                                        "' class='instagram-" +
                                        l +
                                        "' rel='noopener' target='_blank'>"),
                                    (r +=
                                        "   \t<img src='" +
                                        d +
                                        "' alt='" +
                                        t.name +
                                        " instagram image " +
                                        e +
                                        "'" +
                                        s +
                                        " />"),
                                    (r += "\t</a>");
                                }
                                r += "</div>";
                            }
                        if (
                            c.display_igtv &&
                            void 0 !== t.edge_felix_video_timeline &&
                            ((i =
                                    (t = t.edge_felix_video_timeline.edges).length > c.items ?
                                    c.items :
                                    t.length),
                                0 < t.length)
                        ) {
                            for (r += "<div class='instagram_igtv'>", e = 0; e < i; e++)
                                (r +=
                                    "\t<a href='https://www.instagram.com/p/" +
                                    t[e].node.shortcode +
                                    "' rel='noopener' target='_blank'>"),
                                (r +=
                                    "\t\t<img src='" +
                                    t[e].node.thumbnail_src +
                                    "' alt='" +
                                    c.username +
                                    " instagram image " +
                                    e +
                                    "'" +
                                    s +
                                    " />"),
                                (r += "\t</a>");
                            r += "</div>";
                        }
                        mt(c.container).html(r);
                    }
                }
            )
            .fail(function(t) {
                console.error(
                    "Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ",
                    t.status
                );
            }), !0
        );
    });
var _extends =
    Object.assign ||
    function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var n in i)
                Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
        }
        return t;
    },
    _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

    function(t) {
        return typeof t;
    } :
    function(t) {
        return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype ?
            "symbol" :
            typeof t;
    },
    Jt,
    Kt,
    lN,
    mN,
    dN,
    eN,
    WM,
    XM,
    LM,
    MM,
    IL,
    JL,
    oL,
    pL,
    dL,
    eL,
    JG,
    KG,
    GF,
    HF,
    lE,
    mE,
    ED,
    FD,
    FP,
    JP,
    FQ,
    hR,
    b1,
    QY,
    n1,
    o1,
    G1,
    H1,
    Z1,
    $1,
    _1,
    c2,
    e2,
    f2,
    g2,
    h2,
    O2,
    P2,
    U2,
    W2,
    Y2,
    Z2,
    $2,
    _2,
    a3,
    D3,
    E3,
    V3,
    W3,
    p6,
    q6,
    r6,
    s6,
    d7,
    K7,
    L7,
    R7,
    U7,
    V7,
    S7,
    h8,
    i8,
    s8,
    v8,
    y8,
    z8,
    A8,
    w8,
    H9,
    Taa;

function debouncer(i, n) {
    var o;
    n = n || 500;
    return function() {
        var t = this,
            e = arguments;
        clearTimeout(o),
            (o = setTimeout(function() {
                i.apply(t, Array.prototype.slice.call(e));
            }, n));
    };
}
(Jt = this),
(Kt = function() {
    "use strict";
    var a = function(t, e) {
            return t.getAttribute("data-" + e);
        },
        o = function(t) {
            return t.filter(function(t) {
                return !a(t, "was-processed");
            });
        },
        s = function(t, e) {
            var i,
                n = new t(e);
            try {
                i = new CustomEvent("LazyLoad::Initialized", {
                    detail: { instance: n },
                });
            } catch (t) {
                (i = document.createEvent("CustomEvent")).initCustomEvent(
                    "LazyLoad::Initialized", !1, !1, { instance: n }
                );
            }
            window.dispatchEvent(i);
        },
        l = function(t, e) {
            var i = e.data_src,
                n = e.data_srcset,
                o = t.tagName,
                s = a(t, i);
            if ("IMG" === o) {
                !(function(t, e) {
                    var i = e.data_srcset,
                        n = t.parentNode;
                    if (n && "PICTURE" === n.tagName)
                        for (var o, s = 0;
                            (o = n.children[s]); s += 1)
                            if ("SOURCE" === o.tagName) {
                                var r = a(o, i);
                                r && o.setAttribute("srcset", r);
                            }
                })(t, e);
                var r = a(t, n);
                return (
                    r && t.setAttribute("srcset", r),
                    void(s && t.setAttribute("src", s))
                );
            }
            "IFRAME" !== o
                ?
                s && (t.style.backgroundImage = 'url("' + s + '")') :
                s && t.setAttribute("src", s);
        },
        t = "undefined" != typeof window,
        i = t && "IntersectionObserver" in window,
        r = t && "classList" in document.createElement("p"),
        d = function(t, e) {
            r ? t.classList.add(e) : (t.className += (t.className ? " " : "") + e);
        },
        c = function(t, e) {
            t && t(e);
        },
        h = function(t, e, i) {
            t.removeEventListener("load", e), t.removeEventListener("error", i);
        },
        u = function(t, e, i) {
            var n,
                o,
                s = t.target;
            (n = s),
            (o = i.class_loading),
            r
                ?
                n.classList.remove(o) :
                (n.className = n.className
                    .replace(new RegExp("(^|\\s+)" + o + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, "")),
                d(s, e ? i.class_loaded : i.class_error),
                c(e ? i.callback_load : i.callback_error, s);
        },
        p = function(t, e) {
            var i, n, o, s, r, a;
            c(e.callback_enter, t), -1 < ["IMG", "IFRAME"].indexOf(t.tagName) &&
                ((s = e),
                    (r = function t(e) {
                        u(e, !0, s), h(o, t, a);
                    }),
                    (a = function t(e) {
                        u(e, !1, s), h(o, r, t);
                    }),
                    (o = t).addEventListener("load", r),
                    o.addEventListener("error", a),
                    d(t, e.class_loading)),
                l(t, e),
                (i = "was-processed"),
                (n = !0),
                t.setAttribute("data-" + i, n),
                c(e.callback_set, t);
        },
        e = function(t, e) {
            var i;
            (this._settings =
                ((i = {
                        elements_selector: "img",
                        container: document,
                        threshold: 300,
                        data_src: "src",
                        data_srcset: "srcset",
                        class_loading: "loading",
                        class_loaded: "loaded",
                        class_error: "error",
                        callback_load: null,
                        callback_error: null,
                        callback_set: null,
                        callback_enter: null,
                    }),
                    _extends({}, i, t))),
            this._setObserver(),
                this.update(e);
        };
    e.prototype = {
        _setObserver: function() {
            var n = this;
            if (i) {
                var t = this._settings,
                    e = {
                        root: t.container === document ? null : t.container,
                        rootMargin: t.threshold + "px",
                    };
                this._observer = new IntersectionObserver(function(t) {
                    t.forEach(function(t) {
                            if ((i = t).isIntersecting || 0 < i.intersectionRatio) {
                                var e = t.target;
                                p(e, n._settings), n._observer.unobserve(e);
                            }
                            var i;
                        }),
                        (n._elements = o(n._elements));
                }, e);
            }
        },
        update: function(t) {
            var e = this,
                i = this._settings,
                n = t || i.container.querySelectorAll(i.elements_selector);
            (this._elements = o(Array.prototype.slice.call(n))),
            this._observer ?
                this._elements.forEach(function(t) {
                    e._observer.observe(t);
                }) :
                (this._elements.forEach(function(t) {
                        p(t, i);
                    }),
                    (this._elements = o(this._elements)));
        },
        destroy: function() {
            var e = this;
            this._observer &&
                (o(this._elements).forEach(function(t) {
                        e._observer.unobserve(t);
                    }),
                    (this._observer = null)),
                (this._elements = null),
                (this._settings = null);
        },
    };
    var n = window.lazyLoadOptions;
    return (
        t &&
        n &&
        (function(t, e) {
            if (e.length)
                for (var i, n = 0;
                    (i = e[n]); n += 1) s(t, i);
            else s(t, e);
        })(e, n),
        e
    );
}),
"object" ===
("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
"undefined" != typeof module
    ?
    (module.exports = Kt()) :
    "function" == typeof define && define.amd ?
    define(Kt) :
    (Jt.LazyLoad = Kt()),
    (function s(r, a, l) {
        function d(i, t) {
            if (!a[i]) {
                if (!r[i]) {
                    var e = "function" == typeof require && require;
                    if (!t && e) return e(i, !0);
                    if (c) return c(i, !0);
                    var n = new Error("Cannot find module '" + i + "'");
                    throw ((n.code = "MODULE_NOT_FOUND"), n);
                }
                var o = (a[i] = { exports: {} });
                r[i][0].call(
                    o.exports,
                    function(t) {
                        var e = r[i][1][t];
                        return d(e || t);
                    },
                    o,
                    o.exports,
                    s,
                    r,
                    a,
                    l
                );
            }
            return a[i].exports;
        }
        for (
            var c = "function" == typeof require && require, t = 0; t < l.length; t++
        )
            d(l[t]);
        return d;
    })({
        1: [
            function(t, e, i) {
                "use strict";
                var o = t("../main"),
                    s = t("../plugin/instances");

                function n(n) {
                    n.fn.perfectScrollbar = function(i) {
                        return this.each(function() {
                            if ("object" == typeof i || void 0 === i) {
                                var t = i;
                                s.get(this) || o.initialize(this, t);
                            } else {
                                var e = i;
                                "update" === e
                                    ?
                                    o.update(this) :
                                    "destroy" === e && o.destroy(this);
                            }
                            return n(this);
                        });
                    };
                }
                if ("function" == typeof define && define.amd) define(["jquery"], n);
                else {
                    var r = window.jQuery ? window.jQuery : window.$;
                    void 0 !== r && n(r);
                }
                e.exports = n;
            },
            { "../main": 7, "../plugin/instances": 18 },
        ],
        2: [
            function(t, e, i) {
                "use strict";
                (i.add = function(t, e) {
                    var i, n, o;
                    t.classList ?
                        t.classList.add(e) :
                        ((n = e),
                            (o = (i = t).className.split(" ")).indexOf(n) < 0 && o.push(n),
                            (i.className = o.join(" ")));
                }),
                (i.remove = function(t, e) {
                    var i, n, o, s;
                    t.classList ?
                        t.classList.remove(e) :
                        ((n = e),
                            (o = (i = t).className.split(" ")),
                            0 <= (s = o.indexOf(n)) && o.splice(s, 1),
                            (i.className = o.join(" ")));
                }),
                (i.list = function(t) {
                    return t.classList ?
                        Array.prototype.slice.apply(t.classList) :
                        t.className.split(" ");
                });
            },
            {},
        ],
        3: [
            function(t, e, i) {
                "use strict";
                var n = {};
                (n.e = function(t, e) {
                    var i = document.createElement(t);
                    return (i.className = e), i;
                }),
                (n.appendTo = function(t, e) {
                    return e.appendChild(t), t;
                }),
                (n.css = function(t, e, i) {
                    return "object" == typeof e ?
                        (function(t, e) {
                            for (var i in e) {
                                var n = e[i];
                                "number" == typeof n && (n = n.toString() + "px"),
                                    (t.style[i] = n);
                            }
                            return t;
                        })(t, e) :
                        void 0 === i ?
                        ((r = t), (a = e), window.getComputedStyle(r)[a]) :
                        ((n = t),
                            (o = e),
                            "number" == typeof(s = i) && (s = s.toString() + "px"),
                            (n.style[o] = s),
                            n);
                    var n, o, s, r, a;
                }),
                (n.matches = function(t, e) {
                    return void 0 !== t.matches ?
                        t.matches(e) :
                        void 0 !== t.matchesSelector ?
                        t.matchesSelector(e) :
                        void 0 !== t.webkitMatchesSelector ?
                        t.webkitMatchesSelector(e) :
                        void 0 !== t.mozMatchesSelector ?
                        t.mozMatchesSelector(e) :
                        void 0 !== t.msMatchesSelector ?
                        t.msMatchesSelector(e) :
                        void 0;
                }),
                (n.remove = function(t) {
                    void 0 !== t.remove ?
                        t.remove() :
                        t.parentNode && t.parentNode.removeChild(t);
                }),
                (n.queryChildren = function(t, e) {
                    return Array.prototype.filter.call(t.childNodes, function(t) {
                        return n.matches(t, e);
                    });
                }),
                (e.exports = n);
            },
            {},
        ],
        4: [
            function(t, e, i) {
                "use strict";
                var n = function(t) {
                    (this.element = t), (this.events = {});
                };
                (n.prototype.bind = function(t, e) {
                    void 0 === this.events[t] && (this.events[t] = []),
                        this.events[t].push(e),
                        this.element.addEventListener(t, e, !1);
                }),
                (n.prototype.unbind = function(e, i) {
                    var n = void 0 !== i;
                    this.events[e] = this.events[e].filter(function(t) {
                        return (!(!n || t === i) ||
                            (this.element.removeEventListener(e, t, !1), !1)
                        );
                    }, this);
                }),
                (n.prototype.unbindAll = function() {
                    for (var t in this.events) this.unbind(t);
                });
                var o = function() {
                    this.eventElements = [];
                };
                (o.prototype.eventElement = function(e) {
                    var t = this.eventElements.filter(function(t) {
                        return t.element === e;
                    })[0];
                    return (
                        void 0 === t && ((t = new n(e)), this.eventElements.push(t)), t
                    );
                }),
                (o.prototype.bind = function(t, e, i) {
                    this.eventElement(t).bind(e, i);
                }),
                (o.prototype.unbind = function(t, e, i) {
                    this.eventElement(t).unbind(e, i);
                }),
                (o.prototype.unbindAll = function() {
                    for (var t = 0; t < this.eventElements.length; t++)
                        this.eventElements[t].unbindAll();
                }),
                (o.prototype.once = function(t, e, i) {
                    var n = this.eventElement(t),
                        o = function(t) {
                            n.unbind(e, o), i(t);
                        };
                    n.bind(e, o);
                }),
                (e.exports = o);
            },
            {},
        ],
        5: [
            function(t, e, i) {
                "use strict";
                e.exports = (function() {
                    function t() {
                        return Math.floor(65536 * (1 + Math.random()))
                            .toString(16)
                            .substring(1);
                    }
                    return function() {
                        return (
                            t() +
                            t() +
                            "-" +
                            t() +
                            "-" +
                            t() +
                            "-" +
                            t() +
                            "-" +
                            t() +
                            t() +
                            t()
                        );
                    };
                })();
            },
            {},
        ],
        6: [
            function(t, e, i) {
                "use strict";
                var o = t("./class"),
                    n = t("./dom");
                (i.toInt = function(t) {
                    return parseInt(t, 10) || 0;
                }),
                (i.clone = function(t) {
                    if (null === t) return null;
                    if ("object" != typeof t) return t;
                    var e = {};
                    for (var i in t) e[i] = this.clone(t[i]);
                    return e;
                }),
                (i.extend = function(t, e) {
                    var i = this.clone(t);
                    for (var n in e) i[n] = this.clone(e[n]);
                    return i;
                }),
                (i.isEditable = function(t) {
                    return (
                        n.matches(t, "input,[contenteditable]") ||
                        n.matches(t, "select,[contenteditable]") ||
                        n.matches(t, "textarea,[contenteditable]") ||
                        n.matches(t, "button,[contenteditable]")
                    );
                }),
                (i.removePsClasses = function(t) {
                    for (var e = o.list(t), i = 0; i < e.length; i++) {
                        var n = e[i];
                        0 === n.indexOf("ps-") && o.remove(t, n);
                    }
                }),
                (i.outerWidth = function(t) {
                    return (
                        this.toInt(n.css(t, "width")) +
                        this.toInt(n.css(t, "paddingLeft")) +
                        this.toInt(n.css(t, "paddingRight")) +
                        this.toInt(n.css(t, "borderLeftWidth")) +
                        this.toInt(n.css(t, "borderRightWidth"))
                    );
                }),
                (i.startScrolling = function(t, e) {
                    o.add(t, "ps-in-scrolling"),
                        void 0 !== e ?
                        o.add(t, "ps-" + e) :
                        (o.add(t, "ps-x"), o.add(t, "ps-y"));
                }),
                (i.stopScrolling = function(t, e) {
                    o.remove(t, "ps-in-scrolling"),
                        void 0 !== e ?
                        o.remove(t, "ps-" + e) :
                        (o.remove(t, "ps-x"), o.remove(t, "ps-y"));
                }),
                (i.env = {
                    isWebKit: "WebkitAppearance" in document.documentElement.style,
                    supportsTouch: "ontouchstart" in window ||
                        (window.DocumentTouch &&
                            document instanceof window.DocumentTouch),
                    supportsIePointer: null !== window.navigator.msMaxTouchPoints,
                });
            },
            { "./class": 2, "./dom": 3 },
        ],
        7: [
            function(t, e, i) {
                "use strict";
                var n = t("./plugin/destroy"),
                    o = t("./plugin/initialize"),
                    s = t("./plugin/update");
                e.exports = { initialize: o, update: s, destroy: n };
            },
            {
                "./plugin/destroy": 9,
                "./plugin/initialize": 17,
                "./plugin/update": 21,
            },
        ],
        8: [
            function(t, e, i) {
                "use strict";
                e.exports = {
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    stopPropagationOnClick: !0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipePropagation: !0,
                    useBothWheelAxes: !1,
                    useKeyboard: !0,
                    useSelectionScroll: !1,
                    wheelPropagation: !1,
                    wheelSpeed: 1,
                    theme: "default",
                };
            },
            {},
        ],
        9: [
            function(t, e, i) {
                "use strict";
                var n = t("../lib/dom"),
                    o = t("../lib/helper"),
                    s = t("./instances");
                e.exports = function(t) {
                    var e = s.get(t);
                    e &&
                        (e.event.unbindAll(),
                            n.remove(e.scrollbarX),
                            n.remove(e.scrollbarY),
                            n.remove(e.scrollbarXRail),
                            n.remove(e.scrollbarYRail),
                            o.removePsClasses(t),
                            s.remove(t));
                };
            },
            { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 },
        ],
        10: [
            function(t, e, i) {
                "use strict";
                var r = t("../../lib/helper"),
                    n = t("../instances"),
                    a = t("../update-geometry"),
                    l = t("../update-scroll");
                e.exports = function(t) {
                    !(function(n, o) {
                        function s(t) {
                            return t.getBoundingClientRect();
                        }
                        var t = window.Event.prototype.stopPropagation.bind;
                        o.settings.stopPropagationOnClick &&
                            o.event.bind(o.scrollbarY, "click", t),
                            o.event.bind(o.scrollbarYRail, "click", function(t) {
                                var e = r.toInt(o.scrollbarYHeight / 2),
                                    i =
                                    (o.railYRatio *
                                        (t.pageY -
                                            window.pageYOffset -
                                            s(o.scrollbarYRail).top -
                                            e)) /
                                    (o.railYRatio * (o.railYHeight - o.scrollbarYHeight));
                                i < 0 ? (i = 0) : 1 < i && (i = 1),
                                    l(n, "top", (o.contentHeight - o.containerHeight) * i),
                                    a(n),
                                    t.stopPropagation();
                            }),
                            o.settings.stopPropagationOnClick &&
                            o.event.bind(o.scrollbarX, "click", t),
                            o.event.bind(o.scrollbarXRail, "click", function(t) {
                                var e = r.toInt(o.scrollbarXWidth / 2),
                                    i =
                                    (o.railXRatio *
                                        (t.pageX -
                                            window.pageXOffset -
                                            s(o.scrollbarXRail).left -
                                            e)) /
                                    (o.railXRatio * (o.railXWidth - o.scrollbarXWidth));
                                i < 0 ? (i = 0) : 1 < i && (i = 1),
                                    l(
                                        n,
                                        "left",
                                        (o.contentWidth - o.containerWidth) * i -
                                        o.negativeScrollAdjustment
                                    ),
                                    a(n),
                                    t.stopPropagation();
                            });
                    })(t, n.get(t));
                };
            },
            {
                "../../lib/helper": 6,
                "../instances": 18,
                "../update-geometry": 19,
                "../update-scroll": 20,
            },
        ],
        11: [
            function(t, e, i) {
                "use strict";
                var a = t("../../lib/dom"),
                    l = t("../../lib/helper"),
                    n = t("../instances"),
                    d = t("../update-geometry"),
                    c = t("../update-scroll");

                function o(o, s) {
                    var r = null,
                        e = null;
                    var i = function(t) {
                            !(function(t) {
                                var e = r + t * s.railXRatio,
                                    i =
                                    Math.max(
                                        0,
                                        s.scrollbarXRail.getBoundingClientRect().left
                                    ) +
                                    s.railXRatio * (s.railXWidth - s.scrollbarXWidth);
                                s.scrollbarXLeft = e < 0 ? 0 : i < e ? i : e;
                                var n =
                                    l.toInt(
                                        (s.scrollbarXLeft * (s.contentWidth - s.containerWidth)) /
                                        (s.containerWidth - s.railXRatio * s.scrollbarXWidth)
                                    ) - s.negativeScrollAdjustment;
                                c(o, "left", n);
                            })(t.pageX - e),
                            d(o),
                                t.stopPropagation(),
                                t.preventDefault();
                        },
                        n = function() {
                            l.stopScrolling(o, "x"),
                                s.event.unbind(s.ownerDocument, "mousemove", i);
                        };
                    s.event.bind(s.scrollbarX, "mousedown", function(t) {
                        (e = t.pageX),
                        (r = l.toInt(a.css(s.scrollbarX, "left")) * s.railXRatio),
                        l.startScrolling(o, "x"),
                            s.event.bind(s.ownerDocument, "mousemove", i),
                            s.event.once(s.ownerDocument, "mouseup", n),
                            t.stopPropagation(),
                            t.preventDefault();
                    });
                }

                function s(o, s) {
                    var r = null,
                        e = null;
                    var i = function(t) {
                            !(function(t) {
                                var e = r + t * s.railYRatio,
                                    i =
                                    Math.max(
                                        0,
                                        s.scrollbarYRail.getBoundingClientRect().top
                                    ) +
                                    s.railYRatio * (s.railYHeight - s.scrollbarYHeight);
                                s.scrollbarYTop = e < 0 ? 0 : i < e ? i : e;
                                var n = l.toInt(
                                    (s.scrollbarYTop * (s.contentHeight - s.containerHeight)) /
                                    (s.containerHeight - s.railYRatio * s.scrollbarYHeight)
                                );
                                c(o, "top", n);
                            })(t.pageY - e),
                            d(o),
                                t.stopPropagation(),
                                t.preventDefault();
                        },
                        n = function() {
                            l.stopScrolling(o, "y"),
                                s.event.unbind(s.ownerDocument, "mousemove", i);
                        };
                    s.event.bind(s.scrollbarY, "mousedown", function(t) {
                        (e = t.pageY),
                        (r = l.toInt(a.css(s.scrollbarY, "top")) * s.railYRatio),
                        l.startScrolling(o, "y"),
                            s.event.bind(s.ownerDocument, "mousemove", i),
                            s.event.once(s.ownerDocument, "mouseup", n),
                            t.stopPropagation(),
                            t.preventDefault();
                    });
                }
                e.exports = function(t) {
                    var e = n.get(t);
                    o(t, e), s(t, e);
                };
            },
            {
                "../../lib/dom": 3,
                "../../lib/helper": 6,
                "../instances": 18,
                "../update-geometry": 19,
                "../update-scroll": 20,
            },
        ],
        12: [
            function(t, e, i) {
                "use strict";
                var l = t("../../lib/helper"),
                    d = t("../../lib/dom"),
                    n = t("../instances"),
                    c = t("../update-geometry"),
                    h = t("../update-scroll");

                function o(s, r) {
                    var a = !1;
                    r.event.bind(s, "mouseenter", function() {
                            a = !0;
                        }),
                        r.event.bind(s, "mouseleave", function() {
                            a = !1;
                        });
                    r.event.bind(r.ownerDocument, "keydown", function(t) {
                        if (!t.isDefaultPrevented || !t.isDefaultPrevented()) {
                            var e =
                                d.matches(r.scrollbarX, ":focus") ||
                                d.matches(r.scrollbarY, ":focus");
                            if (a || e) {
                                var i = document.activeElement ?
                                    document.activeElement :
                                    r.ownerDocument.activeElement;
                                if (i) {
                                    for (; i.shadowRoot;) i = i.shadowRoot.activeElement;
                                    if (l.isEditable(i)) return;
                                }
                                var n = 0,
                                    o = 0;
                                switch (t.which) {
                                    case 37:
                                        n = -30;
                                        break;
                                    case 38:
                                        o = 30;
                                        break;
                                    case 39:
                                        n = 30;
                                        break;
                                    case 40:
                                        o = -30;
                                        break;
                                    case 33:
                                        o = 90;
                                        break;
                                    case 32:
                                        o = t.shiftKey ? 90 : -90;
                                        break;
                                    case 34:
                                        o = -90;
                                        break;
                                    case 35:
                                        o = t.ctrlKey ? -r.contentHeight : -r.containerHeight;
                                        break;
                                    case 36:
                                        o = t.ctrlKey ? s.scrollTop : r.containerHeight;
                                        break;
                                    default:
                                        return;
                                }
                                h(s, "top", s.scrollTop - o),
                                    h(s, "left", s.scrollLeft + n),
                                    c(s),
                                    (function(t, e) {
                                        var i = s.scrollTop;
                                        if (0 === t) {
                                            if (!r.scrollbarYActive) return !1;
                                            if (
                                                (0 === i && 0 < e) ||
                                                (i >= r.contentHeight - r.containerHeight && e < 0)
                                            )
                                                return !r.settings.wheelPropagation;
                                        }
                                        var n = s.scrollLeft;
                                        if (0 === e) {
                                            if (!r.scrollbarXActive) return !1;
                                            if (
                                                (0 === n && t < 0) ||
                                                (n >= r.contentWidth - r.containerWidth && 0 < t)
                                            )
                                                return !r.settings.wheelPropagation;
                                        }
                                        return !0;
                                    })(n, o) && t.preventDefault();
                            }
                        }
                    });
                }
                e.exports = function(t) {
                    o(t, n.get(t));
                };
            },
            {
                "../../lib/dom": 3,
                "../../lib/helper": 6,
                "../instances": 18,
                "../update-geometry": 19,
                "../update-scroll": 20,
            },
        ],
        13: [
            function(t, e, i) {
                "use strict";
                var n = t("../instances"),
                    c = t("../update-geometry"),
                    h = t("../update-scroll");

                function o(a, l) {
                    var d = !1;

                    function t(t) {
                        var e,
                            i,
                            n,
                            o =
                            ((i = (e = t).deltaX),
                                (n = -1 * e.deltaY),
                                (void 0 !== i && void 0 !== n) ||
                                ((i = (-1 * e.wheelDeltaX) / 6), (n = e.wheelDeltaY / 6)),
                                e.deltaMode && 1 === e.deltaMode && ((i *= 10), (n *= 10)),
                                i != i && n != n && ((i = 0), (n = e.wheelDelta)), [i, n]),
                            s = o[0],
                            r = o[1];
                        (function(t, e) {
                            var i = a.querySelector("textarea:hover");
                            if (i) {
                                var n = i.scrollHeight - i.clientHeight;
                                if (
                                    0 < n &&
                                    !(
                                        (0 === i.scrollTop && 0 < e) ||
                                        (i.scrollTop === n && e < 0)
                                    )
                                )
                                    return !0;
                                var o = i.scrollLeft - i.clientWidth;
                                if (
                                    0 < o &&
                                    !(
                                        (0 === i.scrollLeft && t < 0) ||
                                        (i.scrollLeft === o && 0 < t)
                                    )
                                )
                                    return !0;
                            }
                            return !1;
                        })(s, r) ||
                        ((d = !1),
                            l.settings.useBothWheelAxes ?
                            l.scrollbarYActive && !l.scrollbarXActive ?
                            (h(
                                    a,
                                    "top",
                                    r ?
                                    a.scrollTop - r * l.settings.wheelSpeed :
                                    a.scrollTop + s * l.settings.wheelSpeed
                                ),
                                (d = !0)) :
                            l.scrollbarXActive &&
                            !l.scrollbarYActive &&
                            (h(
                                    a,
                                    "left",
                                    s ?
                                    a.scrollLeft + s * l.settings.wheelSpeed :
                                    a.scrollLeft - r * l.settings.wheelSpeed
                                ),
                                (d = !0)) :
                            (h(a, "top", a.scrollTop - r * l.settings.wheelSpeed),
                                h(a, "left", a.scrollLeft + s * l.settings.wheelSpeed)),
                            c(a),
                            (d =
                                d ||
                                (function(t, e) {
                                    var i = a.scrollTop;
                                    if (0 === t) {
                                        if (!l.scrollbarYActive) return !1;
                                        if (
                                            (0 === i && 0 < e) ||
                                            (i >= l.contentHeight - l.containerHeight && e < 0)
                                        )
                                            return !l.settings.wheelPropagation;
                                    }
                                    var n = a.scrollLeft;
                                    if (0 === e) {
                                        if (!l.scrollbarXActive) return !1;
                                        if (
                                            (0 === n && t < 0) ||
                                            (n >= l.contentWidth - l.containerWidth && 0 < t)
                                        )
                                            return !l.settings.wheelPropagation;
                                    }
                                    return !0;
                                })(s, r)) && (t.stopPropagation(), t.preventDefault()));
                    }
                    void 0 !== window.onwheel ?
                        l.event.bind(a, "wheel", t) :
                        void 0 !== window.onmousewheel &&
                        l.event.bind(a, "mousewheel", t);
                }
                e.exports = function(t) {
                    o(t, n.get(t));
                };
            },
            {
                "../instances": 18,
                "../update-geometry": 19,
                "../update-scroll": 20,
            },
        ],
        14: [
            function(t, e, i) {
                "use strict";
                var n = t("../instances"),
                    o = t("../update-geometry");
                e.exports = function(t) {
                    var e,
                        i = n.get(t);
                    (e = t),
                    i.event.bind(e, "scroll", function() {
                        o(e);
                    });
                };
            },
            { "../instances": 18, "../update-geometry": 19 },
        ],
        15: [
            function(t, e, i) {
                "use strict";
                var u = t("../../lib/helper"),
                    p = t("../instances"),
                    f = t("../update-geometry"),
                    m = t("../update-scroll");

                function n(a, t) {
                    var l = null,
                        d = { top: 0, left: 0 };

                    function c() {
                        l && (clearInterval(l), (l = null)), u.stopScrolling(a);
                    }
                    var h = !1;
                    t.event.bind(t.ownerDocument, "selectionchange", function() {
                            var t;
                            a.contains(
                                    0 ===
                                    (t = window.getSelection ?
                                        window.getSelection() :
                                        document.getSelection ?
                                        document.getSelection() :
                                        "").toString().length ?
                                    null :
                                    t.getRangeAt(0).commonAncestorContainer
                                ) ?
                                (h = !0) :
                                ((h = !1), c());
                        }),
                        t.event.bind(window, "mouseup", function() {
                            h && ((h = !1), c());
                        }),
                        t.event.bind(window, "mousemove", function(t) {
                            if (h) {
                                var e = t.pageX,
                                    i = t.pageY,
                                    n = a.offsetLeft,
                                    o = a.offsetLeft + a.offsetWidth,
                                    s = a.offsetTop,
                                    r = a.offsetTop + a.offsetHeight;
                                e < n + 3 ?
                                    ((d.left = -5), u.startScrolling(a, "x")) :
                                    o - 3 < e ?
                                    ((d.left = 5), u.startScrolling(a, "x")) :
                                    (d.left = 0),
                                    i < s + 3 ?
                                    ((d.top = s + 3 - i < 5 ? -5 : -20),
                                        u.startScrolling(a, "y")) :
                                    r - 3 < i ?
                                    ((d.top = i - r + 3 < 5 ? 5 : 20),
                                        u.startScrolling(a, "y")) :
                                    (d.top = 0),
                                    0 === d.top && 0 === d.left ?
                                    c() :
                                    l ||
                                    (l = setInterval(function() {
                                        p.get(a) ?
                                            (m(a, "top", a.scrollTop + d.top),
                                                m(a, "left", a.scrollLeft + d.left),
                                                f(a)) :
                                            clearInterval(l);
                                    }, 50));
                            }
                        });
                }
                e.exports = function(t) {
                    n(t, p.get(t));
                };
            },
            {
                "../../lib/helper": 6,
                "../instances": 18,
                "../update-geometry": 19,
                "../update-scroll": 20,
            },
        ],
        16: [
            function(t, e, i) {
                "use strict";
                var w = t("../instances"),
                    y = t("../update-geometry"),
                    b = t("../update-scroll");

                function n(a, l, t, e) {
                    function d(t, e) {
                        b(a, "top", a.scrollTop - e),
                            b(a, "left", a.scrollLeft - t),
                            y(a);
                    }
                    var c = {},
                        h = 0,
                        u = {},
                        i = null,
                        p = !1,
                        f = !1;

                    function n() {
                        p = !0;
                    }

                    function o() {
                        p = !1;
                    }

                    function m(t) {
                        return t.targetTouches ? t.targetTouches[0] : t;
                    }

                    function g(t) {
                        return (!(!t.targetTouches || 1 !== t.targetTouches.length) ||
                            !(!t.pointerType ||
                                "mouse" === t.pointerType ||
                                t.pointerType === t.MSPOINTER_TYPE_MOUSE
                            )
                        );
                    }

                    function s(t) {
                        if (g(t)) {
                            f = !0;
                            var e = m(t);
                            (c.pageX = e.pageX),
                            (c.pageY = e.pageY),
                            (h = new Date().getTime()),
                            null !== i && clearInterval(i),
                                t.stopPropagation();
                        }
                    }

                    function r(t) {
                        if (!p && f && g(t)) {
                            var e = m(t),
                                i = { pageX: e.pageX, pageY: e.pageY },
                                n = i.pageX - c.pageX,
                                o = i.pageY - c.pageY;
                            d(n, o), (c = i);
                            var s = new Date().getTime(),
                                r = s - h;
                            0 < r && ((u.x = n / r), (u.y = o / r), (h = s)),
                                (function(t, e) {
                                    var i = a.scrollTop,
                                        n = a.scrollLeft,
                                        o = Math.abs(t),
                                        s = Math.abs(e);
                                    if (o < s) {
                                        if (
                                            (e < 0 && i === l.contentHeight - l.containerHeight) ||
                                            (0 < e && 0 === i)
                                        )
                                            return !l.settings.swipePropagation;
                                    } else if (
                                        s < o &&
                                        ((t < 0 && n === l.contentWidth - l.containerWidth) ||
                                            (0 < t && 0 === n))
                                    )
                                        return !l.settings.swipePropagation;
                                    return !0;
                                })(n, o) && (t.stopPropagation(), t.preventDefault());
                        }
                    }

                    function v() {
                        !p &&
                            f &&
                            ((f = !1),
                                clearInterval(i),
                                (i = setInterval(function() {
                                    w.get(a) ?
                                        Math.abs(u.x) < 0.01 && Math.abs(u.y) < 0.01 ?
                                        clearInterval(i) :
                                        (d(30 * u.x, 30 * u.y), (u.x *= 0.8), (u.y *= 0.8)) :
                                        clearInterval(i);
                                }, 10)));
                    }
                    t &&
                        (l.event.bind(window, "touchstart", n),
                            l.event.bind(window, "touchend", o),
                            l.event.bind(a, "touchstart", s),
                            l.event.bind(a, "touchmove", r),
                            l.event.bind(a, "touchend", v)),
                        e &&
                        (window.PointerEvent ?
                            (l.event.bind(window, "pointerdown", n),
                                l.event.bind(window, "pointerup", o),
                                l.event.bind(a, "pointerdown", s),
                                l.event.bind(a, "pointermove", r),
                                l.event.bind(a, "pointerup", v)) :
                            window.MSPointerEvent &&
                            (l.event.bind(window, "MSPointerDown", n),
                                l.event.bind(window, "MSPointerUp", o),
                                l.event.bind(a, "MSPointerDown", s),
                                l.event.bind(a, "MSPointerMove", r),
                                l.event.bind(a, "MSPointerUp", v)));
                }
                e.exports = function(t, e, i) {
                    n(t, w.get(t), e, i);
                };
            },
            {
                "../instances": 18,
                "../update-geometry": 19,
                "../update-scroll": 20,
            },
        ],
        17: [
            function(t, e, i) {
                "use strict";
                var n = t("../lib/class"),
                    o = t("../lib/helper"),
                    s = t("./instances"),
                    r = t("./update-geometry"),
                    a = t("./handler/click-rail"),
                    l = t("./handler/drag-scrollbar"),
                    d = t("./handler/keyboard"),
                    c = t("./handler/mouse-wheel"),
                    h = t("./handler/native-scroll"),
                    u = t("./handler/selection"),
                    p = t("./handler/touch");
                e.exports = function(t, e) {
                    (e = "object" == typeof e ? e : {}), n.add(t, "ps-container");
                    var i = s.add(t);
                    (i.settings = o.extend(i.settings, e)),
                    n.add(t, "ps-theme-" + i.settings.theme),
                        a(t),
                        l(t),
                        c(t),
                        h(t),
                        i.settings.useSelectionScroll && u(t),
                        (o.env.supportsTouch || o.env.supportsIePointer) &&
                        p(t, o.env.supportsTouch, o.env.supportsIePointer),
                        i.settings.useKeyboard && d(t),
                        r(t);
                };
            },
            {
                "../lib/class": 2,
                "../lib/helper": 6,
                "./handler/click-rail": 10,
                "./handler/drag-scrollbar": 11,
                "./handler/keyboard": 12,
                "./handler/mouse-wheel": 13,
                "./handler/native-scroll": 14,
                "./handler/selection": 15,
                "./handler/touch": 16,
                "./instances": 18,
                "./update-geometry": 19,
            },
        ],
        18: [
            function(t, e, i) {
                "use strict";
                var r = t("../lib/class"),
                    a = t("../lib/dom"),
                    l = t("./default-setting"),
                    d = t("../lib/event-manager"),
                    o = t("../lib/guid"),
                    c = t("../lib/helper"),
                    s = {};

                function h(t) {
                    var e,
                        i,
                        n = this;

                    function o() {
                        r.add(t, "ps-focus");
                    }

                    function s() {
                        r.remove(t, "ps-focus");
                    }
                    (n.settings = c.clone(l)),
                    (n.containerWidth = null),
                    (n.containerHeight = null),
                    (n.contentWidth = null),
                    (n.contentHeight = null),
                    (n.isRtl = "rtl" === a.css(t, "direction")),
                    (n.isNegativeScroll =
                        ((i = t.scrollLeft),
                            (t.scrollLeft = -1),
                            (e = t.scrollLeft < 0),
                            (t.scrollLeft = i),
                            e)),
                    (n.negativeScrollAdjustment = n.isNegativeScroll ?
                        t.scrollWidth - t.clientWidth :
                        0),
                    (n.event = new d()),
                    (n.ownerDocument = t.ownerDocument || document),
                    (n.scrollbarXRail = a.appendTo(
                        a.e("div", "ps-scrollbar-x-rail"),
                        t
                    )),
                    (n.scrollbarX = a.appendTo(
                        a.e("div", "ps-scrollbar-x"),
                        n.scrollbarXRail
                    )),
                    n.scrollbarX.setAttribute("tabindex", 0),
                        n.event.bind(n.scrollbarX, "focus", o),
                        n.event.bind(n.scrollbarX, "blur", s),
                        (n.scrollbarXActive = null),
                        (n.scrollbarXWidth = null),
                        (n.scrollbarXLeft = null),
                        (n.scrollbarXBottom = c.toInt(a.css(n.scrollbarXRail, "bottom"))),
                        (n.isScrollbarXUsingBottom =
                            n.scrollbarXBottom == n.scrollbarXBottom),
                        (n.scrollbarXTop = n.isScrollbarXUsingBottom ?
                            null :
                            c.toInt(a.css(n.scrollbarXRail, "top"))),
                        (n.railBorderXWidth =
                            c.toInt(a.css(n.scrollbarXRail, "borderLeftWidth")) +
                            c.toInt(a.css(n.scrollbarXRail, "borderRightWidth"))),
                        a.css(n.scrollbarXRail, "display", "block"),
                        (n.railXMarginWidth =
                            c.toInt(a.css(n.scrollbarXRail, "marginLeft")) +
                            c.toInt(a.css(n.scrollbarXRail, "marginRight"))),
                        a.css(n.scrollbarXRail, "display", ""),
                        (n.railXWidth = null),
                        (n.railXRatio = null),
                        (n.scrollbarYRail = a.appendTo(
                            a.e("div", "ps-scrollbar-y-rail"),
                            t
                        )),
                        (n.scrollbarY = a.appendTo(
                            a.e("div", "ps-scrollbar-y"),
                            n.scrollbarYRail
                        )),
                        n.scrollbarY.setAttribute("tabindex", 0),
                        n.event.bind(n.scrollbarY, "focus", o),
                        n.event.bind(n.scrollbarY, "blur", s),
                        (n.scrollbarYActive = null),
                        (n.scrollbarYHeight = null),
                        (n.scrollbarYTop = null),
                        (n.scrollbarYRight = c.toInt(a.css(n.scrollbarYRail, "right"))),
                        (n.isScrollbarYUsingRight =
                            n.scrollbarYRight == n.scrollbarYRight),
                        (n.scrollbarYLeft = n.isScrollbarYUsingRight ?
                            null :
                            c.toInt(a.css(n.scrollbarYRail, "left"))),
                        (n.scrollbarYOuterWidth = n.isRtl ?
                            c.outerWidth(n.scrollbarY) :
                            null),
                        (n.railBorderYWidth =
                            c.toInt(a.css(n.scrollbarYRail, "borderTopWidth")) +
                            c.toInt(a.css(n.scrollbarYRail, "borderBottomWidth"))),
                        a.css(n.scrollbarYRail, "display", "block"),
                        (n.railYMarginHeight =
                            c.toInt(a.css(n.scrollbarYRail, "marginTop")) +
                            c.toInt(a.css(n.scrollbarYRail, "marginBottom"))),
                        a.css(n.scrollbarYRail, "display", ""),
                        (n.railYHeight = null),
                        (n.railYRatio = null);
                }

                function n(t) {
                    return void 0 === t.dataset ?
                        t.getAttribute("data-ps-id") :
                        t.dataset.psId;
                }
                (i.add = function(t) {
                    var e,
                        i,
                        n = o();
                    return (
                        (i = n),
                        void 0 === (e = t).dataset ?
                        e.setAttribute("data-ps-id", i) :
                        (e.dataset.psId = i),
                        (s[n] = new h(t)),
                        s[n]
                    );
                }),
                (i.remove = function(t) {
                    var e;
                    delete s[n(t)],
                        void 0 === (e = t).dataset ?
                        e.removeAttribute("data-ps-id") :
                        delete e.dataset.psId;
                }),
                (i.get = function(t) {
                    return s[n(t)];
                });
            },
            {
                "../lib/class": 2,
                "../lib/dom": 3,
                "../lib/event-manager": 4,
                "../lib/guid": 5,
                "../lib/helper": 6,
                "./default-setting": 8,
            },
        ],
        19: [
            function(t, e, i) {
                "use strict";
                var n = t("../lib/class"),
                    o = t("../lib/dom"),
                    s = t("../lib/helper"),
                    r = t("./instances"),
                    a = t("./update-scroll");

                function l(t, e) {
                    return (
                        t.settings.minScrollbarLength &&
                        (e = Math.max(e, t.settings.minScrollbarLength)),
                        t.settings.maxScrollbarLength &&
                        (e = Math.min(e, t.settings.maxScrollbarLength)),
                        e
                    );
                }
                e.exports = function(t) {
                    var e,
                        i = r.get(t);
                    (i.containerWidth = t.clientWidth),
                    (i.containerHeight = t.clientHeight),
                    (i.contentWidth = t.scrollWidth),
                    (i.contentHeight = t.scrollHeight),
                    t.contains(i.scrollbarXRail) ||
                        (0 < (e = o.queryChildren(t, ".ps-scrollbar-x-rail")).length &&
                            e.forEach(function(t) {
                                o.remove(t);
                            }),
                            o.appendTo(i.scrollbarXRail, t)),
                        t.contains(i.scrollbarYRail) ||
                        (0 < (e = o.queryChildren(t, ".ps-scrollbar-y-rail")).length &&
                            e.forEach(function(t) {
                                o.remove(t);
                            }),
                            o.appendTo(i.scrollbarYRail, t)), !i.settings.suppressScrollX &&
                        i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ?
                        ((i.scrollbarXActive = !0),
                            (i.railXWidth = i.containerWidth - i.railXMarginWidth),
                            (i.railXRatio = i.containerWidth / i.railXWidth),
                            (i.scrollbarXWidth = l(
                                i,
                                s.toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
                            )),
                            (i.scrollbarXLeft = s.toInt(
                                ((i.negativeScrollAdjustment + t.scrollLeft) *
                                    (i.railXWidth - i.scrollbarXWidth)) /
                                (i.contentWidth - i.containerWidth)
                            ))) :
                        (i.scrollbarXActive = !1), !i.settings.suppressScrollY &&
                        i.containerHeight + i.settings.scrollYMarginOffset <
                        i.contentHeight ?
                        ((i.scrollbarYActive = !0),
                            (i.railYHeight = i.containerHeight - i.railYMarginHeight),
                            (i.railYRatio = i.containerHeight / i.railYHeight),
                            (i.scrollbarYHeight = l(
                                i,
                                s.toInt(
                                    (i.railYHeight * i.containerHeight) / i.contentHeight
                                )
                            )),
                            (i.scrollbarYTop = s.toInt(
                                (t.scrollTop * (i.railYHeight - i.scrollbarYHeight)) /
                                (i.contentHeight - i.containerHeight)
                            ))) :
                        (i.scrollbarYActive = !1),
                        i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth &&
                        (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth),
                        i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight &&
                        (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
                        (function(t, e) {
                            var i = { width: e.railXWidth };
                            e.isRtl ?
                                (i.left =
                                    e.negativeScrollAdjustment +
                                    t.scrollLeft +
                                    e.containerWidth -
                                    e.contentWidth) :
                                (i.left = t.scrollLeft),
                                e.isScrollbarXUsingBottom ?
                                (i.bottom = e.scrollbarXBottom - t.scrollTop) :
                                (i.top = e.scrollbarXTop + t.scrollTop),
                                o.css(e.scrollbarXRail, i);
                            var n = { top: t.scrollTop, height: e.railYHeight };
                            e.isScrollbarYUsingRight ?
                                e.isRtl ?
                                (n.right =
                                    e.contentWidth -
                                    (e.negativeScrollAdjustment + t.scrollLeft) -
                                    e.scrollbarYRight -
                                    e.scrollbarYOuterWidth) :
                                (n.right = e.scrollbarYRight - t.scrollLeft) :
                                e.isRtl ?
                                (n.left =
                                    e.negativeScrollAdjustment +
                                    t.scrollLeft +
                                    2 * e.containerWidth -
                                    e.contentWidth -
                                    e.scrollbarYLeft -
                                    e.scrollbarYOuterWidth) :
                                (n.left = e.scrollbarYLeft + t.scrollLeft),
                                o.css(e.scrollbarYRail, n),
                                o.css(e.scrollbarX, {
                                    left: e.scrollbarXLeft,
                                    width: e.scrollbarXWidth - e.railBorderXWidth,
                                }),
                                o.css(e.scrollbarY, {
                                    top: e.scrollbarYTop,
                                    height: e.scrollbarYHeight - e.railBorderYWidth,
                                });
                        })(t, i),
                        i.scrollbarXActive ?
                        n.add(t, "ps-active-x") :
                        (n.remove(t, "ps-active-x"),
                            (i.scrollbarXWidth = 0),
                            (i.scrollbarXLeft = 0),
                            a(t, "left", 0)),
                        i.scrollbarYActive ?
                        n.add(t, "ps-active-y") :
                        (n.remove(t, "ps-active-y"),
                            (i.scrollbarYHeight = 0),
                            (i.scrollbarYTop = 0),
                            a(t, "top", 0));
                };
            },
            {
                "../lib/class": 2,
                "../lib/dom": 3,
                "../lib/helper": 6,
                "./instances": 18,
                "./update-scroll": 20,
            },
        ],
        20: [
            function(t, e, i) {
                "use strict";
                var o,
                    s,
                    r = t("./instances"),
                    a = document.createEvent("Event"),
                    l = document.createEvent("Event"),
                    d = document.createEvent("Event"),
                    c = document.createEvent("Event"),
                    h = document.createEvent("Event"),
                    u = document.createEvent("Event"),
                    p = document.createEvent("Event"),
                    f = document.createEvent("Event"),
                    m = document.createEvent("Event"),
                    g = document.createEvent("Event");
                a.initEvent("ps-scroll-up", !0, !0),
                    l.initEvent("ps-scroll-down", !0, !0),
                    d.initEvent("ps-scroll-left", !0, !0),
                    c.initEvent("ps-scroll-right", !0, !0),
                    h.initEvent("ps-scroll-y", !0, !0),
                    u.initEvent("ps-scroll-x", !0, !0),
                    p.initEvent("ps-x-reach-start", !0, !0),
                    f.initEvent("ps-x-reach-end", !0, !0),
                    m.initEvent("ps-y-reach-start", !0, !0),
                    g.initEvent("ps-y-reach-end", !0, !0),
                    (e.exports = function(t, e, i) {
                        if (void 0 === t)
                            throw "You must provide an element to the update-scroll function";
                        if (void 0 === e)
                            throw "You must provide an axis to the update-scroll function";
                        if (void 0 === i)
                            throw "You must provide a value to the update-scroll function";
                        "top" === e &&
                            i <= 0 &&
                            ((t.scrollTop = i = 0), t.dispatchEvent(m)),
                            "left" === e &&
                            i <= 0 &&
                            ((t.scrollLeft = i = 0), t.dispatchEvent(p));
                        var n = r.get(t);
                        "top" === e &&
                            i >= n.contentHeight - n.containerHeight &&
                            ((t.scrollTop = i = n.contentHeight - n.containerHeight),
                                t.dispatchEvent(g)),
                            "left" === e &&
                            i >= n.contentWidth - n.containerWidth &&
                            ((t.scrollLeft = i = n.contentWidth - n.containerWidth),
                                t.dispatchEvent(f)),
                            o || (o = t.scrollTop),
                            s || (s = t.scrollLeft),
                            "top" === e && i < o && t.dispatchEvent(a),
                            "top" === e && o < i && t.dispatchEvent(l),
                            "left" === e && i < s && t.dispatchEvent(d),
                            "left" === e && s < i && t.dispatchEvent(c),
                            "top" === e && ((t.scrollTop = o = i), t.dispatchEvent(h)),
                            "left" === e && ((t.scrollLeft = s = i), t.dispatchEvent(u));
                    });
            },
            { "./instances": 18 },
        ],
        21: [
            function(t, e, i) {
                "use strict";
                var n = t("../lib/dom"),
                    o = t("../lib/helper"),
                    s = t("./instances"),
                    r = t("./update-geometry"),
                    a = t("./update-scroll");
                e.exports = function(t) {
                    var e = s.get(t);
                    e &&
                        ((e.negativeScrollAdjustment = e.isNegativeScroll ?
                                t.scrollWidth - t.clientWidth :
                                0),
                            n.css(e.scrollbarXRail, "display", "block"),
                            n.css(e.scrollbarYRail, "display", "block"),
                            (e.railXMarginWidth =
                                o.toInt(n.css(e.scrollbarXRail, "marginLeft")) +
                                o.toInt(n.css(e.scrollbarXRail, "marginRight"))),
                            (e.railYMarginHeight =
                                o.toInt(n.css(e.scrollbarYRail, "marginTop")) +
                                o.toInt(n.css(e.scrollbarYRail, "marginBottom"))),
                            n.css(e.scrollbarXRail, "display", "none"),
                            n.css(e.scrollbarYRail, "display", "none"),
                            r(t),
                            a(t, "top", t.scrollTop),
                            a(t, "left", t.scrollLeft),
                            n.css(e.scrollbarXRail, "display", ""),
                            n.css(e.scrollbarYRail, "display", ""));
                };
            },
            {
                "../lib/dom": 3,
                "../lib/helper": 6,
                "./instances": 18,
                "./update-geometry": 19,
                "./update-scroll": 20,
            },
        ],
    }, {}, [1]),
    (ED = window),
    (FD = function(t, e) {
        "use strict";

        function i(d, o, c) {
            (c = c || e || t.jQuery) &&
            (o.prototype.option ||
                (o.prototype.option = function(t) {
                    c.isPlainObject(t) &&
                        (this.options = c.extend(!0, this.options, t));
                }),
                (c.fn[d] = function(t) {
                    if ("string" != typeof t)
                        return (
                            (n = t),
                            this.each(function(t, e) {
                                var i = c.data(e, d);
                                i
                                    ?
                                    (i.option(n), i._init()) :
                                    ((i = new o(e, n)), c.data(e, d, i));
                            }),
                            this
                        );
                    var e,
                        s,
                        r,
                        a,
                        l,
                        n,
                        i = h.call(arguments, 1);
                    return (
                        (r = i),
                        (l = "$()." + d + '("' + (s = t) + '")'),
                        (e = this).each(function(t, e) {
                            var i = c.data(e, d);
                            if (i) {
                                var n = i[s];
                                if (n && "_" != s.charAt(0)) {
                                    var o = n.apply(i, r);
                                    a = void 0 === a ? o : a;
                                } else u(l + " is not a valid method");
                            } else u(d + " not initialized. Cannot call methods, i.e. " + l);
                        }),
                        void 0 !== a ? a : e
                    );
                }),
                n(c));
        }

        function n(t) {
            !t || (t && t.bridget) || (t.bridget = i);
        }
        var h = Array.prototype.slice,
            o = t.console,
            u =
            void 0 === o ?

            function() {} :
            function(t) {
                o.error(t);
            };
        return n(e || t.jQuery), i;
    }),
    "function" == typeof define && define.amd ?
    define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
        return FD(ED, t);
    }) :
    "object" == typeof module && module.exports ?
    (module.exports = FD(ED, require("jquery"))) :
    (ED.jQueryBridget = FD(ED, ED.jQuery)),
    (lE = "undefined" != typeof window ? window : this),
    (mE = function() {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function(t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        n = (i[t] = i[t] || []);
                    return -1 == n.indexOf(e) && n.push(e), this;
                }
            }),
            (e.once = function(t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[t] = i[t] || {})[e] = !0), this;
                }
            }),
            (e.off = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var n = i.indexOf(e);
                    return -1 != n && i.splice(n, 1), this;
                }
            }),
            (e.emitEvent = function(t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (
                        var n = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++
                    ) {
                        var s = i[o];
                        n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function() {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    "function" == typeof define && define.amd ?
    define("ev-emitter/ev-emitter", mE) :
    "object" == typeof module && module.exports ?
    (module.exports = mE()) :
    (lE.EvEmitter = mE()),
    (function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ?
            define("get-size/get-size", [], function() {
                return e();
            }) :
            "object" == typeof module && module.exports ?
            (module.exports = e()) :
            (t.getSize = e());
    })(window, function() {
        "use strict";

        function v(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e;
        }

        function w(t) {
            var e = getComputedStyle(t);
            return (
                e ||
                i(
                    "Style returned " +
                    e +
                    ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
                ),
                e
            );
        }

        function y(t) {
            if (
                ((function() {
                        if (!T) {
                            T = !0;
                            var t = document.createElement("div");
                            (t.style.width = "200px"),
                            (t.style.padding = "1px 2px 3px 4px"),
                            (t.style.borderStyle = "solid"),
                            (t.style.borderWidth = "1px 2px 3px 4px"),
                            (t.style.boxSizing = "border-box");
                            var e = document.body || document.documentElement;
                            e.appendChild(t);
                            var i = w(t);
                            (y.isBoxSizeOuter = b = 200 == v(i.width)), e.removeChild(t);
                        }
                    })(),
                    "string" == typeof t && (t = document.querySelector(t)),
                    t && "object" == typeof t && t.nodeType)
            ) {
                var e = w(t);
                if ("none" == e.display)
                    return (function() {
                        for (
                            var t = {
                                    width: 0,
                                    height: 0,
                                    innerWidth: 0,
                                    innerHeight: 0,
                                    outerWidth: 0,
                                    outerHeight: 0,
                                },
                                e = 0; e < C; e++
                        )
                            t[_[e]] = 0;
                        return t;
                    })();
                var i = {};
                (i.width = t.offsetWidth), (i.height = t.offsetHeight);
                for (
                    var n = (i.isBorderBox = "border-box" == e.boxSizing), o = 0; o < C; o++
                ) {
                    var s = _[o],
                        r = e[s],
                        a = parseFloat(r);
                    i[s] = isNaN(a) ? 0 : a;
                }
                var l = i.paddingLeft + i.paddingRight,
                    d = i.paddingTop + i.paddingBottom,
                    c = i.marginLeft + i.marginRight,
                    h = i.marginTop + i.marginBottom,
                    u = i.borderLeftWidth + i.borderRightWidth,
                    p = i.borderTopWidth + i.borderBottomWidth,
                    f = n && b,
                    m = v(e.width);
                !1 !== m && (i.width = m + (f ? 0 : l + u));
                var g = v(e.height);
                return (!1 !== g && (i.height = g + (f ? 0 : d + p)),
                    (i.innerWidth = i.width - (l + u)),
                    (i.innerHeight = i.height - (d + p)),
                    (i.outerWidth = i.width + c),
                    (i.outerHeight = i.height + h),
                    i
                );
            }
        }
        var b,
            i =
            "undefined" == typeof console ?

            function() {} :
            function(t) {
                console.error(t);
            },
            _ = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
            ],
            C = _.length,
            T = !1;
        return y;
    }),
    (function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ?
            define("desandro-matches-selector/matches-selector", e) :
            "object" == typeof module && module.exports ?
            (module.exports = e()) :
            (t.matchesSelector = e());
    })(window, function() {
        "use strict";
        var i = (function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function(t, e) {
            return t[i](e);
        };
    }),
    (GF = window),
    (HF = function(d, s) {
        var c = {
                extend: function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t;
                },
                modulo: function(t, e) {
                    return ((t % e) + e) % e;
                },
                makeArray: function(t) {
                    var e = [];
                    if (Array.isArray(t)) e = t;
                    else if (t && "object" == typeof t && "number" == typeof t.length)
                        for (var i = 0; i < t.length; i++) e.push(t[i]);
                    else e.push(t);
                    return e;
                },
                removeFrom: function(t, e) {
                    var i = t.indexOf(e); -
                    1 != i && t.splice(i, 1);
                },
                getParent: function(t, e) {
                    for (; t.parentNode && t != document.body;)
                        if (((t = t.parentNode), s(t, e))) return t;
                },
                getQueryElement: function(t) {
                    return "string" == typeof t ? document.querySelector(t) : t;
                },
                handleEvent: function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t);
                },
                filterFindElements: function(t, n) {
                    t = c.makeArray(t);
                    var o = [];
                    return (
                        t.forEach(function(t) {
                            if (t instanceof HTMLElement) {
                                if (!n) return void o.push(t);
                                s(t, n) && o.push(t);
                                for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++)
                                    o.push(e[i]);
                            }
                        }),
                        o
                    );
                },
                debounceMethod: function(t, e, n) {
                    var o = t.prototype[e],
                        s = e + "Timeout";
                    t.prototype[e] = function() {
                        var t = this[s];
                        t && clearTimeout(t);
                        var e = arguments,
                            i = this;
                        this[s] = setTimeout(function() {
                            o.apply(i, e), delete i[s];
                        }, n || 100);
                    };
                },
                docReady: function(t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ?
                        setTimeout(t) :
                        document.addEventListener("DOMContentLoaded", t);
                },
                toDashed: function(t) {
                    return t
                        .replace(/(.)([A-Z])/g, function(t, e, i) {
                            return e + "-" + i;
                        })
                        .toLowerCase();
                },
            },
            h = d.console;
        return (
            (c.htmlInit = function(a, l) {
                c.docReady(function() {
                    var t = c.toDashed(l),
                        o = "data-" + t,
                        e = document.querySelectorAll("[" + o + "]"),
                        i = document.querySelectorAll(".js-" + t),
                        n = c.makeArray(e).concat(c.makeArray(i)),
                        s = o + "-options",
                        r = d.jQuery;
                    n.forEach(function(e) {
                        var t,
                            i = e.getAttribute(o) || e.getAttribute(s);
                        try {
                            t = i && JSON.parse(i);
                        } catch (t) {
                            return void(
                                h &&
                                h.error("Error parsing " + o + " on " + e.className + ": " + t)
                            );
                        }
                        var n = new a(e, t);
                        r && r.data(e, l, n);
                    });
                });
            }),
            c
        );
    }),
    "function" == typeof define && define.amd ?
    define(
        "fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"],
        function(t) {
            return HF(GF, t);
        }
    ) :
    "object" == typeof module && module.exports ?
    (module.exports = HF(GF, require("desandro-matches-selector"))) :
    (GF.fizzyUIUtils = HF(GF, GF.matchesSelector)),
    (JG = window),
    (KG = function(t, e) {
        "use strict";

        function i(t, e) {
            t &&
                ((this.element = t),
                    (this.layout = e),
                    (this.position = { x: 0, y: 0 }),
                    this._create());
        }
        var n = document.documentElement.style,
            o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
            s = "string" == typeof n.transform ? "transform" : "WebkitTransform",
            r = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
            }[o],
            a = {
                transform: s,
                transition: o,
                transitionDuration: o + "Duration",
                transitionProperty: o + "Property",
                transitionDelay: o + "Delay",
            },
            l = (i.prototype = Object.create(t.prototype));
        (l.constructor = i),
        (l._create = function() {
            (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: "absolute" });
        }),
        (l.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t);
        }),
        (l.getSize = function() {
            this.size = e(this.element);
        }),
        (l.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                e[a[i] || i] = t[i];
            }
        }),
        (l.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = -1 != n.indexOf("%") ?
                (parseFloat(n) / 100) * s.width :
                parseInt(n, 10),
                a = -1 != o.indexOf("%") ?
                (parseFloat(o) / 100) * s.height :
                parseInt(o, 10);
            (r = isNaN(r) ? 0 : r),
            (a = isNaN(a) ? 0 : a),
            (r -= e ? s.paddingLeft : s.paddingRight),
            (a -= i ? s.paddingTop : s.paddingBottom),
            (this.position.x = r),
            (this.position.y = a);
        }),
        (l.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[o];
            (e[s] = this.getXValue(a)), (e[r] = "");
            var l = n ? "paddingTop" : "paddingBottom",
                d = n ? "top" : "bottom",
                c = n ? "bottom" : "top",
                h = this.position.y + t[l];
            (e[d] = this.getYValue(h)),
            (e[c] = ""),
            this.css(e),
                this.emitEvent("layout", [this]);
        }),
        (l.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ?
                (t / this.layout.size.width) * 100 + "%" :
                t + "px";
        }),
        (l.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ?
                (t / this.layout.size.height) * 100 + "%" :
                t + "px";
        }),
        (l._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                s = parseInt(e, 10),
                r = o === this.position.x && s === this.position.y;
            if ((this.setPosition(t, e), !r || this.isTransitioning)) {
                var a = t - i,
                    l = e - n,
                    d = {};
                (d.transform = this.getTranslate(a, l)),
                this.transition({
                    to: d,
                    onTransitionEnd: { transform: this.layoutPosition },
                    isCleaning: !0,
                });
            } else this.layoutPosition();
        }),
        (l.getTranslate = function(t, e) {
            return (
                "translate3d(" +
                (t = this.layout._getOption("originLeft") ? t : -t) +
                "px, " +
                (e = this.layout._getOption("originTop") ? e : -e) +
                "px, 0)"
            );
        }),
        (l.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition();
        }),
        (l.moveTo = l._transitionTo),
        (l.setPosition = function(t, e) {
            (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (l._nonTransition = function(t) {
            for (var e in (this.css(t.to),
                    t.isCleaning && this._removeStyles(t.to),
                    t.onTransitionEnd))
                t.onTransitionEnd[e].call(this);
        }),
        (l.transition = function(t) {
            if (parseFloat(this.layout.options.transitionDuration)) {
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to)
                    (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    this.element.offsetHeight;
                    null;
                }
                this.enableTransition(t.to),
                    this.css(t.to),
                    (this.isTransitioning = !0);
            } else this._nonTransition(t);
        });
        var d =
            "opacity," +
            s.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase();
            });
        (l.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t),
                this.css({
                        transitionProperty: d,
                        transitionDuration: t,
                        transitionDelay: this.staggerDelay || 0,
                    }),
                    this.element.addEventListener(r, this, !1);
            }
        }),
        (l.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t);
        }),
        (l.onotransitionend = function(t) {
            this.ontransitionend(t);
        });
        var c = { "-webkit-transform": "transform" };
        (l.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = c[t.propertyName] || t.propertyName;
                if (
                    (delete e.ingProperties[i],
                        (function(t) {
                            for (var e in t) return !1;
                            return !0;
                        })(e.ingProperties) && this.disableTransition(),
                        i in e.clean &&
                        ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
                        i in e.onEnd)
                )
                    e.onEnd[i].call(this), delete e.onEnd[i];
                this.emitEvent("transitionEnd", [this]);
            }
        }),
        (l.disableTransition = function() {
            this.removeTransitionStyles(),
                this.element.removeEventListener(r, this, !1),
                (this.isTransitioning = !1);
        }),
        (l._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e);
        });
        var h = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: "",
        };
        return (
            (l.removeTransitionStyles = function() {
                this.css(h);
            }),
            (l.stagger = function(t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (l.removeElem = function() {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (l.remove = function() {
                return o && parseFloat(this.layout.options.transitionDuration) ?
                    (this.once("transitionEnd", function() {
                            this.removeElem();
                        }),
                        void this.hide()) :
                    void this.removeElem();
            }),
            (l.reveal = function() {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
                    this.onRevealTransitionEnd),
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0,
                    onTransitionEnd: e,
                });
            }),
            (l.onRevealTransitionEnd = function() {
                this.isHidden || this.emitEvent("reveal");
            }),
            (l.getHideRevealTransitionEndProperty = function(t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (l.hide = function() {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {};
                (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                    this.onHideTransitionEnd),
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: e,
                });
            }),
            (l.onHideTransitionEnd = function() {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (l.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: "",
                });
            }),
            i
        );
    }),
    "function" == typeof define && define.amd ?
    define(
        "outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"],
        KG
    ) :
    "object" == typeof module && module.exports ?
    (module.exports = KG(require("ev-emitter"), require("get-size"))) :
    ((JG.Outlayer = {}), (JG.Outlayer.Item = KG(JG.EvEmitter, JG.getSize))),
    (function(o, s) {
        "use strict";
        "function" == typeof define && define.amd ?
            define(
                "outlayer/outlayer", [
                    "ev-emitter/ev-emitter",
                    "get-size/get-size",
                    "fizzy-ui-utils/utils",
                    "./item",
                ],
                function(t, e, i, n) {
                    return s(o, t, e, i, n);
                }
            ) :
            "object" == typeof module && module.exports ?
            (module.exports = s(
                o,
                require("ev-emitter"),
                require("get-size"),
                require("fizzy-ui-utils"),
                require("./item")
            )) :
            (o.Outlayer = s(
                o,
                o.EvEmitter,
                o.getSize,
                o.fizzyUIUtils,
                o.Outlayer.Item
            ));
    })(window, function(t, e, o, s, n) {
        "use strict";

        function r(t, e) {
            var i = s.getQueryElement(t);
            if (i) {
                (this.element = i),
                d && (this.$element = d(this.element)),
                    (this.options = s.extend({}, this.constructor.defaults)),
                    this.option(e);
                var n = ++c;
                (this.element.outlayerGUID = n),
                (h[n] = this)._create(),
                    this._getOption("initLayout") && this.layout();
            } else l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
        }

        function a(t) {
            function e() {
                t.apply(this, arguments);
            }
            return ((e.prototype = Object.create(t.prototype)).constructor = e);
        }
        var l = t.console,
            d = t.jQuery,
            i = function() {},
            c = 0,
            h = {};
        (r.namespace = "outlayer"),
        (r.Item = n),
        (r.defaults = {
            containerStyle: { position: "relative" },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
            visibleStyle: { opacity: 1, transform: "scale(1)" },
        });
        var u = r.prototype;
        s.extend(u, e.prototype),
            (u.option = function(t) {
                s.extend(this.options, t);
            }),
            (u._getOption = function(t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ?
                    this.options[e] :
                    this.options[t];
            }),
            (r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (u._create = function() {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    s.extend(this.element.style, this.options.containerStyle),
                    this._getOption("resize") && this.bindResize();
            }),
            (u.reloadItems = function() {
                this.items = this._itemize(this.element.children);
            }),
            (u._itemize = function(t) {
                for (
                    var e = this._filterFindItemElements(t),
                        i = this.constructor.Item,
                        n = [],
                        o = 0; o < e.length; o++
                ) {
                    var s = new i(e[o], this);
                    n.push(s);
                }
                return n;
            }),
            (u._filterFindItemElements = function(t) {
                return s.filterFindElements(t, this.options.itemSelector);
            }),
            (u.getItemElements = function() {
                return this.items.map(function(t) {
                    return t.element;
                });
            }),
            (u.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (u._init = u.layout),
            (u._resetLayout = function() {
                this.getSize();
            }),
            (u.getSize = function() {
                this.size = o(this.element);
            }),
            (u._getMeasurement = function(t, e) {
                var i,
                    n = this.options[t];
                this[t] = n ?
                    ("string" == typeof n ?
                        (i = this.element.querySelector(n)) :
                        n instanceof HTMLElement && (i = n),
                        i ? o(i)[e] : n) :
                    0;
            }),
            (u.layoutItems = function(t, e) {
                (t = this._getItemsForLayout(t)),
                this._layoutItems(t, e),
                    this._postLayout();
            }),
            (u._getItemsForLayout = function(t) {
                return t.filter(function(t) {
                    return !t.isIgnored;
                });
            }),
            (u._layoutItems = function(t, i) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var n = [];
                    t.forEach(function(t) {
                            var e = this._getItemLayoutPosition(t);
                            (e.item = t), (e.isInstant = i || t.isLayoutInstant), n.push(e);
                        }, this),
                        this._processLayoutQueue(n);
                }
            }),
            (u._getItemLayoutPosition = function() {
                return { x: 0, y: 0 };
            }),
            (u._processLayoutQueue = function(t) {
                this.updateStagger(),
                    t.forEach(function(t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (u.updateStagger = function() {
                var t = this.options.stagger;
                return null == t ?
                    void(this.stagger = 0) :
                    ((this.stagger = (function(t) {
                            if ("number" == typeof t) return t;
                            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                                i = e && e[1],
                                n = e && e[2];
                            return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0;
                        })(t)),
                        this.stagger);
            }),
            (u._positionItem = function(t, e, i, n, o) {
                n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
            }),
            (u._postLayout = function() {
                this.resizeContainer();
            }),
            (u.resizeContainer = function() {
                if (this._getOption("resizeContainer")) {
                    var t = this._getContainerSize();
                    t &&
                        (this._setContainerMeasure(t.width, !0),
                            this._setContainerMeasure(t.height, !1));
                }
            }),
            (u._getContainerSize = i),
            (u._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox &&
                        (t += e ?
                            i.paddingLeft +
                            i.paddingRight +
                            i.borderLeftWidth +
                            i.borderRightWidth :
                            i.paddingBottom +
                            i.paddingTop +
                            i.borderTopWidth +
                            i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (u._emitCompleteOnItems = function(e, t) {
                function i() {
                    o.dispatchEvent(e + "Complete", null, [t]);
                }

                function n() {
                    ++r == s && i();
                }
                var o = this,
                    s = t.length;
                if (t && s) {
                    var r = 0;
                    t.forEach(function(t) {
                        t.once(e, n);
                    });
                } else i();
            }),
            (u.dispatchEvent = function(t, e, i) {
                var n = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, n), d))
                    if (((this.$element = this.$element || d(this.element)), e)) {
                        var o = d.Event(e);
                        (o.type = t), this.$element.trigger(o, i);
                    } else this.$element.trigger(t, i);
            }),
            (u.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (u.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (u.stamp = function(t) {
                (t = this._find(t)) &&
                ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (u.unstamp = function(t) {
                (t = this._find(t)) &&
                t.forEach(function(t) {
                    s.removeFrom(this.stamps, t), this.unignore(t);
                }, this);
            }),
            (u._find = function(t) {
                if (t)
                    return (
                        "string" == typeof t && (t = this.element.querySelectorAll(t)),
                        s.makeArray(t)
                    );
            }),
            (u._manageStamps = function() {
                this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                        this.stamps.forEach(this._manageStamp, this));
            }),
            (u._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (u._manageStamp = i),
            (u._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = o(t);
                return {
                    left: e.left - i.left - n.marginLeft,
                    top: e.top - i.top - n.marginTop,
                    right: i.right - e.right - n.marginRight,
                    bottom: i.bottom - e.bottom - n.marginBottom,
                };
            }),
            (u.handleEvent = s.handleEvent),
            (u.bindResize = function() {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (u.unbindResize = function() {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (u.onresize = function() {
                this.resize();
            }),
            s.debounceMethod(r, "onresize", 100),
            (u.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (u.needsResizeLayout = function() {
                var t = o(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth;
            }),
            (u.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (u.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (u.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)),
                    this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(e, !0),
                        this.reveal(e),
                        this.layoutItems(i);
                }
            }),
            (u.reveal = function(t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var i = this.updateStagger();
                    t.forEach(function(t, e) {
                        t.stagger(e * i), t.reveal();
                    });
                }
            }),
            (u.hide = function(t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var i = this.updateStagger();
                    t.forEach(function(t, e) {
                        t.stagger(e * i), t.hide();
                    });
                }
            }),
            (u.revealItemElements = function(t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (u.hideItemElements = function(t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (u.getItem = function(t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (u.getItems = function(t) {
                t = s.makeArray(t);
                var i = [];
                return (
                    t.forEach(function(t) {
                        var e = this.getItem(t);
                        e && i.push(e);
                    }, this),
                    i
                );
            }),
            (u.remove = function(t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                    e.length &&
                    e.forEach(function(t) {
                        t.remove(), s.removeFrom(this.items, t);
                    }, this);
            }),
            (u.destroy = function() {
                var t = this.element.style;
                (t.height = ""),
                (t.position = ""),
                (t.width = ""),
                this.items.forEach(function(t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete h[e],
                    delete this.element.outlayerGUID,
                    d && d.removeData(this.element, this.constructor.namespace);
            }),
            (r.data = function(t) {
                var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
                return e && h[e];
            }),
            (r.create = function(t, e) {
                var i = a(r);
                return (
                    (i.defaults = s.extend({}, r.defaults)),
                    s.extend(i.defaults, e),
                    (i.compatOptions = s.extend({}, r.compatOptions)),
                    (i.namespace = t),
                    (i.data = r.data),
                    (i.Item = a(n)),
                    s.htmlInit(i, t),
                    d && d.bridget && d.bridget(t, i),
                    i
                );
            });
        var p = { ms: 1, s: 1e3 };
        return (r.Item = n), r;
    }),
    (dL = window),
    (eL = function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            n = i._create;
        (i._create = function() {
            (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
        }),
        (i.updateSortData = function() {
            if (!this.isIgnored) {
                (this.sortData.id = this.id),
                (this.sortData["original-order"] = this.id),
                (this.sortData.random = Math.random());
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this);
                }
            }
        });
        var o = i.destroy;
        return (
            (i.destroy = function() {
                o.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    "function" == typeof define && define.amd ?
    define("isotope-layout/js/item", ["outlayer/outlayer"], eL) :
    "object" == typeof module && module.exports ?
    (module.exports = eL(require("outlayer"))) :
    ((dL.Isotope = dL.Isotope || {}), (dL.Isotope.Item = eL(dL.Outlayer))),
    (oL = window),
    (pL = function(e, i) {
        "use strict";

        function n(t) {
            (this.isotope = t) &&
            ((this.options = t.options[this.namespace]),
                (this.element = t.element),
                (this.items = t.filteredItems),
                (this.size = t.size));
        }
        var o = n.prototype;
        return (
            [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
                "_getOption",
            ].forEach(function(t) {
                o[t] = function() {
                    return i.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (o.needsVerticalResizeLayout = function() {
                var t = e(this.isotope.element);
                return (
                    this.isotope.size &&
                    t &&
                    t.innerHeight != this.isotope.size.innerHeight
                );
            }),
            (o._getMeasurement = function() {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function() {
                this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function() {
                this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function(t, e) {
                var i = t + e,
                    n = "outer" + e;
                if ((this._getMeasurement(i, n), !this[i])) {
                    var o = this.getFirstItemSize();
                    this[i] = (o && o[n]) || this.isotope.size["inner" + e];
                }
            }),
            (o.getFirstItemSize = function() {
                var t = this.isotope.filteredItems[0];
                return t && t.element && e(t.element);
            }),
            (o.layout = function() {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function() {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (n.modes = {}),
            (n.create = function(t, e) {
                function i() {
                    n.apply(this, arguments);
                }
                return (
                    ((i.prototype = Object.create(o)).constructor = i),
                    e && (i.options = e),
                    (n.modes[(i.prototype.namespace = t)] = i)
                );
            }),
            n
        );
    }),
    "function" == typeof define && define.amd ?
    define(
        "isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"],
        pL
    ) :
    "object" == typeof module && module.exports ?
    (module.exports = pL(require("get-size"), require("outlayer"))) :
    ((oL.Isotope = oL.Isotope || {}),
        (oL.Isotope.LayoutMode = pL(oL.getSize, oL.Outlayer))),
    (IL = window),
    (JL = function(t, d) {
        var e = t.create("masonry");
        e.compatOptions.fitWidth = "isFitWidth";
        var i = e.prototype;
        return (
            (i._resetLayout = function() {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (i.measureColumns = function() {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        e = t && t.element;
                    this.columnWidth = (e && d(e).outerWidth) || this.containerWidth;
                }
                var i = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    o = n / i,
                    s = i - (n % i);
                (o = Math[s && s < 1 ? "round" : "floor"](o)),
                (this.cols = Math.max(o, 1));
            }),
            (i.getContainerWidth = function() {
                var t = this._getOption("fitWidth") ?
                    this.element.parentNode :
                    this.element,
                    e = d(t);
                this.containerWidth = e && e.innerWidth;
            }),
            (i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = Math[e && e < 1 ? "round" : "ceil"](
                        t.size.outerWidth / this.columnWidth
                    );
                i = Math.min(i, this.cols);
                for (
                    var n = this[
                            this.options.horizontalOrder ?
                            "_getHorizontalColPosition" :
                            "_getTopColPosition"
                        ](i, t),
                        o = { x: this.columnWidth * n.col, y: n.y },
                        s = n.y + t.size.outerHeight,
                        r = i + n.col,
                        a = n.col; a < r; a++
                )
                    this.colYs[a] = s;
                return o;
            }),
            (i._getTopColPosition = function(t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (i._getTopColGroup = function(t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)
                    e[n] = this._getColGroupY(n, t);
                return e;
            }),
            (i._getColGroupY = function(t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (i._getHorizontalColPosition = function(t, e) {
                var i = this.horizontalColIndex % this.cols;
                i = 1 < t && i + t > this.cols ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (
                    (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) }
                );
            }),
            (i._manageStamp = function(t) {
                var e = d(t),
                    i = this._getElementOffset(t),
                    n = this._getOption("originLeft") ? i.left : i.right,
                    o = n + e.outerWidth,
                    s = Math.floor(n / this.columnWidth);
                s = Math.max(0, s);
                var r = Math.floor(o / this.columnWidth);
                (r -= o % this.columnWidth ? 0 : 1), (r = Math.min(this.cols - 1, r));
                for (
                    var a =
                        (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight,
                        l = s; l <= r; l++
                )
                    this.colYs[l] = Math.max(a, this.colYs[l]);
            }),
            (i._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return (
                    this._getOption("fitWidth") &&
                    (t.width = this._getContainerFitWidth()),
                    t
                );
            }),
            (i._getContainerFitWidth = function() {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (i.needsResizeLayout = function() {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            e
        );
    }),
    "function" == typeof define && define.amd ?
    define(
        "masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"],
        JL
    ) :
    "object" == typeof module && module.exports ?
    (module.exports = JL(require("outlayer"), require("get-size"))) :
    (IL.Masonry = JL(IL.Outlayer, IL.getSize)),
    (LM = window),
    (MM = function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype,
            o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
        var r = n.measureColumns;
        n.measureColumns = function() {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = n._getOption;
        return (
            (n._getOption = function(t) {
                return "fitWidth" == t ?
                    void 0 !== this.options.isFitWidth ?
                    this.options.isFitWidth :
                    this.options.fitWidth :
                    a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    "function" == typeof define && define.amd ?
    define(
        "isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"],
        MM
    ) :
    "object" == typeof module && module.exports ?
    (module.exports = MM(
        require("../layout-mode"),
        require("masonry-layout")
    )) :
    MM(LM.Isotope.LayoutMode, LM.Masonry),
    (WM = window),
    (XM = function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function() {
                (this.x = 0),
                (this.y = 0),
                (this.maxY = 0),
                this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var n = { x: this.x, y: this.y };
                return (
                    (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
                    (this.x += e),
                    n
                );
            }),
            (i._getContainerSize = function() {
                return { height: this.maxY };
            }),
            e
        );
    }),
    "function" == typeof define && define.amd ?
    define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], XM) :
    "object" == typeof exports ?
    (module.exports = XM(require("../layout-mode"))) :
    XM(WM.Isotope.LayoutMode),
    (dN = window),
    (eN = function(t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function() {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function(t) {
                t.getSize();
                var e =
                    (this.isotope.size.innerWidth - t.size.outerWidth) *
                    this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function() {
                return { height: this.y };
            }),
            e
        );
    }),
    "function" == typeof define && define.amd ?
    define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], eN) :
    "object" == typeof module && module.exports ?
    (module.exports = eN(require("../layout-mode"))) :
    eN(dN.Isotope.LayoutMode),
    (lN = window),
    (mN = function(t, i, e, n, s, o, r) {
        var a = t.jQuery,
            d = String.prototype.trim ?

            function(t) {
                return t.trim();
            } :
            function(t) {
                return t.replace(/^\s+|\s+$/g, "");
            },
            c = i.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0,
            });
        (c.Item = o), (c.LayoutMode = r);
        var l = c.prototype;
        (l._create = function() {
            for (var t in ((this.itemGUID = 0),
                    (this._sorters = {}),
                    this._getSorters(),
                    i.prototype._create.call(this),
                    (this.modes = {}),
                    (this.filteredItems = this.items),
                    (this.sortHistory = ["original-order"]),
                    r.modes))
                this._initLayoutMode(t);
        }),
        (l.reloadItems = function() {
            (this.itemGUID = 0), i.prototype.reloadItems.call(this);
        }),
        (l._itemize = function() {
            for (
                var t = i.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++
            ) {
                t[e].id = this.itemGUID++;
            }
            return this._updateItemsSortData(t), t;
        }),
        (l._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            (this.options[t] = e.options ? s.extend(e.options, i) : i),
            (this.modes[t] = new e(this));
        }),
        (l.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ?
                void this.arrange() :
                void this._layout();
        }),
        (l._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(),
                this._manageStamps(),
                this.layoutItems(this.filteredItems, t),
                (this._isLayoutInited = !0);
        }),
        (l.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            (this.filteredItems = e.matches),
            this._bindArrangeComplete(),
                this._isInstant ?
                this._noTransition(this._hideReveal, [e]) :
                this._hideReveal(e),
                this._sort(),
                this._layout();
        }),
        (l._init = l.arrange),
        (l._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide);
        }),
        (l._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return (this._isInstant = e);
        }),
        (l._bindArrangeComplete = function() {
            function t() {
                e &&
                    i &&
                    n &&
                    o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
            }
            var e,
                i,
                n,
                o = this;
            this.once("layoutComplete", function() {
                    (e = !0), t();
                }),
                this.once("hideComplete", function() {
                    (i = !0), t();
                }),
                this.once("revealComplete", function() {
                    (n = !0), t();
                });
        }),
        (l._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (
                var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++
            ) {
                var a = t[r];
                if (!a.isIgnored) {
                    var l = s(a);
                    l && i.push(a),
                        l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a);
                }
            }
            return { matches: i, needReveal: n, needHide: o };
        }),
        (l._getFilterTest = function(e) {
            return a && this.options.isJQueryFiltering ?

                function(t) {
                    return a(t.element).is(e);
                } :
                "function" == typeof e ?

                function(t) {
                    return e(t.element);
                } :
                function(t) {
                    return n(t.element, e);
                };
        }),
        (l.updateSortData = function(t) {
            var e;
            (e = t ? ((t = s.makeArray(t)), this.getItems(t)) : this.items),
            this._getSorters(),
                this._updateItemsSortData(e);
        }),
        (l._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = h(i);
            }
        }),
        (l._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && i < e; i++) {
                t[i].updateSortData();
            }
        });
        var h = function(t) {
            if ("string" != typeof t) return t;
            var e,
                i,
                n = d(t).split(" "),
                o = n[0],
                s = o.match(/^\[(.+)\]$/),
                r = s && s[1],
                a =
                ((i = o),
                    (e = r) ?

                    function(t) {
                        return t.getAttribute(e);
                    } :
                    function(t) {
                        var e = t.querySelector(i);
                        return e && e.textContent;
                    }),
                l = c.sortDataParsers[n[1]];
            return l ?

                function(t) {
                    return t && l(a(t));
                } :
                function(t) {
                    return t && a(t);
                };
        };
        (c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10);
            },
            parseFloat: function(t) {
                return parseFloat(t);
            },
        }),
        (l._sort = function() {
            if (this.options.sortBy) {
                var t = s.makeArray(this.options.sortBy);
                this._getIsSameSortBy(t) ||
                    (this.sortHistory = t.concat(this.sortHistory));
                var e =
                    ((r = this.sortHistory),
                        (a = this.options.sortAscending),
                        function(t, e) {
                            for (var i = 0; i < r.length; i++) {
                                var n = r[i],
                                    o = t.sortData[n],
                                    s = e.sortData[n];
                                if (s < o || o < s)
                                    return (
                                        (s < o ? 1 : -1) * ((void 0 !== a[n] ? a[n] : a) ? 1 : -1)
                                    );
                            }
                            return 0;
                        });
                this.filteredItems.sort(e);
            }
            var r, a;
        }),
        (l._getIsSameSortBy = function(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] != this.sortHistory[e]) return !1;
            return !0;
        }),
        (l._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return (e.options = this.options[t]), e;
        }),
        (l._resetLayout = function() {
            i.prototype._resetLayout.call(this), this._mode()._resetLayout();
        }),
        (l._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t);
        }),
        (l._manageStamp = function(t) {
            this._mode()._manageStamp(t);
        }),
        (l._getContainerSize = function() {
            return this._mode()._getContainerSize();
        }),
        (l.needsResizeLayout = function() {
            return this._mode().needsResizeLayout();
        }),
        (l.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i);
            }
        }),
        (l.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems),
                    (this.filteredItems = i.concat(this.filteredItems)),
                    (this.items = e.concat(this.items));
            }
        }),
        (l._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return (
                this.hide(e.needHide),
                this.reveal(e.matches),
                this.layoutItems(e.matches, !0),
                e.matches
            );
        }),
        (l.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i,
                    n,
                    o = e.length;
                for (i = 0; i < o; i++)
                    (n = e[i]), this.element.appendChild(n.element);
                var s = this._filter(e).matches;
                for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
                this.reveal(s);
            }
        });
        var u = l.remove;
        return (
            (l.remove = function(t) {
                t = s.makeArray(t);
                var e = this.getItems(t);
                u.call(this, t);
                for (var i = e && e.length, n = 0; i && n < i; n++) {
                    var o = e[n];
                    s.removeFrom(this.filteredItems, o);
                }
            }),
            (l.shuffle = function() {
                for (var t = 0; t < this.items.length; t++) {
                    this.items[t].sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function(t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var n = t.apply(this, e);
                return (this.options.transitionDuration = i), n;
            }),
            (l.getFilteredItemElements = function() {
                return this.filteredItems.map(function(t) {
                    return t.element;
                });
            }),
            c
        );
    }),
    "function" == typeof define && define.amd ?
    define(
        [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
        ],
        function(t, e, i, n, o, s) {
            return mN(lN, t, 0, i, n, o, s);
        }
    ) :
    "object" == typeof module && module.exports ?
    (module.exports = mN(
        lN,
        require("outlayer"),
        require("get-size"),
        require("desandro-matches-selector"),
        require("fizzy-ui-utils"),
        require("isotope-layout/js/item"),
        require("isotope-layout/js/layout-mode"),
        require("isotope-layout/js/layout-modes/masonry"),
        require("isotope-layout/js/layout-modes/fit-rows"),
        require("isotope-layout/js/layout-modes/vertical")
    )) :
    (lN.Isotope = mN(
        lN,
        lN.Outlayer,
        lN.getSize,
        lN.matchesSelector,
        lN.fizzyUIUtils,
        lN.Isotope.Item,
        lN.Isotope.LayoutMode
    )),
    "function" != typeof Object.create &&
    (Object.create = function(t) {
        function e() {}
        return (e.prototype = t), new e();
    }),
    (FP = jQuery),
    window,
    document,
    (JP = {
        init: function(t, e) {
            var i = this;
            (i.elem = e),
            (i.$elem = FP(e)),
            (i.imageSrc = i.$elem.data("zoom-image") ?
                i.$elem.data("zoom-image") :
                i.$elem.attr("src")),
            (i.options = FP.extend({}, FP.fn.elevateZoom.options, t)),
            i.options.tint &&
                ((i.options.lensColour = "none"), (i.options.lensOpacity = "1")),
                "inner" == i.options.zoomType && (i.options.showLens = !1),
                i.$elem.parent().removeAttr("title").removeAttr("alt"),
                (i.zoomImage = i.imageSrc),
                i.refresh(1),
                FP("#" + i.options.gallery + " a").click(function(t) {
                    return (
                        i.options.galleryActiveClass &&
                        (FP("#" + i.options.gallery + " a").removeClass(
                                i.options.galleryActiveClass
                            ),
                            FP(this).addClass(i.options.galleryActiveClass)),
                        t.preventDefault(),
                        FP(this).data("zoom-image") ?
                        (i.zoomImagePre = FP(this).data("zoom-image")) :
                        (i.zoomImagePre = FP(this).data("image")),
                        i.swaptheimage(FP(this).data("image"), i.zoomImagePre), !1
                    );
                });
        },
        refresh: function(t) {
            var e = this;
            setTimeout(function() {
                e.fetch(e.imageSrc);
            }, t || e.options.refresh);
        },
        fetch: function(t) {
            var e = this,
                i = new Image();
            (i.onload = function() {
                (e.largeWidth = i.width),
                (e.largeHeight = i.height),
                e.startZoom(),
                    (e.currentImage = e.imageSrc),
                    e.options.onZoomedImageLoaded(e.$elem);
            }),
            (i.src = t);
        },
        startZoom: function() {
            var i = this;
            if (
                ((i.nzWidth = i.$elem.width()),
                    (i.nzHeight = i.$elem.height()),
                    (i.isWindowActive = !1),
                    (i.isLensActive = !1),
                    (i.isTintActive = !1),
                    (i.overWindow = !1),
                    i.options.imageCrossfade &&
                    ((i.zoomWrap = i.$elem.wrap(
                            '<div style="height:' +
                            i.nzHeight +
                            "px;width:" +
                            i.nzWidth +
                            'px;" class="zoomWrapper" />'
                        )),
                        i.$elem.css("position", "absolute")),
                    (i.zoomLock = 1),
                    (i.scrollingLock = !1),
                    (i.changeBgSize = !1),
                    (i.currentZoomLevel = i.options.zoomLevel),
                    (i.nzOffset = i.$elem.offset()),
                    (i.widthRatio = i.largeWidth / i.currentZoomLevel / i.nzWidth),
                    (i.heightRatio = i.largeHeight / i.currentZoomLevel / i.nzHeight),
                    "window" == i.options.zoomType &&
                    (i.zoomWindowStyle =
                        "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " +
                        String(i.options.zoomWindowBgColour) +
                        ";width: " +
                        String(i.options.zoomWindowWidth) +
                        "px;height: " +
                        String(i.options.zoomWindowHeight) +
                        "px;float: left;background-size: " +
                        i.largeWidth / i.currentZoomLevel +
                        "px " +
                        i.largeHeight / i.currentZoomLevel +
                        "px;display: none;z-index:100;border: " +
                        String(i.options.borderSize) +
                        "px solid " +
                        i.options.borderColour +
                        ";background-repeat: no-repeat;position: absolute;"),
                    "inner" == i.options.zoomType)
            ) {
                var t = i.$elem.css("border-left-width");
                i.zoomWindowStyle =
                    "overflow: hidden;margin-left: " +
                    String(t) +
                    ";margin-top: " +
                    String(t) +
                    ";background-position: 0px 0px;width: " +
                    String(i.nzWidth) +
                    "px;height: " +
                    String(i.nzHeight) +
                    "px;float: left;display: none;cursor:" +
                    i.options.cursor +
                    ";px solid " +
                    i.options.borderColour +
                    ";background-repeat: no-repeat;position: absolute;";
            }
            "window" == i.options.zoomType &&
                ((lensHeight =
                        i.nzHeight < i.options.zoomWindowWidth / i.widthRatio ?
                        i.nzHeight :
                        String(i.options.zoomWindowHeight / i.heightRatio)),
                    (lensWidth =
                        i.largeWidth < i.options.zoomWindowWidth ?
                        i.nzWidth :
                        i.options.zoomWindowWidth / i.widthRatio),
                    (i.lensStyle =
                        "background-position: 0px 0px;width: " +
                        String(i.options.zoomWindowWidth / i.widthRatio) +
                        "px;height: " +
                        String(i.options.zoomWindowHeight / i.heightRatio) +
                        "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
                        i.options.lensOpacity +
                        ";filter: alpha(opacity = " +
                        100 * i.options.lensOpacity +
                        "); zoom:1;width:" +
                        lensWidth +
                        "px;height:" +
                        lensHeight +
                        "px;background-color:" +
                        i.options.lensColour +
                        ";cursor:" +
                        i.options.cursor +
                        ";border: " +
                        i.options.lensBorderSize +
                        "px solid " +
                        i.options.lensBorderColour +
                        ";background-repeat: no-repeat;position: absolute;")),
                (i.tintStyle =
                    "display: block;position: absolute;background-color: " +
                    i.options.tintColour +
                    ";filter:alpha(opacity=0);opacity: 0;width: " +
                    i.nzWidth +
                    "px;height: " +
                    i.nzHeight +
                    "px;"),
                (i.lensRound = ""),
                "lens" == i.options.zoomType &&
                (i.lensStyle =
                    "background-position: 0px 0px;float: left;display: none;border: " +
                    String(i.options.borderSize) +
                    "px solid " +
                    i.options.borderColour +
                    ";width:" +
                    String(i.options.lensSize) +
                    "px;height:" +
                    String(i.options.lensSize) +
                    "px;background-repeat: no-repeat;position: absolute;"),
                "round" == i.options.lensShape &&
                (i.lensRound =
                    "border-top-left-radius: " +
                    String(i.options.lensSize / 2 + i.options.borderSize) +
                    "px;border-top-right-radius: " +
                    String(i.options.lensSize / 2 + i.options.borderSize) +
                    "px;border-bottom-left-radius: " +
                    String(i.options.lensSize / 2 + i.options.borderSize) +
                    "px;border-bottom-right-radius: " +
                    String(i.options.lensSize / 2 + i.options.borderSize) +
                    "px;"),
                (i.zoomContainer = FP(
                    '<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' +
                    i.nzOffset.left +
                    "px;top:" +
                    i.nzOffset.top +
                    "px;height:" +
                    i.nzHeight +
                    "px;width:" +
                    i.nzWidth +
                    'px;"></div>'
                )),
                FP("body").append(i.zoomContainer),
                i.options.containLensZoom &&
                "lens" == i.options.zoomType &&
                i.zoomContainer.css("overflow", "hidden"),
                "inner" != i.options.zoomType &&
                ((i.zoomLens = FP(
                            "<div class='zoomLens' style='" +
                            i.lensStyle +
                            i.lensRound +
                            "'>&nbsp;</div>"
                        )
                        .appendTo(i.zoomContainer)
                        .click(function() {
                            i.$elem.trigger("click");
                        })),
                    i.options.tint &&
                    ((i.tintContainer = FP("<div/>").addClass("tintContainer")),
                        (i.zoomTint = FP(
                            "<div class='zoomTint' style='" + i.tintStyle + "'></div>"
                        )),
                        i.zoomLens.wrap(i.tintContainer),
                        (i.zoomTintcss = i.zoomLens.after(i.zoomTint)),
                        (i.zoomTintImage = FP(
                                '<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
                                i.nzWidth +
                                "px; height: " +
                                i.nzHeight +
                                'px;" src="' +
                                i.imageSrc +
                                '">'
                            )
                            .appendTo(i.zoomLens)
                            .click(function() {
                                i.$elem.trigger("click");
                            })))),
                isNaN(i.options.zoomWindowPosition) ?
                (i.zoomWindow = FP(
                        "<div style='z-index:999;left:" +
                        i.windowOffsetLeft +
                        "px;top:" +
                        i.windowOffsetTop +
                        "px;" +
                        i.zoomWindowStyle +
                        "' class='zoomWindow'>&nbsp;</div>"
                    )
                    .appendTo("body")
                    .click(function() {
                        i.$elem.trigger("click");
                    })) :
                (i.zoomWindow = FP(
                        "<div style='z-index:999;left:" +
                        i.windowOffsetLeft +
                        "px;top:" +
                        i.windowOffsetTop +
                        "px;" +
                        i.zoomWindowStyle +
                        "' class='zoomWindow'>&nbsp;</div>"
                    )
                    .appendTo(i.zoomContainer)
                    .click(function() {
                        i.$elem.trigger("click");
                    })),
                (i.zoomWindowContainer = FP("<div/>")
                    .addClass("zoomWindowContainer")
                    .css("width", i.options.zoomWindowWidth)),
                i.zoomWindow.wrap(i.zoomWindowContainer),
                "lens" == i.options.zoomType &&
                i.zoomLens.css({ backgroundImage: "url('" + i.imageSrc + "')" }),
                "window" == i.options.zoomType &&
                i.zoomWindow.css({ backgroundImage: "url('" + i.imageSrc + "')" }),
                "inner" == i.options.zoomType &&
                i.zoomWindow.css({ backgroundImage: "url('" + i.imageSrc + "')" }),
                i.$elem.bind("touchmove", function(t) {
                    t.preventDefault(),
                        i.setPosition(
                            t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                        );
                }),
                i.zoomContainer.bind("touchmove", function(t) {
                    "inner" == i.options.zoomType && i.showHideWindow("show"),
                        t.preventDefault(),
                        i.setPosition(
                            t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                        );
                }),
                i.zoomContainer.bind("touchend", function(t) {
                    i.showHideWindow("hide"),
                        i.options.showLens && i.showHideLens("hide"),
                        i.options.tint &&
                        "inner" != i.options.zoomType &&
                        i.showHideTint("hide");
                }),
                i.$elem.bind("touchend", function(t) {
                    i.showHideWindow("hide"),
                        i.options.showLens && i.showHideLens("hide"),
                        i.options.tint &&
                        "inner" != i.options.zoomType &&
                        i.showHideTint("hide");
                }),
                i.options.showLens &&
                (i.zoomLens.bind("touchmove", function(t) {
                        t.preventDefault(),
                            i.setPosition(
                                t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]
                            );
                    }),
                    i.zoomLens.bind("touchend", function(t) {
                        i.showHideWindow("hide"),
                            i.options.showLens && i.showHideLens("hide"),
                            i.options.tint &&
                            "inner" != i.options.zoomType &&
                            i.showHideTint("hide");
                    })),
                i.$elem.bind("mousemove", function(t) {
                    0 == i.overWindow && i.setElements("show"),
                        (i.lastX === t.clientX && i.lastY === t.clientY) ||
                        (i.setPosition(t), (i.currentLoc = t)),
                        (i.lastX = t.clientX),
                        (i.lastY = t.clientY);
                }),
                i.zoomContainer.bind("mousemove", function(t) {
                    0 == i.overWindow && i.setElements("show"),
                        (i.lastX === t.clientX && i.lastY === t.clientY) ||
                        (i.setPosition(t), (i.currentLoc = t)),
                        (i.lastX = t.clientX),
                        (i.lastY = t.clientY);
                }),
                "inner" != i.options.zoomType &&
                i.zoomLens.bind("mousemove", function(t) {
                    (i.lastX === t.clientX && i.lastY === t.clientY) ||
                    (i.setPosition(t), (i.currentLoc = t)),
                    (i.lastX = t.clientX),
                    (i.lastY = t.clientY);
                }),
                i.options.tint &&
                "inner" != i.options.zoomType &&
                i.zoomTint.bind("mousemove", function(t) {
                    (i.lastX === t.clientX && i.lastY === t.clientY) ||
                    (i.setPosition(t), (i.currentLoc = t)),
                    (i.lastX = t.clientX),
                    (i.lastY = t.clientY);
                }),
                "inner" == i.options.zoomType &&
                i.zoomWindow.bind("mousemove", function(t) {
                    (i.lastX === t.clientX && i.lastY === t.clientY) ||
                    (i.setPosition(t), (i.currentLoc = t)),
                    (i.lastX = t.clientX),
                    (i.lastY = t.clientY);
                }),
                i.zoomContainer
                .add(i.$elem)
                .mouseenter(function() {
                    0 == i.overWindow && i.setElements("show");
                })
                .mouseleave(function() {
                    i.scrollLock || i.setElements("hide");
                }),
                "inner" != i.options.zoomType &&
                i.zoomWindow
                .mouseenter(function() {
                    (i.overWindow = !0), i.setElements("hide");
                })
                .mouseleave(function() {
                    i.overWindow = !1;
                }),
                (i.minZoomLevel = i.options.minZoomLevel ?
                    i.options.minZoomLevel :
                    2 * i.options.scrollZoomIncrement),
                i.options.scrollZoom &&
                i.zoomContainer
                .add(i.$elem)
                .bind(
                    "mousewheel DOMMouseScroll MozMousePixelScroll",
                    function(t) {
                        (i.scrollLock = !0),
                        clearTimeout(FP.data(this, "timer")),
                            FP.data(
                                this,
                                "timer",
                                setTimeout(function() {
                                    i.scrollLock = !1;
                                }, 250)
                            );
                        var e =
                            t.originalEvent.wheelDelta || -1 * t.originalEvent.detail;
                        return (
                            t.stopImmediatePropagation(),
                            t.stopPropagation(),
                            t.preventDefault(),
                            0 < e / 120 ?
                            i.currentZoomLevel >= i.minZoomLevel &&
                            i.changeZoomLevel(
                                i.currentZoomLevel - i.options.scrollZoomIncrement
                            ) :
                            i.options.maxZoomLevel ?
                            i.currentZoomLevel <= i.options.maxZoomLevel &&
                            i.changeZoomLevel(
                                parseFloat(i.currentZoomLevel) +
                                i.options.scrollZoomIncrement
                            ) :
                            i.changeZoomLevel(
                                parseFloat(i.currentZoomLevel) +
                                i.options.scrollZoomIncrement
                            ), !1
                        );
                    }
                );
        },
        setElements: function(t) {
            if (!this.options.zoomEnabled) return !1;
            "show" == t &&
                this.isWindowSet &&
                ("inner" == this.options.zoomType && this.showHideWindow("show"),
                    "window" == this.options.zoomType && this.showHideWindow("show"),
                    this.options.showLens && this.showHideLens("show"),
                    this.options.tint &&
                    "inner" != this.options.zoomType &&
                    this.showHideTint("show")),
                "hide" == t &&
                ("window" == this.options.zoomType && this.showHideWindow("hide"),
                    this.options.tint || this.showHideWindow("hide"),
                    this.options.showLens && this.showHideLens("hide"),
                    this.options.tint && this.showHideTint("hide"));
        },
        setPosition: function(t) {
            if (!this.options.zoomEnabled) return !1;
            (this.nzHeight = this.$elem.height()),
            (this.nzWidth = this.$elem.width()),
            (this.nzOffset = this.$elem.offset()),
            this.options.tint &&
                "inner" != this.options.zoomType &&
                (this.zoomTint.css({ top: 0 }), this.zoomTint.css({ left: 0 })),
                this.options.responsive &&
                !this.options.scrollZoom &&
                this.options.showLens &&
                ((lensHeight =
                        this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ?
                        this.nzHeight :
                        String(this.options.zoomWindowHeight / this.heightRatio)),
                    (lensWidth =
                        this.largeWidth < this.options.zoomWindowWidth ?
                        this.nzWidth :
                        this.options.zoomWindowWidth / this.widthRatio),
                    (this.widthRatio = this.largeWidth / this.nzWidth),
                    (this.heightRatio = this.largeHeight / this.nzHeight),
                    "lens" != this.options.zoomType &&
                    ((lensHeight =
                            this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ?
                            this.nzHeight :
                            String(this.options.zoomWindowHeight / this.heightRatio)),
                        (lensWidth =
                            this.options.zoomWindowWidth < this.options.zoomWindowWidth ?
                            this.nzWidth :
                            this.options.zoomWindowWidth / this.widthRatio),
                        this.zoomLens.css("width", lensWidth),
                        this.zoomLens.css("height", lensHeight),
                        this.options.tint &&
                        (this.zoomTintImage.css("width", this.nzWidth),
                            this.zoomTintImage.css("height", this.nzHeight))),
                    "lens" == this.options.zoomType &&
                    this.zoomLens.css({
                        width: String(this.options.lensSize) + "px",
                        height: String(this.options.lensSize) + "px",
                    })),
                this.zoomContainer.css({ top: this.nzOffset.top }),
                this.zoomContainer.css({ left: this.nzOffset.left }),
                (this.mouseLeft = parseInt(t.pageX - this.nzOffset.left)),
                (this.mouseTop = parseInt(t.pageY - this.nzOffset.top)),
                "window" == this.options.zoomType &&
                ((this.Etoppos = this.mouseTop < this.zoomLens.height() / 2),
                    (this.Eboppos =
                        this.mouseTop >
                        this.nzHeight -
                        this.zoomLens.height() / 2 -
                        2 * this.options.lensBorderSize),
                    (this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2),
                    (this.Eroppos =
                        this.mouseLeft >
                        this.nzWidth -
                        this.zoomLens.width() / 2 -
                        2 * this.options.lensBorderSize)),
                "inner" == this.options.zoomType &&
                ((this.Etoppos =
                        this.mouseTop < this.nzHeight / 2 / this.heightRatio),
                    (this.Eboppos =
                        this.mouseTop >
                        this.nzHeight - this.nzHeight / 2 / this.heightRatio),
                    (this.Eloppos =
                        this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio),
                    (this.Eroppos =
                        this.mouseLeft >
                        this.nzWidth -
                        this.nzWidth / 2 / this.widthRatio -
                        2 * this.options.lensBorderSize)),
                this.mouseLeft <= 0 ||
                this.mouseTop < 0 ||
                this.mouseLeft > this.nzWidth ||
                this.mouseTop > this.nzHeight ?
                this.setElements("hide") :
                (this.options.showLens &&
                    ((this.lensLeftPos = String(
                            this.mouseLeft - this.zoomLens.width() / 2
                        )),
                        (this.lensTopPos = String(
                            this.mouseTop - this.zoomLens.height() / 2
                        ))),
                    this.Etoppos && (this.lensTopPos = 0),
                    this.Eloppos &&
                    (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0),
                    "window" == this.options.zoomType &&
                    (this.Eboppos &&
                        (this.lensTopPos = Math.max(
                            this.nzHeight -
                            this.zoomLens.height() -
                            2 * this.options.lensBorderSize,
                            0
                        )),
                        this.Eroppos &&
                        (this.lensLeftPos =
                            this.nzWidth -
                            this.zoomLens.width() -
                            2 * this.options.lensBorderSize)),
                    "inner" == this.options.zoomType &&
                    (this.Eboppos &&
                        (this.lensTopPos = Math.max(
                            this.nzHeight - 2 * this.options.lensBorderSize,
                            0
                        )),
                        this.Eroppos &&
                        (this.lensLeftPos =
                            this.nzWidth -
                            this.nzWidth -
                            2 * this.options.lensBorderSize)),
                    "lens" == this.options.zoomType &&
                    ((this.windowLeftPos = String(-1 *
                            ((t.pageX - this.nzOffset.left) * this.widthRatio -
                                this.zoomLens.width() / 2)
                        )),
                        (this.windowTopPos = String(-1 *
                            ((t.pageY - this.nzOffset.top) * this.heightRatio -
                                this.zoomLens.height() / 2)
                        )),
                        this.zoomLens.css({
                            backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px",
                        }),
                        this.changeBgSize &&
                        (this.nzHeight > this.nzWidth ?
                            ("lens" == this.options.zoomType &&
                                this.zoomLens.css({
                                    "background-size": this.largeWidth / this.newvalueheight +
                                        "px " +
                                        this.largeHeight / this.newvalueheight +
                                        "px",
                                }),
                                this.zoomWindow.css({
                                    "background-size": this.largeWidth / this.newvalueheight +
                                        "px " +
                                        this.largeHeight / this.newvalueheight +
                                        "px",
                                })) :
                            ("lens" == this.options.zoomType &&
                                this.zoomLens.css({
                                    "background-size": this.largeWidth / this.newvaluewidth +
                                        "px " +
                                        this.largeHeight / this.newvaluewidth +
                                        "px",
                                }),
                                this.zoomWindow.css({
                                    "background-size": this.largeWidth / this.newvaluewidth +
                                        "px " +
                                        this.largeHeight / this.newvaluewidth +
                                        "px",
                                })),
                            (this.changeBgSize = !1)),
                        this.setWindowPostition(t)),
                    this.options.tint &&
                    "inner" != this.options.zoomType &&
                    this.setTintPosition(t),
                    "window" == this.options.zoomType && this.setWindowPostition(t),
                    "inner" == this.options.zoomType && this.setWindowPostition(t),
                    this.options.showLens &&
                    (this.fullwidth &&
                        "lens" != this.options.zoomType &&
                        (this.lensLeftPos = 0),
                        this.zoomLens.css({
                            left: this.lensLeftPos + "px",
                            top: this.lensTopPos + "px",
                        })));
        },
        showHideWindow: function(t) {
            "show" != t ||
                this.isWindowActive ||
                (this.options.zoomWindowFadeIn ?
                    this.zoomWindow
                    .stop(!0, !0, !1)
                    .fadeIn(this.options.zoomWindowFadeIn) :
                    this.zoomWindow.show(),
                    (this.isWindowActive = !0)),
                "hide" == t &&
                this.isWindowActive &&
                (this.options.zoomWindowFadeOut ?
                    this.zoomWindow
                    .stop(!0, !0)
                    .fadeOut(this.options.zoomWindowFadeOut) :
                    this.zoomWindow.hide(),
                    (this.isWindowActive = !1));
        },
        showHideLens: function(t) {
            "show" != t ||
                this.isLensActive ||
                (this.options.lensFadeIn ?
                    this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) :
                    this.zoomLens.show(),
                    (this.isLensActive = !0)),
                "hide" == t &&
                this.isLensActive &&
                (this.options.lensFadeOut ?
                    this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) :
                    this.zoomLens.hide(),
                    (this.isLensActive = !1));
        },
        showHideTint: function(t) {
            "show" != t ||
                this.isTintActive ||
                (this.options.zoomTintFadeIn ?
                    this.zoomTint
                    .css({ opacity: this.options.tintOpacity })
                    .animate()
                    .stop(!0, !0)
                    .fadeIn("slow") :
                    (this.zoomTint.css({ opacity: this.options.tintOpacity }).animate(),
                        this.zoomTint.show()),
                    (this.isTintActive = !0)),
                "hide" == t &&
                this.isTintActive &&
                (this.options.zoomTintFadeOut ?
                    this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) :
                    this.zoomTint.hide(),
                    (this.isTintActive = !1));
        },
        setLensPostition: function(t) {},
        setWindowPostition: function(t) {
            var e = this;
            if (isNaN(e.options.zoomWindowPosition))
                (e.externalContainer = FP("#" + e.options.zoomWindowPosition)),
                (e.externalContainerWidth = e.externalContainer.width()),
                (e.externalContainerHeight = e.externalContainer.height()),
                (e.externalContainerOffset = e.externalContainer.offset()),
                (e.windowOffsetTop = e.externalContainerOffset.top),
                (e.windowOffsetLeft = e.externalContainerOffset.left);
            else
                switch (e.options.zoomWindowPosition) {
                    case 1:
                        (e.windowOffsetTop = e.options.zoomWindowOffety),
                        (e.windowOffsetLeft = +e.nzWidth);
                        break;
                    case 2:
                        e.options.zoomWindowHeight > e.nzHeight &&
                            ((e.windowOffsetTop = -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2)),
                                (e.windowOffsetLeft = e.nzWidth));
                        break;
                    case 3:
                        (e.windowOffsetTop =
                            e.nzHeight - e.zoomWindow.height() - 2 * e.options.borderSize),
                        (e.windowOffsetLeft = e.nzWidth);
                        break;
                    case 4:
                        (e.windowOffsetTop = e.nzHeight), (e.windowOffsetLeft = e.nzWidth);
                        break;
                    case 5:
                        (e.windowOffsetTop = e.nzHeight),
                        (e.windowOffsetLeft =
                            e.nzWidth - e.zoomWindow.width() - 2 * e.options.borderSize);
                        break;
                    case 6:
                        e.options.zoomWindowHeight > e.nzHeight &&
                            ((e.windowOffsetTop = e.nzHeight),
                                (e.windowOffsetLeft = -1 *
                                    (e.options.zoomWindowWidth / 2 -
                                        e.nzWidth / 2 +
                                        2 * e.options.borderSize)));
                        break;
                    case 7:
                        (e.windowOffsetTop = e.nzHeight), (e.windowOffsetLeft = 0);
                        break;
                    case 8:
                        (e.windowOffsetTop = e.nzHeight),
                        (e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                        break;
                    case 9:
                        (e.windowOffsetTop =
                            e.nzHeight - e.zoomWindow.height() - 2 * e.options.borderSize),
                        (e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                        break;
                    case 10:
                        e.options.zoomWindowHeight > e.nzHeight &&
                            ((e.windowOffsetTop = -1 * (e.options.zoomWindowHeight / 2 - e.nzHeight / 2)),
                                (e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize)));
                        break;
                    case 11:
                        (e.windowOffsetTop = e.options.zoomWindowOffety),
                        (e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                        break;
                    case 12:
                        (e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                        (e.windowOffsetLeft = -1 * (e.zoomWindow.width() + 2 * e.options.borderSize));
                        break;
                    case 13:
                        (e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                        (e.windowOffsetLeft = 0);
                        break;
                    case 14:
                        e.options.zoomWindowHeight > e.nzHeight &&
                            ((e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                                (e.windowOffsetLeft = -1 *
                                    (e.options.zoomWindowWidth / 2 -
                                        e.nzWidth / 2 +
                                        2 * e.options.borderSize)));
                        break;
                    case 15:
                        (e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                        (e.windowOffsetLeft =
                            e.nzWidth - e.zoomWindow.width() - 2 * e.options.borderSize);
                        break;
                    case 16:
                        (e.windowOffsetTop = -1 * (e.zoomWindow.height() + 2 * e.options.borderSize)),
                        (e.windowOffsetLeft = e.nzWidth);
                        break;
                    default:
                        (e.windowOffsetTop = e.options.zoomWindowOffety),
                        (e.windowOffsetLeft = e.nzWidth);
                }
                (e.isWindowSet = !0),
                (e.windowOffsetTop += e.options.zoomWindowOffety),
                (e.windowOffsetLeft += e.options.zoomWindowOffetx),
                e.zoomWindow.css({ top: e.windowOffsetTop }),
                e.zoomWindow.css({ left: e.windowOffsetLeft }),
                "inner" == e.options.zoomType &&
                (e.zoomWindow.css({ top: 0 }), e.zoomWindow.css({ left: 0 })),
                (e.windowLeftPos = String(-1 *
                    ((t.pageX - e.nzOffset.left) * e.widthRatio -
                        e.zoomWindow.width() / 2)
                )),
                (e.windowTopPos = String(-1 *
                    ((t.pageY - e.nzOffset.top) * e.heightRatio -
                        e.zoomWindow.height() / 2)
                )),
                e.Etoppos && (e.windowTopPos = 0),
                e.Eloppos && (e.windowLeftPos = 0),
                e.Eboppos &&
                (e.windowTopPos = -1 * (e.largeHeight / e.currentZoomLevel - e.zoomWindow.height())),
                e.Eroppos &&
                (e.windowLeftPos = -1 * (e.largeWidth / e.currentZoomLevel - e.zoomWindow.width())),
                e.fullheight && (e.windowTopPos = 0),
                e.fullwidth && (e.windowLeftPos = 0),
                ("window" != e.options.zoomType && "inner" != e.options.zoomType) ||
                (1 == e.zoomLock &&
                    (e.widthRatio <= 1 && (e.windowLeftPos = 0),
                        e.heightRatio <= 1 && (e.windowTopPos = 0)),
                    e.largeHeight < e.options.zoomWindowHeight && (e.windowTopPos = 0),
                    e.largeWidth < e.options.zoomWindowWidth && (e.windowLeftPos = 0),
                    e.options.easing ?
                    (e.xp || (e.xp = 0),
                        e.yp || (e.yp = 0),
                        e.loop ||
                        (e.loop = setInterval(function() {
                            (e.xp += (e.windowLeftPos - e.xp) / e.options.easingAmount),
                            (e.yp += (e.windowTopPos - e.yp) / e.options.easingAmount),
                            e.scrollingLock ?
                                (clearInterval(e.loop),
                                    (e.xp = e.windowLeftPos),
                                    (e.yp = e.windowTopPos),
                                    (e.xp = -1 *
                                        ((t.pageX - e.nzOffset.left) * e.widthRatio -
                                            e.zoomWindow.width() / 2)),
                                    (e.yp = -1 *
                                        ((t.pageY - e.nzOffset.top) * e.heightRatio -
                                            e.zoomWindow.height() / 2)),
                                    e.changeBgSize &&
                                    (e.nzHeight > e.nzWidth ?
                                        ("lens" == e.options.zoomType &&
                                            e.zoomLens.css({
                                                "background-size": e.largeWidth / e.newvalueheight +
                                                    "px " +
                                                    e.largeHeight / e.newvalueheight +
                                                    "px",
                                            }),
                                            e.zoomWindow.css({
                                                "background-size": e.largeWidth / e.newvalueheight +
                                                    "px " +
                                                    e.largeHeight / e.newvalueheight +
                                                    "px",
                                            })) :
                                        ("lens" != e.options.zoomType &&
                                            e.zoomLens.css({
                                                "background-size": e.largeWidth / e.newvaluewidth +
                                                    "px " +
                                                    e.largeHeight / e.newvalueheight +
                                                    "px",
                                            }),
                                            e.zoomWindow.css({
                                                "background-size": e.largeWidth / e.newvaluewidth +
                                                    "px " +
                                                    e.largeHeight / e.newvaluewidth +
                                                    "px",
                                            })),
                                        (e.changeBgSize = !1)),
                                    e.zoomWindow.css({
                                        backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px",
                                    }),
                                    (e.scrollingLock = !1),
                                    (e.loop = !1)) :
                                (e.changeBgSize &&
                                    (e.nzHeight > e.nzWidth ?
                                        ("lens" == e.options.zoomType &&
                                            e.zoomLens.css({
                                                "background-size": e.largeWidth / e.newvalueheight +
                                                    "px " +
                                                    e.largeHeight / e.newvalueheight +
                                                    "px",
                                            }),
                                            e.zoomWindow.css({
                                                "background-size": e.largeWidth / e.newvalueheight +
                                                    "px " +
                                                    e.largeHeight / e.newvalueheight +
                                                    "px",
                                            })) :
                                        ("lens" != e.options.zoomType &&
                                            e.zoomLens.css({
                                                "background-size": e.largeWidth / e.newvaluewidth +
                                                    "px " +
                                                    e.largeHeight / e.newvaluewidth +
                                                    "px",
                                            }),
                                            e.zoomWindow.css({
                                                "background-size": e.largeWidth / e.newvaluewidth +
                                                    "px " +
                                                    e.largeHeight / e.newvaluewidth +
                                                    "px",
                                            })),
                                        (e.changeBgSize = !1)),
                                    e.zoomWindow.css({
                                        backgroundPosition: e.xp + "px " + e.yp + "px",
                                    }));
                        }, 16))) :
                    (e.changeBgSize &&
                        (e.nzHeight > e.nzWidth ?
                            ("lens" == e.options.zoomType &&
                                e.zoomLens.css({
                                    "background-size": e.largeWidth / e.newvalueheight +
                                        "px " +
                                        e.largeHeight / e.newvalueheight +
                                        "px",
                                }),
                                e.zoomWindow.css({
                                    "background-size": e.largeWidth / e.newvalueheight +
                                        "px " +
                                        e.largeHeight / e.newvalueheight +
                                        "px",
                                })) :
                            ("lens" == e.options.zoomType &&
                                e.zoomLens.css({
                                    "background-size": e.largeWidth / e.newvaluewidth +
                                        "px " +
                                        e.largeHeight / e.newvaluewidth +
                                        "px",
                                }),
                                e.largeHeight / e.newvaluewidth < e.options.zoomWindowHeight ?
                                e.zoomWindow.css({
                                    "background-size": e.largeWidth / e.newvaluewidth +
                                        "px " +
                                        e.largeHeight / e.newvaluewidth +
                                        "px",
                                }) :
                                e.zoomWindow.css({
                                    "background-size": e.largeWidth / e.newvalueheight +
                                        "px " +
                                        e.largeHeight / e.newvalueheight +
                                        "px",
                                })),
                            (e.changeBgSize = !1)),
                        e.zoomWindow.css({
                            backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px",
                        })));
        },
        setTintPosition: function(t) {
            (this.nzOffset = this.$elem.offset()),
            (this.tintpos = String(-1 * (t.pageX - this.nzOffset.left - this.zoomLens.width() / 2))),
            (this.tintposy = String(-1 * (t.pageY - this.nzOffset.top - this.zoomLens.height() / 2))),
            this.Etoppos && (this.tintposy = 0),
                this.Eloppos && (this.tintpos = 0),
                this.Eboppos &&
                (this.tintposy = -1 *
                    (this.nzHeight -
                        this.zoomLens.height() -
                        2 * this.options.lensBorderSize)),
                this.Eroppos &&
                (this.tintpos = -1 *
                    (this.nzWidth -
                        this.zoomLens.width() -
                        2 * this.options.lensBorderSize)),
                this.options.tint &&
                (this.fullheight && (this.tintposy = 0),
                    this.fullwidth && (this.tintpos = 0),
                    this.zoomTintImage.css({ left: this.tintpos + "px" }),
                    this.zoomTintImage.css({ top: this.tintposy + "px" }));
        },
        swaptheimage: function(t, e) {
            var i = this,
                n = new Image();
            i.options.loadingIcon &&
                ((i.spinner = FP(
                        "<div style=\"background: url('" +
                        i.options.loadingIcon +
                        "') no-repeat center;height:" +
                        i.nzHeight +
                        "px;width:" +
                        i.nzWidth +
                        'px;z-index: 2000;position: absolute; background-position: center center;"></div>'
                    )),
                    i.$elem.after(i.spinner)),
                i.options.onImageSwap(i.$elem),
                (n.onload = function() {
                    (i.largeWidth = n.width),
                    (i.largeHeight = n.height),
                    (i.zoomImage = e),
                    i.zoomWindow.css({
                            "background-size": i.largeWidth + "px " + i.largeHeight + "px",
                        }),
                        i.zoomWindow.css({
                            "background-size": i.largeWidth + "px " + i.largeHeight + "px",
                        }),
                        i.swapAction(t, e);
                }),
                (n.src = e);
        },
        swapAction: function(t, e) {
            var i = this,
                n = new Image();
            if (
                ((n.onload = function() {
                        (i.nzHeight = n.height),
                        (i.nzWidth = n.width),
                        i.options.onImageSwapComplete(i.$elem),
                            i.doneCallback();
                    }),
                    (n.src = t),
                    (i.currentZoomLevel = i.options.zoomLevel),
                    (i.options.maxZoomLevel = !1),
                    "lens" == i.options.zoomType &&
                    i.zoomLens.css({ backgroundImage: "url('" + e + "')" }),
                    "window" == i.options.zoomType &&
                    i.zoomWindow.css({ backgroundImage: "url('" + e + "')" }),
                    "inner" == i.options.zoomType &&
                    i.zoomWindow.css({ backgroundImage: "url('" + e + "')" }),
                    (i.currentImage = e),
                    i.options.imageCrossfade)
            ) {
                var o = i.$elem,
                    s = o.clone();
                i.$elem.attr("src", t),
                    i.$elem.after(s),
                    s.stop(!0).fadeOut(i.options.imageCrossfade, function() {
                        FP(this).remove();
                    }),
                    i.$elem.width("auto").removeAttr("width"),
                    i.$elem.height("auto").removeAttr("height"),
                    o.fadeIn(i.options.imageCrossfade),
                    i.options.tint &&
                    "inner" != i.options.zoomType &&
                    ((s = (o = i.zoomTintImage).clone()),
                        i.zoomTintImage.attr("src", e),
                        i.zoomTintImage.after(s),
                        s.stop(!0).fadeOut(i.options.imageCrossfade, function() {
                            FP(this).remove();
                        }),
                        o.fadeIn(i.options.imageCrossfade),
                        i.zoomTint.css({ height: i.$elem.height() }),
                        i.zoomTint.css({ width: i.$elem.width() })),
                    i.zoomContainer.css("height", i.$elem.height()),
                    i.zoomContainer.css("width", i.$elem.width()),
                    "inner" != i.options.zoomType ||
                    i.options.constrainType ||
                    (i.zoomWrap.parent().css("height", i.$elem.height()),
                        i.zoomWrap.parent().css("width", i.$elem.width()),
                        i.zoomWindow.css("height", i.$elem.height()),
                        i.zoomWindow.css("width", i.$elem.width()));
            } else
                i.$elem.attr("src", t),
                i.options.tint &&
                (i.zoomTintImage.attr("src", e),
                    i.zoomTintImage.attr("height", i.$elem.height()),
                    i.zoomTintImage.css({ height: i.$elem.height() }),
                    i.zoomTint.css({ height: i.$elem.height() })),
                i.zoomContainer.css("height", i.$elem.height()),
                i.zoomContainer.css("width", i.$elem.width());
            i.options.imageCrossfade &&
                (i.zoomWrap.css("height", i.$elem.height()),
                    i.zoomWrap.css("width", i.$elem.width())),
                i.options.constrainType &&
                ("height" == i.options.constrainType &&
                    (i.zoomContainer.css("height", i.options.constrainSize),
                        i.zoomContainer.css("width", "auto"),
                        i.options.imageCrossfade ?
                        (i.zoomWrap.css("height", i.options.constrainSize),
                            i.zoomWrap.css("width", "auto"),
                            (i.constwidth = i.zoomWrap.width())) :
                        (i.$elem.css("height", i.options.constrainSize),
                            i.$elem.css("width", "auto"),
                            (i.constwidth = i.$elem.width())),
                        "inner" == i.options.zoomType &&
                        (i.zoomWrap.parent().css("height", i.options.constrainSize),
                            i.zoomWrap.parent().css("width", i.constwidth),
                            i.zoomWindow.css("height", i.options.constrainSize),
                            i.zoomWindow.css("width", i.constwidth)),
                        i.options.tint &&
                        (i.tintContainer.css("height", i.options.constrainSize),
                            i.tintContainer.css("width", i.constwidth),
                            i.zoomTint.css("height", i.options.constrainSize),
                            i.zoomTint.css("width", i.constwidth),
                            i.zoomTintImage.css("height", i.options.constrainSize),
                            i.zoomTintImage.css("width", i.constwidth))),
                    "width" == i.options.constrainType &&
                    (i.zoomContainer.css("height", "auto"),
                        i.zoomContainer.css("width", i.options.constrainSize),
                        i.options.imageCrossfade ?
                        (i.zoomWrap.css("height", "auto"),
                            i.zoomWrap.css("width", i.options.constrainSize),
                            (i.constheight = i.zoomWrap.height())) :
                        (i.$elem.css("height", "auto"),
                            i.$elem.css("width", i.options.constrainSize),
                            (i.constheight = i.$elem.height())),
                        "inner" == i.options.zoomType &&
                        (i.zoomWrap.parent().css("height", i.constheight),
                            i.zoomWrap.parent().css("width", i.options.constrainSize),
                            i.zoomWindow.css("height", i.constheight),
                            i.zoomWindow.css("width", i.options.constrainSize)),
                        i.options.tint &&
                        (i.tintContainer.css("height", i.constheight),
                            i.tintContainer.css("width", i.options.constrainSize),
                            i.zoomTint.css("height", i.constheight),
                            i.zoomTint.css("width", i.options.constrainSize),
                            i.zoomTintImage.css("height", i.constheight),
                            i.zoomTintImage.css("width", i.options.constrainSize))));
        },
        doneCallback: function() {
            this.options.loadingIcon && this.spinner.hide(),
                (this.nzOffset = this.$elem.offset()),
                (this.nzWidth = this.$elem.width()),
                (this.nzHeight = this.$elem.height()),
                (this.currentZoomLevel = this.options.zoomLevel),
                (this.widthRatio = this.largeWidth / this.nzWidth),
                (this.heightRatio = this.largeHeight / this.nzHeight),
                "window" == this.options.zoomType &&
                ((lensHeight =
                        this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ?
                        this.nzHeight :
                        String(this.options.zoomWindowHeight / this.heightRatio)),
                    (lensWidth =
                        this.options.zoomWindowWidth < this.options.zoomWindowWidth ?
                        this.nzWidth :
                        this.options.zoomWindowWidth / this.widthRatio),
                    this.zoomLens &&
                    (this.zoomLens.css("width", lensWidth),
                        this.zoomLens.css("height", lensHeight)));
        },
        getCurrentImage: function() {
            return this.zoomImage;
        },
        getGalleryList: function() {
            var e = this;
            return (
                (e.gallerylist = []),
                e.options.gallery ?
                FP("#" + e.options.gallery + " a").each(function() {
                    var t = "";
                    FP(this).data("zoom-image") ?
                        (t = FP(this).data("zoom-image")) :
                        FP(this).data("image") && (t = FP(this).data("image")),
                        t == e.zoomImage ?
                        e.gallerylist.unshift({
                            href: "" + t,
                            title: FP(this).find("img").attr("title"),
                        }) :
                        e.gallerylist.push({
                            href: "" + t,
                            title: FP(this).find("img").attr("title"),
                        });
                }) :
                e.gallerylist.push({
                    href: "" + e.zoomImage,
                    title: FP(this).find("img").attr("title"),
                }),
                e.gallerylist
            );
        },
        changeZoomLevel: function(t) {
            (this.scrollingLock = !0),
            (this.newvalue = parseFloat(t).toFixed(2)),
            (newvalue = parseFloat(t).toFixed(2)),
            (maxheightnewvalue =
                this.largeHeight /
                ((this.options.zoomWindowHeight / this.nzHeight) * this.nzHeight)),
            (maxwidthtnewvalue =
                this.largeWidth /
                ((this.options.zoomWindowWidth / this.nzWidth) * this.nzWidth)),
            "inner" != this.options.zoomType &&
                (maxheightnewvalue <= newvalue ?
                    ((this.heightRatio =
                            this.largeHeight / maxheightnewvalue / this.nzHeight),
                        (this.newvalueheight = maxheightnewvalue),
                        (this.fullheight = !0)) :
                    ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
                        (this.newvalueheight = newvalue),
                        (this.fullheight = !1)),
                    maxwidthtnewvalue <= newvalue ?
                    ((this.widthRatio =
                            this.largeWidth / maxwidthtnewvalue / this.nzWidth),
                        (this.newvaluewidth = maxwidthtnewvalue),
                        (this.fullwidth = !0)) :
                    ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                        (this.newvaluewidth = newvalue),
                        (this.fullwidth = !1)),
                    "lens" == this.options.zoomType &&
                    (maxheightnewvalue <= newvalue ?
                        ((this.fullwidth = !0),
                            (this.newvaluewidth = maxheightnewvalue)) :
                        ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                            (this.newvaluewidth = newvalue),
                            (this.fullwidth = !1)))),
                "inner" == this.options.zoomType &&
                ((maxheightnewvalue = parseFloat(
                        this.largeHeight / this.nzHeight
                    ).toFixed(2)),
                    (maxwidthtnewvalue = parseFloat(
                        this.largeWidth / this.nzWidth
                    ).toFixed(2)),
                    newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
                    newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
                    maxheightnewvalue <= newvalue ?
                    ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
                        (this.newvalueheight =
                            newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
                        (this.fullheight = !0)) :
                    ((this.heightRatio = this.largeHeight / newvalue / this.nzHeight),
                        (this.newvalueheight =
                            newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue),
                        (this.fullheight = !1)),
                    maxwidthtnewvalue <= newvalue ?
                    ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                        (this.newvaluewidth =
                            newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue),
                        (this.fullwidth = !0)) :
                    ((this.widthRatio = this.largeWidth / newvalue / this.nzWidth),
                        (this.newvaluewidth = newvalue),
                        (this.fullwidth = !1))),
                (scrcontinue = !1),
                "inner" == this.options.zoomType &&
                (this.nzWidth > this.nzHeight &&
                    (this.newvaluewidth <= maxwidthtnewvalue ?
                        (scrcontinue = !0) :
                        ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0))),
                    this.nzHeight > this.nzWidth &&
                    (this.newvaluewidth <= maxwidthtnewvalue ?
                        (scrcontinue = !0) :
                        ((scrcontinue = !1), (this.fullwidth = this.fullheight = !0)))),
                "inner" != this.options.zoomType && (scrcontinue = !0),
                scrcontinue &&
                ((this.zoomLock = 0),
                    (this.changeZoom = !0),
                    this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight &&
                    ((this.currentZoomLevel = this.newvalueheight),
                        "lens" != this.options.zoomType &&
                        "inner" != this.options.zoomType &&
                        ((this.changeBgSize = !0),
                            this.zoomLens.css({
                                height: String(this.options.zoomWindowHeight / this.heightRatio) +
                                    "px",
                            })),
                        "lens" == this.options.zoomType ||
                        "inner" == this.options.zoomType) &&
                    (this.changeBgSize = !0),
                    this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth &&
                    ("inner" != this.options.zoomType &&
                        this.newvaluewidth > this.newvalueheight &&
                        (this.currentZoomLevel = this.newvaluewidth),
                        "lens" != this.options.zoomType &&
                        "inner" != this.options.zoomType &&
                        ((this.changeBgSize = !0),
                            this.zoomLens.css({
                                width: String(this.options.zoomWindowWidth / this.widthRatio) + "px",
                            })),
                        "lens" == this.options.zoomType ||
                        "inner" == this.options.zoomType) &&
                    (this.changeBgSize = !0),
                    "inner" == this.options.zoomType &&
                    ((this.changeBgSize = !0),
                        this.nzWidth > this.nzHeight &&
                        (this.currentZoomLevel = this.newvaluewidth),
                        this.nzHeight > this.nzWidth &&
                        (this.currentZoomLevel = this.newvaluewidth))),
                this.setPosition(this.currentLoc);
        },
        closeAll: function() {
            self.zoomWindow && self.zoomWindow.hide(),
                self.zoomLens && self.zoomLens.hide(),
                self.zoomTint && self.zoomTint.hide();
        },
        changeState: function(t) {
            "enable" == t && (this.options.zoomEnabled = !0),
                "disable" == t && (this.options.zoomEnabled = !1);
        },
    }),
    (FP.fn.elevateZoom = function(e) {
        return this.each(function() {
            var t = Object.create(JP);
            t.init(e, this), FP.data(this, "elevateZoom", t);
        });
    }),
    (FP.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: 0.1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: 0.4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: 0.4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: FP.noop,
        onZoomedImageLoaded: function() {},
        onImageSwap: FP.noop,
        onImageSwapComplete: FP.noop,
    }),
    (FQ = jQuery),
    (FQ.fn.airStickyBlock = function(t) {
        return (
            (FQ.airStickyBlock = function(e, t) {
                function i() {
                    (h = FQ(window).height()),
                    (u = d.height()),
                    (p = d.width()),
                    (f = d.offset().top),
                    (g = c.width()),
                    (m = c.offset().top),
                    (v = e.outerHeight(!0)),
                    (w = g),
                    (y = u + f - v),
                    (b = m + e.position().top),
                    (_ = y - m);
                }

                function n() {
                    if (((C = FQ(window).scrollTop() + l.offsetTop), l.debug)) {
                        console.clear(), console.warn("airStickyBlock debugger \n");
                        var t = {
                            windowHeight: { value: h },
                            stopBlockHeight: { value: u },
                            stopBlockWidth: { value: p },
                            stopBlockOffset: { value: f },
                            stickyParentOffset: { value: m },
                            stickyParentWidth: { value: g },
                            stickyHeight: { value: v },
                            stickyWidth: { value: w },
                            stickyStop: { value: y },
                            stickyStart: { value: b },
                            stickyAbsolute: { value: _ },
                            scrollTop: { value: C },
                        };
                        console.table(t);
                    }
                    b <= C && C <= y ?
                        s("fixed") :
                        "relative" != e.css("position") && (o(c), s("relative")),
                        b <= C && y <= C && s("absolute"),
                        y + v < C && s("relative");
                }

                function o(t) {
                    t.removeAttr("style");
                }

                function s(t) {
                    switch (t) {
                        case "fixed":
                            e.css({ position: t, top: l.offsetTop + "px" })
                                .removeClass("airSticky_absolute airSticky_relative")
                                .addClass("airSticky_fixed");
                            break;
                        case "absolute":
                            e.css({ position: t, top: _ + "px" })
                                .removeClass("airSticky_fixed airSticky_relative")
                                .addClass("airSticky_absolute");
                            break;
                        case "relative":
                            e.css({ position: "relative", top: "auto" })
                                .removeClass("airSticky_fixed airSticky_absolute")
                                .addClass("airSticky_relative");
                    }
                }

                function r() {
                    e.css({ width: w + "px" });
                }

                function a() {
                    o(e), i(), b < y && w < p && (r(), n());
                }
                var l, d, c, h, u, p, f, m, g, v, w, y, b, _, C;
                (l = FQ.extend({ debug: !1, stopBlock: ".airSticky_stop-block", offsetTop: 0 },
                    t
                )),
                (d = FQ(l.stopBlock)),
                (c = e.parent()),
                i(),
                    n(),
                    r(),
                    FQ(window).bind(
                        "resize.airStickyBlock scroll.airStickyBlock orientationchange.airStickyBlock",
                        function(t) {
                            "scroll" == t.type && b < y && w < p ? n() : a();
                        }
                    ),
                    FQ(window).bind("render.airStickyBlock", function(t) {
                        a();
                    });
            }),
            this.each(function() {
                new FQ.airStickyBlock(FQ(this), t);
            })
        );
    }),
    (hR = function(c) {
        var h,
            n,
            u,
            o,
            p,
            e,
            l = "Close",
            d = "BeforeClose",
            f = "MarkupParse",
            m = "Open",
            g = ".mfp",
            v = "mfp-ready",
            i = "mfp-removing",
            r = "mfp-prevent-close",
            t = function() {},
            a = !!window.jQuery,
            w = c(window),
            y = function(t, e) {
                h.ev.on("mfp" + t + g, e);
            },
            b = function(t, e, i, n) {
                var o = document.createElement("div");
                return (
                    (o.className = "mfp-" + t),
                    i && (o.innerHTML = i),
                    n ? e && e.appendChild(o) : ((o = c(o)), e && o.appendTo(e)),
                    o
                );
            },
            _ = function(t, e) {
                h.ev.triggerHandler("mfp" + t, e),
                    h.st.callbacks &&
                    ((t = t.charAt(0).toLowerCase() + t.slice(1)),
                        h.st.callbacks[t] &&
                        h.st.callbacks[t].apply(h, c.isArray(e) ? e : [e]));
            },
            C = function(t) {
                return (
                    (t === e && h.currTemplate.closeBtn) ||
                    ((h.currTemplate.closeBtn = c(
                            h.st.closeMarkup.replace("%title%", h.st.tClose)
                        )),
                        (e = t)),
                    h.currTemplate.closeBtn
                );
            },
            s = function() {
                c.magnificPopup.instance ||
                    ((h = new t()).init(), (c.magnificPopup.instance = h));
            };
        (t.prototype = {
            constructor: t,
            init: function() {
                var t = navigator.appVersion;
                (h.isLowIE = h.isIE8 = document.all && !document.addEventListener),
                (h.isAndroid = /android/gi.test(t)),
                (h.isIOS = /iphone|ipad|ipod/gi.test(t)),
                (h.supportsTransition = (function() {
                    var t = document.createElement("p").style,
                        e = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== t.transition) return !0;
                    for (; e.length;)
                        if (e.pop() + "Transition" in t) return !0;
                    return !1;
                })()),
                (h.probablyMobile =
                    h.isAndroid ||
                    h.isIOS ||
                    /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                        navigator.userAgent
                    )),
                (u = c(document)),
                (h.popupsCache = {});
            },
            open: function(t) {
                var e;
                if (!1 === t.isObj) {
                    (h.items = t.items.toArray()), (h.index = 0);
                    var i,
                        n = t.items;
                    for (e = 0; e < n.length; e++)
                        if (((i = n[e]).parsed && (i = i.el[0]), i === t.el[0])) {
                            h.index = e;
                            break;
                        }
                } else
                    (h.items = c.isArray(t.items) ? t.items : [t.items]),
                    (h.index = t.index || 0);
                if (!h.isOpen) {
                    (h.types = []),
                    (p = ""),
                    t.mainEl && t.mainEl.length ? (h.ev = t.mainEl.eq(0)) : (h.ev = u),
                        t.key ?
                        (h.popupsCache[t.key] || (h.popupsCache[t.key] = {}),
                            (h.currTemplate = h.popupsCache[t.key])) :
                        (h.currTemplate = {}),
                        (h.st = c.extend(!0, {}, c.magnificPopup.defaults, t)),
                        (h.fixedContentPos =
                            "auto" === h.st.fixedContentPos ?
                            !h.probablyMobile :
                            h.st.fixedContentPos),
                        h.st.modal &&
                        ((h.st.closeOnContentClick = !1),
                            (h.st.closeOnBgClick = !1),
                            (h.st.showCloseBtn = !1),
                            (h.st.enableEscapeKey = !1)),
                        h.bgOverlay ||
                        ((h.bgOverlay = b("bg").on("click" + g, function() {
                                h.close();
                            })),
                            (h.wrap = b("wrap")
                                .attr("tabindex", -1)
                                .on("click" + g, function(t) {
                                    h._checkIfClose(t.target) && h.close();
                                })),
                            (h.container = b("container", h.wrap))),
                        (h.contentContainer = b("content")),
                        h.st.preloader &&
                        (h.preloader = b("preloader", h.container, h.st.tLoading));
                    var o = c.magnificPopup.modules;
                    for (e = 0; e < o.length; e++) {
                        var s = o[e];
                        (s = s.charAt(0).toUpperCase() + s.slice(1)), h["init" + s].call(h);
                    }
                    _("BeforeOpen"),
                        h.st.showCloseBtn &&
                        (h.st.closeBtnInside ?
                            (y(f, function(t, e, i, n) {
                                    i.close_replaceWith = C(n.type);
                                }),
                                (p += " mfp-close-btn-in")) :
                            h.wrap.append(C())),
                        h.st.alignTop && (p += " mfp-align-top"),
                        h.fixedContentPos ?
                        h.wrap.css({
                            overflow: h.st.overflowY,
                            overflowX: "hidden",
                            overflowY: h.st.overflowY,
                        }) :
                        h.wrap.css({ top: w.scrollTop(), position: "absolute" }),
                        (!1 === h.st.fixedBgPos ||
                            ("auto" === h.st.fixedBgPos && !h.fixedContentPos)) &&
                        h.bgOverlay.css({ height: u.height(), position: "absolute" }),
                        h.st.enableEscapeKey &&
                        u.on("keyup" + g, function(t) {
                            27 === t.keyCode && h.close();
                        }),
                        w.on("resize" + g, function() {
                            h.updateSize();
                        }),
                        h.st.closeOnContentClick || (p += " mfp-auto-cursor"),
                        p && h.wrap.addClass(p);
                    var r = (h.wH = w.height()),
                        a = {};
                    if (h.fixedContentPos && h._hasScrollBar(r)) {
                        var l = h._getScrollbarSize();
                        l && (a.marginRight = l);
                    }
                    h.fixedContentPos &&
                        (h.isIE7 ?
                            c("body, html").css("overflow", "hidden") :
                            (a.overflow = "hidden"));
                    var d = h.st.mainClass;
                    return (
                        h.isIE7 && (d += " mfp-ie7"),
                        d && h._addClassToMFP(d),
                        h.updateItemHTML(),
                        _("BuildControls"),
                        c("html").css(a),
                        h.bgOverlay
                        .add(h.wrap)
                        .prependTo(h.st.prependTo || c(document.body)),
                        (h._lastFocusedEl = document.activeElement),
                        setTimeout(function() {
                            h.content ?
                                (h._addClassToMFP(v), h._setFocus()) :
                                h.bgOverlay.addClass(v),
                                u.on("focusin" + g, h._onFocusIn);
                        }, 16),
                        (h.isOpen = !0),
                        h.updateSize(r),
                        _(m),
                        t
                    );
                }
                h.updateItemHTML();
            },
            close: function() {
                h.isOpen &&
                    (_(d),
                        (h.isOpen = !1),
                        h.st.removalDelay && !h.isLowIE && h.supportsTransition ?
                        (h._addClassToMFP(i),
                            setTimeout(function() {
                                h._close();
                            }, h.st.removalDelay)) :
                        h._close());
            },
            _close: function() {
                _(l);
                var t = i + " " + v + " ";
                if (
                    (h.bgOverlay.detach(),
                        h.wrap.detach(),
                        h.container.empty(),
                        h.st.mainClass && (t += h.st.mainClass + " "),
                        h._removeClassFromMFP(t),
                        h.fixedContentPos)
                ) {
                    var e = { marginRight: "" };
                    h.isIE7 ? c("body, html").css("overflow", "") : (e.overflow = ""),
                        c("html").css(e);
                }
                u.off("keyup.mfp focusin" + g),
                    h.ev.off(g),
                    h.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                    h.bgOverlay.attr("class", "mfp-bg"),
                    h.container.attr("class", "mfp-container"), !h.st.showCloseBtn ||
                    (h.st.closeBtnInside && !0 !== h.currTemplate[h.currItem.type]) ||
                    (h.currTemplate.closeBtn && h.currTemplate.closeBtn.detach()),
                    h.st.autoFocusLast && h._lastFocusedEl && c(h._lastFocusedEl).focus(),
                    (h.currItem = null),
                    (h.content = null),
                    (h.currTemplate = null),
                    (h.prevHeight = 0),
                    _("AfterClose");
            },
            updateSize: function(t) {
                if (h.isIOS) {
                    var e = document.documentElement.clientWidth / window.innerWidth,
                        i = window.innerHeight * e;
                    h.wrap.css("height", i), (h.wH = i);
                } else h.wH = t || w.height();
                h.fixedContentPos || h.wrap.css("height", h.wH), _("Resize");
            },
            updateItemHTML: function() {
                var t = h.items[h.index];
                h.contentContainer.detach(),
                    h.content && h.content.detach(),
                    t.parsed || (t = h.parseEl(h.index));
                var e = t.type;
                if (
                    (_("BeforeChange", [h.currItem ? h.currItem.type : "", e]),
                        (h.currItem = t), !h.currTemplate[e])
                ) {
                    var i = !!h.st[e] && h.st[e].markup;
                    _("FirstMarkupParse", i), (h.currTemplate[e] = !i || c(i));
                }
                o && o !== t.type && h.container.removeClass("mfp-" + o + "-holder");
                var n = h["get" + e.charAt(0).toUpperCase() + e.slice(1)](
                    t,
                    h.currTemplate[e]
                );
                h.appendContent(n, e),
                    (t.preloaded = !0),
                    _("Change", t),
                    (o = t.type),
                    h.container.prepend(h.contentContainer),
                    _("AfterChange");
            },
            appendContent: function(t, e) {
                (h.content = t) ?
                h.st.showCloseBtn && h.st.closeBtnInside && !0 === h.currTemplate[e] ?
                    h.content.find(".mfp-close").length || h.content.append(C()) :
                    (h.content = t): (h.content = ""),
                    _("BeforeAppend"),
                    h.container.addClass("mfp-" + e + "-holder"),
                    h.contentContainer.append(h.content);
            },
            parseEl: function(t) {
                var e,
                    i = h.items[t];
                if (
                    (i = i.tagName ? { el: c(i) } :
                        ((e = i.type), { data: i, src: i.src })).el
                ) {
                    for (var n = h.types, o = 0; o < n.length; o++)
                        if (i.el.hasClass("mfp-" + n[o])) {
                            e = n[o];
                            break;
                        }
                        (i.src = i.el.attr("data-mfp-src")),
                    i.src || (i.src = i.el.attr("href"));
                }
                return (
                    (i.type = e || h.st.type || "inline"),
                    (i.index = t),
                    (i.parsed = !0),
                    (h.items[t] = i),
                    _("ElementParse", i),
                    h.items[t]
                );
            },
            addGroup: function(e, i) {
                var t = function(t) {
                    (t.mfpEl = this), h._openClick(t, e, i);
                };
                i || (i = {});
                var n = "click.magnificPopup";
                (i.mainEl = e),
                i.items ?
                    ((i.isObj = !0), e.off(n).on(n, t)) :
                    ((i.isObj = !1),
                        i.delegate ?
                        e.off(n).on(n, i.delegate, t) :
                        (i.items = e).off(n).on(n, t));
            },
            _openClick: function(t, e, i) {
                if (
                    (void 0 !== i.midClick ?
                        i.midClick :
                        c.magnificPopup.defaults.midClick) ||
                    !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)
                ) {
                    var n =
                        void 0 !== i.disableOn ?
                        i.disableOn :
                        c.magnificPopup.defaults.disableOn;
                    if (n)
                        if (c.isFunction(n)) {
                            if (!n.call(h)) return !0;
                        } else if (w.width() < n) return !0;
                    t.type && (t.preventDefault(), h.isOpen && t.stopPropagation()),
                        (i.el = c(t.mfpEl)),
                        i.delegate && (i.items = e.find(i.delegate)),
                        h.open(i);
                }
            },
            updateStatus: function(t, e) {
                if (h.preloader) {
                    n !== t && h.container.removeClass("mfp-s-" + n),
                        e || "loading" !== t || (e = h.st.tLoading);
                    var i = { status: t, text: e };
                    _("UpdateStatus", i),
                        (t = i.status),
                        (e = i.text),
                        h.preloader.html(e),
                        h.preloader.find("a").on("click", function(t) {
                            t.stopImmediatePropagation();
                        }),
                        h.container.addClass("mfp-s-" + t),
                        (n = t);
                }
            },
            _checkIfClose: function(t) {
                if (!c(t).hasClass(r)) {
                    var e = h.st.closeOnContentClick,
                        i = h.st.closeOnBgClick;
                    if (e && i) return !0;
                    if (!h.content ||
                        c(t).hasClass("mfp-close") ||
                        (h.preloader && t === h.preloader[0])
                    )
                        return !0;
                    if (t === h.content[0] || c.contains(h.content[0], t)) {
                        if (e) return !0;
                    } else if (i && c.contains(document, t)) return !0;
                    return !1;
                }
            },
            _addClassToMFP: function(t) {
                h.bgOverlay.addClass(t), h.wrap.addClass(t);
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), h.wrap.removeClass(t);
            },
            _hasScrollBar: function(t) {
                return (
                    (h.isIE7 ? u.height() : document.body.scrollHeight) >
                    (t || w.height())
                );
            },
            _setFocus: function() {
                (h.st.focus ? h.content.find(h.st.focus).eq(0) : h.wrap).focus();
            },
            _onFocusIn: function(t) {
                return t.target === h.wrap[0] || c.contains(h.wrap[0], t.target) ?
                    void 0 :
                    (h._setFocus(), !1);
            },
            _parseMarkup: function(o, t, e) {
                var s;
                e.data && (t = c.extend(e.data, t)),
                    _(f, [o, t, e]),
                    c.each(t, function(t, e) {
                        if (void 0 === e || !1 === e) return !0;
                        if (1 < (s = t.split("_")).length) {
                            var i = o.find(g + "-" + s[0]);
                            if (0 < i.length) {
                                var n = s[1];
                                "replaceWith" === n
                                    ?
                                    i[0] !== e[0] && i.replaceWith(e) :
                                    "img" === n ?
                                    i.is("img") ?
                                    i.attr("src", e) :
                                    i.replaceWith(
                                        c("<img>").attr("src", e).attr("class", i.attr("class"))
                                    ) :
                                    i.attr(s[1], e);
                            }
                        } else o.find(g + "-" + t).html(e);
                    });
            },
            _getScrollbarSize: function() {
                if (void 0 === h.scrollbarSize) {
                    var t = document.createElement("div");
                    (t.style.cssText =
                        "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
                    document.body.appendChild(t),
                        (h.scrollbarSize = t.offsetWidth - t.clientWidth),
                        document.body.removeChild(t);
                }
                return h.scrollbarSize;
            },
        }),
        (c.magnificPopup = {
            instance: null,
            proto: t.prototype,
            modules: [],
            open: function(t, e) {
                return (
                    s(),
                    ((t = t ? c.extend(!0, {}, t) : {}).isObj = !0),
                    (t.index = e || 0),
                    this.instance.open(t)
                );
            },
            close: function() {
                return c.magnificPopup.instance && c.magnificPopup.instance.close();
            },
            registerModule: function(t, e) {
                e.options && (c.magnificPopup.defaults[t] = e.options),
                    c.extend(this.proto, e.proto),
                    this.modules.push(t);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (c.fn.magnificPopup = function(t) {
            s();
            var e = c(this);
            if ("string" == typeof t)
                if ("open" === t) {
                    var i,
                        n = a ? e.data("magnificPopup") : e[0].magnificPopup,
                        o = parseInt(arguments[1], 10) || 0;
                    (i = n.items ?
                        n.items[o] :
                        ((i = e), n.delegate && (i = i.find(n.delegate)), i.eq(o))),
                    h._openClick({ mfpEl: i }, e, n);
                } else
                    h.isOpen && h[t].apply(h, Array.prototype.slice.call(arguments, 1));
            else
                (t = c.extend(!0, {}, t)),
                a ? e.data("magnificPopup", t) : (e[0].magnificPopup = t),
                h.addGroup(e, t);
            return e;
        });
        var T,
            k,
            S,
            x = "inline",
            z = function() {
                S && (k.after(S.addClass(T)).detach(), (S = null));
            };
        c.magnificPopup.registerModule(x, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found",
            },
            proto: {
                initInline: function() {
                    h.types.push(x),
                        y(l + "." + x, function() {
                            z();
                        });
                },
                getInline: function(t, e) {
                    if ((z(), t.src)) {
                        var i = h.st.inline,
                            n = c(t.src);
                        if (n.length) {
                            var o = n[0].parentNode;
                            o &&
                                o.tagName &&
                                (k || ((T = i.hiddenClass), (k = b(T)), (T = "mfp-" + T)),
                                    (S = n.after(k).detach().removeClass(T))),
                                h.updateStatus("ready");
                        } else h.updateStatus("error", i.tNotFound), (n = c("<div>"));
                        return (t.inlineElement = n);
                    }
                    return h.updateStatus("ready"), h._parseMarkup(e, {}, t), e;
                },
            },
        });
        var E,
            I = "ajax",
            W = function() {
                E && c(document.body).removeClass(E);
            },
            L = function() {
                W(), h.req && h.req.abort();
            };
        c.magnificPopup.registerModule(I, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.',
            },
            proto: {
                initAjax: function() {
                    h.types.push(I),
                        (E = h.st.ajax.cursor),
                        y(l + "." + I, L),
                        y("BeforeChange." + I, L);
                },
                getAjax: function(o) {
                    E && c(document.body).addClass(E), h.updateStatus("loading");
                    var t = c.extend({
                            url: o.src,
                            success: function(t, e, i) {
                                var n = { data: t, xhr: i };
                                _("ParseAjax", n),
                                    h.appendContent(c(n.data), I),
                                    (o.finished = !0),
                                    W(),
                                    h._setFocus(),
                                    setTimeout(function() {
                                        h.wrap.addClass(v);
                                    }, 16),
                                    h.updateStatus("ready"),
                                    _("AjaxContentAdded");
                            },
                            error: function() {
                                W(),
                                    (o.finished = o.loadError = !0),
                                    h.updateStatus(
                                        "error",
                                        h.st.ajax.tError.replace("%url%", o.src)
                                    );
                            },
                        },
                        h.st.ajax.settings
                    );
                    return (h.req = c.ajax(t)), "";
                },
            },
        });
        var A;
        c.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            proto: {
                initImage: function() {
                    var t = h.st.image,
                        e = ".image";
                    h.types.push("image"),
                        y(m + e, function() {
                            "image" === h.currItem.type &&
                                t.cursor &&
                                c(document.body).addClass(t.cursor);
                        }),
                        y(l + e, function() {
                            t.cursor && c(document.body).removeClass(t.cursor),
                                w.off("resize" + g);
                        }),
                        y("Resize" + e, h.resizeImage),
                        h.isLowIE && y("AfterChange", h.resizeImage);
                },
                resizeImage: function() {
                    var t = h.currItem;
                    if (t && t.img && h.st.image.verticalFit) {
                        var e = 0;
                        h.isLowIE &&
                            (e =
                                parseInt(t.img.css("padding-top"), 10) +
                                parseInt(t.img.css("padding-bottom"), 10)),
                            t.img.css("max-height", h.wH - e);
                    }
                },
                _onImageHasSize: function(t) {
                    t.img &&
                        ((t.hasSize = !0),
                            A && clearInterval(A),
                            (t.isCheckingImgSize = !1),
                            _("ImageHasSize", t),
                            t.imgHidden &&
                            (h.content && h.content.removeClass("mfp-loading"),
                                (t.imgHidden = !1)));
                },
                findImageSize: function(e) {
                    var i = 0,
                        n = e.img[0],
                        o = function(t) {
                            A && clearInterval(A),
                                (A = setInterval(function() {
                                    return 0 < n.naturalWidth ?
                                        void h._onImageHasSize(e) :
                                        (200 < i && clearInterval(A),
                                            void(3 === ++i ?
                                                o(10) :
                                                40 === i ?
                                                o(50) :
                                                100 === i && o(500)));
                                }, t));
                        };
                    o(1);
                },
                getImage: function(t, e) {
                    var i = 0,
                        n = function() {
                            t &&
                                (t.img[0].complete ?
                                    (t.img.off(".mfploader"),
                                        t === h.currItem &&
                                        (h._onImageHasSize(t), h.updateStatus("ready")),
                                        (t.hasSize = !0),
                                        (t.loaded = !0),
                                        _("ImageLoadComplete")) :
                                    ++i < 200 ?
                                    setTimeout(n, 100) :
                                    o());
                        },
                        o = function() {
                            t &&
                                (t.img.off(".mfploader"),
                                    t === h.currItem &&
                                    (h._onImageHasSize(t),
                                        h.updateStatus("error", s.tError.replace("%url%", t.src))),
                                    (t.hasSize = !0),
                                    (t.loaded = !0),
                                    (t.loadError = !0));
                        },
                        s = h.st.image,
                        r = e.find(".mfp-img");
                    if (r.length) {
                        var a = document.createElement("img");
                        (a.className = "mfp-img"),
                        t.el &&
                            t.el.find("img").length &&
                            (a.alt = t.el.find("img").attr("alt")),
                            (t.img = c(a).on("load.mfploader", n).on("error.mfploader", o)),
                            (a.src = t.src),
                            r.is("img") && (t.img = t.img.clone()),
                            0 < (a = t.img[0]).naturalWidth ?
                            (t.hasSize = !0) :
                            a.width || (t.hasSize = !1);
                    }
                    return (
                        h._parseMarkup(
                            e, {
                                title: (function(t) {
                                    if (t.data && void 0 !== t.data.title) return t.data.title;
                                    var e = h.st.image.titleSrc;
                                    if (e) {
                                        if (c.isFunction(e)) return e.call(h, t);
                                        if (t.el) return t.el.attr(e) || "";
                                    }
                                    return "";
                                })(t),
                                img_replaceWith: t.img,
                            },
                            t
                        ),
                        h.resizeImage(),
                        t.hasSize ?
                        (A && clearInterval(A),
                            t.loadError ?
                            (e.addClass("mfp-loading"),
                                h.updateStatus("error", s.tError.replace("%url%", t.src))) :
                            (e.removeClass("mfp-loading"), h.updateStatus("ready"))) :
                        (h.updateStatus("loading"),
                            (t.loading = !0),
                            t.hasSize ||
                            ((t.imgHidden = !0),
                                e.addClass("mfp-loading"),
                                h.findImageSize(t))),
                        e
                    );
                },
            },
        });
        var O;
        c.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img");
                },
            },
            proto: {
                initZoom: function() {
                    var t,
                        s = h.st.zoom,
                        e = ".zoom";
                    if (s.enabled && h.supportsTransition) {
                        var i,
                            n,
                            o = s.duration,
                            r = function(t) {
                                var e = t
                                    .clone()
                                    .removeAttr("style")
                                    .removeAttr("class")
                                    .addClass("mfp-animated-image"),
                                    i = "all " + s.duration / 1e3 + "s " + s.easing,
                                    n = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden",
                                    },
                                    o = "transition";
                                return (
                                    (n["-webkit-" + o] =
                                        n["-moz-" + o] =
                                        n["-o-" + o] =
                                        n[o] =
                                        i),
                                    e.css(n),
                                    e
                                );
                            },
                            a = function() {
                                h.content.css("visibility", "visible");
                            };
                        y("BuildControls" + e, function() {
                                if (h._allowZoom()) {
                                    if (
                                        (clearTimeout(i),
                                            h.content.css("visibility", "hidden"), !(t = h._getItemToZoom()))
                                    )
                                        return void a();
                                    (n = r(t)).css(h._getOffset()),
                                        h.wrap.append(n),
                                        (i = setTimeout(function() {
                                            n.css(h._getOffset(!0)),
                                                (i = setTimeout(function() {
                                                    a(),
                                                        setTimeout(function() {
                                                            n.remove(), (t = n = null), _("ZoomAnimationEnded");
                                                        }, 16);
                                                }, o));
                                        }, 16));
                                }
                            }),
                            y(d + e, function() {
                                if (h._allowZoom()) {
                                    if ((clearTimeout(i), (h.st.removalDelay = o), !t)) {
                                        if (!(t = h._getItemToZoom())) return;
                                        n = r(t);
                                    }
                                    n.css(h._getOffset(!0)),
                                        h.wrap.append(n),
                                        h.content.css("visibility", "hidden"),
                                        setTimeout(function() {
                                            n.css(h._getOffset());
                                        }, 16);
                                }
                            }),
                            y(l + e, function() {
                                h._allowZoom() && (a(), n && n.remove(), (t = null));
                            });
                    }
                },
                _allowZoom: function() {
                    return "image" === h.currItem.type;
                },
                _getItemToZoom: function() {
                    return !!h.currItem.hasSize && h.currItem.img;
                },
                _getOffset: function(t) {
                    var e,
                        i = (e = t ?
                            h.currItem.img :
                            h.st.zoom.opener(h.currItem.el || h.currItem)).offset(),
                        n = parseInt(e.css("padding-top"), 10),
                        o = parseInt(e.css("padding-bottom"), 10);
                    i.top -= c(window).scrollTop() - n;
                    var s = {
                        width: e.width(),
                        height: (a ? e.innerHeight() : e[0].offsetHeight) - o - n,
                    };
                    return (
                        void 0 === O &&
                        (O = void 0 !== document.createElement("p").style.MozTransform),
                        O ?
                        (s["-moz-transform"] = s.transform =
                            "translate(" + i.left + "px," + i.top + "px)") :
                        ((s.left = i.left), (s.top = i.top)),
                        s
                    );
                },
            },
        });
        var D = "iframe",
            $ = function(t) {
                if (h.currTemplate[D]) {
                    var e = h.currTemplate[D].find("iframe");
                    e.length &&
                        (t || (e[0].src = "//about:blank"),
                            h.isIE8 && e.css("display", t ? "block" : "none"));
                }
            };
        c.magnificPopup.registerModule(D, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1",
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1",
                    },
                    gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
                },
            },
            proto: {
                initIframe: function() {
                    h.types.push(D),
                        y("BeforeChange", function(t, e, i) {
                            e !== i && (e === D ? $() : i === D && $(!0));
                        }),
                        y(l + "." + D, function() {
                            $();
                        });
                },
                getIframe: function(t, e) {
                    var i = t.src,
                        n = h.st.iframe;
                    c.each(n.patterns, function() {
                        return -1 < i.indexOf(this.index) ?
                            (this.id &&
                                (i =
                                    "string" == typeof this.id ?
                                    i.substr(
                                        i.lastIndexOf(this.id) + this.id.length,
                                        i.length
                                    ) :
                                    this.id.call(this, i)),
                                (i = this.src.replace("%id%", i)), !1) :
                            void 0;
                    });
                    var o = {};
                    return (
                        n.srcAction && (o[n.srcAction] = i),
                        h._parseMarkup(e, o, t),
                        h.updateStatus("ready"),
                        e
                    );
                },
            },
        });
        var P = function(t) {
                var e = h.items.length;
                return e - 1 < t ? t - e : t < 0 ? e + t : t;
            },
            F = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
            };
        c.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            proto: {
                initGallery: function() {
                    var s = h.st.gallery,
                        t = ".mfp-gallery";
                    return (
                        (h.direction = !0), !(!s || !s.enabled) &&
                        ((p += " mfp-gallery"),
                            y(m + t, function() {
                                s.navigateByImgClick &&
                                    h.wrap.on("click" + t, ".mfp-img", function() {
                                        return 1 < h.items.length ? (h.next(), !1) : void 0;
                                    }),
                                    u.on("keydown" + t, function(t) {
                                        37 === t.keyCode ? h.prev() : 39 === t.keyCode && h.next();
                                    });
                            }),
                            y("UpdateStatus" + t, function(t, e) {
                                e.text &&
                                    (e.text = F(e.text, h.currItem.index, h.items.length));
                            }),
                            y(f + t, function(t, e, i, n) {
                                var o = h.items.length;
                                i.counter = 1 < o ? F(s.tCounter, n.index, o) : "";
                            }),
                            y("BuildControls" + t, function() {
                                if (1 < h.items.length && s.arrows && !h.arrowLeft) {
                                    var t = s.arrowMarkup,
                                        e = (h.arrowLeft = c(
                                            t.replace(/%title%/gi, s.tPrev).replace(/%dir%/gi, "left")
                                        ).addClass(r)),
                                        i = (h.arrowRight = c(
                                            t
                                            .replace(/%title%/gi, s.tNext)
                                            .replace(/%dir%/gi, "right")
                                        ).addClass(r));
                                    e.click(function() {
                                            h.prev();
                                        }),
                                        i.click(function() {
                                            h.next();
                                        }),
                                        h.container.append(e.add(i));
                                }
                            }),
                            y("Change" + t, function() {
                                h._preloadTimeout && clearTimeout(h._preloadTimeout),
                                    (h._preloadTimeout = setTimeout(function() {
                                        h.preloadNearbyImages(), (h._preloadTimeout = null);
                                    }, 16));
                            }),
                            void y(l + t, function() {
                                u.off(t),
                                    h.wrap.off("click" + t),
                                    (h.arrowRight = h.arrowLeft = null);
                            }))
                    );
                },
                next: function() {
                    (h.direction = !0), (h.index = P(h.index + 1)), h.updateItemHTML();
                },
                prev: function() {
                    (h.direction = !1), (h.index = P(h.index - 1)), h.updateItemHTML();
                },
                goTo: function(t) {
                    (h.direction = t >= h.index), (h.index = t), h.updateItemHTML();
                },
                preloadNearbyImages: function() {
                    var t,
                        e = h.st.gallery.preload,
                        i = Math.min(e[0], h.items.length),
                        n = Math.min(e[1], h.items.length);
                    for (t = 1; t <= (h.direction ? n : i); t++)
                        h._preloadItem(h.index + t);
                    for (t = 1; t <= (h.direction ? i : n); t++)
                        h._preloadItem(h.index - t);
                },
                _preloadItem: function(t) {
                    if (((t = P(t)), !h.items[t].preloaded)) {
                        var e = h.items[t];
                        e.parsed || (e = h.parseEl(t)),
                            _("LazyLoad", e),
                            "image" === e.type &&
                            (e.img = c('<img class="mfp-img" />')
                                .on("load.mfploader", function() {
                                    e.hasSize = !0;
                                })
                                .on("error.mfploader", function() {
                                    (e.hasSize = !0), (e.loadError = !0), _("LazyLoadError", e);
                                })
                                .attr("src", e.src)),
                            (e.preloaded = !0);
                    }
                },
            },
        });
        var H = "retina";
        c.magnificPopup.registerModule(H, {
                options: {
                    replaceSrc: function(t) {
                        return t.src.replace(/\.\w+$/, function(t) {
                            return "@2x" + t;
                        });
                    },
                    ratio: 1,
                },
                proto: {
                    initRetina: function() {
                        if (1 < window.devicePixelRatio) {
                            var i = h.st.retina,
                                n = i.ratio;
                            1 < (n = isNaN(n) ? n() : n) &&
                                (y("ImageHasSize." + H, function(t, e) {
                                        e.img.css({
                                            "max-width": e.img[0].naturalWidth / n,
                                            width: "100%",
                                        });
                                    }),
                                    y("ElementParse." + H, function(t, e) {
                                        e.src = i.replaceSrc(e, n);
                                    }));
                        }
                    },
                },
            }),
            s();
    }),
    "function" == typeof define && define.amd ?
    define(["jquery"], hR) :
    hR(
        "object" == typeof exports ?
        require("jquery") :
        window.jQuery || window.Zepto
    ),
    (function(O) {
        "use strict";
        var v = {};
        (v.fileapi = void 0 !== O("<input type='file'/>").get(0).files),
        (v.formdata = void 0 !== window.FormData);
        var D = !!O.fn.prop;

        function i(t) {
            var e = t.data;
            t.isDefaultPrevented() || (t.preventDefault(), O(this).ajaxSubmit(e));
        }

        function n(t) {
            var e = t.target,
                i = O(e);
            if (!i.is("[type=submit],[type=image]")) {
                var n = i.closest("[type=submit]");
                if (0 === n.length) return;
                e = n[0];
            }
            var o = this;
            if ("image" == (o.clk = e).type)
                if (void 0 !== t.offsetX)(o.clk_x = t.offsetX), (o.clk_y = t.offsetY);
                else if ("function" == typeof O.fn.offset) {
                var s = i.offset();
                (o.clk_x = t.pageX - s.left), (o.clk_y = t.pageY - s.top);
            } else
                (o.clk_x = t.pageX - e.offsetLeft), (o.clk_y = t.pageY - e.offsetTop);
            setTimeout(function() {
                o.clk = o.clk_x = o.clk_y = null;
            }, 100);
        }

        function $() {
            if (O.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ?
                    window.console.log(t) :
                    window.opera && window.opera.postError && window.opera.postError(t);
            }
        }
        (O.fn.attr2 = function() {
            if (!D) return this.attr.apply(this, arguments);
            var t = this.prop.apply(this, arguments);
            return (t && t.jquery) || "string" == typeof t ?
                t :
                this.attr.apply(this, arguments);
        }),
        (O.fn.ajaxSubmit = function(I) {
            if (!this.length)
                return (
                    $("ajaxSubmit: skipping submit process - no element selected"), this
                );
            var W,
                t,
                e,
                L = this;
            "function" == typeof I && (I = { success: I }),
                (W = this.attr2("method")),
                (e =
                    (e =
                        "string" == typeof(t = this.attr2("action")) ? O.trim(t) : "") ||
                    window.location.href ||
                    "") && (e = (e.match(/^([^#]+)/) || [])[1]),
                (I = O.extend(!0, {
                        url: e,
                        success: O.ajaxSettings.success,
                        type: W || "GET",
                        iframeSrc: /^https/i.test(window.location.href || "") ?
                            "javascript:false" : "about:blank",
                    },
                    I
                ));
            var i = {};
            if ((this.trigger("form-pre-serialize", [this, I, i]), i.veto))
                return (
                    $("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
                );
            if (I.beforeSerialize && !1 === I.beforeSerialize(this, I))
                return (
                    $("ajaxSubmit: submit aborted via beforeSerialize callback"), this
                );
            var n = I.traditional;
            void 0 === n && (n = O.ajaxSettings.traditional);
            var o,
                A = [],
                s = this.formToArray(I.semantic, A);
            if (
                (I.data && ((I.extraData = I.data), (o = O.param(I.data, n))),
                    I.beforeSubmit && !1 === I.beforeSubmit(s, this, I))
            )
                return (
                    $("ajaxSubmit: submit aborted via beforeSubmit callback"), this
                );
            if ((this.trigger("form-submit-validate", [s, this, I, i]), i.veto))
                return (
                    $("ajaxSubmit: submit vetoed via form-submit-validate trigger"),
                    this
                );
            var r = O.param(s, n);
            o && (r = r ? r + "&" + o : o),
                "GET" == I.type.toUpperCase() ?
                ((I.url += (0 <= I.url.indexOf("?") ? "&" : "?") + r),
                    (I.data = null)) :
                (I.data = r);
            var a = [];
            if (
                (I.resetForm &&
                    a.push(function() {
                        L.resetForm();
                    }),
                    I.clearForm &&
                    a.push(function() {
                        L.clearForm(I.includeHidden);
                    }), !I.dataType && I.target)
            ) {
                var l = I.success || function() {};
                a.push(function(t) {
                    var e = I.replaceTarget ? "replaceWith" : "html";
                    O(I.target)[e](t).each(l, arguments);
                });
            } else I.success && a.push(I.success);
            I.success = function(t, e, i) {
                for (var n = I.context || this, o = 0, s = a.length; o < s; o++)
                    a[o].apply(n, [t, e, i || L, L]);
            };
            var d = 0 < O('input[type=file]:enabled[value!=""]', this).length,
                c = "multipart/form-data",
                h = L.attr("enctype") == c || L.attr("encoding") == c,
                u = v.fileapi && v.formdata;
            $("fileAPI :" + u);
            var p,
                f = (d || h) && !u;
            !1 !== I.iframe && (I.iframe || f) ?
                I.closeKeepAlive ?
                O.get(I.closeKeepAlive, function() {
                    p = g(s);
                }) :
                (p = g(s)) :
                (p =
                    (d || h) && u ?
                    (function(t) {
                        for (var i = new FormData(), e = 0; e < t.length; e++)
                            i.append(t[e].name, t[e].value);
                        if (I.extraData) {
                            var n = (function(t) {
                                var e,
                                    i,
                                    n = O.param(t).split("&"),
                                    o = n.length,
                                    s = [];
                                for (e = 0; e < o; e++)
                                    (n[e] = n[e].replace(/\+/g, " ")),
                                    (i = n[e].split("=")),
                                    s.push([
                                        decodeURIComponent(i[0]),
                                        decodeURIComponent(i[1]),
                                    ]);
                                return s;
                            })(I.extraData);
                            for (e = 0; e < n.length; e++)
                                n[e] && i.append(n[e][0], n[e][1]);
                        }
                        I.data = null;
                        var o = O.extend(!0, {}, O.ajaxSettings, I, {
                            contentType: !1,
                            processData: !1,
                            cache: !1,
                            type: W || "POST",
                        });
                        I.uploadProgress &&
                            (o.xhr = function() {
                                var t = jQuery.ajaxSettings.xhr();
                                return (
                                    t.upload &&
                                    t.upload.addEventListener(
                                        "progress",
                                        function(t) {
                                            var e = 0,
                                                i = t.loaded || t.position,
                                                n = t.total;
                                            t.lengthComputable &&
                                                (e = Math.ceil((i / n) * 100)),
                                                I.uploadProgress(t, i, n, e);
                                        }, !1
                                    ),
                                    t
                                );
                            });
                        o.data = null;
                        var s = o.beforeSend;
                        return (
                            (o.beforeSend = function(t, e) {
                                (e.data = i), s && s.call(this, t, e);
                            }),
                            O.ajax(o)
                        );
                    })(s) :
                    O.ajax(I)),
                L.removeData("jqxhr").data("jqxhr", p);
            for (var m = 0; m < A.length; m++) A[m] = null;
            return this.trigger("form-submit-notify", [this, I]), this;

            function g(t) {
                var e,
                    i,
                    c,
                    h,
                    o,
                    u,
                    p,
                    f,
                    n,
                    s,
                    m,
                    g,
                    r = L[0],
                    v = O.Deferred();
                if (t)
                    for (i = 0; i < A.length; i++)
                        (e = O(A[i])),
                        D ? e.prop("disabled", !1) : e.removeAttr("disabled");
                if (
                    (((c = O.extend(!0, {}, O.ajaxSettings, I)).context =
                            c.context || c),
                        (o = "jqFormIO" + new Date().getTime()),
                        c.iframeTarget ?
                        (s = (u = O(c.iframeTarget)).attr2("name")) ?
                        (o = s) :
                        u.attr2("name", o) :
                        (u = O(
                            '<iframe name="' + o + '" src="' + c.iframeSrc + '" />'
                        )).css({
                            position: "absolute",
                            top: "-1000px",
                            left: "-1000px",
                        }),
                        (p = u[0]),
                        (f = {
                            aborted: 0,
                            responseText: null,
                            responseXML: null,
                            status: 0,
                            statusText: "n/a",
                            getAllResponseHeaders: function() {},
                            getResponseHeader: function() {},
                            setRequestHeader: function() {},
                            abort: function(t) {
                                var e = "timeout" === t ? "timeout" : "aborted";
                                $("aborting upload... " + e), (this.aborted = 1);
                                try {
                                    p.contentWindow.document.execCommand &&
                                        p.contentWindow.document.execCommand("Stop");
                                } catch (t) {}
                                u.attr("src", c.iframeSrc),
                                    (f.error = e),
                                    c.error && c.error.call(c.context, f, e, t),
                                    h && O.event.trigger("ajaxError", [f, c, e]),
                                    c.complete && c.complete.call(c.context, f, e);
                            },
                        }),
                        (h = c.global) && 0 == O.active++ && O.event.trigger("ajaxStart"),
                        h && O.event.trigger("ajaxSend", [f, c]),
                        c.beforeSend && !1 === c.beforeSend.call(c.context, f, c))
                )
                    return c.global && O.active--, v.reject(), v;
                if (f.aborted) return v.reject(), v;
                (n = r.clk) &&
                (s = n.name) &&
                !n.disabled &&
                    ((c.extraData = c.extraData || {}),
                        (c.extraData[s] = n.value),
                        "image" == n.type &&
                        ((c.extraData[s + ".x"] = r.clk_x),
                            (c.extraData[s + ".y"] = r.clk_y)));
                var w = 1,
                    y = 2;

                function b(e) {
                    var i = null;
                    try {
                        e.contentWindow && (i = e.contentWindow.document);
                    } catch (t) {
                        $("cannot get iframe.contentWindow document: " + t);
                    }
                    if (i) return i;
                    try {
                        i = e.contentDocument ? e.contentDocument : e.document;
                    } catch (t) {
                        $("cannot get iframe.contentDocument: " + t), (i = e.document);
                    }
                    return i;
                }
                var a = O("meta[name=csrf-token]").attr("content"),
                    l = O("meta[name=csrf-param]").attr("content");

                function d() {
                    var t = L.attr2("target"),
                        e = L.attr2("action");
                    r.setAttribute("target", o),
                        W || r.setAttribute("method", "POST"),
                        e != c.url && r.setAttribute("action", c.url),
                        c.skipEncodingOverride ||
                        (W && !/post/i.test(W)) ||
                        L.attr({
                            encoding: "multipart/form-data",
                            enctype: "multipart/form-data",
                        }),
                        c.timeout &&
                        (g = setTimeout(function() {
                            (m = !0), S(w);
                        }, c.timeout));
                    var i = [];
                    try {
                        if (c.extraData)
                            for (var n in c.extraData)
                                c.extraData.hasOwnProperty(n) &&
                                (O.isPlainObject(c.extraData[n]) &&
                                    c.extraData[n].hasOwnProperty("name") &&
                                    c.extraData[n].hasOwnProperty("value") ?
                                    i.push(
                                        O(
                                            '<input type="hidden" name="' +
                                            c.extraData[n].name +
                                            '">'
                                        )
                                        .val(c.extraData[n].value)
                                        .appendTo(r)[0]
                                    ) :
                                    i.push(
                                        O('<input type="hidden" name="' + n + '">')
                                        .val(c.extraData[n])
                                        .appendTo(r)[0]
                                    ));
                        c.iframeTarget ||
                            (u.appendTo("body"),
                                p.attachEvent ?
                                p.attachEvent("onload", S) :
                                p.addEventListener("load", S, !1)),
                            setTimeout(function t() {
                                try {
                                    var e = b(p).readyState;
                                    $("state = " + e),
                                        e &&
                                        "uninitialized" == e.toLowerCase() &&
                                        setTimeout(t, 50);
                                } catch (t) {
                                    $("Server abort: ", t, " (", t.name, ")"),
                                        S(y),
                                        g && clearTimeout(g),
                                        (g = void 0);
                                }
                            }, 15);
                        try {
                            r.submit();
                        } catch (t) {
                            document.createElement("form").submit.apply(r);
                        }
                    } finally {
                        r.setAttribute("action", e),
                            t ? r.setAttribute("target", t) : L.removeAttr("target"),
                            O(i).remove();
                    }
                }
                l && a && ((c.extraData = c.extraData || {}), (c.extraData[l] = a)),
                    c.forceSync ? d() : setTimeout(d, 10);
                var _,
                    C,
                    T,
                    k = 50;

                function S(t) {
                    if (!f.aborted && !T) {
                        if (
                            ((C = b(p)) || ($("cannot access response document"), (t = y)),
                                t === w && f)
                        )
                            return f.abort("timeout"), void v.reject(f, "timeout");
                        if (t == y && f)
                            return (
                                f.abort("server abort"),
                                void v.reject(f, "error", "server abort")
                            );
                        if ((C && C.location.href != c.iframeSrc) || m) {
                            p.detachEvent ?
                                p.detachEvent("onload", S) :
                                p.removeEventListener("load", S, !1);
                            var e,
                                i = "success";
                            try {
                                if (m) throw "timeout";
                                var n = "xml" == c.dataType || C.XMLDocument || O.isXMLDoc(C);
                                if (
                                    ($("isXml=" + n), !n &&
                                        window.opera &&
                                        (null === C.body || !C.body.innerHTML) &&
                                        --k)
                                )
                                    return (
                                        $("requeing onLoad callback, DOM not available"),
                                        void setTimeout(S, 250)
                                    );
                                var o = C.body ? C.body : C.documentElement;
                                (f.responseText = o ? o.innerHTML : null),
                                (f.responseXML = C.XMLDocument ? C.XMLDocument : C),
                                n && (c.dataType = "xml"),
                                    (f.getResponseHeader = function(t) {
                                        return { "content-type": c.dataType }[t];
                                    }),
                                    o &&
                                    ((f.status =
                                            Number(o.getAttribute("status")) || f.status),
                                        (f.statusText =
                                            o.getAttribute("statusText") || f.statusText));
                                var s = (c.dataType || "").toLowerCase(),
                                    r = /(json|script|text)/.test(s);
                                if (r || c.textarea) {
                                    var a = C.getElementsByTagName("textarea")[0];
                                    if (a)
                                        (f.responseText = a.value),
                                        (f.status =
                                            Number(a.getAttribute("status")) || f.status),
                                        (f.statusText =
                                            a.getAttribute("statusText") || f.statusText);
                                    else if (r) {
                                        var l = C.getElementsByTagName("pre")[0],
                                            d = C.getElementsByTagName("body")[0];
                                        l
                                            ?
                                            (f.responseText = l.textContent ?
                                                l.textContent :
                                                l.innerText) :
                                            d &&
                                            (f.responseText = d.textContent ?
                                                d.textContent :
                                                d.innerText);
                                    }
                                } else
                                    "xml" == s &&
                                    !f.responseXML &&
                                    f.responseText &&
                                    (f.responseXML = x(f.responseText));
                                try {
                                    _ = E(f, s, c);
                                } catch (t) {
                                    (i = "parsererror"), (f.error = e = t || i);
                                }
                            } catch (t) {
                                $("error caught: ", t), (i = "error"), (f.error = e = t || i);
                            }
                            f.aborted && ($("upload aborted"), (i = null)),
                                f.status &&
                                (i =
                                    (200 <= f.status && f.status < 300) || 304 === f.status ?
                                    "success" :
                                    "error"),
                                "success" === i ?
                                (c.success && c.success.call(c.context, _, "success", f),
                                    v.resolve(f.responseText, "success", f),
                                    h && O.event.trigger("ajaxSuccess", [f, c])) :
                                i &&
                                (void 0 === e && (e = f.statusText),
                                    c.error && c.error.call(c.context, f, i, e),
                                    v.reject(f, "error", e),
                                    h && O.event.trigger("ajaxError", [f, c, e])),
                                h && O.event.trigger("ajaxComplete", [f, c]),
                                h && !--O.active && O.event.trigger("ajaxStop"),
                                c.complete && c.complete.call(c.context, f, i),
                                (T = !0),
                                c.timeout && clearTimeout(g),
                                setTimeout(function() {
                                    c.iframeTarget || u.remove(), (f.responseXML = null);
                                }, 100);
                        }
                    }
                }
                var x =
                    O.parseXML ||
                    function(t, e) {
                        return (
                            window.ActiveXObject ?
                            (((e = new ActiveXObject("Microsoft.XMLDOM")).async =
                                    "false"),
                                e.loadXML(t)) :
                            (e = new DOMParser().parseFromString(t, "text/xml")),
                            e &&
                            e.documentElement &&
                            "parsererror" != e.documentElement.nodeName ?
                            e :
                            null
                        );
                    },
                    z =
                    O.parseJSON ||
                    function(t) {
                        return window.eval("(" + t + ")");
                    },
                    E = function(t, e, i) {
                        var n = t.getResponseHeader("content-type") || "",
                            o = "xml" === e || (!e && 0 <= n.indexOf("xml")),
                            s = o ? t.responseXML : t.responseText;
                        return (
                            o &&
                            "parsererror" === s.documentElement.nodeName &&
                            O.error &&
                            O.error("parsererror"),
                            i && i.dataFilter && (s = i.dataFilter(s, e)),
                            "string" == typeof s &&
                            ("json" === e || (!e && 0 <= n.indexOf("json")) ?
                                (s = z(s)) :
                                ("script" === e ||
                                    (!e && 0 <= n.indexOf("javascript"))) &&
                                O.globalEval(s)),
                            s
                        );
                    };
                return v;
            }
        }),
        (O.fn.ajaxForm = function(t) {
            if (
                (((t = t || {}).delegation = t.delegation && O.isFunction(O.fn.on)),
                    t.delegation || 0 !== this.length)
            )
                return t.delegation ?
                    (O(document)
                        .off("submit.form-plugin", this.selector, i)
                        .off("click.form-plugin", this.selector, n)
                        .on("submit.form-plugin", this.selector, t, i)
                        .on("click.form-plugin", this.selector, t, n),
                        this) :
                    this.ajaxFormUnbind()
                    .bind("submit.form-plugin", t, i)
                    .bind("click.form-plugin", t, n);
            var e = { s: this.selector, c: this.context };
            return (!O.isReady && e.s ?
                ($("DOM not ready, queuing ajaxForm"),
                    O(function() {
                        O(e.s, e.c).ajaxForm(t);
                    })) :
                $(
                    "terminating; zero elements found by selector" +
                    (O.isReady ? "" : " (DOM not ready)")
                ),
                this
            );
        }),
        (O.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin");
        }),
        (O.fn.formToArray = function(t, e) {
            var i = [];
            if (0 === this.length) return i;
            var n,
                o,
                s,
                r,
                a,
                l,
                d,
                c = this[0],
                h = t ? c.getElementsByTagName("*") : c.elements;
            if (!h) return i;
            for (n = 0, l = h.length; n < l; n++)
                if ((s = (a = h[n]).name) && !a.disabled)
                    if (t && c.clk && "image" == a.type)
                        c.clk == a &&
                        (i.push({ name: s, value: O(a).val(), type: a.type }),
                            i.push({ name: s + ".x", value: c.clk_x }, { name: s + ".y", value: c.clk_y }));
                    else if ((r = O.fieldValue(a, !0)) && r.constructor == Array)
                for (e && e.push(a), o = 0, d = r.length; o < d; o++)
                    i.push({ name: s, value: r[o] });
            else if (v.fileapi && "file" == a.type) {
                e && e.push(a);
                var u = a.files;
                if (u.length)
                    for (o = 0; o < u.length; o++)
                        i.push({ name: s, value: u[o], type: a.type });
                else i.push({ name: s, value: "", type: a.type });
            } else
                null != r &&
                (e && e.push(a),
                    i.push({
                        name: s,
                        value: r,
                        type: a.type,
                        required: a.required,
                    }));
            if (!t && c.clk) {
                var p = O(c.clk),
                    f = p[0];
                (s = f.name) &&
                !f.disabled &&
                    "image" == f.type &&
                    (i.push({ name: s, value: p.val() }),
                        i.push({ name: s + ".x", value: c.clk_x }, { name: s + ".y", value: c.clk_y }));
            }
            return i;
        }),
        (O.fn.formSerialize = function(t) {
            return O.param(this.formToArray(t));
        }),
        (O.fn.fieldSerialize = function(o) {
            var s = [];
            return (
                this.each(function() {
                    var t = this.name;
                    if (t) {
                        var e = O.fieldValue(this, o);
                        if (e && e.constructor == Array)
                            for (var i = 0, n = e.length; i < n; i++)
                                s.push({ name: t, value: e[i] });
                        else null != e && s.push({ name: this.name, value: e });
                    }
                }),
                O.param(s)
            );
        }),
        (O.fn.fieldValue = function(t) {
            for (var e = [], i = 0, n = this.length; i < n; i++) {
                var o = this[i],
                    s = O.fieldValue(o, t);
                null == s ||
                    (s.constructor == Array && !s.length) ||
                    (s.constructor == Array ? O.merge(e, s) : e.push(s));
            }
            return e;
        }),
        (O.fieldValue = function(t, e) {
            var i = t.name,
                n = t.type,
                o = t.tagName.toLowerCase();
            if (
                (void 0 === e && (e = !0),
                    e &&
                    (!i ||
                        t.disabled ||
                        "reset" == n ||
                        "button" == n ||
                        (("checkbox" == n || "radio" == n) && !t.checked) ||
                        (("submit" == n || "image" == n) && t.form && t.form.clk != t) ||
                        ("select" == o && -1 == t.selectedIndex)))
            )
                return null;
            if ("select" != o) return O(t).val();
            var s = t.selectedIndex;
            if (s < 0) return null;
            for (
                var r = [],
                    a = t.options,
                    l = "select-one" == n,
                    d = l ? s + 1 : a.length,
                    c = l ? s : 0; c < d; c++
            ) {
                var h = a[c];
                if (h.selected) {
                    var u = h.value;
                    if (
                        (u ||
                            (u =
                                h.attributes &&
                                h.attributes.value &&
                                !h.attributes.value.specified ?
                                h.text :
                                h.value),
                            l)
                    )
                        return u;
                    r.push(u);
                }
            }
            return r;
        }),
        (O.fn.clearForm = function(t) {
            return this.each(function() {
                O("input,select,textarea", this).clearFields(t);
            });
        }),
        (O.fn.clearFields = O.fn.clearInputs =
            function(i) {
                var n =
                    /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
                return this.each(function() {
                    var t = this.type,
                        e = this.tagName.toLowerCase();
                    n.test(t) || "textarea" == e ?
                        (this.value = "") :
                        "checkbox" == t || "radio" == t ?
                        (this.checked = !1) :
                        "select" == e ?
                        (this.selectedIndex = -1) :
                        "file" == t ?
                        /MSIE/.test(navigator.userAgent) ?
                        O(this).replaceWith(O(this).clone(!0)) :
                        O(this).val("") :
                        i &&
                        ((!0 === i && /hidden/.test(t)) ||
                            ("string" == typeof i && O(this).is(i))) &&
                        (this.value = "");
                });
            }),
        (O.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset ||
                    ("object" == typeof this.reset && !this.reset.nodeType)) &&
                this.reset();
            });
        }),
        (O.fn.enable = function(t) {
            return (
                void 0 === t && (t = !0),
                this.each(function() {
                    this.disabled = !t;
                })
            );
        }),
        (O.fn.selected = function(i) {
            return (
                void 0 === i && (i = !0),
                this.each(function() {
                    var t = this.type;
                    if ("checkbox" == t || "radio" == t) this.checked = i;
                    else if ("option" == this.tagName.toLowerCase()) {
                        var e = O(this).parent("select");
                        i &&
                            e[0] &&
                            "select-one" == e[0].type &&
                            e.find("option").selected(!1),
                            (this.selected = i);
                    }
                })
            );
        }),
        (O.fn.ajaxSubmit.debug = !1);
    })(jQuery),
    (QY = jQuery),
    QY.extend(QY.fn, {
        validate: function(t) {
            if (this.length) {
                var i = QY.data(this[0], "validator");
                return (
                    i ||
                    (this.attr("novalidate", "novalidate"),
                        (i = new QY.validator(t, this[0])),
                        QY.data(this[0], "validator", i),
                        i.settings.onsubmit &&
                        (this.validateDelegate(":submit", "click", function(t) {
                                i.settings.submitHandler && (i.submitButton = t.target),
                                    QY(t.target).hasClass("cancel") && (i.cancelSubmit = !0),
                                    void 0 !== QY(t.target).attr("formnovalidate") &&
                                    (i.cancelSubmit = !0);
                            }),
                            this.submit(function(e) {
                                function t() {
                                    var t;
                                    return (!i.settings.submitHandler ||
                                        (i.submitButton &&
                                            (t = QY("<input type='hidden'/>")
                                                .attr("name", i.submitButton.name)
                                                .val(QY(i.submitButton).val())
                                                .appendTo(i.currentForm)),
                                            i.settings.submitHandler.call(i, i.currentForm, e),
                                            i.submitButton && t.remove(), !1)
                                    );
                                }
                                return (
                                    i.settings.debug && e.preventDefault(),
                                    i.cancelSubmit ?
                                    ((i.cancelSubmit = !1), t()) :
                                    i.form() ?
                                    i.pendingRequest ?
                                    !(i.formSubmitted = !0) :
                                    t() :
                                    (i.focusInvalid(), !1)
                                );
                            })),
                        i)
                );
            }
            t &&
                t.debug &&
                window.console &&
                console.warn("Nothing selected, can't validate, returning nothing.");
        },
        valid: function() {
            if (QY(this[0]).is("form")) return this.validate().form();
            var t = !0,
                e = QY(this[0].form).validate();
            return (
                this.each(function() {
                    t = t && e.element(this);
                }),
                t
            );
        },
        removeAttrs: function(t) {
            var i = {},
                n = this;
            return (
                QY.each(t.split(/\s/), function(t, e) {
                    (i[e] = n.attr(e)), n.removeAttr(e);
                }),
                i
            );
        },
        rules: function(t, e) {
            var i = this[0];
            if (t) {
                var n = QY.data(i.form, "validator").settings,
                    o = n.rules,
                    s = QY.validator.staticRules(i);
                switch (t) {
                    case "add":
                        QY.extend(s, QY.validator.normalizeRule(e)),
                            delete s.messages,
                            (o[i.name] = s),
                            e.messages &&
                            (n.messages[i.name] = QY.extend(
                                n.messages[i.name],
                                e.messages
                            ));
                        break;
                    case "remove":
                        if (!e) return delete o[i.name], s;
                        var r = {};
                        return (
                            QY.each(e.split(/\s/), function(t, e) {
                                (r[e] = s[e]), delete s[e];
                            }),
                            r
                        );
                }
            }
            var a = QY.validator.normalizeRules(
                QY.extend({},
                    QY.validator.classRules(i),
                    QY.validator.attributeRules(i),
                    QY.validator.dataRules(i),
                    QY.validator.staticRules(i)
                ),
                i
            );
            if (a.required) {
                var l = a.required;
                delete a.required, (a = QY.extend({ required: l }, a));
            }
            return a;
        },
    }),
    QY.extend(QY.expr[":"], {
        blank: function(t) {
            return !QY.trim("" + QY(t).val());
        },
        filled: function(t) {
            return !!QY.trim("" + QY(t).val());
        },
        unchecked: function(t) {
            return !QY(t).prop("checked");
        },
    }),
    (QY.validator = function(t, e) {
        (this.settings = QY.extend(!0, {}, QY.validator.defaults, t)),
        (this.currentForm = e),
        this.init();
    }),
    (QY.validator.format = function(i, t) {
        return 1 === arguments.length ?

            function() {
                var t = QY.makeArray(arguments);
                return t.unshift(i), QY.validator.format.apply(this, t);
            } :
            (2 < arguments.length &&
                t.constructor !== Array &&
                (t = QY.makeArray(arguments).slice(1)),
                t.constructor !== Array && (t = [t]),
                QY.each(t, function(t, e) {
                    i = i.replace(RegExp("\\{" + t + "\\}", "g"), function() {
                        return e;
                    });
                }),
                i);
    }),
    QY.extend(QY.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: QY([]),
            errorLabelContainer: QY([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                (this.lastActive = t),
                this.settings.focusCleanup &&
                    !this.blockFocusCleanup &&
                    (this.settings.unhighlight &&
                        this.settings.unhighlight.call(
                            this,
                            t,
                            this.settings.errorClass,
                            this.settings.validClass
                        ),
                        this.addWrapper(this.errorsFor(t)).hide());
            },
            onfocusout: function(t) {
                this.checkable(t) ||
                    (!(t.name in this.submitted) && this.optional(t)) ||
                    this.element(t);
            },
            onkeyup: function(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) &&
                (t.name in this.submitted || t === this.lastElement) &&
                this.element(t);
            },
            onclick: function(t) {
                t.name in this.submitted ?
                    this.element(t) :
                    t.parentNode.name in this.submitted && this.element(t.parentNode);
            },
            highlight: function(t, e, i) {
                "radio" === t.type ?
                    this.findByName(t.name).addClass(e).removeClass(i) :
                    QY(t).addClass(e).removeClass(i);
            },
            unhighlight: function(t, e, i) {
                "radio" === t.type ?
                    this.findByName(t.name).removeClass(e).addClass(i) :
                    QY(t).removeClass(e).addClass(i);
            },
        },
        setDefaults: function(t) {
            QY.extend(QY.validator.defaults, t);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: QY.validator.format(
                "Please enter no more than {0} characters."
            ),
            minlength: QY.validator.format("Please enter at least {0} characters."),
            rangelength: QY.validator.format(
                "Please enter a value between {0} and {1} characters long."
            ),
            range: QY.validator.format("Please enter a value between {0} and {1}."),
            max: QY.validator.format(
                "Please enter a value less than or equal to {0}."
            ),
            min: QY.validator.format(
                "Please enter a value greater than or equal to {0}."
            ),
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function t(t) {
                    var e = QY.data(this[0].form, "validator"),
                        i = "on" + t.type.replace(/^validate/, "");
                    e.settings[i] && e.settings[i].call(e, this[0], t);
                }
                (this.labelContainer = QY(this.settings.errorLabelContainer)),
                (this.errorContext =
                    (this.labelContainer.length && this.labelContainer) ||
                    QY(this.currentForm)),
                (this.containers = QY(this.settings.errorContainer).add(
                    this.settings.errorLabelContainer
                )),
                (this.submitted = {}),
                (this.valueCache = {}),
                (this.pendingRequest = 0),
                (this.pending = {}),
                (this.invalid = {}),
                this.reset();
                var n = (this.groups = {});
                QY.each(this.settings.groups, function(i, t) {
                    "string" == typeof t && (t = t.split(/\s/)),
                        QY.each(t, function(t, e) {
                            n[e] = i;
                        });
                });
                var i = this.settings.rules;
                QY.each(i, function(t, e) {
                        i[t] = QY.validator.normalizeRule(e);
                    }),
                    QY(this.currentForm)
                    .validateDelegate(
                        ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ",
                        "focusin focusout keyup",
                        t
                    )
                    .validateDelegate(
                        "[type='radio'], [type='checkbox'], select, option",
                        "click",
                        t
                    ),
                    this.settings.invalidHandler &&
                    QY(this.currentForm).bind(
                        "invalid-form.validate",
                        this.settings.invalidHandler
                    );
            },
            form: function() {
                return (
                    this.checkForm(),
                    QY.extend(this.submitted, this.errorMap),
                    (this.invalid = QY.extend({}, this.errorMap)),
                    this.valid() ||
                    QY(this.currentForm).triggerHandler("invalid-form", [this]),
                    this.showErrors(),
                    this.valid()
                );
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = (this.currentElements = this.elements()); e[t]; t++)
                    this.check(e[t]);
                return this.valid();
            },
            element: function(t) {
                (t = this.validationTargetFor(this.clean(t))),
                (this.lastElement = t),
                this.prepareElement(t),
                    (this.currentElements = QY(t));
                var e = !1 !== this.check(t);
                return (
                    e ? delete this.invalid[t.name] : (this.invalid[t.name] = !0),
                    this.numberOfInvalids() ||
                    (this.toHide = this.toHide.add(this.containers)),
                    this.showErrors(),
                    e
                );
            },
            showErrors: function(e) {
                if (e) {
                    for (var t in (QY.extend(this.errorMap, e), (this.errorList = []), e))
                        this.errorList.push({
                            message: e[t],
                            element: this.findByName(t)[0],
                        });
                    this.successList = QY.grep(this.successList, function(t) {
                        return !(t.name in e);
                    });
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) :
                    this.defaultShowErrors();
            },
            resetForm: function() {
                QY.fn.resetForm && QY(this.currentForm).resetForm(),
                    (this.submitted = {}),
                    (this.lastElement = null),
                    this.prepareForm(),
                    this.hideErrors(),
                    this.elements()
                    .removeClass(this.settings.errorClass)
                    .removeData("previousValue");
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t) e++;
                return e;
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide();
            },
            valid: function() {
                return 0 === this.size();
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        QY(
                                this.findLastActive() ||
                                (this.errorList.length && this.errorList[0].element) || []
                            )
                            .filter(":visible")
                            .focus()
                            .trigger("focusin");
                    } catch (t) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return (
                    e &&
                    1 ===
                    QY.grep(this.errorList, function(t) {
                        return t.element.name === e.name;
                    }).length &&
                    e
                );
            },
            elements: function() {
                var t = this,
                    e = {};
                return QY(this.currentForm)
                    .find("input, select, textarea")
                    .not(":submit, :reset, :image, [disabled]")
                    .not(this.settings.ignore)
                    .filter(function() {
                        return (!this.name &&
                            t.settings.debug &&
                            window.console &&
                            console.error("%o has no name assigned", this), !(this.name in e || !t.objectLength(QY(this).rules())) &&
                            (e[this.name] = !0)
                        );
                    });
            },
            clean: function(t) {
                return QY(t)[0];
            },
            errors: function() {
                var t = this.settings.errorClass.replace(" ", ".");
                return QY(this.settings.errorElement + "." + t, this.errorContext);
            },
            reset: function() {
                (this.successList = []),
                (this.errorList = []),
                (this.errorMap = {}),
                (this.toShow = QY([])),
                (this.toHide = QY([])),
                (this.currentElements = QY([]));
            },
            prepareForm: function() {
                this.reset(), (this.toHide = this.errors().add(this.containers));
            },
            prepareElement: function(t) {
                this.reset(), (this.toHide = this.errorsFor(t));
            },
            elementValue: function(t) {
                var e = QY(t).attr("type"),
                    i = QY(t).val();
                return "radio" === e || "checkbox" === e ?
                    QY("input[name='" + QY(t).attr("name") + "']:checked").val() :
                    "string" == typeof i ?
                    i.replace(/\r/g, "") :
                    i;
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var t,
                    i = QY(e).rules(),
                    n = !1,
                    o = this.elementValue(e);
                for (var s in i) {
                    var r = { method: s, parameters: i[s] };
                    try {
                        if (
                            "dependency-mismatch" ===
                            (t = QY.validator.methods[s].call(this, o, e, r.parameters))
                        ) {
                            n = !0;
                            continue;
                        }
                        if (((n = !1), "pending" === t))
                            return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!t) return this.formatAndAdd(e, r), !1;
                    } catch (t) {
                        throw (
                            (this.settings.debug &&
                                window.console &&
                                console.log(
                                    "Exception occurred when checking element " +
                                    e.id +
                                    ", check the '" +
                                    r.method +
                                    "' method.",
                                    t
                                ),
                                t)
                        );
                    }
                }
                return n ?
                    void 0 :
                    (this.objectLength(i) && this.successList.push(e), !0);
            },
            customDataMessage: function(t, e) {
                return (
                    QY(t).data("msg-" + e.toLowerCase()) ||
                    (t.attributes && QY(t).attr("data-msg-" + e.toLowerCase()))
                );
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e]);
            },
            findDefined: function() {
                for (var t = 0; arguments.length > t; t++)
                    if (void 0 !== arguments[t]) return arguments[t];
            },
            defaultMessage: function(t, e) {
                return this.findDefined(
                    this.customMessage(t.name, e),
                    this.customDataMessage(t, e),
                    (!this.settings.ignoreTitle && t.title) || void 0,
                    QY.validator.messages[e],
                    "<strong>Warning: No message defined for " + t.name + "</strong>"
                );
            },
            formatAndAdd: function(t, e) {
                var i = this.defaultMessage(t, e.method),
                    n = /\$?\{(\d+)\}/g;
                "function" == typeof i
                    ?
                    (i = i.call(this, e.parameters, t)) :
                    n.test(i) &&
                    (i = QY.validator.format(i.replace(n, "{$1}"), e.parameters)),
                    this.errorList.push({ message: i, element: t }),
                    (this.errorMap[t.name] = i),
                    (this.submitted[t.name] = i);
            },
            addWrapper: function(t) {
                return (
                    this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                    t
                );
            },
            defaultShowErrors: function() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight &&
                        this.settings.highlight.call(
                            this,
                            i.element,
                            this.settings.errorClass,
                            this.settings.validClass
                        ),
                        this.showLabel(i.element, i.message);
                }
                if (
                    (this.errorList.length &&
                        (this.toShow = this.toShow.add(this.containers)),
                        this.settings.success)
                )
                    for (t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++)
                        this.settings.unhighlight.call(
                            this,
                            e[t],
                            this.settings.errorClass,
                            this.settings.validClass
                        );
                (this.toHide = this.toHide.not(this.toShow)),
                this.hideErrors(),
                    this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return QY(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(t, e) {
                var i = this.errorsFor(t);
                i.length ?
                    (i
                        .removeClass(this.settings.validClass)
                        .addClass(this.settings.errorClass),
                        i.html(e)) :
                    ((i = QY("<" + this.settings.errorElement + ">")
                            .attr("for", this.idOrName(t))
                            .addClass(this.settings.errorClass)
                            .html(e || "")),
                        this.settings.wrapper &&
                        (i = i
                            .hide()
                            .show()
                            .wrap("<" + this.settings.wrapper + "/>")
                            .parent()),
                        this.labelContainer.append(i).length ||
                        (this.settings.errorPlacement ?
                            this.settings.errorPlacement(i, QY(t)) :
                            i.insertAfter(t))), !e &&
                    this.settings.success &&
                    (i.text(""),
                        "string" == typeof this.settings.success ?
                        i.addClass(this.settings.success) :
                        this.settings.success(i, t)),
                    (this.toShow = this.toShow.add(i));
            },
            errorsFor: function(t) {
                var e = this.idOrName(t);
                return this.errors().filter(function() {
                    return QY(this).attr("for") === e;
                });
            },
            idOrName: function(t) {
                return (
                    this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                );
            },
            validationTargetFor: function(t) {
                return (
                    this.checkable(t) &&
                    (t = this.findByName(t.name).not(this.settings.ignore)[0]),
                    t
                );
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type);
            },
            findByName: function(t) {
                return QY(this.currentForm).find("[name='" + t + "']");
            },
            getLength: function(t, e) {
                switch (e.nodeName.toLowerCase()) {
                    case "select":
                        return QY("option:selected", e).length;
                    case "input":
                        if (this.checkable(e))
                            return this.findByName(e.name).filter(":checked").length;
                }
                return t.length;
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e);
            },
            dependTypes: {
                boolean: function(t) {
                    return t;
                },
                string: function(t, e) {
                    return !!QY(t, e.form).length;
                },
                function: function(t, e) {
                    return t(e);
                },
            },
            optional: function(t) {
                var e = this.elementValue(t);
                return (!QY.validator.methods.required.call(this, e, t) &&
                    "dependency-mismatch"
                );
            },
            startRequest: function(t) {
                this.pending[t.name] ||
                    (this.pendingRequest++, (this.pending[t.name] = !0));
            },
            stopRequest: function(t, e) {
                this.pendingRequest--,
                    this.pendingRequest < 0 && (this.pendingRequest = 0),
                    delete this.pending[t.name],
                    e && 0 === this.pendingRequest && this.formSubmitted && this.form() ?
                    (QY(this.currentForm).submit(), (this.formSubmitted = !1)) :
                    !e &&
                    0 === this.pendingRequest &&
                    this.formSubmitted &&
                    (QY(this.currentForm).triggerHandler("invalid-form", [this]),
                        (this.formSubmitted = !1));
            },
            previousValue: function(t) {
                return (
                    QY.data(t, "previousValue") ||
                    QY.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote"),
                    })
                );
            },
        },
        classRuleSettings: {
            required: { required: !0 },
            email: { email: !0 },
            url: { url: !0 },
            date: { date: !0 },
            dateISO: { dateISO: !0 },
            number: { number: !0 },
            digits: { digits: !0 },
            creditcard: { creditcard: !0 },
        },
        addClassRules: function(t, e) {
            t.constructor === String ?
                (this.classRuleSettings[t] = e) :
                QY.extend(this.classRuleSettings, t);
        },
        classRules: function(t) {
            var e = {},
                i = QY(t).attr("class");
            return (
                i &&
                QY.each(i.split(" "), function() {
                    this in QY.validator.classRuleSettings &&
                        QY.extend(e, QY.validator.classRuleSettings[this]);
                }),
                e
            );
        },
        attributeRules: function(t) {
            var e = {},
                i = QY(t),
                n = i[0].getAttribute("type");
            for (var o in QY.validator.methods) {
                var s;
                (s =
                    "required" === o ?
                    ("" === (s = i.get(0).getAttribute(o)) && (s = !0), !!s) :
                    i.attr(o)),
                /min|max/.test(o) &&
                    (null === n || /number|range|text/.test(n)) &&
                    (s = Number(s)),
                    s ? (e[o] = s) : n === o && "range" !== n && (e[o] = !0);
            }
            return (
                e.maxlength &&
                /-1|2147483647|524288/.test(e.maxlength) &&
                delete e.maxlength,
                e
            );
        },
        dataRules: function(t) {
            var e,
                i,
                n = {},
                o = QY(t);
            for (e in QY.validator.methods)
                void 0 !== (i = o.data("rule-" + e.toLowerCase())) && (n[e] = i);
            return n;
        },
        staticRules: function(t) {
            var e = {},
                i = QY.data(t.form, "validator");
            return (
                i.settings.rules &&
                (e = QY.validator.normalizeRule(i.settings.rules[t.name]) || {}),
                e
            );
        },
        normalizeRules: function(n, o) {
            return (
                QY.each(n, function(t, e) {
                    if (!1 !== e) {
                        if (e.param || e.depends) {
                            var i = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    i = !!QY(e.depends, o.form).length;
                                    break;
                                case "function":
                                    i = e.depends.call(o, o);
                            }
                            i ? (n[t] = void 0 === e.param || e.param) : delete n[t];
                        }
                    } else delete n[t];
                }),
                QY.each(n, function(t, e) {
                    n[t] = QY.isFunction(e) ? e(o) : e;
                }),
                QY.each(["minlength", "maxlength"], function() {
                    n[this] && (n[this] = Number(n[this]));
                }),
                QY.each(["rangelength", "range"], function() {
                    var t;
                    n[this] &&
                        (QY.isArray(n[this]) ?
                            (n[this] = [Number(n[this][0]), Number(n[this][1])]) :
                            "string" == typeof n[this] &&
                            ((t = n[this].split(/[\s,]+/)),
                                (n[this] = [Number(t[0]), Number(t[1])])));
                }),
                QY.validator.autoCreateRanges &&
                (n.min &&
                    n.max &&
                    ((n.range = [n.min, n.max]), delete n.min, delete n.max),
                    n.minlength &&
                    n.maxlength &&
                    ((n.rangelength = [n.minlength, n.maxlength]),
                        delete n.minlength,
                        delete n.maxlength)),
                n
            );
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var e = {};
                QY.each(t.split(/\s/), function() {
                        e[this] = !0;
                    }),
                    (t = e);
            }
            return t;
        },
        addMethod: function(t, e, i) {
            (QY.validator.methods[t] = e),
            (QY.validator.messages[t] =
                void 0 !== i ? i : QY.validator.messages[t]),
            e.length < 3 &&
                QY.validator.addClassRules(t, QY.validator.normalizeRule(t));
        },
        methods: {
            required: function(t, e, i) {
                if (!this.depend(i, e)) return "dependency-mismatch";
                if ("select" !== e.nodeName.toLowerCase())
                    return this.checkable(e) ?
                        0 < this.getLength(t, e) :
                        0 < QY.trim(t).length;
                var n = QY(e).val();
                return n && 0 < n.length;
            },
            email: function(t, e) {
                return (
                    this.optional(e) ||
                    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
                        t
                    )
                );
            },
            url: function(t, e) {
                return (
                    this.optional(e) ||
                    /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
                        t
                    )
                );
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t));
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
            },
            number: function(t, e) {
                return (
                    this.optional(e) ||
                    /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                );
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t);
            },
            creditcard: function(t, e) {
                if (this.optional(e)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t)) return !1;
                for (
                    var i = 0, n = 0, o = !1, s = (t = t.replace(/\D/g, "")).length - 1; 0 <= s; s--
                ) {
                    var r = t.charAt(s);
                    (n = parseInt(r, 10)),
                    o && 9 < (n *= 2) && (n -= 9),
                        (i += n),
                        (o = !o);
                }
                return 0 == i % 10;
            },
            minlength: function(t, e, i) {
                var n = QY.isArray(t) ? t.length : this.getLength(QY.trim(t), e);
                return this.optional(e) || i <= n;
            },
            maxlength: function(t, e, i) {
                var n = QY.isArray(t) ? t.length : this.getLength(QY.trim(t), e);
                return this.optional(e) || n <= i;
            },
            rangelength: function(t, e, i) {
                var n = QY.isArray(t) ? t.length : this.getLength(QY.trim(t), e);
                return this.optional(e) || (n >= i[0] && i[1] >= n);
            },
            min: function(t, e, i) {
                return this.optional(e) || i <= t;
            },
            max: function(t, e, i) {
                return this.optional(e) || t <= i;
            },
            range: function(t, e, i) {
                return this.optional(e) || (t >= i[0] && i[1] >= t);
            },
            equalTo: function(t, e, i) {
                var n = QY(i);
                return (
                    this.settings.onfocusout &&
                    n
                    .unbind(".validate-equalTo")
                    .bind("blur.validate-equalTo", function() {
                        QY(e).valid();
                    }),
                    t === n.val()
                );
            },
            remote: function(s, r, t) {
                if (this.optional(r)) return "dependency-mismatch";
                var a = this.previousValue(r);
                if (
                    (this.settings.messages[r.name] ||
                        (this.settings.messages[r.name] = {}),
                        (a.originalMessage = this.settings.messages[r.name].remote),
                        (this.settings.messages[r.name].remote = a.message),
                        (t = ("string" == typeof t && { url: t }) || t),
                        a.old === s)
                )
                    return a.valid;
                a.old = s;
                var l = this;
                this.startRequest(r);
                var e = {};
                return (
                    (e[r.name] = s),
                    QY.ajax(
                        QY.extend(!0, {
                                url: t,
                                mode: "abort",
                                port: "validate" + r.name,
                                dataType: "json",
                                data: e,
                                success: function(t) {
                                    l.settings.messages[r.name].remote = a.originalMessage;
                                    var e = !0 === t || "true" === t;
                                    if (e) {
                                        var i = l.formSubmitted;
                                        l.prepareElement(r),
                                            (l.formSubmitted = i),
                                            l.successList.push(r),
                                            delete l.invalid[r.name],
                                            l.showErrors();
                                    } else {
                                        var n = {},
                                            o = t || l.defaultMessage(r, "remote");
                                        (n[r.name] = a.message = QY.isFunction(o) ? o(s) : o),
                                        (l.invalid[r.name] = !0),
                                        l.showErrors(n);
                                    }
                                    (a.valid = e), l.stopRequest(r, e);
                                },
                            },
                            t
                        )
                    ),
                    "pending"
                );
            },
        },
    }),
    (QY.format = QY.validator.format),
    (function(n) {
        var o = {};
        if (n.ajaxPrefilter)
            n.ajaxPrefilter(function(t, e, i) {
                var n = t.port;
                "abort" === t.mode && (o[n] && o[n].abort(), (o[n] = i));
            });
        else {
            var s = n.ajax;
            n.ajax = function(t) {
                var e = ("mode" in t ? t : n.ajaxSettings).mode,
                    i = ("port" in t ? t : n.ajaxSettings).port;
                return "abort" === e ?
                    (o[i] && o[i].abort(), (o[i] = s.apply(this, arguments)), o[i]) :
                    s.apply(this, arguments);
            };
        }
    })(jQuery),
    (b1 = jQuery),
    b1.extend(b1.fn, {
        validateDelegate: function(i, t, n) {
            return this.bind(t, function(t) {
                var e = b1(t.target);
                return e.is(i) ? n.apply(e, arguments) : void 0;
            });
        },
    }),
    jQuery(function(e) {
        e("#contactform").validate({
                rules: {
                    name: { required: !0, minlength: 2 },
                    email: { required: !0, email: !0 },
                    message: { required: !0 },
                },
                messages: {
                    name: {
                        required: "Please enter your name",
                        minlength: "Your name must consist of at least 2 characters",
                    },
                    email: { required: "Please enter your email" },
                    message: { required: "Please enter your message" },
                },
                submitHandler: function(t) {
                    e(t).ajaxSubmit({
                        type: "POST",
                        data: e(t).serialize(),
                        url: "external/form/contact-form.php",
                        success: function() {
                            e("#success").fadeIn(),
                                e("#contactform").each(function() {
                                    this.reset();
                                });
                        },
                        error: function() {
                            e("#contactform").fadeTo("slow", 1, function() {
                                e("#error").fadeIn();
                            });
                        },
                    });
                },
            }),
            e("#newsletterform-01").validate({
                rules: { email: { required: !0, email: !0 } },
                submitHandler: function(t) {
                    e(t).ajaxSubmit({
                        type: "POST",
                        data: e(t).serialize(),
                        url: "external/form/newsletter-form.php",
                        success: function() {
                            e("#success").fadeIn(),
                                e("#newsletterform-01").each(function() {
                                    this.reset();
                                });
                        },
                        error: function() {
                            e("#newsletterform-01").fadeTo("slow", 1, function() {
                                e("#error").fadeIn();
                            });
                        },
                    });
                },
            }),
            e("#newsletterform-02").validate({
                rules: { email: { required: !0, email: !0 } },
                submitHandler: function(t) {
                    e(t).ajaxSubmit({
                        type: "POST",
                        data: e(t).serialize(),
                        url: "external/form/newsletter-form.php",
                        success: function() {
                            e("#success").fadeIn(),
                                e("#newsletterform-02").each(function() {
                                    this.reset();
                                });
                        },
                        error: function() {
                            e("#newsletterform-02").fadeTo("slow", 1, function() {
                                e("#error").fadeIn();
                            });
                        },
                    });
                },
            }),
            e("#newsletterform-03").validate({
                rules: { email: { required: !0, email: !0 } },
                submitHandler: function(t) {
                    e(t).ajaxSubmit({
                        type: "POST",
                        data: e(t).serialize(),
                        url: "external/form/newsletter-form.php",
                        success: function() {
                            e("#success").fadeIn(),
                                e("#newsletterform-03").each(function() {
                                    this.reset();
                                });
                        },
                        error: function() {
                            e("#newsletterform-03").fadeTo("slow", 1, function() {
                                e("#error").fadeIn();
                            });
                        },
                    });
                },
            }),
            e("#newsletterform-04").validate({
                rules: { email: { required: !0, email: !0 } },
                submitHandler: function(t) {
                    e(t).ajaxSubmit({
                        type: "POST",
                        data: e(t).serialize(),
                        url: "external/form/newsletter-form.php",
                        success: function() {
                            e("#success").fadeIn(),
                                e("#newsletterform-04").each(function() {
                                    this.reset();
                                });
                        },
                        error: function() {
                            e("#newsletterform-04").fadeTo("slow", 1, function() {
                                e("#error").fadeIn();
                            });
                        },
                    });
                },
            });
    }),
    (n1 = jQuery),
    (o1 = {
        init: function(t) {
            return this.each(function() {
                var t = n1(this),
                    e = t.find(".pt-item.active"),
                    i = t.find(".pt-item .pt-accordeon-title");
                e.find(".pt-accordeon-content").slideToggle(100),
                    i.on("click", function() {
                        n1(this).next().slideToggle(200).parent().toggleClass("active");
                    });
            });
        },
    }),
    (n1.fn.accordeon = function(t) {
        return o1[t] ?
            o1[t].apply(this, Array.prototype.slice.call(arguments, 1)) :
            "object" != typeof t && t ?
            (console.info("Action " + t + "not found this plugin"), this) :
            o1.init.apply(this, arguments);
    }),
    n1("#pt-pageContent .pt-accordeon").accordeon(),
    (function(n) {
        var o = n("#pt-pageContent .airSticky"),
            i = n(window),
            t = window.innerWidth || i.width();
        o.length && r(t);
        var s = i.width();

        function r(t) {
            var e = o,
                i = n("#pt-pageContent .pt-collapse-block").find(".pt-collapse-title");
            1024 <= t ?
                e.airStickyBlock({
                    debug: !1,
                    stopBlock: ".airSticky_stop-block",
                    offsetTop: 70,
                }) :
                e.hasClass("airSticky_absolute") &&
                e.removeClass("airSticky_absolute"),
                n(document).on("resize scroll", i, function() {
                    e.trigger("render.airStickyBlock");
                }),
                i.on("click", function() {
                    setTimeout(function() {
                        e.trigger("render.airStickyBlock");
                    }, 170);
                });
        }
        i.on("resize", function() {
            var t = i.width();
            if (t !== s) {
                s = t;
                var e = window.innerWidth || i.width();
                o.length && r(e);
            }
        });
    })(jQuery),
    (G1 = jQuery),
    (H1 = {
        init: function(e) {
            return this.each(function() {
                var t = G1(this);
                H1.alignmen(e, t);
            });
        },
        alignmen: function(t, e) {
            var i = e.find(".slick-arrow"),
                n = i.findHeight(),
                o = e.find("." + t.centeringObject),
                s = o.findHeight(),
                r = parseInt(o.css("marginTop"), 10),
                a = e.find("." + t.addError),
                l = a.innerHeight() + parseInt(e.find(a).css("marginTop"), 10) || 0,
                d = e.find("." + t.addErrorTop),
                c = parseInt(e.find(d).css("marginTop"), 10) || 0;
            i.css({ top: l + c + r + s - n, "margin-top": "0px" }).animate({
                opacity: 1,
            });
        },
    }),
    (G1.fn.alignmentArrow = function(t) {
        return H1[t] ?
            H1[t].apply(this, Array.prototype.slice.call(arguments, 1)) :
            "object" != typeof t && t ?
            (console.info("Action " + t + "not found this plugin"), this) :
            H1.init.apply(this, arguments);
    }),
    (G1.fn.findHeight = function() {
        var t = G1(this),
            e = t.eq(0).innerHeight();
        return (
            t.each(function() {
                e = G1(this).innerHeight() > e ? G1(this).innerHeight() : e;
            }),
            e / 2
        );
    }),
    G1(window)
    .resize(function(t) {
        setTimeout(function() {
            G1("#pt-pageContent .js-compare-alignment-arrow")
                .imagesLoaded()
                .alignmentArrow({
                    centeringObject: "pt-img",
                    addError: "pt-remove-item",
                }),
                G1("#pt-pageContent .js-align-arrow")
                .imagesLoaded()
                .alignmentArrow({
                    centeringObject: "pt-image-box",
                    addErrorTop: "pt-product",
                }),
                G1("#pt-pageContent .js-promo-align-arrow")
                .imagesLoaded()
                .alignmentArrow({
                    centeringObject: "image-box",
                    addErrorTop: "pt-promo-card",
                });
        }, 630);
    })
    .resize(),
    (Z1 = jQuery),
    ($1 = Z1("#js-back-to-top")),
    (_1 = Z1(window)),
    $1.length &&
    ($1.on("click", function(t) {
            return Z1("html, body").animate({ scrollTop: 0 }, 500), !1;
        }),
        _1.scroll(function() {
            500 < _1.scrollTop() ?
                $1.stop((!0).false).addClass("pt-show") :
                $1.stop((!0).false).removeClass("pt-show");
        })),
    (c2 = jQuery),
    (e2 = c2("#pt-pageContent").find(".pt-blog-masonry")),
    (f2 = c2(window)),
    (g2 = c2("body")),
    (h2 = c2("html")),
    f2.on("load", function() {
        window.innerWidth || f2.width(),
            e2.length &&
            (function() {
                var n = e2
                    .find(".pt-blog-init")
                    .isotope({ itemSelector: ".element-item", layoutMode: "masonry" });
                n.imagesLoaded().progress(function() {
                    n.isotope("layout").addClass("pt-show");
                });
                var t = e2.find(".pt-filter-nav");
                if (t.length) {
                    var e = {
                        ium: function() {
                            var t = c2(this).find(".name").text();
                            return t.match(/ium$/);
                        },
                    };
                    t.on("click", ".button", function() {
                        var t = c2(this).attr("data-filter");
                        (t = e[t] || t),
                        n.isotope({ filter: t }),
                            c2(this).addClass("active").siblings().removeClass("active");
                    });
                }
                var i = c2(".isotop_showmore_js .btn"),
                    o = c2(".pt-add-item");
                i.length &&
                    o.length &&
                    i.on("click", function(t) {
                        return (
                            t.preventDefault(),
                            c2.ajax({
                                url: "ajax_post.php",
                                success: function(t) {
                                    var e,
                                        i = c2(t);
                                    o.append(i),
                                        n.isotope("appended", i),
                                        (e = o.children().last().children().offset().top - 180),
                                        c2(g2, h2).animate({ scrollTop: e }, 500);
                                },
                            }), !1
                        );
                    });
            })();
    }),
    (function(o) {
        var e = o("#pt-pageContent .pt-slider-blog-single");
        if (e.length) {
            e.slick({
                dots: !1,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: !0,
            });
            var s = o(".pt-slick-quantity");
            s.length &&
                (s.find(".total").html(e.slick("getSlick").slideCount),
                    e.on("afterChange", function(t, e, i) {
                        var n = o(".slick-current").attr("data-slick-index");
                        (n = ++i), s.find(".account-number").html(n);
                    }));
            var t = o(".pt-slick-button");
            t.length &&
                (t.find(".slick-next").on("click", function(t) {
                        e.slick("slickNext");
                    }),
                    t.find(".slick-prev").on("click", function(t) {
                        e.slick("slickPrev");
                    }));
        }
    })(jQuery),
    (function(t) {
        var e,
            i,
            n = t("body"),
            o = t("html");
        (e = navigator.userAgent.toLowerCase()),
        (i = function(t) {
            return -1 != e.indexOf(t);
        }),
        o.addClass(
            [!/opera|webtv/i.test(e) && /msie (\d)/.test(e) ?
                "ie ie" + RegExp.$1 :
                i("firefox/2") ?
                "gecko ff2" :
                i("firefox/3") ?
                "gecko ff3" :
                i("gecko/") ?
                "gecko" :
                i("opera/9") ?
                "opera opera9" :
                /opera (\d)/.test(e) ?
                "opera opera" + RegExp.$1 :
                i("konqueror") ?
                "konqueror" :
                i("applewebkit/") ?
                "webkit safari" :
                i("mozilla/") ?
                "gecko" :
                "",
                i("x11") || i("linux") ?
                " linux" :
                i("mac") ?
                " mac" :
                i("win") ?
                " win" :
                "",
            ].join("")
        );
        ("ontouchstart" in window || "onmsgesturechange" in window) &&
        (n.addClass("touch-device"), o.addClass("touch-device")),
        /Edge/.test(navigator.userAgent) && o.addClass("edge");
    })(jQuery),
    (O2 = jQuery),
    (P2 = O2("#pt-pageContent .js-init-carousel")),
    P2.length &&
    P2.each(function() {
        var t = O2(this),
            e = O2(this).data("item"),
            i = O2(this).data("itemmobile");
        5 == t.item &&
            t.slick({
                lazyLoad: "progressive",
                dots: !0,
                arrows: !0,
                infinite: !0,
                speed: 300,
                slidesToShow: e,
                slidesToScroll: e,
                adaptiveHeight: !0,
                responsive: [{
                        breakpoint: 1240,
                        settings: { slidesToShow: 4, slidesToScroll: 4 },
                    },
                    {
                        breakpoint: 1025,
                        settings: { slidesToShow: 3, slidesToScroll: 3 },
                    },
                    {
                        breakpoint: 791,
                        settings: { slidesToShow: 2, slidesToScroll: 2 },
                    },
                ],
            }),
            t.slick({
                lazyLoad: "progressive",
                dots: !0,
                arrows: !0,
                infinite: !0,
                speed: 300,
                slidesToShow: e || 4,
                slidesToScroll: e || 4,
                adaptiveHeight: !0,
                responsive: [{
                        breakpoint: 1025,
                        settings: { slidesToShow: 3, slidesToScroll: 3 },
                    },
                    {
                        breakpoint: 791,
                        settings: { slidesToShow: 2, slidesToScroll: 2 },
                    },
                    {
                        breakpoint: 650,
                        settings: { slidesToShow: i || 2, slidesToScroll: i || 1 },
                    },
                ],
            });
    }),
    (U2 = jQuery("#pt-pageContent .pt-carousel-brands")),
    U2.length &&
    U2.slick({
        lazyLoad: "progressive",
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight: !0,
        responsive: [
            { breakpoint: 1230, settings: { slidesToShow: 6 } },
            { breakpoint: 1025, settings: { slidesToShow: 4 } },
            { breakpoint: 790, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } },
            { breakpoint: 380, settings: { slidesToShow: 1 } },
        ],
    }),
    (W2 = jQuery("#pt-pageContent .js-carousel-reviewsbox")),
    W2.length &&
    W2.slick({
        lazyLoad: "progressive",
        dots: !0,
        arrows: !1,
        infinite: !0,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: !0,
        responsive: [
            { breakpoint: 790, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    }),
    (Y2 = jQuery("#js-init-mobile-productsingle")),
    Y2.length &&
    Y2.slick({
        lazyLoad: "progressive",
        dots: !1,
        arrows: !0,
        infinite: !0,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: !0,
        lazyLoad: "progressive",
    }),
    (Z2 = jQuery),
    ($2 = Z2("#pt-compare-table02")),
    (_2 = $2.find(".compare-row-item")),
    (a3 = Z2(window)),
    $2.length &&
    _2.length &&
    (function() {
        var i, n, o;

        function s() {
            var t = $2.find(".pt-col-title"),
                e = $2.find(".pt-col-item"),
                i = t.find("> div").length;
            if (i === e.find(".pt-item:first-child > div").length)
                for (var n = 1; n <= i;) {
                    var o = "js_one-height-0" + n;
                    n++, s(o);
                }

            function s(t) {
                var e = $2.find("." + t),
                    i = 0;
                e.css("height", "auto").each(function() {
                        Z2(this).css("height", "auto"),
                            Z2(this).height(),
                            Z2(this).height() > i && (i = Z2(this).height());
                    }),
                    e.height(i);
            }
        }

        function e() {
            var t = _2.find("> *").length,
                e = window.innerWidth || a3.width();
            1024 <= e && 4 <= t ?
                (r(),
                    setTimeout(function() {
                        s();
                    }, 350)) :
                e < 1024 && 2 < t ?
                (r(),
                    setTimeout(function() {
                        s();
                    }, 350)) :
                e < 790 &&
                1 < t &&
                (r(),
                    setTimeout(function() {
                        s();
                    }, 350));
        }

        function r() {
            _2.slick({
                dots: !1,
                arrows: !0,
                infinite: !0,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                adaptiveHeight: !1,
                responsive: [
                    { breakpoint: 1025, settings: { slidesToShow: 2 } },
                    { breakpoint: 790, settings: { slidesToShow: 1 } },
                ],
            })[0].slick.refresh();
        }
        a3.on("ready, load", function() {
                s(), e();
            }),
            a3.resize(
                ((i = function(t) {
                        s(), e();
                    }),
                    (n = n || 500),
                    function() {
                        var t = this,
                            e = arguments;
                        clearTimeout(o),
                            (o = setTimeout(function() {
                                i.apply(t, Array.prototype.slice.call(e));
                            }, n));
                    })
            );
    })(),
    (D3 = jQuery),
    (E3 = D3("#pt-pageContent")),
    D3("body").on("click", "#ds-demo-switch", function(t) {
        t.preventDefault;
        var e = t.target,
            i = D3("<link>", {
                rel: "stylesheet",
                href: "css/rtl.css",
                class: "rtl",
            });
        if (
            (D3(".ds-btn-switch").is(e) &&
                D3("#ds-demo-switch").toggleClass("is-open"),
                D3(".ds-item").is(e) && D3(e).toggleClass("active"),
                D3(".js-event-boxed").is(e) &&
                (D3("html").toggleClass("pt-boxed"),
                    D3(".slick-slider").slick("refresh"),
                    E3.find(".js-compare-alignment-arrow")
                    .imagesLoaded()
                    .alignmentArrow({
                        centeringObject: "pt-img",
                        addError: "pt-remove-item",
                    }),
                    E3.find(".js-align-arrow")
                    .imagesLoaded()
                    .alignmentArrow({
                        centeringObject: "pt-image-box",
                        addErrorTop: "pt-product",
                    }),
                    E3.find(".js-promo-align-arrow")
                    .imagesLoaded()
                    .alignmentArrow({
                        centeringObject: "image-box",
                        addErrorTop: "pt-promo-card",
                    })),
                D3(".js-event-product-center").is(e) &&
                D3("html").toggleClass("pt-product-center"),
                D3(".js-event-product-type02move").is(e) &&
                (D3("html").toggleClass("pt-product-type-02 pt-product-move"),
                    D3(document).on(
                        "mouseenter mouseleave",
                        "#pt-pageContent .pt-product",
                        function(t) {
                            var e = D3(this),
                                i = window.innerWidth,
                                n = e.find(".pt-description"),
                                o = e.find(".pt-row-hover"),
                                s = parseInt(o.height()) + 23,
                                r = e.find(".pt-countdown_box");
                            return (
                                t.target, !e.hasClass("product-nohover") &&
                                !!D3("html").hasClass("pt-product-move") &&
                                void("mouseenter" === t.type && 1024 < i ?
                                    (e
                                        .stop()
                                        .css({ height: e.innerHeight() })
                                        .addClass("hovered"),
                                        n.stop().animate({ top: "-" + s }, 200),
                                        o.stop().animate({ opacity: 1 }, 400),
                                        r.stop().animate({ bottom: s }, 200)) :
                                    "mouseleave" === t.type &&
                                    t.relatedTarget &&
                                    1024 < i &&
                                    (e.stop().removeClass("hovered").removeAttr("style"),
                                        n.stop().animate({ top: "0" }, 200, function() {
                                            D3(this).removeAttr("style");
                                        }),
                                        o.stop().animate({ opacity: 0 }, 100, function() {
                                            D3(this).removeAttr("style");
                                        }),
                                        r.stop().animate({ bottom: 0 }, 200, function() {
                                            D3(this).removeAttr("style");
                                        })))
                            );
                        }
                    )),
                D3(".js-event-product-type02").is(e) &&
                D3("html").toggleClass("pt-product-type-02"),
                D3(".js-event-rtl").is(e) && D3(".js-event-rtl").hasClass("active") ?
                i.appendTo("head") :
                D3(".js-event-rtl").is(e) &&
                !D3(".js-event-rtl").hasClass("active") &&
                D3("link.rtl").remove(), !D3(".ds-switch-external-link").is(e))
        )
            return !1;
    }),
    (V3 = jQuery),
    (W3 = V3("#pt-footer .pt-collapse-title")),
    W3.length &&
    W3.on("click", function(t) {
        t.preventDefault;
        var e = V3(this).next(),
            i = window.innerWidth || $window.width();
        V3(this).toggleClass("pt-open"),
            "none" == e.css("display") && i <= 790 ?
            e.animate({ height: "show" }, 300) :
            "block" == e.css("display") &&
            i <= 790 &&
            e.animate({ height: "hide" }, 300);
    }),
    (function(c) {
        function e() {
            var t = window.innerWidth || c(window).width(),
                e = 0 == c("#js-include-desktop-menu").children().length;
            1024 < t &&
                e &&
                c.ajax({
                    url: "ajax-content/ajax_desktop_menu.html",
                    success: function(t) {
                        var e = c(t);
                        c("#js-include-desktop-menu").append(e), new LazyLoad(), n(), o();
                    },
                });
        }
        c("#js-include-desktop-menu").length &&
            (c(window).resize(
                    debouncer(function(t) {
                        e();
                    })
                ),
                e());
        var t = 200,
            i = 200,
            a = c("body"),
            l = c("#pt-header .pt-desctop-menu"),
            d = c(".pt-back-to-top");
        l &&
            (n(),
                o(),
                c("#fixedbg").length || a.append('<div id="fixedbg"></div>'),
                c(document).on(
                    "mouseenter mouseleave",
                    ".pt-desctop-menu li.dropdown.pt-submenu",
                    function(t) {
                        c(this);
                        var e = window.innerWidth;
                        t.target;
                        "mouseenter" === t.type && 1024 < e ?
                            (c(".pt-stuck-nav").hasClass("stuck"),
                                c("#fixedbg").stop().fadeIn(150),
                                c("#pt-header")
                                .stop()
                                .css("zIndex", "50")
                                .css("position", "relative"),
                                c(".pt-menu-categories.opened .pt-dropdown-menu")
                                .stop()
                                .css("zIndex", "50")
                                .css("visibility", "hidden"),
                                c(".pt-menu-categories").addClass("pt-blackout")) :
                            "mouseleave" === t.type &&
                            1024 < e &&
                            (c("#fixedbg").stop().fadeOut(150),
                                c(".pt-menu-categories.opened .pt-dropdown-menu")
                                .stop()
                                .css("visibility", "visible")
                                .removeAttr("style"),
                                c(".pt-menu-categories").removeClass("pt-blackout"));
                    }
                ),
                c(window).resize(function() {
                    c("#pt-header").stop().removeAttr("style"), c("#fixedbg").hide();
                }),
                c("#pt-header").mouseleave(function() {
                    setTimeout(function() {
                        c("#pt-header").stop().removeAttr("style");
                    }, 150);
                }),
                (document.documentMode || /Edge/.test(navigator.userAgent)) &&
                c("#pt-header .pt-desktop-header ul:hidden").each(function() {
                    c(this).parent().append(c(this).detach());
                }));

        function n() {
            var e = t,
                o = i,
                s = !1,
                r = function() {
                    var t = window.innerHeight,
                        e = c(this).find(".dropdown-menu"),
                        i = t - e.get(0).getBoundingClientRect().top,
                        n = e.innerHeight(),
                        o = d;
                    if (i < n) {
                        var s = c("body"),
                            r = c(".stuck-nav");
                        e.css({ maxHeight: i - 20, overflow: "auto" });
                        var a = function() {
                            var t = c("<div>").css({
                                overflowY: "scroll",
                                width: "50px",
                                height: "50px",
                                visibility: "hidden",
                            });
                            s.append(t);
                            var e = t.get(0).offsetWidth - t.get(0).clientWidth;
                            return t.remove(), e;
                        };
                        s.css({ overflowY: "hidden", paddingRight: a() }),
                            r.css({ paddingRight: a() }),
                            o.css({ right: a() });
                    }
                };
            0 < l.length &&
                (c(".pt-megamenu-submenu li a").each(function() {
                        c(this).find("img").length &&
                            c(this).closest("ul").addClass("pt-sub-img");
                    }),
                    l.find(".dropdown-menu").each(function() {
                        c(this).length && c(this).closest(".dropdown").addClass("pt-submenu");
                    }),
                    c(document).on({
                            mouseenter: function(t) {
                                var i = c(this),
                                    n = this;
                                1025 < (window.innerWidth || c(window).width()) &&
                                    a.hasClass("touch-device") &&
                                    l.find(".dropdown.pt-submenu > a").one("click", !1),
                                    (s = setTimeout(function() {
                                        var t = i.find(".pt-menu-slider"),
                                            e = i.find(".dropdown-menu");
                                        i
                                            .addClass("active")
                                            .find(".dropdown-menu")
                                            .stop()
                                            .addClass("hover")
                                            .fadeIn(o),
                                            e.length & !e.hasClass("one-col") && r.call(n),
                                            t.length &&
                                            (t.hasClass("slick-initialized") ||
                                                t.slick({
                                                    dots: !1,
                                                    arrows: !0,
                                                    infinite: !0,
                                                    speed: 300,
                                                    slidesToShow: 3,
                                                    slidesToScroll: 1,
                                                    adaptiveHeight: !0,
                                                })),
                                            t.slick("setPosition");
                                    }, e));
                            },
                            mouseleave: function(t) {
                                var e = c(this),
                                    i = e.find(".dropdown-menu");
                                (!c(t.target && t.relatedTarget).parents(".dropdown-menu")
                                    .length ||
                                    c(t.target).parents(".pt-megamenu-submenu").length ||
                                    c(t.target).parents(".one-col").length) &&
                                (!1 !== s && (clearTimeout(s), (s = !1)),
                                    i.length ?
                                    i.stop().fadeOut({
                                        duration: 0,
                                        complete: function() {
                                            e.removeClass("active")
                                                .find(".dropdown-menu")
                                                .removeClass("hover");
                                        },
                                    }) :
                                    e
                                    .removeClass("active")
                                    .find(".dropdown-menu")
                                    .removeClass("hover"),
                                    i.removeAttr("style"),
                                    a.removeAttr("style"),
                                    c(".stuck-nav").css({ paddingRight: "inherit" }),
                                    d.css({ right: 0 }));
                            },
                        },
                        ".pt-desctop-menu li"
                    ),
                    l.find(".multicolumn ul li").on(
                        "hover",
                        function() {
                            var t = c(this).find("ul:first");
                            if (t.length) {
                                var e = window.innerWidth,
                                    i = (window.innerHeight, parseInt(t.css("width"), 10)),
                                    n = this.getBoundingClientRect().right,
                                    o = this.getBoundingClientRect().left;
                                e - n < i ?
                                    t.removeClass("left").addClass("right") :
                                    o < i ?
                                    t.removeClass("right").addClass("left") :
                                    t.removeClass("left right"),
                                    t.stop(!0, !0).fadeIn(300);
                            }
                        },
                        function() {
                            c(this)
                                .find("ul:first")
                                .stop(!0, !0)
                                .fadeOut(300)
                                .removeAttr("style");
                        }
                    ),
                    l
                    .find(".pt-megamenu-submenu li")
                    .on("mouseenter", function() {
                        var t = c(this).find("ul:first");
                        if (t.length) {
                            var e = c(this).parents(".dropdown").find(".dropdown-menu"),
                                i = e.get(0).getBoundingClientRect().left,
                                n = e.get(0).getBoundingClientRect().right,
                                o = e.get(0).getBoundingClientRect().bottom,
                                s = parseInt(t.css("width"), 10),
                                r = this.getBoundingClientRect().right,
                                a = this.getBoundingClientRect().left;
                            n - 20 - r < s ?
                                t.removeClass("left").addClass("right") :
                                a - s - 20 < i ?
                                t.removeClass("right").addClass("left") :
                                t.removeClass("left right"),
                                t.stop(!0, !0).delay(150).fadeIn(300);
                            var l = t.get(0).getBoundingClientRect().bottom;
                            if (o < l) {
                                var d = o - l;
                                t.css({ top: d });
                            }
                        }
                    })
                    .on("mouseleave", function() {
                        c(this)
                            .find("ul:first")
                            .stop(!0, !0)
                            .fadeOut(300)
                            .removeAttr("style");
                    }),
                    l.find(".dropdown div").on("hover", function() {
                        c(this).children(".pt-title-submenu").toggleClass("active");
                    })),
                c(window).on("scroll", function() {
                    var t;
                    (t = c(".dropdown.hover")).find(".dropdown-menu").not(".one-col")
                        .length &&
                        t.length &&
                        r.call(t);
                });
        }

        function o() {
            var e = window.location.href;
            l.find("li").each(function() {
                var t = c(this).find("a").attr("href"); -
                1 !== e.indexOf(t) &&
                    c(this)
                    .addClass("selected")
                    .closest("li")
                    .siblings()
                    .removeClass("selected");
            });
        }
    })(jQuery),
    (function(i) {
        var n = i(window),
            t = i("html"),
            e = i("header"),
            o = e.find(".pt-stuck-nav"),
            s = e.find(".pt-desctop-menu"),
            r = e.find(".pt-desctop-parent-menu"),
            a = e.find(".pt-mobile-parent-menu"),
            l = a.children(),
            d = e.find(".pt-stuck-parent-menu"),
            c = e.find(".pt-search"),
            h = e.find(".pt-desctop-parent-search"),
            u = e.find(".pt-mobile-parent-search"),
            p = e.find(".pt-stuck-parent-search"),
            f =
            (c.find(".pt-search-input"),
                c.find(".search-results"),
                e.find(".pt-cart")),
            m = e.find(".pt-desctop-parent-cart"),
            g = e.find(".pt-mobile-parent-cart"),
            v = e.find(".pt-stuck-parent-cart");
        ($ptAccountObj = e.find(".pt-account")),
        ($ptDesctopParentAccount = e.find(".pt-desctop-parent-account")),
        ($ptMobileParentAccount = e.find(".pt-mobile-parent-account")),
        ($ptStuckParentAccount = e.find(".pt-stuck-parent-account")),
        ($ptCompareObj = e.find(".pt-compare")),
        ($ptDesctopParentCompare = e.find(".pt-desctop-parent-compare")),
        ($ptMobileParentCompare = e.find(".pt-mobile-parent-compare")),
        ($ptStuckParentCompare = e.find(".pt-stuck-parent-compare")),
        ($ptWishlistObj = e.find(".pt-wishlist")),
        ($ptDesctopParentWishlist = e.find(".pt-desctop-parent-wishlist")),
        ($ptMobileParentWishlist = e.find(".pt-mobile-parent-wishlist")),
        ($ptStuckParentWishlist = e.find(".pt-stuck-parent-wishlist"));
        window.innerWidth || n.width(); -
        1 !== y() && t.addClass("ie"),
            (function(t) {
                if (o.hasClass("disabled")) return;
                var t = t || !1,
                    e = -1 !== y();
                if ("off" === t) return;
                n.scroll(function() {
                        var t = i("header").innerHeight();
                        if (n.scrollTop() > t) {
                            if (o.hasClass("stuck")) return !1;
                            o.hide(),
                                o.addClass("stuck"),
                                window.innerWidth < 1025 ?
                                d.append(l.detach()) :
                                d.append(s.detach()),
                                v.append(f.detach()),
                                $ptStuckParentCompare.append($ptCompareObj.detach()),
                                $ptStuckParentWishlist.append($ptWishlistObj.detach()),
                                $ptStuckParentAccount.append($ptAccountObj.detach()),
                                p.append(c.detach()),
                                o
                                .find(".pt-stuck-cart-parent > .pt-cart > .dropdown")
                                .hasClass("open") || e ?
                                o.stop().show() :
                                o.stop().fadeIn(300);
                        } else {
                            if (!o.hasClass("stuck")) return !1;
                            if ((o.hide(), o.removeClass("stuck"), window.innerWidth < 1025))
                                return (
                                    a.append(l.detach()),
                                    g.append(f.detach()),
                                    u.append(c.detach()), !1
                                );
                            r.append(s.detach()),
                                m.append(f.detach()),
                                $ptDesctopParentCompare.append($ptCompareObj.detach()),
                                $ptDesctopParentWishlist.append($ptWishlistObj.detach()),
                                $ptDesctopParentAccount.append($ptAccountObj.detach()),
                                h.append(c.detach());
                        }
                    }),
                    n.resize(function() {
                        if (!o.hasClass("stuck")) return !1;
                        window.innerWidth < 1025 ?
                            (r.append(s.detach()), d.append(l.detach())) :
                            (a.append(l.detach()), d.append(s.detach()));
                    });
            })(),
            h.length && b(),
            f.length && _();
        var w = n.width();

        function y() {
            var t = -1;
            if ("Microsoft Internet Explorer" === navigator.appName) {
                var e = navigator.userAgent;
                null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(e) &&
                    (t = parseFloat(RegExp.$1));
            } else if ("Netscape" === navigator.appName) {
                e = navigator.userAgent;
                null != new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(e) &&
                    (t = parseFloat(RegExp.$1));
            }
            return t;
        }

        function b() {
            if (window.innerWidth < 1025) {
                if (u.children().lenght) return !1;
                if (i(".stuck").length) return !1;
                u.append(c.detach());
            } else {
                if (h.children().lenght) return !1;
                if (i(".stuck").length) return !1;
                h.append(c.detach());
            }
        }

        function _() {
            if (window.innerWidth < 1025) {
                if (g.children().lenght) return !1;
                if (i(".stuck").length) return !1;
                g.append(f.detach());
            } else {
                if (m.children().lenght) return !1;
                if (i(".stuck").length) return !1;
                m.append(f.detach());
            }
        }
        n.on("resize", function() {
            var t = n.width();
            if (t !== w) {
                w = t;
                window.innerWidth || n.width();
                h.length && b(),
                    f.length && _(),
                    $ptDesctopParentAccount.length &&
                    (function() {
                        if (window.innerWidth < 1025) {
                            if ($ptMobileParentAccount.children().lenght) return;
                            if (i(".stuck").length) return;
                            $ptMobileParentAccount.append($ptAccountObj.detach());
                        } else {
                            if ($ptDesctopParentAccount.children().lenght) return;
                            if (i(".stuck").length) return;
                            $ptDesctopParentAccount.append($ptAccountObj.detach());
                        }
                    })(),
                    $ptDesctopParentWishlist.length &&
                    (function() {
                        if (window.innerWidth < 1025) {
                            if ($ptMobileParentWishlist.children().lenght) return;
                            if (i(".stuck").length) return;
                            $ptMobileParentWishlist.append($ptWishlistObj.detach());
                        } else {
                            if ($ptDesctopParentWishlist.children().lenght) return;
                            if (i(".stuck").length) return;
                            $ptDesctopParentWishlist.append($ptWishlistObj.detach());
                        }
                    })(),
                    $ptDesctopParentCompare.length &&
                    (function() {
                        if (window.innerWidth < 1025) {
                            if ($ptMobileParentCompare.children().lenght) return;
                            if (i(".stuck").length) return;
                            $ptMobileParentCompare.append($ptCompareObj.detach());
                        } else {
                            if ($ptDesctopParentCompare.children().lenght) return;
                            if (i(".stuck").length) return;
                            $ptDesctopParentCompare.append($ptCompareObj.detach());
                        }
                    })();
            }
        });
    })(jQuery),
    (function(t) {
        var e = t(".pt-menu-toggle"),
            i = t("#mobile-caterorie-menu"),
            n = t(".panel-menu");
        if (i.length) {
            var o = i.find("ul:first-child").detach();
            n
                .find("ul:first-child")
                .prepend(
                    "<li id='wrap-categories'><a href='index.html'>CATEGIRIES</a></li>"
                ),
                n.find("#wrap-categories").append(o);
        }
        e.length &&
            e.initMM({
                enable_breakpoint: !0,
                mobile_button: !0,
                breakpoint: 1025,
                menu_class: "mobile-main-menu",
                external_container: !0,
            });
    })(jQuery),
    (function(s) {
        "use strict";
        var r = {
                entryPointInclude: s("#entrypoint-objects"),
                classWrapperLayout: "pt-item-wrapper",
            },
            i = {
                init: function(e) {
                    return this.each(function() {
                        var t = {
                            objClass: s(this).attr("class").split(" ")[0],
                            objTitle: e.titleObj,
                            objAddClass: e.addClassObj || !1,
                            wrapperAddClass: e.addClassWrapper || !1,
                            createBlok: e.createBlok,
                            objinnerEntryPoint: e.innerEntryPoint,
                        };
                        i.insertMobile(t, e);
                    });
                },
                insertMobile: function(t, e) {
                    var i = s.extend(r, e);
                    if ((i.entryPointInclude.attr("dataDetach", "true"), t.createBlok)) {
                        if (
                            (i.entryPointInclude.find("." + t.createBlok).length ||
                                i.entryPointInclude.append(
                                    "<div class='external-item " +
                                    t.createBlok +
                                    "'><div class='external-item-title'>" +
                                    i.createBlokTitle +
                                    "</div><div class='external-item-content'></div></div>"
                                ),
                                void 0 === t.objinnerEntryPoint)
                        )
                            var n = s("." + t.objClass)
                                .children()
                                .clone()
                                .get(0),
                                o = i.entryPointInclude.find(
                                    "." + t.createBlok + " .external-item-content"
                                );
                        else
                            (n = s("." + t.objClass)
                                .find("." + t.objinnerEntryPoint)
                                .children()
                                .clone()
                                .get(0)),
                            (o = i.entryPointInclude.find(
                                "." + t.createBlok + " .external-item-content"
                            ));
                        return o.append(n), !1;
                    }
                    if (void 0 === t.objinnerEntryPoint)
                        n = s("." + t.objClass)
                        .children()
                        .clone()
                        .get(0);
                    else
                        n = s("." + t.objClass)
                        .find("." + t.objinnerEntryPoint)
                        .children()
                        .clone()
                        .get(0);
                    void 0 !== t.objTitle ?
                        i.entryPointInclude.append(
                            "<div class='external-item " +
                            t.objClass +
                            "'><div class='external-item-title'>" +
                            i.titleObj +
                            "</div><div class='external-item-content'>" +
                            n.outerHTML +
                            "</div></div>"
                        ) :
                        i.entryPointInclude.append(
                            "<div class='external-item " +
                            t.objClass +
                            "'><div class='external-item-content'>" +
                            n.outerHTML +
                            "</div></div>"
                        ),
                        void 0 === t.objTitle &&
                        i.entryPointInclude
                        .find("." + t.objClass)
                        .find(".external-item-content > *:first-child")
                        .addClass(t.objAddClass),
                        "false" != typeof t.objWrapperAddClass &&
                        r.entryPointInclude.addClass(String(e.wrapperAddClass));
                },
            };
        s.fn.movingObjects = function(t) {
            return i[t] ?
                i[t].apply(this, Array.prototype.slice.call(arguments, 1)) :
                "object" != typeof t && t ?
                (console.info("Action " + t + "not found this plugin"), this) :
                i.init.apply(this, arguments);
        };
        var t = s("#pt-header");
        t.find(".single-button").movingObjects({ wrapperAddClass: "extra-layout" }),
            t.hasClass("header-mobile-type-02") &&
            (t
                .find(".pt-desctop-parent-account")
                .movingObjects({
                    innerEntryPoint: "pt-dropdown-inner",
                    createBlok: "my-account",
                    createBlokTitle: "My Account",
                }),
                t
                .find(".pt-desctop-parent-compare")
                .movingObjects({
                    createBlok: "my-account",
                    createBlokTitle: "My Account",
                }),
                t
                .find(".pt-desctop-parent-wishlist")
                .movingObjects({
                    createBlok: "my-account",
                    createBlokTitle: "My Account",
                })),
            t
            .find(".pt-desctop-parent-language")
            .movingObjects({
                titleObj: "Languages",
                innerEntryPoint: "pt-dropdown-inner",
            }),
            t
            .find(".pt-desctop-parent-currency")
            .movingObjects({
                titleObj: "Currency",
                innerEntryPoint: "pt-dropdown-inner",
            }),
            t
            .find(".pt-desctop-parent-submenu")
            .movingObjects({ addClassObj: "list-icon" }),
            t
            .find(".pt-desctop-parent-account")
            .movingObjects({
                innerEntryPoint: "pt-dropdown-inner",
                createBlok: "my-account",
                createBlokTitle: "My Account",
            });
    })(jQuery),
    (p6 = jQuery),
    (q6 = p6("header .pt-dropdown-obj")),
    (r6 = p6("body")),
    (s6 = p6("html")),
    q6.length &&
    (p6(".header-popup-bg").length ||
        r6.append('<div class="header-popup-bg"></div>'),
        r6.on("click", ".pt-dropdown-obj02 li a", function() {
            var t = p6(this).closest(".pt-dropdown-obj02");
            p6(this)
                .closest("li")
                .addClass("active")
                .siblings()
                .removeClass("active"),
                t
                .find(".pt-dropdown-toggle .pt-dropdown-value")
                .html(p6(this).attr("data-value"));
        }),
        p6("header").on("click", ".js-dropdown", function(l) {
            var t,
                e = window.innerWidth || $window.width(),
                i = p6(this),
                n = l.target,
                o = p6(".pt-search"),
                s = o.find(".pt-search-input");
            if (
                (i.hasClass("pt-search") &&
                    p6(".pt-dropdown-toggle").is(n) &&
                    (i.addClass("active"), r6.addClass("pt-open-search"), s.focus()),
                    o.find(".pt-btn-close").is(n))
            )
                return (
                    i.removeClass("active"),
                    s.blur(),
                    r6.removeClass("pt-open-search"), !1
                );
            if (!p6(this).hasClass("pt-search") && p6(".pt-dropdown-toggle").is(n)) {
                var r = p6(this).attr("data-ajax");
                (srcObj = p6("#pt-header .pt-cart .pt-dropdown-menu")),
                void 0 === r ||
                    srcObj.hasClass("pt-is-include") ||
                    (srcObj.addClass("pt-is-include"),
                        p6.ajax({
                            url: r,
                            success: function(t) {
                                var e = p6(t);
                                srcObj.append(e);
                            },
                        })),
                    e <= 1024 ?
                    ((t = i),
                        p6("header").find(".js-dropdown.active").removeClass("active"),
                        t
                        .toggleClass("active")
                        .find(".pt-dropdown-menu")
                        .removeAttr("style"),
                        s6.toggleClass("pt-popup-dropdown"),
                        p6("header .pt-dropdown-menu")
                        .perfectScrollbar()
                        .addClass("perfectScrollbar")) :
                    (function(t) {
                        var e = t,
                            i = l.target;
                        if (e.hasClass("active"))
                            return (
                                e
                                .toggleClass("active")
                                .find(".pt-dropdown-menu")
                                .slideToggle(200),
                                e.find(".ps-container").removeAttr("style")
                            );
                        if (
                            (p6(".pt-desktop-header .js-dropdown").each(function() {
                                    var t = p6(this);
                                    t.hasClass("active") &&
                                        t
                                        .removeClass("active")
                                        .find(".pt-dropdown-menu")
                                        .css("display", "none");
                                }),
                                p6(".pt-dropdown-toggle").is(i) &&
                                e
                                .toggleClass("active")
                                .find(".pt-dropdown-menu")
                                .slideToggle(200),
                                e.hasClass("pt-cart"))
                        ) {
                            p6.fn.getRealDimensions = function(t) {
                                var e = p6(this);
                                if (0 == e.length) return !1;
                                var i = e
                                    .clone()
                                    .show()
                                    .css("visibility", "hidden")
                                    .insertAfter(e),
                                    n = {
                                        width: t ? i.outerWidth() : i.innerWidth(),
                                        height: t ? i.outerHeight() : i.innerHeight(),
                                        offsetTop: i.offset().top,
                                        offsetLeft: i.offset().left,
                                    };
                                return i.remove(), n;
                            };
                            var n = p6(".pt-cart-content").getRealDimensions().height,
                                o = window.innerHeight,
                                s = n + p6("#pt-header").height(),
                                r = p6(".pt-stuck-nav");
                            if (r.hasClass("stuck")) var a = o - r.height();
                            else var a = o - p6("#pt-header").height();
                            o <= s &&
                                p6("header .pt-dropdown-menu .pt-cart-layout")
                                .css({ height: a + "px" })
                                .perfectScrollbar()
                                .addClass("perfectScrollbar"),
                                p6(window).resize(
                                    debouncer(function(t) {
                                        var e = p6(".pt-cart");
                                        e.hasClass("active") &&
                                            p6(".pt-cart .pt-dropdown-toggle").trigger("click");
                                    })
                                );
                        }
                    })(i);
            }

            function a() {
                return (
                    p6(".js-dropdown.active").removeClass("active"),
                    s6.removeClass("pt-popup-dropdown"),
                    p6("header .pt-dropdown-menu")
                    .removeClass("perfectScrollbar")
                    .perfectScrollbar("destroy"), !1
                );
            }
            p6(document).mouseup(function(t) {
                var e = window.innerWidth || $window.width();
                i.is(t.target) ||
                    0 !== i.has(t.target).length ||
                    i.each(function() {
                        i.hasClass("active") &&
                            i.hasClass("pt-search") &&
                            o.find(".pt-btn-close").trigger("click"),
                            i.hasClass("active") &&
                            !i.hasClass("pt-search") &&
                            (e <= 1024 ?
                                a() :
                                p6(".js-dropdown").each(function() {
                                    p6(this).hasClass("active") &&
                                        p6(this)
                                        .removeClass("active")
                                        .find(".pt-dropdown-menu")
                                        .css("display", "none");
                                }));
                    }),
                    i.find(".pt-mobile-add .pt-close").is(t.target) && a();
            });
        })),
    (d7 = jQuery("#pt-header .js-header-slider")),
    d7.length &&
    d7.slick({
        autoplay: !0,
        autoplaySpeed: 5500,
        dots: !1,
        arrows: !1,
        infinite: !0,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: !1,
    }),
    (function(r) {
        var t = r("header"),
            e = r("body"),
            s = t.find(".pt-stuck-nav"),
            i = r(".pt-menu-categories"),
            a = r(window);
        i.find("nav > ul > li"),
            r(this).find(".dropdown-menu"),
            t.find(".pt-categories-toggle");
        i.length &&
            (e.on("click", ".pt-menu-categories button", function(t) {
                    t.preventDefault(),
                        r(this)
                        .closest(".pt-menu-categories")
                        .toggleClass("opened")
                        .find(".pt-dropdown-menu")
                        .slideToggle(200);
                }),
                i.find("nav > ul > li").each(function() {
                    r(this).find(".dropdown-menu").length &&
                        r(this).closest("li").addClass("pt-submenu");
                }),
                i.find(".pt-dropdown-menu li").hover(function(t) {
                    var e,
                        i,
                        n,
                        o = r(this),
                        s = r(this).find(".dropdown-menu");
                    r(this).toggleClass("acitve", "mouseenter" === t.type),
                        s.length &&
                        ((i = (e = o).offset().top),
                            (n = e.find(".dropdown-menu")).offset().top + n.height() < i &&
                            (e.css({ position: "relative" }),
                                e
                                .find(".dropdown-menu")
                                .css({ top: "inherit", bottom: "-13px" })));
                }),
                i
                .find(".pt-megamenu-submenu ul li")
                .on("mouseenter", function() {
                    var t = r(this).find("ul:first");
                    if (t.length) {
                        var e = window.innerWidth,
                            i = parseInt(t.css("width"), 10) + 20,
                            n = this.getBoundingClientRect().right,
                            o = this.getBoundingClientRect().left;
                        e - n < i ? t.addClass("right") : o < i && t.removeClass("right");
                    }
                })
                .on("mouseleave", function() {
                    r(this).find("ul:first").removeClass("right-popup");
                }),
                (function() {
                    if (!s.hasClass("disabled")) {
                        var e = t.find(".pt-desctop-parent-menu-categories"),
                            i = t.find(".pt-stuck-desctop-menu-categories"),
                            n = t.find(".pt-mobile-parent-menu-categories"),
                            o = t.find(".pt-stuck-mobile-menu-categories");
                        a.scroll(function() {
                            var t = r("header").innerHeight();
                            a.scrollTop() > t ?
                                (i.append(e.find(".pt-menu-categories").detach()),
                                    o.append(n.find(".pt-categories-toggle").detach())) :
                                (e.append(i.find(".pt-menu-categories").detach()),
                                    n.append(o.find(".pt-categories-toggle").detach()));
                        });
                    }
                })());
    })(jQuery),
    (K7 = jQuery),
    (L7 = K7("#pt-header")),
    ($ptSearchObj = L7.find(".pt-search")),
    ($ptSearchObjPopupInput = $ptSearchObj.find(".pt-search-input")),
    ($ptSearchObjPopupResults = $ptSearchObj.find(".search-results")),
    ($ptSearch2Obj = L7.find(".pt-search-02")),
    ($ptSearch2ObjPopupInput = $ptSearch2Obj.find(".pt-search-input")),
    ($ptSearch2ObjPopupResults = $ptSearch2Obj.find(".search-results")),
    $ptSearchObjPopupInput.length &&
    $ptSearchObjPopupResults.length &&
    ($ptSearchObj.on("input", function(t) {
            if (K7(t.target).val()) {
                $ptSearchObjPopupResults.fadeIn("200");
                var i = K7("#pt-header").find(".search-results");
                i.hasClass("pt-is-include") ||
                    (i.addClass("pt-is-include"),
                        K7.ajax({
                            url: "ajax-content/ajax_search_results.html",
                            success: function(t) {
                                var e = K7(t);
                                i.append(e), new LazyLoad();
                            },
                        }));
            }
        }),
        $ptSearchObjPopupInput.blur(function() {
            $ptSearchObjPopupResults.fadeOut("200");
        })),
    $ptSearch2ObjPopupInput.length &&
    $ptSearch2ObjPopupResults.length &&
    ($ptSearch2Obj.on("input", function(t) {
            K7(t.target).val() && $ptSearch2ObjPopupResults.fadeIn("200");
        }),
        $ptSearch2ObjPopupInput.blur(function() {
            $ptSearch2ObjPopupResults.fadeOut("200");
        })),
    (R7 = jQuery),
    (S7 = R7("#pt-header")),
    (U7 = S7.find(".pt-top-panel")),
    (V7 = U7.find(".js-toppanel-link-dropdown")),
    U7.each(function() {
        R7(this).on("click", ".js-removeitem", function() {
            R7(this).closest(U7).slideUp(200);
        });
    }),
    window.innerWidth || $window.width(),
    R7(document).on(
        "mouseenter mouseleave click",
        ".js-toppanel-link-dropdown",
        function(t) {
            var e = R7(this),
                i = (t.target, window.innerWidth);
            "mouseenter" === t.type && t.relatedTarget && 1024 < i ?
                e.addClass("is-active") :
                "mouseleave" === t.type &&
                t.relatedTarget &&
                1024 < i &&
                e.removeClass("is-active"),
                "click" === t.type && i <= 1024 && e.toggleClass("is-active");
        }
    ),
    R7(window).resize(function(t) {
        U7.find(".js-toppanel-link-dropdown").each(function() {
            R7(this).hasClass("is-active") && R7(this).removeClass("is-active");
        });
    }),
    R7(document).mouseup(function(t) {
        U7.is(t.target) ||
            0 !== U7.has(t.target).length ||
            V7.removeClass("is-active");
    }),
    (h8 = jQuery),
    (i8 = h8(".pt-input-counter")),
    i8.length &&
    (i8.find(".minus-btn, .plus-btn").on("click", function(t) {
            var e = h8(this).parent().find("input"),
                i =
                parseInt(e.val(), 10) +
                parseInt("plus-btn" === t.currentTarget.className ? 1 : -1, 10);
            e.val(i).change();
        }),
        i8
        .find("input")
        .change(function() {
            var t = h8(this),
                e = parseInt(t.val(), 10),
                i = parseInt(t.attr("size"), 10);
            (e = Math.min(e, i)), (e = Math.max(e, 1)), t.val(e);
        })
        .on("keypress", function(t) {
            13 === t.keyCode && t.preventDefault();
        })),
    (s8 = jQuery),
    s8(window).on("load", function() {
        s8("#instafeed").each(function() {
            var t = s8(this).data("limitimg"),
                e = s8(this).data("username");
            s8.instagramFeed({
                username: e,
                container: "#instafeed",
                display_profile: !1,
                display_biography: !1,
                display_gallery: !0,
                styling: !1,
                items: t,
                margin: 0,
            });
        });
    }),
    new LazyLoad(),
    (v8 = jQuery),
    (w8 = v8("#pt-pageContent .pt-collapse")),
    w8.length &&
    ((z8 = (y8 = w8).find(".pt-collapse-title")),
        (A8 = y8.find(".pt-collapse-content")),
        y8.each(function() {
            v8(this).hasClass("open") ?
                v8(this).find(A8).slideDown() :
                v8(this).find(A8).slideUp();
        }),
        z8.on("click", function(t) {
            t.preventDefault();
            var e = v8(this).parent(),
                i = v8(this).next(".pt-collapse-content");
            e.hasClass("open") ?
                (e.removeClass("open"), i.slideUp(300)) :
                (e.addClass("open"), i.slideDown(300));
        })),
    (function(l) {
        var t = l("#pt-pageContent"),
            n = t.find(".leftColumn.aside"),
            d = t.find(".pt-filters-options"),
            c = d.find(".pt-sort"),
            h = t.find(".pt-product-listing"),
            u = (n = t.find(".leftColumn.aside")).find(".pt-filter-detach-option"),
            i = l(window),
            o = l("body"),
            s = l("html"),
            e = n.find(".pt-btn-col-close"),
            r = d.find(".pt-btn-toggle a");

        function a(i) {
            function t() {
                if (!c.hasClass("pt-not-detach")) {
                    var t = c.find("> *").detach();
                    u.find(".filters-row-select").append(t);
                }
            }

            function e() {
                if (!c.hasClass("pt-not-detach")) {
                    var t = u.find(".filters-row-select > *").detach();
                    c.append(t);
                }
            }
            d.hasClass("desctop-no-sidebar") &&
                !d.hasClass("filters-detach-mobile") &&
                (i <= 1024 ? t() : e()),
                d.hasClass("filters-detach-mobile") && (i <= 1024 ? t() : e()),
                d.hasClass("desctop-no-sidebar") || (i <= 1024 ? t() : e()),
                h.removeClassFirstPart("pt-col-*");
            var n = d.find(".pt-quantity"),
                o = h.find(".pt-col-item:first"),
                s = (function() {
                    if (n.length && !n.hasClass("pt-disabled"))
                        return (
                            parseInt(o.css("flex").replace("0 0", "").replace("%", ""), 10) ||
                            parseInt(o.css("max-width"), 10)
                        );
                })(),
                r = d.find(".pt-grid-switch");

            function a(t, e) {
                t.find(e).addClass("active").siblings().removeClass("active"),
                    i <= 1024 ?
                    (function(t, e) {
                        t.find(".pt-show").removeClass("pt-show"),
                            t.find(".pt-show-siblings").removeClass("pt-show-siblings");
                        var i = t.find(e);
                        i.addClass("pt-show"), i.prev().addClass("pt-show-siblings");
                    })(t, e) :
                    (function(t, e) {
                        t.find(".pt-show").removeClass("pt-show"),
                            t.find(".pt-show-siblings").removeClass("pt-show-siblings");
                        var i = t.find(e);
                        i.addClass("pt-show"),
                            i.next().addClass("pt-show-siblings"),
                            i.prev().addClass("pt-show-siblings"),
                            1 === l(".pt-quantity .pt-show-siblings").length &&
                            t
                            .find(".pt-show-siblings")
                            .prev()
                            .addClass("pt-show-siblings");
                    })(t, e);
            }
            16 == s ?
                a(n, ".pt-col-six") :
                25 == s ?
                a(n, ".pt-col-four") :
                33 == s ?
                a(n, ".pt-col-three") :
                50 == s ?
                a(n, ".pt-col-two") :
                100 == s && a(n, ".pt-col-one"),
                h.attr("data-gridone") &&
                (l(".pt-filters-options .pt-grid-switch").trigger("click"),
                    setTimeout(function() {
                        l(".pt-product-listing").fadeTo(0, 1);
                    }, 210)),
                n.on("click", "a", function(t) {
                    t.preventDefault(),
                        n.hasClass("pt-disabled") &&
                        (h
                            .removeClass("pt-row-view")
                            .find(".pt-col-item > div")
                            .removeClass("pt-view"),
                            n.removeClass("pt-disabled"),
                            r.removeClass("active")),
                        n.find("a").removeClass("active");
                    var e = l(this).addClass("active").attr("data-value");
                    h.removeClassFirstPart("pt-col-*").addClass(e);
                });
        }
        (jQuery.fn.removeClassFirstPart = function(n) {
            return this.removeClass(function(t, e) {
                var i = n.replace(/\*/g, "\\S+");
                return (e.match(new RegExp("\\b" + i, "g")) || []).join(" ");
            });
        }),
        d.find(".pt-grid-switch").on("click", function(t) {
                t.preventDefault(),
                    l(this).toggleClass("active"),
                    h
                    .toggleClass("pt-row-view")
                    .find(".pt-col-item > div")
                    .toggleClass("pt-view"),
                    d.find(".pt-quantity").toggleClass("pt-disabled");
            }),
            i.on("load", function() {
                var t = window.innerWidth || i.width();
                d.length && a(t);
            });
        var p,
            f = i.width();
        i.on("resize", function() {
                if (h.attr("data-gridone")) return !1;
                var t = i.width();
                if (t !== f) {
                    f = t;
                    var e = window.innerWidth || i.width();
                    d.length && a(e),
                        n.hasClass("column-open") &&
                        n.length &&
                        n.find(".pt-btn-col-close a").trigger("click");
                }
            }),
            n &&
            e &&
            r &&
            ((p = n.find(".pt-btn-col-close a")),
                l(".pt-btn-toggle a").on("click", function(t) {
                    t.preventDefault();
                    var e = o.scrollTop() || s.scrollTop();
                    n.toggleClass("column-open").perfectScrollbar(),
                        o
                        .css("top", -e)
                        .addClass("no-scroll")
                        .append('<div class="modal-filter"></div>');
                    var i = l(".modal-filter").fadeTo("fast", 1);
                    return (
                        i.length &&
                        i.on("click", function() {
                            p.trigger("click");
                        }), !1
                    );
                }),
                e.on("click", function(t) {
                    t.preventDefault(),
                        n.removeClass("column-open").perfectScrollbar("destroy");
                    var e = -1 * parseInt(o.css("top").replace("px", ""), 10);
                    o.removeAttr("style").removeClass("no-scroll").scrollTop(e),
                        s.removeAttr("style").scrollTop(e),
                        l(".modal-filter").off().remove();
                }));
    })(jQuery),
    (H9 = jQuery),
    H9("#pt-pageContent .pt-lookbook").length &&
    (function() {
        var t = H9("body");

        function i() {
            var t = H9(".pt-lookbook-popup")
                .removeAttr("style")
                .find(".pt-hotspot-content")
                .detach();
            H9(".pt-hotspot.active")
                .removeClass("active")
                .find(".pt-content-parent")
                .append(t);
        }
        (objPopup = H9(".pt-lookbook-popup")),
        (ptwindowWidth = window.innerWidth || $window.width()),
        objPopup.length ||
            t.append(
                '<div class="pt-lookbook-popup"><div class="pt-lookbook-container"></div></div>'
            ),
            t.on("mouseenter click", ".pt-hotspot", function(t) {
                var h = H9(this),
                    e = (t.target, window.innerWidth);
                if (
                    ("mouseenter" === t.type &&
                        789 <= e &&
                        (function(t) {
                            var e;
                            (e = H9(".pt-lookbook-popup")
                                .removeAttr("style")
                                .find(".pt-hotspot-content")
                                .detach()),
                            H9(".pt-hotspot.active")
                                .removeClass("active")
                                .find(".pt-content-parent")
                                .append(e);
                            var i = parseInt(h.offset().top, 10),
                                n = h.offset().left,
                                o = h.addClass("active").find(".pt-hotspot-content").detach(),
                                s = H9(".pt-btn").innerHeight() / 2,
                                r = i + s,
                                a = H9(".pt-hotspot-content").innerWidth();
                            H9(".pt-lookbook-popup")
                                .find(".pt-lookbook-container")
                                .append(o);
                            var l,
                                d,
                                c = ptwindowWidth / 2;
                            c < n ?
                                ((d = n - a - 7),
                                    H9(".pt-lookbook-popup")
                                    .css({ top: r, left: d, display: "block" }, 300)
                                    .animate({ marginLeft: "26px", opacity: 1 }, 300)) :
                                ((l = n + 45),
                                    H9(".pt-lookbook-popup")
                                    .css({ top: r, left: l, display: "block" })
                                    .animate({ marginLeft: "-26px", opacity: 1 }));
                        })(),
                        ptwindowWidth <= 789 && H9(".pt-btn-close").is(t.target))
                )
                    return (
                        (function() {
                            if (H9(".pt-lookbook-container").is(":has(div)")) {
                                var t = H9(".pt-lookbook-container")
                                    .find(".pt-hotspot-content")
                                    .detach();
                                H9(".pt-hotspot.active").find(".pt-content-parent").append(t);
                            }
                            H9(".pt-lookbook")
                                .find(".pt-hotspot.active")
                                .each(function(t) {
                                    var e = H9(this),
                                        i = e.attr("data-top") + "%",
                                        n = e.attr("data-left") + "%";
                                    e.removeClass("active")
                                        .removeAttr("style")
                                        .css({ top: i, left: n })
                                        .find(".pt-btn")
                                        .removeAttr("style")
                                        .next()
                                        .removeAttr("style");
                                });
                        })(), !1
                    );
                if ("click" === t.type && e < 789 && H9(".pt-btn").is(t.target)) {
                    var i = h.attr("data-top") + "%",
                        n = h.attr("data-left") + "%";
                    h.find(".pt-btn").css({ top: i, left: n }),
                        h.css({ top: "0px", left: "0px", width: "100%", height: "100%" }),
                        h.addClass("active").siblings().removeClass("active"),
                        h.find(".pt-content-parent").fadeIn(200);
                }
            }),
            H9(window).resize(
                debouncer(function(t) {
                    var e;
                    (window.innerWidth || $window.width()) <= 789
                        ?
                        ((e = H9(".pt-lookbook-popup")
                                .removeAttr("style")
                                .find(".pt-hotspot-content")
                                .detach()),
                            H9(".pt-hotspot.active")
                            .removeClass("active")
                            .find(".pt-content-parent")
                            .append(e)) :
                        (i(),
                            H9(".pt-hotspot")
                            .find(".pt-content-parent")
                            .each(function() {
                                var t = H9(this);
                                if ("block" == t.css("display")) {
                                    var e = t.closest(".pt-hotspot"),
                                        i = e.attr("data-top") + "%",
                                        n = e.attr("data-left") + "%";
                                    t.removeAttr("style").prev().removeAttr("style"),
                                        e.removeAttr("style").css({ top: i, left: n });
                                }
                            }));
                })
            ),
            H9("body").on(
                "click",
                ".pt-lookbook-popup .pt-btn-close",
                function(t) {
                    t.preventDefault(), i();
                }
            ),
            H9("body").on(
                "click",
                ".pt-hotspot-content .pt-btn-close",
                function(t) {
                    t.preventDefault(), i();
                }
            );
    })(),
    (function(o) {
        var e = o("#pt-pageContent .mainSliderSlick-js");

        function t() {
            var t = e;
            t.on("init", function(t, e) {
                    s(o("div.slide:first-child").find("[data-animation]"));
                }),
                t.on("beforeChange", function(t, e, i, n) {
                    s(
                        o('div.slide[data-slick-index="' + n + '"]').find(
                            "[data-animation]"
                        )
                    );
                }),
                t.slick({
                    arrows: !1,
                    dots: !0,
                    autoplay: !0,
                    autoplaySpeed: 5500,
                    fade: !0,
                    speed: 1e3,
                    pauseOnHover: !1,
                    pauseOnDotsHover: !0,
                    responsive: [
                        { breakpoint: 1025, settings: { arrows: !1, dots: !0 } },
                    ],
                });
        }

        function s(t) {
            t.each(function() {
                var t = o(this),
                    e = t.data("animation-delay"),
                    i = "animated " + t.data("animation");
                t.css({ "animation-delay": e, "-webkit-animation-delay": e }),
                    t
                    .addClass(i)
                    .one(
                        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                        function() {
                            t.removeClass(i);
                        }
                    ),
                    t.hasClass("animate") && t.removeClass("animation");
            });
        }

        function i() {
            var t = e.find(".slick-dots");
            "1" == t.find("li").length && t.addClass("hide");
        }
        t(),
            i(),
            o(window).on("resize", function() {
                i();
            });
    })(jQuery),
    (Taa = jQuery),
    Taa(".modal").on("shown.bs.modal", function(t) {
        var i = Taa(this).attr("data-srcvalue") || "false",
            n = Taa(this).find(".modal-dialog");
        if ("false" == i) return !1;
        Taa.ajax({
            url: i,
            success: function(t) {
                var e = Taa(t);
                n.append(e),
                    "ajax-content/ajax_modal-quick-view.html" == i &&
                    Taa("#ModalquickView .pt-gallery").galleryPreview({});
            },
        });
    }),
    jQuery("body").on(
        "click",
        "#ModalDiscount .pt-modal-discount .checkbox-group",
        function() {
            localStorage.setItem("showedmodal", "toshow");
        }
    );
var settings = { singleImg: "768" },
    methods = {
        init: function(t) {
            $.extend(settings, t);
            return this.each(function() {
                var t = $(this).find(".pt-gallery-carousel");
                methods.initCarusel(t), methods.changeImg(), methods.clickImg();
            });
        },
        resize: function() {
            $(window).resize(function() {
                var t = window.innerWidth;
                791 <= t ? methods.clickImg() : t < 790 && methods.offClickImg();
            });
        },
        changeImg: function(t) {
            $(".pt-gallery-single-img img").attr("src", t);
        },
        currentImg: function() {
            var t = $(".pt-gallery-carousel").find(".slick-current img").attr("src");
            methods.changeImg(t);
        },
        clickImg: function(t) {
            $("body").on("click", ".pt-gallery-carousel li img", function(t) {
                var e = $(this).attr("src");
                return (
                    methods.changeImg(e),
                    $(this)
                    .closest("li")
                    .addClass("slick-current")
                    .siblings()
                    .removeClass("slick-current"), !1
                );
            });
        },
        offClickImg: function() {
            $("body").off("click", ".pt-gallery-carousel li img");
        },
        initCarusel: function(e) {
            e.slick({
                dots: !1,
                arrows: !1,
                infinite: !0,
                speed: 300,
                slidesToShow: 6,
                slidesToScroll: 1,
                adaptiveHeight: !0,
                responsive: [
                    { breakpoint: 1240, settings: { slidesToShow: 4 } },
                    { breakpoint: 1024, settings: { slidesToShow: 3 } },
                    { breakpoint: 791, settings: { slidesToShow: 3 } },
                ],
            });
            var t = $(".pt-gallery-button");
            t.length &&
                (t.find(".slick-next").on("click", function(t) {
                        e.slick("slickNext"), methods.currentImg();
                    }),
                    t.find(".slick-prev").on("click", function(t) {
                        e.slick("slickPrev"), methods.currentImg();
                    }));
        },
    };
($.fn.galleryPreview = function(t) {
    return methods[t] ?
        methods[t].apply(this, Array.prototype.slice.call(arguments, 1)) :
        "object" != typeof t && t ?
        (console.info("Action " + t + "not found this plugin"), this) :
        methods.init.apply(this, arguments);
}),
$("#ModalquickView .pt-gallery").galleryPreview({}),
    $("body").on("shown.bs.modal", $("#ModalquickView"), function(t) {
        initScroll();
    }),
    $("body").on("hidden.bs.modal", $("#ModalquickView"), function(t) {
        destroyScroll();
    }),
    ($.fn.getRealDimensions = function(t) {
        var e = $(this);
        if (0 == e.length) return !1;
        var i = e.clone().show().css("visibility", "hidden").insertAfter(e),
            n = {
                width: t ? i.outerWidth() : i.innerWidth(),
                height: t ? i.outerHeight() : i.innerHeight(),
                offsetTop: i.offset().top,
                offsetLeft: i.offset().left,
            };
        return i.remove(), n;
    });
var ttCachedWidth = $(window).width(),
    yba,
    Bba,
    Eba,
    Mba,
    Nba;

function initScroll() {
    window.innerWidth;
    var t = window.innerHeight,
        e = $("#ModalquickView .pt-modal-quickview"),
        i = parseInt(e.getRealDimensions().height),
        n = parseInt(t - 80);
    t < i ? e.css("height", n).perfectScrollbar() : e.perfectScrollbar("destroy");
}

function destroyScroll() {
    $("#ModalquickView")
        .find(".ps-container")
        .perfectScrollbar("destroy")
        .removeAttr("style");
}
$(window).on("resize", function() {
        $("body").hasClass("modal-open");
        var t = $(window).width();
        t !== ttCachedWidth && ((ttCachedWidth = t), destroyScroll(), initScroll());
    }),
    (yba = jQuery),
    yba(".modal").on("shown.bs.modal", function(t) {
        var e = yba(this);
        yba(this)
            .find(".pt-options-swatch li a")
            .each(function() {
                yba(this).css({
                    "background-image": "url(" + yba(this).attr("data-src") + ")",
                });
            }),
            setTimeout(function() {
                e.find(".lazyload").each(function() {
                    yba(this).hasClass("loaded") ||
                        yba(this).attr("src", yba(this).data("src"));
                });
            }, 0.2);
    }),
    (Bba = jQuery),
    Bba(".modal").on("shown.bs.modal", function(t) {
        var e = Bba(this).find(".slick-slider");
        e.length &&
            e.each(function() {
                Bba(this).slick("getSlick").refresh();
            });
    }),
    (Eba = jQuery),
    Eba(".modal").each(function() {
        var t,
            e = Eba(this);
        if (
            (e.attr("data-pause"),
                "toshow" == localStorage.getItem(e.attr("data-localStorage")))
        )
            return !1;
        if (e.attr("data-pause")) {
            var i = Eba(this).attr("data-pause");
            (t = e),
            setTimeout(function() {
                t.modal("show");
            }, i);
        }
    }),
    (Mba = jQuery),
    (Nba = Mba("#modalVideoProduct")),
    Nba.length &&
    Nba.on("show.bs.modal", function(t) {
        var e = Mba(t.relatedTarget),
            i = e.attr("data-value"),
            n = e.attr("data-poster"),
            o = e.attr("data-type");
        ("youtube" !== o && "vimeo" !== o && void 0 !== o) ||
        Mba('<iframe src="' + i + '" allowfullscreen></iframe>').appendTo(
                Mba(this).find(".modal-video-content")
            ),
            "video" === o &&
            Mba(
                '<div class="pt-video-block pt-video-icon"><a href="#" class="link-video"><span class="pt-icon-play"><svg><use xlink:href="#icon-play"></use></svg></span><span class="pt-icon-pause"><svg><use xlink:href="#icon-pause"></use></svg></span></a><video class="movie" src="' +
                i +
                '" poster="' +
                n +
                '" allowfullscreen></video></div>'
            ).appendTo(Mba(this).find(".modal-video-content"));
    }).on("hidden.bs.modal", function() {
        Mba(this).find(".modal-video-content").empty();
    });
var _createClass = (function() {
        function n(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n);
            }
        }
        return function(t, e, i) {
            return e && n(t.prototype, e), i && n(t, i), t;
        };
    })(),
    _typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?

    function(t) {
        return typeof t;
    } :
    function(t) {
        return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype ?
            "symbol" :
            typeof t;
    },
    eca,
    fca,
    wda,
    Bea,
    Dea,
    Eea,
    Jea,
    Kea,
    Mea,
    Oea,
    Pea,
    Rea,
    yfa,
    zfa,
    Zfa,
    $fa,
    _fa,
    aga,
    mia,
    nia,
    Tia;

function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
}

function itemOptionSwitcher() {
    var t = $("#pt-pageContent .pt-options-swatch");
    t.length &&
        t.each(function() {
            var t = $(this),
                i = t.hasClass("js-change-img"),
                e = t.find(".options-color-img");
            t.on("click", "li", function(t) {
                    var e = $(this);
                    return (
                        e.addClass("active").siblings().removeClass("active"),
                        i &&
                        (function(t) {
                            var e = t.find(".options-color-img"),
                                i = e.attr("data-src"),
                                n = (e.attr("data-src-demo"), e.attr("data-src-hover") || !1),
                                o = t.closest(".pt-product").find(".pt-image-box"),
                                s = o.find(".pt-img img"),
                                r = o.find(".pt-img-roll-over img");
                            if ((i.length && s.attr("src", i), i.length)) {
                                var a = r.closest(".pt-img-roll-over");
                                r.attr("src", n),
                                    a.hasClass("disable") && a.removeClass("disable");
                            }!1 === n && r.closest(".pt-img-roll-over").addClass("disable");
                        })(e), !1
                    );
                }),
                e.length &&
                $(e).each(function() {
                    var t = $(this).attr("data-src") || !1,
                        e = $(this).attr("data-src-demo") || !1;
                    0 != e ?
                        $(this).css({ "background-image": "url(" + e + ")" }) :
                        $(this).css({ "background-image": "url(" + t + ")" });
                });
        });
}
(eca =
    "undefined" != typeof global ?
    global :
    "undefined" != typeof window ?
    window :
    void 0),
(fca = function(r) {
    var n = (function() {
        for (
            var t,
                e =
                "transform webkitTransform mozTransform oTransform msTransform".split(
                    " "
                ),
                i = 0; void 0 === t;

        )
            (t = null != document.createElement("div").style[e[i]] ? e[i] : void 0),
            i++;
        return t;
    })();
    !(function() {
        for (
            var s = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !r.requestAnimationFrame;
            ++e
        )
            (r.requestAnimationFrame = r[t[e] + "RequestAnimationFrame"]),
            (r.cancelAnimationFrame =
                r[t[e] + "CancelAnimationFrame"] ||
                r[t[e] + "CancelRequestAnimationFrame"]);
        r.requestAnimationFrame ||
            (r.requestAnimationFrame = function(t, e) {
                var i = new Date().getTime(),
                    n = Math.max(0, 16 - (i - s)),
                    o = r.setTimeout(function() {
                        t(i + n);
                    }, n);
                return (s = i + n), o;
            }),
            r.cancelAnimationFrame ||
            (r.cancelAnimationFrame = function(t) {
                clearTimeout(t);
            });
    })(),
    Element.prototype.matches ||
        (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
        (Element.prototype.closest = function(t) {
            var e = this;
            if (!document.documentElement.contains(e)) return null;
            do {
                if (e.matches(t)) return e;
                e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType);
            return null;
        });
    var o = (function() {
        function i(t, e) {
            _classCallCheck(this, i),
                (this.element = t),
                (this.elementContainer = t),
                (this.lastPosition = -1),
                (this.gap = 200),
                (this.defaults = {
                    delay: 0.6,
                    orientation: "up",
                    scale: 1.3,
                    overflow: !1,
                    transition: "cubic-bezier(0,0,0,1)",
                    breakpoint: !1,
                }),
                (this.settings = Object.assign(this.defaults, e)),
                (this.settings.breakpoint &&
                    document.documentElement.clientWidth <= this.settings.breakpoint) ||
                ((this.init = this.init.bind(this)),
                    (this.animationFrame = this.animationFrame.bind(this)),
                    (this.handleResize = this.handleResize.bind(this)),
                    this.isImageLoaded(this.element) ?
                    this.init() :
                    this.element.addEventListener("load", this.init));
        }
        return (
            _createClass(i, [{
                    key: "init",
                    value: function() {
                        !1 === this.settings.overflow && this.wrapElement(),
                            this.setStyle(),
                            this.getElementOffset(),
                            this.getViewportOffsetHeight(),
                            this.animationFrame(),
                            r.addEventListener("resize", this.handleResize);
                    },
                },
                {
                    key: "isImageLoaded",
                    value: function() {
                        return (!!this.element.complete &&
                            (void 0 === this.element.naturalWidth ||
                                0 !== this.element.naturalWidth)
                        );
                    },
                },
                {
                    key: "isVisible",
                    value: function() {
                        return (
                            this.elementBottomX > this.viewportTop - this.gap &&
                            this.elementTopX < this.viewportBottom + this.gap
                        );
                    },
                },
                {
                    key: "wrapElement",
                    value: function() {
                        var t = this.element.closest("picture") || this.element,
                            e = document.createElement("div");
                        e.classList.add("simpleParallax"),
                            (e.style.overflow = "hidden"),
                            t.parentNode.insertBefore(e, t),
                            e.appendChild(t),
                            (this.elementContainer = e);
                    },
                },
                {
                    key: "unWrapElement",
                    value: function() {
                        for (
                            var t = this.elementContainer.parentNode; this.elementContainer.firstChild;

                        )
                            t.insertBefore(
                                this.elementContainer.firstChild,
                                this.elementContainer
                            );
                        t.removeChild(this.elementContainer);
                    },
                },
                {
                    key: "setStyle",
                    value: function() {
                        !1 === this.settings.overflow &&
                            (this.element.style[n] = "scale(" + this.settings.scale + ")"),
                            0 < this.settings.delay &&
                            (this.element.style.transition =
                                "transform " +
                                this.settings.delay +
                                "s " +
                                this.settings.transition),
                            (this.element.style.willChange = "transform");
                    },
                },
                {
                    key: "unSetStyle",
                    value: function() {
                        (this.element.style.willChange = ""),
                        (this.element.style[n] = ""),
                        (this.element.style.transition = "");
                    },
                },
                {
                    key: "getElementOffset",
                    value: function() {
                        var t = this.elementContainer.getBoundingClientRect();
                        (this.elementHeight = t.height),
                        (this.elementTopX = t.top + r.pageYOffset),
                        (this.elementBottomX = this.elementHeight + this.elementTopX);
                    },
                },
                {
                    key: "getViewportOffsetTop",
                    value: function() {
                        this.viewportTop = r.pageYOffset;
                    },
                },
                {
                    key: "getViewportOffsetHeight",
                    value: function() {
                        this.viewportHeight = document.documentElement.clientHeight;
                    },
                },
                {
                    key: "getViewportOffsetBottom",
                    value: function() {
                        this.viewportBottom = this.viewportTop + this.viewportHeight;
                    },
                },
                {
                    key: "handleResize",
                    value: function() {
                        this.getViewportOffsetHeight(),
                            this.getElementOffset(),
                            this.getRangeMax();
                    },
                },
                {
                    key: "getRangeMax",
                    value: function() {
                        var t = this.element.clientHeight;
                        (this.rangeMax = t * this.settings.scale - t),
                        ("down" !== this.settings.orientation &&
                            "right" !== this.settings.orientation) ||
                        (this.rangeMax *= -1);
                    },
                },
                {
                    key: "getTranslateValue",
                    value: function() {
                        var t = (
                            (this.viewportBottom - this.elementTopX) /
                            ((this.viewportHeight + this.elementHeight) / 100)
                        ).toFixed(1);
                        return (
                            (t = Math.min(100, Math.max(0, t))),
                            this.oldPercentage !== t &&
                            (this.rangeMax || this.getRangeMax(),
                                (this.translateValue = (
                                    (t / 100) * this.rangeMax -
                                    this.rangeMax / 2
                                ).toFixed(0)),
                                this.oldTranslateValue !== this.translateValue &&
                                ((this.oldPercentage = t),
                                    (this.oldTranslateValue = this.translateValue), !0))
                        );
                    },
                },
                {
                    key: "animate",
                    value: function() {
                        var t,
                            e = 0,
                            i = 0;
                        "left" === this.settings.orientation ||
                            "right" === this.settings.orientation ?
                            (i = this.translateValue + "px") :
                            (e = this.translateValue + "px"),
                            (t = !1 === this.settings.overflow ?
                                "scale(" +
                                this.settings.scale +
                                ") translate3d(" +
                                i +
                                ", " +
                                e +
                                ", 0)" :
                                "translate3d(" + i + ", " + e + ", 0)"),
                            (this.element.style[n] = t);
                    },
                },
                {
                    key: "proceedElement",
                    value: function() {
                        this.isVisible() && this.getTranslateValue() && this.animate();
                    },
                },
                {
                    key: "animationFrame",
                    value: function() {
                        this.getViewportOffsetTop(),
                            this.lastPosition !== this.viewportTop ?
                            (this.getViewportOffsetBottom(),
                                this.proceedElement(),
                                (this.frameID = r.requestAnimationFrame(
                                    this.animationFrame
                                )),
                                (this.lastPosition = this.viewportTop)) :
                            (this.frameID = r.requestAnimationFrame(
                                this.animationFrame
                            ));
                    },
                },
                {
                    key: "destroy",
                    value: function() {
                        this.unSetStyle(), !1 === this.settings.overflow && this.unWrapElement(),
                            r.cancelAnimationFrame(this.frameID),
                            r.removeEventListener("resize", this.handleResize);
                    },
                },
            ]),
            i
        );
    })();
    return function(t, e) {
        if (t.length)
            for (var i = 0; i < t.length; i++) new o(t[i], e);
        else new o(t, e);
    };
}),
"function" == typeof define && define.amd ?
    define([], function() {
        return fca(eca);
    }) :
    "object" ===
    ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ?
    (module.exports = fca(eca)) :
    (eca.simpleParallax = fca(eca)),
    (function(o) {
        var t = o("#pt-pageContent .js-init-parallax");

        function e() {
            t.each(function() {
                var t = o(this),
                    e = o(this).data("orientation"),
                    i = o(this).data("overflow"),
                    n = o(this).data("scale");
                new simpleParallax(t, {
                    overflow: i || !1,
                    scale: n || 1.2,
                    breakpoint: 790,
                    orientation: e,
                });
            });
        }
        t.length && e(),
            o(window).resize(function(t) {
                790 < (window.innerWidth || $window.width()) && e();
            });
    })(jQuery),
    (function(s) {
        var e = s("#pt-pageContent"),
            r = e.find(".pt-portfolio-masonry"),
            i = e.find(".pt-portfolio-content"),
            n = s(window);
        i.length && d() && a(),
            n.on("load", function() {
                window.innerWidth || n.width();
                r.length &&
                    (!(function() {
                            var n = r
                                .find(".pt-portfolio-content")
                                .isotope({
                                    itemSelector: ".element-item",
                                    layoutMode: "masonry",
                                });
                            n.imagesLoaded().progress(function() {
                                n.isotope("layout").addClass("pt-show");
                            });
                            var t = r.find(".pt-filter-nav");
                            if (t.length) {
                                var e = {
                                    ium: function() {
                                        var t = s(this).find(".name").text();
                                        return t.match(/ium$/);
                                    },
                                };
                                t.on("click", ".button", function() {
                                    var t = s(this).attr("data-filter");
                                    (t = e[t] || t),
                                    n.isotope({ filter: t }),
                                        s(this).addClass("active").siblings().removeClass("active");
                                });
                            }
                            var i = s(".isotop_showmore_js .btn"),
                                o = s(".pt-add-item");
                            i.length &&
                                o.length &&
                                i.on("click", function(t) {
                                    return (
                                        t.preventDefault(),
                                        s.ajax({
                                            url: "ajax_portfolio.php",
                                            success: function(t) {
                                                var e,
                                                    i = s(t);
                                                o.append(i),
                                                    n.isotope("appended", i),
                                                    l(),
                                                    (e = o.children().last().children().offset().top - 180),
                                                    s($body, $html).animate({ scrollTop: e }, 500);
                                            },
                                        }), !1
                                    );
                                });
                        })(),
                        l());
            });
        var o = n.width();

        function a() {
            i.on("click", "figure img", function() {
                s(this)
                    .closest(".pt-portfolio-content")
                    .find("figure")
                    .removeClass("gallery-click"),
                    s(this).closest("figure").addClass("gallery-click");
            });
        }

        function l() {
            var t = e.find(".pt-portfolio-masonry .pt-btn-zoom");
            t.magnificPopup({
                type: "image",
                mainClass: "mfp-zoom-in",
                gallery: { enabled: !0 },
                closeBtnInside: !0,
                gallery: { enabled: !0, tCounter: '<span class="mfp-counter"></span>' },
                callbacks: {
                    open: function() {
                        s(".mfp-gallery").append(
                            '<button title="Close (Esc)" type="button" class="mfp-close">×</button>'
                        );
                    },
                    close: function() {
                        s(".mfp-gallery .mfp-close").remove(),
                            setTimeout(function() {
                                t.removeClass("pt-magnific-popup")
                                    .find(".link-magnific-popup")
                                    .remove();
                            }, 200);
                    },
                },
            });
        }

        function d() {
            return !!("ontouchstart" in window) || !!("onmsgesturechange" in window);
        }
        n.on("resize", function() {
            var t = n.width();
            if (t !== o) {
                o = t;
                window.innerWidth || n.width();
                i.length && d() && a();
            }
        });
    })(jQuery),
    (function(t) {
        void 0 !== window.ontouchstart &&
            t("body #pt-pageContent .block-once").one("click", this, function(t) {
                t.preventDefault();
            });
    })(jQuery),
    (wda = jQuery),
    wda("#pt-pageContent")
    .find(".pt-countdown")
    .each(function() {
        var t = wda(this),
            i = i || !1,
            e = t.data("date"),
            o =
            (t.data("year"),
                t.data("month"),
                t.data("week"),
                t.data("day") || "Day"),
            s = t.data("hour") || "Hrs",
            r = t.data("minute") || "Min",
            a = t.data("second") || "Sec",
            n = t.prev(".pt-countdow-title"),
            l = n.data("title") || "Offer Will End Through";
        n.length && n.html(l),
            (e = e.split("-")) &&
            ((e = e.join("/")),
                t.countdown(e, function(t) {
                    var n = '<span class="countdown-row">';

                    function e(t, e, i) {
                        (0 !== e || i) && t(n);
                    }
                    e(
                            function() {
                                n +=
                                    '<span class="countdown-section"><span class="countdown-amount">' +
                                    t.offset.totalDays +
                                    '</span><span class="countdown-period">' +
                                    o +
                                    "</span></span>";
                            },
                            t.offset.totalDays,
                            i
                        ),
                        e(
                            function() {
                                n +=
                                    '<span class="countdown-section"><span class="countdown-amount">' +
                                    t.offset.hours +
                                    '</span><span class="countdown-period">' +
                                    s +
                                    "</span></span>";
                            },
                            t.offset.hours,
                            i
                        ),
                        e(
                            function() {
                                n +=
                                    '<span class="countdown-section"><span class="countdown-amount">' +
                                    t.offset.minutes +
                                    '</span><span class="countdown-period">' +
                                    r +
                                    "</span></span>";
                            },
                            t.offset.minutes,
                            i
                        ),
                        e(
                            function() {
                                n +=
                                    '<span class="countdown-section"><span class="countdown-amount">' +
                                    t.offset.seconds +
                                    '</span><span class="countdown-period">' +
                                    a +
                                    "</span></span>";
                            },
                            t.offset.seconds,
                            i
                        ),
                        (n += "</span>"),
                        wda(this).html(n);
                }));
    }),
    (function(a) {
        if (
            (a(document).on(
                    "mouseenter click touchstart touch",
                    "#pt-pageContent .pt-product:not(.tt-view)",
                    function(t) {
                        t.target;
                        var e = a(this).attr("data-rollover");
                        void 0 === e ||
                            a(this).hasClass("pt-is-include") ||
                            (a(this).addClass("pt-is-include"),
                                a(this)
                                .find(".pt-image-box .pt-img")
                                .after(
                                    '<span class="pt-img-roll-over"><img src="' +
                                    e +
                                    '"" alt="image"></span>'
                                ));
                    }
                ),
                a("html").hasClass("pt-product-move") &&
                a("html").hasClass("pt-product-type-02"))
        )
            a(document).on(
                "mouseenter mouseleave",
                "#pt-pageContent .pt-product",
                function(t) {
                    if (
                        a(".pt-product-listing").length &&
                        a(".pt-product-listing").hasClass("pt-col-one")
                    )
                        return !1;
                    var e = a(this),
                        i = window.innerWidth,
                        n = e.find(".pt-description"),
                        o = e.find(".pt-row-hover"),
                        s = parseInt(o.height()) + 23,
                        r = e.find(".pt-countdown_box");
                    if ((t.target, e.hasClass("product-nohover"))) return !1;
                    "mouseenter" === t.type && 1024 < i ?
                        (e.stop().css({ height: e.innerHeight() }).addClass("hovered"),
                            n.stop().animate({ top: "-" + s }, 200),
                            o.stop().animate({ opacity: 1 }, 400),
                            r.stop().animate({ bottom: s }, 200)) :
                        "mouseleave" === t.type &&
                        t.relatedTarget &&
                        1024 < i &&
                        (e.stop().removeClass("hovered").removeAttr("style"),
                            n.stop().animate({ top: "0" }, 200, function() {
                                a(this).removeAttr("style");
                            }),
                            o.stop().animate({ opacity: 0 }, 100, function() {
                                a(this).removeAttr("style");
                            }),
                            r.stop().animate({ bottom: 0 }, 200, function() {
                                a(this).removeAttr("style");
                            }));
                }
            );
    })(jQuery),
    itemOptionSwitcher(),
    (Bea = jQuery),
    Bea("body").on(
        "click",
        ".pt-product .pt-btn-wishlist, .pt-product .pt-btn-compare",
        function(t) {
            return Bea(this).toggleClass("active"), !1;
        }
    ),
    (Dea = jQuery),
    (Eea = Dea("#pt-pageContent .pt-collapse-block")),
    Eea.length &&
    Eea.each(function() {
        var t = Dea(this),
            e = t.find(".pt-item.active"),
            i = t.find(".pt-item .pt-collapse-title");
        e.find(".pt-collapse-content").slideToggle(100),
            i.on("click", function() {
                Dea(this).next().slideToggle(200).parent().toggleClass("active");
            });
    }),
    (Jea = jQuery),
    (Kea = Jea("#js-init-promofixed")),
    Kea &&
    Jea(document).ready(function() {
        setTimeout(function() {
                Jea("#js-slick-promofixed").slick({
                        dots: !1,
                        arrows: !1,
                        infinite: !0,
                        autoplay: !0,
                        autoplaySpeed: 6e3,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: !0,
                        fade: !0,
                    }),
                    Kea.fadeTo("90", 1);
            }, 2300),
            Kea.on("click", ".pt-btn-close", function(t) {
                return (
                    Jea("#js-slick-promofixed").slick("unslick"),
                    Jea(this).closest(".pt-promofixed").hide(), !1
                );
            });
    }),
    (Mea = jQuery),
    (Oea = Mea("#pt-pageContent").find(
        ".pt-product-single-img .js-btnzoom-slider"
    )),
    (Pea = Mea("body")),
    Mea("#js-btnzoom-gallery"),
    (Rea = Mea("#js-layout-gallery")),
    Oea.length &&
    Pea.on("click", ".pt-product-single-img .js-btnzoom-slider", function(t) {
        var e = Mea("#smallGallery");
        e.find("a").each(function() {
                var t = Mea(this).attr("data-zoom-image");
                t.length &&
                    (Mea(this)
                        .closest("li")
                        .append("<a class='link-magnific-popup' href='#'></a>")
                        .find(".link-magnific-popup")
                        .attr("href", t),
                        Mea(this).hasClass("zoomGalleryActive") &&
                        Mea(this)
                        .closest("li")
                        .find(".link-magnific-popup")
                        .addClass("zoomGalleryActive"));
            }),
            e
            .addClass("pt-magnific-popup")
            .find(".link-magnific-popup")
            .magnificPopup({
                type: "image",
                mainClass: "mfp-zoom-in",
                closeBtnInside: !0,
                gallery: {
                    enabled: !0,
                    tCounter: '<span class="mfp-counter"></span>',
                },
                callbacks: {
                    open: function() {
                        Mea(".mfp-gallery").append(
                            '<button title="Close (Esc)" type="button" class="mfp-close">×</button>'
                        );
                    },
                    close: function() {
                        Mea(".mfp-gallery .mfp-close").remove(),
                            setTimeout(function() {
                                e.removeClass("pt-magnific-popup")
                                    .find(".link-magnific-popup")
                                    .remove();
                            }, 200);
                    },
                },
            }),
            e.find(".link-magnific-popup.zoomGalleryActive").trigger("click");
    }), {
        scroll_zoom: !0,
        class_name: ".zoom-product",
        thumb_parent: Mea("#smallGallery"),
        scrollslider_parent: Mea(".slider-scroll-product"),
        checkNoZoom: function() {
            return Mea(this.class_name).parent().parent().hasClass("no-zoom");
        },
        init: function(t) {
            var e = this,
                i = window.innerWidth || Mea(window).width(),
                n = Mea(e.class_name),
                o = e.thumb_parent;
            if ((e.initBigGalleryButtons(), e.scrollSlider(), 0 == n.length))
                return !1;
            if (!e.checkNoZoom()) {
                var s = n.parent().parent().attr("data-scrollzoom");
                (s = s || e.scroll_zoom),
                (e.scroll_zoom = "false" != s),
                575 < i && e.configureZoomImage(),
                    e.resize();
            }
            if (0 == o.length) return !1;
            e[-1 < o.parent().attr("class").indexOf("-vertical") ?
                    "vertical" :
                    "horizontal"
                ](o),
                e.setBigImage(o);
        },
        configureZoomImage: function() {
            var t = this;
            Mea(".zoomContainer").remove(),
                Mea(this.class_name).each(function() {
                    var t = Mea(this),
                        e = t.removeData("elevateZoom").clone();
                    t.after(e).remove();
                }),
                setTimeout(function() {
                    Mea(t.class_name).elevateZoom({
                        gallery: t.thumb_parent.attr("id"),
                        zoomType: "inner",
                        scrollZoom: Boolean(t.scroll_zoom),
                        cursor: "crosshair",
                        zoomWindowFadeIn: 300,
                        zoomWindowFadeOut: 300,
                    });
                }, 100);
        },
        resize: function() {
            var t = this;
            Mea(window).resize(function() {
                if ((window.innerWidth || Mea(window).width()) <= 575) return !1;
                t.configureZoomImage();
            });
        },
        horizontal: function(t) {
            var e = t.data("slick-total");
            null == e &&
                t.slick({
                    infinite: !0,
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 1239,
                            settings: { slidesToShow: 5, slidesToScroll: 1 },
                        },
                        {
                            breakpoint: 992,
                            settings: { slidesToShow: 4, slidesToScroll: 1 },
                        },
                    ],
                }),
                4 == e &&
                t.slick({
                    infinite: !0,
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 1239,
                            settings: { slidesToShow: 4, slidesToScroll: 1 },
                        },
                        {
                            breakpoint: 992,
                            settings: { slidesToShow: 4, slidesToScroll: 1 },
                        },
                    ],
                }),
                6 == e &&
                t.slick({
                    infinite: !0,
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 1239,
                            settings: { slidesToShow: 4, slidesToScroll: 1 },
                        },
                        {
                            breakpoint: 992,
                            settings: { slidesToShow: 4, slidesToScroll: 1 },
                        },
                    ],
                });
        },
        vertical: function(t) {
            t.slick({
                vertical: !0,
                infinite: !1,
                slidesToShow: 6,
                slidesToScroll: 1,
                verticalSwiping: !0,
                arrows: !0,
                dots: !1,
                centerPadding: "0px",
                customPaging: "0px",
                responsive: [{
                        breakpoint: 1239,
                        settings: { slidesToShow: 5, slidesToScroll: 1 },
                    },
                    {
                        breakpoint: 1024,
                        settings: { slidesToShow: 4, slidesToScroll: 1 },
                    },
                    { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1 } },
                ],
            });
        },
        initBigGalleryButtons: function() {
            var t = Mea(".bigGallery");
            if (0 == t.length) return !1;
            Mea("body")
                .on("mouseenter", ".zoomContainer", function() {
                    t.find("button").addClass("show");
                })
                .on("mouseleave", ".zoomContainer", function() {
                    t.find("button").removeClass("show");
                });
        },
        scrollSlider: function() {
            var i = this.scrollslider_parent;
            if (0 == i.length) return !1;
            i.on("init", function(t, e) {
                    i.css({ opacity: 1 });
                }),
                i
                .css({ opacity: 0 })
                .slick({
                    infinite: !1,
                    vertical: !0,
                    verticalScrolling: !0,
                    dots: !0,
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 1200,
                            settings: { slidesToShow: 1, slidesToScroll: 1 },
                        },
                        {
                            breakpoint: 992,
                            settings: { slidesToShow: 1, slidesToScroll: 1 },
                        },
                        {
                            breakpoint: 768,
                            settings: { slidesToShow: 1, slidesToScroll: 1 },
                        },
                    ],
                })
                .mousewheel(function(t) {
                    t.preventDefault(),
                        t.deltaY < 0 ?
                        Mea(this).slick("slickNext") :
                        Mea(this).slick("slickPrev");
                });
        },
        setBigImage: function(s) {
            var r = this;
            s.find("a").on("click", function(t) {
                r.checkNoZoom() && t.preventDefault();
                var e = Mea(r.class_name),
                    i = r.checkNoZoom() ? "data-image" : "data-zoom-image",
                    n = r.checkNoZoom() ? "src" : "data-zoom-image",
                    o = Mea(this).attr(i);
                if ((e.attr(n, o), !r.checkNoZoom())) return !1;
                s.find(".zoomGalleryActive").removeClass("zoomGalleryActive"),
                    Mea(this).addClass("zoomGalleryActive");
            });
        },
    }.init(),
    Pea.on("click", "#js-btnzoom-gallery", function(t) {
        return Rea.find("> *:first a").trigger("click"), !1;
    }),
    Rea.find(".pt-gallery-link").magnificPopup({
        type: "image",
        mainClass: "mfp-zoom-in",
        closeBtnInside: !0,
        gallery: { enabled: !0, tCounter: '<span class="mfp-counter"></span>' },
        callbacks: {
            open: function() {
                Mea(".mfp-gallery").append(
                    '<button title="Close (Esc)" type="button" class="mfp-close">×</button>'
                );
            },
            close: function() {
                Mea(".mfp-gallery .mfp-close").remove(),
                    setTimeout(function() {
                        objSmallGallery
                            .removeClass("pt-magnific-popup")
                            .find(".link-magnific-popup")
                            .remove();
                    }, 200);
            },
        },
    }),
    (yfa = jQuery),
    (zfa = yfa("#pt-pageContent")),
    yfa('a[data-toggle="tab"]').length &&
    yfa("body").on("shown.bs.tab", 'a[data-toggle="tab"]', function(t) {
        var e = yfa(this).closest(".tt-ajax-tabs").find(".tab-content");
        e.length &&
            (e.fadeTo(0, 0),
                setTimeout(function() {
                    e.fadeTo(170, 1);
                }, 350));
        var i = yfa(this).data("ajax-include") || "false",
            s = yfa(this).attr("href") || "false";
        (s = s.replace(/#/g, "")),
        "false" === i ||
            "false" === !s ||
            yfa(this).hasClass("include") ||
            (yfa(this).addClass("include"),
                yfa.ajax({
                    url: i,
                    success: function(t) {
                        var e = yfa(t),
                            i = yfa("#" + s);
                        i.append(e),
                            i.find(".js-init-carousel").each(function() {
                                var t = yfa(this),
                                    e = yfa(this).data("item"),
                                    i = yfa(this).data("itemmobile");
                                5 == t.item &&
                                    t.slick({
                                        lazyLoad: "progressive",
                                        dots: !0,
                                        arrows: !0,
                                        infinite: !0,
                                        speed: 300,
                                        slidesToShow: e,
                                        slidesToScroll: e,
                                        adaptiveHeight: !0,
                                        responsive: [{
                                                breakpoint: 1240,
                                                settings: { slidesToShow: 4, slidesToScroll: 4 },
                                            },
                                            {
                                                breakpoint: 1025,
                                                settings: { slidesToShow: 3, slidesToScroll: 3 },
                                            },
                                            {
                                                breakpoint: 791,
                                                settings: { slidesToShow: 2, slidesToScroll: 2 },
                                            },
                                        ],
                                    }),
                                    t.slick({
                                        lazyLoad: "progressive",
                                        dots: !0,
                                        arrows: !0,
                                        infinite: !0,
                                        speed: 300,
                                        slidesToShow: e || 4,
                                        slidesToScroll: e || 4,
                                        adaptiveHeight: !0,
                                        responsive: [{
                                                breakpoint: 1025,
                                                settings: { slidesToShow: 3, slidesToScroll: 3 },
                                            },
                                            {
                                                breakpoint: 791,
                                                settings: { slidesToShow: 2, slidesToScroll: 2 },
                                            },
                                            {
                                                breakpoint: 650,
                                                settings: {
                                                    slidesToShow: i || 2,
                                                    slidesToScroll: i || 1,
                                                },
                                            },
                                        ],
                                    });
                            });
                        var n = i.closest(".tt-ajax-tabs"),
                            o = n.innerHeight();
                        setTimeout(function() {
                            n.removeAttr("style");
                            var t = n.innerHeight();
                            t < o && n.css({ height: t }),
                                yfa("#pt-pageContent .js-align-arrow")
                                .imagesLoaded()
                                .alignmentArrow({
                                    centeringObject: "pt-image-box",
                                    addErrorTop: "pt-product",
                                }),
                                itemOptionSwitcher();
                        }, 1e3);
                    },
                })),
            yfa(".slick-slider").each(function() {
                yfa(this).slick("getSlick").refresh();
            }),
            zfa
            .find(".js-align-arrow")
            .imagesLoaded()
            .alignmentArrow({
                centeringObject: "pt-image-box",
                addErrorTop: "pt-product",
            });
    }),
    yfa(document).on("mouseenter", 'body a[data-toggle="tab"]', function(t) {
        var e = yfa(this).data("ajax-include") || "false",
            s = yfa(this).attr("href") || "false";
        (s = s.replace(/#/g, "")),
        "false" === e ||
            "false" === !s ||
            yfa(this).hasClass("include") ||
            (yfa(this).addClass("include"),
                yfa.ajax({
                    url: e,
                    success: function(t) {
                        var e = yfa(t),
                            i = yfa("#" + s);
                        i.append(e),
                            i.find(".js-init-carousel").each(function() {
                                var t = yfa(this),
                                    e = yfa(this).data("item"),
                                    i = yfa(this).data("itemmobile");
                                5 == t.item &&
                                    t.slick({
                                        lazyLoad: "progressive",
                                        dots: !0,
                                        arrows: !0,
                                        infinite: !0,
                                        speed: 300,
                                        slidesToShow: e,
                                        slidesToScroll: e,
                                        adaptiveHeight: !0,
                                        responsive: [{
                                                breakpoint: 1240,
                                                settings: { slidesToShow: 4, slidesToScroll: 4 },
                                            },
                                            {
                                                breakpoint: 1025,
                                                settings: { slidesToShow: 3, slidesToScroll: 3 },
                                            },
                                            {
                                                breakpoint: 791,
                                                settings: { slidesToShow: 2, slidesToScroll: 2 },
                                            },
                                        ],
                                    }),
                                    t.slick({
                                        lazyLoad: "progressive",
                                        dots: !0,
                                        arrows: !0,
                                        infinite: !0,
                                        speed: 300,
                                        slidesToShow: e || 4,
                                        slidesToScroll: e || 4,
                                        adaptiveHeight: !0,
                                        responsive: [{
                                                breakpoint: 1025,
                                                settings: { slidesToShow: 3, slidesToScroll: 3 },
                                            },
                                            {
                                                breakpoint: 791,
                                                settings: { slidesToShow: 2, slidesToScroll: 2 },
                                            },
                                            {
                                                breakpoint: 650,
                                                settings: {
                                                    slidesToShow: i || 2,
                                                    slidesToScroll: i || 1,
                                                },
                                            },
                                        ],
                                    });
                            });
                        var n = i.closest(".tt-ajax-tabs"),
                            o = n.innerHeight();
                        setTimeout(function() {
                            n.removeAttr("style");
                            var t = n.innerHeight();
                            t < o && n.css({ height: t }),
                                yfa("#pt-pageContent .js-align-arrow")
                                .imagesLoaded()
                                .alignmentArrow({
                                    centeringObject: "pt-image-box",
                                    addErrorTop: "pt-product",
                                }),
                                itemOptionSwitcher();
                        }, 1e3);
                    },
                }));
    }),
    (Zfa = jQuery),
    ($fa = Zfa("#pt-pageContent")),
    (_fa = $fa.find(".pt-tabs-gorizontal-js")),
    (aga = $fa.find(".pt-tabs-vertical-js")),
    (Zfa.fn.ptTabs = function(n) {
        return new(function(t) {
            var p = Zfa(t),
                d = p.find(".pt-tabs__head"),
                c = d.find("> ul"),
                f = c.find("> li"),
                h = f.find("> span"),
                u = d.find(".pt-tabs__border"),
                e = p.find(".pt-tabs__body"),
                m = e.find("> div"),
                g = n.anim_tab_duration || 500,
                v = n.anim_scroll_duration || 500,
                o = void 0 === n.scrollToOpenMobile || n.scrollToOpenMobile,
                w = void 0 === n.singleOpen || n.singleOpen,
                s = void 0 === n.toggleOnDesktop || n.toggleOnDesktop,
                y = void 0 !== n.effect ? n.effect : "slide",
                b = void 0 !== n.offsetTop ? n.offsetTop : "",
                i = n.goToTab,
                _ = Zfa("<div>").addClass("tt-tabs__btn-prev disabled"),
                C = Zfa("<div>").addClass("tt-tabs__btn-next"),
                l = !1,
                T = n.disableDesctop || !1;

            function k(t, e) {
                var i = {
                    duration: g,
                    complete: function() {
                        Zfa(this).removeAttr("style");
                    },
                };

                function n(t) {
                    "toggle" === y ? t.hide().removeAttr("style") : t.slideUp(i);
                }
                if (e || w)
                    f.removeClass("active"),
                    n(m.filter(".active").removeClass("active").find("> div").stop());
                else {
                    var o = f.index(t);
                    t.removeClass("active"),
                        n(m.eq(o).removeClass("active").find("> div").stop());
                }
            }

            function S(t, e, i, n, o) {
                var s,
                    r,
                    a = f.index(t),
                    l = m.eq(a),
                    d = {
                        duration: g,
                        complete: function() {
                            n && n(l);
                        },
                    };
                t.addClass("active"),
                    (s = l.addClass("active").find("> div").stop()),
                    (r = s),
                    i && i(t.find("> span")),
                    "toggle" === y ? (r.show(), n && n(l)) : r.slideDown(d);
            }

            function x(t, e) {
                if (t.length)
                    var i = {
                        left: t.get(0).getBoundingClientRect().left -
                            d.get(0).getBoundingClientRect().left,
                        width: t.width(),
                    };
                else i = { left: 0, width: 0 };
                e ? u.stop().animate(i, g) : u.stop().css(i);
            }

            function z(t, e) {
                var i = t.find("> span").get(0).getBoundingClientRect().left,
                    n = t.find("> span").get(0).getBoundingClientRect().right,
                    o = {
                        l: d.get(0).getBoundingClientRect().left,
                        r: d.get(0).getBoundingClientRect().right,
                    };
                i < o.l ?
                    I(Math.ceil(o.l - i), o, !1, function() {
                        e();
                    }) :
                    o.r < n ?
                    I(-1 * Math.ceil(n - o.r), o, !1, function() {
                        e();
                    }) :
                    e();
            }

            function E(t) {
                var e = f.first().find("> span").get(0).getBoundingClientRect().left,
                    i = f.last().find("> span").get(0).getBoundingClientRect().right;
                e < t.l ? _.removeClass("disabled") : _.addClass("disabled"),
                    i > t.r ? C.removeClass("disabled") : C.addClass("disabled");
            }

            function I(t, e, i, n) {
                var o = parseInt(c.css("left"), 10),
                    s = parseInt(u.css("left"), 10),
                    r = i ? 0 : g,
                    a = { left: o + t };
                i
                    ?
                    (c.css(a), E(e)) :
                    (u.animate({ left: s + t }, g),
                        c.animate(a, {
                            duration: r,
                            complete: function() {
                                E(e), n && n(), (l = !1);
                            },
                        }));
            }
            return (
                d.on("click", "> ul > li > span", function(t, i) {
                    var e = Zfa(this).parent(),
                        n = 1025 < window.innerWidth;
                    if (((i = "trigger" === i), e.hasClass("active"))) {
                        if (n && !s) return;
                        k(e, n), x("", !0);
                    } else
                        z(e, function() {
                            k(e, n),
                                S(
                                    e,
                                    0,
                                    function(t) {
                                        n && x(t, !i);
                                    },
                                    function(t) {
                                        if (!n && !i && o) {
                                            var e = t.offset().top;
                                            Zfa("html, body")
                                                .stop()
                                                .animate({ scrollTop: e }, { duration: v });
                                        }
                                    }
                                );
                        });
                }),
                e.on("click", "> div > span", function(t) {
                    var e = Zfa(this).parent(),
                        i = m.index(e);
                    f.eq(i).find("> span").trigger("click");
                }),
                Zfa.isArray(i) &&
                i.length &&
                Zfa(i).each(function() {
                    var t = this.elem,
                        c = this.tab,
                        h = this.scrollTo,
                        u = this.focus;
                    Zfa(t).on("click", function(t) {
                        var e, i, n, o, s, r, a, l, d;
                        return (
                            (e = c),
                            (i = h),
                            (n = u),
                            (o = window.innerWidth < 1025),
                            (s = 0),
                            (r = Zfa(b)),
                            (a = f.filter('[data-tab="' + e + '"]')),
                            (l = Zfa(i)),
                            (d = {}),
                            o && r.length && (s = r.height()),
                            a.hasClass("active") || (d = { scrollTop: p.offset().top - s }),
                            Zfa("html, body")
                            .stop()
                            .animate(d, {
                                duration: v,
                                complete: function() {
                                    z(a, function() {
                                        k(a, o),
                                            S(
                                                a,
                                                0,
                                                function(t) {
                                                    x(t, !0);
                                                },
                                                function() {
                                                    l.length &&
                                                        Zfa("html, body").animate({ scrollTop: l.offset().top - s }, {
                                                            duration: v,
                                                            complete: function() {
                                                                var t = Zfa(n);
                                                                t.length && t.focus();
                                                            },
                                                        });
                                                }
                                            );
                                    });
                                },
                            }),
                            t.preventDefault(), !1
                        );
                    });
                }),
                p.on("click", ".pt-tabs__btn-prev, .pt-tabs__btn-next", function() {
                    var t = Zfa(this);
                    if (!t.hasClass("disabled") && !l) {
                        l = !0;
                        var i = {
                            l: d.get(0).getBoundingClientRect().left,
                            r: d.get(0).getBoundingClientRect().right,
                        };
                        t.hasClass("tt-tabs__btn-next") ?
                            h.each(function(t) {
                                var e = Zfa(this).get(0).getBoundingClientRect().right;
                                if (i.r < e) return I(-1 * Math.ceil(e - i.r), i), !1;
                            }) :
                            t.hasClass("tt-tabs__btn-prev") &&
                            Zfa(h.get().reverse()).each(function(t) {
                                var e = Zfa(this).get(0).getBoundingClientRect().left;
                                if (e < i.l) return I(Math.ceil(i.l - e), i), !1;
                            });
                    }
                }),
                Zfa(window).on("resize load", function() {
                    var t = 1025 < window.innerWidth,
                        e = d.innerWidth(),
                        i = 0;
                    if (
                        (f.each(function() {
                                i += Zfa(this).innerWidth();
                            }),
                            t && 1 == !T)
                    ) {
                        var n = f.filter(".active"),
                            o = n.find("> span");
                        if (!w && 1 < o.length) {
                            var s = n.first();
                            k("", t), S(s);
                        }
                        if (e < i) {
                            if (
                                (d.addClass("slider").append(_).append(C),
                                    c.css({ "margin-right": -1 * (i - d.innerWidth()) }),
                                    o.length)
                            ) {
                                var r = o.get(0).getBoundingClientRect().right,
                                    a = h.last().get(0).getBoundingClientRect().right,
                                    l = {
                                        l: d.get(0).getBoundingClientRect().left,
                                        r: d.get(0).getBoundingClientRect().right,
                                    };
                                l.r < r ?
                                    I(-1 * Math.ceil(r - l.r), l, !0) :
                                    a < l.r && I(l.r - a, l, !0),
                                    x(o, !1);
                            }
                        } else
                            c.removeAttr("style"),
                            _.remove(),
                            C.remove(),
                            d.removeClass("slider"),
                            x(o, !1);
                        d.css({ visibility: "visible" });
                    } else u.removeAttr("style");
                }),
                f
                .filter('[data-active="true"]')
                .find("> span")
                .trigger("click", ["trigger"]),
                p
            );
        })(Zfa(this).eq(0));
    }),
    _fa.length &&
    _fa.ptTabs({
        singleOpen: !0,
        anim_tab_duration: 270,
        anim_scroll_duration: 500,
        toggleOnDesktop: !1,
        scrollToOpenMobile: !0,
        effect: "slide",
        offsetTop: '.pt-header[data-sticky="true"]',
    }),
    aga.length &&
    aga.ptTabs({
        singleOpen: !1,
        anim_tab_duration: 270,
        anim_scroll_duration: 500,
        toggleOnDesktop: !1,
        scrollToOpenMobile: !0,
        effect: "slide",
        disableDesctop: !0,
        offsetTop: '.pt-header[data-sticky="true"]',
    }),
    (mia = jQuery),
    (nia = mia("body")), {
        html_i: "#pt-tooltip-popup",
        html_s: '<div id="pt-tooltip-popup"><span>',
        html_e: "</span><i></i></div>",
        tp_attr: "[data-tooltip]",
        tp_mod: !1,
        init: function() {
            if (
                ((this.tp_mod = this.get_tp_mod()), !this.tp_mod.length ||
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                    ))
            )
                return !1;
            this.handler();
        },
        get_tp_attr: function() {
            return this.tp_attr;
        },
        get_tp_mod: function() {
            return mia(this.get_tp_attr());
        },
        get_w_width: function() {
            return window.innerWidth || $window.width();
        },
        get_html_obj: function(t) {
            return this.html_s + t + this.html_e;
        },
        check_pr_page_swatches: function(t) {
            var e = t.closest(".pt-swatches-container"),
                i = t.closest(".pt-search"),
                n = t.closest(".pt-btn-quickview"),
                o = t.closest(".pt-collapse-content"),
                s = t.closest(".wlbutton-js");
            return !!(e.length || i.length || n.length || o.length || s.length);
        },
        handler: function() {
            var e = this;
            mia("body").on("mouseenter mouseleave", this.get_tp_attr(), function(t) {
                if (e.get_w_width() <= 1024) return !1;
                "mouseenter" === t.type && e.onHover(mia(this)),
                    "mouseleave" === t.type && e.offHover(mia(this));
            });
        },
        onHover: function(t) {
            var e = this,
                i = t.attr("data-tooltip"),
                n = mia(this.get_html_obj(i)),
                o = t.attr("data-tposition"),
                s = t.attr("data-findtag");
            if ("" == i) return !1;
            nia.append(n);
            var r = void 0 !== s ? t.find(s).first() : t,
                a = n.innerHeight(),
                l = n.innerWidth(),
                d = r.innerHeight(),
                c = r.innerWidth(),
                h = r.offset().top,
                u = r.offset().left;
            if (
                ("top" == (o = void 0 !== o ? o : "top") &&
                    ((h += -a - 20), (u += parseInt((c - l) / 2))),
                    "bottom" == o && ((h += d + 24), (u += parseInt((c - l) / 2))),
                    "left" == o && ((h += parseInt((d - a) / 2)), (u += -l - 24)),
                    "right" == o && ((h += parseInt((d - a) / 2)), (u += c + 24)),
                    this.showTooltip(n, u, h, o), !this.check_pr_page_swatches(t))
            )
                return !1;
            t.on("click.closeTooltip", function() {
                e.offHover(mia(this)), mia(this).unbind("click.closeTooltip");
            });
        },
        offHover: function(t) {
            if ((nia.find(this.html_i).remove(), !this.check_pr_page_swatches(t)))
                return !1;
            t.unbind("click.closeTooltip");
        },
        showTooltip: function(t, e, i, n) {
            var o = { opacity: 1 },
                s = n;
            "bottom" == s && (s = "top"),
                "right" == s && (s = "left"),
                (o[s] = "bottom" == n || "right" == n ? "-=10px" : "+=10px"),
                t
                .css({ top: i, left: e })
                .addClass("tooltip-" + n)
                .animate(o, 200);
        },
    }.init(),
    (Tia = jQuery),
    Tia("#pt-pageContent .pt-video-block").length &&
    Tia("body").on("click", ".pt-video-block", function(t) {
        t.preventDefault();
        var e = Tia(this).find(".movie")[0];
        e.paused ?
            (e.play(), Tia(this).addClass("play")) :
            (e.pause(), Tia(this).removeClass("play"));
    });