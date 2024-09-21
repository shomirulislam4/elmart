$(document).ready(function () {
  // ********* top header open modal  *********//
  $(".top-header-btn").on("click", function () {
    $(".modal").fadeIn(1000);

    $("body").css("overflow", "hidden");
  });

  //********* top header close modal  **********//
  $(".cross-btn").on("click", function () {
    $(".modal").fadeOut(1000);

    $("body").css("overflow", "auto");
  });

  // ********* cart open modal  *********//
  $(".cart-icon ").on("click", function () {
    $("#cartModal").toggleClass("show");
    document.body.style.overflow = "hidden";
  });

  // ********* cart close modal  *********//
  $(".cross-btn2").on("click", function () {
    $("#cartModal").removeClass("show");
    document.body.style.overflow = "auto";
  });

  // ********* search open modal  *********//
  $(".search-icon").on("click", function () {
    $(".search-modal").fadeIn();
    $(".search-modal-overlay").fadeIn();
    document.body.style.overflow = "hidden";
  });

  // ********* search hide modal  *********//
  $(".search-modal-cross, .search-modal-overlay").on("click", function () {
    $(".search-modal").fadeOut();
    $(".search-modal-overlay").fadeOut();
    document.body.style.overflow = "auto";
  });

  // ********* nav toggle open   *********//
  $(".toggle-nav").on("click", function () {
    $(".mobile-nav").toggleClass("open");
  });

  $(".nav-cross").on("click", function () {
    $(".mobile-nav").removeClass("open");
  });

  $(".mobile-dropdown").click(function (e) {
    e.stopPropagation();

    $(this).toggleClass("active").find(".dropdown-items2").slideToggle(800);

    $(".mobile-dropdown")
      .not(this)
      .removeClass("active")
      .find(".dropdown-items2")
      .slideUp();
  });

  $(".dropdown-list").click(function (e) {
    e.stopPropagation();
  });

  $(".shop-heading").click(function (e) {
    e.stopPropagation();

    $(this).next("ul").slideToggle(800);

    $(".shop-heading").not(this).next("ul").slideUp();
  });

  $(document).click(function () {
    $(".mobile-dropdown")
      .removeClass("active")
      .find(".dropdown-items2")
      .slideUp();
    $(".shop-heading").next("ul").slideUp();
  });

  $(".dropdown-items2").click(function (e) {
    e.stopPropagation();
  });

  //********* update subtotal  *********//
  function updateSubtotal() {
    var subtotal = 0;
    $(".cart-item").each(function () {
      var quantity = parseInt($(this).find(".quantity").text());
      var pricePerItem = parseFloat($(this).find(".item-total").data("price"));
      var itemTotal = quantity * pricePerItem;
      $(this)
        .find(".item-total")
        .text("$" + itemTotal.toFixed(2));
      subtotal += itemTotal;
    });
    $(".subtotal").text("$" + subtotal.toFixed(2));
  }

  //********** Increment quantity   ************//
  $(document).on("click", ".increment", function () {
    var $quantityElement = $(this).siblings(".quantity");
    var currentValue = parseInt($quantityElement.text());
    $quantityElement.text(currentValue + 1);
    updateSubtotal();
  });

  //********** Decrement quantity  ************//
  $(document).on("click", ".decrement", function () {
    var $quantityElement = $(this).siblings(".quantity");
    var currentValue = parseInt($quantityElement.text());
    if (currentValue > 1) {
      $quantityElement.text(currentValue - 1);
      updateSubtotal();
    }
  });

  updateSubtotal();

  //***************  PRELOADER ANIMATION  *******************//
  $(window).on("load", function () {
    const loader = $(".loader");

    loader.addClass("loader--hidden");

    loader.on("transitionend", function () {
      loader.remove();
    });
  });

  // Handle click on quick view link
  $(".quick-view").click(function (e) {
    e.preventDefault();

    var productCard = $(this).closest(".product-image");

    var productImage = productCard.find(".pic-1").attr("src");

    var productDetails = productCard.find(".content").html();

    $(".quick-view-modal").data("product-details", productDetails);

    var modalContent = '<div class="product-details">';
    modalContent += '<img src="' + productImage + '" alt="Product Image">';
    modalContent += '<div class="details">' + productDetails + "</div>";
    modalContent += "</div>";

    $(".quick-view-content").html(modalContent);

    $(".quick-view-modal").fadeIn();
  });

  $(".quick-cross-btn").click(function () {
    $(".quick-view-modal").fadeOut();
  });

  $(".side-bar-close-icon").click(function () {
    $(".side-wrapper").addClass("hide");
    $(".sidebar-show").css("display", "block");
    $(".shop-products-area").addClass("side-wrapper-hidden");
  });

  $(".sidebar-show").click(function () {
    $(".side-wrapper").removeClass("hide");
    $(".sidebar-show").css("display", "none");
    $(".shop-products-area").removeClass("side-wrapper-hidden");
  });

  // grid view
  $("#grid-active-btn").click(function (event) {
    event.preventDefault();
    $(".shop-products-card").removeClass("details-active");
    $(this).addClass("active");
    $("#details-active-btn").removeClass("active");
  });

  $("#details-active-btn").click(function (event) {
    event.preventDefault();
    $(".shop-products-card").addClass("details-active");
    $(this).addClass("active");
    $("#grid-active-btn").removeClass("active");
  });

  $(".shop-page").click(function () {
    var page = $(this).text();
    $(".shop-total-page span:first-child").text(page);
  });

  $(".sort").click(function () {
    $(".short-list").toggle();
  });

  $(".short-list ul li").click(function () {
    var selectedText = $(this).text();
    $(".sort p").text(selectedText);
    $(".short-list").hide();
  });

  $(".tab-img").click(function (event) {
    event.preventDefault();

    var imgSrc = $(this).find("img").attr("src");
    $("#main-product-img").attr("src", imgSrc);
  });

  $(".tab1").addClass("active");
  $(".tab1-des").addClass("active");

  $(".tab-list").click(function () {
    var tabIndex = $(this).index() + 1;

    $(".tab-description > div").removeClass("active").addClass("inactive");
    $(".tab-list").removeClass("active").addClass("inactive");

    $(".tab-description > div:nth-child(" + tabIndex + ")")
      .removeClass("inactive")
      .addClass("active");
    $(this).removeClass("inactive").addClass("active");
  });

  $(".product-img a").click(function (e) {
    e.preventDefault();
    var imgSrc = $(this).find("img").attr("src");
    $("#products-popup .popup-content").html(
      '<img src="' + imgSrc + '" alt="popup-image">'
    );
    $("#products-popup").show();
  });

  $(".cross-popup").click(function () {
    $("#products-popup").hide();
  });

  $(document).ready(function () {
    // shop page
    const price_ranges = $(".ranges input");
    const progress_bar = $(".price-progress");
    const minNumberInput = $(".minNumber");
    const maxNumberInput = $(".maxNumber");
    const minRangeInput = $(".min_price_range");
    const maxRangeInput = $(".max_price_range");
    const priceProgress = $(".price-progress");

    price_ranges.each(function () {
      $(this).on("input", function (e) {
        let minValue = parseInt(price_ranges.eq(0).val());
        let maxValue = parseInt(price_ranges.eq(1).val());
        let price_gap = 100;

        if (maxValue - minValue < price_gap) {
          if ($(e.target).hasClass("min_price_range")) {
            price_ranges.eq(0).val(maxValue - price_gap);
          } else {
            price_ranges.eq(1).val(minValue + price_gap);
          }
        } else {
          progress_bar.css(
            "left",
            (minValue / $(this).prop("max")) * 100 + "%"
          );
          progress_bar.css(
            "right",
            100 - (maxValue / $(this).prop("max")) * 100 + "%"
          );
        }
      });
    });

    // Function to synchronize range inputs with number inputs
    function syncRangeInputs() {
      minRangeInput.val(minNumberInput.val());
      maxRangeInput.val(maxNumberInput.val());
    }

    // Function to synchronize number inputs with range inputs
    function syncNumberInputs() {
      minNumberInput.val(minRangeInput.val());
      maxNumberInput.val(maxRangeInput.val());
    }

    // Add event listeners for number inputs
    minNumberInput.on("input", function () {
      syncRangeInputs();
    });

    maxNumberInput.on("input", function () {
      syncRangeInputs();
    });

    // Add event listeners for range inputs
    minRangeInput.on("input", function () {
      syncNumberInputs();
      updatePriceProgress();
    });

    maxRangeInput.on("input", function () {
      syncNumberInputs();
      updatePriceProgress();
    });

    // Function to update price progress bar
    function updatePriceProgress() {
      const range = maxRangeInput.prop("max") - minRangeInput.prop("min");
      const value = maxRangeInput.val() - minRangeInput.prop("min");
      const percentage = (value / range) * 100;
      // priceProgress.css("width", percentage + "%");
    }

    // Initial synchronization
    syncRangeInputs();
    updatePriceProgress();
  });
});
