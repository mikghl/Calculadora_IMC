const Tabela = ({ imc }) => {


    let resultadoIMC = '';

    if (imc <= 18.5) {
        resultadoIMC = 'Abaixo do normal'
    } else if (imc <= 24.9) {
        resultadoIMC = 'Normal'
    } else if (imc <= 29.9) {
        resultadoIMC = 'Sobrepeso'
    } else if (imc <= 34.9) {
        resultadoIMC = 'Obesidade grau I'
    } else if (imc <= 39.9) {
        resultadoIMC = 'Obesidade grau II'
    } else {
        resultadoIMC = 'Obesidade grau III'
    }

    return (
        <>  
            <h3>Segundo a Tabela IMC, seu resultado é {resultadoIMC}</h3>
        </>
    );
}

export default Tabela;
