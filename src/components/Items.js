import React, { useState } from 'react';
import engineering from '../assets/useful_items/engineering';
import alchemy from '../assets/useful_items/alchemy';

function Items() {

    // want to sort into categories (pre-key buffs, during-key consumables?)

    const itemCard = (cat) => cat.map((item, index) =>
        <div key={index} className='resource-card'>
            <a href={item['wowhead-link']}>{item.itemName}</a>
            <div>{item.category}</div>
            <div className='item-description'>{item.description}</div>
            <div className='item-usage'>{item.usage}</div>
            { item.requirements.length !== 0 ? <div>Requires: {item.requirements}</div> : null }
            { item.backfire ? <div>Backfire!: {item.backfire}</div> : null}
        </div>
    )

    const beltTinkers = itemCard(engineering.filter((item) => item.category === 'Belt tinker')); // filtered object
    const potions = itemCard(alchemy.filter((item) => item.category === 'Potion'));

    return (
        <div>
            <hr />
            <div id='engineering-items'>
                <div id='belt-tinker'>
                    Belt Tinkers
                    {beltTinkers}
                </div>
            </div>
            <div id='consumables'>
                Alchemy
                <div id='potions'>
                    {potions}
                </div>
            </div>
        </div>
    )
}

export default Items;
