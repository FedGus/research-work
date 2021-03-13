const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const csv = require('csv-parser');
const app = express();
const history = require("connect-history-api-fallback");
const port = process.env.PORT || 8085;

// Парсинг json
app.use(bodyParser.json());

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// Настройка CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, PATCH, PUT, POST, DELETE, OPTIONS"
    );
    next();
});


// Получение списка продуктов компании
app.get("/api/data", function (req, res) {
    let results = [];
    fs.createReadStream('data.csv')
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        })
});

app.use(history());

if (process.env.NODE_ENV === "production") {
    // Информирование о запуске сервера и его порте
    app
        .listen(port, () => {
            console.log("Сервер запущен на http://localhost:" + port);
        });
} else {
    // Информирование о запуске сервера и его порте
    app.listen(port, () => {
        console.log("Сервер запущен на http://localhost:" + port);
    });
}