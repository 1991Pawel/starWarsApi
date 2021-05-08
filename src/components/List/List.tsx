import React from 'react';
import styles from '../List/list.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const List = ({ data, loading }: any) => {
  if (loading) {
    return (
      <div className={styles.listWrapper}>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        {data.map((item: any): any => (
          <li key={item.name} className={styles.listItem}>
            <h5 className={styles.title}>{item.name}</h5>
            <span className={styles.cta}>more</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
