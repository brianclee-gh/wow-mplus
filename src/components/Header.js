import React, { useState, useRef } from 'react';
// import { render } from 'react-dom';
import { Router, Link } from "@reach/router";
import Menu from './helpers/Menu'
import Burger from './helpers/Burger'
import { useOnClickOutside } from './helpers/Hooks'

function Header({ setDungeon }) {

    const [openMenu, setOpenMenu] = useState(false);
    const [dungeonMenu, setDungeonMenu] = useState(false);

    const node = useRef();
    useOnClickOutside(node, () => setOpenMenu(false));

    const changeDungeon = (dungeon) => {
        setDungeon(dungeon);
        setDungeonMenu(false);
    };

    const showMobileMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div id='header' ref={node}>
                <nav
                    id="mobile-menu"
                    style={ openMenu ?
                        { transform: 'translateX(0)' } :
                        { transform: 'translateX(-100%)'}
                    }
                >
                    <Menu
                        openMenu={openMenu}
                        // setOpenMenu={setOpenMenu}
                        setDungeonMenu={setDungeonMenu}
                        setDungeon={setDungeon}
                    />
                </nav>
                <Burger
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                />
                <nav id='nav'>
                    <Menu
                        dungeonMenu={dungeonMenu}
                        setDungeonMenu={setDungeonMenu}
                    />
                </nav>
                <div>THE <span>GREAT</span> VAULT</div>

            </div>
            { dungeonMenu &&
            <Link to='/dungeons'>
                <div className='dungeon-menu' className='dungeon-menu'>
                    <div onClick={() => changeDungeon('dos')}>De Other Side</div>
                    <div onClick={() => changeDungeon('hoa')}>Halls of Atonement</div>
                    <div onClick={() => changeDungeon('mots')}>Mists of Tirna Scithe</div>
                    <div onClick={() => changeDungeon('pf')}>Plaguefall</div>
                    <div onClick={() => changeDungeon('sd')}>Sanguine Depths</div>
                    <div onClick={() => changeDungeon('soa')}>Spires of Ascension</div>
                    <div onClick={() => changeDungeon('top')}>Theater of Pain</div>
                    <div onClick={() => changeDungeon('tnw')}>The Necrotic Wake</div>
                </div>
            </Link>
            }
        </>
    )
}

export default Header
