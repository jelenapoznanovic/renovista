(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// ON DOCUMENT READY
$(document).ready(function () {
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
    var mySlideNumber = nextSlide;
    $('.portfolio-slider__thumbnails .slick-slide').removeClass('slick-active');
    $('.portfolio-slider__thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
  $('.portfolio-slider__info-box').on('click', function () {
    $(this).removeClass('is-visible');
    $('.portfolio-slider__purchase-price').addClass('is-visible');
  });
  $('.portfolio-slider__purchase-price .close').on('click', function () {
    $(this).parents('.portfolio-slider__purchase-price').removeClass('is-visible');
    $('.portfolio-slider__info-box').addClass('is-visible');
  });
  $('.header-main__bottom a').on('click', function (e) {
    e.preventDefault();
    var body = $('html, body');
    body.stop().animate({
      scrollTop: $('.news-cards').offset().top
    }, 500, 'swing'); // body.stop().animate({scrollTop:0}, 500, 'swing', function() { 
    // 	alert("Finished animating");
    //  });
  });
  var outer = $(window).outerHeight();
  var inner = $(window).innerHeight();
  var thumbnailPosition = outer - inner;
  alert(thumbnailPosition);
});
$(window).on('load', function () {
  $('#preloader').fadeOut();
});

},{}]},{},[1])

//# sourceMappingURL=app.js.map
