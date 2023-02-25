import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SideBarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  device: 'iphone' | 'macbook';
  width: number;
  height: number;
  imgUrl: string;
  setImgUrl: (c: string) => void;
}
