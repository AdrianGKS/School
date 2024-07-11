import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Texto from "../texto";
import {getTurmas, patchTurma} from "../../servicos/turmas";

const Formulario = styled.div`
        padding-top: 100px;
        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;

    form{
        width: 80%;
        background-color: #F2F2F2;
        border-radius: 20px;
        padding: 36px 64px;
        box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.08);
    }
    h1 {
        text-align: center;
    }
`

const Botao = styled.button`;
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0;
    font-size: 16px;
    margin-right: 50px;
    margin-left: 50px;
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
function CadastroAluno({turmaSelecionada, onRegister}) {
    const[turmas, setTurmas] = useState([])
    async function fetchTurma() {
        const turmasDaAPI = await getTurmas()
        setTurmas(turmasDaAPI)
    }

    useEffect(() => {
        fetchTurma()
    }, []);

    async function alteraTurma(id, novoAluno) {
        if (!turmaSelecionada) {
            alert('Não foi possível encontrar a turma para adicionar o aluno.');
            return;
        }

        turmaSelecionada.alunos = [turmaSelecionada.alunos]
        let ultimoId = Number(turmaSelecionada.alunos.map(aluno => aluno.id))
        novoAluno.id = String(ultimoId+1)

        turmaSelecionada.alunos.push(novoAluno)

        try {
            await patchTurma(id, turmaSelecionada);
            alert(`Aluno ${novoAluno.nome} cadastrado na turma.`);
        } catch (error) {
            alert('Erro ao inserir aluno na turma. Por favor, tente novamente.');
            }

    }

    const [dadosAluno, setDadosAluno] = useState({
        id:'', nome:'', cpf:'', dataNascimento:'', email:'', contato:''
    })

    const turno = {
        0: 'manhã',
        1: 'tarde',
        2: 'noite',
    };

    const diaSemana = {
        0: 'segunda-feira',
        1: 'terça-feira',
        2: 'quarta-feira',
        3: 'quinta-feira',
        4: 'sexta-feira',
    };

    function validarCPF(cpf) {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        return regex.test(cpf);
    }

    function validarCelular(celular) {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
        return regex.test(celular);
    }

    const onSave = (evento) => {
        evento.preventDefault()

        if (!validarCPF(dadosAluno.cpf)) {
            alert('Por favor, insira um CPF válido.');
            return;
        }

        if (!validarCelular(dadosAluno.contato)) {
            alert('Por favor, insira um número de celular válido.');
            return;
        }

        console.log(dadosAluno)
        onRegister(dadosAluno)
    }

    const handleInputChange  = (event) => {
        setDadosAluno(({
            ...dadosAluno,
            [event.target.name]: event.target.value
        }))
    }
    return(
            <Formulario>
                <form onSubmit={onSave}>
                    <h2>CADASTRO</h2>
                    <h3>Informações da turma escolhida:</h3>
                    <p>Curso: {turmaSelecionada.nome}</p>
                    <p>Professor(a): {turmaSelecionada.professor}</p>
                    <p>Turno: {turno[turmaSelecionada.turno]}</p>
                    <p>Dia da Semana: {diaSemana[turmaSelecionada.diaDaSemana]}</p>
                    <h3>Realize seu cadastro abaixo:</h3>
                    <Texto
                        nome={'nome'}
                        obrigatorio={true}
                        label={'Nome'}
                        valor={dadosAluno.nome}
                        placeholder={"Digite seu nome"}
                        alterado={handleInputChange}
                    />
                    <Texto
                        nome={'cpf'}
                        obrigatorio={true}
                        label={'CPF'}
                        valor={dadosAluno.cpf}
                        placeholder={"Digite seu CPF"}
                        alterado={handleInputChange}
                    />
                    <Texto
                        nome={'dataNascimento'}
                        obrigatorio={true}
                        label={'Data de Nascimento'}
                        type={'date'}
                        valor={dadosAluno.dataNascimento}
                        alterado={handleInputChange}
                    />
                    <Texto
                        nome={'email'}
                        obrigatorio={true}
                        label={'E-mail'}
                        type={'email'}
                        valor={dadosAluno.email}
                        placeholder={"Digite seu e-mail"}
                        alterado={handleInputChange}
                    />
                    <Texto
                        nome={'contato'}
                        obrigatorio={true}
                        label={'Contato'}
                        valor={dadosAluno.contato}
                        placeholder={"(xx) xxxxx-xxxx"}
                        alterado={handleInputChange}
                    />
                    <Botao onClick={() => alteraTurma(turmaSelecionada.id, dadosAluno)}>CONFIRMAR INSCRIÇÂO</Botao>
                </form>
            </Formulario>
    )
}

export default CadastroAluno