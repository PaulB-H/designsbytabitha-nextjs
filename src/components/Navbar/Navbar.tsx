import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import clsx from "clsx";

import NavLink from "./NavLink/NavLink";

export default function Navbar() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeIfMobile = windowSize.width <= 640 ? toggleNavbar : undefined;

  const navLinkArr: [string, string][] = [
    ["/", "Home"],
    ["/artwork", "Artwork"],
    ["/cakes", "Baking"],
    ["/about", "About"],
  ];

  return (
    <nav className={styles.navBar}>
      <img className={styles.floralRing} src="/floral.png" alt="" />

      {windowSize.width <= 640 && (
        <img
          onClick={toggleNavbar}
          className={styles.navMenuToggle}
          src={isOpen ? "/close-large-line.svg" : "/menu-line.svg"}
          alt=""
        />
      )}

      <ul
        className={clsx(styles.navMenu, {
          [styles.noHeight]: !isOpen && windowSize.width <= 640,
          [styles.fixedHeight]: isOpen && windowSize.width <= 640,
        })}
      >
        {navLinkArr.map(([href, text], idx) => {
          return (
            <NavLink
              key={idx}
              href={href}
              text={text}
              {...(closeIfMobile && { closeNavbar: closeIfMobile })}
            />
          );
        })}
      </ul>
    </nav>
  );
}
