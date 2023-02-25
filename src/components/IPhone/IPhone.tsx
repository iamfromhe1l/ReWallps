import { useState } from 'react';
import IPhoneMockup from '../IPhoneMockup/IPhoneMockup';
import SideBar from '../SideBar/SideBar';
import styles from './IPhone.module.css';
export default function IPhone(): JSX.Element {
  const [imgUrl, setImgUrl] = useState('');
  return (
    <div className={styles.content}>
      <IPhoneMockup imgUrl={imgUrl} />
      <SideBar
        device='iphone'
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
        width={1400}
        height={3100}
      />
    </div>
  );
}
