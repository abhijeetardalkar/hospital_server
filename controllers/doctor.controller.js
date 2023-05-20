import doctorModel from "../models/doctor.model.js";
import bcrypt from "bcrypt";
import Cryptr from "cryptr";
import {
  SALT_ROUND,
  decryptField,
  encryptField,
  revertEncryption,
} from "../utils/commonFunctions.js";

const doctorController = {};

doctorController.getDoctors = async (req, res) => {
  try {
    // console.log(req.body, req.query);
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
doctorController.getDoctorByID = async (req, res) => {
  try {
    let input = { id: req.body.id };
    const doc_data = await doctorModel.getDoctorByID(input);
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

    let fields = ["remark", "symptom_desc", "treatment_desc"];
    const SECRET_KEY = process.env.SECRET;
    const cryptr = new Cryptr(SECRET_KEY);
    // console.log({ doc_data });

    revertEncryption(doc_data, fields, cryptr);

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
    const shouldDecrypt = req.body.decrypt;
    // console.log("ABHII>>>>>>>>>>", { shouldDecrypt });
    const doc_data = await doctorModel.getAppointmentByDoctor(input);
    // console.log({ input, doc_data });
    if (shouldDecrypt) {
      let fields = ["remark", "symptom_desc", "treatment_desc"];
      const SECRET_KEY = process.env.SECRET;
      const cryptr = new Cryptr(SECRET_KEY);
      // console.log({ doc_data });

      revertEncryption(doc_data, fields, cryptr);
    }
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
    // console.log(doc_data);
    let fields = ["remark", "symptom_desc", "treatment_desc"];
    const SECRET_KEY = process.env.SECRET;
    // console.log("KEY++++++", SECRET_KEY);
    //   var iv = Cryptr.randomBytes(16);
    const cryptr = new Cryptr(SECRET_KEY);
    revertEncryption(doc_data, fields, cryptr);

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
    // console.log({ input });

    // insert pwd with hash
    bcrypt.hash(input.password, SALT_ROUND, async function (err, hash) {
      // Store hash in your password DB.
      input.password = hash;
      const doc_data = await doctorModel.insertDoctor(input);
      res.status(200).json({
        doc_data: doc_data,
      });
    });

    // const doc_data = await doctorModel.insertDoctor(input);
    // res.status(200).json({
    //   doc_data: doc_data,
    // });
  } catch (ex) {
    console.log(ex);
  }
};
doctorController.createAppointment = async (req, res) => {
  try {
    let { ...input } = req?.body;
    // console.log({ input });
    const SECRET_KEY = process.env.SECRET;
    // console.log("KEY++++++", SECRET_KEY);
    //   var iv = Cryptr.randomBytes(16);
    const cryptr = new Cryptr(SECRET_KEY);

    let _remark = encryptField(input.remark, cryptr);
    let _symptom_desc = encryptField(input.symptom_desc, cryptr);
    let _treatment_desc = encryptField(input.treatment_desc, cryptr);
    input.remark = _remark;
    input.symptom_desc = _symptom_desc;
    input.treatment_desc = _treatment_desc;
    // console.log({ input });
    // console.log("DECRY", decryptField(_treatment_desc));

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
    // console.log({ input });
    const doc_data = await doctorModel.updateDoctor(input);
    res.status(200).json({
      doc_data: doc_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
export default doctorController;
