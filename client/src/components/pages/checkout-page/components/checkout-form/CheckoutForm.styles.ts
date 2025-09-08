import theme from '@/styles/theme/theme';

export const container = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  padding: '0 30px',
  h3: {
    marginTop: '30px',
  },
  h4: {
    marginTop: '30px',
  },
};

export const formGroup = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',
  maxWidth: '500px',
};

export const formInput = {
  width: '100%',
  height: '50px',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

export const formSelect = {
  ...formInput,
  padding: '0px',
  appearance: 'none',
};

export const formError = {
  color: theme.palette.secondary.main,
  fontSize: '0.875rem',
  marginTop: '5px',
};

export const summary = {
  margin: '30px 0',
  padding: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: theme.palette.background.paper,
  width: '100%',
  maxWidth: '500px',
  h3: {
    marginTop: '25px!important',
  },
  '& p': {
    marginBottom: '5px',
  },
};
