import { getConn } from "../config/mysqlClient.js";
import { executeProcedure } from "../utils/executeProcedure.js";

const patientModel = {};

patientModel.getPatients = async () => {
  try {
    let conn = await getConn();
    return await executeProcedure(conn, null, "patient_select(0)");
  } catch (error) {
    console.log(error);
  }
};

patientModel.getPatient = async (input) => {
  try {
    let conn = await getConn();
    console.log({ input });
    return await executeProcedure(conn, input, "patient_select(?)");
  } catch (error) {
    console.log(error);
  }
};

patientModel.insertPatient = async (input) => {
  try {
    let conn = await getConn();
    // console.log({ input });
    return await executeProcedure(
      conn,
      input,
      "patient_insert(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
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
  // "smoke":null
  // }
};

export default patientModel;
