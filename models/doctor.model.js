import { getConn } from "../config/mysqlClient.js";
import { executeProcedure } from "../utils/executeProcedure.js";

const doctorModel = {};

doctorModel.getDoctors = async () => {
  try {
    let conn = await getConn();
    return await executeProcedure(conn, null, "doctor_select(0)");
  } catch (error) {
    console.log(error);
  }
};

doctorModel.getDoctor = async (input) => {
  try {
    let conn = await getConn();
    console.log({ input });
    return await executeProcedure(conn, input, "doctor_select(?)");
  } catch (error) {
    console.log(error);
  }
};

doctorModel.insertDoctor = async (input) => {
  try {
    let conn = await getConn();
    // console.log({ input });
    return await executeProcedure(
      conn,
      input,
      "doctor_insert(?,?,?,?,?,?,?,?,?,?,?,?)"
    );
  } catch (error) {
    console.log(error);
  }

  //   {
  //     "login_id":"pat_4" ,
  //   "password" :"test",
  //   "first_name":"Imran" ,
  //   "middle_name":"F" ,
  //   "last_name":"Khan" ,
  //   "mobile":"8579452189" ,
  //   "education_p":null
  // "specialty_p" :null
  //   "email":null ,
  //   "dob"  :null,
  //   "address" :null,
  //   "gender":null  ,

  // }
};
export default doctorModel;
