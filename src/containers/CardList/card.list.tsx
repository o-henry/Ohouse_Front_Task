import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import { Card } from 'components';

export interface IData {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

function CardList({ data, target }: any) {
  return (
    <>
      {data &&
        data.map((feed: IData, i: number) => (
          <Card feed={feed} key={i} style="item" target={target} />
        ))}
    </>
  );
}

export default CardList;
