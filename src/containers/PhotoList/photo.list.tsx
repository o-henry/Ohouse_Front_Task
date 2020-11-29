import React, { useState } from 'react';

import { Filter, Card } from 'components';
import { useFetch, useLocalStorage, useScroll } from 'hook';

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
  const [storage, setStorage] = useLocalStorage('', 'scraped');

  const { response, error, setResponse } = useFetch(URL, pageNum);

  if (error) {
    console.log(error);
  }

  useScroll({ element, setPageNum });

  const onSelect = (id: number) => {
    const data = [...response];
    const itemIdx = data.findIndex(item => item.id === id);
    data[itemIdx].selected = !data[itemIdx].selected;
    setResponse(data);

    setStorage(response.filter((data: any) => data.selected));
  };

  const onFilter = () => {};

  return (
    <>
      <h1>사진 피드 리스트</h1>
      <Filter
        handleClick={setFilterClick}
        isClick={isfilterClick}
        onFilter={onFilter}
        storage={storage}
        onSelect={onSelect}
      />
      {response &&
        response.map((feed: any, idx: number) => (
          <Card
            key={idx}
            style="item"
            feed={feed}
            target={setElement}
            onSelect={onSelect}
            isfilterClick={isfilterClick}
            storage={storage}
          />
        ))}
    </>
  );
}

const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards`;

export default PhotoList;
