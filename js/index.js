import Swiper from "../node_modules/swiper/swiper.mjs";
import Navigation from '../node_modules/swiper/modules/navigation.mjs'
import Pagination from '../node_modules/swiper/modules/pagination.mjs'
import Scrollbar from '../node_modules/swiper/modules/scrollbar.mjs'
import AutoPlay from '../node_modules/swiper/modules/autoplay.mjs'
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Scrollbar, AutoPlay],
  loop: true,
  speed: 400,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    clickable : true,
    enabled: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:{
    delay: 1000
  }
});





















// "use strict";
// function $(name) {
//   return document.querySelector(name);
// }
// let elImg = $(".mainImgs");
// let left = $(".left");
// let next = $(".right");

// let imgs = document.querySelectorAll(".img");
// console.log(imgs.length);

// let ind = 0;

// function style() {
//   if (ind > imgs.length - 1) {
//     ind = 0;
//   }
//   elImg.style.transform = `translateX(${-ind * 1300}px)`;
// }
// style();
// next.addEventListener("click", () => {
//   ind++;
//   resitInerval();
//   style();
// });
// left.addEventListener("click", () => {
//   ind > 0 ? ind-- : (ind = imgs.length - 1);
//   resitInerval();
//   style();
// });

// let interval = setInterval(run, 2000);

// function run() {
//   ind++;
//   style();
// }

// function resitInerval() {
//   clearInterval(interval);

//   interval = setInterval(run, 2000);
// }
