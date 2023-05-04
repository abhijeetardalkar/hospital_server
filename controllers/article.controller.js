/* eslint-disable no-warning-comments */

import articleModel from "../models/article.model.js";

const articleController = {};

articleController.getArticle = async (req, res) => {
  try {
    const article_data = await articleModel.getArticle();
    res.status(200).json({
      article_data: article_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
articleController.getArticles = async (req, res) => {
  try {
    let { id, type } = req?.body;
    let input = { id, type };
    console.log("article>", { input });
    const article_data = await articleModel.getArticles(input);
    res.status(200).json({
      article_data: article_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
articleController.insertArticle = async (req, res) => {
  try {
    let { title, message, type, file_url, date, date_to, active } = req?.body;
    let input = { title, message, file_url, type, date_to, active };
    console.log({ input });

    const article_data = await articleModel.insertArticle(input);
    res.status(200).json({
      article_data: article_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default articleController;
