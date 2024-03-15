import { ThemeOptions } from '@mui/material'

enum FontWeight {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 600,
  BOLD = 700
}
enum FontSize {
  body1 = 16,
  body2 = 14,
  overline = 12,
  caption = 12,
  h1 = 32,
  h2 = 24,
  h3 = 20,
  h4 = 18
}

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1512,
      xl: 1728
    }
  },
  palette: {
    primary: {
      main: '#046582'
    },
    secondary: {
      main: '#BB8082'
    },
    info: {
      main: '#1976d2'
    },
    warning: {
      main: '#ef6c00'
    },
    error: {
      main: '#c62828'
    },
    background: {
      default: '#F8F8F4'
    }
  },
  typography: {
    fontFamily: 'var(--inter)',
    fontSize: FontSize.body1,
    fontWeightLight: FontWeight.LIGHT,
    fontWeightRegular: FontWeight.REGULAR,
    fontWeightMedium: FontWeight.MEDIUM,
    fontWeightBold: FontWeight.BOLD,
    body1: {
      fontSize: FontSize.body1,
      lineHeight: 24 / FontSize.body1
    },
    body2: {
      fontSize: FontSize.body2,
      lineHeight: 20 / FontSize.body2
    },
    subtitle1: {
      fontSize: FontSize.body1,
      lineHeight: 24 / FontSize.body1,
      fontWeight: FontWeight.BOLD
    },
    subtitle2: {
      fontSize: FontSize.body2,
      lineHeight: 20 / FontSize.body2,
      fontWeight: FontWeight.MEDIUM
    },
    overline: {
      fontSize: FontSize.overline,
      lineHeight: 16 / FontSize.overline,
      fontWeight: FontWeight.REGULAR
    },
    caption: {
      fontSize: FontSize.caption,
      lineHeight: 16 / FontSize.caption,
      fontWeight: FontWeight.MEDIUM
    },
    h1: {
      fontSize: FontSize.h1,
      lineHeight: 36 / FontSize.h1,
      fontWeight: FontWeight.BOLD
    },
    h2: {
      fontSize: FontSize.h2,
      lineHeight: 32 / FontSize.h2,
      fontWeight: FontWeight.MEDIUM
    },
    h3: {
      fontSize: FontSize.h3,
      lineHeight: 28 / FontSize.h3,
      fontWeight: FontWeight.BOLD
    },
    h4: {
      fontSize: FontSize.h4,
      lineHeight: 28 / FontSize.h4,
      fontWeight: FontWeight.MEDIUM
    },
    h5: {
      fontSize: FontSize.body1,
      lineHeight: 24 / FontSize.body1,
      fontWeight: FontWeight.BOLD
    },
    h6: {
      fontSize: FontSize.body2,
      lineHeight: 20 / FontSize.body2,
      fontWeight: FontWeight.BOLD
    }
  },
  shape: {
    borderRadius: 2
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100svh',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          minHeight: '100svh',
          width: '100%'
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 47,
          height: 26,
          padding: 0,
          margin: 8
        },
        switchBase: {
          padding: 1,
          '&.checked, .colorPrimary$checked, .colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .track': {
              opacity: 1,
              border: 'none'
            }
          }
        },
        thumb: {
          width: 24,
          height: 24
        },
        track: {
          borderRadius: 13,
          border: '1px solid #bdbdbd',
          backgroundColor: '#fafafa',
          opacity: 1,
          transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        }
      }
    }
  }
}
export default themeOptions
