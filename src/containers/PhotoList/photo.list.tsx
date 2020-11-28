import React, { useState } from 'react';

import { Filter, Card } from 'components';
import { useFetch, useScroll } from 'hook';

export interface IFeed {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  selected: boolean;
}

function PhotoList() {
  const [element, setElement] = useState(null);
  const [isfilterClick, setFilterClick] = useState(false);
  const [pageNum, setPageNum] = useState(1);

  const { response, setResponse, error } = useFetch(URL, pageNum);

  if (error) {
    console.log(error);
  }

  useScroll({ element, setPageNum });

  const onSelect = (id: number) => {
    setResponse(
      response.map((feed: IFeed) =>
        feed.id === id ? { ...feed, selected: !feed.selected } : feed,
      ),
    );
  };

  const onFilter = () => {};

  return (
    <>
      <h1>사진 피드 리스트</h1>
      <Filter
        handleClick={setFilterClick}
        isClick={isfilterClick}
        onFilter={onFilter}
      />
      {response &&
        response.map((feed: any, idx: number) => (
          <Card
            key={idx}
            style="item"
            feed={feed}
            target={setElement}
            onSelect={onSelect}
          />
        ))}
    </>
  );
}

const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards`;

export default PhotoList;
