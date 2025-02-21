import express from 'express';
export const route= express.Router();
import { paginaInicial, tratamento } from '../controllers/homeController.js';
import { loguinRequired } from '../controllers/loguinController.js';
import { dados, mongoContatos } from '../controllers/contatosController.js';


// rotas home
route.get('/', paginaInicial);
route.post('/', tratamento);

// rotas loguin
route.get('/loguin', loguinRequired);



// rotas contato
route.get('/contatos', dados);
route.post('/contatos', mongoContatos);

route.all('*', (req, res) => {
    res.status(404).render('404',{ url: req.url});
});