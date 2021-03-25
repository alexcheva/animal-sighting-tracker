import * as React from "react";
function Species() {

  const [species, setSpecies] = React.useState([]);

  function getSpecies() {
    fetch('http://localhost:9001/species').then(
      res => res.json()
    ).then(
      data => setSpecies(data)
    )
  }
  console.log(species);
  React.useEffect(
    () => {
      getSpecies();
    },[]
  )

  return (
    <section className="data">
      <h2>Species:</h2>
      <table className="table table-striped table-hover">
        <thead className="thead-light">
          <th>Common Name:</th>
          <th>Scientific Name:</th>
          <th>Population:</th>
          <th>Endangered Status:</th>
        </thead>
        <tbody>
          {species.map(({ id, common_name, scientific_name, population, status_code }) =>
            <tr key={id}>
              <th scope="row">{common_name}</th>
              <td>{scientific_name}</td>
              <td>{population}</td>
              <td>{status_code==="CR"?"Critically endangered" :
                  status_code==="EN"?"Endangered":
                  status_code === "VU" ? "Vulnerable" : "Unknown"}
              </td>
            </tr>)
            }
        </tbody>
      </table>
    </section>
  );
}

export default Species;
