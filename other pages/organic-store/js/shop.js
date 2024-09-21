/** preloader initialize**/
$('.js-preloader').preloadinator({
  minTime: 2000
});

//for grid and list view
const single_box_area = document.querySelectorAll(".product_box_wrapper");
const grid_view_button = document.querySelector(".grid_view");
const list_view_button = document.querySelector(".list_view");
const single_boxs = document.querySelectorAll(".single_shop_product");
const product_content = document.querySelectorAll(".product_info");
const product_img = document.querySelectorAll(".product_img");
const list_view_product_summary = document.querySelectorAll(".product_title p");

const list_view_handler = () => {
  list_view_button.classList.add("active")
  grid_view_button.classList.remove("active")
  list_view_product_summary.forEach(summary => {
    summary.style.display = "block"
  })
  product_img.forEach(img => {
    img.classList.remove("product_img_border")
    img.classList.add("product_img_border_list")
  })
  product_content.forEach(content => {
    content.classList.remove("product_info_grid")
    content.classList.remove("product_info_style")
    content.classList.add("product_info_list_border_radius");
    content.classList.remove("product_info_grid_border_radius");

  })
  single_boxs.forEach(box => {
    box.classList.add("single_shop_product_style")
  })
  single_box_area.forEach(area => {
    area.classList.remove("col-sm-6")
    area.classList.remove("col-md-4")
  })
}


const grid_view_handler = () => {
  list_view_button.classList.remove("active")
  grid_view_button.classList.add("active")
  list_view_product_summary.forEach(summary => {
    summary.style.display = "none"
  })
  product_img.forEach(img => {
    img.classList.add("product_img_border")
    img.classList.remove("product_img_border_list")

  })
  product_content.forEach(content => {
    content.classList.add("product_info_grid")
    content.classList.add("product_info_style")
    content.classList.remove("product_info_list_border_radius");
    content.classList.add("product_info_grid_border_radius");
  })
  single_boxs.forEach(box => {
    box.style.display = "block"
    box.classList.remove("single_shop_product_style")
  })
  single_box_area.forEach(area => {
    area.classList.add("col-sm-6")
    area.classList.add("col-md-4")
  })
}

grid_view_button.addEventListener("click", grid_view_handler)
list_view_button.addEventListener("click", list_view_handler)

//sciprt for expand product description
const show_more_button = document.querySelector("#expand_btn");
const show_more_button_text = document.querySelector("#expand_btn span");
const expand_content = document.querySelector(".expand_content");
const button_icon = document.querySelector(".description button i");

  let content_show = true;
const description_toggler = () => {

  if (content_show) {  
    show_more_button_text.textContent = "Show less"
    expand_content.classList.remove("expand_content_hide")
    button_icon.style.transform = "rotate(180deg)"
   
  } else {
    show_more_button_text.textContent = "Show more"
    expand_content.classList.add("expand_content_hide")
    button_icon.style.transform = "rotate(0deg)"
  }
  content_show = !content_show
}
show_more_button.addEventListener("click", description_toggler)


//script for wishlist alert
const wishlist_message = document.querySelector(".wishlist_alert");
const wishlist_btns = document.querySelectorAll(".wishlist");
const wishlist_view_handler = () => {

  wishlist_message.style.animation=  "wishlist_animation .3s ease-in-out  forwards alternate"

setTimeout(() => {
  wishlist_message.style.animation=  "wishlist_animation_hide .3s ease-in-out  forwards alternate"
}, 3000)
}


wishlist_btns.forEach(wishlist_btn => {
  wishlist_btn.addEventListener("click", wishlist_view_handler)
})



//script for ask question popup form 
const user_questoin_popup = document.querySelector(".user_question_popup")
const question_popup_open_btn = document.querySelectorAll(".question_button")
const question_popup_close_btn = document.querySelector(".form_close_btn");

const question_popup_show = () => {
  user_questoin_popup.style.display= "flex"
  document.body.style.overflow = "hidden"
}
const question_popup_close = () => {
  user_questoin_popup.style.display= "none"
  document.body.style.overflow = "scroll"
}
question_popup_close_btn.addEventListener("click", question_popup_close)
question_popup_open_btn.forEach(question_btn => {
  question_btn.addEventListener("click" , question_popup_show)
})


//get elements
const color_areas = document.querySelectorAll(".color_box");

