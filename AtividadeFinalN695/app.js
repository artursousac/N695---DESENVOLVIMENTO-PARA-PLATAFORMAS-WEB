const express = require("express")
const cors = require("cors")

var app = express();

app.use(cors())

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})