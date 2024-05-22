import styles from "../Navbar.module.css";
import { useRouter } from "next/router";
import clsx from "clsx";

import Link from "next/link";

export default function NavLink({
  href,
  text,
  closeNavbar,
}: {
  href: string;
  text: string;
  closeNavbar?: () => void;
}) {
  const router = useRouter();
  const isActive = router.pathname === href;

  const triggerCloseNavbar = () => {
    if (closeNavbar) closeNavbar();
  };

  return (
    <li className={styles.menuItem}>
      <Link
        className={clsx(styles.navLink, isActive && styles.active)}
        href={href}
        {...(closeNavbar && { onClick: triggerCloseNavbar })}
      >
        {text}
      </Link>
    </li>
  );
}
