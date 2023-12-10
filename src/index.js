import express from "express";
import { pool } from "./db.js";

const app = express()

const testDB = () => {
  pool.query("select 1")
  .then(() => console.log("Conexion exitosa"))
  .catch(() => console.log("Conexion fallida"))
}

testDB()

app.listen(3000, () => console.log("Server active"))