$(document).ready(function () {

    $('.accordion dt').stop().click(function () {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp(300);
        } else {
            $(this).addClass('active');
            $(this).next().slideDown(300);
        }
    });

    // Sticky Header
    $(window).scroll(function() {

        if ($(window).scrollTop() > 20) {
            $('.main_h').addClass('sticky');
        } else {
            $('.main_h').removeClass('sticky');
        }
    });

// Mobile Navigation
    $('.mobile-toggle').click(function() {
        if ($('.main_h').hasClass('open-nav')) {
            $('.main_h').removeClass('open-nav');
        } else {
            $('.main_h').addClass('open-nav');
        }
    });

    $('.main_h li a').click(function() {
        if ($('.main_h').hasClass('open-nav')) {
            $('.navigation').removeClass('open-nav');
            $('.main_h').removeClass('open-nav');
        }
    });

// navigation scroll lijepo radi materem
    $('nav a').click(function(event) {
        var id = $(this).attr("href");
        var offset = 70;
        var target = $(id).offset().top - offset;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });
});


function calcAge(day, month, year) {
    const dayOfBirthTimestamp = new Date(year, month-1, day).getTime();
    const todayTimestamp = new Date().getTime();
    const ageTimestamp = todayTimestamp - dayOfBirthTimestamp;

    const yearInMS = 365.25 * 24 * 60 * 60 * 1000; //days * hours * minutes * seconds * milliseconds

    const age = Math.floor(ageTimestamp / yearInMS);

    document.write(age.toString());
}