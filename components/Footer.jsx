import Link from 'next/link';
import React from 'react'
import styles from '../styles/Footer.module.css';
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.mapContainer}>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.6089784659894!2d4.924031951781405!3d51.22627853893864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c14d2094691549%3A0xbea107ad01f5f556!2sKasterleesteenweg%2015%2C%202460%20Kasterlee!5e0!3m2!1sen!2sbe!4v1662748292253!5m2!1sen!2sbe"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
      <div className={styles.media}>
        <div className={styles.mediaIcons}>
          <ul>
            <li><a href='https://www.facebook.com/bistrolichtaartsekwezel' rel='noreferrer' target='_blank'><FaFacebookF/></a></li>
            <li><a href='https://www.instagram.com/de_lichtaartse_kwezel' rel='noreferrer' target='_blank'><FaInstagram/></a></li>
          </ul>
        </div>
        <div className={styles.copyright}>
          &copy; 2022 De Lichtaartse Kwezel. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer