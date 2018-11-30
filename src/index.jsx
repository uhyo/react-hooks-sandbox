import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UseStateTest } from './practice/01-usestate';
import { UseEffectTest } from './practice/02-useeffect';

const App = () => (
  <div>
    <UseStateTest />
    <UseEffectTest />
  </div>
);

init();

function init() {
  const appArea = document.querySelector('#app');

  ReactDOM.render(<App />, appArea);
}
