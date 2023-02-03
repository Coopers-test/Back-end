<h1 align="center">
To do List - API
</h1>

<p>
Esta é a API da aplicação To do list - um banco de dados pensado em auxiliar a organizar as tarefas, para a criação de hábitos saudáveis.
É possível realizar o CRUD de usuários, tasks e fazer o login.
</p>

<p>
Para rodar o servidor em sua máquina, basta dar os seguintes comandos:
</p>

<strong>yarn install</strong>

<strong>yarn dev</strong>

//TROCAR!
<p>A URL base da API é https://json-server-project-help-ts.herokuapp.com</p>


<h2 align ='center'> Listando </h2>

`GET /tasks - FORMATO DA RESPOSTA - STATUS 200`

```json
[
  {
    "id": "890293a5-4eb2-4d70-8be8-08440cd2fd15",
    "description": "exercise!",
    "status": "todo",
    "created_at": "2023-02-01T13:50:22.673Z",
    "updated_at": "2023-02-01T13:50:22.673Z",
  }
]
```

`GET /users - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "d7918a50-ec42-45f2-96d6-810e48aa57ba",
		"name": "Novo usuário",
		"email": "usuario@mail.com"
	},
]
```


<h2 align ='center'> Criação de usuário </h2>
## Cadastro

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
	"name": "Novo usuário",
	"email": "usuario@mail.com",
	"password": "Usuario1*"
}
```

Caso o cadastro seja realizado de forma correta, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "d7918a50-ec42-45f2-96d6-810e48aa57ba",
	"name": "Novo usuário",
	"email": "usuario@mail.com",
}
```

<h2 align = "center"> Login </h2>

```json
{
  "email": "usuario@mail.com",
  "password": "Usuario1*"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5hbmFAa2VuemllLmNvbSIsImlhdCI6MTY3NTM0Mzc4MCwiZXhwIjoxNjc3OTM1NzgwLCJzdWIiOiJiZjBlNWFiOS01OTMwLTQwMjYtYTU3OS04MGVkOTljYWRkYmIifQ.MBEBbqWr1RB8_NT78IM3Jx4uBLtbBkBx7M3RZLz1_sc"
}
```

Com esta resposta, temos uma informação importante, token, sendo que pode ser guardado no localStorage para fazer a gestão do usuário no Frontend.

<h2 align ='center'> Criar task </h2>

`POST /tasks - FORMATO DA REQUISIÇÃO`

```json
{
	"description": "hey, new task",
	"status": "todo"
}
```

`POST /tasks - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"description": "hey, new task",
	"status": "todo",
	"id": "4e29d7ea-4e0a-4116-8156-ee16ff9a37fb",
	"created_at": "2023-01-31T17:41:05.287Z",
	"updated_at": "2023-01-31T17:41:05.287Z"
}
```

1. o campo - "status" pode receber um dos dois tipos:

- todo
- done

Porém por padrão o status vem como "todo".

<h2 align ='center'> Atualizar task </h2>

`PATCH /tasks/id (id da task a ser editada) - FORMATO DA REQUISIÇÃO`

```json
{
	"description": "this task has been updated"
}
```

`PATCH /tasks/id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "0c75888c-95cc-4a53-b6e5-dbf9a24dbe79",
	"description": "this task has been updated",
	"status": "todo",
	"created_at": "2023-01-31T15:02:09.271Z",
	"updated_at": "2023-01-31T19:25:25.004Z"
}
```

*É possível fazer uma atualização tanto parcial, quanto total.

`PATCH /users/id - (id do user a ser editado) FORMATO DA REQUISIÇÃO`

```json
{
	"name": "new name"
}
```

`PATCH /users/id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "d7918a50-ec42-45f2-96d6-810e48aa57ba",
	"name": "new name",
	"password": "$2b$10$5yPCTxQty/P0VUOxrKuRKePxY6fW1hFo1fjDpQNLKC2fmZ.PvRe4a",
	"email": "usuario@mail.com"
}
```

*É possível fazer uma atualização tanto parcial, quanto total.

<h2 align ='center'> Deletar task </h2>

`DELETE /tasks/id (id da task a ser deletada) - Não é necessário passar corpo na requisição!`

<h2 align ='center'> Deletar usuário</h2>

`DELETE /users/id (id do usuário a ser deletado) - Não é necessário passar corpo na requisição!`


<h1>Escrito e criado por Natália F. Cavicchioli </h1>
