import React from 'react';
import styles from '../Navigation/navigation.module.css';

type LinkProps = {
  href: string;
  name: string;
};

const path = [
  {
    name: 'characters',
    href: '/characters',
  },
  {
    name: 'planets',
    href: '/planets',
  },
  {
    name: 'ships',
    href: '/ships',
  },
];

const Navigation = () => (
  <nav className={styles.nav}>
    <ul className={styles.nav_menu}>
      {path.map((link: LinkProps) => (
        <li key={link.name} className={styles.nav_list}>
          <a href={link.href} className={styles.nav_link}>
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navigation;
