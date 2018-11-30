import * as React from 'react';
const { useState } = React;

export const UseStateTest = () => {
  const [count, setCount] = useState(0);

  const callback = () => setCount(count + 1);
  return (
    <section>
      <h1>useState() test</h1>
      <p>
        <button type="button" onClick={callback}>
          {count}
        </button>
      </p>
    </section>
  );
};
