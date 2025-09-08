import { PaletteOptions } from '@mui/material';

export interface AppPalette extends PaletteOptions {
  primary: { main: string };
  secondary: { main: string };
  grey: Record<number, string>;
  divider: string;
  text: { primary: string; secondary: string };
  background: { default: string; paper: string };
  info: { main: string };
  link: { main: string };
}
