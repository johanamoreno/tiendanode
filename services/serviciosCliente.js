const ReservaModelo = require('../models/ReservaModelo.js')

async function insertarReserva(datosReserva){

    let reservaAInsertar= new ReservaModelo(datosReserva)

    return await reservaAInsertar.save()

}

module.exports={
    insertarReserva
}