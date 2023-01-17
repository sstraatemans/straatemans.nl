'use client';
import { Aside, Header, Main, Subheader } from '../components';
import Image from 'next/image';
import avatar from '../public/assets/images/pirate.jpg';

import { Animation } from '../components/Animation/Animation';

export default function Home() {
  return (
    <>
      <Main>
        <Header>My name Steven Straatemans</Header>
        <Subheader>
          <Animation />
          and I&apos;m a
        </Subheader>

        <Aside>
          <Image alt="pirate" src={avatar} sizes="100%" />
        </Aside>
      </Main>
    </>
  );
}
