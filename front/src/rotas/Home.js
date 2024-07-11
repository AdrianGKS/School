import styled from 'styled-components'
import Inicio from "../componentes/home";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

function Aluno() {

    return (
        <AppContainer>
            <Inicio/>
        </AppContainer>
    );
}

export default Aluno;
