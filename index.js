import app from "./config/express.js";
import d from "dotenv";
d.config();
try {
  app.listen(4000, () => {
    console.log(`Server started on 4000 check log /appserver.log`);
    // logger.info(
    //   `Server started on port   ( ) at ${new Date().toISOString()}`
    // );
  });
} catch (e) {
  console.log(e);
}

//  });
//}

// // create the connection to database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "ham242k24MYSQL$",
//   database: "hospital_pro",
// });
