const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017')
    .then(()=> {console.log('DB ok')})
    .catch((err)=> console.log('DB error',err));


app.use(express.json());
app.get('/', (req,res)=> {
    res.send('Hello world 2')
})

app.post('/auth/login', (req,res)=> {
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Вася пупкин'
    },'secret123')
    res.json({
        success: true,
        token
    })
})

app.listen(4444, (err)=> {
    if(err) {
        return console.log(err)
    }
    console.log('<====Start server====>');
})