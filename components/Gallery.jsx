import Image from 'next/image';
import React, { useState } from 'react'
import styles from '../styles/Gallery.module.css'
import * as basicLightbox from 'basiclightbox'
import "basiclightbox/dist/basicLightbox.min.css"

const Gallery = () => {
  const images = {
    cat2: ["/img/gallery4.jpg", "/img/gallery5.jpg","/img/gallery1.jpg", "/img/gallery2.jpg"],
    cat1: ["/img/gallery1.jpg", "/img/gallery2.jpg", "/img/gallery3.jpg", "/img/gallery4.jpg"],
    cat3: ["/img/gallery5.jpg","/img/gallery1.jpg", "/img/gallery2.jpg", "/img/gallery3.jpg"],
  }

  const [showCategory, setShowCategory] = useState("all");
  const setCategory = (showCategory) => setShowCategory(showCategory);

  const [isActive, setIsActive] = useState(0);
  const setActive = (isActive) => setIsActive(isActive);  

  return (
    <div id='gallery'>
      <div className={styles.bannerContainer}>
        <div className={styles.overlay}>
          <div className={styles.overlayItem}>GALLERY</div>
          <hr/>
          <div className={styles.overlayItem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, commodi.</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.categoryContainer}>
          <div className={styles.categories}>
            <ul id='list'>
              <li><button type='button' onClick={() => {setActive(0); setCategory("all")}} href="#gallery" className={isActive === 0 ? styles.active : ""}>All</button></li>
              <li><button type='button' onClick={() => {setActive(1); setCategory("cat1")}} href="#gallery" className={isActive === 1 ? styles.active : ""}>Category 1</button></li>
              <li><button type='button' onClick={() => {setActive(2); setCategory("cat2")}} href="#gallery" className={isActive === 2 ? styles.active : ""}>Category 2</button></li>
              <li><button type='button' onClick={() => {setActive(3); setCategory("cat3")}} href="#gallery" className={isActive === 3 ? styles.active : ""}>Category 3</button></li>
            </ul>
          </div>
        </div>

        <div className={styles.galleryContainer}>
            <div className={styles.galleryItems}>
              {
                Object.entries(images).map((key, i) => (
                  key[1].map((img, index) => (
                    <div onClick={() => {basicLightbox.create(`
                    <img width="1400" height="900" src="${img}">
                  `).show();}} key={index} data-filter={key[0]} className={showCategory === key[0] || showCategory === "all" ? styles.item : styles.item + " " + styles.hide}>
                      <div id='my-gallery' className={styles.itemHoverBg}>
                        <div className={styles.hoverText}>
                          {img.substring(img.lastIndexOf('/') + 1, img.indexOf('.')).split('_').join(' ')}
                        </div>
                        <Image className={styles.itemImg} src={img} layout="fill" alt="" objectFit="cover"/>
                      </div>
                    </div>
                  ))
                )
              )
            }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery