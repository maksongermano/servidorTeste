const professores = require('../bancoDeDados')

const filtrarProfessores = (req, res)=> {
    const { disciplina } = req.query;
   let resultado = professores;
   console.log('chaeguei no controlador de listagem do professor');
   if (disciplina) {
  resultado = professores.filter((professor) => {
  return professor.disciplina === disciplina
  });
   }
  res.send(resultado);
  };


const encontrarUmProfessor =  (req, res)=> {
    console.log('rota para encontrar um professor');
        const professorEncontrado = professores.find((professor)=>{
     return professor.id === Number(req.params.id)
        });
     
        
         res.send(professorEncontrado);
    }
    const novoControlador = (req, res) => {

    }
    module.exports = {
        filtrarProfessores,
        encontrarUmProfessor,
        novoControlador
    }