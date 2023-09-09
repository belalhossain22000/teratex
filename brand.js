var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 4,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
//   pagination: {
//     el: ".swiper-pagination",
//     // clickable: true,
//   },

  breakpoints: {
    576: {
      slidesPerView:4 ,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 30,
    }
  },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
});
