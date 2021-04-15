import React, { useState } from 'react';
import addons from '../assets/sources/addons';

function Resources() {

  const addonCard = (cat) => cat.map((item, index) =>
    <div key={index} className='addon-card'>
      <a href={item.url}>{item.name}</a>
      <p className='addon-description'>{item.description}</p>
    </div>)

  const addonCards = addonCard(addons.filter((addon) => addon.type === 'addon'));
  const weakauraCards = addonCard(addons.filter((addon) => addon.type === 'weakaura'));

  // want to sort into categories (potions, belt tinkers)

  // const itemCard = (cat) => cat.map((item, index) =>
  //   <div key={index} className='resource-card'>
  //     <a href={item['wowhead-link']}>{item.itemName}</a>
  //     <div>{item.category}</div>
  //     <div className='item-description'>{item.description}</div>
  //     <div className='item-usage'>{item.usage}</div>
  //     {item.requirements.length !== 0 ? <div>Requires: {item.requirements}</div> : null}
  //     {item.backfire ? <div>Backfire!: {item.backfire}</div> : null}
  //   </div>
  // )

  // const beltTinkers = itemCard(engineering.filter((item) => item.category === 'Belt tinker')); // filtered object
  // const potions = itemCard(alchemy.filter((item) => item.category === 'Potion'));

  return (
    <div>
      <hr />
      <div id='addons'>
        Addons <br />
        ------
        {addonCards}
      </div>
      <div id='weakauras'>
        Weak Auras <br />
        ------
        {weakauraCards}
      </div>
    </div>
  )
}

export default Resources;
