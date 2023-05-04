import express from "express";
const router = express.Router(); // eslint-disable-line new-cap
import articleRoutes from "./article.route.js";
import noteRoutes from "./note.route.js";
import doctorRoutes from "./doctor.route.js";
import patientRoutes from "./patient.route.js";
import userRoutes from "./user.route.js";
import userAdmin from "./admin.route.js";
/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => {
  console.log("dgfd");
  res.send("OK");
});
router.use("/blog", articleRoutes);
router.use("/note", noteRoutes);
router.use("/doctor", doctorRoutes);
router.use("/patient", patientRoutes);
router.use("/user", userRoutes);
router.use("/admin", userAdmin);

export default router;
