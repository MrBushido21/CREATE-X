
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
const buttonSub = document.querySelector('.subscribe__button-sub');
const buttonSend = document.querySelector('.subscribe__button-send');
const popup = document.querySelector('.subscribe__popup');
const popupSend = document.querySelector('.send');
const popupClose = document.querySelector('.form__close');
const popupSendClose = document.querySelector('.send-close');

buttonSub.addEventListener('click', function(event) {
  popup.classList.toggle('active')
  document.body.classList.add('_lock');
  event.preventDefault()
})
buttonSend.addEventListener('click', function(event) {
  popupSend.classList.toggle('active')
  document.body.classList.add('_lock');
  event.preventDefault()
})

popupClose.addEventListener('click', function() {
  popup.classList.remove('active');
  document.body.classList.remove('_lock');
})
popupSendClose.addEventListener('click', function() {
  popupSend.classList.remove('active');
  document.body.classList.remove('_lock');
})

window.addEventListener('click', function(evt) {
  if (evt.target === popup) {
    popup.classList.remove('active');
    popupSend.classList.remove('active');
    document.body.classList.remove('_lock');
  }
});
window.addEventListener('click', function(evt) {
  if (evt.target === popupSend) {
    popupSend.classList.remove('active');
    document.body.classList.remove('_lock');
  }
});
//================================================================================================================================================
//-----------------TEXT---------------\
const label = document.querySelector('.form-label');
const form = document.querySelector('.form__form');

label.addEventListener('click', function() {
  if (!label.classList.contains('active')) {
    label.classList.add('active');
  } else {
    label.classList.remove('active');
  } 
});

form.addEventListener('submit', function(event) {
  if(!label.classList.contains('active')) {
    event.preventDefault()
    label.classList.add('error');
    alert('Ви маєте погодитися із правилами!');
  } else {
    label.classList.remove('error');
  }
});
