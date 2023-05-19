import { getConn } from "../config/mysqlClient.js";
import { executeProcedure } from "../utils/executeProcedure.js";

const userModel = {};

userModel.userLogin = async (input) => {
  try {
    let conn = await getConn();
    // simple query

    // return await executeProcedure(conn, input, "login_with_type(?,?,?)");
    // return with hash
    return await executeProcedure(conn, input, "login_with_type_enc(?,?)");
  } catch (error) {
    console.log(error);
  }
};

export default userModel;
