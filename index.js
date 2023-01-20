import express from "express";

const PORT = 5000;

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello" })  
    // res.json("Hello");
})

app.listen(PORT, () => console.log("Server was Started on Port: " + PORT))