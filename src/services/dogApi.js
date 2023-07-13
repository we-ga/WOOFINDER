export const fetchDogBreeds = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    const breeds = Object.keys(data.message);
    return breeds;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch dog breeds.");
  }
};

export const fetchDogImages = async (breed) => {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    const images = data.message;
    return images;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch dog images.");
  }
};
