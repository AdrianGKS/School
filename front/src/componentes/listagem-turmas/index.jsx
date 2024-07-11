import React from 'react';
import styled from 'styled-components';
import {Titulo} from "../titulo";

const Container = styled.div`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
`

const Turmas = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    max-width: 300px;
    padding: 20px 20px;
    justify-content: center;
    width: 100%;
    
    p{
        color: #000;
        max-width: 300px;
    }
    h3 {
        width: 100%;
        padding: 20px 0;
        background-color: #FFF;
        color: #000;
        font-size: 24px;
        text-align: center;
        margin: 0;
    }
`

const AlunoList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;

    li {
        margin: 5px 0;
    }
`;

const AlunoItem = styled.li`
    background-color: #f2f2f2;
    padding: 10px;
    border-radius: 5px;
    color: #000;
`;

const AlunoNome = styled.span`
    font-size: 16px;
`;

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
function TurmasList ({turmas, handleMinimized})  {
    const turno = {
        0: 'manhã',
        1: 'tarde',
        2: 'noite',
    };

    const diaSemana = {
        0: 'segunda-feira',
        1: 'terça-feira',
        2: 'quarta-feira',
        3: 'quinta-feira',
        4: 'sexta-feira',
    };

    return (
        <Container>
            <Button onClick={handleMinimized}>Minimizar</Button>
            <Titulo>Lista de Turmas</Titulo>
            {turmas.map((turma) => (
                <Turmas key={turma.id}>
                    <Titulo>{turma.nome}</Titulo>
                    <Subtitulo><strong>Professor:</strong> {turma.professor}</Subtitulo>
                    <p><strong>Turno:</strong> {turno[turma.turno]}</p>
                    <p><strong>Dia da Semana:</strong> {diaSemana[turma.diaDaSemana]}</p>
                    <Subtitulo><strong>Alunos</strong></Subtitulo>
                    <AlunoList>
                        {Array.isArray(turma.alunos) ? (
                            turma.alunos.map((aluno) => (
                                <AlunoItem key={aluno.id}>
                                    <AlunoNome>{aluno.nome}</AlunoNome>
                                </AlunoItem>
                            ))
                        ) : (
                            <AlunoItem>
                                <AlunoNome>Nenhum aluno matriculado.</AlunoNome>
                            </AlunoItem>
                        )}
                    </AlunoList>
                </Turmas>
            ))}
        </Container>
    );
}

export default TurmasList;