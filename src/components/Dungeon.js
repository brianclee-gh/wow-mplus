import dungeon_directory from '../assets/dungeons/dungeon_directory';
import React from 'react';
import Button from '@material-ui/core/Button';

function Dungeon({ currentDungeon }) {

    const dungeon = dungeon_directory[currentDungeon];

    const lustTiming = dungeon.lust_timing.map((ele, i) =>
        <li key={i}>{i + 1}. {ele}</li>
    )

    const showMDT = () => {
        let mdtFrame = document.getElementById('mdt-frame');
        mdtFrame.classList.toggle('hidden');
    }

    return (
        <>
            {dungeon &&
                <div id='dungeon-display'>
                    {/* dungeon info */}
                    <div id='dungeon-info'>
                        <h2>{dungeon.title}</h2>
                        <p>{dungeon.description}</p>
                        <div id='lust-timing'>
                            <h3>Lust Timing</h3>
                            <ul>{lustTiming}</ul>
                        </div>
                        <div id='dungeon-timer'>
                            <h3>Timer: </h3>
                            <p>{dungeon.timer} minutes</p>
                        </div>
                        <div id='covenant-bonus'>
                            <h3>Covenant Bonus: {dungeon.covenant}</h3>
                            <p>{dungeon.covenant_ability}</p>
                        </div>
                    </div>
                    {/* mdt */}
                    <div id='mdt'>
                        <h3>MDT Route</h3>
                        {/* <button onClick={showMDT}>Click to show route</button> */}
                        <Button onClick={showMDT}>Click to show route</Button>
                        <iframe title='mdt' id='mdt-frame' className='route hidden' src={dungeon.mdt} style={dungeon.mdtstyle}></iframe>
                    </div>

                </div>

            }
        </>
        // </div>
    )
}

export default Dungeon;
