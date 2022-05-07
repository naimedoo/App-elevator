const express = require('express');
const app = express();
const port = 3003;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Lift');
const cors = require('cors');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

app.listen(port,()=> {
    console.log('App in istening on :', port )
})

  const loginSchema = new mongoose.Schema({
    "email":String,
     "password": {
        type:String,
        min:8
    },
    })

const LoginModel = mongoose.model("login",loginSchema)

app.post('/login',async(req,res,next) => {
    const body = req.body;
    console.log(body)
    const newSign = new LoginModel(body)
    try {
        const sign = await newSign.save()
        res.json(sign)
    }catch(err) {
        console.log(err)
        res.status(500).send("internal server error")
    }
})
