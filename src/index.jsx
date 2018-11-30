import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => <div>test</div>;

init();

function init() {
  const appArea = document.querySelector('#app');

  ReactDOM.render(<App />, appArea);
}
