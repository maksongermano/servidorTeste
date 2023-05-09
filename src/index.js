const express = require('express');
const  controladorDeProfessores = require('./controladores/professores');



const app = express();

const primeiroIntermediario = (req, res, next) => {
  console.log('passei no meu primeiro intermediário');
  next();
  }

const segundoIntermediario = (req, res, next) => {
  console.log('passei no meu segundo intermediário');
  next();
  }

  const intermediarioDaRota = (req, res, next) => {
    console.log('passei no intermediário da rota');
    next();
    }

app.use(primeiroIntermediario);
app.use(segundoIntermediario);

//localhost:3000/professores
app.get('/professores',intermediarioDaRota,  controladorDeProfessores.filtrarProfessores);

//id = parametro de rota
app.get('/professores/:id', controladorDeProfessores. encontrarUmProfessor);

  
app.listen(3000);
