const express = require("express");
const app = express();
const cors = require("cors");
const port = 9001;

app.use(cors());

//connect to postgres
const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/DATABASENAME");

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
