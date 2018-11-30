import * as React from 'react';
const { useState, useEffect } = React;

/**
 * useTimer: 指定された時間ごとにアップデートされるタイマーの値を返す
 * @param {number} initialValue タイマーの初期値
 * @param {number} interval タイマーがインクリメントされる間隔
 * @returns {number} 現在のタイマーの値
 */
function useTimer(initialValue, interval) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    setTimeout(setCount.bind(null, count + 1), interval);
  });

  return count;
}

export const UseTimerTest = () => {
  // タイマーを登録
  const timerValue = useTimer(0, 1000);

  return (
    <section>
      <h1>useTimer() test</h1>
      <p>{timerValue}</p>
    </section>
  );
};
