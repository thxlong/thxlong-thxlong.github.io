// ?------------  AUTO SET FULLSCREEN SLIDER ------------?//

let $heightSlider = $(window).height();

$(".slider").css("height", $heightSlider + "px");

// ?------------------  SHOW MENU TOP ------------------?//
let menutop = $(".header__top");

$(document).on("scroll", function (params) {
  let scrollY = window.pageYOffset;
  let screenWidth = $(window).width();
  if (scrollY >= 400 || screenWidth < 768) {
    menutop.addClass("active");
  } else {
    menutop.removeClass("active");
  }
});

// ?------------  SHOW MENU LEFT ------------?//

function checkClassMenuIsShow() {
  if ($("body").hasClass("menu-isshow")) {
    $("body").css("overflow", "hidden");
    $(".overlay-main").css("display", "block");
  } else {
    $("body").css("overflow", "initial");
    $(".overlay-main").css("display", "none");
  }
}

$(".overlay-main").on("click", function (e) {
  $("body").toggleClass("menu-isshow");
  checkClassMenuIsShow();
});
$(".slider__menu, .hambuger-icon").on("click", function (e) {
  e.stopPropagation();
  console.log("ok");
  $("body").toggleClass("menu-isshow");

  checkClassMenuIsShow();
});

$(".close").on("click", function (e) {
  $("body").toggleClass("menu-isshow");

  checkClassMenuIsShow();
});

// ?------------  SLIDER SLICKITY ------------?//
$(".slider-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  draggable: true,
  prevNextButtons: false,
});

$(".slider__control-next").on("click", function () {
  $(".slider-carousel").flickity("next", false);
});

$(".slider__control-prev").on("click", function () {
  $(".slider-carousel").flickity("previous", false);
});
