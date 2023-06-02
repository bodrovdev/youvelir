import { lock, unlock } from 'tua-body-scroll-lock'

// --- Мобильное меню

// let burger = document.getElementById('burger');
// let mobile_menu = document.getElementById('mobile_menu');
// let nav_list = document.querySelector('.main-nav__nav-list');

// function closeMobileMenu() {
//   burger.classList.remove('main-nav__burger--active');
//   mobile_menu.classList.remove('main-nav__nav-menu--mobile--active');
//   document.body.classList.remove('body-cover');
//   unlock(mobile_menu);
// }

// - Открытие по по клику на бургер

// burger.addEventListener('click', () => {
//   burger.classList.toggle('main-nav__burger--active');
//   mobile_menu.classList.toggle('main-nav__nav-menu--mobile--active');
//   document.body.classList.toggle('body-cover');

//   burger.classList.contains('main-nav__burger--active') ? lock(mobile_menu) : unlock(mobile_menu);
// })

//- Закрытие по клику на пустое место

// document.addEventListener('click', (e) => {
//   if (!document.querySelector('.main-nav').contains(e.target)) {
//     closeMobileMenu();
//   }
// });

// - Закрытие по клику на пункт меню

// nav_list.onclick = (event) => {
//   if (event.target.tagName === 'A') {
//     closeMobileMenu();
//   }
// };

// --- Модалка с формой

// window.addEventListener('load', () => {
//   if (document.querySelector('#modal_with_form') === null) {
//     return;
//   }
//   else {
//     let modal_with_form = document.getElementById('modal-with-form');
//     let modal_with_form_close = document.getElementById('modal-with-form-close');
//     let modal_with_form_buttons = document.querySelectorAll('.page-button');
//     let modal_with_form_formset = document.getElementById('modal_with_form_formset');

//     function closeFormModal() {
//       modal_with_form.classList.remove('modal-form--active');
//       unlock(modal_with_form);
//     }

//     // - Открытие модалки с формой на нажатие кнопки
//     modal_with_form_buttons.forEach((button) => {
//       button.addEventListener('click', () => {
//         modal_with_form.classList.add('modal-form--active');
//         lock(modal_with_form);
//       })
//     })

//     // - Закрытие модалки с формой по нажатию крестика
//     modal_with_form_close.addEventListener('click', () => {
//       closeFormModal();
//     })

//     // - Закрытие модалки с формой по нажатию на пустое место
//     modal_with_form.addEventListener('click', (e) => {
//       if (e.target !== e.currentTarget) {
//         return;
//       }
//       else {
//         closeFormModal();
//       }
//     })

//     // - Подтверждение отправки модалки
//     modal_with_form_formset.addEventListener('submit', (e) => {
//       e.preventDefault();
//       document.querySelector('.modal-form__inner').classList.add('modal-form__inner--hidden');
//       document.querySelector('.modal-form__success').classList.add('modal-form__success--active');
//     })
//   }
// })

// --- Модалка без формы

// window.addEventListener('load', () => {
//   if (document.getElementById('modal_without_form') === null) {
//     return;
//   }
//   else {
//     let modal_without_form = document.getElementById('modal-without-form');
//     let modal_without_form_close = document.getElementById('modal-without-form-close');
//     let modal_without_form_formset = document.querySelectorAll('.modal-without-form__formset');

//     function closeWithoutFormModal() {
//       modal_without_form.classList.remove('modal-without-form--active');
//       unlock(modal_without_form);
//     }

//     // - Появление модалки без формы на событие отправка формы
//     modal_without_form_formset.forEach((form) => {
//       form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         modal_without_form.classList.add('modal-without-form--active');
//         lock(modal_without_form);
//         document.querySelector('.modal__inner').classList.add('modal__inner--hidden');
//         document.querySelector('.modal__success').classList.add('modal__success--active');
//       })
//     });

//     // - Закрытие модалки без формы по нажатию крестика
//     modal_without_form_close.addEventListener('click', () => {
//       closeWithoutFormModal();
//     })

//     // - Закрытие модалки без формы по нажатию на пустое место
//     modal_without_form.addEventListener('click', (e) => {
//       if (e.target !== e.currentTarget) {
//         return;
//       }
//       else {
//         closeWithoutFormModal();
//       }
//     })
//   }
// })