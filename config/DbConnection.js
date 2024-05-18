const mongoose =  require('mongoose')



mongoose.connect('mongodb+srv://krishnadas10official:xQwxPDO2834uFPp3@cluster0.bhosyag.mongodb.net/todolist')
.then(()=>console.log('db connected '))
.catch((error)=>console.log(error))

module.exports = mongoose