(function ($) {
    'use strict';
  /*============================ Global ============================*/
    //Back to Top Progress
    $(function(){
      var progressPath = document.querySelector('.back-top-progress path');
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
          $('.back-top-progress').addClass('active-progress');
        } else {
          jQuery('.back-top-progress').removeClass('active-progress');
        }
      });

      $('.back-top-progress').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
      })
    });

    //Custom Cursor
    $(function(){
      var Dif_HomeFour = $('body').hasClass('homepage_four');

      if (Dif_HomeFour) {
        $("body").prepend('<div class="cursor-v2"></div>');
        $(document).mousemove(function(e) {
          $('.cursor-v2').css({
            "left": e.pageX,
            "top": e.pageY - $(window).scrollTop()
          });
        });

        $("a, button, div, span, input[type=submit]").mouseenter(function(){
          var cursorStyle = $(this).css('cursor');
          if (cursorStyle === 'pointer') {
            $('.cursor-v2').addClass('hover');
          }
        }).mouseleave(function(){
          $('.cursor-v2').removeClass('hover');
        });
        
      } else {
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
      }
    });

    //Cart View Toggle
    $(function() {
      $('.cart-view').on('click',function() {
        $('.cart-slide').addClass('visible');
      })
      $('.cart-close').on('click',function() {
        $('.cart-slide').removeClass('visible');
      })
    });

    //Countdown Timer - Deal Product Section
    function makeTimer() {
      //timer 1
      var endTime = new Date("30 March 2024 0:00:00 UTC+0");	
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        $("#timer #days").html("<span>DAYS</span><br>" + days);
        $("#timer #hours").html("<span>HRS</span><br>" + hours);
        $("#timer #minutes").html("<span>MIN</span><br>" + minutes);
        $("#timer #seconds").html("<span>SEC</span><br>" + seconds);		

        //timer 2
        var endTime = new Date("28 February 2024 0:00:00 UTC+0");	
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        $("#timer2 #days").html("<span>DAYS</span><br>" + days);
        $("#timer2 #hours").html("<span>HRS</span><br>" + hours);
        $("#timer2 #minutes").html("<span>MIN</span><br>" + minutes);
        $("#timer2 #seconds").html("<span>SEC</span><br>" + seconds);		

        //timer 3
        var endTime = new Date("28 January 2024 0:00:00 UTC+0");	
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        $("#timer3 #days").html("<span>DAYS</span><br>" + days);
        $("#timer3 #hours").html("<span>HRS</span><br>" + hours);
        $("#timer3 #minutes").html("<span>MIN</span><br>" + minutes);
        $("#timer3 #seconds").html("<span>SEC</span><br>" + seconds);

        //timer 4
        var endTime = new Date("1 February 2024 0:00:00 UTC+0");	
        endTime = (Date.parse(endTime) / 1000);
        var now = new Date();
        now = (Date.parse(now) / 1000);
        
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        $("#timer4 #days").html(days + "<span>d</span><br>");
        $("#timer4 #hours").html(hours + "<span>h</span><br>");
        $("#timer4 #minutes").html(minutes + "<span>m</span><br>");
        $("#timer4 #seconds").html(seconds + "<span>s</span><br>");		
    }
    setInterval(function() { makeTimer(); }, 1000);

  /*============================ Shop Page ============================*/
    //Filter Sidebar
    $(function(){
      $(".spsv5-sidebar-toggle").on('click',function(){
        $(".shop-s5-filter-sidebar").toggleClass("open");
      });

      $(".ss5fs-cls-btn").on('click',function(){
        $('.shop-s5-filter-sidebar').removeClass('open');
      });
    });

    //Grid Column Change
    $(function(){
      $('.changeGrid').click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var columns = $(this).data('columns');
        $('.spsv5-grid-wrapper').css('grid-template-columns', `repeat(${columns}, minmax(auto, 1fr))`);

        if (columns === 1) {
          $('.spsv5-grid-item').addClass('turn-to-list');
        } else {
          $('.spsv5-grid-item').removeClass('turn-to-list');
        };
        
        if (columns === 2) {
          $('.spsv5-grid-item').addClass('grid-2cols');
        } else {
          $('.spsv5-grid-item').removeClass('grid-2cols');
        };
      });
    });

    //Nice Select
    if($('.spsv4').length){
      $('.sorting-select select').niceSelect();
    }
    if($('.spsv5').length){
      $('.sorting-select select').niceSelect();
    }

    //Product Price Filter
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

    //Shop Sidebar Mobile Toggle
    $(function() {
      $('.shop-sidebar-mobile-toggle').on('click',function() {
        $('.shop-page-sidebar-wrapper').addClass('open');
      })
      $('.sidebar-mobile-close-btn').on('click',function() {
        $('.shop-page-sidebar-wrapper').removeClass('open');
      })
      //Shop Details - sidebar
      $('.shop-details-sidebar-toggle').on('click',function() {
        $('.shop-page-sidebar-wrapper').addClass('open');
      })
    });

    //Review Form v2
    $(function () {
      $(".rating-star-select").rateYo({
        rating: 0,
        fullStar: true,
        starWidth: "18px",
        ratedFill: "#13172B"
      });

      $('#review-form-v2-toggle').on('click',function() {
        $('.review-form-v2').toggleClass('show');
      });
    });

    //Size Guide Popup
    $(function() {
      $('.size-guide-btn').magnificPopup({
        type: 'inline',
        midClick: true,
        callbacks: {
          open: function() {
            var screenWidth = $(window).width();
            var popupWidth = '';
      
            if (screenWidth < 768) {
              popupWidth = '90%';
            } else if (screenWidth >= 768 && screenWidth < 1200) {
              popupWidth = '70%';
            } else {
              popupWidth = '50%';
            }
      
            $('.mfp-wrap').css({
              'width': popupWidth,
              'left': '50%',
              'top': '50%',
              'transform': 'translate(-50%, -50%)'
            });
          }
        }
      });
    });

    //Column Reverse on Screen Size
    $(function() {
      function adjustClass() {
        var screenWidth = $(window).width();
        var $myDiv = $('#rev-sec-col-reverse');
        if (screenWidth < 992) {
            $myDiv.addClass('flex-column-reverse');
        } else {
            $myDiv.removeClass('flex-column-reverse');
        }
      }
      
      adjustClass();
      $(window).resize(adjustClass);
    });

  /*============================ Home Style ============================*/
    //Mobile Menu (Header Style Five)
    $(function(){
      $('#h5_m-menu-btn').on('click',function() {
        $('.mobile-menu-style5').addClass('visible');
      });
      $('.h5m-close-btn').on('click',function() {
        $('.mobile-menu-style5').removeClass('visible');
      });
      
      //Mobile Menu - Sub Menu (Header Style Five)
      $(".h5_has-submenu").click(function() {
        $(this).next(".h5_is-submenu").toggleClass("show");
      });
    });

    //Preloader v3
    $(function(){
      $(window).on("load",function(){
        $('.preloader-v3').delay(1200).fadeOut(500);
      });
      $('.pv3-close').on('click', function(){
        $('.preloader-v3').fadeOut(500);
      })
    });

    //Off-canvas Menu Toggle
    $(function() {
      $('.oc-menu-btn').on('click',function() {
        $('.h5_off-canvas-menu').addClass('visible');
      })
      $('.oc-close-btn').on('click',function() {
        $('.h5_off-canvas-menu').removeClass('visible');
      })
    });

    //Search Box
    $(function() {
      $('.srch-btn-h5').on('click',function() {
        $('.search-box').addClass('search-visibility');
      })
      $('.close-btn').on('click',function() {
        $('.search-box').removeClass('search-visibility');
      })
    });

    //Hero Right Area
    $(function() {
      var progressCircle = document.querySelector(".autoplay-progress svg");
      var progressContent = document.querySelector(".autoplay-progress span");
      var swiper12 = new Swiper(".h5_hero-right-slider", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".h5_sslider-dots",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: ".h5_hero-slider-right-next",
          prevEl: ".h5_hero-slider-right-prev",
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          },
        },
      });
    });

    //Hero Slider Right popover
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

      //Slider 1 Item 1
      var button1 = $("#slider1_item1-btn")[0];
      var popover1 = $(".slider1_content1")[0];
      createAndSetupPopper(button1, popover1);

      //Slider 1 Item 2
      var button2 = $("#slider1_item2-btn")[0];
      var popover2 = $(".slider1_content2")[0];
      createAndSetupPopper(button2, popover2);

      //Slider 2 Item 1
      var button2_1 = $("#slider2_item1-btn")[0];
      var popover2_1 = $(".slider2_content1")[0];
      createAndSetupPopper(button2_1, popover2_1);

      //Slider 3 Item 1
      var button3_1 = $("#slider3_item1-btn")[0];
      var popover3_1 = $(".slider3_content1")[0];
      createAndSetupPopper(button3_1, popover3_1);
    });

    //Hero Left Area Top
    $(function() {
        $('.h5_left-top-slider').each(function() {
            var h5_left_top = new Swiper(this, {
                loop: true,
                navigation: {
                    nextEl: '.h5_left-top-btn-next',
                    prevEl: '.h5_left-top-btn-prev',
                },
                on: {
                    init: function() {
                        animateSlide(this.slides[this.activeIndex]);
                    },
                    slideChange: function() {
                        animateSlide(this.slides[this.activeIndex]);
                    }
                }
            });

            function animateSlide(slide) {
                $('#lt-ss .animate__animated').each(function() {
                    var animation = $(this).data('animation');
                    $(this).removeClass(animation);
                });

                $(slide).find('.animate__animated').each(function() {
                    var animation = $(this).data('animation');
                    $(this).addClass(animation);
                });
            }
        });
    });

    //Hero Left Area Bottom
    $(function() {
      $('.h5_left-bottom-slider').each(function() {
          var h5_left_bottom = new Swiper(this, {
            loop: true,
            pagination: {
              el: ".h5_left-bottom-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              },
            },
            on: {
              init: function() {
                animateSlide(this.slides[this.activeIndex]);
              },
              slideChange: function() {
                  updatePagination(this);
                  animateSlide(this.slides[this.activeIndex]);
              }
            }
          });

          function animateSlide(slide) {
              $('#lb-ss .animate__animated').each(function() {
                  var animation = $(this).data('animation');
                  $(this).removeClass(animation);
              });

              $(slide).find('.animate__animated').each(function() {
                  var animation = $(this).data('animation');
                  $(this).addClass(animation);
              });
          }

          function updatePagination(swiper) {
            $('.h5_left-bottom-pagination .swiper-pagination-bullet').removeClass('swiper-pagination-bullet-active');

            var activeIndex = swiper.realIndex;
            var totalSlides = swiper.slides.length;

            $('.h5_left-bottom-pagination .swiper-pagination-bullet').eq(activeIndex).addClass('swiper-pagination-bullet-active');
        }
      });
    });

    //Category Section
    $(function() {
      var swiper13 = new Swiper(".h5_cat-wrapper", {
        pagination: {
          el: ".h5_cat-pagination",
          clickable: true,
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          576: {
            spaceBetween: 15,
          },
          415: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }
      });
    });

    //Popular Product (Variant 4)
    $(function() {
      function initSlickSlider(sliderElement) {
        $(sliderElement).slick({
          rows: 2,
          dots: false,
          arrows: true,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            },
          ]
        });
      }

      initSlickSlider('.shop-product-items-v4');

      function destroySlickSlider(sliderElement) {
        if ($(sliderElement).hasClass('slick-initialized')) {
          $(sliderElement).slick('unslick');
        }
      }

      $('button[data-bs-toggle="tab"]').on('click', function (e) {
        var targetTab = $(this).data('bs-target');
        var sliderInTab = $(targetTab).find('.shop-product-items-v4');

        $('.shop-product-items-v4').each(function() {
          destroySlickSlider(this);
        });

        if (sliderInTab.length) {
          initSlickSlider(sliderInTab);
        }
      });

      // Custom Next and Previous Button
      $('.pp-slider-prev').click(function(){
        $('.shop-product-items-v4').slick('slickPrev');
      });

      $('.pp-slider-next').click(function(){
        $('.shop-product-items-v4').slick('slickNext');
      });
    });

    //Featured Product (Variant 5)
    $(function() {
      var swiper14 = new Swiper(".h5_featured-slider", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".h5-fs-btn-next",
          prevEl: ".h5-fs-btn-prev",
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
          },
          415: {
            slidesPerView: 2,
          },
        },
      });
    });

    //Our Brands Section
    $(function() {
      var swiper15 = new Swiper(".our-brands-slider", {
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          1200: {
            slidesPerView: 6,
          },
          992: {
            slidesPerView: 4,
          },
          576: {
            slidesPerView: 3,
          },
          200: {
            slidesPerView: 2,
          },
        },
      });
    });

  /*============================ Shop Details ============================*/
    //Thumb & Product image slider
    $(function() {
      var thumb_swiper = new Swiper(".sds5_slider-image-thumb", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        direction: "vertical",
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints: {
          1400: {
            spaceBetween: 20,
          }
        }
      });

      var swiper2 = new Swiper(".sds5_slider-image-main", {
        loop: true,
        navigation: {
          nextEl: ".sds5_sldr-btn-next",
          prevEl: ".sds5_sldr-btn-prev",
        },
        thumbs: {
          swiper: thumb_swiper,
        },
      });
    });

    //Color Select
    $(function() {
      $('.color-wrap').on('click', '.color-item', function() {
        $(this).addClass('active').siblings().removeClass('active');
      });
    });

    //Product Quantity Increase Decrease
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

    //Quantity Widget (Variant 2)
    $(function() {
      $('.quantity-controls').each(function() {
        var quantityDisplay = $(this).find('.quantity-display');

        $(this).find('.quantity-increase').on('click', function() {
          var currentQuantity = parseInt(quantityDisplay.text(), 10);
          quantityDisplay.text(currentQuantity + 1);
        });

        $(this).find('.quantity-decrease').on('click', function() {
          var currentQuantity = parseInt(quantityDisplay.text(), 10);
          if (currentQuantity > 1) {
            quantityDisplay.text(currentQuantity - 1);
          }
        });
      });
    });

    //Review Form
    $(function () {
      $(".sds7__reviewrating").rateYo({
        rating: 0,
        fullStar: true,
        starWidth: "18px",
        ratedFill: "#13172B"
      });
    });

    //Product Quick View
    $(function() {
      $('.product-img-popup').magnificPopup({
          type: 'inline',
          focus: '#shop-details-top-area',
          callbacks: {
            parseAjax: function(mfpResponse) {
                mfpResponse.data = $(mfpResponse.data).find('#shop-details-top-area');
            }
        }
      });
    });

    //Item Active Class
    $(function() {
      $('.size-select').on('click','.size-item',function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
    });

    //Banner Ticker
    $(function(){
      $(".header-top-banner").slideDown();
      $(".htb-close-btn").click(function(){
        $(".header-top-banner").slideUp();
      });
    });

    //Product Details Section (Variant 4)
    $(function(){
      var swiper5 = new Swiper(".top-slider", {
        loop: true,
        navigation: {
          nextEl: ".sp-ts-next",
          prevEl: ".sp-ts-prev",
        },
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
