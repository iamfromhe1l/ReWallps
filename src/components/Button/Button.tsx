import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
export default function Button({
  text,
  loading = false,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={styles.button} disabled={loading}>
      {text}
    </button>
  );
}
