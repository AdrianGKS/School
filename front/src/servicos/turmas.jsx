import axios from "axios";

const turmasAPI = axios.create({baseURL: "http://localhost:8000/turmas"})

async function getTurmas() {
    const response = await turmasAPI.get('/')
    return response.data
}

async function getTurmasPorId(id) {
    const response = await turmasAPI.get(`/${id}`)
    return response.data
}

async function postTurma(novaTurma) {
    await turmasAPI.post('/', novaTurma)
}

async function patchTurma(id, dadosTurma) {
    await turmasAPI.patch(`/${id}`, dadosTurma)
}

async function deleteTurma(id) {
    await turmasAPI.post(`/${id}`)
}


export {
    getTurmas,
    getTurmasPorId,
    postTurma,
    patchTurma,
    deleteTurma
}