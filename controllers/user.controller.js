/* eslint-disable no-warning-comments */

import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
const userController = {};
// with hash
// userController.userLogin = async (req, res) => {
//   try {
//     let { user_type, login_id, password } = req?.body;
//     let plain_password = password;
//     let input = { user_type, login_id };
//     console.log({ input });

//     const user_data = await userModel.userLogin(input);
//     console.log({ user_data });
//     if (user_data && user_data?.length) {
//       let hashed = user_data[0].password;
//       bcrypt.compare(plain_password, hashed).then((result) => {
//         if (result) {
//           res.status(200).json({
//             user_data: user_data,
//           });
//         } else {
//           res.status(200).json({
//             user_data: null,
//           });
//         }
//       });
//     } else {
//       res.status(200).json({
//         user_data: null,
//       });
//     }
//     // res.status(200).json({
//     //   user_data: user_data,
//     // });
//   } catch (ex) {
//     console.log(ex);
//   }
// };
userController.userLogin = async (req, res) => {
  try {
    let { user_type, login_id, password } = req?.body;
    let input = { user_type, login_id, password };
    console.log({ input });
    const user_data = await userModel.userLogin(input);
    console.log({ user_data });
    res.status(200).json({
      user_data: user_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default userController;
