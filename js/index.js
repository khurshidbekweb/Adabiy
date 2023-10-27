"use strict"
function $(name){
    return document.querySelector(name)
}
let elImg = $(".mainImgs");
let left  = $(".left")
let next = $(".right");

let imgs = document.querySelectorAll(".img")
console.log(imgs.length);

let ind = 0;

function style(){
    if(ind > imgs.length - 1){
        ind = 0;
    }   
        elImg.style.transform = `translateX(${-ind*1300}px)`;
}
style();
next.addEventListener("click", ()=>{
    ind++
    resitInerval()
    style();    
})
left.addEventListener("click", ()=>{
    ind > 0 ? ind--: ind = imgs.length-1;
    resitInerval()
    style();
})

let interval = setInterval(run, 2000);

function run(){
    ind++;
    style();
}

function resitInerval(){
    clearInterval(interval);

    interval = setInterval(run, 2000);
}








































// // import Swiper  from './node_modules/swiper/swiper.mjs'
// // import Navigation from './node_modules/swiper/modules/navigation.min.mjs'
// // import Autoplay from './node_modules/swiper/modules/autoplay.mjs';
// // import Pagination from './node_modules/swiper/modules/pagination.mjs'
// // import Parallax from './node_modules/swiper/modules/parallax.mjs'
// import * as Swiper from "./node_modules/swiper/swiper.mjs";
// import { Navigation, Autoplay, Pagination, Parallax } from "swiper/modules";

// // HERO SLIDER
// $(document).ready(function () {
//   var menu = [];
//   jQuery(".swiper-slide").each(function (index) {
//     menu.push(jQuery(this).find(".slide-inner").attr("data-text"));
//   });

//   var interleaveOffset = 0.5;
//   var swiperOptions = {
//     modules: [Navigation, Pagination, Autoplay, Parallax],
//     loop: true,
//     speed: 1500,
//     parallax: true,
//     autoplay: {
//       delay: 1500,
//       disableOnInteraction: false,
//     },
//     watchSlidesProgress: false,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },

//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//       disabledClass: "disabled_swiper_button",
//     },

//     on: {
//       progress: function () {
//         var swiper = this;
//         for (var i = 0; i < swiper.slides.length; i++) {
//           var slideProgress = swiper.slides[i].progress;
//           var innerOffset = swiper.width * interleaveOffset;
//           var innerTranslate = slideProgress * innerOffset;
//           swiper.slides[i].querySelector(".slide-inner").style.transform =
//             "translate3d(" + innerTranslate + "px, 0, 0)";
//         }
//       },

//       touchStart: function () {
//         var swiper = this;
//         for (var i = 0; i < swiper.slides.length; i++) {
//           swiper.slides[i].style.transition = "";
//         }
//       },

//       setTransition: function (speed) {
//         var swiper = this;
//         for (var i = 0; i < swiper.slides.length; i++) {
//           swiper.slides[i].style.transition = speed + "ms";
//           swiper.slides[i].querySelector(".slide-inner").style.transition =
//             speed + "ms";
//         }
//       },
//     },
//   };

//   var swiper = new Swiper(".swiper-container", swiperOptions);

//   // DATA BACKGROUND IMAGE
//   var sliderBgSetting = $(".slide-bg-image");
//   sliderBgSetting.each(function (indx) {
//     if ($(this).attr("data-background")) {
//       $(this).css(
//         "background-image",
//         "url(" + $(this).data("background") + ")"
//       );
//     }
//   });
// });
