(function ($) {
    'use strict';
    //Preloader
    $(function(){
        $(window).on('load',function(){
        $('.fes__preloader').delay(1000).fadeOut(500);
        });
        $('.fespl__close').on('click', function(){
        $('.fes__preloader').fadeOut(500);
        })
    });

    //Custom Cursor
    $(function(){
        $("body").prepend('<div class="cursor"></div>');
        $(document).mousemove(function(e) {
            $('.cursor').css({
                "left": e.pageX,
                "top": e.pageY - $(window).scrollTop()
            });
        });
        $("a, button, div, span, input[type=submit]").mouseenter(function(){
            var cursorStyle = $(this).css('cursor');
            if (cursorStyle === 'pointer') {
                $('.cursor').addClass('hover');
            }
        }).mouseleave(function(){
            $('.cursor').removeClass('hover');
        });
    });

    //All Sliders Menu
    $(function(){
        //Cart Menu
        $('.fes__header__cart').on('click', function(){
            $('.fes__cart__slider').addClass('show')
        })
        $('.fes__cart__closebtn').on('click', function(){
            $('.fes__cart__slider').removeClass('show')
        })

        //Right Side Slider Menu
        $('.fes__rsm__btn').on('click', function(){
            $('.fes__right__slider__menu').addClass('show')
        })
        $('.fes__rsm__closebtn').on('click', function(){
            $('.fes__right__slider__menu').removeClass('show')
        })
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

    //Quantity Widget V2
    $(function() {
        $(".qty-btn").on("click", function() {
        var $span = $(this);
        var $parent = $span.parent(); 
        var oldValue = $parent.find('input').val();
        
        if ($span.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
            } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
                } else {
                newVal = 1;
            }
            }
            $parent.find('input').val(newVal);
        });
    });

/*============================ Home Page ============================*/
    //Nice Select
    if ($('.fitequip__store').length) {
        $('.fesps__select').niceSelect();
        $('#fesspVariants1').niceSelect();
        $('#fesspVariants2').niceSelect();
        $('#fesspProductSorting').niceSelect();
    }

    //Mobile Menu
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.fes__mblmenu__btn').on('click', function(){
            $('.fes__mobile__menu').addClass('show')
        })
        $('.fes__mblmenu__closebtn').on('click', function(){
            $('.fes__mobile__menu').removeClass('show')
        })

        //Mobile Menu Submenu Show/hide
        $('.mobile__submenu').on('click', function() {
            var fessubmenu = $(this).find('.l2__submenu');
            fessubmenu.toggleClass('show');
        });
    });

    //Right Menu Currency & Language Changer
    $(function(){
        //Language
        $('.feslc__language p').on('click', function(){
            $('.fes__language').addClass('show');
            $('.feslc__language p').addClass('hide');
            $('.feslc__language__clsbtn').removeClass('hide');
        })
        $('.feslc__language__clsbtn').on('click', function(){
            $('.fes__language').removeClass('show');
            $('.feslc__language p').removeClass('hide');
            $('.feslc__language__clsbtn').addClass('hide');
        })

        //Currency
        $('.feslc__currency p').on('click', function(){
            $('.fes__currency').addClass('show');
            $('.feslc__currency p').addClass('hide');
            $('.feslc__currency__clsbtn').removeClass('hide');
        })
        $('.feslc__currency__clsbtn').on('click', function(){
            $('.fes__currency').removeClass('show');
            $('.feslc__currency p').removeClass('hide');
            $('.feslc__currency__clsbtn').addClass('hide');
        })
    });

    //Hero Section Slider
    $(function(){
        var swiper = new Swiper(".fes__heroslider", {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            speed: 1000,
            loop: true,
            pagination: {
                el: ".fes__heroslider__frac",
                type: "fraction",
            },
            navigation: {
                nextEl: ".fes__heroslider__btn__next",
                prevEl: ".fes__heroslider__btn__prev",
            },
        });
    });

    //Categories Section Slider
    $(function(){
        var swiper = new Swiper(".fescs__slider", {
            slidesPerView: 4,
            spaceBetween: 20,
            navigation: {
                nextEl: ".fescs__slider__btn__next",
                prevEl: ".fescs__slider__btn__prev",
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                415: {
                    slidesPerView: 2,
                },
                200: {
                    slidesPerView: 1,
                }
            },
        });
    });

    //Testimonials Section Slider
    $(function(){
        var swiper = new Swiper(".fests__slider", {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            navigation: {
                nextEl: ".fests__slider__next",
                prevEl: ".fests__slider__prev",
            },
            breakpoints: {
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                200: {
                    slidesPerView: 1,
                }
            },
        });
    });

    //Brands Section Slider
    $(function() {
        var owl = $(".fes__brands__slider");
        owl.owlCarousel({
            items: 6,
            lazyLoad: true,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            smartSpeed: 500,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                },
                415: {
                    items: 2,
                },
                576: {
                    items: 4,
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 5,
                },
                1400: {
                    items: 6,
                }
            },
            dots: false,
        });
    });

    //On Sale Timer
    function makeTimer() {
        //timer 1
        var endTime = new Date("30 March 2025 0:00:00 UTC+0");	
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        $("#timer #days").html(days + "<span>DAYS</span>");
        $("#timer #hours").html(hours + "<span>HOURS</span>");
        $("#timer #minutes").html(minutes + "<span>MIN</span>");
        $("#timer #seconds").html(seconds + "<span>SECS</span>");		
    }
    setInterval(function() { makeTimer(); }, 1000);

    // On Sale Sldier
    $(function() {
        $(".fes__pos__slider").owlCarousel({
            items: 4,
            loop: true,
            margin: 20,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
                1400: {
                    items: 4
                }
            },
            onInitialized: addNumbersToDots,
            onTranslated: addNumbersToDots
        });

        function addNumbersToDots(event) {
            var dots = $(".owl-dot");
            dots.each(function(index) {
                $(this).find("span").text(index + 1);
            });
        }
    });

    //Newsletter Products
    $(function () {
        function createAndSetupPopper(button, popover) {
        var popperInstance = Popper.createPopper(button, popover, {
            placement: "top",
        });
    
        button.addEventListener("mouseenter", function () {
            popover.style.display = "block";
            popperInstance.update();
        });
    
        button.addEventListener("mouseleave", function () {
            popover.style.display = "none";
        });
        }
    
        //Item 1
        var button1 = $(".fesns__info__dots.dot1")[0];
        var popover1 = $(".fesns__info__text.cont1")[0];
        createAndSetupPopper(button1, popover1);
    
        //Item 2
        var button2 = $(".fesns__info__dots.dot2")[0];
        var popover2 = $(".fesns__info__text.cont2")[0];
        createAndSetupPopper(button2, popover2);
    
        //Item 3
        var button3 = $(".fesns__info__dots.dot3")[0];
        var popover3 = $(".fesns__info__text.cont3")[0];
        createAndSetupPopper(button3, popover3);
    
        //Item 4
        var button4 = $(".fesns__info__dots.dot4")[0];
        var popover4 = $(".fesns__info__text.cont4")[0];
        createAndSetupPopper(button4, popover4);

        //Item 5
        var button5 = $(".fesns__info__dots.dot5")[0];
        var popover5 = $(".fesns__info__text.cont5")[0];
        createAndSetupPopper(button5, popover5);

        //Item 6
        var button6 = $(".fesns__info__dots.dot6")[0];
        var popover6 = $(".fesns__info__text.cont6")[0];
        createAndSetupPopper(button6, popover6);
    });

    //Promo Code Copy
    $(function() {
        var clipboard = new ClipboardJS('.fesbds__copy__btn', {
            text: function() {
                return $('.fesbds__promo__code').text();
            }
        });

        //Success
        clipboard.on('success', function(e) {
            showPopup();
            e.clearSelection();
        });

        function showPopup() {
            var popup = $('.fesbds__success__popuptext');
            popup.addClass('show');
            setTimeout(function() {
                popup.removeClass('show');
            }, 2000);
        }

        //Error
        clipboard.on('error', function(e) {
            showErrorPopup();
            e.clearSelection();
        });

        function showErrorPopup() {
            var popupError = $('.fesbds__error__popuptext');
            popupError.addClass('show');
            setTimeout(function() {
                popupError.removeClass('show');
            }, 2000);
        }
    });

    //Back to Top - Progress
    $(function(){
        var progressPath = document.querySelector('.back__top__progress path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
    
        $(window).on('scroll', function() {
        if ($(this).scrollTop() > offset) {
            $('.back__top__progress').addClass('active-progress');
        } else {
            jQuery('.back__top__progress').removeClass('active-progress');
        }
        });
    
        $('.back__top__progress').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
        })
    });

    //Review Form
    $(function () {
        $(".fessp__reviewrating").rateYo({
        rating: 0,
        fullStar: true,
        starWidth: "16px",
        ratedFill: "var(--text-color)"
        });
    });

