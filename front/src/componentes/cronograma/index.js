import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {Titulo} from "../titulo";
import CardTurmas from "../card-turmas";
import {getTurmas} from "../../servicos/turmas";

const CronogramaContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`
const Button = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0;
    font-size: 16px;
    margin-right: 20px;
    border: none;
    font-weight: 900;
    text-align: center;
    width: 150px;
    transition: 0.5s;

    &:hover {
        background-color: chartreuse;
        cursor: pointer;
    }
`;
function Cronograma({nomeCursoSelecionado, onClick}) {
    const[turmas, setTurmas] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    async function fetchTurma() {
        const turmasDaAPI = await getTurmas()
        setTurmas(turmasDaAPI)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchTurma()
    }, []);

    const turmasFiltradas = turmas.filter(turma => turma.nome === nomeCursoSelecionado)

    const aoSelecionar = (turma) => {
        onClick(turma)
    }
        return(
        <CronogramaContainer>
            <Titulo
                cor={'#EB9B00'}
                tamanhoFonte={'36px'}
            >
                TURMAS DISPONÍVEIS
            </Titulo>
            {isLoading ? (
                <p>Carregando turmas...</p>
            ) : turmasFiltradas.length === 0 ? (
                <p>Nenhuma turma disponível para o curso selecionado.</p>
            ) : (
                turmasFiltradas.map(turma => (
                    <CardTurmas
                        turma={turma}
                        onClick={() => aoSelecionar(turma)}
                    >
                    </CardTurmas>
                ))
            )}

        </CronogramaContainer>
    )
}
export default Cronograma