import express from "express";
import asyncHandler from "express-async-handler";
import doctorController from "../controllers/doctor.controller.js";
const router = express.Router();

router.get("/allDoctors", asyncHandler(doctorController.getDoctors));
router.post("/getDoctor", asyncHandler(doctorController.getDoctor));
router.post("/getDoctorByID", asyncHandler(doctorController.getDoctorByID));
router.post("/insertDoctor", asyncHandler(doctorController.insertDoctor));
router.post("/updateDoctor", asyncHandler(doctorController.updateDoctor));
router.post(
  "/createAppointment",
  asyncHandler(doctorController.createAppointment)
);

router.post("/getAppointment", asyncHandler(doctorController.getAppointment));
router.post(
  "/getAppointmentByDoctor",
  asyncHandler(doctorController.getAppointmentByDoctor)
);
router.post(
  "/getAppointmentByPatient",
  asyncHandler(doctorController.getAppointmentByPatient)
);
router.post(
  "/getAppointmentByDoctorPatient",
  asyncHandler(doctorController.getAppointmentByDoctorPatient)
);

export default router;
