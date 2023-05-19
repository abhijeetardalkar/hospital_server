import { getConn } from "../config/mysqlClient.js";
import { executeProcedure } from "../utils/executeProcedure.js";

const adminModel = {};

adminModel.getAdmins = async () => {
  try {
    let conn = await getConn();
    return await executeProcedure(conn, null, "admin_select(0)");
  } catch (error) {
    console.log(error);
  }
};

adminModel.getAdmin = async (input) => {
  try {
    let conn = await getConn();
    console.log({ input });
    return await executeProcedure(conn, input, "admin_select(?)");
  } catch (error) {
    console.log(error);
  }
};

adminModel.insertAdmin = async (input) => {
  try {
    let conn = await getConn();
    // console.log({ input });
    return await executeProcedure(
      conn,
      input,
      "admin_insert(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    );
  } catch (error) {
    // console.log({ error });
    return { error };
  }
  // {
  //   "login_id":"pat_4" ,
  // "password" :"test",
  // "first_name":"Imran" ,
  // "middle_name":"F" ,
  // "last_name":"Khan" ,
  // "mobile":"8579452189" ,
  // "email":null ,
  // "dob"  :null,
  // "aadhar" :null,
  // "pincode" :null,
  // "address" :null,
  // "gender":null  ,
  // "height" :null,
  // "weight" :null,
  // "disease" :null,
  // "exercise":null ,
  // "dietlan" :null,
  // "smoke":null
  // }
};
adminModel.updateAdmin = async (input) => {
  try {
    let conn = await getConn();
    // console.log({ input });
    return await executeProcedure(
      conn,
      input,
      "admin_update(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
    );
  } catch (error) {
    console.log(error);
  }
  // {
  //   "login_id":"pat_4" ,
  // "password" :"test",
  // "first_name":"Imran" ,
  // "middle_name":"F" ,
  // "last_name":"Khan" ,
  // "mobile":"8579452189" ,
  // "email":null ,
  // "dob"  :null,
  // "aadhar" :null,
  // "pincode" :null,
  // "address" :null,
  // "gender":null  ,
  // "height" :null,
  // "weight" :null,
  // "disease" :null,
  // "exercise":null ,
  // "dietlan" :null,
  // "smoke":null,
  // "pat_id":null
  // }
};
adminModel.updateDoctorActivation = async (input) => {
  try {
    let conn = await getConn();
    console.log({ input });
    return await executeProcedure(
      conn,
      input,
      "doctor_activation_update(?,?,?)"
    );
  } catch (error) {
    console.log(error);
  }
};
adminModel.updateUserPassword = async (input) => {
  try {
    let conn = await getConn();
    console.log({ input });
    // with bcrypt
    return await executeProcedure(
      conn,
      input,
      "user_password_update_step1_enc(?,?,?,?)"
    );
    return await executeProcedure(conn, input, "user_password_update(?,?,?,?)");
  } catch (error) {
    console.log(error);
  }
};
adminModel.updateUserPasswordStep2 = async (input) => {
  try {
    let conn = await getConn();
    console.log({ input });
    // with bcrypt
    return await executeProcedure(
      conn,
      input,
      "user_password_update_step2_enc(?,?,?)"
    );
  } catch (error) {
    console.log(error);
  }
};

export default adminModel;
