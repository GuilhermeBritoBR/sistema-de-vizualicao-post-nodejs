const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const app = express();

// Configuração do MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'phpmyadmin',
    password: 'flamengo',
    database: 'db',
});

connection.connect();

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Rota para buscar dados no MySQL e renderizar a página .ejs
app.get('/', (req, res) => {
    connection.query('SELECT nome , senha, email, type  FROM tabela', (err, rows) => {
        if (err) throw err;
        res.render('pages/index', { data: rows });
    });
});

app.listen(3000, () => {
    console.log('Servidor Node.js rodando em http://localhost:3000');
});
