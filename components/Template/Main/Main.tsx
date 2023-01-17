import { FC, PropsWithChildren } from 'react';
import styles from './main.module.scss';

export const Main: FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.main}>{children}</main>
);

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <h1 className={styles.header}>{children}</h1>
);

export const Subheader: FC<PropsWithChildren> = ({ children }) => (
  <p className={styles.subheader}>{children}</p>
);

export const Aside: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.aside}>{children}</aside>
);
