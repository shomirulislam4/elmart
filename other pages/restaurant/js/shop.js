
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
  const heroSectionBottom = $(".archive-header").offset().top + $(".archive-header").outerHeight();
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


//for side bar handling
const sideBar_close = document.querySelector(".side_bar_close");
const side_bar = document.querySelector("aside");
const product_container = document.querySelector(".product_container");
const sideBar_show = document.querySelector(".sidebar_show");

sideBar_close.addEventListener("click", () => {
  side_bar.style.display = "none";
  product_container.style.width = "100%";
  sideBar_show.style.display = "grid";

})
sideBar_show.addEventListener("click", () => {
  side_bar.style.display = "block";
  product_container.style.width = "calc(100% - 300px)";
  sideBar_show.style.display = "none"
})
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

//add to cart count
const increase_button = document.querySelectorAll(".increase");
const decrease_button = document.querySelectorAll(".decrease");
const cart_value_input = document.querySelectorAll(".cart_value");

increase_button.forEach((btn , index) => {
  btn.addEventListener("click", () => { 
    let inputValue = parseInt(cart_value_input[index].value);
    cart_value_input[index].value = inputValue+1;
   
  })
})
decrease_button.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let input_value = parseInt(cart_value_input[index].value);
    if(input_value > 1)
    cart_value_input[index].value = input_value-1;
  })
})


//for list view;
const list_view_button = document.querySelector(".list_view");
const product_tank = document.querySelector(".product_container_body");
const single_product = document.querySelectorAll(".single_product");
const overlay = document.querySelectorAll(".product_overlay");
const price = document.querySelectorAll(".product_price");
const title = document.querySelectorAll('.product_title');
const rating_number = document.querySelectorAll(".product_rating > p");
const rating = document.querySelectorAll(".product_rating");
const overlay_down = document.querySelectorAll(".overlay_bottom span")
const grid_view2 = document.querySelector(".grid2_view");
const grid_view3 = document.querySelector(".grid3_view")
const grid_view4 = document.querySelector(".grid4_view")
const grid_view5 = document.querySelector(".grid5_view")
const item_class_names = ["list_product_container_body", "list_single_product", "list_product_overlay", "list_product_price", "list_product_title", "list_product_rating_p", "list_product_rating", "list_overlay_bottom_a", "grid2_single_product", "grid2_product_title"]

const list_view_handler = (main_items, item_class) => {
  main_items.forEach(item => {
    item.classList.add(`${item_class}`)
  })
}
const item_class_remove = (items, remove_class) => {
  items.forEach(item => {
    item.classList.remove(`${remove_class}`)
  })
}
list_view_button.addEventListener("click", () => {
  product_tank.classList.add(`${item_class_names[0]}`)
  list_view_handler(single_product, item_class_names[1])
  list_view_handler(overlay, item_class_names[2])
  list_view_handler(price, item_class_names[3])
  list_view_handler(title, item_class_names[4])
  list_view_handler(rating_number, item_class_names[5])
  list_view_handler(rating, item_class_names[6])
  list_view_handler(overlay_down, item_class_names[7])

  // grid2 view_remover
  product_tank.style.gridTemplateColumns = "auto";
  product_tank.style.gap = "15px";
  item_class_remove(single_product, item_class_names[8])
  item_class_remove(title, item_class_names[9])
})

// grid view 2 
grid_view2.addEventListener("click", () => {
  // remove list view
  product_tank.classList.remove(`${item_class_names[0]}`)
  item_class_remove(single_product, item_class_names[1])
  item_class_remove(overlay, item_class_names[2])
  item_class_remove(price, item_class_names[3])
  item_class_remove(title, item_class_names[4])
  item_class_remove(rating_number, item_class_names[5])
  item_class_remove(rating, item_class_names[6])
  item_class_remove(overlay_down, item_class_names[7])

  product_tank.style.gridTemplateColumns = " 1fr 1fr";
  product_tank.style.gap = "45px";
  list_view_handler(single_product, item_class_names[8])
  list_view_handler(title, item_class_names[9])
  list_view_handler(overlay_down, item_class_names[7])
})

// for grid view 3
grid_view3.addEventListener("click", () => {
  product_tank.style.gridTemplateColumns = " 1fr 1fr 1fr";
  product_tank.style.gap = "20px ";
  // remove list veiw
  product_tank.classList.remove(`${item_class_names[0]}`)
  item_class_remove(single_product, item_class_names[1])
  item_class_remove(overlay, item_class_names[2])
  item_class_remove(price, item_class_names[3])
  item_class_remove(title, item_class_names[4])
  item_class_remove(rating_number, item_class_names[5])
  item_class_remove(rating, item_class_names[6])
  item_class_remove(overlay_down, item_class_names[7])
})
grid_view4.addEventListener("click", () => {
  // remove list veiw
  product_tank.classList.remove(`${item_class_names[0]}`)
  item_class_remove(single_product, item_class_names[1])
  item_class_remove(overlay, item_class_names[2])
  item_class_remove(price, item_class_names[3])
  item_class_remove(title, item_class_names[4])
  item_class_remove(rating_number, item_class_names[5])
  item_class_remove(rating, item_class_names[6])
  item_class_remove(overlay_down, item_class_names[7])

  product_tank.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  product_tank.style.gap = "15px";
  item_class_remove(single_product, item_class_names[8])
  item_class_remove(title, item_class_names[9])
})

grid_view5.addEventListener("click", () => {
  // remove list veiw
  product_tank.classList.remove(`${item_class_names[0]}`)
  item_class_remove(single_product, item_class_names[1])
  item_class_remove(overlay, item_class_names[2])
  item_class_remove(price, item_class_names[3])
  item_class_remove(title, item_class_names[4])
  item_class_remove(rating_number, item_class_names[5])
  item_class_remove(rating, item_class_names[6])
  item_class_remove(overlay_down, item_class_names[7])
  // grid2 view_remover
  product_tank.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
  product_tank.style.gap = "15px";
})


// cart popup handling
const cart_close_btn = document.querySelector(".cart_popup_close");
const cart_popup_area = document.querySelector(".cart_popup")
const cart_btn = document.querySelectorAll(".cart_btn");
cart_btn.forEach(btn => {
  btn.addEventListener("click" , () => {
    cart_popup_area.style.display = "flex";
    cart_popup_area.style.opacity = "1";
    document.body.style.overflow ="hidden";
  })
})
cart_close_btn.addEventListener("click", () => {
  cart_popup_area.style.display = "none";
  cart_popup_area.style.opacity = "0";
  document.body.style.overflow ="auto";
})

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

//script for pagination
const current_page_no = document.querySelector(".page_no");
$('.pagination').pajinatify({
  dir: 'rtl',
  onChange: function (currentPage) {
    current_page_no.textContent = currentPage;
  },
});


// scroll to top button
var $button = $.backToTop({

  // background color
  backgroundColor: '#e7272d',

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