import React from 'react'
import styles from '../styles/Landing.module.css';

const Landing = () => {
  return (
    <>
      <div id='home' className={styles.bgImage}>
        {/* <Image src="/img/gallery1.jpg" alt="" layout="fill" width="1440" height='981' objectFit='cover' objectPosition='top' quality='100'/> */}
         {/* Center */} 
         <div className={styles.centerContainer}>
          <div className={styles.logo}>De Lichtaarste Kwezel</div>
          <div className={styles.description}>Bistro / Coffee / Bar</div>
          <button className={styles.button}>DISCOVER STORY</button>
        </div>
      </div>
    </>
  )
}

export default Landing