const preloader_area = document.querySelector(".preloader")
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader_area.style.display = "none"
  }, 2000)
})


//for select item
const select_option = document.querySelectorAll(".category_option ul li")
const select_field = document.querySelectorAll(".field_value");
select_option.forEach(option => {
  option.addEventListener("click", () => {
    // Remove style from previously selected option
    select_option.forEach(otherOption => {
      otherOption.style.background = "";
      otherOption.style.color = "";
    });
    option.style.background = "var(--color-two)";
    option.style.color = "var(--color-three)";

    select_field.forEach(field => {
      field.textContent = option.textContent;
    });
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


// shop script start*****

//product view handling
const grid_view = document.querySelector(".grid2_view");
const list_view = document.querySelector(".list_view");
const grid_view3 = document.querySelector(".grid3_view");
const single_p_product = document.querySelectorAll(".shop_single_product");
const single_p_img = document.querySelectorAll(".shop_product_img");
const single_p_info = document.querySelectorAll(".shop_product_info");
const single_p_container = document.querySelector(".product_container_body");

list_view.addEventListener("click", () => {
  function adjustGrid2Layout() {

    if (window.matchMedia("(max-width: 856px)").matches) {
      single_p_container.style.gridTemplateColumns = "1fr";
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
      single_p_container.style.gridTemplateColumns = "1fr 1fr";
    }
    else {
      single_p_container.style.gridTemplateColumns = "1fr 1fr";
    }
  }

  // Initial adjustment when the page loads
  adjustGrid2Layout();

  // Event listener for window resize
  window.addEventListener("resize", adjustGrid2Layout);

  single_p_product.forEach(pdc => {
    pdc.style.flexDirection = "row"
  })
  single_p_img.forEach(img => {
    img.classList.remove("grid_img")
  })
  single_p_info.forEach(info => {
    info.classList.remove("grid_info")
  })
})

grid_view3.addEventListener("click", () => {
  function adjustGrid3Layout() {

    if (window.matchMedia("(max-width: 856px)").matches) {
      single_p_container.style.gridTemplateColumns = "1fr";
    } else if (window.matchMedia("(max-width: 1200px)").matches) {
      single_p_container.style.gridTemplateColumns = "1fr 1fr";
    }
    else {
      single_p_container.style.gridTemplateColumns = "1fr 1fr 1fr";
    }
  }

  // Initial adjustment when the page loads
  adjustGrid3Layout();

  // Event listener for window resize
  window.addEventListener("resize", adjustGrid3Layout);

  single_p_product.forEach(pdc => {
    pdc.style.flexDirection = "row"
  })
  single_p_img.forEach(img => {
    img.classList.remove("grid_img")

  })
  single_p_info.forEach(info => {
    info.classList.remove("grid_info")
  })
})

grid_view.addEventListener("click", () => {

  single_p_product.forEach(pdc => {
    pdc.style.flexDirection = "column"
  })
  single_p_img.forEach(img => {
    img.classList.add("grid_img")
  })
  single_p_info.forEach(info => {
    info.classList.add("grid_info")
  })
  function adjustGridLayout() {
    single_p_info.forEach(info => {
      if (info.className.includes("grid_info")) {
        if (window.matchMedia("(max-width: 660px)").matches) {
          single_p_container.style.gridTemplateColumns = "1fr";
        } else if (window.matchMedia("(max-width: 860px)").matches) {
          single_p_container.style.gridTemplateColumns = "1fr 1fr";
        } else if (window.matchMedia("(max-width: 1024px)").matches) {
          single_p_container.style.gridTemplateColumns = "1fr 1fr 1fr";
        }
        else {
          single_p_container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        }
      }
    })
  }

  // Initial adjustment when the page loads
  adjustGridLayout();

  // Event listener for window resize
  window.addEventListener("resize", adjustGridLayout);
})


//script for pagination
const current_page_no = document.querySelector(".page_no");
$('.pagination').pajinatify({
  dir: 'rtl',
  onChange: function (currentPage) {
    current_page_no.textContent = currentPage;
  },
});


//for sortby popup and filtaring popup
const dropdown = document.querySelector(".pageShow_item_popup")
const dropdown2 = document.querySelector(".short_list")
const dropdown_btn = document.querySelector(".pageShow_select_btn")
const dropdown_btn2 = document.querySelector(".short_by_btn")

let isclicked = true;
const dropdown_handler = (dropdown_area, dropdown_button) => {
  dropdown_button.addEventListener("click", () => {
    if (isclicked) {
      dropdown_area.style.animation = "list_anim 1s linear forwards alternate";
      dropdown_area.style.display = "block"
    } else {
      dropdown_area.style.animation = "list_anim_close 1s linear forwards alternate";
      dropdown_area.style.display = "none"
    }
    isclicked = !isclicked;
  })

}
dropdown_handler(dropdown, dropdown_btn)
dropdown_handler(dropdown2, dropdown_btn2)





//script for price range making
const price_ranges = document.querySelectorAll(".range_div input");
const progress_bar = document.querySelector(".price_progress");
const price_inputs = document.querySelectorAll(".field input");
let price_gap = 100;

price_inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_inputs[0].value);
    let maxValue = parseInt(price_inputs[1].value)
    if (maxValue - minValue >= price_gap && maxValue <= 1000) {
      if (e.target.className === "minNumber") {
        price_ranges[0].value = minValue;
        progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
      } else {
        price_ranges[1].value = maxValue;
        progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100
      }
    }
  })
})

