(function ($) {
    'use strict';

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

  //Cart Page Quantity Price Multiplier
  $(function() {
    $('.quantity-controls').each(function() {
        const $decreaseBtn = $(this).find('.quantity-decrease');
        const $increaseBtn = $(this).find('.quantity-increase');
        const $display = $(this).find('.quantity-display');
        const $priceTd = $(this).closest('tr').find('.price');
        const $totalTd = $(this).closest('tr').find('.total');
        const price = parseFloat($priceTd.text().replace('$', ''));

        const updateTotal = () => {
            const quantity = parseInt($display.text());
            const total = price * quantity;
            $totalTd.text('$' + total.toFixed(2));
        };

        $decreaseBtn.on('click', () => {
            let quantity = parseInt($display.text());
            if (quantity > 1) {
                quantity--;
                $display.text(quantity);
                updateTotal();
            }
        });

        $increaseBtn.on('click', () => {
            let quantity = parseInt($display.text());
            quantity++;
            $display.text(quantity);
            updateTotal();
        });
    });
  });

/*============================ Home Page ============================*/
  //Preloader v4
  $(function(){
    $(window).on("load",function(){
      $('.car__preloader__wrapper').delay(1000).fadeOut(500);
    });
    $('.car__preloader__close__btn').on('click', function(){
      $('.car__preloader__wrapper').fadeOut(500);
    })
  });

  //Language change drop down menu
  $(function() {
    $('.lc__dropdown__btn').on('click',function(){
      $('.loclang__dropdown').toggleClass('show')
      if ($(this).hasClass('fa-globe')) {
        $(this).removeClass('fa-globe').addClass('fa-x');
      } else {
        $(this).removeClass('fa-x').addClass('fa-globe');
      }
    });
  });

  //Search results
  $(function(){
    $('#HeaderSearch').on('keyup', function(){
        let inputValue = $(this).val().toLowerCase();
        let resultsContainer = $('#results__container');
        resultsContainer.empty();
        
        let suggestions = ['Electric Cars', 'Hybrid Cars', 'Sports Cars', 'Classic Cars', 'Car Rental', 'Car Servicing'];
        
        let filteredSuggestions = suggestions.filter(function(suggestion){
            return suggestion.toLowerCase().includes(inputValue);
        });
        
        if (inputValue && filteredSuggestions.length > 0) {
            filteredSuggestions.forEach(function(suggestion){

                let suggestionDiv = $('<div>').text(suggestion).click(function(){
                    $('#HeaderSearch').val(suggestion);
                    resultsContainer.hide();
                });
                resultsContainer.append(suggestionDiv);
            });
            resultsContainer.show();
        } else if (inputValue) {
            resultsContainer.append($('<div>').text('No results'));
            resultsContainer.show();
        } else {
            resultsContainer.hide();
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('.header__search').length) {
            $('#results__container').hide();
        }
    });
  });

  //Search bar show/hide
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.header__search').length &&
        !$(event.target).hasClass('has__search__btn')) {
        $('.header__search').removeClass('show');
    }
  });

  $('.has__search__btn').on('click', function(event){
    event.stopPropagation();
    $('.header__search').toggleClass('show');
  });

  //Mobile Menu
  $(function() {
    $('.mobile-menu-btn').on('click',function() {
      $('.mobile-menu-style4').addClass('visible');
    })
    $('.mobile-menu-4-close').on('click',function() {
      $('.mobile-menu-style4').removeClass('visible');
    })
    
    //Mobile Menu - Sub Menu (Header - Style Four)
    $('.mobile-submenu').on('click', function() {
      var submenu = $(this).find('.l2m-submenu');
      submenu.toggleClass('show');
    });
    
  });

  //Car Reserve Form Popup
  $(function() {
    //Show Hide Button
    $('.car__rserve__button').on('click', function() {
      $('.car__reserve__form').addClass('show');
    });
    $('.crf__close__btn').on('click', function() {
      $('.car__reserve__form').removeClass('show');
    });

    //Nice Select
    if ( $('.car__reserve__form').length ) {
      $('#crf__location').niceSelect();
      $('#crf__retlocation').niceSelect();
      $('#crfTireUnits').niceSelect();
    }

    //Reserved Date
    function updateSelectedDates() {
      var startDate = new Date($('#crf__date').val());
      var endDate = new Date($('#crf__retdate').val());
      var today = new Date();

      if (startDate < today) {
          $('#crf__date').val('');
          return;
      }

      var text = '';
      if (startDate && endDate) {
          if (endDate <= startDate) {
              $('#crf__retdate').val('');
              return;
          }
          text += 'From ' + startDate.toLocaleDateString() + ' To ' + endDate.toLocaleDateString();
      } else if (startDate) {
          text += 'From ' + startDate.toLocaleDateString() + ' To N/A';
      } else if (endDate) {
          text += 'From N/A To ' + endDate.toLocaleDateString();
      } else {
          text += 'N/A';
      }
      $('#selectedDates').text(text);
      $('#selectedDates2').text(text);
    }
    $('#crf__date, #crf__retdate').change(updateSelectedDates);

    //Reserved Time
    $('#crf__time').change(function() {
      var selectedTime = $(this).val();
      $('#selectedTime').text(selectedTime);
      $('#selectedTime2').text(selectedTime);
    });
    $('#crf__rettime').change(function() {
      var selectedTime = $(this).val();
      $('#selectedRetTime').text(selectedTime);
      $('#selectedRetTime2').text(selectedTime);
    });

  });

  //Hero Section Slider
  $(function(){
    var swiper = new Swiper(".h7__hero__slider", {
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: ".h7hs__pagination",
        clickable: true,
      },
    });
  });

  //Hero Section Parallax Effect
  $(function() {
    if ($(window).width() > 767) {
      $('.hero__section__v7').each(function() {
          $(this).data('initialPosition', { left: 0, top: 0 });
      });

      $('.hero__section__v7').on('mousemove', function(event) {
          var moveX = (event.pageX - $(this).offset().left) / $(this).width() - 0.5;
          var moveY = (event.pageY - $(this).offset().top) / $(this).height() - 0.5;

          $(this).find('.parallax__effect').css({
              'transform': 'translate(' + moveX * -20 + 'px, ' + moveY * -20 + 'px)'
          });

          $(this).find('.parallax__effecth4').css({
            'transform': 'translate(' + moveX * -5 + 'px, ' + moveY * -5 + 'px)'
          });
          
          $(this).find('.parallax__effecth2').css({
            'transform': 'translate(' + moveX * -9 + 'px, ' + moveY * -9 + 'px)'
          });

          $(this).find('.parallax__effectp').css({
            'transform': 'translate(' + moveX * -5 + 'px, ' + moveY * -5 + 'px)'
          });

          $(this).find('.parallax__effectb').css({
            'transform': 'translate(' + moveX * -7 + 'px, ' + moveY * -7 + 'px)'
          });

      }).on('mouseleave', function() {
          // Retrieve initial position and reset the image
          var initialPosition = $(this).data('initialPosition');
          $(this).find('.parallax__effect').css({
              'transform': 'translate(0, 0)'
          });
      });
    }
  });

  //Hero Slider Popover
  $(function () {
    function createPopper(button, popover) {
      return Popper.createPopper(button, popover, {
        placement: "top",
      });
    }

    function setupPopper(button, popover) {
      var popperInstance = createPopper(button, popover);

      button.addEventListener("mouseenter", function () {
        popover.style.display = "block";
        popperInstance.update();
      });

      button.addEventListener("mouseleave", function () {
        popover.style.display = "none";
      });
    }

    //Slider 2 button 1
    var button2_1 = $("#hsv7__popbtn__item1")[0];
    var popover2_1 = $("#hsv7__popcont__item1")[0];
    setupPopper(button2_1, popover2_1);

    //Slider 2 button 2
    var button2_2 = $("#hsv7__popbtn__item2")[0];
    var popover2_2 = $("#hsv7__popcont__item2")[0];
    setupPopper(button2_2, popover2_2);

    //Slider 2 button 3
    var button2_3 = $("#hsv7__popbtn__item3")[0];
    var popover2_3 = $("#hsv7__popcont__item3")[0];
    setupPopper(button2_3, popover2_3);

    //Slider 2 button 4
    var button2_4 = $("#hsv7__popbtn__item4")[0];
    var popover2_4 = $("#hsv7__popcont__item4")[0];
    setupPopper(button2_4, popover2_4);

    //Slider 2 button 5
    var button2_5 = $("#hsv7__popbtn__item5")[0];
    var popover2_5 = $("#hsv7__popcont__item5")[0];
    setupPopper(button2_5, popover2_5);

  });

  //Hero Car Search Select
  if ( $('.find__vehicle').length ) {
    $('#PickUpLocation').niceSelect();
    $('#ReturnLocation').niceSelect();
    $('#NewSelectMake').niceSelect();
    $('#NewCarBody').niceSelect();
    $('#NewSelectYear').niceSelect();
    $('#SelectMake').niceSelect();
    $('#CarBody').niceSelect();
    $('#SelectYear').niceSelect();
  }

  //Hero Car Search Price Filter
  $(function(){
    $('.price__mileage__filter').each(function() {
        var $this = $(this);
        var rangeInput = $this.find(".range-input input"),
            priceMinDisplay = $this.find(".input-min"),
            priceMaxDisplay = $this.find(".input-max"),
            range = $this.find(".price-range-slider .progress");
        let priceGap = 500;

        rangeInput.each(function(){
            $(this).on("input", function(e){
                let minVal = parseInt(rangeInput[0].value),
                    maxVal = parseInt(rangeInput[1].value);

                if((maxVal - minVal) < priceGap){
                    if(e.target.className.includes("range-min")){
                        rangeInput[0].value = maxVal - priceGap;
                    }else{
                        rangeInput[1].value = minVal + priceGap;
                    }
                }else{
                    priceMinDisplay.text(minVal.toFixed(2));
                    priceMaxDisplay.text(maxVal.toFixed(2));
                    range.css("left", ((minVal / rangeInput[0].max) * 100) + "%");
                    range.css("right", 100 - (maxVal / rangeInput[1].max) * 100 + "%");
                }
            });
        });
    });
  });

  //Choose Car by Make Slider
  $(function(){
    var swiper = new Swiper(".cms__slider", {
      slidesPerView: 6,
      spaceBetween: 20,
      pagination: {
        el: ".cmssldr__dots",
        clickable: true,
      },
      navigation: {
        nextEl: ".cmssldr__btn__next",
        prevEl: ".cmssldr__btn__prev",
      },
      breakpoints: {
        1400: {
          slidesPerView: 6,
        },
        1200: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        576: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 1,
        }
      }
    });
  });

  //Product Style Six Image Slider
  $(function(){
    var swiper = new Swiper(".ps6__image__slider", {
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: ".ps6sldr__btn__next",
        prevEl: ".ps6sldr__btn__prev",
      },
    });
  });

  //Why Choose Us Counter Up
  $(function() {
    function startCountUp(element, start, end, duration) {
        $({ Counter: start }).animate({ Counter: end }, {
            duration: duration,
            easing: 'swing',
            step: function () {
                element.text(Math.ceil(this.Counter));
            }
        });
    }

    $('.wcu__counter').each(function() {
        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
                startCountUp($(this.element), 0, parseInt($(this.element).text()), 1000);
                waypoint.destroy();
            },
            offset: 'bottom-in-view'
        });
    });
  });

  //Testimonial Section (Variant 4)
  $(function() {
    var swiper = new Swiper(".testimonial__v3__slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".tmv3__btn__next",
        prevEl: ".tmv3__btn__prev",
      },
      pagination: {
        el: ".tmv3__dot",
        clickable: true,
      },
      breakpoints: {
        416: {
          slidesPerView: 2,
        },
        1: {
          slidesPerView: 1,
        }
      }
    });
  });

  //Back to Top (Variant 3) - Car
  $(function() {
    var backToTop = $('.back__to__top__v3');
    backToTop.hide();

    $(window).scroll(function() {
      if ($(this).scrollTop() >= 400) {
        backToTop.fadeIn(1000);
      } else {
        backToTop.fadeOut(200);
      }
    });

    backToTop.on('click', function() {
      $('body,html').animate({
        scrollTop : 0
      }, 500);

      backToTop.animate({
        bottom: '100%',
        opacity: 0
      }, 2000, function() {
        backToTop.css({ bottom: '', opacity: '' });
      });
    });
  });

