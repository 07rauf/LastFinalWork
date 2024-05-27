const fs = require('fs');
const express = require('express');
const cors =require('cors')
const user = fs.readFileSync('./data.json');

const users = JSON.parse(user);

const app = express();
app.use(cors())
app.get('/users', (req,res)=>{
    res.json(users)
})
app.listen(5000, ()=>{
})