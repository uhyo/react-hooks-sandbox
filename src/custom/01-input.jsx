import * as React from 'react';
const { useState } = React;

export const InputTest = () => {
  const [inputValue, onInputChange] = useState('');

  return (
    <section>
      <h1>inputのテスト</h1>
      <p>
        <input
          type="text"
          value={inputValue}
          onChange={e => onInputChange(e.currentTarget.value)}
        />
      </p>
    </section>
  );
};
