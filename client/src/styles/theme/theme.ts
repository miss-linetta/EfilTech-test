import { createTheme } from '@mui/material/styles';

import palette from './constants/palette/palette';
import typography from './constants/typography/typography';
import breakpoints from './constants/breakpoints/breakpoints';

const theme = createTheme({
  palette: palette as any,
  typography: typography as any,
  breakpoints: { values: breakpoints as any },
});

export default theme;
