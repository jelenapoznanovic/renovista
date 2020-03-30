// ON DOCUMENT READY
$(document).ready(() => {

	$('.gallery-slider__main').slick({
		slidesToScroll: 1,
		slidesToShow: 1,
		arrows: true,
		fade: true,
		infinite: true,
		asNavFor: '.gallery-slider__thumbnails'
	});

	$('.gallery-slider__thumbnails').slick({
		centerMode: true,
		slidesToShow: 14,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.gallery-slider__main',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		variableWidth: true
	});

	$('.gallery-slider__main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var mySlideNumber = nextSlide
		$('.gallery-slider__thumbnails .slick-slide').removeClass('slick-active');
		$('.gallery-slider__thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
	});

	$('.gallery-slider__info-box').on('click', function(){

		$(this).removeClass('is-visible');

		$('.gallery-slider__purchase-price').addClass('is-visible');
	})
	
	$('.gallery-slider__purchase-price .close').on('click', function(){

		$(this).parents('.gallery-slider__purchase-price').removeClass('is-visible');

		$('.gallery-slider__info-box').addClass('is-visible');
	})
});
