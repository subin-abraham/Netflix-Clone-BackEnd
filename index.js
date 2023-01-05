const express =require('express');

const cors = require('cors')

const dataServices = require ('./services/dataServices')
 const app=express()

 app.use(express.json())

 app.use(cors({
    orgin:'http://http://localhost:4200'
 }))

 app.listen(3000, ()=>{
    console.log('listening on port 3000');
 })

 app.post('/register', (req,res)=>{
   console.log(req.body);
    dataServices.register(req.body.emailId, req.body.password)
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
 })

