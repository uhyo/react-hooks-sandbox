import * as React from 'react';
const { useState } = React;

export const UseStateSample = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <b>{count}</b>
      <button onClick={() => setCount(count + 1)}>+</button>
    </p>
  );
};

export const UseStateSample2 = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <p>
      <b>{left}</b>
      <button
        onClick={() => {
          setLeft(left + 1);
          setRight(right - 1);
        }}
      >
        ←
      </button>
      <b>{right}</b>
      <button onClick={() => setRight(right + 1)}>+</button>
    </p>
  );
};

export const UseStateSample3 = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <button onClick={() => setCount(count => count - 1)}>-</button>
      <b>{count}</b>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </p>
  );
};

const SuperButton = ({ onClick, children }) => {
  const onclickHere =
    onClick &&
    (e => {
      for (const _ of [0, 1, 2, 3, 4]) onClick(e);
    });
  return <button onClick={onclickHere}>{children}</button>;
};
export const UseStateSample4 = () => {
  const [count, setCount] = useState(0);

  return (
    <p>
      <SuperButton onClick={() => setCount(count - 1)}>-</SuperButton>
      <b>{count}</b>
      <SuperButton onClick={() => setCount(count => count + 1)}>+</SuperButton>
    </p>
  );
};

/*
export class UseStateSample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    const { count } = this.state;
    return (
      <p>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
        <b>{count}</b>
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
      </p>
    );
  }
}
*/
