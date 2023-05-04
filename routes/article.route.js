import express from "express";
import asyncHandler from "express-async-handler";
import articleController from "../controllers/article.controller.js";

const router = express.Router();

router.get("/allarticles", asyncHandler(articleController.getArticle));
router.post("/getArticles", asyncHandler(articleController.getArticles));
router.post("/insertarticle", asyncHandler(articleController.insertArticle));

export default router;
