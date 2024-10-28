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
        $(function(){
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
        setInterval(function() {makeTimer();}, 1000);

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
        $(function(){
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

        //Newsletter Popup (Variant 3)
        $(function(){
            var currentIndex = 0;
            var scrollThreshold = 2000;
            var isScrollTriggered = false;
        
            function fesnwsltrPopupScroll() {
            if (!isScrollTriggered && $(window).scrollTop() > scrollThreshold) {
                isScrollTriggered = true;
                $('.elbp__newsletter__popup').addClass('show');
            }
            }
        
            fesnwsltrPopupScroll();
            $(window).scroll(function() {
            fesnwsltrPopupScroll();
            });
        
            $('.elbp__nwltrpop__close').on('click', function() {
            $('.elbp__newsletter__popup').removeClass('show');
            });
        });

    /*============================ About Us Page ============================*/
        //Terstimonials V2 Slider
        $(function(){
            var swiper = new Swiper(".elbp__testimonialsv2__slider", {
                loop: true,
                navigation: {
                    nextEl: "#elbp__testimonialsV2__next",
                    prevEl: "#elbp__testimonialsV2__prev",
                },
                pagination: {
                    el: "#elbp__testimonialsV2__fraction",
                    type: "fraction",
                },
            });
        });

    /*============================ Shop & Single Product Page ============================*/
        //All Nice Select (Shop Page)
        if ($('.elbp__shop__section').length) {
            $('#elbpshop__sort').niceSelect();
            $('#elbpshop__prodamount').niceSelect();
        }

        //All Nice Select (Single Product Page)
        if ($('.elbp__singleprodpage').length) {
            $('.elbpReviewFilterTiming').niceSelect();
            $('.elbpReviewFilterRating').niceSelect();
        }

        //Single Product Image (Homepage)
        $(function(){
            $('.elbpsmalimage').click(function() {
                var bigImageSrc = $('#elbpbigImage').attr('src');
                var smallImageSrc = $(this).attr('src');
                
                $('#elbpbigImage').attr('src', smallImageSrc);
                $(this).attr('src', bigImageSrc);
            });
        });

        //Single Product Image (Single Product)
        $(function(){
            $('.elbpsmalimage').click(function() {
                var bigImageSrc = $('#elbpbigImage .image img').attr('src');
                var smallImageSrc = $(this).find('img').attr('src');
                
                $('#elbpbigImage .image img').attr('src', smallImageSrc);
                $(this).find('img').attr('src', bigImageSrc);
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

        //Shop List And Gird View
        $(function() {
            $('.elbpshop__grid__button').click(function () {
                if ($(window).width() < 576) {
                    $('.elbp__products__grid .elbp__product__style').removeClass('list__view');
                    return;
                }
        
                $('.elbp__products__grid .elbp__product__style').toggleClass('list__view');

                var icon = $(this).find('.icon');
                if (icon.hasClass('fa-list-ul')) {
                    icon.removeClass('fa-list-ul').addClass('fa-table-cells');
                } else {
                    icon.removeClass('fa-table-cells').addClass('fa-list-ul');
                }
            });
            
            $(window).resize(function () {
                if ($(window).width() < 576) {
                    $('.elbp__products__grid .elbp__product__style').removeClass('list__view');
                }
            });
        });
        

        //Shop Sidebar
        $(function(){
            //Mobile Menu Main Show/Hide
            $('.elbpshop__filter__btn').on('click', function(){
                $('.elbp__shop__sidebar').addClass('show')
            })
            $('.elbpshop__sidebar__closebtn').on('click', function(){
                $('.elbp__shop__sidebar').removeClass('show')
            })
        });

        //Review Field Rating
        $(function(){
            $("#rateYo").rateYo({
              ratedFill: "var(--main-color)",
              normalFill: "#5A5855",
              starSvg: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.6602 12.2337C29.5531 11.8949 29.3466 11.5961 29.0675 11.3761C28.7884 11.1561 28.4497 11.025 28.0952 11L20.564 10.3912L17.6615 3.36622C17.526 3.03694 17.2958 2.75534 17 2.55716C16.7042 2.35898 16.3562 2.25317 16.0002 2.25317C15.6442 2.25317 15.2962 2.35898 15.0004 2.55716C14.7046 2.75534 14.4744 3.03694 14.339 3.36622L11.4365 10.3887L3.9052 11C3.55042 11.0252 3.21144 11.1566 2.93234 11.3771C2.65323 11.5976 2.44691 11.8969 2.3402 12.2362C2.22897 12.5746 2.22042 12.9384 2.31563 13.2816C2.41084 13.6249 2.60555 13.9322 2.8752 14.165L8.6252 19.1162L6.8752 26.5225C6.79309 26.8691 6.81565 27.2322 6.94003 27.566C7.06442 27.8998 7.28503 28.1891 7.57395 28.3975C7.8593 28.6089 8.20186 28.7291 8.55673 28.7425C8.9116 28.7559 9.26224 28.6618 9.5627 28.4725L16.0002 24.515L22.4477 28.4787C22.7482 28.668 23.0988 28.7622 23.4537 28.7488C23.8085 28.7354 24.1511 28.6151 24.4365 28.4037C24.7254 28.1954 24.946 27.906 25.0704 27.5723C25.1948 27.2385 25.2173 26.8753 25.1352 26.5287L23.3852 19.1225L29.1252 14.165C29.3953 13.932 29.5904 13.6242 29.6856 13.2805C29.7808 12.9367 29.772 12.5725 29.6602 12.2337ZM28.1427 13.03L22.0565 18.28C21.9526 18.3696 21.8753 18.486 21.833 18.6164C21.7907 18.7469 21.785 18.8865 21.8165 19.02L23.6765 26.8687C23.6927 26.928 23.69 26.9908 23.6687 27.0484C23.6474 27.1061 23.6086 27.1556 23.5577 27.19C23.5116 27.2256 23.4555 27.246 23.3972 27.2482C23.3389 27.2505 23.2814 27.2345 23.2327 27.2025L16.3927 23C16.2746 22.9275 16.1388 22.8891 16.0002 22.8891C15.8616 22.8891 15.7258 22.9275 15.6077 23L8.7677 27.2012C8.71897 27.2332 8.66146 27.2492 8.6032 27.247C8.54494 27.2448 8.48883 27.2244 8.4427 27.1887C8.39068 27.1552 8.35057 27.1061 8.32813 27.0484C8.30568 26.9907 8.30203 26.9274 8.3177 26.8675L10.1777 19.0187C10.2092 18.8852 10.2035 18.7456 10.1611 18.6152C10.1188 18.4847 10.0415 18.3683 9.9377 18.2787L3.85145 13.0287C3.8037 12.9898 3.76926 12.937 3.7529 12.8777C3.73655 12.8183 3.7391 12.7553 3.7602 12.6975C3.77651 12.6404 3.8102 12.5899 3.85658 12.553C3.90296 12.516 3.95972 12.4944 4.01895 12.4912L12.009 11.8462C12.1466 11.835 12.2785 11.7861 12.3902 11.7047C12.5018 11.6233 12.5887 11.5126 12.6415 11.385L15.7202 3.93497C15.7417 3.87983 15.7793 3.83244 15.8281 3.79904C15.877 3.76563 15.9348 3.74776 15.994 3.74776C16.0531 3.74776 16.1109 3.76563 16.1598 3.79904C16.2086 3.83244 16.2462 3.87983 16.2677 3.93497L19.3465 11.385C19.3992 11.5126 19.4861 11.6233 19.5977 11.7047C19.7094 11.7861 19.8413 11.835 19.979 11.8462L27.969 12.4912C28.0282 12.4944 28.0849 12.516 28.1313 12.553C28.1777 12.5899 28.2114 12.6404 28.2277 12.6975C28.2498 12.7549 28.2535 12.8177 28.2383 12.8773C28.223 12.9369 28.1896 12.9902 28.1427 13.03Z" />
                       </svg>`,
              onSet: function (rating) {
                $("#rateYo .jq-ry-rated").attr("fill", "var(--main-color)");
              }
            });
        });

        //Review Form Show/Hide
        $(function(){
            $('#elbpReviewFormToggle').on('click', function(){
                $('.elbp__review__form').toggleClass('show')
            })
        });

        //Category Section Slider (Shop V2)
        $(function(){
            var swiper = new Swiper(".elbpshop__cat__slider", {
                loop: true,
                slidesPerView: 7,
                spaceBetween: 10,
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

    /*============================ Other Pages ============================*/
        //Checkout Nice Select
        if ($('.elbp__checkoutpage').length) {
            $('#elbpcpDeliveryInfoPhoneCC').niceSelect();
        }

        //Blog Page Top Slider
        $(function(){
            var swiper = new Swiper(".elbp__blog__slider", {
                loop: true,
                navigation: {
                    nextEl: ".elbp__blog__slider__btn",
                },
            });
        });

        //Latest Posts Slider
        $(function(){
            var swiper = new Swiper(".elbpbp__lpslider", {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 15,
                navigation: {
                    nextEl: "#elbp__blogpostslide__next",
                    prevEl: "#elbp__blogpostslide__prev",
                },
                breakpoints: {
                    200: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    }
                }
            });
        });

    /*============================ Home Page 2 ============================*/
        //Hero Product Slider
        $(function(){
            var swiper = new Swiper(".elbp__herov2__slider", {
                loop: true,
                slidesPerView: 3,
                spaceBetween: 17,
                navigation: {
                    prevEl: "#elbphv2__sldr__btn__prev",
                    nextEl: "#elbphv2__sldr__btn__next",
                },
                breakpoints: {
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    415: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    576: {
                        spaceBetween: 17,
                    },
                    768: {
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    1140 : {
                        spaceBetween: 17,
                    }
                }
            });
        });

        //Popular Products Slider
        $(function(){
            var swiper = new Swiper(".elbph2__popularprod__slider", {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 22,
                navigation: {
                    prevEl: "#elbph2__popularprod__prev",
                    nextEl: "#elbph2__popularprod__next",
                },
                breakpoints: {
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    415: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 3,
                    },
                    992: {
                    },
                    1140 : {
                        spaceBetween: 22,
                    }
                }
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

        $("#timer #days").html(days + "<span>Days</span>");
        $("#timer #hours").html(hours + "<span>Hours</span>");
        $("#timer #minutes").html(minutes + "<span>Mint</span>");
        $("#timer #seconds").html(seconds + "<span>Secs</span>");		
    }
    setInterval(function() { makeTimer(); }, 1000);

}) (jQuery);