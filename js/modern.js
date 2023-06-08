
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