import * as React from 'react';
const { useMemo } = React;

export const UseMemoSample = ({ n }) => {
  const sum = useMemo(() => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }, [n]);

  return (
    <div>
      <p>
        1 + … + n = <b>{sum}</b>
      </p>
    </div>
  );
};
