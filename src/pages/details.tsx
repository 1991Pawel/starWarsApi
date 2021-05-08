import React from 'react';

import Layout from '../components/Layout/Layout';
import { useHistory, useParams } from 'react-router-dom';
import DetailsItem from '../components/DetailsItem/DetailsItem';
import useFetch from '../hook/useFetch';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const Details = () => {
  const { category, name } = useParams<{ category: string; name: string }>();
  const url = `http://swapi.dev/api/${category}?search=${name}`;
  const { loading, data }: any = useFetch(url);
  const history = useHistory();

  if (loading) {
    return (
      <Layout>
        <LoadingSpinner />
      </Layout>
    );
  }

  return (
    <Layout>
      <h2 className="title">Details</h2>
      <button className="btn-back" onClick={() => history.goBack()}>
        back
      </button>
      {data?.count ? (
        <DetailsItem data={data} />
      ) : (
        <h3 className="title">No data to display</h3>
      )}
    </Layout>
  );
};

export default Details;
