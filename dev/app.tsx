import { Button, Slider } from '../src';

const App = () => (
  <section>
    <h1>Витрина для npm-модуля</h1>
    <Button text='Купить' />
    <Button
      text='Купить with warning'
      warning
    />
    <Slider title='Тестовый слайдер' />
  </section>
);

export default App;
