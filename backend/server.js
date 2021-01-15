import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const app = express()

app.use(express.json())
app.use(cors())

const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstackeletro"
})

app.get("/tbl_produtos", (req, res) => {
    connect.query("SELECT * FROM tbl_produtos", (error, result) => {
        if(error){
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

app.listen(3333)

