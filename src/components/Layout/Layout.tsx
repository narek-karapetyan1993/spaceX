import styles from "./layout.module.css";
import { Header } from "components/Header";
import { Main } from "components/Main";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
