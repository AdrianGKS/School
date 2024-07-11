const fs = require('fs')

function getTodasTurmas() {
    return JSON.parse(fs.readFileSync("turmas.json", "utf8"))
}

function getTurmaPorId(id) {
    const turmas = JSON.parse(fs.readFileSync("turmas.json", "utf8"))
    return turmas.filter(turma => turma.id === id)[0]
}

function insereTurma(turmaNova) {
    //const curso = JSON.parse(fs.readFileSync("cursos.json", "utf8"))
    const turmas = JSON.parse(fs.readFileSync("turmas.json", "utf8"))
    const novaListaDeTurmas = [...turmas, turmaNova]
    fs.writeFileSync("turmas.json", JSON.stringify(novaListaDeTurmas))
}

function modificaTurma(modificacoes, id) {
    let turmas = JSON.parse(fs.readFileSync("turmas.json", "utf8"))
    const indiceTurma = turmas.findIndex(turma => turma.id === id)
    turmas[indiceTurma] = {...turmas[indiceTurma], ...modificacoes}
    fs.writeFileSync("turmas.json", JSON.stringify(turmas))

}

function deletaTurma(id) {
    const turmas = JSON.parse(fs.readFileSync("turmas.json", "utf8"))
    const turmasFiltradas = turmas.filter(turma => turma.id !== id)
    fs.writeFileSync("turmas.json", JSON.stringify(turmasFiltradas))
}


module.exports = {
    getTodasTurmas,
    getTurmaPorId,
    modificaTurma,
    deletaTurma,
    insereTurma
}