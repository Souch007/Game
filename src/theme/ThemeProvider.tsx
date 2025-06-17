import React from 'react';
import { Theme } from './types';
import { theme } from './theme';

interface ThemeContextType {
  theme: Theme;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  theme,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};
