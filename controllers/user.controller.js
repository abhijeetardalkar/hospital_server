/* eslint-disable no-warning-comments */

import userModel from "../models/user.model.js";

const userController = {};

userController.userLogin = async (req, res) => {
  try {
    let { user_type, login_id, password } = req?.body;
    let input = { user_type, login_id, password };
    console.log({ input });
    const user_data = await userModel.userLogin(input);
    res.status(200).json({
      user_data: user_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default userController;
