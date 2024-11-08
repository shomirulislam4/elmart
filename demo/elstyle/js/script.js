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
            $('.elbpsearch__close__btn').on('click',function() {
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

    /*============================ About Us Page ============================*/


    /*============================ Shop & Single Product Page ============================*/
        //All Nice Select (Shop Page)
        if ($('.els__shop__section').length) {
            $('#elbpshop__sort').niceSelect();
            $('#elbpshop__prodamount').niceSelect();
        }

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
                    $('.els__products__grid .els__product__style').removeClass('list__view');
                    return;
                }
        
                $('.els__products__grid .els__product__style').toggleClass('list__view');

                var icon = $(this).find('.icon');
                if (icon.hasClass('fa-list-ul')) {
                    icon.removeClass('fa-list-ul').addClass('fa-table-cells');
                } else {
                    icon.removeClass('fa-table-cells').addClass('fa-list-ul');
                }
            });
            
            $(window).resize(function () {
                if ($(window).width() < 576) {
                    $('.els__products__grid .els__product__style').removeClass('list__view');
                }
            });
        });
        
        //Shop Sidebar
        $(function(){
            //Mobile Menu Main Show/Hide
            $('.elbpshop__filter__btn').on('click', function(){
                $('.els__shop__sidebar').addClass('show')
            })
            $('.elbpshop__sidebar__closebtn').on('click', function(){
                $('.els__shop__sidebar').removeClass('show')
            })
        });

        //Review Form Show/Hide
        $(function(){
            $('#elbpReviewFormToggle').on('click', function(){
                $('.els__review__form').toggleClass('show')
            })
        });


}) (jQuery);