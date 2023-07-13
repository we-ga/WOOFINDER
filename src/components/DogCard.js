import React, { useState, useEffect } from "react";
import { fetchDogImages, fetchDogBreeds } from "../services/dogApi";

const GENERAL_BREED_DESCRIPTION =
  "Ten pies to wierny i przyjacielski czworonóg, który świetnie czuje się w roli rodzinnego towarzysza. Dobrze dogaduje się z dziećmi, uwielbia pieszczoty i wspólne zabawy. Jest łatwy w prowadzeniu, choć bywa uparty. Sprawdzi się zarówno w małym mieszkaniu jak i w domu z ogrodem.";

const DogCard = ({ breed }) => {
  // Sprawdzenie poprawności rasy psa
  const [image, setImage] = useState("");
  const [breedName, setBreedName] = useState("");
  const [isBreedValid, setIsBreedValid] = useState(true);

  useEffect(() => {
    const checkBreedValidity = async () => {
      try {
        const breeds = await fetchDogBreeds();
        setIsBreedValid(breeds.includes(breed));
      } catch (error) {
        console.error(error);
        setIsBreedValid(false);
      }
    };
    // Pobranie obrazka psa
    const getDogImage = async () => {
      try {
        const images = await fetchDogImages(breed);
        if (images && images.length > 0) {
          setImage(images[0]);
        } else {
          setImage("");
        }
      } catch (error) {
        console.error(error);
        setImage("");
      }
    };
    // Sprawdzenie poprawności rasy i pobranie obrazka po zmianie wartości `breed`
    if (breed.length > 0) {
      checkBreedValidity();
      getDogImage();
      setBreedName(breed);
    }
  }, [breed]);

  if (breed.length === 0) {
    return null; // Jeśli search jest pusty, nie wyświetlaj komponentu DogCard
  }

  return (
    <div className="dog-card">
      {isBreedValid ? (
        // Wyświetlanie informacji o rasie psa
        <>
          {image ? (
            <img className="dog-image" src={image} alt="Dog" />
          ) : (
            <p>Nie znaleziono zdjęcia dla rasy {breedName}.</p>
          )}
          <div className="dog-info">
            <h3 className="breed-name">{breedName}</h3>
            <p className="breed-description">{GENERAL_BREED_DESCRIPTION}</p>
          </div>
        </>
      ) : (
        // Komunikat o nieznalezionej rasie psa
        <p class="no-breed-info">
          Nie znaleziono rasy <span class="no-breed-name">{breedName}</span> w
          bazie danych.
        </p>
      )}
    </div>
  );
};

export default DogCard;
