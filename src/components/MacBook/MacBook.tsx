import { useState } from 'react';
import MacBookMockup from '../MacBookMockup/MacBookMockup';
import SideBar from '../SideBar/SideBar';
import { MacBookProps } from './MacBook.props';

export default function MacBook({}: MacBookProps): JSX.Element {
  const [imgUrl, setImgUrl] = useState('');
  return (
    <>
      <MacBookMockup imgUrl={imgUrl} />
      <SideBar
        device='macbook'
        imgUrl={imgUrl}
        setImgUrl={setImgUrl}
        width={3500}
        height={2300}
      />
    </>
  );
}
