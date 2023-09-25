'use client';

import { Header, Main, Subheader, Wrapper } from '../components';
import styles from '../components/Template/Main/main.module.scss';
import { Animation } from '../components/Animation/Animation';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  return (
    <Wrapper>
      <Main>
        <div className={styles.wrapper}>
          <Header>My name Steven Straatemans</Header>
          <Subheader>
            and I&apos;m a <span className={styles.typewriter} ref={ref}></span>
          </Subheader>
        </div>
        <Animation headerRef={ref} />
      </Main>
    </Wrapper>
  );
}
