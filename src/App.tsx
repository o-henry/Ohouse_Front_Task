import React from 'react';

import { Filter } from 'components';
import useFetch from 'hook/useFetch';

function App() {
  let pageNumber = 1;
  const URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards/page_${pageNumber}.json`;
  const data = useFetch(URL);

  console.log(data);
  return (
    <>
      <Filter />
    </>
  );
}

export default App;
