import * as React from 'react';
const { useState, useContext, createContext } = React;

const MyContext = createContext(() => {});

export const UseContextSample = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        <b>{count}</b>
      </p>
      <MyContext.Provider value={() => setCount(count => count + 1)}>
        <IncrementButton />
      </MyContext.Provider>
    </div>
  );
};

const IncrementButton = () => {
  const incrementHandler = useContext(MyContext);

  return (
    <p>
      <button onClick={incrementHandler}>+</button>
    </p>
  );
};

/*
const IncrementButton = () => {
  return (
    <MyContext.Consumer>
      {incrementHandler => (
        <p>
          <button onClick={incrementHandler}>+</button>
        </p>
      )}
    </MyContext.Consumer>
  );
};
*/
