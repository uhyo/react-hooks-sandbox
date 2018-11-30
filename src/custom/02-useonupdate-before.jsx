import * as React from 'react';
const { useState, useEffect, useRef } = React;

export const UseOnUpdateTest = () => {
  const [count, setCount] = useState(0);
  // useEffectの呼び出しが初回かどうかをuseRefで作った変数で管理
  const isFirstRef = useRef(true);
  // 前回のステートも覚えておく
  const lastStateRef = useRef();

  useEffect(() => {
    // これが初回の呼び出しなら処理をスキップ
    if (isFirstRef.current) {
      isFirstRef.current = false;
    } else {
      console.log('再描画されました', lastStateRef.current, count);
    }
    // 次回使用するために前回のステートを更新
    lastStateRef.current = count;
  });

  return (
    <section>
      <h1>再描画時のみ処理を行う例</h1>
      <p>{count}</p>
      <p>
        <input type="button" value="+1" onClick={() => setCount(count + 1)} />
      </p>
    </section>
  );
};
