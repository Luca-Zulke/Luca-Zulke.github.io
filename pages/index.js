import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Landing from '../components/Landing';
import Menu from '../components/Menu';
import Staff from '../components/Staff';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>De Lichtaartse Kwezel</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <About />
      <Menu />
      <Gallery />
      <Staff />
      <Contact />
    </div>
  );
}
