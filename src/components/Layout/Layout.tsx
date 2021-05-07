import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from '../Layout/layout.module.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Navigation />
      <span className={styles.planet} />
      <span className={styles.roket} />
      <div className={styles.stars_wrapper}>
        <span className={styles.stars_first} />
        <span className={styles.stars_secound} />
        <span className={styles.stars_third} />
      </div>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
