import breakpoints from '@/styles/theme/constants/breakpoints/breakpoints';
import theme from '@/styles/theme/theme';

export const container = {
  display: 'flex',
  flexDirection: 'column',
};

export const mainContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  height: '93vh',
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    flexDirection: 'column',
    height: '100%',
  },
};

export const carouselContainer = {
  width: '60%',
  padding: '50px',
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    width: '100%',
    padding: '30px',
  },
};

export const textContainer = {
  width: '40%',
  textAlign: 'center',
  h1: {
    fontSize: '60px',
  },
  [theme.breakpoints.down(breakpoints.desktop)]: {
    paddingLeft: '50px',
    h1: {
      fontSize: '48px',
    },
    h2: {
      fontSize: '20px',
    },
  },
  [theme.breakpoints.down(breakpoints.tablet)]: {
    h1: {
      fontSize: '36px',
    },
    h2: {
      fontSize: '14px',
    },
  },
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    width: '100%',
    paddingLeft: '0px',
  },
};

export const articlesContainers = {
  width: '100%',
  h2: {
    textAlign: 'center',
  },
  '& > div:first-of-type': {
    display: 'flex',
    padding: '100px',
  },
  margin: '50px 0',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    flexDirection: 'column',
    padding: '20px',
  },
  [theme.breakpoints.down(breakpoints.desktopMedium)]: {
    '& > div:first-of-type': {
      padding: '10px',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '50px',
    },
  },
};

export const itemsContainers = {
  width: '100%',
  display: 'flex',
  padding: '50px',
  '& > div:first-of-type': {
    display: 'flex',
    width: '85%',
    justifyContent: 'space-between',
    paddingRight: '20px',
  },
  [theme.breakpoints.down(breakpoints.desktopMedium)]: {
    '& > div:first-of-type': {
      width: '100%',
      paddingRight: '0',
    },
  },
  [theme.breakpoints.down(breakpoints.tablet)]: {
    '& > div:first-of-type': {
      flexDirection: 'column',
      gap: '20px',
    },
  },
};

export const buttonContainers = {
  width: '15%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down(breakpoints.desktopMedium)]: {
    width: '100%',
  },
};

export const aboutUsContainer = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
  padding: '80px',
  backgroundColor: theme.palette.text.primary,
  color: theme.palette.grey['800'],
  margin: '50px 0',
  [theme.breakpoints.down(breakpoints.tablet)]: {
    flexDirection: 'column-reverse',
    padding: '40px',
  },
};

export const aboutUsTextContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '60%',
  gap: '30px',
  padding: '50px',
  '& p': {
    fontSize: '18px',
  },
  [theme.breakpoints.down(breakpoints.tablet)]: {
    width: '100%',
    padding: '20px',
  },
};

export const aboutUsTitleContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',
};
