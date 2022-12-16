import React from "react";
import styles from "./nomatch.module.css";

export function NoMatch() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
        <span>По вашему запросу ничего не нашлось</span>
      </div>
    </div>
  );
}
