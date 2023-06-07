import Swiper from 'swiper/bundle';

let tabs_slider = new Swiper(".tabs__content-item-slider", {
  direction: "horizontal",
  spaceBetween: 10,
  observer: true,
  observeParents: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
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

window.addEventListener('load', () => {
  tabs_slider.forEach((slider) => {
    slider.pagination.update();
  })

  let tabs_buttons = document.querySelectorAll('.tabs__buttons-item');
  tabs_buttons.forEach((button) => {
    button.addEventListener('click', () => {
      tabs_slider.forEach((slider_item) => {
        if (button.dataset.tab === slider_item.wrapperEl.parentElement.parentElement.dataset.tab) {
          slider_item.pagination.update();
        }
      })
    })
  })
})

let celeb_slider = new Swiper(".celeb__slider", {
  direction: "horizontal",
  spaceBetween: 30,

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
    nextEl: '.celeb__slider-arrow--next',
    prevEl: '.celeb__slider-arrow--prev',
  },

  pagination: {
    el: ".celeb__slider-pagination",
    type: "progressbar",
  },
});

var init_gallery_slider = false;

function gallery_slider() {
  if (window.innerWidth <= 1919) {
    if (!init_gallery_slider) {
      init_gallery_slider = true;
      var gallery_slider = new Swiper(".gallery__slider", {
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: "auto",

        pagination: {
          el: ".gallery__slider-pagination",
          type: "progressbar",
        },
      });
    }
  } else if (init_gallery_slider) {
    gallery_slider.destroy();
    init_gallery_slider = false;
  }
}
gallery_slider();
window.addEventListener("resize", gallery_slider);