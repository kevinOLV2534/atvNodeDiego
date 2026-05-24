import express from 'express';
import connection from './config/sequelize-config.js';

import homeController from './controllers/homeController.js';
import destaquesController from './controllers/destaquesController.js';
import perfilController from './controllers/perfilController.js';
import sinopseController from './controllers/sinopseController.js';
import autorController from './controllers/autorController.js';

import associations from './config/associations.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', homeController);
app.use('/', destaquesController);
app.use('/', perfilController);
app.use('/', sinopseController);
app.use('/', autorController);


connection.authenticate().then(()=>{
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch(error=>{
    console.log(error)
});

connection.query(`CREATE DATABASE IF NOT EXISTS sinopseFilmes`).then(()=>{
    console.log("Banco criado com sucesso!")
}).catch(error =>{
    console.log(error)
})

associations()


const port = 8080;
app.listen(port, (err) => {
    if(!err) console.log('http://localhost:8080');
});