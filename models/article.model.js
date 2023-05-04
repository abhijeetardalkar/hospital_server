import { getConn } from "../config/mysqlClient.js";
import { executeProcedure } from "../utils/executeProcedure.js";

const articleModel = {};

articleModel.getArticle = async () => {
  try {
    let conn = await getConn();
    // simple query
    let t = await conn.query("SELECT * FROM article");
    console.log(t);
    return t[0];
  } catch (error) {
    console.log(error);
  }
};
articleModel.getArticles = async (input) => {
  try {
    let conn = await getConn();
    return await executeProcedure(conn, input, "article_select(?,?)");
  } catch (error) {
    console.log(error);
  }
};
articleModel.insertArticle = async (input) => {
  try {
    let conn = await getConn();
    // simple query
    return await executeProcedure(conn, input, "article_insert(?,?,?,?,?,?)");
  } catch (error) {
    console.log(error);
  }
};

export default articleModel;
