(function ($) {
    'use strict';

    //Custom Cursor
    $(function(){
        $('body').prepend('<div class="cursor"></div>');
        $(document).mousemove(function(e) {
            $('.cursor').css({
                "left": e.pageX,
                "top": e.pageY - $(window).scrollTop()
            });
        });
        $('a, button, span, input[type=submit]').mouseenter(function(){
            var cursorStyle = $(this).css('cursor');
            if (cursorStyle === 'pointer') {
                $('.cursor').addClass('hover');
            }
        }).mouseleave(function(){
            $('.cursor').removeClass('hover');
        });
    });

    /*============================ Home Page ============================*/
    //All Nice Select
    if ($('.elbp__homepage').length) {
        $('#elbphtLanguage').niceSelect();
        $('#elbphtCurrency').niceSelect();
    }

    //Cart Slider
    $(function(){
        $('.elbp__cart__button').on('click', function(){
            $('.elbp__cart__slider').addClass('show')
        })
        $('.elbp__cart__closebtn').on('click', function(){
            $('.elbp__cart__slider').removeClass('show')
        })
    });

    //Search Popup
    $(function() {
        $('.elbp__search__button').on('click',function() {
            $('.elbp__search__popup').addClass('show');
        })
        $('.elbpsearch__close__btn').on('click',function() {
            $('.elbp__search__popup').removeClass('show');
        })
    });

    //Mobile Menu
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.elbp__mmenu__btn').on('click', function(){
            $('.elbp__mobile__menu').addClass('show')
        })
        $('.elbp__mblmenu__closebtn').on('click', function(){
            $('.elbp__mobile__menu').removeClass('show')
        })

        //Mobile Menu Submenu Show/hide
        $('.mobile__submenu').on('click', function() {
            var fessubmenu = $(this).find('.l2__submenu');
            fessubmenu.toggleClass('show');
        });
    });

    //Quantity Widget
    $(function(){
        $('.quantity__controls').each(function() {
        var quantityDisplay = $(this).find('.quantity__display');
    
        $(this).find('.quantity__increase').on('click', function() {
            var currentQuantity = parseInt(quantityDisplay.text(), 10);
            quantityDisplay.text(currentQuantity + 1);
        });
    
        $(this).find('.quantity__decrease').on('click', function() {
            var currentQuantity = parseInt(quantityDisplay.text(), 10);
            if (currentQuantity > 1) {
            quantityDisplay.text(currentQuantity - 1);
            }
        });
        });
    });

    //Hero Slider
    $(function(){
        var swiper = new Swiper(".elbp__hero__slider", {
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: ".elbphero__slider__dots",
            }
        });
    });

    //Trending Product Slider
    $(function(){
        var swiper = new Swiper(".elbp__trendprod__slider", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                prevEl: "#elbp__trendprodslide__prev",
                nextEl: "#elbp__trendprodslide__next",
            },
            breakpoints: {
                200: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                },
                1140: {
                    slidesPerView: 4,
                }
            },
        });
    });

    //New Collection Slider
    $(function(){
        var swiper = new Swiper(".elbp__newcollection__slider", {
            loop: true,
            spaceBetween: 20,
            pagination: {
                el: ".elbnewcoll__slider__dots",
            },
            navigation: {
                prevEl: "#elbp__newcolslide__prev",
                nextEl: "#elbp__newcolslide__next",
            },
        });
    });

    //Best Seller Slider
    $(function(){
        var swiper = new Swiper(".elbp__bestseller__slider", {
            loop: true,
            spaceBetween: 0,
            navigation: {
                prevEl: "#elbp__bestsellerslide__prev",
                nextEl: "#elbp__bestsellerslide__next",
            },
        });
    });
    


}) (jQuery);