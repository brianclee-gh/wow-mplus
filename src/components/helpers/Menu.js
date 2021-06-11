import React, { useState } from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router';

function Menu({ dungeonMenu, setDungeonMenu }) {

    const toggleDungeons = () => {
        setDungeonMenu(!dungeonMenu);
    }


    return (
      <>
          <Link to="/">HOME</Link> {""}
              <a
                className='dropdown-dungeon'
                onClick={ () => toggleDungeons() }
            >
                  DUNGEONS

              </a>
          {" "}
          <Link to="/items">USEFUL ITEMS</Link> {" "}
          <Link to="/resources">RESOURCES</Link> {" "}
      </>
    )
}

export default Menu
