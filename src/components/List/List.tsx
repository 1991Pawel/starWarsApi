import React from 'react';
import styles from '../List/list.module.css';

const List = () => {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <h5 className={styles.title}>name</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li className={styles.listItem}>
          <h5 className={styles.title}>name</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li className={styles.listItem}>
          <h5 className={styles.title}>name</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li className={styles.listItem}>
          <h5 className={styles.title}>name</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
        <li className={styles.listItem}>
          <h5 className={styles.title}>name</h5>
          <p>Lorem ipsum dolor sit amet.</p>
        </li>
      </ul>
    </div>
  );
};
export default List;
