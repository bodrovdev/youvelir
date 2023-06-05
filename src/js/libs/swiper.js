import Swiper from 'swiper/bundle';

// var init = false;

// function mobile_slider() {
//   if (window.innerWidth <= 1279) {
//     if (!init) {
//       init = true;
//       var mobile_slider = new Swiper(".slider__class", {
//         direction: "horizontal",
//         spaceBetween: 10,

//         breakpoints: {
//           320: {
//             slidesPerView: 1
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           }
//         },

//         pagination: {
//           el: ".slider__class-pagination",
//           clickable: true,
//         },
//       });
//     }
//   } else if (init) {
//     mobile_slider.destroy();
//     init = false;
//   }
// }
// mobile_slider();
// window.addEventListener("resize", mobile_slider);

let tabs_slider = new Swiper(".tabs__content-item-slider", {
  direction: "horizontal",
  spaceBetween: 10,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: "auto",
    }
  },

  navigation: {
    nextEl: '.tabs__slider-arrow--next',
    prevEl: '.tabs__slider-arrow--prev',
  },

  pagination: {
    el: ".tabs__content-slider-pagination",
    type: "progressbar",
  },
});