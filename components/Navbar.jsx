import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import {useSelector} from "react-redux";
import Link from "next/link";
import {useState} from "react";
import Menu from "./Menu";

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {

    const quantity = useSelector(state => state.cart.quantity)
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/telephone.png" alt="" width="32" height="32"/>
                </div>
                <div className={`${styles.hamburger} ${styles.active}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span className={styles.hamburgerItem}></span>
                    <span className={styles.hamburgerItem}></span>
                    <span className={styles.hamburgerItem}></span>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                    <li className={styles.listItem}>Homepage</li>
                    </Link>
                    <li className={styles.listItem}>Products</li>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/12.ico" alt="" width="140px" height="69px"/>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>

                        <Image src="/img/cart.png" alt="" width="30px" height="30px"/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;
