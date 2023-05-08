const express = require('express');

const app = express();

const professores = [
    
       
            {
              id: 1,
              nome: 'Ada Lovelace',
              idade: 36,
              disciplina: 'Frontend'
            },
            {
              id: 2,
              nome: 'Alan Turing',
              idade: 41,
              disciplina: 'Frontend'
            },
            {
              id: 3,
              nome: 'Grace Hopper',
              idade: 85,
              disciplina: 'Frontend'
            },
            {
              id: 4,
              nome: 'Linus Torvalds',
              idade: 51,
              disciplina: 'Frontend'
            },
            {
              id: 5,
              nome: 'Brendan Eich',
              idade: 60,
              disciplina: 'Frontend'
            },
            {
              id: 6,
              nome: 'Margaret Hamilton',
              idade: 85,
              disciplina: 'Frontend'
            },
            {
              id: 7,
              nome: 'Guido van Rossum',
              idade: 66,
              disciplina: 'Frontend'
            },
            {
              id: 8,
              nome: 'Yukihiro Matsumoto',
              idade: 57,
              disciplina: 'Frontend'
            },
            {
              id: 9,
              nome: 'Anders Hejlsberg',
              idade: 60,
              disciplina: 'Frontend'
            },
            {
              id: 10,
              nome: 'Rasmus Lerdorf',
              idade: 53,
              disciplina: 'Frontend'
            },
            {
              id: 11,
              nome: 'James Gosling',
              idade: 66,
              disciplina: 'backend'
            },
            {
              id: 12,
              nome: 'John Resig',
              idade: 38,
              disciplina: 'Frontend'
            },
            {
              id: 13,
              nome: 'Ryan Dahl',
              idade: 40,
              disciplina:'backtend'
            },
            {
              id: 14,
              nome: 'Bjarne Stroustrup',
              idade: 70,
              disciplina: 'Frontend'
            },
            {
              id: 15, nome: 'Tom Dale',idade: 36,     disciplina: 'Frontend'
            },
            {
              id: 16,nome: 'Evan You', idade: 36,
              disciplina: 'Frontend'
            }];

app.get('/professores', (req, res)=>{
res.send(professores);
});


app.get('/professores/:id', (req, res)=>{
   const professorEncontrado = professores.find((professor)=>{
return professor.id === Number(req.params.id)
   });

   
    res.send(professorEncontrado);
    });

    app.get('/array', (req, res)=>{
        const array = [1,2,3,5,6,8,9];
        res.send(array);
        });

app.listen(3000);
