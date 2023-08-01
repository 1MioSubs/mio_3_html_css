$(function () {
  $(".menu a, .logo, .footer__logo-btn").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".slider__inner").slick({
    dots: true,
    arrows: false,
  });

  $(".mune__btn, .menu a").on("click", function () {
    $(".header__top-inner").toggleClass("header__top-inner--active");
  });

  var mixer = mixitup(".portfolio__galeri-all");
});
