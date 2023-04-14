import patientModel from "../models/patient.model.js";
const patientController = {};

patientController.getPatients = async (req, res) => {
  try {
    const pat_data = await patientModel.getPatients();
    res.status(200).json({
      patient_data: pat_data,
    });
  } catch (error) {
    console.log(error);
  }
};
patientController.getPatient = async (req, res) => {
  try {
    let input = { id: req.body.id };
    const pat_data = await patientModel.getPatient(input);
    res.status(200).json({
      patient_data: pat_data,
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

    const pat_data = await patientModel.insertPatient(input);
    res.status(200).json({
      pat_data: pat_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

patientController.updatePatient = async (req, res) => {
  try {
    let { ...input } = req?.body;

    const pat_data = await patientModel.updatePatient(input);
    res.status(200).json({
      pat_data: pat_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default patientController;
