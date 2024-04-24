import type { FC } from 'react';
import ReactSlider from 'react-slider';
import { oldPlus } from 'plus';

import styles from './styles.scss';

interface ISlider {
  title: string;
}

const Slider: FC<ISlider> = ({ title }) => (
  <div className={styles.container}>
    {title} {oldPlus('1', '2')}
    <ReactSlider
      className={styles.slider}
      thumbClassName={styles.thumb}
      trackClassName={styles.track}
      renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
  </div>
);

export default Slider;
