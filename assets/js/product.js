"use strict";

let datas = 1;
document.querySelector('#counting').innerText = datas;

function increment() {
  if (datas > 1) {
    datas = datas - 1;
    document.querySelector('#counting').innerText = datas;
  }
}

function decrement() {
  datas = datas + 1;
  document.querySelector('#counting').innerText = datas;
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// let accor = document.querySelector('.one .rightsid .accordion');
// let plus = document.querySelector('.one .rightsid .accordion .pluss');
// let minus = document.querySelector('.one .rightsid .accordion .minuss');

// element.addEventListener('click', () => {
//   if (element.classList.contains("active")) {
//     document.querySelector('.one .rightsid .accordion .pluss').classList.add('d-none');
//     document.querySelector('.one .rightsid .accordion .minuss').classList.remove('d-none');
//   }
//   else{
//     minus.classList.add('d-none');
//     plus.classList.remove('d-none');
//   }
// })

$(function () {
  $('.one .rightsid .accordion').click(function () {
    if ($(this).attr("data-id") == 1) {
      if ($(this).hasClass("active")) {
        $('.one .rightsid .accordion .pluss1').addClass("d-none");
        $('.one .rightsid .accordion .minuss1').removeClass("d-none");
      }
      else {
        $('.one .rightsid .accordion .pluss1').removeClass("d-none");
        $('.one .rightsid .accordion .minuss1').addClass("d-none");
      }
    }
    if ($(this).attr("data-id") == 2) {
      if ($(this).hasClass("active")) {
        $('.one .rightsid .accordion .pluss2').addClass("d-none");
        $('.one .rightsid .accordion .minuss2').removeClass("d-none");
      }
      else {
        $('.one .rightsid .accordion .pluss2').removeClass("d-none");
        $('.one .rightsid .accordion .minuss2').addClass("d-none");
      }
    }
    if ($(this).attr("data-id") == 3) {
      if ($(this).hasClass("active")) {
        $('.one .rightsid .accordion .pluss3').addClass("d-none");
        $('.one .rightsid .accordion .minuss3').removeClass("d-none");
      }
      else {
        $('.one .rightsid .accordion .pluss3').removeClass("d-none");
        $('.one .rightsid .accordion .minuss3').addClass("d-none");
      }
    }
  })
})
