const database = require('../models')
const Services = require('./Services')

class MatriculasServices extends Services{
    constructor(){
        super('Matriculas')
    }
    async pegaApenasUmaMatricula(estudanteId, id){
        database[this.nomeDoModelo].findOne(
            {where:{id:Number(id),
            estudante_id: Number(estudanteId)}}
        )
    }
}
module.exports = MatriculasServices