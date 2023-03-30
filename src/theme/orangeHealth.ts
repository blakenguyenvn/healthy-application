import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }

  interface TypeText {
    icon?: string;
  }

  interface TypeBackground {
    header?: string;
    footer?: string;
  }
}

const theme = createTheme({
  palette: {
    common: {
      black: '#2e2e2e',
      white: '#ffffff',
    },
    primary: {
      light: '#ffcc21',
      main: '#ff963C',
      darker: '#ea6c00',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8fe9d0',
    },
    text: {
      disabled: '#777777',
      icon: '#ff963c',
      primary: '#414141',
    },
    background: {
      default: '#fff',
      paper: '#414141',
      header: '#414141',
      footer: '#414141',
    },
  },
});

export default theme;
