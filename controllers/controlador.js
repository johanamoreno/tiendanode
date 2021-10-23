const {request, response}=require('express')
const {insertarReserva}=require('../services/serviciosCliente.js')

async function registrarReserva(peticion=request,respuesta=response){

    let datosCliente=peticion.body;

    try{

        await insertarReserva(datosCliente)
        respuesta.status(200).json({
            estado:true,
            mensaje:"Reserva registradaa con exito"
        })

    }catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"Error registrando reserva"+error
        })

    }
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
