import * as React from 'react';
const { useState, useEffect, useRef } = React;

/**
 * useOnUpdate: コンポーネントが再描画されたときに前回のステートとともに
 * コールバック関数を呼び出す
 */
function useOnUpdate(currentState, callback) {
  // useEffectの呼び出しが初回かどうかをuseRefで作った変数で管理
  const isFirstRef = useRef(true);
  // 前回のステートも変数で管理
  const lastStateRef = useRef();

  useEffect(() => {
    // これが初回の呼び出しならコールバック呼び出しをスキップ
    if (isFirstRef.current) {
      isFirstRef.current = false;
    } else {
      callback(lastStateRef.current);
    }
    // 次回使用するために前回のステートを更新
    lastStateRef.current = currentState;
  });
}

export const UseOnUpdateTest = () => {
  const [count, setCount] = useState(0);

  // useOnUpdate カスタムHookを使用
  useOnUpdate(count, lastCount => {
    console.log('再描画されました', lastCount, count);
  });

  return (
    <section>
      <h1>useOnUpdateフックのテスト</h1>
      <p>{count}</p>
      <p>
        <input type="button" value="+1" onClick={() => setCount(count + 1)} />
      </p>
    </section>
  );
};
