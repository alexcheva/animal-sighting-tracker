import React from "react";

const AddIndividualForm = () => {
  const [nickname, setNickname] = React.useState("");
  const [species_id, setSpeciesID] = React.useState(0);

  const submitForm = async (e) => {
    e.preventDefault();
    const body = {
      nickname,
      species_id,
    };

    fetch("http://localhost:9001/addIndividual", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e.stack));
  };
  const [species, setSpecies] = React.useState([]);

  function getSpecies() {
    fetch("http://localhost:9001/species")
      .then((res) => res.json())
      .then((data) => {
        setSpecies(data);
        setSpeciesID(data[0].id);
      });
  }
  //console.log(species);
  React.useEffect(() => {
    getSpecies();
  }, []);
  return (
    <section id="individual" className="container-fluid">
      <div className="container">
        <div className="form col-xl-4 col-lg-4 col-xm-12 col-md-6">
          <h2>Add Individual:</h2>
          <form onSubmit={submitForm}>
            <div className="form-group mb-2">
              <label>
                Nickname:
                <input
                  className="form-control"
                  type="text"
                  name="nickname"
                  onChange={(e) => setNickname(e.target.value)}
                />
              </label>
            </div>
            <div className="form-group mb-2">
              <label>
                Species:
                <select
                  className="form-control"
                  name="species_id"
                  onChange={(e) => setSpeciesID(e.target.value)}
                >
                  {species.map(({ id, common_name }) => (
                    <option value={id}>{common_name}</option>
                  ))}
                </select>
              </label>
            </div>
            <input type="submit" value="Add Individual" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default AddIndividualForm;
