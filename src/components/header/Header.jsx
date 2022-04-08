import React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import './Header.scss';

const menus = [
  { name: 'Products' },
  { name: 'Solutions' },
  { name: 'Support' },
  { name: 'Sign in' }
]
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className='header'>
      <h1 className='logo_name'>CRAFT LANCE</h1>
      <div className="hamburger" onClick={handleClick}>
        <div className={classNames({ 'hamburger_menu menu1': menuOpen, 'hamburger_menu': !menuOpen })}></div>
        <div className={classNames({ 'hamburger_menu menu2': menuOpen, 'hamburger_menu': !menuOpen })}></div>
        <div className={classNames({ 'hamburger_menu menu3': menuOpen, 'hamburger_menu': !menuOpen })}></div>
      </div>
      <nav className='menu'>
        <ul className={classNames({ 'menu_inner_open': menuOpen, 'menu_inner_close': !menuOpen })}>
          {menus.map((menu, index) => (
            <li className='menu_item' key={index}><a href='/' className='menu_link'>{menu.name}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
