import React from 'react'

const Header = () => {
  return (
    <header className='header'>
        <div className='header__rectangle-red'>
        <img className='header__img' src="/images/image12.png" alt="pokedex" />
        </div>
        <div className='header__rectangle-black'>
          <div className='header__circle-big'>
            <div className='header__circle-small'></div>
          </div>
        </div>
      </header>
  )
}

export default Header