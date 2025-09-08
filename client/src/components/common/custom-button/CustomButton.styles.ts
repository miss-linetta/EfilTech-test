export const baseButtonStyles = {
  backgroundColor: '#000',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#333',
  },
};

export const getButtonStyles = (size) => {
  const sizeStyles = {
    default: {
      padding: '12px 24px',
      fontSize: '1rem',
    },
    small: {
      padding: '6px 12px',
      fontSize: '0.75rem',
    },
  };

  return { ...baseButtonStyles, ...sizeStyles[size] };
};
