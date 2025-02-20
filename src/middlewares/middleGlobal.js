
export function security(req, res, next)
{
    res.locals.dadosGlobal=['acessivel a todas as rotas'];
    console.log('passei no middle global');
    next();
}
export function checkCsrfError(err, req, res, next)
{

    if(err && err.code=== 'EBADCSRFTOKEN'){
        return res.render('404')
    }
}


export function logger(req, res, next)
{
    console.log(`${req.method}, ${req.url} - ${new Date()}`);
    next();
}