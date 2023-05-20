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
noteController.getNotes = async (req, res) => {
  try {
    let { note_id, doc_id } = req?.body;
    let input = { note_id, doc_id };
    // console.log("notes>", { input });
    const note_data = await noteModel.getNotes(input);
    res.status(200).json({
      note_data: note_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};
noteController.insertNote = async (req, res) => {
  try {
    let { note, date, docIDs, idCount, active } = req?.body;
    let input = { note, date, docIDs, idCount, active };
    // console.log({ input });

    const note_data = await noteModel.insertNote(input);
    res.status(200).json({
      note_data: note_data,
    });
  } catch (ex) {
    console.log(ex);
  }
};

export default noteController;
