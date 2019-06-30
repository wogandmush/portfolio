import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const links = [
    { path: '/', text: 'Home' },
    { path: '/posts', text: 'Posts' },
    { path: '/posts/create/', text: 'Create Post' },
  ];
  return (
    <header className="sticky-bottom">
      <nav>
        <ul>
          {links.map(link => (
            <li key={`nav-link-${link.text}`}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
