import { useEffect, useState } from "react";

export function useNow(interval, enabled) {
  const [now, setNow] = useState();

  useEffect(() => {
    if (!enabled) {
      setNow(null);
      return;
    }

    const timerInterval = setInterval(() => {
      setNow(Date.now());
    }, interval);

    return () => {
      clearInterval(timerInterval);
    };
  }, [interval, enabled]);

  return now;
}

export function useInterval(interval, enabled, cb) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const timerInterval = setInterval(() => {
      cb(Date.now());
    }, interval);

    return () => {
      clearInterval(timerInterval);
    };
    // TODO useCallback
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interval, enabled]);
}
