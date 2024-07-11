import Input from "../input";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {getCursos} from "../../servicos/cursos";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;
    
`

const CardContainer = styled.section`
    background-color: #FFF;
    padding: 20px;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Card = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 2px;
    width: auto;
    margin: 20px;
    cursor: pointer;
    border-radius: 20px;

    h3 {
        padding-left: 10px;
        text-align: left;
        font-size: 30px;
        color: #FFF; 
    }

    p {
        margin: auto;
        padding: 20px;
        font-size: 16px;
        color: #FFF; 
    }

    &:hover {
        border: 5px solid chartreuse;
    }
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0;
    font-size: 16px;
    margin-right: 20px;
    border: none;
    font-weight: 900;
    text-align: center;
    width: 150px;
    transition: 0.5s;
    
    &:hover {
        background-color: chartreuse;
        cursor: pointer;
    }
`

function Pesquisa({onClick}) {
    const [cursoPesquisado, setCursoPesquisado] = useState([])
    const [cursoSelecionado, setCursoSelecionado] = useState(null);
    const [mostrarCards, setMostrarCards] = useState(false)


    const aoSelecionar = (nome)=>{
        setCursoSelecionado(nome);
        onClick(nome)
    }

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        fetchCursos()
    }, []);

    async function fetchCursos() {
        const cursosDaAPI = await getCursos()
        setCursos(cursosDaAPI)
    }

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu curso pesquisando abaixo.</Subtitulo>
            <Input
                placeholder={"Busque seu curso..."}
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = cursos.filter(curso => curso.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
                    setCursoPesquisado(resultadoPesquisa)
                    setMostrarCards(true)
                }}
            />
            {mostrarCards &&
                <CardContainer>
                    {
                        cursoPesquisado.map(curso => (
                            curso.nome === cursoSelecionado || cursoSelecionado === null ?
                                <Card>
                                    <h3>{curso.nome}</h3>
                                    <p>{curso.descricao}</p>

                                    <Botao onClick={() => aoSelecionar(curso.nome)}>
                                        VISUALIZAR TURMAS
                                    </Botao>
                                </Card>
                                : null
                        ))
                    }
                </CardContainer>
            }
        </PesquisaContainer>
    )
}

export default Pesquisa
