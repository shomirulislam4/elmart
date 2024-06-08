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

/*============================ Shop Details Slider Image ============================*/
//Image Slider / Trending Section (Home 4)
$(function(){
  //Slider
  var swiper6 = new Swiper(".trending-slider", {
    loop: true,
    navigation: {
      nextEl: ".ts-btn-next",
      prevEl: ".ts-btn-prev",
    },
    pagination: {
      el: ".ts-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return (
          '<span class="' +
          className +
          ' pagination-image" style="background-image: url(' +
          getPaginationImage(index) +
          ');"></span>'
        );
      },
    },
  });

  function getPaginationImage(index) {
    var images = [
      "image/home-four/trending-slider/img-thumb-1.png",
      "image/home-four/trending-slider/img-thumb-2.png",
      "image/home-four/trending-slider/img-thumb-3.png",
      "image/home-four/trending-slider/img-thumb-4.png",
    ];
    return images[index % images.length];
  }

  //Select Color
  $(".tr-color:not(.disabled)").click(function () {
    var selectedColor = $(this).data("color");
    $("#tr-selected-color").text("").css({
      "background-color": selectedColor,
      width: "20px",
      height: "20px",
      display: "block",
    });
  });
});

//Image Lightbox
$(function() {
  var initPhotoSwipeFromDOM = function(gallerySelector) {
      var parseThumbnailElements = function(el) {
          var thumbElements = $(el).find('.swiper-slide'),
              items = [],
              figureEl,
              linkEl,
              size,
              item;

          thumbElements.each(function() {
              figureEl = $(this);
              linkEl = figureEl.find('a')[0];
              size = linkEl.getAttribute('data-size').split('x');

              if (!figureEl.hasClass('ltbox_exclude')) {
                  item = {
                      src: linkEl.getAttribute('href'),
                      w: parseInt(size[0], 10),
                      h: parseInt(size[1], 10),
                      title: linkEl.getAttribute('title')
                  };
                  items.push(item);
              }
          });

          return items;
      };

      var openPhotoSwipe = function(index, galleryElement, disableAnimation) {
          var pswpElement = document.querySelectorAll('.pswp')[0],
              items = parseThumbnailElements(galleryElement),
              options = {
                  index: index,
                  bgOpacity: 0.7,
                  showHideOpacity: true,
                  timeToIdle: 0,
                  timeToIdleOutside: 0
              };

          if (disableAnimation) {
              options.showAnimationDuration = 0;
          }

          var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
          gallery.init();

          var closeButton = pswpElement.querySelector('.pswp__button--close');
          if (closeButton) {
              closeButton.addEventListener('click', function() {
                  gallery.close();
              });
          }
      };

      // Event listener for each image
      $(gallerySelector).on('click', 'a', function(event) {
          event.preventDefault();
          var index = $(this).parent('.swiper-slide').index();
          openPhotoSwipe(index, $(this).closest('.swiper-wrapper')[0]);
      });
  };

  // Execute for the gallery
  initPhotoSwipeFromDOM('#sdsi-img-lightbox');
});

//Write a Review Form Toggle
$('.rev-form-toggle').on('click', function(){
  $('.write_review').toggleClass('show');
});

