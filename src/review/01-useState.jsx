import * as React from 'react';
const { useState } = React;

export const UseStateSample = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>useStateのテスト</h1>
      <p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <b>{count}</b>
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
    </section>
  );
};
