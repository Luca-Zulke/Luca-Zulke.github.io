import Image from 'next/image'
import React from 'react'
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div id='about' className={styles.container}>
      
      <div className={styles.imageContainer}>
        {/* <div className={styles.image} /> */}
        <Image className={styles.image} src='/img/gallery3.jpg' alt='' layout='intrinsic' width={1400} height={900} objectFit='cover'/>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.aboutItem}>OUR BISTRO</div>
        <hr/>
        <div className={styles.aboutItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</div>
        <div className={styles.aboutItem}>Lorem ipsum
        </div>
        <div className={styles.aboutItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.
        </div>
      </div>

    </div>
  )
}

export default About