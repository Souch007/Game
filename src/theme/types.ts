import { TextStyle, ViewStyle, StyleProp } from 'react-native';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  black: string;
  success: string;
  warning: string;
  danger: string;
  disabled: string;
  placeholder: string;
  white: string;
}

export interface Theme {
  colors: ThemeColors;
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    h1: TextStyle;
    h2: TextStyle;
    h3: TextStyle;
    body: TextStyle;
    small: TextStyle;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
  styles: {
    [key: string]: StyleProp<ViewStyle | TextStyle>;
  };
}

export type ThemeSpacing = Theme['spacing'];
export type ThemeTypography = Theme['typography'];
export type ThemeBorderRadius = Theme['borderRadius'];
export type ThemeStyles = Theme['styles'];
