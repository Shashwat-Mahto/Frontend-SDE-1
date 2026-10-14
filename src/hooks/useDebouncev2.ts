import { useEffect, useRef } from "react";

// this hook will return a function;
export const useDebounceV2 = (
  callback: (...args: any[]) => void,
  delay: number = 500,
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current!==null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return function debounce(...args: any[]) {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
