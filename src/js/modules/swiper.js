import  {Swiper,Navigation, Pagination, Scrollbar } from 'swiper'

const swiper = new Swiper('.swiper', {
   modules: [Navigation, Pagination,Scrollbar],
    // Optional parameters
    direction: 'horizontal',
    loop: true,  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
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