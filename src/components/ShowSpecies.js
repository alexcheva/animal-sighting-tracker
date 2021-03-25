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
    <section>
      <h2>Species:</h2>
      <table width="60%" align="center">
        <thead>
          <th>Common Name:</th>
          <th>Scientific Name:</th>
          <th>Population:</th>
          <th>Endangered Status:</th>
        </thead>
        <tbody>
          {species.map(({ id, common_name, scientific_name, population, status_code }) =>
            <tr key={id}>
              <td>{common_name}</td>
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
