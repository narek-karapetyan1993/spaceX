import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";
import classNames from "classnames";
import { useWindowWidth } from "hooks/useWindowWidth";

export function Nav() {
  const [navHidden, setNavHidden] = useState(false);
  const ref = useRef<HTMLUListElement>(null);

  const { width } = useWindowWidth();

  useEffect(() => {
    if (width < 1200) {
      setNavHidden(true);
    } else {
      setNavHidden(false);
    }
  }, [width]);

  useEffect(() => {
    function navHiddenClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target) &&
        width < 1200 &&
        !navHidden
      ) {
        setNavHidden(true);
      }
    }
    document.addEventListener("click", navHiddenClick);
    return () => {
      document.removeEventListener("click", navHiddenClick);
    };
  }, [navHidden, width]);

  function handleClick() {
    if (width < 1200) {
      setNavHidden(true);
    }
  }

  const burgerClasses = classNames(styles.burger, {
    [styles.burgerHidden]: !navHidden,
  });

  const closeClasses = classNames(styles.closeBtn, {
    [styles.closeBtnShow]: !navHidden,
  });

  const listClasses = classNames(styles.list, {
    [styles.listHidden]: navHidden,
  });

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={closeClasses}>
          <button
            onClick={() => {
              setNavHidden(!navHidden);
            }}
          ></button>
        </div>

        <ul className={listClasses} ref={ref}>
          <li className={styles.item}>
            <NavLink
              to="/"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.navLink}`
              }
            >
              Главная
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink
              to="technology"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.navLink}`
              }
            >
              Технология
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink
              to="flight_schedule"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.navLink}`
              }
            >
              График полетов
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink
              to="guarantees"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.navLink}`
              }
            >
              Гарантии
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink
              to="about"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.navLink}`
              }
            >
              О компании
            </NavLink>
          </li>

          <li className={styles.item}>
            <NavLink
              to="contacts"
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? `${styles.activeLink}` : `${styles.navLink}`
              }
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={burgerClasses}>
        <button
          className={styles.burgerBtn}
          onClick={() => {
            setNavHidden(!navHidden);
          }}
        >
          <span className={styles.burgerLine}></span>
        </button>
      </div>
    </div>
  );
}
