import { Theme } from './types';

export const theme: Theme = {
  colors: {
    secondary: '#007AFF',
    primary: '#5856D6',
    background: '#FFFFFF',
    card: '#F5F5F5',
    text: '#000000',
    textSecondary: '#666666',
    border: '#E5E5EA',
    black: '#000000',
    success: '#34C759',
    warning: '#FF9500',
    danger: '#FF3B30',
    disabled: '#CCCCCC',
    placeholder: '#CCCCCC',
    white: '#FFFFFF',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    small: {
      fontSize: 14,
      lineHeight: 20,
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  styles: {},
} as const;
