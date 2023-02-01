import styles from "../../styles/Login.module.css"
import {useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleClick = async () => {
        try {
            await axios.post("http://localhost:3000/api/login", {
                username,
                password
            })
            router.push("/admin")
        } catch (e) {
            console.log(e);
            setError(true)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Admin Dashboard</h1>
                <input
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    type="text"
                />
                <input
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    type="password"
                />
                <button
                    className={styles.button}
                    onClick={handleClick}
                >
                    Sign In
                </button>
                {error && <span className={styles.error}>Wrong Credentials!</span>}
            </div>
        </div>
    );
};

export default Login;