/*============================ Shop Page ============================*/
    //Shop Page Filter Sidebar
    $(function(){
        $('.fessp__filter__button').on('click', function(){
        $('.fesshop__filter__sidebar').addClass('show')
        });
        $('.fesshop__sidebar__closebtn').on('click', function(){
        $('.fesshop__filter__sidebar').removeClass('show')
        })
    });

    //Shop Page Filter Sidebar Tag Cloud
    $(function(){
        $('.tag__clouds button').click(function(){
            $(this).toggleClass('active');
        });
    });

    //Newsletter Popup (Variant 3)
    $(function(){
        var currentIndex = 0;
        var scrollThreshold = 3200;
        var isScrollTriggered = false;
    
        function fesnwsltrPopupScroll() {
        if (!isScrollTriggered && $(window).scrollTop() > scrollThreshold) {
            isScrollTriggered = true;
            $(".fes__newsletter__popup").addClass('show');
        }
        }
    
        fesnwsltrPopupScroll();
        $(window).scroll(function() {
        fesnwsltrPopupScroll();
        });
    
        $('.fes__nwsltrpop__close__btn').on('click', function() {
        $('.fes__newsletter__popup').removeClass('show');
        });
    });

/*============================ Cart & Checkout ============================*/
    if($('.cart-page').length){
        $('#shipping__select__cty').niceSelect();
    }
    
    if($('.checkout-page').length){
        $('.checkout-country').niceSelect();
        $('.checkout-city').niceSelect();
    }
    
    $(function() {
        $('.click-to-redeem').click(function(){
        if ($('.checkout-coupn-area').hasClass('show')) {
            $('.checkout-coupn-area').removeClass('show');
        }
        else {
            $('.checkout-coupn-area').removeClass('show');
            $('.checkout-coupn-area').addClass('show');    
        }
        });
    });

}) (jQuery);