//SDSI New Arrival Product column change on breakpoint
$(function() {
  function updateColumnClass() {
    var screenWidth = $(window).width();
    $('#sdsinapTabContent').each(function() {
      var $section = $(this);
      if (screenWidth <= 414) {
        $section.find('.col-6').removeClass('col-6').addClass('col-12');
      } else {
        $section.find('.col-12').removeClass('col-12').addClass('col-6');
      }
    });
  }
  updateColumnClass();
  $(window).resize(function() {
    updateColumnClass();
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

/*============================ Shop Page Style Three ============================*/
//Shop Filter Sidebar
$(function() {
  $('.shop-filter-sidebar-toggle').on('click',function() {
    $('.shop-page-filter-sidebar').addClass('open');
  })
  $('.sidebar-close-btn').on('click',function() {
    $('.shop-page-filter-sidebar').removeClass('open');
  })
});

//List to grid on screen breakpoint
$(function() {
  function adjustClass() {
    var screenWidth = $(window).width();
    var $myDiv = $('#grid-to-list-sps3');

    if (screenWidth < 576) {
      $myDiv.removeClass('shop-page-v3-list').addClass('shop-page-v3');
    } else {
      $myDiv.removeClass('shop-page-v3').addClass('shop-page-v3-list');
    }
  }

  adjustClass();
  $(window).resize(adjustClass);
});

//List to grid col class change
$(function() {
  function updateColumnClass() {
    var screenWidth = $(window).width();
    $('#sps3-col-class-cng').each(function() {
      var $section = $(this);
      if (screenWidth <= 576) {
        $section.find('.col-12').addClass('d-flex justify-content-center');
      } else {
        $section.find('.col-12').removeClass('d-flex justify-content-center');
      }
    });
  }
  updateColumnClass();
  $(window).resize(function() {
    updateColumnClass();
  });
});

/*============================ Home Style Four ============================*/
//Preloader v2
$(function(){
  $(window).on("load",function(){
    $('#preloader-v2').delay(3200).fadeOut(500);
  });
  $('.pre-close-btn').on('click', function(){
    $('#preloader-v2').fadeOut(500);
  })
});

//Sticky Header
$(function() {
  var lastScrollTop = 0;

  $(window).on("scroll", function() {
    var currentScrollTop = $(this).scrollTop();

    if (currentScrollTop > lastScrollTop){
      $("#sticky_header").addClass("sticky_header");
    } else {
      $("#sticky_header").removeClass("sticky_header");
    }

    lastScrollTop = currentScrollTop;
  });
});

//Mobile Menu (Header - Style Four)
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

//Search Box Toggle
$(function() {
  $('.srch-btn-h4').on('click',function() {
    $('.search-box').addClass('search-visibility');
  })
  $('.close-btn').on('click',function() {
    $('.search-box').removeClass('search-visibility');
  })
});

//Hero Section Slider
$(function() {
  //Main Slider
  var swiper9 = new Swiper(".hero-main-slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".hero-main-slider-btn-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero-main-slider-btn-next",
      prevEl: ".hero-main-slider-btn-prev",
    },
  });
  //Bottom Slider
  var swiper10 = new Swiper(".hero-in-bottom", {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      100: {
        slidesPerView: 1,
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
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    navigation: {
      nextEl: ".hero-in-bottom-btn-next",
      prevEl: ".hero-in-bottom-btn-prev",
    },
  });
});

//Category Section Slider
$(function() {
  var swiper11 = new Swiper(".cat-sldr-h4", {
    slidesPerView: 6,
    spaceBetween: 10,
    pagination: {
      el: ".cat-nav-dots",
      clickable: true,
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      }
    },
  });
});

//Featured Product (Variant 3) - Sliders
$(function() {
  function initSlickSlider(sliderElement) {
    $(sliderElement).slick({
      rows: 2,
      dots: false,
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 414,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
  }

  // Initialize the slider on page load
  initSlickSlider('.shop-product-items-v3');

  // Function to destroy Slick slider instances
  function destroySlickSlider(sliderElement) {
    if ($(sliderElement).hasClass('slick-initialized')) {
      $(sliderElement).slick('unslick');
    }
  }

  // Reinitialize the slider when a tab becomes active
  $('button[data-bs-toggle="pill"]').on('click', function (e) {
    var targetTab = $(this).data('bs-target'); // Get the target tab ID
    var sliderInTab = $(targetTab).find('.shop-product-items-v3');

    // Destroy existing slider instances
    $('.shop-product-items-v3').each(function() {
      destroySlickSlider(this);
    });

    // If the slider exists in the targeted tab, initialize it
    if (sliderInTab.length) {
      initSlickSlider(sliderInTab);
    }
  });

  // Custom Next and Previous Button
  $('.fp-prod-prev').click(function(){
    $('.shop-product-items-v3').slick('slickPrev');
  });

  $('.fp-prod-next').click(function(){
    $('.shop-product-items-v3').slick('slickNext');
  });
});

//Featured Product (Variant 3) Product Color Change
$(function() {
  // Product 1
  $('.fpv3-cng-img1-btn1').on('click', function(){
    $('#fpv3-cng-img-1').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/drone.png').fadeIn('fast');
    });
  });

  // Product 2
  $('.fpv3-cng-img2-btn1').on('click', function(){
    $('#fpv3-cng-img-2').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones1.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img2-btn2').on('click', function(){
    $('#fpv3-cng-img-2').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones1-2.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img2-btn3').on('click', function(){
    $('#fpv3-cng-img-2').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones1-3.png').fadeIn('fast');
    });
  });

  // Product 3
  $('.fpv3-cng-img3-btn1').on('click', function(){
    $('#fpv3-cng-img-3').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img3-btn2').on('click', function(){
    $('#fpv3-cng-img-3').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1-2.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img3-btn3').on('click', function(){
    $('#fpv3-cng-img-3').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1-3.png').fadeIn('fast');
    });
  });

  // Product 4
  $('.fpv3-cng-img4-btn1').on('click', function(){
    $('#fpv3-cng-img-4').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/drone2.png').fadeIn('fast');
    });
  });

  // Product 5
  $('.fpv3-cng-img5-btn1').on('click', function(){
    $('#fpv3-cng-img-5').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/laptops1.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img5-btn2').on('click', function(){
    $('#fpv3-cng-img-5').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/laptops1-2.png').fadeIn('fast');
    });
  });

  // Product 6
  $('.fpv3-cng-img6-btn1').on('click', function(){
    $('#fpv3-cng-img-6').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones2.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img6-btn2').on('click', function(){
    $('#fpv3-cng-img-6').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones2-2.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img6-btn3').on('click', function(){
    $('#fpv3-cng-img-6').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones2-3.png').fadeIn('fast');
    });
  });

  //Product 7
  $('.fpv3-cng-img7-btn1').on('click', function(){
    $('#fpv3-cng-img-7').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones2.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img7-btn2').on('click', function(){
      $('#fpv3-cng-img-7').fadeOut('fast', function() {
          $(this).attr('src', 'image/home-four/featured-product/headphones2-2.png').fadeIn('fast');
      });
  });
  $('.fpv3-cng-img7-btn3').on('click', function(){
      $('#fpv3-cng-img-7').fadeOut('fast', function() {
          $(this).attr('src', 'image/home-four/featured-product/headphones2-3.png').fadeIn('fast');
      });
  });

  //Product 8
  $('.fpv3-cng-img8-btn1').on('click', function(){
    $('#fpv3-cng-img-8').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/laptops2.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img8-btn2').on('click', function(){
      $('#fpv3-cng-img-8').fadeOut('fast', function() {
          $(this).attr('src', 'image/home-four/featured-product/laptops2-2.png').fadeIn('fast');
      });
  });

  // Product 9
  $('.fpv3-cng-img9-btn1').on('click', function(){
    $('#fpv3-cng-img-9').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img9-btn2').on('click', function(){
    $('#fpv3-cng-img-9').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1-2.png').fadeIn('fast');
    });
  });
  $('.fpv3-cng-img9-btn3').on('click', function(){
    $('#fpv3-cng-img-9').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1-3.png').fadeIn('fast');
    });
  });

  // Product 10
  $('.fpv3-cng-img10-btn1').on('click', function(){
    $('#fpv3-cng-img-10').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/drone2.png').fadeIn('fast');
    });
  });

});

