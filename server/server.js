const express = require("express");
const app = express();
const cors = require("cors");
const port = 9001;
require('dotenv').config()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to postgres
const pgp = require("pg-promise")({});

//const db = pgp("postgres://localhost:5432/animals");
//console.log(process.env.DB_URI);
const db = pgp({
  connectionString: process.env.DB_URI,
  ssl: { rejectUnauthorized: false }
});
app.get("/species", async (req, res) => {
  try {
    const species = await db.any("SELECT * FROM species;", [true]);
    res.json(species);
  } catch (e) {
    console.log(e);
  }
});

app.get("/species/:id", async (req, res) => {
  try {
    const specie = await db.any(
      `SELECT * FROM species WHERE id = ${req.params.id};`,
      [true]
    );
    res.json(specie[0]);
  } catch (e) {
    res.status(500);
    res.render("error", { error: e });
  }
});

app.get("/individuals", async (req, res) => {
  try {
    const individual = await db.any("SELECT * FROM individuals;", [true]);
   // console.log({ individual });
    res.json(individual);
  } catch (e) {
    console.log(e);
  }
});

app.get("/queryIndividuals", async (req, res) => {
  try {
    const individual = await db.any(
      "SELECT DISTINCT individuals.nickname, species.common_name, species.scientific_name, sightings.seen, sightings.healthy, sightings.location FROM individuals JOIN species ON individuals.species_id=species.id LEFT JOIN sightings ON individuals.id=sightings.animal_id ORDER BY individuals.nickname ASC;", [true]);
  //  console.log({ individual });
    res.json(individual);
  } catch (e) {
    console.log(e);
  }
});

app.get("/individuals/:id", async (req, res) => {
  try {
    const individual = await db.any(
      `SELECT * FROM individuals WHERE id = ${req.params.id};`,
      [true]
    );
    res.json(individual[0]);
  } catch (e) {
    res.status(500);
    res.render("error", { error: e });
  }
});

app.get("/sightings", async (req, res) => {
  try {
    const sighting = await db.any("SELECT * FROM sightings;", [true]);
    //console.log({ sighting });
    res.json(sighting);
  } catch (e) {
    console.log(e);
  }
});
app.get("/querySightings", async (req, res) => {
  try {
    const individual = await db.any(
      "SELECT individuals.nickname, species.common_name, sightings.seen, sightings.healthy, sightings.location, sightings.email FROM individuals JOIN species ON individuals.species_id=species.id JOIN sightings ON individuals.id=sightings.animal_id ORDER BY individuals.nickname ASC;", [true]);
    //console.log({ individual });
    res.json(individual);
  } catch (e) {
    console.log(e);
  }
});
app.get("/sightings/:id", async (req, res) => {
  try {
    const sighting = await db.any(
      `SELECT * FROM sightings WHERE id = ${req.params.id};`,
      [true]
    );
    res.json(sighting[0]);
  } catch (e) {
    res.status(500);
    res.render("error", { error: e });
  }
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
});

app.post('/addAnimal', async (req, res) => {
  const today = new Date();
  const {common_name, scientific_name, population, status_code } = req.body;
  db.none('INSERT INTO species (common_name, scientific_name, population, status_code, record_created) VALUES ($1, $2, $3, $4, $5)', [common_name, scientific_name, population, status_code, today])
  .then(() => {
      // success
      console.log('SUCCESS: User is added to the database')
  })
  .catch(error => {
      // error
      console.log('ERROR:', error)
  });
});
app.post('/addIndividual', function (req, res) {
  //res.send('POST request to the homepage')
  const today = new Date();
  const {nickname, species_id} = req.body;
  db.none('INSERT INTO individuals (nickname, record_created, species_id) values ($1,$2,$3)',[nickname, today, species_id]).then(data => {
      console.log("SUCCESS: Individual is added to the database"); // print new Individual id;
  })
  .catch(error => {
      console.log('ERROR:', error); // print error;
  });
});

app.post('/addSighting', async (req, res) => {
  //res.send('POST request to the homepage')
  const today = new Date();
  const { id, seen, healthy, location, email, animal_id  } = req.body;
  db.none('INSERT INTO sightings (seen, healthy, location, email, record_created, animal_id) values ($1,$2,$3,$4,$5,$6)',[seen, healthy, location, email, today, animal_id]).then(data => {
      console.log("SUCCESS: Sighting is added to the database"); // print new sight id;
  })
  .catch(error => {
      console.log('ERROR:', error); // print error;
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
