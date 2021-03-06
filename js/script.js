// ---MOBILE MENU---

const hamburgerIcon = document.getElementById('hamburger');
const nav = document.getElementById('navigation');
const navLinks = document.getElementsByClassName('navigation__item');
const navList = document.getElementById('nav-list');
const submenuOpener = document.querySelector('#submenu-opener');
const submenu = document.querySelector('#submenu');

// open and close mobile menu after 'click' on hamburger
// TODO złe wcięcie, powinno być -1
hamburgerIcon.onclick = () => {
  hamburgerIcon.classList.toggle('hamburger--active');
  nav.classList.toggle('navigation--active');
  navList.classList.toggle('navigation__list--active');
};

// close mobile menu after 'click' on menu link
const closeMenu = () => {
  hamburgerIcon.classList.remove('hamburger--active');
  nav.classList.remove('navigation--active');
  navList.classList.remove('navigation__list--active');
};

for (let navLink of navLinks) {
  navLink.onclick = closeMenu;
}

// ---OPEN MOBILE SUBMENU---

window.addEventListener('touchstart', () => {
  submenuOpener.onclick = () => {
    event.stopPropagation(); 
    submenu.classList.toggle('submenu--active');
  };
});
