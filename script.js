
myApp = {};

myApp.revealWork = function(){
    $('#under-the-sea').on('click touch', function(){
    $('.under-the-sea-example').toggleClass("reveal-example");
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
}

$(document).ready(function(){
    myApp.init();
});