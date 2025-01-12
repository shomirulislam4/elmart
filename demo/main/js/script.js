(function ($) {
    'use strict';
/*============================ Global ============================*/
//Back to Top Button
$(function(){
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 400) {
        $('#return-to-top').fadeIn(1000);
    } else {
        $('#return-to-top').fadeOut(200);
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 500);
  });
});

//Preloader
$(function(){
  $(window).on("load",function(){
    $('#preloader').delay(800).fadeOut(500);
  });
  $('.pre-close-btn').on('click', function(){
    $('#preloader').fadeOut(500);
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

/*============================ Home Style Two ============================*/
//Mobile Menu
$(function() {
  $('.mobile-menu-toggle').on('click',function() {
    $('.mobile-menu').addClass('visible');
  })
  $('.mobile-menu-close').on('click',function() {
    $('.mobile-menu').removeClass('visible');
  })
  
  //Mobile Menu - Sub Menu
  $(".m-sub-menu-l2-open").click(function() {
    $(this).next(".m-sub-menu-l2").toggleClass("open");
  });
});

// All Sliders - Home Page Two
$(function() {
    var slide1 = new Swiper('.category-carousel', {
      loop: true,
      spaceBetween: 24,
      navigation: {
      nextEl: '.sbna',
      prevEl: '.sbpa',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        }
      },
    });

  var slide2 = new Swiper('.features-product-carousel', {
    loop: true,
    navigation: {
    nextEl: '.sbnb',
    prevEl: '.sbpb',
    },
    breakpoints: {
      250: {
        slidesPerView: 1,
        spaceBetween: 6,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
      1580: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
  });

  var slide3 = new Swiper('.deal-product-carousel', {
    loop: true,
    spaceBetween: 24,
    navigation: {
    nextEl: '.sbnc',
    prevEl: '.sbpc',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      }
    },
  });

  var swiper1 = new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
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

//Search Box Toggle
$(function() {
  $('.search-box-btn').on('click',function() {
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

//Hero-section Counter
$(function($) {
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

    $('.hero-count').each(function() {
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

//Featured Product Color Change
$(function(){
  //product 1
  $('.fp-cng-img1-btn1').on({
       'click': function(){
           $('#fp-cng-img-1').attr('src','image/home-one/feature-product/luxury-tshirt-man-v2.jpg');
       }
   });
   $('.fp-cng-img1-btn2').on({
       'click': function(){
           $('#fp-cng-img-1').attr('src','image/home-one/feature-product/luxury-tshirt-man.jpg');
       }
   });
   $('.fp-cng-img1-btn3').on({
       'click': function(){
           $('#fp-cng-img-1').attr('src','image/home-one/feature-product/luxury-tshirt-man-v3.jpg');
       }
   });
   $('.fp-cng-img1-btn1-1').on({
    'click': function(){
        $('#fp-cng-img-1-1').attr('src','image/home-one/feature-product/luxury-tshirt-man.jpg');
    }
  });
  $('.fp-cng-img1-btn2-1').on({
      'click': function(){
          $('#fp-cng-img-1-1').attr('src','image/home-one/feature-product/luxury-tshirt-man-v2.jpg');
      }
  });
  $('.fp-cng-img1-btn3-1').on({
      'click': function(){
          $('#fp-cng-img-1-1').attr('src','image/home-one/feature-product/luxury-tshirt-man-v3.jpg');
      }
  });
   //product 2
  $('.fp-cng-img2-btn1').on({
       'click': function(){
           $('#fp-cng-img-2').attr('src','image/home-one/feature-product/model-blue-suit-fashionable.jpg');
       }
   });
  $('.fp-cng-img2-btn2').on({
       'click': function(){
           $('#fp-cng-img-2').attr('src','image/home-one/feature-product/model-blue-suit-fashionable-v2.jpg');
       }
   });
  $('.fp-cng-img2-btn3').on({
       'click': function(){
           $('#fp-cng-img-2').attr('src','image/home-one/feature-product/model-blue-suit-fashionable-v3.jpg');
       }
   });
   $('.fp-cng-img2-btn1-2').on({
    'click': function(){
        $('#fp-cng-img-2-2').attr('src','image/home-one/feature-product/model-blue-suit-fashionable.jpg');
    }
  });
  $('.fp-cng-img2-btn2-2').on({
      'click': function(){
          $('#fp-cng-img-2-2').attr('src','image/home-one/feature-product/model-blue-suit-fashionable-v2.jpg');
      }
  });
  $('.fp-cng-img2-btn3-2').on({
      'click': function(){
          $('#fp-cng-img-2-2').attr('src','image/home-one/feature-product/model-blue-suit-fashionable-v3.jpg');
      }
  });
   //product 3
  $('.fp-cng-img3-btn1').on({
       'click': function(){
           $('#fp-cng-img-3').attr('src','image/home-one/feature-product/white-sweater-women-v1.jpg');
       }
   });
  $('.fp-cng-img3-btn2').on({
       'click': function(){
           $('#fp-cng-img-3').attr('src','image/home-one/feature-product/white-sweater-women-v2.jpg');
       }
   });
   $('.fp-cng-img3-btn3').on({
    'click': function(){
        $('#fp-cng-img-3').attr('src','image/home-one/feature-product/white-sweater-women.jpg');
    }
  });
   $('.fp-cng-img3-btn1-3').on({
    'click': function(){
        $('#fp-cng-img-3-3').attr('src','image/home-one/feature-product/white-sweater-women-v1.jpg');
    }
  });
  $('.fp-cng-img3-btn2-3').on({
      'click': function(){
          $('#fp-cng-img-3-3').attr('src','image/home-one/feature-product/white-sweater-women-v2.jpg');
      }
  });
  $('.fp-cng-img3-btn3-3').on({
  'click': function(){
      $('#fp-cng-img-3-3').attr('src','image/home-one/feature-product/white-sweater-women.jpg');
  }
  });
   //product 4
  $('.fp-cng-img4-btn1').on({
       'click': function(){
           $('#fp-cng-img-4').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man-v1.png');
       }
   });
  $('.fp-cng-img4-btn2').on({
       'click': function(){
           $('#fp-cng-img-4').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man-v2.png');
       }
   });
   $('.fp-cng-img4-btn3').on({
    'click': function(){
        $('#fp-cng-img-4').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man.png');
    }
  });
  $('.fp-cng-img4-btn1-4').on({
    'click': function(){
        $('#fp-cng-img-4-4').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man-v1.png');
    }
  });
  $('.fp-cng-img4-btn2-4').on({
      'click': function(){
          $('#fp-cng-img-4-4').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man-v2.png');
      }
  });
  $('.fp-cng-img4-btn3-4').on({
  'click': function(){
      $('#fp-cng-img-4-4').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man.png');
  }
  });
});

//Shop Category Filtering
$(function() {
  $('.all-product-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({ filter: filterValue });
  });

  //Grid Category active item
  $('.all-product-filter').on('click','button',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
});

//Shop Section Product Image Change (based on color)
$(function(){
  //Product 1
  $('.sc-cng-img1-btn1').on({
    'click': function(){
        $('#sc-cng-img-1').attr('src','image/home-one/shop-section/fashion-woman-top-v1.png');
    }
  });
  $('.sc-cng-img1-btn2').on({
      'click': function(){
          $('#sc-cng-img-1').attr('src','image/home-one/shop-section/fashion-woman-top.png');
    }
  });
  $('.sc-cng-img1-btn3').on({
      'click': function(){
          $('#sc-cng-img-1').attr('src','image/home-one/shop-section/fashion-woman-top-v3.png');
    }
  });
  //Product 2
  $('.sc-cng-img2-btn1').on({
    'click': function(){
        $('#sc-cng-img-2').attr('src','image/home-one/shop-section/convert-for-man-stretching-shoe.png');
    }
  });
  $('.sc-cng-img2-btn2').on({
      'click': function(){
          $('#sc-cng-img-2').attr('src','image/home-one/shop-section/convert-for-man-stretching-shoe-v2.png');
    }
  });
  $('.sc-cng-img2-btn3').on({
      'click': function(){
          $('#sc-cng-img-2').attr('src','image/home-one/shop-section/convert-for-man-stretching-shoe-v3.png');
    }
  });
  //Product 3
  $('.sc-cng-img3-btn1').on({
    'click': function(){
        $('#sc-cng-img-3').attr('src','image/home-one/shop-section/men-cotton-sleeves-shirt-v2.png');
    }
  });
  $('.sc-cng-img3-btn2').on({
      'click': function(){
          $('#sc-cng-img-3').attr('src','image/home-one/shop-section/men-cotton-sleeves-shirt-v3.png');
    }
  });
  $('.sc-cng-img3-btn3').on({
      'click': function(){
          $('#sc-cng-img-3').attr('src','image/home-one/shop-section/men-cotton-sleeves-shirt.png');
    }
  });
  //Product 4
  $('.sc-cng-img4-btn1').on({
    'click': function(){
        $('#sc-cng-img-4').attr('src','image/home-one/shop-section/luxury-woman-black-hand-bag-v1.png');
    }
  });
  $('.sc-cng-img4-btn2').on({
      'click': function(){
          $('#sc-cng-img-4').attr('src','image/home-one/shop-section/luxury-woman-black-hand-bag.png');
    }
  });
  $('.sc-cng-img4-btn3').on({
      'click': function(){
          $('#sc-cng-img-4').attr('src','image/home-one/shop-section/luxury-woman-black-hand-bag-v3.png');
    }
  });
  //Product 5
  $('.sc-cng-img5-btn1').on({
    'click': function(){
        $('#sc-cng-img-5').attr('src','image/home-one/shop-section/summer-tank-top-vest-fashionable-v1.png');
    }
  });
  $('.sc-cng-img5-btn2').on({
      'click': function(){
          $('#sc-cng-img-5').attr('src','image/home-one/shop-section/summer-tank-top-vest-fashionable.png');
    }
  });
  $('.sc-cng-img5-btn3').on({
      'click': function(){
          $('#sc-cng-img-5').attr('src','image/home-one/shop-section/summer-tank-top-vest-fashionable-v3.png');
    }
  });
  //Product 6
  $('.sc-cng-img6-btn1').on({
    'click': function(){
        $('#sc-cng-img-6').attr('src','image/home-one/shop-section/short-pink-color-woman-blazer-v1.png');
    }
  });
  $('.sc-cng-img6-btn2').on({
      'click': function(){
          $('#sc-cng-img-6').attr('src','image/home-one/shop-section/short-pink-color-woman-blazer-v2.png');
    }
  });
  $('.sc-cng-img6-btn3').on({
      'click': function(){
          $('#sc-cng-img-6').attr('src','image/home-one/shop-section/short-pink-color-woman-blazer.png');
    }
  });
  //Product 7
  $('.sc-cng-img7-btn1').on({
    'click': function(){
        $('#sc-cng-img-7').attr('src','image/home-one/shop-section/mens-rose-plus-white-shirt-v1.png');
    }
  });
  $('.sc-cng-img7-btn2').on({
      'click': function(){
          $('#sc-cng-img-7').attr('src','image/home-one/shop-section/mens-rose-plus-white-shirt.png');
    }
  });
  $('.sc-cng-img7-btn3').on({
      'click': function(){
          $('#sc-cng-img-7').attr('src','image/home-one/shop-section/mens-rose-plus-white-shirt-v3.png');
    }
  });
  //Product 8
  $('.sc-cng-img8-btn1').on({
    'click': function(){
        $('#sc-cng-img-8').attr('src','image/home-one/shop-section/suit-double-breasted-blazer.png');
    }
  });
  $('.sc-cng-img8-btn2').on({
      'click': function(){
          $('#sc-cng-img-8').attr('src','image/home-one/shop-section/suit-double-breasted-blazer-v2.png');
    }
  });
  $('.sc-cng-img8-btn3').on({
      'click': function(){
          $('#sc-cng-img-8').attr('src','image/home-one/shop-section/suit-double-breasted-blazer-v3.png');
    }
  });
     //product 9
     $('.sc-cng-img9-btn1').on({
      'click': function(){
          $('#sc-cng-img-9').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man-v1.png');
      }
    });
    $('.sc-cng-img9-btn2').on({
        'click': function(){
            $('#sc-cng-img-9').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man-v2.png');
        }
    });
    $('.sc-cng-img9-btn3').on({
    'click': function(){
        $('#sc-cng-img-9').attr('src','image/home-one/feature-product/silver-silk-shirt-tie-man.png');
    }
    });
});

//Login & Register Slide
$(function(){
  //Box Slide In
  $('#log-reg-sld-in-btn').on('click',function() {
    $('.login-register-slider').addClass('show');
  })
  $('.log-reg-sld-close').on('click',function() {
    $('.login-register-slider').removeClass('show');
  })
  //Show or Hide Password Login form
  $('#show-pass').click(function(){
    if('password' == $('#log-sld-password').attr('type')){
        $('#log-sld-password').prop('type', 'text');
    }else{
        $('#log-sld-password').prop('type', 'password');
    }
  });
  $('#show-pass').click(function() {
    if ($(this).hasClass('fa-eye')) {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });
  //Show or Hide Password Register form
    //New Password
  $('#reg-show-pass').click(function(){
    if('password' == $('#reg-sld-password').attr('type')){
        $('#reg-sld-password').prop('type', 'text');
    }else{
        $('#reg-sld-password').prop('type', 'password');
    }
  });
  $('#reg-show-pass').click(function() {
    if ($(this).hasClass('fa-eye')) {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });
    //Confirm Password
  $('#reg-show-conf-pass').click(function(){
    if('password' == $('#reg-sld-conf-password').attr('type')){
        $('#reg-sld-conf-password').prop('type', 'text');
    }else{
        $('#reg-sld-conf-password').prop('type', 'password');
    }
  });
  $('#reg-show-conf-pass').click(function() {
    if ($(this).hasClass('fa-eye')) {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });
});

//Newsletter Popup
$(function() {
  $(window).on('load', function() {
    $('.newsletter-popup').addClass('show');
    });
    $('.close-icon').on('click', function() {
        $('.newsletter-popup').fadeOut();
    });
});

/*============================ Home Style One ============================*/
//Countdown Timer - Deal of the Week Section
function homeTwoTimer() {
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

    $("#timer-v2 #days").html("<span>Days</span><br>" + days);
    $("#timer-v2 #hours").html("<span>Hours</span><br>" + hours);
    $("#timer-v2 #minutes").html("<span>Min</span><br>" + minutes);
    $("#timer-v2 #seconds").html("<span>Sec</span><br>" + seconds);		
}
setInterval(function() { homeTwoTimer(); }, 1000);

// All Slider - Home Page One
$(function(){
  //Category Carousel
  var slide1 = new Swiper('.category-carousel-v2', {
    loop: true,
    navigation: {
    nextEl: '.sbnbh2',
    prevEl: '.sbpbh2',
    },
    breakpoints: {
      250: {
        slidesPerView: 1,
        spaceBetween: 6,
      },
      375: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 14,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
      1580: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },
  });

  //Testimonial Slider
  var swiper2 = new Swiper(".testimonial-slider-v2", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      },
      breakpoints: {
        250: {
          slidesPerView: 1,
          spaceBetween: 6,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      }
  });
});

/*============================ Shop Page ============================*/
//Sorting Select Options
if ( $('.sorting-select').length ) {
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

//Shop Promo Hide
$('.promo-close-btn').on('click',function() {
  $('.left-bar-promo-wrapper').addClass('hide');
})

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

//Shop Grid List View Toggle
$(function() {
  //Shop Grid List Toggle
  $('#shop-grid-btn').click(function() {
    $('.shop-product-items').removeClass('shop-list-view').addClass('col-lg-4 col-sm-6');
  });
  $('#shop-list-btn').click(function() {
      $('.shop-product-items').removeClass('col-lg-4 col-sm-6').addClass('shop-list-view');
  });

  //Shop List View Remove on Breakpoint
  function adjustClass() {
    var screenWidth = $(window).width();
    if (screenWidth < 415) {
      $('.shop-product-items').removeClass('shop-list-view');
    }
  }

  adjustClass();
  $(window).resize(adjustClass);
});

/*============================ Shop Details Page ============================*/
//Item Active Class
$(function() {
  //Product Colors
  $('.prod-colors-select').on('click','.color-choice',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  //Product Tags
  $('.tag-cloud-v2').on('click','.tag-item-v2',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  //Product Colors V2
  $('.prod-colors-select-v2').on('click','.color-choice-v2',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  //Product Colors V2
  $('.size-select').on('click','.size-item',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
});

//Give Review Form Toggle
$(function() {
  $('#review').on('click',function() {
    $('.give-review-form').addClass('show');
  })
  $('#description').on('click',function() {
    $('.give-review-form').removeClass('show');
  })
});

//Review Form Star Rating
$(function() {
  $("#st1").click(function() {
      $(".rev-str-rtg").css("color", "#C1C1C1");
      $("#st1").css("color", "#FCC013");
  });
  $("#st2").click(function() {
      $(".rev-str-rtg").css("color", "#C1C1C1");
      $("#st1, #st2").css("color", "#FCC013");
  });
  $("#st3").click(function() {
      $(".rev-str-rtg").css("color", "#C1C1C1")
      $("#st1, #st2, #st3").css("color", "#FCC013");
  });
  $("#st4").click(function() {
      $(".rev-str-rtg").css("color", "#C1C1C1");
      $("#st1, #st2, #st3, #st4").css("color", "#FCC013");
  });
  $("#st5").click(function() {
      $(".rev-str-rtg").css("color", "#C1C1C1");
      $("#st1, #st2, #st3, #st4, #st5").css("color", "#FCC013");
  })
});

//Shop Banner Slider (Right Sidebar)
$(function() {
  var swiper3 = new Swiper(".shop-bnr-sldr-swiper", {
    pagination: {
      el: ".shop-bnr-sldr-pagination",
    },
  });
});

//Ask Question Popup
$('#ask-a-question').magnificPopup({
  type: 'inline',
  midClick: true,
  mainClass: 'mfp-fade',
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

//Image slider
$(function() {
  var swiper4 = new Swiper(".shop-details-image-slider", {
    slidesPerView: 4,
    spaceBetween: 23,
    loop: true,
    navigation: {
      nextEl: ".shop-dtls-img-sldr-btn-next",
      prevEl: ".shop-dtls-img-sldr-btn-prev",
    },
  });
});

//Color Compare Popup
$(function() {
  // Open Popup
  $('.color-compare-btn').on('click', function() {
    $('.shop-details-popup').addClass('open');
  });

  // Close Popup
  $('.color-compare-close').on('click', function() {
    $('.shop-details-popup').removeClass('open');
  });

  // Handle color selection and comparison
  $('.compare-selected').on('click', function() {
    var selectedColors = [];
    var selectedImages = [];

    $('.color-option img').each(function() {
      if ($(this).hasClass('selected')) {
        var color = $(this).attr('alt');
        selectedColors.push(color);
        selectedImages.push($(this).attr('src'));
      }
    });

    // Remove previous images
    $('.color-details').empty();

    // Display selected images in the .color-details container
    for (var i = 0; i < selectedImages.length; i++) {
      var img = $('<img>');
      img.attr('src', selectedImages[i]);
      img.attr('alt', selectedColors[i]);
      $('.color-details').append(img);
    }
  });

  // Toggle selected class on click
  $('.color-option img').on('click', function() {
    $(this).toggleClass('selected');
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

/*============================ About Us Page ============================*/
//About Video Popup
$(function() {
  $('.about-video-popup').magnificPopup({
      disableOn: 199,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});

//Team Member Social Links
$(function() {
  //item 1
  $(function() {
    $('#social-button1').click( function(){
      if ( $('#line1').hasClass('hide') ) {
          $('#line1').removeClass('hide');
      }
      else {
          $('#line1').removeClass('hide');
          $('#line1').addClass('hide');    
      }
    });
    $('#social-button1').click( function(){
      if ( $('#social-profiles1').hasClass('open') ) {
          $('#social-profiles1').removeClass('open');
      }
      else {
          $('#social-profiles1').removeClass('open');
          $('#social-profiles1').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button1').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

  //item 2
  $(function() {
    $('#social-button2').click( function(){
      if ( $('#line2').hasClass('hide') ) {
          $('#line2').removeClass('hide');
      }
      else {
          $('#line2').removeClass('hide');
          $('#line2').addClass('hide');    
      }
    });
    $('#social-button2').click( function(){
      if ( $('#social-profiles2').hasClass('open') ) {
          $('#social-profiles2').removeClass('open');
      }
      else {
          $('#social-profiles2').removeClass('open');
          $('#social-profiles2').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button2').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

  //item 3
  $(function() {
    $('#social-button3').click( function(){
      if ( $('#line3').hasClass('hide') ) {
          $('#line3').removeClass('hide');
      }
      else {
          $('#line3').removeClass('hide');
          $('#line3').addClass('hide');    
      }
    });
    $('#social-button3').click( function(){
      if ( $('#social-profiles3').hasClass('open') ) {
          $('#social-profiles3').removeClass('open');
      }
      else {
          $('#social-profiles3').removeClass('open');
          $('#social-profiles3').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button3').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

  //item 4
  $(function() {
    $('#social-button4').click( function(){
      if ( $('#line4').hasClass('hide') ) {
          $('#line4').removeClass('hide');
      }
      else {
          $('#line4').removeClass('hide');
          $('#line4').addClass('hide');    
      }
    });
    $('#social-button4').click( function(){
      if ( $('#social-profiles4').hasClass('open') ) {
          $('#social-profiles4').removeClass('open');
      }
      else {
          $('#social-profiles4').removeClass('open');
          $('#social-profiles4').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button4').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

  //item 1-1
  $(function() {
    $('#social-button1-1').click( function(){
      if ( $('#line1-1').hasClass('hide') ) {
          $('#line1-1').removeClass('hide');
      }
      else {
          $('#line1-1').removeClass('hide');
          $('#line1-1').addClass('hide');    
      }
    });
    $('#social-button1-1').click( function(){
      if ( $('#social-profiles1-1').hasClass('open') ) {
          $('#social-profiles1-1').removeClass('open');
      }
      else {
          $('#social-profiles1-1').removeClass('open');
          $('#social-profiles1-1').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button1-1').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

  //item 2-1
  $(function() {
    $('#social-button2-1').click( function(){
      if ( $('#line2-1').hasClass('hide') ) {
          $('#line2-1').removeClass('hide');
      }
      else {
          $('#line2-1').removeClass('hide');
          $('#line2-1').addClass('hide');    
      }
    });
    $('#social-button2-1').click( function(){
      if ( $('#social-profiles2-1').hasClass('open') ) {
          $('#social-profiles2-1').removeClass('open');
      }
      else {
          $('#social-profiles2-1').removeClass('open');
          $('#social-profiles2-1').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button2-1').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

  //item 3-1
  $(function() {
    $('#social-button3-1').click( function(){
      if ( $('#line3-1').hasClass('hide') ) {
          $('#line3-1').removeClass('hide');
      }
      else {
          $('#line3-1').removeClass('hide');
          $('#line3-1').addClass('hide');    
      }
    });
    $('#social-button3-1').click( function(){
      if ( $('#social-profiles3-1').hasClass('open') ) {
          $('#social-profiles3-1').removeClass('open');
      }
      else {
          $('#social-profiles3-1').removeClass('open');
          $('#social-profiles3-1').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button3-1').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

  //item 4-1
  $(function() {
    $('#social-button4-1').click( function(){
      if ( $('#line4-1').hasClass('hide') ) {
          $('#line4-1').removeClass('hide');
      }
      else {
          $('#line4-1').removeClass('hide');
          $('#line4-1').addClass('hide');    
      }
    });
    $('#social-button4-1').click( function(){
      if ( $('#social-profiles4-1').hasClass('open') ) {
          $('#social-profiles4-1').removeClass('open');
      }
      else {
          $('#social-profiles4-1').removeClass('open');
          $('#social-profiles4-1').addClass('open');    
      }
    });
    var rotation = 0;
    $.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                  '-moz-transform' : 'rotate('+ degrees +'deg)',
                  '-ms-transform' : 'rotate('+ degrees +'deg)',
                  'transform' : 'rotate('+ degrees +'deg)'});
    };
    $('#social-button4-1').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
    });
  });

});

//Team Member Slider
$(function() {
  var slide1 = new Swiper('.team-member-slider', {
    loop: true,
    spaceBetween: 10,
    navigation: {
    nextEl: '.tmssa',
    prevEl: '.tmssb',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      415: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      }
    },
  });
});

/*============================ Blog Page ============================*/
//Blog Post Right Sidebar (Column reverse on screen size)
$(function() {
  function adjustClass() {
    var screenWidth = $(window).width();
    var $myDiv = $('#blog-post-rightbar');

    if (screenWidth < 768) {
      $myDiv.addClass('flex-column-reverse');
    } else {
      $myDiv.removeClass('flex-column-reverse');
    }
  }

  adjustClass();
  $(window).resize(adjustClass);
});

/*============================ Cart Page ============================*/
if($('.shipping-select').length){
  $('.shipping-select select').niceSelect();
}

/*============================ Checkout Page ============================*/
//Variant 1
if($('.checkout-section').length){
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

//Variant 2
if($('.checkout__v2__section').length){
  $('#COV2ShippingDetailsState').niceSelect();
}

$(function() {
  $('.checkoutv2__applypromo').on('click', function() {
    $('.checkoutv2__promoinput').toggleClass('show');
  });
  $('.checkoutv2__promo__close').on('click', function() {
    $('.checkoutv2__promoinput').removeClass('show');
  });
});

/*============================ Login & Register Page ============================*/
//Login & Registration Toggle
$(function() {
  // When Login button is clicked
  $('#login-btn').on('click', function() {
    // Buttons
    $(this).addClass('login-register-hidden').removeClass('login-register-visible');
    $('#register-btn').removeClass('login-register-hidden').addClass('login-register-visible');
    // Divs
    $('#login-form').addClass('log-reg-form-visible').removeClass('log-reg-form-hidden');
    $('#registration-form').addClass('log-reg-form-hidden').removeClass('log-reg-form-visible');
    // Text divs
    $('#content-for-registration-btn').addClass('content-for-log-reg-visible').removeClass('content-for-log-reg-hidden');
    $('#content-for-login-btn').addClass('content-for-log-reg-hidden').removeClass('content-for-log-reg-visible');
  });

  // When Register button is clicked
  $('#register-btn').on('click', function() {
    // Buttons
    $(this).addClass('login-register-hidden').removeClass('login-register-visible');
    $('#login-btn').removeClass('login-register-hidden').addClass('login-register-visible');
    // Divs
    $('#registration-form').addClass('log-reg-form-visible').removeClass('log-reg-form-hidden');
    $('#login-form').addClass('log-reg-form-hidden').removeClass('log-reg-form-visible');
    // Text divs
    $('#content-for-login-btn').addClass('content-for-log-reg-visible').removeClass('content-for-log-reg-hidden');
    $('#content-for-registration-btn').addClass('content-for-log-reg-hidden').removeClass('content-for-log-reg-visible');
  });
});

//Vendor Form Toggle
$(function() {
  $('#vendor').on('click',function() {
    $('#cutomer-vendor-vendor').addClass('show');
  })
  $('#customer').on('click',function() {
    $('#cutomer-vendor-vendor').removeClass('show');
  })
});

//Password Show and Hidden
$(function() {
  //Login form
  $('#log-show-pass').click(function(){
    if('password' == $('#login-password').attr('type')){
        $('#login-password').prop('type', 'text');
    }else{
        $('#login-password').prop('type', 'password');
    }
  });
  $('#log-show-pass').click(function() {
    if ($(this).hasClass('fa-eye')) {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });
  //Registeration form
  $('#regp-show-pass').click(function(){
    if('password' == $('#reg-password').attr('type')){
        $('#reg-password').prop('type', 'text');
    }else{
        $('#reg-password').prop('type', 'password');
    }
  });
  $('#regp-show-pass').click(function() {
    if ($(this).hasClass('fa-eye')) {
      $(this).removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      $(this).removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });
});

/*============================ Forgot Password Page ============================*/
$(function() {
  $('#forgotPasswordForm').submit(function(event) {
    event.preventDefault();
    var email = $('#acc-email').val();
    $('.forgot-pass-cont').children().not('.success-message').fadeOut(300, function() {
      $('.success-message').fadeIn(300);
    });
  });
});

/*============================ User Dashboard Page ============================*/
//Profile Pic upload
$(function() {
  $('#uimg-uploadBtn').on('click', function() {
    $('#uimg-uploadInput').click();
  });
  $('#uimg-uploadInput').on('change', function(e) {
    if (e.target.files && e.target.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#profilePic').attr('src', e.target.result);
      }
      reader.readAsDataURL(e.target.files[0]);
    }
  });
});

//Dashboard Area Counter
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

  $('.udb-count').each(function() {
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

//Edit Profile popup
$(function() {
  $('.info-edit-btn').magnificPopup({
    items: {
      src: '#editProfileForm',
      type: 'inline'
    },
    closeBtnInside: true,
  });
});

if ($('#editProfileForm').length) {
  $('.edit-profile-country').niceSelect();
  $('.edit-profile-city').niceSelect();
  $('.credit-card-type').niceSelect();
}

//Credit Card Area
$(function() {
  var resetDeletePopup = function() {
    $('#delete-popup p, #delete-popup button').show();
    $('.delete-success').hide();
  };
  $('.delete-success').hide();

  //Add Card Button
  $('#add-card-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });

  //Edit Button
  $('.edit-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });

  //Delete Button
  $('.delete-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    callbacks: {
      open: function() {
        resetDeletePopup();
      }
    }
  });

  $('.delete-yes').on('click', function() {
    $('#delete-popup p, #delete-popup button').fadeOut('slow', function() {
      $('.delete-success').fadeIn('slow', function() {
        setTimeout(function() {
          $.magnificPopup.close();
        }, 1000);
      });
    });
  });

  $('.delete-no').on('click', function() {
    $.magnificPopup.close();
  });
});

//Order area
$(function() {
  $('.order-prod-desc').each(function() {
    var words = $(this).text().split(' ');
    var truncatedText = words.slice(0, 15).join(' ');
    $(this).text(truncatedText + '...');
  });
});

//Address Area
$(function() {
  var resetDeletePopup = function() {
    $('#delete-address-popup p, #delete-address-popup button').show();
    $('.del-adrs-success').hide();
  };
  $('.del-adrs-success').hide();

  //Add Button
  $('#add-address-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });

  //Edit Button
  $('.address-edit').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });

  //Delete Button
  $('.address-delete').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    callbacks: {
      open: function() {
        resetDeletePopup();
      }
    }
  });

  $('.del-adrs-yes').on('click', function() {
    $('#delete-address-popup p, #delete-address-popup button').fadeOut('slow', function() {
      $('.del-adrs-success').fadeIn('slow', function() {
        setTimeout(function() {
          $.magnificPopup.close();
        }, 1000);
      });
    });
  });

  $('.del-adrs-no').on('click', function() {
    $.magnificPopup.close();
  });
});

//Security Area
$(function() {
  //Deactivate
  var resetDeletePopup = function() {
    $('#acc-dea-popup p, #acc-dea-popup button').show();
    $('.acc-dea-success').hide();
  };
  $('.acc-dea-success').hide();

  //Delete Button
  $('.acc-dea-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    callbacks: {
      open: function() {
        resetDeletePopup();
      }
    }
  });
  //Buttons inside
  $('.acc-dea-yes').on('click', function() {
    $('#acc-dea-popup p, #acc-dea-popup button').fadeOut('slow', function() {
      $('.acc-dea-success').fadeIn('slow', function() {
        setTimeout(function() {
          $.magnificPopup.close();
        }, 1000);
      });
    });
  });

  $('.acc-dea-no').on('click', function() {
    $.magnificPopup.close();
  });

  //Delete
  var resetDeletePopup = function() {
    $('#acc-del-popup p, #acc-del-popup button').show();
    $('.acc-del-success').hide();
  };
  $('.acc-del-success').hide();

  //Delete Button
  $('.acc-del-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    callbacks: {
      open: function() {
        resetDeletePopup();
      }
    }
  });
  //Buttons inside
  $('.acc-del-yes').on('click', function() {
    $('#acc-del-popup p, #acc-del-popup button').fadeOut('slow', function() {
      $('.acc-del-success').fadeIn('slow', function() {
        setTimeout(function() {
          $.magnificPopup.close();
        }, 1000);
      });
    });
  });

  $('.acc-del-no').on('click', function() {
    $.magnificPopup.close();
  });
});

/*============================ Seller Dashboard Page ============================*/
//Add, Edit, Delete Seller Product
$(function() {
  /*** Seller Product Area ***/
  //Add Button
  $('.seller-product-add-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });
  //Edit Button
  $('.seller-product-edit-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });
  //Delete Button
  $('.prod-dlt-btn').on('click', function() {
    $.magnificPopup.close();
  });

  /*** Seller Profile Area ***/
  //Edit Profile
  $('.seller-profile-edit-btn').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });
  //Change Password
  $('.change-seller-pass').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });
});

//Logout button
$(function() {
  var resetDeletePopup = function() {
    $('#seller-logout-popup p, #seller-logout-popup button').show();
    $('.seller-logout-success').hide();
  };
  $('.seller-logout-success').hide();

  //Delete Button
  $('.log-out-tab').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade',
    callbacks: {
      open: function() {
        resetDeletePopup();
      }
    }
  });
  //Buttons inside
  $('.seller-logout-yes').on('click', function() {
    $('#seller-logout-popup p, #seller-logout-popup button').fadeOut('slow', function() {
      $('.seller-logout-success').fadeIn('slow', function() {
        setTimeout(function() {
          $.magnificPopup.close();
        }, 1000);
      });
    });
  });

  $('.seller-logout-no').on('click', function() {
    $.magnificPopup.close();
  });
});

//Product Color Select
$(function() {
  let selectedColors = [];

  $('#colorPicker').change(function() {
    var color = $(this).val();
    selectedColors.push(color);
    displaySelectedColors();
  });

  function displaySelectedColors() {
    $('#selectedColors').empty();
    selectedColors.forEach(color => {
      var colorElement = `<span class="selectedColor" style="background-color: ${color}">
                              <button class="deleteColor">X</button>
                            </span>`;
      $('#selectedColors').append(colorElement);
    });
  }

  $(document).on('click', '.deleteColor', function() {
    var colorIndex = $(this).parent().index();
    selectedColors.splice(colorIndex, 1);
    displaySelectedColors();
  });
});

//Product Image Upload
$(function() {
  //Add Product
  $('#addProductImagesBtn').on('click', function() {
    $('#addproductimage').click();
  });

  $('#addproductimage').on('change', function(e) {
    var files = e.target.files;
    var imagePreview = $('#addproductimagereview');

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();

      reader.onload = (function(file) {
        return function(e) {
          var imgThumb = $('<div class="addproductimage-thumb"><button class="addproductimage-delete-btn">X</button><img></div>');
          imgThumb.find('img').attr('src', e.target.result);
          imagePreview.append(imgThumb);

          imgThumb.find('.addproductimage-delete-btn').on('click', function() {
            $(this).parent('.addproductimage-thumb').remove();
          });
        };
      })(file);

      reader.readAsDataURL(file);
    }
  });

  //Edit Product
  $('#editProductImagesBtn').on('click', function() {
    $('#editproductimage').click();
  });

  $('#editproductimage').on('change', function(e) {
    var files = e.target.files;
    var imagePreview = $('#addproductimagereview');

    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();

      reader.onload = (function(file) {
        return function(e) {
          var imgThumb = $('<div class="addproductimage-thumb"><button class="addproductimage-delete-btn">X</button><img></div>');
          imgThumb.find('img').attr('src', e.target.result);
          imagePreview.append(imgThumb);

          imgThumb.find('.addproductimage-delete-btn').on('click', function() {
            $(this).parent('.addproductimage-thumb').remove();
          });
        };
      })(file);

      reader.readAsDataURL(file);
    }
  });
});

//Seller Pie Chart
if ($('.seller-dashboard-page').length) {
  $(function() {
    //Pie Chart
    var options = {
      series: [200, 400, 147, 298],
      labels: ['Pending Orders', 'Completed Orders', 'Pending Payments', 'Received Payments'],
      colors: ['#FF0000', '#2639FF', '#FF497C', '#00A01A'],
      chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 375,
      options: {
        chart: {
          width: '100%',
          height: 300,
        },
        legend: {
          position: 'bottom'
          }
        }
      }]
    };
    var chart = new ApexCharts(document.querySelector("#sellerPie"), options);
    chart.render();

    //Area Chart
    var options = {
      chart: {
        type: 'area',
        stacked: true
      },
      series: [{
        name: 'Total Products',
        data: [10, 25, 35, 50, 55, 66, 80, 98, 125, 145, 180, 200]
      }, {
        name: 'Total Orders',
        data: [40, 150, 48, 210, 11, 42, 240, 300, 100, 120, 160, 200]
      }, {
        name: 'Total Sales',
        data: [19, 149, 40, 220, 0, 48, 200, 30, 100, 119, 190, 300]
      }, {
        name: 'Total Revenue',
        data: [10, 20, 25, 30, 35, 40, 45, 50, 60, 80, 90, 52]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
      },
      dataLabels: {
        enabled: true,
        formatter: function (value, { seriesIndex, dataPointIndex, w }) {
          if (w.globals.hoveredSeries !== seriesIndex) {
            return '';
          }
          return value;
        }
      },
      responsive: [{
        breakpoint: 375,
        options: {
          chart: {
            width: '100%',
            height: 300,
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };  
    var chart = new ApexCharts(document.querySelector("#sellerAreaChart"), options);
    chart.render();

  });
}

/*============================ Vendor List Page ============================*/
//Vendor Card Inside Slider
$(function() {
  var swiper7 = new Swiper(".vendor-list-slider", {
    navigation: {
      nextEl: ".vendor-list-slider-next",
      prevEl: ".vendor-list-slider-prev",
    },
    pagination: {
      el: ".vendor-list-slider-pagination",
    }
  });
});

//Grid List Area
$(function() {
  //Grid List Toggle Button
  $('.grid-list-toggle').on('click','span',function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  //Grid List CSS
  $('#grid-button').click(function() {
      $('#grid-list-area').removeClass('vendor-list-view').addClass('vendor-grid-view');
  });
  $('#list-button').click(function() {
      $('#grid-list-area').removeClass('vendor-grid-view').addClass('vendor-list-view');
  });
});

//Grid List Screen Breakpoint
$(function() {
  function adjustClass() {
    var screenWidth = $(window).width();
    var $myDiv = $('#grid-list-area');

    if (screenWidth < 576) {
      $myDiv.removeClass('vendor-grid-view').addClass('vendor-list-view');
    } else {
      $myDiv.removeClass('vendor-list-view').addClass('vendor-grid-view');
    }
  }

  adjustClass();
  $(window).resize(adjustClass);
});

/*============================ Home Style Three ============================*/
//Hero Section SLider
$(function(){
  var swiper8 = new Swiper(".hero-sec-slider", {
    loop: true,
    navigation: {
      nextEl: ".hero-sec-slider-next",
      prevEl: ".hero-sec-slider-prev",
    },
    pagination: {
      el: ".hero-sec-slider-pagination",
      clickable: true,
    },
  });
});

//Banner Ticker v1
$(function(){
  $(".header-top-banner").slideDown();
  $(".htb-close-btn").click(function(){
    $(".header-top-banner").slideUp();
  });
});

//Banner Ticker v2
$(function(){
  $(".header-top-banner-v2").slideDown();
  $(".htb-close-btn-v2").click(function(){
    $(".header-top-banner-v2").slideUp();
  });
});

//Purchase Notification
$(function() {
  //One
  var lastScrollTop = 0;
  var scrollThreshold = 2000;
  var isPopupVisible = false;

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > scrollThreshold && scrollTop > lastScrollTop && !isPopupVisible) {
      $('#purchase-notification').css('bottom', '20px');
      isPopupVisible = true;
    } else if (scrollTop < lastScrollTop && scrollTop < scrollThreshold && isPopupVisible) {
      $('#purchase-notification').css('bottom', '-200px');
      isPopupVisible = false;
    } else {
      $(".pn-cls-btn").click(function(){
        $('#purchase-notification').css('bottom', '-200px');
      isPopupVisible = false;
      });
    }

    lastScrollTop = scrollTop;
  });
});

/*============================ Mega Menu ============================*/
//Mega menu Sticky
$( function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop()){
      $("#header").addClass("sticky_animation")
    }else{
      $("#header").removeClass("sticky_animation")
    }
  })
});

//Mobile Mega Menu
$( function() {
  //get element for mobile menu
  $("#category_select_item").on("click", function() {
    let toggle = true;
    var toggle_close_btn = $("#toggle_close_btn");
    var toggle_open_btn = $("#toggle_open_btn");
    
    if (toggle) {
      toggle_close_btn.css("display", "unset");
      toggle_open_btn.css("display", "none");
      toggle = false;
    } else {
      toggle_close_btn.css("display", "none");
      toggle_open_btn.css("display", "block");
      toggle = true;
    }
  });

  //medium screen search bar
  var search_page_open_btn = $(".search_icon");
  var search_page_close_btn = $(".popup_search_close");
  var medium_search_page = $(".mobile_popup_search");

  //medium screen search bar handling
  search_page_open_btn.on("click", function() {
    medium_search_page.css({
      display: "flex",
      animation: "mobile_popup_open 1s alternate forwards ease-in",
      transition: "2s"
    });
  });
  search_page_close_btn.on("click", function() {
    medium_search_page.css({
      animation: "mobile_popup_close 1s alternate forwards ease-in",
      transition: "2s"
    });
  });
});

//Deal Today popup
$( function() {
  $('.deal-today-button').on('click',function() {
    $('.deal-today-popup').addClass('show');
  })
  $('.dtp-close-btn').on('click',function() {
    $('.deal-today-popup').removeClass('show');
  })
});

}) (jQuery);
