import { Button, UniqButton } from '../src';

const App = () => (
  <section>
    <h1>Витрина для npm-модуля</h1>
    <div className='container'>
      <Button text='Просто кнопка' />
    </div>
    <div className='container'>
      <UniqButton text='Кнопка с какой-то функциональностью' />
    </div>
    <div className='container'>
      <UniqButton
        text='Кнопка с какой-то функциональностью в альтернативной раскраске'
        alternate
      />
    </div>
  </section>
);

export default App;
