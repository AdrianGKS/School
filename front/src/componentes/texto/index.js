import styled from "styled-components";
const CampoTexto = styled.div`
    margin: 24px 0;
    
    label {
        display: block;
        text-align: left;
        margin-bottom: 8px;
        font-size: 24px;
    }   

    input {
        background-color: #FFFFFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        width: 100%;
        border: none;
        font-size: 24px;
        padding: 24px;
        box-sizing: border-box;
    }
`

function Texto ({ type='text', nome, label, placeholder, valor, alterado, obrigatorio = false, min, max }) {

    return(
        <CampoTexto>
            <label>{label}</label>
            <input
                name={nome}
                type={type}
                value={valor}
                onChange={alterado}
                required={obrigatorio}
                placeholder={placeholder}
                min={min} // Adicionando o valor mínimo permitido
                max={max}
            />
        </CampoTexto>
    )
}

export default Texto