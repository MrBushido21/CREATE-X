
const scrolBtn = document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 700) {
    scrolBtn.classList.add('active');
  } else if (window.scrollY < 700) {
    scrolBtn.classList.remove('active');
  }

})
//================================================================================================================================================
//-----------------TEXT---------------\
const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');

burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    // document.body.classList.toggle('lock');
})
//================================================================================================================================================
//-----------------TEXT---------------\
const galleryThumbs = new Swiper('.gallery-thumbs', {
    slidesPerView: 6,
  });
  const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs
    }
  });
//================================================================================================================================================
  //-----------------TEXT---------------\
  const swiperProject = new Swiper('.swiper-project', {

    loop: true,
    speed: 1500,
    slidesPerView: 3, // количесвто слайдов 
    slidesPerGroup: 1, // колчиство пролистываемых слайдов
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 1500, // пауза между прокруткой
      disableOnInteraction: true, //отключить после ручного переключания
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      120: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
