import { useRef, useEffect, useCallback } from "react";

type Timer = ReturnType<typeof setTimeout>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SomeFunction = (...args: any[]) => void;
/**
 *
 * @param func The original, non debounced function (You can pass any number of args to it)
 * @param delay The delay (in ms) for the function to return
 * @returns The debounced function, which will run only if the debounced function has not been called in the last (delay) ms
 */

export const useDebounceFunction = <Func extends SomeFunction>(
  func: Func,
  delay = 1000
) => {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]) => {
      const newTimer = setTimeout(() => {
        func(...(args as never[]));
      }, delay);

      clearTimeout(timer.current);
      timer.current = newTimer;
    },
    [delay, func]
  );

  return debouncedFunction;
};
