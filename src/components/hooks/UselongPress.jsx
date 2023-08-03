import { useState, useEffect, useCallback } from 'react';

export default function useLongPress(stage, callback = () => {}, ms = 500, setHoldData) {
  if(stage === 0) return ''
  const [startLongPress, setStartLongPress] = useState(false)
  
  useEffect(() => {
    let timerId;
    if (startLongPress) {
      timerId = setTimeout(callback, ms)
    } else {
      clearTimeout(timerId)
    }

    return () => {
      clearTimeout(timerId)
    };
  }, [callback, ms, startLongPress])

  const start = useCallback((e) => {
    //console.log(e.target.dataset)
    setHoldData(e.target.dataset)
    setStartLongPress(true)
  }, []);
  const stop = useCallback(() => {
    setStartLongPress(false)
  }, []);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: stop,
    onTouchStart: start,
    onTouchEnd: stop,
  }
}