// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  primaryText: "#16110D",
  
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#F4E0D9",
  primary200: "#E8C1B4",
  primary300: "#DDA28E",
  primary400: "#D28468",
  primary500: "#C76542",
  primary600: "#A54F31",

  secondary100: "#DCDDE9",
  secondary200: "#BCC0D6",
  secondary300: "#9196B9",
  secondary400: "#626894",
  secondary500: "#41476E",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#F2D6CD",
  angry500: "#C03403",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.primaryText, // #FEFEFE
  textDark: "#FEFEFE",
  AccountCardActivatedText : "#FEFEFE", // 
  description: "#C4C4C4",
  menuIcons: "#DCDCDC",
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral200, // #16110D
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.neutral300,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,

  dark:{
    background: "#16110D",
    cardBackground: "#2F2E33",
    description: "#646464",
    text:"#FEFEFE",
    border: "#646464",
    id: "#646464",
    currency: "#646464",
    icon: "#646464"
  },

  light:{
    background: "#523CF8",
    cardBackground: "#FFFFFF",
    description: "#646464",
    text:"#16110D",
    border: "#DCDCDC",
    id: "#16110D",
    currency: "#16110D",
    icon: "#DCDCDC"
  },


  orangeBackground: "#F76654",
  violetBackground: "#523CF8",
  whiteBackground: "#FFFFFF",
}
