// Express basics

const express = require('express');
const bodyParser = require('body-parser');
const app = express();



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())



app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>');
})
 
app.get('/about',(req,res)=>{
    res.json({
        name:'Tuhin'
    });
});

app.post('/login',(req,res)=>{
    console.log(req.body);

    res.send('Login succesfull');
})

app.listen(3000,()=> console.log('Server is running at port 3000'));
 