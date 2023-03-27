/* eslint-disable no-warning-comments */

import noteModel from "../models/note.model.js";

const noteController = {};

noteController.getNote = async (req, res) => {
  try {
    const note_data = await noteModel.getNote();
    res.status(200).json({
      note_data: note_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default noteController;
