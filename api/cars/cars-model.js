const db = require("../../data/db-config");

const getAll = async () => {
  return await db("cars").select("*");
}

const getById = async (id) => {
  return await db("cars").select("*").where("id", id);
}

const create = () => {
  // DO YOUR MAGIC
}

module.exports = {getAll, getById, create};