var express = require("express");
var router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage;

router.post("/new", function(req, res, next) {
    var body = req.body;
    // id construido con datos de la req
    var id = `${body.name}-${body.lastName}-${body.phone}`;
    localStorage = new LocalStorage('./scratch');
    localStorage.setItem(id, JSON.stringify(body));
    res.send("Contacto creado");
});

module.exports = router;