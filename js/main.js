$(document).ready(function () {
    // navbar toggler
    $('.navbar-toggler').on('click', function () {
        $('.animated-navbar-toggler-icon').toggleClass('open');
    });

    // Smooth scroll
    $('.nav-link, .navbar-brand, #welcomeBtn').on('click', function (event) {
        event.preventDefault();
        var href = $(this).attr("href");
        console.log(href);
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 800);
    });

    //animations
    AOS.init();
});

