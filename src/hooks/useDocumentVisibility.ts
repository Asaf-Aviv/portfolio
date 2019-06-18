import { useState, useEffect } from 'react';

const useDocumentVisibility = (): boolean => {
  const visibilityCheck = () => document.visibilityState === 'visible';
  const [isVisible, setIsVisible] = useState<boolean>(visibilityCheck());

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(visibilityCheck());
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isVisible;
};

export default useDocumentVisibility;
