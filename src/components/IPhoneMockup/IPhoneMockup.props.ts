import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IPhoneMockupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgUrl: string;
}
