import theme from '@/styles/theme/theme';
import breakpoints from '@/styles/theme/constants/breakpoints/breakpoints';

export const pageContainer = {
  width: '100%',
  textAlign: 'center',
  h1: {
    margin: '50px 0',
  },
  paddingBottom: '30px',
};

export const mainContainer = {
  display: 'flex',
  flexWrap: 'no-wrap',
  marginTop: '20px',
};

export const articlesContainer = {
  width: '100%',
  padding: '0 60px',
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    padding: '0 30px',
  },
};

export const filtersContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',
  marginBottom: '24px',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down(breakpoints.mobileMedium)]: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '12px',
  },
};

export const selectControl = {
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: 'auto'
};

export const label = {
  marginRight: '8px',
};

export const select = {
  minWidth: '150px',
  padding: '7px',
};


export const articlesList = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  justifyContent: 'center',
  gap: '60px',
  width: '100%',
  margin: '32px 0 100px 0',
};

export const paginationContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '12px',
};

export const paginationItem = (active: boolean) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 500,
  cursor: 'pointer',
  border: '1px solid',
  borderColor: active ? theme.palette.primary.main : '#e0e0e0',
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active ? '#fff' : theme.palette.text.primary,
  transition: 'all 0.2s ease',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: active ? theme.palette.primary.dark : '#f5f5f5',
  },
});
