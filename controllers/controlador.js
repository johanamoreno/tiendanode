const {request, response}=require('express')

function registrarReserva(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy registrando una reserva"
        }
    )
}

function buscarReserva(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando una reserva"
        }
    )

}

function buscarReservas(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todas las reservas"
        }
    )

}

function editarReserva(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando una reserva"
        }
    )

}

function eliminarReserva(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando una reserva"
        }
    )

}

module.exports={
    registrarReserva,
    buscarReserva,
    buscarReservas,
    editarReserva,
    eliminarReserva
}
