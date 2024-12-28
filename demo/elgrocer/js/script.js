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


/*============================ Home Page ============================*/
//All Select (Nice Select)
if ( $('.homepage__eight').length ) {
  $('.currency__dropdown').niceSelect();
  $('.PS7option').niceSelect();
  $('#sds7__units').niceSelect();
}

//Mobile Menu
$(function(){
  $('.h8__mobilemenu__btn').on('click', function(){
    $('.mobile-menu-style4').addClass('show')
  });
  $('.mobile-menu-4-close').on('click', function(){
    $('.mobile-menu-style4').removeClass('show')
  });

  //Mobile Menu - Sub Menu
  $('.mobile-submenu').on('click', function() {
    var submenu = $(this).find('.l2m-submenu');
    submenu.toggleClass('show');
  });
});

//Newsletter Popup
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

//Cart
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

//Hero Section Slider
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

//Testimonial Section
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

//Footer
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

/*============================ Shop Page ============================*/
//All Select (Nice Select)
if ( $('.checkout__page__variant__2').length ) {
  $('#COV2ShippingDetailsState').niceSelect();
}

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

/*============================ Shop Details ============================*/
//All Select (Nice Select)
if ( $('.cart__page__variant__2').length ) {
  $('#CSPcsCountry').niceSelect();
  $('#CSPcsState').niceSelect();
  $('#COV2ShippingDetailsState').niceSelect();
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

//Shipping Popup Button
$(function(){
  $('.calculate__shipping__btn').on('click', function(){
    $('.calculate__shipping__popup').addClass('show')
  });
  $('.csp__close__btn').on('click', function(){
    $('.calculate__shipping__popup').removeClass('show')
  })
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


}) (jQuery);
