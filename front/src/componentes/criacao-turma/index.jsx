import React, {useState} from 'react';
import styled from 'styled-components';
import Texto from "../texto";
import ListaSuspensa from "../lista-suspensa";

const Formulario = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    color: #000;

    form {
        width: 80%;
        background-color: #F2F2F2;
        border-radius: 20px;
        padding: 36px 64px;
        box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
    }
`
const Botao = styled.button`;
    background-color: #EB9B00;
    color: #FFF;
    padding: 5px 20px;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
    border: none;
    font-weight: 900;
    text-align: center;
    width: 150px;
    height: 50px;
    transition: 0.5s;
    
    &:hover {
        background-color: chartreuse;
        cursor: pointer;
    }
`
const BotaoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

function TurmaForm ({listaCursos, inserirNovaTurma, handleMinimized}) {
    const [novaTurma, setNovaTurma] = useState({
        id:'', nome:'', professor:'', turno:0, diaDaSemana:0, aluno:{}
    })
    const handleInputChange  = (event) => {
        setNovaTurma(({
            ...novaTurma,
            [event.target.name]: event.target.value
        }))
    }
    const handleCriarTurma = () => {
        console.log(novaTurma)
        inserirNovaTurma(novaTurma);
    };

    return (
        <Formulario>
            <form onSubmit={(event) => event.preventDefault()}>
                <ListaSuspensa
                    obrigatorio={true}
                    label='Curso'
                    items={listaCursos.map(curso => curso.nome)}
                    valor={novaTurma.nome}
                    aoAlterado={(evento) => handleInputChange({ target: { name: 'nome', value: evento } })}
                />
                <Texto
                    nome={'professor'}
                    obrigatorio={true}
                    label={'Professor'}
                    valor={novaTurma.professor}
                    placeholder={"Digite o nome do professor(a)..."}
                    alterado={handleInputChange}
                />
                <Texto
                    nome={'turno'}
                    obrigatorio={true}
                    label={'Turno'}
                    valor={novaTurma.turno}
                    placeholder={"Turno: (0) manhã, (1) tarde, (2) noite"}
                    alterado={handleInputChange}
                    type={'number'}
                    min={0}
                    max={2}
                />
                <Texto
                    nome={'diaDaSemana'}
                    obrigatorio={true}
                    type={'number'}
                    label={'Dia da Semana'}
                    valor={novaTurma.diaDaSemana}
                    placeholder={"Dia da Semana: (0) segunda, (1) terça, (2) quarta, (3) quinta, (4) sexta"}
                    alterado={handleInputChange}
                    min={0}
                    max={4}
                />
                <BotaoContainer>
                    <Botao onClick={handleCriarTurma}>CRIAR TURMA</Botao>
                    <Botao onClick={handleMinimized}>SAIR</Botao>
                </BotaoContainer>
                </form>
        </Formulario>
        )
}
export default TurmaForm;