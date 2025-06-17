import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ViewStyle, TextStyle } from 'react-native';
import { Text } from './Text';
import { useTheme } from '../theme/ThemeProvider';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button = ({
  variant = 'primary',
  children,
  style,
  textStyle,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  const getButtonStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
    };

    const variantStyles: Record<ButtonVariant, Partial<ViewStyle>> = {
      primary: {
        backgroundColor: theme.colors.primary,
      },
      secondary: {
        backgroundColor: theme.colors.secondary,
      },
      outline: {
        borderWidth: 1,
        borderColor: theme.colors.primary,
      },
      text: {},
    };

    return {
      ...baseStyle,
      ...variantStyles[variant],
      ...style,
    };
  };

  const getTextStyle = (): TextStyle => {
    const baseStyle: TextStyle = {
      textAlign: 'center' as const,
      fontSize: 16,
      fontWeight: '600' as const,
      color: variant === 'outline' ? theme.colors.primary : theme.colors.white,
    };

    return {
      ...baseStyle,
      ...textStyle, 
    };
  };

  return React.createElement(TouchableOpacity, { ...props, style: getButtonStyle() },
    React.createElement(Text, { style: getTextStyle() }, children)
  );
};
