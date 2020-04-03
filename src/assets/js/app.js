// ON DOCUMENT READY
$(document).ready(() => {

	$('.portfolio-slider__main').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: true,
		fade: true,
		infinite: true,
		asNavFor: '.portfolio-slider__thumbnails'
	});

	$('.portfolio-slider__thumbnails').slick({
		centerMode: true,
		slidesToShow: 14,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.portfolio-slider__main',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		variableWidth: true
	});

	$('.portfolio-slider__main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var mySlideNumber = nextSlide
		$('.portfolio-slider__thumbnails .slick-slide').removeClass('slick-active');
		$('.portfolio-slider__thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
	});

	$('.portfolio-slider__info-box').on('click', function(){

		$(this).removeClass('is-visible');

		$('.portfolio-slider__purchase-price').addClass('is-visible');
	})
	
	$('.portfolio-slider__purchase-price .close').on('click', function(){

		$(this).parents('.portfolio-slider__purchase-price').removeClass('is-visible');

		$('.portfolio-slider__info-box').addClass('is-visible');
	})

	$('.header-main__bottom a').on('click', function(e) {
		e.preventDefault();
		let body = $('html, body');
		body.stop().animate({ scrollTop: $('.news-cards').offset().top}, 500,'swing');
		// body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
		// 	alert("Finished animating");
		//  });
	})

	
});

$(window).on('load', function() {
	$('#preloader').fadeOut();
	$( window ).resize(onresize);
	function onresize() {
		const portfolioSliderHeight = $(window).outerHeight();
	
		$('.portfolio-slider ').css('height', portfolioSliderHeight)
	}
});