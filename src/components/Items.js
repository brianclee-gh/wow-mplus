import React, { useState } from 'react';
import engineering from '../assets/useful_items/engineering';
import alchemy from '../assets/useful_items/alchemy';

function Items() {

    // want to sort into categories (pre-key buffs, during-key consumables?)

    const itemCard = (cat) => cat.map((item, index) =>
        <div key={index} className='card'>
            <a href={item['wowhead-link']}>{item.itemName}</a>
            {/* <p>{item.category}</p> */}
            <p className='item-description'>{item.description}</p>
            <p className='item-usage'>{item.usage}</p>
            { item.requirements.length !== 0 ? <p id='requirements'>Requires: {item.requirements}</p> : null }
            { item.backfire ? <p>Backfire!: {item.backfire}</p> : null}
        </div>
    )

    const beltTinkers = itemCard(engineering.filter((item) => item.category === 'Belt tinker')); // filtered object
    const potions = itemCard(alchemy.filter((item) => item.category === 'Potion'));

    return (
        <div className='section'>
            <div className='section-header'>
                <h1>Items and Consumables</h1>
                {/* <p>Impt</p> */}
            </div>

            <div id='engineering-items' className='resources first'>
                <h2>Engineering</h2>
                    {beltTinkers}
            </div>
            <div id='consumables' className='resources second'>
                <h2>Alchemy</h2>
                <div id='potions'>
                    {potions}
                </div>
            </div>
        </div>
    )
}

export default Items;
