import React from 'react';
import styles from '../DetailsItem/detailsItem.module.css';

const DetailsItem = ({ data }: any) => {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Name: {data?.results[0]?.name}</li>
        <li className={styles.listItem}>{data?.results[0]?.gender}</li>
        <li className={styles.listItem}>
          created: {data?.results[0]?.created}
        </li>
        <li className={styles.listItem}>
          population: {data?.results[0]?.population}
        </li>
        <li className={styles.listItem}>
          terrain: {data?.results[0]?.terrain}
        </li>
        <li className={styles.listItem}>model: {data?.results[0]?.model}</li>
        <li className={styles.listItem}>
          passengers: {data?.results[0]?.passengers}
        </li>
        <li className={styles.listItem}>crew: {data?.results[0]?.crew}</li>
      </ul>
    </div>
  );
};

export default DetailsItem;
