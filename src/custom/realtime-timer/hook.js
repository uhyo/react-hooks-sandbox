import { useEffect } from 'react';

/**
 * requestAnimationFrameでループを回し続けるカスタムフック
 * 複数のコンポーネントからリクエストを受けても回るループは1つだけ
 */
export function useRealtimeTimer(callback) {
  useEffect(() => {
    activateCallback(callback);
    return () => deactivateCallback(callback);
  });
}

/**
 * 現在ループしている関数たち
 */
const activeCallbacks = new Set();
/**
 * 現在のループを終了させる関数
 */
let endLoopFunc = null;

function mainLoop() {
  activeCallbacks.forEach(f => f());
}
/**
 * 関数をループに追加する
 */
function activateCallback(callback) {
  const prevActive = activeCallbacks.size > 0;
  activeCallbacks.add(callback);
  if (!prevActive) {
    endLoopFunc = loop(mainLoop);
  }
}
/**
 * 関数をループから削除する
 */
function deactivateCallback(callback) {
  activeCallbacks.delete(callback);
  if (activeCallbacks.size === 0 && endLoopFunc != null) {
    endLoopFunc();
    endLoopFunc = null;
  }
}

/**
 * 渡された関数をrequestAnimationFrameでループする関数
 * @returns {Function} ループを止める関数
 */
function loop(callback) {
  let handle = null;
  const frame = () => {
    callback();
    handle = requestAnimationFrame(frame);
  };
  frame();
  return () => {
    if (handle != null) {
      cancelAnimationFrame(handle);
    }
  };
}
