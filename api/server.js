const express = require("express")
const routerCars = require("./cars/cars-router");

const server = express()

server.use(express.json());
server.use(express.Router());

server.use("/api/cars", routerCars);

server.get("*", (req, res)=>{
    res.status(404).json({message:`${req.path} path not found`});
})

module.exports = server
