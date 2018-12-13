const formattingCodes = {
  redText: 31,
  lightRedText: 91,
  greenText: 32,
  lightGreenText: 92,
  yellowText: 33,
  lightYellowText: 93,
  blueText: 34,
  lightBlueText: 94,
  magentaText: 35,
  lightMagentaText: 95,
  cyanText: 36,
  lightCyanText: 96,
  blackText: 30,
  darkGrayText: 90,
  lightGrayText: 37,
  whiteText: 97,
  redBackground: 41,
  lightRedBackground: 101,
  greenBackground: 42,
  lightGreenBackground: 102,
  yellowBackground: 43,
  lightYellowBackground: 103,
  blueBackground: 44,
  lightBlueBackground: 104,
  magentaBackground: 45,
  lightMagentaBackground: 105,
  cyanBackground: 46,
  lightCyanBackground: 106,
  blackBackground: 40,
  darkGrayBackground: 100,
  lightGrayBackground: 47,
  whiteBackground: 107,
  // aliases
  defaultForeground: 39,
  defaultBackground: 49,
  // formatting
  bright: 1,
  dim: 2,
  underline: 4,
  blink: 5,
  reverse: 7,
  hidden: 8,
  // resets
  resetAll: 0,
  resetBright: 21,
  resetDim: 22,
  resetUnderline: 24,
  resetBlink: 25,
  resetReverse: 27,
  resetHidden: 28
} 

let createEscapeCode = (format) => {
  return `\e[$(format)m`
}

let format = (format) => {
  return createEscapeCode(format)
}

module.exports = format