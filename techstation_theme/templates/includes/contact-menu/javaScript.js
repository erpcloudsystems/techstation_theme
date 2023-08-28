/*global $, WOW, document, window*/

// ==== Global Functions
$(function () {
	'use strict';

	// Wow Animation
	new WOW().init();

	if ($(window).width() <= 768) {
		$('body').find('.wow').removeClass('wow fadeInLeft fadeInRight fadeInUp fadeInDown animated');
	}
	//----------------------------------------------------------------//

	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();
	//----------------------------------------------------------------//	

	// Scroll to Top
	/*$(window).on('beforeunload', function () {
		$(window).scrollTop(0);
	});*/
	//----------------------------------------------------------------//

	// Subscribe Modal	
	$('#Reloadpage').click(function () {
		location.reload();
	});
	//----------------------------------------------------------------//

	// ==== Contact Menu
	// Show Contact Menu
	$('#s-contact-btn .show-btn').on('click', function () {
		$('#contact-menu').addClass('show');
	});
	$('#dismiss-contact-menu').on('click', function () {
		$('#contact-menu').removeClass('show');
		$('#contact-menu .s-c-m').removeClass('show');
		$('#contact-menu .menu-body .content .item').removeClass('n-v');
	});
	$('#phone-support').on('click', function () {
		$('#contact-menu .s-c-m').addClass('show');
		$('#contact-menu .menu-body .content .item').addClass('n-v');
	});
	$('#phone-support-dismiss').on('click', function () {
		$('#contact-menu .s-c-m').removeClass('show');
		$('#contact-menu .menu-body .content .item').removeClass('n-v');

	});

});

// ==== NavBar
$(document).ready(function () {
	'use strict';

	// Nav SubMenu
	$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
		if (!$(this).next().hasClass('show')) {
			$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
		}
		var $subMenu = $(this).next(".dropdown-menu");
		$subMenu.toggleClass('show');


		$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
			$('.dropdown-submenu .show').removeClass("show");
		});


		return false;
	});	
	// NavBar
	$(window).on('scroll', function () {

		if ($(this).scrollTop() >= 1) {

			$('body > .navbar').addClass('nav-scrolled');

		} else {
			$('body > .navbar').removeClass('nav-scrolled');
		}
	});

	// prepend shopping basket
	var shopBas = document.getElementById('shopping'),
		navTog = document.getElementById('navbar-toggler'),
		lang = document.getElementById('lang'),
		client = document.getElementById('client-area'),
		price = document.getElementById('last-nav-item');

	if ($(window).width() <= 991) {
		$(shopBas).insertBefore(navTog);
		$(lang).insertBefore(navTog);
		$(client).insertBefore(navTog);
	} else {
		$(client).insertAfter(price);
		$(lang).insertAfter(price);
		$(shopBas).insertAfter(price);
	}

	$(window).on('resize', function () {

		var shopBas = document.getElementById('shopping'),
			navTog = document.getElementById('navbar-toggler'),
			lang = document.getElementById('lang'),
			client = document.getElementById('client-area'),
			price = document.getElementById('last-nav-item');


		if ($(window).width() <= 991) {
			$(shopBas).insertBefore(navTog);
			$(lang).insertBefore(navTog);
			$(client).insertBefore(navTog);
		} else {
			$(client).insertAfter(price);
			$(lang).insertAfter(price);
			$(shopBas).insertAfter(price);
		}

	});
});

$(document).ready(function () {

	'use strict';

	// ==== Smooth Scroll ==== //
	$(".nav-item a, #buy-btn").click(function () {
		$('html, body').animate({ // Scroll To " Element Which Has The Same id "
			scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
		}, 2000);
		$('.navbar-collapse').removeClass('show');
		return false;
	});

});

$(window).on('load', function () {
	$('.offer-nav').addClass('show');
});

$(document).ready(function () {
	$('.offer-nav button').on('click', function () {
		$('.offer-nav').removeClass('show');
		$('body').removeClass('pt-70');
	});
});

// ==== Select 2
$(document).ready(function () {
	// Select 2
	$('.el').select2({
		minimumResultsForSearch: Infinity,
		width: 'resolve'
	});
});

