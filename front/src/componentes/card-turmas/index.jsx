import React from "react";
import {Titulo} from "../titulo";
import styled from "styled-components";

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 50px auto;
    max-width: 300px;
    padding: 20px 20px;
    justify-content: space-around;
    width: 100%;
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    margin: auto;
    text-align: center;
    width: 150px;
    transition: 0.5s;

    &:hover {
        background-color: chartreuse;
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
`

function CardTurmas({turma, onClick}) {

    const turnoMap = {
        0: 'manhã',
        1: 'tarde',
        2: 'noite',
    };

    const diaSemanaMap = {
        0: 'segunda-feira',
        1: 'terça-feira',
        2: 'quarta-feira',
        3: 'quinta-feira',
        4: 'sexta-feira',
    };
    const aoSelecionar = (turma) => {
        onClick(turma)
    }
    return (
        <Card>
            <div>
                <Titulo cor={'#EB9B00'}
                        alinhamento={'center'}>{turma.nome}</Titulo>
                <Subtitulo>Professor(a): {turma.professor}</Subtitulo>
                <Descricao>Turno: {turnoMap[turma.turno]}</Descricao>
                <Descricao>Dia da Semana: {diaSemanaMap[turma.diaDaSemana]}</Descricao>
                <Botao onClick={() => aoSelecionar(turma)}>REALIZAR MATRÍCULA</Botao>
            </div>
        </Card>
    )
}

export default CardTurmas