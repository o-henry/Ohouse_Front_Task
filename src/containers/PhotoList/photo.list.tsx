import React, { useState, lazy, Suspense } from 'react';

import { Filter } from 'components';
import { useFetch, useScroll } from 'hook';

const Card = lazy(() => import('components/Card/card'));

export interface IFeed {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  selected: boolean;
}

function PhotoList() {
  const [isClick, setIsClick] = useState(false);
  const [element, setElement] = useState(null);
  const [page, setPage] = useState(1);

  const { response, error } = useFetch(URL, `${page}.json`);

  if (error) {
    console.log(error);
  }

  useScroll({ element, setPage });

  return (
    <>
      <Filter handleClick={setIsClick} isClick={isClick} />

      {response &&
        response.map((feed: IFeed, idx: number) => (
          <Suspense fallback="Loading ..." key={idx}>
            <Card
              style="item"
              key={feed.id}
              feed={feed}
              isClick={isClick}
              target={setElement}
            />
          </Suspense>
        ))}
    </>
  );
}

const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards/page_`;

function areEqual(prevProps: any, nextProps: any) {
  return prevProps.id === nextProps.id;
}

export default React.memo(PhotoList, areEqual);
