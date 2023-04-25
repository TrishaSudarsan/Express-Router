const express = require('express')
const router = express.Router()
router.get('/', (request, response) =>{
    response.send("This is second page")
})
router.get('/:id',(request, response) =>{
    response.send("Passed Value is"+request.params.id)
})


module.exports = router