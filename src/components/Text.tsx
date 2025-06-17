import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type TextVariant = 'heading1' | 'heading2' | 'heading3' | 'body' | 'small';

interface AppTextProps extends TextProps {
  variant?: TextVariant;
}

export const Text: React.FC<AppTextProps> = ({ variant = 'body', style, ...props }) => {
  const theme = useTheme();
  
  const variantStyles = {
    heading1: theme.typography.h1,
    heading2: theme.typography.h2,
    heading3: theme.typography.h3,
    body: theme.typography.body,
    small: {
      fontSize: 14,
      lineHeight: 20,
    },
  };

  return (
    <RNText 
      style={[variantStyles[variant], { color: theme.colors.text }, style]} 
      {...props}
    />
  );
};
