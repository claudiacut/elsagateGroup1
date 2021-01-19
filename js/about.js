
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


	// document.getElementById("c1child").style.display = "none";


	//funzione comparsa / scomparsa contenuto div

	// document.getElementById("c1").addEventListener("mouseover", mouseOver);
	// document.getElementById("c1").addEventListener("mouseout", mouseOut);
	//
	// function mouseOver() {
	//   document.getElementById("c1child").style.color = "red";
	// }
	//
	// function mouseOut() {
	//   document.getElementById("c1child").style.color = "black";
	// }



	init();







})(window);
