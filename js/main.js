;(function () {
	
	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var getHeight = function() {
		var extraHeight = 0;

		if ( isMobile.any() ) extraHeight = 50;
		
		setTimeout(function(){
			$('#fh5co-main').stop().animate({
				'height': $('.fh5co-tab-content.active').height() + extraHeight
			});
		}, 200);
	};

	// var pieChart = function() {
	// 	$('.chart').easyPieChart({
	// 		scaleColor: false,
	// 		lineWidth: 10,
	// 		lineCap: 'butt',
	// 		barColor: 'orange',
	// 		trackColor:	"#000000",
	// 		size: 100,
	// 		animate: 1000
	// 	});
	// };
	var num = 1;

	var move = function(id) {
		console.log(id)
	  var elem = document.getElementById(id);
	  var width = 1;
	  var id = setInterval(frame, 10);
	  function frame() {
	    if (width >= 100) {
	      clearInterval(id);
	    } else {
	      width++;
	      elem.style.width = width + '%';
	    }
	  }
	}

	var tabContainer = function() {
		getHeight();
		$(window).resize(function(){
			getHeight();
		})
	};

	var tabClickTrigger = function() {
		$('.fh5co-tab-menu a').on('click', function(event) {
			event.preventDefault();
			var $this = $(this),
				data = $this.data('tab'),
				pie = $this.data('pie');

			// add/remove active class
			$('.fh5co-tab-menu li').removeClass('active');
			$this.closest('li').addClass('active');

			$('.fh5co-tab-content.active').addClass('animated fadeOutDown');

			setTimeout(function(){
				$('.fh5co-tab-content.active').removeClass('active animated fadeOutDown fadeInUp');
				$('.fh5co-tab-content[data-content="'+data+'"]').addClass('animated fadeInUp active');
				getHeight();
			}, 500);

			if ( pie === 'yes' ) {

				setTimeout(function(){
						move('myBar1');
				}, 200);
				setTimeout(function(){
						move('myBar2');
				}, 300);
				setTimeout(function(){
						move('myBar3');
				}, 400);
				setTimeout(function(){
						move('myBar4');
				}, 500);
				setTimeout(function(){
						move('myBar5');
				}, 600);
				setTimeout(function(){
						move('myBar6');
				}, 700);
				setTimeout(function(){
						move('myBar7');
				}, 800);
				setTimeout(function(){
						move('myBar8');
				}, 900);
				setTimeout(function(){
						move('myBar9');
				}, 1000);
				setTimeout(function(){
						move('myBar9');
				}, 1100);

				setTimeout(function(){
						move('myBar10');
				}, 200);
				setTimeout(function(){
						move('myBar11');
				}, 300);
				setTimeout(function(){
						move('myBar12');
				}, 400);
				setTimeout(function(){
						move('myBar13');
				}, 500);
				setTimeout(function(){
						move('myBar14');
				}, 600);
				setTimeout(function(){
						move('myBar15');
				}, 700);
				setTimeout(function(){
						move('myBar16');
				}, 800);
			}
			
		})
	};

	// Document on load.
	$(function(){
		tabContainer();
		tabClickTrigger();

		

	});


}());