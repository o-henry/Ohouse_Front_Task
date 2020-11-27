import React, { lazy, useState, Suspense } from 'react';

import { Filter } from 'components';
import { useFetch, useScroll } from 'hook';

const CardList = lazy(() => import('containers/CardList/card.list'));

function App() {
  const [element, setElement] = useState(null);
  const [pageNum, setPageNum] = useState<number>(1);

  useScroll({ element, setPageNum });

  const { response } = useFetch(URL, {}, pageNum);

  return (
    <>
      <Suspense fallback="loading ....">
        <Filter />
        <h1>사진 피드 리스트</h1>

        <div className="container">
          <CardList data={response} target={setElement} />
        </div>
      </Suspense>
    </>
  );
}

const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards`;

export default App;
