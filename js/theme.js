(function($) {

    "use strict";


    /****************************************************
     * General Targets
     ****************************************************/
    function generalTargets(){
        var cmTitle  =  $(".comingsoon-page .page-title"),
            cmHeader =  $(".comingsoon-page .page-header"),
            cmFooter =  $(".comingsoon-page .page-footer"),
            overlayContainer = $(".class-overlay-container img").outerHeight(),
            winHeight = $(window).outerHeight();

        $(".comingsoon-page, .loading-page").css("height", winHeight);
        $(".class-overlay-container").each( function( i, l ){
            $(l).children(".class-overlay").children(".entry-contents").css("height", overlayContainer-92+'px');
        });


        $(".border-title").each( function( i, l ){
            var widthSpan = $(l).children("span").outerWidth();
            $(l).children("span").css("width", widthSpan+1+"px");
            var widthTitle = ($(l).width() - widthSpan)/2;
            $(l).children("i").css("width", widthTitle);
        });

        if(($(window).height()<=800) && $(window).width()<=768){

            cmHeader.css("top", 15+"px");
            cmTitle.css("font-size", 25+"px");
            cmFooter.css("bottom", 15+"px");

        }else{

            cmHeader.css("top", 120+"px");
            cmTitle.css("font-size", 59+"px");
            cmFooter.css("bottom", 120+"px");
        }
    }
    $(window).on("load", function(){
        generalTargets();
    });
    var resizeTimer;
    $(window).on('resize', function(e) {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            generalTargets();
        }, 250);

    });

    /*-----------------------------------------------------------------------------------*/
    /* Parallax
     /*-----------------------------------------------------------------------------------*/
    // var scroll = $('div[data-type="background"]');
    // cache the window object
    var $window = $(window);

    $('div[data-type="background"]').each(function(){
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% '+ yPos + 'px';

            // move the background
            $scroll.css({ backgroundPosition: coords });
        }); // end window scroll
    });  // end section function


    /****************************************************
     * Main Menu
     ****************************************************/
    $(".main-nav li").on("mouseenter mouseleave", function(){
        $(this).children("ul").stop(true, true).slideToggle();
    });


    /****************************************************
     * Mobile Menu
     ****************************************************/
    if(jQuery().slicknav) {
        $('.main-nav .main-navigation').slicknav({
            label: '',
            prependTo: ".mobile-menu",
            allowParentLinks: true
        });
    }
    /****************************************************
     * Accordion
     ****************************************************/
    $('#accordion .panel-heading').on("click", function(){
        $("#accordion .panel-heading").removeClass('active');
        $(this).addClass('active');
    });


    /****************************************************
     * Animation
     ****************************************************/
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 50,          // distance to the element when triggering the animation (default is 0)
            mobile: false,       // trigger animations on mobile devices (default is true)
            live: true       // act on asynchronously loaded content (default is true)
        }
    );
    wow.init();

    /****************************************************
     * Swipebox
     ****************************************************/
    if(jQuery().swipebox) {
        $('.swipebox').swipebox();
    }
    /****************************************************
     * Slider & Carousel
     ****************************************************/
    if(jQuery().slick) {

        // Main Slider
        $('.main-slider').slick({
            adaptiveHeight: true,
            dots: true,
            fade: true,
            speed: 500,
            lazyLoad: 'ondemand',
            cssEase: 'linear',
            autoplay: true,
            slide  : ".slide",
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });

        // Classes Carousel
        $('.classes-carousel').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            appendArrows: ".classes-carousel-wrap",
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            autoplay: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        // Video Slider
        $('.videos-slider').slick({
            adaptiveHeight: true,
            appendArrows: ".videos-slider-wrapper",
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            autoplay: true
        });

        // Gallery Single Slider
        $('.gallery-slideshow').slick({
            adaptiveHeight: true,
            appendArrows: false,
            autoplay: true,
            fade: true
        });


        // Gallery Carousel
        $('.gallery-carousel').slick({
            centerMode: true,
            arrows: false,
            dots: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        dots: false
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        dots: false
                    }
                }

            ]
        });

        // Team Carousel
        $('.team-carousel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            appendArrows: ".team-carousel-wrap",
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        arrows: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });

        // Recent Posts Carousel
        $('.recent-posts').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            //appendArrows: ".team-carousel-wrap",
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>',
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        arrows: false
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        arrows: false
                    }
                }
            ]
        });

        // Testimonial Slider
        $('.customer-review-slider').slick({
            centerMode: true,
            arrows: false,
            dots: false,
            fade: true,
            autoplay: true
        });

        // Post slider
        $('.blog-slider').slick({
            centerMode: true,
            dots: false,
            autoplay: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }

    /*****************************************************
    * Contact Form AJAX validation and submission
     * Validation Plugin : http://bassistance.de/jquery-plugins/jquery-plugin-validation/
     * Form Ajax Plugin : http://www.malsup.com/jquery/form/
     ****************************************************/
    if(jQuery().validate && jQuery().ajaxSubmit)
    {
        // Contact Form Handling
        var contact_options = {
            target: '#message-sent',
            beforeSubmit: function(){
                $('#contact-loader').fadeIn('fast');
                $('#message-sent').fadeOut('fast');
            },
            success: function(){
                $('#contact-loader').fadeOut('fast');
                $('#message-sent').fadeIn('fast');
                $('#signup-form').resetForm();
            }
        };

        $('#signup-form').validate({
            errorLabelContainer: $("#error-container"),
            submitHandler: function(form) {
                $(form).ajaxSubmit(contact_options);
            }
        });

    }

    /****************************************************
     * Slider Popover
     ****************************************************/
    $(function () {
        $('#past-train').popover({
            html : true,
            content: function() {
                return $('#past-train-post').html();
            }
        });
        $('#current-train').popover({
            html : true,
            content: function() {
                return $('#current-train-post').html();
            }
        });
        $('#next-train-1').popover({
            html : true,
            placement: "left",
            content: function() {
                return $('#next-train-post-1').html();
            }
        });
        $('#next-train-2').popover({
            html : true,
            placement: "left",
            content: function() {
                return $('#next-train-post-2').html();
            }
        });
    });

    /****************************************************
     * Prices Pie Charts
     ****************************************************/
    if(jQuery().circliful) {
        $('.fitness-rules-chart').circliful({
            bordersize: 7
        });
    }

    /****************************************************
     * Count Down Timer
     ****************************************************/
    if(jQuery().final_countdown) {

        var today = new Date();

        // My target date is this month 30th 9.25pm
        var target = new Date(today);
        target.setDate(360);
        target.setHours(21,25,0,0);

        // Countdown start from yesterday
        var yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        yesterday.setHours(0,0,0,0);

        $('.countdown').final_countdown({
            'start': yesterday.getTime() / 1000,
            'end': target.getTime() / 1000,
            'now': today.getTime() / 1000,
            seconds: {
                borderColor: '#008eeb',
                borderWidth: '6'
            },
            minutes: {
                borderColor: '#008eeb',
                borderWidth: '6'
            },
            hours: {
                borderColor: '#008eeb',
                borderWidth: '6'
            },
            days: {
                borderColor: '#008eeb',
                borderWidth: '6'
            }
        });
    }


})(jQuery);