color_areas.forEach((color_area) => {
  const color_display_board = color_area.querySelector(".color_board");
  const color_sport = color_area.querySelector(".color_div");
  const color_card = color_area.querySelector(".color_field");
  const color_uniqe_name = color_area.querySelector(".color_name");
  color_area.addEventListener("mouseover", () => {
    color_display_board.style.display = "flex"
    let current_bg_color = getComputedStyle(color_sport, null)["backgroundColor"];
    color_card.style.backgroundColor = `${current_bg_color}`


    //***color name founder */
    function getClosestColorName(rgbCode) {
      // Define a list of color names and their RGB values
      const colorNames = {
        "Red": [255, 0, 0],
        "Green": [0, 255, 0],
        "Blue": [0, 0, 255],
        "Crimson": [220, 20, 60],
        "Darkcyan": [0, 139, 139],
        "Violet": [238, 130, 238],

      };

      // Convert the input RGB code to an array of integers
      const rgbArray = rgbCode.replace(/[^\d,]/g, '').split(',').map(Number);

      // Calculate the Euclidean distance between the input RGB and each color in the list
      let closestColor = null;
      let closestDistance = Number.MAX_SAFE_INTEGER;

      for (const [colorName, colorValue] of Object.entries(colorNames)) {
        const distance = calculateEuclideanDistance(rgbArray, colorValue);

        if (distance < closestDistance) {
          closestColor = colorName;
          closestDistance = distance;
        }
      }

      return closestColor;
    }

    function calculateEuclideanDistance(arr1, arr2) {
      return Math.sqrt(arr1.reduce((sum, value, index) => sum + Math.pow(value - arr2[index], 2), 0));
    }

    // Example usage
    const rgbCode = current_bg_color; // Replace with your RGB code
    const colorName = getClosestColorName(rgbCode);
    color_uniqe_name.textContent = colorName

  })
  color_area.addEventListener("mouseout", () => {
    color_display_board.style.display = "none"
  })
})

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

//quick view popup handler
const quick_view_body = document.querySelector(".quick_view_area");
const quick_view_close_btn = document.querySelector(".close_button span")
const quick_view_show_btn = document.querySelectorAll(".quick_view");
const quick_view_close = () => {
  quick_view_body.style.display = "none"
  document.body.style.overflow = "scroll"
}
const quick_view_show = () => {
  quick_view_body.style.display = "flex"
  document.body.style.overflow = "hidden"
}
quick_view_show_btn.forEach(button => {
  button.addEventListener("click", quick_view_show)
})

quick_view_close_btn.addEventListener("click", quick_view_close)
//img hover effect
const shop_img_area = document.querySelectorAll(".img_area");
const shop_img = document.querySelectorAll(".img_area img");

const image_hover_effect = (hero_animation_area, slide_imgs) => {
  hero_animation_area.addEventListener("mousemove", (e) => {
    const m = e.clientX - e.target.offsetWidth;
    const n = e.clientY - e.target.offsetTop;

    slide_imgs.forEach((img) => {
      img.style.transformOrigin = `${m}px ${n}px`;
      img.style.transform = "scale(1.5)";
    });
  });
  hero_animation_area.addEventListener("mouseleave", () => {
    slide_imgs.forEach((img) => {
      img.style.transformOrigin = "center";
      img.style.transform = "scale(1)";
    });
  });
};

shop_img_area.forEach((area) => {
  image_hover_effect(area, shop_img);
});

// header script

//get element
const search_bar_icon = document.getElementById("search_icon");
const mobile_search_bar = document.querySelector(".mobile_search");
const desktop_search_icon = document.getElementById("desktop_search_icon");
const product_item = document.getElementById("product_item");
const product_item_message = document.querySelector(".product_msg");
const popup_exit_btn = document.querySelector(".exit_icon");
const popup_overlay = document.querySelector(".popup_overlay");
const popup_show_btn = document.querySelectorAll(".view_btn button");
const popup_page = document.querySelector(".popup_content");
const popup_product_img = document.querySelector(".popup_p_img");
const category_select_item = document.querySelector(".category_items");
const toggle_open_btn = document.querySelector(".toggle_open");
const toggle_close_btn = document.querySelector(".toggle_close");

//--------------header sticky animation-------------------------
$(document).ready( () => {
  $(window).on("scroll", () => {
    if($(window).scrollTop()){
      $("#header").addClass("sticky_animation")
    }else{
      $("#header").removeClass("sticky_animation")
    }
  })
})

