import { Aside, Header, Main, Subheader } from '../components';
import Image from 'next/image';
import avatar from '../public/assets/images/pirate.jpg';

export default function Home() {
  return (
    <>
      <Main>
        <Header>My name Steven Straatemans</Header>
        <Subheader>and I&apos;m a mighty pirate</Subheader>
        <Aside>
          <Image alt="pirate" src={avatar} placeholder="blur" sizes="100%" />
        </Aside>
      </Main>
    </>
  );
}
