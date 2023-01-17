import { FC, PropsWithChildren, ReactElement } from 'react';
import styles from './footer.module.scss';

export const Footer: FC<PropsWithChildren> = ({ children }) => {
  return <footer>{children}</footer>;
};

export const Footerlist: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={styles.footerlist}>{children}</ul>;
};

export const FooterListSpacer: FC = () => {
  return <li className={styles.listitem}></li>;
};

type FooterListItemProps = PropsWithChildren & {
  link: string;
};
export const FooterListItem: FC<FooterListItemProps> = ({ children, link }) => {
  return (
    <li className={styles.listitem}>
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  );
};
