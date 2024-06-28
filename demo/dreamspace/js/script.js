(function ($) {
    'use strict';

    //All Nice Select
    if ($('.dreamspace').length) {
        $('#dsSearchPopupCat').niceSelect();
    }

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

    //Mobile Menu
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.ds__mobilemenu__btn').on('click', function(){
            $('.ds__mobile__menu').addClass('show')
        })
        $('.ds__mblmenu__closebtn').on('click', function(){
            $('.ds__mobile__menu').removeClass('show')
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

    //Cart Menu
    $(function(){
        $('.dshs__cart__btn').on('click', function(){
            $('.ds__cart__slider').addClass('show')
        })
        $('.ds__cart__closebtn').on('click', function(){
            $('.ds__cart__slider').removeClass('show')
        })
    });

    //Search Popup
    $(function(){
        //Mobile Menu Main Show/Hide
        $('.dshs__search__btn').on('click', function(){
            $('.ds__search__popup').addClass('show')
        })
        $('.ds__search__closebtn').on('click', function(){
            $('.ds__search__popup').removeClass('show')
        })
    });

    //Hero Popups
    $(function () {
        function createAndSetupPopper(button, popover) {
        var popperInstance = Popper.createPopper(button, popover, {
            placement: "auto",
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
        var button1 = $(".dshero__info__dots.dot1")[0];
        var popover1 = $(".dshero__info__text.cont1")[0];
        createAndSetupPopper(button1, popover1);
    
        //Item 2
        var button2 = $(".dshero__info__dots.dot2")[0];
        var popover2 = $(".dshero__info__text.cont2")[0];
        createAndSetupPopper(button2, popover2);
    
        //Item 3
        var button3 = $(".dshero__info__dots.dot3")[0];
        var popover3 = $(".dshero__info__text.cont3")[0];
        createAndSetupPopper(button3, popover3);

        //Item 4
        var button4 = $(".dshero__ic__dottype")[0];
        var popover4 = $(".dshero__ic__text")[0];
        createAndSetupPopper(button4, popover4);
    });

    //Item Active Class
    $(function(){
        //hero product color active
        $('.dshero__color__choose').on('click','.dshero__coloritem',function(){
            $(this).addClass('active').siblings().removeClass('active');
        });
    });

    //Category Slider
    $(function(){
        var swiper = new Swiper('.dscs__wrapper__slider', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 27,
            navigation: {
                nextEl: '.dscs__wsbtn__next',
                prevEl: '.dscs__wsbtn__prev',
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: true,
            },
            breakpoints: {
                1400: {
                    spaceBetween: 27,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1,
                }
            }
        });
    });

    //New Arrivals Slider
    $(function(){
        var swiper = new Swiper('.dsnas__wrapper__slider', {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
            navigation: {
                nextEl: '.dsnas__sldrbtn__next',
                prevEl: '.dsnas__sldrbtn__prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            },
            breakpoints: {
                1400: {
                    spaceBetween: 30,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1,
                }
            }
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
    
        $(".ds__countdown__timer .days").html(addLeadingZero(days));
        $(".ds__countdown__timer .hours").html(addLeadingZero(hours));
        $(".ds__countdown__timer .minutes").html(addLeadingZero(minutes));
        $(".ds__countdown__timer .seconds").html(addLeadingZero(seconds));        
    }
    setInterval(function() { makeTimer(); }, 1000);
    

}) (jQuery);