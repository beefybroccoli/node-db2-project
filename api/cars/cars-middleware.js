const modelCars = require("./cars-model");

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
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {checkCarId, checkCarPayload,checkVinNumberUnique,checkVinNumberValid};