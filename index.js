const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.json({message:'Server funcionando status 200 INTEGRAÇÃO PCF PEÇAS E SERVIÇOS PARA TRATORES'});
})

app.listen(2000)
