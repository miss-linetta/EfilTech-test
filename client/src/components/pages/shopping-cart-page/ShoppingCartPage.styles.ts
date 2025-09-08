import theme from '@/styles/theme/theme';
import breakpoints from '@/styles/theme/constants/breakpoints/breakpoints';

export const container = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '65vh',
  padding: '0 50px',
  h1: {
    textAlign: 'center',
    margin: '50px 0',
  },
  '& > h6': {
    textAlign: 'center',
    margin: '50px 0',
  },
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    padding: '0 25px',
  },
};

export const itemsList = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '50px',
};

export const totalContainer = {
  margin: '50px 0',
  display: 'flex',
  justifyContent: 'space-between',
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    h3: {
      fontSize: '16px',
      lineHeight: 'normal',
    },
    button: {
      padding: '6px 12px',
      fontSize: '0.75rem',
    },
  },
};

export const loginPrompt = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
  textAlign: 'center',
  gap: '30px',
};

export const loginButtons = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px',
};
