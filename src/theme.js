import { createMuiTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

function pxToRem(value) {
  return `${value / 16}rem`;
}

const fonts = {
  raleway: 'Raleway',
  sansSerif: 'sans-serif',
  robotoSlab: 'Roboto Slab',
  serif: 'serif'
};

const breakpoints = createBreakpoints({});
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
    primary: { main: '#00939f' },
    secondary: { main: '#e66a53' },
    text: {
      primary: '#222222',
      secondary: '#555555'
    }
  },
  typography: {
    fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: `${fonts.robotoSlab}, ${fonts.serif}`,
        fontSize: pxToRem(72),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(72)
        }
      },
      h2: {
        fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
        fontSize: pxToRem(60),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(62)
        }
      },
      h3: {
        fontFamily: `${fonts.robotoSlab}, ${fonts.serif}`,
        fontSize: pxToRem(48),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(50)
        }
      },
      h4: {
        fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
        fontSize: pxToRem(34),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(36)
        }
      },
      h5: {
        fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
        fontSize: pxToRem(24),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(26)
        }
      },
      h6: {
        fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
        fontSize: pxToRem(20),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(22)
        }
      },
      subtitle1: {
        fontFamily: `${fonts.robotoSlab}, ${fonts.serif}`,
        fontWeight: 'bold',
        fontSize: pxToRem(18),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(18)
        }
      },
      subtitle2: {
        fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
        fontSize: pxToRem(16),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(16)
        }
      },
      body1: {
        fontSize: pxToRem(16),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(18)
        }
      },
      body2: {
        fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
        fontSize: pxToRem(14),
        [breakpoints.up('sm')]: {
          fontSize: pxToRem(16)
        }
      },
      button: {
        fontSize: pxToRem(14),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(16)
        }
      },
      caption: {
        fontFamily: `${fonts.raleway}, ${fonts.sansSerif}`,
        fontSize: pxToRem(16),
        [breakpoints.up('md')]: {
          fontSize: pxToRem(20)
        }
      },
      overline: {
        fontSize: pxToRem(12),
        textTransform: 'normal',
        [breakpoints.up('md')]: {
          fontSize: pxToRem(14)
        }
      }
    }
  }
});

export default theme;
