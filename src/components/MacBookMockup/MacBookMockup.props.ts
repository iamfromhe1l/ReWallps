import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MacBookMockupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgUrl: string;
}
