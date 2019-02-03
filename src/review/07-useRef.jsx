import * as React from 'react';
const { useEffect, useRef } = React;

export const UseRefSample = () => {
  const displayAreaRef = useRef();

  useEffect(() => {
    let rafid = null;
    const loop = () => {
      // 現在時刻を表示
      const now = new Date();
      displayAreaRef.current.textContent = `${String(now.getHours()).padStart(
        2,
        '0',
      )}:${String(now.getMinutes()).padStart(2, '0')}:${String(
        now.getSeconds(),
      ).padStart(2, '0')}.${String(now.getMilliseconds()).padStart(3, '0')}`;
      rafid = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(rafid);
  });

  return <p ref={displayAreaRef} />;
};

export const UseRefSample2 = () => {
  const displayAreaRef = useRef();
  const renderCountRef = useRef(0);

  useEffect(() => {
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
/*
export class UseRefSample2 extends React.Component {
  constructor(props) {
    super(props);
    this.displayArea = React.createRef();
    this.renderCount = 0;
  }
  render() {
    return (
      <p>
        このコンポーネントは
        <b ref={this.displayArea} />
        回描画されました。
      </p>
    );
  }
  _effect() {
    this.renderCount++;
    this.displayArea.current.textContent = String(this.renderCount);
  }
  componentDidMount() {
    this._effect();
  }
  componentDidUpdate() {
    this._effect();
  }
}
*/
