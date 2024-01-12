const express = require('express');
const app = express(); 
//app.use - basically if u have to use middleware everywhere
//rate limiter we can control the use of roite
// function userauth(req, res, next) {//next makes sure that if it has passed this then it goes to the next middleware/callback func
//     const username = req.headers.username;
//     const password = req.headers.password;
//     if(username=='kuldeep' && password=='pass'){
//         res.status(403).json({msg:"not approved 1"})  
//     }
//     else{
//         next();
//     }
// }
// function kidney(req, res, next){
//     const kidneyId=req.query.kidneyId;
//     if(kidneyId==1||kidneyId==2){
//         next();
//     }
//     else{
//         res.status(403).json({msg:"not approved"})  
//     }
    
// }

// app.get("/health-checkup",userauth,kidney,(req, res) => { //route handler 
    
    
  
    
// })
let n=0;
function Count(req,res,next){
    n++;
    console.log(n);
}
app.use(Count)
app.post('/',(req, res) => {
    
})

app.listen(3000);