import { ButtonProps, SxProps, Theme } from '@mui/material';
import React from 'react';

export interface CustomButtonProps {
  title: React.ReactNode;
  type?: ButtonProps['type'];
  onClick?: () => void;
  disabled?: boolean;
  size?: 'default' | 'small';
  sx?: SxProps<Theme>;
  fullWidth?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}
