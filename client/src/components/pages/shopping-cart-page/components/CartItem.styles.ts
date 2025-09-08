export const cardStyles = {
  maxWidth: 250,
  margin: '0',
  borderRadius: 2,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  width: '400px',
  height: '240px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '12px',
};

export const quantityContainer = {
  display: 'flex',
  alignItems: 'center',
  mb: 0.5,
};

export const priceTextStyles = {
  fontWeight: '500',
  mb: 1,
};

export const nameTextStyles = {
  fontWeight: '300',
  mb: 0.5,
  textAlign: 'center',
};

export const buttonContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 'auto',
};

export const button = {
  fontWeight: '400',
};

export const smallSquareInput = {
  width: '30px',
  height: '30px',
  '& .MuiOutlinedInput-root': {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  '& .MuiOutlinedInput-input': {
    padding: 0,
    textAlign: 'center',
    fontSize: '1rem',
  },
};
