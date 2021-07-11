const LOGO_BLUE = "#183D43"
const LOGO_YELLOW = "#FDC700"
const WHITE = "#FFFFFF"
const YELLOWISH_WHITE = "#FAFAFB"
const BLACK = "#000000"
const BLUISH_BLACK = "#000D1A"
const BLUE_GRADIENT =
  "linear-gradient(239.92deg, #007474 0.79%, #013A44 43.23%)"

export const lightTheme = {
  background: {
    primary: WHITE,
    secondary: YELLOWISH_WHITE,
    tertiary: LOGO_YELLOW,
  },
  color: {
    primary: LOGO_BLUE,
    secondary: BLACK,
    tertiary: BLUISH_BLACK,
  },
}

export const darkTheme = {
  background: {
    primary: BLUE_GRADIENT,
    secondary: LOGO_BLUE,
    tertiary: BLUISH_BLACK,
  },
  color: {
    primary: WHITE,
    secondary: YELLOWISH_WHITE,
    tertiary: LOGO_YELLOW,
  },
}
