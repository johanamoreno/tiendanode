const {request, response}=require('express')
const {insertarHabitacion}=require('../services/serviciosHabitacion.js')

async function registrarHabitacion(peticion=request,respuesta=response){

    let datosCliente=peticion.body;
    
    try{

        await insertarHabitacion(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Habitacion registrada con exito"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error registrando habitacion"+error
        })

    }
}

function buscarHabitacion(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando una habitacion"
        }
    )

}

function buscarHabitaciones(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todas las habitacicones"
        }
    )

}

function editarHabitacion(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando una habitacion"
        }
    )

}

function eliminarHabitacion(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando una habitacion"
        }
    )

}

module.exports={
    registrarHabitacion,
    buscarHabitacion,
    buscarHabitaciones,
    editarHabitacion,
    eliminarHabitacion
}