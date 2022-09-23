import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import ScrollIntoView from './ScrollIntoView';

const Navbar = () => {
  useEffect(() => {
    window.onscroll = function () {
      var scrollLimit = 181;
      if (window.scrollY >= scrollLimit) {
        isScrolled = true;
        setScroll();
      } else {
        isScrolled = false;
        setScroll();
      }

      const sections = document.querySelectorAll('[data-target]');
      const navLinks = document.querySelectorAll('[data-link]');
      var current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((item) => {
        item.style = null;
        if (item.getAttribute('data-link') === current) {
          item.style.color = '#c7b077';
        }
      });
    };
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const setScroll = () => setIsScrolled(isScrolled);

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <div className={isScrolled === false ? styles.container : styles.container + ' ' + styles.containerScrolled}>
      <div className={styles.item}>
        <Link href="">
          <a className={styles.callButton}>De Lichtaartse Kwezel</a>
        </Link>
      </div>
      <div className={isOpen === false ? styles.list : styles.list + ' ' + styles.active}>
        <div className={styles.break}></div>
        <button
          data-link="menu"
          className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active}
          onClick={() => {
            openMenu();
            ScrollIntoView('menu');
          }}
        >
          MENU
        </button>
        <button
          data-link="gallery"
          className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active}
          onClick={() => {
            openMenu();
            ScrollIntoView('gallery');
          }}
        >
          GALLERY
        </button>
        <button
          data-link="team"
          className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active}
          onClick={() => {
            openMenu();
            ScrollIntoView('team');
          }}
        >
          TEAM
        </button>
        <button
          data-link="contact"
          className={isOpen === false ? styles.listItem : styles.listItem + ' ' + styles.active}
          onClick={() => {
            openMenu();
            ScrollIntoView('contact');
          }}
        >
          CONTACT
        </button>
      </div>
      <button className={isOpen === false ? styles.hamburger : styles.hamburger + ' ' + styles.active} onClick={openMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </div>
  );
};

export default Navbar;
