// ON DOCUMENT READY
$(document).ready(() => {

     $('.gallery-slider__main').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: true,
   infinite: true,
 	asNavFor: '.gallery-slider__thumbnails',
 });

 $('.gallery-slider__thumbnails').slick({

 	slidesToScroll: 1,
 	asNavFor: '.gallery-slider__main',
  dots: false,
  arrows: false,
   focusOnSelect: true,
   variableWidth: true,
   infinite: true
 });

 // Remove active class from all thumbnail slides
 $('.gallery-slider__thumbnails .slick-slide').removeClass('slick-active');

 // Set active class to first thumbnail slides
 $('.gallery-slider__thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.gallery-slider__main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide
 	$('.gallery-slider__thumbnails .slick-slide').removeClass('slick-active');
 	$('.gallery-slider__thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});
});
