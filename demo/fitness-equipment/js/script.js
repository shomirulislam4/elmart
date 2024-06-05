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

//Nice Select
if ($('.fitequip__store').length) {
    $('.fesps__select').niceSelect();
    $('#fesspVariants1').niceSelect();
    $('#fesspVariants2').niceSelect();
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
