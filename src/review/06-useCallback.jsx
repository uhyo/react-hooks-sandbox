import * as React from 'react';
const { useState, useContext, useCallback, createContext } = React;

const MyContext = createContext(() => {});

export const UseCallbackSample = () => {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => setCount(count => count + 1), []);

  return (
    <div>
      <p>
        <b>{count}</b>
      </p>
      <MyContext.Provider value={updateCount}>
        <IncrementButton />
      </MyContext.Provider>
    </div>
  );
};

const IncrementButton = React.memo(() => {
  const incrementHandler = useContext(MyContext);

  return (
    <p>
      <button onClick={incrementHandler}>+</button>
    </p>
  );
});
