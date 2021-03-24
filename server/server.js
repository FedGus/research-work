const fs = require('fs');
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const csv = require('csv-parser');
const app = express();
const history = require("connect-history-api-fallback");
const port = process.env.PORT || 8085;
const fileUpload = require("express-fileupload");
const uniqueFilename = require("unique-filename");
const serveStatic = require("serve-static");
// Парсинг json
app.use(bodyParser.json());

// Загрузка файлов
app.use(
    fileUpload({
        createParentPath: true,
    })
);

// Обработка статических файлов
app.use("/", serveStatic(path.join(__dirname, "../dist/project")));

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


// Получение данных из файла
app.get("/api/data", function (req, res) {
    let results = [];
    fs.createReadStream('data.csv')
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        })
});

// Получение файла и загрузка его в папку uploads
app.post("/api/upload", async (req, res) => {
    console.log("Пришёл POST запрос для загрузки файла:");
    console.log("Файл: ", req.files);
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: "No file uploaded",
            });
        } else {
            let photo = req.files.file;
            let name = "." + photo.name.split(".")[1];
            photo.mv("data" + name);
            res.send({
                status: true,
                message: "File is uploaded",
                filename: name,
            });
        }
    } catch (err) {
        console.log("Ошибка ", err);
        res.status(500).send(err);
    }
});

app.use(history());

if (process.env.NODE_ENV === "production") {
    // Информирование о запуске сервера и его порте
    // Информирование о запуске сервера и его порте
    app
        .use("/", serveStatic(path.join(__dirname, "../dist/project")))
        .listen(port, () => {
            console.log("Сервер запущен на http://localhost:" + port);
        });
} else {
    // Информирование о запуске сервера и его порте
    app.listen(port, () => {
        console.log("Сервер запущен на http://localhost:" + port);
    });
}