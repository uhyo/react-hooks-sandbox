import * as React from 'react';
const { useState, useEffect } = React;

export const UseEffectTest = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(setCount.bind(null, count + 1), 1000);
  });

  return (
    <section>
      <h1>useEffect() test</h1>
      <p>{count}</p>
    </section>
  );
};
