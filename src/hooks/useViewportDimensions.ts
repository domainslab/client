import { useCallback, useEffect, useState } from 'react';

export const useViewportDimensions = (): [number, number] => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onWindowResize = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, [onWindowResize]);

  useEffect(() => {
    onWindowResize();
  }, [onWindowResize]);

  return [width, height];
};
