const express = require('express')
const zod = require('zod')
const app = express()
app.listen(3000)
//zod
//for input validation

const schema =zod.array(zod.number());//basically input data shld be  [1,2,3....]
app.use(express.json());

app.post("/health-checkup",(req, res, next) => {
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    res.send({
        response
    })
})
