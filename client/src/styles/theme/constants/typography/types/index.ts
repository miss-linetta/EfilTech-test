import { Theme } from '@mui/material/styles';

export interface AppTypography {
  fontFamily: string;
  h1: Theme['typography']['h1'];
  h2: Theme['typography']['h2'];
  h3: Theme['typography']['h3'];
  h4: Theme['typography']['h4'];
  h5: Theme['typography']['h5'];
  h6: Theme['typography']['h6'];
  body1: Theme['typography']['body1'];
  body1Medium: Theme['typography']['body1'];
  body2: Theme['typography']['body2'];
  overline: Theme['typography']['overline'];
  button: Theme['typography']['button'];
  caption: Theme['typography']['caption'];
}
