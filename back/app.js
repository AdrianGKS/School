const express = require("express")
const rotaCurso = require("./rotas/curso")
const rotaTurmas = require('./rotas/turma')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

const port = 8000

app.use('/cursos', rotaCurso)
app.use('/turmas', rotaTurmas)

app.listen(port, () => {
     console.log(`Escutando a porta ${port}`)
})