import * as React from "react";

function Individuals() {

  const [individuals, setIndividuals] = React.useState([]);

  function getIndividuals() {
    fetch('http://localhost:9001/queryIndividuals').then(
      res => res.json()
    ).then(
      data => setIndividuals(data)
    )
  }
  console.log(individuals);
  React.useEffect(
    () => {
      getIndividuals();
    },[]
  )

  return (
    <section>
      <h2>Individuals:</h2>
      <table width="90%" align="center">
        <tr>
          <th>Animal Nickname:</th>
          <th>Species Common Name:</th>
          <th>Species Scientific Name:</th>
          <th>Last seen:</th>
          <th>Location:</th>
          <th>Healthy</th>
        </tr>
        {individuals.map(({ id, nickname, common_name, scientific_name, seen, healthy, location }) =>
          <tr key={id}>
            <td>{nickname}</td>
            <td>{common_name}</td>
            <td>{scientific_name}</td>
            <td>{seen?new Date(seen).toDateString():""}</td>
            <td>{location}</td>
            <td>{healthy===true? "yes" : healthy===false?"no" : "unknown"}</td>
          </tr>)
        }
      </table>
    </section>
  );
}

export default Individuals;