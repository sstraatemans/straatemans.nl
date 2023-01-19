import { Lato } from '@next/font/google';

export const lato = Lato({
  fallback: ['system-ui', 'arial'],
  weight: ['300', '700'],
  variable: '--lato-font',
  subsets: ['latin'],
});
