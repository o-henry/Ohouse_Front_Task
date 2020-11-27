import { useState, useEffect } from 'react';

import xhrAPI from 'lib/api';

function useFetch(url: string, options: any = {}, pageNum: number) {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await xhrAPI(url).get(`/page_${pageNum}.json`, options);
        setResponse([...response, ...res.data]);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [pageNum]);

  return { response, error };
}

export default useFetch;
