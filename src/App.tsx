import React, { useState, createContext } from 'react';
import { hot } from 'react-hot-loader/root';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';

import 'normalize.css';
import './App.sass';

export const DarkModeContext = createContext(false);

const App: React.FC = () => {
  const [showAnimations, setShowAnimations] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <>
      <div className="App">
        {/* {showAnimations && (
          <LogosProvider>
            <Canvas />
          </LogosProvider>
        )} */}
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          showAnimations={showAnimations}
          toggleAnimations={() => setShowAnimations(prevState => !prevState)}
        />
        <main>
          <About />
          <Skills />
          <DarkModeContext.Provider value={isDarkMode}>
            <Projects />
          </DarkModeContext.Provider>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default hot(App);
