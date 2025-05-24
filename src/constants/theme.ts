export const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007AFF',
  secondary: '#5856D6',
  error: '#FF3B30',
  success: '#34C759',
  gray: {
    100: '#F2F2F7',
    200: '#E5E5EA',
    300: '#D1D1D6',
    400: '#C7C7CC',
    500: '#AEAEB2',
    600: '#8E8E93',
    700: '#636366',
    800: '#48484A',
    900: '#3A3A3C',
  },
};

export const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  error: '#FF453A',
  success: '#32D74B',
  gray: {
    100: '#1C1C1E',
    200: '#2C2C2E',
    300: '#3A3A3C',
    400: '#48484A',
    500: '#636366',
    600: '#8E8E93',
    700: '#AEAEB2',
    800: '#C7C7CC',
    900: '#D1D1D6',
  },
};

export type Theme = typeof lightTheme; 