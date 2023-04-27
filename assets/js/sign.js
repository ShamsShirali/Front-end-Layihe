"use strict";

$(function () {

    $("form .pass .close").click(function () {
        $("form .pass .input").attr("type", "password")
        $(this).next().removeClass("d-none")
        $(this).addClass("d-none")
    })

    $("form .pass .open").click(function () {
        $("form .pass .input").attr("type", "text")
        $(this).prev().removeClass("d-none")
        $(this).addClass("d-none")
    })
})