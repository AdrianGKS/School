import Logo from "../logo";
import IconesHeader from "../icones-header";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;

`

function HeaderPesquisa() {
    return(
        <HeaderContainer>
            <Logo/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default HeaderPesquisa