import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
    warning: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
  },
});

export default theme;
