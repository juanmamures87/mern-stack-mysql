import { Router } from "express";
import { pool } from "../db.js";

//Creamos una ruta
const router = Router();

router.get("/ping", async (req, res) => {
  const [rows] = await pool.query("SELECT 2 * 2 as Result");
  console.log(rows[0].Result);
  res.json(rows[0].Result);
});

export default router;
