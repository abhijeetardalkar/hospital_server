import express from "express";
import asyncHandler from "express-async-handler";
import patientController from "../controllers/patient.controller.js";
const router = express.Router();

router.get("/allPatients", asyncHandler(patientController.getPatients));
router.get("/getPatient", asyncHandler(patientController.getPatient));
router.post("/insertPatient", asyncHandler(patientController.insertPatient));
router.post("/updatePatient", asyncHandler(patientController.updatePatient));

export default router;
