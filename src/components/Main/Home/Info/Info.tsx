import React from "react";
import styles from "./info.module.css";

export function Info() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <p className={styles.text}>
          мы <strong>1</strong> на рынке
        </p>
      </li>

      <li className={styles.item}>
        <p className={styles.text}>
          гарантируем <strong>50%</strong> безопасность
        </p>
      </li>

      <li className={styles.item}>
        <p className={styles.text}>
          календарик за
          <strong>
            2001<small>г.</small>
          </strong>
          в подарок
        </p>
      </li>

      <li className={styles.item}>
        <p className={styles.text}>
          путешествие <strong>597</strong> дней
        </p>
      </li>
    </ul>
  );
}
