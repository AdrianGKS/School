import styled from "styled-components";

const Lista = styled.div `
    margin: 24px 0;


    label {
        display: block;
        margin-bottom: 8px;
        font-size: 24px;
        text-align: left;
    }
    select {
        background: #FFFFFF;
        box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
        border-radius: 0;
        width: 100%;
        border: none;
        font-size: 24px;
        padding: 24px;
        box-sizing: border-box;
    }
`
const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false}) => {
    return (
        <Lista>
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item}>{item}</option>)}
        </select>
    </Lista>)
}

export default ListaSuspensa