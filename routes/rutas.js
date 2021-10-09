const {Router} = require('express')

const rutas=Router()


rutas.get('/avanzada/v1/reserva', function (req, res) {
    res.send('Peticion de tipo GET (Para buscar todas las reservas)')
})

rutas.get('/avanzada/v1/reserva/id', function (req, res) {
    res.send('Peticion de tipo GET (Para buscar una reserva)')
  })           
  
rutas.post('/avanzada/v1/reserva', function (req, res) {
      res.send('Peticion de tipo POST (Para Insertar reeserva)')
  })
  
rutas.put('/avanzada/v1/reserva/id', function (req, res) {
      res.send('Peticion de tipo PUT (Para Editar reserva)')
  })
  
rutas.delete('/avanzada/v1/reserva/id', function (req, res) {
      res.send('Peticion de tipo DELETE (Para Eliminar reserva)')
  })

module.exports=rutas