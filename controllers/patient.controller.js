import patientModel from "../models/patient.model.js";
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

    const user_data = await patientModel.insertPatient(input);
    console.log({ user_data });
    res.status(200).json({
      user_data: user_data,
    });
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
