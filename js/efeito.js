$(document).ready(function() {

    $('.thumbnails').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1300: {
                items: 3,
                nav: true,
                loop: false
            }


        }
    });
    var owl = $(".thumbnails").data('owlCarousel');
    $('#btn-artigos-prev').on("click", function() {
        owl.prev();
    });
    $('#btn-artigos-next').on("click", function() {
        owl.next();
    });

    $("#btn-bars").on("click", function() {
        $("header").toggleClass("open-menu");
        $("#menu-mobile, #menu-mobile-mask").removeClass("hidden-menu");
    });
    $("#menu-mobile-mask, .btn-close").on("click", function() {
        $("header").removeClass("open-menu");
        $("#menu-mobile, #menu-mobile-mask").toggleClass("hidden-menu");
    });

});