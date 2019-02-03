import * as React from 'react';
const { useLayoutEffect, useRef } = React;

export const UseLayoutEffectSample = () => {
  const displayAreaRef = useRef();
  const renderCountRef = useRef(0);

  useLayoutEffect(() => {
    renderCountRef.current++;
    displayAreaRef.current.textContent = String(renderCountRef.current);
  });

  return (
    <p>
      このコンポーネントは
      <b ref={displayAreaRef} />
      回描画されました。
    </p>
  );
};
