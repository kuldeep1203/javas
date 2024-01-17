const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  const userE=false;
  for(let i=0; i<ALL_USERS.length;i++){
    if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
      
      return true;
    }
  }
  return userE;

}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,//giving the token to the end user
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    res.json({
      users:ALL_USERS.filter((value)=>{
        if(value.username === username){
          return false;
        }
        else{
          return true;
        }
      })
    })
    // return a list of users other than this username
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
  
});

app.listen(3000)
//Ts are a good way of securely transmitting information between parties because they can be signed, which means you can be certain that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.