// ==== Small Contact Form
$(document).ready(function () {
	$('#s-contact-form .show-btn').on('click', function () {
		$(this).toggleClass('clicked');
		$('#s-contact-form ul').toggleClass('show-li-items');		
		setTimeout(function () {
			$('#s-contact-form ul .name').hide();
		}, 10000);
		$('#s-contact-form ul .name').show();
	});
	$('#s-contact-form ul li').on('click', function () {
		$('#s-contact-form ul .name').hide();
		$(this).addClass('clicked').siblings().removeClass('clicked');
	});
	$(document).mouseup(function (e) {
		var container = $("#s-contact-form li");

		// if the target of the click isn't the container nor a descendant of the container
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.removeClass('clicked');
		}
	});
});

// ==== Software Pages
$(function () {
	'use strict';

	// Why us Button
	$('#why-us button').on('click', function () {
		$(this).text(function (i, text) {
			return text === "Less" ? "More" : "Less";
		});
	});
	//----------------------------------------------------------------//

	// Why us Button
	$('#modules #show-all-item').on('click', function () {
		$(this).text(function (i, text) {
			return text === "Less" ? "More" : "Less";
		});
	});
	//----------------------------------------------------------------//

	// Our Products
	$('#show-all-item').on('click', function () {

		$(this).toggleClass('show');
		$('html, body').animate({
			scrollTop: $(".our-Products").offset().top - 80
		}, 2000);

	});
	//----------------------------------------------------------------//

	// Show and hide industries-menu
	$('#show-business').on('click', function () {

		$('.industries-window').addClass('show');
		$('body').children().hide();
		$('.industries-window').show();
		$(window).scrollTop(0);

	});

	$('#close-business').on('click', function () {

		$('.industries-window').removeClass('show');
		$('body').children().show();
		$('body').children('script').hide();
		$('html, body').animate({
			scrollTop: $(".industries").offset().top
		}, 2000);
	});
	//----------------------------------------------------------------//

	// Show and hide modules-menu
	$('#show-modules').on('click', function () {

		$('.modules-window').addClass('show');
		$('body').children().hide();
		$('.modules-window').show();
		$(window).scrollTop(0);

	});

	$('#close-modules').on('click', function () {

		$('.modules-window').removeClass('show');
		$('body').children().show();
		$('body').children('script').hide();
		$(window).scrollTop(0);
	});
	//----------------------------------------------------------------//

	// Dynamic Taps 
	$('.clients .owl-carousel .owl-item .main').on('click', function () {

		$('.owl-item .main.active-link').removeClass('active-link');
		$(this).addClass('active-link');
		$('.brand-details > div').hide();
		$($(this).data('show')).fadeIn();

	});
	//----------------------------------------------------------------//

	// Outlets Button
	$(".outlets-show-more").click(function () {
		$(this).text(function (i, text) {
			return text === "Less" ? "More" : "Less";
		});
	});
	//----------------------------------------------------------------//

	// Video Modal
	$('#myModal').on('hide.bs.modal', function (e) {
		var $if = $(e.delegateTarget).find('iframe'),
			src = $if.attr("src");
		$if.attr("src", '/empty.html');
		$if.attr("src", src);
	});
	//----------------------------------------------------------------//

});

// ==== Contact Page
$(function () {

	'use strict';

	// design contact 
	$('#design_contact').on('submit', function (e) {
		var isFormValid = true;

		$(this).find('.form-control').each(function () {
			if ($.trim($(this).val()).length === 0) {
				$(this).parent('.form-group').removeClass("success");
				$(this).parent('.form-group').addClass("highlight");
				isFormValid = false;
			} else {
				$(this).parent('.form-group').removeClass("highlight");
				$(this).parent('.form-group').addClass("success");
			}
		});

		return isFormValid;

	});
	//----------------------------------------------------------------//

	// add class empty input
	$('#design_contact > button').on('click', function () {


		$(this).parent().find('.form-control').each(function () {

			if ($(this).val().trim() === '') {

				$(this).addClass('x-val');

			} else {
				$(this).removeClass('x-val');
			}

		});

	});
	//----------------------------------------------------------------//

	$('#design_contact .form-control').on('keyup', function () {

		if ($(this).val() !== '') {
			$(this).removeClass('x-val');
		}

	});
	//----------------------------------------------------------------//

	// error classes for design contact 
	$('#design_contact .form-control').on('keyup', function (e) {
		if ($(e.target).val() !== '') {
			$(e.target).addClass('not-empty');
		} else {
			$(e.target).removeClass('not-empty');
		}
	});
	//----------------------------------------------------------------//
});

