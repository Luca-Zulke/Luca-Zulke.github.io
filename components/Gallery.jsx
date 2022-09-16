import Image from 'next/image';
import React from 'react'
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const images = [
    "/img/gallery1.jpg",
    "/img/gallery2.jpg",
    "/img/gallery3.jpg",
    "/img/gallery4.jpg",
    "/img/gallery5.jpg",
    "/img/gallery1.jpg",
    "/img/gallery2.jpg",
    "/img/gallery3.jpg",
    "/img/gallery4.jpg",
    "/img/gallery5.jpg",
    "/img/gallery1.jpg",
    "/img/gallery2.jpg",
  ]

  return (
    <div className={styles.container}>
      <div className={styles.categoryContainer}>
        <div className={styles.categories}>
          <ul>
            <li><a href="#" data-filter="*" className={styles.active}>All</a></li>
            <li><a href="#" data-filter="cat1">Category</a></li>
            <li><a href="#" data-filter="cat2">Category</a></li>
            <li><a href="#" data-filter="cat3">Category</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.galleryContainer}>
        <div className={styles.gallery}>
          <div className={styles.galleryItems}>
            {images.map((img, i) => (
              <div key={i} className={styles.item}>
                <div className={styles.itemHoverBg}>
                  <a href={img} key={i} alt="">
                    <div className={styles.hoverText}>
                      {img.substring(img.lastIndexOf('/') + 1, img.indexOf('.')).split('_').join(' ')}
                    </div>
                    <Image className={styles.itemImg} src={img} key={i} layout="fixed" width={360} height={240} alt="" objectFit="cover"/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery