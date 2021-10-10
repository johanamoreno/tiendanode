const {request, response}=require('express')

function registrarHabitacion(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy registrando una habitacion"
        }
    )
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