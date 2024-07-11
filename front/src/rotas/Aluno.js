import HeaderPesquisa from "../componentes/header-pesquisa";
import styled from 'styled-components'
import Pesquisa from "../componentes/pesquisa";
import Cronograma from "../componentes/cronograma";
import {useState} from "react";
import CadastroAluno from "../componentes/cadastro-aluno";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`
const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    margin: auto;
    text-align: center;
    width: 150px;
    transition: 0.5s;

    &:hover {
        background-color: chartreuse;
        cursor: pointer;
    }
`

function Aluno() {
    const [componenteVisivel, setComponenteVisivel] = useState(1);
    const [dados, setDados] = useState({tipo:null, dados: null});
    const [aluno, setAluno] = useState([])

    const handleClick = (componente, dados) => {
        setDados({tipo: componente, dados: dados})
        setComponenteVisivel(componente);
    };


    return (
        <AppContainer>
            <HeaderPesquisa/>
            <Pesquisa
                onClick={(dados) => handleClick(2, dados)}
            />
            {componenteVisivel === 2 && (
                <>
                    <Botao onClick={() => handleClick(1)}>Minimizar Cronograma</Botao>
                    <Cronograma
                    nomeCursoSelecionado={dados.dados}
                    onClick={(dados) => handleClick(3, dados)}
                    />
                </>
            )}
            {componenteVisivel === 3 && (
                <>
                    <CadastroAluno
                        turmaSelecionada={dados.dados}
                        onRegister={novoAluno => setAluno([...aluno, novoAluno])}
                    />
                </>
            )}
        </AppContainer>
    );
}

export default Aluno;
