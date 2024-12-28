(function ($) {
    'use strict';
/*============================ Global ============================*/
//Back to Top (Variant 2) - Progress
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

//Search Box Toggle
$(function() {
  $('.srch-btn-h5').on('click',function() {
    $('.search-box').addClass('search-visibility');
  })
  $('.close-btn').on('click',function() {
    $('.search-box').removeClass('search-visibility');
  })
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

//Preloader v3
$(function(){
  $(window).on("load",function(){
    $('.preloader-v3').delay(1200).fadeOut(500);
  });
  $('.pv3-close').on('click', function(){
    $('.preloader-v3').fadeOut(500);
  })
});

function makeTimer() {
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
}
setInterval(function() { makeTimer(); }, 1000);

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

/*============================ Home Page ============================*/
//Header Promo Banner
$(function() {
  $('.show-hdr-ofr-btn').on('click', function(){
    $('.h6_promo-banner').toggleClass('show');
    $(this).toggleClass('active');
  });
  $('.h6pb-close-btn').on('click', function(){
    $('.h6_promo-banner').removeClass('show');
    $('.show-hdr-ofr-btn').removeClass('active');
  });
});

//Mobile Menu (Header Style Six)
$(function(){
  $('.h6_mobilemenu-btn').on('click',function() {
    $('.mobile-menu-style6').addClass('visible');
  });
  $('.h6mm-close-btn').on('click',function() {
    $('.mobile-menu-style6').removeClass('visible');
  });
  
  //Mobile Sub Menu (Header Style Six)
  $(".h6_has-submenu").click(function() {
    $(this).next(".h6_is-submenu").toggleClass("show");
  });
  $(".mgl-mm").click(function() {
    $(this).next(".m-geo-lang-submenu").toggleClass("show");
  });
});

//Mega Menu Slider
$(function(){
  var swiper = new Swiper(".mm-main-slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
      nextEl: ".mm-sld-nav-next",
      prevEl: ".mm-sld-nav-prev",
    },
    breakpoints: {
      992: {
        spaceBetween: 10,
      }
    }
  });
});

//Hero Section Text Typer
$(function() {
  var typed = new Typed('#text-change', {
    strings: ['XHSGAJ 900BV', 'HSBXGD XV87', 'URJGHT WQ31'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    cursorChar: '●'
  });
});

//Hero Slider
$(function() {
  var swiper = new Swiper(".hrv6-slider", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".hrv6-sldr-btn-next",
      prevEl: ".hrv6-sldr-btn-prev",
    },
    pagination: {
      el: ".hrv6-sldr-dots",
      clickable: true,
    },
  });
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

  //Slider 1 button 1
  var button1_1 = $("#hsv6_item1_1-btn")[0];
  var popover1_1 = $("#hsv6_cont1_1")[0];
  setupPopper(button1_1, popover1_1);

  //Slider 1 button 2
  var button1_2 = $("#hsv6_item1_2-btn")[0];
  var popover1_2 = $("#hsv6_cont1_2")[0];
  setupPopper(button1_2, popover1_2);

  //Slider 1 button 3
  var button1_3 = $("#hsv6_item1_3-btn")[0];
  var popover1_3 = $("#hsv6_cont1_3")[0];
  setupPopper(button1_3, popover1_3);

  //Slider 1 button 4
  var button1_4 = $("#hsv6_item1_4-btn")[0];
  var popover1_4 = $("#hsv6_cont1_4")[0];
  setupPopper(button1_4, popover1_4);

  //Slider 2 button 1
  var button2_1 = $("#hsv6_item2_1-btn")[0];
  var popover2_1 = $("#hsv6_cont2_1")[0];
  setupPopper(button2_1, popover2_1);

  //Slider 2 button 2
  var button2_2 = $("#hsv6_item2_2-btn")[0];
  var popover2_2 = $("#hsv6_cont2_2")[0];
  setupPopper(button2_2, popover2_2);

  //Slider 2 button 3
  var button2_3 = $("#hsv6_item2_3-btn")[0];
  var popover2_3 = $("#hsv6_cont2_3")[0];
  setupPopper(button2_3, popover2_3);

  //Slider 2 button 4
  var button2_4 = $("#hsv6_item2_4-btn")[0];
  var popover2_4 = $("#hsv6_cont2_4")[0];
  setupPopper(button2_4, popover2_4);

  //Slider 3 button 1
  var button3_1 = $("#hsv6_item3_1-btn")[0];
  var popover3_1 = $("#hsv6_cont3_1")[0];
  setupPopper(button3_1, popover3_1);

  //Slider 3 button 2
  var button3_2 = $("#hsv6_item3_2-btn")[0];
  var popover3_2 = $("#hsv6_cont3_2")[0];
  setupPopper(button3_2, popover3_2);

  //Slider 3 button 3
  var button3_3 = $("#hsv6_item3_3-btn")[0];
  var popover3_3 = $("#hsv6_cont3_3")[0];
  setupPopper(button3_3, popover3_3);

  //Slider 3 button 4
  var button3_4 = $("#hsv6_item3_4-btn")[0];
  var popover3_4 = $("#hsv6_cont3_4")[0];
  setupPopper(button3_4, popover3_4);
});

//One Product Features Section (Column reverse on screen size)
$(function() {
  function adjustClass() {
    var screenWidth = $(window).width();
    var $myDiv = $('.opfs_col-rev');

    if (screenWidth < 576) {
      $myDiv.addClass('flex-column-reverse');
    } else {
      $myDiv.removeClass('flex-column-reverse');
    }
  }

  adjustClass();
  $(window).resize(adjustClass);
});

//Video Popup
$(function() {
  $('#op_promo-video').magnificPopup({
      disableOn: 199,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});

//Testimonial Section (Variant 3) Slider
$(function (){
  var swiper = new Swiper(".testimonial-v3-slider", {
    navigation: {
      nextEl: ".tmv3-sldr-btn-next",
      prevEl: ".tmv3-sldr-btn-prev",
    },
    pagination: {
      el: ".tmv3-sldr-pagination",
      clickable: true,
    },
  });
});

//Order Form
$(function() {
  //Coupon Code Show/Hide
  $('#op__CouponCode').on('click',function(){
    $('.coupon__code__input').toggleClass('active')
  })

  //Order Form Popup
  $('#orderform__popupbtn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });
});

/*============================ Shop Details Page ============================*/
  //Nice Select (Cart)
  if ( $('.ops__cart').length ) {
    $('#shipping__select__cty').niceSelect();
  }

  //Review Form v2
  $(function () {
    $(".rating-star-select").rateYo({
      rating: 0,
      fullStar: true,
      starWidth: "18px",
      ratedFill: "#13172B"
    });
  });

  //Review Form v2 Toggle
  $(function () {
    $('#review-form-v2-toggle').on('click',function() {
      $('.review-form-v2').toggleClass('show');
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

  /*============================ Checkout Page ============================*/
  if($('.ops__checkout').length){
    $('.checkout-country').niceSelect();
    $('.checkout-city').niceSelect();
  }

  $(function() {
    $('.click-to-redeem').click( function(){
      if ( $('.checkout-coupn-area').hasClass('show') ) {
          $('.checkout-coupn-area').removeClass('show');
      }
      else {
          $('.checkout-coupn-area').removeClass('show');
          $('.checkout-coupn-area').addClass('show');    
      }
    });
  });

}) (jQuery);
