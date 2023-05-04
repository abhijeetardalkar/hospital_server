import express from "express";
import asyncHandler from "express-async-handler";
import noteController from "../controllers/note.controller.js";

const router = express.Router();

router.get("/allnotes", asyncHandler(noteController.getNote));
router.post("/getNotes", asyncHandler(noteController.getNotes));
router.post("/insertnote", asyncHandler(noteController.insertNote));

export default router;
