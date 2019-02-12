import * as React from 'react';
import {
  UseStateSample,
  UseStateSample2,
  UseStateSample3,
  UseStateSample4,
} from './01-useState';
import { UseEffectSample1 } from './02-useEffect';
import { UseContextSample } from './03-useContext';
import { UseReducerSample, UseReducerSample2 } from './04-useReducer';
import { UseMemoSample } from './05-useMemo';
import { UseCallbackSample } from './06-useCallback';
import { UseRefSample, UseRefSample2 } from './07-useRef';
import { UseLayoutEffectSample } from './08-useLayoutEffect';
import { UseDebugValueSample } from './09-useDebugValue';
import { UseIMperativeHandleSample } from './10-useImperativeHandle';

export const Review = () => (
  <div>
    <UseStateSample />
    <UseStateSample2 />
    <UseStateSample3 />
    <UseStateSample4 />
    <hr />
    <UseEffectSample1 />
    <hr />
    <UseContextSample />
    <hr />
    <UseReducerSample />
    <UseReducerSample2 initialMonth={10} />
    <hr />
    <UseMemoSample n={1000} />
    <hr />
    <UseCallbackSample />
    <hr />
    <UseRefSample />
    <UseRefSample2 />
    <hr />
    <UseLayoutEffectSample />
    <hr />
    <UseDebugValueSample />
    <hr />
    <UseIMperativeHandleSample />
  </div>
);
