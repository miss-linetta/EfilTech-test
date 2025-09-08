import React from 'react';
import { Button } from '@mui/material';

import * as styles from './CustomButton.styles';

import { CustomButtonProps } from '@/components/common/custom-button/types';

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  type,
  onClick,
  disabled = false,
  size = 'default',
  sx = {},
}) => {
  const buttonStyles =
    size === 'small' ? styles.getButtonStyles('small') : styles.getButtonStyles('default');

  return (
    <Button
      variant="contained"
      sx={{ ...buttonStyles, ...sx }}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
