import React from "react";
import { Heading } from "./Heading";
import styles from "./home.module.css";
import { Info } from "./Info";
import { StartBtn } from "./StartBtn";

export function Home() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <Heading />
          </div>

          <div className={styles.info}>
            <Info />
          </div>

          <div className={styles.start}>
            <StartBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
