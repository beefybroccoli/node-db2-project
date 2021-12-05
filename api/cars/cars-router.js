const middleware = require("./cars-middleware");
const modelCars = require("./cars-model");
const express = require('express');
const router = express();

router.get("/", async (req, res, next)=>{
    try{
        const cars = await modelCars.getAll();
        res.status(200).json(cars);
    }catch (err){
        next(err);
    }
})

router.get("/:id", middleware.checkCarId, async (req, res, next)=>{
    try{
        res.status(200).json(req.car);
    }catch (err){
        next(err);
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: `unknown error occured: ${err.message}`,
      stack: err.stack,
    })
  })

module.exports = router;
