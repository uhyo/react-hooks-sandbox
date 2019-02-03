import * as React from 'react';
const {
  useEffect,
  useRef,
  useCallback,
  useImperativeHandle,
  forwardRef,
} = React;

export const UseIMperativeHandleSample = () => {
  const clockRef = useRef();

  // スタートボタンを押したときの処理
  const onStart = useCallback(() => {
    clockRef.current.start();
  }, []);
  // ストップボタンを押したときの処理
  const onStop = useCallback(() => {
    clockRef.current.stop();
  }, []);

  return (
    <div>
      <Clock ref={clockRef} />
      <p>
        <button onClick={onStart}>再開</button>
        <button onClick={onStop}>停止</button>
      </p>
    </div>
  );
};

const Clock = forwardRef((_props, ref) => {
  // 時刻を表示する場所のref
  const displayAreaRef = useRef();
  // リアルタイム表示がオンかどうかのref
  const enabledFlagRef = useRef(true);

  // リアルタイムに時刻を表示する処理
  useEffect(() => {
    let rafid = null;
    const loop = () => {
      // リアルタイム表示がオンのときのみ表示を更新
      if (enabledFlagRef.current) {
        // 現在時刻を表示
        const now = new Date();
        displayAreaRef.current.textContent = `${String(now.getHours()).padStart(
          2,
          '0',
        )}:${String(now.getMinutes()).padStart(2, '0')}:${String(
          now.getSeconds(),
        ).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0')}`;
      }
      rafid = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(rafid);
  });
  // コンポーネントのインスタンスが持つメソッドを宣言
  useImperativeHandle(ref, () => ({
    start() {
      enabledFlagRef.current = true;
    },
    stop() {
      enabledFlagRef.current = false;
    },
  }));

  return <p ref={displayAreaRef} />;
});
