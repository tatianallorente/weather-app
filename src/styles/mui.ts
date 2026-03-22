import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: '#00bba7', // teal-500
    },
    secondary: {
      main: '#ffedd4', // orange-100
      dark: '#ffd6a7', // orange-200
    },
    error: {
      main: '#fb2c36', // red-500
    },
    background: {
      default: '#FFF',
    },
  },
  spacing: 4, // 4px base spacing like tailwind
  shape: {
    borderRadius: 8,
  },
});

const customTheme = {
  ...theme,
  components: {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        notchedOutline: {
          borderRadius: 8,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          borderRadius: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        containedPrimary: {
          '&.Mui-disabled': {
            opacity: 0.5,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          },
        },
      },
    },
  },
};

export default customTheme;
