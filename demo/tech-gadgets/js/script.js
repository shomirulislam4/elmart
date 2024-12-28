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

//Custom Cursor
$(function(){
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

/*============================ Home Page ============================*/
//Preloader v2
$(function(){
  $(window).on("load",function(){
    $('#preloader-v2').delay(3200).fadeOut(500);
  });
  $('.pre-close-btn').on('click', function(){
    $('#preloader-v2').fadeOut(500);
  })
});

//Banner Ticker v2
$(function(){
  $(".header-top-banner-v2").slideDown();
  $(".htb-close-btn-v2").click(function(){
    $(".header-top-banner-v2").slideUp();
  });
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

/*============================ Shop Pages ============================*/
//Sorting Select Options
if ( $('.sorting-select').length ) {
  $('.sorting-select select').niceSelect();
}

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

//Shop Promo Hide
$('.promo-close-btn').on('click',function() {
  $('.left-bar-promo-wrapper').addClass('hide');
})

//New Arrival Product column change on breakpoint
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

//Shop Sidebar Mobile Toggle
$(function() {
  $('.shop-sidebar-mobile-toggle').on('click',function() {
    $('.shop-page-sidebar-wrapper').addClass('open');
  })
  $('.sidebar-mobile-close-btn').on('click',function() {
    $('.shop-page-sidebar-wrapper').removeClass('open');
  })
});

//////// Shop Page (List) ////////
//Filter Sidebar
$(function() {
  $('.shop-filter-sidebar-toggle').on('click',function() {
    $('.shop-page-filter-sidebar').addClass('open');
  })
  $('.sidebar-close-btn').on('click',function() {
    $('.shop-page-filter-sidebar').removeClass('open');
  })
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

/*============================ Shop Details ============================*/
//Write a Review Form Toggle
$('.rev-form-toggle').on('click', function(){
  $('.write_review').toggleClass('show');
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
