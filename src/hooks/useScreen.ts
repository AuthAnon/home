import { useEffect, useState, useMemo } from 'react';

export interface IScreen {
  height: number;
  width: number;
  orientation: 'portrait' | 'landscape';
}

export function useScreen(): IScreen {
  const [height, setHeight] = useState(document.documentElement?.clientHeight || window.innerHeight);
  const [width, setWidth] = useState(document.documentElement?.clientWidth || window.innerWidth);
  const orientation = useMemo(() => {
    return height > width ? 'portrait' : 'landscape';
  }, [height, width]);

  useEffect(() => {
    function onResize() {
      setHeight(document.documentElement?.clientHeight || window.innerHeight);
      setWidth(document.documentElement?.clientWidth || window.innerWidth);
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('orientationchange', onResize);
  }, []);

  return {
    height,
    width,
    orientation,
  };
}
