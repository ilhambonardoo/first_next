import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} MyFirstNext | Est. 2025 | All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
