import * as React from "react";

function Sightings() {

  const [sightings, setSightings] = React.useState([]);

  function getSightings() {
    fetch('http://localhost:9001/querySightings').then(
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
          <th>Species:</th>
          <th>Seen on:</th>
          <th>Healthy:</th>
          <th>Location seen:</th>
          <th>Queries:</th>
        </tr>
        {sightings.map(({ id, nickname, common_name, seen, healthy, location, email, animal_id }) =>
          <tr key={id}>
            <td>{nickname}</td>
            <td>{common_name}</td>
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