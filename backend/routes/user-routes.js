import express from "express";
import { createuser, getallusers,updateuser,deleteuser } from "../controllers/personControls.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "gotto" });
  console.log("hai srujan");
});

router.post("/person", createuser);
router.get("/person", getallusers);
router.put("/person/:id",updateuser);
router.delete("/person/:id",deleteuser);
export default router;
