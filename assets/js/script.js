"use strict";

$('.nsecond .secondl .category').each(function () {
  $(this).click(function () {
    if ($(this).attr("data-id") == 6) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().css("color", "grey");
      $(this).prev().prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().prev().css("color", "grey");
      $(this).prev().prev().prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().prev().prev().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.nsecond .slick-dots').children().eq(5).children().eq(0).click();
      if ($('.nsecond .line .underline').css('transform', 'translateX(0px)')) {
        $('.nsecond .line .underline').css('transform', 'translateX(520px)')
      }
      else {
        $('.nsecond .line .underline').css('transform', 'translateX(300px)')
      }
    }
    if ($(this).attr("data-id") == 5) {
      $(this).prev().css("background-color", "white");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().css("color", "grey");
      $(this).prev().prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.nsecond .slick-dots').children().eq(4).children().eq(0).click();
      if ($('.nsecond .line .underline').css('transform', 'translateX(0px)')) {
        $('.nsecond .line .underline').css('transform', 'translateX(450px)')
      }
      else {
        $('.nsecond .line .underline').css('transform', 'translateX(300px)')
      }
    }
    if ($(this).attr("data-id") == 4) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).prev().prev().prev().css("background-color", "white");
      $(this).prev().prev().prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.nsecond .slick-dots').children().eq(3).children().eq(0).click();
      if ($('.nsecond .line .underline').css('transform', 'translateX(0px)')) {
        $('.nsecond .line .underline').css('transform', 'translateX(370px)')
      }
      else {
        $('.nsecond .line .underline').css('transform', 'translateX(300px)')
      }
    }
    if ($(this).attr("data-id") == 3) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).prev().prev().css("background-color", "white");
      $(this).prev().prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).next().next().next().next().css("background-color", "white");
      $(this).next().next().next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.nsecond .slick-dots').children().eq(2).children().eq(0).click();
      if ($('.nsecond .line .underline').css('transform', 'translateX(0px)')) {
        $('.nsecond .line .underline').css('transform', 'translateX(250px)')
      }
      else {
        $('.nsecond .line .underline').css('transform', 'translateX(200px)')
      }
    }
    if ($(this).attr("data-id") == 2) {
      $(this).prev().css("background-color", "white");
      $(this).prev().css("color", "grey");
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).next().next().next().next().css("background-color", "white");
      $(this).next().next().next().next().css("color", "grey");
      $(this).next().next().next().next().next().css("background-color", "white");
      $(this).next().next().next().next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.nsecond .slick-dots').children().eq(1).children().eq(0).click();
      if ($('.nsecond .line .underline').css('transform', 'translateX(0px)')) {
        $('.nsecond .line .underline').css('transform', 'translateX(115px)')
      }
      else {
        $('.nsecond .line .underline').css('transform', 'translateX(-180px)')
      }
    }
    if ($(this).attr("data-id") == 1) {
      $(this).next().css("background-color", "white");
      $(this).next().css("color", "grey");
      $(this).next().next().css("background-color", "white");
      $(this).next().next().css("color", "grey");
      $(this).next().next().next().css("background-color", "white");
      $(this).next().next().next().css("color", "grey");
      $(this).next().next().next().next().css("background-color", "white");
      $(this).next().next().next().next().css("color", "grey");
      $(this).next().next().next().next().next().css("background-color", "white");
      $(this).next().next().next().next().next().css("color", "grey");
      $(this).next().next().next().next().next().next().css("background-color", "white");
      $(this).next().next().next().next().next().next().css("color", "grey");
      $(this).css("background-color", "white");
      $(this).css("color", "black");
      $('.nsecond .slick-dots').children().eq(0).children().eq(0).click();
      $('.nsecond .line .underline').css('transform', 'translateX(0px)');
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

  $('.two .slick_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<div class="licons"><i class="fa-solid fa-chevron-left"></i></div>`,
    nextArrow: `<div class="ricons"><i class="fa-solid fa-chevron-right"></i></div>`
  });

  $('.seven .slick_slide').slick({
    slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: `<div class="left"><i class="fa-solid fa-chevron-left"></i></div>`,
    nextArrow: `<div class="right"><i class="fa-solid fa-chevron-right"></i></div>`
  })

  $('.seven .cards .right').click(function(){
    let elem=$('.seven .nums .firstchan');
    let count=elem.text();
  
    if(count<5){
      count++;
      elem.text(count);
    }
    else{
      count=1;
      elem.text(count);
    }
  })

  $('.seven .cards .left').click(function(){
    let elem=$('.seven .nums .firstchan');
    let count=elem.text();
  
    if(count>1){
      count--;
      elem.text(count);
    }
    else{
      count=5;
      elem.text(count);
    }
  })
  
  setInterval(function(){
    let elem=$('.seven .nums .firstchan');
    let count=elem.text();
  
    if(count<5){
      count++;
      elem.text(count);
    }
    else{
      count=1;
      elem.text(count);
    }
  },2400)
  

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
      $('.three .slick-dots').children().eq(2).children().eq(0).click();
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
      $('.three .slick-dots').children().eq(1).children().eq(0).click();
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
      $('.three .slick-dots').children().eq(0).children().eq(0).click();
      $('.three .select .line .underline').css('transform', 'translateX(0px)');
    }
  })
})

