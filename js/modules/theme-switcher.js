const initThemeSwitcher = () => {
  if (localStorage) {
    const buttons = [...document.querySelectorAll('input[name="theme"]')]
    setTheme(buttons)
    saveTheme(buttons)
  }
}

const saveTheme = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener('input', () => {
      localStorage.setItem('theme', button.value)
    })
  })
}

const setTheme = (buttons) => {
  const currentTheme = localStorage.getItem('theme')

  if (currentTheme) {
    const currentThemeButton = buttons.find((button) => button.value === currentTheme)
    currentThemeButton.checked = true
  }
}

initThemeSwitcher()
