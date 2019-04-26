const express = require ('express');
const app = express();
//const http = require('http'); //o express que lida com o http

app.listen(3000, function (){
    console.log('Servidor rodando na porta 3000');
}); //callback que só será executado sempre que o servidor for iniciado


app.get('/', function(req, res){
    res.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Casa do Código</h1>
                </body>
            <html>`
    );
}); 

app.get('/livros', function(req, res){
    res.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Livros</h1>
                </body>
            <html>`
    );
}); 

//parametros: a rota a ser atendida e o callback
/*const servidor = http.createServer(function (req,res){
    
    let html=''; ///para  a callback
    if(req.url == '/'){
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>Casa do Código</h1>
                </body>
            <html>`;
    }else if (req.url == '/livros'){
        html = `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1>livros</h1>
                </body>
            <html>`;
            }
    res.end(html);
    });
servidor.listen(3000);*/
