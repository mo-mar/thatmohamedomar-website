
myApp = {};


myApp.revealWork = function(){
    $('#under-the-sea').on('click touch', function(){
    $('.under-the-sea-example').toggleClass("reveal-example");
    })
    $('#game-night').on('click touch', function () {
        $('.game-night-example').toggleClass("reveal-example");
    })
}

myApp.flickity = function(){
    $('.recent-work-master').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: 3500,
        wrapAround: true
    });
}

myApp.smoothScroll = function(){
    $('nav li a').click(function(){
        let targetLink = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(targetLink).offset().top
        }, 1000);
    })
}

myApp.revealHamburger = function(){
    $('nav label').on('click touch', function(){
        // $(".hamburger-toggle").hide();
        $('.hamburger-menu').toggleClass("reveal-menu");
    })
}
myApp.init = function(){
    myApp.revealWork();
    myApp.revealHamburger();
    myApp.flickity();
    myApp.smoothScroll();
    AOS.init();
}

$(document).ready(function(){
    myApp.init();
});