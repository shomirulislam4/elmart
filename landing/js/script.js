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
    $('.cursor')
      .eq(0)
      .css({
      "left": e.pageX,
      "top": e.pageY - $(window).scrollTop()
    });
  });

  $("a, button").mouseenter(function(){
    $('.cursor').addClass('hover');
  })

  .mouseleave(function(){
    $('.cursor').removeClass('hover');
  });
});

/*============================ Main Scripts ============================*/
//Auto Nav Link Select
$(function() {
  var $navigationLinks = $('nav ul li a');
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
    
    $('nav ul li a[href="#' + currentSection.attr('id') + '"]').addClass('active');
  }
  
  $(window).on('scroll', function() {
    updateActiveClass();
  });
  
  $('nav ul li a').on('click', function(e) {
    e.preventDefault();
    var targetId = $(this).attr('href');
    var $targetSection = $(targetId);
    
    $('html, body').animate({
      scrollTop: $targetSection.offset().top
    }, 400);
  });
});

//Typer
$(function() {
  var typed = new Typed('#text-change', {
    strings: ['Multipurpose', 'Fashion', 'Electronics', 'Men Clothing', 'Women Clothing', 'Furniture', 'Grocery'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: ''
  });
});

//Demo Filter
$(function() {
  var $grid = $('.demo-contents').isotope({
    itemSelector: '.demo-items',
    layoutMode: 'fitRows'
  });

  // Filter by category - set 'home' category as default
  $grid.isotope({ filter: '.home' });

  // Filter by category
  $('.demo-filter').on('click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    $(this).addClass('active').siblings().removeClass('active');
  });

  //Mobile Toggle
  $('.show-btn').on('click', function(){
    $('.demo-filter').toggleClass('show');
  })

  // Search functionality
  $('.demo-search-box').on('submit', function(event) {
    event.preventDefault();

    var searchTerm = $('#demosearch').val().toLowerCase();

    var $captions = $('.demo-items figcaption');
    var hasMatch = false;

    $captions.each(function() {
      var captionText = $(this).text().toLowerCase();
      if (captionText.includes(searchTerm)) {
        hasMatch = true;
        return false;
      }
    });

    var $noResults = $('.no-results-message');
    if (!hasMatch) {
      $noResults.show();
    } else {
      $noResults.hide();
    }

    $grid.isotope({
      filter: function() {
        var captionText = $(this).find('figcaption').text().toLowerCase();
        return captionText.includes(searchTerm);
      }
    });
  });
});


//Demo Area Image Scroll
$(function() {
  $('.demo-items img').on('mouseenter', function() {
    var imgHeight = $(this).height();
    var containerHeight = $(this).parent().height();
    
    if (imgHeight > containerHeight) {
        $(this).css('transform', `translateY(-${imgHeight - containerHeight}px)`);
    }
  });

  $('.demo-items img').on('mouseleave', function() {
    $(this).css('transform', 'translateY(0)');
  });
});

//Features Slider
$(function() {
  var slide1 = new Swiper('.features-images', {
    loop: false,
    spaceBetween: 24,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
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
    },
  });
});

}) (jQuery);