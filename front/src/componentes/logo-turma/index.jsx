import logo from "../../imagens/logo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
import home from "../../imagens/home.png";


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
const IconeImagem = styled.img`
    padding: 10px;
    width: 50px;
`
function LogoTurma () {
    return (
        <LogoContainer>
            <Link to={"/"}>
            <LogoImagem
                src={logo}
                alt={'Logo do Site'}
                className={'logo-img'}
            />
            </Link>
            <p>PROCURE SUA TURMA</p>
            <Link to={"/aluno"}>
                <IconeImagem src={home} alt={'Ícones'}></IconeImagem>
            </Link>

        </LogoContainer>
    )
}

export default LogoTurma