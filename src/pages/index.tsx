import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import '../App.css';
import List from '../components/List/List';
import Layout from '../components/Layout/Layout';

function HomePage() {
  const location = useLocation();
  const query = location.pathname;
  const baseUrl = `http://swapi.dev/api`;
  const [fetchUrl, setFetchUrl] = useState(baseUrl + query);

  const { loading, data, prevPage, nextPage }: any = useFetch(fetchUrl);

  useEffect(() => {
    setFetchUrl(baseUrl + query);
  }, [query]);

  const nextPageHandler = () => {
    if (nextPage && !loading) {
      setFetchUrl(nextPage);
    }
  };
  const prevPageHandler = () => {
    if (prevPage && !loading) {
      setFetchUrl(prevPage);
    }
  };

  return (
    <Layout>
      {console.log(data)}
      <h2 className="title">StarWarsApi</h2>
      <p>{JSON.stringify(fetchUrl)}</p>
      {data?.results && <List loading={loading} data={data.results} />}

      <div className="btn-group">
        <button className="btn" onClick={prevPageHandler} disabled={!prevPage}>
          prev
        </button>
        <button className="btn" onClick={nextPageHandler} disabled={!nextPage}>
          next
        </button>
      </div>
    </Layout>
  );
}

export default HomePage;
