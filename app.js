const express = require('express')
const app = express()
const port = 3001
const dbConnection = require('./config/DbConnection')
const userRouter = require ('./Routes/UserRoute')

app.use(express.json());
app.use('/user',userRouter)
app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`)
})