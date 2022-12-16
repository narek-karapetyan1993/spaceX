import styles from "./main.module.css";
import { Outlet } from "react-router-dom";

export function Main() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}
