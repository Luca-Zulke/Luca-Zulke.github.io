import React from 'react'
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.map}>
          MAP
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.map}>
          FORM
        </div>
      </div>
      <div className={styles.container + ' ' + styles.contactContainer}>
        <div className={styles.row}>
          <div>ADDRESS</div>
          <div>
            Kasterleesteenweg 15,
            <br></br>
            2460 Kasterlee
            </div>
        </div>
        <div className={styles.row}>
          <div>OPENING HOURS</div>
          <div>Monday: 09:00 AM - 11:00 PM</div>
          <div>Tuesday: 09:00 AM - 11:00 PM</div>
          <div>Wednesday: 09:00 AM - 10:00 PM</div>
          <div>Thursday: Closed</div>
          <div>Friday: 11:00 AM - 01:00 AM</div>
          <div>Saturday: 09:00 AM - 01:00 AM</div>
          <div>Sunday: 09:00 AM - 11:00 PM</div>
        </div>
        <div className={styles.row}>
        <div>CONTACT INFO</div>
          <div>Phone: +32 498 28 99 23</div>
          <div>Email: temporary@temp.com</div>
        </div>
      </div>
      <div className={styles.container}>
        SOCIAL MEDIA & COPYRIGHT
      </div>
    </div>
  )
}

export default Footer