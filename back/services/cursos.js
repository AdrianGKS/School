const fs = require('fs')

function getTodosCursos() {
    return JSON.parse(fs.readFileSync("cursos.json", "utf8"))
}

function getCursoPorId(id) {
    const cursos = JSON.parse(fs.readFileSync("cursos.json", "utf8"))
    return cursos.filter(curso => curso.id === id)[0]
}

function insereCurso(cursoNovo) {
    const cursos = JSON.parse(fs.readFileSync("cursos.json", "utf8"))

    const novaListaCursos = [...cursos, cursoNovo]

    fs.writeFileSync('cursos.json', JSON.stringify(novaListaCursos))
}

function modificaCurso(modificacoes, id) {
    let cursos = JSON.parse(fs.readFileSync("cursos.json", "utf8"))
    const indiceCurso = cursos.findIndex(curso => curso.id === id)
    cursos[indiceCurso] = {...cursos[indiceCurso], ...modificacoes}
    fs.writeFileSync("cursos.json", JSON.stringify(cursos))

}

function deletaCurso(id) {
    let cursos = JSON.parse(fs.readFileSync("cursos.json", "utf8"))
    const cursoFiltrados = cursos.filter(curso => curso.id !== id)
    fs.writeFileSync("cursos.json", JSON.stringify(cursoFiltrados))
}

module.exports = {
    getTodosCursos,
    getCursoPorId,
    insereCurso,
    modificaCurso,
    deletaCurso
}