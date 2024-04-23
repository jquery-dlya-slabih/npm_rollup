import { createRoot } from 'react-dom/client';

import App from './app';
import './base.scss';

function initDev() {
  const container = document.querySelector('#app');

  if (container) {
    const root = createRoot(container);

    root.render(<App />);
  } else {
    throw Error('Target container is not a DOM element.');
  }
}

initDev();
