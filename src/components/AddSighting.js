import React from "react";
import Sightings from "./ShowSightings";
const AddSightingForm = () => {
  const [animal_id, setAnimalID] = React.useState(1);
  const [seen, setSeen] = React.useState("");
  const [healthy, setHealth] = React.useState(true);
  const [location, setLocation] = React.useState("");
  const [email, setEmail] = React.useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const body = {
      seen,
      healthy,
      location,
      email,
      animal_id,
    };

    fetch("http://localhost:9001/addSighting", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => Sightings.getSightings())
      .catch((e) => console.error(e.stack));
  };
  const [individuals, setIndividuals] = React.useState([]);

  function getIndividuals() {
    fetch("http://localhost:9001/individuals")
      .then((res) => res.json())
      .then((data) => {
        setIndividuals(data);
        setAnimalID(data[0].id);
      });
  }
  //console.log(species);
  React.useEffect(() => {
    getIndividuals();
  }, []);
  return (
    <section id="sighting" className="container-fluid">
      <div className="container">
        <div className="form col-xl-4 col-lg-4 col-xm-12 col-md-6">
          <h2>Add Sighting:</h2>
          <form onSubmit={submitForm}>
            <div className="form-group mb-2">
              <label>
                Animal nickname:
                <select
                  className="form-control"
                  name="animal_id"
                  onChange={(e) => setAnimalID(e.target.value)}
                >
                  {individuals.map(({ id, nickname }) => (
                    <option value={id}>{nickname}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="form-group mb-2">
              <label>
                Date seen:
                <input
                  className="form-control"
                  type="date"
                  name="seen"
                  onChange={(e) => setSeen(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group mb-2">
              <label>
                Location seen:
                <input
                  className="form-control"
                  type="text"
                  name="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group mb-2">
              <label>
                Did it look healthy?
                <select
                  className="form-control"
                  name="healthy"
                  onChange={(e) => setHealth(e.target.value)}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </label>
            </div>
            <div className="form-group mb-2">
              <label>
                Your Email:
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <input type="submit" value="Add Sighting" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddSightingForm;
