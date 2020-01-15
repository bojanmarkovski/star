jQuery(function($) {
    // wow = new WOW({
    //     animateClass: 'animated',
    //     offset: 50,
    //     callback: function(box) {
    //         console.log(box)
    //     }
    // });
    // wow.init();

    var scroll_top;
    $(window).scroll(function() {
        scroll_top = $(document).scrollTop();
        if (scroll_top > 25 && screen.width > 767) {
            $("#header").addClass("minimized");
        } else {
            $("#header").removeClass("minimized");
        }
    });

    // $(".main-slider").slick({
    //     infinite: true,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     arrows: true,
    //     responsive: [{
    //         breakpoint: 767,
    //         settings: {
    //             arrows: false
    //         }
    //     }]
    // });

    $(".menu-item a").click(function() {
        var section = $(this).attr("href").substr(1);
        $([document.documentElement, document.body]).animate({
            scrollTop: $(section).offset().top
        }, 1000);
        return false;
    });

    $(".nav-menu").click(function() {
        if (screen.width < 768) {
            $("#header").toggleClass("active");
        }
    });

});