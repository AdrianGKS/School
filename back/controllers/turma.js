const {getTodasTurmas, getTurmaPorId, insereTurma, deletaTurma, modificaTurma} = require("../services/turma");

function getTurmas(req, res) {
    try{
        const turmas = getTodasTurmas()
        res.send(turmas)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getTurma(req, res) {
    try {
        const id = req.params.id;
        if (id && Number(id)) {
            const turma = getTurmaPorId(id)
            res.send(turma)
        } else {
            res.status(422)
            res.send("Id inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postTurma(req, res) {
    try {
        const turmaNova = req.body
        if (turmaNova && turmaNova.nome && turmaNova.nome.trim() !== '') {
            if (!turmaNova.aluno || typeof turmaNova.aluno !== 'object') {
                turmaNova.aluno = {};
            }
            insereTurma(turmaNova)
            res.status(201)
            res.send("Inserido com sucesso!")
        }else {
            res.status(422)
            res.send("Campo nome é obrigatórios!")
        }
        } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchTurma(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            modificaTurma(body, id)
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

function deleteTurma(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deletaTurma(id)
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
    getTurmas,
    getTurma,
    postTurma,
    patchTurma,
    deleteTurma
}