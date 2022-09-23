import React from 'react';
import styles from '../styles/Contact.module.css';
import emailjs from '@emailjs/browser';
import { SpinnerDotted } from 'spinners-react';

const Contact = () => {
  const initEmail = () => {
    emailjs.init('FZGploWjWBwX6_Zdq');
  };
  initEmail();

  const sendEmail = (e) => {
    e.preventDefault();
    document.getElementById('spinner').style.visibility = 'visible';
    emailjs
      .send('service_usffd3c', 'template_o7tm7vh', {
        from_name: document.getElementById('userName').value,
        to_name: 'Luca',
        message: document.getElementById('userMessage').value,
        email: document.getElementById('userEmail').value,
      })
      .then((res) => {
        document.getElementById('userName').value = '';
        document.getElementById('userMessage').value = '';
        document.getElementById('userEmail').value = '';
        document.getElementById('spinner').style.visibility = 'hidden';
        alert('Your message was sent successfully');
      })
      .catch((err) => console.error('Failed to send email: ', err));
  };

  return (
    <div id="contact" data-target="contact" className={styles.contact}>
      <div id="spinner" className={styles.overlay}>
        <SpinnerDotted className={styles.spinner} size={70} thickness={100} speed={120} color="#444444" />
      </div>
      <div className={styles.container}>
        <div className={styles.sectionContainer}>
          <div className={styles.section}>
            <div>CONTACT FORM</div>
            <hr />
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quas.</div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <form
            id="contactForm"
            onSubmit={(e) => {
              sendEmail(e);
            }}
          >
            <div className={styles.row}>
              <input
                id="userName"
                placeholder="Name"
                pattern="^[A-Za-z\u00C0-\u00FF]+(?:[\\s.' -]{0,1}[A-Za-z\u00C0-\u00FF]+){0,4}$"
                minLength={2}
                className={styles.input}
                type="text"
                required
              />
              <input
                id="userEmail"
                placeholder="Email"
                pattern="^[a-zA-Z0-9]+([_.+-]{0,1}[a-zA-Z0-9]+){0,4}@{1}[a-zA-Z0-9-]+.{1}[a-zA-Z0-9-]{2,}$"
                className={styles.input}
                type="email"
                required
              />
            </div>
            <div className={styles.row}>
              <textarea id="userMessage" placeholder="Message" minLength={10} maxLength={300} className={styles.input} required />
              <button type="submit" className={styles.button}>
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
