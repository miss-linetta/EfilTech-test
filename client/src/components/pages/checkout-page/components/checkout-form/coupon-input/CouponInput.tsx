import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography, CircularProgress } from '@mui/material';

import * as styles from './CouponInput.styles';
import { CouponInputProps, FeedbackType } from './types';

import CustomButton from '@/components/common/custom-button/CustomButton';
import CouponAPI from '@/lib/CouponAPI';
import { CouponValidationResult } from '@/lib/types';

const CouponInput: React.FC<CouponInputProps> = ({ cartTotal, onUpdateCartTotal }) => {
  const [coupon_code, setCouponCode] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('');
  const [isCouponApplied, setIsCouponApplied] = useState<boolean>(false);

  useEffect(() => {
    const appliedCoupon = localStorage.getItem('coupon_code');
    if (appliedCoupon) {
      setCouponCode(appliedCoupon);
      setIsCouponApplied(true);
    }
  }, []);

  const isCouponValid = (code: string): boolean => {
    if (!code) {
      setFeedback('Coupon code cannot be empty.');
      setFeedbackType('error');
      return false;
    }
    if (code.length < 5) {
      setFeedback('Coupon code must be at least 5 characters long.');
      setFeedbackType('error');
      return false;
    }
    return true;
  };

  const handleValidateCoupon = async () => {
    if (!isCouponValid(coupon_code)) return;

    setIsLoading(true);
    setFeedback('');
    try {
      const result: CouponValidationResult = await CouponAPI.validateCoupon(coupon_code, cartTotal);

      if (result.newCartTotal < 0) {
        setFeedback('Coupon discount cannot reduce the cart total below zero.');
        setFeedbackType('error');
        return;
      }

      setFeedback(result.message);
      setFeedbackType('success');
      onUpdateCartTotal(result.newCartTotal);
      localStorage.setItem('coupon_code', coupon_code);
      setIsCouponApplied(true);
    } catch (error: any) {
      setFeedback(error.message || 'An unknown error occurred.');
      setFeedbackType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={styles.container}>
      <TextField
        variant="outlined"
        placeholder="Enter coupon code"
        value={coupon_code}
        onChange={(e) => setCouponCode(e.target.value)}
        disabled={isLoading || isCouponApplied}
        error={feedbackType === 'error'}
        helperText={feedbackType === 'error' ? feedback : ''}
        fullWidth
      />
      <CustomButton
        variant="contained"
        onClick={handleValidateCoupon}
        disabled={isLoading || !coupon_code || isCouponApplied}
        fullWidth
        title={
          isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : isCouponApplied ? (
            'Coupon Applied'
          ) : (
            'Validate Coupon'
          )
        }
      />
      {feedback && feedbackType === 'success' && (
        <Typography variant="body2" sx={styles.feedback}>
          {feedback}
        </Typography>
      )}
    </Box>
  );
};

export default CouponInput;
