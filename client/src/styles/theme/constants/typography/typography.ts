import { AppTypography } from '@/styles/theme/constants/typography/types';

const typography: AppTypography = {
  fontFamily: 'Oswald, sans-serif',
  h1: {
    fontSize: 32,
    fontWeight: 400,
    lineHeight: 2.12, // 32px size with 68px line height
  },
  h2: {
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 2.83, // 24px size with 68px line height
  },
  h3: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.33, // 18px size with 24px line height
  },
  h4: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.78, // 14px size with 25px line height
  },
  h5: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 1.28, // 18px size with 23px line height
  },
  h6: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.25, // 16px size with 20px line height
  },
  body1: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.43, // 14px size with 20px line height
  },
  body1Medium: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1.43, // 14px size with 20px line height
  },
  body2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 3.4, // 14px size with 68px line height
  },
  overline: {
    fontSize: 11,
    fontWeight: 400,
    lineHeight: 1.6,
  },
  button: {
    fontSize: 14,
    fontWeight: 600, // Assuming semibold for buttons
    lineHeight: 1.2, // 14px size with ~20px line height
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.4,
  },
};

export default typography;
