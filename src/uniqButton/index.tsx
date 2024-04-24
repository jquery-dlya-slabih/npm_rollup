import type { FC } from 'react';
import { clsx } from 'clsx';
import { plus } from 'plus';
import uniqueId from 'lodash.uniqueid';

import styles from './styles.scss';

interface IUniqButton {
  text: string;
  alternate?: boolean;
}

const UniqButton: FC<IUniqButton> = ({ text, alternate = false }) => (
  <>
    <button
      id={uniqueId('check_button-')}
      className={clsx(styles.button, { [styles.alternate!]: alternate })}
      onClick={() => alert(`5+5=${plus(5, 5)}`)}
    >
      {text}
    </button>
  </>
);

export default UniqButton;
