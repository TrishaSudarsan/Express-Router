const express = require('express')
const app = express()
const secondPage = require('./secondPage')
const servicePage= require('./service.js')
app.get('/',(request,response) =>{
    response.send("GET Router on Home Page")
    
})
app.use('/secondPage',secondPage)
app.use('/service',servicePage)
app.listen(3500)
