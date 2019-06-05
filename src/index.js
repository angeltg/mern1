const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const { mongoose } = require('./database');

// Steings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev')); //Para ver por consola las peticiones que llegan al servidor
app.use(express.json()); //Cada vez que llegue una peticion va comprovar que sean un json

// Routes
app.use('/api/staks',require('./routes/task.routes'));

// Static files Enviamos el html al cliente.
app.use(express.static(path.join(__dirname, 'public'))); //path.join Une las rutas independientemente de unix, windows.

// Starting the server

app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})