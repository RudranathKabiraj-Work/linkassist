'use client';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navWrap}>
      <div className={`container ${styles.nav}`}>
        <a href="#" className={styles.brand}>
          <img
            src="/logo-icon.png"
            alt="LinkAssist"
            width={34}
            height={34}
            style={{ borderRadius: 8, marginRight: 8, display: 'inline-block', verticalAlign: 'middle' }}
          />
          Link Assist
        </a>

        <nav className={`${styles.navLinks} ${open ? styles.open : ''}`} id="navLinks">
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#how" onClick={() => setOpen(false)}>How it works</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        </nav>

        <div className={styles.navRight}>
          <a href="#" className={styles.signin}>Sign in</a>
          <a href="#pricing" className="btn btn-primary">Start free trial</a>
          <button
            className={styles.navToggle}
            id="navToggle"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
