import React, { useRef, useState, useEffect } from 'react';

import { CardList } from 'containers';
import { Filter } from 'components';

import xhrAPI from 'hook/useFetch';

function App() {
  const [element, setElement] = useState(null);
  const [data, setData] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState(1);

  let URL = `https://bucketplace-coding-test.s3.amazonaws.com/cards`;

  const observer = useRef(
    new IntersectionObserver(
      entries => {
        const first = entries[0];
        if (first.isIntersecting) {
          console.log(first);
          console.log(first.isIntersecting);
          setPageNumber(pageNumber + 1);
        }
      },
      { threshold: 0.0, rootMargin: '0px', root: null },
    ),
  );

  useEffect(() => {
    const currentElement: any = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    const getData = async () => {
      await xhrAPI(URL)
        .get(`/page_${pageNumber}.json`)
        .then(res => setData([...data, ...res.data]));
    };

    console.log('pgnumb', pageNumber);

    getData();
  }, [pageNumber]);

  return (
    <>
      <Filter />

      <div className="container">
        <CardList data={data} target={setElement} />
      </div>
    </>
  );
}

export default App;
