import patientModel from "../models/patient.model.js";
import bcrypt from "bcrypt";
import { SALT_ROUND } from "../utils/commonFunctions.js";
const patientController = {};

patientController.getPatients = async (req, res) => {
  try {
    const user_data = await patientModel.getPatients();
    res.status(200).json({
      user_data: user_data,
    });
  } catch (error) {
    console.log(error);
  }
};
patientController.getPatient = async (req, res) => {
  try {
    let input = { id: req.body.id };
    const user_data = await patientModel.getPatient(input);
    res.status(200).json({
      user_data: user_data,
    });
  } catch (error) {
    console.log(error);
  }
};
patientController.getPatientByID = async (req, res) => {
  try {
    let input = { id: req.body.id };
    const user_data = await patientModel.getPatientByID(input);
    res.status(200).json({
      user_data: user_data,
    });
  } catch (error) {
    console.log(error);
  }
};

patientController.insertPatient = async (req, res) => {
  try {
    let { ...input } = req?.body;

    // let input = {
    //   login_id,
    //   password,
    //   first_name,
    //   middle_name,
    //   last_name,
    //   mobile,
    //   email,
    //   dob,
    //   aadhar,
    //   pincode,
    //   address,
    //   gender,
    //   height,
    //   weight,
    //   disease,
    //   exercise,
    //   dietlan,
    //   smoke,
    // };
    // console.log({ input });
    // console.log({ req });

    bcrypt.hash(input.password, SALT_ROUND, async function (err, hash) {
      // Store hash in your password DB.
      input.password = hash;
      const user_data = await patientModel.insertPatient(input);
      res.status(200).json({
        user_data: user_data,
      });
    });
    // const user_data = await patientModel.insertPatient(input);
    // console.log({ user_data });
    // console.log({ input });
    return;
    // res.status(200).json({
    //   user_data: user_data,
    // });
  } catch (ex) {
    console.log({ ex });
    res.status(200).json({
      error: error,
    });
  }
};

patientController.updatePatient = async (req, res) => {
  try {
    let { ...input } = req?.body;

    const user_data = await patientModel.updatePatient(input);
    res.status(200).json({
      user_data: user_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default patientController;