//Featured Product (Variant 3) - Column Reverse on Screen Size
$(function() {
  function adjustClass() {
    var screenWidth = $(window).width();
    var $myDiv = $('#fp-col-cng');
    if (screenWidth < 992) {
        $myDiv.addClass('flex-column-reverse');
    } else {
        $myDiv.removeClass('flex-column-reverse');
    }
  }
  adjustClass();
  $(window).resize(adjustClass);

});

//Promo Code Copy
$(function() {
  var clipboard = new ClipboardJS('.copy-btn', {
    text: function() {
      return $('.elm-code').text();
    }
  });

  clipboard.on('success', function(e) {
    alert('Promo Code Copied!');
    e.clearSelection();
  });

  clipboard.on('error', function(e) {
    alert('Failed to copy code. Please select and copy manually.');
  });
});

//Best Deals Today Prod Color Change
$(function(){
  // Product 1
  $('.bdt-cng-img1-btn1').on('click', function(){
    $('#bdt-cng-img-1').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/drone.png').fadeIn('fast');
    });
  });

  // Product 2
  $('.bdt-cng-img2-btn1').on('click', function(){
    $('#bdt-cng-img-2').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones1.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img2-btn2').on('click', function(){
    $('#bdt-cng-img-2').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones1-2.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img2-btn3').on('click', function(){
    $('#bdt-cng-img-2').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones1-3.png').fadeIn('fast');
    });
  });

  // Product 3
  $('.bdt-cng-img3-btn1').on('click', function(){
    $('#bdt-cng-img-3').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img3-btn2').on('click', function(){
    $('#bdt-cng-img-3').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1-2.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img3-btn3').on('click', function(){
    $('#bdt-cng-img-3').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones1-3.png').fadeIn('fast');
    });
  });

  // Product 4
  $('.bdt-cng-img4-btn1').on('click', function(){
    $('#bdt-cng-img-4').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/drone2.png').fadeIn('fast');
    });
  });

  // Product 5
  $('.bdt-cng-img5-btn1').on('click', function(){
    $('#bdt-cng-img-5').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/laptops1.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img5-btn2').on('click', function(){
    $('#bdt-cng-img-5').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/laptops1-2.png').fadeIn('fast');
    });
  });

  // Product 6
  $('.bdt-cng-img6-btn1').on('click', function(){
    $('#bdt-cng-img-6').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones2.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img6-btn2').on('click', function(){
    $('#bdt-cng-img-6').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones2-2.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img6-btn3').on('click', function(){
    $('#bdt-cng-img-6').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/smartphones2-3.png').fadeIn('fast');
    });
  });

  //Product 7
  $('.bdt-cng-img7-btn1').on('click', function(){
    $('#bdt-cng-img-7').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/headphones2.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img7-btn2').on('click', function(){
      $('#bdt-cng-img-7').fadeOut('fast', function() {
          $(this).attr('src', 'image/home-four/featured-product/headphones2-2.png').fadeIn('fast');
      });
  });
  $('.bdt-cng-img7-btn3').on('click', function(){
      $('#bdt-cng-img-7').fadeOut('fast', function() {
          $(this).attr('src', 'image/home-four/featured-product/headphones2-3.png').fadeIn('fast');
      });
  });

  //Product 8
  $('.bdt-cng-img8-btn1').on('click', function(){
    $('#bdt-cng-img-8').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/featured-product/laptops2.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img8-btn2').on('click', function(){
      $('#bdt-cng-img-8').fadeOut('fast', function() {
          $(this).attr('src', 'image/home-four/featured-product/laptops2-2.png').fadeIn('fast');
      });
  });

  // Product 9
  $('.bdt-cng-img9-btn1').on('click', function(){
    $('#bdt-cng-img-9').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/best-deals-today/iphone15-1.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img9-btn2').on('click', function(){
    $('#bdt-cng-img-9').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/best-deals-today/iphone15-2.png').fadeIn('fast');
    });
  });
  $('.bdt-cng-img9-btn3').on('click', function(){
    $('#bdt-cng-img-9').fadeOut('fast', function() {
        $(this).attr('src', 'image/home-four/best-deals-today/iphone15-3.png').fadeIn('fast');
    });
  });

});

