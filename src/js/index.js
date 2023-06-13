import { lock, unlock } from 'tua-body-scroll-lock'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

// --- Мобильное меню

let burger = document.getElementById('burger');
let mobile_menu = document.getElementById('mobile_menu');
let nav_list = document.querySelector('.main-nav__nav-list');

function closeMobileMenu() {
  burger.classList.remove('main-nav__burger--active');
  mobile_menu.classList.remove('main-nav__nav-menu--mobile--active');
  document.body.classList.remove('body-cover');
  unlock(mobile_menu);
}

// - Открытие по по клику на бургер

burger.addEventListener('click', () => {
  burger.classList.toggle('main-nav__burger--active');
  mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');
  document.body.classList.toggle('body-cover');

  burger.classList.contains('main-nav__burger--active') ? lock(mobile_menu) : unlock(mobile_menu);
})

//- Закрытие по клику на пустое место

document.addEventListener('click', (e) => {
  if (!document.querySelector('.main-nav').contains(e.target)) {
    closeMobileMenu();
  }
});

// - Закрытие по клику на пункт меню

nav_list.onclick = (event) => {
  if (event.target.tagName === 'A') {
    closeMobileMenu();
  }
};

// --- Модалка с формой

window.addEventListener('load', () => {
  if (document.querySelector('#modal_with_form') === null) {
    return;
  }
  else {
    const modal_with_form = document.getElementById('modal_with_form');
    const modal_with_form_close = document.getElementById('modal_with_form_close');
    const modal_with_form_buttons = document.querySelectorAll('.modal-with-form__button');
    const modal_with_form_formset = document.querySelector('.modal-with-form__formset');

    function closeFormModal() {
      modal_with_form.classList.remove('modal-with-form--active');
      enableBodyScroll(modal_with_form);
      // unlock(modal_with_form);
    }

    // - Открытие модалки с формой на нажатие кнопки
    modal_with_form_buttons.forEach((button) => {
      button.addEventListener('click', () => {
        modal_with_form.classList.add('modal-with-form--active');
        disableBodyScroll(modal_with_form);
        // lock(modal_with_form);
      })
    })

    // - Закрытие модалки с формой по нажатию крестика
    modal_with_form_close.addEventListener('click', () => {
      closeFormModal();
    })

    // - Закрытие модалки с формой по нажатию на пустое место
    modal_with_form.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        closeFormModal();
      }
    })

    // - Подтверждение отправки модалки
    modal_with_form_formset.addEventListener('submit', (e) => {
      e.preventDefault();
      document.querySelector('.modal-with-form__inner').classList.add('modal-with-form__inner--hidden');
      document.querySelector('.modal-with-form__success').classList.add('modal-with-form__success--active');
    })
  }
})

// --- Модалка без формы

window.addEventListener('load', () => {
  if (document.getElementById('modal_without_form') === null) {
    return;
  }
  else {
    const modal_without_form = document.getElementById('modal_without_form');
    const modal_without_form_close = document.getElementById('modal_without_form_close');
    const modal_without_form_formset = document.querySelectorAll('.modal-without-form__formset');

    function closeWithoutFormModal() {
      modal_without_form.classList.remove('modal-without-form--active');
      enableBodyScroll(modal_without_form)
      // unlock(modal_without_form);
    }

    // - Появление модалки без формы на событие отправка формы
    modal_without_form_formset.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal_without_form.classList.add('modal-without-form--active');
        disableBodyScroll(modal_without_form);
        // lock(modal_without_form);
      })
    });

    // - Закрытие модалки без формы по нажатию крестика
    modal_without_form_close.addEventListener('click', () => {
      closeWithoutFormModal();
    })

    // - Закрытие модалки без формы по нажатию на пустое место
    modal_without_form.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) {
        return;
      }
      else {
        closeWithoutFormModal();
      }
    })
  }
})

// --- Табы

window.addEventListener('load', () => {
  if (document.querySelector('.tabs__buttons-item') === null) {
    return;
  }
  else {
    let tabs_buttons = document.querySelectorAll('.tabs__buttons-item');
    let tabs_items = document.querySelectorAll('.tabs__content-slider-container')

    tabs_buttons.forEach((button) => {
      button.addEventListener('click', () => {
        tabs_buttons.forEach((button_item) => { button_item.classList.remove('tabs__buttons-item--active') })
        button.classList.add('tabs__buttons-item--active');

        tabs_items.forEach((item) => {
          if (button.dataset.tab === item.dataset.tab) {
            tabs_items.forEach((value) => { value.classList.remove('tabs__content-slider-container--active') });
            item.classList.add('tabs__content-slider-container--active');
          }
        })
      })
    })
  }
})

// --- Кнопки во втором блоке с вызовом модалки

window.addEventListener('load', () => {
  if (document.querySelector('.feedback2__info-button') === null) {
    return;
  }
  else {
    let feedback2_buttons = document.querySelectorAll('.feedback2__info-button');

    feedback2_buttons.forEach((button) => {
      button.addEventListener('mouseover', () => {
        button.classList.contains('feedback2__info-button--active') ?
          button :
          (function () {
            feedback2_buttons.forEach((button_value) => { button_value.classList.remove('feedback2__info-button--active') });
            button.classList.add('feedback2__info-button--active');
          }())
      })
    })
  }
});

// --- Текущий год

window.addEventListener('load', () => {
  if (document.querySelector('.current-year') === null) {
    return;
  }
  else {
    let current_year = document.querySelector('.current-year');
    current_year.textContent = new Date().getFullYear();
  }
});