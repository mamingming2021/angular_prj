import mysql from "mysql";

let connection;

export const db = {
  connect: () => {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      socketPath: process.env.DB_SOCKET,
    });
    connection.connect();
  },

  query: (queryString, escapeValues) =>
    new Promise((resolve, reject) => {
      connection.query(queryString, escapeValues, (error, results, fields) => {
        if (error) reject(error);
        resolve({ results, fields });
      });
    }),
  end: () => connection.end(),
};
