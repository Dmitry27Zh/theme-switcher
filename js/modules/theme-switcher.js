import { isSelectorSupported } from '../utils/support.js'

const initThemeSwitcher = () => {
  if (localStorage) {
    const buttons = [...document.querySelectorAll('input[name="theme"]')]
    const isCSSOnly = isSelectorSupported(':root:has(body)')
    setThemeAfterLoad(buttons, isCSSOnly)
    saveTheme(buttons, isCSSOnly)
  }
}

const saveTheme = (buttons, isCSSOnly) => {
  buttons.forEach((button) => {
    button.addEventListener('input', () => {
      const currentTheme = button.value
      localStorage.setItem('theme', currentTheme)
      setTheme(currentTheme, isCSSOnly)
    })
  })
}

const setThemeAfterLoad = (buttons, isCSSOnly) => {
  const currentTheme = localStorage.getItem('theme')

  if (currentTheme) {
    const currentThemeButton = buttons.find((button) => button.value === currentTheme)
    currentThemeButton.checked = true
    setTheme(currentTheme, isCSSOnly)
  }
}

const setTheme = (theme, isCSSOnly) => {
  if (!isCSSOnly) {
    document.documentElement.dataset.theme = theme
  }
}

initThemeSwitcher()
