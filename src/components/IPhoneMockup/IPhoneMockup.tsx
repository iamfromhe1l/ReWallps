import React from 'react';
import { IPhoneMockupProps } from './IPhoneMockup.props';
import styles from './IPhoneMockup.module.scss';

export default function IPhoneMockup({
  imgUrl,
}: IPhoneMockupProps): JSX.Element {
  return (
    <div className={styles['iphone-x']}>
      <i className={styles.i}>Speaker</i>
      <b className={styles.b}>Camera</b>
      <s className={styles.s}>10:24</s>

      <span className={styles.span}>Left action button</span>
      <span className={styles.span}>Right action button</span>
      <img src={imgUrl} alt='bckgrnd' className={styles.wallpaper} />
    </div>
  );
}
