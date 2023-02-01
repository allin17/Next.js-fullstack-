import styles from "../styles/Add.module.css"

const Add = ({setClose}) => {
    return (
        <span
            onClick={() => setClose(true)}
            className={styles.mainAddButton}
        >
            X
        </span>
    );
};

export default Add;