const express = require('express');
const app=express();
const port = 3000;

app.listen(port,()=>{ 
    console.log(`server is running at ${port}`)
})

app.get("/",(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>Hello this is home page</h1>")
})

// app.get("/about",(req,res)=>{
//     res.send("<h1> this is about me page</h1>")
// })

// app.get("/contactme",(req,res)=>{
//     res.send("<h1>Conatct me</h1> <p> This is my phone no: 9154795120")
// })

app.post("/register",(req,res)=>{
    res.sendStatus(201);
})

app.put("/user/gowtham",(req,res)=>{
    res.sendStatus(200);
})

app.patch("/user/gowtham",(req,res)=>{
res.sendStatus(200);
})

app.delete("/user/gowtham",(req,res)=>{
    res.sendStatus(200);
})