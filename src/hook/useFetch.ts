import { useState, useEffect } from 'react';

import axios, { AxiosAdapter } from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';

const instance = axios.create({
  baseURL: '/',
  headers: { 'Cache-Control': 'no-cache' },
  adapter: cacheAdapterEnhancer(axios.defaults.adapter as AxiosAdapter),
});

function useFetch(url: string, pageNum?: string) {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await instance.get(url + pageNum);

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
