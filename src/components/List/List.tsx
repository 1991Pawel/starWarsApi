import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../List/list.module.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

const List = ({ data, loading }: any) => {
  const location = useLocation();
  const query = location.pathname;
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
            <Link className={styles.cta} to={`/details${query}/${item.name}`}>
              more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
