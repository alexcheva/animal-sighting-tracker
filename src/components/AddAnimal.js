const addAnimalForm = () => {
  return (
    <section>
      <h2>Add Species:</h2>
      <form action="/addAnimal" method="POST">
        <label>Common name:
          <input type='text' name='common_name' />
        </label>
        <label>Scientific name:
          <input type='text' name='scientific_name' />
        </label>
        <label>Population:
          <input type='number' name='population' />
        </label>
        <label>Endangered Status:
          <select name='status_code'>
            <option value="NA">Unknown</option>
            <option value="CR">Critically endangered</option>
            <option value="EN">Endangered</option>
            <option value="VU">Vulnerable</option>
          </select>
        </label>
        <input type='hidden' name='record_created' value={new Date()} />
        <input type="submit" value="Add Species" />
        </form>
      </section>
  );
}
export default addAnimalForm;