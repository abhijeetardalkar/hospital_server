import adminModel from "../models/admin.model.js";
import bcrypt from "bcrypt";
import { SALT_ROUND } from "../utils/commonFunctions.js";
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
    // console.log({ user_data });
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
adminController.updateDoctorActivation = async (req, res) => {
  try {
    let { ...input } = req?.body;

    const user_data = await adminModel.updateDoctorActivation(input);
    res.status(200).json({
      user_data: user_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
// with hash
adminController.updateUserPassword = async (req, res) => {
  try {
    let { ...input } = req?.body;
    // console.log({ input });
    // return;
    const user_data = await adminModel.updateUserPassword(input);

    // console.log("step1>>>> ", { user_data });
    if (user_data && user_data?.length) {
      if (user_data[0].result == 0) {
        user_data = null; //no user exist
      } else {
        let plain_password = input.password;
        let hashed = user_data[0].password;
        delete input.password;
        // console.log("step2", { input });

        // bcrypt the password and

        let new_password = input.password_new;
        // console.log({ new_password, hashed, plain_password });
        bcrypt.compare(plain_password, hashed).then(async (result) => {
          // console.log({ result });
          if (result) {
            // insert pwd with hash
            bcrypt.hash(new_password, SALT_ROUND, async function (err, hash) {
              // Store hash in your password DB.
              input.password_new = hash;
              // console.log("step2 saving...", { input });

              const _user_data = await adminModel.updateUserPasswordStep2(
                input
              );
              // console.log({ _user_data });
              res.status(200).json({
                user_data: _user_data,
              });
            });

            // console.log({ user_data });
          } else {
            res.status(200).json({
              user_data: null,
            });
          }
        });

        return;
      }
    }
    return;
    res.status(200).json({
      user_data: user_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
// adminController.updateUserPassword = async (req, res) => {
//   try {
//     let { ...input } = req?.body;

//     const user_data = await adminModel.updateUserPassword(input);
//     res.status(200).json({
//       user_data: user_data,
//     });
//   } catch (ex) {
//     console.log(ex);
//   }
// };

export default adminController;
