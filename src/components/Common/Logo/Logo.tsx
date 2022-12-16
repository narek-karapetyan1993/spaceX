import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./logo.module.css";
import logo from "assets/images/logo.png";

export function Logo() {
  return (
    <div className={styles.wrapper}>
      <NavLink className={styles.logo} to="/">
        <img src={logo} alt="logo" />
      </NavLink>
    </div>
  );
}
