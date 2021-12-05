const modelCars = require("./cars-model");
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try{
    const {id} = req.params;
    const cars = await modelCars.getById(id);
    req.car = cars[0];
    if (Boolean(req.car)){
      next();
    }else{
      res.status(404).json({message:`${id} not found`});
    }
  }catch(err){
    next(err);
  }
}

const checkCarPayload = (req, res, next) => {
  try{
    const {vin, make, model, mileage, title, transmission} = req.body;
    if (!vin){
      res.status(400).json({message:"vin is missing"});
    }
    else if (!make){
      res.status(400).json({message:"make is missing"});
    }
    else if (!model){
      res.status(400).json({message:"model is missing"});
    }
    else if (!mileage){
      res.status(400).json({message:"mileage is missing"});
    }else if (typeof(Number(mileage)) !== "number"){  
      res.status(400).json({message:"mileage must be a number"});
    }else if (Number(mileage) < 0 || Number(mileage) > 1e6 ){
      res.status(400).json({message:"mileage must be between 0 and a million"});
    }else{
      req.newCar = {vin, make, model, mileage, title : Boolean(title) ? title.trim() : null , transmission : Boolean(transmission) ? transmission.trim() : null};
      next();
    }
  }catch(err){
    next(err);
  }
}

const checkVinNumberValid = (req, res, next) => {
  try{
    const {vin} = req.body;
    if (vinValidator.validate(vin.trim())===false){
      res.status(400).json({message:`vin ${vin} is invalid`});
    }else{
      next();
    }
  }catch (err){
    next(err);
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
      const new_id = await modelCars.create(req.newCar);
      const createdCar = await modelCars.getById(new_id);
      req.createdCar = createdCar[0];
      next();
  }catch( err){
    res.status(400).json({message:`vin ${req.body.vin} already exists`});
  }
}

module.exports = {checkCarId, checkCarPayload,checkVinNumberUnique,checkVinNumberValid};