import React, { useEffect, useState } from "react";
import { fetchDogBreeds } from "../services/dogApi";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const HomePage = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  // Pobieranie listy ras psów przy ładowaniu strony
  useEffect(() => {
    const fetchData = async () => {
      try {
        const breeds = await fetchDogBreeds();
        setDogBreeds(breeds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="root-container-home">
      <div className="list-container">
        <ul className="dog-list">
          {/* Mapowanie listy ras psów i tworzenie linków */}
          {dogBreeds.map((breed, index) => (
            <li key={index} className="dog-list-item">
              <Link to={`/search?breed=${encodeURIComponent(breed)}`}>
                {breed}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
