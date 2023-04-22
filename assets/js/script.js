"use strict";

$('.nsecond .secondl ul .category').each(function () {
  $(this).click(function () {
    if ($(this).attr("data-id") == 5) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().css("color", "grey");
      $(this).prev().prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().prev().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.nsecond .slick-dots').children().eq(4).children().eq(0).click();
      if ($('.nsecond .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.nsecond .select .line .underline').css('transform', 'translateX(490px)')
      }
      else {
        $('.nsecond .select .line .underline').css('transform', 'translateX(300px)')
      }
    }
    if ($(this).attr("data-id") == 4) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('three .slick-dots').children().eq(3).children().eq(0).click();
      if ($('.three .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.three .select .line .underline').css('transform', 'translateX(490px)')
      }
      else {
        $('.three .select .line .underline').css('transform', 'translateX(300px)')
      }
    }
    if ($(this).attr("data-id") == 3) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('three .slick-dots').children().eq(2).children().eq(0).click();
      if ($('.three .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.three .select .line .underline').css('transform', 'translateX(320px)')
      }
      else {
        $('.three .select .line .underline').css('transform', 'translateX(200px)')
      }
    }
    if ($(this).attr("data-id") == 2) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('three .slick-dots').children().eq(1).children().eq(0).click();
      if ($('.three .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.three .select .line .underline').css('transform', 'translateX(150px)')
      }
      else {
        $('.three .select .line .underline').css('transform', 'translateX(-180px)')
      }
    }
    if ($(this).attr("data-id") == 1) {
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).next().next().next().css("background-color", "white");
      $(this).next().next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('three .slick-dots').children().eq(0).children().eq(0).click();
      $('.three .select .line .underline').css('transform', 'translateX(0px)');
    }
  })
})

$(function () {

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.slick_slide').slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<div class="licons"><i class="fa-solid fa-chevron-left"></i></div>`,
    nextArrow: `<div class="ricons"><i class="fa-solid fa-chevron-right"></i></div>`
  });

  // $('.slider').slick({
  //   centerMode: true,
  //   centerPadding: '0px',
  //   slidesToShow: 1,
  //   responsive: [
  //       {
  //           breakpoint: 768,
  //           settings: {
  //               arrows: false,
  //               centerMode: true,
  //               centerPadding: '40px',
  //               slidesToShow: 3
  //           }
  //       },
  //       {
  //           breakpoint: 480,
  //           settings: {
  //               arrows: false,
  //               centerMode: true,
  //               centerPadding: '40px',
  //               slidesToShow: 1
  //           }
  //       }
  //   ]
  // });
})

$('.three .select ul li').each(function () {
  $(this).click(function () {
    if ($(this).attr("data-id") == 4) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.three .slick-dots').children().eq(3).children().eq(0).click();
      if ($('.three .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.three .select .line .underline').css('transform', 'translateX(490px)')
      }
      else {
        $('.three .select .line .underline').css('transform', 'translateX(300px)')
      }
    }
    if ($(this).attr("data-id") == 3) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('three .slick-dots').children().eq(2).children().eq(0).click();
      if ($('.three .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.three .select .line .underline').css('transform', 'translateX(320px)')
      }
      else {
        $('.three .select .line .underline').css('transform', 'translateX(200px)')
      }
    }
    if ($(this).attr("data-id") == 2) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('three .slick-dots').children().eq(1).children().eq(0).click();
      if ($('.three .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.three .select .line .underline').css('transform', 'translateX(150px)')
      }
      else {
        $('.three .select .line .underline').css('transform', 'translateX(-180px)')
      }
    }
    if ($(this).attr("data-id") == 1) {
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).next().next().next().css("background-color", "white");
      $(this).next().next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('three .slick-dots').children().eq(0).children().eq(0).click();
      $('.three .select .line .underline').css('transform', 'translateX(0px)');
    }
  })
})