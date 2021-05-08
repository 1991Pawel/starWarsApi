import React from 'react';
import styles from '../DetailsItem/detailsItem.module.css';

const DetailsItem = ({ data }: any) => {
  const item = data?.results[0];
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>Name: {item?.name}</li>
        {item?.gender && (
          <li className={styles.listItem}>sex: {item.gender}</li>
        )}

        <li className={styles.listItem}>created: {item?.created}</li>

        {item?.population && (
          <li className={styles.listItem}>population: {item?.population}</li>
        )}
        {item?.terrain && (
          <li className={styles.listItem}>terrain: {item?.terrain}</li>
        )}
        {item?.model && (
          <li className={styles.listItem}>model: {item?.model}</li>
        )}
        {item?.passengers && (
          <li className={styles.listItem}>passengers: {item?.passengers}</li>
        )}
        {item?.crew && <li className={styles.listItem}>crew: {item?.crew}</li>}
      </ul>
    </div>
  );
};

export default DetailsItem;
