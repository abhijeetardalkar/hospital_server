import {getConn} from "../config/mysqlClient.js";

const noteModel = {};

noteModel.getNote = async () => {
  try {
    let conn = await getConn();
    // simple query
    let t = await conn.query("SELECT * FROM note");
    // console.log(t);
    return t[0];
  } catch (error) {
    console.log(error);
  }
};

export default  noteModel;
