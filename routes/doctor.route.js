import express from "express";
import asyncHandler from "express-async-handler";
import doctorController from "../controllers/doctor.controller.js";
const router = express.Router();

router.get("/allDoctors", asyncHandler(doctorController.getDoctors));
router.get("/getDoctor", asyncHandler(doctorController.getDoctor));
router.post("/insertDoctor", asyncHandler(doctorController.insertDoctor));
router.post("/updateDoctor", asyncHandler(doctorController.updateDoctor));

export default router;
