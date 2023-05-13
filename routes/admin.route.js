import express from "express";
import asyncHandler from "express-async-handler";
import adminController from "../controllers/admin.controller.js";
const router = express.Router();

router.get("/allAdmins", asyncHandler(adminController.getAdmins));
router.post("/getAdmin", asyncHandler(adminController.getAdmin));
router.post("/insertAdmin", asyncHandler(adminController.insertAdmin));
router.post("/updateAdmin", asyncHandler(adminController.updateAdmin));
router.post(
  "/updateDoctorActivation",
  asyncHandler(adminController.updateDoctorActivation)
);
router.post(
  "/updateUserPassword",
  asyncHandler(adminController.updateUserPassword)
);

export default router;
