import Link from "next/link";
import styles from "./Navbar.module.css";
import clsx from "clsx";

import { useRouter } from "next/router";

function NavLink({ href, text }: { href: string; text: string }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <li>
      <Link
        className={clsx(styles.navbarLink, isActive && styles.active)}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <img className={styles.floralRing} src="/floral.png" alt="" />

      <ul>
        <NavLink href="/" text="Home" />
        <NavLink href="/artwork" text="Artwork" />
        <NavLink href="/renos" text="Renos" />
        <NavLink href="/cakes" text="Cakes" />
        <NavLink href="/about" text="About" />
      </ul>
    </nav>
  );
}
