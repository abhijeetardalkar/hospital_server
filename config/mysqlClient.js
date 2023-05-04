import mysql from "mysql2";

// const getConn = async () => {
//   // Create the connection pool. The pool-specific settings are the defaults
//   const pool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "12345",
//     database: "hospital",
//     // password: "ham242k24MYSQL$",
//     // database: "donor_network",
//     waitForConnections: true,
//     connectionLimit: 10,
//     maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
//     idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
//     queueLimit: 0,
//   });
//   const promisePool = pool.promise();
//   return promisePool;
// };
let sqlConn = null;
const createConn = async () => {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "hospital",
    // password: "ham242k24MYSQL$",
    // database: "donor_network",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
  });
  sqlConn = pool.promise();
};

createConn();
const getConn = async () => {
  // Create the connection pool. The pool-specific settings are the defaults

  return sqlConn;
};

export { getConn };
