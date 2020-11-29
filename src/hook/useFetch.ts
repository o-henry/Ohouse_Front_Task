import { useState, useEffect } from 'react';

import xhrAPI from 'lib/api';

// 의존성 수정 필요
function useFetch(url: string, pageNum: number, options?: any) {
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
