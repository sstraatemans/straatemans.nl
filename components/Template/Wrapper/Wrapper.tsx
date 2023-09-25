import { FC, PropsWithChildren } from 'react';
import styles from './wrapper.module.scss';
import classNames from 'classnames';

interface IProps extends PropsWithChildren {
  isPage?: boolean;
}

export const Wrapper: FC<IProps> = ({ children, isPage = false }) => (
  <div className={classNames(styles.wrapper, isPage ? styles.wrapperpage : '')}>
    {children}
  </div>
);
