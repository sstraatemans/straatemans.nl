'use client';

import {
  FC,
  useEffect,
  useState,
  useRef,
  PropsWithChildren,
  forwardRef,
  Ref,
  RefObject,
} from 'react';
import Typewriter from 'typewriter-effect/dist/core';
import { Subheader } from '../Template';
import styles from './animation.module.scss';
import Image from 'next/image';
import classnames from 'classnames';

type IAnimation = {
  label: string;
  image: string;
};

const data: IAnimation[] = [
  {
    label: 'mighty<br/>pirate',
    image: 'pirate',
  },
  {
    label: 'proud<br/>dad',
    image: 'isanora',
  },
  {
    label: 'happily<br/>married',
    image: 'nicole',
  },
  {
    label: 'reluctant<br/>runner',
    image: 'runner',
  },
  {
    label: 'beginning<br/>guitarist',
    image: 'guitarist',
  },
  {
    label: 'freelance<br/>frontend developer',
    image: 'developer',
  },
];

const updateIdx = (idx: number) => (idx === data.length - 1 ? 0 : ++idx);

export const Aside: FC<
  PropsWithChildren<{ animRef: RefObject<HTMLDivElement> }>
> = ({ children, animRef }) => {
  useEffect(() => {
    const div: HTMLDivElement = animRef?.current as unknown as any;

    div.classList.add(styles.loaded);
  }, []);
  return (
    <aside ref={animRef} className={classnames(styles.aside)}>
      {children}
    </aside>
  );
};

export const Animation: FC = () => {
  const [animIdx, setAnimIdx] = useState<number>(0);
  const ref = useRef(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const typewriter = useRef<any>();

  useEffect(() => {
    typewriter.current = new Typewriter(ref.current) as unknown as any;
  }, []);

  useEffect(() => {
    typewriter.current
      ?.typeString(data[animIdx].label)
      .pauseFor(1000)
      .callFunction(() => {
        imageRef.current?.classList.remove(styles.loaded);
      })
      .deleteAll()
      .pauseFor(300)
      .callFunction(() => {
        const newIdx = updateIdx(animIdx);
        imageRef.current?.classList.add(styles.loaded);
        imageRef.current?.style.setProperty(
          '--imageName',
          `url(/assets/images/${data[newIdx].image}.png)`,
        );
        setAnimIdx(newIdx);
      })
      .start();
  }, [animIdx]);

  return (
    <>
      <Subheader>
        and I&apos;m a <span className={styles.typewriter} ref={ref}></span>
      </Subheader>

      <Aside animRef={imageRef}>
        {/* <Image
          alt={data[animIdx].label}
          ref={imageRef}
          className={classnames([styles.images])}
          onLoad={(e) => {
            console.log(e.target);
            e.currentTarget.classList.add(styles.loaded);
          }}
          src={`/assets/images/${data[animIdx].image}.png`}
          sizes="100%"
          width="200"
          height="250"
        /> */}
      </Aside>
    </>
  );
};
