
myApp = {};


myApp.flickity = function(){
    $('.recent-work-master').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true
    });
}

myApp.smoothScroll = function(){
    $('nav li a').click(function(){
        let targetLink = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetLink).offset().top
        }, 0);
        $('.hamburger-menu').toggleClass("hide-menu");
    })
}

myApp.revealHamburger = function(){
    $('nav label').on('click touch', function(){
        $('.hamburger-menu').toggleClass("hide-menu");
    })
}
myApp.init = function(){
    myApp.revealHamburger();
    myApp.flickity();
    myApp.smoothScroll();
    AOS.init();
}

$(document).ready(function(){
    myApp.init();
});