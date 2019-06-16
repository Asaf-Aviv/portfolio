import React from 'react';
import { hot } from 'react-hot-loader/root';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import 'normalize.css';
import './App.sass';

const App: React.FC = () => (
  <main className="App">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
);

export default hot(App);
