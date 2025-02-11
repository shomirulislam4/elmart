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
        if ($('.els__header__section').length) {
            $('#elsLanguageSelect').niceSelect();
            $('#elsCurrencySelect').niceSelect();
        }

        //Cart Slider
        $(function(){
            $('.els__cart__button').on('click', function(){
                $('.els__cart__slider').addClass('show')
            })
            $('.els__cart__closebtn').on('click', function(){
                $('.els__cart__slider').removeClass('show')
            })
        });

        //Search Popup
        $(function(){
            $('.els__search__button').on('click',function() {
                $('.els__search__popup').addClass('show');
            })
            $('.elssearch__close__btn').on('click',function() {
                $('.els__search__popup').removeClass('show');
            })
        });

        //Mobile Menu
        $(function(){
            //Mobile Menu Main Show/Hide
            $('.els__mmenu__btn').on('click', function(){
                $('.btm__left__side').addClass('show')
            })
            $('.els__mblmenu__closebtn').on('click', function(){
                $('.btm__left__side').removeClass('show')
            })

            //Mobile Menu Submenu Show/hide
            $('.has__submenu').on('click', function() {
                var submenu = $(this).find('.submenu');
                submenu.toggleClass('show');
            });
        });

        //Login Popup
        $(function(){
            //main
            $('.els__login__button').on('click',function() {
                $('.els__login__popup').addClass('show');
            });
            $('.elslogin__closebtn').on('click',function() {
                $('.els__login__popup').removeClass('show');
            });

            //form
            $('.elslogin__idnthvacc').on('click', function () {
                $('.elslogin__register__wrap').addClass('show');
                $('.elslogin__login__wrap').removeClass('show')
                $('.elslogin__forgopass__wrap').removeClass('show')
            });
            $('.elslogin__ialrdyhvacc').on('click', function () {
                $('.elslogin__login__wrap').addClass('show');
                $('.elslogin__register__wrap').removeClass('show')
                $('.elslogin__forgopass__wrap').removeClass('show')
            });
            $('.elslogin__forgopass').on('click', function () {
                $('.elslogin__forgopass__wrap').addClass('show');
                $('.elslogin__login__wrap').removeClass('show')
                $('.elslogin__register__wrap').removeClass('show')
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
            var swiper = new Swiper(".els__hero__slider", {
                loop: true,
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                  nextEl: "#els__heroslider__next",
                },
                breakpoints: {
                    1200: {
                        spaceBetween: 20,
                    },
                    415: {
                        spaceBetween: 10,
                    },
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    }
                }
            });
        })
        
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
        
            $(".els__countdown__timer .days").html(addLeadingZero(days));
            $(".els__countdown__timer .hours").html(addLeadingZero(hours));
            $(".els__countdown__timer .minutes").html(addLeadingZero(minutes));
            $(".els__countdown__timer .seconds").html(addLeadingZero(seconds));        
        }
        setInterval(function() {makeTimer();}, 1000);
        
        //Newsletter Popup
        $(function(){
            var currentIndex = 0;
            var scrollThreshold = 2000;
            var isScrollTriggered = false;
        
            function fesnwsltrPopupScroll() {
            if (!isScrollTriggered && $(window).scrollTop() > scrollThreshold) {
                isScrollTriggered = true;
                $('.els__newsletter__popup').addClass('show');
            }
            }
        
            fesnwsltrPopupScroll();
            $(window).scroll(function() {
            fesnwsltrPopupScroll();
            });
        
            $('.els__nwltrpop__close').on('click', function() {
            $('.els__newsletter__popup').removeClass('show');
            });
        });

        //Fashion Models Slider
        $(function(){
            var swiper = new Swiper(".els__fashionmodels__slider", {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 24,
                breakpoints: {
                    1395: {
                        spaceBetween: 24,
                    },
                    1200: {
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    415: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    }
                }
            });
        });

        //Testimonials Slider
        $(function () {
            var swipers = [];
        
            $(".els__testimonials__slider").each(function (index, element) {
                var swiper = new Swiper(element, {
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 0,
                    pagination: {
                        el: ".els__testimonialsslider__dots",
                    },
                    breakpoints: {
                        992: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        200: {
                            slidesPerView: 1,
                        }
                    }
                });

                swipers.push(swiper);
            });
        
            swipers.forEach(function (swiper, index) {
                swiper.controller.control = swipers.filter((_, i) => i !== index);
            });
        });
        
    /*============================ About Us Page ============================*/


    /*============================ Shop & Single Product Page ============================*/
        //All Nice Select (Shop Page)
        if ($('.els__shop__section').length) {
            $('#elsshop__sort').niceSelect();
            $('#elsshop__prodamount').niceSelect();
        }
        if ($('.els__singleproductpage').length) {
            $('.elsReviewFilterTiming').niceSelect();
            $('.elsReviewFilterRating').niceSelect();
        }

        //Category Section Slider
        $(function(){
            var swiper = new Swiper(".elsshop__cat__slider", {
                loop: true,
                slidesPerView: 7,
                spaceBetween: 0,
                breakpoints: {
                    200: {
                        slidesPerView: 1,
                    },
                    290: {
                        slidesPerView: 2,
                    },
                    415: {
                        slidesPerView: 3,
                    },
                    576: {
                        slidesPerView: 4,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    992: {
                        slidesPerView: 7,
                    }
                }
            });
        });

        //Price Filter
        $(function(){
            var rangeInput = document.querySelectorAll(".range-input input"),
            priceInput = document.querySelectorAll(".price-input input"),
            range = document.querySelector(".price-range-slider .progress");
            let priceGap = 5;
          
            rangeInput.forEach(input =>{
                input.addEventListener("input", e =>{
                    let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);
          
                    if((maxVal - minVal) < priceGap){
                        if(e.target.className === "range-min"){
                            rangeInput[0].value = maxVal - priceGap
                        }else{
                            rangeInput[1].value = minVal + priceGap;
                        }
                    }else{
                        priceInput[0].value = minVal;
                        priceInput[1].value = maxVal;
                        range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
                        range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                    }
                });
          
                priceInput.forEach(input =>{
                  input.addEventListener("input", e =>{
                      let minPrice = parseInt(priceInput[0].value),
                      maxPrice = parseInt(priceInput[1].value);
                      
                      if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
                          if(e.target.className === "input-min"){
                              rangeInput[0].value = minPrice;
                              range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
                          }else{
                              rangeInput[1].value = maxPrice;
                              range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                          }
                      }
                  });
                });
            });
        });
        
        //Shop Sidebar
        $(function(){
            //Mobile Menu Main Show/Hide
            $('.elsshop__filter__btn').on('click', function(){
                $('.els__shop__sidebar').addClass('show')
            })
            $('.elsshop__sidebar__closebtn').on('click', function(){
                $('.els__shop__sidebar').removeClass('show')
            })
        });

        //Single Product Active Toggle
        $(function() {
            //Size
            $('.elssp__size__item').on('click', function() {
                $('.elssp__size__item').removeClass('active');
                $(this).addClass('active');
            });

            //Color
            $('.elssp__color__item').on('click', function() {
                $('.elssp__color__item').removeClass('active');
                $(this).addClass('active');
            });
        });

        //Single Product Image Slider
        $(function(){
            var swiper = new Swiper(".elssp__smallimage__slider", {
                spaceBetween: 5,
                slidesPerView: 2,
                pagination: {
                    el: ".elssp__slidercontrols__pagination",
                    type: "fraction",
                    formatFractionCurrent: (number) => {
                        return number < 10 ? '0' + number : number;
                    },
                    formatFractionTotal: (number) => {
                        return number < 10 ? '0' + number : number;
                    },
                },
                scrollbar: {
                    el: ".elssp__slidercontrols__scrollbar",
                },
            });
            var swiper2 = new Swiper(".elssp__mainimage__slider", {
                loop: true,
                allowTouchMove: false,
                thumbs: {
                  swiper: swiper,
                },
            });
        });

        //Review Form Show/Hide
        $(function(){
            $('#elsReviewFormToggle').on('click', function(){
                $('.els__review__form').toggleClass('show')
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