import { useState, useLayoutEffect } from 'react';

type DarkModeHook = () => [boolean, () => void]

const getPrefColorScheme = (): boolean => (
  window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false
);

const getInitialMode = (): boolean => {
  const inCache = 'isDarkMode' in localStorage;
  const cachedMode = localStorage.getItem('isDarkMode') === 'true';
  const userPrefersDark = getPrefColorScheme();

  return (inCache && cachedMode) || userPrefersDark;
};

const useDarkMode: DarkModeHook = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialMode());

  useLayoutEffect(() => {
    localStorage.setItem('isDarkMode', String(isDarkMode));

    const htmlNode = document.querySelector('html');

    if (htmlNode) {
      htmlNode.classList[isDarkMode ? 'add' : 'remove']('dark-theme');
    }
  }, [isDarkMode]);

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
