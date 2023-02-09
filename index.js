const express = require('express');
const { MongoClient } = require('mongodb');

//localhotst ou 127.0.0.1
const DB_URL="mongodb://127.0.0.1:27017";
const DB_NAME="ocean-bancodados-09-02-2023";

async function main() {

//conexão com o banco de dados
console.log("Conectando com sucesso")
const client = await MongoClient.connect(DB_URL);
const db = client.db(DB_NAME);
const collection = db.collection('itens');
console.log("Banco de dados conectado com sucesso");

const app = express();

// O que vier no Body da requisição, está em JSON
app.use(express.json());

// Endpoint / -> Heloo World
app.get('/', function (req, res) {
  res.send('Hello World')
})

// Endponit /oi -> Olá,mundo!
app.get("/oi", function (req,res){
res.send ("Olá, mundo!")
})

//Lista de Informações
const itens= ["Namjoon","Jk","Jin"];
//               0       1     2

// CRUD -> Lista de Informações

//EndPoint Read All -> [Get] /Item
 app.get("/item", async function (req, res){
  const documentos = await collection.find().toArray();
 res.send (documentos);
 });

// EndPoint Id by ID -> [GET] /Item/:id
app.get ("/item/:id" , function (req, res) {
  const id = req.params.id;
  const item = itens [id - 1]
  res.send (item);
});

// EndPoint Create -> [POST] /Item
app.post("/item", function ( req,res){
  //console.log (req.body)
  const item = req.body;
  itens.push(item.nome)
  res.send ("BTS")
})

app.listen(3000)
}

main();