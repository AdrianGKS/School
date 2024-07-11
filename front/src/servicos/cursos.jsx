import axios from "axios";

const cursosAPI = axios.create({baseURL: "http://localhost:8000/cursos"})

async function getCursos() {
    const response = await cursosAPI.get('/')

    return response.data
}

async function postCurso(novoCurso) {
    await cursosAPI.post('/', novoCurso)
}

export {
    getCursos,
    postCurso
}