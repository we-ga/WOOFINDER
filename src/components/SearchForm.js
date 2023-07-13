import React, { useState } from "react";
import "../styles/styles.css";

const SearchForm = ({ onSearch }) => {
  const [breed, setBreed] = useState("");
  // Wywołanie funkcji przekazanej przez props onSearch z wartością wpisaną w polu breed

  const handleSearch = () => {
    onSearch(breed);
  };

  return (
    <div class="input-container">
      <input
        class="search-input"
        placeholder="wpisz rasę psa"
        type="text"
        value={breed}
        //aktualizacja wartości 'breed'
        onChange={(e) => setBreed(e.target.value)}
      />
      <button class="search-button" onClick={handleSearch}>
        Szukaj
      </button>
    </div>
  );
};

export default SearchForm;
