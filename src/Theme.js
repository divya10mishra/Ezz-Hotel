import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#ffd656',
      dark: '#a47700',
      contrastText: '#daa520'
    },
    secondary: {
      main: '#daa520',
      light: '#75e14d',
      dark: '#1eb405',
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      primaryMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(255, 255, 255, 1)',
      secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)'
    }
  },
  typography: {
    subtitle1: { fontWeight: 400 }
  }
});
