try{
 //get elements

  const themb_image_area = document.querySelectorAll(".them_img");
const slide_image_1 = document.querySelector(".main_image")
const themb_image_1 = document.querySelector(".img_box");

themb_image_area.forEach(img => {
  img.addEventListener("click", () => {
    // Remove "active_img" class from all images
    themb_image_area.forEach(otherImg => {
      otherImg.classList.remove("active_img");
    });
    // Add "active_img" class to the clicked image
    img.classList.add("active_img");
    let img_src = img.querySelector("img");
    slide_image_1.src = img_src.src;
    img.classList.add("active_img")
  })
})

//img hover effect
const img_hover_effect_1 = (img_box, slide_img) => {
  img_box.addEventListener("mousemove", (e) => {
    const x= e.clientX - e.target.offsetWidth;
    const y = e.clientY - e.target.offsetTop;
    slide_img.style.transformOrigin = `${x}px ${y}px`
    slide_img.style.transform = `scale(1.4)`
    })

    img_box.addEventListener("mouseleave", () => {
      slide_img.style.transformOrigin = `center` 
      slide_img.style.transform = `scale(1)`
  })
}
img_hover_effect_1(themb_image_1,slide_image_1)

}catch{

 
}

// header script start

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




//header script end



//get elements
const slide_image = document.querySelectorAll(".img_area img")
const themb_image = document.querySelectorAll(".img_area");

//img hover effect
const img_hover_effect = (img_area, imges) => {
  img_area.forEach(area => {
    area.addEventListener("mousemove", (e) => {
      const m = e.clientX - e.target.offsetWidth /2 ;
      const n = e.clientY - e.target.offsetTop;
      imges.forEach(img => {
        img.style.transformOrigin = `${m}px ${n}px`
        img.style.transform = `scale(1.4)`
      })
    })
    area.addEventListener("mouseleave", () => {
      imges.forEach(img => {
        img.style.transformOrigin = `center`
        img.style.transform = `scale(1)`
      })
    })
  })
}
img_hover_effect(themb_image, slide_image)

//for countdown timier
const dayElement = document.querySelector(".day");
const hourElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondElement = document.querySelector(".second");

let endDate = "9 january 2024 01:25 am"
const clock = () => {
  endDate = new Date(endDate);
  let currentDate = new Date()
let diff;
  if( currentDate <=  endDate){
   
      diff = (endDate - currentDate);
}else{
  diff = 0;
}
  let sec = Math.floor(diff / 1000);
  let min = Math.floor(sec / 60);
  let hrs = Math.floor(min / 60);
  let days = Math.floor(hrs / 24);

  sec %= 60;
  min %= 60;
  hrs %= 24;

  dayElement.textContent =  hrs < 10 ? `0${days}` : days;
  hourElement.textContent = hrs < 10 ? `0${hrs}` : hrs;
  minutesElement.textContent = min < 10 ? `0${min}` : min;
  secondElement.textContent = sec < 10 ? `0${sec}` : sec;
}
setInterval(clock, 1000)

//script for ask question popup form 
const user_questoin_popup = document.querySelector(".user_question_popup")
const question_popup_open_btn = document.querySelector(".question_button")
const question_popup_close_btn = document.querySelector(".form_close_btn");

const question_popup_show = () => {
  user_questoin_popup.style.display = "flex"
  document.body.style.overflow = "hidden"
}
const question_popup_close = () => {
  user_questoin_popup.style.display = "none"
  document.body.style.overflow = "scroll"
}
question_popup_close_btn.addEventListener("click", question_popup_close)
question_popup_open_btn.addEventListener("click", question_popup_show)



//review link
const review_area = document.querySelector("#Review-tab");
const review_container = document.querySelectorAll("#myTab li button");
const review_button = document.querySelector(".user_review")
const review_area_select = document.querySelectorAll(".tab-pane");
const review_section = document.querySelector("#Review");

review_button.addEventListener("click", () => {

  review_container.forEach(container => {
    container.classList.remove("active")
  })
  review_area.classList.add("active")
  review_area_select.forEach(select_area => {
    select_area.classList.remove("active")
    select_area.classList.remove("show")
  })
  review_section.classList.add("show")
  review_section.classList.add("active")


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

//swiper slider for review tab
var swiper = new Swiper(".mySwiper", {
  // autoplay: true,
  keyboard: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 10,
});