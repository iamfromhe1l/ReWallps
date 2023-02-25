import { MacBookMockupProps } from './MacBookMockup.props';
import cn from 'classnames';
import styles from './MacBookMockup.module.css';

export default function MacBookMockup({
  imgUrl,
}: MacBookMockupProps): JSX.Element {
  return (
    <div className={styles['mbp-mockup-wrapper']}>
      <div className={styles['mbp-container']}>
        <div className={cn(styles['mbp-display'], styles['with-glare'])}>
          <div className={styles['display-edge']}>
            <div className={styles['bezel']}>
              <div className={styles['display-camera']}></div>
              <div className={styles['display-frame']}>
                <img
                  src={imgUrl}
                  alt='wallpaper'
                  className={styles.wallpaper}
                />
              </div>
              <div className={styles['below-display']}>
                <div className={styles['macbookpro']}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['mbp-keyboard']}>
          <div className={styles['front']}>
            <div className={styles['opener-left']}></div>
            <div className={styles['opener-right']}></div>
          </div>
          <div className={styles['bottom-left']}></div>
          <div className={styles['bottom-right']}></div>
          <div className={styles['mbp-shadow']}>
            <div className={styles['shadow-left']}></div>
            <div className={styles['shadow-right']}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
