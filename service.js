const express = require('express')
const router = express.Router()
router.get('/', (request, response) =>{
    response.send("This is service page")
})
router.get('/:id',(request, response) =>{
    const number=request.params.id;
    if(number==1){
        response.send('web development')
    }
    else if(number==2){
        response.send('App development')
    }
    else if(number==3){
        response.send('Digital marketing')
    }
    else if(number==4){
        response.send('Mern full stack')
    }
    else {
        response.send("invalid number")
    }
})
module.exports=router