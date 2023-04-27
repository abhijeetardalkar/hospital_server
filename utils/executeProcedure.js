// import getConn from "../config/mysqlClient";
import mysql from "mysql2";
const executeProcedure = async (conn, input = null, procedure) => {
  try {
    // console.log("Executing , ", procedure);
    let t = null;
    if (input) {
      t = await conn.query(`call ${procedure}`, Object.values(input));
    } else {
      t = await conn.query(`call ${procedure}`);
    }

    // console.log(t[0]);
    return t[0][0];
  } catch (err) {
    console.log({ err });
    return { error: err };
  }
};
export { executeProcedure };
