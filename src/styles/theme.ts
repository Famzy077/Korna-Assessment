import { css } from 'styled-components';

export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
};

export const theme = {
  colors: {
    primary: '#000000',
    background: '#FFFFFF',
    gray: {
      100: '#F5F5F5',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    h1: css`
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
    `,
    h2: css`
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
    `,
    body1: css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
    `,
    body2: css`
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.43;
    `,
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
    twoXl: '4rem'
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1020px',
    wide: '1336px',
  }
} as const;

export type Theme = typeof theme;