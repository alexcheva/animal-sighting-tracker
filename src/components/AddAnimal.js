import React from 'react';

const AddAnimalForm = () => {
  const [common_name, setCommon_name] = React.useState("");
  const [scientific_name, setScientific_name] = React.useState("");
  const [population, setPopulation] = React.useState("");
  const [status_code, setStatusCode] = React.useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    const body = {
      common_name,
      scientific_name,
      population,
      status_code
    };

    fetch(
      "http://localhost:9001/addAnimal",

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
  return (
    <section>
      <h2>Add Species:</h2>
      <form onSubmit={submitForm}>
        <label>
          Common name:
          <input type="text" name="common_name" onChange={e => setCommon_name(e.target.value)} />
        </label>
        <label>
            Scientific name:
          <input type="text" name="scientific_name" onChange={e => setScientific_name(e.target.value)} />
        </label>
        <label>
          Population:
          <input type="number" name="population" onChange={e => setPopulation(e.target.value)} />
        </label>
        <label>
          Endangered Status:
          <select name="status_code" onChange={e => setStatusCode(e.target.value)}>
            <option value="NA">Unknown</option>
            <option value="CR">Critically endangered</option>
            <option value="EN">Endangered</option>
            <option value="VU">Vulnerable</option>
          </select>
        </label>
        <input type="submit" value="Add Species" />
      </form>
    </section>
  );
};
export default AddAnimalForm;
