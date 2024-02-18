const themeButtons = document.querySelectorAll('.header__theme-menu-button');

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button--active');
      btn.removeAttribute('disabled');
    });
    if (
      [...button.classList].includes('header__theme-menu-button--type-light')
    ) {
      changeTheme('light');
    } else if (
      [...button.classList].includes('header__theme-menu-button--type-dark')
    ) {
      changeTheme('dark');
    } else {
      changeTheme('auto');
    }
    button.classList.add('header__theme-menu-button--active');
    button.setAttribute('disabled', true);
  });
});

function changeTheme(theme) {
  document.body.className = 'page';
  document.body.classList.add(`theme_${theme}`);
  localStorage.setItem('theme', theme);
}

function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
    themeButtons.forEach((btn) => {
      btn.classList.remove('header__theme-menu-button--active');
      btn.removeAttribute('disabled');
    });
    document
      .querySelector(`.header__theme-menu-button--type-${theme}`)
      .classList.add('header__theme-menu-button--active');
    document
      .querySelector(`.header__theme-menu-button--type-${theme}`)
      .setAttribute('disabled', true);
  }
}

initTheme();
