import { useEffect, useRef } from 'react';

export default function useOnce(func: () => void | (() => void)) {
  const funcRef = useRef(func);

  useEffect(() => {
    const res = funcRef.current();

    if (typeof res === 'function') {
      return res;
    }
  }, []);
}
