const express = require('express');

const app = express();

app.get('/',(request,response)=>{
    return response.json({message:'Server funcionando status 200'});
})

app.listen(4000)