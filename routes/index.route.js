import express  from "express";
const router = express.Router(); // eslint-disable-line new-cap
import noteRoutes from   "./note.route.js";
/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => {
    console.log("dgfd")
    res.send("OK")});
router.use("/note", noteRoutes);

export default router;
