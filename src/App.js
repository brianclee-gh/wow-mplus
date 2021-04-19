import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import './App.css';
import Affixes from './components/Affixes';
import Dungeon from './components/Dungeon';
import Header from './components/Header';
import Items from './components/Items';
import Resources from './components/Resources';

// TO DO

// Theme switching
// See/load future affixes
// Dungeon descriptions / MDT Routes


let Home = ({ children }) => (
  <div>
    {children}
  </div>
)

let Dungeons = ({ children }) => (
  <div>
    {children}
 </div>
)


function App() {

  const [theme, setTheme] = useState('light');
  const [dungeon, setDungeon] = useState('dos');

  useEffect(() => {
    document.title = `The Great Vault`;
  });

  return (
    <>
      <Header
        theme={theme}
        setTheme={setTheme}
        setDungeon={setDungeon}
      />
      <Router>
        <Home path="/">
          <Affixes path='/'/>
        </Home>
        <Dungeons path="/dungeons">
          <Dungeon
            currentDungeon={dungeon}
            path='/'
          />
        </Dungeons>
        <Items path="/items" />
        <Resources path ="/resources" />
      </Router>
    </>
  );
}

export default App;
