import * as React from 'react';
const { useContext, useReducer, createContext } = React;

const DispatchContext = createContext(() => {});

const reducer = ({ year, month }, action) => {
  switch (action) {
    case 'increment':
      return month === 11
        ? { year: year + 1, month: 0 }
        : { year, month: month + 1 };
    case 'decrement':
      return month === 0
        ? { year: year - 1, month: 11 }
        : { year, month: month - 1 };
    default:
      return {
        year: action.year,
        month: action.month,
      };
  }
};

export const UseReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, {
    year: 0,
    month: 1,
  });

  return (
    <div>
      <p>
        <b>
          {state.year}年{state.month}ヶ月
        </b>
      </p>
      <DispatchContext.Provider value={dispatch}>
        <ControlButtons />
      </DispatchContext.Provider>
    </div>
  );
};

const ControlButtons = () => {
  const dispatch = useContext(DispatchContext);

  return (
    <p>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('increment')}>+</button>
    </p>
  );
};

export const UseReducerSample2 = ({ initialYear, initialMonth }) => {
  const [state, dispatch] = useReducer(
    reducer,
    {
      year: 0,
      month: 1,
    },
    {
      type: 'reset',
      year: initialYear,
      month: initialMonth,
    },
  );

  return (
    <div>
      <p>
        <b>
          {state.year}年{state.month}ヶ月
        </b>
      </p>
      <DispatchContext.Provider value={dispatch}>
        <ControlButtons />
      </DispatchContext.Provider>
    </div>
  );
};