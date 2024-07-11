import {useEffect, useState} from 'react';
import styled from 'styled-components';
import Texto from "../texto";
import ListaSuspensa from "../lista-suspensa";
import {getTurmas} from "../../servicos/turmas";
import {getCursos} from "../../servicos/cursos";

const Formulario = styled.form`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: column; 
    margin: 50px auto;
    max-width: 500px;
    padding: 20px;
    justify-content: space-around;
    width: 100%;
`;

const Input = styled.input`
    padding: 10px; 
    margin-bottom: 10px;
    width: 100%; 
    border-radius: 5px; 
    border: 1px solid #ccc; 

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const Botao = styled.button`
    width: 150px;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const Erro = styled.p`
    color: red;
    margin-top: 10px;
`;

const Infos = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 20px; /
    
    h3 {
        text-align: center;
    }
`

function AutenticacaoTurma() {
    const [cpf, setCPF] = useState('');
    const [curso, setCurso] = useState('');
    const [turmas, setTurmas] = useState([]);
    const [cursos, setCursos] = useState([])
    const [erro, setErro] = useState('');
    const [pesquisaRealizada, setPesquisaRealizada] = useState(false);
    const [turmaAluno, setTurmaAluno] = useState([])

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

    useEffect(() => {
        fetchCursos()
        fetchTurma();
    }, []);

    async function fetchCursos() {
        const cursosDaAPI = await getCursos()
        setCursos(cursosDaAPI)
    }
    async function fetchTurma() {
        const turmasDaAPI = await getTurmas()
        setTurmas(turmasDaAPI)
    }

    function buscarTurma() {
        const turmaEncontrada = turmas.filter(turma => turma.nome === curso && (turma.alunos instanceof Array)
            && turma.alunos.some(aluno => aluno.cpf === cpf) || turma.nome === curso && turma.alunos.cpf === cpf)


        if (!turmaEncontrada) {
            setErro('Nenhuma turma encontrada para o curso selecionado.');
            return;
        }

        setPesquisaRealizada(true);
        setErro('');

        setTurmaAluno(turmaEncontrada)
    }

    return (
        <Formulario onSubmit={(evento) => evento.preventDefault()}>
            <Texto
                nome="cpf"
                obrigatorio={true}
                label="CPF do Aluno"
                valor={cpf}
                placeholder="Digite o CPF do aluno"
                alterado={(evento) => setCPF(evento.target.value)}
            />
            <ListaSuspensa
                obrigatorio={true}
                label='Curso'
                items={cursos.map(curso => curso.nome)}
                valor={curso}
                aoAlterado={(valor) => setCurso(valor)}
            />
            <Botao onClick={buscarTurma}>Buscar Turmas</Botao>
            {erro && <Erro>{erro}</Erro>}
            {pesquisaRealizada && turmas.length > 0 && (
                <Infos>
                    <h3><strong>Turmas encontradas</strong></h3>
                    {turmaAluno.map(turma => (
                        <div key={turma.id}>
                            <p><strong>Nome da Turma:</strong> {turma.nome}</p>
                            <p><strong>Professor:</strong> {turma.professor}</p>
                            <p><strong>Dia da Semana:</strong> {diaSemana[turma.diaDaSemana]}</p>
                            <p><strong>Turno:</strong> {turno[turma.turno]}</p>
                        </div>
                    ))}
                </Infos>
            )}
            {pesquisaRealizada && turmas.length === 0 && (
                <Erro>Nenhuma turma encontrada para o CPF e curso selecionados.</Erro>
            )}
        </Formulario>
    );
}

export default AutenticacaoTurma;
