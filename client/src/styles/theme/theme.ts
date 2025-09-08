import { createTheme } from '@mui/material/styles';

import palette from './constants/palette/palette';
import typography from './constants/typography/typography';
import breakpoints from './constants/breakpoints/breakpoints';
//@ts-ignore
const theme = createTheme({
  palette,
  typography,
  breakpoints: { values: breakpoints },
});

export default theme;