// $(function(){
//   $('.three .select ul li').click(function(){
//     if($('.three .general .change').attr("data-id")==1){
//       $('.active').removeClass('.active');
//       $(this).removeClass(".d-none");
//       $(this).addClass('.active');
//     }
//     if($('.three .general div').attr("data-id")==2){
//       $('.active').removeClass('.active');
//       $(this).removeClass(".d-none");
//       $(this).addClass('.active');
//     }
//     if($('.three .general div').attr("data-id")==3){
//       $('.active').removeClassr('.active');
//       $(this).removeClass(".d-none");
//       $(this).addClass('.active');
//     }
//     if($('.three .general div').attr("data-id")==4){
//       $('.active').removeClass('.active');
//       $(this).removeClass(".d-none");
//       $(this).addClass('.active');
//     }
//   })

let apart = document.querySelectorAll('.but');
let change = document.querySelectorAll('.change');

apart.forEach(index => {
  index.addEventListener('click', () => {
    document.querySelector('.active').classList.add('d-none');
    document.querySelector('.active').classList.remove('active');

    change.forEach(element=>{
      if(element.getAttribute('data-id')==index.getAttribute('data-id')){
        element.classList.remove('d-none');
        element.classList.add('active');
      }
    })
    })
});

$(function(){
  $('.nike').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
})

$('.six .select ul li').each(function () {
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
      $('.six .slick-dots').children().eq(3).children().eq(0).click();
      if ($('.six .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.six .select .line .underline').css('transform', 'translateX(365px)')
      }
      else {
        $('.six .select .line .underline').css('transform', 'translateX(300px)')
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
      $('.six .slick-dots').children().eq(2).children().eq(0).click();
      if ($('.six .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.six .select .line .underline').css('transform', 'translateX(245px)')
      }
      else {
        $('.six .select .line .underline').css('transform', 'translateX(200px)')
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
      $('.six .slick-dots').children().eq(1).children().eq(0).click();
      if ($('.six .select .line .underline').css('transform', 'translateX(0px)')) {
        $('.six .select .line .underline').css('transform', 'translateX(125px)')
      }
      else {
        $('.six .select .line .underline').css('transform', 'translateX(-180px)')
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
      $('.six .slick-dots').children().eq(0).children().eq(0).click();
      $('.six .select .line .underline').css('transform', 'translateX(0px)');
    }
  })
})

let apar = document.querySelectorAll('.butt');
let chan = document.querySelectorAll('.chan');

apar.forEach(index => {
  index.addEventListener('click', () => {
    document.querySelector('.activ').classList.add('d-none');
    document.querySelector('.activ').classList.remove('activ');

    chan.forEach(element=>{
      if(element.getAttribute('data-id')==index.getAttribute('data-id')){
        element.classList.remove('d-none');
        element.classList.add('activ');
      }
    })
    })
});

// let right=document.querySelector('.seven .cards .right');

// right.addEventListener('click', ()=>{
//   let count=document.querySelector('.firstchan').innerText;

//   if(count==5){
//     count=1;
//     document.querySelector('.firstchan').innerText=count;
//   }
//   else{
//     count++;
//     document.querySelector('.firstchan').innerText=count;
//   }
// })

$(function(){
  $('.eight .slick_slide').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: `<div class="left"><i class="fa-solid fa-chevron-left"></i></div>`,
    nextArrow: `<div class="right"><i class="fa-solid fa-chevron-right"></i></div>`
  });

  $('.eight .carousel .right').click(function(){
    let elem=$('.eight .nums .firstchan');
    let count=elem.text();
  
    if(count<5){
      count++;
      elem.text(count);
    }
    else{
      count=1;
      elem.text(count);
    }
  })

  $('.eight .carousel .left').click(function(){
    let elem=$('.eight .nums .firstchan');
    let count=elem.text();
  
    if(count>1){
      count--;
      elem.text(count);
    }
    else{
      count=5;
      elem.text(count);
    }
  })
  
  setInterval(function(){
    let elem=$('.eight .nums .firstchan');
    let count=elem.text();
  
    if(count<5){
      count++;
      elem.text(count);
    }
    else{
      count=1;
      elem.text(count);
    }
  },2400)
});

$(document).ready(function() {
  $(".slider").on("scroll", function() {
    var thumbWidth = $(this).width() / $(this)[0].scrollWidth * 100;
    $(".slider-thumb").css("width", thumbWidth + "%");
  });
});

let data = 1;
document.querySelector('#counting').innerText = data;

function increment() {
    if (data > 1) {
        data = data - 1;
        document.querySelector('#counting').innerText = data;
    }
}

function decrement() {
    data = data + 1;
    document.querySelector('#counting').innerText = data;
}