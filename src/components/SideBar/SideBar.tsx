import Button from '../Button/Button';
import { SideBarProps } from './SideBar.props';
import axios from 'axios';

import styles from './SideBar.module.css';
import { useEffect, useState } from 'react';

export default function SideBar({
  width,
  height,
  device,
  imgUrl,
  setImgUrl,
}: SideBarProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const UpdateImage = async () => {
    setLoading(e => !e);
    setImgUrl(`loading${device}.gif`);
    await axios
      .head(`https://source.unsplash.com/random/${width}x${height}`)
      .then(function (response) {
        setImgUrl(response.request['responseURL']);
      })
      .then(() => setLoading(e => !e));
  };
  useEffect(() => {
    UpdateImage();
  }, []);

  return (
    <div className={styles.sidebar}>
      <Button text='Update Image' loading={loading} onClick={UpdateImage} />
      <Button
        text='Download'
        loading={loading}
        onClick={() => {
          window.location.href = imgUrl;
        }}
      />
    </div>
  );
}
