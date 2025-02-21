

export function checkCsrfError(err, req, res, next)
{
    

    if(err && err.code=== 'EBADCSRFTOKEN'){
        console.log(err+"error no csrf");
        return res.render('404')
    }
}
export function checkError(err, req, res, next)
{
    

    if(err ){
        console.log(err+"error geral");
        return res.render('404')
    }
}


export function csrfToken(req, res, next) 
{
    res.locals.csrfToken = req.csrfToken();
    next();
};


export function logger(req, res, next)
{
    console.log(`${req.method}, ${req.url} - ${new Date()}`);
    next();
}