// ==== Price Page
$(function () {
	'use strict';
	$('.payment-method .item').on('click', function () {
		$(this).addClass('show').siblings().removeClass('show');
		$('.payment-method .item .item-contain').removeClass('show');
		$($(this).data('show')).addClass('show');
	});
	//----------------------------------------------------------------//	
});

//
// SmoothScroll for websites v1.4.5 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me.
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any
// extension for browsers or native application
// without getting a written permission first.
//
(function () {
	function C() {
		if (!D && document.body) {
			D = !0;
			var a = document.body,
				b = document.documentElement,
				d = window.innerHeight,
				c = a.scrollHeight;
			k = 0 <= document.compatMode.indexOf("CSS") ? b : a;
			m = a;
			f.keyboardSupport && window.addEventListener("keydown", J, !1);
			if (top != self) u = !0;
			else if (Y && c > d && (a.offsetHeight <= d || b.offsetHeight <= d)) {
				var e = document.createElement("div");
				e.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + k.scrollHeight + "px";
				document.body.appendChild(e);
				var h;
				v = function () {
					h ||
						(h = setTimeout(function () {
							e.style.height = "0";
							e.style.height = k.scrollHeight + "px";
							h = null
						}, 500))
				};
				setTimeout(v, 10);
				window.addEventListener("resize", v, !1);
				A = new Z(v);
				A.observe(a, {
					attributes: !0,
					childList: !0,
					characterData: !1
				});
				k.offsetHeight <= d && (d = document.createElement("div"), d.style.clear = "both", a.appendChild(d))
			}
			f.fixedBackground || (a.style.backgroundAttachment = "scroll", b.style.backgroundAttachment = "scroll")
		}
	}

	function K(a, b, d) {
		aa(b, d);
		if (1 != f.accelerationMax) {
			var c = Date.now() - E;
			c < f.accelerationDelta &&
				(c = (1 + 50 / c) / 2, 1 < c && (c = Math.min(c, f.accelerationMax), b *= c, d *= c));
			E = Date.now()
		}
		t.push({
			x: b,
			y: d,
			lastX: 0 > b ? .99 : -.99,
			lastY: 0 > d ? .99 : -.99,
			start: Date.now()
		});
		if (!F) {
			var e = a === document.body,
				h = function (c) {
					c = Date.now();
					for (var g = 0, k = 0, l = 0; l < t.length; l++) {
						var n = t[l],
							p = c - n.start,
							m = p >= f.animationTime,
							q = m ? 1 : p / f.animationTime;
						f.pulseAlgorithm && (p = q, 1 <= p ? q = 1 : 0 >= p ? q = 0 : (1 == f.pulseNormalize && (f.pulseNormalize /= L(1)), q = L(p)));
						p = n.x * q - n.lastX >> 0;
						q = n.y * q - n.lastY >> 0;
						g += p;
						k += q;
						n.lastX += p;
						n.lastY += q;
						m && (t.splice(l, 1), l--)
					}
					e ?
						window.scrollBy(g, k) : (g && (a.scrollLeft += g), k && (a.scrollTop += k));
					b || d || (t = []);
					t.length ? M(h, a, 1E3 / f.frameRate + 1) : F = !1
				};
			M(h, a, 0);
			F = !0
		}
	}

	function N(a) {
		D || C();
		var b = a.target;
		if (a.defaultPrevented || a.ctrlKey || r(m, "embed") || r(b, "embed") && /\.pdf/i.test(b.src) || r(m, "object") || b.shadowRoot) return !0;
		var d = -a.wheelDeltaX || a.deltaX || 0,
			c = -a.wheelDeltaY || a.deltaY || 0;
		ba && (a.wheelDeltaX && w(a.wheelDeltaX, 120) && (d = -120 * (a.wheelDeltaX / Math.abs(a.wheelDeltaX))), a.wheelDeltaY && w(a.wheelDeltaY, 120) && (c = -120 * (a.wheelDeltaY /
			Math.abs(a.wheelDeltaY))));
		d || c || (c = -a.wheelDelta || 0);
		1 === a.deltaMode && (d *= 40, c *= 40);
		b = O(b);
		if (!b) return u && G ? (Object.defineProperty(a, "target", {
			value: window.frameElement
		}), parent.wheel(a)) : !0;
		if (!f.touchpadSupport && ca(c)) return !0;
		1.2 < Math.abs(d) && (d *= f.stepSize / 120);
		1.2 < Math.abs(c) && (c *= f.stepSize / 120);
		K(b, d, c);
		a.preventDefault();
		P()
	}

	function J(a) {
		var b = a.target,
			d = a.ctrlKey || a.altKey || a.metaKey || a.shiftKey && a.keyCode !== h.spacebar;
		document.body.contains(m) || (m = document.activeElement);
		var c = /^(textarea|select|embed|object)$/i,
			e = /^(button|submit|radio|checkbox|file|color|image)$/i;
		if (!(c = a.defaultPrevented || c.test(b.nodeName) || r(b, "input") && !e.test(b.type) || r(m, "video"))) {
			var c = a.target,
				g = !1;
			if (-1 != document.URL.indexOf("www.youtube.com/watch")) {
				do
					if (g = c.classList && c.classList.contains("html5-video-controls")) break; while (c = c.parentNode)
			}
			c = g
		}
		if (c || b.isContentEditable || d || (r(b, "button") || r(b, "input") && e.test(b.type)) && a.keyCode === h.spacebar || r(b, "input") && "radio" == b.type && da[a.keyCode]) return !0;
		c = b = 0;
		d = O(m);
		if (!d) return u &&
			G ? parent.keydown(a) : !0;
		e = d.clientHeight;
		d == document.body && (e = window.innerHeight);
		switch (a.keyCode) {
			case h.up:
				c = -f.arrowScroll;
				break;
			case h.down:
				c = f.arrowScroll;
				break;
			case h.spacebar:
				c = a.shiftKey ? 1 : -1;
				c = -c * e * .9;
				break;
			case h.pageup:
				c = .9 * -e;
				break;
			case h.pagedown:
				c = .9 * e;
				break;
			case h.home:
				c = -d.scrollTop;
				break;
			case h.end:
				e = d.scrollHeight - d.scrollTop - e;
				c = 0 < e ? e + 10 : 0;
				break;
			case h.left:
				b = -f.arrowScroll;
				break;
			case h.right:
				b = f.arrowScroll;
				break;
			default:
				return !0
		}
		K(d, b, c);
		a.preventDefault();
		P()
	}

	function Q(a) {
		m =
			a.target
	}

	function P() {
		clearTimeout(R);
		R = setInterval(function () {
			H = {}
		}, 1E3)
	}

	function I(a, b) {
		for (var d = a.length; d--;) H[S(a[d])] = b;
		return b
	}

	function O(a) {
		var b = [],
			d = document.body,
			c = k.scrollHeight;
		do {
			var e = H[S(a)];
			if (e) return I(b, e);
			b.push(a);
			if (c === a.scrollHeight) {
				if (e = T(k) && T(d) || U(k), u && k.clientHeight + 10 < k.scrollHeight || !u && e) return I(b, ea())
			} else if (a.clientHeight + 10 < a.scrollHeight && U(a)) return I(b, a)
		} while (a = a.parentElement)
	}

	function T(a) {
		return "hidden" !== getComputedStyle(a, "").getPropertyValue("overflow-y")
	}

	function U(a) {
		a = getComputedStyle(a, "").getPropertyValue("overflow-y");
		return "scroll" === a || "auto" === a
	}

	function r(a, b) {
		return (a.nodeName || "").toLowerCase() === b.toLowerCase()
	}

	function aa(a, b) {
		a = 0 < a ? 1 : -1;
		b = 0 < b ? 1 : -1;
		if (B.x !== a || B.y !== b) B.x = a, B.y = b, t = [], E = 0
	}

	function ca(a) {
		if (a) return l.length || (l = [a, a, a]), a = Math.abs(a), l.push(a), l.shift(), clearTimeout(V), V = setTimeout(function () {
			try {
				localStorage.SS_deltaBuffer = l.join(",")
			} catch (a) {}
		}, 1E3), !W(120) && !W(100)
	}

	function w(a, b) {
		return Math.floor(a / b) == a / b
	}

	function W(a) {
		return w(l[0],
			a) && w(l[1], a) && w(l[2], a)
	}

	function L(a) {
		var b;
		a *= f.pulseScale;
		1 > a ? b = a - (1 - Math.exp(-a)) : (b = Math.exp(-1), --a, a = 1 - Math.exp(-a), b += a * (1 - b));
		return b * f.pulseNormalize
	}

	function x(a) {
		for (var b in a) X.hasOwnProperty(b) && (f[b] = a[b])
	}
	var X = {
			frameRate: 150,
			animationTime: 400,
			stepSize: 100,
			pulseAlgorithm: !0,
			pulseScale: 4,
			pulseNormalize: 1,
			accelerationDelta: 50,
			accelerationMax: 3,
			keyboardSupport: !0,
			arrowScroll: 50,
			touchpadSupport: !1,
			fixedBackground: !0,
			excluded: ""
		},
		f = X,
		u = !1,
		B = {
			x: 0,
			y: 0
		},
		D = !1,
		k = document.documentElement,
		m,
		A, v, l = [],
		ba = /^Mac/.test(navigator.platform),
		h = {
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			spacebar: 32,
			pageup: 33,
			pagedown: 34,
			end: 35,
			home: 36
		},
		da = {
			37: 1,
			38: 1,
			39: 1,
			40: 1
		},
		t = [],
		F = !1,
		E = Date.now(),
		S = function () {
			var a = 0;
			return function (b) {
				return b.uniqueID || (b.uniqueID = a++)
			}
		}(),
		H = {},
		R, V;
	if (window.localStorage && localStorage.SS_deltaBuffer) try {
		l = localStorage.SS_deltaBuffer.split(",")
	} catch (ha) {}
	var M = function () {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (a,
				b, d) {
				window.setTimeout(a, d || 1E3 / 60)
			}
		}(),
		Z = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
		ea = function () {
			var a;
			return function () {
				if (!a) {
					var b = document.createElement("div");
					b.style.cssText = "height:10000px;width:1px;";
					document.body.appendChild(b);
					var d = document.body.scrollTop;
					window.scrollBy(0, 3);
					a = document.body.scrollTop != d ? document.body : document.documentElement;
					window.scrollBy(0, -3);
					document.body.removeChild(b)
				}
				return a
			}
		}(),
		g = window.navigator.userAgent,
		y = /Edge/.test(g),
		G = /chrome/i.test(g) && !y,
		y = /safari/i.test(g) && !y,
		fa = /mobile/i.test(g),
		ga = /Windows NT 6.1/i.test(g) && /rv:11/i.test(g),
		Y = y && (/Version\/8/i.test(g) || /Version\/9/i.test(g)),
		g = (G || y || ga) && !fa,
		z;
	"onwheel" in document.createElement("div") ? z = "wheel" : "onmousewheel" in document.createElement("div") && (z = "mousewheel");
	z && g && (window.addEventListener(z, N, !1), window.addEventListener("mousedown", Q, !1), window.addEventListener("load", C, !1));
	x.destroy = function () {
		A && A.disconnect();
		window.removeEventListener(z, N, !1);
		window.removeEventListener("mousedown",
			Q, !1);
		window.removeEventListener("keydown", J, !1);
		window.removeEventListener("resize", v, !1);
		window.removeEventListener("load", C, !1)
	};
	window.SmoothScrollOptions && x(window.SmoothScrollOptions);
	"function" === typeof define && define.amd ? define(function () {
		return x
	}) : "object" == typeof exports ? module.exports = x : window.SmoothScroll = x
})();