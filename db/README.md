# Database instructions:
You can use the db.sql in this folder, or add it manually.

## To create DB manually:

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

``` sql
INSERT INTO species (common_name, scientific_name, population, status_code, record_created)
 VALUES 
('golden masked owl','Tyto aurantia', 2500,'EN', '2008-11-01'),('ring-tailed lemur','Lemur catta',	2400,	'EN', '2008-11-01'),
('koala', 'Phascolarctos cinereus', 43000, 'VU', '2008-11-01'),
('black rhino', 'Diceros bicornis', 4880, 'CR', '2008-11-01')  ('bonobos', 'Pan paniscus', 10000, 'EN', '2008-11-01'),
('arctic fox', 'Vulpes lagopus', 300000, 'VU', '2008-11-01');
 ```

```sql
INSERT INTO individuals (nickname, record_created, species_id)
VALUES
 ('Amiga', NOW(), 6), 
 ('Bellbottoms', NOW(), 6), 
 ('Blondie', NOW(), 2), 
 ('Boomhauer', NOW(), 1), 
 ('Bootsie', NOW(), 5), 
 ('Bubba', NOW(), 2), 
 ('Bubblegum', NOW(), 6), 
 ('Bud', NOW(), 6), 
 ('Bug', NOW(), 5), 
 ('Bunny', NOW(), 1), 
 ('Carrot', NOW(), 2), 
 ('Cheeto', NOW(), 4), 
 ('Chief', NOW(), 4), 
 ('Cindy Lou Who', NOW(), 5), 
 ('Con', NOW(), 2), 
 ('Cotton', NOW(), 1), 
 ('Cumulus', NOW(), 1), 
 ('Dear', NOW(), 3), 
 ('Dingo', NOW(), 3), 
 ('Dolly', NOW(), 5), 
 ('Doobie', NOW(), 5), 
 ('Dorito', NOW(), 6), 
 ('Double Double', NOW(), 7), 
 ('Dreamey', NOW(), 5), 
 ('Dumbledore', NOW(), 1), 
 ('Figgy', NOW(), 6), 
 ('Filly Fally', NOW(), 4), 
 ('Foxy Mama', NOW(), 6), 
 ('Freak', NOW(), 2), 
 ('Gordo', NOW(), 4), 
 ('Green Giant', NOW(), 5), 
 ('Hot Pepper', NOW(), 6), 
 ('Knucklebutt', NOW(), 3), 
 ('Hubby', NOW(), 2), 
 ('Lovey', NOW(), 1), 
 ('Lulu', NOW(), 8), 
 ('Manatee', NOW(), 6), 
 ('Marshmallow', NOW(), 2), 
 ('Matey', NOW(), 8), 
 ('Oreo', NOW(), 2), 
 ('Peep', NOW(), 3), 
 ('Pinkie', NOW(), 4), 
 ('Pork Chop', NOW(), 7), 
 ('Pretty Lady', NOW(), 1), 
 ('Princess Pea', NOW(), 7), 
 ('Rockette', NOW(), 4), 
 ('Rosie', NOW(), 2), 
 ('Senior', NOW(), 1), 
 ('Sherlock', NOW(), 2), 
 ('Shuttershy', NOW(), 6), 
 ('Skinny Jeans', NOW(), 1), 
 ('Smiley', NOW(), 4), 
 ('Swiss Miss', NOW(), 2), 
 ('Terminator', NOW(), 2), 
 ('Twinkie', NOW(), 3), 
 ('Zeno', NOW(), 3);
 ```
 ```sql
INSERT INTO sightings(seen, healthy, location, email, record_created, animal_id) 
VALUES
('2018-12-01 04:27:04', true, '34°16 N  108°54 E', 'drinkwhen@gmail.com', NOW(), 1), 
('2019-08-24 10:24:13', false, '67°51 N  20°13 E', 'meinieutility@gmail.com', NOW(), 2), 
('2018-08-26 01:03:03', true, 'Kumasi, Ghana', 'kneelabourer@gmail.com', NOW(), 3), 
('2020-02-07 11:01:49', false, 'Luanda, Angola', 'accomplisharctic@gmail.com', NOW(), 4), 
('2020-07-12 21:28:37', true, '69°41 N  18°57 E', 'genuineunlikely@gmail.com', NOW(), 5), 
('2020-07-12 21:28:37', false, '69°41 N  18°57 E', 'genuineunlikely@gmail.com', NOW(), 5), 
('2019-03-14 12:44:22', true, 'Kōfu, Japan', 'fishtax@gmail.com', NOW(), 6), 
('2018-03-14 04:45:23', false, 'Arequipa, Peru', 'octopusfan@gmail.com', NOW(), 7), 
('2018-08-29 09:57:32', false, 'Lilongwe, Malawi', 'impulsivealarming@gmail.com', NOW(), 8), 
('2020-05-16 03:52:26', true, '32°43 N  117°10 W', 'nobodyproblem@gmail.com', NOW(), 9);
```

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

### Extra values to test inside the app:
'polar bear', 'Ursus maritimus', 25000, 'VU', '2008-11-01'  
'mishka','2008-05-02', 4  
'2008-05-02', true, 'Russia', 'discover@wwl.com', '2010-09-03', 4  

'giant panda', 'Ailuropoda melanoleuca', 2000, 'VU', '2008-11-01'  
'bambi', '2008-05-02', 5  
'2008-05-02', true, 'China', 'discover@wwl.com', '2010-09-03', 5  