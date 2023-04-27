var express = require('express');
var router = express.Router();

// routes
router.post('/metodo/:m/:n', calcularIterativo);
//router.post('/calcularRecursivo/:m/:n', calcularRecursivo);
    
module.exports = router;


function calculaProdutorio(req, res){
    var metodoExecucao = req.params.metodo;
    let m = parseInt(req.params.m);
    let n = parseInt(req.params.n);

    let produto = 1.0;

    if(metodoExecucao == 'iterativo')
        produto = calculaIterativo(m, n);
    else()
        produto = calculaRecursivo(m, n);

    res.send(JSON.stringfy({produto}));    

}

function calculaIterativo(m,n){
    let multiplicacao = 1.0;
    for(let i=m;i<=n;i++)
        multiplicacao = multiplicacao * (i+(1.0/i));
    
    return multiplicacao;

}

function calculaRecursivo(m,n){
    if(m==n)
        return m + (1.0/m);
    else
        return (m + (1.0/m)) * calculaRecursivo(m+1, n);
}


/*
function requisicaoIterativa(req, res) {
    let m = parseInt(req.params.m);
    let n = parseInt(req.params.n);
    let multiplicacao = 1.0;

    for(let i=m;i<=n;i++)
        multiplicacao = multiplicacao * (i+(1.0/i));
    res.send(JSON.stringfy({multiplicacao}));
}

function requisicaoRecursivo(req, res) {
    let m = parseInt(req.params.m);
    let n = parseInt(req.params.n);
    let multiplicacao = 1.0;

    if(m==n)
        multiplicacao = m + (1.0/m);
    else
        multiplicacao = (m + (1.0/m)) * calcularRecursivo(m+1, n)

    res.send(JSON.stringfy({multiplicacao}));
}

function calcularRecursivo(req, res) {
    if(m==n)
        return m + (1.0/m);
    else
        return (m + (1.0/m)) * calcularRecursivo(m+1, n);
}
/*