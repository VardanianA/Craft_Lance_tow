import React, { useState } from 'react';

import classNames from 'classnames';

import './Header.scss';

const MENU_ITEMS = [
  { id: '1', url: 'products', menuName: 'Products' },
  { id: '2', url: 'solutions', menuName: 'Solutions' },
  { id: '3', url: 'support', menuName: 'Support' },
  { id: '4', url: 'signin', menuName: 'Sign in' }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(currentState => !currentState);
  }

  return (
    <header className='header'>
      <div className="header__inner">
        <h1 className='header__logo-name'>CRAFT LANCE</h1>
        <nav className='header__menu'>
          <div className='header__menu-toggle'>
            <div className="hamburger" onClick={handleClick}>
              <div className={classNames({ 'hamburger__menu line1': menuOpen, 'hamburger__menu': !menuOpen })}></div>
              <div className={classNames({ 'hamburger__menu line2': menuOpen, 'hamburger__menu': !menuOpen })}></div>
              <div className={classNames({ 'hamburger__menu line3': menuOpen, 'hamburger__menu': !menuOpen })}></div>
            </div>
            <ul className={classNames({ 'header__menu-open': menuOpen, 'header__menu-close': !menuOpen })}>
              {MENU_ITEMS.map(item => (
                <li className='header__menu-item' key={item.id}><a href={`/${item.url}`} className='header__menu-link'>{item.menuName}</a></li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;