price_ranges.forEach(input => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_ranges[0].value);
    let maxValue = parseInt(price_ranges[1].value)
    if (maxValue - minValue < price_gap) {
      if (e.target.className === "min_price_range") {
        price_ranges[0].value = maxValue - price_gap
      } else {
        price_ranges[1].value = minValue + price_gap
      }
    } else {
      price_inputs[0].value = minValue;
      price_inputs[1].value = maxValue;
      progress_bar.style.left = (minValue / price_ranges[0].max) * 100 + "%";
      progress_bar.style.right = 100 - (maxValue / price_ranges[1].max) * 100 + "%"
    }
  })
})

// for sort and filter value assign
const item_value_field = document.querySelector(".show_p_item");
const item_value = document.querySelectorAll(".pageShow_item_popup ul li")
const sort_value = document.querySelectorAll(".short_list ul li")
const sort_value_field = document.querySelector(".sort_item")

const value_handler = (select_items, selcet_value) => {
  select_items.forEach(item => {
    item.addEventListener("click", () => {
      // item_value_field.textContent = item.textContent;
      // item.innerHTML = `<i class="fa-solid fa-check"></i> ${item.textContent}`
      select_items.forEach(otherItem => {
        otherItem.innerHTML = otherItem.textContent;
      });
      // Add icon to the clicked item
      item.innerHTML = `<i class="fa-solid fa-check"></i> ${item.textContent}`;

      // Update the item_value_field content
      selcet_value.textContent = item.textContent;
    })

  })
}
value_handler(item_value, item_value_field)
value_handler(sort_value, sort_value_field)


//cout down for offer
let dayValue = document.querySelectorAll(".day_value");
let hrsValue = document.querySelectorAll(".hrs_value");
let minValue = document.querySelectorAll(".min_value");
let secValue = document.querySelectorAll(".sec_value");

// Set the date you're counting down to (replace with your desired date)
const countdownDate = new Date("May 10, 2024 04:04:40").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function () {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated values
  dayValue.forEach(value => {
    value.textContent = formatTime(days);
  })
  hrsValue.forEach(value => {
    value.textContent = formatTime(hours);
  })
  minValue.forEach(value => {
    value.textContent = formatTime(minutes);
  })
  secValue.forEach(value => {
    value.textContent = formatTime(seconds);
  })

  // If the countdown is over, display a message or perform any action
  if (timeRemaining < 0) {
    clearInterval(countdownInterval);
    // You can add a message or perform an action when the countdown is over
    console
  }
}, 1000);

// Function to format time values with leading zeros
function formatTime(value) {
  return value < 10 ? "0" + value : value;
}
//expand description handler

const expand_buttons = document.querySelectorAll(".expand_btn");
expand_buttons.forEach(ex_btn => {

  let is_clicked = true;
  ex_btn.addEventListener("click", () => {
    const expand_text = ex_btn.closest(".product_description").querySelector("p");
    const expand_overlay = ex_btn.closest(".product_description").querySelector(".desc_expanded");

    if (is_clicked) {
      expand_text.style.height = "auto";
      expand_overlay.style.display = "none"
      ex_btn.innerHTML = "<i class='fa-solid fa-chevron-up'></i>"
    } else {
      expand_text.style.height = "80px";
      expand_overlay.style.display = "block"
      ex_btn.innerHTML = "<i class='fa-solid fa-chevron-down'></i>"
    }

    is_clicked = !is_clicked;

  });

})


//shop script end******


// accordian script
$(".accordion-content").css("display", "none");

$(".accordion-title").click(function () {
  $(".accordion-title").not(this).removeClass("open");
  $(".accordion-title").not(this).next().slideUp(300);
  $(this).toggleClass("open");
  $(this).next().slideToggle(300);
});


//sticky header script
$(document).ready(() => {
  const heroSectionBottom = $(".product_area").offset().top + $(".product_area").outerHeight();
  $(window).on("scroll", () => {
    const scrollPosition = $(window).scrollTop();

    if (scrollPosition >= (heroSectionBottom - 1700)) {
      $("header").addClass("sticky_animation");
      $(".top-haeder").addClass("hide_top_header")
    } else {
      $("header").removeClass("sticky_animation");
      $(".top-haeder").removeClass("hide_top_header");
    }
  });
});




const quick_view_area = document.querySelector(".quick_view_popup")
const quick_view_btn = document.querySelector(".close_quick_view")
const quick_view_open = document.querySelectorAll(".quick_view");
quick_view_open.forEach(btn => {
  btn.addEventListener("click", () => {
    quick_view_area.style.display = "flex"
    document.body.style.overflow = "hidden"
  })
})
quick_view_btn.addEventListener("click", () => {
  quick_view_area.style.display = "none"
  document.body.style.overflow = "auto"
})


// scroll to top button
var $button = $.backToTop({

  // background color
  backgroundColor: '#ED6436',

  // text color
  color: '#FFFFFF',

  // container element
  container: this._body,

  // 'nonn', 'spin', 'fade', 'zoom', or 'spin-inverse'
  effect: 'spin',

  // enable the back to top button
  enabled: true,

  // width/height of the back to top button
  height: 70,
  width: 70,

  // icon
  icon: 'fas fa-chevron-up',

  // margins 
  marginX: 20,
  marginY: 20,

  // bottom/top left/right
  position: 'bottom right',

  // trigger position
  pxToTrigger: 600,

  // or 'fawesome'
  theme: 'default',

  // z-index
  zIndex: 999

});



//script for adding gallary
var swiper = new Swiper(".mySwiper6", {
  spaceBetween: 1,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination6",
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
var swiper3 = new Swiper(".mySwiper5", {
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
