(function($) { "use strict";


	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px",
		i.style.left = n.clientX + "px",
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


	//Parallax & fade on scroll

	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/300)
		});
		$('.parallax-top-shadow').css({
		  'top' : (scrollPos/-2)+'px'
		});
		$('.parallax-top').css({
		  'top' : (scrollPos/2.2)+'px'
		});
	  });
	}
	scrollBanner();


	/* Scroll Animation */

	window.scrollReveal = new scrollReveal();


	/* Swiper */

    var swiper = new Swiper('.swiper-container', {
		scrollbar: {
			el: '.swiper-scrollbar',
			hide: false,
			draggable: true,
			dragSize: '19',
		},
		slidesPerView: 'auto',
		resistance: true,
		resistanceRatio: 0,
		speed: 800,
		autoplay: false,
		mousewheel: true,
		freeMode: true,
		grabCursor: true,
		touchStartPreventDefault: false,
		breakpoints: {
			// when window width is <= 1200px
			1200: {
				freeMode: false,
			}
		}
    });
	$('#hero-slider').on('mousedown touchstart', function(event) {
		$('body').addClass('scale-up');
	});
	$('#hero-slider').on('mouseup touchend', function(event) {
		$('body').removeClass('scale-up');
	});


	//Navigation

	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;

		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');

			applyListeners();
		};

		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};

		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};

		init();
	}();


	$(document).ready(function() {

		//Loading page animation

		$(".animsition").animsition({
			inClass               :   'fade-in-down-sm',
			outClass              :   'fade-out-down-sm',
			inDuration            :    400,
			outDuration           :    400,
			linkElement           :   '.animsition-link',
			// e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
			loading               :    true,
			loadingParentElement  :   'body',
			loadingClass          :   'animsition-loading',
			unSupportCss          : [ 'animation-duration',
									  '-webkit-animation-duration',
									  '-o-animation-duration'
									],
			overlay               :   false,
			overlayClass          :   'animsition-overlay-slide',
			overlayParentElement  :   'body'
		});


		//Nice Select

		$('select').niceSelect();


		//Scroll back to top

		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


		/* Hero Case Study Hover Effect */

		$('.case-study-name:nth-child(1)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(1)').addClass("show");
			$('.case-study-name:nth-child(1)').addClass('active');
		})
		$('.case-study-name:nth-child(2)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(2)').addClass("show");
			$('.case-study-name:nth-child(2)').addClass('active');
		})
		$('.case-study-name:nth-child(3)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(3)').addClass("show");
			$('.case-study-name:nth-child(3)').addClass('active');
		})
		$('.case-study-name:nth-child(4)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(4)').addClass("show");
			$('.case-study-name:nth-child(4)').addClass('active');
		})
		$('.case-study-name:nth-child(5)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(5)').addClass("show");
			$('.case-study-name:nth-child(5)').addClass('active');
		})

		$('.case-study-name:nth-child(6)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(6)').addClass("show");
			$('.case-study-name:nth-child(6)').addClass('active');
		})
		$('.case-study-name:nth-child(7)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(7)').addClass("show");
			$('.case-study-name:nth-child(7)').addClass('active');
		})
		$('.case-study-name:nth-child(8)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(8)').addClass("show");
			$('.case-study-name:nth-child(8)').addClass('active');
		})
		$('.case-study-name:nth-child(9)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(9)').addClass("show");
			$('.case-study-name:nth-child(9)').addClass('active');
		})
		$('.case-study-name:nth-child(10)').on('mouseenter touchstart', function() {
			$('.case-study-name.active').removeClass('active');
			$('.case-study-images li.show').removeClass("show");
			$('.case-study-images li:nth-child(10)').addClass("show");
			$('.case-study-name:nth-child(10)').addClass('active');
		})
		$('.case-study-name:nth-child(1)').trigger('mouseenter')


		/* Cursor color change */

		$('.background-dark-3').on('mouseover', function(event) {
			$('body').addClass('cursor-dark');
		});
		$('.background-dark-3').on('mouseout', function(event) {
			$('body').removeClass('cursor-dark');
		});


		/* Video */

		$(".container").fitVids();

		$('.vimeo a,.youtube a').on('click', function (e) {
			e.preventDefault();
			var videoLink = $(this).attr('href');
			var classeV = $(this).parent();
			var PlaceV = $(this).parent();
			if ($(this).parent().hasClass('youtube')) {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
			} else {
				$(this).parent().wrapAll('<div class="video-wrapper">');
				$(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=1f2029" width="500" height="281" frameborder="0"></iframe>');
			}
		});
		$('.video-section').on('mouseover', function(event) {
			$('body').addClass('video-cursor');
		});
		$('.video-section').on('mouseout', function(event) {
			$('body').removeClass('video-cursor');
		});

		/* Portfolio Sorting */

		(function ($) {
			var container = $('#projects-grid');
			function getNumbColumns() {
				var winWidth = $(window).width(),
					columnNumb = 1;
				if (winWidth > 1500) {
					columnNumb = 2;
				} else if (winWidth > 1200) {
					columnNumb = 2;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 1;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				return columnNumb;
			}
			function setColumnWidth() {
				var winWidth = $(window).width(),
					columnNumb = getNumbColumns(),
					postWidth = Math.floor(winWidth / columnNumb);

			}
			$('#portfolio-filter #filter a').on('click', function () {
				var selector = $(this).attr('data-filter');

				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');

				container.isotope( {
					filter : selector
				});

				setTimeout(function () {
					reArrangeProjects();
				}, 300);
				return false;
			});
			function reArrangeProjects() {
				setColumnWidth();
				container.isotope('reLayout');
			}
			// container.imagesLoaded(function () {
			// 	setColumnWidth();
			// 	container.isotope( {
			// 		itemSelector : '.portfolio-box',
			// 		layoutMode : 'masonry',
			// 		resizable : false
			// 	} );
			// } );
			$(window).on('debouncedresize', function () {
				reArrangeProjects();
			} );
		} )(jQuery);


	});

	/* DebouncedResize Function */

	(function ($) {
		var $event = $.event,
			$special,
			resizeTimeout;
		$special = $event.special.debouncedresize = {
			setup : function () {
				$(this).on('resize', $special.handler);
			},
			teardown : function () {
				$(this).off('resize', $special.handler);
			},
			handler : function (event, execAsap) {
				var context = this,
					args = arguments,
					dispatch = function () {
						event.type = 'debouncedresize';

						$event.dispatch.apply(context, args);
					};
				if (resizeTimeout) {
					clearTimeout(resizeTimeout);
				}
				execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
			},
			threshold : 150
		};
	} )(jQuery);




  })(jQuery);






	;(function(window) {

		function BufferLoader(context, urlList, callback) {
			this.context = context;
			this.urlList = urlList;
			this.onload = callback;
			this.loadCount = 0;
		}


		function findAncestor(el, cls) {
			while ((el = el.parentElement) && !el.classList.contains(cls));
			return el;
		}
		// getElementById shorthand function.
		function $(id) { return document.getElementById(id); };




		function MediaRevealer(el) {
			this.el = el;
			this.contentEl = findAncestor(this.el, 'content');
			this.mediaEl = this.contentEl.querySelector('.pop-media[data-pop-media="' + this.el.getAttribute('data-pop-media') + '"]');

			var w = 0, h = 0;


	this.mediaEl.style.width = w ? w : null;
			this.mediaEl.style.height = h ? h : null;
		}

	MediaRevealer.prototype.positionMedia = function() {
			var elOffset = this.el.getBoundingClientRect(),
				contentOffset = this.contentEl.getBoundingClientRect();

			this.mediaEl.style.top = parseFloat((elOffset.top + this.el.offsetHeight/2) - contentOffset.top - this.mediaEl.offsetHeight/2) + 'px';
			this.mediaEl.style.left = parseFloat((elOffset.left + this.el.offsetWidth/2) - contentOffset.left - this.mediaEl.offsetWidth/2) + 'px';
		};

		MediaRevealer.prototype.resetMedia = function() {
			this.mediaEl.style.WebkitTransform = this.mediaEl.style.transform = 'none';
			this.mediaEl.style.opacity = 0;
		};

		function init() {
				initEvents();
		}

		function initEvents() {

				evOn =  'mouseenter',
				evOff =  'mouseleave';



			/**************************** effect1 ****************************/
			var t1 = new MediaRevealer($('trigger-1'));
			t1.el.addEventListener(evOn, function(ev) {
				clearTimeout(triggertimeout);
				triggertimeout = setTimeout(function() {
					t1.positionMedia();
					t1.mediaEl.style.opacity = 1;
					// t1.mediaEl.style.zIndex = 1;
				}, triggerdelay);
			});
			t1.el.addEventListener(evOff, function(ev) {
				clearTimeout(triggertimeout);
				t1.resetMedia();
			});

			/**************************** effect1_1 ****************************/
			var t1_1 = new MediaRevealer($('trigger-1_1'));
			t1_1.el.addEventListener(evOn, function(ev) {
				clearTimeout(triggertimeout);
				triggertimeout = setTimeout(function() {
					t1_1.positionMedia();
					t1_1.mediaEl.style.opacity = 1;
				}, triggerdelay);
			});
			t1_1.el.addEventListener(evOff, function(ev) {
				clearTimeout(triggertimeout);
				t1_1.resetMedia();
			});

      /**************************** effect2 ****************************/
			var t2 = new MediaRevealer($('trigger-2'));
			t2.el.addEventListener(evOn, function(ev) {
				clearTimeout(triggertimeout);
				triggertimeout = setTimeout(function() {
					t2.positionMedia();
					t2.mediaEl.style.opacity = 1;
				}, triggerdelay);
			});
			t2.el.addEventListener(evOff, function(ev) {
				clearTimeout(triggertimeout);
				t2.resetMedia();
			});


      /**************************** effect3 ****************************/
      var t3 = new MediaRevealer($('trigger-3'));
      t3.el.addEventListener(evOn, function(ev) {
        clearTimeout(triggertimeout);
        triggertimeout = setTimeout(function() {
          t3.positionMedia();
          t3.mediaEl.style.opacity = 1;
        }, triggerdelay);
      });
      t3.el.addEventListener(evOff, function(ev) {
        clearTimeout(triggertimeout);
        t3.resetMedia();
      });



			/**************************** effect4 ****************************/
			var t4 = new MediaRevealer($('trigger-4'));
			t4.el.addEventListener(evOn, function(ev) {
				clearTimeout(triggertimeout);
				triggertimeout = setTimeout(function() {
					t4.positionMedia();
					t4.mediaEl.style.opacity = 1;
					t4.mediaEl.style.WebkitTransform = t4.mediaEl.style.transform = 'rotate3d(0,0,1,-20deg)';
				}, triggerdelay);
			});
			t4.el.addEventListener(evOff, function(ev) {
				clearTimeout(triggertimeout);
				t4.resetMedia();
			});
	}


		// setTimeouts for the mouseenter events.
		var triggertimeout, triggerdelay = 50;



		init();



	})(window);
