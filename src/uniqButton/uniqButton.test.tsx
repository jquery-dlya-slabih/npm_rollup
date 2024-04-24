import { render, screen } from '@testing-library/react';

import UniqButton from '.';

describe('button', () => {
  it('render component', () => {
    render(<UniqButton text='тест кнопки' />);

    expect(screen.getByText('тест кнопки')).toBeInTheDocument();
  });

  it('render component with alternate', () => {
    render(
      <UniqButton
        text='тест кнопки'
        alternate
      />
    );

    expect(screen.getByText('тест кнопки')).toHaveClass('alternate');
  });
});
