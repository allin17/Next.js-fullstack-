import React from 'react';
import styles from "../styles/Menu.module.css"
import Link from "next/link";

const Menu = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <Link href="/" passHref>
                    <li className={styles.listItem}>Homepage</li>
                </Link>
                <li className={styles.listItem}>Products</li>
                <li className={styles.listItem}>Menu</li>
                <li className={styles.listItem}>Events</li>
                <li className={styles.listItem}>Blog</li>
                <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
    );
};

export default Menu;