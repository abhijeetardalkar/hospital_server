// /* eslint-disable global-require */
// // eslint-disable-next-line no-unused-vars
import path, { dirname } from "path";

import { fileURLToPath } from "url";
import fileupload from "express-fileupload";
// //const passport =  from './passport';
import express from "express";
import httpError from "http-errors";
import bodyParser from "body-parser";
// //const cookieParser =  from 'cookie-parser';
import compress from "compression";
// const methodOverride =  from 'method-override';
import cors from "cors";
import helmet from "helmet";
// const { POSTMAN_COLLECTION_URL } =  from '../utils/constants.js';
import routes from "../routes/index.route.js";
import fs from "fs";
// const config =  from './config';
// const logger =  from '../utils/apps/logger';
// const { handleError } =  from '../utils/apps/errorHandler';
// const httpLoggingMiddleware =  from '../middleware/http-logger';

// logger.info({ config });

const app = express();

// Choose where to serve the assets from
// const assetsDir = "../../assets/";
const assetsDir = "../public";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, assetsDir)));

// logger.info(`Assets Dir: ${assetsDir}`);
app.use(fileupload());
app.use(bodyParser.json({ limit: "2mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cookieParser());
app.use(compress());
// app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// app.use(passport.initialize());

// app.use(httpLoggingMiddleware);

// app.use('/api-docs', (req, res) => {
//     res.redirect(POSTMAN_COLLECTION_URL);
// });

// For debugging - Moved to individual routers that is where authentication happening
// app.use((req, res, next) => {
//    logger.info(/*req.user._id, */req,url, req.body);
//    next();
// });

// Request validation middleware
app.use((req, res, next) => {
  next();
});

// API router
app.use("/api/", routes);

// file upload

app.post("/upload", (req, res, next) => {
  // create folder if not there
  console.log("UPLOADING>>>", req.files);
  // console.log("OTHER>>>", );
  let uploadFile = req.files.file;
  const name = uploadFile.name;

  const folder = req.body.folder;
  // const md5 = uploadFile.md5();
  let ran = Date.now();
  const saveAs = `/${folder}/${ran}_${name}`;
  console.log({ __dirname });
  // uploadFile.mv(`${__dirname}/public/files/${saveAs}`, function (err) {
  uploadFile.mv(`public${saveAs}`, function (err) {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json({ status: "uploaded", name, saveAs });
  });
});

// const saveFile = (req, res) => {
//   console.log("UPLOADING>>>", req.files);
//   // console.log("OTHER>>>", );
//   let uploadFile = req.files.file;
//   const name = uploadFile.name;

//   const folder = req.body.folder;
//   // const md5 = uploadFile.md5();
//   let ran = Date.now();
//   const saveAs = `/${folder}/${ran}_${name}`;
//   console.log({ __dirname });
//   // uploadFile.mv(`${__dirname}/public/files/${saveAs}`, function (err) {
//   uploadFile.mv(`public${saveAs}`, function (err) {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     return res.status(200).json({ status: "uploaded", name, saveAs });
//   });
// };
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404);
  return next(err);
});

app.use("/", (req, res) => {
  console.log("dgfd");
  res.send("OK");
});

// error handler, send stacktrace only during development
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // customize Joi validation errors
  if (err.isJoi) {
    err.message = err.details.map((e) => e.message).join("; ");
    err.statusCode = 400;
  }

  handleError(err, res);
});

const handleError = (error, res) => {
  let { statusCode, message } = error;
  if (!statusCode) {
    statusCode = 500;
  }
  if (!message || message === "") {
    message = "Internal server error.";
  }
  res.status(statusCode).json({
    code: statusCode,
    message,
  });
};
export default app;
