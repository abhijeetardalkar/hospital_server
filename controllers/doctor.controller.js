import doctorModel from "../models/doctor.model.js";
const doctorController = {};

doctorController.getDoctors = async (req, res) => {
  try {
    console.log(req.body, req.query);
    const doc_data = await doctorModel.getDoctors();
    res.status(200).json({
      doctor_data: doc_data,
    });
  } catch (error) {
    console.log(error);
  }
};
doctorController.getDoctor = async (req, res) => {
  try {
    let input = { id: req.body.id };
    const doc_data = await doctorModel.getDoctor(input);
    res.status(200).json({
      doctor_data: doc_data,
    });
  } catch (error) {
    console.log(error);
  }
};

doctorController.insertDoctor = async (req, res) => {
  try {
    let { ...input } = req?.body;
    console.log({ input });
    const doc_data = await doctorModel.insertDoctor(input);
    res.status(200).json({
      doc_data: doc_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
export default doctorController;
