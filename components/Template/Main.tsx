import { styled } from '../../ stitches.config';

export const Main = styled('div', {
  display: 'grid',
  gridTemplateColumns: '3fr 2fr',
  gridTemplateRows: '1fr min-content min-content 1fr',
  gridTemplateAreas: `
        ". aside"
        "header aside"
        "main aside"
        ". aside"`,
  width: '100%',
});

export const Header = styled('h1', {
  gridArea: 'header',
  fontWeight: 300,
  fontStyle: 'normal',
  fontSize: 'clamp(1rem,4vw,4rem)',
});

export const Subheader = styled('p', {
  gridArea: 'main',
  position: 'relative',
  margin: 0,
  fontSize: 'clamp(1.5rem,5vw,5rem)',
});

export const Aside = styled('aside', {
  gridArea: 'aside',
  position: 'relative',

  '& img': {
    width: '100%',
    height: 'auto',
  },
});
