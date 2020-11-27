import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url: string, options: any = {}) {
  const [response, setResponse] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url, options);
        setResponse(res.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { response, error };
}

export default useFetch;
