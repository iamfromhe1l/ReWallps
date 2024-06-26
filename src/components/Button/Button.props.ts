import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  loading?: boolean;
}
