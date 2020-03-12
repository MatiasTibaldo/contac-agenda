var express = require("express");
var router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage;

router.post("/new", function(req, res, next) {
    var body = req.body;
    // id construido con datos de la req
    var id = `${body.name}-${body.lastName}-${body.birthDate}-${body.email}-${body.phone}`;
    localStorage = new LocalStorage('./scratch');
    localStorage.setItem(id, JSON.stringify(body));
    res.send("Contacto creado");
});

router.get("/list", function(req, res, next) {
    localStorage = new LocalStorage('./scratch');
    var archive = [];
    for (var i = 0; i<localStorage.length; i++) {
        archive[i] = localStorage.getItem(localStorage.key(i));
    }
    res.json(archive);
});


router.put("/edit/:id", (req, res) =>{
    localStorage = new LocalStorage('./scratch');
    var body = req.body;
    // Obtiene el contacto anterior y lo elimina, porque cambiando un parametro cambia el id
    const idContact = req.params.id;
    localStorage.removeItem(idContact);
    // Guarda un nuevo contacto
    var id = `${body.name}-${body.lastName}-${body.birthDate}-${body.email}-${body.phone}`;
    localStorage.setItem(id, JSON.stringify(body));   
    res.send("Contacto actualizado");
});

router.delete("/delete/:id", (req, res) =>{
    localStorage = new LocalStorage('./scratch');
    var body = req.body;
    // Obtiene el contacto y lo elimina
    const idContact = req.params.id;
    localStorage.removeItem(idContact);
    res.send("Contacto eliminado");
});


module.exports = router;