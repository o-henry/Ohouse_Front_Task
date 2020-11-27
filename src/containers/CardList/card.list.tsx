import React from 'react';

import { Card } from 'components';

export interface IFeed {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

function CardList({ data, target }: any) {
  return (
    <>
      {data &&
        data.map((feed: IFeed, i: number) => (
          <Card feed={feed} key={i} style="item" target={target} />
        ))}
    </>
  );
}

export default CardList;
