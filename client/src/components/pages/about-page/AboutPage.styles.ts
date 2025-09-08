import theme from '@/styles/theme/theme';
import breakpoints from '@/styles/theme/constants/breakpoints/breakpoints';

export const pageContainer = {
  width: '100%',
  padding: '50px 100px',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  minHeight: '65vh',
  marginBottom: '20px',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    padding: '30px 50px',
  },
};

export const pageTitle = {
  textAlign: 'center',
  marginBottom: '20px',
};

export const aboutUsText = {
  fontSize: '16px',
};
