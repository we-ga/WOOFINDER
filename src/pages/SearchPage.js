import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchDogImages } from "../services/dogApi";
import SearchForm from "../components/SearchForm";
import DogCard from "../components/DogCard";
import "../styles/styles.css";

const SearchPage = () => {
  const location = useLocation();
  const breedParam = new URLSearchParams(location.search).get("breed");
  const [breed, setBreed] = useState(breedParam || "");
  const [dogImage, setDogImage] = useState("");
  const [isBreedValid, setIsBreedValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Funkcja obsługująca wyszukiwanie obrazów psów dla danej rasy
    const handleSearch = async () => {
      try {
        const images = await fetchDogImages(breed);
        if (images.length > 0) {
          setDogImage(images[0]);
          setIsBreedValid(true);
        } else {
          setDogImage("");
          setIsBreedValid(false);
        }
      } catch (error) {
        console.error(error);
        setDogImage("");
        setIsBreedValid(false);
      }
    };

    handleSearch();
  }, [breed]);

  const handleSearch = (searchBreed) => {
    setBreed(searchBreed);
  };
  // Scrollowanie do góry strony
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Obsługa kliknięcia na nazwę rasy, przekierowanie do nowej ścieżki i przewinięcie do góry strony
  const handleBreedClick = (breed) => {
    navigate(`/search?breed=${encodeURIComponent(breed)}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="root-container">
      <div className="search-form-container">
        <SearchForm onSearch={handleSearch} />
      </div>
      {isBreedValid && dogImage && (
        <DogCard
          breed={breed}
          image={dogImage}
          onBreedClick={handleBreedClick}
        />
      )}
    </div>
  );
};

export default SearchPage;
