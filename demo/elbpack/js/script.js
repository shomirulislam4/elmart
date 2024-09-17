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
        if ($('.elbp__header__section').length) {
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
        
        //On Sale Timer
        function makeTimer() {
            var endTime = new Date("30 March 2025 0:00:00 UTC+0");    
            endTime = (Date.parse(endTime) / 1000);
            var now = new Date();
            now = (Date.parse(now) / 1000);
        
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400); 
            var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
            var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
            var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        
            function addLeadingZero(num) {
                return (num < 10 ? '0' : '') + num;
            }
        
            $(".elbp__countdown__timer .days").html(addLeadingZero(days));
            $(".elbp__countdown__timer .hours").html(addLeadingZero(hours));
            $(".elbp__countdown__timer .minutes").html(addLeadingZero(minutes));
            $(".elbp__countdown__timer .seconds").html(addLeadingZero(seconds));        
        }
        setInterval(function() { makeTimer(); }, 1000);

        //Testimonials Slider
        $(function(){
            var swiper = new Swiper(".elbptm__slider", {
                loop: true,
                spaceBetween: 0,
                navigation: {
                    prevEl: ".elbptm__slider.prev",
                    nextEl: ".elbptm__slider.next",
                },
            });
        });

        //Categories Slider
        $(function() {
            var swiper = new Swiper(".elbpcat__slider", {
                loop: true,
                spaceBetween: 0,
                navigation: {
                    prevEl: "#elbp__catslide__prev",
                    nextEl: "#elbp__catslide__next",
                },
                pagination: false,
                on: {
                    init: function() {
                        $('.elbp__categories__name a').eq(this.realIndex).addClass('active');
                    },
                    slideChange: function() {
                        $('.elbp__categories__name a').removeClass('active');
                        $('.elbp__categories__name a').eq(this.realIndex).addClass('active');
                    }
                }
            });

            $('.elbp__categories__name a').on('click', function() {
                let index = $(this).index();
                swiper.slideToLoop(index);
            });
        });

    /*============================ About Us Page ============================*/
        //Video Popup
        $(function() {
            $('.elbpvp__play__btn').magnificPopup({
                disableOn: 199,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false
            });
        });
        

    /*============================ Single Product Page ============================*/
        //Single Product Image
        $(document).ready(function(){
            $('.elbpsmalimage').click(function() {
                var bigImageSrc = $('#elbpbigImage').attr('src');
                var smallImageSrc = $(this).attr('src');
                
                $('#elbpbigImage').attr('src', smallImageSrc);
                $(this).attr('src', bigImageSrc);
            });
        });
        

}) (jQuery);