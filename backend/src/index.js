const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

//Rotas e Recurso
/*Métodos HTTP

GET: Vai buscar/listar uma informação do backend(listagem, dados do usuario etc...)
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no backend
*/

/* Tipos de parâmetros:
 *
 * Query Params: parâmetros nomeados enviados na rota após o "?"  (Filtros,páginação)
 * Route Params: parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para crar ou alterar recursos
 */

/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc
 */
/*
Driver: SELECT * FROM users buscar usuarios no DB
Query Builder: table('users').select('*').where()
*/
