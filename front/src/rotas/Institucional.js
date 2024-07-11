import styled from 'styled-components'
import HeaderPadrao from "../componentes/header-padrao";
import {useEffect, useState} from "react";
import {getTurmas} from "../servicos/turmas";
import TurmasAndDisciplinas from "../componentes/turma-disciplina";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`


function Institucional() {
    const [turmas, setTurmas] = useState([]);
    useEffect(() => {
        fetchTurma();
    }, []);

    async function fetchTurma() {
        const turmasDaAPI = await getTurmas()
        setTurmas(turmasDaAPI)
    }

    return (
        <AppContainer>
            <HeaderPadrao/>
            <TurmasAndDisciplinas
                listaTurmas={turmas}
            />
        </AppContainer>
    );
}

export default Institucional;
