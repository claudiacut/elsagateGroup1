
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
					t1.mediaEl.style.zIndex = -10;
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
				t1_1.mediaEl.style.zIndex = -10;
			}, triggerdelay);
		});
		t1_1.el.addEventListener(evOff, function(ev) {
			clearTimeout(triggertimeout);
			t1_1.resetMedia();
		});


		/**************************** effect4 ****************************/
		var t4 = new MediaRevealer($('trigger-4'));
		t4.el.addEventListener(evOn, function(ev) {
			clearTimeout(triggertimeout);
			triggertimeout = setTimeout(function() {
				t4.positionMedia();
				t4.mediaEl.style.opacity = 1;
				t4.mediaEl.style.zIndex = -10;
			}, triggerdelay);
		});
		t4.el.addEventListener(evOff, function(ev) {
			clearTimeout(triggertimeout);
			t4.resetMedia();
		});

		/**************************** effect4_1 ****************************/
		var t4_1 = new MediaRevealer($('trigger-4_1'));
		t4_1.el.addEventListener(evOn, function(ev) {
			clearTimeout(triggertimeout);
			triggertimeout = setTimeout(function() {
				t4_1.positionMedia();
				t4_1.mediaEl.style.opacity = 1;
				t4_1.mediaEl.style.zIndex = -10;
			}, triggerdelay);
		});
		t4_1.el.addEventListener(evOff, function(ev) {
			clearTimeout(triggertimeout);
			t4_1.resetMedia();
		});

		/**************************** effect4_2 ****************************/
		var t4_2 = new MediaRevealer($('trigger-4_2'));
		t4_2.el.addEventListener(evOn, function(ev) {
			clearTimeout(triggertimeout);
			triggertimeout = setTimeout(function() {
				t4_2.positionMedia();
				t4_2.mediaEl.style.opacity = 1;
			}, triggerdelay);
		});
		t4_2.el.addEventListener(evOff, function(ev) {
			clearTimeout(triggertimeout);
			t4_2.resetMedia();
		});


		/**************************** effec2_2 ****************************/
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


		/**************************** effec2_2 ****************************/
		var t2_2 = new MediaRevealer($('trigger-2_2'));
		t2_2.el.addEventListener(evOn, function(ev) {
			clearTimeout(triggertimeout);
			triggertimeout = setTimeout(function() {
				t2_2.positionMedia();
				t2_2.mediaEl.style.opacity = 1;
			}, triggerdelay);
		});
		t2_2.el.addEventListener(evOff, function(ev) {
			clearTimeout(triggertimeout);
			t2_2.resetMedia();
		});



}

	// setTimeouts for the mouseenter events.
	var triggertimeout, triggerdelay = 50;



// STICKERS ABOUT


	s1_1.addEventListener("click", function(){
	     c1.style.transform = "translate(-0%, 0%)";
	});

	s1.addEventListener("click", function(){
	     c1.style.transform = "translate(45%, -30%)"
	});



	s2.addEventListener("click", function(){
	     c2.style.transform = "translate(30%, -20%)";
	     c2.style.zIndex = "100";
	});

	s2_1.addEventListener("click", function(){
	     c2.style.transform = "translate(0%, 0%)";
	     c2.style.zIndex = "20";
	});



	s3.addEventListener("click", function(){
	     c3.style.transform = "translate(15%, -10%)";
	     c3.style.zIndex = "100";
	});

	s3_1.addEventListener("click", function(){
	     c3.style.transform = "translate(0%, 0%)"
	     c3.style.zIndex = "10";
	});



	s4.addEventListener("click", function(){
	   c4.style.zIndex = "100";
	      console.log("miao");

	});

	s4_1.addEventListener("click", function(){
	     c4.style.zIndex = "1";
	      console.log("ooo");
	});


	init();



})(window);
