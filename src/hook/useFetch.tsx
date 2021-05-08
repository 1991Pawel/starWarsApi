import { useState, useEffect } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  useEffect(() => {
    const getDataFromApi = async () => {
      setError(false);
      setLoading(true);
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('cound not fetch data');
          }
          return res.json();
        })
        .then((dataFromFetch) => {
          setData(dataFromFetch);
          setNextPage(dataFromFetch.next);
          setPrevPage(dataFromFetch.previous);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
          setError(true);
        });
    };
    getDataFromApi();
  }, [url]);

  return { data, loading, nextPage, prevPage, error };
};

export default useFetch;
