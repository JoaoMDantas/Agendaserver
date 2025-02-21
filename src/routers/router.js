import express from 'express';
export const route= express.Router();
import { paginaInicial, tratamento } from '../controllers/homeController.js';
import { loguinRequired } from '../controllers/loguinController.js';
import { dados } from '../controllers/contatos.js';


// rotas home
route.get('/', paginaInicial);
route.post('/', tratamento);

// rotas loguin
route.get('/loguin', loguinRequired);


// rotas contato
route.get('/contato', dados);

route.all('*', (req, res) => {
    res.status(404).render('404',{ url: req.url});
});