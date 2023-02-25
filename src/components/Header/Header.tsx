import React from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

export default function Header({}: HeaderProps): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles['header-left']}>
        <img src={logo} alt='ReWallps' className={styles.logo} />
      </div>

      <div className={styles['header-right']}>
        <Link className={styles.a} to='/'>
          IPhone
        </Link>
        <Link className={styles.a} to='/macbook'>
          MacBook
        </Link>
      </div>
    </div>
  );
}
