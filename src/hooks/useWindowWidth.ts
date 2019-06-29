import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = throttle(() => setWindowWidth(window.innerWidth), 200);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

export default useWindowWidth;
