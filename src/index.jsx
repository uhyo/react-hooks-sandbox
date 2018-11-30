import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { UseStateTest } from './practice/01-usestate';
import { UseEffectTest } from './practice/02-useeffect';
import { RealtimeTimer } from './custom/realtime-timer';
import { InputTest } from './custom/01-input';
import { UseOnUpdateTest } from './custom/02-useonupdate-after';
import { UseTimerTest } from './custom/03-usetimer';

const App = () => (
  <div>
    <UseStateTest />
    <UseEffectTest />
    <InputTest />
    <UseOnUpdateTest />
    <UseTimerTest />
    <hr />
    <RealtimeTimer />
    <RealtimeTimer />
    <RealtimeTimer />
  </div>
);

init();

function init() {
  const appArea = document.querySelector('#app');

  ReactDOM.render(<App />, appArea);
}
