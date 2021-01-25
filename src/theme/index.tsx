import {
  GlobalStyle as BaseGlobalStyle,
  theme as baseTheme,
} from './themes/base';

const themeMap: Record<string, any> = {
  base: {
    theme: baseTheme,
    GlobalStyle: BaseGlobalStyle,
  },
};

export const Breakpoint = {
  Md: '768px',
  Lg: '1025px',
  Xl: '1600px',
};

export const getTheme = (themeName: string) => themeMap[themeName] || {};
