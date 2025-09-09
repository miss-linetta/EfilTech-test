import React, { useState, useEffect } from 'react';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import {
  Box,
  MenuItem,
  Select,
  Typography,
  FormControl,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { useRouter } from 'next/router';

import * as styles from './CheckoutForm.styles';

import validationSchema from '@/components/pages/checkout-page/components/checkout-form/validation/validationScheme';
import CustomButton from '@/components/common/custom-button/CustomButton';
import { createOrder } from '@/lib/OrderAPI';
import { formatFieldName } from '@/utils/formatFieldName';
import { OrderData } from '@/lib/types';

interface CheckoutFormValues extends OrderData {}

const CheckoutForm: React.FC = () => {
  const [shippingCost, setShippingCost] = useState(26.5);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [orderError, setOrderError] = useState('');
  const router = useRouter();

  const initialValues: CheckoutFormValues = {
    shipping_method: 'DHL',
    data_protection_accepted: false,
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    delivery_instructions: '',
    gift_message: '',
    newsletter_subscription: false,
    coupon_code: '',
    total_price: 0,
    items: [],
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const total = cart.reduce(
        (acc: number, item: { price: number; quantity: number }) =>
          acc + Number(item.price) * Number(item.quantity),
        0,
      );
      setItemsTotal(total);
    }
  }, []);

  const handleShippingChange = (value: 'DPD' | 'DHL' | 'DHL Express') => {
    if (value === 'DPD') setShippingCost(7.5);
    else if (value === 'DHL Express') setShippingCost(70.5);
    else setShippingCost(26.5);
  };

  const handleSubmit = async (
    values: CheckoutFormValues,
    { resetForm }: FormikHelpers<CheckoutFormValues>,
  ) => {
    if (!values.data_protection_accepted) {
      if (typeof window !== 'undefined') alert('Please accept the data protection agreement.');
      return;
    }

    let couponCode = '';
    let items: { flower_id: number; quantity: number; price: number }[] = [];

    couponCode = localStorage.getItem('coupon_code') || '';
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    items = cart.map((item: { id: number; price: number; quantity: number }) => ({
      flower_id: item.id,
      quantity: item.quantity,
      price: Number(item.price),
    }));

    const totalPrice =
      items.reduce((acc, item) => acc + item.price * item.quantity, 0) + shippingCost;

    const orderData: OrderData = {
      ...values,
      coupon_code: couponCode || undefined,
      total_price: totalPrice,
      items,
    };

    try {
      const response = await createOrder(orderData);
      if (response && typeof window !== 'undefined') {
        resetForm();
        localStorage.removeItem('coupon_code');
        localStorage.removeItem('cart');
        router.push(`/order-details/${response.orderId}`);
      } else {
        setOrderError('Failed to place the order. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      setOrderError('Failed to place the order. Please try again later.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <Box sx={styles.container}>
            <Typography variant="h3" gutterBottom>
              Shipping Method
            </Typography>
            <FormControl sx={styles.formGroup}>
              <Select
                sx={styles.formSelect}
                name="shipping_method"
                value={values.shipping_method}
                onChange={(event) => {
                  const selectedValue = event.target.value as 'DPD' | 'DHL' | 'DHL Express';
                  setFieldValue('shipping_method', selectedValue);
                  handleShippingChange(selectedValue);
                }}
              >
                <MenuItem value="DPD">DPD (€7.5)</MenuItem>
                <MenuItem value="DHL">DHL (€26.5)</MenuItem>
                <MenuItem value="DHL Express">DHL Express (€70.5)</MenuItem>
              </Select>
            </FormControl>

            <Typography variant="h3" gutterBottom>
              Personal Information
            </Typography>
            {['first_name', 'last_name', 'email', 'phone'].map((field) => (
              <Box sx={styles.formGroup} key={field}>
                <Field name={field} as={TextField} placeholder={formatFieldName(field)} fullWidth />
                <ErrorMessage
                  name={field}
                  render={(msg) => <Typography sx={styles.formError}>{msg}</Typography>}
                />
              </Box>
            ))}

            <Typography variant="h3" gutterBottom>
              Additional Information
            </Typography>
            {['delivery_instructions', 'gift_message'].map((field) => (
              <Box sx={styles.formGroup} key={field}>
                <Field name={field} as={TextField} fullWidth placeholder={formatFieldName(field)} />
                <ErrorMessage
                  name={field}
                  render={(msg) => <Typography sx={styles.formError}>{msg}</Typography>}
                />
              </Box>
            ))}

            {/*<Typography variant="h4">Have a Coupon Code?</Typography>*/}
            {/*<Box sx={styles.formGroup}>*/}
            {/*  <CouponInput*/}
            {/*      cartTotal={itemsTotal}*/}
            {/*      onUpdateCartTotal={handleUpdateCartTotal}*/}
            {/*  />*/}
            {/*</Box>*/}

            <Box sx={styles.formGroup}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="newsletter_subscription"
                    checked={values.newsletter_subscription}
                    onChange={(event) =>
                      setFieldValue('newsletter_subscription', event.target.checked)
                    }
                  />
                }
                label="Subscribe to Newsletter"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={values.data_protection_accepted}
                    onChange={(event) =>
                      setFieldValue('data_protection_accepted', event.target.checked)
                    }
                  />
                }
                label="I accept the data protection agreement"
              />
            </Box>

            {orderError && (
              <Typography variant="body2" color="error">
                {orderError}
              </Typography>
            )}

            <Box sx={styles.summary}>
              <Typography variant="body1">Items: €{itemsTotal.toFixed(2)}</Typography>
              <Typography variant="body1">Shipping: €{shippingCost.toFixed(2)}</Typography>
              <Typography variant="h3">Total: €{(itemsTotal + shippingCost).toFixed(2)}</Typography>
            </Box>

            <CustomButton
              type="submit"
              disabled={isSubmitting}
              title={isSubmitting ? 'Placing Order...' : 'Pay'}
            />
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
