import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
import {useEffect} from "react";

const PizzaList = ({pizzaList}) => {
    useEffect(() => {
    }, [pizzaList])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ЛУЧШАЯ ПИЦЦА В ГОРОДЕ</h1>
      <p className={styles.desc}>
          60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО
          Если мы не успеем доставить любые продукты,
          кроме сувенирной продукции и соусов, в течение 60 минут,
          курьер подарит вам сертификат на большую пиццу.
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
              <PizzaCard key={pizza._id} pizza={pizza} />
          ))}

      </div>
    </div>
  );
};

export default PizzaList;
