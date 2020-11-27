import React, { lazy, useState } from 'react';

import { Filter } from 'components';
import { useFetch, useScroll } from 'hook';

const CardList = lazy(() => import('containers/CardList/card.list'));

function App() {
  const [element, setElement] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [filterClick, setFilterClick] = useState(false);

  const { response } = useFetch(URL, {}, pageNum);
  useScroll({ element, setPageNum });

  return (
    <>
      <h1>사진 피드 리스트</h1>
      <Filter />

      <div className="container">
        <CardList data={response} target={setElement} />
      </div>
    </>
  );
}

const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards`;

export default App;
