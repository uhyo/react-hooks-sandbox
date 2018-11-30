import * as React from 'react';
import { useRealtimeTimer } from './hook';
const { useState, useRef } = React;

/**
 * 高い頻度（多分60fps）で更新されるタイマーのサンプル
 */
export const RealtimeTimer = () => {
  const [timerTarget, setTimerTarget] = useState(0);

  const onAddTime = () => {
    const nextTimerValue = Math.max(timerTarget, Date.now()) + 5000;
    setTimerTarget(nextTimerValue);
  };
  return (
    <section>
      <h1>タイマー</h1>
      <p>
        <input type="button" value="+5秒" onClick={onAddTime} />
        <TimerCore target={timerTarget} />
      </p>
    </section>
  );
};

/**
 * タイマーを表示するコンポーネント
 * @param {number} props.target タイマーが0になる時刻
 */
const TimerCore = props => {
  const timerRef = useRef();

  useRealtimeTimer(() => {
    // タイマーの値を計算
    const timerValue = Math.max(0, props.target - Date.now());
    const timerString = (timerValue / 1000).toFixed(3);

    timerRef.current.textContent = timerString;
  });

  return <b ref={timerRef} />;
};
