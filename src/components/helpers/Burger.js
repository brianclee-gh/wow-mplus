import React from 'react';

const Burger = ({ openMenu, setOpenMenu}) => {
  return (
    <div
      onClick={ () => setOpenMenu(!openMenu) }
      className='burger'
      style={ openMenu ?
        {background: '#EFFFFA'} :
        {background: 'transparent'}
      }
    >
      <div
        style={ openMenu ?
          {
            transform: 'rotate(45deg)',
            background: '#000'
          } :
          {transform: 'rotate(0)'}
        }
      />
      <div
        style={ openMenu ?
          { opacity: 0 } :
          { opacity: 1 }
        }
      />
      <div
        style={ openMenu ?
          { transform: 'rotate(-45deg)',
            background: '#000'
          } :
          {transform: 'rotate(0)'}
        }
      />
    </div>
  )
}

export default Burger;