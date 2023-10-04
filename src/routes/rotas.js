const express = require("express");
const { listar, detalhar } = require("../controllers/controladores");
const rotas = express();

rotas.get("/pokemon", listar);
rotas.get("/pokemon/:id", detalhar);
module.exports = rotas;
