const swiper = new Swiper(".swiper-author-container", {
  grabCursor: true,
  centeredSlides: true,
  slideToClickedSlide: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [-320, 0, 0],
      scale: 0.6,
      rotate: [0, 0, -10],
    },
    next: {
      translate: [320, 0, 0],
      scale: 0.6,
      rotate: [0, 0, 10],
    },
    limitProgress: 2,
    progressMultiplier: 0.7
  },
});

const footer = new Swiper('.swiper-footer', {
    autoplay:{
        delay: 1000
    }
})