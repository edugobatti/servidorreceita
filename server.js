require('dotenv').config();

const express = require('express');
const app = express();


app.use(express.json());
const axios = require("axios")


app.get("/",(req,res)=>{
    res.send("OK")
})


app.get("/cnpj/:documento", async(req,res)=>{
    try {
        console.log(req.params.documento)
      let consulta = await axios({method:"GET", url: `https://www.receitaws.com.br/v1/cnpj/${req.params.documento}`});
        res.send(consulta.data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500).send("erro")
    }
})

const porta = 3000
app.listen(process.env.PORT || porta, () =>
    console.log("Servidor Online / porta:" + porta)
);