//Best Deals Today column change on breakpoint
$(function() {
  function updateColumnClass() {
    var screenWidth = $(window).width();
    $('#bdtwTabContent').each(function() {
      var $section = $(this);
      if (screenWidth <= 414) {
        $section.find('.col-6').removeClass('col-6').addClass('col-12');
      } else {
        $section.find('.col-12').removeClass('col-12').addClass('col-6');
      }
    });
  }
  updateColumnClass();
  $(window).resize(function() {
    updateColumnClass();
  });
});

//New Arrival Product column change on breakpoint
$(function() {
  function updateColumnClass() {
    var screenWidth = $(window).width();
    $('#napTabContent').each(function() {
      var $section = $(this);
      if (screenWidth <= 414) {
        $section.find('.col-6').removeClass('col-6').addClass('col-12');
      } else {
        $section.find('.col-12').removeClass('col-12').addClass('col-6');
      }
    });
  }
  updateColumnClass();
  $(window).resize(function() {
    updateColumnClass();
  });
});

//Recently Viewed Products
$(function() {
  $('.rvp-sliders').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Custom Next and Previous Button
  $('.rvp-slider-prev').click(function(){
    $('.rvp-sliders').slick('slickPrev');
  });

  $('.rvp-slider-next').click(function(){
    $('.rvp-sliders').slick('slickNext');
  });
});

/*============================ Shop Product Style (Variant 5) ============================*/
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

/*============================ Shop Details Page (Style 4) ============================*/
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

