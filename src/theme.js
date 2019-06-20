import { createMuiTheme } from "@material-ui/core/styles"
import createBreakpoints from "@material-ui/core/styles/createBreakpoints"

function pxToRem(value) {
  return `${value / 16}rem`
}

const breakpoints = createBreakpoints({})
const theme = createMuiTheme({

  useNextVariants: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 850,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    primary: { main: "#00939f" },
    secondary: { main: "#e66a53" },
  },

  overrides: {
    MuiTypography: {
      h1: {
        fontSize: pxToRem(72),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(72),
        },
      },
      h2: {
        fontSize: pxToRem(60),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(62),
        },
      },
      h3: {
        fontSize: pxToRem(48),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(50),
        },
      },
      h4: {
        fontSize: pxToRem(34),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(36),
        },
      },
      h5: {
        fontSize: pxToRem(24),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(26),
        },
      },
      h6: {
        fontSize: pxToRem(20),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(22),
        },
      },
      subtitle1: {
        fontSize: pxToRem(16),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(18),
        },
      },
      subtitle2: {
        fontSize: pxToRem(14),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(16),
        },
      },
      body1: {
        fontSize: pxToRem(16),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(20),
        },
      },
      body2: {
        fontSize: pxToRem(14),
        [breakpoints.up("lg")]: {
          fontSize: pxToRem(16),
        },
      },
      button: {
        fontSize: pxToRem(14),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(16),
        },
      },
      caption: {
        fontSize: pxToRem(12),
        [breakpoints.up("md")]: {
          fontSize: pxToRem(14),
        },
      },
      overline: {
        fontSize: pxToRem(10),
        textTransform: "normal",
        [breakpoints.up("md")]: {
          fontSize: pxToRem(12),
        },
      },
    },
  },
})

export default theme
