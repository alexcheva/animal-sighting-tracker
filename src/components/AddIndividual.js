import React from 'react';

const AddIndividualForm = () => {
  const [nickname, setNickname] = React.useState("");
  const [species_id, setSpeciesID] = React.useState(0);

  const submitForm = async (e) => {
    e.preventDefault();
    const body = {
      nickname,
      species_id
    };

    fetch(
      "http://localhost:9001/addIndividual",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e.stack));
  };
  const [species, setSpecies] = React.useState([]);

  function getSpecies() {
    fetch('http://localhost:9001/species').then(
      res => res.json()
    ).then(
      data => {
        setSpecies(data);
        setSpeciesID(data[0].id);
      }
    )
  }
  //console.log(species);
  React.useEffect(
    () => {
      getSpecies();
    },[]
  )
  return (
    <section>
      <h2>Add Individual:</h2>
      <form class="form-inline" onSubmit={submitForm}>
        <div class="form-group mb-2">
        <label>
          Nickname:
          <input class="form-control"type="text" name="nickname" onChange={e => setNickname(e.target.value)} />
          </label>
        </div>
        <div class="form-group mb-2">
        <label>
          Species:
          <select  class="form-control" name="species_id" onChange={e => setSpeciesID(e.target.value)}>
          {species.map(({ id, common_name }) =>
            <option value={id}>{common_name}</option>
             )
            }
          </select>
        </label>
        </div>
        <button type="submit" class="btn btn-primary mb-2">Add Individual</button>
      </form>
    </section>
  );
};
export default AddIndividualForm;