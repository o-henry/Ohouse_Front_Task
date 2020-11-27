import React, { lazy, useState, Suspense } from 'react';

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
      <Suspense fallback="Loading ...">
        <h1>사진 피드 리스트</h1>
        <Filter setFilterClick={setFilterClick} filterClick={filterClick} />

        <div className="container">
          <CardList data={response} target={setElement} />
        </div>
      </Suspense>
    </>
  );
}

const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards`;

export default App;
