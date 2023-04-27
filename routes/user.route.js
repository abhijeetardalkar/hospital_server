import express from "express";
import asyncHandler from "express-async-handler";
import userController from "../controllers/user.controller.js";

const router = express.Router();

// router.get("/allnotes", asyncHandler(noteController.getNote));
router.post("/login", asyncHandler(userController.userLogin));

export default router;
