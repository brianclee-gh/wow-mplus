import dungeon_directory from '../assets/dungeons/dungeon_directory';
import React from 'react';
import Button from '@material-ui/core/Button';

function Dungeon({ currentDungeon }) {

    const dungeon = dungeon_directory[currentDungeon];

    const lustTiming = dungeon.lust_timing.map((ele, i) =>
        <li key={i}> {i + 1}. {ele}</li>
    )

    const showMDT = () => {
        let mdtFrame = document.getElementById('mdt-frame');
        mdtFrame.classList.toggle('hidden');
    }

    const wallpaperUrl = `../../../public/images/dungeons/`
        + dungeon.title.split(' ').join('_').toLowerCase()
        + '.png';
        // 2560 x 750

    return (
        <>
            {dungeon &&
                <div id='dungeon-display'>
                    {/* dungeon info */}
                    <div className='wallpaper-container'>
                        {/* <img id='dungeon-wallpaper' src={dungeon.wallpaper} alt='dungeon wallpaper' /> */}
                        <img className='dungeon-wallpaper' src={wallpaperUrl} alt='dungeon wallpaper' />
                        <div className='dungeon-title'>
                            <h1>{dungeon.title.toUpperCase()}</h1>
                            <h4>{dungeon.location.toUpperCase()}</h4>
                        </div>
                    </div>
                    <div className='dungeon-info first'>
                        <h1>General Info</h1>

                        <div className='dungeon-timer'>
                            <p>Timer: <span>{dungeon.timer} minutes</span></p>

                        </div>
                        <div className='covenant-bonus'>
                            <h3>Covenant Bonus: {dungeon.covenant}</h3>
                            <p>{dungeon.covenant_ability}</p>
                        </div>
                        <div className='lust-timing'>
                            <h3>Recommended Lust Timing</h3>
                            <ul>{lustTiming}</ul>
                        </div>
                    </div>
                    {/* mdt */}
                    <div className='routing second'>
                        General routing tips
                        <div className='mdt'>
                            <h3>MDT Route</h3>
                            <button onClick={showMDT}>Click to show route</button>
                            <iframe title='mdt' id='mdt-frame' className='route hidden' src={dungeon.mdt} style={dungeon.mdtstyle}></iframe>
                        </div>
                    </div>


                </div>

            }
        </>
        // </div>
    )
}

export default Dungeon;
