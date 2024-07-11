import logo from "../../imagens/logo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
    font-weight: bold;
`

const LogoImagem = styled.img`
    margin-right: 10px;
    width: 150px;
`

function Logo () {
    return (
        <LogoContainer>
            <Link to={"/"}>
            <LogoImagem
                src={logo}
                alt={'Logo do Site'}
                className={'logo-img'}
            />
            </Link>
            <p>MATRÍCULAS</p>

        </LogoContainer>
    )
}

export default Logo