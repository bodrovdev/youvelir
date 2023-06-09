import Swiper from 'swiper/bundle';

let tabs_slider = new Swiper(".tabs__content-item-slider", {
  direction: "horizontal",
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  slidesPerView: "auto",

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
  Array.isArray(tabs_slider) ?

    tabs_slider.forEach((slider) => {
      console.log(slider);
      slider.pagination.update();

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

    }) :

    tabs_slider.pagination.update();
})

var init_celeb_slider = false;

function celeb_slider() {
  if (window.innerWidth <= 1719) {
    if (!init_celeb_slider) {
      init_celeb_slider = true;
      var celeb_slider = new Swiper(".celeb__slider", {
        direction: "horizontal",
        spaceBetween: 30,
        slidesPerView: "auto",

        navigation: {
          nextEl: '.celeb__slider-arrow--next',
          prevEl: '.celeb__slider-arrow--prev',
        },

        pagination: {
          el: ".celeb__slider-pagination",
          type: "progressbar",
        },
      });
    }
  } else if (init_celeb_slider) {
    celeb_slider.destroy();
    init_celeb_slider = false;
  }
}
celeb_slider();
window.addEventListener("resize", celeb_slider);

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