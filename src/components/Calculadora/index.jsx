import { useState } from 'react';
import styles from './Calculadora.module.css'


const Calculadora = () => {
    const [pesoKG, setPesoKG] = useState(0);
    const [alturaM, setAlturaM] = useState(0)
    let [imc, setImc] = useState(0);

    const calculo = () => {
        const elevacao = alturaM ** 2;
        return setImc(pesoKG / elevacao);
    }


    return (
        <div className={styles.container}>
            <h1>Calcule seu IMC</h1>
            <input type="number" placeholder='Altura (m)' onChange={(e) => setAlturaM(parseFloat(e.target.value))} />
            <input type="number" placeholder='Peso (kg)' onChange={(e) => setPesoKG(parseFloat(e.target.value))} />
            <button type="button" onClick={calculo}>Calcular</button>
            <p>Seu IMC é: {imc.toFixed(2)}</p>
        </div>
    )
}

export default Calculadora;