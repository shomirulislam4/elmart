(function ($) {
    'use strict';

    //Custom Cursor
    $(function() {
        const cursorDot = $('<div id="cursor__dot"></div>').appendTo('body');
        const cursorOutline = $('<div id="cursor__dot__outline"></div>').appendTo('body');
      
        let endX = 0, endY = 0;
        let coords = { x: 0, y: 0 };
      
        $(document).on('mousemove', function(e) {
            const { clientX, clientY } = e;
            coords.x = clientX;
            coords.y = clientY;
            cursorDot.css({ top: clientY, left: clientX });
            endX = clientX;
            endY = clientY;
        });
      
        function animateOuterCursor() {
            coords.x += (endX - coords.x) / 8;
            coords.y += (endY - coords.y) / 8;
            cursorOutline.css({ top: coords.y, left: coords.x });
            requestAnimationFrame(animateOuterCursor);
        }
        animateOuterCursor();
      
        $(document).on('mousedown', function() {
            cursorDot.css('transform', 'scale(0.7)');
            cursorOutline.css('transform', 'scale(5)');
        });
      
        $(document).on('mouseup', function() {
            cursorDot.css('transform', 'scale(1)');
            cursorOutline.css('transform', 'scale(1)');
        });
      
        $(document).on('mouseenter', function() {
            cursorOutline.css('opacity', '1');
        });
      
        $(document).on('mouseleave', function() {
            cursorOutline.css('opacity', '0');
        });
      
        $(document).on('mousemove', function(e) {
            const targetCursor = window.getComputedStyle(e.target).cursor;
            if (targetCursor === 'pointer') {
                cursorOutline.css('opacity', '1');
            } else {
                cursorOutline.css('opacity', '0');
            }
        });
      
        $('a, button, input[type="submit"]').on({
            mouseenter: function() {
                cursorDot.css('transform', 'scale(0.7)');
                cursorOutline.css('transform', 'scale(5)');
            },
            mousedown: function() {
                cursorDot.css('transform', 'scale(1)');
                cursorOutline.css('transform', 'scale(1.4)');
            },
            mouseup: function() {
                cursorDot.css('transform', 'scale(0.7)');
                cursorOutline.css('transform', 'scale(5)');
            },
            mouseleave: function() {
                cursorDot.css('transform', 'scale(1)');
                cursorOutline.css('transform', 'scale(1)');
            }
        });
    });

/*============================ Home Page ============================*/
    //Mobile Menu
    $(function(){
        //Mobile Menu Show/Hide
        $('.elt__mmenu__btn').on('click', function(){
            $('header .wrapper nav').addClass('show')
        })
        $('.elt__mobilemenu__closebtn').on('click', function(){
            $('header .wrapper nav').removeClass('show')
        })

        //Mobile Menu Submenu Show/hide
        $('.has__submenu').on('click', function() {
            var submenu = $(this).find('.submenu');
            submenu.toggleClass('show');
        });
    });

    //Search Popup
    $(function(){
        $('#eltSearchBtn').on('click',function() {
            $('.elt__search__popup').addClass('show');
        });
        $('.elt__search__closebtn').on('click',function() {
            $('.elt__search__popup').removeClass('show');
        });
    });

    //Quantity Widget
    $(function() {
        $('.elt__quantity__widget').each(function() {
            var quantityDisplay = $(this).find('.elt__quantity__display');
    
            $(this).find('.elt__quantity__increase').on('click', function() {
                var currentQuantity = parseInt(quantityDisplay.text(), 10);
                quantityDisplay.text((currentQuantity + 1).toString().padStart(2, '0'));
            });
    
            $(this).find('.elt__quantity__decrease').on('click', function() {
                var currentQuantity = parseInt(quantityDisplay.text(), 10);
                if (currentQuantity > 1) {
                    quantityDisplay.text((currentQuantity - 1).toString().padStart(2, '0'));
                }
            });
        });
    });
    
    //Cart Slider
    $(function(){
        $('#eltCartBtn').on('click', function(){
            $('.elt__cart__slide').addClass('show')
        })
        $('.elt__cartslide__closebtn').on('click', function(){
            $('.elt__cart__slide').removeClass('show')
        })
    });

    //What's New Section Slider
    $(function(){
        var swiper = new Swiper(".elt__product__sliders", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 22,
            navigation: {
              nextEl: "#elt__prodsldrs__next",
              prevEl: "#elt__prodsldrs__prev",
            },
            breakpoints: {
                1640: {
                    spaceBetween: 22,
                },
                1400: {
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        });
    });

    //Promo Section
    $(function() {
        $('.number').counterUp({
            delay: 10,
            time: 1000,
        });
    });

    //Today's Deal Section Timer
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
    
        $("#timer1 .days").html(addLeadingZero(days));
        $("#timer1 .hours").html(addLeadingZero(hours));
        $("#timer1 .minutes").html(addLeadingZero(minutes));
        $("#timer1 .seconds").html(addLeadingZero(seconds));        
    }
    setInterval(function() {makeTimer();}, 1000);

    //Today's Deal Section Slider
    $(function(){
        var swiper = new Swiper(".elt__todaysdeal__sliders", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 22,
            navigation: {
              nextEl: "#elt__tddlsldrs__next",
              prevEl: "#elt__tddlsldrs__prev",
            },
            breakpoints: {
                1640: {
                    spaceBetween: 22,
                },
                1400: {
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        });
    });

    //Trending Section Slider
    $(function(){
        var swiper = new Swiper(".elt__trendprod__sliders", {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 22,
            navigation: {
              nextEl: "#elt__trndprdsldrs__next",
              prevEl: "#elt__trndprdsldrs__prev",
            },
            breakpoints: {
                1640: {
                    spaceBetween: 22,
                },
                1400: {
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        });
    });

    //Trending Section Slider
    $(function(){
        var swiper = new Swiper(".elt__blognews__sliders", {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 22,
            pagination: {
                el: ".elt__blognews__dots",
            },
            breakpoints: {
                1400: {
                    spaceBetween: 22,
                },
                1200: {
                    spaceBetween: 18,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 14,
                },
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
            },
        });
    });

/*============================ About Us Page ============================*/


/*============================ Shop Page ============================*/
    //All Nice Select
    if ($('.elt__shoppage').length) {
        $('#eltShopSortingNC').niceSelect();
        $('#eltPaginationShop').niceSelect();
    }

    //Price Filter
    $(function () {
        var rangeInput = document.querySelectorAll(".range-input input"),
            priceMin = document.querySelector(".input-min"),
            priceMax = document.querySelector(".input-max"),
            range = document.querySelector(".price-range-slider .progress");
    
        let priceGap = 5;
    
        rangeInput.forEach(input => {
            input.addEventListener("input", e => {
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);
    
                if ((maxVal - minVal) < priceGap) {
                    if (e.target.classList.contains("range-min")) {
                        rangeInput[0].value = maxVal - priceGap;
                    } else {
                        rangeInput[1].value = minVal + priceGap;
                    }
                } else {
                    // Update span values instead of input values
                    priceMin.textContent = minVal;
                    priceMax.textContent = maxVal;
    
                    // Update progress bar
                    range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                }
            });
        });
    });    
    
    //Shop Sidebar Mobile
    $(function(){
        $('.elt__shopsdbr__btn').on('click', function(){
            $('.elt__shop__sidebar').addClass('show')
        })
        $('.elt__shop__sidebar__close').on('click', function(){
            $('.elt__shop__sidebar').removeClass('show')
        })
    });

    //Sizes Select
    $(function () {
        $(".elt__shopsdbr__sizes .item").on("click", function () {
            $(this).toggleClass("active");
        });
    });

    //Colors Select
    $(function () {
        $(".elt__shopsdbr__colors .item").on("click", function () {
            $(this).toggleClass("active");
        });
    });
    
/*============================ Single Product Page ============================*/
    //All Nice Select
    if ($('.elt__singleprodpage').length) {
        $('.eltReviewFilterTiming').niceSelect();
        $('.eltReviewFilterRating').niceSelect();
    }

    //Colors Select
    $(function () {
        $(".eltsp__color__visual .color__item").on("click", function () {
            $(".eltsp__color__visual .color__item").removeClass('active');
            $(this).addClass('active');
        });
    });

    //Search Popup
    $(function(){
        $('.eltsp__sizeguide').on('click',function() {
            $('.elt__sizeguide__popup').addClass('show');
        });
        $('.eltsgpp__close__btn').on('click',function() {
            $('.elt__sizeguide__popup').removeClass('show');
        });
    });

    //Review Form Show/Hide
    $(function(){
        $('#eltReviewFormToggle').on('click', function(){
            $('.elt__review__form').toggleClass('show')
        })
    });

    //Review Field Rating
    $(function(){
        $("#rateYo").rateYo({
            ratedFill: "gold",
            normalFill: "var(--primary-color)",
            starSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.6602 12.2337C29.5531 11.8949 29.3466 11.5961 29.0675 11.3761C28.7884 11.1561 28.4497 11.025 28.0952 11L20.564 10.3912L17.6615 3.36622C17.526 3.03694 17.2958 2.75534 17 2.55716C16.7042 2.35898 16.3562 2.25317 16.0002 2.25317C15.6442 2.25317 15.2962 2.35898 15.0004 2.55716C14.7046 2.75534 14.4744 3.03694 14.339 3.36622L11.4365 10.3887L3.9052 11C3.55042 11.0252 3.21144 11.1566 2.93234 11.3771C2.65323 11.5976 2.44691 11.8969 2.3402 12.2362C2.22897 12.5746 2.22042 12.9384 2.31563 13.2816C2.41084 13.6249 2.60555 13.9322 2.8752 14.165L8.6252 19.1162L6.8752 26.5225C6.79309 26.8691 6.81565 27.2322 6.94003 27.566C7.06442 27.8998 7.28503 28.1891 7.57395 28.3975C7.8593 28.6089 8.20186 28.7291 8.55673 28.7425C8.9116 28.7559 9.26224 28.6618 9.5627 28.4725L16.0002 24.515L22.4477 28.4787C22.7482 28.668 23.0988 28.7622 23.4537 28.7488C23.8085 28.7354 24.1511 28.6151 24.4365 28.4037C24.7254 28.1954 24.946 27.906 25.0704 27.5723C25.1948 27.2385 25.2173 26.8753 25.1352 26.5287L23.3852 19.1225L29.1252 14.165C29.3953 13.932 29.5904 13.6242 29.6856 13.2805C29.7808 12.9367 29.772 12.5725 29.6602 12.2337ZM28.1427 13.03L22.0565 18.28C21.9526 18.3696 21.8753 18.486 21.833 18.6164C21.7907 18.7469 21.785 18.8865 21.8165 19.02L23.6765 26.8687C23.6927 26.928 23.69 26.9908 23.6687 27.0484C23.6474 27.1061 23.6086 27.1556 23.5577 27.19C23.5116 27.2256 23.4555 27.246 23.3972 27.2482C23.3389 27.2505 23.2814 27.2345 23.2327 27.2025L16.3927 23C16.2746 22.9275 16.1388 22.8891 16.0002 22.8891C15.8616 22.8891 15.7258 22.9275 15.6077 23L8.7677 27.2012C8.71897 27.2332 8.66146 27.2492 8.6032 27.247C8.54494 27.2448 8.48883 27.2244 8.4427 27.1887C8.39068 27.1552 8.35057 27.1061 8.32813 27.0484C8.30568 26.9907 8.30203 26.9274 8.3177 26.8675L10.1777 19.0187C10.2092 18.8852 10.2035 18.7456 10.1611 18.6152C10.1188 18.4847 10.0415 18.3683 9.9377 18.2787L3.85145 13.0287C3.8037 12.9898 3.76926 12.937 3.7529 12.8777C3.73655 12.8183 3.7391 12.7553 3.7602 12.6975C3.77651 12.6404 3.8102 12.5899 3.85658 12.553C3.90296 12.516 3.95972 12.4944 4.01895 12.4912L12.009 11.8462C12.1466 11.835 12.2785 11.7861 12.3902 11.7047C12.5018 11.6233 12.5887 11.5126 12.6415 11.385L15.7202 3.93497C15.7417 3.87983 15.7793 3.83244 15.8281 3.79904C15.877 3.76563 15.9348 3.74776 15.994 3.74776C16.0531 3.74776 16.1109 3.76563 16.1598 3.79904C16.2086 3.83244 16.2462 3.87983 16.2677 3.93497L19.3465 11.385C19.3992 11.5126 19.4861 11.6233 19.5977 11.7047C19.7094 11.7861 19.8413 11.835 19.979 11.8462L27.969 12.4912C28.0282 12.4944 28.0849 12.516 28.1313 12.553C28.1777 12.5899 28.2114 12.6404 28.2277 12.6975C28.2498 12.7549 28.2535 12.8177 28.2383 12.8773C28.223 12.9369 28.1896 12.9902 28.1427 13.03Z" />
                    </svg>`,
            onSet: function (rating) {
            $("#rateYo .jq-ry-rated").attr("fill", "gold");
            }
        });
    });

}) (jQuery);