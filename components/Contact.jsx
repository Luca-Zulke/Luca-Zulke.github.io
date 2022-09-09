import React from 'react'
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div id='contact' className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.sectionContainer}>
          <div className={styles.section}>
            <div>CONTACT FORM</div>
            <hr/>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quas.</div>
          </div>
        </div>
      
        <div className={styles.formContainer}>
          <form id='contactForm'>
            <div className={styles.row}>
              <input placeholder='Name' className={styles.input} type="text" required />
              <input placeholder='Email' className={styles.input} type="email" required />
            </div>
            <div className={styles.row}>
              <textarea placeholder='Message' className={styles.input} required/>
              <button type='submit' className={styles.button}>SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact