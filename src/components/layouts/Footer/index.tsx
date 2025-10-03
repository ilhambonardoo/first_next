import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h2 className={styles.logo}>MyBrand</h2>
          <p>
            Platform digital inovatif yang memberikan solusi terbaik untuk
            kebutuhan bisnis Anda di era modern.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Navigasi</h4>
          <ul>
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Layanan</a>
            </li>
            <li>
              <a href="#">Kontak</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Ikuti Kami</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} MyBrand. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
