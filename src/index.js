//importa express para uma variavel
const express = require('express');
const { uuid } = require('uuidv4')

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

const projects = [];

app.get('/', (request, response)=>{
    return response.json({
        message: 'Hello GoStack'
    });
});

app.get('/projects', (request, response) => {
    const { title } = request.query;
    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects;
    return response.json(results)
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner}

    projects.push(project);

    return  response.json(project)
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;
    
    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: "Project not found"})
    }

    const project = {
        id,
        title,
        owner,
    }

    projects[projectIndex] = project

    return  response.json(project)
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => project.id === id);

    if(projectIndex < 0){
        return response.status(400).json({ error: "Project not found"})
    }

    projects.splice(projectIndex, 1)

    return  response.status(204).json()
})

//seta porta a qual o aplicação sera rodada
app.listen(3333, () => {
    console.log('🚀 Back-end started!')
});