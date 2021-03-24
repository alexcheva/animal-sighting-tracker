const SpeciesBlock = () => {
  const [species, setSpecies] = React.useState([]);

  const loadSpecies = async () => setSpecies(await apiClient.getSpecies());

  React.useEffect(() => {
    loadSpecies();
  }, []);

  return (
    <main className="App">
      <Species species={species} />
      <AddAnimal loadSpecies={loadSpecies} />
    </main>
  );
};

const Species = ({ species }) => (
  <ul>
    {species.map(({ id, common_name, scientific_name, population, status_code }) => (
      <li key={id}><em>{common_name}</em><span class="italic">{scientific_name}</span>Population: {population}, Status: {status_code}</li>
    ))}
  </ul>
);

const AddAnimal = ({ loadSpecies }) => {
  const [animal, setAnimal] = React.useState("");

  const canAdd = task !== "";

  const onSubmit = async (e) => {
    e.preventDefault();
    if (canAdd) {
      await apiClient.addAnimal(animal);
      loadSpecies();
      setAnimal("");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Add Species:{" "}
        <input onChange={(e) => setTask(e.currentTarget.value)} value={animal} />
      </label>
      <button disabled={!canAdd}>Add</button>
    </form>
  );
};

export default SpeciesBlock;