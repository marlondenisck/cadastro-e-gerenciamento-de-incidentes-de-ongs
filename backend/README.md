## Métodos HTTP
  
* GET: Buscar/listar uma informação do backend
* POST: Criar uma informação no backend
* PUT: Atualizar/alterar uma informação no backend
* DELETE: Deletar uma informação no backend


## Tipos de Parâmetros
* Query Params: Parâmetros nomeados enviados na rota após o símbolo de "?"
  - ..localhost:3333/users?name=marlondck
  - servem para filtros, paginação..
    - no code usa-se const query = request.query

* Route Params: São utilizados para identificar recursos, após o símbolo de ":"
  - ..localhost:3333/users:id
      - no code usa-se const params = request.params

O Retorno sempre é um JSON.

* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
  - no code usa-se const params = request.body


## Instalando o Query Builder
```javascript
  yarn add knex sqlite3
```

## Gerando o arquivo de config SQL
```javascript
  npx knex init
```
- Isso gera um arquivo de config na raiz chamado "knexfile.js"

### Entidades
- ONG
- Caso (incident)

### Migrations
- Configurar o diretorio de migrations no arquivo "knexfile.js"
- Rodar no terminal
```javascript
  npx knex migrate:make create_ongs
```
-  Apos criar a estrutura da migration, rodar ela com 
```javascript
  npx knex migrate:latest 
```

## Funcionalidades
- Login
- Logout
- Cadastro de ONG
- Cadastrar novos casos da ONG
- Deletar específicos casos
- Listar específicos da ONG
- Listar todos os casos
