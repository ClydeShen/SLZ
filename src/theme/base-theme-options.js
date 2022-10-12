import { createBreakpoints } from '@mui/system'

const breakpoints = createBreakpoints({})
breakpoints.values.xs = 0
breakpoints.values.sm = 800 //877 //800 mobile width
breakpoints.values.md = 1080
breakpoints.values.lg = 1360
breakpoints.values.xl = 1640

export const baseThemeOptions = {
  breakpoints: {
    values: breakpoints.values
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          // fontSize: '1rem',
          lineHeight: 1.5
        },
        sizeSmall: {
          padding: '6px 16px',
          [breakpoints.down('sm')]: {
            padding: '4px 8px'
          }
        },
        sizeMedium: {
          padding: '8px 20px'
        },
        sizeLarge: {
          padding: '11px 24px'
        },
        textSizeSmall: {
          padding: '7px 12px'
        },
        textSizeMedium: {
          padding: '9px 16px'
        },
        textSizeLarge: {
          padding: '12px 16px'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '8px 16px'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px 16px',
          '&:last-child': {
            paddingBottom: '24px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '24px 16px'
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box'
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%'
        },
        '#nprogress': {
          pointerEvents: 'none'
        },
        '#nprogress .bar': {
          backgroundColor: '#4D61E0',
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8
        },
        sizeSmall: {
          padding: 4
        }
      }
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: '16px',
          '&.MuiListItemIcon-root': {
            minWidth: 'unset'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontWeight: 500
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        }
      }
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16
      }
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary'
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 'fit-content',
          '& .MuiTabs-scroller': {
            height: 'fit-content'
          }
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          padding: '8px',
          textTransform: 'none',
          [breakpoints.down('sm')]: {
            minHeight: 'fit-content',
            lineHeight: 1.57
          },
          '& + &': {
            marginLeft: 24,
            [breakpoints.down('md')]: {
              marginLeft: 8
              // padding: '0',
            }
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px 16px',
          [breakpoints.down('sm')]: {
            padding: '2px',
            border: 'none'
          }
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          '& .MuiTableCell-root': {
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
            [breakpoints.down('sm')]: {
              fontSize: '0.75rem'
            }
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          }
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-inputSizeSmall': {
            [breakpoints.down('md')]: {
              fontSize: '0.9rem'
            }
          }
        }
      }
    }
  },
  direction: 'ltr',
  shape: {
    borderRadius: 8
  },
  typography: {
    button: {
      fontWeight: 600
    },
    fontFamily: 'BlinkMacSystemFont, "Segoe UI", sans-serif',
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5
      // [breakpoints.down('sm')]: {
      //   fontSize: '0.875rem',
      // },
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57
      // [breakpoints.down('sm')]: {
      //   fontSize: '0.75rem',
      // },
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.75
      // [breakpoints.down('sm')]: {
      //   fontSize: '0.875rem',
      //   lineHeight: 1.5,
      // },
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.57
      // [breakpoints.down('sm')]: {
      //   fontSize: '0.75rem',
      // },
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 1.75,
      textTransform: 'uppercase'
      // [breakpoints.down('sm')]: {
      //   fontSize: '0.65rem',
      // },
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.66
      // [breakpoints.down('sm')]: {
      //   fontSize: '0.7rem',
      //   lineHeight: 1.5,
      // },
    },
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.375
      // [breakpoints.down('sm')]: {
      //   fontSize: '3rem',
      // },
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.375
      // [breakpoints.down('sm')]: {
      //   fontSize: '2.25rem',
      // },
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.375
      // [breakpoints.down('sm')]: {
      //   fontSize: '2rem',
      // },
    },
    h4: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.375
      // [breakpoints.down('sm')]: {
      //   fontSize: '1.5rem',
      // },
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.375
      // [breakpoints.down('sm')]: {
      //   fontSize: '1.125rem',
      // },
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.375
      // [breakpoints.down('sm')]: {
      //   fontSize: '1rem',
      // },
    }
  },

  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
}
