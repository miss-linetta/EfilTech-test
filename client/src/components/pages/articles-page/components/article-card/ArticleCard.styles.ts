export const cardStyles = {
  maxWidth: 250,
  margin: '0 auto',
  borderRadius: 2,
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  width: '400px',
};

export const mediaStyles = {
  borderRadius: '4px 4px 0 0',
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};

export const categoryTextStyles = {
  color: 'grey.500',
  fontSize: 12,
  textTransform: 'uppercase',
  mb: 1,
};

export const quantityContainer = {
  display: 'flex',
  alignItems: 'center',
  mb: 1,
};

export const priceTextStyles = {
  fontWeight: '500',
  mb: 2,
};

export const nameTextStyles = {
  fontWeight: '300',
  mb: 1,
};

export const buttonContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
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

export const clearButton = {
  backgroundColor: 'transparent',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  '&:hover': {
    textDecoration: 'underline',
  },
};
