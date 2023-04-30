import adminModel from "../models/admin.model.js";
const adminController = {};

adminController.getAdmins = async (req, res) => {
  try {
    const user_data = await adminModel.getAdmins();
    res.status(200).json({
      user_data: user_data,
    });
  } catch (error) {
    console.log(error);
  }
};
adminController.getAdmin = async (req, res) => {
  try {
    let input = { id: req.body.id };
    const user_data = await adminModel.getAdmin(input);
    res.status(200).json({
      user_data: user_data,
    });
  } catch (error) {
    console.log(error);
  }
};

adminController.insertAdmin = async (req, res) => {
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

    const user_data = await adminModel.insertAdmin(input);
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

adminController.updateAdmin = async (req, res) => {
  try {
    let { ...input } = req?.body;

    const user_data = await adminModel.updateAdmin(input);
    res.status(200).json({
      user_data: user_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default adminController;
