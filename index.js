const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/',(request,response) => {
    res.json({msg: "Sucesso"});
});

app.get('/teste',(request,response) => {
    res.json({msg: "Teste"});
});

app.listen(3000, () =>{
    console.log("Server executando na porta 3000");
});
