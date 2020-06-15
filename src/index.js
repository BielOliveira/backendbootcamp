//importa express para uma variavel
const express = require('express');

//inicia a classe dentro de uma variavel;
const app = express();

//É importante que se coloque esta função no express antes das rotas para que ele consiga reconhecer JSON no request body
app.use(express.json())

//ROTAS
/* Seta rotas atraves de metodos 
GET: Buscar informações no back-end
POST: Criar uma informaççao no back-end
PUT/PATCH: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

//TIPOS DE PARAMENTROS
/*
Query Params: Filtros e Paginação
Route Params: 
Request Body:
*/

app.get('/', (request, response)=>{
    return response.json({
        message: 'Hello GoStack'
    });
});

app.get('/projects', (request, response) => {
    const query = request.query;
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
})

app.post('/projects', (request, response) => {
    const body = request.body;
    return  response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ])
})

app.put('/projects/:id', (request, response) => {
    const params = request.params;
    return  response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ])
})

app.delete('/projects/:id', (request, response) => {
    return  response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
    ])
})

//seta porta a qual o aplicação sera rodada
app.listen(3333, () => {
    console.log('🚀 Back-end started!')
});