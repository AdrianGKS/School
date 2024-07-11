const {getTodosCursos, getCursoPorId, insereCurso, modificaCurso, deletaCurso} = require("../services/cursos");

function getCursos(req, res) {
    try{
        const cursos = getTodosCursos()
        res.send(cursos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getCurso(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const curso = getCursoPorId(id)
            res.send(curso)
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postCurso(req, res) {
    try {
        const cursoNovo = req.body
        if (req.body.nome) {
            insereCurso(cursoNovo)
            res.status(201)
            res.send("Livro inserido com sucesso!")
        } else {
            res.status(422)
            res.send("Campo nome são obrigatórios!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchCurso(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            modificaCurso(body, id)
            res.send("Item modificado com sucesso!")
        } else {
            res.status(422)
            res.send("Id inválido!")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteCurso(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaCurso(id)
            res.send("Item deletado com sucesso!")
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getCursos,
    getCurso,
    postCurso,
    patchCurso,
    deleteCurso
}