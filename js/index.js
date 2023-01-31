// NavBar Mobile Responsiveness Variables
let menuButton = document.querySelector('.navbar__menu');
let navItems = document.querySelector('.navbar__list');
let header = document.querySelector('.navbar');
let barHide = document.querySelector('.navbar__menu-bar:nth-child(1)');
let barLeft = document.querySelector('.navbar__menu-bar:nth-child(2)');
let barRight = document.querySelector('.navbar__menu-bar:nth-child(3)');

// changeColorOnScroll Variable
var previousScroll = 0;
var currentScroll;
var navBar = document.getElementsByClassName('navbar');
var navLogoList = document.getElementsByClassName('navbar__logo--list');
var navLogoItem = document.getElementsByClassName('navbar__logo--list-item');
var navListItem = document.getElementsByClassName('navbar__list-item');
var navListDecorator = document.getElementsByClassName('navbar__list-decorator');

// Change NavBar Color On Scroll
function changeColorOnScroll() {
  window.addEventListener('scroll', function () {
    currentScroll = window.pageYOffset;
    if (currentScroll > previousScroll) {
      navBar[0].style.background = '#ffffff';
      navLogoList[0].style.display = 'block';
      navLogoItem[0].style.color = '#4d4d4d';
      for (var i = 0; i < navListItem.length; i++) {
        navListItem[i].style.color = '#414f6b';
      }
      for (var i = 0; i < navListDecorator.length; i++) {
        navListDecorator[i].style.backgroundColor = '#414f6b';
      }
    } else {
      if (currentScroll === 0) {
        navBar[0].style.background = 'transparent';
        for (var i = 0; i < navListItem.length; i++) {
          navListItem[i].style.color = '#ffffff';
        }
        for (var i = 0; i < navListDecorator.length; i++) {
          navListDecorator[i].style.backgroundColor = '#ffffff';
        }
        navLogoList[0].style.display = 'none';
        navItems.classList.remove('navbar__list-toggle');
        barHide.classList.remove('navbar__menu-bar-hide');
        barLeft.classList.remove('navbar__menu-bar-cross');
        barRight.classList.remove('navbar__menu-bar-across');
      }
    }
    previousScroll = currentScroll;
  });
}

function openMenu() {
  navItems.classList.toggle('navbar__list-toggle');
  barHide.classList.toggle('navbar__menu-bar-hide');
  barLeft.classList.toggle('navbar__menu-bar-cross');
  barRight.classList.toggle('navbar__menu-bar-across');

  let nav = document.querySelector('.navbar__list-toggle');

  if (nav) {
    header.style.overflow = 'hidden';
    header.style.backgroundColor = '#ffffff';
    navLogoList[0].style.display = 'block';
    navLogoItem[0].style.color = '#4d4d4d';
    for (var i = 0; i < navListItem.length; i++) {
      navListItem[i].style.color = '#414f6b';
    }
    for (var i = 0; i < navListDecorator.length; i++) {
      navListDecorator[i].style.backgroundColor = '#414f6b';
    }
  } else {
    header.style.height = 'auto';
    header.style.backgroundColor = 'transparent';
  }
}

var mountainOne = document.getElementById('mountainOne');
var mountainTwo = document.getElementById('mountainTwo');
var button = document.getElementsByClassName('mountains__menu-item');

function showMountainOne() {
  mountainOne.style.display = 'block';
  mountainTwo.style.display = 'none';
  button[0].classList.add('active');
  button[1].classList.remove('active');
}
function showMountainTwo() {
  mountainOne.style.display = 'none';
  mountainTwo.style.display = 'block';
  button[0].classList.remove('active');
  button[1].classList.add('active');
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  loopFillGroupWithBlank: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

menuButton.onclick = openMenu;
document.addEventListener('DOMContentLoaded', changeColorOnScroll);
