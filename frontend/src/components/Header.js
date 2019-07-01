import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerRef = useRef();
  const links = [
    { path: '/', text: 'Home' },
    { path: '/posts', text: 'Posts' },
    { path: '/posts/create/', text: 'Create Post' },
  ];

  useEffect(() => {
    // const header = document.getElementById('header');
    const interval = setInterval(() => {
      headerRef.current.className = window.scrollY > 0 ? 'sticky-top shrunk' : 'sticky-top';
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <header ref={headerRef} id="header" className="sticky-top">
      <Link to="/" className="banner">
        Dan Quinn
      </Link>
      <nav className="navbar">
        <ul className="nav-links">
          {links.map(link => (
            <li className="nav-link" key={`nav-link-${link.text}`}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
