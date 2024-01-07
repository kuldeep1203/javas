const express = require('express');

const app = express();
app.post('/', (req, res) => {
    res.send("hello world")
})

app.post('/conversation\s', (req, res) => {
    console.log(res.headers["authorizations"])
    res.send("hello world")
})
 
app.listen(3000,()=>{
    console.log("listening on port 3000")
})