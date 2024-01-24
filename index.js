import express from 'express'
import fs from 'fs'
let app = express()
let  PORT = process.env.PORT || 8000

app.get("/post-file",(req,res)=>{
    let path = "datetime"
    let filename = +new Date()
    let value = new Date().toISOString()
    fs.writeFileSync(`${path}/${filename}.txt`,`${value}`,"utf8")
    res.status(200).send({
        message:"time stamp file created successfully"
    })

})

app.get("/get-file",(req,res)=>{
    let path = "datetime"
    let files = fs.readdirSync(`${path}`)
    let fileValues = files.map((e)=>{
        return{
            FileName:e,
            FileValue:fs.readFileSync(`${path}/${e}`,"utf8")
        } 
    })
    res.status(200).send({
        message:"file values are as follows",
        fileValues:fileValues
    })
})

app.listen(PORT,()=>console.log(`app listening to port ${PORT}`))