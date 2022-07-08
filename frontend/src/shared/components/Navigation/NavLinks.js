import React, { useContext } from 'react';
import styles from './NavLinks.module.css';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';

const NavLinks = (props) => {
  const auth = useContext(AuthContext);
  return (
    <ul className={styles.navlinks}>
      <li>
        <NavLink to="/">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/works">Works</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      {auth.isLoggedIn && <button onClick={auth.logout}>LOGOUT</button>}
    </ul>
  );
};

export default NavLinks;
