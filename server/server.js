const express = require("express");
const app = express();
const cors = require("cors");
const port = 9001;

app.use(cors());

//connect to postgres
const pgp = require("pg-promise")({});
const db = pgp("postgres://localhost:5432/animals");

app.get("/species", async (req, res) => {
  try {
    const events = await db.any("SELECT * FROM species;", [true]);
    res.json(events);
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
    console.log({ individual });
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
    console.log({ sighting });
    res.json(sighting);
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

app.post('/addIndividual', function (req, res) {
  //res.send('POST request to the homepage')
  const ind = req.body;
  db.none('INSERT INTO individuals (nickname, record_created, species_id) values ($1,$2,$3)',[ind.nickname, ind.record_created, ind.species_id]).then(data => {
      console.log("SUCCESS: Individual is added to the database"); // print new Individual id;
  })
  .catch(error => {
      console.log('ERROR:', error); // print error;
  });
});

app.post('/addAnimal', function (req, res) {
  const animal = req.body;
  db.none('INSERT INTO species (common_name, scientific_name, population, status_code, record_created) VALUES ($1, $2, $3, $4, $5)', [animal.common_name, animal.scientific_name, animal.population, animal.status_code, animal.record_created])
  .then(() => {
      // success
      console.log('SUCCESS: User is added to the database')
  })
  .catch(error => {
      // error
      console.log('ERROR:', error)
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
