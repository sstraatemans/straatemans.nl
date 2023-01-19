import { FC, PropsWithChildren } from 'react';
import styles from './wrapper.module.scss';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);
