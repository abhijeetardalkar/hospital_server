import express from "express";
const router = express.Router(); // eslint-disable-line new-cap
import noteRoutes from "./note.route.js";
import doctorRoutes from "./doctor.route.js";
import patientRoutes from "./patient.route.js";
/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => {
  console.log("dgfd");
  res.send("OK");
});
router.use("/note", noteRoutes);
router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);

export default router;
