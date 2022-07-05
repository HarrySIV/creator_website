import React from 'react';

import styles from './MainNavigation.module.css';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';

const MainNavigation = (props) => {
  return (
    <>
      <MainHeader>
        <button className={styles.mainnavigation__menubtn}>
          <span />
          <span />
          <span />
        </button>
        <nav className={styles.mainnavigation__headernav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