/*============================ Home Style Five ============================*/
//Preloader v2
$(function(){
  $(window).on("load",function(){
    $('.preloader-v3').delay(1200).fadeOut(500);
  });
  $('.pv3-close').on('click', function(){
    $('.preloader-v3').fadeOut(500);
  })
});

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

  // Initialize the slider on page load
  initSlickSlider('.shop-product-items-v4');

  // Function to destroy Slick slider instances
  function destroySlickSlider(sliderElement) {
    if ($(sliderElement).hasClass('slick-initialized')) {
      $(sliderElement).slick('unslick');
    }
  }

  // Reinitialize the slider when a tab becomes active
  $('button[data-bs-toggle="tab"]').on('click', function (e) {
    var targetTab = $(this).data('bs-target');
    var sliderInTab = $(targetTab).find('.shop-product-items-v4');

    // Destroy existing slider instances
    $('.shop-product-items-v4').each(function() {
      destroySlickSlider(this);
    });

    // If the slider exists in the targeted tab, initialize it
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

/*============================ Home Style Six ============================*/
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

/*============================ Shop Details Page (Style 5) ============================*/
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

//Review Form
$(function () {
  $(".sds7__reviewrating").rateYo({
    rating: 0,
    fullStar: true,
    starWidth: "18px",
    ratedFill: "#13172B"
  });
});

/*============================ Home Style Seven ============================*/
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

/*============================ Shop Details 6 & Shop Page 6 ============================*/
//Review Form v3 Toggle
$(function() {
  $('#RevFormV3Toggle').on('click',function() {
    $('.review__form__v3').toggleClass('show');
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

/*============================ Home Style Eight ============================*/
//All Select (Nice Select Js)
if ( $('.homepage__eight').length ) {
  $('.currency__dropdown').niceSelect();
  $('.PS7option').niceSelect();
  $('#sds7__units').niceSelect();
}

//Newsletter Popup (Variant 3)
$(function(){
  var currentIndex = 0;
  var scrollThreshold = 3600;
  var isScrollTriggered = false;

  function nwsltrv3PopupScroll() {
    if (!isScrollTriggered && $(window).scrollTop() > scrollThreshold) {
      isScrollTriggered = true;
      $(".newsletter__popup__v3").addClass('show');
    }
  }

  nwsltrv3PopupScroll();
  $(window).scroll(function() {
    nwsltrv3PopupScroll();
  });

  $('.nwsltrpopv3__close__btn').on('click', function() {
    $('.newsletter__popup__v3').removeClass('show');
  });
});

//Preloader v6
$(function(){
  $(window).on("load",function(){
    $('#preloader__v6').delay(3200).fadeOut(500);
  });
  $('.plv6__close__btn').on('click', function(){
    $('#preloader__v6').fadeOut(500);
  })
});

//Mega Menu Slider
$(function(){
  var swiper = new Swiper('.megamenu__slider__area', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    navigation: {
      nextEl: '.megamenu__sldrnav__next',
      prevEl: '.megamenu__sldrnav__prev',
    },
    breakpoints: {
      992: {
        spaceBetween: 10,
      }
    }
  });
});

//Cart Shake Animation
$(function() {
  function CartAnimDelay() {
    $('#cartShakeAnimation').addClass('cart__shake__animation');

    setTimeout(function() {
      $('#cartShakeAnimation').removeClass('cart__shake__animation');
      setTimeout(CartAnimDelay, 1000);
    }, 1000);
  }

  CartAnimDelay();
});

//Cart (Variant 2)
$(function(){
  $('.cart__v2__button').on('click', function(){
    $('.cart__v2').addClass('show')
  });
  $('.cart__v2__close').on('click', function(){
    $('.cart__v2').removeClass('show')
  });

  function CartAnimDelay() {
    $('.cart__v2__button i').addClass('cart__v2__animation');

    setTimeout(function() {
      $('.cart__v2__button i').removeClass('cart__v2__animation');
      setTimeout(CartAnimDelay, 1500);
    }, 1000);
  }

  CartAnimDelay();
});

//Hero Section (Variant 8) Slider
$(function() {
  var swiper = new Swiper(".hs8__slider", {
    loop: true,
    pagination: {
      el: ".hs8__slider__dots",
      clickable: true,
    },
  });
});

//category section
$(function() {
  var swiper = new Swiper(".catsec__v2__slider", {
    slidesPerView: 6,
    spaceBetween: 0,
    navigation: {
      nextEl: ".catsec__v2__slider__next",
      prevEl: ".catsec__v2__slider__prev",
    },
    pagination: {
      el: ".catsec__v2__slider__dots",
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 6,
      },
      1200: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      415: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      }
    }
  });
});

//Testimonial Section V5
$(function() {
  var swiper = new Swiper(".tsv5__slider", {
    speed: 500,
    loop: true,
    pagination: {
      el: ".tsv5__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tsv5__button__next",
      prevEl: ".tsv5__button__prev",
    },
  });
});

//Footer v4
$(function(){
  function adjustColumns() {
      if ($(window).width() < 415) {
          $(".footer__widget__v4").removeClass("col-6");
      } else {
          $(".footer__widget__v4").addClass("col-6");
      }
  }
  
  adjustColumns();

  $(window).resize(function(){
      adjustColumns();
  });
});

//Section Navigator
$(function() {
  //auto navigation
  var $navigationLinks = $('.section__navigator li a');
  var $sections = $('section');
  
  function getCurrentSection(scrolled) {
    var currentSection;
    $sections.each(function() {
      var sectionTop = $(this).offset().top - 5;
      if (scrolled >= sectionTop) {
        currentSection = $(this);
      }
    });
    return currentSection;
  }
  
  function updateActiveClass() {
    var scrolled = $(window).scrollTop();
    var currentSection = getCurrentSection(scrolled);
    
    $navigationLinks.removeClass('active');
    
    $('.section__navigator li a[href="#' + currentSection.attr('id') + '"]').addClass('active');
  }
  
  $(window).on('scroll', function() {
    updateActiveClass();
  });
  
  $('.section__navigator li a').on('click', function(e) {
    e.preventDefault();
    var targetId = $(this).attr('href');
    var $targetSection = $(targetId);
    
    $('html, body').animate({
      scrollTop: $targetSection.offset().top
    }, 400);
  });

  //navigation bar show/hide
  $('.section__navigator__toggler').click(function() {
    $('.section__navigator').toggleClass('show');
  });

  $(document).click(function(event) {
      const navigator = $('.section__navigator');
      const toggler = $('.section__navigator__toggler');
      const isClickInsideNavigator = navigator.is(event.target) || navigator.has(event.target).length > 0;
      const isClickInsideToggler = toggler.is(event.target) || toggler.has(event.target).length > 0;

      if (!isClickInsideNavigator && !isClickInsideToggler) {
          navigator.removeClass('show');
      }
  });
});

//Sale Bagde Notifications
$(function(){
  var items = $(".sale__badge__item");
  var currentIndex = 0;
  var scrollThreshold = 1080;
  var isScrollTriggered = false;

  function showNextItem() {
    items.hide();
    items.eq(currentIndex).fadeIn(1000);
    currentIndex = (currentIndex + 1) % items.length;
  }

  function checkScrollPosition() {
    if (!isScrollTriggered && $(window).scrollTop() > scrollThreshold) {
      isScrollTriggered = true;
      showNextItem();
      setInterval(showNextItem, 10000);
      items.css('left', '0');
    }
  }

  checkScrollPosition();
  $(window).scroll(function() {
    checkScrollPosition();
  });

  $(".sbv2__close__btn").click(function() {
    var item = $(this).closest(".sale__badge__item");
    item.hide();
  });
});

//Deal of the week slider
$(function(){
  var swiper = new Swiper(".dotw__middle__slider", {
    loop: true,
    spaceBetween: 10,
    pagination: {
      el: ".dotw__slider__pagination",
      clickable: true,
    },
  });
});

//Login Register Popup
$(function(){
  //Login Register Popup
  $('.h8__logreg__popup__button').on('click', function(){
    $('.login__register__popup').addClass('show')
  });
  $('.logregpop__close__btn').on('click', function(){
    $('.login__register__popup').removeClass('show')
  });

  /* Login Area */
    //Input Field
    $('.h8__pass__showhide__toggle').click(function(){
      if('password' == $('.h8__logreg__passshowhide').attr('type')){
          $('.h8__logreg__passshowhide').prop('type', 'text');
      }else{
          $('.h8__logreg__passshowhide').prop('type', 'password');
      }
    });

    //Toggle Button
    $('.ShowPassBtn').on('click', function(){
      $('.h8lrpPassField').addClass('showpass')
    });
    $('.HidePassBtn').on('click', function(){
      $('.h8lrpPassField').removeClass('showpass')
    });

    //Login Area Show/Hide
    $('.login__form__button').on('click', function(){
      $('.login__register__popup .right__side').addClass('user__login')
      $('.login__register__popup .right__side').removeClass('user__register')
      $('.login__register__popup .right__side').removeClass('user__reset')
    });

  /* Register Area */
    //Input Field
    $('.h8__confpass__showhide__toggle').click(function(){
      if('password' == $('.h8__logreg__confpassshowhide').attr('type')){
          $('.h8__logreg__confpassshowhide').prop('type', 'text');
      }else{
          $('.h8__logreg__confpassshowhide').prop('type', 'password');
      }
    });

    //Toggle Button
    $('.ConfShowPassBtn').on('click', function(){
      $('.Confh8lrpPassField').addClass('showpass')
    });
    $('.ConfHidePassBtn').on('click', function(){
      $('.Confh8lrpPassField').removeClass('showpass')
    });

    //Register Area Show/Hide
    $('.register__form__button').on('click', function(){
      $('.login__register__popup .right__side').addClass('user__register')
      $('.login__register__popup .right__side').removeClass('user__login')
    });

  /* Reset Area */
    $('.forgot__password').on('click', function(){
      $('.login__register__popup .right__side').addClass('user__reset')
      $('.login__register__popup .right__side').removeClass('user__login')
      $('.login__register__popup .right__side').removeClass('user__register')
    });
});

//Register Popup Vendor Register
$(function() {
  function toggleRequiredFields(required) {
      $('#h8__RegisterSName, #h8__RegisterSURL, #h8__RegisterSContactNumber, #h8__RegisterSAddress')
          .prop('required', required);
  }

  toggleRequiredFields(false);

  $('input[name="h8__Register"]').change(function() {
      if ($('#h8__RegisterVendor').is(':checked')) {
          $('.vendor__info__fields').slideDown().css('display', 'flex');
          toggleRequiredFields(true);
      } else {
          $('.vendor__info__fields').slideUp();
          toggleRequiredFields(false);
      }
  });
});

/*============================ Shop Product Style (Variant 7) ============================*/
//Sidebar Tag Cloud
$(function(){
  $('.tag__clouds button').click(function(){
      $(this).toggleClass('active');
  });
});

//Nice Select
if ( $('.shop__page__seven').length ) {
  $('#sp7ProductSorting').niceSelect();
}

//Grid - list view changer
$(function() {
  //grid List View Toggler
  $('#sp7__grid__btn').click(function() {
    $('#shopSectionTabContent .product__style7').removeClass('sp7__list__view');
  });
  $('#sp7__list__btn').click(function() {
      $('#shopSectionTabContent .product__style7').addClass('sp7__list__view');
  });

  //'active' class toggle
  $('.grid__change__buttons button').click(function() {
    $('.grid__change__buttons button').removeClass('active');
    $(this).addClass('active');
  });

  function adjustClass() {
    var screenWidth = $(window).width();
    if (screenWidth <= 575) {
      $('#shopSectionTabContent .product__style7').removeClass('sp7__list__view');
    }
  }

  adjustClass();
  $(window).resize(adjustClass);
});

//Sidebar show/hide
$(function(){
  $('.sp7__filter__button').on('click', function(){
    $('.sp7__sidebar__area').addClass('show')
  });
  $('.sp7__sidebar__close').on('click', function(){
    $('.sp7__sidebar__area').removeClass('show')
  })
});

/*============================ Shop Details (Style 7) ============================*/
//All Select (Nice Select Js)
if ( $('.cart__page__variant__2').length ) {
  $('#CSPcsCountry').niceSelect();
  $('#CSPcsState').niceSelect();
}

//Product Image Slider
$(function(){
  var sds7sliderthumb = new Swiper(".sds7__product__image__slider1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var sds7slidermain = new Swiper(".sds7__product__image__slider2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".sds7__imgsldr__btn__next",
      prevEl: ".sds7__imgsldr__btn__prev",
    },
    thumbs: {
      swiper: sds7sliderthumb,
    },
  });
});

//Cart Page Quantity Price Multiplier
$(function() {
  $('.quantity-controls-v2').each(function() {
      const $decreaseBtn = $(this).find('.quantity-decrease-v2');
      const $increaseBtn = $(this).find('.quantity-increase-v2');
      const $display = $(this).find('.quantity-display-v2');
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

//Shipping Popup Button
$(function(){
  $('.calculate__shipping__btn').on('click', function(){
    $('.calculate__shipping__popup').addClass('show')
  });
  $('.csp__close__btn').on('click', function(){
    $('.calculate__shipping__popup').removeClass('show')
  })
});

}) (jQuery);
