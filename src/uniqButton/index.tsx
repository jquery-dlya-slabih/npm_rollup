import type { FC } from 'react';
import { clsx } from 'clsx';
import { plus } from 'plus';
import uniqueId from 'lodash.uniqueid';

import emoji from './emoji.svg';

import styles from './styles.scss';

interface IUniqButton {
  text: string;
  alternate?: boolean;
}

const UniqButton: FC<IUniqButton> = ({ text, alternate = false }) => (
  <div className={styles.container}>
    <button
      id={uniqueId('check_button-')}
      className={clsx(styles.button, { [styles.alternate!]: alternate })}
      onClick={() => alert(`5+5=${plus(5, 5)}`)}
    >
      {text}
    </button>
    <img
      src={emoji}
      alt='emoji with two faces'
      className={styles.emoji}
    />
  </div>
);

export default UniqButton;
