import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';


const Navbar = () => {
  useEffect(() => {
    window.onscroll = function() {
      var scrollLimit = 205;
      if (window.scrollY >= scrollLimit) {
        isScrolled = true;
        setScroll();
      } else {
        isScrolled = false;
        setScroll();
      }
    };
  })
  
  const [isScrolled, setIsScrolled] = useState(false);
  const setScroll = () => setIsScrolled(isScrolled);
  
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className={isScrolled === false ? styles.container : styles.container + ' ' + styles.containerScrolled}>
      <div className={styles.item}>
        <Link href='#home'>
          <a className={styles.callButton}>De Lichtaartse Kwezel</a>
        </Link>
      </div>
      <div className={isOpen === false ? styles.list : styles.list + ' ' + styles.active}>
        <div className={styles.break}></div>
        <Link href='#about'>
          <a className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active} onClick={openMenu}>ABOUT</a>
        </Link>
        <Link href='#menu'>
          <a className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active} onClick={openMenu}>MENU</a>
        </Link>
        <Link href='#gallery'>
          <a className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active} onClick={openMenu}>GALLERY</a>
        </Link>
        <Link href='#contact'>
          <a className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active} onClick={openMenu}>CONTACT</a>
        </Link>
      </div>
      <button className={isOpen === false ? styles.hamburger : styles.hamburger + ' ' + styles.active} onClick={openMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </div>
  )
}

export default Navbar