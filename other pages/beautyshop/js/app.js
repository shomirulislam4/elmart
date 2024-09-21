new WOW().init();
//******************** */ swiper  **************************//
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});
//************** */ slick-slider **************** //
$(".slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
  ],
});
$(".owl-carousel").owlCarousel({
  items: 3,
  dots: true,
  dotsEach: true,
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    500: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1280: {
      items: 4,
    },
    1480: {
      items: 5,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var testimonialSlider = new Swiper(".testimonial-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    Infinity: true,
    autoplay: true,

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },

    // Pagination dots
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
