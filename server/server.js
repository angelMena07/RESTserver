require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))

//config global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err, res) => {

    if (err) throw err;

    console.log('base de datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log('escuchando el puerto: ', process.env.PORT);
});