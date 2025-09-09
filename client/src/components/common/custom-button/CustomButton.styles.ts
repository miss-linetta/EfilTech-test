import { SxProps, Theme } from '@mui/material/styles';

export const baseButtonStyles: SxProps<Theme> = {
  backgroundColor: '#000',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#333',
  },
};

const sizeStyles: Record<'default' | 'small', SxProps<Theme>> = {
  default: {
    padding: '12px 24px',
    fontSize: '1rem',
  },
  small: {
    padding: '6px 12px',
    fontSize: '0.75rem',
  },
};

export const getButtonStyles = (size: keyof typeof sizeStyles): SxProps<Theme> => {
  return { ...baseButtonStyles, ...sizeStyles[size] };
};
