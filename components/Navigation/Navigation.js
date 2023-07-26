import styles from './Navigation.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navigation() {
    const router = useRouter();

    return (
        <nav className={styles.navigation}>
            <ul className={styles.menu}>
                <li className={`${styles.menuItem} ${router.pathname === '/' ? styles.active : ''}`}>
                    <Link href="/" className={styles.link}>
                        Home
                    </Link>
                </li>
                <li className={`${styles.menuItem} ${router.pathname.startsWith('/user') ? styles.active : ''}`}>
                    <Link href="/user/afantes" className={styles.link}>
                        My Repos
                    </Link>
                </li>
                <li className={`${styles.menuItem} ${router.pathname.startsWith('/about') ? styles.active : ''}`}>
                    <Link href="/about" className={styles.link}>
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    );
}