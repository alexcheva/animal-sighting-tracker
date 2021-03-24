import * as React from "react";

function Sightings() {

  const [sightings, setSightings] = React.useState([]);

  function getSightings() {
    fetch('http://localhost:9001/sightings').then(
      res => res.json()
    ).then(
      data => setSightings(data)
    )
  }
  console.log(sightings);
  React.useEffect(
    () => {
      getSightings();
    },[]
  )

  return (
    <section>
      <h2>Sightings:</h2>
      <table width="90%" align="center">
        <tr>
          <th>Animal Nickname:</th>
          <th>Seen on:</th>
          <th>Healthy:</th>
          <th>Location seen:</th>
          <th>Queries:</th>
        </tr>
        {sightings.map(({ id, seen, healthy, location, email, record_created, animal_id }) =>
          <tr key={id}>
            <td>{animal_id}</td>
            <td>{new Date(seen).toDateString()}</td>
            <td>{healthy? "yes" : "no"}</td>
            <td>{location}</td>
            <td>{email}</td>
          </tr>)
        }
      </table>
    </section>
  );
}

export default Sightings;