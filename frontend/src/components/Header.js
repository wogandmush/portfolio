import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Route from '../models/Route';

const Header = ({routes}) => {
  const headerRef = useRef();

  useEffect(() => {
    let interval;
    const scrollListener = () => {
      headerRef.current.className = 'sticky-top shrunk';
      window.removeEventListener('scroll', scrollListener);
      interval = setInterval(() => {
        if (window.scrollY === 0) {
          window.addEventListener('scroll', scrollListener);
          clearInterval(interval);
        }
      }, 100);
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <header ref={headerRef} id="header" className="sticky-top">
      <Link to="/" className="banner">
        Dan Quinn
      </Link>
      <nav className="navbar">
        <ul className="nav-links">
          {routes.map(route => (
            <li className="nav-link" key={`nav-link-${route.name}`}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  route: Route,
}


export default Header;
