
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

const swiper = new Swiper('.sub-header', {

    loop: true,
    speed: 1500,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 1500, // пауза между прокруткой
      disableOnInteraction: true, //отключить после ручного переключания
    },
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
  //================================================================================================================================================
  //-----------------TEXT---------------\
  const swiperClients = new Swiper('.swiper-clients', {

    loop: true,
    speed: 1500,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1, // количесвто слайдов 
    slidesPerGroup: 1, // колчиство пролистываемых слайдов
    spaceBetween: 30,

    autoplay: {
      delay: 1500, // пауза между прокруткой
      disableOnInteraction: true, //отключить после ручного переключания
    },
  });

  //================================================================================================================================================
  //-----------------TEXT---------------\
  //================================================================================================================================================
  //-----------------TEXT---------------\
  //================================================================================================================================================
  //-----------------TEXT---------------\    
  (function () {
    const prosgress = document.querySelectorAll('.progressbar');
  
    function setProgress(el) {
      const valueEl = el.querySelector('.percent');
      const valueNumb = el.querySelector('.percent-number');
      let value = +valueEl.innerHTML;
      let valueN = +valueNumb.innerHTML;
  
      let i = 0;
      let a = 0;
      function animateProgress() {
        i++;
        a++;
        value = i;
        valueN = a;
        valueEl.innerHTML = value + "%";
        valueNumb.innerHTML = valueN + 8 + "%";
        const deg = (360 * value / 100) + 180;
        el.querySelector('.piece.right').style.transform = `rotate(${deg}deg)`;
  
        if (value >= 50) {
          el.classList.add('over_50');
        } else {
          el.classList.remove('over_50');
        }
  
        if ( i === 90) {
          clearInterval(intervalId);
        }
      }
  
      let intervalId = setInterval(animateProgress, 50);
    }
  
    function handleScroll() {
      prosgress.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight && rect.bottom >= 0;
  
        if (isVisible) {
          setProgress(el);
          // Видаляємо обробник події, якщо елемент вже з'явився на екрані
          window.removeEventListener('scroll', handleScroll);
        }
      });
    }
  
    // Додаємо обробник події scroll до вікна браузера
    window.addEventListener('scroll', handleScroll);
  })();
  
  //================================================================================================================================================
  //-----------------TEXT---------------\
  (function () {
    const prosgress = document.querySelectorAll('.progressbar-seconde');
  
    function setProgress(el) {
      const valueEl = el.querySelector('.percent-seconde');
      const valueNumb = el.querySelector('.percent-number-seconde');
      let value = +valueEl.innerHTML;
      let valueN = +valueNumb.innerHTML;
  
      let i = 0;
      let a = 0;
  
      function animateProgress() {
        i++;
        a += 0.25;
        value = i;
        valueN = a;
        valueEl.innerHTML = value;
        valueNumb.innerHTML = (valueN ^ 0) + 2;
  
        const deg = (360 * value / 100) + 180;
        el.querySelector('.piece.right').style.transform = `rotate(${deg}deg)`;
  
        if (value >= 50) {
          el.classList.add('over_50');
        } else {
          el.classList.remove('over_50');
        }
  
        if (i === 75) {
          valueN - 55;
          clearInterval(intervalId);
        }
      }
  
      let intervalId = setInterval(animateProgress, 50);
    }
  
    function handleScroll() {
      prosgress.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight && rect.bottom >= 0;
  
        if (isVisible) {
          setProgress(el);
          // Видаляємо обробник події, якщо елемент вже з'явився на екрані
          window.removeEventListener('scroll', handleScroll);
        }
      });
    }
  
    // Додаємо обробник події scroll до вікна браузера
    window.addEventListener('scroll', handleScroll);
  })();
  //================================================================================================================================================
  //-----------------TEXT---------------\
  (function () {
    const progress = document.querySelectorAll('.progressbar-third');
  
    function setProgress(el) {
        const valueEl = el.querySelector('.percent-third');
        const valueNumb = el.querySelector('.percent-number-third');
        let value = +valueEl.innerHTML;
        let valueN = +valueNumb.innerHTML;
  
        let i = 0;
        let a = 0;
  
        function animateProgress() {
            i++;
            a += 118;
            value = i;
            valueN = a;
            valueEl.innerHTML = value;
            valueNumb.innerHTML = valueN + 12;
  
            const deg = (360 * value / 100) + 180;
            el.querySelector('.piece.right').style.transform = `rotate(${deg}deg)`;
  
            if (value >= 50) {
                el.classList.add('over_50');
            } else {
                el.classList.remove('over_50');
            }
  
            if (i === 80) {
                clearInterval(intervalId);
            }
        }
  
        let intervalId = setInterval(animateProgress, 50);
    }
  
    function handleScroll() {
        progress.forEach(el => {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isVisible = rect.top < windowHeight && rect.bottom >= 0;
  
            if (isVisible) {
                setProgress(el);
                // Видаляємо обробник події, якщо елемент вже з'явився на екрані
                window.removeEventListener('scroll', handleScroll);
            }
        });
    }
  
    // Додаємо обробник події scroll до вікна браузера
    window.addEventListener('scroll', handleScroll);
  })();
  //================================================================================================================================================
  //-----------------TEXT---------------\
  (function () {
    const prosgress = document.querySelectorAll('.progressbar-foths');
  
    function setProgress(el) {
      const valueEl = el.querySelector('.percent-foths');
      const valueNumb = el.querySelector('.percent-number-foths');
      let value = +valueEl.innerHTML;
      let valueN = +valueNumb.innerHTML;
  
      let i = 0;
      let a = 0;
  
      function animateProgress() {
        i++;
        a++;
        value = i;
        valueN = a;
        valueEl.innerHTML = value + "%";
        valueNumb.innerHTML = valueN + "%";
        const deg = (360 * value / 100) + 180;
        el.querySelector('.piece.right').style.transform = `rotate(${deg}deg)`;
  
        if (value >= 50) {
          el.classList.add('over_50');
        } else {
          el.classList.remove('over_50');
        }
  
        if (i === 100) {
          clearInterval(intervalId);
        }
      }
  
      let intervalId = setInterval(animateProgress, 50);
    }
  
    function handleScroll() {
      prosgress.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const isVisible = rect.top < windowHeight && rect.bottom >= 0;
  
        if (isVisible) {
          setProgress(el);
          // Видаляємо обробник події, якщо елемент вже з'явився на екрані
          window.removeEventListener('scroll', handleScroll);
        }
      });
    }
  
    // Додаємо обробник події scroll до вікна браузера
    window.addEventListener('scroll', handleScroll);
  })();
  //================================================================================================================================================
  //-----------------TEXT---------------\
  //================================================================================================================================================
  //-----------------TEXT---------------\

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
//================================================================================================================================================
//-----------------TEXT---------------\
const items = document.querySelectorAll('.offer__item');

