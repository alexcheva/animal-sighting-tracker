# Animal Sighting Tracker
## PERN App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Client setup:

To install dependencies in the project directory, you can run:

`npm install`

To start the client server in the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Server setup:

To install dependencies in the server directory, you can run:

`npm install`

To start the express server in the server directory, you can run:

`npm start`

Runs the server on the PORT 9001.\
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

The server will reload if you make edits.\

## Postgres:

[Installing Postgres](https://github.com/Techtonica/curriculum/blob/main/databases/installing-postgresql.md)

[Postgres Cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)

[Postico for PostgreSQL](https://eggerapps.at/postico/)

### To open Postgres in terminal, after installation:

`psql`

### Creating database in Postgres:

`create database animals;`

### Connecting to the database we created:

`\c animals`

## Database instructions:


## Create Tables:

### Species table:

This app will store data about different endangered species (e.g. polar bears, tigers). For each species, it should be able to store:

#### Species
id - (primary) integer unique<br />
common_name - varchar<br />
scientific_name - varchar unique<br />
population - integer optional<br />
status_code - varchar(2) optional<br />
record_created = timestamp<br />

``` sql
CREATE TABLE species (
  id SERIAL PRIMARY KEY,
  common_name VARCHAR (50) NOT NULL,
  scientific_name VARCHAR (100) NULL,
  population INTEGER NULL,
  status_code VARCHAR (2) NULL,
  record_created TIMESTAMP
);
```

### Individuals table:
Scientists track some individual animals of endangered species, so we want to store data about each individual as well
#### Individuals
id - (primary) integer unique\
nickname -  text - unique\
Species_id - foreign key species id\
record_created - timestamp

``` sql
CREATE TABLE individuals (
  id SERIAL PRIMARY KEY,
  nickname VARCHAR (50) UNIQUE,
  record_created TIMESTAMP NOT NULL,
  species_id SERIAL NOT NULL,
	CONSTRAINT fk_species
		FOREIGN KEY(species_id)
			REFERENCES species(id)
);
```

### Sightings table:
When scientists spot an individual they’re tracking, they want to store some information about the sighting in the database:
#### Sightings 
id - primary key unique<br />
seen - timestamp (could be in the past)<br />
animal_id - integer foreign key<br />
location - text<br />
healthy - bool<br />
email - text <br />
created - timestamp<br />


``` sql
CREATE TABLE sightings (
  id SERIAL PRIMARY KEY,
  seen TIMESTAMP,
  healthy BOOLEAN,
  location TEXT,
  email TEXT CHECK(email LIKE '%@%') NULL,
  record_created TIMESTAMP,
  animal_id SERIAL NOT NULL,
	CONSTRAINT fk_animal
		FOREIGN KEY(animal_id)
			REFERENCES individuals(id)
);
```
## Sample Data:
``` sql
INSERT INTO species (common_name, scientific_name, population, status_code, record_created)
 VALUES ('bengal tiger', 'Panthera tigris tigris', 2500, 'EN', '2008-11-01');
INSERT INTO individuals (nickname, record_created, species_id)
 VALUES ('spotty', '2008-05-02', 1);
INSERT INTO sightings (seen, healthy, location, email, record_created, animal_id)
 VALUES ('2008-05-02', true, 'Asia', 'discover@wwl.com', '2010-09-03', 1);

INSERT INTO species (common_name, scientific_name, population, status_code, record_created)
  VALUES ('snow leopard', 'Panthera uncia', 5000, 'VU', '2008-11-01');
INSERT INTO individuals (nickname, record_created, species_id)
  VALUES ('majestic', '2008-05-02', 2);
INSERT INTO sightings (seen, healthy, location, email, record_created, animal_id)
  VALUES ('2008-05-02', true, 'Mongolia', 'discover@wwl.com', '2010-09-03', 2);

INSERT INTO species (common_name, scientific_name, population, status_code, record_created)
  VALUES ('red panda', 'Ailurus fulgens', 10000, 'EN', '2008-11-01');
INSERT INTO individuals (nickname, record_created, species_id)
  VALUES ('fiery queen', '2008-05-02', 3);
INSERT INTO sightings (seen, healthy, location, email, record_created, animal_id)
  VALUES ('2008-05-02', true, 'China', 'discover@wwl.com', '2010-09-03', 3);
```
### Extra values to test inside the app:
'polar-bear', 'Ursus maritimus', 25000, 'VU', '2008-11-01'  
'mishka','2008-05-02', 4  
'2008-05-02', true, 'Russia', 'discover@wwl.com', '2010-09-03', 4  

'giant-panda', 'Ailuropoda melanoleuca', 2000, 'VU', '2008-11-01'  
'bambi', '2008-05-02', 5  
'2008-05-02', true, 'China', 'discover@wwl.com', '2010-09-03', 5  
### Status Codes:
CR, EN, VU\
status: "Critically endangered"\
abbreviation: "CR"\
description: "Faces an extremely high risk of extinction in the immediate future."

status: "Endangered"\
abbreviation: "EN"\
description: "Faces a high risk of extinction in the near future."

status: "Vulnerable"\
abbreviation: "VU"\
description: "Faces a high risk of endangerment in the medium term."

### Extra Endangered Species to add:
blue-whale\
asian-elephant\
gorilla\
orangutan\
sea-turtle\
black-rhino\
african-penguin

