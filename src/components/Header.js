import React, { useState } from 'react';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Button from '@material-ui/core/Button';

function Header({ theme, setTheme, setDungeon }) {

    const [showMenu, setShowMenu] = useState(false);

    const changeDungeon = (dungeon) => {
        setDungeon(dungeon);
        toggleMenu();
    }

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else setTheme('light');
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <div id='header'>
            <Button onClick={() => toggleTheme()}>
                {theme === 'light' ?
                    'Dark theme' : 'Light theme'
                }
            </Button>
            <h1>The Great Vault</h1>
            <nav id='nav'>
                <Link to="/" onClick={() => closeMenu()}>Home</Link> |{" "}
                {/* <Link to="dungeons"> */}

                    <div id='dropdown-dungeon'>
                    <button id='dropdown-btn' onClick={() => setShowMenu(!showMenu)}>Dungeons</button>
                        {
                            showMenu ? (
                            <Link to="/dungeons">
                                <div id='dungeon-menu' className='dungeon-menu'>
                                    <button onClick={() => changeDungeon('dos')}>De Other Side</button>
                                    <button onClick={() => changeDungeon('hoa')}>Halls of Atonement</button>
                                    <button onClick={() => changeDungeon('mots')}>Mists of Tirna Scithe</button>
                                    <button onClick={() => changeDungeon('pf')}>Plaguefall</button>
                                    <button onClick={() => changeDungeon('sd')}>Sanguine Depths</button>
                                    <button onClick={() => changeDungeon('soa')}>Spires of Ascension</button>
                                    <button onClick={() => changeDungeon('top')}>Theater of Pain</button>
                                    <button onClick={() => changeDungeon('tnw')}>The Necrotic Wake</button>
                                </div>
                            </Link>
                            ) : (
                                null
                            )
                        }
                    </div>
                |{" "}
                <Link to="items" onClick={() => closeMenu()}>Useful Items</Link> |{" "}
                <Link to="resources" onClick={() => closeMenu()}>Resources</Link>
            </nav>

        </div>
    )
}

export default Header
