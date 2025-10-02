$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  if (typeof Swiper !== "undefined") {
    /***** main slider *****/
    var mainSwiper = new Swiper(".main-slider .swiper", {
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 10000,
      },
      pagination: {
        el: ".main-slider .swiper-pagination",
        clickable: true,
      },
    });

    /***** categories slider *****/
    var categoriesSwiper = new Swiper(".categories-slider .swiper", {
      spaceBetween: 10,
      slidesPerView: "auto",
      pagination: {
        el: ".categories-slider .swiper-pagination",
        clickable: true,
      },
    });

    /***** specials slider *****/
    var specialsSwiper = new Swiper(".specials-slider .swiper", {
      spaceBetween: 24,
      slidesPerView: "auto",
      pagination: {
        el: ".specials-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 24,
        },
      },
    });
    
    /***** brands slider *****/
    var brandsSwiper = new Swiper(".brands-slider .swiper", {
      slidesPerView: "auto",
      pagination: {
        el: ".brands-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          spaceBetween: 5,
        },
        768: {
          spaceBetween: 15,
        },
      },
    });

    /***** lattest slider *****/
    var lattestSwiper = new Swiper(".lattest-slider .swiper", {
      spaceBetween: 24,
      slidesPerView: "auto",
      pagination: {
        el: ".lattest-slider .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 24,
        },
      },
    });
  }
});
