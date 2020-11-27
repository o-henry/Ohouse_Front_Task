import React from 'react';

import { Card } from 'components';

export interface IData {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

function CardList({ data }: any) {
  return (
    <>
      {data.response &&
        data.response.map((feed: IData, i: number) => (
          <Card feed={feed} key={i} />
        ))}
    </>
  );
}

export default CardList;
