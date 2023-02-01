import styles from "../styles/OrderDetails.module.css"
import {useState} from "react";

const OrderDetails = ({total, createOrder}) => {
    const [customer, setCustomer] = useState("")
    const [address, setAddress] = useState("")

    const handleClick = () => {
        createOrder({customer, address, total, method: 0}) //cash - 0 , paypal - 1
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>You will pay {total} after delivery</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name Surname</label>
                    <input
                        placeholder="John Doe"
                        type="text"
                        className={styles.input}
                        onChange={e => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        placeholder="+37529111111"
                        type="text"
                        className={styles.input}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea
                        rows={5}
                        placeholder="Pyshkina, 7"
                        type="text"
                        className={styles.textarea}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;