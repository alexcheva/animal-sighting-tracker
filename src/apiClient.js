export const getSpecies = async () => {
  const response = await fetch("/species");
  return response.json();
};

export const addAnimal = async (animal) => {
  const response = await fetch("/addAnimal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ common_name, scientific_name, population, status_code, record_created }),
  });
  return response.json();
};
