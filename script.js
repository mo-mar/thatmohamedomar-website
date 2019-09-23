
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
        autoPlay: 2500,
    });
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
}

$(document).ready(function(){
    myApp.init();
});