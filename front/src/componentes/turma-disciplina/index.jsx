import React, {useEffect, useState} from 'react';
import TurmasList from "../listagem-turmas";
import {getCursos, postCurso} from "../../servicos/cursos";
import styled from "styled-components";
import TurmaForm from "../criacao-turma";
import {postTurma} from "../../servicos/turmas";
import CursoForm from "../criar-curso";

const InstitucionalContainer = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
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
function TurmasAndDisciplinas ({listaTurmas}) {
    const [showTurmas, setShowTurmas] = useState(false);
    const [showFormTurmas, setShowFormTurmas] = useState(false);
    const [showFormCurso, setShowFormCurso] = useState(false);

    const handleMinimize = () => {
        setShowTurmas(false);
        setShowFormTurmas(false)
        setShowFormCurso(false)
    };
    const [cursos, setCursos] = useState([])
    useEffect(() => {
        fetchCursos()
    }, []);
    async function fetchCursos() {
        const cursosDaAPI = await getCursos()
        setCursos(cursosDaAPI)
    }

    async function inserirNovaTurma(novaTurma) {

        let novoId = 1;
        if (listaTurmas.length > 0) {
            const ultimoId = Math.max(...listaTurmas.map(turma => parseInt(turma.id)));
            novoId = ultimoId + 1;
        }

        novaTurma.id = novoId.toString();

        console.log(novaTurma)

        try {
            await postTurma(novaTurma);
            alert('Turma cadastrado.');
        } catch (error) {
            console.error('Erro ao inserir turma:', error);
            alert('Erro ao inserir turma. Por favor, tente novamente.');
        }
    }

    async function inserirNovoCurso(novoCurso) {
        let novoId = 1;
        if (cursos.length > 0) {
            const ultimoId = Math.max(...cursos.map(curso => parseInt(curso.id)));
            novoId = ultimoId + 1;
        }

        // Define o ID do novo curso
        novoCurso.id = novoId.toString();

        console.log(novoCurso)

        try {
            await postCurso(novoCurso);
            alert('Curso cadastrado.');
        } catch (error) {
            console.error('Erro ao inserir curso:', error);
            alert('Erro ao inserir curso. Por favor, tente novamente.');
        }
    }

    return (
        <InstitucionalContainer>
            {!showTurmas && !showFormCurso && !showFormTurmas &&(
            <div>
                <h2>Escolha uma opção:</h2>
                <Button onClick={() => setShowTurmas(true)}>Listar Turmas</Button>
                <Button onClick={() => setShowFormTurmas(true)}>Criar Turma</Button>
                <Button onClick={() => setShowFormCurso(true)}>Criar Curso</Button>
            </div>
            )}
            {showTurmas &&
                <TurmasList turmas={listaTurmas}  handleMinimized={handleMinimize}/>}
            {showFormTurmas &&
                <TurmaForm listaCursos={cursos} inserirNovaTurma={inserirNovaTurma} handleMinimized={handleMinimize}/>}
            {showFormCurso &&
                <CursoForm inserirNovoCurso={inserirNovoCurso} handleMinimized={handleMinimize}/>}
        </InstitucionalContainer>
    );
}

export default TurmasAndDisciplinas;