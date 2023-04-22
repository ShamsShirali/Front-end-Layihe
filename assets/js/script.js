"use strict";

$(function () {

  $('.slick_slide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.slide2').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 1,
  responsive: [
      {
          breakpoint: 768,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
          }
      },
      {
          breakpoint: 480,
          settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
          }
      }
  ]
});

$('icons').click(function(){
$('.icons').css({
  'background-color' : 'black',
  'color' : 'white'
})
});
})








