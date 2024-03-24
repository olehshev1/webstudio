(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu__btn'),
    closeMenuBtn: document.querySelector('.menu__btn-close'),
    menu: document.querySelector('.menu-mob'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();