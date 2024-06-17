import React from 'react';
import { pageLinks, socialLinks } from '../data';
const Navbar = () => {
  <ul className='nav-links' id='nav-links'>
    {pageLinks.map((link) => {
      return (
        <li key={link.id}>
          <a href={link.href} className='nav-link'>
            {link.text}
          </a>
        </li>
      );
    })}
  </ul>;
  <ul className='nav-icons'>
    {socialLinks.map((link) => {
      return (
        <li key={link.id}>
          <a href={link.href} className='nav-link'>
            {link.text}
          </a>
        </li>
      );
    })}
  </ul>;
};

export default Navbar;
