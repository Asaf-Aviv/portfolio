import React, { useState, createContext } from 'react';
import { hot } from 'react-hot-loader/root';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Canvas from './components/Canvas';
import Footer from './components/Footer';
import LogosProvider from './components/Canvas/LogoLoaderProvider';
import useDarkMode from './hooks/useDarkMode';
import useActiveScrollLinks from './hooks/useActiveScrollLinks';

import 'normalize.css';
import './App.sass';

export const DarkModeContext = createContext<boolean>(false);

const App: React.FC = () => {
  const [showAnimations, setShowAnimations] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  useActiveScrollLinks();

  return (
    <main className="App">
      {showAnimations && (
        <LogosProvider>
          <Canvas />
        </LogosProvider>
      )}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        showAnimations={showAnimations}
        toggleAnimations={() => setShowAnimations(prevState => !prevState)}
      />
      <About />
      <Skills />
      <DarkModeContext.Provider value={isDarkMode}>
        <Projects />
      </DarkModeContext.Provider>
      <Contact />
      <Footer />
    </main>
  );
};

export default hot(App);
