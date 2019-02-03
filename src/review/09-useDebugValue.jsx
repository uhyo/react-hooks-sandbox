import * as React from 'react';
const { useEffect, useRef, useDebugValue } = React;

const useRenderCount = () => {
  const renderCountRef = useRef(0);

  useDebugValue(
    `このコンポーネントは${renderCountRef.current}回再描画されました`,
  );

  useEffect(() => {
    renderCountRef.current++;
  });
};
export const UseDebugValueSample = () => {
  useRenderCount();

  return <p>このコンポーネントを開発者ツールで見ると再描画数が表示されます</p>;
};
