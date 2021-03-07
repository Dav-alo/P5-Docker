const router = require('express').Router();
const express = require("express");
const app = express();


// importamos los routes
const integrantesRoute = require('./integrantes');
const homeRoute = require('./home');
const sumaRouter = require('./suma');
const restaRouter = require('./resta');
const multRouter = require('./mult');
const divRouter = require('./div');
const freeRouter = require('./free');

// paths con su propio route
router.use('/integrantes', integrantesRoute);
router.use('/home', homeRoute);

app.use('/suma', sumaRouter);
app.use('/resta', restaRouter);
app.use('/div', divRouter);
app.use('/mult', multRouter);
app.use('/free', freeRouter);



// path con retorno directo
router.use('/', (req, res) => 
{ 
    res.json(
        { 
            version: "0.0.1",
            paths: [
                "/integrantes",
                "/suma",
                "/resta",
                "/mult",
                "/free",
                "/div",

            ] 
        }
        ); 
}
)

module.exports = {
    sumaRouter,
    restaRouter,
    multRouter,
    divRouter,
    freeRouter,
}

module.exports = router;
