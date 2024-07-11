import styled from 'styled-components'
import AutenticacaoTurma from "../componentes/perfil";
import HeaderTurma from "../componentes/header-turma";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
function Perfil() {


    return (
        <AppContainer>
            <HeaderTurma/>
            <AutenticacaoTurma/>
        </AppContainer>
    );
}

export default Perfil;
