import React from 'react';
import styles from '../styles/Landing.module.css';
import ScrollIntoView from './ScrollIntoView';

const Landing = () => {
  return (
    <>
      <div id="home" className={styles.bgImage}>
        <div className={styles.centerContainer}>
          <div className={styles.logo}>De Lichtaartse Kwezel</div>
          <div className={styles.description}>Bistro / Coffee / Bar</div>
          <button className={styles.button} onClick={() => ScrollIntoView('about')}>
            DISCOVER STORY
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
