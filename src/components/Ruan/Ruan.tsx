import styles from "./ruan.module.css"
import { useState, useRef } from 'react';
export default function Ruan(){
    const ContadorHTML = document.getElementsByClassName('Contador')

    const [contador, setContador] = useState(0)

    const [fundo, setFundo] = useState(false)

    const [previous, setPrevious] = useState(0)

    const botao1Ref = useRef(null)

    

    const soma = () => {
        if (contador >= 10){
            return
        } else{
            setContador((prev) =>{
                setPrevious(prev)
                return prev + 1
            })
        }
    }

    const subtrair = () => {
        if (contador <= 0) {
            return
        } else {
            setContador((prev) =>{
                setPrevious(prev)
                return prev - 1
            })
        }
    }

    const reset = () => {
        setContador(0)
        setPrevious(0)
    }

    return(
        <>
        <section className={styles.section}>
            <div className={fundo ? styles.div : styles.div2}>
                <div className={fundo ? styles.Contador : styles.Contador2}>{contador}</div>
                <div className={styles.Contador}>{previous}</div>
                <div className={styles.Botoes}>
                    <button className={styles.botao} ref={botao1Ref} onClick={soma}>Aumentar </button>
                    <button className={styles.botao} onClick={subtrair}>Diminuir</button>
                    <button className={styles.botao} onClick={reset}>Resetar</button>
                    <button className={styles.botao} onClick={() => setFundo(!fundo)}>Trocar Fundo</button>
                </div>
            </div>
        </section>
        </>
    )
}