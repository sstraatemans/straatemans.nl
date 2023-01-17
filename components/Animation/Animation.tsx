'use client';

import { FC, useEffect, useState, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core';

type IAnimation = {
  label: string;
};

const data: IAnimation[] = [
  {
    label: 'mighty pirate',
  },
  {
    label: 'reluctant runner',
  },
  {
    label: 'freelance frontend developer',
  },
];
export const Animation: FC = () => {
  const [anim, setAnim] = useState<IAnimation>(data[0]);
  const ref = useRef(null);
  // const typewriter = useRef();

  useEffect(() => {
    if (ref.current) {
      var customNodeCreator = function (character: string) {
        return document.createTextNode(character);
      };

      console.log(ref);
      const typewriter = new Typewriter(ref.current, {
        onCreateTextNode: customNodeCreator,
      }) as unknown as any;

      typewriter
        ?.typeString(anim.label)
        .pauseFor(2500)
        .deleteAll()
        .pauseFor(300)
        .callFunction(() => {
          setAnim(data[1]);
        })
        .start();
    }
  }, [ref, anim]);

  return (
    <>
      <span ref={ref}></span>
    </>
  );
};
