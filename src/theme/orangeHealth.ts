import { createTheme } from '@mui/material/styles';

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

interface CommonColor {
  black: string;
  white: string;
  gray: string;
}

interface TextColor {
  disabled: string;
  icon: string;
  primary: string;
  secondary: string;
}

const theme = createTheme({
  palette: {
    common: <CommonColor>{
      black: '#2E2E2E',
      white: '#FFFFFF',
      gray: '#777777',
    },
    primary: <PaletteColor>{
      light: '#FFCC21',
      main: '#FF963C',
      darker: '#EA6C00',
      contrastText: '#FFFFFF',
    },
    secondary: <PaletteColor>{
      main: '#8FE9D0',
    },
    text: <TextColor>{
      disabled: '#777777',
      icon: '#FF963C',
      primary: '#414141',
    },
  },
});

export default theme;
