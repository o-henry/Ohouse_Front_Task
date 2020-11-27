import React from 'react';

import { CardList } from 'containers';
import { Filter } from 'components';
import useFetch from 'hook/useFetch';

function App() {
  let pageNumber = 1;
  const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${pageNumber}.json`;
  const data = useFetch(URL);

  return (
    <>
      <Filter />
      <CardList data={data} />
    </>
  );
}

export default App;
