import { HomeModel } from "../model/HomeModel.js";

// HomeModel.create({
//     titulo:'Jesus me ama.',
//     descricao:'Ele me salvou.'
// })
// .then(dados=>console.log(dados)
// )
// .catch((e)=>console.log('erro no create homecontroller'+e));

export function paginaInicial(req,res)
{
    res.render('initialpage', {   
    });
    return; 
}
export function tratamento(req,res){
    req.session.user= {nome: req.body.cliente, on:true}
    console.log(req.session.user);
    res.send(req.body);
    return;

}