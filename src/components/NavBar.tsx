import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useAuth } from '../services/api/AuthContext';
import './NavBar.scss';

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

function NavBar() {
  const { user } = useAuth();

  return (
    <nav className='nav'>
      <nav className='menu'>
        <ul className='menu-element'>
          <CustomLink to="/works">Works</CustomLink>
          <CustomLink to="/blog">Blog</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>

          {user ? (
            <Link to='/profile' className='account-avatar-mini'>
              <img src={user.avatar} alt="account avatar mini" />
            </Link>
          ) : (
            <CustomLink to="/login" className="login-link">Log In</CustomLink>
          )}

        </ul>
      </nav>
    </nav>
  );
}

function CustomLink({ to, children, className }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} className={className}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
