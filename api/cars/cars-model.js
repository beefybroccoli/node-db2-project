const db = require("../../data/db-config");

const getAll = async () => {
  return await db("cars").select("*");
}

const getById = async (id) => {
  return await db("cars").select("*").where("id", id);
}

const create = async(car) => {
  return await db("cars").insert(car);
}

const deleteById = async (id) => {
  return await db("cars").where("id", id).del();
}

module.exports = {getAll, getById, create, deleteById};