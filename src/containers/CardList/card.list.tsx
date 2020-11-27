import React, { useState } from 'react';

import { Card } from 'components';

export interface IFeed {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

function CardList({ data, target }: any) {
  const [storage, setStorage] = useState([]);

  return (
    <>
      {data &&
        data.map((feed: IFeed, i: number) => (
          <Card
            key={i}
            style="item"
            feed={feed}
            target={target}
            setStorage={setStorage}
            storage={storage}
          />
        ))}
    </>
  );
}

export default CardList;
