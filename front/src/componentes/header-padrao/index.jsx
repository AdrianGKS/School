import Logo from "../logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;

`

function HeaderPadrao() {
    return(
        <HeaderContainer>
            <Logo/>
        </HeaderContainer>
    )
}

export default HeaderPadrao