import theme from '@/styles/theme/theme';
import breakpoints from '@/styles/theme/constants/breakpoints/breakpoints';

export const headerContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.grey['50'],
  color: theme.palette.background.default,
  padding: '15px 30px',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    padding: '10px',
  },
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    flexDirection: 'column',
    gap: '15px',
    padding: '15px 0',
  },
};

export const logoContainer = {
  display: 'flex',
  alignItems: 'center',
};

export const logo = {
  fontWeight: 'bold',
  marginRight: '20px',
  border: `2px solid ${theme.palette.background.default}`,
  padding: '5px 10px',
  textTransform: 'uppercase',
  fontSize: '20px',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    fontSize: '8px',
    marginRight: '10px',
  },
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    marginRight: '0px',
  },
};

export const navLinksContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    gap: '10px',
  },
};

export const navLink = {
  color: theme.palette.background.default,
  textTransform: 'uppercase',
  fontSize: '14px',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down(breakpoints.tablet)]: {
    fontSize: '10px',
  },
};

export const accountContainer = {
  display: 'flex',
  gap: '30px',
  alignItems: 'center',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    gap: '8px',
  },
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    justifyContent: 'space-between',
    width: '80%',
  },
};

export const accountCartContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    gap: '8px',
  },
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    justifyContent: 'space-between',
    width: '90%',
  },
};

export const cartContainer = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};
