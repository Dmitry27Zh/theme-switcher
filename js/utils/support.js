const isSelectorSupported = (selector) => {
  try {
    document.querySelector(selector)
    return true
  } catch (e) {
    return false
  }
}

export { isSelectorSupported }
