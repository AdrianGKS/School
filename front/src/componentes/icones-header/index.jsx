import perfil from "../../imagens/perfil.png";
import home from "../../imagens/home.png";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const Icone = styled.li`
    display: flex;
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
`

const IconeImagem = styled.img`
    padding: 10px;
    width: 50px;
`

const icones = [perfil, home]

function IconesHeader () {
    return (
        <Icones>
            <Icone>
                <Link to={'/perfil'}>
                    <IconeImagem src={icones[0]} alt={'Ícones'}></IconeImagem>
                </Link>
                <Link to={"/"}>
                    <IconeImagem src={icones[1]} alt={'Ícones'}></IconeImagem>
                </Link>
            </Icone>
        </Icones>
    )
}

export default IconesHeader