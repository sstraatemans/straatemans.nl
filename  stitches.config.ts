import { createStitches } from '@stitches/react';
import { Lato } from '@next/font/google';

export const lato = Lato({
  fallback: ['system-ui', 'arial'],
  weight: ['300', '700'],
  variable: '--lato-font',
  subsets: ['latin'],
});

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      system: lato.className,
    },
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
  },
});
