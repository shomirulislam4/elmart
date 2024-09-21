
//search bar
const search_input_area = document.querySelector("#search_input");
const search_suggestion = document.querySelector(".search_suggestion")
const close_btn = document.querySelector(".search_close");
const search_container = document.querySelector(".search_bar");
const show_button = document.querySelectorAll(".search_icon");


search_input_area.addEventListener("focus", () => {
  search_suggestion.style.animation = "fade_top 1s ease-out forwards alternate";
})

//show searh bar 
show_button.forEach(btn => {
  btn.addEventListener("click", () => {
    search_container.style.animation = "show_searchbar 1s ease-out forwards alternate";
    document.body.style.overflow = "hidden";
  })
})

//hide search bar
close_btn.addEventListener("click", () => {
  search_container.style.animation = "fade_down 1s ease-out forwards alternate";
  document.body.style.overflow = "auto";
  search_suggestion.style.animation = "none";
})


// cookies accept button function
const cookies_button = document.querySelector(".open_btn");
const cookies_area = document.querySelector(".cookies_alert");
const close_button = document.querySelector(".close_btn")


//preloader
const preloader_area = document.querySelector(".preloader")
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader_area.style.display = "none"
  }, 2000)
  close_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
  })
  cookies_area.style.animation = "cookies_open 2s ease-in 2s forwards alternate";
  cookies_button.addEventListener("click", () => {
    cookies_area.style.animation = "cookies_close 2s ease-in-out  forwards alternate"
  })
})

//sticky header script
$(document).ready(() => {
  const heroSectionBottom = $(".product_top").offset().top + $(".product_top").outerHeight();
  $(window).on("scroll", () => {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition >= (heroSectionBottom)) {
      $("#header").addClass("sticky_animation");
    } else {
      $("#header").removeClass("sticky_animation");
    }
  });
});

//get elements
const optionMenu = document.querySelectorAll(".currency_option li");
const option_value = document.querySelector(".value_area");
const language_option = document.querySelectorAll(".ln_option li")
const language_value = document.querySelector(".ln_value");
optionMenu.forEach(item => {
  item.addEventListener("click", () => {
    option_value.textContent = item.textContent;
  })
})
language_option.forEach(ln_item => {
  ln_item.addEventListener("click", () => {
    language_value.textContent = ln_item.textContent;
  })
})
// accordian script
$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});

//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");
increase_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let inputValue = parseInt(cart_value_input[index].value);
    cart_value_input[index].value = inputValue + 1;

  })
})
decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let input_value = parseInt(cart_value_input[index].value);
    if (input_value > 1)
      cart_value_input[index].value = input_value - 1;
  })
})

// cart popup handling
const cart_close_btn = document.querySelector(".cart_popup_close");
const cart_popup_area = document.querySelector(".cart_popup")
const cart_btn = document.querySelector(".cart_btn");
cart_btn.addEventListener("click", () => {
  cart_popup_area.style.display = "flex";
  cart_popup_area.style.opacity = "1";
  document.body.style.overflow = "hidden";
})

cart_close_btn.addEventListener("click", () => {
  cart_popup_area.style.display = "none";
  cart_popup_area.style.opacity = "0";
  document.body.style.overflow = "auto";
})

const cart_btn_area = document.querySelectorAll(".cart_p_area");
const cart_btn_visible = document.querySelectorAll(".cart_add_btn");

cart_btn_area.forEach(area => {
  area.addEventListener("mouseover", () => {
    const index = Array.from(cart_btn_area).indexOf(area);
    const targetBtn = cart_btn_visible[index];

    targetBtn.style.animation = "text_anim .5s ease-in-out forwards alternate";
  });

  area.addEventListener("mouseleave", () => {
    const index = Array.from(cart_btn_area).indexOf(area);
    const targetBtn = cart_btn_visible[index];

    targetBtn.style.animation = "text_anim_leave .5s ease-in-out forwards alternate";
  });
});


const quick_view_area = document.querySelector(".quick_view_popup")
const quick_view_btn = document.querySelector(".close_quick_view")
const quick_view_open = document.querySelectorAll(".quick_view_btn");
quick_view_open.forEach(btn => {
  btn.addEventListener("click", () => {
    quick_view_area.style.display = "flex"
  })
})
// const quick_view_btn = document.querySelector(".close_quick_view")
quick_view_btn.addEventListener("click" , () => {
  quick_view_area.style.display = "none"
})



//script for adding gallary
var swiper = new Swiper(".mySwiper3", {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination3",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 3,
      spaceBetween: 10
    },

  }
})
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  thumbs: {
    swiper: swiper,
  }
}
);
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px

    576: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 10
    }

  }
}
);
//script for adding gallary
var swiper = new Swiper(".mySwiper4", {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination4",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    380: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 480px
    668: {
      slidesPerView: 3,
      spaceBetween: 10
    },

  }
})
var swiper2 = new Swiper(".mySwiper5", {
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next5",
    prevEl: ".swiper-button-prev5",
  },
  thumbs: {
    swiper: swiper,
  }
}
);