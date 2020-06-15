//importa express para uma variavel
const express = require('express');

//inicia a classe dentro de uma variavel;
const app = express();

//ROTAS
/* Seta rotas atraves de metodos GET, POST, PUT e DELETE*/
app.get('/', (request, response)=>{
    return response.json({
        message: 'Hello World'
    });
})

//seta porta a qual o aplicação sera rodada
app.listen(3333);