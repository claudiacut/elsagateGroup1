/**
 * Curtain.js - Create an unique page transitioning system
 * Version: 2
 * Copyright 2011, Victor Coulon (http://victorcoulon.fr)
 * Released under the MIT Licence
 */

/* global $, jQuery */

// Dependencies:
// imagesLoaded

(function($, window, document, undefined) {

  'use strict';

  var pluginName = 'curtain',
    defaults = {
      scrollSpeed: 400,
      bodyHeight: 0,
      mobile: false,
      scrollButtons: {},
      controls: null,
      curtainLinks: '.curtain-links',
      enableKeys: true,
      easing: 'swing',
      disabled: false,
      nextSlide: function() {},
      prevSlide: function() {},
      loadSetup: function() {}
    };

  // The actual plugin constructor
  function Plugin(element, opts) {

    // public attributes
    this.el = element;
    this.$el = $(element);
    this.opts = $.extend({}, defaults, opts);

    // private attributes
    this._defaults = defaults;
    this._name = pluginName;
    this._ignoreHashChange = false;

    // initialize
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var self = this;
      var isAndroid = (navigator.userAgent.match(/Android/i));
      var isIPhone = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)));
      var isIPad = ((navigator.userAgent.match(/iPad/i)));
      var isIOs4 = (/OS [1-4]_[0-9_]+ like Mac OS X/i.test(navigator.userAgent));
      // self.webkit = (navigator.userAgent.indexOf('Chrome') > -1 || navigator.userAgent.indexOf("Safari") > -1);

      // Slides objects
      this.$slides = this.$el.find('>li');
      this.slidesRepr = this.getSlides();
      this.slidesByIds = this.getSlidesLookup(this.slidesRepr, 'id');
      this.current = {};

      // Cache stuff
      this.$document = $(document);
      this.$window = $(window);
      this.$body = $('body');

      // Switch to mobile
      if (isIPhone || isIPad || isAndroid || self.opts.disabled) {
        this.opts.mobile = true;
        this.$slides.css('position', 'relative');
        this.$el.find('.fixed').css('position', 'absolute');
      }

      // Set element to scroll
      if (this.opts.mobile) {
        this.$scrollable = this.$el;
      } else {
        this.$scrollable = $('html, body');
      }

      // Enable controls
      if (self.opts.controls) {
        self.opts.scrollButtons.up = $(self.opts.controls).find('[href="#up"]');
        self.opts.scrollButtons.down = $(self.opts.controls).find('[href="#down"]');

        if (!isIOs4 && (isIPhone || isIPad)) {
          self.$el.css({
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            '-webkit-overflow-scrolling': 'touch',
            overflow: 'auto'
          });
          $(self.opts.controls).css({
            position: 'absolute'
          });
        }
      }

      // Listen to images loaded
      self.$el
        .imagesLoaded()
        .always(self.onImagesLoaded())
        .done(function() {
          console.log('all images successfully loaded');
        })
        .fail(function() {
          console.log('all images loaded, at least one is broken');
        });
    },
    onImagesLoaded: function () {
      var hash = window.location.hash.substr(1);
      var slide = this.slidesByIds[hash] || this.slidesRepr[0];

      this.setDimensions();
      this.setCurrent(slide);
      this.setEvents();
      this.isHashOnList(hash);
      this.opts.loadSetup();

      // Remove Loading Overlay
      var $loadOverlay = $('.load-overlay');
      if ($loadOverlay.length) {
        $loadOverlay.fadeOut(function () {
          $loadOverlay.remove();
        });
      }
    },
    getSlides: function () {
      // fill an array with objetc literals representing the slides
      var slides = [];
      for (var i = 0, l = this.$slides.length; i < l; i++) {
        var $element = $(this.$slides[i]);
        slides.push({
          $el: $element,
          id: $element[0].id,
          idx: i,
          height: 0,
          position: 0,
          fixed: $element.find('.fixed'),
          parallax: $element.find('.parallax'),
          bgParallax: $element.find('.bg-parallax')
        });
      }
      return slides;
    },
    getSlidesLookup: function (array, value) {
      var lookupObject = {};
      for (var i = 0, l = array.length; i < l; i++) {
        lookupObject[array[i][value]] = array[i];
      }
      return lookupObject;
    },
    setCurrent: function (slide) {
      var slideId = slide.id;
      var urlToTrack = window.location.pathname + '#' + slideId;
      var $element = slide.$el;
      this.$slides.removeClass('current');//.addClass('hidden');
      $element.addClass('current');//.removeClass('hidden');
      this.current = slide;

      if (history.pushState) {
        history.pushState(null, null, '#' + slideId);
      } else {
        window.location.hash = slideId || '';
      }
      // HARD FIX
      // var el = $('[href=#' + slideId + ']');
      // el.parent().siblings('li').removeClass('active');
      // el.parent().addClass('active');

      // track inner page view
      // console.log('trackGooglePage', urlToTrack);
      // new universal analytics
      // ga('send', 'pageview', urlToTrack);
      // old universal analytics
      // _gaq.push(['_trackPageview', urlToTrack]);
    },
    isHashOnList: function(hash) {
      var slide = this.slidesByIds[hash];
      if (slide) {
        this.scrollToPosition(hash);
        this.current = slide;
      }
    },
    // Events
    scrollToPosition: function (direction) {
      var self = this,
        position = null,
        currentSlide = self.current,
        destinationSlide;

      if (self.$scrollable.is(':animated')) {
        return false;
      }

      // Keyboard event, up, bottom
      if (direction === 'up' || direction === 'down') {
        destinationSlide = (direction === 'up') ? self.slidesRepr[currentSlide.idx - 1] : self.slidesRepr[currentSlide.idx + 1];
        position = position || ((destinationSlide) ? null : destinationSlide.position);
        if (position) {
          self.$scrollable.animate({
            scrollTop: position
          }, self.opts.scrollSpeed, self.opts.easing);
        }

      // Keyboard event, top
      } else if (direction === 'top') {
        self.$scrollable.animate({
          scrollTop: 0
        }, self.opts.scrollSpeed, self.opts.easing);

      // Keyboard event, bottom
      } else if (direction === 'bottom') {
        self.$scrollable.animate({
          scrollTop: self.opts.bodyHeight
        }, self.opts.scrollSpeed, self.opts.easing);

      // Hash event
      } else {
        var slideByHash = this.slidesByIds[direction];
        if (slideByHash) {
          var speed = Math.abs(currentSlide.idx - slideByHash.idx) * (this.opts.scrollSpeed * 4) / self.slidesRepr.length;

          self.$scrollable.animate({
            scrollTop: self.slidesRepr[slideByHash.idx].position || null
          }, (speed <= self.opts.scrollSpeed) ? self.opts.scrollSpeed : speed, this.opts.easing);
        }
      }

    },
    scrollEvent: function() {
      var self = this,
        docTop = self.$document.scrollTop(),
        currentSlide = self.current,
        $currentSlideEl = currentSlide.$el,
        destinationSlide;

      if (docTop < currentSlide.position && currentSlide.idx > 0) {

        // Scroll to top
        self._ignoreHashChange = true;
        destinationSlide = self.slidesRepr[currentSlide.idx - 1];
        if (self.webkit) {
          $currentSlideEl.css('-webkit-transform', 'translateY(0px) translateZ(0)');
        } else {
          $currentSlideEl.css('marginTop', 0);
        }
        self.setCurrent(destinationSlide);
        self.opts.prevSlide();

      } else if (docTop < (currentSlide.position + currentSlide.height)) {

        // animate the current slide during the scroll
        if (self.webkit) {
          $currentSlideEl.css('-webkit-transform', 'translateY(' + (-(docTop - currentSlide.position)) + 'px) translateZ(0)');
        } else {
          $currentSlideEl.css('marginTop', -(docTop - currentSlide.position));
        }
        // If there are parallax elements in the current panel
        if (currentSlide.parallax.length) {
          // default scrolling speed
          var parallaxSpeed = 0.2;
          // Check to see if element has a speed attribute and set the speed to that
          for (var i = 0, l = currentSlide.parallax.length; i < l; i++) {
            var parallaxEl = currentSlide.parallax[i];
            var rel = parallaxEl.getAttribute('rel');
            if (rel) {
              parallaxSpeed = rel;
            }
            parallaxEl.style.paddingTop = -(((docTop - currentSlide.position) * -(parallaxSpeed))) + 'px';
          }
        }

        // If there is a fixed element in the current panel
        if (currentSlide.fixed.length) {
          // loop through fixed elements
          for (var j = 0, k = currentSlide.fixed.length; j < k; j++) {
            var fixedEl = currentSlide.fixed[j];
            // var dataTop = parseInt(fixedEl.getAttribute('data-top'), 10);
            // add '-200' to avoid overlap of element into next panel
            if (docTop + self.windowHeight >= currentSlide.position + currentSlide.height - 200) {
              fixedEl.style.position = 'fixed';
            } else {
              fixedEl.style.position = 'absolute';
              fixedEl.style.marginTop = Math.abs(docTop - currentSlide.position) + 'px';
            }
          }
        }

      } else {
        // Scroll bottom
        self._ignoreHashChange = true;
        destinationSlide = self.slidesRepr[currentSlide.idx + 1];
        var marginTop = -(parseInt($currentSlideEl.css('marginTop'), 10));
        if (currentSlide.height > marginTop) {
          // just smoothly hide the last small bit if still visible
          if (self.webkit) {
            // $currentSlideEl.css('-webkit-transform', 'translateY(0px) translateZ(0)');
          } else {
            $currentSlideEl.animate({ marginTop: -(currentSlide.height + 20) }, 300);
          }
        }

        if (destinationSlide) {
          self.setCurrent(destinationSlide);
          self.opts.nextSlide();
        }
      }
    },
    scrollMobileEvent: function() {
      var docTop = this.$el.scrollTop(),
        currentSlide = this.current,
        $currentSlideEl = currentSlide.$el,
        destinationSlide;

      // Scroll to top
      if (docTop + 10 < currentSlide.position && currentSlide.idx > 0) {
        this._ignoreHashChange = true;
        destinationSlide = this.slidesRepr[currentSlide.idx - 1];
        if (destinationSlide) {
          this.setCurrent(destinationSlide);
          this.opts.prevSlide()
        }
      // Scroll bottom
      } else {
        this._ignoreHashChange = true;
        destinationSlide = this.slidesRepr[currentSlide.idx + 1];
        if (destinationSlide) {
          this.setCurrent(destinationSlide);
          this.opts.nextSlide();
        }
      }
    },
    // Setters
    setDimensions: function() {
      var heightTotal = 0;
      this.windowHeight = this.$window.height();

      for (var i = 0, l = this.slidesRepr.length; i < l; i++) {
        var $slide = $(this.slidesRepr[i].$el);
        var $slideInnerFixEl = $slide.find('.fixed');
        var isCover = $slide.hasClass('cover');
        var heightToConsider;
        var slideHeight;
        var cssChange;
        var top;

        if (isCover) {
          heightToConsider = this.windowHeight;
          cssChange = {
            minHeight: heightToConsider,
            zIndex: 999 - i
          };
        } else {
          slideHeight = $slide.outerHeight(true);
          heightToConsider = (slideHeight <= this.windowHeight) ? this.windowHeight : slideHeight;
          cssChange = {
            height: heightToConsider,
            zIndex: 999 - i
          };
        }

        $slide.css(cssChange);

        this.slidesRepr[i].height = heightToConsider;
        this.slidesRepr[i].position = heightTotal;

        heightTotal += heightToConsider;

        // manage presence of slide's inner fixed elements
        if ($slideInnerFixEl.length) {
          top = $slideInnerFixEl.css('top');
          $slideInnerFixEl.attr('data-top', top);
        }
      }
      // set body height
      if (!this.opts.mobile) {
        this.opts.bodyHeight = heightTotal;
        this.$body.height(heightTotal);
      }
    },
    setEvents: function() {
      var self = this;

      // bind scroll
      this.$window.on('resize', $.proxy(this.setDimensions, this));

      // bind scroll
      if (this.opts.mobile) {
        this.$el.on('scroll', $.proxy(this.scrollMobileEvent, this));
      } else {
        this.$window.on('scroll', $.proxy(this.scrollEvent, this));
      }

      // bind keyboard
      if (self.opts.enableKeys) {
        self.$document.on('keydown', function(e) {
          if (e.keyCode === 38 || e.keyCode === 37) {
            self.scrollToPosition('up');
            e.preventDefault();
            return false;
          }
          if (e.keyCode === 40 || e.keyCode === 39) {
            self.scrollToPosition('down');
            e.preventDefault();
            return false;
          }
          // Home button
          if (e.keyCode === 36) {
            self.scrollToPosition('top');
            e.preventDefault();
            return false;
          }
          // End button
          if (e.keyCode === 35) {
            self.scrollToPosition('bottom');
            e.preventDefault();
            return false;
          }
        });
      }

      if (self.opts.scrollButtons) {
        if (self.opts.scrollButtons.up) {
          self.opts.scrollButtons.up.on('click', function(e) {
            e.preventDefault();
            self.scrollToPosition('up');
          });
        }
        if (self.opts.scrollButtons.down) {
          self.opts.scrollButtons.down.on('click', function(e) {
            e.preventDefault();
            self.scrollToPosition('down');
          });
        }
      }

      if (self.opts.curtainLinks) {
        $(self.opts.curtainLinks).on('click', function(e) {
          e.preventDefault();
          var href = $(this).attr('href');

          if (!self.isHashOnList(href.substring(1)) && position) {
            return false;
          }
          var position = self.slidesRepr[$(href).index()].position || null;

          if (position) {
            self.$scrollable.animate({
              scrollTop: position
            }, self.opts.scrollSpeed, self.opts.easing);
          }
          return false;
        });
      }

      // bind hashchange
      self.$window.on('hashchange', function () {
        if (self._ignoreHashChange === false) {
          self.isHashOnList(location.hash.substring(1));
        }
        self._ignoreHashChange = false;
      });
    }
  };



  $.fn[pluginName] = function(opts) {
    return this.each(function() {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin(this, opts));
      }
    });
  };


})(jQuery, window, document);









$(document).ready(function() {
  $('.curtains').curtain({
    scrollSpeed: 300,
    controls: '.menu',
    nextSlide: function() {
      console.log("ok");
    }
  });
});