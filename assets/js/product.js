"use strict"

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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(function(){
  $('.one .rightsid .accordion').click(function(){
    $('.one .rightsid .accordion .pluss').classList.add('d-none');
    $('.one .rightsid .accordion .pluss').next(),classList.remove('d-none');
  })
})

$(function(){
  $('.one .rightsid .accordion').click(function(){
    $('.one .rightsid .accordion .minuss').classList.add('d-none');
    $('.one .rightsid .accordion .minuss').prev(),classList.remove('d-none');
  })
})