import express from 'express';
export const route= express.Router();
import { paginaInicial, tratamento } from '../controllers/homeController.js';
import { dados } from '../controllers/contatos.js';
import {darOi} from '../middlewares/security.js'


// rotas home
route.get('/',darOi, paginaInicial);
route.post('/', tratamento);


// rotas contato
route.get('/contato',darOi, dados);