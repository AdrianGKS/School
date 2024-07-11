const {Router} = require("express")
const {getTurmas, getTurma, postTurma, deleteTurma, patchTurma} = require("../controllers/turma");
const router = Router()

router.get('/', getTurmas)

router.get('/:id', getTurma)

router.post('/', postTurma)

router.patch('/:id', patchTurma)

router.delete('/:id', deleteTurma)


module.exports = router