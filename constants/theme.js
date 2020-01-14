const colors = {
  accent: "#F3534A",
  primary: "#0AC4BA",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  gray2: "#C5CCD6",
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  h4: 14,
  title: 18,
  header: 16,
  inputText: 14,
  body: 14,
  caption: 12,
  SFUITextBold: 'SFUIText-Bold',
  SFUITextSemibold: 'SFUIText-Semibold'
};

const fonts = {
  h1: {
    fontSize: sizes.h1
  },
  h2: {
    fontSize: sizes.h2
  },
  h3: {
    fontSize: sizes.h3
  },
  h4: {
    fontSize: sizes.h3
  },
  header: {
    fontSize: sizes.header
  },
  inputText: {
    fontSize: sizes.inputText
  },
  title: {
    fontSize: sizes.title
  },
  body: {
    fontSize: sizes.body
  },
  caption: {
    fontSize: sizes.caption
  },

  SFUITextBold: {
    fontFamily: sizes.SFUITextBold
  }
};

export { colors, sizes, fonts };