import * as React from 'react';
const { useState, useEffect } = React;

export const UseEffectSample1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
    // クリーンアップ関数を返す
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <p>
      time: <b>{count}</b>
    </p>
  );
};
