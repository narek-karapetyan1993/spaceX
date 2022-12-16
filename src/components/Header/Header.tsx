import React from "react";
import styles from "./header.module.css";

import { Nav } from "./Nav";
import { Logo } from "components/Common/Logo";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={styles.nav}>
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
}
