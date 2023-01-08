import { FC, ReactElement } from 'react';
import { styled } from '../../ stitches.config';

export const Footer = styled('footer', {});

export const Footerlist = styled('ul', {
  display: 'flex',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const FooterListSpacer = styled('li', {
  margin: 'clamp(1rem, 4vw, 3rem)',
});

const ListItem = styled('li', {
  margin: 'clamp(1rem, 4vw, 3rem)',

  '& a': {
    boxSizing: 'border-box',
    display: 'block',
    position: 'relative',
    borderRadius: '100%',
    backgroundColor: 'transparent',
    fill: '#c4c4c4',
    width: 'clamp(4rem, 8vw, 7rem)',
    transition: 'background-color 0.5s, fill 0.5s, transform 0.5s ease-out',

    '&:hover': {
      borderradius: '100%',
      transform: 'scale(1.25)',
      backgroundColor: '#c4c4c4',
      fill: 'white',
    },
  },
});

type FooterListItemProps = {
  link: string;
  children: ReactElement;
};
export const FooterListItem: FC<FooterListItemProps> = ({ children, link }) => {
  return (
    <ListItem>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </ListItem>
  );
};
