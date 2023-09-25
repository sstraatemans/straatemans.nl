import { Wrapper } from '../../components';
import styles from '../global.module.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className={styles.mainheader}>Kadena / @straatemans</h1>
      <Wrapper isPage>{children}</Wrapper>
    </>
  );
}
