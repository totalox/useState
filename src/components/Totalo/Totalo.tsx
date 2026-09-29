import { useState, useRef } from "react";
import styles from "./totalo.module.css"

export default function Totalo(){

    const [count, setCount] = useState(0);
    const [previous, setPrevious] = useState(0);

    const soma = () => {
        if (count >= 10) {
            return
        } else {
            setCount((prev) => { 
                setPrevious(prev)
                return prev + 1 })
        }
    }
    
    const diminuir = () => {
        if (count <=0) {
            return
        } else {
            setCount(count - 1)
        }
    }
    
    return(
        <>
        <section className={styles.section}>
            <button className={ count >= 10? styles.botao : styles.botao2 } onClick={soma}> Adicionado</button>
            <button className={styles.botao} onClick={diminuir}> Diminuir</button>
            <button className={styles.botao} onClick={() => setCount(() => 0)}> Resetar </button>
            <div className={styles.doidera}> {count} {previous} </div>
        </section>
        </>
    )
    
}