const express=require('express')
 const app=express()
const port=8000
const routes=require('./src/router/router')
app.use(bodyParser.json());
app.use(express.json());


 
app.use('/rx group',routes)


 