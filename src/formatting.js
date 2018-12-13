const formattingCodes = {
  redText: 31,
  brightRedText: 91,
  greenText: 32,
  brightGreenText: 92,
  yellowText: 33,
  brightYellowText: 93,
  blueText: 34,
  brightBlueText: 94,
  magentaText: 35,
  brightMagentaText: 95,
  cyanText: 36,
  brightCyanText: 96,
  blackText: 30,
  darkGrayText: 90,
  brightGrayText: 37,
  whiteText: 97,
  redBackground: 41,
  brightRedBackground: 101,
  greenBackground: 42,
  brightGreenBackground: 102,
  yellowBackground: 43,
  brightYellowBackground: 103,
  blueBackground: 44,
  brightBlueBackground: 104,
  magentaBackground: 45,
  brightMagentaBackground: 105,
  cyanBackground: 46,
  brightCyanBackground: 106,
  blackBackground: 40,
  darkGrayBackground: 100,
  brightGrayBackground: 47,
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
  return `\u001b[${formattingCodes[format]};1m`
}

let format = (format) => {
  return createEscapeCode(format)
}

module.exports = format
