import React from 'react';
import styles from '../DetailsItem/detailsItem.module.css';

const DetailsItem = ({ data }: any) => {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Name: {data?.results[0]?.name}</li>
        {data?.results[0]?.gender && (
          <li className={styles.listItem}>sex: {data?.results[0]?.gender}</li>
        )}

        <li className={styles.listItem}>
          created: {data?.results[0]?.created}
        </li>

        {data?.results[0]?.population && (
          <li className={styles.listItem}>
            population: {data?.results[0]?.population}
          </li>
        )}
        {data?.results[0]?.terrain && (
          <li className={styles.listItem}>
            terrain: {data?.results[0]?.terrain}
          </li>
        )}
        {data?.results[0]?.model && (
          <li className={styles.listItem}>model: {data?.results[0]?.model}</li>
        )}
        {data?.results[0]?.passengers && (
          <li className={styles.listItem}>
            passengers: {data?.results[0]?.passengers}
          </li>
        )}
        {data?.results[0]?.crew && (
          <li className={styles.listItem}>crew: {data?.results[0]?.crew}</li>
        )}
      </ul>
    </div>
  );
};

export default DetailsItem;
