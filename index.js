import app from './config/express.js';

try{
  app.listen(4000, () => {
    console.log(`Server started check log /appserver.log`);
    // logger.info(
    //   `Server started on port   ( ) at ${new Date().toISOString()}`
    // );
  });
}catch(e){
  console.log(e)
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
