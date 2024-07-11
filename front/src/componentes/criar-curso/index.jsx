import React, {useState} from "react";
import Texto from "../texto";
import styled from "styled-components";

const Formulario = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: #000;

    form {
        width: 80%;
        background-color: #F2F2F2;
        border-radius: 20px;
        padding: 36px 64px;
        box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
    }
`
const Botao = styled.button`;
    background-color: #EB9B00;
    color: #FFF;
    padding: 5px 20px;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
    border: none;
    font-weight: 900;
    text-align: center;
    width: 150px;
    height: 50px;
    transition: 0.5s;

    &:hover {
        background-color: chartreuse;
        cursor: pointer;
    }
`
const BotaoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

function CursoForm ({inserirNovoCurso, handleMinimized}){
    const [novoCurso, setNovoCurso] = useState({
        id:'', nome:'', descricao:''
    })
    const handleInputChange  = (event) => {
        setNovoCurso(({
            ...novoCurso,
            [event.target.name]: event.target.value
        }))
    }
    const handleCriarCurso = () => {
        console.log(novoCurso)
        inserirNovoCurso(novoCurso);
    };

    return (
        <Formulario>
            <form onSubmit={(event) => event.preventDefault()}>
                <Texto
                    nome={'nome'}
                    obrigatorio={true}
                    label={'Nome'}
                    valor={novoCurso.nome}
                    placeholder={"Digite o nome do curso..."}
                    alterado={handleInputChange}
                />
                <Texto
                    nome={'descricao'}
                    obrigatorio={true}
                    label={'Descrição'}
                    valor={novoCurso.descricao}
                    placeholder={"Digite a descrição do curso..."}
                    alterado={handleInputChange}
                />
                <BotaoContainer>
                    <Botao onClick={handleCriarCurso}>CRIAR CURSO</Botao>
                    <Botao onClick={handleMinimized}>SAIR</Botao>
                </BotaoContainer>
            </form>
        </Formulario>
    )
}

export default CursoForm