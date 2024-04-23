import type { FC } from 'react';
import { clsx } from 'clsx';

import { plus } from 'plus';

import styles from './styles.scss';

interface IButton {
  text: string;
  warning?: boolean;
}

const Button: FC<IButton> = ({ text, warning = false }) => (
  <>
    <button className={clsx(styles.button, { [styles.warning!]: warning })}>
      {text}
    </button>
    <p>1 + 2 = {plus(1, 2)}</p>
  </>
);

export default Button;
