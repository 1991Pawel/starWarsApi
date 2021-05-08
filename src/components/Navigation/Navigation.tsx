import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navigation/navigation.module.css';

type LinkProps = {
  to: string;
  name: string;
};

const path = [
  {
    name: 'people',
    to: '/people',
  },
  {
    name: 'planets',
    to: '/planets',
  },
  {
    name: 'starships',
    to: '/starships',
  },
  {
    name: 'vehicles',
    to: '/vehicles',
  },
];

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav_menu}>
      {path.map((link: LinkProps) => (
        <li key={link.name} className={styles.nav_list}>
          <Link to={link.to} className={styles.nav_link}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navigation;
