# TodoList_API

# Sobre o projeto (About this project)

Projeto de uma api Todo List (lista de tarefas) desenvolvido em nodejs e banco de dados mysql.
Neste projeto há o desenvolvimento do CRUD (create, read, update e delete), que são
os principais operações realizadas por bancos de dados realacionais (Insert, Select, Update e Delete).
Nodejs é um popular framework amplamente utilizado no desenvolvimento de aplicações no lado do servidor(server-side),
que utiliza o JavaScript como linguagem de programação.

Project of the api todo list, development on nodejs and mysql database. 
In this project contains crud methods (create, read, update and delete) from relational database (insert, select, update, delete).
Node Js is a popular framework widely used in server side development with javascript programing language.

# Rotas (routes)

- GET /tasks/id

Retorna a tasks de id passado como parâmetro no endpoint. 
Returns the task of id equals of the parameter.

- GET /tasks

Retorna todas as tasks.
Returns all tasks.

- POST /tasks

Cria uma nova task e é necessário o envio do request body com o title e o status da task.
Create a new task, is necessary send a request body in this request.

{
    
    "title": "content",
    
    "status": "status"
    
}

- PUT /tasks/id

Atualiza uma task com o id passado como parâmetro no endpoint.
Actualize the task of id like of the parameter, is necessary send a request body with a new values.

- DELETE /tasks/id

Deleta uma task com o id passado como parâmetro no endpoint.
Delete a task of id like of the parameter.

# Tecnologias e Ferramentas utilizadas (technologies and tool)

- JavaScript
- NodeJs
- Docker
- Mysql
- VsCode
- Plataforma UNIX