function toggleClassAtive() {
  items.forEach(el => {
    if(el !== this) {
      el.classList.remove('active')
    }
  })

  this.classList.toggle('active')
}

items.forEach(el => {
  el.addEventListener('click', toggleClassAtive);
})


//================================================================================================================================================
//-----------------TEXT---------------\
const buttonsProtfolio = document.querySelectorAll('.categories__item');
const blockAllProjects = document.querySelector('.protfolio__all-projects');

buttonsProtfolio[0].addEventListener('click', function() {
  blockAllProjects.classList.add('active')
  buttonsProtfolio[0].classList.add('active')
  buttonsProtfolio[1].classList.remove('active')
  buttonsProtfolio[3].classList.remove('active')
  blockConstruction.classList.remove('active')
  blockInterior.classList.remove('active')
})

const blockConstruction = document.querySelector('.protfolio__construction');

buttonsProtfolio[1].addEventListener('click', function() {
  blockAllProjects.classList.remove('active')
  blockConstruction.classList.add('active')
  buttonsProtfolio[1].classList.add('active')
  blockInterior.classList.remove('active')
  buttonsProtfolio[0].classList.remove('active')
  buttonsProtfolio[3].classList.remove('active')
})

const blockInterior = document.querySelector('.protfolio__interior');

buttonsProtfolio[3].addEventListener('click', function() {
  blockAllProjects.classList.remove('active')
  blockConstruction.classList.remove('active')
  blockInterior.classList.add('active')
  buttonsProtfolio[3].classList.add('active')
  buttonsProtfolio[0].classList.remove('active')
  buttonsProtfolio[1].classList.remove('active')
})
//================================================================================================================================================
//-----------------TEXT---------------\
const buttonLoad = document.querySelector('.protfolio__button');
const imgRow = document.querySelector('.last-row');

buttonLoad.addEventListener('click', function() {
imgRow.classList.add('active');
buttonLoad.classList.add('active');
})
//================================================================================================================================================
//-----------------TEXT---------------\