//product item message function here
let product_item_visible = false;


product_item.addEventListener("mouseover", () => {
  if (product_item_visible) {
    product_item_message.style.transform = "translate(0px, 30%)";
    product_item_message.style.opacity = "0";

  } else {
    product_item_message.style.transition = "transform 0.3s, opacity 0.3s"; // Add a transition property
    product_item_message.style.transform = "translate(0px, 0px)";
    product_item_message.style.opacity = "1";
    product_item_message.style.display = "unset";
  }

  product_item_visible = !product_item_visible;
})

product_item.addEventListener("mouseout", () => {
  if (product_item_visible) {
    product_item_message.style.transition = "transform 0.3s, opacity 0.3s"; // Add a transition property
    product_item_message.style.transform = "translate(0px, 30%)";
    product_item_message.style.opacity = "0";
  }
})


//get element for 
category_select_item.addEventListener("click", () => {
  let toggle = true;
  if(toggle){
    toggle_close_btn.style.display = "unset";
toggle_open_btn.style.display = "none";
toggle =false;

  }else{
    toggle_close_btn.style.display = "none";
    toggle_open_btn.style.display = "block";
    toggle =true;
  }
})

//medium screen search bar
const search_page_open_btn = document.querySelector(".search_icon ");
const search_page_close_btn = document.querySelector(".popup_search_close");
const medium_search_page = document.querySelector(".mobile_popup_search");

//medium screen search bar handling
search_page_open_btn.addEventListener("click", () => {
  medium_search_page.style.display = "flex"
   medium_search_page.style.animation = "mobile_popup_open 1s alternate forwards ease-in";
  medium_search_page.style.transition = "2s"
})

search_page_close_btn.addEventListener("click", () => {
  medium_search_page.style.animation = "mobile_popup_close 1s alternate forwards ease-in";
  medium_search_page.style.transition = "2s"
})

//for sign up and login page tab function
const login_btn = document.getElementById("login_btn");
const signup_btn = document.getElementById("signup_btn");
const login_page = document.getElementById("login_from");
const signup_page = document.getElementById("signup_from");
const login_signup_paragraph = document.querySelector(".msg_box p");
const user_message = document.getElementById("user_msg");

//toggle signup and login page
const login_tab_handler = () => {
  signup_btn.style.display = "unset"
  login_page.style.display = "unset";
  login_btn.style.position = "absolute"
  login_btn.style.display = "none"
  signup_page.style.display = "none";
  user_message.textContent = "Hello Customer!"
  login_signup_paragraph.textContent = "Fill up personal information and start journey with us."
  signup_btn.style.position = "unset"

}
const signup_tab_handler = () => {
  signup_btn.style.display = "none";
  login_btn.style.display = "unset"
  login_page.style.display = "none";
  signup_page.style.display = "unset"
  user_message.textContent = "Wellcome Back!"
  login_signup_paragraph.textContent = "Login here by filling you're username and password or use your favorite social network account to enter to the site"
  signup_btn.style.position = "absolute"
  login_btn.style.position = "unset"
}

login_btn.addEventListener("click", login_tab_handler)
signup_btn.addEventListener("click", signup_tab_handler)

// user page sign page & login page > get elements
const user_popup_icon = document.getElementById("user_join_icon");
const user_popup_page = document.querySelector(".user_join_popup");
const user_popup_exit = document.querySelector("#user_popup_close");

//page popup function

const user_popup_page_handler = () => {
  user_popup_page.style.display = "flex";
  document.body.style.overflow = 'hidden'

}
const user_popup_exit_handler = () => {
  user_popup_page.style.display = "none";
  document.body.style.overflow = 'scroll'

}
user_popup_icon.addEventListener("click", user_popup_page_handler)
user_popup_exit.addEventListener("click", user_popup_exit_handler)






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
  // slidesPerView: 1,
  // mousewheel: true,
  keyboard: true,
  autoplay: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },

});

//script for pagination
const pagination_page = document.querySelector("#page_number");
const current_page_no = document.querySelector(".page_no");
pagination_page.addEventListener("change", () => {
  let input_value = pagination_page.value;

  $('.pagination').pajinatify('set', `${input_value}`, 40);
  current_page_no.textContent = input_value;
})

$('.pagination').pajinatify({
  dir: 'rtl',
  onChange: function (currentPage) {
    current_page_no.textContent = currentPage;
  },
});



