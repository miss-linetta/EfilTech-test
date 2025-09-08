import * as Yup from 'yup';

const validationSchema = Yup.object({
  first_name: Yup.string()
    .required('First name is required')
    .max(50, 'First name cannot exceed 50 characters'),

  last_name: Yup.string()
    .required('Last name is required')
    .max(50, 'Last name cannot exceed 50 characters'),

  email: Yup.string().email('Invalid email address').required('Email is required'),

  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^\+?[0-9\s\-()]{7,20}$/,
      'Phone number is invalid. Only digits, spaces, +, -, () are allowed',
    ),

  shipping_method: Yup.string()
    .oneOf(['DPD', 'DHL', 'DHL Express'], 'Invalid shipping method')
    .required('Shipping method is required'),

  data_protection_accepted: Yup.boolean().oneOf(
    [true],
    'You must accept the data protection agreement',
  ),

  delivery_instructions: Yup.string()
    .max(255, 'Delivery instructions cannot exceed 255 characters')
    .required('Delivery instructions are required'),

  gift_message: Yup.string().max(255, 'Gift message cannot exceed 255 characters'),

  newsletter_subscription: Yup.boolean().required('Newsletter subscription selection is required'),

  coupon_code: Yup.string().max(50, 'Coupon code cannot exceed 50 characters'),
});

export default validationSchema;
