import styled from "styled-components";
import LogoTurma from "../logo-turma";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;

`

function HeaderTurma() {
    return(
        <HeaderContainer>
            <LogoTurma/>
        </HeaderContainer>
    )
}

export default HeaderTurma