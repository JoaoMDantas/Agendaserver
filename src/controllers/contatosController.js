import { HomeModel } from "../model/HomeModel.js";
import { Contato } from "../model/ContatoModel.js";
import { name } from "ejs";
export function dados(req,res){
    res.render('contatos');

};

export function mongoContatos(req,res){
    req.session.user=
    {
        name:req.body.name,
        cargo:req.body.cargo,
        data:req.body.data,
        status:req.body.status,
        email:req.body.email

    };
    console.log(req.session.user);
    res.send(req.body);
    Contato.create
    ({
        name: req.body.name,
        cargo: req.body.cargo,
        data: req.body.data,
        status: req.body.status,
        email: req.body.email
      
    })
    
}