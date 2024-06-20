import { pageLinks, socialLinks } from '../data';
import { useState } from 'react';

const Navbar = () => {
  const [showLink, setShowLink] = useState(false);
  const toggleLink = () => {
    showLink ? setShowLink(false) : setShowLink(true);
  };

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='/images/logo.svg' className='nav-logo' alt='backroads' />
          <button type='button' onClick={toggleLink} className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <ul className={`${showLink ? 'nav-links show-links' : 'nav-links'}`} id='nav-links'>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className='nav-link'>
                  <i className={link.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
