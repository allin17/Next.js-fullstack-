import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import pizzaList from "../components/PizzaList";
import axios from "axios";
import {useState} from "react";
import AddButton from "../components/AddButton";
import Add from "../components/Add";

export default function Home({pizzaList, isAdmin}) {
    //admin
    const [close, setClose] = useState(true)

    return (
        <div className={styles.container}>
            <Head>
                <title>🍕 Пицца | Быстрая доставка, скидки до 45%</title>
                <meta name="description" content="Best pizza shop in town"/>
                <link rel="icon" href="/12.ico"/>
            </Head>
            <Featured/>
            {isAdmin && <AddButton setClose={setClose}/>}
            <PizzaList pizzaList={pizzaList}/>
            {!close && <Add setClose={setClose}/>}
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || ""
    let isAdmin = false

    if (myCookie.token === process.env.TOKEN) {
        isAdmin = true
    }

    const res = await axios.get("http://localhost:3000/api/products")
    return {
        props: {
            pizzaList: res.data,
            isAdmin
        }
    }
}