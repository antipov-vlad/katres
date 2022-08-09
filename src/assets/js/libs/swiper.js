import Swiper, { Navigation, Pagination } from '../../../../node_modules/swiper/swiper.esm.js';

export const abc = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});

export default abc