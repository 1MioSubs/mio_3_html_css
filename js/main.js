$(function () {
  

  $(".slider__inner").slick({
    dots: true,
    arrows: false,
  });

  $(".mune__btn, .menu a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  var mixer = mixitup(".portfolio__galeri-all");
});
