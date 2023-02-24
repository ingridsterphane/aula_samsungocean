const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require("cors");

//localhotst ou 127.0.0.1
// const DB_URL="mongodb://127.0.0.1:27017";
const DB_URL=
"mongodb+srv://admin:dq3UVgcMR9LHHtcy@cluster0.6dchbcu.mongodb.net";
const DB_NAME="ocean-bancodados-09-02-2023";

async function main() {

//conexão com o banco de dados
console.log("Conectando com o banco de dados...")
const client = await MongoClient.connect(DB_URL);
const db = client.db(DB_NAME);
const collection = db.collection("itens");
console.log("Banco de dados conectado com sucesso!");

const app = express();

//Habilita o Cors
app.use(cors());

// O que vier no Body da requisição, está em JSON
app.use(express.json());

// Endpoint / -> Heloo World
app.get("/", function (req, res) {
  res.send('Hello World')
})

// Endponit /oi -> Olá,mundo!
app.get("/oi", function (req,res){
res.send ("Olá, mundo!")
})

//Lista de Informações
const itens = ["Namjoon","Jk","Jin"];
//               0       1     2

// CRUD -> Lista de Informações

//EndPoint Read All -> [Get] /Item
 app.get("/item", async function (req, res){
  const documentos = await collection.find().toArray();
 res.send (documentos);
 });

// EndPoint Id by ID -> [GET] /Item/:id
app.get ("/item/:id" , async function (req, res) {
  const id = req.params.id;
  const item = await collection.findOne({_id: new ObjectId(id)});
  res.send (item);
});

// EndPoint Create -> [POST] /Item
app.post("/item", async function ( req,res) {
  //console.log (req.body)
  const item = req.body;
 await collection.insertOne(item)
  res.send (item);
});

//Endpoint Update -> [PUT] /Item /:id
app.put("/item/:id", async function (req,res) {
const id = req.params.id;
const body= req.body;

//console.log(id,body);

await collection.updateOne({_id: new ObjectId(id) },{ $set: body}
);

 res.send(body);

});

// Endpoint delete-> [DELETE] /item/:id

app.delete("/item/:id", async function (req,res) {
 const id= req.params.id;

 await collection.deleteOne({_id: new ObjectId(id)});

 res.send("Registro removido com sucesso!");
});

const port = process.env.PORT; || 3000;
app.listen(port, function (){
  console.log("Servidor rodando na porta:" + port);
});
}

main();