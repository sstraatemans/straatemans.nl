'use client';

import Image from 'next/image';
import React from 'react';

export default function App() {
  return (
    <div>
      <h2>Jan Haring</h2>
      <h3>11th of October 1573</h3>

      <Image
        src="/assets/nfts/janharing.png"
        width={500}
        height={340}
        style={{ float: 'left', margin: '0 16px' }}
        alt="Jan Haring K:apybara taking down the Spanish flag"
      />
      <p>
        Meet Jan Haring, the legendary sailor from Hoorn who had a knack for
        turning life-threatening situations into shameless self promotion. This
        guy was no ordinary sailor – he was the Chuck Norris of the seas during
        the Eighty Years&apos; War between Dutch rebels and the Spaniards.
      </p>
      <p>
        Now, picture this: During the Battle on the Diemerdijk in 1573, Jan
        Haring faced off against the Spanish like he was auditioning for a
        one-man show. He held them back all by himself until the Geuzen crew
        could safely plot their escape. When he finally saw his buddies sailing
        to safety, he thought, &lsquo;Time to go!&rsquo; So, he gracefully
        swan-dived into the water, dodging bullets like they were sprinkles at a
        pastry shop.
      </p>
      <p>
        {' '}
        But that wasn&apos;t the end of Jan. During the Battle on the Zuiderzee
        in the same year, he decided to pay a surprise visit to the Spanish
        flagship where Admiral Bossu was commanding. <br />
        Jan, in all his audacity, climbed up the mast and snipped down the
        admiral&apos;s flag while the Geuzen below cheered him on. However, his
        grand exit wasn&apos;t so graceful. He got shot in the chest and fell
        into the sea. This caused such confusion among the Spanish that they
        thought they were defeated and decided to flee. The Geuzen fished him
        out of the water and put him on display in the town hall of Hoorn. Oh,
        and by the way, the flag he took down from that Spanish ship? It was
        such a prized souvenir that they kept it in the Great Church until 1729!
      </p>
    </div>
  );
}
