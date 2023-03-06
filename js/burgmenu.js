(() => {
  const refs = {
    openMenuBtn: document.querySelector("[burg-menu-open]"),
    closeMenuBtn: document.querySelector("[burg-menu-close]"),
    menu: document.querySelector("[burg-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();

const themeButton = document.querySelector('.switch-btn');

themeButton.addEventListener('click', changeTheme);

function changeTheme() { 
    const textLight = document.querySelector('.switch-btn_choice_light');
    const textDark = document.querySelector('.switch-btn_choice_dark');
    const iconLight = document.querySelector('.switch-btn_choice_ligh-icon');
    const iconDark = document.querySelector('.switch-btn_choice_dark-icon');
  const switchButton = document.querySelector('.switch-btn');
  const burgBackground = document.querySelector('.burg-menu .dark');
    switchButton.classList.toggle('switch-on');

    if (switchButton.classList.contains('switch-on')) {
        textLight.style.color = '#5F6775';
        textDark.style.color = '#4B48DB';
        iconLight.style.fill = '#5F6775';
        iconDark.style.fill = '#4B48DB';
      switchButton.style.background = '#111321';
      burgBackground.style.background = '#2E2E2E';
    } else {
        textDark.style.color = '#5F6775';
        textLight.style.color = '#4B48DB';
        iconDark.style.fill = '#5F6775';
        iconLight.style.fill = '#4B48DB';
      switchButton.style.background = 'white';
      burgBackground.style.background = '#F4F4F4';
    }
}