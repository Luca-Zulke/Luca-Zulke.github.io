import Image from 'next/image';
import React, { useState } from 'react'
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
  const images = {
    cat1: ["/img/gallery1.jpg", "/img/gallery2.jpg", "/img/gallery3.jpg", "/img/gallery4.jpg"],
    cat2: ["/img/gallery5.jpg","/img/gallery1.jpg", "/img/gallery2.jpg", "/img/gallery3.jpg"],
    cat3: ["/img/gallery4.jpg", "/img/gallery5.jpg","/img/gallery1.jpg", "/img/gallery2.jpg"]
  }

  const [showCategory, setShowCategory] = useState("all");
  const setCategory = (showCategory) => setShowCategory(showCategory);

  const [isActive, setIsActive] = useState(0);
  const setActive = (isActive) => setIsActive(isActive);

  return (
    <div id='gallery' className={styles.container}>
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
        <div className={styles.gallery}>
          <div className={styles.galleryItems}>
            {
              Object.entries(images).map((key, i) => (
                  //+ " " + styles.hide
                  // console.log( " i: ", i, " key[1]: ", key[1])

                  key[1].map((img, index) => (
                    // console.log("showCategory: ", showCategory, " key[0]: ", key[0], "showCategory === key[0]:", showCategory === key[0]),
                    <div key={index} data-filter={key[0]} className={showCategory === key[0] || showCategory === "all" ? styles.item : styles.item + " " + styles.hide}>
                      <div className={styles.itemHoverBg}>
                        {/* <a href={img} alt=""> */}
                          <div className={styles.hoverText}>
                            {img.substring(img.lastIndexOf('/') + 1, img.indexOf('.')).split('_').join(' ')}
                          </div>
                          <Image className={styles.itemImg} src={img} layout="fixed" width={360} height={240} alt="" objectFit="cover"/>
                        {/* </a> */}
                      </div>
                    </div>
                  ))
              ))
            // Object.entries(images).forEach((entry) => {
            //   entry.forEach((item) => {
            //     console.log("item: ", item)
            //   })
            //   console.log("entry: ", entry)
            // })
          }
            {/* // images.all.map((img, i) => (
            //   //+ " " + styles.hide
            //   <div key={i} className={styles.item}>
            //     <div className={styles.itemHoverBg}>
            //       <a href={img} key={i} alt="">
            //         <div className={styles.hoverText}>
            //           {img.substring(img.lastIndexOf('/') + 1, img.indexOf('.')).split('_').join(' ')}
            //         </div>
            //         <Image className={styles.itemImg} src={img} key={i} layout="fixed" width={360} height={240} alt="" objectFit="cover"/>
            //       </a>
            //     </div>
            //   </div>
            // ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery