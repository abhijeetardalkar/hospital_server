import Cryptr from "cryptr";
let SECRET_KEY = null,
  cryptr = null;

const SALT_ROUND = 10;
function init() {
  SECRET_KEY = process.env.SECRET;
  console.log("KEY++++++", SECRET_KEY);
  //   var iv = Cryptr.randomBytes(16);
  cryptr = new Cryptr(SECRET_KEY);
}

const encryptField = (field, cryptr) => {
  //   init();
  return cryptr.encrypt(field);
};
const decryptField = (field, cryptr) => {
  //   init();
  //   console.log("Decrypting---", field);
  return cryptr.decrypt(field);
};

const revertEncryption = (doc_data, fields, cryptr) => {
  doc_data?.forEach((element) => {
    // console.log({ element });
    element.remark = decryptField(element["remark"], cryptr);
    element.symptom_desc = decryptField(element["symptom_desc"], cryptr);
    element.treatment_desc = decryptField(element["treatment_desc"], cryptr);
  });
  //   return doc_data;
};

export { encryptField, decryptField, revertEncryption, SALT_ROUND };
