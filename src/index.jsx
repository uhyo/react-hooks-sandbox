import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UseStateTest } from './01-usestate';

const App = () => (
  <div>
    <UseStateTest />
  </div>
);

init();

function init() {
  const appArea = document.querySelector('#app');

  ReactDOM.render(<App />, appArea);
}
