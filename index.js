import express from 'express';

import homeController from './controllers/homeController.js';
import destaquesController from './controllers/destaquesController.js';
import perfilController from './controllers/perfilController.js';
import sinopseController from './controllers/sinopseController.js';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', homeController);
app.use('/', destaquesController);
app.use('/', perfilController);
app.use('/', sinopseController);


const port = 8080;
app.listen(port, (err) => {
    if(!err) console.log('http://localhost:8080');
});