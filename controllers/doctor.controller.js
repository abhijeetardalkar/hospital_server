import doctorModel from "../models/doctor.model.js";
const doctorController = {};

doctorController.getDoctors = async (req, res) => {
  try {
    console.log(req.body, req.query);
    const doc_data = await doctorModel.getDoctors();
    res.status(200).json({
      user_data: doc_data,
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
      user_data: doc_data,
    });
  } catch (error) {
    console.log(error);
  }
};
doctorController.getAppointment = async (req, res) => {
  try {
    // let input = { id: req.body.id };
    let input = {
      visit_id: req.body.visit_id,
      visit_date: req.body.visit_date,
      visit_date2: req.body.visit_date2,
    };
    const doc_data = await doctorModel.getAppointment(input);
    res.status(200).json({
      user_data: doc_data,
    });
  } catch (error) {
    console.log(error);
  }
};
doctorController.getAppointmentByPatient = async (req, res) => {
  try {
    let input = {
      pat_id: req.body.pat_id,
      visit_date: req.body.visit_date,
      visit_date2: req.body.visit_date2,
    };
    const doc_data = await doctorModel.getAppointmentByPatient(input);
    res.status(200).json({
      history_data: doc_data,
    });
  } catch (error) {
    console.log(error);
  }
};
doctorController.getAppointmentByDoctor = async (req, res) => {
  try {
    let input = {
      id: req.body.doc_id,
      visit_date: req.body.visit_date,
      equality: req.body.equality,
      visit_date2: req.body.visit_date2,
    };
    const doc_data = await doctorModel.getAppointmentByDoctor(input);
    res.status(200).json({
      history_data: doc_data,
    });
  } catch (error) {
    console.log(error);
  }
};
doctorController.getAppointmentByDoctorPatient = async (req, res) => {
  try {
    let input = { doc_id: req.body.doc_id, pat_id: req.body.pat_id };
    const doc_data = await doctorModel.getAppointmentByDoctorPatient(input);
    res.status(200).json({
      history_data: doc_data,
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
doctorController.createAppointment = async (req, res) => {
  try {
    let { ...input } = req?.body;
    console.log({ input });
    const doc_data = await doctorModel.createAppointment(input);
    res.status(200).json({
      doc_data: doc_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

doctorController.updateDoctor = async (req, res) => {
  try {
    let { ...input } = req?.body;
    console.log({ input });
    const doc_data = await doctorModel.updateDoctor(input);
    res.status(200).json({
      doc_data: doc_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
export default doctorController;
