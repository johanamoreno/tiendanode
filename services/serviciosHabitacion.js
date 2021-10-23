const HabitacionModelo = require('../models/HabitacionModelo.js')

async function insertarHabitacion(datosHabitacion){

    let habitacionAInsertar= new HabitacionModelo(datosHabitacion)

    return await habitacionAInsertar.save()

}

module.exports={
    insertarHabitacion
}