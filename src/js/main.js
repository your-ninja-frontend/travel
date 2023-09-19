const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close'),
  navLink = document.querySelectorAll('.nav__link');

const toggleMenu = () => {
  navMenu.classList.toggle('nav__show-menu');
};

if (navToggle) {
  navToggle.addEventListener('click', toggleMenu);
}

if (navClose) {
  navClose.addEventListener('click', toggleMenu);
}

function linkAction() {
  navMenu.classList.remove('nav__show-menu');
}

navLink.forEach(el => el.addEventListener('click', linkAction))

/* HEADER */

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 100) {
    header.classList.add('scroll-header')
  } else {
    header.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/* SWIPER */

const swiperDiscover = new Swiper('.swiper', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 32,
  loop: true,
  coverflowEffect: {
    rotate: 0,
  },
});

/* VIDEO */

const videoFile = document.getElementById('video-file'),
  videoBtn = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon');

function toggleIcon(add, remove) {
  videoIcon.classList.add(add);
  videoIcon.classList.remove(remove);
}

function playPause() {
  if (videoFile.paused) {
    videoFile.play();
    toggleIcon('ri-pause-line', 'ri-play-line');
  } else {
    videoFile.pause();
    toggleIcon('ri-play-line', 'ri-pause-line');
  }
}

videoBtn.addEventListener('click', playPause);

function finalVideo() {
  toggleIcon('ri-play-line', 'ri-pause-line');
};

videoFile.addEventListener('ended', finalVideo);

// SCROLL UP

function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 200) scrollUp.classList.add('scrollup--show')
  else scrollUp.classList.remove('scrollup--show');
};

window.addEventListener('scroll', scrollUp)

// ACTIVE LINK

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('nav__link--active')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('nav__link--active')
    }
  });
}

window.addEventListener('scroll', scrollActive)

// THEME

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
};

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});


// SCROLL ANIMATION

const sr = ScrollReveal({
  distance: '60px',
  duration: 2800,
  reset: true,
});


sr.reveal(`.home__data, .home__social-link, .home__info,
         .discover__container,
         .experience__data, .experience__overlay,
         .place__card,
         .sponsor__content,
         .footer__data, .footer__rights`, {
  origin: 'top',
  interval: 100,
});

sr.reveal(`.about__data, 
         .video__description,
         .subscribe__description`, {
  origin: 'left',
});

sr.reveal(`.about__img-overlay, 
         .video__content,
         .subscribe__form`, {
  origin: 'right',
  interval: 100,
});
