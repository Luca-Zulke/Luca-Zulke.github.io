import React from 'react'
import styles from '../styles/Menu.module.css';

const Menu = () => {
  return (
  <div id='menu' className={styles.container}>
    <div className={styles.downloadContainer}>
      <div className={styles.overlay}>
        <div className={styles.overlayItem}>MENU</div>
        <hr/>
        <div className={styles.overlayItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, commodi.</div>
        <button className={styles.overlayItem} type='button'>Download menu</button>
      </div>
    </div>
    <div className={styles.menuContainer}>
      <div>
        <div className={styles.menuRow}>
          <div className={styles.menuSection}>
            <div className={styles.menuSectionTitle}>COFFEE & DRINKS</div>
            <hr/>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€50</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€45</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€30</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€30</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
          </div>
        </div>
        <div className={styles.menuRow}>
          <div className={styles.menuSection}>
            <div className={styles.menuSectionTitle}>LIQOURS</div>
            <hr/>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€50</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€45</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€30</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
            <div className={styles.menuItem}>
              <div>Delicious Dish</div>
              <div>€30</div>
              <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.menuRow}>
          <div className={styles.menuSection}>
            <div className={styles.menuSectionTitle}>COCKTAILS</div>
              <hr/>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€50</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€45</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€30</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€30</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
          </div>
        </div>
        <div className={styles.menuRow}>
          <div className={styles.menuSection}>
            <div className={styles.menuSectionTitle}>MEALS</div>
              <hr/>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€50</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€45</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€30</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
              <div className={styles.menuItem}>
                <div>Delicious Dish</div>
                <div>€30</div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi sequi doloremque maiores minima unde consectetur.</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Menu