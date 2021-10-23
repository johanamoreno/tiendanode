const {model,Schema}=require('mongoose')

const HabitacionModelo=Schema({
    nombre:{
        type:String,
        require:true
    },
    foto:{
        type:String,
        require:true},
    descripcion:{
        type:String,
        require:true
    },
    precioadulto:{
        type:String,
        require:true
    },
    precioniño:{
        type:String,
        require:true
    }
})

module.exports=model('habitaciones', HabitacionModelo)