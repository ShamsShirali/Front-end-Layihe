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