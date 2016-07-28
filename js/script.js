// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            //scroll to given href minus height of navigation bar
            scrollTop: $($anchor.attr('href')).offset().top - $("#nav-to-stop").height() + 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.carousel').carousel({
    interval: 5000 //changes the speed
});

$(function () {
    $(".dropdown").hover(
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function () {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
});

(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".skills li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();

$(window).scroll(function () {
    var nav = $('#nav-to-stop');
    var body = $('body');
    var top = 200;  //set this
    if ($(window).scrollTop() >= top) {

        nav.addClass('navbar-fixed-top');
        body.addClass('padding-fifty');

    } else {
        nav.removeClass('navbar-fixed-top');
        body.removeClass('padding-fifty');
    }
});

$(window).on("scroll touchmove", function () {

    var top = $("#top");
    var about = $("#about");
    var skills = $("#skills");
    var workingExperience = $("#workingexperience");
    var projects = $("#projects");
    var education = $("#education");
    var languages = $("#languages");
    var hobby = $("#hobby");


    if ($(document).scrollTop() == top.position().top) {
        $('body').css('background', top.attr("data-color"));
        $(".navbar-default").css('background-color', '#BE4754');
        $(".back-to-top").css('opacity', 0);
    }
    if ($(document).scrollTop() >= about.position().top) {
        $('body').css('background', about.attr("data-color"));
        $(".navbar-default").css('background-color', '#42304f');
        $(".back-to-top").css('opacity', 1);
    }

    if ($(document).scrollTop() >= skills.position().top) {
        $('body').css('background', skills.attr("data-color"));
        $(".navbar-default").css('background-color', '#5c2427');
    }

    if ($(document).scrollTop() >= workingExperience.position().top) {
        $('body').css('background', workingExperience.attr("data-color"));
        $(".navbar-default").css('background-color', '#484637');
    }

    if ($(document).scrollTop() >= projects.position().top) {
        $('body').css('background', projects.attr("data-color"));
        $(".navbar-default").css('background-color', '#26594b');
    }

    if ($(document).scrollTop() >= education.position().top) {
        $('body').css('background', education.attr("data-color"));
        $(".navbar-default").css('background-color', '#535926');
    }

    if ($(document).scrollTop() >= languages.position().top) {
        $('body').css('background', languages.attr("data-color"));
        $(".navbar-default").css('background-color', '#3c3c44');
    }

    if ($(document).scrollTop() >= hobby.position().top) {
        $('body').css('background', hobby.attr("data-color"));
        $(".navbar-default").css('background-color', '#404040');
    }

    if ($(document).scrollTop() >= contact.position().top) {
        $('body').css('background', contact.attr("data-color"));
        $(".navbar-default").css('background-color', '#404040');
    }
});

document.getElementById("nav-to-stop").classList.remove("hasactive");