/*============================ Shop ============================*/
  //Review Form v3 Toggle
  $(function() {
    $('#RevFormV3Toggle').on('click',function() {
      $('.review__form__v3').toggleClass('show');
    });
  });

  //Review Form
  $(function () {
    $(".rating-star-select").rateYo({
      rating: 0,
      fullStar: true,
      starWidth: "18px",
      ratedFill: "#13172B"
    });
  });

  //All Select
  if ( $('.sds6__page').length ) {
    $('#pis6TireUnits').niceSelect();
  }
  if ( $('.sps6__page').length ) {
    $('#sps6sbCarType').niceSelect();
    $('.sorting__select select').niceSelect();
  }

  //Overall Rating Sidebar Widget Show/Hide
  $(function(){
    $("#ReviewInfoSection button").on('click', function() {
        $("#OverallRatingWidget").removeClass("show");
        $("#ContactInfoWidget").removeClass("hide");
      });
      
      $("#RS3Review-tab").on('click',function(){
        $("#OverallRatingWidget").addClass("show");
        $("#ContactInfoWidget").addClass("hide");
    });
  });

  //Product Iages Slider
  $(function(){
    var sds6thumb = new Swiper(".sds6__thumb", {
      loop: true,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        576: {
          slidesPerView: 3,
        },
        1: {
          slidesPerView: 2,
        },
      }
    });
    var sds6 = new Swiper(".sds__images__slider", {
      loop: true,
      spaceBetween: 10,
      allowTouchMove: false,
      navigation: {
        nextEl: ".sds6__btn__next",
        prevEl: ".sds6__btn__prev",
      },
      thumbs: {
        swiper: sds6thumb,
      },
    });
  });

  //Sticky sidebar hide in overview tab when screen size <992
  $(function() {
    function adjustClass() {
      var screenWidth = $(window).width();

      if (screenWidth < 992 && $('#RS3Overview-tab').hasClass('nav-link', 'active')) {
        $('.review__sticky__sidebar').addClass('hidden');
      } else {
        $('.review__sticky__sidebar').removeClass('hidden');
      }

      if (screenWidth < 992) {
        $('#RS3Overview-tab').on('click', function(event) {
          $('.review__sticky__sidebar').addClass('hidden');
        });
      } else {
        $('.review__sticky__sidebar').removeClass('hidden');
      }
    }

    $('#ReviewInfoSection button').on('click', function() {
      $('.review__sticky__sidebar').removeClass('hidden');
    });

    adjustClass();
    $(window).resize(adjustClass);
  });

  //Sidebar Mileage Filter hide/show
  $(function() {
    $('#sps6sbCarType').change(function() {
        if ($(this).val() === 'UsedCar') {
            $('.sps6sb__mileage').css('height', '120px');
        } else {
            $('.sps6sb__mileage').css('height', '0');
        }
    });

    if ($('#sps6sbCarType').val() !== 'UsedCar') {
        $('.sps6sb__mileage').css('height', '0');
    }
  });

  //Shop style 6 sidebar filter toggle
  $(function(){
    $('.sps6sb__toggle').on('click', function(){
      $('.shop__v6__sidebar').toggleClass('show')
    });
    $('#sps6sb__close__btn').on('click', function(){
      $('.shop__v6__sidebar').removeClass('show')
    })
  });

  $(function() {
    function adjustClass() {
      var screenWidth = $(window).width();
      if (screenWidth < 201) {
          $('.checkbox__row').removeClass('col-6');
      } else {
        $('.checkbox__row').addClass('col-6');
      }
    }

    adjustClass();
    $(window).resize(adjustClass);
  });

  //All Select (Nice Select)
  if ( $('.cart__page').length ) {
    $('#CSPcsCountry').niceSelect();
    $('#CSPcsState').niceSelect();
    $('#COV2ShippingDetailsState').niceSelect();
  }

  //Shipping Popup Button
  $(function(){
    $('.calculate__shipping__btn').on('click', function(){
      $('.calculate__shipping__popup').addClass('show')
    });
    $('.csp__close__btn').on('click', function(){
      $('.calculate__shipping__popup').removeClass('show')
    })
  });

  /*============================ Checkout ============================*/
  //All Select (Nice Select)
  if ( $('.h7__checkout__Page').length ) {
    $('#country').niceSelect();
    $('#city').niceSelect();
  }

  $(function() {
    $('.click-to-redeem').on('click', function() {
      $('.checkout-coupn-area').toggleClass('show');
    });
  });

}) (jQuery);
