import theme from '@/styles/theme/theme';
import breakpoints from '@/styles/theme/constants/breakpoints/breakpoints';

export const footerContainer = {
  display: 'flex',
  padding: '50px',
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.grey['800'],
  width: '100%',
  justifyContent: 'space-evenly',
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    flexDirection: 'column',
    padding: '20px',
  },
};

export const footerContent = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  gap: '10px',
};

export const footerLinks = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
  '& a': {
    textDecoration: 'none',
    color: 'gray',
    fontSize: '14px',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
};

export const logoContainer = {
  display: 'flex',
  alignItems: 'center',
};

export const logo = {
  fontWeight: 'bold',
  marginRight: '20px',
  border: '2px solid #fff',
  padding: '5px 10px',
  textTransform: 'uppercase',
};
