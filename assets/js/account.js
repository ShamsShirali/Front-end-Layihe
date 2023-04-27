"use strict";

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  $(function(){

    $(".tabcontent .genol .closey").click(function(){
        $(".tabcontent .genol .input").attr("type","text")
        $(this).next().removeClass("d-none")
        $(this).addClass("d-none")
    })

    $(".tabcontent .genol .openey").click(function(){
        $(".tabcontent .genol .input").attr("type","password")
        $(this).prev().removeClass("d-none")
        $(this).addClass("d-none")
    })

    $(".tabcontent .genne .close").click(function(){
        $(".tabcontent .genne .input").attr("type","text")
        $(this).next().removeClass("d-none")
        $(this).addClass("d-none")
    })

    $(".tabcontent .genne .open").click(function(){
        $(".tabcontent .genne .input").attr("type","password")
        $(this).prev().removeClass("d-none")
        $(this).addClass("d-none")
    })
  })